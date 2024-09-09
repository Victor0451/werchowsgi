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
  List,
  ListItem,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Select2 from "react-select";
import Link from "next/link";
import ReactToPrint from "react-to-print";

const FormImpresion = ({
  recibo,
  operador,
  movim,
  calImpus,
  componentRef,
  calTot,
  firma,
  titulo
}) => {
  const TABLE_HEAD = [
    "Concepto",
    "Remun. Sujetas a Retencion",
    "Remun. Exentas",
    "Descuentos",
  ];

  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <Typography variant="h2">{titulo}</Typography>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 flex justify-end ">
            <ReactToPrint
              trigger={() => <Button>Imprimir</Button>}
              content={() => componentRef}
            />
          </div>
        </div>

        <div
          className="w-full  p-4 border border-gray-800 rounded-xl mt-5"
          ref={(el) => (componentRef = el)}
        >
          <div className="w-full  p-4 border border-gray-800 rounded-xl ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Empresa"
                  type="text"
                  value={operador.empresa}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0"></div>
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Cuit"
                  type="text"
                  value={operador.cuit}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/2 px-3  mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Apellido y Nombre"
                  type="text"
                  value={operador.operador}
                  readOnly
                />
              </div>

              <div className="w-full md:w-1/4 px-3 ml- mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Cuil"
                  type="text"
                  value={operador.cuil}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Legajo"
                  type="text"
                  value={operador.idlegajo}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Seccion"
                  type="text"
                  value={recibo.seccion}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Categoria"
                  type="text"
                  value={operador.categoria}
                  readOnly
                />
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Fecha de Ingreso"
                  type="text"
                  value={moment(operador.fecha_ingreso).format("DD/MM/YYYY")}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Contratacion"
                  type="text"
                  value={operador.contratacion}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/5 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="N° Recibo"
                  type="text"
                  value={recibo.idrecibo}
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Periodo"
                  type="text"
                  value={recibo.periodo}
                />
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Fecha de Deposito"
                  type="text"
                  value={moment(recibo.fecha_deposito).format("DD/MM/YYYY")}
                />
              </div>

              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  variant="standard"
                  size="sm"
                  label="Banco"
                  type="text"
                  value={recibo.banco}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="mt-5 border border-gray-800 p-1 rounded-xl">
            <table className="w-full  table-auto text-left">
              <thead className="">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {movim.map((l, index) => (
                  <tr key={index} className="">
                    <td className="p-1 w-full md:w-1/2 border border-gray-800 ">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {l.concepto}
                      </Typography>
                    </td>
                    <td className="p-1 border border-gray-800">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {l.remu_ren ? (
                          <>{parseFloat(l.remu_ren).toFixed(2)}</>
                        ) : null}
                      </Typography>
                    </td>
                    <td className="p-1 border border-gray-800">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {l.remu_exe ? (
                          <>{parseFloat(l.remu_exe).toFixed(2)}</>
                        ) : null}
                      </Typography>
                    </td>
                    <td className="p-1 border border-gray-800">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {l.descuento ? (
                          <>{parseFloat(l.descuento).toFixed(2)}</>
                        ) : null}
                      </Typography>
                    </td>
                  </tr>
                ))}

                <tr className="border border-gray-800 rounded-xl bg-blue-gray-50/50">
                  <td className="p-1 w-full md:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-end text-lg"
                    >
                      Sub Total{" "}
                    </Typography>
                  </td>
                  <td className="p-1 border border-gray-800">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {calImpus(movim, "rr")}
                    </Typography>
                  </td>
                  <td className="p-1 border border-gray-800">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {calImpus(movim, "re")}
                    </Typography>
                  </td>
                  <td className="p-1 border border-gray-800">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {calImpus(movim, "ds")}
                    </Typography>
                  </td>
                </tr>
                <tr className="border border-gray-800 rounded-xl">
                  <td className="p-1 w-full md:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Lugar y Fecha de pago:
                    </Typography>
                    San Salvador de Jujuy, 05/{moment().format("MM/YYYY")}
                  </td>
                  <td className="p-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Forma De Pago:
                    </Typography>
                    EFECTIVO
                  </td>
                  <td className="p-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      TOTAL NETO
                    </Typography>
                  </td>
                  <td className="p-1">{calTot(movim)}</td>
                </tr>
              </tbody>
            </table>
            <div className="border border-gray-800 rounded-xl">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0"></div>
                <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0"></div>
              </div>
            </div>
            <div className="border border-gray-800 rounded-xl">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mt-6  md:mb-0 ">
                  <List className="">
                    <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                      {" "}
                      ART 20 LEY 17250 MES: {recibo.periodo}
                    </ListItem>
                    <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                      {" "}
                      BANCO: {recibo.banco}
                    </ListItem>
                    <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                      FECHA DEPOSITO:{" "}
                      {moment(recibo.fecha_deposito).format("DD/MM/YYYY")}
                    </ListItem>
                  </List>
                </div>
                <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0 ">
                  <div className="flex justify-end p-2 ">
                    <br />
                    <br />
                    <br />
                    <br />
                    {firma}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormImpresion;
