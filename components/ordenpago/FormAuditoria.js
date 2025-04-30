import React, { useEffect } from "react";
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
  Spinner,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import ListadoDetalleOrden from "./ListadoDetalleOrden";
import ListadoOrdenesSinPuntear from "./ListadoOrdenesSinPuntear";
import ListadoOrdenesAuditoria from "./ListadoOrdenesAuditoria";
import moment from "moment";

const FormAuditoria = ({
  traerUsosSinPuntear,
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
  traerOdenPago,
  nOrdenRef,
  impOrdenPagRef,
  ordenPag,
  estF,
  estO,
  calcTotales,
  updateMontoDetalle,
  datosOrden,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Auditoria - Ordenes de Pago</Typography>

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h5">Actualizar Campo IMP_LIQ</Typography>
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
                className="mt-5 mr-1"
                onClick={traerUsosSinPuntear}
              >
                Buscar Usos
              </Button>
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
              {estO === 0 ? (
                <Typography variant="h6" className=" text-center mt-5 mb-5">
                  Usos Sist. Web: Todas las ordenes estan punteadas
                </Typography>
              ) : estO === 1 ? (
                <div className="mt-5 mb-5 flex justify-center">
                  <Spinner />
                </div>
              ) : estO === 2 ? (
                <>
                  <Typography variant="h6" className="mb-5">
                    Usos Sist. Web: {lisOtero.length}
                  </Typography>
                  <ListadoOrdenesSinPuntear listado={lisOtero} />
                </>
              ) : null}
            </div>

            <div className="border-2 p-2 rounded-xl">
              {estF === 0 ? (
                <Typography variant="h6" className=" text-center mt-5 mb-5">
                  Usos Fox: Todas las ordenes estan punteadas
                </Typography>
              ) : estF === 1 ? (
                <div className="mt-5 mb-5 flex justify-center">
                  <Spinner />
                </div>
              ) : estF === 2 ? (
                <>
                  <Typography variant="h6" className="mb-5">
                    Usos Fox: {lisFabian.length}
                  </Typography>

                  <ListadoOrdenesSinPuntear listado={lisFabian} />
                </>
              ) : null}
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
                Ingresar N° Orden (Fox).
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

          <div className="mt-5 border-2 p-2 rounded-xl">
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

        <hr className="border-2 mt-5 mb-5" />

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h5">
            Correcion Valores en Orden de Pago
          </Typography>

          <div className="mt-10 grid md:grid-cols-2 md:gap-6">
            <div className="border-2 p-2 rounded-xl ">
              <Typography variant="h6" className="mb-5">
                Ingresar N° Orden de Pago.
              </Typography>
              <Input label="Ej: 1680/2023" inputRef={nOrdenRef} />
              <Button
                size="sm"
                className="mt-5 bg-gray-900 "
                onClick={() => traerOdenPago()}
              >
                Buscar
              </Button>
            </div>
            <div className="border-2 p-2 rounded-xl ">
              <Typography variant="h6" className="mb-5">
                Ingresar el nuevo valor de las ordenes medicas.
              </Typography>
              <Input label="Importe" inputRef={impOrdenPagRef} />
              <Button
                size="sm"
                className="mt-5 bg-gray-900 "
                onClick={updateMontoDetalle}
              >
                Actualizar
              </Button>
            </div>
          </div>

          <div className="mt-5 border-2 p-2 rounded-xl">
            <div className="mt-5 mb-5">
              {datosOrden.estado === true ? (
                <Alert
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  {datosOrden.autorizado === true ? (
                    <>
                      La orden de pago esta activa y fue autorizada por{" "}
                      {datosOrden.operador_autorizacion} para que sea abonada.
                    </>
                  ) : datosOrden.autorizado === false ? (
                    <>
                      La orden de pago esta activa pero aun sin autorizacion por
                      parte de gerencia para ser abonada.
                    </>
                  ) : null}
                </Alert>
              ) : datosOrden.estado === false ? (
                <Alert
                  color="red"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  La orden de pago esta dada de baja, no tiene valor.
                </Alert>
              ) : null}
            </div>

            <Typography variant="h6" color="blue-gray" className="mt-5">
              <u>Monto Total de la Orden de Pago</u>: ${datosOrden.total}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal ">
              <u>Total de ordenes liquidadas </u>: {ordenPag.length}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal ">
              <u>Prestador </u>: {datosOrden.proveedor} - {datosOrden.nombre}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal mb-5">
              <u>Fecha </u>: {moment(datosOrden.fecha).format("DD/MM/YYYY")}
            </Typography>
            <ListadoDetalleOrden listado={ordenPag} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormAuditoria;
