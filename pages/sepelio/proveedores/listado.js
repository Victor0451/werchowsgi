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
import ListadoProveedores from "@/components/sepelio/proveedores/ListadoProveedores";

function Listado(props) {
  const [listado, guardarListado] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerProveedores = async () => {
    await axios
      .get(`/api/sepelio/proveedores`, {
        params: {
          f: "traer proveedores",
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

  useSWR("/api/sepelio/proveedores", traerProveedores);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoProveedores listado={listado} usu={usu} noData={noData} />
        </>
      )}
    </>
  );
}

export default Listado;
