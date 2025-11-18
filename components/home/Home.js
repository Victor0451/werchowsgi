import React, { useEffect, useState } from "react";
import Alertas from "./Alertas";
import { AccesosDirectos } from "./AccesosDirectos";
import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import BusquedaCampana from "./BusquedaCampana";

export const Home = ({
  noticia,
  contratoRef,
  dniRef,
  buscarCaso,
  errores,
  alertas,
  caso,
  gestion,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-cyan)] via-[var(--frosted-blue)] to-[var(--bright-teal-blue)] p-6 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="card-modern mb-8 shadow-2xl">
          <CardBody className="text-center py-12 px-8">
            <div className="flex justify-center mb-4">
              <IconButton className="bg-[var(--deep-twilight)] hover:bg-[var(--bright-teal-blue)] transition-all duration-300 shadow-lg">
                <HomeIcon className="h-8 w-8 text-white" />
              </IconButton>
            </div>
            <Typography
              variant="h1"
              className="text-[var(--deep-twilight)] font-bold mb-2"
            >
              Bienvenido a WERCHOW S.G.I
            </Typography>
            <Typography variant="lead" className="text-gray-600">
              Sistema de Gestión Integral - Tu panel de control principal
            </Typography>
          </CardBody>
        </Card>

        {/* Contenido principal en grid */}

        {/* Sección de Alertas */}
        <Card className="card-simple lg:col-span-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-8">
          <CardBody className="p-6">
            <div className="flex items-center mb-4">
              <BellIcon className="h-6 w-6 text-[var(--deep-twilight)] mr-2" />
              <Typography
                variant="h4"
                className="text-[var(--deep-twilight)] font-semibold"
              >
                Notificaciones y Alertas
              </Typography>
            </div>
            <Alertas noticia={noticia} />
          </CardBody>
        </Card>

        {/* Sección de Accesos Directos */}
        <Card className="card-simple lg:col-span-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-8">
          <CardBody className="p-6">
            <div className="flex items-center mb-4">
              <HomeIcon className="h-6 w-6 text-[var(--deep-twilight)] mr-2" />
              <Typography
                variant="h5"
                className="text-[var(--deep-twilight)] font-semibold"
              >
                Accesos Directos
              </Typography>
            </div>
            <AccesosDirectos />
          </CardBody>
        </Card>

        {/* Sección de Búsqueda de Campaña */}

        <Card className="card-simple shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-8">
          <CardBody className="p-6">
            <div className="flex items-center mb-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-[var(--deep-twilight)] mr-2" />
              <Typography
                variant="h5"
                className="text-[var(--deep-twilight)] font-semibold"
              >
                Búsqueda de Campañas
              </Typography>
            </div>
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
      </div>
    </div>
  );
};
