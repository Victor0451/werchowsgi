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

} from "@material-tailwind/react";
import Link from 'next/link';
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const FormNuevoAtaud = ({
  fabricantes,
  handleChange,
  errores,
  regAtaud,
  nombreRef,
  medidasRef,
  stockRef,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">

        <Typography variant="h2">Registro de Autos</Typography>

        <div className='p-4 border-2 rounded-lg mt-6 '>

          <Typography variant="h5" color="blue-gray" className="mb-6">
            Datos del ataud
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">

            <div className="relative z-0 w-full mb-6 group">
              <Input size="md" label="Nombre" type="text" inputRef={nombreRef} />

            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige un fabricante"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => { handleChange('fabricante', value) }}
              >
                {fabricantes.map((i, index) => (
                  <Option key={index} value={i.value}>{i.value}</Option>
                ))}

              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige el tipo de ataud"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                size="lg"
                onChange={(value) => { handleChange('tipo', value) }}
              >

                <Option value="BOVEDA">Boveda</Option>
                <Option value="BOVEDILLA">Bovedilla</Option>
                <Option value="BORLA">Borla</Option>
                <Option value="ANGELITO">Angelito</Option>
                <Option value="ARITOS">Aritos</Option>
                <Option value="SEMI">Semi</Option>
                <Option value="EXTRAORDINARIO">Extraordinario</Option>
                <Option value="EXTRAVACA">Extravaca</Option>
                <Option value="URNA">Urna</Option>
                <Option value="ECOLOGICOS">Ecologicos</Option>
                <Option value="RECUPERADOS">Recuperados</Option>

              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige el tipo de uso"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                size="lg"

                onChange={(value) => { handleChange('uso', value) }}
              >
                <Option value={"TIERRA"}>Tierra</Option>
                <Option value={"NICHO"}>Nicho</Option>

              </Select>

            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input size="md" label="Medidas" type="text" inputRef={medidasRef} />

            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input size="md" label="Stock" type="number" inputRef={stockRef} />

            </div>

          </div>


          {errores ? (

            <Alert
              className='mt-5 mb-5'
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

          <div className='flex justify-end'>
            <Button onClick={regAtaud} >
              Registrar Ataud
            </Button>

            <Link href={"/"}>
              <Button className='ml-1' color='red'>
                Canelar
              </Button>
            </Link>
          </div>

        </div>



      </CardBody>
    </Card>
  )
}
