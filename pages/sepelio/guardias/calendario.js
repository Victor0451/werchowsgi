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
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import FormCalendario from "@/components/sepelio/guardias/FormCalendario";

function calendario(props) {
  const [plani, guardarPlani] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerPlani = async () => {
    await axios
      .get("/api/sepelio/guardias", {
        params: {
          f: "traer planificacion",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          if (plani.length === 0) {
            let arr = res.data;

            let arrPla = [];

            for (let i = 0; i < arr.length; i++) {
              let pla = {
                title: arr[i].operador,
                start: arr[i].inicio,
                end: arr[i].fin,
                allDay: 0,
              };

              arrPla.push(pla);
            }
            guardarPlani(arrPla);
          }
        } else {
          toast.info("No hay planificaciones registradas");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al traer las planificaciones registradas"
        );
      });
  };

  useSWR("/api/sepelio/guardias", traerPlani);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCalendario plani={plani} />
        </>
      )}
    </>
  );
}

export default calendario;
