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
import FormPlanificacion from "@/components/sepelio/guardias/FormPlanificacion";

function Planificacion(props) {
  let inicioRef = React.createRef();
  let finRef = React.createRef();

  const [operadores, guardarOperadores] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [lugarSel, guardarLugarSel] = useState("");
  const [opSel, guardarOpSel] = useState("");
  const [feriadoSel, guardarFeriadoSel] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const handleChange = (flag, value) => {
    if (flag === "lugar") {
      guardarLugarSel(value);
    } else if (flag === "feriado") {
      guardarFeriadoSel(value);
    } else if (flag === "operador") {
      guardarOpSel(value);
    }
  };

  const regPlanificacion = async () => {
    guardarErrores(null);

    let data = {
      lugar: lugarSel,
      inicio: moment(inicioRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      fin: moment(finRef.current.value).format("YYYY-MM-DD HH:mm:ss"),
      horas: "",
      feriado: feriadoSel,
      mes_planificacion: moment().locale("es-es").format("MMMM"),
      ano_planificacion: moment().format("YYYY"),
      operador: opSel,
      f: "nueva planificacion",
    };

    if (data.lugar === "") {
      guardarErrores(
        "Debes seleccionar el lugar donde se realizara la guardia"
      );
    } else if (data.inicio === "") {
      guardarErrores("Debes ingresar la fecha y hora de inicio de la guardia");
    } else if (data.fin === "") {
      guardarErrores(
        "Debes ingresar la fecha y hora de finalizacion de la guardia"
      );
    } else if (data.feriado === "") {
      guardarErrores(
        "Debes seleccionar si la fecha de la guardia es en un feriado o no"
      );
    } else if (data.operador === "") {
      guardarErrores("Debes seleccionar al operador afectado a la guardia");
    } else {
      data.horas = moment(data.fin).diff(moment(data.inicio), "hour");

      await axios
        .post("/api/sepelio/guardias", data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Se registro la planificacion con exito");

            let accion = `Se registro la planificacion de guardia: ID ${res.data.idturno}, para: ${data.operador}, inicia ${data.inicio}, termina ${data.fin}, correspondiente al mes ${data.mes_planificacion}.`;
            registrarHistoria(accion, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registra esta planificacion");
        });
    }
  };

  const traerDatos = async () => {
    await axios
      .get("/api/sepelio/caja", {
        params: {
          f: "traer operadores",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarOperadores(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay operadores registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de operadores");
      });
  };

  useSWR("/api/sepelio/guardias", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormPlanificacion
            operadores={operadores}
            errores={errores}
            handleChange={handleChange}
            regPlanificacion={regPlanificacion}
            inicioRef={inicioRef}
            finRef={finRef}
          />
        </>
      )}
    </>
  );
}

export default Planificacion;
