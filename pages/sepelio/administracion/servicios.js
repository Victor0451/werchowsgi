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
import FormAdminServicios from "@/components/sepelio/administracion/servicios/FormAdminServicios";

function servicios(props) {
  const [listado, guardarListado] = useState([]);
  const [noData, guardarNoData] = useState(true);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const servSinImpac = async () => {
    guardarListado([]);
    await axios
      .get(`/api/sepelio/servicios`, {
        params: {
          f: "servicios sin impactar",
        },
      })
      .then((res) => {
        if (res.data) {
          let serv = JSON.parse(res.data);

          if (serv.length > 0) {
            guardarListado(serv);
            guardarNoData(false);
          } else {
            toast.info("Todos los servicios estan impactados");
            guardarNoData(true);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al generar el listado de servicios sin impactar"
        );
      });
  };

  const actImpactado = async (flag) => {
    let data = {
      f: "",
    };

    if (flag === "TW") {
      data.f = "act titulares werchow";
    } else if (flag === "TM") {
      data.f = "act titulares mutual";
    } else if (flag === "AW") {
      data.f = "act adherentes werchow";
    } else if (flag === "AM") {
      data.f = "act adherentes mutual";
    }

    toast.info(
      "Analizando servicios sin impactar... Esto puede demorar unos segundos."
    );

    await axios
      .put("/api/sepelio/servicios", data)
      .then((res) => {
        if (res.status === 200) {
          if (flag === "TW") {
            toast.success(
              "Servicios sin impactar encotrados de TITULARES WERCHOW."
            );
          } else if (flag === "TM") {
            toast.success(
              "Servicios sin impactar encotrados de TITULARES MUTUAL."
            );
          } else if (flag === "AW") {
            toast.success(
              "Servicios sin impactar encotrados de ADHERENTES WERCHOW."
            );
          } else if (flag === "AM") {
            toast.success(
              "Servicios sin impactar encotrados de ADHERENTES MUTUAL."
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al ejecutar la funcion");
      });
  };

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormAdminServicios
            listado={listado}
            noData={noData}
            servSinImpac={servSinImpac}
            actImpactado={actImpactado}
          />
        </>
      )}
    </>
  );
}

export default servicios;
