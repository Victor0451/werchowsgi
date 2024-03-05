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
import { TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";

const ListadoGuardiasLiquidadas = ({
  listado,
  eliminarLiquidacion,
  f,
  calcTotal,
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
      grow: 0.2,
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.2,
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
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {f && f === "vista" ? null : (
            <TrashIcon
              color="red"
              className="butlist mt-px h-6 w-6"
              onClick={() => eliminarLiquidacion(row.idturno)}
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
        <Typography variant="h4">Guardias Registradas</Typography>

        <div className="">
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total a Pagar</u>: ${calcTotal(listado, "g")}
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

export default ListadoGuardiasLiquidadas;
