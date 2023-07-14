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
import moment from 'moment';
import { Archivo } from '../../archivos/Archivo'
import { FormSubirArchivos } from '../../archivos/FormSubirArchivos';

export const FormLegajoAuto = ({
    auto,
    archivos,
    eliminarArchivos,
    file,
    handleUpload,
}) => {

    return (

        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2"><u>Legajo Virtual</u>: {auto.patente} - {auto.auto}</Typography>

                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Informacion del Automovil
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Patente" type="text" defaultValue={auto.patente} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Marca y Modelo" type="text" defaultValue={auto.auto} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Kilometraje" type="number" defaultValue={auto.kilometros} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N° Serie Motor" type="text" defaultValue={auto.motor} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N° Serie Chasis" type="text" defaultValue={auto.chasis} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Modelo (Año de fabricacion)" type="number" defaultValue={auto.modelo} />

                        </div>

                    </div>


                </div>

                <hr className='mt-5 mb-5 border-2' />

                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Subir Archivos
                    </Typography>

                    <div className="grid md:grid-cols-1 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <FormSubirArchivos
                                file={file}
                                handleUpload={handleUpload}
                            />
                        </div>
                    </div>



                </div>

                <hr className='mt-5 mb-5 border-2' />

                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Archivos
                    </Typography>

                    <div className="grid md:grid-cols-3 md:gap-6">

                        {
                            archivos.length > 0 ? (
                                <>
                                    {
                                        archivos.map((a, index) => (
                                            <div key={index} className="relative z-0 w-full mb-6 group">

                                                <Archivo
                                                    url={'api/archivos/legajovirtualautos/archivo/'}
                                                    urlDesc={'api/archivos/legajovirtualautos/descargararchivo/'}
                                                    archivo={a.archivo}
                                                    eliminarArchivos={eliminarArchivos}
                                                />

                                            </div>
                                        ))
                                    }
                                </>
                            ) : null


                        }

                    </div>



                </div>

            </CardHeader>
        </Card >

    )
}
