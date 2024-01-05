import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import moment from "moment";
import ModalDetalleCaja from "./ModalDetalleCaja";

const ListadoCajas = ({
  listado,
  traerMovimientos,
  totales,
  ingreso,
  egreso,
}) => {
  let columns = [
    {
      name: "#",
      selector: (row, index) => `${index + 1}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Empresa",
      button: true,
      grow: 0.3,
      cell: (row, index) => (
        <>
          {row.empresa === "WSRL" ? (
            <>Werchow S.R.L.</>
          ) : row.empresa === "WSA" ? (
            <>Werchow S.A.</>
          ) : row.empresa === "M" ? (
            <>Mutual San Valentin</>
          ) : null}
        </>
      ),
    },

    {
      name: "Sucursal",
      selector: (row) => `${row.sucursal}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha_carga).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Ingresos",
      selector: (row) => `$${row.ingresos}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Egresos",
      selector: (row) => `$${row.egresos}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Saldo",
      selector: (row) => `$${row.saldo}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <ModalDetalleCaja
            row={row}
            traerMovimientos={traerMovimientos}
            totales={totales}
            ingreso={ingreso}
            egreso={egreso}
          />
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

export default ListadoCajas;
