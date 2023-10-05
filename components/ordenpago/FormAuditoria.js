import React from "react";
import ReactToPrint from "react-to-print";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
  Drawer,
  IconButton,
  Textarea,
  ButtonGroup,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoDetalleOrden from "./ListadoDetalleOrden";
import Router from "next/router";
import ListadoOrdenesSinPuntear from "./ListadoOrdenesSinPuntear";
import ListadoOrdenesAuditoria from "./ListadoOrdenesAuditoria";

const FormAuditoria = ({
  actImpLiq,
  lisOtero,
  lisFabian,
  repunteoDeUsos,
  ordenFaRef,
  ordenOtRef,
  traerOrden,
  orden,
  desbloquearUso,
  levantarAnulado,
  eliminarDuplicado,
  impLiqRef,
  modificarImpLiq,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Auditoria - Ordenes de Pago</Typography>

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h5">Actualizar Campo IMP_LOQ</Typography>
          <ButtonGroup fullWidth className="mt-5">
            <Button onClick={() => actImpLiq("O")}>Ordenes</Button>
            <Button onClick={() => actImpLiq("P")}>Practicas</Button>
            <Button onClick={() => actImpLiq("SV")}>Sin Valor</Button>
          </ButtonGroup>
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <div className="border-2 rounded-xl p-4 mt-5">
          <div className=" grid md:grid-cols-2 md:gap-6">
            <Typography variant="h5">Usos liquidados sin puntear</Typography>
            <div className=" flex justify-end">
              <Button
                size="sm"
                className="mt-5 bg-gray-900"
                onClick={repunteoDeUsos}
              >
                Repuntear Usos
              </Button>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-2 md:gap-6">
            <div className="border-2 p-2 rounded-xl ">
              <Typography variant="h6" className="mb-5">
                Usos Otero: {lisOtero.length}
              </Typography>

              <ListadoOrdenesSinPuntear listado={lisOtero} />
            </div>

            <div className="border-2 p-2 rounded-xl">
              <Typography variant="h6" className="mb-5">
                Usos Fabian: {lisFabian.length}
              </Typography>

              <ListadoOrdenesSinPuntear listado={lisFabian} />
            </div>
          </div>
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h5">Correcion de Usos</Typography>

          <div className="mt-10 grid md:grid-cols-2 md:gap-6">
            <div className="border-2 p-2 rounded-xl ">
              <Typography variant="h6" className="mb-5">
                Ingresar N° Orden (Otero).
              </Typography>
              <Input label="Ej: O-1540" inputRef={ordenOtRef} />
              <Button
                size="sm"
                className="mt-5 bg-gray-900 "
                onClick={() => traerOrden("O")}
              >
                Buscar
              </Button>
            </div>
            <div className="border-2 p-2 rounded-xl ">
              <Typography variant="h6" className="mb-5">
                Ingresar N° Orden (Fabian).
              </Typography>
              <Input label="Ej: 000000222465" inputRef={ordenFaRef} />
              <Button
                size="sm"
                className="mt-5 bg-gray-900 "
                onClick={() => traerOrden("F")}
              >
                Buscar
              </Button>
            </div>
          </div>

          <div className="mt-5">
            <ListadoOrdenesAuditoria
              listado={orden}
              desbloquearUso={desbloquearUso}
              levantarAnulado={levantarAnulado}
              eliminarDuplicado={eliminarDuplicado}
              impLiqRef={impLiqRef}
              modificarImpLiq={modificarImpLiq}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormAuditoria;
