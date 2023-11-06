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
import ListadoHistorial from "./ListadoHistorial";
import ExportarPadron from "./ExportarPadron";

const PanelHistorial = ({
  operadores,
  handleChange,
  traerHistorial,
  historial,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          <u>Historial de Movimientos</u>
        </Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Opciones
          </Typography>

          <div className="grid md:grid-cols-4 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Button color="gray" onClick={traerHistorial}>
                Historial Completo
              </Button>
            </div>
            <div className="relative w-full mb-6 group">
              <Select
                label="Elige un operador"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("operador", value);
                }}
              >
                {operadores.map((i, index) => (
                  <Option key={index} value={i.usuario}>
                    {i.usuario}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="relative w-full mb-6 group">
              <Button color="blue" onClick={traerHistorial}>
                Buscar
              </Button>
            </div>
            <div className="relative w-full mb-6 group">
              <ExportarPadron listado={historial} />
            </div>
          </div>
        </div>
        <div className="p-4 border-2 rounded-lg mt-6 ">
          <ListadoHistorial listado={historial} />
        </div>
      </CardBody>
    </Card>
  );
};

export default PanelHistorial;
