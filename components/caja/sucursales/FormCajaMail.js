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
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoMovimiento from "./ListadoMovimiento";
import Link from "next/link";

const FormCajaMail = ({ ingreso, egreso, totales }) => {
    console.log(ingreso);
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          <u>Caja Adjuntada</u>:
        </Typography>

        <div className="mt-5 border-2 rounded-xl p-4">
          <Typography variant="h5">Caja</Typography>

          <div className=" flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Alert
                className="mt-5 mb-5"
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong>
                  {" "}
                  SALDO: ${totales(ingreso, "I") - totales(egreso, "E")}
                </strong>
              </Alert>
            </div>

            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Alert
                className="mt-5 mb-5"
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong>TOTAL INGRESOS: ${totales(ingreso, "I")}</strong>
              </Alert>
            </div>

            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 ">
              <Alert
                className="mt-5 mb-5"
                color="red"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong>TOTAL EGRESOS: ${totales(egreso, "E")}</strong>
              </Alert>
            </div>

            <Typography variant="h5" className="mt-5">
              Detalle Ingresos
            </Typography>

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
              <ListadoMovimiento listado={ingreso} f={"vista"} />
            </div>

            <Typography variant="h5" className="mt-5">
              Detalle Egresos
            </Typography>

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
              <ListadoMovimiento listado={egreso} f={"vista"} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormCajaMail;
