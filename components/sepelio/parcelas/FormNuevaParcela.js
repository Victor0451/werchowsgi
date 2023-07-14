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

const FormNuevaParcela = ({
  cementerioRef,
  parcelaRef,
  manzanaRef,
  loteRef,
  lugaresRef,
  errores,
  registrarParcela,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Parcelas</Typography>

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
                inputRef={cementerioRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Parcela"
                type="text"
                inputRef={parcelaRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Manzana"
                type="number"
                inputRef={manzanaRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input size="md" label="Lote" type="number" inputRef={loteRef} />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Lugares"
                type="number"
                defaultValue={3}
                inputRef={lugaresRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Por defecto el sistema asigna 3 lugares por parcela, verifica
                que sea correcto o modificalo.
              </Alert>
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

          <div className="flex justify-end">
            <Button onClick={registrarParcela}>Registrar</Button>

            <Link href={"/"}>
              <Button className="ml-1" color="red">
                Canelar
              </Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormNuevaParcela;
