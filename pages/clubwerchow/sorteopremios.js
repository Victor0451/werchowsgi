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
import FormSorteoPremios from "@/components/clubwerchow/FormSorteoPremios";
import FormParticipante from "@/components/clubwerchow/FormParticipante";

export default function SorteoPremios(props) {
  const dniRef = React.createRef();

  const [participantes, guardarParticipantes] = useState([]);
  const [selec, guardarSelec] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [show, guardarShow] = useState(false);
  const [tiro, guardarTiro] = useState(false);
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerParticipantes = async () => {
    await axios
      .get(`/api/clubwerchow`, {
        params: {
          f: "traer stock",
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
    if (tiro === false) {
      e.preventDefault();

      guardarSelec(null);

      if (participantes.length !== 0) {
        const rand = Math.floor(Math.random() * participantes.length);
        const seleccion = participantes[rand];

        guardarSelec(seleccion);

        regGanador(seleccion);

        guardarTiro(true);

        setTimeout(() => {
          confirmAlert({
            title: `¡¡Felicidades!!`,
            message: `Ganaste un: ${seleccion.producto} - ${seleccion.observacion}`,
            buttons: [
              {
                label: "Ok",
                onClick: () => {},
              },
            ],
          });
        }, 150);
      } else if (participantes.length === 0) {
        toast.info("No Hay Mas Participantes");
      }
    } else if (tiro === true) {
      confirmAlert({
        title: `YA GANASTE`,
        message: `Ahora es el turno de otro socio, gracias por confiar en nosotros`,
        buttons: [
          {
            label: "Ok",
            onClick: () => {},
          },
        ],
      });
    }
  };

  const regGanador = async (s) => {
    const winner = {
      participante: `${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}`,
      premio: `${s.producto} - ${s.observacion}`,
      fecha: moment().format("YYYY-MM-DD"),
      dni: `${ficha[0].NRO_DOC}`,
      f: "reg ganador hist",
    };

    axios
      .post(`/api/clubwerchow`, winner)
      .then((res) => {
        if (res.status === 200) {
          toast.success("El premio fue registrado en el historial del socio");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("win").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;
  };

  const buscarParticipante = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "servicios",
            dni: dniRef.current.value,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            toast.info("El DNI ingresado pertenece a un servicio registrado");
            guardarAlertas(
              "El DNI ingresado pertenece a un servicio registrado"
            );
          } else if (res.data.length === 0) {
            axios
              .get("/api/socios", {
                params: {
                  f: "maestro",
                  dni: dniRef.current.value,
                },
              })
              .then((res0) => {
                let re = JSON.parse(res0.data);
                if (re.length > 0) {
                  let ficha = JSON.parse(res0.data);
                  guardarFicha(ficha);
                  guardarShow(true);
                } else if (re.length === 0) {
                  axios
                    .get("/api/socios", {
                      params: {
                        f: "mae adh",
                        dni: dniRef.current.value,
                      },
                    })
                    .then((res1) => {
                      let re = JSON.parse(res1.data);

                      if (re.length > 0) {
                        guardarFicha(JSON.parse(res1.data));
                        guardarShow(true);
                      } else if (re.length === 0) {
                        axios
                          .get("/api/socios", {
                            params: {
                              f: "mutual",
                              dni: dniRef.current.value,
                            },
                          })
                          .then((res2) => {
                            let re = JSON.parse(res2.data);

                            if (re.length > 0) {
                              let ficha = JSON.parse(res2.data);
                              guardarFicha(ficha);
                              guardarShow(true);
                            } else if (re.length === 0) {
                              axios
                                .get("/api/socios", {
                                  params: {
                                    f: "mut adh",
                                    dni: dniRef.current.value,
                                  },
                                })
                                .then((res3) => {
                                  let re = JSON.parse(res3.data);

                                  if (re.length > 0) {
                                    guardarFicha(JSON.parse(res3.data));
                                  } else if (re.length === 0) {
                                    toast.info(
                                      "El DNI ingresado no se encuentra registrado o esta dado de baja"
                                    );
                                    guardarAlertas(
                                      "El DNI ingresado no se encuentra registrado o esta dado de baja"
                                    );
                                  }
                                })
                                .catch((error) => {
                                  console.log(error);
                                  toast.error(
                                    "Ocurrio un error al tarer los datos del difunto en adherente mutual"
                                  );
                                });
                            }
                          })
                          .catch((error) => {
                            console.log(error);
                            toast.error(
                              "Ocurrio un error al tarer los datos del difunto en mutual"
                            );
                          });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        "Ocurrio un error al tarer los datos del difunto en adherentes"
                      );
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del difunto en maestro"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al tarer los datos del difunto en servicios"
          );
        });
    }
  };

  const traerDatos = () => {
    traerParticipantes();
  };

  useSWR("/api/sepelio/servicios", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {show === false ? (
            <FormParticipante
              dniRef={dniRef}
              buscarParticipante={buscarParticipante}
              errores={errores}
              alertas={alertas}
            />
          ) : show === true ? (
            <FormSorteoPremios
              Premios
              participantes={participantes}
              buscarGanador={buscarGanador}
              imprimir={imprimir}
              selec={selec}
              ficha={ficha}
            />
          ) : null}
        </>
      )}
    </>
  );
}
