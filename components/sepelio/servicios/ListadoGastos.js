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
import { TrashIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";

const ListadoGastos = ({
  listado,
  delTarea,
  calcTotal,
  f,
  delGasto,
  liqItem,
}) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "80px",
      cell: (row, index) => <>{index + 1}</>,
    },

    {
      name: "Gasto",
      selector: (row) => `${row.gasto}`,
      sortable: true,
      width: "150px",
    },

    {
      name: "Observacion",
      button: true,
      width: "450px",
      cell: (row, index) => (
        <>
          {!row.observacion ? (
            <div>---</div>
          ) : row.observacion ? (
            <div>{row.observacion}</div>
          ) : null}
        </>
      ),
    },

    {
      name: "Importe",
      selector: (row) => `${row.importe}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Liquidado",
      button: true,
      width: "100px",
      cell: (row, index) => (
        <>
          {row.liquidado === false ? (
            <div>Pendiente</div>
          ) : row.liquidado === true ? (
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
          {f && f === "vista" ? (
            <CurrencyDollarIcon
              color="orange"
              className="butlist mt-px h-6 w-6 "
              onClick={() => liqItem("liquidar gasto individual", row.idgastos)}
            />
          ) : (
            <TrashIcon
              color="red"
              className="butlist mt-px h-6 w-6"
              onClick={() => delGasto(row.idgastos)}
            />
          )}
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
    <Card className="h-full w-full p-4 border-2 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h4">Gastos Registradas</Typography>

        <div className="">
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total</u>: {listado.length}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            <u>Total a Pagar</u>: ${calcTotal(listado, "g")}
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

export default ListadoGastos;
