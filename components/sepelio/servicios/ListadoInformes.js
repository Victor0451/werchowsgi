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
} from "@material-tailwind/react";
import moment from "moment";

import {
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const ListadoInformes = ({ listado, estadoInforme, liquidarInforme }) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "80px",
      cell: (row, index) => <>{index + 1}</>,
    },
    // {
    //   name: "ID Servicio",
    //   selector: (row) => `${row.idservicio}`,
    //   sortable: true,
    //   width: "80px",
    // },

    // {
    //   name: "ID Informe",
    //   selector: (row) => `${row.idinforme}`,
    //   sortable: true,
    //   width: "80px",
    // },
    {
      name: "ID Serv.",
      selector: (row) => `${row.idservicio}`,
      sortable: true,
      width: "95px",
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Extinto",
      selector: (row) => `${row.extinto}`,
      sortable: true,
      width: "250px",
    },

    {
      name: "Total Gastos",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.tareas && row.gastos ? (
            <div>{row.tareas + row.gastos}</div>
          ) : row.tareas && !row.gastos ? (
            <div>{row.tareas}</div>
          ) : !row.tareas && row.gastos ? (
            <div>{row.gastos}</div>
          ) : !row.tareas && !row.gastos ? (
            <div>0</div>
          ) : null}
        </>
      ),
    },

    {
      name: "Aprobado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.aprobado === 0 ? (
            <div>Pendiente</div>
          ) : row.aprobado === 2 ? (
            <div>Rechazado</div>
          ) : row.aprobado === 1 ? (
            <div>Aprobado</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Aprobacion",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.fecha_aprobado ? (
            <div>---</div>
          ) : row.fecha_aprobado ? (
            <div>{moment(row.fecha_aprobado).format("DD/MM/YYYY")}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Operdador Ap.",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {!row.operador_aprobado ? (
            <div>---</div>
          ) : row.operador_aprobado ? (
            <div>{row.operador_aprobado}</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === 0 ? (
            <div>Pendiente</div>
          ) : row.liquidado === 2 ? (
            <div>Rechazado</div>
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
            <div>{moment(row.fecha_liquidado).format("DD/MM/YYYY")}</div>
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
          {!row.operador_liquidado ? (
            <div>---</div>
          ) : row.operador_liquidado ? (
            <div>{row.operador_liquidado}</div>
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
          <Link
            href={{
              pathname: "/sepelio/servicios/informe",
              query: { idservicio: row.idservicio, f: "vista" },
            }}
          >
            <EyeIcon color="blue" className="butlist mt-px h-6 w-6" />
          </Link>
          <CheckCircleIcon
            color="green"
            className="butlist mt-px h-6 w-6 "
            onClick={() => estadoInforme("A", row.idinforme)}
          />

          <XCircleIcon
            color="red"
            className="butlist mt-px h-6 w-6 "
            onClick={() => estadoInforme("R", row.idinforme)}
          />

          <CurrencyDollarIcon
            color="orange"
            className="butlist mt-px h-6 w-6 "
            onClick={() => liquidarInforme(row.idinforme)}
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
        <Typography variant="h2">
          <u>Informes de Servicios Generados</u>
        </Typography>

        <div className="mt-6 border-2 rounded-xl p-4">
          <Typography variant="h4">Listado de Informes</Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>

          <>
            <DataTable
              columns={columns}
              data={filteredItems}
              defaultSortField="name"
              striped
              pagination
              subHeader
              subHeaderComponent={subHeaderComponent}
            />
          </>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ListadoInformes;
