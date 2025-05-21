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
import FormImpresionCaja from "@/components/sepelio/caja/FormImpresionCaja";

export default function Impresion() {
  let componentRef = React.createRef();

  const [caja, guardarCaja] = useState([]);
  const [ingresos, guardarIngresos] = useState([]);
  const [gastos, guardarGastos] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idcaja) {
    jsCookie.set("idcaja", router.query.idcaja, { expires: 1 });
  }

  const traerCaja = async () => {
    if (jsCookie.get("idcaja")) {
      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer caja",
            idcaja: jsCookie.get("idcaja"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarCaja(res.data);

            let ing = {
              idcaja: res.data.idcaja,
              concepto: res.data.concepto,
              monto: res.data.monto,
            };

            guardarIngresos([ing]);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la caja");
        });

      // await axios
      //   .get("/api/sepelio/caja", {
      //     params: {
      //       f: "traer ingresos",
      //       idcaja: jsCookie.get("idcaja"),
      //     },
      //   })
      //   .then((res) => {
      //     if (res.data.length > 0) {
      //       console.log(res.data);
      //       guardarIngresos([...ingresos, res.data[0]]);
      //     } else if (res.data.length === 0) {
      //       toast.info("No hay ingresos adicionales registrados");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error("Ocurrio un error al traer los ingresos");
      //   });

      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer gastos caja",
            idcaja: jsCookie.get("idcaja"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarGastos(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay gastos registrados");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer los gastos");
        });
    }
  };

  const totales = (arr, f) => {
    let total = 0;

    if (f === "i") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].monto);
      }

      return total;
    } else if (f === "e") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].total);
      }

      return total;
    }
  };

  useSWR("/api/sepelio/caja", traerCaja);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormImpresionCaja
            caja={caja}
            ingresos={ingresos}
            gastos={gastos}
            totales={totales}
            componentRef={componentRef}
          />
        </>
      )}
    </>
  );
}
