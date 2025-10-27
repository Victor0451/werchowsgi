import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import { GestionCampanas } from "@/components/campanas/GestionCampanas";
import useWerchow from "@/hook/useWerchow";
import { Redirect } from "@/components/auth/Redirect";
import moment from "moment";
import useSWR from "swr";
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Alert,
  Typography,
} from "@material-tailwind/react";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import AlertProgreso from "@/components/campanas/AlertProgreso";

export default function Campanas() {
  const [asignado, guardarAsignado] = useState([]);
  const [trabajado, guardarTrabajado] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const porcenTab = (a, t) => {
    let resultado = 0;

    if (t === 0) {
      return resultado;
    } else if (t > 0) {
      resultado = (t * 100) / a;
      return resultado.toFixed(2);
    }
  };

  const traerProgreso = async () => {
    await axios
      .get(`/api/campanas`, {
        params: {
          op: usu.usuario,
          mes: moment().format("MM"),
          ano: moment().format("YYYY"),
          f: "casos asignados progreso",
        },
      })
      .then((res) => {
        let asigData = JSON.parse(res.data);

        if (
          Array.isArray(asigData) &&
          asigData.length > 0 &&
          Array.isArray(asigData[0].asig)
        ) {
          guardarAsignado(asigData[0].asig);
        } else {
          guardarAsignado([]); // Asegurarse de que sea un array
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de casos asignados");
      });

    await axios
      .get(`/api/campanas`, {
        params: {
          op: usu.usuario,
          mes: moment().format("MM"),
          ano: moment().format("YYYY"),
          f: "casos trabajados progreso",
        },
      })
      .then((res) => {
        let trabData = JSON.parse(res.data);

        if (
          Array.isArray(trabData) &&
          trabData.length > 0 &&
          Array.isArray(trabData[0].trab)
        ) {
          guardarTrabajado(trabData[0].trab);
        } else {
          guardarTrabajado([]); // Asegurarse de que sea un array
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al traer el listado de casos trabajados."
        );
      });
  };

  useSWR("/api/campanas", traerProgreso);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : usu ? (
        <>
          <Card className="h-full w-full border-2 mb-4">
            <CardBody className="rounded-none">
              <AlertProgreso
                oper={usu.usuario}
                mes={moment().format("MM")}
                ano={moment().format("YYYY")}
                asignado={asignado}
                trabajado={trabajado}
                porcenTab={porcenTab}
              />
            </CardBody>
          </Card>
          <GestionCampanas />
        </>
      ) : null}
    </>
  );
}
