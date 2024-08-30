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
import { registrarHistoria, regHistorialAuto } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormLegajo from "@/components/contabilidad/liquidaciones/FormLegajo";
import ListadoLegajos from "@/components/contabilidad/liquidaciones/ListadoLegajos";

function legajo(props) {
  const [operadores, guardarOperadores] = useState([]);
  const [historialRec, guardarHistorialRec] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get(`/api/contabilidad/liquidaciones`, {
        params: {
          f: "traer legajos",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarOperadores(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de participantes");
      });
  };

  const traerHistorialRec = async (idlegajo) => {
    await axios
      .get(`/api/contabilidad/liquidaciones`, {
        params: {
          f: "traer historial recibos",
          idlegajo: idlegajo,
        },
      })
      .then((res) => {
        if (res.data) {
          guardarHistorialRec(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de participantes");
      });
  };

  useSWR("/api/contabilidad/liquidaciones", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoLegajos
            listado={operadores}
            usu={usu}
            traerHistorialRec={traerHistorialRec}
            historialRec={historialRec}
          />
        </>
      )}
    </>
  );
}

export default legajo;
