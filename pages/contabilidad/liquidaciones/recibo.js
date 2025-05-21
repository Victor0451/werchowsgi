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
import { registrarHistoria, regHistorialAuto } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormRecibo from "@/components/contabilidad/liquidaciones/FormRecibo";

function recibo(props) {
  let importeRef = React.createRef();
  let fechaDepRef = React.createRef();
  let bancoRef = React.createRef();
  let periodoRef = React.createRef();
  let seccionRef = React.createRef();

  const [operador, guardarOperador] = useState([]);
  const [conceptos, guardarConceptos] = useState([]);
  const [concepSel, guardarConcepSel] = useState("");
  const [movimSel, guardarMovimSel] = useState("");
  const [impu, guardarImpu] = useState([]);
  const [idRec, guardarIdRec] = useState("");
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idlegajo) {
    jsCookie.set("idlegajo", router.query.idlegajo, { expires: 1 });
  }

  const traerDatos = async () => {
    await axios
      .get(`/api/contabilidad/liquidaciones`, {
        params: {
          f: "traer legajo personal",
          idlegajo: jsCookie.get("idlegajo"),
        },
      })
      .then((res) => {
        if (res.data) {
          guardarOperador(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el legajo seleccionado");
      });

    await axios
      .get(`/api/contabilidad/liquidaciones`, {
        params: {
          f: "traer conceptos liquidacion",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarConceptos(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de participantes");
      });
  };

  const handleChange = (flag, value) => {
    if (flag === "movim") {
      guardarMovimSel(value);
    } else if (flag === "conceptos") {
      guardarConcepSel(value);
    }
  };

  const preRegImpu = () => {
    let data = {
      concepto: "",
      remu_ren: "",
      remu_exe: "",
      desc: "",
    };

    data.concepto = concepSel;
    if (movimSel === 1) {
      data.remu_ren = parseFloat(importeRef.current.value);
    } else if (movimSel === 2) {
      data.remu_exe = parseFloat(importeRef.current.value);
    } else if (movimSel === 3) {
      data.desc = parseFloat(importeRef.current.value);
    }

    guardarImpu([...impu, data]);
  };

  const eliminarImpu = (index) => {
    confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro que quieres eliminar la imputacion registrada?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            impu.splice(index, 1);

            guardarImpu([...impu]);

            toast.success("Imputacion eliminada");
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("Accion cancelada. La imputacion no fue eliminada");
          },
        },
      ],
    });
  };

  let calImpus = (arr, f) => {
    let total = 0;

    if (f === "rr") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].remu_ren) {
          total += parseFloat(arr[i].remu_ren.toFixed(2));
        }
      }
    } else if (f === "re") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].remu_exe) {
          total += parseFloat(arr[i].remu_exe.toFixed(2));
        }
      }
    } else if (f === "ds") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].desc) {
          total += parseFloat(arr[i].desc.toFixed(2));
        }
      }
    }

    return total.toFixed(2);
  };

  let crearRecibo = async () => {
    if (seccionRef.current.value === "") {
      toast.warning("Ingresa la seccion a la que pertenece el empleado");
    } else if (periodoRef.current.value === "") {
      toast.warning(
        "Ingresa el periodo de liquidacion para poder verificar si ya existe la liquidacion"
      );
    } else if (fechaDepRef.current.value === "") {
      toast.warning("Ingresa la fecha de deposito del sueldo");
    } else if (bancoRef.current.value === "") {
      toast.warning("Ingresa el banco al cual se realizara el deposito.");
    } else {
      await axios
        .get("/api/contabilidad/liquidaciones", {
          params: {
            periodo: moment(periodoRef.current.value).format("MM/YYYY"),
            cuil: operador.cuil,
            f: "verificar liquidacion",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            toast.info(
              `Ya existe una liquidacion registrada de ${
                operador.operador
              } para el periodo ${moment(periodoRef.current.value).format(
                "MM/YYYY"
              )}`
            );
          } else {
            let data = {
              empresa: operador.empresa,
              empresa_cuit: operador.cuit,
              operador: operador.operador,
              operador_cuil: operador.cuil,
              categoria: operador.categoria,
              fecha_ingreso: moment(operador.fecha_ingreso).format(
                "YYYY-MM-DD"
              ),
              anti: operador.antiguedad,
              idlegajo: operador.idlegajo,
              fecha: moment().format("YYYY-MM-DD"),
              fecha_deposito: moment(fechaDepRef.current.value).format(
                "YYYY-MM-DD"
              ),
              banco: bancoRef.current.value,
              periodo: moment(periodoRef.current.value).format("MM/YYYY"),
              seccion: seccionRef.current.value,
              f: "crear recibo",
            };

            if (data.seccion === "") {
              guardarErrores(
                "Debes ingresar la seccion a la que pertenece el operador"
              );
            } else if (data.periodo === "") {
              guardarErrores("Debes ingresar el periodo de liquidacion");
            } else if (data.fecha_deposito === "") {
              guardarErrores("Debes ingresar la fecha de deposito");
            } else if (data.banco === "") {
              guardarErrores("Debes ingresar el bando del deposito");
            } else {
              axios
                .post("/api/contabilidad/liquidaciones", data)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Se creo el recibo con exito");
                    guardarIdRec(res.data.idrecibo);
                    jsCookie.set("idRec", res.data.idrecibo, { expires: 1 });
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al crear el recibo");
                });
            }
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error al verificar si el periodo ya esta liquidado"
          );
        });
    }
  };

  let regMovim = async () => {
    await confirmAlert({
      title: "ATENCION",
      message:
        "¿Estas seguro que cargar los movimientos y terminar la confeccion del recibo?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let totRR = 0;
            let totRE = 0;
            let totDS = 0;

            for (let i = 0; i < impu.length; i++) {
              let data = {
                idrecibo: idRec,
                cuil: operador.cuil,
                concepto: impu[i].concepto,
                remu_ren: impu[i].remu_ren,
                remu_exe: impu[i].remu_exe,
                desc: impu[i].desc,
                f: "reg movim recibo",
              };

              totRR += data.remu_ren;
              totRE += data.remu_exe;
              totDS += data.desc;

              axios.post("/api/contabilidad/liquidaciones", data);
            }

            let actDat = {
              f: "actualizar total neto",
              total_neto:
                parseFloat(totRR) + parseFloat(totRE) - parseFloat(totDS),
              idrecibo: idRec,
            };

            axios
              .put(`/api/contabilidad/liquidaciones`, actDat)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Recibo creado y totales actualizados");

                  setTimeout(() => {
                    Router.push({
                      pathname: "/contabilidad/liquidaciones/impresion",
                      query: { idrecibo: idRec },
                    });
                  }, 1000);
                }
              })
              .catch((error) => {
                console.log(error);

                toast.error("Ocurrio un error al actualizar los totales");
              });

            toast.success("Movimientos registrados con exito");
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info(
              "Accion cancelada. Los movimientos no fueron registrados"
            );
          },
        },
      ],
    });
  };

  useSWR("/api/contabilidad/liquidaciones", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormRecibo
            operador={operador}
            conceptos={conceptos}
            handleChange={handleChange}
            importeRef={importeRef}
            impu={impu}
            preRegImpu={preRegImpu}
            eliminarImpu={eliminarImpu}
            calImpus={calImpus}
            usu={usu}
            fechaDepRef={fechaDepRef}
            bancoRef={bancoRef}
            periodoRef={periodoRef}
            seccionRef={seccionRef}
            crearRecibo={crearRecibo}
            idRec={idRec}
            regMovim={regMovim}
          />
        </>
      )}
    </>
  );
}

export default recibo;
