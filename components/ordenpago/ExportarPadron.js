import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import moment from "moment";

export default function ExportarPadron({ listado }) {
  let header = [];
  let body = [];
  let name = "";
  let data = {
    fecha: "",
    tipo_orden: "",
    norden: "",
    nombre: "",
    total: "",
    operador_carga: "",
    estado: "",
    autorizado: "",
    pagado: "",
  };

  name = `Listado de Ordenes Generadas - ${moment().format("DD-MM-YYYY")}.xls`;

  header = [
    "Fecha",
    "Orden Tipo ",
    "N° Orden",
    "Proveedor",
    "Importe",
    "Operador",
    "Estado",
    "Autorizado",
    "Pagado",
  ];

  listado.forEach((i) => {
    data = {
      fecha: moment(i.fecha).format("DD/MM/YYYY"),
      tipo_orden: i.tipo_orden,
      norden: i.norden,
      nombre: i.nombre,
      total: i.total,
      operador_carga: i.operador_carga,
    };

    if (i.estado === true) {
      data.estado = "Activo";
    } else {
      data.estado = "Anulado";
    }

    if (i.autorizado === true) {
      data.autorizado = "Si";
    } else {
      data.autorizado = "No";
    }

    if (i.pagado === true) {
      data.pagado = "Si";
    } else {
      data.pagado = "No";
    }

    body.push(data);
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
