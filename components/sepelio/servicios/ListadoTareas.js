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
  Spinner,
} from "@material-tailwind/react";
import { TrashIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";

const ListadoTareas = ({ listado, delTarea, calcTotal, f, liqItem }) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "60px",
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Tarea",
      selector: (row) => `${row.tarea}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Inicio",
      selector: (row) => `${moment(row.inicio).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Monto",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === false ? (
            <div>Pendiente</div>
          ) : row.liquidado === true ? (
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
            <div>{moment(row.fecha_liquidacion).format("DD/MM/YYYY")}</div>
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
      grow: 0.1,
      cell: (row, index) => (
        <>
          {f && f === "vista" ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liqItem("liquidar tarea individual", row.idtareas)}
            />
          ) : (
            <TrashIcon
              color="red"
              className="butlist mt-px h-6 w-6"
              onClick={() => delTarea(row.idtareas)}
            />
          )}
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

  return (
    <Card className="h-full w-full p-4 border-2 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h4">Tareas Registradas</Typography>

        <div className="">
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total a Pagar</u>: ${calcTotal(listado, "t")}
          </Typography>

          <>
            <DataTable
              columns={columns}
              data={filteredItems}
              defaultSortField="name"
              striped
              pagination
              subHeader
              subHeaderComponent={subHeaderComponent}
            />
          </>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ListadoTareas;
