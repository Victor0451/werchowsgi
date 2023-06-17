import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import { ListadoCampanaTemporales } from '@/components/campanas/ListadoCampanasTemporales';
import {
    Typography,
    Card,
    CardHeader,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Alert
} from "@material-tailwind/react";
import {
    BellIcon, InformationCircleIcon
} from "@heroicons/react/24/solid";
import { Redirect } from '@/components/auth/Redirect';
import axios from 'axios';
import { toast } from 'react-toastify';
import useSWR from 'swr'
import { registrarHistoria } from '@/libs/funciones';
import moment from 'moment';


export default function CampanasTemporales() {

    const [listado, guardarListado] = useState([])
    const [listadoTrab, guardarListadoTrab] = useState([])
    const [errores, guardarErrores] = useState(null)
    const [accion, guardarAccion] = useState("")
    const [fechaAcc, guardarFechaAcc] = useState("")
    const [observAcc, guardarObservAcc] = useState("")
    const [noData, guardarNodata] = useState(false)
    const [noData2, guardarNodata2] = useState(false)



    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const handleChange = (f, value) => {

        if (f === 'accion') {

            guardarAccion(value)

        } else if (f === 'fecha accion') {

            guardarFechaAcc(value)

        } else if (f === 'observacion ac') {

            guardarObservAcc(value)

        }
    };

    const RegistrarGestion = async (row) => {

        guardarErrores(null)

        const datos = {
            operador: usu.usuario,
            idcaso: row.idcaso,
            accion: accion,
            observacion: observAcc,
            fecha_observacion: moment(fechaAcc).format('YYYY-MM-DD'),
            f: 'act caso temp'
        };


        if (datos.accion === '') {

            guardarErrores("Debes elegir una accion")

        } else if (datos.fecha_observacion === "Invalid date") {

            guardarErrores("Debes ingresar la fecha en la que se realizo la accion")

        } else {

            await axios
                .put(`/api/campanas`, datos)
                .then((res) => {

                    if (res.status === 200) {

                        toast.success("Se registro la accion con exito")

                        let accionHis = `Se realizo la gestion ID: ${res.data.idgestion} del caso: ${datos.idcaso} - socio: ${datos.contrato} asignado en campaña temporal.`

                        registrarHistoria(accionHis, usu.usuario)

                    }

                })
                .catch((error) => {
                    console.log(error);
                })

        }

    };

    const traerCampTemp = async () => {

        guardarListado([])
        guardarListadoTrab([])

        await axios.get(`/api/campanas`, {

            params: {
                f: 'camp temp',
                operador: usu.usuario
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarNodata(false)
                    guardarListado(res.data)

                } else if (res.data.length === 0) {

                    guardarNodata(true)

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer la campaña")
            })

        await axios.get(`/api/campanas`, {

            params: {
                f: 'camp temp trab',
                operador: usu.usuario
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarNodata2(false)
                    guardarListadoTrab(res.data)

                } else if (res.data.length === 0) {

                    guardarNodata2(true)

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer la campaña")
            })

    }

    useSWR("/api/campanas", traerCampTemp);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {!usu ? (

                <Redirect />

            ) : usu ? (

                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <Tabs value="asignado">
                            <TabsHeader>
                                <Tab value={"asignado"}>
                                    <div className="flex items-start  gap-2">
                                        {React.createElement(BellIcon, { className: "w-5 h-5" })}
                                        Casos Asignados
                                    </div>
                                </Tab>
                                <Tab value={"trabajado"} >
                                    <div className="flex items-start gap-2">
                                        {React.createElement(BellIcon, { className: "w-5 h-5" })}
                                        Casos Trabajados
                                    </div>
                                </Tab>


                            </TabsHeader>

                            <hr />

                            <TabsBody>

                                <TabPanel value={"asignado"}>

                                    {noData === false ? (
                                        <ListadoCampanaTemporales
                                            listado={listado}
                                            handleChange={handleChange}
                                            RegistrarGestion={RegistrarGestion}
                                            errores={errores}
                                        />
                                    ) : (
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
                                    )}

                                </TabPanel>

                                <TabPanel value={"trabajado"}>

                                    {noData2 === false ? (
                                        <ListadoCampanaTemporales
                                            listado={listadoTrab}
                                            handleChange={handleChange}
                                            RegistrarGestion={RegistrarGestion}
                                            errores={errores}
                                        />
                                    ) : (
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
                                    )}


                                </TabPanel>
                            </TabsBody>

                        </Tabs>

                    </CardHeader>
                </Card>


            ) : null}
        </>
    )
}
