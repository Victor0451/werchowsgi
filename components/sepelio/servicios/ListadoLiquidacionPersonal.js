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
import { TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";
import {
  CurrencyDollarIcon,
  InformationCircleIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { IconSolid } from "../../../libs/funciones";
import ModalHistorialLiquidacion from "./ModalHistorialLiquidacion";

const ListadoLiquidacionPersonal = ({
  tareas,
  guardias,
  tareasH,
  guardiasH,
  calcTotal,
  operador,
  pagarLiquidacion,
  liqItem,
  liquidarGuardia,
  usu,
  buscarHistorial,
}) => {
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

          {row.liquidado === 0 && usu.usuario !== "joaquini" ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liqItem("liquidar tarea individual", row.idtareas)}
            />
          ) : (
            <>Sin accion </>
          )}
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
    {
      name: "Acciones",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 && usu.usuario !== "joaquini" ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liquidarGuardia(row.idturno)}
            />
          ) : (
            <>Sin accion</>
          )}
        </>
      ),
    },
  ];

  return (
    <Card className="h-full w-full p-4 border-2 ">
      <CardBody floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <Typography variant="h3">
              Detalle de Liquidacion: {operador}
            </Typography>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 ">
            <ModalHistorialLiquidacion
              tareasH={tareasH}
              guardiasH={guardiasH}
              calcTotal={calcTotal}
              operador={operador}
              pagarLiquidacion={pagarLiquidacion}
              usu={usu}
              buscarHistorial={buscarHistorial}
            />
          </div>
        </div>

        {tareas.length === 0 ? (
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
                <Alert className="" color="orange" icon={<IconSolid />}>
                  <Typography variant="h5">Tareas a Liquidar</Typography>

                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total</u>: {calcTotal(tareas, "tcon")}
                  </Typography>
                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total a Pagar</u>: ${calcTotal(tareas, "t")}
                  </Typography>
                </Alert>
              </div>

              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <Alert className="" color="green" icon={<IconSolid />}>
                  <Typography variant="h5">Tareas Liquidadas</Typography>

                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total</u>: {calcTotal(tareas, "tconp")}
                  </Typography>
                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total a Pagar</u>: ${calcTotal(tareas, "tp")}
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
              <div className="flex justify-end">
                {usu.usuario !== "joaquini" ? (
                  <Button
                    color="green"
                    className=""
                    onClick={() => {
                      pagarLiquidacion("T");
                    }}
                  >
                    Liquidar todas las tareas
                  </Button>
                ) : null}
              </div>
              <DataTable
                columns={columns}
                data={tareas}
                defaultSortField="name"
                striped
                pagination
                subHeader
              />
            </div>
          </div>
        )}

        <hr className="border-2 mt-5 mb-5" />

        {guardias.length === 0 ? (
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
                <Alert className="" color="orange" icon={<IconSolid />}>
                  <Typography variant="h5">Guardias a Liquidar</Typography>

                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total</u>: {calcTotal(guardias, "gcon")}
                  </Typography>
                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total a Pagar</u>: ${calcTotal(guardias, "g")}
                  </Typography>
                </Alert>
              </div>

              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <Alert className="" color="green" icon={<IconSolid />}>
                  <Typography variant="h5">Guardias Liquidadas</Typography>

                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total</u>: {calcTotal(guardias, "gconp")}
                  </Typography>
                  <Typography color="black" className="mt-1 font-normal">
                    <u>Total a Pagar</u>: ${calcTotal(guardias, "gp")}
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
              <div className="flex justify-end">
                {usu.usuario !== "joaquini" ? (
                  <Button
                    color="green"
                    size="sm"
                    className=" "
                    onClick={() => {
                      pagarLiquidacion("G");
                    }}
                  >
                    Liquidar todas las guardias
                  </Button>
                ) : null}
              </div>

              <DataTable
                columns={columns2}
                data={guardias}
                defaultSortField="name"
                striped
                pagination
                subHeader
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <div className="text-center py-4 lg:px-4">
              <div
                className="p-2  bg-yellow-700 items-center text-black leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full  bg-yellow-700 uppercase px-2 py-1 text-xs font-bold mr-3">
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {" "}
                  MONTO FINAL PENDIENTE DE PAGO: $
                  {parseFloat(calcTotal(tareas, "t")) +
                    parseFloat(calcTotal(guardias, "g"))}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <div className="text-center py-4 lg:px-4">
              <div
                className="p-2 bg-green-700 items-center text-black leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-green-700 uppercase px-2 py-1 text-xs font-bold mr-3">
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {" "}
                  MONTO FINAL PAGADO: $
                  {parseFloat(calcTotal(tareas, "tp")) +
                    parseFloat(calcTotal(guardias, "gp"))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ListadoLiquidacionPersonal;
