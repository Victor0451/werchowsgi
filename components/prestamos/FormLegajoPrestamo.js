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
import { FormSubirArchivos } from '../archivos/FormSubirArchivos';
import { Archivo } from '../archivos/Archivo';

export const FormLegajoPrestamo = ({
    socio,
    prestamo,
    archivos,
    eliminarArchivos,
    file,
    handleUpload,
}) => {

    let capDev = parseFloat(prestamo.ptm_valcuota) * parseInt(prestamo.ptm_cuotas)

    return (

        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2"><u>Legajo Virtual</u>: {prestamo.cod_ptm_leg}</Typography>

                <div className='p-4 border-2 rounded-lg mt-6'>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Informacion del Socio
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Contrato" type="text" readOnly defaultValue={socio.CONTRATO} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="DNI" type="text" readOnly defaultValue={socio.NRO_DOC} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Socio" type="text" readOnly defaultValue={`${socio.APELLIDOS}, ${socio.NOMBRES}`} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Calle" type="text" readOnly defaultValue={socio.CALLE} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="N°" type="text" readOnly defaultValue={socio.NRO_CALLE} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Barrio" type="text" readOnly defaultValue={socio.BARRIO} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Localidad" type="text" readOnly defaultValue={socio.LOCALIDAD} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Telefono" type="text" readOnly defaultValue={socio.TELEFONO} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Celular" type="text" readOnly defaultValue={socio.MOVIL} />

                        </div>
                    </div>

                </div>

                <hr className='mt-5 mb-5 border-2' />

                <div className='p-4 border-2 rounded-lg mt-6 '>

                    <Typography variant="h5" color="blue-gray" className="mb-6">
                        Informacion del Subsidio
                    </Typography>

                    <div className="grid md:grid-cols-4 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Fecha Solicitud" type="text" readOnly defaultValue={moment(prestamo.ptm_fechasol).format('DD/MM/YYYY')} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Capital" type="text" readOnly defaultValue={`$${prestamo.ptm_prestamo}`} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Plan de Cuotas" type="text" readOnly defaultValue={prestamo.ptm_cuotas} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Cuota Mensual" type="text" readOnly defaultValue={`$${prestamo.ptm_valcuota}`} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Capital a Devolver" type="text" readOnly defaultValue={`$${capDev}`} />

                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input size="md" label="Renovacion" type="text" readOnly defaultValue={prestamo.ptm_renov} />

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
                                                    url={'api/archivos/legajovirtualprestamos/archivo/'}
                                                    urlDesc={'api/archivos/legajovirtualprestamos/descargararchivo/'}
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
