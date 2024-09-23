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

const FormEvents = ({ eventos, cerrarEvento }) => {
  return (
    <Card className="h-full w-full p-4  bg-blue-gray-50">
      <CardBody className="rounded-none">
        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            <u>Tarea N°</u>: {eventos.extendedProps.idevents}
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6 mt-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Inicio"
                type="text"
                defaultValue={moment(eventos.start).format("DD/MM/YYYY HH:mm")}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Fin"
                type="text"
                defaultValue={moment(eventos.end).format("DD/MM/YYYY HH:mm")}
              />
            </div>

            <div className="relative z-0 w-full mb-6 group">
              {eventos.extendedProps.priority === 1 ? (
                <Input
                  size="md"
                  label="Prioridad"
                  type="text"
                  defaultValue={"Normal"}
                />
              ) : eventos.extendedProps.priority === 2 ? (
                <Input
                  size="md"
                  label="Prioridad"
                  type="text"
                  defaultValue={"Importante"}
                />
              ) : eventos.extendedProps.priority === 3 ? (
                <Input
                  size="md"
                  label="Prioridad"
                  type="text"
                  defaultValue={"Urgente"}
                />
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Input
                size="md"
                label="Prioridad"
                type="text"
                defaultValue={eventos.extendedProps.sucursal}
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Textarea rows={10} label="Detalle" defaultValue={eventos.title} />
          </div>

          <div className="flex justify-end mt-5">
            <Button color="red" onClick={cerrarEvento}>
              Cerrar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormEvents;
