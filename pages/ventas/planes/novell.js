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
import { registrarHistoria } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";

import FormNovell from "@/components/ventas/planes/FormNovell";

function Novell(props) {
  let montoRef = React.createRef();
  let monto_letraRef = React.createRef();
  let anticipoRef = React.createRef();
  let anticipo_letraRef = React.createRef();
  let cuotasRef = React.createRef();
  let cuotasaldoRef = React.createRef();
  let cuotasaldo_letraRef = React.createRef();
  let cuota_mantenimientoRef = React.createRef();
  let gastos_admRef = React.createRef();
  let apellido_solRef = React.createRef();
  let nombre_solRef = React.createRef();
  let dni_solRef = React.createRef();
  let estcivil_solRef = React.createRef();
  let fecha_nac_solRef = React.createRef();
  let dom_solRef = React.createRef();
  let domnum_solRef = React.createRef();
  let piso_solRef = React.createRef();
  let barrio_solRef = React.createRef();
  let localidad_solRef = React.createRef();
  let nacionalidad_solRef = React.createRef();
  let codpostal_solRef = React.createRef();
  let telefono_solRef = React.createRef();
  let movil_solRef = React.createRef();
  let apellido_benRef = React.createRef();
  let nombre_benRef = React.createRef();
  let dni_benRef = React.createRef();
  let estcivil_benRef = React.createRef();
  let fecha_nac_benRef = React.createRef();
  let dom_benRef = React.createRef();
  let domnum_benRef = React.createRef();
  let piso_benRef = React.createRef();
  let barrio_benRef = React.createRef();
  let localidad_benRef = React.createRef();
  let nacionalidad_benRef = React.createRef();
  let codpostal_benRef = React.createRef();
  let telefono_benRef = React.createRef();
  let movil_benRef = React.createRef();

  const [servicioSel, guardarServicioSel] = useState("");
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = (f, value) => {
    if (f === "servicio") {
      guardarServicioSel(value.target.value);
    }
  };

  const altaNovell = async () => {
    const novell = {
      servicio: servicioSel,
      fecha_recepcion: moment().format("YYYY-MM-DD"),
      monto: montoRef.current.value,
      monto_letra: monto_letraRef.current.value,
      anticipo: anticipoRef.current.value,
      anticipo_letra: anticipo_letraRef.current.value,
      cuotas: cuotasRef.current.value,
      cuotasaldo: cuotasaldoRef.current.value,
      cuotasaldo_letra: cuotasaldo_letraRef.current.value,
      cuota_mantenimiento: cuota_mantenimientoRef.current.value,
      gastos_adm: gastos_admRef.current.value,
      apellido_sol: apellido_solRef.current.value,
      nombre_sol: nombre_solRef.current.value,
      dni_sol: dni_solRef.current.value,
      estcivil_sol: estcivil_solRef.current.value,
      fecha_nac_sol: moment(fecha_nac_solRef.current.value).format(
        "YYYY-MM-DD"
      ),
      dom_sol: dom_solRef.current.value,
      domnum_sol: domnum_solRef.current.value,
      piso_sol: piso_solRef.current.value,
      barrio_sol: barrio_solRef.current.value,
      localidad_sol: localidad_solRef.current.value,
      nacionalidad_sol: nacionalidad_solRef.current.value,
      codpostal_sol: codpostal_solRef.current.value,
      telefono_sol: telefono_solRef.current.value,
      movil_sol: movil_solRef.current.value,
      apellido_ben: apellido_benRef.current.value,
      nombre_ben: nombre_benRef.current.value,
      dni_ben: dni_benRef.current.value,
      estcivil_ben: estcivil_benRef.current.value,
      fecha_nac_ben: moment(fecha_nac_benRef.current.value).format(
        "YYYY-MM-DD"
      ),
      dom_ben: dom_benRef.current.value,
      domnum_ben: domnum_benRef.current.value,
      piso_ben: piso_benRef.current.value,
      barrio_ben: barrio_benRef.current.value,
      localidad_ben: localidad_benRef.current.value,
      nacionalidad_ben: nacionalidad_benRef.current.value,
      codpostal_ben: codpostal_benRef.current.value,
      telefono_ben: telefono_benRef.current.value,
      movil_ben: movil_benRef.current.value,
      operador: usu.usuario,
      f: "alta novell",
    };

    if (novell.servicio === "") {
      guardarErrores("Debes ingresar los detalles del servicio");
    } else if (novell.monto === "") {
      guardarErrores("Debes ingresar el monto del plan");
    } else if (novell.monto_letra === "") {
      guardarErrores("Debes ingresar el monto del plan en letras");
    } else if (novell.anticipo === "") {
      guardarErrores("Debes ingresar el monto del anticipo");
    } else if (novell.anticipo_letra === "") {
      guardarErrores("Debes ingresar el monto del anticipo en letras");
    } else if (novell.cuotas === "") {
      guardarErrores(
        "Debes ingresar el numero de cuotas en el que se cancelara el saldo"
      );
    } else if (novell.cuotasaldo === "") {
      guardarErrores("Debes ingresar el monto del saldo");
    } else if (novell.cuotasaldo_letra === "") {
      guardarErrores("Debes ingresar el monto del saldo en letras");
    } else if (novell.cuota_mantenimiento === "") {
      guardarErrores("Debes ingresar el monto de la cuota de mantenimiento");
    } else if (novell.gastos_adm === "") {
      guardarErrores("Debes ingresar el monto de los gastos administrativos");
    } else if (novell.apellido_sol === "") {
      guardarErrores("Debes ingresar el apellido del solicitante");
    } else if (novell.nombre_sol === "") {
      guardarErrores("Debes ingresar el nombre del solicitante");
    } else if (novell.dni_sol === "") {
      guardarErrores("Debes ingresar el DNI del solicitante");
    } else if (novell.estcivil_sol === "") {
      guardarErrores("Debes ingresar el estado civil del solicitante");
    } else if (novell.fecha_nac_sol === "") {
      guardarErrores("Debes ingresar la fecha de nacimiento del solicitante");
    } else if (novell.dom_sol === "") {
      guardarErrores("Debes ingresar el domicilio del solicitante");
    } else if (novell.domnum_sol === "") {
      guardarErrores("Debes ingresar el numero de la calle del solicitante");
    } else if (novell.piso_sol === "") {
      guardarErrores("Debes ingresar el piso en el que vive el solicitante");
    } else if (novell.barrio_sol === "") {
      guardarErrores("Debes ingresar el barrio del solicitante");
    } else if (novell.localidad_sol === "") {
      guardarErrores("Debes ingresar la localidad del solicitante");
    } else if (novell.nacionalidad_sol === "") {
      guardarErrores("Debes ingresar la nacionalidad del solicitante");
    } else if (novell.codpostal_sol === "") {
      guardarErrores("Debes ingresar el codigo postal del solicitante");
    } else if (novell.telefono_sol === "") {
      guardarErrores("Debes ingresar el telefono del solicitante");
    } else if (novell.movil_sol === "") {
      guardarErrores("Debes ingresar el celular del beneficiario");
    } else if (novell.apellido_ben === "") {
      guardarErrores("Debes ingresar el apellido del beneficiario");
    } else if (novell.nombre_ben === "") {
      guardarErrores("Debes ingresar el nombre del beneficiario");
    } else if (novell.dni_ben === "") {
      guardarErrores("Debes ingresar el DNI del beneficiario");
    } else if (novell.estcivil_ben === "") {
      guardarErrores("Debes ingresar el estado civil del beneficiario");
    } else if (novell.fecha_nac_ben === "") {
      guardarErrores("Debes ingresar la fecha de nacimiento del beneficiario");
    } else if (novell.dom_ben === "") {
      guardarErrores("Debes ingresar el domicilio del beneficiario");
    } else if (novell.domnum_ben === "") {
      guardarErrores("Debes ingresar el numero de la calle del beneficiario");
    } else if (novell.piso_ben === "") {
      guardarErrores("Debes ingresar el piso en el que vive el beneficiario");
    } else if (novell.barrio_ben === "") {
      guardarErrores("Debes ingresar el barrio del beneficiario");
    } else if (novell.localidad_ben === "") {
      guardarErrores("Debes ingresar la localidad del beneficiario");
    } else if (novell.nacionalidad_ben === "") {
      guardarErrores("Debes ingresar la nacionalidad del beneficiario");
    } else if (novell.codpostal_ben === "") {
      guardarErrores("Debes ingresar el codigo postal del beneficiario");
    } else if (novell.telefono_ben === "") {
      guardarErrores("Debes ingresar el telefono del beneficiario");
    } else if (novell.movil_ben === "") {
      guardarErrores("Debes ingresar el celular del beneficiario");
    } else {
      await axios
        .post(`/api/ventas`, novell)
        .then((res) => {
          toast.success("El novell se cargo correctamente");

          let accion = `Se registro la venta de un plan novell ID ${res.data.idnovell}`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            Router.push("/ventas/ventaplan/listadonovell");
          }, 500);
        })
        .catch((error) => {
          console.log(error);
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
          <FormNovell
            montoRef={montoRef}
            monto_letraRef={monto_letraRef}
            anticipoRef={anticipoRef}
            anticipo_letraRef={anticipo_letraRef}
            cuotasRef={cuotasRef}
            cuotasaldoRef={cuotasaldoRef}
            cuotasaldo_letraRef={cuotasaldo_letraRef}
            cuota_mantenimientoRef={cuota_mantenimientoRef}
            gastos_admRef={gastos_admRef}
            apellido_solRef={apellido_solRef}
            nombre_solRef={nombre_solRef}
            dni_solRef={dni_solRef}
            estcivil_solRef={estcivil_solRef}
            fecha_nac_solRef={fecha_nac_solRef}
            dom_solRef={dom_solRef}
            domnum_solRef={domnum_solRef}
            piso_solRef={piso_solRef}
            barrio_solRef={barrio_solRef}
            localidad_solRef={localidad_solRef}
            nacionalidad_solRef={nacionalidad_solRef}
            codpostal_solRef={codpostal_solRef}
            telefono_solRef={telefono_solRef}
            movil_solRef={movil_solRef}
            apellido_benRef={apellido_benRef}
            nombre_benRef={nombre_benRef}
            dni_benRef={dni_benRef}
            estcivil_benRef={estcivil_benRef}
            fecha_nac_benRef={fecha_nac_benRef}
            dom_benRef={dom_benRef}
            domnum_benRef={domnum_benRef}
            piso_benRef={piso_benRef}
            barrio_benRef={barrio_benRef}
            localidad_benRef={localidad_benRef}
            nacionalidad_benRef={nacionalidad_benRef}
            codpostal_benRef={codpostal_benRef}
            telefono_benRef={telefono_benRef}
            movil_benRef={movil_benRef}
            handleChange={handleChange}
            errores={errores}
            altaNovell={altaNovell}
          />
        </>
      )}
    </>
  );
}

export default Novell;
