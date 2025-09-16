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
import ModalGastosCargados from "./ModalGastosCargados";
import ModalPreGasto from "./ModalPreGasto";
import moment from "moment";
import Link from "next/link";

export const FormCargaGasto = ({
  caja,
  listado,
  traerGastosCaja,
  gastosCaja,
  facturas,
  conceptos,
  proveedores,
  servicios,
  operadores,
  handleChange,
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  montoIVARef,
  retIIBBRef,
  retggciasRef,
  percIVARef,
  totalRef,
  nuevoGasto,
  usu,
  eliminarGastos,
  acGast,
  totCaja,
  regGasto,
  cerrarCaja,
  errores,
  alertas,
  eliminarGastosRegistrados,
  calTotalGastos,
  reajustarValoresCaja2,
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
      name: "Operador",
      selector: (row) => `${row.operadortramite}`,
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
                  eliminarGastos(index);
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
        <Typography variant="h2">Registrar Gasto</Typography>

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
                <strong> Monto Habilitado:</strong> {caja.monto}
              </Alert>
            </div>

            <div className="relative w-full mb-6 group">
              <Alert
                color="orange"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                <strong> Gastos:</strong> {acGast}
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
            Detalle Gasto
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
            <div className="grid md:grid-cols-5 md:gap-6">
              <div className="relative w-full mb-6 group">
                <ModalGastosCargados
                  traerGastosCaja={traerGastosCaja}
                  listado={gastosCaja}
                  eliminarGastosRegistrados={eliminarGastosRegistrados}
                  calTotalGastos={calTotalGastos}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <ModalPreGasto
                  facturas={facturas}
                  conceptos={conceptos}
                  proveedores={proveedores}
                  servicios={servicios}
                  operadores={operadores}
                  handleChange={handleChange}
                  fechaRef={fechaRef}
                  nFacturaRef={nFacturaRef}
                  ptoVentaRef={ptoVentaRef}
                  montoIVARef={montoIVARef}
                  retIIBBRef={retIIBBRef}
                  retggciasRef={retggciasRef}
                  percIVARef={percIVARef}
                  totalRef={totalRef}
                  nuevoGasto={nuevoGasto}
                  errores={errores}
                  alertas={alertas}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Button color="orange" onClick={regGasto}>
                  Guardar Gastos
                </Button>
              </div>
              <div className="relative w-full mb-6 group">
                <Button
                  className=" bg-gray-900"
                  onClick={() => reajustarValoresCaja2(caja.idcaja)}
                >
                  Reajustar Caja
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
            Listado de gastos precargados
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
