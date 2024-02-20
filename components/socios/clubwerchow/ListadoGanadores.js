import React, { useMemo } from "react";
import FilterComponent from "../../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";

const ListadoGanadores = ({listado}) => {
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Ganador",
      selector: (row) => `${row.participante}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "DNI",
      selector: (row) => `${row.dni}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha Nacimiento",
      selector: (row) => `${moment(row.fecha).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Premio",
      selector: (row) => `${row.premio}`,
      sortable: true,
      grow: 0.2,
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

export default ListadoGanadores;
