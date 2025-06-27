import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import {
  CheckCircleIcon,
  XCircleIcon,
  PrinterIcon,
  FolderIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";
import Link from "next/link";

export const ListadoPrestamos = ({ listado, usu, estadoPrest }) => {
  const columns = [
    {
      name: "Fecha",
      selector: (row) =>
        `${moment(row.ptm_fechasol).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      width: "110px",
    },

    {
      name: "Socio",
      selector: (row) => `${row.ptm_afi}`,
      sortable: true,
      width: "250px",
    },

    {
      name: "Renov.",
      selector: (row) => `${row.ptm_renov}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Capital",
      selector: (row) => `$${row.ptm_prestamo}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Plan Cuotas",
      selector: (row) => `${row.ptm_cuotas}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Cuo. Mensual",
      selector: (row) => `$${row.ptm_valcuota}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Estado",
      selector: (row) => `${row.ptm_estado}`,
      sortable: true,
      width: "110px",
    },
    {
      name: "Operador",
      button: true,
      width: "110px",
      cell: (row, index) => (
        <>
          {row.ptm_op === 4 ? (
            <div>Maria Galian</div>
          ) : row.ptm_op === 97 ? (
            <div>Gisela Gimenez</div>
          ) : row.ptm_op === 8 ? (
            <div>Vanesa Gorosito</div>
          ) : row.ptm_op === 7 ? (
            <div>Marisa Carrizo</div>
          ) : row.ptm_op === 77 ? (
            <div>Silvia Juarez</div>
          ) : row.ptm_op === 3 ? (
            <div>Alejandra Tejerina</div>
          ) : row.ptm_op === 107 ? (
            <div>Lucia Adorno</div>
          ) : row.ptm_op === 125 ? (
            <div>Paula Duran</div>
          ) : null}
        </>
      ),
    },
    {
      name: "Acciones",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <div className="grid md:grid-cols-4 md:gap-6">
          {usu.perfil === 1 || usu.perfil === 3 ? (
            <>
              {row.ptm_estado === "PENDIENTE" ? (
                <>
                  <CheckCircleIcon
                    color="green"
                    className="butlist mt-px h-6 w-6 "
                    onClick={() => estadoPrest("A", row.ptm_id, row)}
                  />

                  <XCircleIcon
                    color="red"
                    className="butlist mt-px h-6 w-6 "
                    onClick={() => estadoPrest("R", row.ptm_id, row)}
                  />
                </>
              ) : null}
            </>
          ) : null}

          <Link
            href={{
              pathname: "/prestamos/caratula",
              query: { idprest: row.ptm_id },
            }}
          >
            <PrinterIcon color="#0288d1" className="butlist mt-px h-6 w-6" />
          </Link>

          <Link
            href={{
              pathname: "/prestamos/legajo",
              query: { idprest: row.ptm_id },
            }}
          >
            <FolderIcon color="orange" className="butlist mt-px h-6 w-6" />
          </Link>
        </div>
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
    <>
      <>
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
      </>
    </>
  );
};
