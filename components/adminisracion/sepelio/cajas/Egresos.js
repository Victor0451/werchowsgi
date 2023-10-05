import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "@/components/Layouts/FilterComponent";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";

const Egresos = ({ listado }) => {
  const columns = [
    {
      name: "N° Caja",
      selector: (row) => `${row.nro_caja}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Cuenta",
      selector: (row) => `${row.codigo}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Descripcion",
      selector: (row) => `${row.cuenta}`,
      sortable: true,
      grow: 0.4,
    },

    {
      name: "Factura",
      selector: (row) => `${row.tipo}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.1,
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

export default Egresos;
