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
import ListParcelas from "@/components/sepelio/parcelas/ListParcelas";

function ListadoParcela(props) {
  const [listado, guardarListado] = useState([]);
  const [historial, guardarhistorial] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerParcelas = async () => {
    await axios
      .get(`/api/sepelio/parcelas`, {
        params: {
          f: "list parcelas",
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

  const historialParcelas = async (row) => {
    guardarhistorial([]);

    await axios
      .get(`/api/sepelio/parcelas`, {
        params: {
          f: "traer historial parcela",
          id: row.idparcela,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarhistorial(res.data);
        } else if (res.data.length === 0) {
          toast.info("Esta parcela no tiene lugares asignados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el historial de la parcelas");
      });
  };

  useSWR("/api/sepelio/caja", traerParcelas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListParcelas
            listado={listado}
            noData={noData}
            usu={usu}
            historialParcelas={historialParcelas}
            historial={historial}
          />
        </>
      )}
    </>
  );
}

export default ListadoParcela;
