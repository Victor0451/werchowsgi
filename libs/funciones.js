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

export const regHistorialSocio = async (data) => {
  const historial = {
    CONTRATO: data.CONTRATO,
    OPERADOR: data.OPERADOR,
    ARCHIVO: data.ARCHIVO,
    CAMPO: data.CAMPO,
    ANTERIOR: data.ANTERIOR,
    NUEVO: data.NUEVO,
    ACTUALIZA: data.ACTUALIZA,
    f: "socios",
  };

  await axios
    .post(`/api/historia`, historial)
    .then((res) => {
      if (res.status === 200) {
        toast.info("Se registro este movimiento en el historial del socio");
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

export function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
