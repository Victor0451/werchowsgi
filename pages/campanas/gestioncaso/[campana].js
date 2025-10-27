import React, { useEffect, useState, useMemo } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import { useRouter } from "next/router";
import axios from "axios";
import { Redirect } from "@/components/auth/Redirect";
import ListadoCasos from "@/components/campanas/ListadoCasos";
import {
  Card,
  CardHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Alert,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { registrarHistoria } from "../../../libs/funciones";
import { toast } from "react-toastify";
import moment from "moment";
import useWerchow from "@/hook/useWerchow";
import AlertProgreso from "@/components/campanas/AlertProgreso";

export default function Campana() {
  const [listado, guardarListado] = useState([]);
  const [listadoTrab, guardarListadoTrab] = useState([]);
  const [accion, guardarAccion] = useState("");
  const [nuevaAccion, guardarNuevaAccion] = useState("");
  const [fechaAcc, guardarFechaAcc] = useState("");
  const [fechaNuAcc, guardarFechaNuAcc] = useState("");
  const [observAcc, guardarObservAcc] = useState("");
  const [observNuAcc, guardarObservNuAcc] = useState("");
  const [historial, guardarHistorial] = useState([]);
  const [historialAcc, guardarHistorialAcc] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [noData, guardarNoData] = useState(false);
  const [noData2, guardarNoData2] = useState(false);
  const [asignado, guardarAsignado] = useState([]);
  const [trabajado, guardarTrabajado] = useState([]);

  const { isLoading } = useUser();

  const { usu } = useWerchow();

  const router = useRouter();

  const { empresa, camp } = router.query;

  const handleChange = (f, value) => {
    if (f === "accion") {
      guardarAccion(value);
    } else if (f === "nueva accion") {
      guardarNuevaAccion(value);
    } else if (f === "fecha accion") {
      guardarFechaAcc(value);
    } else if (f === "fecha naccion") {
      guardarFechaNuAcc(value);
    } else if (f === "observacion ac") {
      guardarObservAcc(value);
    } else if (f === "observacion nuac") {
      guardarObservNuAcc(value);
    }
  };

  const updateAccion = async (id) => {
    const datos = {
      accion: 1,
      caso: id,
      f: "update caso",
    };

    await axios
      .put(`/api/campanas`, datos)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RegistrarGestion = async (row) => {
    guardarErrores(null);

    const datos = {
      operador: usu.usuario,
      idcaso: row.idcaso,
      fechaaccion: moment(fechaAcc).format("YYYY-MM-DD"),
      accion: accion,
      observacion: observAcc,
      fechanuevaaccion: moment(fechaNuAcc).format("YYYY-MM-DD"),
      nuevaaccion: nuevaAccion,
      observacion_nuevaaccion: observNuAcc,
      contrato: row.contrato,
      f: "reg caso",
    };

    if (datos.accion === "") {
      guardarErrores("Debes elegir una accion");
    } else if (datos.fechaaccion === "Invalid date") {
      guardarErrores("Debes ingresar la fecha en la que se realizo la accion");
    } else if (datos.nuevaaccion === "") {
      guardarErrores("Debes ingresar la nueva accion a realizar");
    } else if (datos.fechanuevaaccion === "Invalid date") {
      guardarErrores(
        "Debes ingresar la fecha en la que se realizara la nueva accion"
      );
    } else {
      await axios
        .post(`/api/campanas`, datos)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Se registro la accion con exito");

            let accionHis = `Se realizo la gestion ID: ${res.data.idgestion} del caso: ${datos.idcaso} - socio: ${datos.contrato} asignado en campaña`;

            registrarHistoria(accionHis, usu.usuario);

            let id = row.idcaso;
            updateAccion(id);

            traerDatos();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const historialBonif = async (id) => {
    guardarHistorial([]);

    await axios
      .get(`/api/campanas`, {
        params: {
          id: id,
          f: "historial",
        },
      })
      .then((res) => {
        guardarHistorial(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const historialAcciones = async (id) => {
    guardarHistorialAcc([]);

    await axios
      .get(`/api/campanas`, {
        params: {
          contrato: id,
          f: "gestion caso",
        },
      })
      .then((res) => {
        guardarHistorialAcc(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const porcentaje = useMemo(() => {
    const totalAsignado = Array.isArray(asignado)
      ? asignado.reduce((sum, item) => sum + item.asig, 0)
      : 0;
    const totalTrabajado = Array.isArray(trabajado)
      ? trabajado.reduce((sum, item) => sum + item.trab, 0)
      : 0;


 
    let resultado = 0;

    if (totalTrabajado === 0 || totalAsignado === 0) {
      return resultado;
    } else if (totalTrabajado > 0) {
      resultado = (totalTrabajado * 100) / totalAsignado;
    }
    return resultado.toFixed(2);
  }, [asignado, trabajado]);

  const traerDatos = async () => {
    // Prevenimos la ejecución si no tenemos los datos necesarios
    if (!usu || !empresa || !camp) return;

    try {
      const paramsProgreso = {
        op: usu.usuario, // Asegúrate que el API espera 'op' y no 'operador'
        mes: moment().format("MM"),
        ano: moment().format("YYYY"),
      };
      const paramsCasos = {
        empresa: empresa,
        operador: usu.usuario,
        campana: camp,
      };

      // Ejecutamos todas las llamadas en paralelo
      const [resNuevos, resTrabajados, resProgAsignados, resProgTrabajados] =
        await Promise.all([
          axios.get(`/api/campanas`, {
            params: { ...paramsCasos, f: "nuevos casos" },
          }),
          axios.get(`/api/campanas`, {
            params: { ...paramsCasos, f: "casos trabajados" },
          }),
          axios.get(`/api/campanas`, {
            params: { ...paramsProgreso, f: "casos asignados progreso" },
          }),
          axios.get(`/api/campanas`, {
            params: { ...paramsProgreso, f: "casos trabajados progreso" },
          }),
        ]);

      // Actualizamos estado para las listas de casos
      guardarListado(resNuevos.data);
      guardarNoData(resNuevos.data.length === 0);
      guardarListadoTrab(resTrabajados.data);
      guardarNoData2(resTrabajados.data.length === 0);

      // Actualizamos estado para el progreso
      const dataProgAsignados = JSON.parse(resProgAsignados.data);
      const dataProgTrabajados = JSON.parse(resProgTrabajados.data);
      guardarAsignado(Array.isArray(dataProgAsignados) ? dataProgAsignados : []);
      guardarTrabajado(Array.isArray(dataProgTrabajados) ? dataProgTrabajados : []);
    } catch (error) {
      console.error("Error al traer los datos de la campaña:", error);
      toast.error("Ocurrió un error al traer los datos de la campaña.");
      guardarAsignado([]);
      guardarTrabajado([]);
      guardarNoData(true);
      guardarNoData2(true);
    }
  };

  useEffect(() => {
    traerDatos();
  }, [usu, empresa, camp]);

  return (
    <>
      {isLoading === true ? (
        <Skeleton />
      ) : (
        <>
          {!usu ? (
            <Redirect />
          ) : usu ? (
            <>
              <Card className="h-full w-full">
                <CardBody
                  floated={false}
                  shadow={false}
                  className="rounded-none"
                >
                  <AlertProgreso
                    oper={usu.usuario}
                    mes={moment().format("MM")}
                    ano={moment().format("YYYY")}
                    asignado={asignado}
                    trabajado={trabajado}
                    porcentaje={porcentaje}
                  />
                </CardBody>
              </Card>

              <Card className="h-full w-full mt-5">
                <CardBody
                  floated={false}
                  shadow={false}
                  className="rounded-none"
                >
                  <Tabs value="asignado">
                    <TabsHeader>
                      <Tab value={"asignado"}>
                        <div className="flex items-start  gap-2">
                          {React.createElement(BellIcon, {
                            className: "w-5 h-5",
                          })}
                          Casos Asignados
                        </div>
                      </Tab>
                      <Tab value={"trabajado"}>
                        <div className="flex items-start gap-2">
                          {React.createElement(BellIcon, {
                            className: "w-5 h-5",
                          })}
                          Casos Trabajados
                        </div>
                      </Tab>
                    </TabsHeader>

                    <hr />

                    <TabsBody>
                      <TabPanel value={"asignado"}>
                        {noData === true ? (
                          <Alert
                            icon={
                              <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                              />
                            }
                          >
                            No hay casos asignados.
                          </Alert>
                        ) : (
                          <ListadoCasos
                            listado={listado}
                            camp={camp}
                            RegistrarGestion={RegistrarGestion}
                            handleChange={handleChange}
                            errores={errores}
                            usu={usu}
                            historialBonif={historialBonif}
                            historial={historial}
                            historialAcciones={historialAcciones}
                            historialAcc={historialAcc}
                            noData={noData}
                          />
                        )}
                      </TabPanel>

                      <TabPanel value={"trabajado"}>
                        {noData2 === true ? (
                          <Alert
                            icon={
                              <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                              />
                            }
                          >
                            No hay casos asignados.
                          </Alert>
                        ) : (
                          <ListadoCasos
                            listado={listadoTrab}
                            camp={camp}
                            RegistrarGestion={RegistrarGestion}
                            handleChange={handleChange}
                            errores={errores}
                            usu={usu}
                            historialBonif={historialBonif}
                            historial={historial}
                            historialAcciones={historialAcciones}
                            historialAcc={historialAcc}
                            noData={noData}
                          />
                        )}
                      </TabPanel>
                    </TabsBody>
                  </Tabs>
                </CardBody>
              </Card>
            </>
          ) : null}
        </>
      )}
    </>
  );
}
