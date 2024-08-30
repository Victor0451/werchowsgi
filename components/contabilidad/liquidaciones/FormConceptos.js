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

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select from "react-select";
import Link from "next/link";

const FormConceptos = () => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Conceptos</Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">Datos</Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Nro de Legajo"
                type="number"
                //inputRef={apellidoRef}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormConceptos;
