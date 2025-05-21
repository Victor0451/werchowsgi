import React, { useState, useEffect } from "react";
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
import FormCajaMail from "@/components/caja/sucursales/FormCajaMail";

function CajaMail(props) {
  const [ingreso, guardarIngreso] = useState([]);
  const [egreso, guardarEgreso] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let params = useRouter();

  if (params.query.id) {
    jsCookie.set("id", params.query.id, { expires: 1 });
  }

  const traerMovimientos = async () => {
    console.log(jsCookie.get("id"));
    if (jsCookie.get("id")) {
      await axios
        .get("/api/caja/sucursales", {
          params: {
            f: "traer ingresos caja",
            idcaja: jsCookie.get("id"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            let arr = res.data;

            guardarIngreso(arr);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar la caja seleccionada");
        });

      await axios
        .get("/api/caja/sucursales", {
          params: {
            f: "traer egresos caja",
            idcaja: jsCookie.get("id"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            let arr = res.data;

            guardarEgreso(arr);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar la caja seleccionada");
        });
    }
  };

  const totales = (arr, mov) => {
    let total = 0;

    if (mov === "I") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(ingreso[i].importe);
      }

      return total.toFixed(2);
    } else if (mov === "E") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(egreso[i].importe);
      }

      return total.toFixed(2);
    }
  };

  useSWR("/api/caja/sucursales", traerMovimientos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCajaMail ingreso={ingreso} egreso={egreso} totales={totales} />
        </>
      )}
    </>
  );
}

export default CajaMail;
