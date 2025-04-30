import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../../Layouts/FilterComponent";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
  Checkbox,
  Spinner,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ExportarPadron from "./ExportarPadron";

const FormAdminServicios = ({
  listado,
  noData,
  servSinImpac,
  actImpactado,
}) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "80px",
      cell: (row, index) => (
        <>
          <div>{index + 1}</div>
        </>
      ),
    },

    {
      name: "Empresa",
      selector: (row) => `${row.empresa}`,
      sortable: true,
      width: "100px",
    },

    {
      name: "Ficha",
      selector: (row) => `${row.contrato}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Difunto",
      selector: (row) => `${row.difunto}`,
      sortable: true,
      width: "350px",
    },
    {
      name: "Seguro",
      selector: (row) => `${row.seguro}`,
      sortable: true,
      width: "80px",
    },
    {
      name: "Estado Ficha",
      selector: (row) => `${row.estado_ficha}`,
      sortable: true,
      width: "450px",
    },
    {
      name: "Fecha Fallecimiento",
      selector: (row) =>
        `${moment(row.fecha_fallecimiento).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "150px",
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
      <CardBody className="rounded-none">
        <Typography variant="h2">Servicios Sin Impactar</Typography>

        <div className="mt-4 mb-4">
          <Alert
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            Modulo para el control de los servicios cargados en el sistema WEB y
            que no estan impactados en el sistema FOX.
          </Alert>
        </div>

        {noData === true ? (
          <Alert
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            No hay servicios sin impactar.
          </Alert>
        ) : (
          <>
            {listado.length === 0 ? (
              <div className="flex justify-center mt-5 mb-5 gap-8">
                <Spinner className="h-12 w-12" />
              </div>
            ) : (
              <div className="border-2 rounded-xl p-4">
                <Typography variant="h6" color="blue-gray">
                  Servicios sin impactar
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
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
            )}
          </>
        )}

        <div className="mt-4 ">
          <div className="mt-5 mb-5 border-2 rounded-xl p-4">
            <Typography variant="h5" color="blue-gray">
              Opciones
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-3">
              <ExportarPadron listado={listado} />
              <Button
                color="gray"
                size="sm"
                className=""
                onClick={() => actImpactado("TW")}
              >
                Actualizar Maestro
              </Button>{" "}
              <Button color="gray" size="sm" onClick={() => actImpactado("AW")}>
                Actualizar Adherentes
              </Button>{" "}
              <Button color="gray" size="sm" onClick={() => actImpactado("TM")}>
                Actualizar Mutual
              </Button>{" "}
              <Button color="gray" size="sm" onClick={() => actImpactado("AM")}>
                Actualizar Mutual Adherentes
              </Button>
              <Button color="blue" size="sm" onClick={servSinImpac}>
                Buscar Servicios
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormAdminServicios;
