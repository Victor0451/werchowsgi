import React from "react";
import {
  Input,
  Alert,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { acciones, nueavaaccion } from "../../array/array";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export const FormAcciones = ({ row, handleChange, errores }) => {
  let cuoSinBonif = row.cuota * 1.1;

  return (
    <>
      <div className=" grid gap-6 mb-6 md:grid-cols-3">
        <Input
          size="md"
          label="Contrato"
          defaultValue={row.contrato}
          readOnly
        />

        <Input
          size="md"
          label="Socio"
          defaultValue={`${row.apellido}, ${row.nombre}`}
          readOnly
        />

        <Input
          size="md"
          label="Telefono"
          defaultValue={row.telefono}
          readOnly
        />

        <Input size="md" label="Movil" defaultValue={row.movil} readOnly />

        <Input size="md" label="Calle" defaultValue={row.calle} readOnly />

        <Input size="md" label="N°" defaultValue={row.nro_calle} readOnly />

        <Input size="md" label="Barrio" defaultValue={row.barrio} readOnly />

        <Input
          size="md"
          label="Localidad"
          defaultValue={row.localidad}
          readOnly
        />
      </div>

      <div className="mt-2 grid gap-6 mb-6 md:grid-cols-2 ">
        <Alert className=" text-center" color="blue">
          <strong>
            <u>Cuota Bonificada</u>
          </strong>
          : ${row.cuota}
        </Alert>

        <Alert className="text-center" color="blue">
          <strong>
            <u>Cuota Sin Bonificar</u>
          </strong>
          : ${cuoSinBonif.toFixed(2)}
        </Alert>
      </div>

      <hr className="mt-4 mb-4 border-2" />

      <Typography variant="h4" color="blue-gray">
        Acciones
      </Typography>

      <div className="mt-4 grid gap-6 mb-6 md:grid-cols-3">
        <Select
          label="Elige una accion"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          onChange={(value) => handleChange("accion", value)}
        >
          {acciones.map((i, index) => (
            <Option key={index} value={i.label}>
              {i.label}
            </Option>
          ))}
        </Select>

        <Input
          size="md"
          type={"text"}
          label="Fecha"
          value={moment().format("DD/MM/YYYY")}
          onChange={(e) => {
            handleChange("fecha accion", e.target.value);
          }}
        />

        <Textarea
          size="md"
          label="Observacion"
          onChange={(e) => {
            handleChange("observacion ac", e.target.value);
          }}
        />
      </div>

      <hr className="mt-4 mb-4 border-2" />

      <Typography variant="h4" color="blue-gray">
        Nueva Accion
      </Typography>

      <div className="mt-4 grid gap-6 mb-6 md:grid-cols-3">
        <Select
          label="Elige una accion"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          onChange={(value) => handleChange("nueva accion", value)}
        >
          {nueavaaccion.map((i, index) => (
            <Option key={index} value={i.label}>
              {i.label}
            </Option>
          ))}
        </Select>

        <Input
          size="md"
          type={"date"}
          label="Fecha"
          onChange={(e) => {
            handleChange("fecha naccion", e.target.value);
          }}
        />

        <Textarea
          size="md"
          rows={3}
          label="Observacion"
          onChange={(e) => {
            handleChange("observacion nuac", e.target.value);
          }}
        />
      </div>

      {errores ? (
        <Alert
          color="red"
          icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
        >
          {errores}
        </Alert>
      ) : null}
    </>
  );
};
