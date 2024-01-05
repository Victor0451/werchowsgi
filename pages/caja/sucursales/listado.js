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
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import Router from "next/router";
import FormListadoCajas from "@/components/caja/sucursales/FormListadoCajas";

function listado(props) {
  const [cajas, guardarCajas] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerCajas = async () => {
    await axios
      .get(`/api/caja/sucursales`, {
        params: {
          f: "traer cajas usuario",
          user: usu.usuario,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          toast.info("No tienes cajas registradas");
          guardarNoData(true);
        } else if (res.data.length > 0) {
          guardarCajas(res.data);
          guardarNoData(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado de cajas");
        guardarNoData(true);
      });
  };

  useSWR("/api/caja", traerCajas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormListadoCajas cajas={cajas} noData={noData} />
        </>
      )}
    </>
  );
}

export default listado;
