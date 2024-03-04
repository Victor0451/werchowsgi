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
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Zona
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Detalle
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Fichas
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Emitido
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Fichas Cob.
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Cobrado
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Adelantado
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        %
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cCob.map((c, index) => (
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className=" font-thin"
                        >
                          {c.zona}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" color="blue-gray">
                          {c.descr}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.fichas}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.total}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.fichascob}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.cobrado}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.adelantado}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {c.cobrado / c.total} %
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormEfectividad;
