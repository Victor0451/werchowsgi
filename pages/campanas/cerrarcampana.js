import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import { Redirect } from "@/components/auth/Redirect";
import axios from "axios";
import useSWR from "swr";
import FormCerrarCampañas from "@/components/campanas/FormCerrarCampañas";
import { toast } from "react-toastify";
import { registrarHistoria } from "@/libs/funciones";

function cerrarcampana(props) {
  const [campanas, guardarCampana] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerCampanas = async () => {
    await axios
      .get(`/api/campanas`, {
        params: {
          f: "campanas activas",
        },
      })
      .then((res) => {
        if (res.data) {
          let camp = JSON.parse(res.data);
          guardarCampana(camp);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer las campañas activas");
      });
  };

  const cerrarCampana = async (id, campana) => {
    let data = {
      f: "cerrar campaña",
      idcampana: id,
    };

    await axios
      .put(`/api/campanas`, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Campana cerrada exitosamente");
          traerCampanas();
          let accionHis = `Se cerro la campaña ${id} con ${campana.cantidad} casos, perteneciente al operador ${campana.operador}.`;

          registrarHistoria(accionHis, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al cerrar la campaña");
      });
  };

  useSWR("/api/campanas", traerCampanas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : usu ? (
        <>
          <FormCerrarCampañas
            listado={campanas}
            cerrarCampana={cerrarCampana}
          />
        </>
      ) : null}
    </>
  );
}

export default cerrarcampana;
