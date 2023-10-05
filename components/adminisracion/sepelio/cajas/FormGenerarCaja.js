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
import Ingresos from "./Ingresos";
import Egresos from "./Egresos";
import ExportarPadron from "./ExportarPadron";

const FormGenerarCaja = ({
  ingresos,
  egresos,
  traerMovim,
  errores,
  alertas,
  desdeRef,
  hastaRef,
  calcTotales,
  generarCaja,
  show,
  reporteCaja,
  reporte,
  desde,
  hasta,
  emp,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Generacion de Cajas</Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Selecciona la fecha de los movimientos
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6 mt-6">
            <div className="relative w-full mb-6 group">
              <Input type="date" label="Desde" inputRef={desdeRef} />
            </div>

            <div className="relative w-full mb-6 group">
              <Input type="date" label="Hasta" inputRef={hastaRef} />
            </div>
            <div className="relative w-full mb-6 group">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Esta consulta genera los moviemientos de las cajas de sepelio
                con el formato de contabilidad.
              </Alert>
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

          <div className="flex justify-end mt-5">
            <Button
              onClick={() => {
                traerMovim("sa");
              }}
            >
              Werchow S.A.
            </Button>

            <Button
              className="ml-1"
              onClick={() => {
                traerMovim("srl");
              }}
            >
              Werchow S.R.L.
            </Button>
          </div>
        </div>

        {show === true ? (
          <>
            <hr className="border-2 mt-5 mb-5" />
            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Opciones
              </Typography>
              <div className="grid md:grid-cols-3 md:gap-6 mt-10">
                <div>
                  <Button onClick={generarCaja}>Generar Caja</Button>
                </div>
                <div>
                  <ExportarPadron
                    reporteCaja={reporteCaja}
                    listado={reporte}
                    desde={desde}
                    hasta={hasta}
                    emp={emp}
                  />
                </div>
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Movimientos
              </Typography>
              <div className="grid md:grid-cols-1 md:gap-6 mt-10">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className=""
                  >
                    <u>Ingresos</u>: {ingresos.length}
                  </Typography>
                  <Ingresos listado={ingresos} />
                </div>

                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className=""
                  >
                    <u>Egresos</u>: {egresos.length}
                  </Typography>
                  <Egresos listado={egresos} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mt-10">
                <div>
                  <Alert
                    color="blue"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    <u> Total Ingresos</u>: ${calcTotales(ingresos)}
                  </Alert>
                </div>
                <div>
                  <Alert
                    color="blue"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    <u>Total Egresos</u>: ${calcTotales(egresos)}
                  </Alert>
                </div>
              </div>
              <div className="mt-5">
                <Alert
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <u>Valores a Depositar</u>: $
                  {calcTotales(ingresos) - calcTotales(egresos)}
                </Alert>
              </div>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormGenerarCaja;
