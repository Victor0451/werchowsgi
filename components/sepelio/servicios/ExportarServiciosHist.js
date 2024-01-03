import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarServiciosHist({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Servicios Historicos - ${moment().format("DD-MM-YYYY")}.xls`;

  header = [
    "Nota Credito",
    "N° Ficha",
    "DNI",
    "Difunto",
    "Edad",
    "Fecha de Fallecimiento",
    "Lugar de Fallecimiento",
    "Tipo de Servicio",
  ];

  listado.forEach((i) => {
    body.push({
      NRO_NOTACR: i.NRO_NOTACR,
      CONTRATO: i.CONTRATO,
      DNI_EXIN: i.DNI_EXIN,
      EXINTO: i.EXINTO,
      EDAD_EXIN: i.EDAD_EXIN,
      FEC_FALLEC: moment(i.FEC_FALLEC).format("DD/MM/YYYY"),
      LUGAR: i.LUGAR,
      TIPO_SERV: i.TIPO_SERV,
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
      Exportar Servicios Historicos
    </Button>
  );
}
