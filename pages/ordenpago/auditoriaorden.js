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
import Router from "next/router";
import jsCookie from "js-cookie";
import FormAuditoria from "@/components/ordenpago/FormAuditoria";

function auditoriaorden(props) {
  let ordenOtRef = React.createRef();
  let ordenFaRef = React.createRef();
  let impLiqRef = React.createRef();
  let nOrdenRef = React.createRef();
  let impOrdenPagRef = React.createRef();

  const [lisOtero, guardarListOtero] = useState([]);
  const [lisFabian, guardarListFabian] = useState([]);
  const [orden, guardarOrden] = useState([]);
  const [ordenPag, guardarOrdenPag] = useState([]);
  const [sis, guardarSis] = useState("");
  const [estO, guardarEstO] = useState(0);
  const [estF, guardarEstF] = useState(0);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const actImpLiq = async (flag) => {
    let data = {
      f: "",
    };

    if (flag === "O") {
      data.f = "imp liq ordenes";
    } else if (flag === "P") {
      data.f = "imp liq practicas";
    } else if (flag === "SV") {
      data.f = "imp liq sin valor";
    }

    toast.info("Actualizando... Esto puede demorar unos segundos.");

    await axios
      .put("/api/ordenpago", data)
      .then((res) => {
        if (res.status === 200) {
          if (flag === "O") {
            toast.success("Campo IMP_LIQ de odenes medicas, actualizado");
          } else if (flag === "P") {
            toast.success("Campo IMP_LIQ de practicas medicas, actualizado");
          } else if (flag === "SV") {
            toast.success("Campo IMP_LIQ sin valor, actualizado");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al actualizar el campo IMP_LIQ");
      });
  };

  const traerUsosSinPuntear = async () => {
    toast.info(
      "Buscando usos sin puntear... Este proceso puede demorar unos segundo, Espera el mensaje de finalizacion"
    );

    guardarEstF(1);
    guardarEstO(1);

    await axios
      .get(`/api/ordenpago`, {
        params: {
          f: "usos sin puntear",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarEstO(2);

          guardarListOtero(res.data);
          toast.warning(
            `Se encontraron ${res.data.length} usos sin puntear en el sistema web`
          );
        } else if (res.data.length === 0) {
          guardarEstO(0);

          toast.success(`No se econtraron usos sin puntear en el sistema web`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de usos");
      });

    await axios
      .get(`/api/ordenpago`, {
        params: {
          f: "usos fa sin puntear",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarEstF(2);
          guardarListFabian(res.data);
          toast.warning(
            `Se encontraron ${res.data.length} usos sin puntear en el sistema fox`
          );
        } else if (res.data.length === 0) {
          guardarEstF(0);
          toast.success(`No se econtraron usos sin puntear en el sistema fox`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de usos");
      });
  };

  const repunteoDeUsos = async () => {
    let data = {
      f: "",
      Ot: false,
      Fa: false,
    };

    if (lisOtero.length > 0) {
      data.Ot = true;
    } else {
      toast.warning("Sistema Otero no tiene usos para repuntear");
    }

    if (lisFabian.length > 0) {
      data.Fa = true;
    } else {
      toast.warning("Sistema Fox no tiene usos para repuntear");
    }

    if (lisFabian.length === 0 && lisOtero.length === 0) {
      toast.info("No hay usos para repuntear");
    } else {
      await setTimeout(() => {
        toast.info(
          "Repunteando usos... Este proceso puede demorar unos segundo, Espera el mensaje de finalizacion"
        );

        guardarEstF(1);
        guardarEstO(1);

        data.f = "repunteo de usos web";

        axios
          .put("/api/ordenpago", data)
          .then((res) => {
            if (res.status === 200) {
              toast.success("El repunteo sistema web finalizo con exito");

              guardarEstO(0);

              let accion = `Repunteo de usos liquidados Sistema Web.`;

              registrarHistoria(accion, usu.usuario);
            } else {
              guardarEstO(2);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al repuntear los usos");
          });

        data.f = "repunteo de usos fox";

        axios
          .put("/api/ordenpago", data)
          .then((res) => {
            if (res.status === 200) {
              toast.success("El repunteo sistema fox, finalizo con exito");

              guardarEstF(0);

              let accion = `Repunteo de usos liquidados Sistema Fox.`;

              registrarHistoria(accion, usu.usuario);
            } else {
              guardarEstF(2);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al repuntear los usos");
          });
      }, 1000);
    }
  };

  const traerOrden = async (flag) => {
    let f = "";
    let orden = "";
    guardarSis(flag);

    if (flag === "O") {
      if (ordenOtRef.current.value === "") {
        toast.info("Debes ingresar el numero de orden");
      } else {
        f = "traer orden otero";
        orden = ordenOtRef.current.value;
      }
    } else if (flag === "F") {
      if (ordenFaRef.current.value === "") {
        toast.info("Debes ingresar el numero de orden");
      } else {
        f = "traer orden fabian";
        orden = ordenFaRef.current.value;
      }
    }

    await axios
      .get("/api/ordenpago", {
        params: {
          f: f,
          orden: orden,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          toast.success("Orden Encontrada");
          guardarOrden(res.data);
        } else {
          toast.info("La orden solicitada no fue encontrada");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer la orden solicitada");
      });
  };

  const levantarAnulado = async (row) => {
    const data = {
      f: "levantar anulado",
      iduso: row.iduso,
      sis: sis,
    };

    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres levantar el anulado de este uso?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .put("/api/ordenpago", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    "El uso anulado seleccionado, fue levantado con exito"
                  );

                  let accion = `El uso ${row.ORDEN} anulado ID ${row.iduso}, fue levantado.`;

                  registrarHistoria(accion, usu.usuario);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al levantar el uso anulado");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El uso no fue modificado");
          },
        },
      ],
    });
  };

  const modificarImpLiq = async (row) => {
    if (impLiqRef.current.value === "") {
      toast.warning("Debes ingresar el nuevo importe");
    } else {
      const data = {
        f: "modificar imp liq",
        iduso: row.iduso,
        sis: sis,
        impliq: impLiqRef.current.value,
      };

      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres modificar el importe de liquidacion?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put("/api/ordenpago", data)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success(
                      "El importe de liquidacion fue modificado con exito"
                    );

                    let accion = `Se modifico el campo IMP_LIQ del uso ${row.ORDEN}, ID ${row.iduso}, de ${row.IMP_LIQ} a ${impLiqRef.current.value}.`;

                    registrarHistoria(accion, usu.usuario);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error(
                    "Ocurrio un error al modificar el importe de liquidacion."
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info("El importe de liquidacion no fue modificado");
            },
          },
        ],
      });
    }
  };

  const desbloquearUso = async (row, sis) => {
    const data = {
      f: "desbloquear uso",
      iduso: row.iduso,
      sis: sis,
    };

    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres levantar el anulado de este uso?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .put("/api/ordenpago", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    "El uso anulado seleccionado, fue desbloqueado con exito"
                  );

                  let accion = `El uso ${row.ORDEN} liquidado ID ${row.iduso} en la orden de pago ${row.NORDEN} por N° de orden duplicado, fue desbloqueado.`;

                  registrarHistoria(accion, usu.usuario);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al desbloquear el uso anulado");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El uso no fue modificado");
          },
        },
      ],
    });
  };

  const eliminarDuplicado = async (row) => {
    const data = {
      f: "eliminar duplicado",
      iduso: row.iduso,
      sis: sis,
    };

    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar el uso duplicado?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete("/api/ordenpago", {
                params: {
                  f: "eliminar duplicado",
                  iduso: row.iduso,
                  sis: sis,
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El uso duplicado, fue elimiado con exito");

                  let accion = `El uso ${row.ORDEN} duplicado ID ${row.iduso}, fue eliminado.`;

                  registrarHistoria(accion, usu.usuario);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al eliminar el uso duplicado");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El uso no fue eliminado");
          },
        },
      ],
    });
  };

  const traerOdenPago = async (f) => {
    let nOrden = nOrdenRef.current.value;

    if (nOrden === "") {
      toast.error("Debes ingresar el numero de orden de pago");
    } else {
      await axios
        .get(`/api/ordenpago`, {
          params: {
            f: "traer detalle orden",
            idorden: nOrden,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarOrdenPag(res.data);

            if (f === "update") {
              updateMontoOrdenPago(nOrden, res.data);
            }
          } else {
            toast.info("El numero de orden de pago ingresado no existe");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la orden de pago");
        });
    }
  };

  const calcTotales = (arr, f) => {
    let total = 0;

    if (f === "t") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].importe);
      }

      return total.toFixed(2);
    }
  };

  const updateMontoDetalle = async () => {
    let importe = impOrdenPagRef.current.value;

    if (importe === "") {
      toast.warning("Debes ingresar el nuevo importe");
    } else {
      let data = {
        importe: importe,
        orde: nOrdenRef.current.value,
        f: "act importe ordenes",
      };

      await confirmAlert({
        title: "ATENCION",
        message:
          "¿Seguro quieres modificar el importe de la orden de pago y su detalle?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put("/api/ordenpago", data)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success(
                      "El valor de la orden de pago y sus detalle fue actualizado correctamente"
                    );
                    traerOdenPago("update");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error(
                    "Ocurrio un error al actualizar la orden de pago"
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info(
                "La accion fue cancelada, no se modifico ningun importe."
              );
            },
          },
        ],
      });
    }
  };

  const updateMontoOrdenPago = async (orde, arr) => {
    let data = {
      f: "act importe orden pago",
      total: calcTotales(arr, "t"),
      orde: orde,
    };

    await axios
      .put(`/api/ordenpago`, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Se actualizo el total final de la orden de pago");

          let accion = `Se actualizo el valor de las ordenes de consulta punteadas dentro de la orden de pago ${orde}, a un valor de $${arr[0].importe}. Siendo ahora el total final de $${data.total}`;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al actualizar el total en la orden de pago"
        );
      });
  };

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormAuditoria
            traerUsosSinPuntear={traerUsosSinPuntear}
            actImpLiq={actImpLiq}
            lisOtero={lisOtero}
            lisFabian={lisFabian}
            repunteoDeUsos={repunteoDeUsos}
            ordenFaRef={ordenFaRef}
            ordenOtRef={ordenOtRef}
            traerOrden={traerOrden}
            orden={orden}
            desbloquearUso={desbloquearUso}
            levantarAnulado={levantarAnulado}
            eliminarDuplicado={eliminarDuplicado}
            impLiqRef={impLiqRef}
            modificarImpLiq={modificarImpLiq}
            traerOdenPago={traerOdenPago}
            nOrdenRef={nOrdenRef}
            impOrdenPagRef={impOrdenPagRef}
            ordenPag={ordenPag}
            estF={estF}
            estO={estO}
            calcTotales={calcTotales}
            updateMontoDetalle={updateMontoDetalle}
          />
        </>
      )}
    </>
  );
}

export default auditoriaorden;
