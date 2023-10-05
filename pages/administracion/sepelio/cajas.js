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
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import FormGenerarCaja from "@/components/adminisracion/sepelio/cajas/FormGenerarCaja";

function cajas(props) {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [ingresos, guardarIngresos] = useState([]);
  const [egresos, guardarEgresos] = useState([]);
  const [reporte, guardarReporte] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [emp, guardarEmp] = useState("");
  const [desde, guardarDesde] = useState("");
  const [hasta, guardarHasta] = useState("");
  const [show, guardarShow] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerMovim = async (empre) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarIngresos([]);
    guardarEgresos([]);
    guardarEmp("");
    guardarShow(false);

    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "") {
      guardarErrores("Ingresa la fecha en el campo DESDE");
    } else if (hasta === "") {
      guardarErrores("Ingresa la fecha en el campo HASTA");
    } else if (desde > hasta) {
      guardarErrores(
        "La fecha en el campo DESDE no puede ser mayor a la fecha en el campo HASTA"
      );
    } else {
      guardarEmp(empre);

      await axios
        .get("/api/administracion/sepelio", {
          params: {
            f: `ingresos ${empre}`,
            desde: desde,
            hasta: hasta,
          },
        })
        .then((res) => {
          let data = JSON.parse(res.data);

          guardarIngresos(data);
          guardarShow(true);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar los ingresos");
        });

      await axios
        .get("/api/administracion/sepelio", {
          params: {
            f: `egresos ${empre}`,
            desde: desde,
            hasta: hasta,
          },
        })
        .then((res) => {
          let data = JSON.parse(res.data);

          guardarEgresos(data);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar los Egresos");
        });
    }
  };

  const calcTotales = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].importe;
    }
    return total.toFixed(2);
  };

  const postCajas = async (data) => {
    await axios.post("/api/administracion/sepelio", data);
  };

  const generarCaja = async () => {
    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "") {
      guardarErrores("Ingresa la fecha en el campo DESDE");
    } else if (hasta === "") {
      guardarErrores("Ingresa la fecha en el campo HASTA");
    } else if (desde > hasta) {
      guardarErrores(
        "La fecha en el campo DESDE no puede ser mayor a la fecha en el campo HASTA"
      );
    } else {
      await axios
        .get("/api/administracion/sepelio", {
          params: {
            desde: desde,
            hasta: hasta,
            emp: emp,
            f: "consulta caja",
          },
        })
        .then((res) => {
          let data = res.data;

          if (data.length > 0) {
            toast.warning(
              `En este periodo ya se genero la caja de Werchow ${emp} `
            );
            guardarAlertas(
              `En este periodo ya se genero la caja de Werchow ${emp} `
            );
          } else if (data.length === 0) {
            toast.info(`No hay ninguna caja generada en este perido`);
            guardarAlertas(`No hay ninguna caja generada en este perido`);

            setTimeout(() => {
              confirmAlert({
                title: "ATENCION",
                message: "¿Quieres registrar este periodo?.",
                buttons: [
                  {
                    label: "Si",
                    onClick: () => {
                      let data = {
                        desde: desde,
                        hasta: hasta,
                        empresa: emp,
                        operador: usu.usuario,
                        fecha: moment().format("YYYY-MM-DD"),
                        f: "reg periodo",
                      };

                      axios
                        .post(`/api/administracion/sepelio`, data)
                        .then((res) => {
                          if (res.status === 200) {
                            toast.success("Se registro el periodo con exito");

                            let data = {
                              nro_caja: "",
                              fecha: "",
                              puesto: "",
                              codigo: "",
                              movim: "",
                              cuenta: "",
                              tipo: "",
                              serie: "",
                              factura: "",
                              importe: "",
                              comentarios: "",
                              operador: "",
                              cuit: "",
                              proveedor: "",
                              f: "",
                            };

                            for (let i = 0; i < ingresos.length; i++) {
                              if (i === 0) {
                                toast.info("Generando Ingresos");
                              }

                              data.nro_caja = ingresos[i].nro_caja;
                              data.fecha = ingresos[i].fecha;
                              data.puesto = ingresos[i].puesto;
                              data.codigo = ingresos[i].codigo;
                              data.movim = ingresos[i].movim;
                              data.cuenta = ingresos[i].cuenta;
                              data.tipo = ingresos[i].tipo;
                              data.serie = ingresos[i].serie;
                              data.factura = ingresos[i].factura;
                              data.importe = ingresos[i].importe;
                              data.comentarios = ingresos[i].comentarios;
                              data.operador = ingresos[i].operador;
                              data.cuit = ingresos[i].cuit;
                              data.proveedor = ingresos[i].proveedor;
                              data.f = `reg ${emp}`;

                              postCajas(data);

                              if (i === ingresos.length - 1) {
                                toast.success(
                                  "Ingresos registrados correctamente"
                                );
                              }
                            }

                            for (let i = 0; i < egresos.length; i++) {
                              if (i === 0) {
                                toast.info("Generando Egresos");
                              }

                              data.nro_caja = egresos[i].nro_caja;
                              data.fecha = egresos[i].fecha;
                              data.puesto = egresos[i].puesto;
                              data.codigo = egresos[i].codigo;
                              data.movim = egresos[i].movim;
                              data.cuenta = egresos[i].cuenta;
                              data.tipo = egresos[i].tipo;
                              data.serie = egresos[i].serie;
                              data.factura = egresos[i].factura;
                              data.importe = egresos[i].importe;
                              data.comentarios = egresos[i].comentarios;
                              data.operador = egresos[i].operador;
                              data.cuit = egresos[i].cuit;
                              data.proveedor = egresos[i].proveedor;
                              data.f = `reg ${emp}`;

                              postCajas(data);

                              if (i === egresos.length - 1) {
                                toast.success(
                                  "Egresos registrados correctamente"
                                );
                              }
                            }
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                          toast.error(
                            "Ocurrio un error al registrar el periodo"
                          );
                        });
                    },
                  },
                  {
                    label: "No",
                    onClick: () => {
                      toast.info("No se registrara el periodo");
                    },
                  },
                ],
              });
            }, 1500);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al consultar el periodo");
        });
    }
  };

  const reporteCaja = async () => {
    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "") {
      guardarErrores("Ingresa la fecha en el campo DESDE");
    } else if (hasta === "") {
      guardarErrores("Ingresa la fecha en el campo HASTA");
    } else if (desde > hasta) {
      guardarErrores(
        "La fecha en el campo DESDE no puede ser mayor a la fecha en el campo HASTA"
      );
    } else {
      guardarDesde(desde);
      guardarHasta(hasta);

      await axios
        .get("/api/administracion/sepelio", {
          params: {
            desde: desde,
            hasta: hasta,
            f: `reporte caja ${emp}`,
          },
        })
        .then((res) => {
          let data = res.data;
          console.log(data);

          if (data.length > 0) {
            guardarReporte(res.data);
          } else if (data.length === 0) {
            toast.info(
              `No hay registros en la caja Werchow ${emp} en el periodo seleccionado`
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al generar el reporte");
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
          <FormGenerarCaja
            ingresos={ingresos}
            egresos={egresos}
            traerMovim={traerMovim}
            errores={errores}
            alertas={alertas}
            desdeRef={desdeRef}
            hastaRef={hastaRef}
            calcTotales={calcTotales}
            generarCaja={generarCaja}
            show={show}
            reporteCaja={reporteCaja}
            reporte={reporte}
            desde={desde}
            hasta={hasta}
            emp={emp}
          />
        </>
      )}
    </>
  );
}

export default cajas;
