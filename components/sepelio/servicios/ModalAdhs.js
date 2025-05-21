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
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";

export default function ModalAdhs({ listado, usu, regAdh }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  let columns = [
    {
      name: "#",
      button: true,
      grow: 0.1,
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Adherente",
      selector: (row) => `${row.APELLIDOS}, ${row.NOMBRES}`,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "DNI",
      selector: (row) => `${row.NRO_DOC}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Edad",
      selector: (row) => `${row.EDAD}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Nacimiento",
      selector: (row) =>
        `${moment(row.NACIMIENTO).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Plan",
      selector: (row) => `${row.PLAN}${row.SUB_PLAN}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Alta",
      selector: (row) =>
        `${moment(row.ALTA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Vigencia",
      selector: (row) =>
        `${moment(row.VIGENCIA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
            <>
              <ArrowLeftCircleIcon
                color="#0288d1"
                className="butlist mt-px h-6 w-6"
                onClick={() => {
                  regAdh(row);
                  handleOpen();
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
    <Fragment>
      <Button
        color="blue"
        onClick={() => {
          handleOpen();
        }}
      >
        Adherentes
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
        <DialogHeader>Listado de Ataudes</DialogHeader>
        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
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
