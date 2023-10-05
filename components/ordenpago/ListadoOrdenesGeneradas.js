import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import ExportarPadron from "./ExportarPadron";
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
  CheckCircleIcon,
  EyeIcon,
  EnvelopeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
const ListadoOrdenesGeneradas = ({
  listado,
  noData,
  usu,
  aprobarOrden,
  mandarMail,
  anularOrden,
}) => {
  let columns = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Orden Tipo",
      selector: (row) => `${row.tipo_orden}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "N° Orden",
      selector: (row) => `${row.norden}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Proveedor",
      selector: (row) => `${row.nombre}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.total}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador_carga}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Estado",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.estado === true && row.autorizado === false ? (
            <div>Pendiente</div>
          ) : row.estado === true && row.autorizado === true ? (
            <div>Autorizado</div>
          ) : row.estado === false && row.autorizado === false ? (
            <div>Anulado</div>
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
          <Link
            href={{
              pathname: "/ordenpago/imprimirorden",
              query: { idorden: row.idorden },
            }}
          >
            <EyeIcon color="#1565c0" className="butlist mt-px h-6 w-6" />
          </Link>

          <EnvelopeIcon
            className="butlist mt-px h-6 w-6"
            onClick={() => {
              mandarMail(row);
            }}
          />
          {row.autorizado === false ? (
            <>
              {usu.perfil === 1 || usu.perfil === 3 ? (
                <CheckCircleIcon
                  color="green"
                  className="butlist mt-px h-6 w-6"
                  onClick={() => aprobarOrden(row.idorden, row.norden)}
                />
              ) : null}

              <TrashIcon
                color="red"
                className="butlist mt-px h-6 w-6"
                onClick={() =>
                  anularOrden(row.idorden, row.norden, row.tipo_orden)
                }
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
        <Typography variant="h2">Listado de Ordenes Generadas</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Ordenes
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>

          <div className="mt-5 mb-5 border-2  rounded-xl p-4">
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

export default ListadoOrdenesGeneradas;
