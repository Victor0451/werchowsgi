import React, { useMemo } from "react";
import FilterComponent from "../../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";
import {
  PencilSquareIcon,
  InformationCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import Link from "next/link";
import { IconSolid } from "../../../libs/funciones";

const ListadoImputaciones = ({ listado, usu, eliminarImpu, calImpus }) => {
  let columns = [
    {
      name: "#",
      button: true,
      width: "50px",
      cell: (row, index) => <>{index + 1}</>,
    },
    {
      name: "Conceptos",
      selector: (row) => `${row.concepto}`,
      sortable: true,
      width: "300px",
    },
    {
      name: "Remun. Sujetas a Retencion",
      selector: (row) => `${row.remu_ren}`,
      sortable: true,
      width: "200px",
    },
    {
      name: "Remun. Sujetas Exentas",
      selector: (row) => `${row.remu_exe}`,
      sortable: true,
      width: "200px",
    },
    {
      name: "Descuentos",
      selector: (row) => `${row.desc}`,
      sortable: true,
      width: "200px",
    },

    {
      name: "Acciones",
      button: true,
      width: "150px",
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 ? (
            <>
              <TrashIcon
                color="red"
                className="butlist mt-px h-6 w-6"
                onClick={() => {
                  eliminarImpu(index);
                }}
              />
            </>
          ) : (
            <>No tienes acceso a las acciones</>
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
    <div className="w-full  p-4 border-2 rounded-xl mt-5">
      {listado.length === 0 ? (
        <>
          <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
            <Alert className="" color="blue" icon={<IconSolid />}>
              <Typography variant="h6" color="black">
                No hay ninguna imputacion registada.
              </Typography>
            </Alert>
          </div>
        </>
      ) : listado.length > 0 ? (
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

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Alert className="" color="green" icon={<IconSolid />}>
                <Typography variant="h6">Total de Remu. Ret.</Typography>

                <Typography color="black" className="mt-1 font-normal">
                  <u>Total a Pagar</u>: ${calImpus(listado, "rr")}
                </Typography>
              </Alert>
            </div>

            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Alert className="" color="green" icon={<IconSolid />}>
                <Typography variant="h6">Total de Remu. Exentas</Typography>

                <Typography color="black" className="mt-1 font-normal">
                  <u>Total a Pagar</u>: ${calImpus(listado, "re")}
                </Typography>
              </Alert>
            </div>

            <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
              <Alert className="" color="orange" icon={<IconSolid />}>
                <Typography variant="h6">Total de Descuentos</Typography>

                <Typography color="black" className="mt-1 font-normal">
                  <u>Total a Pagar</u>: ${calImpus(listado, "ds")}
                </Typography>
              </Alert>
            </div>
            <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
              <Alert className="" color="blue" icon={<IconSolid />}>
                <Typography variant="h6" color="black">
                  Total Neto a Cobrar: $
                  {parseFloat(calImpus(listado, "rr")) +
                    parseFloat(calImpus(listado, "re")) -
                    parseFloat(calImpus(listado, "ds"))}
                </Typography>
              </Alert>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ListadoImputaciones;
