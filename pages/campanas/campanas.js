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

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
        console.log(res.data);
        let asig = JSON.parse(res.data);

        guardarAsignado(asig[0].asig);
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
        let trab = JSON.parse(res.data);

        guardarTrabajado(trab[0].trab);
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
              <div className=" border-2 rounded-xl">
                <Alert color="blue" variant="ghost" icon={<IconSolid />}>
                  <Typography variant="h4" className="text-center">
                    Estadistica General de Campaña.
                  </Typography>
                  <hr className="border-2 mt-5 mb-5" />
                  <Typography variant="h6" className="mt-2">
                    <u>Operador</u>: {usu.usuario}
                  </Typography>
                  <Typography variant="h6" className="mt-2">
                    <u>Periodo</u>: {moment().format("MM")}/
                    {moment().format("YYYY")}
                  </Typography>
                  <Typography variant="h6" className="mt-2">
                    <u>Numeros de la Campaña</u>:
                  </Typography>
                  <ul className="mt-2 ml-2 list-inside list-disc">
                    <li className="mt-1">
                      <u>Casos Asignados</u>: <strong>{asignado}</strong>
                    </li>
                    <li className="mt-1">
                      <u>Casos Trabajados</u>: <strong>{trabajado}</strong>
                    </li>
                    <li className="mt-1">
                      <u>Progreso del Trabajo</u>:{" "}
                      <strong> % {porcenTab(asignado, trabajado)}</strong>
                    </li>
                  </ul>

                  <hr className="border-2 mt-5 mb-5" />
                  <Typography variant="paragrahp">
                    Estadistica sobre el trabajo realizado en las campañas
                    pertenecientes al periodo analizado. El progreso de trabajo,
                    cuenta para la liquidacion del bono.
                  </Typography>
                </Alert>
              </div>
            </CardBody>
          </Card>
          <GestionCampanas />
        </>
      ) : null}
    </>
  );
}
