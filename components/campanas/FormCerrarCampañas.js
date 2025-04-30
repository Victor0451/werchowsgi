import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import {
  Input,
  Alert,
  Typography,
  Select,
  Option,
  Textarea,
  Card,
  CardBody,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import moment from "moment";

const FormCerrarCampañas = ({ listado, cerrarCampana }) => {
  const columns = [
    {
      name: "ID Campaña",
      selector: (row) => `${row.idcampana}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
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
      name: "Campaña",
      selector: (row) => `${row.descripcion}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "N° de Casos",
      selector: (row) => `${row.cantidad}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          <Button
            color="red"
            size="sm"
            onClick={() => cerrarCampana(row.idcampana, row)}
          >
            <LockClosedIcon strokeWidth={2} className="h-3 w-3" />
          </Button>
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
    <Card className="h-full w-full p-4 mt-5 border-2 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Campañas Vigentes</Typography>

        <div className="border-2 rounded-xl p-4 mt-5">
          <Typography variant="h6 mt-4">
            Listado de campañas vigentes
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mb-4">
            <u>Total</u>: {listado.length}
          </Typography>

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
        </div>
      </CardBody>
    </Card>
  );
};

export default FormCerrarCampañas;
