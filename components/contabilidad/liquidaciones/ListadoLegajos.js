import React, { useMemo } from "react";
import FilterComponent from "../../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";
import {
  PencilSquareIcon,
  InformationCircleIcon,
  BookOpenIcon,
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
import ModalHistorialRecibos from "./ModalHistorialRecibos";

const ListadoLegajos = ({ listado, usu, traerHistorialRec, historialRec }) => {
  let columns = [
    // {
    //   name: "#",
    //   button: true,
    //   width: "50px",
    //   cell: (row, index) => <>{index + 1}</>,
    // },
    {
      name: "Legajo",
      selector: (row) => `${row.idlegajo}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Operador",
      selector: (row) => `${row.operador}`,
      sortable: true,
      width: "200px",
    },
    {
      name: "Ingreso",
      selector: (row) => `${moment(row.fecha_ingreso).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "100px",
    },
    {
      name: "Cuil",
      selector: (row) => `${row.cuil}`,
      sortable: true,
      width: "130px",
    },
    {
      name: "Categoria",
      selector: (row) => `${row.categoria}`,
      sortable: true,
      width: "140px",
    },
    {
      name: "Empresa",
      selector: (row) => `${row.empresa}`,
      sortable: true,
      width: "200px",
    },
    {
      name: "Estado",
      button: true,
      width: "120px",
      cell: (row, index) => (
        <>
          {row.estado === 1 ? <>Activo</> : row.estado === 0 ? <>Baja</> : null}
        </>
      ),
    },
    {
      name: "Acciones",
      button: true,
      width: "150px",
      cell: (row, index) => (
        <>
          {usu.perfil === 1 || usu.perfil === 3 ? (
            <>
              {row.estado === 1 ? (
                <>
                  <Link
                    href={{
                      pathname: "/contabilidad/liquidaciones/recibo",
                      query: { idlegajo: row.idlegajo },
                    }}
                  >
                    <BookOpenIcon
                      color="blue"
                      className="butlist mt-px h-6 w-6"
                    />
                  </Link>

                  <ModalHistorialRecibos
                    listado={historialRec}
                    traerHistorialRec={traerHistorialRec}
                    idlegajo={row.idlegajo}
                  />
                </>
              ) : row.estado === 0 ? (
                <>Legajo dado de baja, sin acciones.</>
              ) : null}
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
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Legajo de Empleados</Typography>

        <div className="w-full  p-4 border-2 rounded-xl mt-5">
          <Typography variant="h5">Listado de Legajos</Typography>

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
      </CardBody>
    </Card>
  );
};

export default ListadoLegajos;
