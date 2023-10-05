import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadron({
  reporteCaja,
  listado,
  desde,
  hasta,
  emp,
}) {
  let header = [];
  let body = [];
  let name = "";
  let em = "";

  if (emp === "sa") {
    em = "S.A.";
  } else if (emp === "srl") {
    em = "S.R.L.";
  }

  name = `Reporte Caja Werchow ${em} periodo ${moment(desde).format(
    "DD-MM-YYYY"
  )}-${moment(hasta).format("DD-MM-YYYY")}.xls`;

  header = [
    "Cuenta",
    "Descripcion",
    "Tipo",
    "Serie",
    "Factura",
    "Importe",
    "Detalle",
    "Movim",
    "Fecha",
    "Proveedor",
    "Cuit",
  ];

  listado.forEach((i) => {
    body.push({
      cuenta: i.codigo,
      descripcion: i.cuenta,
      tipo: i.tipo,
      serie: i.serie,
      factura: i.factura,
      importe: i.importe,
      detalle: i.detalle,
      movim: i.movim,
      fecha: moment(i.fecha).format("DD/MM/YYYY"),
      proveedor: i.proveedor,
      cuit: i.cuit,
    });
  });

  const descargarExcel = () => {
    downloadExcel({
      fileName: name,
      sheet: "Reporte",
      tablePayload: {
        header,
        // accept two different data structures
        body: body,
      },
    });
  };

  return (
    <Button
      color="green"
      onClick={() => {
        reporteCaja();
        descargarExcel();
      }}
    >
      Export excel
    </Button>
  );
}
