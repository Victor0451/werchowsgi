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
} from "@material-tailwind/react";
import { TrashIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const FormPlanificacion = ({
  operadores,
  handleChange,
  errores,
  regPlanificacion,
  inicioRef,
  finRef,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Planificacion de Guardias</Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Planificacion
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Select
                label="Lugar"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("lugar", value);
                }}
              >
                <Option value={"cc"}>Casa Central</Option>
                <Option value={"sv"}>Sala Velatoria</Option>
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                type="datetime-local"
                label="Inicio"
                inputRef={inicioRef}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input type="datetime-local" label="Fin" inputRef={finRef} />
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Feriado"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("feriado", value);
                }}
              >
                <Option value={true}>Si</Option>
                <Option value={false}>No</Option>
              </Select>
            </div>

            <div className="relative w-full mb-6 group">
              <Select
                label="Operador"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(value) => {
                  handleChange("operador", value);
                }}
              >
                {operadores.map((f, index) => (
                  <Option key={index} value={f.operador}>
                    {f.operador}
                  </Option>
                ))}
              </Select>
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
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={regPlanificacion}>Registrar Planificacion</Button>

          <Link href={"/sepelio/guardias/calendario"}>
            <Button className="ml-1" color="red">
              Canelar
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormPlanificacion;
