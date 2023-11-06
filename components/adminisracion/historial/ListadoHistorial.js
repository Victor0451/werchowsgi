import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import { Typography } from "@material-tailwind/react";
import moment from "moment";

const ListadoHistorial = ({ listado }) => {
  let columns = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },

    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Movimiento",
      selector: (row) => `${row.accion}`,
      sortable: true,
      width: "1200px",
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
    <div>
      <Typography variant="h6" color="blue-gray" className="mt-5">
        <u>Historial de movimientos</u>
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mb-5">
        <u>Total de registros</u>: {listado.length}
      </Typography>
      <DataTable
        columns={columns}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
    </div>
  );
};

export default ListadoHistorial;
