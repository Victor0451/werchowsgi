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

const ListadoLiquidacionPersonal = ({
  tareas,
  guardias,
  calcTotal,
  operador,
  pagarLiquidacion,
  liqItem,
  liquidarGuardia,
}) => {
  console.log(tareas);
  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Tarea",
      selector: (row) => `${row.tarea}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Inicio",
      selector: (row) => `${moment(row.inicio).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Monto",
      selector: (row) => `$${row.monto}`,
      sortable: true,
      grow: 0.2,
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
            <div>{moment(row.fecha_liquidacion).format("DD/MM/YYYY")}</div>
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

          {row.liquidado === 0 ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liqItem("liquidar tarea individual", row.idtareas)}
            />
          ) : (
            <>Ac. Liq. </>
          )}
        </>
      ),
    },
  ];

  let columns2 = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      grow: 0.2,
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
      grow: 0.2,
    },
    {
      name: "Fin",
      selector: (row) => `${moment(row.fin).format("DD/MM/YYYY HH:mm")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Horas",
      selector: (row) => `${row.horas}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Importe",
      selector: (row) => `$${row.importe}`,
      sortable: true,
      grow: 0.1,
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
            <div>{moment(row.fecha_liquidacion).format("DD/MM/YYYY")}</div>
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
          {row.liquidado === 0 ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liquidarGuardia(row.idturno)}
            />
          ) : (
            <>Accion Liquidada </>
          )}
        </>
      ),
    },
  ];

  return (
    <Card className="h-full w-full p-4 border-2 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <Typography variant="h3">
              Detalle de Liquidacion: {operador}
            </Typography>
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 ">
            <Button color="green" className="" onClick={pagarLiquidacion}>
              Liquidar
            </Button>
          </div> */}
        </div>

        <div className="border-2 rounded-xl p-4 mt-4 mb-4">
          <Typography variant="h5">Tareas Realizadas</Typography>

          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {tareas.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total a Pagar</u>: ${calcTotal(tareas, "t")}
          </Typography>

          <DataTable
            columns={columns}
            data={tareas}
            defaultSortField="name"
            striped
            pagination
            subHeader
          />
        </div>

        <div className="border-2 rounded-xl p-4 mt-4 mb-4">
          <Typography variant="h5">Guardias Registradas</Typography>

          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {guardias.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total a Pagar</u>: ${calcTotal(guardias, "g")}
          </Typography>
          <DataTable
            columns={columns2}
            data={guardias}
            defaultSortField="name"
            striped
            pagination
            subHeader
          />
        </div>

        <div class="text-center py-4 lg:px-4">
          <div
            class="p-2 bg-blue-400 items-center text-white leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              {" "}
              EL MONTO TOTAL FINAL DE LA LIQUIDACION ES DE: $
              {parseFloat(calcTotal(tareas, "t")) +
                parseFloat(calcTotal(guardias, "g"))}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ListadoLiquidacionPersonal;
