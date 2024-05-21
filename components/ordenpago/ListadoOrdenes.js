import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { ArrowLeftCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import ModalModifImp from "./ModalModifImp";

const ListadoOrdenes = ({
  listado,
  checkOrden,
  deleteCheckOrden,
  f,
  updateImporte,
  nuImpor,
  alertas,
  errores,
  exito,
  detMed,
  fTot,
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
      name: "Fecha",
      selector: (row) => `${moment(row.FECHA).format("DD/MM/YYYY")}`,
      sortable: true,
      width: "110px",
    },

    {
      name: "Contrato",
      selector: (row) => `${row.CONTRATO}`,
      sortable: true,
      width: "110px",
    },

    {
      name: "DNI",
      selector: (row) => `${row.NRO_DOC}`,
      sortable: true,
      width: "110px",
    },
    {
      name: "Servicio",
      selector: (row) => `${row.SERVICIO}`,
      sortable: true,
      width: "110px",
    },
    {
      name: "N° Orden",
      selector: (row) => `${row.ORDEN}`,
      sortable: true,
      width: "110px",
    },
    {
      name: "Valor Orden",
      selector: (row) => `$${row.IMPORTE}`,
      sortable: true,
      width: "120px",
    },

    {
      name: "Val. Liquidacion",
      cell: (row, index) => (
        <>
          {fTot === "O" ? (
            `$${detMed.LIQUIDACION}`
          ) : fTot === "P" ? (
            <>Liquida valor de orden</>
          ) : null}
        </>
      ),

      sortable: true,
      width: "135px",
    },

    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {f === "List" ? (
            <>
              <ArrowLeftCircleIcon
                color="green"
                className="butlist mt-px h-6 w-6"
                onClick={() => checkOrden(row)}
              />

              {fTot === "P" ? (
                <ModalModifImp
                  row={row}
                  nuImpor={nuImpor}
                  updateImporte={updateImporte}
                  alertas={alertas}
                  errores={errores}
                  exito={exito}
                />
              ) : null}
            </>
          ) : f === "Check" ? (
            <TrashIcon
              color="red"
              className="butlist mt-px h-6 w-6"
              onClick={() => deleteCheckOrden(index)}
            />
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

export default ListadoOrdenes;
