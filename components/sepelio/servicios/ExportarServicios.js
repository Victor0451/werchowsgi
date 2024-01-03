import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarServicios({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Servicios Registrados - ${moment().format("DD-MM-YYYY")}.xls`;

  header = [
    "Empresa",
    "N° Ficha",
    "DNI",
    "Difunto",
    "Edad",
    "Fecha de Fallecimiento",
    "Motivo de fallecimiento",
    "Lugar de Fallecimiento",
    "Tipo de Servicio",
  ];

  listado.forEach((i) => {
    body.push({
      empresa: i.empresa,
      contrato: i.contrato,
      dni: i.dni,
      difunto: `${i.apellido}, ${i.nombre}`,
      edad: i.edad,
      fecha_fallecimiento: moment(i.fecha_fallecimiento).format("DD/MM/YYYY"),
      motivo: i.motivo,
      lugar_fallecimiento: i.lugar_fallecimiento,
      tipo_servicio: i.tipo_servicio,
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
      Exportar Servicios
    </Button>
  );
}
