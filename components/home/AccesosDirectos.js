import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const AccesosDirectos = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Sistema de Servicios Médicos
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Sistema para generar órdenes de consultas y prácticas médicas.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="http://190.231.67.172:3002/" target="__blank">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Acceder
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Certificado Para Policías
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Acceso rápido para generar certificados a los policías.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="/socios/solicitudes/certificadopoli">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Generar
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Reintegros ISJ
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Registro de reintegros de órdenes y prácticas ISJ.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="/socios/solicitudes/reintegros">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Acceder
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Legajo Virtual
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Acceso rápido al legajo virtual del socio con información personal, adherentes y pagos.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="/socios/legajo">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Buscar Ficha
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Prints de Pago y Ficha
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Acceso rápido para generar prints de la ficha del socio.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="/socios/prints">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Buscar Ficha
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="card-simple hover:shadow-xl transition-all duration-300 h-full">
          <CardBody className="p-6">
            <ArrowRightCircleIcon className="text-[var(--bright-teal-blue)] w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              Solicitud Baja de Afiliación
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Acceso rápido para generar la solicitud de baja de afiliación por sistema.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href="/socios/solicitudes/baja">
              <Button
                size="sm"
                className="btn-primary w-full"
              >
                Generar
              </Button>
            </Link>
          </CardFooter>
        </Card>
    </div>
  );
};
