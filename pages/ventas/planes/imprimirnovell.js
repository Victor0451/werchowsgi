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
import FormImprimirNovell from "@/components/ventas/planes/FormImprimirNovell";

function ImprimirNovell(props) {
  const [novell, guardarNovell] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idnovell) {
    jsCookie.set("idnovell", router.query.idnovell);
  }

  const traerNovell = async () => {
    if (jsCookie.get("idnovell")) {
      await axios
        .get(`/api/ventas`, {
          params: {
            idnovell: jsCookie.get("idnovell"),
            f: "traer novell",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            guardarNovell(res.data[0]);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el novell");
        });
    }
  };

  useSWR("/api/ventas", traerNovell);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormImprimirNovell novell={novell} />
        </>
      )}
    </>
  );
}

export default ImprimirNovell;
