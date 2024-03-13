import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
  Textarea,
  Checkbox,
  ButtonGroup,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select from "react-select";
import Link from "next/link";

const FormReintegros = ({
  dniRef,
  traerSocio,
  traerSocioMutual,
  show,
  baja,
  ficha,
  grupo,
  errores,
  alertas,
  nOrdenRef,
  importeRef,
  handleChange,
  regReintegro,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Solicitud de Reintegro </Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">
            Ingresa el DNI para buscar al socio
          </Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="DNI" type="number" inputRef={dniRef} />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <ButtonGroup>
                <Button onClick={traerSocio}>Werchow</Button>
                <Button onClick={traerSocioMutual}>Mutual</Button>
              </ButtonGroup>
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong>
                  Registro de reintegros ISJ para ordenes (tope de $1000) y
                  practicas (tope de $1500)
                </strong>
              </Alert>
            </div>
            {errores ? (
              <Alert
                color="red"
                className="mt-4"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {errores}
              </Alert>
            ) : null}

            {alertas ? (
              <Alert
                className="mt-4"
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {alertas}
              </Alert>
            ) : null}
          </div>
        </div>

        {show === true ? (
          <>
            <hr className="border-2 mt-5 mb-5" />

            <div className="w-full  p-4 border-2 rounded-xl mt-5">
              <Typography variant="h5">Datos del Solicitante</Typography>

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

              {baja === true ? (
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
                  <strong>¡CUIDADO!... Esta ficha esta dada de baja.</strong>
                </Alert>
              ) : baja === false ? (
                <Alert
                  color="green"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                  className="mt-5 mb-5"
                >
                  <strong>Esta ficha esta activa.</strong>
                </Alert>
              ) : null}

              <div className="grid md:grid-cols-4 md:gap-6 mt-8">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Ficha"
                    type="text"
                    defaultValue={ficha.CONTRATO}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Socio"
                    type="text"
                    defaultValue={`${ficha.APELLIDOS}, ${ficha.NOMBRES}`}
                    readOnly
                  />
                </div>

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

            <hr className="border-2 mt-5 mb-5" />

            <div className="w-full  p-4 border-2 rounded-xl mt-5">
              <Typography variant="h5">Datos del Reintegro</Typography>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Nro de Orden"
                    type="text"
                    inputRef={nOrdenRef}
                  />
                </div>
                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Importe"
                    type="number"
                    inputRef={importeRef}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                  <Textarea
                    rows={5}
                    label="Observacion"
                    onChange={(e) => {
                      handleChange(e.target.value, "obser");
                    }}
                  />
                </div>
              </div>
            </div>

            {errores ? (
              <Alert
                color="red"
                className="mt-4"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {errores}
              </Alert>
            ) : null}

            <div className="flex justify-end mt-6">
              <Button className="" color="blue" onClick={regReintegro}>
                Registrar
              </Button>

              <Link href={"/"}>
                <Button className="ml-1" color="red">
                  Cerrar
                </Button>
              </Link>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormReintegros;
