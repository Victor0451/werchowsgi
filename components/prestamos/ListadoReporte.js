import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";
import Link from "next/link";

export const ListadoReporte = ({ listado, usu, f }) => {
  let columns = [];

  if (f === "rep op") {
    columns = [
      {
        name: "Operador",
        selector: (row) => `${row.operador}`,
        sortable: true,
        grow: 0.3,
      },

      {
        name: "Prestamos",
        selector: (row) => `${row.prestamos}`,
        sortable: true,
        grow: 0.1,
      },

      {
        name: "Capital Prestado",
        selector: (row) => `$${row.capital}`,
        sortable: true,
        grow: 0.3,
      },
      {
        name: "Intereses Generados",
        selector: (row) => `$${row.interes}`,
        sortable: true,
        grow: 0.3,
      },
      {
        name: "Cap. + Ganancias",
        selector: (row) => `$${row.capconint}`,
        sortable: true,
        grow: 0.3,
      },
    ];
  } else if (f === "rep prest") {
    columns = [
      {
        name: "Fecha",
        selector: (row) =>
          `${moment(row.ptm_fechasol).utcOffset("+0300").format("DD/MM/YYYY")}`,
        sortable: true,
        grow: 0.1,
      },

      {
        name: "Contrato",
        selector: (row) => `${row.ptm_ficha}`,
        sortable: true,
        grow: 0.1,
      },

      {
        name: "Socio",
        selector: (row) => `${row.ptm_afi}`,
        sortable: true,
        grow: 0.2,
      },
      {
        name: "Renovacion",
        selector: (row) => `${row.ptm_renov}`,
        sortable: true,
        grow: 0.1,
      },
      {
        name: "Prestamo",
        selector: (row) => `$${row.ptm_prestamo}`,
        sortable: true,
        grow: 0.1,
      },
      {
        name: "Cuotas",
        selector: (row) => `${row.ptm_cuotas}`,
        sortable: true,
        grow: 0.1,
      },
      {
        name: "Cuo. Mensuas",
        selector: (row) => `$${row.ptm_valcuota}`,
        sortable: true,
        grow: 0.1,
      },
      {
        name: "Estado",
        selector: (row) => `${row.ptm_estado}`,
        sortable: true,
        grow: 0.1,
      },
      {
        name: "Operador",
        selector: (row) => `${row.operador}`,
        sortable: true,
        grow: 0.2,
      },
    ];
  }

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
    <>
      {listado.length === 0 ? (
        <div className="flex justify-center mt-5 mb-5 gap-8">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredItems}
          defaultSortField="name"
          striped
          pagination
          subHeader
          subHeaderComponent={subHeaderComponent}
        />
      )}
    </>
  );
};
