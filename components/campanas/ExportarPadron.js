import React from 'react'
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";



export default function ExportarPadron({
  listado,
  camp
}) {


  const header = ["Contrato", "Socio", "Calle", "N°", "Barrio", "Localidad", "Telefono", "Movil", "Cuota", "Deuda"];
  const body = []


  listado.forEach(i => {
    body.push({
      contrato: i.contrato,
      socio: `${i.apellido}, ${i.nombre}`,
      calle: i.calle,
      n: i.nro_calle,
      barrio: i.barrio,
      localidad: i.localidad,
      telefono: i.telefono,
      movil: i.movil,
      cuota: i.cuota,
      deuda: i.cuotasadeudadas
    })

  });


  const descargarExcel = () => {

    downloadExcel({
      fileName: `Hoja de ruta - Campaña: ${camp}`,
      sheet: "Hoja de Ruta",
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

