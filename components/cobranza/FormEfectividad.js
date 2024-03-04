import React, { useState } from "react";
import {
  Input,
  Alert,
  Typography,
  Option,
  Textarea,
  Card,
  CardBody,
  Button,
  Collapse,
} from "@material-tailwind/react";
import moment from "moment";
import { IconSolid } from "../../libs/funciones";
import Select from "react-select";
import { meses, anos } from "../../array/array";
import TablaEfectividad from "./TablaEfectividad";

const FormEfectividad = ({
  handleChange,
  traerInfo,
  errores,
  cCob,
  cOf,
  cbanco,
  cpolicia,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">WERCHOW - Efectividad de Cobranza</Typography>

        <Alert className="mt-5 mb-5" color="blue" icon={<IconSolid />}>
          Cobranza de cuotas mensuales y emision de recibos para socios de
          WERCHOW
        </Alert>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Mes"
                options={meses.map((i) => ({
                  label: i.label,
                  value: i.value,
                }))}
                onChange={(value) => {
                  handleChange("mes", value.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Año"
                options={anos.map((i) => ({
                  label: i.label,
                  value: i.value,
                }))}
                onChange={(value) => {
                  handleChange("ano", value.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={traerInfo}>Buscar</Button>
            </div>
            {errores ? (
              <Alert color="red" icon={<IconSolid />} className="mt-5 mb-5">
                {errores}
              </Alert>
            ) : null}
          </div>
        </div>

        {cCob.length > 0 ? (
          <>
            <hr className="border-2 mt-5 mb-5" />

            <div className="p-4 border-2 rounded-lg mt-6 ">
              <TablaEfectividad arr={cCob} titulo={"Cobradores"} />
            </div>

            <hr className="border-2 mt-6" />

            <div className="p-4 border-2 rounded-lg mt-6 ">
              <TablaEfectividad arr={cOf} titulo={"Oficinas"} />
            </div>

            <hr className="border-2 mt-6" />

            <div className="p-4 border-2 rounded-lg mt-6 ">
              <TablaEfectividad arr={cbanco} titulo={"Bancos"} />
            </div>

            <hr className="border-2 mt-6" />

            <div className="p-4 border-2 rounded-lg mt-6 ">
              <TablaEfectividad arr={cpolicia} titulo={"Policia"} />
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormEfectividad;
