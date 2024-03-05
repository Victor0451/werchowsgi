import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment/moment";
import { registrarHistoria } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import FormLiquidacionGuardia from "@/components/sepelio/guardias/FormLiquidacionGuardia";

function Liquidacion(props) {
  let inicioRef = React.createRef();
  let finRef = React.createRef();

  const [operadores, guardarOperadores] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [lugarSel, guardarLugarSel] = useState("");
  const [opSel, guardarOpSel] = useState("");
  const [feriadoSel, guardarFeriadoSel] = useState("");
  const [valorHora, guardarValorHora] = useState([]);
  const [listGuar, guardarListGuar] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = (flag, value) => {
    if (flag === "lugar") {
      guardarLugarSel(value);
    } else if (flag === "feriado") {
      guardarFeriadoSel(value);
    } else if (flag === "operador") {
      guardarOpSel(value);
    }
  };

  const regPlanificacion = async () => {
    guardarErrores(null);

    let data = {
      lugar: lugarSel,
      inicio: moment(inicioRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      fin: moment(finRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      horas: "",
      feriado: feriadoSel,
      mes: moment().format("MM"),
      ano: moment().format("YYYY"),
      operador: opSel,
      importe: 0,
      f: "nueva liquidacion",
    };

    if (data.lugar === "") {
      guardarErrores(
        "Debes seleccionar el lugar donde se realizara la guardia"
      );
    } else if (data.inicio === "") {
      guardarErrores("Debes ingresar la fecha y hora de inicio de la guardia");
    } else if (data.fin === "") {
      guardarErrores(
        "Debes ingresar la fecha y hora de finalizacion de la guardia"
      );
    } else if (data.feriado === "") {
      guardarErrores(
        "Debes seleccionar si la fecha de la guardia es en un feriado o no"
      );
    } else if (data.operador === "") {
      guardarErrores("Debes seleccionar al operador afectado a la guardia");
    } else {
      data.horas = moment(data.fin).diff(moment(data.inicio), "hour");

      if (data.feriado === false) {
        if (
          (moment(data.inicio).format("dd") === "Sa" &&
            moment(data.inicio).format("HH") > 14) ||
          moment(data.inicio).format("dd") === "Su"
        ) {
          data.importe = data.horas * parseFloat(valorHora[0].finde);
        } else {
          data.importe = data.horas * parseFloat(valorHora[0].dias_habiles);
        }
      } else if (data.feriado === true) {
        data.importe = data.horas * parseFloat(valorHora[0].finde);
      }

      await axios
        .post("/api/sepelio/guardias", data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Se registro la planificacion con exito");

            let accion = `Se registro la planificacion de guardia: ID ${res.data.idturno}, para: ${data.operador}, inicia ${data.inicio}, termina ${data.fin}, correspondiente al mes ${data.mes_planificacion}.`;
            registrarHistoria(accion, usu.usuario);

            traerDatos();
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registra esta planificacion");
        });
    }
  };

  const traerDatos = async () => {
    await axios
      .get("/api/sepelio/caja", {
        params: {
          f: "traer operadores",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarOperadores(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay operadores registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de operadores");
      });

    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "traer valor guardia",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarValorHora(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay tareas registradas");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el valor de las guardias");
      });

    await axios
      .get("/api/sepelio/guardias", {
        params: {
          f: "traer guardias",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarListGuar(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay guardias registradas");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de guardias");
      });
  };

  const eliminarLiquidacion = async (id) => {
    await confirmAlert({
      title: "Atencion",
      message: "¿Seguro quieres eliminar la guardia seleccionada?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete("/api/sepelio/guardias", {
                params: {
                  idturno: id,
                  f: "eliminar guardia",
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Liquidacion eliminada");

                  traerDatos();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al eliminar la guardia liquidada"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La guardia seleccionada no fue eliminada");
          },
        },
      ],
    });
  };

  const calcTotal = (arr, f) => {
    let total = 0;

    if (f === "t") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].monto);
      }
    } else if (f === "g") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].importe);
      }
    }

    return total.toFixed(2);
  };

  useSWR("/api/sepelio/guardias", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormLiquidacionGuardia
            operadores={operadores}
            errores={errores}
            handleChange={handleChange}
            regPlanificacion={regPlanificacion}
            inicioRef={inicioRef}
            finRef={finRef}
            listGuar={listGuar}
            eliminarLiquidacion={eliminarLiquidacion}
            calcTotal={calcTotal}
          />
        </>
      )}
    </>
  );
}

export default Liquidacion;
