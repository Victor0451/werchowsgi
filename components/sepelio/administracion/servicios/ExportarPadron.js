import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadron({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Servicios Sin Impactar - ${moment().format("DD-MM-YYYY")}.xls`;

  header = [
    "Empresa",
    "Ficha",
    "Difunto",
    "Seguro",
    "Estado",
    "Fecha Fallecimiento",
  ];

  listado.forEach((i) => {
    body.push({
      empresa: i.empresa,
      ficha: i.contrato,
      difunto: i.difunto,
      seguro: i.seguro,
      estado_ficha: i.estado_ficha,
      fecha_fallecimiento: moment(i.fecha_fallecimiento).format("DD/MM/YYYY"),
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
