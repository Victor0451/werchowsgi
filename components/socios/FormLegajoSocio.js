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
import Link from "next/link";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListdadoAdherentes from "./ListdadoAdherentes";
import { FormSubirArchivos } from "../archivos/FormSubirArchivos";
import { Archivo } from "../archivos/Archivo";
import GastoLuto from "../Layouts/GastoLuto";
import ListdadoPagos from "./ListdadoPagos";

const FormLegajoSocio = ({
  dniRef,
  errores,
  alertas,
  traerSocio,
  show,
  ficha,
  archivos,
  eliminarArchivos,
  file,
  handleUpload,
  adhs,
  grupo,
  allPagos,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        {!ficha ? (
          <Typography variant="h2">Legajo Virtual</Typography>
        ) : (
          <Typography variant="h2">
            <u>Legajo Virtual</u>: {ficha.CONTRATO} - {ficha.APELLIDOS},{" "}
            {ficha.NOMBRES}
          </Typography>
        )}

        {show === false ? (
          <div className="grid md:grid-cols-2 md:gap-6">
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
          </div>
        ) : show === true ? (
          <>
            <GastoLuto
              plan={`${ficha.PLAN}${ficha.SUB_PLAN}`}
              alta={ficha.ALTA}
              cantadh={0}
            />

            <div className="p-4 border-2 rounded-lg mt-6">
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
              ) : null}

              <Typography variant="h5" color="blue-gray" className="mb-6">
                Informacion del Socio
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-6">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Medio Pago"
                    type="text"
                    defaultValue={grupo}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="text"
                    defaultValue={ficha.NRO_DOC}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Nacimiento"
                    type="text"
                    defaultValue={moment(ficha.NACIMIENTO).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Plan"
                    type="text"
                    defaultValue={`${ficha.PLAN}${ficha.SUB_PLAN}`}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Obra Social"
                    type="text"
                    defaultValue={ficha.OBRA_SOC}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Alta"
                    type="text"
                    defaultValue={moment(ficha.ALTA).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Vigencia"
                    type="text"
                    defaultValue={moment(ficha.VIGENCIA).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <hr className="mt-5 mb-5 border-2" />

            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Adherentes
              </Typography>

              <ListdadoAdherentes listado={adhs} />
            </div>

            <hr className="mt-5 mb-5 border-2" />

            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Pagos
              </Typography>

              <ListdadoPagos listado={allPagos} />
            </div>

            <hr className="mt-5 mb-5 border-2" />

            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Subir Archivos
              </Typography>

              <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <FormSubirArchivos file={file} handleUpload={handleUpload} />
                </div>
              </div>
            </div>

            <hr className="mt-5 mb-5 border-2" />

            <div className="p-4 border-2 rounded-lg mt-6">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Archivos
              </Typography>

              <div className="grid md:grid-cols-3 md:gap-6">
                {archivos.length > 0 ? (
                  <>
                    {archivos.map((a, index) => (
                      <div
                        key={index}
                        className="relative z-0 w-full mb-6 group"
                      >
                        <Archivo
                          url={"api/archivos/legajovirtual/archivo/"}
                          urlDesc={
                            "api/archivos/legajovirtual/descargararchivo/"
                          }
                          archivo={a.archivo}
                          eliminarArchivos={eliminarArchivos}
                        />
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormLegajoSocio;
