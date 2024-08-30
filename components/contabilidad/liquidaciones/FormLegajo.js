import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select from "react-select";
import Link from "next/link";

const FormLegajo = () => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Legajo</Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">Datos del Empleado</Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Empresa"
                // options={planes.map((i) => ({
                //   label: `${i.PLAN}${i.SUB_PLAN} - ${i.DESCRIP}`,
                //   value: `${i.PLAN}${i.SUB_PLAN}`,
                // }))}
                // onChange={(value) => {
                //   handleChange("plan", value.value);
                // }}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Apellido y Nombre"
                type="text"
                //inputRef={apellidoRef}
              />
            </div>

            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="CUIL"
                type="text"
                //inputRef={apellidoRef}
              />
            </div>
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha de Ingreso"
                type="date"
                //inputRef={apellidoRef}
              />
            </div>
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Antigüedad"
                type="number"
                //inputRef={apellidoRef}
              />
            </div>
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha de Pago"
                type="date"
                //inputRef={apellidoRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Categoria"
                // options={planes.map((i) => ({
                //   label: `${i.PLAN}${i.SUB_PLAN} - ${i.DESCRIP}`,
                //   value: `${i.PLAN}${i.SUB_PLAN}`,
                // }))}
                // onChange={(value) => {
                //   handleChange("plan", value.value);
                // }}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Tiempo de Trabajo"
                // options={planes.map((i) => ({
                //   label: `${i.PLAN}${i.SUB_PLAN} - ${i.DESCRIP}`,
                //   value: `${i.PLAN}${i.SUB_PLAN}`,
                // }))}
                // onChange={(value) => {
                //   handleChange("plan", value.value);
                // }}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Contratacion"
                // options={planes.map((i) => ({
                //   label: `${i.PLAN}${i.SUB_PLAN} - ${i.DESCRIP}`,
                //   value: `${i.PLAN}${i.SUB_PLAN}`,
                // }))}
                // onChange={(value) => {
                //   handleChange("plan", value.value);
                // }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button className="" color="blue">
            Registrar
          </Button>

          <Link href={"/"}>
            <Button className="ml-1" color="red">
              Cerrar
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormLegajo;
