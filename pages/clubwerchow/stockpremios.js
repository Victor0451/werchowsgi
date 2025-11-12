import React, { useState, useEffect } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import FormNuevoStock from "@/components/clubwerchow/FormNuevoStock";

function StockPremios(props) {
  let prodcutoRef = React.createRef();
  let marcaRef = React.createRef();
  let stockRef = React.createRef();
  let ObservacionRef = React.createRef();

  const [listado, guardarListado] = useState([]);
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerStock = async () => {
    await axios
      .get("/api/clubwerchow", {
        params: {
          f: "traer stock",
        },
      })
      .then((res) => {
        if (res.data) {
          let dat = JSON.parse(res.data);
          guardarListado(dat);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el stock");
      });
  };

  const regStock = async () => {
    guardarErrores(null);

    let stock = {
      producto: prodcutoRef.current.value,
      marca: marcaRef.current.value,
      stock: stockRef.current.value,
      fecha: moment().format("YYYY-MM-DD"),
      operador: usu.usuario,
      observacion: ObservacionRef.current.value,
      f: "reg stock",
    };

    if (stock.producto === "") {
      guardarErrores("Debes ingresar el nombre del producto");
      toast.warning("Debes ingresar el nombre del producto");
    } else if (stock.stock === "") {
      guardarErrores("Debes ingresar el stock del producto");
      toast.warning("Debes ingresar el stock del producto");
    } else {
      console.log(stock);
      await axios
        .post("/api/clubwerchow", stock)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Producto Registrado");

            let accion = `Se registro nuevo premio en el stock: ${stock.producto}, cantidad de ${stock.stock} unidades. Observacion: ${stock.observacion}`;

            registrarHistoria(accion, usu.usuario);

            traerStock();
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar el producto");
        });
    }
  };

  useSWR("/api/clubwerchow", traerStock);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormNuevoStock
            listado={listado}
            prodcutoRef={prodcutoRef}
            marcaRef={marcaRef}
            stockRef={stockRef}
            ObservacionRef={ObservacionRef}
            errores={errores}
            regStock={regStock}
            traerStock={traerStock}
          />
        </>
      )}
    </>
  );
}

export default StockPremios;
