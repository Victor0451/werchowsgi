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
  Spinner,
} from "@material-tailwind/react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";

export default function ModalServHistoricos({ listado, ServiciosHistoricos }) {
  console.log(listado);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    ServiciosHistoricos();
  };

  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "N° Nota Credito",
      selector: (row) => `${row.NRO_NOTACR}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha",
      selector: (row) => `${moment(row.FEC_FALLEC).format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Ficha",
      selector: (row) => `${row.CONTRATO}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fallecido",
      selector: (row) => `${row.EXINTO}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "DNI",
      selector: (row) => `${row.DNI_EXIN}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Lugar",
      selector: (row) => `${row.LUGAR}`,
      sortable: true,
      grow: 0.3,
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
      <Button
        color="blue"
        onClick={() => {
          handleOpen();
        }}
      >
        Servicios Historicos
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
        <DialogHeader>Listado de Servicios Historicos</DialogHeader>
        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
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
