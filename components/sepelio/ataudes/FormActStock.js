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
import Link from "next/link";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export const FormActStock = ({
  ataud,
  sf,
  stockFinal,
  stockIngRef,
  nRemitoRef,
  fechaRecRef,
  handleChange,
  actStockAtaud,
  errores,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Autos</Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Datos del ataud
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Nombre"
                type="text"
                defaultValue={ataud.nombre}
                readOnly
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Fabricante"
                type="text"
                defaultValue={ataud.fabricante}
                readOnly
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Tipo"
                type="text"
                defaultValue={ataud.tipo}
                readOnly
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Uso"
                type="text"
                defaultValue={ataud.uso}
                readOnly
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Medidas"
                type="text"
                defaultValue={ataud.medidas}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5 border-2" />

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Actualizacion de Stock
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Fecha de Recepcion"
                type="date"
                inputRef={fechaRecRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="N° Remito"
                type="text"
                inputRef={nRemitoRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Stock Actual"
                type="text"
                defaultValue={ataud.stock}
                readOnly
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Stock Ingresante"
                type="number"
                onChange={stockFinal}
                inputRef={stockIngRef}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Stock Final"
                type="number"
                value={sf}
                readOnly
              />
            </div>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="flex w-full flex-col gap-2">
              <Alert
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                ¡¡¡¡DIGITAR SOLO EL NUMERO DE STOCK INGRESANTE Y EL STOCK FINAL
                SE CALCULARA AUTOMATICAMENTE.!!!!
              </Alert>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group mt-4">
            <Textarea
              rows={5}
              label="Observacion"
              onChange={(value) => handleChange("obser", value)}
            />
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
            <Button onClick={actStockAtaud}>Actualizar Stock</Button>

            <Link href={"/sepelio/ataudes/listadoataudes"}>
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
