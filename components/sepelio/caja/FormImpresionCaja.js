import React, { useMemo } from "react";
import Ingresos from "react-data-table-component";
import Egresos from "react-data-table-component";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  CardBody,
  Spinner,
} from "@material-tailwind/react";
import moment from "moment";
import { DocumentIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import ReactToPrint from "react-to-print";
import Link from "next/link";

const FormImpresionCaja = ({
  caja,
  ingresos,
  gastos,
  totales,
  componentRef,
}) => {
  let ingre = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "110px",
    },

    {
      name: "Ingresos",
      selector: (row) => `${row.concepto}`,
      sortable: true,
      width: "400px",
    },
    {
      name: "Monto",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      width: "400px",
    },
  ];

  let egre = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "110px",
    },

    {
      name: "Egresos",
      selector: (row) => `${row.concepto}`,
      sortable: true,
      width: "350px",
    },

    {
      name: "Monto",
      selector: (row) => `$${row.total}`,
      width: "120px",
    },

    {
      name: "Mont. IVA",
      selector: (row) => `$${row.montoiva}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Ret. IIBB",
      selector: (row) => `$${row.retiibb}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Ret. Gcias",
      selector: (row) => `$${row.retggcias}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Per IVA",
      selector: (row) => `$${row.perciva}`,
      sortable: true,
      width: "120px",
    },
  ];

  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Impresion de Caja</Typography>

        <div className="mt-4">
          <div className="mt-5 mb-5 border-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Opciones
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
              <ReactToPrint
                trigger={() => <Button>Imprimir Caja</Button>}
                content={() => componentRef}
              />
              <Link href={"/sepelio/caja/listadocajas"}>
                <Button color="red" className="ml-1">
                  Cancelar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <div id="caja" className="p-2" ref={(el) => (componentRef = el)}>
          <div className="border-2 rounded-xl p-4">
            <Typography variant="h4" className="mt-2">
              Caja N°: {caja.idcaja}
            </Typography>
            <Typography variant="h6" className="mt-2">
              Habilitacion Monto: ${caja.monto}
            </Typography>
            <Typography variant="h6" className="mt-2">
              Fecha: {moment(caja.fecha).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="h6" className="mt-2">
              Cierre: {moment(caja.cierre).format("DD/MM/YYYY")}
            </Typography>

            <div className=" mt-5 grid gap-6 mb-6 md:grid-cols-1">
              <div className="border-2 rounded-xl grid gap-6  md:grid-cols-1 p-4">
                <Typography variant="h6" className="mt-2">
                  INGRESOS
                </Typography>
                <Ingresos
                  columns={ingre}
                  data={ingresos}
                  defaultSortField="name"
                  striped
                />
              </div>

              <hr className="border-2 mt-3 mb-3" />

              <div className="border-2 rounded-xl grid gap-6  md:grid-cols-1 p-4">
                <Typography variant="h6" className="mt-2">
                  EGRESOS
                </Typography>
                <Egresos
                  columns={egre}
                  data={gastos}
                  defaultSortField="name"
                  striped
                />
              </div>
            </div>

            <hr className="border-2 mt-7 mb-7" />

            <div className=" grid gap-6 mb-6 md:grid-cols-2">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong>Total Ingresos ${caja.monto}</strong>
              </Alert>
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong> Total Egresos ${totales(gastos, "e")}</strong>
              </Alert>
            </div>
            <div className=" grid gap-6 mb-6 md:grid-cols-1">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong> Saldo ${caja.totalcaja}</strong>
              </Alert>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormImpresionCaja;
