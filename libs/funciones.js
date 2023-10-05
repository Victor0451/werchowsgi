import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import Router from "next/router";

export const registrarHistoria = async (accion, user) => {
  const historial = {
    operador: user,
    fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    accion: accion,
    f: "sistema",
  };

  await axios
    .post(`/api/historia`, historial)
    .then((res) => {
      if (res.status === 200) {
        toast.info("Esta accion se registo en el historial");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ocurrio un error al registrar la accion en el historial");
    });
};

export const registrarHistorialAprobacion = async (data, user) => {
  const historial = {
    operador: user,
    idprestamo: data.ptm_id,
    contrato: data.ptm_ficha,
    afiliado: data.ptm_afi,
    fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    productor: data.ptm_op,
    f: "prestamos",
  };

  await axios
    .post(`/api/historia`, historial)
    .then((res) => {
      if (res.status === 200) {
        toast.info("Esta accion se registrara en el historial", "ATENCION");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ocurrio un error al registrar el historial", "ATENCION");
    });
};

export const regHistorialAuto = async (idauto, patente, user, accion) => {
  const historial = {
    patente: patente,
    idauto: idauto,
    operador: user,
    fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    accion: accion,
    f: "autos",
  };

  await axios
    .post(`/api/historia`, historial)
    .then((res) => {
      if (res.status === 200) {
        toast.info("Se registro este movimiento en el historial del auto");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ocurrio un error al registrar el historial");
    });
};

// CALCULO GASTO LUTO NUEVO

export const gastoLuto = (plan, alta, cantadh) => {
  // NUEVO CALCULO 09/2022

  let inicio = moment(alta).format("YYYY-MM-DD");

  let anti = moment().diff(inicio, "years");

  if (anti <= 3) {
    return 15000;
  } else if (anti > 3) {
    return 20000;
  }
};
