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
import Router from "next/router";
import jsCookie from "js-cookie";
import FormOrdenPago from "@/components/ordenpago/FormOrdenPago";
import { sucusmed } from "../../array/array";
import FormInformes from "@/components/medicos/FormInformes";

function informes(props) {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();
  let ordenesRef = React.createRef();
  let topRef = React.createRef();

  const [sucurSel, guardarSucurSel] = useState("");
  const [errores, guardarErrores] = useState(null);
  const [infoEspeOr, guardarInfoEspeOr] = useState([]);
  const [infoEspePr, guardarInfoEspePr] = useState([]);
  const [infoPresOr, guardarInfoPresOr] = useState([]);
  const [infoPresPr, guardarInfoPresPr] = useState([]);
  const [infoTopPr, guardarInfoTopPr] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = async (f, value) => {
    guardarErrores(null);

    if (f === "sucursal") {
      guardarSucurSel(value);
    }
  };

  const traerInforme = async () => {
    if (sucurSel === "") {
      guardarErrores("Debes seleccionar la sucursal a analizar");
    } else if (desdeRef.current.value === "") {
      guardarErrores("Debes ingresar la fecha de inicio del rango a analizar");
    } else if (hastaRef.current.value === "") {
      guardarErrores("Debes ingresar la fecha de fin del rango a analizar");
    } else if (desdeRef.current.value > hastaRef.current.value) {
      guardarErrores("la fecha DESDE, no puede ser mayor que la fecha HASTA");
    } else {
      let data = {
        sucursal: sucurSel,
        desde: desdeRef.current.value,
        hasta: hastaRef.current.value,
      };

      await axios
        .get("/api/medicos", {
          params: {
            sucursal: data.sucursal,
            desde: data.desde,
            hasta: data.hasta,
            f: "informe orden por especialidad",
          },
        })
        .then((res) => {
          if (res.data !== "[]") {
            let dat = JSON.parse(res.data);

            guardarInfoEspeOr(dat);
          } else {
            toast.info(
              "No se encontraron registros, para los parametros ingresados"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el informe");
        });

      await axios
        .get("/api/medicos", {
          params: {
            sucursal: data.sucursal,
            desde: data.desde,
            hasta: data.hasta,
            f: "informe practicas por especialidad",
          },
        })
        .then((res) => {
          if (res.data !== "[]") {
            let dat = JSON.parse(res.data);

            guardarInfoEspePr(dat);
          } else {
            toast.info(
              "No se encontraron registros, para los parametros ingresados"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el informe");
        });

      await axios
        .get("/api/medicos", {
          params: {
            sucursal: data.sucursal,
            desde: data.desde,
            hasta: data.hasta,
            f: "informe orden por prestador",
          },
        })
        .then((res) => {
          if (res.data !== "[]") {
            let dat = JSON.parse(res.data);

            guardarInfoPresOr(dat);
          } else {
            toast.info(
              "No se encontraron registros, para los parametros ingresados"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el informe");
        });

      await axios
        .get("/api/medicos", {
          params: {
            sucursal: data.sucursal,
            desde: data.desde,
            hasta: data.hasta,
            f: "informe practicas por prestador",
          },
        })
        .then((res) => {
          if (res.data !== "[]") {
            let dat = JSON.parse(res.data);

            guardarInfoPresPr(dat);
          } else {
            toast.info(
              "No se encontraron registros, para los parametros ingresados"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el informe");
        });

      await axios
        .get("/api/medicos", {
          params: {
            sucursal: data.sucursal,
            desde: data.desde,
            hasta: data.hasta,
            f: "informe top practicas",
          },
        })
        .then((res) => {
          if (res.data !== "[]") {
            let dat = JSON.parse(res.data);

            guardarInfoTopPr(dat);
          } else {
            toast.info(
              "No se encontraron registros, para los parametros ingresados"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el informe");
        });
    }
  };

  const calTotal = (arr, f) => {
    let total = 0;

    if (f === "usos") {
      for (let i = 0; i < arr.length; i++) {
        total += parseInt(arr[i].USOS);
      }

      return total;
    }
    if (f === "importe") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }

      return total.toFixed(2);
    }
  };

  // //   useSWR("/api/ordenpago", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormInformes
            errores={errores}
            sucusmed={sucusmed}
            handleChange={handleChange}
            desdeRef={desdeRef}
            hastaRef={hastaRef}
            traerInforme={traerInforme}
            infoEspeOr={infoEspeOr}
            infoEspePr={infoEspePr}
            infoPresOr={infoPresOr}
            infoPresPr={infoPresPr}
            infoTopPr={infoTopPr}
            calTotal={calTotal}
            ordenesRef={ordenesRef}
            topRef={topRef}
          />
        </>
      )}
    </>
  );
}

export default informes;
