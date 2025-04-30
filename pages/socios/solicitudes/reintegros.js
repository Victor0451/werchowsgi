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
import { ip } from "@/config/config";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormReintegros from "@/components/socios/FormReintegros";

function Reintegros(props) {
  let dniRef = React.createRef();
  let nOrdenRef = React.createRef();
  let importeRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [show, guardarShow] = useState(false);
  const [baja, guardarBaja] = useState(false);
  const [grupo, guardarGrupo] = useState("");
  const [obser, guardarObser] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerSocio = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      toast.info("Buscando al socio... Esto puede demorar unos segundos");

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
            toast.success("Socio encotrado");

            let ficha = JSON.parse(res0.data);
            guardarFicha(ficha);
            guardarShow(true);

            descriGrupo(ficha[0].GRUPO);
          } else if (re.length === 0) {
            axios
              .get("/api/socios", {
                params: {
                  f: "maestro baja",
                  dni: dniRef.current.value,
                },
              })
              .then((res1) => {
                let re = JSON.parse(res1.data);

                if (re.length > 0) {
                  toast.success("Socio encotrado");

                  let ficha = JSON.parse(res1.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  descriGrupo(ficha[0].GRUPO);
                } else {
                  axios
                    .get("/api/socios", {
                      params: {
                        f: "mae adh",
                        dni: dniRef.current.value,
                      },
                    })
                    .then((res2) => {
                      let re = JSON.parse(res2.data);

                      if (re.length > 0) {
                        toast.success("Socio encotrado");

                        let ficha = JSON.parse(res2.data);

                        guardarFicha(ficha);
                        guardarShow(true);
                        guardarBaja(false);

                        descriGrupo(ficha[0].GRUPO);
                      } else {
                        guardarAlertas(
                          "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
                        );
                        toast.info(
                          "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
                        );
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        "Ocurrio un error al tarer los datos del socio en Mutual"
                      );
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del socio en Mutual"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al tarer los datos del socio en Werchow"
          );
        });
    }
  };

  const traerSocioMutual = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      toast.info("Buscando al socio... Esto puede demorar unos segundos");

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
            toast.success("Socio encotrado");

            let ficha = JSON.parse(res2.data);
            guardarFicha(ficha);
            guardarShow(true);

            descriGrupo(ficha[0].GRUPO);
          } else {
            axios
              .get("/api/socios", {
                params: {
                  f: "mutual baja",
                  dni: dniRef.current.value,
                },
              })
              .then((res3) => {
                let re = JSON.parse(res3.data);

                if (re.length > 0) {
                  toast.success("Socio encotrado");

                  let ficha = JSON.parse(res3.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  descriGrupo(ficha[0].GRUPO);
                } else {
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
                        toast.success("Socio encotrado");

                        let ficha = JSON.parse(res3.data);

                        guardarFicha(ficha);
                        guardarShow(true);
                        guardarBaja(false);

                        descriGrupo(ficha[0].GRUPO);
                      } else {
                        guardarAlertas(
                          "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
                        );
                        toast.info(
                          "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
                        );
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        "Ocurrio un error al tarer los datos del socio en Mutual"
                      );
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del socio en Mutual"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al tarer los datos del socio en Mutual"
          );
        });
    }
  };

  const descriGrupo = async (grupo) => {
    await axios
      .get("/api/socios", {
        params: {
          f: "traer grupo",
          grupo: grupo,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          let grup = `${res.data[0].CODIGO} - ${res.data[0].DESCRIP}`;
          guardarGrupo(grup);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el grupo");
      });
  };

  const handleChange = (value, f) => {
    if (f === "obser") {
      guardarObser(value);
    }
  };

  const regReintegro = async () => {
    let data = {
      contrato: ficha[0].CONTRATO,
      socio: `${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}`,
      dni: ficha[0].NRO_DOC,
      entidad: "ISJ",
      nOrden: nOrdenRef.current.value,
      importe: importeRef.current.value,
      operador: usu.usuario,
      fecha: moment().format("YYYY-MM-DD"),
      observacion: obser,
      f: "solicitud reintegro",
    };

    if (data.nOrden === "") {
      guardarErrores("Debes ingresar el numero de orden del reintegro");
    } else if (data.importe === "") {
      guardarErrores("Debes ingresar el monto del reintegro");
    } else {
      await axios
        .post(`/api/socios`, data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("El reintegro se registro con exito");

            setTimeout(() => {
              Router.reload();
            }, 1500);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar el reintegro");
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
          <FormReintegros
            dniRef={dniRef}
            traerSocio={traerSocio}
            traerSocioMutual={traerSocioMutual}
            show={show}
            baja={baja}
            ficha={ficha[0]}
            grupo={grupo}
            errores={errores}
            alertas={alertas}
            nOrdenRef={nOrdenRef}
            importeRef={importeRef}
            handleChange={handleChange}
            regReintegro={regReintegro}
          />
        </>
      )}
    </>
  );
}

export default Reintegros;
