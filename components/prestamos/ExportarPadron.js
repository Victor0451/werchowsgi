import React from 'react'
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from 'moment';



export default function ExportarPadron({
  listado,
  desde,
  hasta,
  f
}) {


  let header = [];
  let body = []
  let name = ""

  if (f === "rep op") {

    name = `Rep. Pretamos aprobados por operador - ${moment().format('DD-MM-YYYY')}.xls`

    header = ["Operador", "N° Prestamos", "Capital", "Interes", "Cap + Interes"];

    listado.forEach(i => {
      body.push({
        operador: i.operador,
        prestamos: i.prestamos,
        capital: i.capital,
        interes: i.interes,
        capconint: i.capconint
      })

    });

  } else if (f === 'rep prest') {

    name = `Rep. Pretamos periodo: ${moment(desde.current.value).format("DD-MM-YYYY")} - ${moment(hasta.current.value).format("DD-MM-YYYY")}.xls`

    header = ["Fecha", "Contrato", "Socio", "Renovacion", "Capital", "Cuotas", "Cuo. Mensual", "Estado", "Operador"];

    listado.forEach(i => {
      body.push({
        fecha: moment(i.ptm_fechasol).format('DD/MM/YYYY'),
        contrato: i.ptm_ficha,
        socio: i.ptm_afi,
        renovacion: i.ptm_renov,
        capital: i.ptm_prestamo,
        cuotas: i.ptm_cuotas,
        cuo_mensual: i.ptm_valcuota,
        estado: i.ptm_estado,
        operador: i.operador
      })

    });


  }




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