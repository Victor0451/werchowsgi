import React, { useMemo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { TrashIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import Link from "next/link";
import moment from "moment";
import ModalPreIngreso from "./ModalPreIngreso";
import ModalIngresosCargados from "./ModalIngresosCargados";

export const FormCargaIngreso = ({
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  totalRef,
  facturas,
  conceptos,
  listado,
  nuevoIngreso,
  cerrarCaja,
  eliminarIngreso,
  caja,
  acIng,
  totCaja,
  errores,
  handleChange,
  usu,
  regIngreso,
  alertas,
  ingresosCaja,
  calTotalIngresos,
  traerIngresosCaja
}) => {
  let columns = [
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
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
      name: "Pto Venta",
      selector: (row) => `${row.ptoventa}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "N° Factura",
      selector: (row) => `${row.nfactura}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Total",
      selector: (row) => `$${row.total}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
            <>
              <TrashIcon
                color="red"
                className="butlist mt-px h-6 w-6"
                onClick={() => {
                  eliminarIngreso(index);
                }}
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
      <CardBody className="rounded-none">
        <Typography variant="h2">Registrar Ingreso</Typography>

        {caja.estado === 1 ? (
          <div className="relative w-full mb-6 group mt-5 ">
            <Alert
              color="green"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong> La caja esta abierta</strong>{" "}
              <Button className="ml-5" onClick={cerrarCaja}>
                Cerrar Caja
              </Button>
            </Alert>
          </div>
        ) : caja.estado === 0 ? (
          <div className="relative w-full mb-6 group mt-5 ">
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>Caja Cerrada</strong>
            </Alert>
          </div>
        ) : null}

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Detalle Caja
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong> Monto Habilitado:</strong> {caja.monto + acIng}
              </Alert>
            </div>

            <div className="relative w-full mb-6 group">
              <Alert
                color="orange"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong> Ingresos:</strong> {acIng}
              </Alert>
            </div>

            <div className="relative w-full mb-6 group">
              {totCaja === 0 ? (
                <Alert
                  color="green"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong> Saldo:</strong> {caja.totalcaja}
                </Alert>
              ) : totCaja < 500 ? (
                <Alert
                  color="red"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong> Saldo:</strong> {totCaja} - ATENCION!, el saldo
                  disponible esta por terminarse.
                </Alert>
              ) : (
                <Alert
                  color="green"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong> Saldo:</strong> {totCaja}
                </Alert>
              )}
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5 border-2" />

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Detalle Ingreso
          </Typography>

          {caja.estado === false ? (
            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>
                Caja cerrada: no puedes realizar ningun movimiento
              </strong>
            </Alert>
          ) : (
            <div className="grid md:grid-cols-4 md:gap-6">
              <div className="relative w-full mb-6 group">
                <ModalIngresosCargados
                  listado={ingresosCaja}
                  calTotalIngresos={calTotalIngresos}
                  traerIngresosCaja={traerIngresosCaja}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <ModalPreIngreso
                  facturas={facturas}
                  conceptos={conceptos}
                  handleChange={handleChange}
                  fechaRef={fechaRef}
                  nFacturaRef={nFacturaRef}
                  ptoVentaRef={ptoVentaRef}
                  totalRef={totalRef}
                  errores={errores}
                  nuevoIngreso={nuevoIngreso}
                  alertas={alertas}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Button color="orange" onClick={regIngreso}>
                  Guardar Ingresos
                </Button>
              </div>
              <div className="relative w-full mb-6 group">
                <Link href={"/sepelio/caja/listadocajas"}>
                  <Button color="red">Cancelar</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <hr className="mt-5 mb-5 border-2" />

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Listado de Ingresos precargados
          </Typography>
          <div className="mt-6">
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
        </div>
      </CardBody>
    </Card>
  );
};
