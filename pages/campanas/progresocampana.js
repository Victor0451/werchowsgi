import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import { Redirect } from "@/components/auth/Redirect";
import axios from "axios";
import useSWR from "swr";
import { registrarHistoria } from "@/libs/funciones";
import moment from "moment";
import { toast } from "react-toastify";
import { meses2, anos } from "../../array/array";
import FormProgresoCampaña from "@/components/campanas/FormProgresoCampaña";

function progresocampana(props) {
  const [errores, guardarErrores] = useState(null);
  const [empleados, guardarEmpleados] = useState([]);
  const [operSel, guardarOperSel] = useState("");
  const [mesSel, guardarMesSel] = useState("");
  const [anoSel, guardarAnoSel] = useState("");
  const [asignado, guardarAsignado] = useState([]);
  const [trabajado, guardarTrabajado] = useState([]);
  const [show, guardarShow] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get("/api/campanas", {
        params: {
          f: "traer operadores",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarEmpleados(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al tarer el listado de empleados");
      });
  };

  const handleChange = (f, value) => {
    if (f === "operador") {
      guardarOperSel(value);
    } else if (f === "mes") {
      guardarMesSel(value);
    } else if (f === "ano") {
      guardarAnoSel(value);
    }
  };

  const traerProgreso = async () => {
    if (operSel === "") {
      guardarErrores("Debes elegir un operador");
    } else if (mesSel === "") {
      guardarErrores("Debes elegir el mes a analizar");
    } else if (anoSel === "") {
      guardarErrores("Debes elegir el año a analizar");
    } else {
      await axios
        .get(`/api/campanas`, {
          params: {
            op: operSel,
            mes: mesSel,
            ano: anoSel,
            f: "casos asignados progreso",
          },
        })
        .then((res) => {
          let asig = JSON.parse(res.data);

          guardarAsignado(asig[0].asig);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al traer el listado de casos asignados"
          );
        });

      await axios
        .get(`/api/campanas`, {
          params: {
            op: operSel,
            mes: mesSel,
            ano: anoSel,
            f: "casos trabajados progreso",
          },
        })
        .then((res) => {
          let trab = JSON.parse(res.data);

          guardarTrabajado(trab[0].trab);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al traer el listado de casos trabajados."
          );
        });

      guardarShow(true);
    }
  };

  const porcenTab = (a, t) => {
    let resultado = 0;

    if (t === 0) {
      return resultado;
    } else if (t > 0) {
      resultado = (t * 100) / a;
      return resultado.toFixed(2);
    }
  };

  useSWR("/api/campanas", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : usu ? (
        <>
          <FormProgresoCampaña
            empleados={empleados}
            meses2={meses2}
            anos={anos}
            handleChange={handleChange}
            porcenTab={porcenTab}
            traerProgreso={traerProgreso}
            asignado={asignado}
            trabajado={trabajado}
            operSel={operSel}
            mesSel={mesSel}
            anoSel={anoSel}
            show={show}
          />
        </>
      ) : null}
    </>
  );
}

export default progresocampana;
