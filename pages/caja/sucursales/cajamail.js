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
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";

function CajaMail(props) {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let params = useRouter();

  if (params.query.id) {
    jsCookie.set("id", params.query.id);
  }

  const traerMovimientos = async (idcaja) => {
    await axios
      .get("/api/caja/sucursales", {
        params: {
          f: "traer movimientos caja",
          idcaja: js,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          let arr = res.data;

          for (let i = 0; i < arr.length; i++) {
            if (arr[i].movimiento === "I") {
              guardarIngreso([...ingreso, arr[i]]);
            } else if (arr[i].movimiento === "E") {
              guardarEgreso([...ingreso, arr[i]]);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar la caja seleccionada");
      });
  };

  if (isLoading === true) return <Skeleton />;

  return <>{!usu ? <Redirect /> : <></>}</>;
}

export default CajaMail;
