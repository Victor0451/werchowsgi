import React from 'react'
import {
    Card,
    CardHeader,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,

} from "@material-tailwind/react";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from 'moment';

export const FormNuevoPrestamoEmpleado = ({
    errores,
    alertas,
    handleChange,
    registrarPrestamo,
    simularPrestamo,
    capital,
    planCuotas,
    empleados,
    flag,
    cuoPrest,
    capADev,
    capSelec,
    planSelec
}) => {
    return (
        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Registrar Prestamo Para Empleados</Typography>


                <div className='border-2 rounded-xl p-4 mt-5'>
                    <Typography variant="h5" color="blue-gray" className="mt-5">
                        Confeccionar Subsidio
                    </Typography>

                    <Alert
                        color="blue"
                        className="max-w-screen mt-5 mb-5"
                        icon={<InformationCircleIcon className="mt-px h-6 w-6" />}
                    >
                        <Typography variant="h5" color="white">
                            ATENCION
                        </Typography>
                        <Typography color="white" className="mt-2 font-normal ">
                            <p className=' text-justify'>
                                EN ESTE MODULO SE PUEDEN REGISTRAR LAS SOLICITUDES DE PRESTAMOS DISPONIBLES SOLO PARA EMPLEADOS DE WERCHOW..
                            </p>
                        </Typography>
                    </Alert>

                    {alertas ? (
                        <Alert
                            color="orange"
                            className="max-w-screen mt-5 mb-5"
                            icon={<InformationCircleIcon className="mt-px h-6 w-6" />}
                        >
                            <Typography variant="h5" color="white">
                                ATENCION
                            </Typography>
                            <Typography color="white" className="mt-2 font-normal ">
                                {alertas}
                            </Typography>
                        </Alert>
                    ) : null}

                    <div className=' p-4 grid gap-6 mb-6 md:grid-cols-4'>

                        <div className='mt-2'>
                            <Select
                                label="Elige un empleado"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                                onChange={(value) => { handleChange('empleado', value) }}
                            >
                                {empleados.map((i, index) => (
                                    <Option key={index} value={i.value}>{i.label}</Option>
                                ))}

                            </Select>
                        </div><div className='mt-2'>
                            <Select
                                label="Elige un capital"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                                onChange={(value) => { handleChange('cap', value) }}
                            >
                                {capital.map((i, index) => (
                                    <Option key={index} value={i}>{i.capital}</Option>
                                ))}
                            </Select>
                        </div>
                        <div className='mt-2'>
                            <Select
                                label="Elige un plan de cuotas"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                                onChange={(value) => { handleChange('plan', value) }}
                            >
                                {planCuotas.map((i, index) => (
                                    <Option key={index} value={i.plan_cuotas}>{i.plan_cuotas}</Option>
                                ))}

                            </Select>
                        </div>
                        <div className='mt-2'>
                            <Button onClick={simularPrestamo}>
                                Calcular Prestamo
                            </Button>
                        </div>
                    </div>

                    {errores ? (

                        <Alert
                            color="red"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {errores}
                        </Alert>

                    ) : null}

                </div>

                {flag === true ? (

                    <>
                        <hr className='mt-4 mb-5 border-2' />
                        <div className=' p-4 grid gap-6 mb-6 md:grid-cols-1'>
                            <Alert

                                color="green"
                                icon={
                                    <InformationCircleIcon className="h-6 w-6" />
                                }
                            >

                                <Typography className="font-medium">Detalles del Prestamo:</Typography>
                                <ul class="mt-2 ml-2 list-disc list-inside">
                                    <li>Capital Seleccionado: ${capSelec}</li>
                                    <li>Plan de Cuotas: {planSelec}</li>
                                    <li>El valor de las cuotas es de: ${cuoPrest}</li>
                                    <li>El capital a devolver es de: ${capADev}</li>
                                    <li>El prestamo inicia: {moment().add(1, "months").format("MM/YYYY")}</li>
                                    <li>El prestamo termina: {moment().add(planSelec, "months").format("MM/YYYY")}</li>
                                </ul>

                            </Alert>

                            <div className=' flex justify-end'>
                                <Button onClick={registrarPrestamo}>
                                    Registrar Prestamo
                                </Button>
                            </div>
                        </div>
                    </>

                ) : null}



            </CardHeader>
        </Card>
    )
}

