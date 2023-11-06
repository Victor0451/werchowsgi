import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { ArrowLeftCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";

const ListadoDetalleOrden = ({ listado, checkOrden, deleteCheckOrden, f }) => {
  let columns = [
    {
      name: "N°",
      selector: (row, index) => `${index + 1}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Sucursal",
      button: true,
      grow: 0.2,
      cell: (row, index) => (
        <>
          {row.sucursal === "O" ? (
            <>Otero </>
          ) : row.sucursal === "W" ? (
            <>C.Central</>
          ) : row.sucursal === "L" ? (
            <>Palpala</>
          ) : row.sucursal === "R" ? (
            <>Perico</>
          ) : row.sucursal === "C" ? (
            <>El Carmen</>
          ) : row.sucursal === "P" ? (
            <>San Pedro</>
          ) : null}
        </>
      ),
    },

    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "N° Consulta",
      selector: (row) => `${row.nconsulta}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Servivio",
      selector: (row) => `${row.servicio}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Operador",
      selector: (row) => `${row.operador_carga}`,
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

export default ListadoDetalleOrden;
