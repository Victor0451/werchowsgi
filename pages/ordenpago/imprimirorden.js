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
import FormImprimirOrden from "@/components/ordenpago/FormImprimirOrden";

function ImprimirOrden(props) {
  let componentRef = React.createRef();

  const [orden, guardarOrden] = useState([]);
  const [detOrden, guardarDetOrden] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idorden) {
    jsCookie.set("idorden", router.query.idorden);
  }

  const traerCaja = async () => {
    if (jsCookie.get("idorden")) {
      await axios
        .get("/api/ordenpago", {
          params: {
            f: "traer orden",
            idorden: jsCookie.get("idorden"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarOrden(res.data[0]);

            if (res.data[0].tipo_orden !== "Contable") {
              axios
                .get("/api/ordenpago", {
                  params: {
                    f: "traer detalle orden",
                    idorden: res.data[0].norden,
                  },
                })
                .then((res1) => {
                  if (res1.data.length > 0) {
                    guardarDetOrden(res1.data);
                  } else {
                    toast.info("No se encontro el detalle de esta orden");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error(
                    "Ocurrio un error al traer el detalle de esta orden"
                  );
                });
            }
          } else {
            toast.info("No se encontro la orden de pago");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la orden de pago");
        });
    }
  };

  const calcTotal = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseInt(arr[i].importe);
    }
    return total.toFixed(2);
  };

  useSWR("/api/ordenpago", traerCaja);

  if (isLoading === true) return <Skeleton />;
  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormImprimirOrden
            orden={orden}
            detOrden={detOrden}
            calcTotal={calcTotal}
            componentRef={componentRef}
          />
        </>
      )}
    </>
  );
}

export default ImprimirOrden;
