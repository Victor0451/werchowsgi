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
import { ListadoCajaSep } from "@/components/sepelio/caja/ListadoCajaSep";

export default function ListadoCajas() {
  const [listado, guardarListado] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerCajas = async () => {
    await axios
      .get(`/api/sepelio/caja`, {
        params: {
          f: "traer cajas",
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

  const eliminarCaja = async (id) => {
    await confirmAlert({
      title: "Atencion",
      message:
        "¿Seguro quieres eliminar la caja seleccionada y todos sus movimientos cargados?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete("/api/sepelio/caja", {
                params: {
                  idcaja: id,
                  f: "eliminar caja",
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Caja eliminado");

                  eliminarMovCaja(id);

                  let accion = `Se elimino la caja de sepelio ID: ${id} con todos sus ingresos y egresos.`;

                  registrarHistoria(accion, usu.usuario);

                  setTimeout(() => {
                    traerCajas();
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al eliminar la caja seleccionada"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El servicio seleccionado no fue eliminado");
          },
        },
      ],
    });
  };

  const eliminarMovCaja = async (id) => {
    await axios
      .delete("/api/sepelio/caja", {
        params: {
          idcaja: id,
          f: "eliminar ingresos caja",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Ingresos eliminado");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al eliminar los ingresos de la caja seleccionada"
        );
      });

    await axios
      .delete("/api/sepelio/caja", {
        params: {
          idcaja: id,
          f: "eliminar egresos caja",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Egresos eliminado");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al eliminar los egresos de la caja seleccionada"
        );
      });
  };

  useSWR("/api/sepelio/caja", traerCajas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoCajaSep
            listado={listado}
            noData={noData}
            usu={usu}
            eliminarCaja={eliminarCaja}
          />
        </>
      )}
    </>
  );
}
