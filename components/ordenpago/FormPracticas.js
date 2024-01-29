import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  // Select,
  Option,
  Input,
  Drawer,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import moment from "moment";
import Router from "next/router";
import Select from "react-select";

function FormPracticas({
  norden,
  medicos,
  buscarOrdenes,
  handleChange,
  cuitPracRef,
  fechaPagPracRef,
}) {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h5" color="blue-gray" className="mt-5">
          <u>Practicas Medicas</u>
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
            <Select
              className=" text-sm rounded-xl"
              placeholder="Prestador"
              options={medicos.map((i) => ({
                label: i.NOMBRE,
                value: `${i.COD_PRES}-${i.NOMBRE}`,
              }))}
              onChange={(value) => {
                handleChange("prestador", value.value);
              }}
            />
          </div>

          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="CUIT/CUIL"
              type="text"
              inputRef={cuitPracRef}
            />
          </div>

          <div className="relative w-full mb-6 group">
            <Input
              size="md"
              label="Fecha a Pagar"
              type="date"
              inputRef={fechaPagPracRef}
            />
          </div>
        </div>

        <div>
          <Textarea
            rows={10}
            label="Observacion"
            onChange={(value) => {
              handleChange("observ consultas", value);
            }}
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => buscarOrdenes("P")}>Buscar Consultas</Button>

          <Button
            className="ml-1"
            color="red"
            onClick={() => {
              Router.reload();
            }}
          >
            Canelar
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default FormPracticas;
