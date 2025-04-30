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

import Link from "next/link";
import ListadoGanadores from "./ListadoGanadores";

const FormGanadores = ({ ganadores, ganadoresBecas }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Listado de Ganadores</Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Ganadores de Vouchers, Cajas Navideñas y Motos 0KM
          </Typography>

          <ListadoGanadores listado={ganadores} />
        </div>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Ganadores de Becas - Estudiantes de Policias
          </Typography>

          <ListadoGanadores listado={ganadoresBecas} />
        </div>
      </CardBody>
    </Card>
  );
};

export default FormGanadores;
