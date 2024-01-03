import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment, { months } from "moment";
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import FormCobWerchow from "@/components/cobranza/FormCobWerchow";

function socios(props) {
  let dniRef = React.createRef();
  let contratoRef = React.createRef();
  let cuotasRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [adhs, guardarAdhs] = useState([]);
  const [show, guardarShow] = useState(false);
  const [grupo, guardarGrupo] = useState("");
  const [allPagos, guardarAllPagos] = useState([]);
  const [nupagos, guardarNuPagos] = useState([]);
  const [cuotaMensual, guardarCuotaMensual] = useState(0);
  const [mesSel, guardarMesSel] = useState(0);
  const [anoSel, guardarAnoSel] = useState(0);
  const [recibo, guardarRecibo] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerAdhs = async (f, contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: f,
          contrato: contrato,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarAdhs(JSON.parse(res.data));
        } else if (res.data.length === 0) {
          toast.info("El socio no posee adherentes");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Orcurrio un error al traer el listado de adherentes de la ficha"
        );
      });
  };

  const traerPagos = async (ficha, empre) => {
    let pagos = [];
    let pagosB = [];
    let allPagos = [];

    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagos",
          ficha: ficha,
          empre: empre,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          pagos = res.data;
        } else {
          toast.info("El socio no posee pagos en efectivo registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer los pagos");
      });

    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagosb",
          ficha: ficha,
          empre: empre,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          pagosB = res.data;
        } else {
          toast.info("El socio no posee pagos de Debito/Credito registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer los pagos");
      });

    if (pagos.length > 0 && pagosB.length > 0) {
      allPagos = pagos.concat(pagosB);
      guardarAllPagos(allPagos);
    } else if (pagos.length > 0 && pagosB.length === 0) {
      guardarAllPagos(pagos);
    } else if (pagos.length === 0 && pagosB.length > 0) {
      guardarAllPagos(pagosB);
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

  const traerSocio = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);

    traerUltimoRecibo(usu.seriew, usu.puestow);

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

            traerAdhs("adh", ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerCuotas(ficha[0].CONTRATO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
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

                  traerAdhs("mutual adh", ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerCuotas(ficha[0].CONTRATO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un adherente"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un adherente"
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
            "Ocurrio un error al tarer los datos del socio en Werchow"
          );
        });
    }
  };

  const tarerSocioContrato = async () => {
    traerUltimoRecibo(usu.seriew, usu.puestow);

    let contrato = contratoRef.current.value;

    if (contrato === "") {
      guardarErrores("Debes ingresar un numero de socio");
    } else {
      await axios
        .get(`/api/socios`, {
          params: {
            f: "maestro contrato",
            ficha: contrato,
          },
        })
        .then((res0) => {
          let re = JSON.parse(res0.data);
          if (re.length > 0) {
            let ficha = JSON.parse(res0.data);
            guardarFicha(ficha);
            guardarShow(true);

            traerAdhs("adh", ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerCuotas(ficha[0].CONTRATO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
          } else if (re.length === 0) {
            axios
              .get("/api/socios", {
                params: {
                  f: "mutual contrato",
                  ficha: contrato,
                },
              })
              .then((res2) => {
                let re = JSON.parse(res2.data);

                if (re.length > 0) {
                  let ficha = JSON.parse(res2.data);
                  guardarFicha(ficha);
                  guardarShow(true);

                  traerAdhs("mutual adh", ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerCuotas(ficha[0].CONTRATO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un adherente"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un adherente"
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
            "Ocurrio un error al tarer los datos del socio en Werchow"
          );
        });
    }
  };

  const traerCuotas = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          contrato: contrato,
          f: "traer cuota mensual",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarCuotaMensual(res.data[0].IMPORTE);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer la cuota mensual");
      });
  };

  const handleChange = async (f, value) => {
    if (f === "mes") {
      guardarMesSel(value);
    } else if (f === "ano") {
      guardarAnoSel(value);
    }
  };

  const preCargarPago = () => {
    let mesCurso = parseInt(moment().format("MM"));
    let anoCurso = parseInt(moment().format("YYYY"));
    let diaCurso = parseInt(moment().format("DD"));

    console.log(diaCurso, mesCurso, anoCurso);

    const prepago = {
      SERIE: recibo.SERIE,
      NRO_RECIBO: recibo.NRO_RECIBO + 1,
      MES: mesSel,
      ANO: anoSel,
      IMPORTE: cuotaMensual,
      DIA_REN: moment().format("YYYY-MM-DD"),
      DIA_CAR: moment().format("YYYY-MM-DD"),
      DIA_EMI: moment().format("YYYY-MM-DD"),
      DIA_PAG: moment().format("YYYY-MM-DD"),
      HORA_CAR: moment().format("HH:mm:ss"),
      CONTRATO: ficha.CONTRATO,
      MAN_COB: "X",
      MOVIM: "P",
      OPERADOR: usu.codigo,
      PUESTO: usu.puestow,
    };

    if (prepago.MES === "" || prepago.MES === 0) {
      toast.warning("Debes ingresar el mes a cobrar", "ATENCION");
    } else if (prepago.ANO === "" || prepago.ANO === 0) {
      toast.warning("Debes ingresar el año a cobrar", "ATENCION");
    } else {

      // CALCULOS DE VENCIMIENTOS
      if (prepago.ANO < anoCurso) {
        prepago.IMPORTE = prepago.IMPORTE * 1.2;
      } else if (prepago.ANO === anoCurso) {
        if (prepago.MES === mesCurso) {
          if (diaCurso > 15 && diaCurso <= 20) {
            prepago.IMPORTE = prepago.IMPORTE * 1.1;
          } else if (diaCurso > 20) {
            prepago.IMPORTE = prepago.IMPORTE * 1.2;
          }
        } else if (prepago.MES < mesCurso) {
          prepago.IMPORTE = prepago.IMPORTE * 1.2;
        }
      } else if (prepago.ANO > anoCurso) {
        prepago.IMPORTE = prepago.IMPORTE;
      }
      // ------------------------------

      // FICHAS DE COBRADORES
      
      // ---------------------------------

      let encontrado = false;

      if (nupagos.length === 0) {
        toast.success("Pago pre cargado exitosamente", "ATENCION");
        guardarNuPagos([...nupagos, prepago]);
      } else {
        for (let i = 0; i < nupagos.length; i++) {
          if (nupagos[i].MES === mesSel && nupagos[i].ANO === anoSel) {
            encontrado = true;
          }
        }
        if (encontrado === true) {
          toast.warning("El mes ingresado ya exitse", "ATENCION");
        } else if (encontrado === false) {
          toast.success("Pago pre cargado exitosamente", "ATENCION");
          guardarNuPagos([...nupagos, prepago]);
        }
      }
    }
  };

  const totalPagosPrecargados = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE);
    }

    return total.toFixed(2);
  };

  const eliminarPagoPrecargado = (index) => {
    nupagos.splice(index, 1);

    guardarNuPagos([...nupagos]);
  };

  const traerUltimoRecibo = async (serie, puesto) => {
    await axios
      .get(`/api/cobranza`, {
        params: {
          serie: serie,
          puesto: puesto,
          f: "ultimo recibo",
        },
      })
      .then((res) => {
        console.log(res.data);
        guardarRecibo(res.data);
      })
      .catch((error) => {
        toast.error("Ocurrio un error al traer el recibo", "ATENCION");
        console.log(error);
      });
  };

  if (usu) {
    if (!usu.puestow || !usu.seriew) {
      toast.info(
        "Tu usuario no tiene puesto ni serie designada, no podras emitir recibos"
      );
    }
  }

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCobWerchow
            dniRef={dniRef}
            contratoRef={contratoRef}
            errores={errores}
            alertas={alertas}
            traerSocio={traerSocio}
            tarerSocioContrato={tarerSocioContrato}
            ficha={ficha}
            allPagos={allPagos}
            grupo={grupo}
            cuotaMensual={cuotaMensual}
            handleChange={handleChange}
            preCargarPago={preCargarPago}
            totalPagosPrecargados={totalPagosPrecargados}
            eliminarPagoPrecargado={eliminarPagoPrecargado}
            nupagos={nupagos}
          />
        </>
      )}
    </>
  );
}

export default socios;
