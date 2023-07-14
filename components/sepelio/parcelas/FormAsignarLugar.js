import React from "react";
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
} from "@material-tailwind/react";
import { TrashIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const FormAsignarLugar = ({
  parcela,
  socio,
  traerDifunto,
  alertas,
  errores,
  dniRef,
  asigLugar,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Asignar Lugar</Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Datos de la parcela
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Cementerio"
                type="text"
                defaultValue={parcela.cementerio}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Parcela"
                type="text"
                defaultValue={parcela.parcela}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Manzana"
                type="number"
                defaultValue={parcela.mza}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Lote"
                type="text"
                defaultValue={parcela.lote}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Lugares"
                type="text"
                defaultValue={parcela.lugares}
              />
            </div>
          </div>
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Buscar Socio Fallecido
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="DNI Fallecido"
                type="number"
                inputRef={dniRef}
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Button onClick={traerDifunto}>Buscar</Button>
            </div>
          </div>

          {errores ? (
            <Alert
              className="mt-5 mb-5"
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          {alertas ? (
            <Alert
              className="mt-5 mb-5"
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {alertas}
            </Alert>
          ) : null}

          <hr className="border-2 mt-5 mb-5" />

          {socio ? (
            <>
              <div className="grid md:grid-cols-3 md:gap-6 mt-6 ">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Empresa"
                    type="text"
                    defaultValue={socio.EMPRESA}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="N° Socio"
                    type="number"
                    defaultValue={socio.CONTRATO}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="number"
                    defaultValue={socio.NRO_DOC}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Obra Social"
                    type="text"
                    defaultValue={socio.OBRA_SOC}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Apellido"
                    type="text"
                    defaultValue={socio.APELLIDOS}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Nombre"
                    type="text"
                    defaultValue={socio.NOMBRES}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Edad"
                    type="number"
                    defaultValue={socio.EDAD}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button onClick={asigLugar}>Asignar Parcela</Button>

                <Button
                  className="ml-1"
                  color="red"
                  onClick={() => {
                    Router.push("/sepelio/parcelas/listadoparcela");
                  }}
                >
                  Canelar
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
};

export default FormAsignarLugar;
