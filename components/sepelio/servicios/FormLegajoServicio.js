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

export const FormLegajoServicio = ({
    servicio,
    archivos,
    eliminarArchivos,
    file,
    handleUpload,
}) => {

    return (

        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2"><u>Legajo Virtual</u>: {servicio.idservicio} - {servicio.apellido}, {servicio.nombre}</Typography>

                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Informacion del Servicio
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Fecha Recepcion" type="text" defaultValue={moment(servicio.fecha_recepcion).format('DD/MM/YYYY')} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Empresa" type="text" defaultValue={servicio.empresa} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="N° Socio" type="number" defaultValue={servicio.contrato} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="DNI" type="number" defaultValue={servicio.dni} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Obra Social" type="text" defaultValue={servicio.obra_soc} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Apellido" type="text" defaultValue={servicio.apellido} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Nombre" type="text" defaultValue={servicio.nombre} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Edad" type="number" defaultValue={servicio.edad} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Fecha Fallecimiento" type='text' defaultValue={moment(servicio.fecha_fallecimiento).format('DD/MM/YYYY')} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Lugar Fallecimiento" type="text" defaultValue={servicio.lugar_fallecimiento} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Altura" type="text" defaultValue={servicio.altura} readOnly />
                        </div>

                        <div className="relative w-full mb-6 group">
                            <Input size="md" label="Peso" type="text" defaultValue={servicio.peso} readOnly />
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
                                                    url={'api/archivos/legajovirtualservicios/archivo/'}
                                                    urlDesc={'api/archivos/legajovirtualservicios/descargararchivo/'}
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
