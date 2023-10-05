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
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Router from "next/router";
import ListadoOrdenes from "./ListadoOrdenes";
import Select from "react-select";

function FormPracticas({
  generacionOrden,
  norden,
  medicos,
  buscarOrdenes,
  handleChange,
  listado,
  listadoCheck,
  checkOrden,
  deleteCheckOrden,
  totales,
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

        {listado.length > 0 ? (
          <>
            <div className="p-4 border-2 rounded-xl  mt-10 grid md:grid-cols-1 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Typography variant="h5" color="blue-gray">
                  Ordenes Sin Liquidar
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Ordenes</u>: {listado.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Importe</u>: ${totales(listado)}
                </Typography>
                <ListadoOrdenes
                  listado={listado}
                  f={"List"}
                  checkOrden={checkOrden}
                />
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="p-4 border-2 rounded-xl  grid md:grid-cols-1 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Typography variant="h5" color="blue-gray">
                  Ordenes Seleccionadas
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Ordenes</u>: {listadoCheck.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Importe</u>: ${totales(listadoCheck)}
                </Typography>
                <ListadoOrdenes
                  listado={listadoCheck}
                  f={"Check"}
                  deleteCheckOrden={deleteCheckOrden}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button onClick={() => generacionOrden("P")}>
                Generar Orden
              </Button>

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
          </>
        ) : null}
      </CardBody>
    </Card>
  );
}

export default FormPracticas;
