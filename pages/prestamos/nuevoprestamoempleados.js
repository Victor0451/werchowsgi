import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import { FormNuevoPrestamoEmpleado } from "@/components/prestamos/FormNuevoPrestamoEmpleado";

export default function nuevoprestamoempleados() {
  const [capital, guardarCapital] = useState([]);
  const [planCuotas, guardarPlanCuotas] = useState([]);
  const [tasas, guardarTasas] = useState([]);
  const [empleados, guardarEmpleados] = useState([]);
  const [planSelec, guardarPlanSelec] = useState("");
  const [capSelec, guardarCapSelec] = useState("");
  const [empSelec, guardarEmpSelec] = useState("");
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [capiNoAut, guardarCapiNoAut] = useState(true);
  const [flag, guardarFlag] = useState(false);
  const [capADev, guardarCapADev] = useState(0);
  const [cuoPrest, guardarCuoPrest] = useState(0);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get("/api/prestamos", {
        params: {
          f: "tasas emp",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarTasas(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al tarer las tasas");
      });

    await axios
      .get("/api/prestamos", {
        params: {
          f: "capital emp",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarCapital(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al tarer el listado de capitales");
      });

    await axios
      .get("/api/prestamos", {
        params: {
          f: "plan cuotas",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarPlanCuotas(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al tarer los planes de cuotas");
      });

    await axios
      .get("/api/prestamos", {
        params: {
          f: "traer empleados",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          guardarEmpleados(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al tarer el listado de empleados");
      });
  };

  const handleChange = (f, value) => {
    if (f === "plan") {
      guardarPlanSelec(value);
    } else if (f === "cap") {
      guardarAlertas(null);

      guardarCapSelec(value.capital);

      if (value.autorizacion === false) {
        guardarAlertas(
          "ESTE CAPITAL REQUIERE SI O SI AUTORIZACION POR PARTE DE LA GERENCIA."
        );
        toast.warning(
          "Este capital requiere autorizacion por parte de la gerencia"
        );
        guardarCapiNoAut(false);
      }
    } else if (f === "empleado") {
      guardarEmpSelec(value);
    }
  };

  const simularPrestamo = () => {
    guardarFlag(false);
    guardarErrores(null);

    if (capSelec === "") {
      guardarErrores("Debes Seleccionar un capital");
    } else if (planSelec === "") {
      guardarErrores("Debes Seleccionar un plan de cuotas");
    } else {
      let principal = parseInt(capSelec);

      let payments = parseInt(planSelec);

      let x = 0;
      let monthly = 0;

      let tasa = 0;

      tasa = tasas[0].tasa / 100 / 12;

      x = Math.pow(1 + tasa, payments);
      monthly = ((principal * x * tasa) / (x - 1)).toFixed(0);

      guardarCuoPrest(monthly);

      let capadev = monthly * payments;

      guardarCapADev(capadev);

      guardarFlag(true);
    }
  };

  const planPagos = async (pres, id) => {
    let plan = {
      idprestamo: id,
      cuota: "",
      importe: pres.cuota_mensual,
      fecha_cobro: moment().format("YYYY-MM-DD"),
      estado: false,
      f: "reg plan pagos",
    };

    for (let i = 1; i <= pres.plan_cuotas; i++) {
      plan.cuota = i;
      plan.fecha_cobro = moment().add(i, "months").format("YYYY-MM-DD");

      await axios.post(`/api/prestamos`, plan);
    }
  };

  const registrarPrestamo = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres registrar el prestamo?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              empleado: empSelec,
              fecha_solicitud: moment().format("YYYY-MM-DD"),
              capital: capSelec,
              plan_cuotas: planSelec,
              cuota_mensual: cuoPrest,
              capital_dev: capADev,
              inicia: moment().add(1, "months").format("MM/YYYY"),
              termina: moment().add(planSelec, "months").format("MM/YYYY"),
              estado: "PENDIENTE",
              capinoaut: capiNoAut,
              f: "reg prestamo emp",
            };

            axios
              .post(`/api/prestamos`, data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Prestamo registrado correctamente");

                  planPagos(data, res.data.idprestamo);

                  let accionHis = `Se registro el prestamo ${res.data.idprestamo}, del empleado ${data.empleado} por un capital de ${data.capital} en ${data.plan_cuotas} cuotas.`;

                  registrarHistoria(accionHis, usu.usuario);

                  // setTimeout(() => {

                  //     Router.push("/prestamos/listadoprestamosempleados")

                  // }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al confeccionar el prestamo");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("El subsidio fue cancelado", "ATENCION");
          },
        },
      ],
    });
  };

  useSWR("/api/prestamos", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormNuevoPrestamoEmpleado
            alertas={alertas}
            errores={errores}
            capital={capital}
            planCuotas={planCuotas}
            empleados={empleados}
            handleChange={handleChange}
            simularPrestamo={simularPrestamo}
            registrarPrestamo={registrarPrestamo}
            flag={flag}
            cuoPrest={cuoPrest}
            capADev={capADev}
            planSelec={planSelec}
            capSelec={capSelec}
          />
        </>
      )}
    </>
  );
}
