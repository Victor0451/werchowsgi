import React from "react";
import {
  Input,
  Alert,
  Typography,
  Select,
  Option,
  Textarea,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import moment from "moment";

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const FormProgresoCampaña = ({
  meses2,
  anos,
  handleChange,
  empleados,
  porcenTab,
  traerProgreso,
  asignado,
  trabajado,
  operSel,
  mesSel,
  anoSel,
  show,
}) => {
  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Progreso de Campañas Vigentes</Typography>

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h6">
            Selecciona al operador para ver su desempeño
          </Typography>

          <div className="mt-4 grid md:grid-cols-4 md:gap-6">
            <div className="mt-4">
              <Select
                label="Elige un Operador"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("operador", value)}
              >
                {empleados.map((i, index) => (
                  <Option key={index} value={i.value}>
                    {i.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="mt-4">
              <Select
                label="Elige un Mes"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("mes", value)}
              >
                {meses2.map((i, index) => (
                  <Option key={index} value={i.value}>
                    {i.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="mt-4">
              <Select
                label="Elige un Año"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => handleChange("ano", value)}
              >
                {anos.map((i, index) => (
                  <Option key={index} value={i.label}>
                    {i.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="mt-4">
              <Button className="" onClick={traerProgreso}>
                Buscar
              </Button>
            </div>
          </div>
        </div>

        {show === false ? (
          <div className="mt-4">
            <hr className="border-2 mt-5 mb-5" />
            <Alert color="blue" icon={<IconSolid />}>
              Elige a un operador y selecciona el periodo que deseas analizar,
              de esta manera obtendras las estadisticas sobre su desempeño con
              las campañas asignadas.
            </Alert>
          </div>
        ) : (
          <div className="mt-4">
            <hr className="border-2 mt-5 mb-5" />

            <Alert color="blue" variant="ghost" icon={<IconSolid />}>
              <Typography variant="h4" className="text-center">
                Estadistica General de Campaña.
              </Typography>
              <hr className="border-2 mt-5 mb-5" />
              <Typography variant="h6" className="mt-2">
                <u>Operador</u>: {operSel}
              </Typography>
              <Typography variant="h6" className="mt-2">
                <u>Periodo</u>: {mesSel}/{anoSel}
              </Typography>
              <Typography variant="h6" className="mt-2">
                <u>Numeros de la Campaña</u>:
              </Typography>
              <ul className="mt-2 ml-2 list-inside list-disc">
                <li className="mt-1">
                  <u>Casos Asignados</u>: <strong>{asignado}</strong>
                </li>
                <li className="mt-1">
                  <u>Casos Trabajados</u>: <strong>{trabajado}</strong>
                </li>
                <li className="mt-1">
                  <u>Progreso del Trabajo</u>:{" "}
                  <strong> % {porcenTab(asignado, trabajado)}</strong>
                </li>
              </ul>

              <hr className="border-2 mt-5 mb-5" />
              <Typography variant="paragrahp">
                Estadistica sobre el trabajo realizado en las campañas
                pertenecientes al periodo analizado. El progreso de trabajo,
                cuenta para la liquidacion del bono.
              </Typography>
            </Alert>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default FormProgresoCampaña;
