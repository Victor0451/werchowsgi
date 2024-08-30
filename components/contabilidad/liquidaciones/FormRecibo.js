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
  Select,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select2 from "react-select";
import Link from "next/link";
import ListadoImputaciones from "./ListadoImputaciones";
import { IconSolid } from "../../../libs/funciones";

const FormRecibo = ({
  operador,
  conceptos,
  usu,
  handleChange,
  importeRef,
  impu,
  preRegImpu,
  eliminarImpu,
  calImpus,
  fechaDepRef,
  bancoRef,
  periodoRef,
  crearRecibo,
  seccionRef,
  idRec,
  regMovim,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de Recibos de Sueldo</Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">Datos del Recibo</Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Empresa"
                type="text"
                value={operador.empresa}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0"></div>
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Cuit"
                type="text"
                value={operador.cuit}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 px-3  mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Apellido y Nombre"
                type="text"
                value={operador.operador}
                readOnly
              />
            </div>

            <div className="w-full md:w-1/4 px-3 ml- mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Cuil"
                type="text"
                value={operador.cuil}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Legajo"
                type="text"
                value={operador.idlegajo}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Seccion"
                type="text"
                inputRef={seccionRef}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Categoria"
                type="text"
                value={operador.categoria}
                readOnly
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha de Ingreso"
                type="text"
                value={moment(operador.fecha_ingreso).format("DD/MM/YYYY")}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Contratacion"
                type="text"
                value={operador.contratacion}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Periodo"
                type="month"
                inputRef={periodoRef}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input
                size="md"
                label="Fecha de Deposito"
                type="date"
                inputRef={fechaDepRef}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Input size="md" label="Banco" type="text" inputRef={bancoRef} />
            </div>
          </div>

          <div className="flex justify-end mt-10">
            {idRec != "" ? (
              <>
                <Alert className="" color="blue" icon={<IconSolid />}>
                  <Typography variant="h6" color="black">
                    Recibo creado, carga sus imputaciones
                  </Typography>
                </Alert>
              </>
            ) : (
              <>
                <Button className="" color="blue" onClick={crearRecibo}>
                  Generar Recibo
                </Button>

                <Link href={"/contabilidad/liquidaciones/legajo"}>
                  <Button className="ml-1" color="red">
                    Cerrar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {idRec != "" ? (
          <>
            <hr className="border-2 mt-5 mb-5" />

            <div className="w-full  p-4 border-2 rounded-xl mt-5">
              <Typography variant="h5">Precargar Imputaciones</Typography>

              <div className="w-full  p-4 border-2 rounded-xl mt-5">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                    <Input
                      size="md"
                      label="Nro Recibo"
                      type="text"
                      value={idRec}
                      readOnly
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                    <Select2
                      className=" text-sm rounded-xl"
                      placeholder="Conceptos"
                      options={conceptos.map((i) => ({
                        label: `${i.concepto}`,
                        value: `${i.concepto}`,
                      }))}
                      onChange={(value) => {
                        handleChange("conceptos", value.value);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                    <Select
                      defaultValue={""}
                      label="Movimiento"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      onChange={(value) => {
                        handleChange("movim", value);
                      }}
                    >
                      <Option value={1}>Remun. Sujeta a Retencion</Option>
                      <Option value={2}>Remun. Exentas</Option>
                      <Option value={3}>Descuentos</Option>
                    </Select>
                  </div>
                  <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                    <Input
                      size="md"
                      label="Importe"
                      type="number"
                      inputRef={importeRef}
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <Button onClick={preRegImpu}>Pre Cargar Imputacion</Button>
                </div>
              </div>

              <hr className="border-2 mt-5 mb-5" />

              <Typography variant="h5">Listado de Imputaciones</Typography>

              <ListadoImputaciones
                listado={impu}
                usu={usu}
                eliminarImpu={eliminarImpu}
                calImpus={calImpus}
              />
            </div>
            <div className="flex justify-end mt-10">
              <Button onClick={regMovim}>Registrar Movimientos</Button>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormRecibo;
