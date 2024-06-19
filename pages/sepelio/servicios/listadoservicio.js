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
import Router from "next/router";
import ListadoServicios from "@/components/sepelio/servicios/ListadoServicios";

function ListadoServicio(props) {
  const [listado, guardarListado] = useState([]);
  const [listadoHist, guardarListadoHist] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerServicios = async () => {
    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "traer servicios",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarListado(res.data);
          guardarNoData(false);
        } else if (res.data.length === 0) {
          toast.info("No hay servicios registrados");
          guardarNoData(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });

    actIdInformes();
  };

  const actIdInformes = async () => {
    let data = {
      f: "act idinformes tareas",
    };

    await axios.put("/api/sepelio/servicios", data);

    let data1 = {
      f: "act idinformes gastos",
    };

    await axios.put("/api/sepelio/servicios", data1);
  };

  const ServiciosHistoricos = async () => {
    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "traer servicios historicos",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          guardarListadoHist(res.data);
          guardarNoData(false);
        } else if (res.data.length === 0) {
          toast.info("No hay servicios registrados");
          guardarNoData(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });
  };

  const eliminarServicio = async (id) => {
    await confirmAlert({
      title: "Atencion",
      message: "¿Seguro quieres eliminar el servicio seleccionado?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete("/api/sepelio/servicios", {
                params: {
                  idservicio: id,
                  f: "eliminar servicio",
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Servicio eliminado");

                  traerServicios();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al eliminar el servicio seleccionado"
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

  useSWR("/api/sepelio/servicios", traerServicios);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoServicios
            listado={listado}
            usu={usu}
            noData={noData}
            listadoHist={listadoHist}
            ServiciosHistoricos={ServiciosHistoricos}
            eliminarServicio={eliminarServicio}
          />
        </>
      )}
    </>
  );
}

export default ListadoServicio;
