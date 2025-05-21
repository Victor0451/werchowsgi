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
import FormInformeServicio from "@/components/sepelio/servicios/FormInformeServicio";

function informe(props) {
  let inicioRef = React.createRef();
  let finRef = React.createRef();
  let importeRef = React.createRef();

  const [servicio, guardarServicio] = useState(null);
  const [operadores, guardarOperadores] = useState([]);
  const [tareas, guardarTareas] = useState([]);
  const [gastos, guardarGastos] = useState([]);
  const [tarReg, guardarTarReg] = useState([]);
  const [gasReg, guardarGasReg] = useState([]);
  const [informe, guardarInforme] = useState([]);
  const [opSel, guardarOpSel] = useState("");
  const [hoLabSel, guardarHoLabSel] = useState(false);
  const [feriadoSel, guardarFeriadoSel] = useState(false);
  const [tareaSel, guardartareaSel] = useState("");
  const [gastoSel, guardarGastoSel] = useState("");
  const [errores, guardarErrores] = useState(null);
  const [gl, guardarGastoLuto] = useState([]);
  const [gasObseSel, guardarGasObseSel] = useState("");

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
            tareasReg(jsCookie.get("idservicio"));
          }
        })
        .catch((error) => {
          toast.error("Ocurrio un error al generar el listado");
          console.log(error);
        });

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
            f: "traer tareas",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarTareas(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay tareas registradas");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el listado de tareas");
        });

      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "traer gastos",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarGastos(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay gastos registrados");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el listado de gastos");
        });

      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "traer informe servicio",
            idservicio: jsCookie.get("idservicio"),
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            let data = {
              f: "reg informe servicio",
              idservicio: jsCookie.get("idservicio"),
              fecha: moment().format("YYYY-MM-DD"),
              liquidado: false,
              aprobado: false,
            };

            axios
              .post("/api/sepelio/servicios", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.info("Informe de servicio generado");

                  let accionHis = `Se genero el informe de sepelio ID: ${res.data.idinforme} para el servicio ${data.idservicio}.`;

                  registrarHistoria(accionHis, usu.usuario);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al generar el informe de servicio"
                );
              });
          }
          if (res.data.length > 0) {
            guardarInforme(res.data[0]);
          }
        })

        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el listado de tareas");
        });

      gasLuto();
    }
  };

  const tareasReg = async (id) => {
    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "traer tareas reg",
          idservicio: id,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarTarReg(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });

    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "traer gastos reg",
          idservicio: id,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarGasReg(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });
  };

  const regTarea = async () => {
    let data = {
      idinforme: informe.idinforme,
      idservicio: servicio.idservicio,
      operador: opSel,
      tarea: tareaSel,
      inicio: moment(inicioRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      fin: moment(finRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      horas: 0,
      monto: 0,
      horario_laboral: hoLabSel,
      feriado: feriadoSel,
      liquidado: false,
      f: "reg tarea informe",
    };

    if (data.operador === "") {
      guardarErrores("Debes seleccionar a un operador");
    } else if (data.tarea === "") {
      guardarErrores("Debes seleccionar a una tarea");
    } else if (data.inicio === "") {
      guardarErrores("Debes ingresar el inicio de la tarea");
    } else if (data.fin === "") {
      guardarErrores("Debes ingresar el fin de la tarea");
    } else {
      const ini = moment(data.inicio);
      const fin = moment(data.fin);
      let horas = fin.diff(ini, "hours");

      data.horas = horas;

      for (let i = 0; i < tareas.length; i++) {
        if (data.tarea === tareas[i].trabajo) {
          if (data.horario_laboral === false) {
            if (
              (moment(data.inicio).format("dd") === "Sa" &&
                moment(data.inicio).format("HH") > 14) ||
              moment(data.inicio).format("dd") === "Su"
            ) {
              data.monto = data.horas * parseFloat(tareas[i].finde);
            } else {
              if (data.feriado === true) {
                data.monto = data.horas * parseFloat(tareas[i].finde);
              } else {
                data.monto = data.horas * parseFloat(tareas[i].dias_habiles);
              }
            }
          } else if (data.horario_laboral === true) {
            data.monto = 0;
          }
        }
      }

      await axios
        .post("/api/sepelio/servicios", data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Tarea registrada");
            let accionHis = `Se cargo la tarea de ${data.tarea}, realizada por ${data.operador} por un monto de ${data.monto} en el informe de sepelio ID ${data.idinforme}.`;

            registrarHistoria(accionHis, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar la tarea");
        });

      tareasReg(data.idservicio);
    }
  };

  const regGastos = async () => {
    guardarErrores(null);

    let data = {
      idinforme: informe.idinforme,
      idservicio: servicio.idservicio,
      gasto: gastoSel,
      importe: importeRef.current.value,
      observacion: gasObseSel,
      liquidado: false,
      f: "reg gasto informe",
    };

    if (data.gasto === "") {
      guardarErrores("Debes seleccionar un gasto");
    } else if (data.importe === "") {
      guardarErrores("Debes ingresar el importe del gasto");
    } else {
      await axios
        .post("/api/sepelio/servicios", data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Tarea registrada");
            let accionHis = `Se cargo el gasto ID ${res.data.idgastos} - ${data.gasto} por un monto de $${data.importe} en el informe de servicio ID ${data.idinforme}.`;

            registrarHistoria(accionHis, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar la tarea");
        });

      tareasReg(data.idservicio);
    }
  };

  const delTarea = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar la tarea seleccionada?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/sepelio/servicios`, {
                params: {
                  f: "eliminar tarea",
                  idtarea: id,
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Tarea Eliminada");
                  let accionHis = `Se elimino la tarea ID ${id} en el informe de sepelio ID ${informe.idinforme}.`;

                  registrarHistoria(accionHis, usu.usuario);
                  tareasReg(parseInt(jsCookie.get("idservicio")));
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al eliminar la tarea");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La tarea seleccionada, no fue eliminada");
          },
        },
      ],
    });
  };

  const delGasto = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar el gasto seleccionado?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/sepelio/servicios`, {
                params: {
                  f: "eliminar gasto",
                  idgastos: id,
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Gasto Eliminado");
                  let accionHis = `Se elimino el gasto ID ${id} en el informe de sepelio ID ${informe.idinforme}.`;

                  registrarHistoria(accionHis, usu.usuario);
                  tareasReg(parseInt(jsCookie.get("idservicio")));
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al eliminar el gasto");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El gasto seleccionado, no fue eliminado");
          },
        },
      ],
    });
  };

  const handleChange = (flag, value) => {
    if (flag === "tarea") {
      guardartareaSel(value);
    } else if (flag === "operador") {
      guardarOpSel(value);
    } else if (flag === "check") {
      guardarHoLabSel(value.target.checked);
    } else if (flag === "check feriado") {
      guardarFeriadoSel(value.target.checked);
    } else if (flag === "gasto") {
      guardarGastoSel(value);
    } else if (flag === "gasto obse") {
      guardarGasObseSel(value);
    }
  };

  const calcTotal = (arr, f) => {
    let total = 0;

    if (f === "t") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === false) {
          total += parseFloat(arr[i].monto);
        }
      }
    } else if (f === "g") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === false) {
          total += parseFloat(arr[i].importe);
        }
      }
    }

    return total.toFixed(2);
  };

  const gasLuto = async (plan, alta, cantadh) => {
    await axios
      .get(`/api/sepelio/servicios`, {
        params: {
          f: "gasto luto",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarGastoLuto(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al registrar el historial");
      });
  };

  const liqItem = async (f, id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres liquidar este item?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let info = {
              operadorliq: usu.usuario,
              fecha_liquidado: moment().format("YYYY-MM-DD"),
              f: f,
              id: id,
            };

            axios
              .put("/api/sepelio/servicios", info)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Tarea/Gasto liquidado");

                  setTimeout(() => {
                    traerInfo();
                  }, 1000);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al liquidar la Tarea/Gasto");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El item no fue liquidado");
          },
        },
      ],
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
          {servicio ? (
            <>
              <FormInformeServicio
                servicio={servicio}
                operadores={operadores}
                tareas={tareas}
                tarReg={tarReg}
                handleChange={handleChange}
                regTarea={regTarea}
                errores={errores}
                inicioRef={inicioRef}
                finRef={finRef}
                delTarea={delTarea}
                calcTotal={calcTotal}
                f={router.query.f}
                gastos={gastos}
                importeRef={importeRef}
                gasReg={gasReg}
                regGastos={regGastos}
                delGasto={delGasto}
                gl={gl}
                liqItem={liqItem}
              />
            </>
          ) : (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>No se encontro el servicio selecionado</strong>
            </Alert>
          )}
        </>
      )}
    </>
  );
}

export default informe;
