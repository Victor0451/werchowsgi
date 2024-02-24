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

  const [servicio, guardarServicio] = useState(null);
  const [operadores, guardarOperadores] = useState([]);
  const [tareas, guardarTareas] = useState([]);
  const [tarReg, guardarTarReg] = useState([]);
  const [noData, guardarNoData] = useState(false);
  const [informe, guardarInforme] = useState([]);
  const [opSel, guardarOpSel] = useState("");
  const [tareaSel, guardartareaSel] = useState("");
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idservicio) {
    jsCookie.set("idservicio", router.query.idservicio);
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
  };

  const regTarea = async () => {
    let data = {
      idinforme: informe.idinforme,
      idservicio: servicio.idservicio,
      operador: opSel,
      tarea: tareaSel,
      inicio: inicioRef.current.value,
      fin: finRef.current.value,
      horas: 0,
      monto: 0,
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
          if (
            moment(data.inicio).format("dd") === "Sa" ||
            moment(data.inicio).format("dd") === "Su"
          ) {
            data.monto = data.horas * parseFloat(tareas[i].finde);
          } else {
            data.monto = data.horas * parseFloat(tareas[i].dias_habiles);
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

  const delTarea = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar la tarea?",
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
            toast.info("La tarea no fue eliminada");
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
    }
  };

  const calcTotal = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].monto;
    }

    return total.toFixed(2);
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
