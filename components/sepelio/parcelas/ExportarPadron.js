import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadron({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Listado de Parcelas - ${moment().format("DD-MM-YYYY")}.xls`;

  header = [
    "Fecha Alta",
    "Cementerio",
    "Parcela",
    "Manzana",
    "Lote",
    "Lugares Disp",
  ];

  listado.forEach((i) => {
    body.push({
      fecha_alta: i.fecha_alta,
      cementerio: i.cementerio,
      parcela: i.parcela,
      mza: i.mza,
      lote: i.lote,
      lugares: i.lugares,
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
