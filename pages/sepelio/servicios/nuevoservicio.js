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
import { FormNuevoServicio } from "@/components/sepelio/servicios/FormNuevoServicio";
import Router from "next/router";

export default function nuevoservicio() {
  let dniRef = React.createRef();
  let fechaFacRef = React.createRef();
  let lugarFacRef = React.createRef();
  let alturaRef = React.createRef();
  let pesoRef = React.createRef();
  let detalleCausaRef = React.createRef();
  let retiroExtRef = React.createRef();
  let casaMorRef = React.createRef();
  let fechaInuRef = React.createRef();
  let horaInuRef = React.createRef();
  let cemmenterioRef = React.createRef();
  let solicitanteRef = React.createRef();
  let dniSolicRef = React.createRef();
  let domicilioSoliRef = React.createRef();
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let edadRef = React.createRef();
  let dniPartiRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [show, guardarShow] = useState(false);
  const [part, guardarPart] = useState(false);
  const [motivoSel, guardarMotivoSel] = useState("");
  const [parentezcoSel, guardarParentezcoSel] = useState("");
  const [cremacionSel, guardarCremacionSel] = useState(false);
  const [cremaSel, guardarCremaSel] = useState("");
  const [donacionSel, guardarDonacionSel] = useState(false);
  const [donaSel, guardarDonaSel] = useState("");
  const [ataudes, guardarAtaudes] = useState([]);
  const [ataudSel, guardarAtaudSel] = useState([]);
  const [parcelas, guardarParcelas] = useState([]);
  const [parceSel, guardarParceSel] = useState([]);
  const [adhs, guardarAdhs] = useState([]);
  const [adhSel, guardarAdhSel] = useState([]);

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

  const traerDifunto = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
      await axios
        .get("/api/sepelio/servicios", {
          params: {
            f: "servicios",
            dni: dniRef.current.value,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            toast.info("El DNI ingresado pertenece a un servicio registrado");
            guardarAlertas(
              "El DNI ingresado pertenece a un servicio registrado"
            );
          } else if (res.data.length === 0) {
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

                  traerAdhs("mae adh", ficha[0].CONTRATO);
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

                              traerAdhs("mut adh", ficha[0].CONTRATO);
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
                                    "Ocurrio un error al tarer los datos del difunto en adherente mutual"
                                  );
                                });
                            }
                          })
                          .catch((error) => {
                            console.log(error);
                            toast.error(
                              "Ocurrio un error al tarer los datos del difunto en mutual"
                            );
                          });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        "Ocurrio un error al tarer los datos del difunto en adherentes"
                      );
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al tarer los datos del difunto en maestro"
                );
              });
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

  const servPart = () => {
    guardarShow(true);
    guardarPart(true);
    guardarAlertas("Estas registrando un servicio particular");
    toast.info("Estas registrando un servicio particular");
  };

  const handleChange = (f, value) => {
    if (f === "motivo") {
      guardarMotivoSel(value);
    } else if (f === "cremacion") {
      guardarCremaSel(value);

      if (value === "SI") {
        guardarCremacionSel(true);
      } else if (value === "NO") {
        guardarCremacionSel(false);
      }
    } else if (f === "donacion") {
      guardarDonaSel(value);

      if (value === "SI") {
        guardarDonacionSel(true);
      } else if (value === "NO") {
        guardarDonacionSel(false);
      }
    } else if (f === "parentezco") {
      guardarParentezcoSel(value);
    }
  };

  const updateStockAtaud = async () => {
    const stock = {
      idataud: ataudSel.idataud,
      viejo: ataudSel.stock,
      nuevo: ataudSel.stock - 1,
      f: "act stock servicio",
    };

    await axios
      .put("/api/sepelio/ataudes", stock)
      .then((res) => {
        if (res.status === 200) {
          let accion = `Actualizacion de stock del ataud ID: ${stock.idataud} por asignacion en un servicio, stock actual: ${stock.viejo}, nuevo stock: ${stock.nuevo}`;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al actualizar el stock del ataud");
      });
  };

  const asigParcelaServ = async (id, servicio) => {
    const parce = {
      idservicio: id,
      dni_extinto: servicio.dni,
      operador_asignacion: usu.usuario,
      fecha_asignacion: moment().format("YYYY-MM-DD"),
      ficha: servicio.contrato,
      idparcela: parceSel.idparcela,
      parcela: parceSel.parcela,
      mza: parceSel.mza,
      lote: parceSel.lote,
      lugares: parceSel.lugares - 1,
      f: "act parcela asig",
    };

    await axios.put(`/api/sepelio/parcelas`, parce).then((res) => {
      if (res.status === 200) {
        let accion = `Asignacion de parcela ID: ${parce.idparcela}, parcela ${parce.parcela}, manzana: ${parce.mza}, lote: ${parce.lote}, lugares disponibles: ${parce.lugares}.`;

        registrarHistoria(accion, usu.usuario);
      }
    });
  };

  const regServicio = async () => {
    guardarErrores(null);

    const servicio = {
      contrato: "",
      empresa: "",
      dni: "",
      obra_soc: "",
      apellido: "",
      nombre: "",
      edad: "",
      fecha_fallecimiento: fechaFacRef.current.value,
      lugar_fallecimiento: lugarFacRef.current.value,
      tipo_servicio: "",
      casa_mortuaria: casaMorRef.current.value,
      fecha_inhumacion: fechaInuRef.current.value,
      hora_inhumacion: horaInuRef.current.value,
      cementerio: cemmenterioRef.current.value,
      altura: alturaRef.current.value,
      peso: pesoRef.current.value,
      motivo: detalleCausaRef.current.value,
      retiro: retiroExtRef.current.value,
      solicitado: solicitanteRef.current.value,
      parentesco: parentezcoSel,
      fecha_recepcion: moment().format("YYYY-MM-DD HH:mm:ss"),
      sucursal: "",
      estado: true,
      dni_nuevotitular: "",
      operador: usu.usuario,
      idataud: ataudSel.idataud,
      dni_solicitante: dniSolicRef.current.value,
      domicilio_solicitante: domicilioSoliRef.current.value,
      cremacion: cremacionSel,
      liquidado: false,
      donacion: donacionSel,
      idparcela: parceSel.idparcela,
      f: "nuevo servicio",
    };

    if (ficha[0]) {
      servicio.contrato = ficha[0].CONTRATO;
      servicio.empresa = ficha[0].EMPRESA;
      servicio.dni = ficha[0].NRO_DOC;
      servicio.obra_soc = ficha[0].OBRA_SOC;
      servicio.apellido = ficha[0].APELLIDOS;
      servicio.nombre = ficha[0].NOMBRES;
      servicio.edad = ficha[0].EDAD;
      servicio.tipo_servicio = `Servicio Plan ${ficha[0].PLAN}`;
      servicio.sucursal = ficha[0].SUCURSAL;
    } else {
      servicio.contrato = 0;
      servicio.empresa = "-";
      servicio.dni = dniPartiRef.current.value;
      servicio.obra_soc = "-";
      servicio.apellido = apellidoRef.current.value;
      servicio.nombre = nombreRef.current.value;
      servicio.edad = edadRef.current.value;
      servicio.tipo_servicio = `Servicio Particular`;
      servicio.sucursal = "-";
    }

    if (servicio.dni === "") {
      guardarErrores("Debes ingresar el dni del difunto");
    } else if (servicio.apellido === "") {
      guardarErrores("Debes ingresar el apellido del difunto");
    } else if (servicio.nombre === "") {
      guardarErrores("Debes ingresar el nombre del difunto");
    } else if (servicio.edad === "") {
      guardarErrores("Debes ingresar la edad del difunto");
    } else if (servicio.fecha_fallecimiento === "") {
      guardarErrores("Debes ingresar la fecha de fallecimiento del difunto");
    } else if (servicio.lugar_fallecimiento === "") {
      guardarErrores("Debes ingresar el lugar de fallecimiento del difunto");
    } else if (servicio.altura === "") {
      guardarErrores("Debes ingresar la altura del difunto");
    } else if (servicio.peso === "") {
      guardarErrores("Debes ingresar la peso del difunto");
    } else if (servicio.motivo === "") {
      guardarErrores("Debes ingresar el detalle o motivo de fallecimiento");
    } else if (servicio.retiro === "") {
      guardarErrores("Debes ingresar el lugar donde se retirara al difunto");
    } else if (servicio.casa_mortuaria === "") {
      guardarErrores("Debes ingresar la casa mortuaria");
    } else if (servicio.fecha_inhumacion === "") {
      guardarErrores("Debes ingresar la fecha de inhumacion");
    } else if (servicio.hora_inhumacion === "") {
      guardarErrores("Debes ingresar la hora de inhumacion");
    } else if (servicio.cementerio === "") {
      guardarErrores(
        "Debes ingresar el cementerio en donde se realizara la inhumacion"
      );
    } else if (cremaSel === "") {
      guardarErrores("Debes seleccionar si el servicios cuenta con cremacion");
    } else if (donaSel === "") {
      guardarErrores("Debes seleccionar si el servicios es donacion o no");
    } else if (servicio.solicitado === "") {
      guardarErrores(
        "Debes ingresar el apellido y nombre del solicitante del servicio"
      );
    } else if (servicio.dni_solicitante === "") {
      guardarErrores("Debes ingresar el dni del solicitante del servicio");
    } else if (servicio.parentezcoSel === "") {
      guardarErrores(
        "Debes seleccionar el parentezco del solicitante con respecto al difunto"
      );
    } else if (servicio.domicilio_solicitante === "") {
      guardarErrores("Debes ingresar el domicilio del solicitante");
    } else if (!servicio.idataud) {
      guardarErrores("Debes seleccionar el ataud del difunto");
    } else {
      if (!servicio.idparcela) {
        servicio.idataud = 0;
      }

      if (ficha[0]) {
        servicio.tipo_servicio = `Plan ${ficha[0].PLAN}`;

        if (ficha[0].perfil === "T" && adhs.length === 0) {
          servicio.dni_nuevotitular = 11111111;
        } else if (ficha[0].perfil === "A") {
          servicio.dni_nuevotitular = 1;
        } else {
          servicio.dni_nuevotitular = adhSel.dni_nuevotitular;
        }
      } else {
        servicio.tipo_servicio = `Particular`;

        servicio.dni_nuevotitular = null;
      }

      await axios
        .post(`/api/sepelio/servicios`, servicio)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Servicio cargado correctamente");

            updateStockAtaud();

            if (servicio.idparcela) {
              asigParcelaServ(res.data.idservicio, servicio);
            }

            setTimeout(() => {
              Router.push("/sepelio/servicios/nuevoservicio");
            }, 500);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al registrar el servicio");
        });
    }
  };

  const traerDatos = async () => {
    await axios
      .get(`/api/sepelio/ataudes`, {
        params: {
          f: "list ataudes",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarAtaudes(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay ataudes registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
        guardarNoData(true);
      });

    await axios
      .get(`/api/sepelio/parcelas`, {
        params: {
          f: "list parcelas",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarParcelas(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay ataudes registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
        guardarNoData(true);
      });
  };

  const regAtaud = (row) => {
    const ata = {
      idataud: row.idataud,
      nombre: row.nombre,
      uso: row.uso,
      stock: row.stock,
    };

    guardarAtaudSel(ata);
  };

  const regParce = (row) => {
    const par = {
      idparcela: row.idparcela,
      parcela: row.parcela,
      mza: row.mza,
      lote: row.lote,
      lugares: row.lugares,
    };

    guardarParceSel(par);
  };

  const regAdh = (row) => {
    const ad = {
      dni_nuevotitular: row.NRO_DOC,
      adh: `${row.APELLIDOS}, ${row.NOMBRES}`,
    };

    guardarAdhSel(ad);
  };

  useSWR("/api/sepelio/ataudes", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormNuevoServicio
            dniRef={dniRef}
            traerDifunto={traerDifunto}
            errores={errores}
            alertas={alertas}
            ficha={ficha}
            show={show}
            servPart={servPart}
            part={part}
            fechaFacRef={fechaFacRef}
            lugarFacRef={lugarFacRef}
            alturaRef={alturaRef}
            pesoRef={pesoRef}
            detalleCausaRef={detalleCausaRef}
            retiroExtRef={retiroExtRef}
            casaMorRef={casaMorRef}
            fechaInuRef={fechaInuRef}
            horaInuRef={horaInuRef}
            cemmenterioRef={cemmenterioRef}
            solicitanteRef={solicitanteRef}
            dniSolicRef={dniSolicRef}
            domicilioSoliRef={domicilioSoliRef}
            apellidoRef={apellidoRef}
            nombreRef={nombreRef}
            edadRef={edadRef}
            dniPartiRef={dniPartiRef}
            handleChange={handleChange}
            motivoSel={motivoSel}
            regServicio={regServicio}
            ataudes={ataudes}
            usu={usu}
            regAtaud={regAtaud}
            ataudSel={ataudSel}
            parcelas={parcelas}
            parceSel={parceSel}
            regParce={regParce}
            adhs={adhs}
            regAdh={regAdh}
            adhSel={adhSel}
          />
        </>
      )}
    </>
  );
}
