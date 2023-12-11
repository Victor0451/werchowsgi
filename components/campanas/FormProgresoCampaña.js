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
import moment from "moment";
import { IconSolid } from "../../libs/funciones";
import AlertProgreso from "./AlertProgreso";

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

            <AlertProgreso
              oper={operSel}
              mes={mesSel}
              ano={anoSel}
              asignado={asignado}
              trabajado={trabajado}
              porcenTab={porcenTab}
            />
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default FormProgresoCampaña;
