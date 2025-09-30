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
  List,
  ListItem,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { toast } from "react-toastify";

const FormParticipante = ({ dniRef, buscarParticipante, errores, alertas }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Club Werchow - Sorteos de Premios</Typography>

        <div className="mt-5 p-4 border-2 rounded-xl ">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Ingresa tu DNI
              </Typography>

              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative w-full mb-6 group">
                    <Input
                      size="md"
                      label="DNI"
                      type="number"
                      inputRef={dniRef}
                    />
                  </div>
                  <div className="relative w-full mb-6 group">
                    <Button onClick={buscarParticipante}>Buscar</Button>
                  </div>
                </div>
              </div>
              {errores ? (
                <Alert
                  color="red"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  {errores}
                </Alert>
              ) : null}

              {alertas ? (
                <Alert
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  {alertas}
                </Alert>
              ) : null}
            </div>
            <div className="relative w-full mb-6 group">
              {" "}
              <Alert
                className="mt-5 mb-5"
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Ingresa tu numero de documento y participa por numerosos
                premios.
              </Alert>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormParticipante;
