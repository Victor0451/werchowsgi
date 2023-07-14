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
import { ListadoReporte } from './ListadoReporte';
import ExportarPadron from './ExportarPadron';

export const FormReportes = ({
    desdeRef,
    hastaRef,
    errores,
    buscarPeriodo,
    reportes,
    listPrest,
    usu,
    desde,
    hasta,
}) => {
    return (
        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Reporte de Subsidios Generados</Typography>


                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Seleccione el periodo.
                    </Typography>

                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Desde" type="date" inputRef={desdeRef} />
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Hasta" type="date" inputRef={hastaRef} />
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Button onClick={buscarPeriodo}>
                                Buscar
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



                {
                    reportes.length > 0 ? (
                        <>
                            <div className='p-4 border-2 rounded-lg mt-6'>

                                <Typography variant="h5" color="blue-gray" className="mb-6">
                                    Reporte de prestamos generados por Operador.
                                </Typography>

                                <div className='mt-5 mb-5 border-2 p-4'>
                                    <Typography variant="paragraph" color="blue-gray">
                                        Opciones
                                    </Typography>

                                    <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-5'>
                                        <ExportarPadron
                                            listado={reportes}
                                            usu={usu}
                                            f={"rep op"}

                                        />

                                    </div>

                                </div>

                                <ListadoReporte
                                    listado={reportes}
                                    f={"rep op"}
                                />

                            </div>

                            <hr className='mt-5 mb-5 border-2' />

                            <div className='p-4 border-2 rounded-lg mt-6'>

                                <Typography variant="h5" color="blue-gray" className="mb-6">
                                    Reportes de prestamos generados en el periodo seleccionado.
                                </Typography>

                                <div className='mt-5 mb-5 border-2 p-4'>
                                    <Typography variant="paragraph" color="blue-gray">
                                        Opciones
                                    </Typography>

                                    <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-5'>
                                        <ExportarPadron
                                            listado={listPrest}
                                            f={"rep prest"}
                                            desde={desde}
                                            hasta={hasta}
                                        />

                                    </div>

                                </div>

                                <ListadoReporte
                                    listado={listPrest}
                                    usu={usu}
                                    f={"rep prest"}
                                />

                            </div>
                        </>
                    ) : null
                }




            </CardHeader>
        </Card>

    )
}
