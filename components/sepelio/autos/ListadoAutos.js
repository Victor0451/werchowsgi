import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
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
import ModalRenovPoliza from "./ModalRenovPoliza";
import Link from "next/link";
import ModalNovedades from "./ModalNovedades";

export const ListadoAutos = ({
  listado,
  usu,
  empresaRef,
  nroPolizaRef,
  vencimientoRef,
  coberturaRef,
  errores,
  alertas,
  renovPoliza,
  handleChange,
  regNovedad,
  traerHistNov,
  histNov,
  noData,
}) => {
  let columns = [
    {
      name: "Auto",
      selector: (row) => `${row.auto}`,
      sortable: true,
      grow: 0.3,
    },

    {
      name: "Patente",
      selector: (row) => `${row.patente}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "N° Motor",
      selector: (row) => `${row.motor}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "N° Chasis",
      selector: (row) => `${row.chasis}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Modelo",
      selector: (row) => `${row.modelo}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Kilometraje",
      selector: (row) => `${row.kilometros}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Responsable",
      selector: (row) => `${row.responsable}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
            <>
              {row.estado === 1 ? (
                <>
                  <ModalRenovPoliza
                    row={row}
                    empresaRef={empresaRef}
                    nroPolizaRef={nroPolizaRef}
                    vencimientoRef={vencimientoRef}
                    coberturaRef={coberturaRef}
                    errores={errores}
                    renovPoliza={renovPoliza}
                    alertas={alertas}
                  />
                  <Link
                    href={{
                      pathname: "/sepelio/autos/legajo",
                      query: { idauto: row.idauto },
                    }}
                  >
                    <FolderIcon
                      color="orange"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <ModalNovedades
                    row={row}
                    listado={listado}
                    handleChange={handleChange}
                    regNovedad={regNovedad}
                    alertas={alertas}
                    errores={errores}
                    traerHistNov={traerHistNov}
                    histNov={histNov}
                  />
                </>
              ) : row.estado === 0 ? (
                <>Vehiculo dado de baja, sin acciones</>
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
      <CardBody floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Listado de Autos Registrados</Typography>

        <div className="mt-4">
          <Typography variant="h5" color="blue-gray">
            Automoviles
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>

          <div className="mt-5 mb-5 border-2 rounded-xl p-4">
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
              No hay autos registrados.
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
      </CardBody>
    </Card>
  );
};
