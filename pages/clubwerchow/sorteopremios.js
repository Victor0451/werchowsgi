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
  const [listado, guardarListado] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerStock = async () => {
    await axios
      .get("/api/clubwerchow", {
        params: {
          f: "traer stock",
        },
      })
      .then((res) => {
        if (res.data) {
          let dat = JSON.parse(res.data);
          guardarListado(dat);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el stock");
      });
  };

  const buscarParticipante = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);

    let dni = dniRef.current.value;

    if (!dni || dni.length < 7) {
      guardarErrores("Por favor ingrese un DNI válido");
      return;
    }

    try {
      // Array de tipos de socios a verificar
      const tiposSocios = ["maestro", "mae adh", "mutual", "mut adh"];
      let socioEncontrado = false;

      for (const tipo of tiposSocios) {
        try {
          const response = await fetch(`/api/socios?f=${tipo}&dni=${dni}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();

            // Analizar la respuesta y determinar si existe el socio
            let dat = typeof data === "string" ? JSON.parse(data) : data;
            let arr = Array.isArray(dat) ? dat[0] : dat;

            if (arr && Object.keys(arr).length > 0) {
              socioEncontrado = true;
              // Verificar si ya fue ganador
              const checkGanadorResponse = await fetch("/api/clubwerchow", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  f: "check ganador",
                  dni: dni,
                }),
              });

              if (checkGanadorResponse.ok) {
                const ganadorData = await checkGanadorResponse.json();
                if (ganadorData.esGanador) {
                  guardarErrores(
                    "Esta persona ya ha sido ganadora de un premio anteriormente. Intenta con otro integrante de la ficha."
                  );
                  toast.info(
                    "Esta persona ya ha sido ganadora de un premio anteriormente. Intenta con otro integrante de la ficha."
                  );
                  return;
                }
              }
              guardarShow(true);
              guardarFicha(arr);
              break; // Salir del loop ya que encontramos el socio
            }
            // Si no encontró socio en este tipo, continúa con el siguiente
          }
        } catch (error) {
          console.error(`Error consultando tipo de socio ${tipo}:`, error);
        }
      }

      if (!socioEncontrado) {
        guardarErrores("No se encontró un socio con el DNI proporcionado");
        toast.info("No se encontró un socio con el DNI proporcionado");
      }
    } catch (error) {
      guardarErrores("Error de conexión");
      console.error("Error general:", error);
    }
  };

  const regPremio = async (row) => {
    confirmAlert({
      title: "Confirmar Registro de Premio",
      message: `¿Estás seguro de registrar el premio "${row.producto} - ${row.marca}" para ${ficha.APELLIDOS}, ${ficha.NOMBRES}?`,
      buttons: [
        {
          label: "Sí, Registrar",
          onClick: async () => {
            try {
              const response = await fetch("/api/clubwerchow", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  f: "descontar stock",
                  producto_id: row.idpremio,
                  premio: `${row.producto} - ${row.marca}`,
                  dni: ficha.NRO_DOC,
                  socio: `${ficha.APELLIDOS}, ${ficha.NOMBRES}`,
                }),
              });

              if (response.ok) {
                toast.success("Premio registrado correctamente");
                traerStock();

                // Confirmación de que el premio fue registrado
                confirmAlert({
                  title: "✓ Premio Registrado",
                  message: `El premio ha sido registrado exitosamente para ${ficha.APELLIDOS}, ${ficha.NOMBRES}. Este participante ya tiene su premio y no puede registrar más.`,
                  buttons: [
                    {
                      label: "Entendido",
                      onClick: () => {
                        guardarShow(false);
                        guardarFicha([]);
                      },
                    },
                  ],
                });
              } else {
                toast.error("Error al registrar el premio");
              }
            } catch (error) {
              console.error(error);
              toast.error("Error de conexión");
            }
          },
        },
        {
          label: "Cancelar",
          onClick: () => {},
        },
      ],
    });
  };

  useSWR("/api/sepelio/servicios", traerStock);

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
              ficha={ficha}
              listado={listado}
              regPremio={regPremio}
            />
          ) : null}
        </>
      )}
    </>
  );
}
