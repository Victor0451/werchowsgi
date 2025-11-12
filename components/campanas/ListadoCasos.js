import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import moment from "moment";
import {
  Typography,
  Card,
  CardBody,
  Spinner,
  Alert,
  Button,
} from "@material-tailwind/react";

import ModalAcciones from "./ModalAcciones";
import ModalImpNotificaciones from "./ModalImpNotificaciones";
import ExportarPadron from "./ExportarPadron";
import ModalHistorial from "./ModalHistorial";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Select from "react-select";
import { nueavaaccion } from "../../array/array";

const ListadoCasos = ({
  listado,
  camp,
  RegistrarGestion,
  handleChange,
  errores,
  usu,
  historialBonif,
  historial,
  historialAcciones,
  historialAcc,
  f,
  filtrarAcciones,
  filNuAc,
  alertas,
  ejec,
}) => {
  const columns = [
    {
      name: "Contrato",
      selector: (row) => `${row.contrato}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Socio",
      selector: (row) => `${row.apellido}, ${row.nombre}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Calle",
      selector: (row) => `${row.calle}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "N°",
      selector: (row) => `${row.nro_calle}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Barrio",
      selector: (row) => `${row.barrio}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Deuda",
      selector: (row) => `${row.cuotasadeudadas}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Cuota",
      selector: (row) => `${row.cuota}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Edad",
      selector: (row) => `${row.edad}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <ModalAcciones
            row={row}
            RegistrarGestion={RegistrarGestion}
            handleChange={handleChange}
            errores={errores}
          />

          <ModalImpNotificaciones casos={row} usu={usu} f={"U"} />

          <ModalHistorial
            row={row}
            historialBonif={historialBonif}
            historial={historial}
            historialAcciones={historialAcciones}
            historialAcc={historialAcc}
          />
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
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mitad izquierda: Banner de filtro */}
          <div>
            {ejec === true && filNuAc !== "" && (
              <div className="h-full p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg shadow-sm flex items-center">
                {alertas ? (
                  <div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium mb-1"
                    >
                      ATENCION.
                    </Typography>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {alertas}
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium mb-1"
                    >
                      FILTRO ACTIVO
                    </Typography>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-bold"
                    >
                      📊 {filNuAc}
                    </Typography>
                  </div>
                )}
              </div>
            )}
            {!filNuAc ||
              (filNuAc === "" && (
                <div className="h-full p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
                  <Typography color="gray" className="text-center font-normal">
                    Sin filtros aplicados
                  </Typography>
                </div>
              ))}
          </div>

          {/* Mitad derecha: FilterComponent */}
          <div className="flex items-center">
            <FilterComponent
              onFilter={(e) => setFilterText(e.target.value)}
              onClear={handleClear}
              filterText={filterText}
            />
          </div>
        </div>
      </div>
    );
  }, [filterText, resetPaginationToggle, filNuAc, ejec]);

  return (
    <div className="mt-4">
      <Alert
        icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
        className="mt-5 mb-5"
      >
        ATENCIÓN, CAMBIO EN LA PLANIFICACIÓN DE LAS CAMPAÑAS. AHORA LA CAMPAÑA
        AT2 ES PARA 1001 CON TITULAR Y/O ADHERENTE MAYOR A 65 AÑOS Y LA CAMPAÑA
        DE RECUPERACIÓN ES PARA FICHAS CON INTEGRANTES MENORES A 65 AÑOS. POR
        ENDE, SU FORMA DE LIQUIDACIÓN SERA DIFERENTE.
      </Alert>

      <Card className="mb-6">
        <CardBody className="p-4">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Listado de Casos Asignados
              </Typography>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-1">
                <Typography color="gray" className="font-normal">
                  <span className="underline">Campaña</span>: {camp}
                </Typography>
                <Typography color="gray" className="font-normal">
                  <span className="underline">Total de Casos</span>:{" "}
                  {listado.length}
                </Typography>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-4 w-full md:w-auto">
              {f === "T" && (
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-full md:w-64">
                    <Select
                      className=" text-sm rounded-xl"
                      placeholder="Filtra por acciones"
                      options={nueavaaccion}
                      onChange={(value) => {
                        handleChange("filtro", value.label);
                      }}
                    />
                  </div>
                  <Button
                    size="sm"
                    color="blue"
                    onClick={() => {
                      filtrarAcciones();
                    }}
                  >
                    Buscar
                  </Button>
                </div>
              )}

              <div className="flex items-center gap-3 ml-auto">
                <ModalImpNotificaciones casos={listado} usu={usu} f={"T"} />
                <ExportarPadron listado={listado} camp={camp} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

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
    </div>
  );
};

export default ListadoCasos;
