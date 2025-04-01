import React, { useMemo } from "react";
import FilterComponent from "../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";

const ListadoTopPracticas = ({ listado }) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "80px",
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Especialidad",
      selector: (row) => `${row.PRAC_REA}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Codigo",
      selector: (row) => `${row.COD_PRAC}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Detalle",
      selector: (row) => `${row.DESCRIP}`,
      sortable: true,
      width: "600px",
    },
    {
      name: "Usos",
      selector: (row) => `${row.USOS}`,
      sortable: true,
      width: "120px",
    },
    {
      name: "Importe",
      selector: (row) => `$${row.IMPORTE}`,
      sortable: true,
      width: "120px",
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

export default ListadoTopPracticas;
