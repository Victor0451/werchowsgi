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
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoDetalleOrden from "./ListadoDetalleOrden";
import Router from "next/router";

const FormImprimirOrden = ({ orden, detOrden, calcTotal, componentRef }) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none p-4">
        <div
          className="border-2 rounded-xl p-4"
          ref={(el) => (componentRef = el)}
        >
          <div className="mt-10 grid md:grid-cols-2 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Typography variant="h5" color="blue-gray" className="mt-5">
                <u>Orden N°</u>: {orden.norden}
              </Typography>
            </div>

            {orden.autorizado === false && orden.estado === true ? (
              <div className="relative w-full mb-6 group">
                <Alert
                  className=" text-sm"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  ORDEN PENDIENTE DE AUTORIZACION, SIN VALIDEZ PARA REALIZAR EL
                  PAGO.
                </Alert>
              </div>
            ) : orden.autorizado === false && orden.estado === false ? (
              <div className="relative w-full mb-6 group">
                <Alert
                  className=" text-sm"
                  color="red"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  ORDEN ANULADA, SIN VALIDEZ.
                </Alert>
              </div>
            ) : null}
          </div>

          <div className="mt-10 grid md:grid-cols-3 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Fecha"
                type="text"
                value={moment(orden.fecha).format("DD/MM/YYYY")}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Orden Tipo"
                type="text"
                value={orden.tipo_orden}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Proveedor"
                type="text"
                value={orden.nombre}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="CUIT/CUIL"
                type="text"
                value={orden.cuit_cuil}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Factura Tipo"
                type="text"
                value={orden.tipo_factura}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="N° Factura"
                type="text"
                value={orden.nfactura}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Importe"
                type="text"
                value={`$${orden.total}`}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Fecha de Pago"
                type="text"
                value={moment(orden.fecha_pago).format("DD/MM/YYYY")}
                readOnly
              />
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Generada Por"
                type="text"
                value={orden.operador_carga}
                readOnly
              />
            </div>
          </div>
          <Textarea rows={5} label="Obvservacion" value={orden.observacion} />

          {detOrden.length > 0 ? (
            <>
              <hr className="border-2 mt-5 mb-5" />
              <div className="mt-5">
                <Typography variant="h5" color="blue-gray" className="mt-5">
                  <u>Detalle de Consultas/Practicas Adjuntadas</u>
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Total N°</u>: {detOrden.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Total $</u>: {calcTotal(detOrden)}
                </Typography>
                <div className="mt-5">
                  <ListadoDetalleOrden listado={detOrden} />
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="flex justify-end mt-6">
          <ReactToPrint
            trigger={() => <Button>Imprimir Orden</Button>}
            content={() => componentRef}
          />

          <Button
            className="ml-1"
            color="red"
            onClick={() => {
              Router.push("/ordenpago/listadoorden");
            }}
          >
            Canelar
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormImprimirOrden;
