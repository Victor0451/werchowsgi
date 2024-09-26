import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";

import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Spinner,
} from "@material-tailwind/react";
import { FolderIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";

const ListadosReintegros = ({ listado, noData, calcTot }) => {
  let columns = [
    {
      name: "HC",
      selector: (row) => `${row.contrato}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Socio",
      selector: (row) => `${row.socio}`,
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
      name: "Entidad",
      selector: (row) => `${row.entidad}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "N° Orden",
      selector: (row) => `${row.norden}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha",
      selector: (row) =>
        `${moment(row.importe).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
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
    <Card className="h-full w-full p-4 mt-10 ">
      <CardBody floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Listado de Reintegros</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Reintegros Realizados
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Importe</u>: ${calcTot(listado)}
          </Typography>

          {noData === true ? (
            <Alert
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              No hay registros.
            </Alert>
          ) : (
            <>
              {listado.length === 0 ? (
                <div className="flex justify-center mt-5 mb-5 gap-8">
                  <Spinner className="h-12 w-12" />
                </div>
              ) : (
                <div className="border-2 rounded-xl p-4 mt-5">
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
              )}
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ListadosReintegros;
