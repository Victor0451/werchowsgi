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
import FormSorteo from "@/components/clubwerchow/FormSorteo";

function Sorteo(props) {
  const [participantes, guardarParticipantes] = useState([]);
  const [ganadores, guardarGanadores] = useState([]);
  const [selec, guardarSelec] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerParticipantes = async () => {
    await axios
      .get(`/api/clubwerchow`, {
        params: {
          f: "traer participantes sorteo",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);
          guardarParticipantes(list);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de participantes");
      });
  };

  const buscarGanador = (e) => {
    e.preventDefault();

    guardarSelec(null);

    if (participantes.length !== 0) {
      const rand = Math.floor(Math.random() * participantes.length);
      const seleccion = participantes[rand];

      guardarSelec(seleccion);

      regGanador(seleccion);

      guardarGanadores([...ganadores, seleccion]);

      let index = participantes.indexOf(seleccion);

      if (index > -1) {
        participantes.splice(index, 1);
      }

      setTimeout(() => {
        confirmAlert({
          title: `¡¡Felicidades!!`,
          message: `El ganador es: ${seleccion.participante}`,
          buttons: [
            {
              label: "Ok",
              onClick: () => { },
            },
          ],
        });
      }, 200);
    } else if (participantes.length === 0) {
      toast.info("No Hay Mas Participantes");
    }
  };

  const regGanador = async (s) => {
    const winner = {
      participante: s.participante,
      premio: 0,
      fecha: moment().format("YYYY-MM-DD"),
      dni: s.dni,
      telefono: s.telefono,
      f: "reg ganador",
    };

    axios
      .post(`/api/clubwerchow`, winner)
      .then((res) => { })
      .catch((error) => {
        console.log(error);
      });
  };

  const padronGanadores = async () => {
    await axios
      .get(`/api/clubwerchow`, {
        params: {
          f: "traer ganadores sorteo",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);
          guardarGanadores(list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarGanador = async (gan) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar al ganador?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/clubwerchow`, {
                params: {
                  f: "eliminar ganador",
                  idganador: gan.idganador,
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El ganador fue eliminado con exito");
                  padronGanadores();
                  Router.reload();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al eliminar al ganador",
                  "Atencion"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("El ganador no fue eliminado");
          },
        },
      ],
    });
  };

  const imprimir = () => {
    let contenido = document.getElementById("win").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    Router.reload();
  };

  const eliminarGanadores = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar a todos los ganadores?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/clubwerchow`, {
                params: {
                  f: "eliminar ganadores",
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    "El listado de ganadores fue eliminado con exito",
                    "Atencion"
                  );

                  padronGanadores();
                  Router.reload();

                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al eliminar el listado de ganadores",
                  "Atencion"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("Cancelaste la accion, el padron no de elimino!");
          },
        },
      ],
    });
  };

  const traerDatos = () => {
    traerParticipantes();
    padronGanadores();
  };

  useSWR("/api/sepelio/servicios", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormSorteo
            participantes={participantes}
            ganadores={ganadores}
            buscarGanador={buscarGanador}
            eliminarGanador={eliminarGanador}
            eliminarGanadores={eliminarGanadores}
            imprimir={imprimir}
            selec={selec}
          />
        </>
      )}
    </>
  );
}

export default Sorteo;
