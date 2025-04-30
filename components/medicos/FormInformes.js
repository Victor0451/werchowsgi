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
} from "@material-tailwind/react";
import { IconSolid } from "../../libs/funciones";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select from "react-select";
import Link from "next/link";
import ListadoInforme from "./ListadoInforme";
import ListadoTopPracticas from "./ListadoTopPracticas";
import ReactToPrint from "react-to-print";

const FormInformes = ({
  errores,
  sucusmed,
  handleChange,
  desdeRef,
  hastaRef,
  traerInforme,
  infoEspeOr,
  infoEspePr,
  infoPresOr,
  infoPresPr,
  infoTopPr,
  calTotal,
  ordenesRef,
  topRef,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Sistema Medico - Informes</Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">
            Parametros para generar el informe
          </Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Alert className="mt-6" variant="gradient" icon={<IconSolid />}>
                <Typography variant="h6">Glosario</Typography>
                <ul className="mt-2 ml-2 list-inside list-disc">
                  <li>
                    <u>Especialidades</u>: Las especialidades estan abreviadas
                    con las primeras tres letras, por ejemplo clinica (CLI),
                    ginecologia (GIN), odontologia (ODO), etc
                  </li>
                  <li className="mt-2">
                    <u>Tipo de usos</u>: En el sistema los usos se registran en
                    dos categorias, las ordenes de consultas identificadas con
                    la abreviatura "ORDE" y las ordenes de practicas, estas se
                    identifican en su abreviatura por tener al inicio una "P"
                    que indica que es una practica, seguido de la especialidad
                    del prestado, por ejemplo "PCAR" (practica cardiologica),
                    "PCLI" (practica clinica), "PODO" (practica odontologica),
                    etc.
                  </li>
                </ul>
                <hr className="mt-5 mb-5" />
              </Alert>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Sucursales"
                options={sucusmed}
                onChange={(value) => {
                  handleChange("sucursal", value.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Desde" type="date" inputRef={desdeRef} />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Hasta" type="date" inputRef={hastaRef} />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={traerInforme}>Generar </Button>
            </div>
          </div>

          {errores ? (
            <Alert
              className="mt-5 mb-5"
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}
        </div>

        <hr className="border-2 mt-5 " />

        <div className="flex justify-end mt-6">
          <ReactToPrint
            trigger={() => <Button>Imprimir Informes</Button>}
            content={() => ordenesRef}
          />
        </div>

        <div
          className="flex flex-wrap -mx-3 mb-6"
          ref={(el) => (ordenesRef = el)}
        >
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 border-2 p-2 rounded-xl">
            <Typography variant="h5" className="mb-5">
              Ordenes de Consultas por Especialidad
            </Typography>
            <ListadoInforme listado={infoEspeOr} />

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  TOTAL:
                </Alert>
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  {calTotal(infoEspeOr, "usos")}
                </Alert>
              </div>
              <div className="w-full md:w-2/5 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  $ {calTotal(infoEspeOr, "importe")}
                </Alert>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0  border-2 p-2 rounded-xl">
            <Typography variant="h5" className="mb-5">
              Ordenes de Practicas por Especialidad
            </Typography>
            <ListadoInforme listado={infoEspePr} />

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  TOTAL:
                </Alert>
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  {calTotal(infoEspePr, "usos")}
                </Alert>
              </div>
              <div className="w-full md:w-2/5 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  $ {calTotal(infoEspePr, "importe")}
                </Alert>
              </div>
            </div>
          </div>

          <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 ">
            <hr className="border-2 mt-3 mb-3 " />
          </div>

          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 border-2 p-2 rounded-xl">
            <Typography variant="h5" className="mb-5">
              Ordenes de Consultas por Prestador
            </Typography>
            <ListadoInforme listado={infoPresOr} />

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  TOTAL:
                </Alert>
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  {calTotal(infoPresOr, "usos")}
                </Alert>
              </div>
              <div className="w-full md:w-2/5 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  $ {calTotal(infoPresOr, "importe")}
                </Alert>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0  border-2 p-2 rounded-xl">
            <Typography variant="h5" className="mb-5">
              Ordenes de Practicas por Prestador
            </Typography>
            <ListadoInforme listado={infoPresPr} />

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  TOTAL:
                </Alert>
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  {calTotal(infoPresPr, "usos")}
                </Alert>
              </div>
              <div className="w-full md:w-2/5 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  $ {calTotal(infoPresPr, "importe")}
                </Alert>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-2 mt-8 mb-3 " />

        <div className="flex justify-end mt-6">
          <ReactToPrint
            trigger={() => <Button>Imprimir Top</Button>}
            content={() => topRef}
          />
        </div>

        <div className="flex flex-wrap -mx-3 mb-6" ref={(el) => (topRef = el)}>
          <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 p-2 rounded-xl">
            <Typography variant="h5" className="mb-5">
              Top practicas realizadas en la sucursal seleccionada
            </Typography>
            <ListadoTopPracticas listado={infoTopPr} />

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  TOTAL:
                </Alert>
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  {calTotal(infoTopPr, "usos")}
                </Alert>
              </div>
              <div className="w-full md:w-2/5 px-3 mt-6 mb-6 md:mb-0  ">
                <Alert className="mt-5 mb-5" color="blue">
                  $ {calTotal(infoTopPr, "importe")}
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormInformes;
