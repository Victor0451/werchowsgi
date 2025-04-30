import React, { useMemo } from "react";
import FilterComponent from "../../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/24/solid";

const ListadoMovimiento = ({ listado, eliminarPrecarga, f }) => {
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Movimiento",
      selector: (row) => `${row.movimiento}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha_movimiento).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Concepto",
      selector: (row) => `${row.concepto}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.2,
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
              className="butlist mt-px h-6 w-6 "
              onClick={() => eliminarPrecarga(index, row.movimiento)}
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
    <div>
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

export default ListadoMovimiento;
