import React, { useState } from "react";
import {
  Input,
  Alert,
  Typography,
  Option,
  Textarea,
  Card,
  CardBody,
  Button,
  Collapse,
} from "@material-tailwind/react";
import moment from "moment";
import { IconSolid } from "../../libs/funciones";
import ListadoCuotas from "./ListadoCuotas";
import Select from "react-select";
import { meses3, anos } from "../../array/array";

const FormCobWerchow = ({
  dniRef,
  contratoRef,
  errores,
  alertas,
  traerSocio,
  tarerSocioContrato,
  ficha,
  allPagos,
  grupo,
  cuotaMensual,
  handleChange,
  preCargarPago,
  totalPagosPrecargados,
  eliminarPagoPrecargado,
  nupagos,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">WERCHOW - Cobranza de cuotas</Typography>

        <Alert className="mt-5 mb-5" color="blue" icon={<IconSolid />}>
          Cobranza de cuotas mensuales y emision de recibos para socios de
          WERCHOW
        </Alert>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative w-full mb-6 group">
            <div className="p-4 border-2 rounded-lg mt-6 ">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Ingrese el N° de Socio.
              </Typography>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="N° Socio"
                    type="number"
                    inputRef={contratoRef}
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Button onClick={tarerSocioContrato}>Buscar</Button>
                </div>
              </div>

              {errores ? (
                <Alert color="red" icon={<IconSolid />}>
                  {errores}
                </Alert>
              ) : null}

              {alertas ? (
                <Alert color="blue" icon={<IconSolid />}>
                  {alertas}
                </Alert>
              ) : null}
            </div>
          </div>
          <div className="relative w-full mb-6 group">
            <div className="p-4 border-2 rounded-lg mt-6 ">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Ingrese el DNI del Titular.
              </Typography>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="number"
                    inputRef={dniRef}
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Button onClick={traerSocio}>Buscar</Button>
                </div>
              </div>

              {errores ? (
                <Alert color="red" icon={<IconSolid />}>
                  {errores}
                </Alert>
              ) : null}

              {alertas ? (
                <Alert color="blue" icon={<IconSolid />}>
                  {alertas}
                </Alert>
              ) : null}
            </div>
          </div>
        </div>

        {ficha.length > 0 ? (
          <>
            <hr className="border-2 mt-5 mb-5" />

            <div className="border-2 p-4 rounded-lg">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Informacion del Socio
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-6 mt-6">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Medio Pago"
                    type="text"
                    defaultValue={grupo}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="text"
                    defaultValue={ficha.NRO_DOC}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Nacimiento"
                    type="text"
                    defaultValue={moment(ficha.NACIMIENTO).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Plan"
                    type="text"
                    defaultValue={`${ficha.PLAN}${ficha.SUB_PLAN}`}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Obra Social"
                    type="text"
                    defaultValue={ficha.OBRA_SOC}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Alta"
                    type="text"
                    defaultValue={moment(ficha.ALTA).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Vigencia"
                    type="text"
                    defaultValue={moment(ficha.VIGENCIA).format("DD/MM/YYYY")}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Cuota Mensual"
                    type="text"
                    value={`$${cuotaMensual}`}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="p-4 border-2 rounded-lg mt-5">
              <div className="grid md:grid-cols-2 md:gap-6 mt-5">
                <div className="relative w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Pagos
                  </Typography>
                </div>
                <div className="relative w-full mb-6 group">
                  <Button onClick={toggleOpen}>Generar Pago</Button>
                  <Collapse open={open} className=" ">
                    <Card className="border-2 mt-2 h-96">
                      <CardBody>
                        <div className="grid md:grid-cols-3 md:gap-6">
                          <div className="relative w-full mb-6 group">
                            <Select
                              className=" text-sm rounded-xl"
                              placeholder="Mes"
                              options={meses3.map((i) => ({
                                label: i.label,
                                value: i.value,
                              }))}
                              onChange={(value) => {
                                handleChange("mes", value.value);
                              }}
                            />
                          </div>

                          <div className="relative w-full mb-6 group">
                            <Select
                              className=" text-sm rounded-xl"
                              placeholder="Año"
                              options={anos.map((i) => ({
                                label: i.label,
                                value: i.value,
                              }))}
                              onChange={(value) => {
                                handleChange("ano", value.value);
                              }}
                            />
                          </div>
                          <div className="relative w-full mb-6 group">
                            <Button onClick={preCargarPago}>Pre cargar</Button>
                          </div>
                        </div>
                        <Alert color="blue" icon={<IconSolid />}>
                          Esta accion precargara el o los meses que el afiliado
                          desea abonar, calculando el total final que debera
                          abonar. Para registrar estos pagos, deberas hacer
                          click en registrar pagos.
                        </Alert>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mt-5">
                <div className="relative w-full mb-6 group">
                  <ListadoCuotas listado={allPagos} f={"V"} />
                </div>
                <div className="relative w-full mb-6 group">
                  <ListadoCuotas
                    listado={nupagos}
                    eliminarPagoPrecargado={eliminarPagoPrecargado}
                    f={"C"}
                  />
                  <Alert color="blue" icon={<IconSolid />} className="mt-5">
                    TOTAL: ${totalPagosPrecargados(nupagos)}
                  </Alert>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormCobWerchow;
