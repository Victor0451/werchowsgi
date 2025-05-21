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
import { FormCargaIngreso } from "@/components/sepelio/caja/FormCargaIngreso";

export default function Ingreso() {
  let fechaRef = React.createRef();
  let nFacturaRef = React.createRef();
  let ptoVentaRef = React.createRef();
  let totalRef = React.createRef();

  const [caja, guardarCaja] = useState([]);
  const [facturas, guardarFacturas] = useState([]);
  const [conceptos, guardarConceptos] = useState([]);
  const [listado, guardarListado] = useState([]);
  const [facturasSel, guardarFacturasSel] = useState("");
  const [conceptosSel, guardarConceptosSel] = useState("");
  const [empresaSel, guardarEmpresaSel] = useState("");
  const [detalleSel, guardarDetalleSel] = useState("");
  const [acIng, guardarAcIng] = useState(0);
  const [totCaja, guardarTotCaja] = useState(0);
  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ingresosCaja, guardarIngresosCaja] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idcaja) {
    jsCookie.set("idcaja", router.query.idcaja, { expires: 1 });
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
    }
  };

  const traerIngresosCaja = async () => {
    if (jsCookie.get("idcaja")) {
      await axios
        .get(`/api/sepelio/caja`, {
          params: {
            f: "traer ingresos",
            idcaja: jsCookie.get("idcaja"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            guardarIngresosCaja(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer los ingresos cargados");
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
      guardarProveedoresSel(value);
    } else if (flag === "servicio") {
      guardarServiciosSel(value);
    } else if (flag === "operador") {
      guardarOperadoresSel(value);
    } else if (flag === "mediopago") {
      guardarMedioPagoSel(value);
    } else if (flag === "iva") {
      guardarIvaSel(value);
    } else if (flag === "detalle") {
      guardarDetalleSel(value.target.value);
    }
  };

  const nuevoIngreso = () => {
    guardarErrores(null);
    guardarAlertas(null);

    const ingreso = {
      idcaja: caja.idcaja,
      concepto: conceptosSel,
      tipofactura: facturasSel,
      empresa: empresaSel,
      fecha: fechaRef.current.value,
      nfactura: nFacturaRef.current.value,
      ptoventa: ptoVentaRef.current.value,
      detalle: detalleSel,
      total: totalRef.current.value,

      f: "reg ingreso caja",
    };

    if (ingreso.empresa === "") {
      guardarErrores(
        "Debes seleccionar la empresa a la que se imputara el ingreso"
      );
    } else if (ingreso.tipofactura === "") {
      guardarErrores("Debes seleccionar el tipo de factura");
    } else if (ingreso.fecha === "") {
      guardarErrores("Debes ingresar la fecha del ingreso");
    } else if (ingreso.concepto === "") {
      guardarErrores("Debes seleccionar concepto del ingreso");
    } else if (ingreso.total === "" || ingreso.total === 0) {
      guardarErrores("Debes seleccionar ingresar el monto del ingreso");
    } else {
      guardarListado([...listado, ingreso]);

      let totIng = acIng + parseFloat(ingreso.total);

      guardarAcIng(totIng);

      let totcaja = caja.totalcaja + totIng;

      guardarTotCaja(totcaja);

      guardarAlertas("Ingreso precargado correctamente");
    }
  };

  const eliminarIngreso = (index) => {
    let toting = acIng - parseFloat(listado[index].total);

    guardarAcIng(toting);

    let parcia = caja.totalcaja + acIng;

    let totcaja = parcia - parseFloat(listado[index].total);

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
        traerIngresosCaja();
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
      monto: caja.monto + acIng,
      totalcaja: caja.totalcaja + acIng,
      idcaja: caja.idcaja,
      f: "update valores ing",
    };

    await axios
      .put(`/api/sepelio/caja`, valores)
      .then((res) => {
        if (res.status === 200) {
          traerCaja();
          traerIngresosCaja();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regIngreso = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres registrar los ingresos precargados?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            if (listado.length === 0) {
              toast.info("No hay ingresos precargados para registrar.");
            } else {
              for (let i = 0; i < listado.length; i++) {
                axios
                  .post(`/api/sepelio/caja`, listado[i])
                  .then((res) => {
                    if (res.status === 200) {
                      toast.success(
                        `El ingreso ${listado[i].concepto} por un monto de ${listado[i].total} se registro correctamente`
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }

              let accion = `Se registraron ingresos en la caja de seplio ID: ${caja.idcaja}`;

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
                          "La caja sigue abierta, puedes seguir registrando ingresos"
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

  const calTotalIngresos = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].monto;
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
          <FormCargaIngreso
            fechaRef={fechaRef}
            nFacturaRef={nFacturaRef}
            ptoVentaRef={ptoVentaRef}
            totalRef={totalRef}
            facturas={facturas}
            conceptos={conceptos}
            listado={listado}
            nuevoIngreso={nuevoIngreso}
            cerrarCaja={cerrarCaja}
            eliminarIngreso={eliminarIngreso}
            caja={caja}
            acIng={acIng}
            totCaja={totCaja}
            errores={errores}
            handleChange={handleChange}
            usu={usu}
            regIngreso={regIngreso}
            alertas={alertas}
            ingresosCaja={ingresosCaja}
            calTotalIngresos={calTotalIngresos}
            traerIngresosCaja={traerIngresosCaja}
          />
        </>
      )}
    </>
  );
}
