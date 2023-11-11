import React, { useEffect, useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import { useRouter } from "next/router";
import axios from "axios";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
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
} from "@material-tailwind/react";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { registrarHistoria } from "../../../libs/funciones";
import { toast } from "react-toastify";
import moment from "moment";
import useWerchow from "@/hook/useWerchow";

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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

  const nuevosCasos = async () => {
    await axios
      .get(`/api/campanas`, {
        params: {
          empresa: empresa,
          operador: usu.usuario,
          campana: camp,
          f: "nuevos casos",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarNoData(false);
          guardarListado(res.data);
        } else if (res.data.length === 0) {
          guardarNoData(true);
        }
      })
      .catch((error) => {
        console.log(error);
        guardarNoData(true);
        toast.error("Ocurrio un error al traer el listado de casos asignados");
      });

    await axios
      .get(`/api/campanas`, {
        params: {
          empresa: empresa,
          operador: usu.usuario,
          campana: camp,
          f: "casos trabajados",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarNoData2(false);
          guardarListadoTrab(res.data);
        } else if (res.data.length === 0) {
          guardarNoData2(true);
        }
      })
      .catch((error) => {
        console.log(error);
        guardarNoData(true);
        toast.error("Ocurrio un error al traer el listado de casos trabajados");
      });

    traerProgreso();
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

            nuevosCasos();
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

  const porcenTab = (a, t) => {
    let resultado = 0;

    if (t === 0) {
      return resultado;
    } else if (t > 0) {
      resultado = (t * 100) / a;
      return resultado.toFixed(2);
    }
  };

  const traerProgreso = async () => {
    await axios
      .get(`/api/campanas`, {
        params: {
          op: usu.usuario,
          mes: moment().format("MM"),
          ano: moment().format("YYYY"),
          f: "casos asignados progreso",
        },
      })
      .then((res) => {
        let asig = JSON.parse(res.data);

        guardarAsignado(asig[0].asig);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de casos asignados");
      });

    await axios
      .get(`/api/campanas`, {
        params: {
          op: usu.usuario,
          mes: moment().format("MM"),
          ano: moment().format("YYYY"),
          f: "casos trabajados progreso",
        },
      })
      .then((res) => {
        let trab = JSON.parse(res.data);

        guardarTrabajado(trab[0].trab);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Ocurrio un error al traer el listado de casos trabajados."
        );
      });
  };

  useSWR("/api/campanas", nuevosCasos);

  return (
    <>
      {isLoading === true ? (
        <Skeleton />
      ) : (
        <>
          {!usu ? (
            <Redirect />
          ) : usu ? (
            <Card className="h-full w-full">
              <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none"
              >
                <div className="mt-4 mb-4 border-2 rounded-xl">
                  <Alert color="blue" variant="ghost" icon={<IconSolid />}>
                    <Typography variant="h4" className="text-center">
                      Estadistica General de Campaña.
                    </Typography>
                    <hr className="border-2 mt-5 mb-5" />
                    <Typography variant="h6" className="mt-2">
                      <u>Operador</u>: {usu.usuario}
                    </Typography>
                    <Typography variant="h6" className="mt-2">
                      <u>Periodo</u>: {moment().format("MM")}/
                      {moment().format("YYYY")}
                    </Typography>
                    <Typography variant="h6" className="mt-2">
                      <u>Numeros de la Campaña</u>:
                    </Typography>
                    <ul className="mt-2 ml-2 list-inside list-disc">
                      <li className="mt-1">
                        <u>Casos Asignados</u>: <strong>{asignado}</strong>
                      </li>
                      <li className="mt-1">
                        <u>Casos Trabajados</u>: <strong>{trabajado}</strong>
                      </li>
                      <li className="mt-1">
                        <u>Progreso del Trabajo</u>:{" "}
                        <strong> % {porcenTab(asignado, trabajado)}</strong>
                      </li>
                    </ul>

                    <hr className="border-2 mt-5 mb-5" />
                    <Typography variant="paragrahp">
                      Estadistica sobre el trabajo realizado en las campañas
                      pertenecientes al periodo analizado. El progreso de
                      trabajo, cuenta para la liquidacion del bono.
                    </Typography>
                  </Alert>
                </div>

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
              </CardHeader>
            </Card>
          ) : null}
        </>
      )}
    </>
  );
}
