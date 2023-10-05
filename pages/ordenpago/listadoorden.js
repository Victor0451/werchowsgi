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
import ListadoOrdenesGeneradas from "@/components/ordenpago/ListadoOrdenesGeneradas";

function listadoorden(props) {
  const [listado, guardarListado] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get(`/api/ordenpago`, {
        params: {
          f: "traer ordenes",
          perfil: usu.perfil,
          usu: usu.usuario,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarNoData(false);
          guardarListado(res.data);
        } else if (res.data.length === 0) {
          guardarNoData(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado");
        guardarNoData(true);
      });
  };

  const aprobarOrden = async (idorden, norden) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de aprobar la orden de pago?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "aprobar orden",
              idorden: idorden,
              usu: usu.usuario,
            };

            axios
              .put(`/api/ordenpago`, data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("La orden fue aprobada con exito");

                  let accion = `Autorizacion de orden de Pago ID: ${norden}, por el operador: ${usu.usuario}.`;

                  registrarHistoria(accion, usu.usuario);

                  traerDatos();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al aprobar la orden");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La orden no se aprobara.");
          },
        },
      ],
    });
  };

  const anularOrden = async (idorden, norden, tipoOrden) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de anular la orden de pago?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let orden = {
              f: "anular orden",
              idorden: idorden,
              usu: usu.usuario,
            };

            let detOrden = {
              f: "anular detalle orden",
              norden: norden,
            };

            axios
              .put(`/api/ordenpago`, orden)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("La orden fue anulada con exito");

                  let accion = `Anulacion de orden de Pago ID: ${norden}, por el operador: ${usu.usuario}.`;

                  registrarHistoria(accion, usu.usuario);

                  traerDatos();

                  if (tipoOrden !== "Contable") {
                    axios
                      .put(`/api/ordenpago`, detOrden)
                      .then((res1) => {
                        toast.success(
                          "Las consultas y practicas adjuntadas, fueron desmarcadas"
                        );
                      })
                      .catch((error) => {
                        console.log(error);
                        toast.error("Ocurrio un error al anular la orden");
                      });
                  }
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al anular la orden");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La orden no se anulara.");
          },
        },
      ],
    });
  };

  const mandarMail = async (array) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de notificar por mail esta orden de pago?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            fetch("/api/mail/sgi/ordenpago", {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(array),
            })
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    "Se envio un email con la notificacion de la novedad"
                  );
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El envio del mail fue anulado.");
          },
        },
      ],
    });
  };

  useSWR("/api/ordenpago", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoOrdenesGeneradas
            listado={listado}
            noData={noData}
            usu={usu}
            aprobarOrden={aprobarOrden}
            anularOrden={anularOrden}
            mandarMail={mandarMail}
          />
        </>
      )}
    </>
  );
}

export default listadoorden;
