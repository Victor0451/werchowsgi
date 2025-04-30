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
import FormReportes from "@/components/socios/FormReportes";
import ListadoReportes from "@/components/socios/ListadoReportes";

function Reportes(props) {
  const [zonaSel, guardarZonaSel] = useState("");
  const [mesSel, guardarMesSel] = useState("");
  const [anoSel, guardarAnoSel] = useState("");
  const [carteraSel, guardarCarteraSel] = useState("");
  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [noData, guardarNoData] = useState(false);
  const [show, guardarShow] = useState(false);
  const [listado, guardarListado] = useState([]);
  const [tipoCartera, guardarTipoCartera] = useState("");
  const [sucursal, guardarSucursal] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = (f, value) => {
    if (f === "zona") {
      guardarZonaSel(value);
    } else if (f === "mes") {
      guardarMesSel(value);
    } else if (f === "ano") {
      guardarAnoSel(value);
    } else if (f === "cartera") {
      guardarCarteraSel(value);
    }
  };

  const idPadron = () => {
    if (carteraSel === 0) {
      guardarTipoCartera("Atrasado Cobrador");
    } else if (carteraSel === 1) {
      guardarTipoCartera("Atrasado Oficina");
    } else if (carteraSel === 2) {
      guardarTipoCartera("Atrasado Tarjeta");
    } else if (carteraSel === 3) {
      guardarTipoCartera("Atrasado Banco");
    }

    if (zonaSel === 1) {
      guardarSucursal("Casa Central");
    } else if (zonaSel === 3) {
      guardarSucursal("Palpala");
    } else if (zonaSel === 5) {
      guardarSucursal("Perico");
    } else if (zonaSel === 30) {
      guardarSucursal("El Carmen");
    } else if (zonaSel === 60) {
      guardarSucursal("San Pedro");
    }
  };

  const genReporte = async (emp) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarListado([]);

    if (zonaSel === "") {
      guardarErrores("Debes seleccionar la zona");
    } else if (mesSel === "") {
      guardarErrores("Debes seleccionar el mes");
    } else if (anoSel === "") {
      guardarErrores("Debes seleccionar el año");
    } else if (carteraSel === "") {
      guardarErrores("Debes seleccionar la cartera ");
    } else {
      if (carteraSel === 3 && emp === "M") {
        guardarShow(false);
        toast.info("En Mutual San Valentin, no exite cartera Banco Macro");
        guardarAlertas("En Mutual San Valentin, no exite cartera Banco Macro");
      } else {
        guardarShow(true);

        await axios
          .get(`/api/socios`, {
            params: {
              zona: zonaSel,
              mes: mesSel,
              ano: anoSel,
              cartera: carteraSel,
              f: "reporte cartera",
              emp: emp,
            },
          })
          .then((res) => {
            let data = JSON.parse(res.data);
            if (data.length > 0) {
              idPadron();
              guardarListado(data);
              guardarNoData(false);
            } else {
              guardarNoData(true);
              guardarListado([]);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al generar el reporte");
          });
      }
    }
  };

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormReportes
            handleChange={handleChange}
            genReporte={genReporte}
            errores={errores}
            alertas={alertas}
          />

          {show === false ? null : (
            <ListadoReportes
              listado={listado}
              noData={noData}
              sucursal={sucursal}
              tipoCartera={tipoCartera}
            />
          )}
        </>
      )}
    </>
  );
}

export default Reportes;
