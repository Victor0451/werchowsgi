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
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormLegajoSocio from "@/components/socios/FormLegajoSocio";

function Legajo(props) {
  let dniRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ficha, guardarFicha] = useState([]);
  const [adhs, guardarAdhs] = useState([]);
  const [show, guardarShow] = useState(false);
  const [archivos, guardarArchivos] = useState([]);
  const [file, setFile] = useState(null);
  const [grupo, guardarGrupo] = useState("");
  const [allPagos, guardarAllPagos] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerInfo = async (ficha) => {
    await axios
      .get(`/api/socios`, {
        params: {
          ficha: ficha,
          f: "traer archivos",
        },
      })
      .then((res1) => {
        let archivos = res1.data;

        guardarArchivos(archivos);

        if (res1.data.length === 0) {
          toast.warning("Este legajo no tiene archivos adjuntos");
        } else {
          toast.info("Se trajeron los archivos adjuntados a este legajo");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
              .delete(`${ip}/api/archivos/legajovirtual/eliminararchivos/${id}`)
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El archivo eliminado ");

                  //   let accion = `Se elimino un archivo en el legajo virtual del servicio  ${servicio.idservicio} - ${servicio.apellido}, ${servicio.nombre}.`;

                  //   registrarHistoria(accion, usu.usuario);

                  traerInfo();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleUpload = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtualservicios/uploadfichalegajo/${servicio.dni}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          //   let accion = `Se subio un archivo al legajo virtual del del servicio  ${servicio.idservicio} - ${servicio.apellido}, ${servicio.nombre}.`;

          //   registrarHistoria(accion, usu.usuario);
        }

        traerInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        console.log(res.data);

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

            traerAdhs("mae adh", ficha[0].CONTRATO);
            traerInfo(ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
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

                  traerAdhs("mut adh", ficha[0].CONTRATO);
                  traerInfo(ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
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

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormLegajoSocio
            dniRef={dniRef}
            traerSocio={traerSocio}
            errores={errores}
            alertas={alertas}
            show={show}
            ficha={ficha[0]}
            adhs={adhs}
            archivos={archivos}
            grupo={grupo}
            allPagos={allPagos}
            handleUpload={handleUpload}
            eliminarArchivos={eliminarArchivos}
          />
        </>
      )}
    </>
  );
}

export default Legajo;
