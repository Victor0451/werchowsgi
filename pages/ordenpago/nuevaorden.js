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
import Router from "next/router";
import jsCookie from "js-cookie";
import FormOrdenPago from "@/components/ordenpago/FormOrdenPago";
import { sucusmed } from "../../array/array";

function NuevaOrden(props) {
  let medicoRef = React.createRef();
  let cuitRef = React.createRef();
  let fechaPagRef = React.createRef();
  let cuitPracRef = React.createRef();
  let fechaPagPracRef = React.createRef();
  let fechaPagoContRef = React.createRef();
  let cuitContRef = React.createRef();
  let provContRef = React.createRef();
  let nfacturaContRef = React.createRef();
  let totalContRef = React.createRef();
  let nuImpor = React.createRef();

  const [norden, guardarNOrden] = useState(null);
  const [medicos, guardarMedicos] = useState([]);
  const [listado, guardarListado] = useState([]);
  const [listadoCheck, guardarListadoCheck] = useState([]);
  const [nomPres, guardarNomPrest] = useState(null);
  const [codPres, guardarCodPres] = useState(null);
  const [tipoFac, guardarTipoFac] = useState([]);
  const [contable, guardarContable] = useState(true);
  const [ordenes, guardarOrdenes] = useState(false);
  const [practicas, guardarPracticas] = useState(false);
  const [facturaSel, guardarFacturaSel] = useState("");
  const [observContSel, guardarObservContSel] = useState("");
  const [observConsulSel, guardarObservConsulSel] = useState("");
  const [observPractSel, guardarObservPracSel] = useState("");
  const [sucurSel, guardarSucurSel] = useState("");
  const [medicoSel, guardarMedicoSel] = useState("");
  const [exito, guardarExito] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [tipOrd, guardarTipoOrd] = useState(null);
  const [detMed, guardarDetallePrest] = useState(null);
  const [fTot, guardarFTot] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const vistas = (f) => {
    if (f === "C") {
      guardarContable(true);
      guardarOrdenes(false);
      guardarPracticas(false);
    } else if (f === "O") {
      guardarContable(false);
      guardarOrdenes(true);
      guardarPracticas(false);
    } else if (f === "P") {
      guardarContable(false);
      guardarOrdenes(false);
      guardarPracticas(true);
    }
  };

  const traerDatos = async () => {
    await axios
      .get(`/api/ordenpago`, {
        params: {
          f: "norden",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data[0].idorden) {
          guardarNOrden(`${1}/${moment().format("YYYY")}`);
        } else if (res.data[0].idorden) {
          guardarNOrden(
            `${res.data[0].idorden + 1}/${moment().format("YYYY")}`
          );
        }
      })

      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el n° de orden", "ATENCION");
      });

    await axios
      .get(`/api/sepelio/caja`, {
        params: {
          f: "traer facturas",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarTipoFac(res.data);
        } else {
          toast.info("No hay facturas registradas");
          guardarTipoFac([]);
        }
      })

      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer los tipos de facturas");
      });
  };

  const traerMed = async () => {
    await axios
      .get(`/api/medicos`, {
        params: {
          f: "prestadores sucu",
          sucu: sucurSel,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarMedicos(res.data);
        } else {
          toast.info("No hay prestadores registrados");
        }
      })

      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de prestadores");
      });
  };

  const traerDetalleMed = async (prestado) => {    
    await axios
      .get("/api/ordenpago", {
        params: {
          prestado: prestado,
          f: "traer detalle medico",
        },
      })
      .then((res) => {
        if (res.data) {
          let dat = JSON.parse(res.data);
          guardarDetallePrest(dat[0]);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al tarer el detalle del medico",
          "ATENCION"
        );
      });
  };

  const buscarOrdenes = async (f) => {
    guardarTipoOrd(f);

    if (medicoSel === "") {
      toast.error(
        "Debes selecionar a un prestador para buscar el listado de consultas"
      );
    } else {
      let ref = medicoSel;
      let codigo = ref.substr(0, 5);
      let prestado = ref.substr(6, 20);
      let otero = [];
      let resto = [];
      let todo = [];

      traerDetalleMed(codigo);

      guardarNomPrest(prestado);
      guardarCodPres(codigo);

      if (f === "O") {
        guardarFTot(f);
        await axios
          .get(`/api/medicos`, {
            params: {
              codigo: codigo,
              f: "consultas otero",
            },
          })
          .then((res) => {
            if (res.data.length > 0) {
              toast.success("Listado de ordenes generadas Clinica Otero");
            } else {
              toast.info(
                "No se encontraron ordenes de este prestador en Clinica Otero"
              );
            }

            otero = res.data;

            axios
              .get(`/api/medicos`, {
                params: {
                  codigo: codigo,
                  f: "consultas fabian",
                },
              })
              .then((res1) => {
                if (res1.data.length > 0) {
                  toast.success(
                    "Listado de ordenes generadas del Sistema Fabian"
                  );
                } else {
                  toast.info(
                    "No se encontraron ordenes de este prestador en el Sistema Fabian"
                  );
                }

                resto = res1.data;

                todo = otero.concat(resto);

                guardarListado(todo);
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al generar las ordenes");
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al generar las ordenes", "ATENCION");
          });
      } else if (f === "P") {
        guardarFTot(f);
        await axios
          .get(`/api/medicos`, {
            params: {
              codigo: codigo,
              f: "practicas otero",
            },
          })
          .then((res) => {
            if (res.data.length > 0) {
              toast.success("Listado de ordenes generadas Clinica Otero");
            } else {
              toast.info(
                "No se encontraron ordenes de este prestador en Clinica Otero"
              );
            }

            otero = res.data;

            axios
              .get(`/api/medicos`, {
                params: {
                  codigo: codigo,
                  f: "practicas fabian",
                },
              })
              .then((res1) => {
                if (res1.data.length > 0) {
                  toast.success(
                    "Listado de ordenes generadas del Sistema Fabian"
                  );
                } else {
                  toast.info(
                    "No se encontraron ordenes de este prestador en el Sistema Fabian"
                  );
                }

                resto = res1.data;

                todo = otero.concat(resto);

                guardarListado(todo);
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al generar las ordenes");
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ocurrio un error al generar las ordenes", "ATENCION");
          });
      }
    }
  };

  const checkOrden = (orden) => {
    let encontrado = false;

    if (listadoCheck.length === 0) {
      toast.success("Orden checkeda", "ATENCION");
      guardarListadoCheck([...listadoCheck, orden]);
    } else {
      for (let i = 0; i < listadoCheck.length; i++) {
        if (listadoCheck[i].ORDEN === orden.ORDEN) {
          encontrado = true;
        }
      }
      if (encontrado === true) {
        toast.warning("Esta orden ya fue checkeada", "ATENCION");
      } else if (encontrado === false) {
        toast.success("Orden checkeda", "ATENCION");
        guardarListadoCheck([...listadoCheck, orden]);
      }
    }
  };

  const deleteCheckOrden = (index) => {
    listadoCheck.splice(index, 1);

    guardarListadoCheck([...listadoCheck]);

    toast.success("Orden eliminada del checkeo", "ATENCION");
  };

  const handleChange = async (f, value) => {
    if (f === "tipo fac") {
      guardarFacturaSel(value);
    } else if (f === "observ cont") {
      guardarObservContSel(value.target.value);
    } else if (f === "observ consultas") {
      guardarObservConsulSel(value.target.value);
    } else if (f === "observ practicas") {
      guardarObservPracSel(value.target.value);
    } else if (f === "prestador") {
      guardarMedicoSel(value);
    } else if (f === "sucursal") {
      guardarSucurSel(value);
    }
  };

  const generacionOrden = async (f) => {
    const orPag = {
      fecha: moment().format("YYYY-MM-DD"),
      proveedor: "",
      nombre: "",
      cuit_cuil: "",
      total: "",
      operador_carga: usu.usuario,
      norden: norden,
      observacion: "",
      autorizado: false,
      tipo_orden: "",
      nfactura: "0",
      tipo_factura: "0",
      fecha_pago: "",
      pagado: false,
      estado: true,
      f: "nueva orden",
    };

    if (f === "C") {
      orPag.proveedor = "CONT";
      orPag.nombre = provContRef.current.value;
      orPag.cuit_cuil = cuitContRef.current.value;
      orPag.total = totalContRef.current.value;
      orPag.tipo_factura = facturaSel;
      orPag.nfactura = nfacturaContRef.current.value;
      orPag.observacion = observContSel;
      orPag.tipo_orden = "Contable";
      orPag.fecha_pago = fechaPagoContRef.current.value;
    } else if (f === "O") {
      orPag.proveedor = codPres;
      orPag.nombre = nomPres;
      orPag.cuit_cuil = cuitRef.current.value;
      orPag.observacion = observConsulSel;
      orPag.tipo_orden = "Ordenes Medica";
      orPag.fecha_pago = fechaPagRef.current.value;
      orPag.tipo_factura = "-";
      orPag.nfactura = "0";
      orPag.total = totales(listadoCheck, detMed.LIQUIDACION);
    } else if (f === "P") {
      orPag.proveedor = codPres;
      orPag.nombre = nomPres;
      orPag.cuit_cuil = cuitPracRef.current.value;
      orPag.observacion = observPractSel;
      orPag.tipo_orden = "Practicas Medica";
      orPag.fecha_pago = fechaPagPracRef.current.value;
      orPag.tipo_factura = "-";
      orPag.nfactura = "0";
      orPag.total = totales(listadoCheck, detMed.LIQUIDACION);
    }
    if (orPag.fecha_pago === "") {
      toast.warning("Debes ingresar la fecha de pago de la orden a generar");
    } else {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres generar esta orden de pago?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              if (f === "C") {
                postContable(orPag);
              } else {
                postOrdenes(orPag);
              }
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info("La orden no fue generada");
            },
          },
        ],
      });
    }
  };

  const postOrdenes = async (orPag) => {
    await axios
      .post(`/api/ordenpago`, orPag)
      .then((res) => {
        if (res.status === 200) {
          toast.info(
            "La orden de pago se genero correctamente. Cargando los detalles",
            "ATENCION"
          );

          for (let i = 0; i < listadoCheck.length; i++) {
            const detOrdenPag = {
              iduso: listadoCheck[i].iduso,
              norden: norden,
              nconsulta: listadoCheck[i].ORDEN,
              sucursal: listadoCheck[i].SUC,
              prestador: listadoCheck[i].PRESTADO,
              servicio: listadoCheck[i].SERVICIO,
              importe: `${listadoCheck[i].IMP_LIQ}`,
              operador_carga: usu.usuario,
              fecha: moment().format("YYYY-MM-DD"),
              f: "nuevo detalle",
            };

            axios.post(`/api/ordenpago`, detOrdenPag);

            if (detOrdenPag.sucursal === "O") {
              updateCheckUsos(
                detOrdenPag.nconsulta,
                detOrdenPag.norden,
                detOrdenPag.fecha,
                detOrdenPag.iduso,
                "punteo orden"
              );
            } else {
              updateCheckUsos(
                detOrdenPag.nconsulta,
                detOrdenPag.norden,
                detOrdenPag.fecha,
                detOrdenPag.iduso,
                "punteo orden FA"
              );
            }
          }

          setTimeout(() => {
            toast.success(
              "La orden fue generada, lista para ser revisada y autorizada",
              "ATENCION"
            );

            let accion = `Se registro una orden de Pago ID: ${orPag.norden}, por un monto de: ${orPag.total} al proveedor: ${orPag.proveedor}-${orPag.nombre} por el operador: ${orPag.operador_carga}.`;

            registrarHistoria(accion, usu.usuario);

            setTimeout(() => {
              Router.reload();
            }, 500);
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar la orden de pago", "ATENCION");
      });
  };

  const postContable = async (orPag) => {
    await axios
      .post(`/api/ordenpago`, orPag)
      .then((res) => {
        if (res.status === 200) {
          toast.info(
            "La orden de pago se genero correctamente. Cargando los detalles",
            "ATENCION"
          );

          setTimeout(() => {
            toast.success(
              "La orden fue generada, lista para ser revisada y autorizada",
              "ATENCION"
            );

            let accion = `Se registro una orden de Pago ID: ${orPag.norden}, por un monto de: ${orPag.total} al proveedor: ${orPag.proveedor}-${orPag.nombre} por el operador: ${orPag.operador_carga}.`;

            registrarHistoria(accion, usu.usuario);

            setTimeout(() => {
              Router.reload();
            }, 500);
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar la orden de pago", "ATENCION");
      });
  };

  const totales = (arr, liq) => {
    let total = 0;

    if (fTot === "O") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMP_LIQ);
      }
    } else if (fTot === "P") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMP_LIQ);
      }
    }

    return total.toFixed(2);
  };

  const updateCheckUsos = async (orden, nor, fec, iduso, f) => {
    const valores = {
      orden: orden,
      nor: nor,
      fec: fec,
      iduso: iduso,
      f: f,
    };

    await axios
      .put(`/api/ordenpago`, valores)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error en el checkeo", "ATENCION");
      });
  };

  const updateImporte = async (iduso, orden, serv, impVie) => {
    guardarAlertas(null);
    guardarErrores(null);
    guardarExito(null);

    let imp = nuImpor.current.value;

    if (imp === "") {
      toast.info("Debes ingresar un nuevo importe");
      guardarAlertas("Debes ingresar un nuevo importe");
    } else {
      let sis = orden.substr(1, 1);

      const data = {
        importe: imp,
        iduso: iduso,
        sis: sis,
        f: "modificar importe orden",
      };

      await axios
        .put(`/api/ordenpago`, data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("El importe de la orden fue modificado con exito");
            guardarExito("El importe de la orden fue modificado con exito");

            if (serv === "ORDE") {
              buscarOrdenes("O");
            } else {
              buscarOrdenes("P");
            }

            let accion = `Se modifico el importe de la orden medica N°: ${orden}. Importe Anterior: $${impVie}, nuevo Importe: $${imp}.`;

            registrarHistoria(accion, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al modificar el importe");
          guardarErrores("Ocurrio un error al modificar el importe");
        });
    }
  };

  useSWR("/api/ordenpago", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormOrdenPago
            vistas={vistas}
            contable={contable}
            ordenes={ordenes}
            practicas={practicas}
            generacionOrden={generacionOrden}
            norden={norden}
            handleChange={handleChange}
            tipoFac={tipoFac}
            cuitContRef={cuitContRef}
            provContRef={provContRef}
            nfacturaContRef={nfacturaContRef}
            totalContRef={totalContRef}
            fechaPagoContRef={fechaPagoContRef}
            medicos={medicos}
            medicoRef={medicoRef}
            cuitRef={cuitRef}
            fechaPagRef={fechaPagRef}
            buscarOrdenes={buscarOrdenes}
            listado={listado}
            listadoCheck={listadoCheck}
            checkOrden={checkOrden}
            deleteCheckOrden={deleteCheckOrden}
            totales={totales}
            cuitPracRef={cuitPracRef}
            fechaPagPracRef={fechaPagPracRef}
            guardarListado={guardarListado}
            guardarListadoCheck={guardarListadoCheck}
            nuImpor={nuImpor}
            updateImporte={updateImporte}
            alertas={alertas}
            errores={errores}
            exito={exito}
            tipOrd={tipOrd}
            detMed={detMed}
            fTot={fTot}
            sucusmed={sucusmed}
            traerMed={traerMed}
          />
        </>
      )}
    </>
  );
}

export default NuevaOrden;
