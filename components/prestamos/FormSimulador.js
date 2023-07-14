import React from 'react'
import {
    Card,
    CardHeader,
    Typography,
    Alert,
    Button,
    Select,
    Option

} from "@material-tailwind/react";

import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import moment from 'moment';


export const FormSimulador = ({
    capital,
    planCuotas,
    handleChange,
    simularPrestamo,
    alertas,
    flag,
    capADev,
    couPrest,
    planSelec,
    capSelec,
    errores,
}) => {
    return (
        <Card className="h-full w-full p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Simulador de Subsidios</Typography>

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
                            ESTE ES UN SIMULADOR QUE PERMITE REALIZAR EL CALCULO DE LOS VALORES DE UN SUBSIDIO DE MANERA PRACTICA Y FACIL,
                            CON FINES INFORMATIVOS PARA EL SOCIO, SIN LA OBLIGACION DE TENER QUE CREARLO. EN CASO DE QUERER CONFECCIONAR UN SUBSIDIO,
                            PUEDES HACER <Link className='' href={'/prestamos/nuevoprestamo'}><strong><u>CLICK AQUI</u></strong></Link>.
                        </p>
                    </Typography>
                </Alert>


                <div className='mt-10 grid gap-6 mb-6 md:grid-cols-3'>


                    <Select
                        label="Elige el Capital a Prestar"

                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}

                        onChange={(value) => handleChange('cap', value)}

                    >
                        {
                            capital.map((i, index) => (
                                <Option key={index} value={i}>{i.capital}</Option>
                            ))
                        }
                    </Select>


                    <Select
                        label="Elige un Plan de Cuotas"

                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}

                        onChange={(value) => handleChange('plan', value)}

                    >
                        {
                            planCuotas.map((i, index) => (
                                <Option key={index} value={i.plan_cuotas}>{i.plan_cuotas}</Option>
                            ))
                        }

                    </Select>


                    <Button color='blue' onClick={simularPrestamo} >
                        Simular
                    </Button>


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



                {
                    flag === true ? (
                        <>
                            <hr className='mt-5 mb-5 border-2' />

                            <Alert

                                color="green"
                                icon={
                                    <InformationCircleIcon className="h-6 w-6" />
                                }
                            >
                                <Typography className="font-medium">Simulacion Generada:</Typography>
                                <ul class="mt-2 ml-2 list-disc list-inside">
                                    <li>Capital Seleccionado: ${capSelec}</li>
                                    <li>Plan de Cuotas: {planSelec}</li>
                                    <li>El valor de las cuotas es de: ${couPrest}</li>
                                    <li>El capital a devolver es de: ${capADev}</li>
                                    <li>El subsidio inicia: {moment().add(1, "months").format("MM/YYYY")}</li>
                                    <li>El subsidio termina: {moment().add(planSelec, "months").format("MM/YYYY")}</li>
                                </ul>
                            </Alert>


                        </>

                    ) : null
                }



            </CardHeader>
        </Card>
    )
}
