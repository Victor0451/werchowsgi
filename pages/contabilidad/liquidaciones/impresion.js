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
import FormImpresion from "@/components/contabilidad/liquidaciones/FormImpresion";

function impresion(props) {
  let componentRef = React.createRef();

  const [recibo, guardarRecibo] = useState([]);
  const [operador, guardarOperador] = useState([]);
  const [movim, guardarMovim] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idrecibo) {
    jsCookie.set("idrecibo", router.query.idrecibo);
  }

  const traerDatos = async () => {
    await axios
      .get(`/api/contabilidad/liquidaciones`, {
        params: {
          f: "traer recibo",
          idrecibo: jsCookie.get("idrecibo"),
        },
      })
      .then((res) => {
        if (res.data) {
          guardarRecibo(res.data[0]);

          axios
            .get(`/api/contabilidad/liquidaciones`, {
              params: {
                f: "traer legajo personal",
                idlegajo: res.data[0].idlegajo,
              },
            })
            .then((res1) => {
              if (res1.data) {
                guardarOperador(res1.data[0]);
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("Ocurrio un error al traer el legajo seleccionado");
            });

          axios
            .get(`/api/contabilidad/liquidaciones`, {
              params: {
                f: "traer movimientos recibo",
                idrecibo: jsCookie.get("idrecibo"),
              },
            })
            .then((res2) => {
              if (res2.data) {
                guardarMovim(res2.data);
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("Ocurrio un error al traer el legajo seleccionado");
            });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de participantes");
      });
  };
  let calImpus = (arr, f) => {
    let total = 0;

    if (f === "rr") {
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].remu_ren;
      }
    } else if (f === "re") {
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].remu_exe;
      }
    } else if (f === "ds") {
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].descuento;
      }
    }

    return total;
  };

  useSWR("/api/contabilidad/liquidaciones", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormImpresion
            recibo={recibo}
            operador={operador}
            movim={movim}
            calImpus={calImpus}
            componentRef={componentRef}
          />
        </>
      )}
    </>
  );
}

export default impresion;
