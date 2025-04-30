import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment, { months } from "moment";
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import FormNuevoSocio from "@/components/socios/FormNuevoSocio";

function nuevo(props) {
  let cuotaRef = React.createRef();
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let dniRef = React.createRef();
  let fechaNacRef = React.createRef();
  let altaRef = React.createRef();
  let vigenciaRef = React.createRef();
  let domiRef = React.createRef();
  let nDomiRef = React.createRef();
  let barrioRef = React.createRef();
  let domiCobRef = React.createRef();
  let domiLabRef = React.createRef();
  let mailRef = React.createRef();
  let telefonoRef = React.createRef();
  let movilRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [nFicha, guardarNFicha] = useState(0);
  const [grupos, guardarGrupos] = useState([]);
  const [zonas, guardarZonas] = useState([]);
  const [sucursales, guardarSucursales] = useState([]);
  const [procutores, guardarProductores] = useState([]);
  const [localidades, guardarLocalidades] = useState([]);
  const [obraSoc, guardarObraSoc] = useState([]);
  const [planes, guardarPlanes] = useState([]);
  const [grupoSel, guardarGrupoSel] = useState("");
  const [zonaSel, guardarZonaSel] = useState("");
  const [sucursalSel, guardarSucursalSel] = useState("");
  const [procutorSel, guardarProductorSel] = useState("");
  const [localidadSel, guardarLocalidadSel] = useState("");
  const [obraSocSel, guardarObraSocSel] = useState("");
  const [planSel, guardarPlanSel] = useState("");
  const [subPlanSel, guardarSubPlanSel] = useState("");
  const [vigencia, guardarVigencia] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get("/api/socios", {
        params: {
          f: "traer n ficha",
        },
      })
      .then((res) => {
        if (res.data) {
          let ficha = res.data.CONTRATO + 1;
          guardarNFicha(ficha);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de localidades");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer grupos",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarGrupos(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error(
          "Ocurrio un error al generar el listado de medios de pagos"
        );
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer zonas",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarZonas(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de zonas");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer sucursales",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarSucursales(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de sucursales");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer productores",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarProductores(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de productores");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer localidades",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarLocalidades(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de localidades");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer obra social",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarObraSoc(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de obras sociales");
      });

    await axios
      .get("/api/socios", {
        params: {
          f: "traer planes",
        },
      })
      .then((res) => {
        if (res.data) {
          let arr = JSON.parse(res.data);

          guardarPlanes(arr);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar el listado de planes");
      });
  };

  const handleChange = async (f, value) => {
    if (f === "grupo") {
      guardarGrupoSel(value);
    } else if (f === "zona") {
      guardarZonaSel(value);
    } else if (f === "grupo") {
      guardarGrupoSel(value);
    } else if (f === "sucursal") {
      guardarSucursalSel(value);
    } else if (f === "productor") {
      guardarProductorSel(value);
    } else if (f === "localidad") {
      guardarLocalidadSel(value);
    } else if (f === "obra social") {
      guardarObraSocSel(value);
    } else if (f === "plan") {
      let plan = value.substr(0, 1);
      let subPlan = value.substr(2, 3);

      guardarPlanSel(plan);
      guardarSubPlanSel(subPlan);
    }
  };

  const regCuota = async (socio, cuota) => {
    let data = {
      f: "reg cuota",
      CONTRATO: socio.CONTRATO,
      IMPORTE: cuota,
      CUO_ANT: 0,
      DESDE: moment().format("YYYY-MM-DD"),
      OPERADOR: usu.usuario,
    };

    await axios
      .post("/api/socios", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Cuota Registrada");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al registrar la cuota");
      });
  };

  const regSocio = async () => {
    guardarAlertas(null);
    guardarErrores(null);

    let data = {
      CONTRATO: nFicha,
      GRUPO: grupoSel,
      ZONA: zonaSel,
      SUCURSAL: sucursalSel,
      PRODUCTO: procutorSel,
      APELLIDOS: apellidoRef.current.value,
      NOMBRES: nombreRef.current.value,
      NRO_DOC: dniRef.current.value,
      NACIMIENTO: fechaNacRef.current.value,
      CALLE: domiRef.current.value,
      NRO_CALLE: nDomiRef.current.value,
      BARRIO: barrioRef.current.value,
      LOCALIDAD: localidadSel,
      DOMI_COBR: domiCobRef.current.value,
      DOMI_LAB: domiLabRef.current.value,
      ALTA: altaRef.current.value,
      VIGENCIA: vigenciaRef.current.value,
      OBRA_SOC: obraSocSel,
      TELEFONO: telefonoRef.current.value,
      MOVIL: movilRef.current.value,
      MAIL: mailRef.current.value,
      EMPRESA: "W",
      OPERADOR: usu.usuario,
      PLAN: planSel,
      SUB_PLAN: subPlanSel,
      f: "reg socio",
    };

    if (data.GRUPO === "") {
      guardarErrores(
        "Debes seleccionar el grupo o medio de pago al cual pertenecera esta ficha"
      );
    } else if (data.ZONA === "") {
      guardarErrores(
        "Debes seleccionar zona de cobranza al cual pertenecera esta ficha"
      );
    } else if (data.SUCURSAL === "") {
      guardarErrores("Debes seleccionar a que sucursal pertenecera esta ficha");
    } else if (data.PRODUCTO === "") {
      guardarErrores("Debes seleccionar quien es el productor de esta ficha");
    } else if (data.ALTA === "") {
      guardarErrores("Debes ingresar la fecha de alta de esta ficha");
    } else if (cuotaRef.current.value === "") {
      guardarErrores("Debes ingresar la cuota mensual de esta ficha");
    } else if (data.APELLIDOS === "") {
      guardarErrores("Debes ingresar el apellido del titular");
    } else if (data.NOMBRES === "") {
      guardarErrores("Debes ingresar el nombre del titular");
    } else if (data.NRO_DOC === "") {
      guardarErrores("Debes ingresar el DNI del titular");
    } else if (data.NACIMIENTO === "") {
      guardarErrores("Debes ingresar la fecha de nacimiento del titular");
    } else if (data.NOMBRES === "") {
      guardarErrores("Debes ingresar el nombre del titular");
    } else if (data.CALLE === "") {
      guardarErrores(
        "Debes ingresar el nombre de la calle donde reside el titular"
      );
    } else if (data.NRO_CALLE === "") {
      guardarErrores("Debes ingresar el N° de calle donde reside titular");
    } else if (data.BARRIO === "") {
      guardarErrores("Debes ingresar el barrio donde reside titular");
    } else if (data.LOCALIDAD === "") {
      guardarErrores("Debes ingresar la localidad donde reside titular");
    } else if (data.TELEFONO === "") {
      guardarErrores("Debes ingresar un N° de telefono");
    } else if (data.OBRA_SOC === "") {
      guardarErrores("Debes seleccionar la obra social del titular");
    } else {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Estas seguro de registrar este nuevo socio?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .post("/api/socios", data)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("La ficha fue registrada exitosamente");

                    regCuota(data, cuotaRef.current.value);

                    let accion = `Se registro un nuevo socio: ${data.APELLIDOS}, ${data.NOMBRES}. Ficha: ${data.CONTRATO} con una cuota de $${cuotaRef.current.value}.`;

                    registrarHistoria(accion, usu.usuario);

                    let hist = {
                      CONTRATO: data.CONTRATO,
                      OPERADOR: usu.usuario,
                      ARCHIVO: 1,
                      CAMPO: "",
                      ANTERIOR: "ALTA DE FICHA, TITULAR ---->",
                      NUEVO: `${data.APELLIDOS}, ${data.NOMBRES}`,
                      ACTUALIZA: moment().format("DD/MM/YYYY HH:mm"),
                    };

                    regHistorialSocio(hist);

                    confirmAlert({
                      title: "ATENCION",
                      message: "¿Quieres cargar los adherentes ahora?",
                      buttons: [
                        {
                          label: "Si",
                          onClick: () => {
                            Router.push({
                              pathname: "/socios/adherentes",
                              query: {
                                contrato: data.CONTRATO,
                              },
                            });
                          },
                        },
                        {
                          label: "No",
                          onClick: () => {
                            toast.info(
                              "Podras cargar sus adherentes en otro momento."
                            );
                            Router.reload();
                          },
                        },
                      ],
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Ocurrio un error al registrar esta ficha");
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toast.info(
                "La ficha no fue registrada. Puedes seguir chekeando los datos y cuando estes seguro, registrarla."
              );
            },
          },
        ],
      });
    }
  };

  const checkEdad = () => {
    if (fechaNacRef.current.value !== "") {
      let nac = moment(fechaNacRef.current.value).format("YYYY");

      let hoy = moment().format("YYYY");

      let edad = hoy - nac;

      if (edad < 18) {
        toast.info("El titular debe tener 18 o mas años de edad");
        guardarAlertas("El titular debe tener 18 o mas años de edad");
      }
    }
  };

  const checkvigencia = () => {
    if (fechaNacRef.current.value !== "" && altaRef.current.value) {
      let alta = altaRef.current.value;

      let nac = moment(fechaNacRef.current.value).format("YYYY");

      let hoy = moment().format("YYYY");

      let edad = hoy - nac;

      let vigencia;

      if (edad <= 45) {
        vigencia = moment(alta).add(3, "months").format("YYYY-MM-DD");
        guardarVigencia(vigencia);
      } else if (edad > 45 && edad <= 55) {
        vigencia = moment(alta).add(5, "months").format("YYYY-MM-DD");
        guardarVigencia(vigencia);
      } else if (edad > 55 && edad <= 60) {
        vigencia = moment(alta).add(6, "months").format("YYYY-MM-DD");
        guardarVigencia(vigencia);
      } else if (edad > 60 && edad <= 65) {
        vigencia = moment(alta).add(10, "months").format("YYYY-MM-DD");
        guardarVigencia(vigencia);
      } else if (edad > 65 && edad <= 75) {
        vigencia = moment(alta).add(12, "months").format("YYYY-MM-DD");
        guardarVigencia(vigencia);
      }
    } else if (fechaNacRef.current.value === "") {
      toast.info(
        "Debes ingresar la fecha de nacimiento para calcular la vigencia"
      );
      guardarAlertas(
        "Debes ingresar la fecha de nacimiento para calcular la vigencia"
      );
    }
  };

  useSWR("/api/socios", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormNuevoSocio
            nFicha={nFicha}
            grupos={grupos}
            zonas={zonas}
            sucursales={sucursales}
            procutores={procutores}
            localidades={localidades}
            obraSoc={obraSoc}
            planes={planes}
            cuotaRef={cuotaRef}
            apellidoRef={apellidoRef}
            nombreRef={nombreRef}
            dniRef={dniRef}
            fechaNacRef={fechaNacRef}
            altaRef={altaRef}
            vigenciaRef={vigenciaRef}
            domiRef={domiRef}
            nDomiRef={nDomiRef}
            barrioRef={barrioRef}
            domiCobRef={domiCobRef}
            domiLabRef={domiLabRef}
            mailRef={mailRef}
            telefonoRef={telefonoRef}
            movilRef={movilRef}
            handleChange={handleChange}
            regSocio={regSocio}
            errores={errores}
            alertas={alertas}
            checkEdad={checkEdad}
            checkvigencia={checkvigencia}
            vigencia={vigencia}
          />
        </>
      )}
    </>
  );
}

export default nuevo;
