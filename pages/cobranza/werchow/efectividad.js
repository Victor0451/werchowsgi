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

      // await axios
      //   .get(`/api/efectividad`, {
      //     params: {
      //       mes: mesSel,
      //       ano: anoSel,
      //       f: "traer cbanco",
      //     },
      //   })
      //   .then((res) => {
      //     if (res.data) {
      //       let list = JSON.parse(res.data);
      //       guardarCbanco(list);
      //     } else {
      //       toast.info("Aun no se genero la cartera cbanco en este mes");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error("Ocurrio un error al generar cbanco");
      //   });

      // await axios
      //   .get(`/api/efectividad`, {
      //     params: {
      //       mes: mesSel,
      //       ano: anoSel,
      //       f: "traer cpolicia",
      //     },
      //   })
      //   .then((res) => {
      //     if (res.data) {
      //       let list = JSON.parse(res.data);
      //       guardarCpolicia(list);
      //     } else {
      //       toast.info("Aun no se genero la cartera cpolicia en este mes");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error("Ocurrio un error al generar cpolicia");
      //   });
    }
  };

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
            cbanco={cbanco}
            cpolicia={cpolicia}
          />
        </>
      )}
    </>
  );
}

export default efectividad;
