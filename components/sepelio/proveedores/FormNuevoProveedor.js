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

const FormNuevoProveedor = ({
  proveedorRef,
  cuitRef,
  telefonoRef,
  domicilioRef,
  errores,
  regProveedor,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Proveedores</Typography>

        <div className="relative w-full mb-6 group">
          <div className="p-4 border-2 rounded-lg mt-6 ">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Datos del proveedor
            </Typography>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Proveedor"
                  type="text"
                  inputRef={proveedorRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input size="md" label="CUIT" type="text" inputRef={cuitRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Telefono"
                  type="text"
                  inputRef={telefonoRef}
                />
              </div>
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Domicilio"
                type="text"
                inputRef={domicilioRef}
              />
            </div>
          </div>

          {errores ? (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <Button onClick={regProveedor}>Registrar Proveedor</Button>

            <Link href={"/sepelio/proveedores/listado"}>
              <Button className="ml-1" color="red">
                Canelar
              </Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormNuevoProveedor;
