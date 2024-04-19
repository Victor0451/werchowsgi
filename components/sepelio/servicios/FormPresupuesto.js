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
import moment, { months } from "moment";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const FormPresupuesto = () => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">
          <u>Presupuesto para Servicio de Sepelio</u>
        </Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Alert
            className="mt-5 mb-5"
            color="blue"
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            LOS VALORES DE ESTE PRESUPUESTO TIENEN UNA VALIDEZ DE 48HS.
          </Alert>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha"
                type="text"
                value={moment().format("DD/MM/YYYY")}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Apellido y Nombre" type="text" />
            </div>
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Domicilio" type="text" />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Telefono" type="text" />
            </div>
          </div>

          <hr className="borde-2 mt-5 mb-5" />

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Textarea rows={10} size="md" label="Descripcion del Servicio" />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Total" type="number" />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Anticipo" type="number" />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Saldo" type="number" />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select label="Plan de Cuotas">
                <Option value="1,2244">2</Option>
                <Option value="1,3123">3</Option>
                <Option value="1,4059">4</Option>
                <Option value="1,5055">5</Option>
                <Option value="1,6114">6</Option>
              </Select>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormPresupuesto;
