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

import Opciones from "./Opciones";

const FormEfectividad = ({
  handleChange,
  traerInfo,
  errores,
  ctjt,
  cCob,
  cOf,
  cbanco,
  cbancoP,
  cpolicia,
  cprestamos,
  porcent,
  totales,
  totArr,
  actFunctions,
  creaFunctions,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">WERCHOW - Efectividad de Cobranza</Typography>

        <Alert className="mt-5 mb-5" color="blue" icon={<IconSolid />}>
          Tabla resumen de la cobranza mensual para evaluar la efectividad.
        </Alert>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
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
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
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
            <div className="w-full md:w-1/6 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={traerInfo}>Buscar</Button>
            </div>

            <div className="w-full md:w-1/6 px-3 mt-6 mb-6 md:mb-0">
              <Opciones
                actFunctions={actFunctions}
                creaFunctions={creaFunctions}
              />
            </div>

            {cCob.length > 0 ? (
              <div className="w-full md:w-1/6 px-3 mt-6 mb-6 md:mb-0">
                <Button color="green">Imprimir</Button>
              </div>
            ) : null}

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

            <div className="border-2 rounded-xl p-4">
              <Typography variant="h4" className="mb-4">
                Efectividad De Cobranza
              </Typography>

              <TablaEfectividad
                cCob={cCob}
                cOf={cOf}
                ctjt={ctjt}
                cbanco={cbanco}
                cbancoP={cbancoP}
                cpolicia={cpolicia}
                cprestamos={cprestamos}
                totArr={totArr}
                porcent={porcent}
                totales={totales}
              />
            </div>
          </>
        ) : (
          <Alert color="orange" icon={<IconSolid />} className="mt-5 mb-5">
            No hay datos registrados para el periodo seleccionado
          </Alert>
        )}
      </CardBody>
    </Card>
  );
};

export default FormEfectividad;
