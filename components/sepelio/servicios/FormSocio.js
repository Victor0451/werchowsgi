import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,
    Textarea,
    Checkbox,


} from "@material-tailwind/react";
import moment from 'moment';


export const FormSocio = ({
    ficha
}) => {
    return (
        <>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Fecha Recepcion" type="text" value={moment().format('DD/MM/YYYY')} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Empresa" type="text" defaultValue={ficha[0].EMPRESA} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="N° Socio" type="number" defaultValue={ficha[0].CONTRATO} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="DNI" type="number" defaultValue={ficha[0].NRO_DOC} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Obra Social" type="text" defaultValue={ficha[0].OBRA_SOC} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Apellido" type="text" defaultValue={ficha[0].APELLIDOS} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Nombre" type="text" defaultValue={ficha[0].NOMBRES} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Edad" type="number" defaultValue={ficha[0].EDAD} />
            </div>

        </>
    )
}
