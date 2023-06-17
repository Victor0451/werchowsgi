import React from 'react'
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from 'moment';



export default function ExportarPadron({
  listado,

}) {


  let header = [];
  let body = []
  let name = ""



  name = `Listado de Ataudes - ${moment().format('DD-MM-YYYY')}.xls`

  header = ["Codigo", "Ataud", "Tipo", "Medidas", "Uso", "Stock"];

  listado.forEach(i => {
    body.push({
      codigo: i.codigo,
      nombre: i.nombre,
      tipo: i.tipo,
      medidas: i.medidas,
      uso: i.uso,
      stock: i.stock
    })

  });


  const descargarExcel = () => {

    downloadExcel({
      fileName: name,
      sheet: "Reporte",
      tablePayload: {
        header,
        // accept two different data structures
        body: body
      }
    });

  }

  return (
    <Button color="green" onClick={descargarExcel}>Export excel</Button>
  )
}