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
import {
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

function FormPracticas({
  norden,
  medicos,
  buscarOrdenes,
  handleChange,
  cuitPracRef,
  fechaPagPracRef,
  sucusmed,
  traerMed,
}) {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h5" color="blue-gray" className="mt-5">
          <u>Practicas Medicas</u>
        </Typography>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
            <Input
              size="md"
              label="N° Orden"
              type="text"
              defaultValue={norden}
              readOnly
            />
          </div>

          <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
            <Input
              size="md"
              label="Fecha"
              type="text"
              defaultValue={moment().format("DD/MM/YYYY")}
              readOnly
            />
          </div>

          <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
            <Select
              className=" text-sm rounded-xl"
              placeholder="Sucursal"
              options={sucusmed}
              onChange={(value) => {
                handleChange("sucursal", value.value);
              }}
            />
          </div>

          <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
            <Button onClick={traerMed}>Buscar Prestadores</Button>
          </div>

          {medicos.length === 0 ? (
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Selecciona la sucursal para traer los prestadores
                correspondientes.
              </Alert>
            </div>
          ) : (
            <>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
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

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="CUIT/CUIL"
                  type="text"
                  inputRef={cuitPracRef}
                />
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="Fecha a Pagar"
                  type="date"
                  inputRef={fechaPagPracRef}
                />
              </div>

              <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
                <Textarea
                  rows={10}
                  label="Observacion"
                  onChange={(value) => {
                    handleChange("observ consultas", value);
                  }}
                />
              </div>
            </>
          )}
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
