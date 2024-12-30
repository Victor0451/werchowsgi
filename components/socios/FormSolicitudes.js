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
import moment from "moment";
import ListadoAdherentesPrint from "./ListadoAdherentesPrint";
import ListadoPagosPrint from "./ListadoPagosPrint";
import Router from "next/router";
import ReactToPrint from "react-to-print";
import FormCondiBaja from "./FormCondiBaja";

const FormSolicitudes = ({
  dniRef,
  contratoRef,
  traerSocio,
  tarerSocioContrato,
  errores,
  alertas,
  show,
  ficha,
  adhs,
  grupo,
  allPagos,
  fichaRef,
  pagosRef,
  list,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Solicitud Baja de Afiliacion</Typography>

        {show === false ? (
          <>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative w-full mb-6 group">
                <div className="p-4 border-2 rounded-lg mt-6 ">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Ingrese el N° de Socio.
                  </Typography>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="N° Socio"
                        type="number"
                        inputRef={contratoRef}
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Button onClick={tarerSocioContrato}>Buscar</Button>
                    </div>
                  </div>

                  {errores ? (
                    <Alert
                      color="red"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {errores}
                    </Alert>
                  ) : null}

                  {alertas ? (
                    <Alert
                      color="blue"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {alertas}
                    </Alert>
                  ) : null}
                </div>
              </div>
              <div className="relative w-full mb-6 group">
                <div className="p-4 border-2 rounded-lg mt-6 ">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Ingrese el DNI del Titular.
                  </Typography>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="DNI"
                        type="number"
                        inputRef={dniRef}
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Button onClick={traerSocio}>Buscar</Button>
                    </div>
                  </div>

                  {errores ? (
                    <Alert
                      color="red"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {errores}
                    </Alert>
                  ) : null}

                  {alertas ? (
                    <Alert
                      color="blue"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {alertas}
                    </Alert>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="relative w-full mb-6 group mt-10">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Puedes consultar el legajo virtual de todos los socios, tanto de
                Werchow como de Mutual
              </Alert>
            </div>
          </>
        ) : show === true ? (
          <>
            <div className="flex justify-end mt-6">
              <ReactToPrint
                trigger={() => <Button>Imprimir Solicitud</Button>}
                content={() => fichaRef}
              />

              <ReactToPrint
                trigger={() => (
                  <Button className="ml-1">Imprimir Condiciones</Button>
                )}
                content={() => pagosRef}
              />

              <Button
                className="ml-1"
                color="red"
                onClick={() => {
                  Router.reload();
                }}
              >
                Cerrar
              </Button>
            </div>

            <div className="p-4">
              {(ficha && ficha.GRUPO === 666) ||
              (ficha && ficha.GRUPO === 1001) ||
              (ficha && ficha.GRUPO === 1005) ||
              (ficha && ficha.GRUPO === 1006) ||
              (ficha && ficha.GRUPO === 3444) ||
              (ficha && ficha.GRUPO === 3666) ||
              (ficha && ficha.GRUPO === 3777) ||
              (ficha && ficha.GRUPO === 3888) ||
              (ficha && ficha.GRUPO === 3999) ||
              (ficha && ficha.GRUPO === 4004) ||
              (ficha && ficha.GRUPO === 7777) ||
              (ficha && ficha.GRUPO === 8500) ? (
                <div className="p-4 border-2 rounded-lg mt-6">
                  <Alert
                    color="red"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                    className="mt-5 mb-5"
                  >
                    <strong>
                      Ficha en estado moroso. Verifique su situacion
                    </strong>
                  </Alert>
                </div>
              ) : null}

              <div className="p-4 border-2 rounded-lg mt-6">
                {adhs.length === 0 ? (
                  <Alert
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    Este socio no posee adherentes registrados.
                  </Alert>
                ) : (
                  <div className="p-4" ref={(el) => (fichaRef = el)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/3 px-3  md:mb-0">
                        <Typography variant="h6" color="blue-gray" className="">
                          <u>Afiliado N°: {ficha.CONTRATO} </u>
                        </Typography>
                      </div>

                      <div className="w-full md:w-1/3 px-3  md:mb-0">
                        <Typography variant="h5" color="blue-gray" className="">
                          Solicitud Baja de Afiliacion
                        </Typography>
                      </div>
                      <div className="w-full md:w-1/3 px-3 md:mb-0 flex justify-end">
                        <img
                          className="h-full w-full rounded-sm werchowlogo"
                          src="/img/logo.png"
                          alt="nature image"
                        />
                      </div>
                    </div>

                    <ListadoAdherentesPrint listado={list} />

                    <hr className="border-2 mt-2 mb-2" />

                    <div className="flex flex-wrap -mx-3 mb-3">
                      <div className="w-full md:w-1/3 px-3 mt-3 mb-3 md:mb-0">
                        <Input
                          variant="standard"
                          size="md"
                          label="Domicilio"
                          type="text"
                          defaultValue={`${ficha.CALLE}, N°: ${ficha.NRO_CALLE}`}
                          readOnly
                        />
                      </div>
                      <div className="w-full md:w-1/5 px-3 mt-3 mb-3 md:mb-0">
                        <Input
                          variant="standard"
                          size="md"
                          label="Barrio"
                          type="text"
                          defaultValue={ficha.BARRIO}
                          readOnly
                        />
                      </div>

                      <div className="w-full md:w-1/5 px-3 mt-3 mb-3 md:mb-0">
                        <Input
                          variant="standard"
                          size="md"
                          label="Localidad"
                          type="text"
                          defaultValue={ficha.LOCALIDAD}
                          readOnly
                        />
                      </div>

                      <div className="w-full md:w-1/5 px-3 mt-3 mb-3 md:mb-0">
                        <Input
                          variant="standard"
                          size="md"
                          label="Plan"
                          type="text"
                          defaultValue={`${ficha.PLAN}${ficha.SUB_PLAN}`}
                          readOnly
                        />
                      </div>

                      <div className="w-full md:w-full px-3 mt-3 mb-3 md:mb-0">
                        <img
                          className="h-full w-full rounded-sm "
                          src="/img/condfront.png"
                          alt="nature image"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr className="mt-5 mb-5 border-2" />

            <div className="p-4" ref={(el) => (pagosRef = el)}>
              <FormCondiBaja />
            </div>

            <div className="flex justify-end mt-6">
              <ReactToPrint
                trigger={() => <Button>Imprimir Solicitud</Button>}
                content={() => fichaRef}
              />

              <ReactToPrint
                trigger={() => (
                  <Button className="ml-1">Imprimir Condiciones</Button>
                )}
                content={() => pagosRef}
              />

              <Button
                className="ml-1"
                color="red"
                onClick={() => {
                  Router.reload();
                }}
              >
                Cerrar
              </Button>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormSolicitudes;
