import React from "react";
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
import { meses, zonas, anos, estadocartera } from "../../array/array";
import Link from "next/link";

const FormReportes = ({ handleChange, genReporte, errores, alertas }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Reportes</Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Cartera Morosa
          </Typography>

          <div className="grid md:grid-cols-4 md:gap-6 mt-6">
            <div className="relative w-full mb-6 group">
              <Select
                label="Elige la zona"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("zona", value)}
              >
                {zonas.map((z, index) => (
                  <Option key={index} value={z.value}>
                    {z.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige el mes"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("mes", value)}
              >
                {meses.map((m, index) => (
                  <Option key={index} value={m.value}>
                    {m.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige el año"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("ano", value)}
              >
                {anos.map((a, index) => (
                  <Option key={index} value={a.value}>
                    {a.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Elige la cartera"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("cartera", value)}
              >
                {estadocartera.map((c, index) => (
                  <Option key={index} value={c.value}>
                    {c.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          {errores ? (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          {alertas ? (
            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {alertas}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <div className="">
              <Button
                onClick={() => {
                  genReporte("W");
                }}
              >
                Werchow
              </Button>
            </div>
            <div className="ml-1">
              <Button
                onClick={() => {
                  genReporte("M");
                }}
              >
                Mutual
              </Button>
            </div>
            <div className="ml-1">
              <Link href={"/"}>
                <Button color="red">Cancelar</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormReportes;
