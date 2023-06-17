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
import Link from 'next/link';
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const FormNuevoAuto = ({
    errores,
    patenteRef,
    autoRef,
    kilometrosRef,
    responsableRef,
    motorRef,
    chasisRef,
    modeloRef,
    empresaRef,
    nroPolizaRef,
    vencimientoRef,
    coberturaRef,
    registrarAuto
}) => {
    return (
        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Registro de Autos</Typography>


                <div className='p-4 border-2 rounded-lg mt-6 '>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Datos del Vehiculo
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Patente" type="text" inputRef={patenteRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Marca y Modelo" type="text" inputRef={autoRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Kilometraje" type="number" inputRef={kilometrosRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N° Serie Motor" type="text" inputRef={motorRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N° Serie Chasis" type="text" inputRef={chasisRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Modelo (Año de fabricacion)" type="number" inputRef={modeloRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Responsable" type="text" inputRef={responsableRef} />

                        </div>
                    </div>
                </div>

                <hr className='mt-5 mb-5 border-2' />

                <div className='p-4 border-2 rounded-lg mt-6 '>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Datos de la Poliza
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Empresa" type="text" inputRef={empresaRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N° Poliza" type="text" inputRef={nroPolizaRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Vencimiento" type="date" inputRef={vencimientoRef} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Cobertura" type="text" inputRef={coberturaRef} />

                        </div>
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

                <div className='flex justify-end mt-5'>
                    <div className="grid md:grid-cols-2 md:gap-6 ">
                        <div className="relative z-0 w-full mb-6 group">
                            <Button color='blue' onClick={() => registrarAuto()}>
                                Registrar
                            </Button>

                        </div>



                        <div className="relative z-0 w-full mb-6 group">
                            <Link href={"/"}>
                                <Button color='red'>
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}
