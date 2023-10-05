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
import { ListadoNovell } from "@/components/ventas/planes/ListadoNovell";

function Listado(props) {
  const [listado, guardarListado] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerNovells = async () => {
    await axios
      .get(`/api/ventas`, {
        params: {
          f: "listado novells",
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

  useSWR("/api/ventas", traerNovells);

  if (isLoading === true) return <Skeleton />;
 
  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoNovell listado={listado} usu={usu} noData={noData} />
        </>
      )}
    </>
  );
}

export default Listado;
