import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment, { months } from "moment";
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import FormEfectividad from "@/components/cobranza/FormEfectividad";

function efectividad(props) {
  const [errores, guardarErrores] = useState(null);
  const [mesSel, guardarMesSel] = useState("");
  const [anoSel, guardarAnoSel] = useState("");
  const [cCob, guardarCCob] = useState([]);
  const [cOf, guardarCOf] = useState([]);
  const [cbanco, guardarCbanco] = useState([]);
  const [cpolicia, guardarCpolicia] = useState([]);
  const [ctjt, guardarCtjt] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = async (f, value) => {
    if (f === "mes") {
      guardarMesSel(value);
    } else if (f === "ano") {
      guardarAnoSel(value);
    }
  };

  const traerInfo = async () => {
    if (mesSel === "") {
      guardarErrores("Debes seleccionar el mes a analizar");
    } else if (anoSel === "") {
      guardarErrores("Debes seleccionar el año a analizar");
    } else {
      await axios
        .get(`/api/efectividad`, {
          params: {
            mes: mesSel,
            ano: anoSel,
            f: "traer cCob",
          },
        })
        .then((res) => {
          if (res.data) {
            let list = JSON.parse(res.data);
            guardarCCob(list);
          } else {
            toast.info("Aun no se genero la cartera c1000 en este mes");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar c1000");
        });

      await axios
        .get(`/api/efectividad`, {
          params: {
            mes: mesSel,
            ano: anoSel,
            f: "traer cOf",
          },
        })
        .then((res) => {
          if (res.data) {
            let list = JSON.parse(res.data);
            guardarCOf(list);
          } else {
            toast.info("Aun no se genero la cartera c1000 en este mes");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar c1000");
        });

      await axios
        .get(`/api/efectividad`, {
          params: {
            mes: mesSel,
            ano: anoSel,
            f: "traer ctjt",
          },
        })
        .then((res) => {
          if (res.data) {
            let list = JSON.parse(res.data);
            guardarCtjt(list);
          } else {
            toast.info("Aun no se genero la cartera ctjt en este mes");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar ctjt");
        });

      await axios
        .get(`/api/efectividad`, {
          params: {
            mes: mesSel,
            ano: anoSel,
            f: "traer cbanco",
          },
        })
        .then((res) => {
          if (res.data) {
            let list = JSON.parse(res.data);
            guardarCbanco(list);
          } else {
            toast.info("Aun no se genero la cartera cbanco en este mes");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar cbanco");
        });

      await axios
        .get(`/api/efectividad`, {
          params: {
            mes: mesSel,
            ano: anoSel,
            f: "traer cpolicia",
          },
        })
        .then((res) => {
          if (res.data) {
            let list = JSON.parse(res.data);
            guardarCpolicia(list);
          } else {
            toast.info("Aun no se genero la cartera cpolicia en este mes");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar cpolicia");
        });
    }
  };

  const porcent = (adel, emi, cob) => {
    let efect = 0;

    let emiTot = parseFloat(emi) + parseFloat(adel);
    let cobTot = parseFloat(cob) + parseFloat(adel);

    efect = (cobTot * 100) / emiTot;

    return efect.toFixed(2);
  };

  const totates = (arr, f) => {
    let total = 0;

    if (f === "emi") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].total);
      }
      return total.toFixed(2);
    } else if (f === "fichas emi") {
      for (let i = 0; i < arr.length; i++) {
        total += parseInt(arr[i].fichas);
      }

      return total;
    } else if (f === "cob") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].cobrado);
      }

      return total.toFixed(2);
    } else if (f === "fichas cob") {
      for (let i = 0; i < arr.length; i++) {
        total += parseInt(arr[i].fichascob);
      }

      return total;
    } else if (f === "adelantado") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].adelantado);
      }

      return total;
    }
  };

  let totArr = cCob.concat(cOf.concat(cbanco.concat(cpolicia.concat(ctjt))));

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormEfectividad
            handleChange={handleChange}
            traerInfo={traerInfo}
            errores={errores}
            cCob={cCob}
            cOf={cOf}
            ctjt={ctjt}
            cbanco={cbanco}
            cpolicia={cpolicia}
            porcent={porcent}
            totales={totates}
            totArr={totArr}
          />
        </>
      )}
    </>
  );
}

export default efectividad;
