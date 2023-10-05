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

export const ListadoNovell = ({ listado, usu, noData }) => {
  let columns = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha_recepcion).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Servicio",
      selector: (row) => `${row.servicio}`,
      sortable: true,
      grow: 0.3,
    },

    {
      name: "Solicitante",
      selector: (row) => `${row.apellido_sol}, ${row.nombre_sol}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Beneficiario",
      selector: (row) => `${row.apellido_ben}, ${row.nombre_ben}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Monto del Plan",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 2 ? (
            <>
              <Link
                href={{
                  pathname: "/ventas/planes/imprimirnovell",
                  query: { idnovell: row.idnovell },
                }}
              >
                <PrinterIcon color="black" className="butlist mt-px h-6 w-6" />
              </Link>
            </>
          ) : (
            <>No estas autorizado, sin acciones</>
          )}
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
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Listado de Novell's Registrados</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Novell's
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>

          <div className="mt-5 mb-5 border-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Resumen
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5"></div>
          </div>

          {noData === true ? (
            <Alert
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              No hay Novell's registrados.
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
