import React from "react";
import {
  Card,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  CardBody,
  Textarea,
} from "@material-tailwind/react";
import Link from "next/link";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";

const FormNewEvent = ({
  cerrarEvento,
  handleChange,
  operadores,
  datosEv,
  postEvent,
  usu
}) => {
  return (
    <Card className="h-full w-full p-4  bg-blue-gray-50">
      <CardBody className="rounded-none">
        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            <u>Nueva Tarea</u>
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6 mt-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Inicio"
                type="text"
                defaultValue={moment(datosEv.start).format("DD/MM/YYYY HH:mm")}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Fin"
                type="text"
                defaultValue={moment(datosEv.end).format("DD/MM/YYYY HH:mm")}
              />
            </div>

            <div className="relative w-full mb-6 group">
            <Input
                size="md"
                label="Usuario"
                type="text"
                defaultValue={usu.usuario}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Prioridad"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("prioridad", value);
                }}
              >
                <Option value={1}>Normal</Option>
                <Option value={2}>Importante</Option>
                <Option value={3}>Urgente</Option>
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Sucursal"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("sucursal", value);
                }}
              >
                <Option value={"Casa Central"}>Casa Central</Option>
                <Option value={"Palpala"}>Palpala</Option>
                <Option value={"Perico"}>Perico</Option>
                <Option value={"El Carmen"}>El Carmen</Option>
                <Option value={"San Pedro"}>San Pedro</Option>
              </Select>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Textarea
              rows={10}
              label="Tarea"
              onChange={(value) => {
                handleChange("tarea", value);
              }}
            />
          </div>

          <div className="flex justify-end mt-5">
            <Button color="blue" className="mr-1" onClick={postEvent}>
              Registrar Tarea
            </Button>
            <Button color="red" onClick={cerrarEvento}>
              Cerrar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormNewEvent;
