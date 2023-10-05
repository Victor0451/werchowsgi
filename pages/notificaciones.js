import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Redirect } from "@/components/auth/Redirect";

import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import useSWR from "swr";
import axios from "axios";

export default function notificaciones() {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const [noticia, guardarNoticia] = useState(null);

  const mostarNoticias = async () => {
    if (usu) {
      await axios
        .get(`/api/noticias`, {
          params: {
            per: usu.perfil,
          },
        })
        .then((res) => {
          const noticia = res.data;

          guardarNoticia(noticia);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useSWR("/api/noticias", mostarNoticias);

  if (isLoading === true) return <Skeleton />;

  return <>{!usu ? <Redirect /> : usu ? <></> : null}</>;
}
