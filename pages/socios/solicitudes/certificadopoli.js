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
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import FormCertificadoPoli from "@/components/socios/FormCertificadoPoli";
import ImpCertificadoPoli from "@/components/socios/ImpCertificadoPoli";

function certificadopoli(props) {
  let dniRef = React.createRef();
  let preImpRef = React.createRef();
  let PDFRef = React.createRef();

  const [ficha, guardarFicha] = useState([]);
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [show, guardarShow] = useState(false);
  const [cert, guardarNcert] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerSocio = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
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
                              guardarShow(true);
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
                              "Ocurrio un error al tarer los datos del socio en adherente mutual"
                            );
                          });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        "Ocurrio un error al tarer los datos del socio en mutual"
                      );
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del socio en adherentes"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al tarer los datos del socio en maestro"
          );
        });
    }
  };

  const generarNcert = async () => {
    await setInterval(() => {
      axios
        .get(`/api/socios`, {
          params: {
            f: "generar ncert",
          },
        })
        .then((res) => {
          if (!res.data) {
            guardarNcert(1);
          } else {
            guardarNcert(`${res.data.idcertificado + 1}`);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el N° de Orden");
        });
    }, 2000);
  };

  const registrarCert = async () => {
    const data = {
      contrato: ficha[0].CONTRATO,
      socio: `${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}`,
      fecha: moment().format("YYYY-MM-DD"),
      operador: usu.usuario,
      ncert: cert,
      f: "reg certificado",
    };

    await axios
      .post("/api/socios", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("El certificado generado fue registrado");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al registrar el certificado");
      });
  };

  useSWR("/api/socios", generarNcert);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {show === false ? (
            <FormCertificadoPoli
              alertas={alertas}
              errores={errores}
              dniRef={dniRef}
              traerSocio={traerSocio}
            />
          ) : show === true ? (
            <ImpCertificadoPoli
              ficha={ficha[0]}
              preImpRef={preImpRef}
              PDFRef={PDFRef}
              registrarCert={registrarCert}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default certificadopoli;
