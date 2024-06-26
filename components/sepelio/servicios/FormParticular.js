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


export const FormParticular = ({
    apellidoRef,
    nombreRef,
    edadRef,
    dniPartiRef,
    telefonoRef,
    movilRef,
}) => {
    return (
        <>


            <div className="relative w-full mb-6 group">
                <Input size="md" label="Fecha Recepcion" type="text" value={moment().format('DD/MM/YYYY')} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Empresa" type="text" defaultValue={"-"} readOnly />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="N° Socio" type="number" defaultValue={"0"} readOnly />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="DNI" type="number" inputRef={dniPartiRef} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Obra Social" type="text" defaultValue={"-"} readOnly />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Apellido" type="text" inputRef={apellidoRef} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Nombre" type="text" inputRef={nombreRef} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Edad" type="number" inputRef={edadRef} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Telefono" type="number" inputRef={telefonoRef} />
            </div>

            <div className="relative w-full mb-6 group">
                <Input size="md" label="Movil" type="number" inputRef={movilRef} />
            </div>

        </>
    )
}
