import React, { useMemo } from "react";
import FilterComponent from "../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";

const ListadoAdherentes = ({ listado }) => {
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Adherente",
      selector: (row) => `${row.APELLIDOS}, ${row.NOMBRES}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Fecha Nacimiento",
      selector: (row) =>
        `${moment(row.NACIMIENTO).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "DNI",
      selector: (row) => `${row.NRO_DOC}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha Alta",
      selector: (row) =>
        `${moment(row.ALTA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Fecha Vigencia",
      selector: (row) =>
        `${moment(row.VIGENCIA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Estado",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {!row.BAJA ? (
            <>Activo</>
          ) : row.BAJA && row.FALLE === 999 ? (
            <>
              Fallecio -{" "}
              {moment(row.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
            </>
          ) : row.BAJA && row.FALLE !== 999 ? (
            <>
              Baja - {moment(row.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
            </>
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

export default ListadoAdherentes;
