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
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import FormLiquidacionPersonal from "@/components/sepelio/servicios/FormLiquidacionPersonal";
import { data } from "autoprefixer";

function liquidacion(props) {
  const [operadores, guardarOperadores] = useState([]);
  const [tareas, guardarTareas] = useState([]);
  const [guardias, guardarGuardias] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [opSel, guardarOpSel] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerInfo = async () => {
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
  };

  const handleChange = (flag, value) => {
    if (flag === "operador") {
      guardarOpSel(value);
    }
  };

  const buscarLiquidacion = async () => {
    guardarErrores(null);

    if (opSel === "") {
      guardarErrores(
        "Debes seleccionar al operador para traer su liquidacion pendiente"
      );
    } else {
      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "traer tareas operador",
            operador: opSel,
          },
        })
        .then((res) => {
          if (res.data) {
            guardarTareas(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el listado de tareas");
        });

      await axios
        .get("/api/sepelio/guardias", {
          params: {
            f: "traer guardias operador",
            operador: opSel,
          },
        })
        .then((res) => {
          if (res.data) {
            guardarGuardias(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el listado de guardias");
        });
    }
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

  const pagarLiquidacion = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres liquidar las tareas del operador?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let dataT = {
              idtarea: 0,
              liquidado: true,
              fecha_liquidacion: moment().format("YYYY-MM-DD"),
              operadorliq: usu.usuario,
              f: "liquidar tarea",
            };

            let dataG = {
              idturno: 0,
              liquidado: 1,
              fecha_liquidacion: moment().format("YYYY-MM-DD"),
              operadorliq: usu.usuario,
              f: "liquidar guardia 2",
            };

            for (let i = 0; i < tareas.length; i++) {
              dataT.idtarea = tareas[i].idtareas;

              axios
                .put(`/api/sepelio/servicios`, dataT)
                .then((res) => {
                  if (res.status === 200) {
                    let accionHis = `Se liquido la tarea ID ${dataT.idtarea} del operador: ${opSel} por un monto de ${tareas[i].monto} perteneciente al informe de sepelio ID: ${tareas[i].idinforme}.`;

                    registrarHistoria(accionHis, usu.usuario);

                    registroLiq(
                      tareas[i].operador,
                      tareas[i].tarea,
                      moment(tareas[i].inicio).format("YYYY-MM-DD"),
                      tareas[i].monto
                    );
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al liquidar la tarea");
                });
            }

            for (let i = 0; i < guardias.length; i++) {
              dataG.idturno = guardias[i].idturno;

              axios
                .put(`/api/sepelio/guardias`, dataG)
                .then((res) => {
                  if (res.status === 200) {
                    let accionHis = `Se liquido la guardia ID ${dataG.idturno} del operador: ${opSel} por un monto de ${guardias[i].importe}.`;

                    registrarHistoria(accionHis, usu.usuario);

                    registroLiq(
                      guardias[i].operador,
                      `Guardia ${guardias[i].lugar}`,
                      moment(guardias[i].inicio).format("YYYY-MM-DD"),
                      guardias[i].importe
                    );
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al liquidar la guardia");
                });
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El detalle generado, no fue impactado");
          },
        },
      ],
    });
  };

  const registroLiq = async (emp, con, fec, imp) => {
    let data = {
      fecha: moment().format("YYYY-MM-DD"),
      empleado: emp,
      concepto: con,
      fecha_concepto: fec,
      importe: imp,
      operador: usu.usuario,
      f: "liquidacion registro",
    };

    await axios
      .post("/api/sepelio/liquidaciones", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Registro de liquidacion generado");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el registro de liquidacion");
      });
  };

  useSWR("/api/sepelio/servicios", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormLiquidacionPersonal
            operadores={operadores}
            errores={errores}
            handleChange={handleChange}
            buscarLiquidacion={buscarLiquidacion}
            tareas={tareas}
            guardias={guardias}
            opSel={opSel}
            calcTotal={calcTotal}
            pagarLiquidacion={pagarLiquidacion}
          />
        </>
      )}
    </>
  );
}

export default liquidacion;
