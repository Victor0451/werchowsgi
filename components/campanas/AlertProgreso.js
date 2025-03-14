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
import { IconSolid } from "../../libs/funciones";

const AlertProgreso = ({ oper, mes, ano, asignado, trabajado, porcenTab }) => {
  return (
    <div>
      <Alert color="blue" variant="ghost" icon={<IconSolid />}>
        <Typography variant="h4" className="text-center">
          Estadistica General de Campaña.
        </Typography>
        <hr className="border-2 mt-5 mb-5" />
        <Typography variant="h6" className="mt-2">
          <u>Operador</u>: {oper}
        </Typography>
        <Typography variant="h6" className="mt-2">
          <u>Periodo</u>: {mes}/{ano}
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
          Estadistica sobre el trabajo realizado en las campañas pertenecientes
          al periodo analizado. El progreso de trabajo, cuenta para la
          liquidacion del bono.
        </Typography>
      </Alert>
    </div>
  );
};

export default AlertProgreso;
