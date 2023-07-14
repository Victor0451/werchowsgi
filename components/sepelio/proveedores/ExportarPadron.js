import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadron({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Listado de Proveedores - ${moment().format("DD-MM-YYYY")}.xls`;

  header = ["Razon Social", "CUIT", "Domicilio", "Telefono"];

  listado.forEach((i) => {
    body.push({
      razon: i.razon,
      cuit: i.cuit,
      domicilio: i.domicilio,
      telefono: i.telefono,
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
