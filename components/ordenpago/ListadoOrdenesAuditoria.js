import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
  Drawer,
  IconButton,
  Textarea,
  ButtonGroup,
} from "@material-tailwind/react";
import {
  TrashIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";

const ListadoOrdenesAuditoria = ({
  listado,
  desbloquearUso,
  levantarAnulado,
  eliminarDuplicado,
  impLiqRef,
  modificarImpLiq,
}) => {
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
      name: "Contrato",
      selector: (row) => `${row.CONTRATO}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "DNI",
      selector: (row) => `${row.NRO_DOC}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Prestador",
      selector: (row) => `${row.PRESTADO}`,
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
      button: true,
      grow: 0.2,
      cell: (row, index) => (
        <div>
          <Input
            type="number"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[50px] min-w-[50px]" }}
            defaultValue={parseInt(row.IMP_LIQ)}
            inputRef={impLiqRef}
          />
        </div>
      ),
    },
    {
      name: "Anulado",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.ANULADO === 0 ||
          row.ANULADO === null ||
          row.ANULADO === false ||
          row.ANULADO === "" ||
          row.ANULADO === "FALSO" ? (
            <>NO</>
          ) : row.ANULADO === true || row.ANULADO === "VERDADERO" ? (
            <>SI</>
          ) : null}
        </>
      ),
    },
    {
      name: "Control",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.CONTROL === false || row.CONTROL === null ? (
            <>NO</>
          ) : row.CONTROL === true ? (
            <>SI</>
          ) : null}
        </>
      ),
    },
    {
      name: "N Orden",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.NORDEN === null ? (
            <>---</>
          ) : row.NORDEN ? (
            <>{row.NORDEN}</>
          ) : null}
        </>
      ),
    },
    {
      name: "Fecha Orden",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {row.FECHA_CONTROL === null ? (
            <>---</>
          ) : row.FECHA_CONTROL ? (
            <>{moment(row.FECHA_CONTROL).format("DD/MM/YYYY")}</>
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
          <CheckCircleIcon
            color="green"
            className="butlist mt-px h-6 w-6"
            onClick={() => levantarAnulado(row)}
          />
          <PencilIcon
            color="orange"
            className="butlist mt-px h-6 w-6"
            onClick={() => modificarImpLiq(row)}
          />
          <LockOpenIcon
            color="black"
            className="butlist mt-px h-6 w-6"
            onClick={() => desbloquearUso(row)}
          />
          <TrashIcon
            color="red"
            className="butlist mt-px h-6 w-6"
            onClick={() => eliminarDuplicado(row)}
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
    <div>
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
  );
};

export default ListadoOrdenesAuditoria;
