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
import { ip } from "@/config/config";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormLegajoSocio from "@/components/socios/FormLegajoSocio";
import { MESSAGES } from "@/libs/messages";
import apiGetSocios from "@/libs/apiSocios";

function Legajo(props) {
  let dniRef = React.createRef();
  let contratoRef = React.createRef();
  let cuotasRef = React.createRef();
  let apellidoRef = React.createRef();
  let beneficioRef = React.createRef();
  let observacionRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [adhs, guardarAdhs] = useState([]);
  const [show, guardarShow] = useState(false);
  const [showAfi, guardarShowAfi] = useState(false);
  const [archivos, guardarArchivos] = useState([]);
  const [file, setFile] = useState(null);
  const [grupo, guardarGrupo] = useState("");
  const [allPagos, guardarAllPagos] = useState([]);
  const [cuotas, guardarCuotas] = useState(null);
  const [vigencia, guardarVigencia] = useState(null);
  const [usos, guardarUsos] = useState([]);
  const [historial, guardarHistorial] = useState([]);
  const [histCuotas, guardarHistCuotas] = useState([]);
  const [cuotaMensual, guardarCuotaMensual] = useState(0);
  const [baja, guardarBaja] = useState(false);
  const [listApe, guardarApellidos] = useState([]);
  const [gl, guardarGastoLuto] = useState([]);
  const [beneficios, guardarBeneficios] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  // processFicha centraliza el guardado de ficha y las llamadas relacionadas
  const processFicha = (f, adhsF = "adh") => {
    if (!f || !f[0]) return;
    guardarFicha(f);
    guardarShow(true);
    // baja se setea por el caller cuando corresponde

    const contrato = f[0].CONTRATO;
    traerAdhs(adhsF, contrato);
    traerInfo(contrato);
    descriGrupo(f[0].GRUPO);
    traerPagos(contrato, f[0].EMPRESA);
    traerUsos(contrato);
    traerHistorial(contrato);
    traerCuotas(contrato);
  };

  const traerInfo = async (ficha) => {
    try {
      const archivos = await apiGetSocios({ ficha: ficha, f: "traer archivos" });
      guardarArchivos(archivos);

      if (!archivos || archivos.length === 0) {
        toast.warning("Este legajo no tiene archivos adjuntos");
      } else {
        toast.info("Se trajeron los archivos adjuntados a este legajo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarArchivos = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar la imagen?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`${ip}api/archivos/legajovirtual/eliminararchivos/${id}`)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El archivo fue eliminado con exito");

                  let accion = `Se elimino un archivo en el legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

                  registrarHistoria(accion, usu.usuario);

                  setTimeout(() => {
                    traerInfo(ficha[0].CONTRATO);
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => { },
        },
      ],
    });
  };

  const handleSoli = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajosoli/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCondi = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajocondi/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRehab = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajorehab/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNoti = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajonoti/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRecF = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajorecf/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRecD = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtual/uploadfichalegajorecd/${ficha[0].CONTRATO}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del Socio: ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}.`;

          registrarHistoria(accion, usu.usuario);
        }

        setTimeout(() => {
          traerInfo(ficha[0].CONTRATO);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhs = async (f, contrato) => {
    try {
      const res = await apiGetSocios({ f, contrato });
      if (res && res.length > 0) {
        guardarAdhs(res);
      } else {
        toast.info("El socio no posee adherentes");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Orcurrio un error al traer el listado de adherentes de la ficha"
      );
    }
  };

  const traerPagos = async (ficha, empre) => {
    let pagos = [];
    let pagosB = [];
    let allPagos = [];

    try {
      const p = await apiGetSocios({ f: "traer pagos", ficha, empre });
      if (p && p.length > 0) pagos = p;
      else toast.info("El socio no posee pagos en efectivo registrados");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al traer los pagos");
    }

    try {
      const pb = await apiGetSocios({ f: "traer pagosb", ficha, empre });
      if (pb && pb.length > 0) pagosB = pb;
      else toast.info("El socio no posee pagos de Debito/Credito registrados");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al traer los pagos");
    }

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
    try {
      const res = await apiGetSocios({ f: "traer grupo", grupo });
      if (res && res.length > 0) {
        let grup = `${res[0].CODIGO} - ${res[0].DESCRIP}`;
        guardarGrupo(grup);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al traer el grupo");
    }
  };

  /* Generic helper to fetch socio by DNI (tries primary then baja) */
  const fetchSocioByDni = async (primaryF, bajaF, dni, adhsF, notFoundMsg, errorMsg) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    if (!dni || dni === "") {
      guardarErrores(MESSAGES.DNI_REQUIRED);
      return;
    }

    try {
      const primaryData = await apiGetSocios({ f: primaryF, dni });

      if (primaryData && primaryData.length > 0) {
        const ficha = primaryData;
        guardarBaja(false);
        processFicha(ficha, adhsF);
        return;
      }

      // try baja variant
      const bajaData = await apiGetSocios({ f: bajaF, dni });

      if (bajaData && bajaData.length > 0) {
        const ficha = bajaData;
        guardarBaja(true);
        processFicha(ficha, adhsF);
        return;
      }

      guardarAlertas(notFoundMsg);
      toast.info(notFoundMsg);
    } catch (error) {
      console.log(error);
      toast.error(errorMsg);
    }
  };

  const traerSocio = async () => {
    await fetchSocioByDni(
      "maestro",
      "maestro baja",
      dniRef.current.value,
      "adh",
      MESSAGES.SOCIO_NOT_FOUND_WERCHOW,
      MESSAGES.ERROR_WERCHOW
    );
  };

  const traerSocioMutual = async () => {
    await fetchSocioByDni(
      "mutual",
      "mutual baja",
      dniRef.current.value,
      "mutual adh",
      MESSAGES.SOCIO_NOT_FOUND_MUTUAL,
      MESSAGES.ERROR_MUTUAL
    );
  };

  /* Generic helper to fetch socio by contrato (tries primary then baja) */
  const fetchSocioByContrato = async (primaryF, bajaF, contrato, adhsF, notFoundMsg, errorMsg) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    if (!contrato || contrato === "") {
      guardarErrores(MESSAGES.SOCIO_REQUIRED);
      return;
    }

    try {
      const primaryData = await apiGetSocios({ f: primaryF, ficha: contrato });

      if (primaryData && primaryData.length > 0) {
        const ficha = primaryData;
        guardarBaja(false);
        processFicha(ficha, adhsF);
        return;
      }

      const bajaData = await apiGetSocios({ f: bajaF, ficha: contrato });

      if (bajaData && bajaData.length > 0) {
        const ficha = bajaData;
        guardarBaja(true);
        processFicha(ficha, adhsF);
        return;
      }

      guardarAlertas(notFoundMsg);
      toast.info(notFoundMsg);
    } catch (error) {
      console.log(error);
      toast.error(errorMsg);
    }
  };

  const tarerSocioContrato = async (hc) => {
    let contrato;
    if (!hc || !hc.view) {
      contrato = hc;
    } else if (hc.view) {
      contrato = contratoRef.current.value;
    }

    await fetchSocioByContrato(
      "maestro contrato",
      "maestro baja contrato",
      contrato,
      "adh",
      MESSAGES.SOCIO_NOT_FOUND_WERCHOW,
      MESSAGES.ERROR_WERCHOW
    );
  };

  const tarerSocioContratoMutual = async (hc) => {
    let contrato;
    if (!hc || !hc.view) {
      contrato = hc;
    } else if (hc.view) {
      contrato = contratoRef.current.value;
    }

    await fetchSocioByContrato(
      "mutual contrato",
      "mutual baja contrato",
      contrato,
      "mutual adh",
      MESSAGES.SOCIO_NOT_FOUND_MUTUAL,
      MESSAGES.ERROR_MUTUAL
    );
  };

  const fetchApellidos = async (fParam, apellido, notFoundMsg, errorMsg) => {
    guardarErrores(null);
    guardarAlertas(null);

    if (!apellido || apellido === "") {
      guardarErrores(MESSAGES.APELLIDO_REQUIRED);
      return;
    }

    try {
      const re = await apiGetSocios({ f: fParam, apellido });
      if (re && re.length > 0) {
        guardarApellidos(re);
      } else {
        guardarAlertas(notFoundMsg);
        toast.info(notFoundMsg);
      }
    } catch (error) {
      console.log(error);
      toast.error(errorMsg);
    }
  };

  const traerApellido = async () => {
    await fetchApellidos(
      "maestro apellido",
      apellidoRef.current.value,
      MESSAGES.SOCIO_NOT_FOUND_WERCHOW,
      MESSAGES.ERROR_WERCHOW
    );
  };

  const traerApellidoMutual = async () => {
    await fetchApellidos(
      "mutual apellido",
      apellidoRef.current.value,
      MESSAGES.SOCIO_NOT_FOUND_MUTUAL,
      MESSAGES.ERROR_MUTUAL
    );
  };

  const handleVigencia = () => {
    guardarErrores(null);
    let cuotas = cuotasRef.current.value;

    if (cuotas === "") {
      document.getElementById("btn").hidden = true;
      guardarVigencia("");
      guardarShowAfi(false);
    } else if (cuotas !== "") {
      if (cuotas === "1") {
        guardarCuotas(cuotas);

        let carencia = cuotas * 15;

        let vigencia = moment().add(carencia, "days").format("DD/MM/YYYY");

        document.getElementById("btn").hidden = false;

        guardarVigencia(vigencia);

        guardarShowAfi(true);
      } else if (cuotas > "1") {
        guardarCuotas(cuotas);

        let carencia = cuotas * 30;

        let vigencia = moment().add(carencia, "days").format("DD/MM/YYYY");

        document.getElementById("btn").hidden = false;

        guardarVigencia(vigencia);

        guardarShowAfi(true);
      }
    }
  };

  const handleBlur = () => {
    let cuotas = cuotasRef.current.value;

    if (cuotas === "") {
      const error = "Debes Ingresar La Cantidad De Cuotas Adeudadas";
      guardarErrores(error);
    }
  };

  const regAfi = async () => {
    const rehab = {
      contrato: ficha[0].CONTRATO,
      apellido: ficha[0].APELLIDOS,
      nombre: ficha[0].NOMBRES,
      operador: usu.usuario,
      idoperador: usu.id,
      vigencia: moment(vigencia).format("YYYY-MM-DD"),
      fecha: moment().format("YYYY-MM-DD"),
      cuotas: cuotasRef.current.value,
      dni: ficha[0].NRO_DOC,
      empresa: ficha[0].EMPRESA,
      f: "soli afi",
    };

    await axios
      .post(`/api/socios`, rehab)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "La rehabilitacion del socio fue registrada, puede imprimir la notificacion"
          );

          let accion = `Se emitio una notificacion de rehabilitacion de servicios ID: ${res.data.idrehab} al socio: ${rehab.contrato} - ${rehab.apellido}, ${rehab.nombre} perteneciente a: ${rehab.empresa}`;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const traerUsos = async (contrato) => {
    try {
      const res = await apiGetSocios({ contrato, f: "traer usos" });
      if (res) {
        const usos = Array.isArray(res) ? res : JSON.parse(res);
        guardarUsos(usos);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al generar el listado de usos");
    }
  };

  const traerHistorial = async (contrato) => {
    try {
      const res = await apiGetSocios({ contrato, f: "traer historial" });
      if (res) {
        const list = Array.isArray(res) ? res : JSON.parse(res);
        guardarHistorial(list);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al generar el historial de movimientos");
    }
  };

  const traerCuotas = async (contrato) => {
    try {
      const res = await apiGetSocios({ contrato, f: "traer cuotas" });
      if (res) {
        const arr = Array.isArray(res) ? res : JSON.parse(res);
        guardarHistCuotas(arr);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al generar el historial de cuotas mensuales");
    }

    try {
      const res2 = await apiGetSocios({ contrato, f: "traer cuota mensual" });
      if (res2 && res2.length > 0) {
        guardarCuotaMensual(res2[0].IMPORTE);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al traer la cuota mensual");
    }
  };

  const gasLuto = async (plan, alta, cantadh) => {
    await axios
      .get(`/api/sepelio/servicios`, {
        params: {
          f: "gasto luto",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarGastoLuto(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al registrar el historial");
      });
  };

  const regBeneficio = async () => {
    let bene = {
      contrato: ficha[0].CONTRATO,
      dni: ficha[0].NRO_DOC,
      socio: `${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES}`,
      beneficio: beneficioRef.current.value,
      observacion: observacionRef.current.value,
      fecha: moment().format("YYYY-MM-DD"),
      operador: usu.usuario,
      f: "reg beneficio",
    };

    await axios
      .post(`/api/socios`, bene)
      .then((res) => {
        if (res.status === 200) {
          toast.success("El beneficio se registro en el historial del socio");

          let accion = `Se registro el siguiente beneficio: ${bene.beneficio}, al socio: ${bene.contrato} - ${bene.socio}.`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            traerBeneficios(bene.contrato);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ocurrio un error al registrar el beneficio");
      });
  };

  const traerBeneficios = async (ficha) => {
    try {
      const res1 = await apiGetSocios({ ficha, f: "traer beneficios" });
      console.log(res1);
      guardarBeneficios(res1);
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error al traer el listado de beneficios");
    }
  };

  useSWR("/api/sepelio/servicios", gasLuto);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormLegajoSocio
            dniRef={dniRef}
            contratoRef={contratoRef}
            traerSocio={traerSocio}
            tarerSocioContrato={tarerSocioContrato}
            traerSocioMutual={traerSocioMutual}
            tarerSocioContratoMutual={tarerSocioContratoMutual}
            traerApellido={traerApellido}
            traerApellidoMutual={traerApellidoMutual}
            errores={errores}
            alertas={alertas}
            show={show}
            ficha={ficha[0]}
            adhs={adhs}
            archivos={archivos}
            grupo={grupo}
            allPagos={allPagos}
            handleSoli={handleSoli}
            handleCondi={handleCondi}
            handleRehab={handleRehab}
            handleNoti={handleNoti}
            handleRecD={handleRecD}
            handleRecF={handleRecF}
            eliminarArchivos={eliminarArchivos}
            file={file}
            cuotasRef={cuotasRef}
            handleVigencia={handleVigencia}
            handleBlur={handleBlur}
            vigencia={vigencia}
            cuotas={cuotas}
            showAfi={showAfi}
            regAfi={regAfi}
            usos={usos}
            historial={historial}
            histCuotas={histCuotas}
            cuotaMensual={cuotaMensual}
            baja={baja}
            apellidoRef={apellidoRef}
            listApe={listApe}
            gl={gl}
            regBeneficio={regBeneficio}
            beneficioRef={beneficioRef}
            observacionRef={observacionRef}
            traerBeneficios={traerBeneficios}
            beneficios={beneficios}
            traerAdhs={traerAdhs}
          />
        </>
      )}
    </>
  );
}

export default Legajo;
