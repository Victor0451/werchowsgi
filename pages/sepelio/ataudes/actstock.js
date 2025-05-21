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
import Router, { useRouter } from "next/router";
import { FormActStock } from "@/components/sepelio/ataudes/FormActStock";
import jsCookie from "js-cookie";

export default function actStock() {
  let stockIngRef = React.createRef();
  let nRemitoRef = React.createRef();
  let fechaRecRef = React.createRef();

  const [ataud, guardarAtaud] = useState({});
  const [sf, guardarSF] = useState(0);
  const [obser, guardarObser] = useState("");
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idataud) {
    jsCookie.set("idataud", router.query.idataud, { expires: 1 });
  }

  let traerAtaud = async () => {
    if (jsCookie.get("idataud")) {
      await axios
        .get(`/api/sepelio/ataudes`, {
          params: {
            f: "traer ataud",
            id: jsCookie.get("idataud"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarAtaud(res.data);
          } else {
            toast.info("No se encuentra el ataud seleccionado");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el ataud");
        });
    }
  };

  const stockFinal = () => {
    let si = stockIngRef.current.value;

    if (si === "") {
      guardarSF(0);
    } else {
      let sf = parseInt(ataud.stock) + parseInt(si);
      guardarSF(sf);
    }
  };

  const handleChange = (f, value) => {
    if (f === "obser") {
      guardarObser(value.target.value);
    }
  };

  const regHistorialAtaud = async () => {
    const historial = {
      idataud: ataud.idataud,
      stock_anterior: ataud.stock,
      stock_nuevo: sf,
      fecha_carga: moment().format("YYYY-MM-DD"),
      fecha_recepcion: fechaRecRef.current.value,
      remito: nRemitoRef.current.value,
      operador: usu.usuario,
      f: "reg hist ataud",
    };

    await axios.post(`/api/sepelio/ataudes`, historial);
  };

  const actStockAtaud = async () => {
    guardarErrores(null);

    let stck = {
      stock: sf,
      observaciones: obser,
      fecha_reposicion: moment().format("YYYY-MM-DD"),
      idataud: ataud.idataud,
      operador: usu.usuario,
      f: "act stock",
      idataud: ataud.idataud,
    };

    if (fechaRecRef.current.value === "") {
      guardarErrores("Debes ingresar la fecha de recepcion del stock");
    } else if (nRemitoRef.current.value === "") {
      guardarErrores(
        "Debes ingresar el N° de Remito, en caso de no tenerlo ingresa 0"
      );
    } else {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres actualizar el stock?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put(`/api/sepelio/ataudes`, stck)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("El stock fue actualizado con exito");

                    let accion = `Se actualizo el stock del ataud ID: ${ataud.idataud}, ${ataud.nombre}, fabricante ${ataud.fabricante}, tipo ${ataud.tipo} en el sistema. Stock anterior: ${ataud.stock}, nuevo stock ${stck.stock}.`;

                    registrarHistoria(accion, usu.usuario);

                    regHistorialAtaud();

                    setTimeout(() => {
                      Router.push("/sepelio/ataudes/listadoataudes");
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al actualizar el stock");
                });
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    }
  };

  useSWR("/api/sepelio/ataudes", traerAtaud);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormActStock
            ataud={ataud}
            sf={sf}
            stockIngRef={stockIngRef}
            nRemitoRef={nRemitoRef}
            fechaRecRef={fechaRecRef}
            stockFinal={stockFinal}
            handleChange={handleChange}
            actStockAtaud={actStockAtaud}
            errores={errores}
          />
        </>
      )}
    </>
  );
}
