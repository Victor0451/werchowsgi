import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Drawer,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Router from "next/router";

const FormContable = ({
  generacionOrden,
  norden,
  tipoFac,
  handleChange,
  cuitContRef,
  provContRef,
  nfacturaContRef,
  totalContRef,
  fechaPagoContRef,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h5" color="blue-gray">
          <u>Contables</u>
        </Typography>

        <div className="mt-10 grid md:grid-cols-4 md:gap-6">
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="N° Orden"
              type="text"
              defaultValue={norden}
              readOnly
            />
          </div>

          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="Fecha"
              type="text"
              defaultValue={moment().format("DD/MM/YYYY")}
              readOnly
            />
          </div>
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="Proveedor"
              type="text"
              inputRef={provContRef}
            />
          </div>
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="CUIT/CUIL"
              type="text"
              inputRef={cuitContRef}
            />
          </div>
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="N° Factura"
              type="text"
              inputRef={nfacturaContRef}
            />
          </div>
          <div className="relative w-full mb-6 group">
            <Select
              label="Factura Tipo"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              onChange={(value) => {
                handleChange("tipo fac", value);
              }}
            >
              {tipoFac.map((i, index) => (
                <Option key={index} value={i.tipo_factura}>
                  {i.tipo_factura}
                </Option>
              ))}
            </Select>
          </div>
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="Importe"
              type="number"
              inputRef={totalContRef}
            />
          </div>
          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="Fecha a Pagar"
              type="date"
              inputRef={fechaPagoContRef}
            />
          </div>
        </div>

        <div>
          <Textarea
            rows={10}
            label="Observacion"
            onChange={(value) => {
              handleChange("observ cont", value);
            }}
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => generacionOrden("C")}>Generar Orden</Button>

          <Button
            className="ml-1"
            color="red"
            onClick={() => {
              Router.reload();
            }}
          >
            Cancelar
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormContable;
