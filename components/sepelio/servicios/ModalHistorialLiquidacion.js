import React, { Fragment, useState, useMemo } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Alert,
  Input,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import { IconSolid } from "../../../libs/funciones";
import {
  CurrencyDollarIcon,
  InformationCircleIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ModalHistorialLiquidacion({
  tareasH,
  gastosH,
  guardiasH,
  calcTotal,
  operador,
  pagarLiquidacion,
  usu,
  buscarHistorial,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  let columns = [
    {
      name: "#",
      button: true,
      width: "50px",
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      width: "80px",
    },

    {
      name: "Tarea",
      selector: (row) => `${row.tarea}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Inicio",
      selector: (row) => `${moment(row.inicio).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      width: "80px",
    },
    {
      name: "Monto",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 ? (
            <div>Pendiente</div>
          ) : row.liquidado === 1 ? (
            <div>Liquidado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Liquidacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_liquidacion ? (
            <div>---</div>
          ) : row.fecha_liquidacion ? (
            <div>
              {moment(row.fecha_liquidacion)
                .utcOffset("+0300")
                .format("DD/MM/YYYY")}
            </div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Liq.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operadorliq ? (
            <div>---</div>
          ) : row.operadorliq ? (
            <div>{row.operadorliq}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <Link
            href={{
              pathname: "/sepelio/servicios/informe",
              query: { idservicio: row.idservicio, f: "vista" },
            }}
            target="__blank"
          >
            <EyeIcon color="blue" className="butlist mt-px h-6 w-6 mr-1" />
          </Link>
        </>
      ),
    },
  ];

  let columns2 = [
    {
      name: "#",
      button: true,
      width: "80px",
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Lugar",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.lugar === "sv" ? (
            <div>Sala Velatoria</div>
          ) : row.lugar === "cc" ? (
            <div>Casa Central</div>
          ) : null}
        </>
      ),
    },

    {
      name: "Inicio",
      selector: (row) => `${moment(row.inicio).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      width: "150px",
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 ? (
            <div>Pendiente</div>
          ) : row.liquidado === 1 ? (
            <div>Liquidado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Liquidacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_liquidacion ? (
            <div>---</div>
          ) : row.fecha_liquidacion ? (
            <div>
              {moment(row.fecha_liquidacion)
                .utcOffset("+0300")
                .format("DD/MM/YYYY")}
            </div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Liq.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operadorliq ? (
            <div>---</div>
          ) : row.operadorliq ? (
            <div>{row.operadorliq}</div>
          ) : null}
        </>
      ),
    },
  ];

  let columns3 = [
    {
      name: "#",
      button: true,
      width: "50px",
      cell: (row, index) => <>{index + 1}</>,
    },

    {
      name: "Id Servicio",
      selector: (row) => `${row.idservicio}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      width: "90px",
    },

    {
      name: "Gasto",
      selector: (row) => `${row.gasto}`,
      sortable: true,
      width: "180px",
    },

    {
      name: "Monto",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      width: "130px",
    },
    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 ? (
            <div>Pendiente</div>
          ) : row.liquidado === 1 ? (
            <div>Liquidado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Liquidacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_liquidado ? (
            <div>---</div>
          ) : row.fecha_liquidado ? (
            <div>
              {moment(row.fecha_liquidado)
                .utcOffset("+0300")
                .format("DD/MM/YYYY")}
            </div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Liq.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operadorliq ? (
            <div>---</div>
          ) : row.operadorliq ? (
            <div>{row.operadorliq}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <Link
            href={{
              pathname: "/sepelio/servicios/informe",
              query: { idservicio: row.idservicio, f: "vista" },
            }}
            target="__blank"
          >
            <EyeIcon color="blue" className="butlist mt-px h-6 w-6 mr-1" />
          </Link>
        </>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

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
    <Fragment>
      <Button
        color="blue"
        onClick={() => {
          handleOpen();
          buscarHistorial();
        }}
      >
        Historial de Liquidaciones
      </Button>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xl"
      >
        <DialogHeader>Historial de Liquidaciones</DialogHeader>

        <DialogBody divider className="h-[45vw] overflow-scroll p-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Typography variant="h3">
                <u>Operador</u>: {operador}
              </Typography>
            </div>
          </div>

          {tareasH.length === 0 ? (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Tareas a Liquidar</Typography>
              <Alert color="orange" icon={<IconSolid />} className="mt-5 mb-5">
                El operador seleccionado no posee tareas a liquidar.
              </Alert>
            </div>
          ) : (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Tareas Registradas</Typography>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="green" icon={<IconSolid />}>
                    <Typography variant="h5">Tareas Liquidadas</Typography>

                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total</u>: {calcTotal(tareasH, "tconp")}
                    </Typography>
                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total a Pagar</u>: ${calcTotal(tareasH, "tp")}
                    </Typography>
                  </Alert>
                </div>

                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="blue" icon={<IconSolid />}>
                    Las tareas liquidadas se van ordenando y mostrando
                    automaticamente al final del listado.
                  </Alert>
                </div>
              </div>

              <div className=" border-2 rounded-xl p-4">
                <DataTable
                  columns={columns}
                  data={tareasH}
                  defaultSortField="name"
                  striped
                  pagination
                  subHeader
                />
              </div>
            </div>
          )}

          <hr className="border-2 mt-5 mb-5" />

          {gastosH.length === 0 ? (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Comisiones a Liquidar</Typography>
              <Alert color="orange" icon={<IconSolid />} className="mt-5 mb-5">
                El operador seleccionado no posee tareas a liquidar.
              </Alert>
            </div>
          ) : (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Comisiones Registradas</Typography>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="green" icon={<IconSolid />}>
                    <Typography variant="h5">Comisiones Liquidadas</Typography>

                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total</u>: {calcTotal(gastosH, "gconp")}
                    </Typography>
                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total a Pagar</u>: ${calcTotal(gastosH, "gp")}
                    </Typography>
                  </Alert>
                </div>

                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="blue" icon={<IconSolid />}>
                    Las comisiones liquidadas se van ordenando y mostrando
                    automaticamente al final del listado.
                  </Alert>
                </div>
              </div>

              <div className=" border-2 rounded-xl p-4">
                <DataTable
                  columns={columns3}
                  data={gastosH}
                  defaultSortField="name"
                  striped
                  pagination
                  subHeader
                />
              </div>
            </div>
          )}
          <hr className="border-2 mt-5 mb-5" />

          {guardiasH.length === 0 ? (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Guardias a Liquidar</Typography>
              <Alert color="orange" icon={<IconSolid />} className="mt-5 mb-5">
                El operador seleccionado no posee guardias a liquidar.
              </Alert>
            </div>
          ) : (
            <div className="border-2 rounded-xl p-4 mt-4 mb-4">
              <Typography variant="h4">Guardias Registradas</Typography>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="green" icon={<IconSolid />}>
                    <Typography variant="h5">Guardias Liquidadas</Typography>

                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total</u>: {calcTotal(guardiasH, "gconp")}
                    </Typography>
                    <Typography color="black" className="mt-1 font-normal">
                      <u>Total a Pagar</u>: ${calcTotal(guardiasH, "gp")}
                    </Typography>
                  </Alert>
                </div>

                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Alert className="" color="blue" icon={<IconSolid />}>
                    Las guardias liquidadas se van ordenando y mostrando
                    automaticamente al final del listado.
                  </Alert>
                </div>
              </div>

              <div className=" border-2 rounded-xl p-4">
                <DataTable
                  columns={columns2}
                  data={guardiasH}
                  defaultSortField="name"
                  striped
                  pagination
                  subHeader
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mt-6 mb-6 md:mb-0">
              <div className="text-center py-4 lg:px-4">
                <div
                  className="p-2 bg-green-700 items-center text-black leading-none lg:rounded-full flex lg:inline-flex"
                  role="alert"
                >
                  <span className="flex rounded-full bg-green-700 uppercase px-2 py-1 text-xs font-bold mr-3">
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  </span>
                  <span className="font-semibold mr-2 text-left flex-auto">
                    {" "}
                    MONTO FINAL PAGADO: $
                    {parseFloat(calcTotal(tareasH, "tp")) +
                      parseFloat(calcTotal(gastosH, "gp")) +
                      parseFloat(calcTotal(guardiasH, "gp"))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleOpen}
            className="ml-1"
          >
            <span>Cerrar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
