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
import ListadoGanadores from "@/components/socios/clubwerchow/FormGanadores";

function Ganadores(props) {
  const [ganadores, guardarGanadores] = useState([]);
  const [ganadoresBecas, guardarGanadoresBecas] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerGanadores = async () => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer ganadores",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);

          guardarGanadores(list);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de ganadores");
      });

    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer ganadores becas",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);

          guardarGanadoresBecas(list);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al traer el listado de ganadores de las becas"
        );
      });
  };

  useSWR("/api/sepelio/servicios", traerGanadores);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoGanadores
            ganadores={ganadores}
            ganadoresBecas={ganadoresBecas}
          />
        </>
      )}
    </>
  );
}

export default Ganadores;
