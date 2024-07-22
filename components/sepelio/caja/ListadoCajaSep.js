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
  CardBody,
  Spinner,
} from "@material-tailwind/react";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  InformationCircleIcon,
  PrinterIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
import ExportarPadron from "./ExportarPadron";

export const ListadoCajaSep = ({ listado, noData, usu, eliminarCaja }) => {
  let columns = [
    {
      name: "ID",
      selector: (row) => `${row.idcaja}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Monto",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Empresa",
      selector: (row) => `${row.empresa}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Concepto",
      selector: (row) => `${row.concepto}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Gastos",
      selector: (row) => `$${row.gastos}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Total Caja",
      selector: (row) => `$${row.totalcaja}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Estado",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.estado === true ? (
            <div>Abierta</div>
          ) : row.estado === false ? (
            <div>Cerrada</div>
          ) : null}
        </>
      ),
    },

    {
      name: "acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
            <>
              {row.estado === true ? (
                <>
                  <Link
                    href={{
                      pathname: "/sepelio/caja/ingreso",
                      query: { idcaja: row.idcaja },
                    }}
                  >
                    <FaceSmileIcon
                      color="green"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <Link
                    href={{
                      pathname: "/sepelio/caja/gasto",
                      query: { idcaja: row.idcaja },
                    }}
                  >
                    <FaceFrownIcon
                      color="red"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <Link
                    href={{
                      pathname: "/sepelio/caja/impresion",
                      query: { idcaja: row.idcaja },
                    }}
                  >
                    <PrinterIcon
                      color="orange"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <TrashIcon
                    color="red"
                    className="butlist mt-px h-6 w-6"
                    onClick={() => eliminarCaja(row.idcaja)}
                  />
                </>
              ) : row.estado === false ? (
                <>
                  <Link
                    href={{
                      pathname: "/sepelio/caja/impresion",
                      query: { idcaja: row.idcaja },
                    }}
                  >
                    <PrinterIcon
                      color="orange"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>
                </>
              ) : null}
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
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Listado de Cajas Registradas</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Cajas
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
        </div>
      </CardHeader>

      <CardBody>
        {noData === true ? (
          <Alert
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            No hay cajas registradas.
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
      </CardBody>
    </Card>
  );
};
