import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Button,
  Alert,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import InfoCaso from "../Layouts/InfoCaso";

const BusquedaCampana = ({
  contratoRef,
  dniRef,
  buscarCaso,
  errores,
  alertas,
  caso,
  gestion,
}) => {
  return (
    <Card className="h-full w-full">
      <CardBody floated={"false"} shadow={"false"} className="rounded-xl">
        <Typography variant="h5" color="blue-gray" className="mb-6">
          Busqueda en Campañas
        </Typography>
        <div className="p-4 border-2 rounded-lg ">
          <div className="grid md:grid-cols-4 md:gap-6 mt-6">
            <div className="relative w-full mb-6 group">
              <Input label="Contrato " inputRef={contratoRef} />
            </div>
            <div className="relative w-full mb-6 group">
              <Button className="" onClick={() => buscarCaso("HC")}>
                Buscar
              </Button>
            </div>
            <div className="relative w-full mb-6 group">
              <Input label="DNI " inputRef={dniRef} />
            </div>
            <div className="relative w-full mb-6 group">
              <Button className="" onClick={() => buscarCaso("DNI")}>
                Buscar
              </Button>
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
        </div>

        {caso.length > 0 ? (
          <div className="mt-5">
            <InfoCaso caso={caso} gestion={gestion} />
          </div>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default BusquedaCampana;
