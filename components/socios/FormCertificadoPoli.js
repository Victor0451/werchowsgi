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
import moment from "moment";

const FormCertificadoPoli = ({ alertas, errores, dniRef, traerSocio }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          <u>Certificado Para Policias</u>:
        </Typography>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative w-full mb-6 group">
            <div className="p-4 border-2 rounded-lg mt-6 ">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Ingrese el DNI.
              </Typography>

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
                  <Button onClick={traerSocio}>Buscar</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 relative w-full mb-6 group">
            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              Ingresa el numero de DNI y el sistema se encaragara de buscar al
              solicitante entre titulares y adherentes.
            </Alert>
          </div>
        </div>

        {alertas ? (
          <Alert
            color="blue"
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            {alertas}
          </Alert>
        ) : null}

        {errores ? (
          <Alert
            color="red"
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            {errores}
          </Alert>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormCertificadoPoli;
