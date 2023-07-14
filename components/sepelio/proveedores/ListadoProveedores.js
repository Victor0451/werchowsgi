import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Spinner,
} from "@material-tailwind/react";
import {
  FolderIcon,
  InformationCircleIcon,
  PrinterIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
import ExportarPadron from "./ExportarPadron";

const ListadoProveedores = ({ listado, usu, noData }) => {
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Razon Social",
      selector: (row) => `${row.razon}`,
      sortable: true,
      grow: 0.3,
    },

    {
      name: "CUIT",
      selector: (row) => `${row.cuit}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Domicilio",
      selector: (row) => `${row.domicilio}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Telefono",
      selector: (row) => (
        <>{!row.telefono ? <>No Registra</> : <>{row.telefono}</>}</>
      ),
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
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Listado de Proveedores Registrados</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Proveedores
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>

          <div className="mt-5 mb-5 border-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Opciones
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
              <ExportarPadron listado={listado} />
            </div>
          </div>

          {noData === true ? (
            <Alert
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              No hay proveedores registrados.
            </Alert>
          ) : (
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
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ListadoProveedores;
