import React from 'react'
import {
    Input,
    Alert,
    Typography,
    Select,
    Option,
    Textarea
} from "@material-tailwind/react";
import { acciones, nueavaaccion } from '../../array/array'
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import moment from 'moment';

export const FormAccionesTemp = ({
    row,
    handleChange,
    errores
}) => {

    let cuoSinBonif = row.IMPORTE * 1.10


    return (
        <>
            <div className=' grid gap-6 mb-6 md:grid-cols-3'>

                <Input size="md" label="Contrato" defaultValue={row.CONTRATO} readOnly />

                <Input size="md" label="Socio" defaultValue={`${row.APELLIDOS}, ${row.Nombres}`} readOnly />

                <Input size="md" label="Telefono" defaultValue={row.TELEFONO} readOnly />

                <Input size="md" label="Movil" defaultValue={row.MOVIL} readOnly />

                <Input size="md" label="Calle" defaultValue={row.CALLE} readOnly />

                <Input size="md" label="N°" defaultValue={row.NRO_CALLE} readOnly />

                <Input size="md" label="Barrio" defaultValue={row.BARRIO} readOnly />

                <Input size="md" label="Localidad" defaultValue={row.LOCALIDAD} readOnly />

                <Input size="md" label="Accion Registrada" defaultValue={row.accion} readOnly />

                <Input size="md" label="Fecha" defaultValue={moment(row.fecha_observacion).format('DD/MM/YYYY')} readOnly />

            </div>

            <Textarea rows={3} size="md" label="Observacion" defaultValue={row.observacion} readOnly />


            <div className='mt-2 grid gap-6 mb-6 md:grid-cols-2 '>
                <Alert className=' text-center' color="blue"><strong><u>Cuota Bonificada</u></strong>: ${row.IMPORTE}</Alert>

                <Alert className='text-center' color="blue"><strong><u>Cuota Sin Bonificar</u></strong>: ${cuoSinBonif.toFixed(2)}</Alert>
            </div>

            <hr className='mt-4 mb-4 border-2' />

            <Typography variant="h4" color="blue-gray">
                Acciones
            </Typography>

            <div className='mt-4 grid gap-6 mb-6 md:grid-cols-2'>

                <Select
                    label="Elige una accion"

                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}

                    onChange={(value) => handleChange('accion', value)}

                >
                    {
                        acciones.map((i, index) => (
                            <Option key={index} value={i.label}>{i.label}</Option>
                        ))
                    }
                </Select>

                <Input size="md" type={"date"} label="Fecha" onChange={(e) => { handleChange('fecha accion', e.target.value) }} />

            </div>

            <Textarea size="md" label='Observacion' onChange={(e) => { handleChange('observacion ac', e.target.value) }} />

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

        </>



    )
}
