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
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import Router from "next/router";
import FormListadoCajas from "@/components/caja/sucursales/FormListadoCajas";

function listado(props) {
  const [cajas, guardarCajas] = useState([]);
  const [noData, guardarNoData] = useState(false);
  const [ingreso, guardarIngreso] = useState([]);
  const [egreso, guardarEgreso] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerCajas = async () => {
    if (usu.perfil === 1 || usu.perfil === 3) {
      await axios
        .get(`/api/caja/sucursales`, {
          params: {
            f: "traer cajas",
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toast.info("No tienes cajas registradas");
            guardarNoData(true);
          } else if (res.data.length > 0) {
            guardarCajas(res.data);
            guardarNoData(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el listado de cajas");
          guardarNoData(true);
        });
    } else {
      await axios
        .get(`/api/caja/sucursales`, {
          params: {
            f: "traer cajas usuario",
            user: usu.usuario,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toast.info("No tienes cajas registradas");
            guardarNoData(true);
          } else if (res.data.length > 0) {
            guardarCajas(res.data);
            guardarNoData(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el listado de cajas");
          guardarNoData(true);
        });
    }
  };

  const totales = (arr, mov) => {
    let total = 0;

    if (mov === "I") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(ingreso[i].importe);
      }

      return total.toFixed(2);
    } else if (mov === "E") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(egreso[i].importe);
      }

      return total.toFixed(2);
    }
  };

  const traerMovimientos = async (idcaja) => {
    await axios
      .get("/api/caja/sucursales", {
        params: {
          f: "traer movimientos caja",
          idcaja: idcaja,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          let arr = res.data;

          for (let i = 0; i < arr.length; i++) {
            if (arr[i].movimiento === "I") {
              guardarIngreso([...ingreso, arr[i]]);
            } else if (arr[i].movimiento === "E") {
              guardarEgreso([...egreso, arr[i]]);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar la caja seleccionada");
      });
  };

  useSWR("/api/caja/sucursales", traerCajas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormListadoCajas
            cajas={cajas}
            noData={noData}
            traerMovimientos={traerMovimientos}
            totales={totales}
            ingreso={ingreso}
            egreso={egreso}
          />
        </>
      )}
    </>
  );
}

export default listado;
