import React, { Fragment, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
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
import { DocumentIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import ReactToPrint from "react-to-print";

export default function ListadoUsos({ listado }) {
  let componentRef = React.createRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  let columns = [
    {
      name: "Sucursal",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.SUC === "O" ? (
            <>Otero </>
          ) : row.SUC === "W" ? (
            <>C.Central</>
          ) : row.SUC === "L" ? (
            <>Palpala</>
          ) : row.SUC === "R" ? (
            <>Perico</>
          ) : row.SUC === "C" ? (
            <>El Carmen</>
          ) : row.SUC === "P" ? (
            <>San Pedro</>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.FECHA).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "N° Orden",
      selector: (row) => `${row.ORDEN}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Servicio",
      selector: (row) => `${row.SERVICIO}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Importe",
      selector: (row) => `${row.IMPORTE}`,
      sortable: true,
      grow: 0.1,
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
      <Button color="#0288d1" size="sm" onClick={handleOpen}>
        Historial de Usos
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
        <DialogHeader>Historial de Usos</DialogHeader>

        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
          <div className="border p-4 rounded-xl">
            <Typography variant="h5" color="blue-gray">
              Usos registrados
            </Typography>
            <Typography color="gray" className="mt-4 mb-4 font-normal">
              <u>Total</u>: {listado.length}
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
