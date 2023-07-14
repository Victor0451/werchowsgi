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
  InformationCircleIcon,
  ClockIcon,
  BookmarkSquareIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
import ExportarPadron from "./ExportarPadron";
import ModalHistorialParcela from "./ModalHistorialParcela";

const ListParcelas = ({
  listado,
  noData,
  usu,
  historialParcelas,
  historial,
}) => {
  let columns = [
    {
      name: "Fecha Alta",
      selector: (row) => `${moment(row.fecha_alta).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Cementerio",
      selector: (row) => `${row.cementerio}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Parcela",
      selector: (row) => `${row.parcela}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Manzana",
      selector: (row) => `${row.mza}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Lote",
      selector: (row) => `${row.lote}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Lugares",
      selector: (row) => `${row.lugares}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Estado",
      button: true,
      grow: 0.1,
      filterText: true,
      cell: (row, index) => (
        <>
          {row.asignada === true ? (
            <div>Asignada</div>
          ) : row.asignada === false ? (
            <div>Sin Asignar</div>
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
          {}

          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
            <>
              <Link
                href={{
                  pathname: "/sepelio/parcelas/asignarlugar",
                  query: {
                    idparcela: row.idparcela,
                  },
                }}
              >
                <ArrowRightOnRectangleIcon
                  color="green"
                  className="butlist mt-px h-6 w-6"
                />
              </Link>

              <ModalHistorialParcela
                historialParcelas={historialParcelas}
                historial={historial}
                row={row}
              />
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
        <Typography variant="h2">Listado de Parcelas Registradas</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Parcelas
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
            No hay parcelas registradas.
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

export default ListParcelas;
