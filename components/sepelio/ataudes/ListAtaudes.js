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
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
import ModalHistorialAtaud from "./ModalHistorialAtaud";
import ExportarPadron from "./ExportarPadron";

export const ListAtaudes = ({
  listado,
  usu,
  traerHistorial,
  historial,
  noData,
  calcTotal,
}) => {
  let columns = [
    {
      name: "Cod.",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.codigo !== null ? (
            <div>{row.codigo}</div>
          ) : row.codigo === null ? (
            <div>Sin Codigo</div>
          ) : null}
        </>
      ),
    },

    {
      name: "Ataud",
      selector: (row) => `${row.nombre}`,
      sortable: true,
      grow: 0.4,
    },

    {
      name: "Tipo",
      selector: (row) => `${row.tipo}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Medidas",
      selector: (row) => `${row.medidas}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Uso",
      selector: (row) => `${row.uso}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Stock",
      selector: (row) => `${row.stock}`,
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
            <div>Activo</div>
          ) : row.estado === false ? (
            <div>Baja</div>
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
                      pathname: "/sepelio/ataudes/actstock",
                      query: { idataud: row.idataud },
                    }}
                  >
                    <PencilSquareIcon
                      color="orange"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <ModalHistorialAtaud
                    row={row}
                    listado={historial}
                    traerHistorial={traerHistorial}
                  />
                </>
              ) : row.estado === false ? (
                <>Ataud dado de baja, sin acciones</>
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
        <Typography variant="h2">Listado de Ataudes Registrados</Typography>

        <div className="mt-4 rounded-xl">
          <div className="mt-5 mb-5 border-2 rounded-xl p-4">
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
            No hay ataudes registrados.
          </Alert>
        ) : (
          <>
            {listado.length === 0 ? (
              <div className="flex justify-center mt-5 mb-5 gap-8">
                <Spinner className="h-12 w-12" />
              </div>
            ) : (
              <div className="border-2 rounded-xl p-4">
                <Typography variant="h6" color="blue-gray">
                  Ataudes
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Total Ataudes</u>: {listado.length}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  <u>Total Stock</u>: {calcTotal(listado)}
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
              </div>
            )}
          </>
        )}
      </CardBody>
    </Card>
  );
};
