import React, { useEffect, useState } from "react";
import Alertas from "./Alertas";
import { AccesosDirectos } from "./AccesosDirectos";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import BusquedaCampana from "./BusquedaCampana";

export const Home = ({
  noticia,
  contratoRef,
  dniRef,
  buscarCaso,
  errores,
  alertas,
  caso,
  gestion
}) => {
  return (
    <Card className="h-full w-full">
      <CardBody floated={"false"} shadow={"false"} className="rounded-none">
        <Alertas noticia={noticia} />
        <hr className=" border-2 mt-5 mb-5" />
        <AccesosDirectos />
        <hr className=" border-2 mt-5 mb-5" />
        <BusquedaCampana
          contratoRef={contratoRef}
          dniRef={dniRef}
          buscarCaso={buscarCaso}
          errores={errores}
          alertas={alertas}
          caso={caso}
          gestion={gestion}
        />
      </CardBody>
    </Card>
  );
};
