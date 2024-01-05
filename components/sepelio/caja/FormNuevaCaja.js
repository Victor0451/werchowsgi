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

export const FormNuevaCaja = ({
  montoRef,
  ptoVentaRef,
  nfacturaRef,
  facturas,
  conceptos,
  handleChange,
  errores,
  nuevaCaja,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Habilitacion de Cajas de Sepelio</Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Habilitar Caja
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Select
                label="Elige la Empresa"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("empresa", value);
                }}
              >
                <Option value={"WERCHOW S.A."}>WERCHOW S.A.</Option>
                <Option value={"WERCHOW S.R.L."}>WERCHOW S.R.L.</Option>
              </Select>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Monto"
                type="number"
                inputRef={montoRef}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Concepto"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("concepto", value);
                }}
              >
                {conceptos.map((f, index) => (
                  <Option key={index} value={f.concepto}>
                    {f.concepto}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Tipo Factura"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("tipofactura", value);
                }}
              >
                {facturas.map((f, index) => (
                  <Option key={index} value={f.tipo_factura}>
                    {f.tipo_factura}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="N° Factura"
                type="text"
                inputRef={nfacturaRef}
                defaultValue={0}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Pto. Venta"
                type="number"
                inputRef={ptoVentaRef}
                defaultValue={0}
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <Textarea
              rows={5}
              label="Detalle"
              onChange={(value) => {
                handleChange("detalle", value);
              }}
            />
          </div>

          {errores ? (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <Button onClick={nuevaCaja}>Habilitar Caja</Button>

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
