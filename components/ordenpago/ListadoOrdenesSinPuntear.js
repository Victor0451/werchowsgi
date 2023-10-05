import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { ArrowLeftCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";

const ListadoOrdenesSinPuntear = ({
  listado,
  checkOrden,
  deleteCheckOrden,
  f,
}) => {
  let columns = [
    {
      name: "Sucursal",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.SUC === "O" ? (
            <>Otero </>
          ) : row.SUC === "W" ? (
            <>C.Central</>
          ) : row.SUC === "L" ? (
            <>Palpala</>
          ) : row.SUC === "R" ? (
            <>Perico</>
          ) : row.SUC === "C" ? (
            <>El Carmen</>
          ) : row.SUC === "P" ? (
            <>San Pedro</>
          ) : null}
        </>
      ),
    },

    {
      name: "Fecha",
      selector: (row) => `${moment(row.FECHA).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "N° Orden",
      selector: (row) => `${row.ORDEN}`,
      sortable: true,
      grow: 0.6,
    },
    {
      name: "Importe",
      selector: (row) => `${row.IMPORTE}`,
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

export default ListadoOrdenesSinPuntear;
