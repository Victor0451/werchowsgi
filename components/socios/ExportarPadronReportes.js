import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadronReportes({
  listado,
  sucursal,
  tipoCartera,
}) {
  let header = [];
  let body = [];
  let name = "";

  name = `Reporte Socios ${tipoCartera} - ${sucursal} - ${moment().format(
    "DD-MM-YYYY"
  )}.xls`;

  header = [
    "HC",
    "Socio",
    "DNI",
    "Alta",
    "Domicilio",
    "Barrio",
    "Telefono",
    "Movil",
    "Importe",
  ];

  listado.forEach((i) => {
    body.push({
      hc: i.CONTRATO,
      socio: `${i.APELLIDOS}, ${i.NOMBRES}`,
      dni: i.NRO_DOC,
      alta: i.ALTA,
      domicilio: `${i.CALLE}, N°${i.NRO_CALLE}`,
      barrio: i.BARRIO,
      telefono: i.TELEFONO,
      movil: i.MOVIL,
      importe: i.IMPORTE,
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
    <Button color="green" onClick={descargarExcel}>
      Export excel
    </Button>
  );
}
