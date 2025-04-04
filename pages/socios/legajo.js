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
          onClick: () => {},
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
    guardarBaja(false);

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
            traerInfo(ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
            traerUsos(ficha[0].CONTRATO);
            traerHistorial(ficha[0].CONTRATO);
            traerCuotas(ficha[0].CONTRATO);
          } else if (re.length === 0) {
            axios
              .get("/api/socios", {
                params: {
                  f: "maestro baja",
                  dni: dniRef.current.value,
                },
              })
              .then((res1) => {
                let re = JSON.parse(res1.data);

                if (re.length > 0) {
                  let ficha = JSON.parse(res1.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  traerAdhs("adh", ficha[0].CONTRATO);
                  traerInfo(ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                  traerUsos(ficha[0].CONTRATO);
                  traerHistorial(ficha[0].CONTRATO);
                  traerCuotas(ficha[0].CONTRATO);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
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

  const traerSocioMutual = async () => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de DNI");
    } else {
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
            traerInfo(ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
            traerUsos(ficha[0].CONTRATO);
            traerHistorial(ficha[0].CONTRATO);
            traerCuotas(ficha[0].CONTRATO);
          } else {
            axios
              .get("/api/socios", {
                params: {
                  f: "mutual baja",
                  dni: dniRef.current.value,
                },
              })
              .then((res3) => {
                let re = JSON.parse(res3.data);

                if (re.length > 0) {
                  let ficha = JSON.parse(res3.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  traerAdhs("mutual adh", ficha[0].CONTRATO);
                  traerInfo(ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                  traerUsos(ficha[0].CONTRATO);
                  traerHistorial(ficha[0].CONTRATO);
                  traerCuotas(ficha[0].CONTRATO);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
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
            "Ocurrio un error al tarer los datos del socio en Mutual"
          );
        });
    }
  };

  const tarerSocioContrato = async (hc) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    let contrato;

    if (!hc.view) {
      contrato = hc;
    } else if (hc.view) {
      contrato = contratoRef.current.value;
    }

    if (contrato === "") {
      guardarErrores("Debes ingresar un numero de socio");
    } else {
      axios
        .get("/api/socios", {
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
            traerInfo(ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
            traerUsos(ficha[0].CONTRATO);
            traerHistorial(ficha[0].CONTRATO);
            traerCuotas(ficha[0].CONTRATO);
          } else if (re.length === 0) {
            axios
              .get("/api/socios", {
                params: {
                  f: "maestro baja contrato",
                  ficha: contrato,
                },
              })
              .then((res1) => {
                let re = JSON.parse(res1.data);

                if (re.length > 0) {
                  let ficha = JSON.parse(res1.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  traerAdhs("adh", ficha[0].CONTRATO);
                  traerInfo(ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                  traerUsos(ficha[0].CONTRATO);
                  traerHistorial(ficha[0].CONTRATO);
                  traerCuotas(ficha[0].CONTRATO);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Werchow"
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

  const tarerSocioContratoMutual = async (hc) => {
    guardarErrores(null);
    guardarAlertas(null);
    guardarShow(false);
    guardarBaja(false);

    let contrato;

    if (!hc.view) {
      contrato = hc;
    } else if (hc.view) {
      contrato = contratoRef.current.value;
    }

    if (contrato === "") {
      guardarErrores("Debes ingresar un numero de socio");
    } else {
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
            traerInfo(ficha[0].CONTRATO);
            descriGrupo(ficha[0].GRUPO);
            traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
            traerUsos(ficha[0].CONTRATO);
            traerHistorial(ficha[0].CONTRATO);
            traerCuotas(ficha[0].CONTRATO);
          } else {
            axios
              .get("/api/socios", {
                params: {
                  f: "mutual baja contrato",
                  ficha: contrato,
                },
              })
              .then((res3) => {
                let re = JSON.parse(res3.data);

                if (re.length > 0) {
                  let ficha = JSON.parse(res3.data);

                  guardarFicha(ficha);
                  guardarShow(true);
                  guardarBaja(true);

                  traerAdhs("mutual adh", ficha[0].CONTRATO);
                  traerInfo(ficha[0].CONTRATO);
                  descriGrupo(ficha[0].GRUPO);
                  traerPagos(ficha[0].CONTRATO, ficha[0].EMPRESA);
                  traerUsos(ficha[0].CONTRATO);
                  traerHistorial(ficha[0].CONTRATO);
                  traerCuotas(ficha[0].CONTRATO);
                } else {
                  guardarAlertas(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
                  );
                  toast.info(
                    "El DNI ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
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
            "Ocurrio un error al tarer los datos del socio en Mutual"
          );
        });
    }
  };

  const traerApellido = async () => {
    guardarErrores(null);
    guardarAlertas(null);

    let apellido = apellidoRef.current.value;

    if (apellido === "") {
      guardarErrores("Debes ingresar el apellido del titular");
    } else {
      axios
        .get("/api/socios", {
          params: {
            f: "maestro apellido",
            apellido: apellido,
          },
        })
        .then((res0) => {
          let re = JSON.parse(res0.data);
          if (re.length > 0) {
            guardarApellidos(re);
          } else if (re.length === 0) {
            guardarAlertas(
              "El Apellido ingresado no esta registrado o pertenece a un socio de Werchow"
            );
            toast.info(
              "El Apellido ingresado no esta registrado o pertenece a un socio de Werchow"
            );
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

  const traerApellidoMutual = async () => {
    guardarErrores(null);
    guardarAlertas(null);

    let apellido = apellidoRef.current.value;

    if (apellido === "") {
      guardarErrores("Debes ingresar el apellido del titular");
    } else {
      axios
        .get("/api/socios", {
          params: {
            f: "mutual apellido",
            apellido: apellido,
          },
        })
        .then((res0) => {
          let re = JSON.parse(res0.data);
          if (re.length > 0) {
            guardarApellidos(re);
          } else if (re.length === 0) {
            guardarAlertas(
              "El Apellido ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
            );
            toast.info(
              "El Apellido ingresado no esta registrado o pertenece a un socio de Mutual San Valentin"
            );
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
    await axios
      .get(`/api/socios`, {
        params: {
          contrato: contrato,
          f: "traer usos",
        },
      })
      .then((res) => {
        if (res.data) {
          let usos = JSON.parse(res.data);

          guardarUsos(usos);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado de usos");
      });
  };

  const traerHistorial = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          contrato: contrato,
          f: "traer historial",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);

          guardarHistorial(list);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el historial de movimientos");
      });
  };

  const traerCuotas = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          contrato: contrato,
          f: "traer cuotas",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);
          guardarHistCuotas(arr);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al generar el historial de cuotas mensuales"
        );
      });

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
    await axios
      .get(`/api/socios`, {
        params: {
          ficha: ficha,
          f: "traer beneficios",
        },
      })
      .then((res1) => {
        console.log(res1.data);
        guardarBeneficios(res1.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de beneficios");
      });
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
          />
        </>
      )}
    </>
  );
}

export default Legajo;
