import React, { useMemo } from "react";

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
  Spinner
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoMovimiento from "./ListadoMovimiento";
import Link from "next/link";
import ListadoCajas from "./ListadoCajas";

const FormListadoCajas = ({ cajas, noData }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          <u>Listado Cajas - Sucursales</u>:
        </Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Cajas Registradas
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {cajas.length}
          </Typography>

          <div className="mt-5 mb-5 border-2 rounded-xl p-4">
            <Typography variant="h5" color="blue-gray">
              Resumen
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5"></div>
          </div>

          {noData === true ? (
            <Alert
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              No hay cajas registradas.
            </Alert>
          ) : (
            <>
              {cajas.length === 0 ? (
                <div className="flex justify-center mt-5 mb-5 gap-8">
                  <Spinner className="h-12 w-12" />
                </div>
              ) : (
                <ListadoCajas listado={cajas} />
              )}
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default FormListadoCajas;
