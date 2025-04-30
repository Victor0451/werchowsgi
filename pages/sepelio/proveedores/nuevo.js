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
import jsCookie from "js-cookie";
import FormNuevoProveedor from "@/components/sepelio/proveedores/FormNuevoProveedor";

function Nuevo(props) {
  let proveedorRef = React.createRef();
  let cuitRef = React.createRef();
  let telefonoRef = React.createRef();
  let domicilioRef = React.createRef();

  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const regProveedor = async () => {
    guardarErrores(null);

    let data = {
      razon: proveedorRef.current.value,
      cuit: cuitRef.current.value,
      telefono: telefonoRef.current.value,
      domicilio: domicilioRef.current.value,
      estado: 1,
      operador: usu.usuario,
      f: "nuevo proveedor",
    };

    if (data.razon === "") {
      guardarErrores("Debes ingresar la Razon Social del proveedor");
    } else if (data.cuit === "") {
      guardarErrores("Debes ingresar el CUIT del proveedor");
    } else {
      await axios
        .post("/api/sepelio/proveedores", data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("El proveedor fue registrado con exito");

            let accion = `Se registro un nuevo proveedor al sistema: ${data.razon} - ${data.cuit}.`;

            registrarHistoria(accion, usu.usuario);

            setTimeout(() => {
              Router.push("/sepelio/proveedores/listado");
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar el proveedor");
        });
    }
  };

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormNuevoProveedor
            proveedorRef={proveedorRef}
            cuitRef={cuitRef}
            telefonoRef={telefonoRef}
            domicilioRef={domicilioRef}
            errores={errores}
            regProveedor={regProveedor}
          />
        </>
      )}
    </>
  );
}

export default Nuevo;
