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
import FormRegistrarCaja from "@/components/caja/sucursales/FormRegistrarCaja";
import Router from "next/router";

function Sucursales(props) {
  let conceptoRef = React.createRef();
  let fechaMovRef = React.createRef();
  let importeRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [ingreso, guardarIngreso] = useState([]);
  const [egreso, guardarEgreso] = useState([]);
  const [emp, guardarEmp] = useState(null);
  const [empSel, guardarEmpSel] = useState("");
  const [sucSel, guardarSucSel] = useState("");
  const [movSel, guardarMovSel] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = async (f, value) => {
    if (f === "empresa") {
      console.log(value);
      guardarEmpSel(value);
    } else if (f === "sucursal") {
      guardarSucSel(value);
    } else if (f === "movim") {
      guardarMovSel(value);
    }
  };

  const precargaMovim = () => {
    guardarErrores(null);

    const mov = {
      idcaja: "",
      fecha_carga: moment().format("YYYY-MM-DD"),
      sucursal: sucSel,
      fecha_movimiento: fechaMovRef.current.value,
      concepto: conceptoRef.current.value,
      movimiento: movSel,
      importe: importeRef.current.value,
      operador_carga: usu.usuario,
      empresa: empSel,
      f: "reg movimientos",
    };

    if (mov.empresa === "") {
      guardarErrores("Debes ingresar la sucursal de origen de la caja");
    } else if (mov.sucursal === "") {
      guardarErrores("Debes ingresar la sucursal de origen de la caja");
    } else if (mov.fecha_movimiento === "") {
      guardarErrores("Debes ingresar la fecha del movimiento");
    } else if (mov.concepto === "") {
      guardarErrores("Debes ingresar el concepto del movimiento");
    } else if (mov.movimiento === "") {
      guardarErrores("Debes ingresar el tipo de movimiento");
    } else if (mov.importe === "") {
      guardarErrores("Debes ingresar el importe del movimiento");
    } else {
      if (mov.empresa === "WSRL") {
        guardarEmp("Werchow S.R.L.");
      } else if (mov.empresa === "WSA") {
        guardarEmp("Werchow S.A.");
      } else if (mov.empresa === "M") {
        guardarEmp("Mutual San Valentin");
      }

      console.log(mov);

      if (mov.movimiento === "I") {
        guardarIngreso([...ingreso, mov]);
      } else if (mov.movimiento === "E") {
        guardarEgreso([...egreso, mov]);
      }

      toast.info("Movimiento Precargado", "ATENCION");
    }
  };

  const eliminarPrecarga = (index, movim) => {
    if (movim === "I") {
      ingreso.splice(index, 1);

      guardarIngreso([...ingreso]);

      toast.success("Orden eliminada del checkeo", "ATENCION");
    } else if (movim === "E") {
      egreso.splice(index, 1);

      guardarEgreso([...egreso]);

      toast.success("Orden eliminada del checkeo", "ATENCION");
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

  const postCaja = async () => {
    const caja = {
      fecha_carga: moment().format("YYYY-MM-DD"),
      sucursal: sucSel,
      ingresos: totales(ingreso, "I"),
      egresos: totales(egreso, "E"),
      saldo: totales(ingreso, "I") - totales(egreso, "E"),
      operador_carga: usu.usuario,
      empresa: empSel,
      f: "reg caja",
    };

    await axios
      .post(`/api/caja/sucursales`, caja)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Caja generada, registrando movimientos", "ATENCION");

          postMov(res.data.idcaja);

          let accion = `Se registro caja de sucursal: ${
            caja.sucursal
          } del dia: ${moment(caja.fecha_carga).format(
            "DD/MM/YYYY"
          )}. Ingresos: $ ${caja.ingresos}, Egresos: $ ${
            caja.egresos
          }. Saldo Final: ${caja.saldo}`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            Router.push("/caja/sucursales/listado");
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar la caja", "ATENCION");
      });
  };

  const postMov = async (idcaja) => {
    if (ingreso.length > 0) {
      for (let i = 0; i < ingreso.length; i++) {
        ingreso[i].idcaja = idcaja;

        await axios
          .post(`/api/caja/sucursales`, ingreso[i])
          .then((res) => {})
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al generar la caja", "ATENCION");
          });

        if (i === ingreso.length) {
          toast.info("Ingresos registrados correctamente", "ATENCION");
        }
      }
    } else {
      toast.info("No hay ingresos para registrar", "ATENCION");
    }

    if (egreso.length > 0) {
      for (let i = 0; i < egreso.length; i++) {
        egreso[i].idcaja = idcaja;

        await axios
          .post(`/api/caja/sucursales`, egreso[i])
          .then((res) => {})
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al generar la caja", "ATENCION");
          });

        if (i === egreso.length) {
          toast.info("Egresos registrados correctamente", "ATENCION");
        }
      }
    } else {
      toast.info("No hay egresos para registrar", "ATENCION");
    }
  };

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormRegistrarCaja
            usu={usu}
            ingreso={ingreso}
            egreso={egreso}
            precargaMovim={precargaMovim}
            eliminarPrecarga={eliminarPrecarga}
            postCaja={postCaja}
            totales={totales}
            handleChange={handleChange}
            conceptoRef={conceptoRef}
            fechaMovRef={fechaMovRef}
            importeRef={importeRef}
            errores={errores}
          />
        </>
      )}
    </>
  );
}

export default Sucursales;
