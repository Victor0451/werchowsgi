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
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { toast } from "react-toastify";
import ListadoStock from "./ListadoStock";
const FormNuevoStock = ({
  listado,
  prodcutoRef,
  marcaRef,
  stockRef,
  ObservacionRef,
  errores,
  regStock,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Control de Stock - Premios</Typography>

        <Typography variant="h5" className="mt-5">
          Registro Nuevo Stock
        </Typography>

        <div className="border-2 rounded-xl p-4 mt-5">
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-3/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Producto"
                type="text"
                inputRef={prodcutoRef}
              />
            </div>
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Marca"
                type="text"
                defaultValue={"-"}
                inputRef={marcaRef}
              />
            </div>

            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Stock"
                type="number"
                inputRef={stockRef}
              />
            </div>

            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Observacion"
                type="text"
                inputRef={ObservacionRef}
              />
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

          <div className="flex justify-end mt-6">
            <Button className="" color="blue" onClick={regStock}>
              Registrar
            </Button>
          </div>
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <Typography variant="h5">Listado Premios Cargados</Typography>

        <div className="p-4 border-2 rounded-xl mt-5">
          <ListadoStock listado={listado} />
        </div>
      </CardBody>
    </Card>
  );
};

export default FormNuevoStock;
