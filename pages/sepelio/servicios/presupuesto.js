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
import { FormNuevoServicio } from "@/components/sepelio/servicios/FormNuevoServicio";
import Router, { useRouter } from "next/router";
import FormPresupuesto from "@/components/sepelio/servicios/FormPresupuesto";
import jsCookie from "js-cookie";

function presupuesto(props) {
  let apoderadoRef = React.createRef();
  let domicilioRef = React.createRef();
  let totalRef = React.createRef();
  let anticipoRef = React.createRef();
  let telefonoRef = React.createRef();

  const [servicio, guardarServicio] = useState(null);
  const [detalleSel, guardarDetalleSel] = useState("");
  const [cuotasSel, guardarCuotasSel] = useState("");
  const [coefSel, guardarCoefSel] = useState("");
  const [cuoMenInt, guardarCuoMenInt] = useState(0);
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idservicio) {
    jsCookie.set("idservicio", router.query.idservicio, { expires: 1 });
  }

  const traerInfo = async () => {
    if (jsCookie.get("idservicio")) {
      await axios
        .get(`/api/sepelio/servicios`, {
          params: {
            f: "legajo servicio",
            id: jsCookie.get("idservicio"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarServicio(res.data[0]);
          }
        })
        .catch((error) => {
          toast.error("Ocurrio un error al generar el listado");
          console.log(error);
        });
    }
  };

  const handleChange = (f, value) => {
    if (f === "descri") {
      guardarDetalleSel(value.target.value);
    } else if (f === "cuotas") {
      let cuotas = value.substring(0, 1);

      let coef = value.substring(2);

      guardarCuotasSel(cuotas);

      guardarCoefSel(coef);
    }
  };

  const calcCuotas = () => {
    let total = parseFloat(totalRef.current.value);

    let anti = parseFloat(anticipoRef.current.value);

    if (totalRef.current.value === "" || anticipoRef.current.value === "") {
      toast.warning("Debes ingresar el MONTO TOTAL DEL SERVICIO y el ANTICIPO");
    } else if (cuotasSel === "") {
      toast.warning("Debes seleccionar el PLAN DE CUOTAS");
    } else {
      let cuotas = parseInt(cuotasSel);

      let coef = parseFloat(coefSel);

      let pago = total - anti;

      let cuoMen = pago / cuotas;

      let cuoInt = cuoMen * coef;

      guardarCuoMenInt(cuoInt);
    }
  };

  const regPresupuesto = async () => {
    guardarErrores(null);

    let data = {
      fecha: moment().format("YYYY-MM-DD"),
      idservicio: jsCookie.get("idservicio"),
      apoderado: apoderadoRef.current.value,
      domicilio: domicilioRef.current.value,
      telefono: telefonoRef.current.value,
      detalle: detalleSel,
      total: totalRef.current.value,
      anticipo: anticipoRef.current.value,
      cuotas: cuotasSel,
      saldo: cuoMenInt,
      operador: usu.usuario,
      f: "reg presupuesto servicio",
    };

    if (data.apoderado === "") {
      guardarErrores("Debes ingresar el apellido y nombre del apoderado");
    } else if (data.total === "") {
      guardarErrores("Debes ingresar el monto total del servicio");
    } else if (data.anticipo === "") {
      guardarErrores("Debes ingresar el anticipo");
    } else if (data.cuotas === "") {
      guardarErrores("Debes elegir el plan de cuotas");
    } else {
      console.log(data);
      await axios
        .post(`/api/sepelio/servicios`, data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("El presupuesto fue registrado con exito");

            let accionHis = `Se cargo el presupuesto ID: ${res.data.idpresupuesto} del servicio N° ${data.idservicio}, extinto ${servicio.apellido}, ${servicio.nombre} - DNI: ${servicio.dni}. Total servicio $${data.total}, anticipo $${data.anticipo} y el saldo abonaria en ${data.cuotas} cuotas de ${data.saldo}.`;

            registrarHistoria(accionHis, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar el persupuesto");
        });
    }
  };

  useSWR("/api/sepelio/ataudes", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {servicio ? (
            <>
              <FormPresupuesto
                idserv={jsCookie.get("idservicio")}
                servicio={servicio}
                apoderadoRef={apoderadoRef}
                domicilioRef={domicilioRef}
                telefonoRef={telefonoRef}
                totalRef={totalRef}
                anticipoRef={anticipoRef}
                handleChange={handleChange}
                calcCuotas={calcCuotas}
                cuoMenInt={cuoMenInt}
                cuotasSel={cuotasSel}
                errores={errores}
                regPresupuesto={regPresupuesto}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
}

export default presupuesto;
