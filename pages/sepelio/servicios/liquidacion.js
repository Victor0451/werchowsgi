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
  const [alertas, guardarAlertas] = useState(null);
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
    guardarTareas([]);
    guardarGuardias([]);

    toast.info(`Buscando liquidacion del operador ${opSel}...`);

    if (opSel === "") {
      guardarErrores(
        "Debes seleccionar al operador para traer su liquidacion pendiente"
      );
    } else {
      let tar = [];
      let guar = [];

      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "traer tareas operador",
            operador: opSel,
          },
        })
        .then((res) => {
          tar = JSON.parse(res.data);

          if (tar.length > 0) {
            toast.success("Liquidacion entontrada");

            guardarTareas(tar);
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
            guar = res.data;
            guardarGuardias(guar);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el listado de guardias");
        });

      if (tar.length === 0 && guar.length === 0) {
        toast.warning(
          `El operador ${opSel} no posee tareas o guardias a liquidar.`
        );

        guardarAlertas(
          `El operador ${opSel} no posee tareas o guardias a liquidar.`
        );
      }
    }
  };

  const calcTotal = (arr, f) => {
    let total = 0;

    if (f === "t") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 0) {
          total += parseFloat(arr[i].monto);
        }
      }
    } else if (f === "tp") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 1) {
          total += parseFloat(arr[i].monto);
        }
      }
    } else if (f === "tcon") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 0) {
          total++;
        }
      }
    } else if (f === "tconp") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 1) {
          total++;
        }
      }
    } else if (f === "g") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 0) {
          total += parseFloat(arr[i].importe);
        }
      }
    } else if (f === "gp") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 1) {
          total += parseFloat(arr[i].importe);
        }
      }
    } else if (f === "gcon") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 0) {
          total++;
        }
      }
    } else if (f === "gconp") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 1) {
          total++;
        }
      }
    }

    return total;
  };

  const pagarLiquidacion = async (f) => {
    if (f === "T") {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres liquidar todas las tareas?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              let info = {
                operadorliq: usu.usuario,
                fecha_liquidado: moment().format("YYYY-MM-DD"),
                f: "liquidar tareas",
                operador: opSel,
              };

              axios
                .put("/api/sepelio/servicios", info)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Tareas liquidadas");

                    let accionHis = `Todas las tareas del operador ${opSel} fueron liquidadas.`;

                    registrarHistoria(accionHis, usu.usuario);

                    setTimeout(() => {
                      buscarLiquidacion();
                    }, 1000);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al liquidar");
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info("Ninguna tarea fue liquidada");
            },
          },
        ],
      });
    } else if (f === "G") {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres liquidar todas las guardias?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              let info = {
                operadorliq: usu.usuario,
                fecha_liquidacion: moment().format("YYYY-MM-DD"),
                f: "liquidar guardias",
                operador: opSel,
              };

              axios
                .put("/api/sepelio/guardias", info)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Guardias Liquidadas");

                    let accionHis = `Todas las guardias del operador ${opSel} fueron liquidadas.`;

                    registrarHistoria(accionHis, usu.usuario);

                    setTimeout(() => {
                      buscarLiquidacion();
                    }, 1000);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al liquidar");
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info("Ninguna guardia fue liquidada");
            },
          },
        ],
      });
    }
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
                    buscarLiquidacion();
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

  const liquidarGuardia = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres liquidar de esta guardia?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "liquidar guardia",
              estado: 1,
              id: id,
              usu: usu.usuario,
              fecha: moment().format("YYYY-MM-DD"),
            };

            axios
              .put("/api/sepelio/guardias", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    `La guardia fue marcado como liquidado con exito`
                  );

                  let accionHis = `La guardia de sepelio ID ${id} fue marcado como liquidada.`;

                  registrarHistoria(accionHis, usu.usuario);

                  setTimeout(() => {
                    buscarLiquidacion();
                  }, 1000);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al liquidar la guardia");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La guardia seleccionada no fue liquidada", "ATENCION");
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
            liqItem={liqItem}
            liquidarGuardia={liquidarGuardia}
            alertas={alertas}
            usu={usu}
          />
        </>
      )}
    </>
  );
}

export default liquidacion;
