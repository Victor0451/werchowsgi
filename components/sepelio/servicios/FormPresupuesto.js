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
import moment, { months } from "moment";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const FormPresupuesto = ({
  idserv,
  servicio,
  apoderadoRef,
  domicilioRef,
  telefonoRef,
  totalRef,
  anticipoRef,
  handleChange,
  calcCuotas,
  cuoMenInt,
  cuotasSel,
  errores,
  regPresupuesto,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">
          <u>Plan de Pago Servicio de Sepelio: N°:</u> {""}
          {idserv} - {servicio.apellido}, {servicio.nombre}
        </Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography className="mb-4" variant="h6">
            <u>Apoderado/Solicitante</u>
          </Typography>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha"
                type="text"
                value={moment().format("DD/MM/YYYY")}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Apellido y Nombre"
                type="text"
                inputRef={apoderadoRef}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Domicilio"
                type="text"
                inputRef={domicilioRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Telefono"
                type="text"
                inputRef={telefonoRef}
              />
            </div>
          </div>

          <hr className="borde-2 mt-5 mb-5" />

          <Typography className="mb-4" variant="h6">
            <u>Servicio</u>
          </Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Textarea
                rows={10}
                size="md"
                label="Descripcion del Servicio"
                onChange={(value) => {
                  handleChange("descri", value);
                }}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Total"
                type="number"
                inputRef={totalRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Anticipo"
                type="number"
                inputRef={anticipoRef}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                label="Plan de Cuotas"
                onChange={(value) => {
                  handleChange("cuotas", value);
                }}
              >
                <Option value="2-1,2244">2</Option>
                <Option value="3-1,3123">3</Option>
                <Option value="4-1,4059">4</Option>
                <Option value="5-1,5055">5</Option>
                <Option value="6-1,6114">6</Option>
              </Select>
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Button color="black" onClick={calcCuotas}>
                Calcular Presupuesto
              </Button>
            </div>
          </div>

          {cuoMenInt > 0 ? (
            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              EL SALDO DEL VALOR TOTAL DEL SERVICIO, DEBERA ABONARSE EN{" "}
              {cuotasSel} CUOTAS DE ${cuoMenInt.toFixed(2)}.
            </Alert>
          ) : null}

          {errores ? (
            <Alert
              color="red"
              className="mt-5 mb-5"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <Button onClick={regPresupuesto}>Registrar </Button>

            <Button
              className="ml-1"
              color="red"
              onClick={() => {
                Router.reload();
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormPresupuesto;
