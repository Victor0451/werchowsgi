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
import { FormCargaGasto } from "@/components/sepelio/caja/FormCargaGasto";

export default function Gasto() {
  let fechaRef = React.createRef();
  let nFacturaRef = React.createRef();
  let ptoVentaRef = React.createRef();
  let montoIVARef = React.createRef();
  let retIIBBRef = React.createRef();
  let retggciasRef = React.createRef();
  let percIVARef = React.createRef();
  let totalRef = React.createRef();

  const [caja, guardarCaja] = useState([]);
  const [gastosCaja, guardarGastosCaja] = useState([]);
  const [facturas, guardarFacturas] = useState([]);
  const [conceptos, guardarConceptos] = useState([]);
  const [proveedores, guardarProveedores] = useState([]);
  const [operadores, guardarOperadores] = useState([]);
  const [servicios, guardarServicios] = useState([]);
  const [facturasSel, guardarFacturasSel] = useState("");
  const [conceptosSel, guardarConceptosSel] = useState("");
  const [proveedoresSel, guardarProveedoresSel] = useState("");
  const [operadoresSel, guardarOperadoresSel] = useState("");
  const [serviciosSel, guardarServiciosSel] = useState("");
  const [empresaSel, guardarEmpresaSel] = useState("");
  const [medioPagoSel, guardarMedioPagoSel] = useState("");
  const [ivaSel, guardarIvaSel] = useState("");
  const [detalleSel, guardarDetalleSel] = useState("");
  const [listado, guardarListado] = useState([]);
  const [acGast, guardarAcGast] = useState(0);
  const [totCaja, guardarTotCaja] = useState(0);
  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idcaja) {
    jsCookie.set("idcaja", router.query.idcaja);
  }

  const traerCaja = async () => {
    if (jsCookie.get("idcaja")) {
      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer caja",
            idcaja: jsCookie.get("idcaja"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            guardarCaja(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la caja");
        });

      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer facturas",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarFacturas(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay facturas registradas");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer las facturas");
        });

      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer conceptos",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarConceptos(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay conceptos registrados");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer los conceptos");
        });

      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer proveedores",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarProveedores(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay proveedores registrados");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el listado de proveedores");
        });
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
      await axios
        .get("/api/sepelio/caja", {
          params: {
            f: "traer servicios",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarServicios(res.data);
          } else if (res.data.length === 0) {
            toast.info("No hay servicios registrados");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer el listado de servicios");
        });
    }
  };

  const traerGastosCaja = async () => {
    if (jsCookie.get("idcaja")) {
      await axios
        .get(`/api/sepelio/caja`, {
          params: {
            f: "traer gastos caja",
            idcaja: jsCookie.get("idcaja"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            guardarGastosCaja(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer los gastos cargados");
        });
    }
  };

  const handleChange = (flag, value) => {
    if (flag === "empresa") {
      guardarEmpresaSel(value);
    } else if (flag === "concepto") {
      guardarConceptosSel(value.value);
    } else if (flag === "tipofactura") {
      guardarFacturasSel(value.value);
    } else if (flag === "proveedores") {
      guardarProveedoresSel(value.value);
    } else if (flag === "servicio") {
      guardarServiciosSel(value.value);
    } else if (flag === "operador") {
      guardarOperadoresSel(value.value);
    } else if (flag === "mediopago") {
      guardarMedioPagoSel(value);
    } else if (flag === "iva") {
      guardarIvaSel(value);
    } else if (flag === "detalle") {
      guardarDetalleSel(value.target.value);
    }
  };

  const nuevoGasto = () => {
    guardarErrores(null);
    guardarAlertas(null);

    const gasto = {
      idcaja: caja.idcaja,
      concepto: conceptosSel,
      mediopago: medioPagoSel,
      tipofactura: facturasSel,
      proveedor: proveedoresSel,
      empresa: empresaSel,
      porciva: ivaSel,
      fecha: fechaRef.current.value,
      nfactura: nFacturaRef.current.value,
      ptoventa: ptoVentaRef.current.value,
      operadorgestion: usu.usuario,
      operadortramite: operadoresSel,
      montoiva: montoIVARef.current.value,
      retiibb: retIIBBRef.current.value,
      retggcias: retggciasRef.current.value,
      perciva: percIVARef.current.value,
      detalle: detalleSel,
      total: totalRef.current.value,
      idservicio: serviciosSel,
      f: "reg gasto caja",
    };

    if (gasto.empresa === "") {
      guardarErrores(
        "Debes seleccionar la empresa a la que se imputara el gasto"
      );
    } else if (gasto.tipofactura === "") {
      guardarErrores("Debes seleccionar el tipo de factura");
    } else if (gasto.proveedor === "") {
      guardarErrores("Debes seleccionar el proveedor");
    } else if (gasto.fecha === "") {
      guardarErrores("Debes ingresar la fecha del gasto");
    } else if (gasto.mediopago === "") {
      guardarErrores("Debes seleccionar medio de pago");
    } else if (gasto.concepto === "") {
      guardarErrores("Debes seleccionar concepto del gasto");
    } else if (gasto.porciva === "") {
      guardarErrores("Debes seleccionar el pocentaje de I.V.A.");
    } else if (gasto.total === "" || gasto.total === 0) {
      guardarErrores("Debes seleccionar ingresar el monto del gasto");
    } else if (gasto.operadortramite === "") {
      guardarErrores("Debes seleccionar seleccionar el operador del tramite");
    } else if (gasto.idservicio === "") {
      guardarErrores(
        "Debes seleccionar el servicio al cual esta relacionada la caja"
      );
    } else {
      guardarListado([...listado, gasto]);

      let totgast = acGast + parseFloat(gasto.total);

      guardarAcGast(totgast);

      let totcaja = caja.monto - totgast;

      guardarTotCaja(totcaja);

      guardarAlertas("Gasto precargado correctamente");
    }
  };

  const eliminarGastos = (index) => {
    let totgast = acGast - parseFloat(listado[index].total);

    guardarAcGast(totgast);

    let totcaja = caja.monto - totgast;

    guardarTotCaja(totcaja);

    listado.splice(index, 1);

    guardarListado([...listado]);
  };

  const updateUltimaCarga = async () => {
    let data = {
      f: "ultima carga",
      ultimacarga: moment().format("YYYY-MM-DD HH:mm:ss"),
      idcaja: caja.idcaja,
    };

    await axios.put(`/api/sepelio/caja`, data);
  };

  const putCierre = async () => {
    let data = {
      f: "cerrar caja",
      estado: false,
      cierre: moment().format("YYYY-MM-DD HH:mm:ss"),
      idcaja: caja.idcaja,
    };

    await axios.put(`/api/sepelio/caja`, data).then((res) => {
      if (res.status === 200) {
        traerCaja();
        traerGastosCaja();
      }
    });
  };

  const cerrarCaja = () => {
    confirmAlert({
      title: "ATENCION",
      message: "¿Seguro que quieres cerrar la caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            putCierre();
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info(
              "La caja sigue abierta, puedes seguir registrando gastos"
            );
          },
        },
      ],
    });
  };

  const updateTotales = async () => {
    const valores = {
      gastos: acGast,
      totalcaja: totCaja,
      idcaja: caja.idcaja,
      f: "update valores",
    };

    await axios
      .put(`/api/sepelio/caja`, valores)
      .then((res) => {
        if (res.status === 200) {
          traerCaja();
          traerGastosCaja();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regGasto = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres registrar los gastos precargados?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            console.log(listado);

            if (listado.length === 0) {
              toast.info("No hay gastos precargados para registrar.");
            } else {
              for (let i = 0; i < listado.length; i++) {
                axios
                  .post(`/api/sepelio/caja`, listado[i])
                  .then((res) => {
                    if (res.status === 200) {
                      toast.success(
                        `El gasto ${listado[i].concepto} por un monto de ${listado[i].total} se registro correctamente`
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }

              let accion = `Se registraron gastos en la caja de seplio ID: ${caja.idcaja}`;

              registrarHistoria(accion, usu.usuario);

              updateTotales();
              updateUltimaCarga();

              setTimeout(() => {
                confirmAlert({
                  title: "ATENCION",
                  message: "¿Vas a cerrar la caja?",
                  buttons: [
                    {
                      label: "Si",
                      onClick: () => {
                        putCierre();
                      },
                    },
                    {
                      label: "No",
                      onClick: () => {
                        toast.info(
                          "La caja sigue abierta, puedes seguir registrando gastos"
                        );
                      },
                    },
                  ],
                });
              }, 500);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("No se registro ningun gasto precargado");
          },
        },
      ],
    });
  };

  const eliminarGastosRegistrados = async (id, fn, caja) => {
    fn();

    await confirmAlert({
      title: "ATENCION",
      message:
        "¿Estas seguro que quieres eliminar el gasto registrado de esta caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/sepelio/caja`, {
                params: {
                  f: "eliminar gastos reg",
                  idgastos: id,
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  fn();

                  toast.success(
                    "Se elimino el gasto correctamente, los valores de cara se reajustaran automaticamente"
                  );

                  setTimeout(() => {
                    reajustarValoresCaja(caja);
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al eliminar el gasto");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            fn();

            toast.info("Accion cancelada. El gasto no fue eliminado");
          },
        },
      ],
    });
  };

  const reajustarValoresCaja = async (idcaja) => {
    await axios
      .get(`/api/sepelio/caja`, {
        params: {
          f: "total gastos",
          idcaja: idcaja,
        },
      })
      .then((res) => {
        if (res.data) {
          let re = JSON.parse(res.data);

          let totalGasto = parseFloat(re[0].total.toFixed(2));

          let habilitado = parseFloat(caja.monto);

          let saldo = habilitado - totalGasto;

          let data = {
            gastos: totalGasto,
            totalcaja: saldo,
            idcaja: idcaja,
            f: "reajustar caja",
          };

          axios
            .put(`/api/sepelio/caja`, data)
            .then((res1) => {
              if (res1.status === 200) {
                toast.success("Caja reajustada con exito");

                setTimeout(() => {
                  Router.reload();
                }, 1000);
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("Ocurrio un error al reajustar la caja");
            });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al calcular los valores de la caja");
      });
  };

  const reajustarValoresCaja2 = async (idcaja) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres reajustar los valores de la caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            toast.info("Reajustando valores...");

            axios
              .get(`/api/sepelio/caja`, {
                params: {
                  f: "total gastos",
                  idcaja: idcaja,
                },
              })
              .then((res) => {
                if (res.data) {
                  let re = JSON.parse(res.data);

                  let totalGasto = parseFloat(re[0].total.toFixed(2));

                  let habilitado = parseFloat(caja.monto);

                  let saldo = habilitado - totalGasto;

                  let data = {
                    gastos: totalGasto,
                    totalcaja: saldo,
                    idcaja: idcaja,
                    f: "reajustar caja",
                  };

                  axios
                    .put(`/api/sepelio/caja`, data)
                    .then((res1) => {
                      if (res1.status === 200) {
                        toast.success("Caja reajustada con exito");

                        setTimeout(() => {
                          Router.reload();
                        }, 1500);
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error("Ocurrio un error al reajustar la caja");
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al calcular los valores de la caja"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("No se registro ningun gasto precargado");
          },
        },
      ],
    });
  };
  const calTotalGastos = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].total;
    }

    return total.toFixed(2);
  };

  useSWR("/api/sepelio/caja", traerCaja);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCargaGasto
            caja={caja}
            listado={listado}
            traerGastosCaja={traerGastosCaja}
            gastosCaja={gastosCaja}
            facturas={facturas}
            conceptos={conceptos}
            proveedores={proveedores}
            servicios={servicios}
            operadores={operadores}
            handleChange={handleChange}
            fechaRef={fechaRef}
            nFacturaRef={nFacturaRef}
            ptoVentaRef={ptoVentaRef}
            montoIVARef={montoIVARef}
            retIIBBRef={retIIBBRef}
            retggciasRef={retggciasRef}
            percIVARef={percIVARef}
            totalRef={totalRef}
            nuevoGasto={nuevoGasto}
            usu={usu}
            eliminarGastos={eliminarGastos}
            acGast={acGast}
            totCaja={totCaja}
            regGasto={regGasto}
            cerrarCaja={cerrarCaja}
            errores={errores}
            alertas={alertas}
            eliminarGastosRegistrados={eliminarGastosRegistrados}
            calTotalGastos={calTotalGastos}
            reajustarValoresCaja2={reajustarValoresCaja2}
          />
        </>
      )}
    </>
  );
}
