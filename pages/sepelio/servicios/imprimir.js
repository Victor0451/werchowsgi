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
import { registrarHistoria, regHistorialAuto } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { Alert } from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormImpSolicitud from "@/components/sepelio/servicios/FormImpSolicitud";

function Imprimir(props) {
  let componentRef = React.createRef();

  const [servicio, guardarServicio] = useState(null);
  const [ataud, guardarAtaud] = useState([]);
  const [gl, guardarGastoLuto] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idservicio) {
    jsCookie.set("idservicio", router.query.idservicio);
  }

  const traerInfo = async () => {
    if (jsCookie.get("idservicio")) {
      await axios
        .get(`/api/sepelio/servicios`, {
          params: {
            f: "legajo servicio",
            id: jsCookie.get("idservicio"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarServicio(res.data[0]);

            axios
              .get(`/api/sepelio/ataudes`, {
                params: {
                  f: "traer ataud",
                  id: res.data[0].idataud,
                },
              })
              .then((res) => {
                if (res.data) {
                  guardarAtaud(res.data);
                }
              })
              .catch((error) => {
                toast.error("Ocurrio un error al gelerar el listado de autos");
                console.log(error);
              });
          }
        })
        .catch((error) => {
          toast.error("Ocurrio un error al gelerar el listado de autos");
          console.log(error);
        });
    }
  };

  useSWR("/api/sepelio/autos", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {servicio ? (
            <>
              <FormImpSolicitud
                servicio={servicio}
                ataud={ataud}
                componentRef={componentRef}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
}

export default Imprimir;
