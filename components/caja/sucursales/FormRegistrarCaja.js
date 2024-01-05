import React, { useMemo } from "react";

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
  Checkbox,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoMovimiento from "./ListadoMovimiento";
import Link from "next/link";

const FormRegistrarCaja = ({
  usu,
  ingreso,
  egreso,
  precargaMovim,
  eliminarPrecarga,
  postCaja,
  totales,
  handleChange,
  conceptoRef,
  fechaMovRef,
  importeRef,
  errores,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          <u>Registrar Caja - Sucrsales</u>:
        </Typography>

        <div className="mt-5 border-2 rounded-xl p-4">
          <Typography variant="h5">Movimientos</Typography>
          <div className=" flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Usuario"
                type="text"
                defaultValue={usu.usuario}
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
                label="Empresa"
                onChange={(value) => {
                  handleChange("empresa", value);
                }}
              >
                <Option value="WSRL">Werchow S.R.L.</Option>
                <Option value="WSA">Werchow S.A.</Option>
                <Option value="M">Mutual San Valentin</Option>
              </Select>
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                label="Sucursal"
                onChange={(value) => {
                  handleChange("sucursal", value);
                }}
              >
                <Option value="Casa Central">Casa Central</Option>
                <Option value="Palpala">Palpala</Option>
                <Option value="Perico">Perico</Option>
                <Option value="El Carmen">El Carmen</Option>
                <Option value="San Pedro">San Pedro</Option>
              </Select>
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha Movimiento"
                type="Date"
                inputRef={fechaMovRef}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Concepto"
                type="text"
                inputRef={conceptoRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                label="Tipo Movimiento"
                onChange={(value) => {
                  handleChange("movim", value);
                }}
              >
                <Option value="I">Ingreso</Option>
                <Option value="E">Egreso</Option>
              </Select>
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Importe"
                type="number"
                inputRef={importeRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={precargaMovim}>Pre cargar</Button>
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
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <div className="mt-5 border-2 rounded-xl p-4">
          <Typography variant="h5">Caja</Typography>

          <div className=" flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Alert
                className="mt-5 mb-5"
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                SALDO: ${totales(ingreso, "I") - totales(egreso, "E")}
              </Alert>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Typography variant="h5">Ingresos</Typography>

              <Alert
                className="mt-5 mb-5"
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                TOTAL INGRESOS: ${totales(ingreso, "I")}
              </Alert>
            </div>
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
              <ListadoMovimiento
                listado={ingreso}
                eliminarPrecarga={eliminarPrecarga}
              />
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 ">
              <Typography variant="h5">Egresos</Typography>
              <Alert
                className="mt-5 mb-5"
                color="red"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                TOTAL EGRESOS: ${totales(egreso, "E")}
              </Alert>
            </div>

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
              <ListadoMovimiento
                listado={egreso}
                eliminarPrecarga={eliminarPrecarga}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button className="" color="blue" onClick={postCaja}>
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

export default FormRegistrarCaja;
