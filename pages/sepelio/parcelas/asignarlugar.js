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
import FormAsignarLugar from "@/components/sepelio/parcelas/FormAsignarLugar";

function AsignarLugares(props) {
  let dniRef = React.createRef();

  const [parcela, guardarParcela] = useState({});
  const [ficha, guardarFicha] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idparcela) {
    jsCookie.set("idparcela", router.query.idparcela);
  }

  const traerParcelas = async () => {
    if (jsCookie.get("idparcela"))
      await axios
        .get(`/api/sepelio/parcelas`, {
          params: {
            f: "traer parcela",
            id: jsCookie.get("idparcela"),
          },
        })

        .then((res) => {
          if (res.data[0]) {
            guardarParcela(res.data[0]);
          } else {
            toast.info("No se encuentra la parcela seleccionada");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la parcela seleccionada");
          guardarNoData(true);
        });
  };

  const traerDifunto = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarFicha(null);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      await axios
        .get("/api/sepelio/parcelas", {
          params: {
            f: "check parcela",
            dni: dniRef.current.value,
          },
        })
        .then((res) => {
          let re = JSON.parse(res.data);

          if (re.length > 0) {
            toast.info(
              `El DNI ${re[0].dni}, ya tiene asignada la parcela: ${
                re[0].parcela
              }, manzana: ${re[0].mza}, lote: ${re[0].lote}, el dia ${moment(
                re[0].fecha
              ).format("DD/MM/YYYY")}`
            );
            guardarAlertas(
              `El DNI ${re[0].dni}, ya tiene asignada la parcela: ${
                re[0].parcela
              }, manzana: ${re[0].mza}, lote: ${re[0].lote}, el dia ${moment(
                re[0].fecha
              ).format("DD/MM/YYYY")}`
            );
          } else if (re.length === 0) {
            axios
              .get("/api/sepelio/servicios", {
                params: {
                  f: "check servicio",
                  dni: dniRef.current.value,
                },
              })
              .then((res1) => {
                if (res1.data) {
                  guardarFicha(res1.data);
                } else if (!res1.data) {
                  toast.info(
                    "El DNI ingresado no pertenece a un servicio registrado"
                  );
                  guardarAlertas(
                    "El DNI ingresado no pertenece a un servicio registrado"
                  );
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del difunto en servicios"
                );
              });

            //   axios
            //     .get("/api/socios", {
            //       params: {
            //         f: "maestro",
            //         dni: dniRef.current.value,
            //       },
            //     })
            //     .then((res0) => {
            //       let re = JSON.parse(res0.data);
            //       if (re.length > 0) {
            //         let ficha = JSON.parse(res0.data);
            //         guardarFicha(ficha);
            //       } else if (re.length === 0) {
            //         axios
            //           .get("/api/socios", {
            //             params: {
            //               f: "maestro baja",
            //               dni: dniRef.current.value,
            //             },
            //           })
            //           .then((res1) => {
            //             let re = JSON.parse(res1.data);

            //             if (re.length > 0) {
            //               guardarFicha(JSON.parse(res1.data));
            //             } else if (re.length === 0) {
            //               axios
            //                 .get("/api/socios", {
            //                   params: {
            //                     f: "mae adh",
            //                     dni: dniRef.current.value,
            //                   },
            //                 })
            //                 .then((res2) => {
            //                   let re = JSON.parse(res2.data);

            //                   if (re.length > 0) {
            //                     let ficha = JSON.parse(res2.data);
            //                     guardarFicha(ficha);
            //                   } else if (re.length === 0) {
            //                     axios
            //                       .get("/api/socios", {
            //                         params: {
            //                           f: "mae adh baja",
            //                           dni: dniRef.current.value,
            //                         },
            //                       })
            //                       .then((res3) => {
            //                         console.log(res3);
            //                         let re = JSON.parse(res3.data);

            //                         if (re.length > 0) {
            //                           guardarFicha(JSON.parse(res3.data));
            //                         } else if (re.length === 0) {
            //                           toast.info(
            //                             "El DNI ingresado no se encuentra registrado"
            //                           );
            //                           guardarAlertas(
            //                             "El DNI ingresado no se encuentra registrado"
            //                           );
            //                         }
            //                       })
            //                       .catch((error) => {
            //                         console.log(error);
            //                         toast.error(
            //                           "Ocurrio un error al tarer los datos del difunto en adherente mutual"
            //                         );
            //                       });
            //                   }
            //                 })
            //                 .catch((error) => {
            //                   console.log(error);
            //                   toast.error(
            //                     "Ocurrio un error al tarer los datos del difunto en mutual"
            //                   );
            //                 });
            //             }
            //           })
            //           .catch((error) => {
            //             console.log(error);
            //             toast.error(
            //               "Ocurrio un error al tarer los datos del difunto en adherentes"
            //             );
            //           });
            //       }
            //     })
            //     .catch((error) => {
            //       console.log(error);
            //       toast.error(
            //         "Ocurrio un error al tarer los datos del difunto en maestro"
            //       );
            //     });
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

  const updateLugar = async () => {
    let data = {
      idparcela: parcela.idparcela,
      lugares: parcela.lugares - 1,
      f: "update lugar",
    };

    await axios
      .put("/api/sepelio/parcelas", data)
      .then((res) => {
        if (res.status === 200) {
          toast.info(
            "Se actualizo la cantidad de lugares disponibles de la parcela"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al actualizar la cantidad de lugares de la parcela"
        );
      });
  };

  const asigLugar = async () => {
    const datos = {
      idparcela: parcela.idparcela,
      contrato: ficha[0].CONTRATO,
      dni: ficha[0].NRO_DOC,
      fecha: moment().format("YYYY-MM-DD"),
      operador: usu.usuario,
      lugar: "",
      f: "asig lugar",
    };

    if (parcela.lugares === 3) {
      datos.lugar = parcela.lugares - 2;
    } else if (parcela.lugares === 2) {
      datos.lugar = parcela.lugares;
    } else if (parcela.lugares === 1) {
      datos.lugar = parcela.lugares + 2;
    }

    await axios
      .post(`/api/sepelio/parcelas`, datos)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Se asigno el lugar con exito");

          updateLugar();

          let accion = `Se asigno un nuevo lugar en la parcela: ${parcela.parcela}, manzana: ${parcela.mza}, lote: ${parcela.lote} perteneciente al cementerio: ${parcela.cementerio}.`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            Router.push("/sepelio/parcelas/listadoparcela");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al asignar el lugar");
      });
  };

  useSWR("/api/sepelio/caja", traerParcelas);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormAsignarLugar
            parcela={parcela}
            socio={ficha}
            traerDifunto={traerDifunto}
            alertas={alertas}
            errores={errores}
            dniRef={dniRef}
            asigLugar={asigLugar}
          />
        </>
      )}
    </>
  );
}

export default AsignarLugares;
