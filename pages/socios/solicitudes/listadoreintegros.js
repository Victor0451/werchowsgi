import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import ListadosReintegros from "@/components/socios/ListadosReintegros";

function LisReintegros(props) {
  const [noData, guardarNoData] = useState(false);
  const [listado, guardarListado] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "listado reintegros",
        },
      })
      .then((res) => {
        if (res.data) {
          let re = JSON.parse(res.data);

          guardarListado(re);
          guardarNoData(false);
        } else {
          guardarNoData(true);
          guardarListado([]);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });
  };

  const calcTot = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].importe);
    }

    return total.toFixed(2);
  };

  useSWR("/api/socios", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadosReintegros
            listado={listado}
            noData={noData}
            calcTot={calcTot}
          />
        </>
      )}
    </>
  );
}

export default LisReintegros;
