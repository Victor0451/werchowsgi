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
import { IconSolid } from "../../libs/funciones";
import ListadoOrdenes from "./ListadoOrdenes";

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
  nuImpor,
  updateImporte,
  alertas,
  errores,
  exito,
  tipOrd,
  detMed,
  fTot,
  sucusmed,
  traerMed,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Ordenes de Pago</Typography>

        <Alert className="mt-6" variant="gradient" icon={<IconSolid />}>
          <Typography variant="h6">Generacion de Ordenes de Pago:</Typography>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>
              <u>Contables</u>: Para cargar facturas, pagas de personal de
              sepelio, etc
            </li>
            <li>
              <u>Ordenes Medicas</u>: Para cargar{" "}
              <strong>solamente Ordenes Medicas</strong>. Valido para
              prestadores de Casa Central, Sucursales y Clinica Otero
            </li>
            <li>
              <u>Practicas Medicas</u>: Para cargar{" "}
              <strong>solamente Practicas Medicas</strong>. Valido para
              prestadores de Casa Central, Sucursales y Clinica Otero
            </li>
            <li>
              <u>EMPRESAS</u>: El sistema maneja las ordenes de contulta y
              practicas de todas las empresas. Los prestadores de las mismas se
              buscan por su sucursal de antención, trayendo asi todas sus
              ordenes, las cuales estan discriminadas por la columna empresa en
              el listado.
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
            norden={norden}
            medicos={medicos}
            cuitRef={cuitRef}
            fechaPagRef={fechaPagRef}
            buscarOrdenes={buscarOrdenes}
            handleChange={handleChange}
            sucusmed={sucusmed}
            traerMed={traerMed}
          />
        ) : practicas === true ? (
          <FormPracticas
            norden={norden}
            medicos={medicos}
            buscarOrdenes={buscarOrdenes}
            handleChange={handleChange}
            cuitPracRef={cuitPracRef}
            fechaPagPracRef={fechaPagPracRef}
            sucusmed={sucusmed}
            traerMed={traerMed}
          />
        ) : null}

        {listado.length > 0 ? (
          <Card className="h-full w-full p-4 mt-5 border-2 ">
            <CardBody className="rounded-none">
              <div className="border-2 rounded-xl p-4">
                <Typography variant="h5" color="blue-gray">
                  Ordenes Sin Liquidar
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Ordenes</u>: {listado.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Importe</u>: ${totales(listado, detMed.LIQUIDACION)}
                </Typography>
                <ListadoOrdenes
                  listado={listado}
                  f={"List"}
                  checkOrden={checkOrden}
                  nuImpor={nuImpor}
                  updateImporte={updateImporte}
                  alertas={alertas}
                  errores={errores}
                  exito={exito}
                  detMed={detMed}
                  fTot={fTot}
                />
              </div>

              <hr className="border-2 mt-5 mb-5" />

              <div className="border-2 rounded-xl p-4">
                <Typography variant="h5" color="blue-gray">
                  Ordenes Seleccionadas
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Ordenes</u>: {listadoCheck.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Importe</u>: ${totales(listadoCheck, detMed.LIQUIDACION)}
                </Typography>
                <ListadoOrdenes
                  listado={listadoCheck}
                  f={"Check"}
                  deleteCheckOrden={deleteCheckOrden}
                  detMed={detMed}
                  fTot={fTot}
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button onClick={() => generacionOrden(tipOrd)}>
                  Generar Orden
                </Button>

                <Button
                  className="ml-1"
                  color="red"
                  onClick={() => {
                    Router.reload();
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </CardBody>
          </Card>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormOrdenPago;
