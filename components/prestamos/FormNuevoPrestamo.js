import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";

export const FormNuevoPrestamo = ({
  contratoRef,
  buscarFicha,
  errores,
  alertas,
  ficha,
  capital,
  planCuotas,
  handleChange,
  registrarPrestamo,
  simularPrestamo,
  flag,
  planSelec,
  capSelec,
  capADev,
  couPrest,
  legajoRef,
  sueldoNetoRef,
  ingresoRef,
  ant,
  handleAnti,
  alerJubi,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registrar Subsidios</Typography>

        {alertas ? (
          <Alert
            color="orange"
            className="max-w-screen mt-5 mb-5"
            icon={<InformationCircleIcon className="mt-px h-6 w-6" />}
          >
            <Typography variant="h5" color="white">
              ATENCION
            </Typography>
            <Typography color="white" className="mt-2 font-normal ">
              {alertas}
            </Typography>
          </Alert>
        ) : null}

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h5" color="blue-gray" className="mt-5">
            Ingrese el N° de ficha
          </Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Contrato"
                type="number"
                inputRef={contratoRef}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={buscarFicha}>Buscar</Button>
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

        {ficha ? (
          <>
            <hr className="border-2 mt-5" />

            <div className="border-2 rounded-xl p-4 mt-5">
              <Typography variant="h5" color="blue-gray" className="mt-5">
                Datos del Socio
              </Typography>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Contrato"
                    type="text"
                    readOnly
                    value={ficha.CONTRATO}
                  />
                </div>

                <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="DNI"
                    type="text"
                    readOnly
                    value={ficha.NRO_DOC}
                  />
                </div>

                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Titular"
                    type="text"
                    readOnly
                    value={`${ficha.APELLIDOS}, ${ficha.NOMBRES}`}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Barrio"
                    type="text"
                    readOnly
                    value={ficha.BARRIO}
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Calle"
                    type="text"
                    readOnly
                    value={ficha.CALLE}
                  />
                </div>

                <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="N°"
                    type="text"
                    readOnly
                    value={ficha.NRO_CALLE}
                  />
                </div>

                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Localidad"
                    type="text"
                    readOnly
                    value={ficha.LOCALIDAD}
                  />
                </div>

                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Telefono"
                    type="text"
                    readOnly
                    value={ficha.TELEFONO}
                  />
                </div>

                <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                  <Input
                    size="md"
                    label="Movil"
                    type="text"
                    readOnly
                    value={ficha.MOVIL}
                  />
                </div>
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            {alertas ? (
              <Alert
                color="orange"
                className="max-w-screen mt-5 mb-5"
                icon={<InformationCircleIcon className="mt-px h-6 w-6" />}
              >
                <Typography variant="h5" color="white">
                  ATENCION
                </Typography>
                <Typography color="white" className="mt-2 font-normal ">
                  {alertas}
                </Typography>
              </Alert>
            ) : null}

            <hr className="border-2 mt-5 mb-5" />

            <div className="border-2 rounded-xl p-4 mt-5">
              <Typography variant="h5" color="blue-gray" className="mt-5">
                Confeccionar Subsidio
              </Typography>

              <div className=" p-4 grid gap-6 mb-6 md:grid-cols-3">
                <Select
                  label="Elige el Capital a Prestar"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                  onChange={(value) => handleChange("cap", value)}
                >
                  {capital.map((i, index) => (
                    <Option key={index} value={i}>
                      {i.capital}
                    </Option>
                  ))}
                </Select>

                <Select
                  label="Elige un Plan de Cuotas"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                  onChange={(value) => {
                    handleChange("plan", value);
                  }}
                >
                  {planCuotas.map((i, index) => (
                    <Option key={index} value={i.plan_cuotas}>
                      {i.plan_cuotas}
                    </Option>
                  ))}
                </Select>

                <Button className="btn-primary" onClick={simularPrestamo}>
                  Calular Subsidio
                </Button>
              </div>
            </div>

            {flag === true ? (
              <>
                <hr className="mt-5 mb-5 border-2" />

                <Alert
                  color="green"
                  icon={<InformationCircleIcon className="h-6 w-6" />}
                >
                  <Typography className="font-medium">
                    Detalles del Subsidio:
                  </Typography>
                  <ul class="mt-2 ml-2 list-disc list-inside">
                    <li>Capital Seleccionado: ${capSelec}</li>
                    <li>Plan de Cuotas: {planSelec}</li>
                    <li>El valor de las cuotas es de: ${couPrest}</li>
                    <li>El capital a devolver es de: ${capADev}</li>
                    <li>
                      El subsidio inicia:{" "}
                      {moment().add(1, "months").format("MM/YYYY")}
                    </li>
                    <li>
                      El subsidio termina:{" "}
                      {moment().add(planSelec, "months").format("MM/YYYY")}
                    </li>
                  </ul>
                </Alert>

                <div className="border-2 rounded-xl p-4 mt-5">
                  <Typography variant="h5" color="blue-gray" className="mt-5">
                    Confeccionar Subsidio
                  </Typography>

                  {alerJubi ? (
                    <Alert
                      color="orange"
                      className="max-w-screen mt-5 mb-5"
                      icon={<InformationCircleIcon className="mt-px h-6 w-6" />}
                    >
                      <Typography variant="h5" color="white">
                        ATENCION
                      </Typography>
                      <Typography color="white" className="mt-2 font-normal ">
                        {alerJubi}
                      </Typography>
                    </Alert>
                  ) : null}

                  <div className=" p-4 grid gap-6 mb-6 md:grid-cols-5">
                    <div className="mt-2">
                      <Input
                        size="md"
                        label="Legajo"
                        type="text"
                        inputRef={legajoRef}
                      />
                    </div>
                    <div className="mt-2">
                      <Input
                        size="md"
                        label="Fecha Ingreso"
                        type="date"
                        inputRef={ingresoRef}
                        onChange={handleAnti}
                      />
                    </div>

                    <div className="mt-2">
                      <Input
                        size="md"
                        label="Antigüerdad"
                        type="text"
                        value={ant}
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <Input
                        size="md"
                        label="Sueldo Neto"
                        type="text"
                        inputRef={sueldoNetoRef}
                      />
                    </div>

                    <div className="mt-2">
                      <Select
                        label="Elige una opcion"
                        animate={{
                          mount: { y: 0 },
                          unmount: { y: 25 },
                        }}
                        onChange={(value) => {
                          handleChange("renova", value);
                        }}
                      >
                        <Option value={"SI"}>SI</Option>
                        <Option value={"NO"}>NO</Option>
                      </Select>
                    </div>
                  </div>
                  <div className=" flex justify-end mt-2">
                    <Button onClick={registrarPrestamo}>
                      Registrar Subsidio
                    </Button>
                  </div>

                  {errores ? (
                    <Alert
                      color="red"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {errores}
                    </Alert>
                  ) : null}
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};
