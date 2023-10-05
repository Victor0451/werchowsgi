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
import Menu from "./Menu";
import FormContable from "./FormContable";
import FormOrdenes from "./FormOrdenes";
import FormPracticas from "./FormPracticas";

const FormOrdenPago = ({
  vistas,
  contable,
  ordenes,
  practicas,
  generacionOrden,
  norden,
  tipoFac,
  handleChange,
  cuitContRef,
  provContRef,
  nfacturaContRef,
  totalContRef,
  fechaPagoContRef,
  medicos,
  cuitRef,
  fechaPagRef,
  buscarOrdenes,
  listado,
  listadoCheck,
  checkOrden,
  deleteCheckOrden,
  totales,
  cuitPracRef,
  fechaPagPracRef,
  guardarListado,
  guardarListadoCheck,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Ordenes de Pago</Typography>

        <Alert
          className="mt-6"
          variant="gradient"
          icon={<InformationCircleIcon />}
        >
          <Typography variant="h6">Generacion de Ordenes de Pago:</Typography>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>
              <u>Contables</u>: Para cargar facturas, pagas de personal de
              sepelio, etc
            </li>
            <li>
              <u>Ordenes Medicas</u>: Para cargar{" "}
              <strong>solamente ordenes medicas</strong>. Valido para
              prestadores de Casa Central, Sucursales y Clinica Otero
            </li>
            <li>
              <u>Practicas Medicas</u>: Para cargar{" "}
              <strong>solamente practicas medicas</strong>. Valido para
              prestadores de Casa Central, Sucursales y Clinica Otero
            </li>
          </ul>
          <hr className="mt-5 mb-5" />
          <Typography variant="h6">
            Selecciona el tipo de orden accediendo al{" "}
            <Menu
              vistas={vistas}
              listadoCheck={listadoCheck}
              guardarListado={guardarListado}
              guardarListadoCheck={guardarListadoCheck}
            />
          </Typography>
        </Alert>

        {contable === true ? (
          <FormContable
            generacionOrden={generacionOrden}
            norden={norden}
            tipoFac={tipoFac}
            handleChange={handleChange}
            cuitContRef={cuitContRef}
            provContRef={provContRef}
            nfacturaContRef={nfacturaContRef}
            totalContRef={totalContRef}
            fechaPagoContRef={fechaPagoContRef}
          />
        ) : ordenes === true ? (
          <FormOrdenes
            generacionOrden={generacionOrden}
            norden={norden}
            medicos={medicos}
            cuitRef={cuitRef}
            fechaPagRef={fechaPagRef}
            buscarOrdenes={buscarOrdenes}
            handleChange={handleChange}
            listado={listado}
            listadoCheck={listadoCheck}
            checkOrden={checkOrden}
            deleteCheckOrden={deleteCheckOrden}
            totales={totales}
          />
        ) : practicas === true ? (
          <FormPracticas
            generacionOrden={generacionOrden}
            norden={norden}
            medicos={medicos}
            buscarOrdenes={buscarOrdenes}
            handleChange={handleChange}
            listado={listado}
            listadoCheck={listadoCheck}
            checkOrden={checkOrden}
            deleteCheckOrden={deleteCheckOrden}
            totales={totales}
            cuitPracRef={cuitPracRef}
            fechaPagPracRef={fechaPagPracRef}
          />
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormOrdenPago;
