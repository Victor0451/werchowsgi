import React, { Fragment, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { Alert, Typography } from "@material-tailwind/react";
import {
  ArchiveBoxIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";

const ListadoAcciones = ({ listado }) => {
  const columns = [
    {
      name: "Accion",
      selector: (row) => `${row.accion}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Fecha",
      selector: (row) =>
        `${moment(row.fechaaccion).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Nueva Accion",
      selector: (row) => `${row.nuevaaccion}`,
      sortable: true,
      grow: 0.4,
    },
    {
      name: "Fecha",
      selector: (row) =>
        `${moment(row.fechanuevaaccion)
          .utcOffset("+0300")
          .format("DD/MM/YYYY")}`,
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
      {!listado || listado.length === 0 ? (
        <Alert
          icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
        >
          No hay acciones registradas.
        </Alert>
      ) : (
        <>
          <Typography variant="h5" color="blue-gray">
            Hsitorial de Acciones
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>
          <DataTable
            columns={columns}
            data={filteredItems}
            defaultSortField="name"
            striped
            pagination
            subHeader
            subHeaderComponent={subHeaderComponent}
          />
        </>
      )}
    </div>
  );
};

export default ListadoAcciones;
