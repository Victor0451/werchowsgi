import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Redirect } from "@/components/auth/Redirect";

import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import useSWR from "swr";
import axios from "axios";
import PanelHistorial from "@/components/adminisracion/historial/PanelHistorial";
import { toast } from "react-toastify";
function historial(props) {
  const [operadores, guardarOperadores] = useState([]);
  const [historial, guardarHistorial] = useState([]);
  const [operSel, guardarOperSel] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerInfo = async () => {
    await axios
      .get("/api/auth", {
        params: {
          f: "operadores",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarOperadores(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de operadores");
      });
  };

  const handleChange = (f, value) => {
    if (f === "operador") {
      guardarOperSel(value);
    }
  };

  const traerHistorial = async () => {
    toast.info(
      "Generando Historial... Este proceso puede demorar unos segundo, Espera el mensaje de finalizacion"
    );

    guardarHistorial([]);

    await axios
      .get("/api/historia", {
        params: {
          f: "traer historial",
          operador: operSel,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarHistorial(res.data);
          toast.success("Historial Generado");
        } else {
          toast.info("No se encontraron registros");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el historial");
      });
  };

  useSWR("/api/historial", traerInfo);

  if (isLoading === true) return <Skeleton />;
  return (
    <>
      {!usu ? (
        <Redirect />
      ) : usu ? (
        <>
          <PanelHistorial
            operadores={operadores}
            handleChange={handleChange}
            traerHistorial={traerHistorial}
            historial={historial}
          />
        </>
      ) : null}
    </>
  );
}

export default historial;
