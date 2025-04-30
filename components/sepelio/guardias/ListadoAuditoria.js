import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import moment from "moment";

import {
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const ListadoAuditoria = ({
  listado,
  estadoGuardia,
  liquidarGuardia,
  calcTotal,
  listL,
  listP,
  usu,
}) => {
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Lugar",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.lugar === "sv" ? (
            <div>Sala Velatoria</div>
          ) : row.lugar === "cc" ? (
            <div>Casa Central</div>
          ) : null}
        </>
      ),
    },

    {
      name: "Inicio",
      selector: (row) => `${moment(row.inicio).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Aprobado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.aprobado === 0 ? (
            <div>Pendiente</div>
          ) : row.aprobado === 2 ? (
            <div>Rechazado</div>
          ) : row.aprobado === 1 ? (
            <div>Aprobado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Aprobacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_aprobacion ? (
            <div>---</div>
          ) : row.fecha_aprobacion ? (
            <div>
              {moment(row.fecha_aprobacion)
                .utcOffset("+0300")
                .format("DD/MM/YYYY")}
            </div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Ap.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operadorap ? (
            <div>---</div>
          ) : row.operadorap ? (
            <div>{row.operadorap}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 ? (
            <div>Pendiente</div>
          ) : row.liquidado === 2 ? (
            <div>Rechazado</div>
          ) : row.liquidado === 1 ? (
            <div>Liquidado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Liquidacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_liquidacion ? (
            <div>---</div>
          ) : row.fecha_liquidacion ? (
            <div>
              {moment(row.fecha_liquidacion)
                .utcOffset("+0300")
                .format("DD/MM/YYYY")}
            </div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Liq.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operadorliq ? (
            <div>---</div>
          ) : row.operadorliq ? (
            <div>{row.operadorliq}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Acciones",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          <CheckCircleIcon
            color="green"
            className="butlist mt-px h-6 w-6 "
            onClick={() => estadoGuardia("A", row.idturno)}
          />

          <XCircleIcon
            color="red"
            className="butlist mt-px h-6 w-6 "
            onClick={() => estadoGuardia("R", row.idturno)}
          />

          {usu.usuario !== "joaquini" ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liquidarGuardia(row.idturno)}
            />
          ) : null}
        </>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = listado.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const conditionalRowStyles = [
    {
      when: (row) => row.liquidado === 1,
      style: {
        backgroundColor: "#33FFB2",
        color: "black",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">
          <u>Auditoria Guardias</u>
        </Typography>

        <div className="mt-6 border-2 rounded-xl p-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Typography variant="h4">
                Listado de Guardias Pendientes
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                <u>Total</u>: {listP}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                <u>Importe</u>: ${calcTotal(listado, "P")}
              </Typography>
            </div>
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Typography variant="h4">
                Listado de Guardias Liquidadas
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                <u>Total</u>: {listL}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                <u>Importe</u>: ${calcTotal(listado, "L")}
              </Typography>
            </div>
          </div>

          <>
            <DataTable
              columns={columns}
              data={filteredItems}
              defaultSortField="name"
              striped
              pagination
              subHeader
              subHeaderComponent={subHeaderComponent}
              conditionalRowStyles={conditionalRowStyles}
            />
          </>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ListadoAuditoria;
