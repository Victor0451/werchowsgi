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
} from "@material-tailwind/react";
import {
  PrinterIcon,
  ClockIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import Link from "next/link";

export default function ModalHistorialRecibos({
  listado,
  traerHistorialRec,
  idlegajo,
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
      name: "Fecha",
      selector: (row) => `${moment(row.fecha).format("DD/MM/YYYY")}`,
      sortable: true,
    },

    {
      name: "Periodo",
      selector: (row) => `${row.periodo}`,
      sortable: true,
    },
    {
      name: "Empresa",
      selector: (row) => `${row.empresa}`,
      sortable: true,
      grow: 3,
    },
    {
      name: "Total Liquidado",
      selector: (row) => `$${row.total_neto}`,
      sortable: true,
    },
    {
      name: "Fecha de Deposito",
      selector: (row) => `${moment(row.fecha_deposito).format("DD/MM/YYYY")}`,
      sortable: true,
    },

    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <Link
            href={{
              pathname: "/contabilidad/liquidaciones/impresion",
              query: { idrecibo: row.idrecibo },
            }}
          >
            <PrinterIcon color="orange" className="butlist mt-px h-6 w-6 " />
          </Link>
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
    <Fragment>
      <ClockIcon
        color="orange"
        className="butlist mt-px h-6 w-6 "
        onClick={() => {
          handleOpen();
          traerHistorialRec(idlegajo);
        }}
      />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xl"
      >
        <DialogHeader>Historial de Recibos</DialogHeader>
        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
          <Typography variant="h5" color="blue-gray">
            <u>Recibos Generados</u>: {listado.length}
          </Typography>

          <DataTable
            columns={columns}
            data={filteredItems}
            defaultSortField="name"
            striped
            pagination
            subHeader
            subHeaderComponent={subHeaderComponent}
          />
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
