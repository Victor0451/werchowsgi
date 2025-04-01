import React, { useMemo } from "react";
import FilterComponent from "../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";

const ListadoInforme = ({ listado }) => {
  let columns = [
    {
      name: "Sucursal",
      selector: (row) => `${row.SUC}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Espec./ Prest",
      button: true,
      width: "180px",
      cell: (row, index) => (
        <>
          {row.LIS_ESPE ? (
            <>{row.LIS_ESPE}</>
          ) : row.NOMBRE ? (
            <>{row.NOMBRE}</>
          ) : null}
        </>
      ),
    },

    {
      name: "Usos",
      selector: (row) => `${row.USOS}`,
      sortable: true,
      width: "100px",
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

export default ListadoInforme;
