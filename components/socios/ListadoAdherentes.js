import React, { useMemo } from "react";
import FilterComponent from "../Layouts/FilterComponent";
import DataTable from "react-data-table-component";
import moment from "moment";
import ModalBajaAdherente from "./ModalBajaAdherente";

const ListadoAdherentes = ({ listado, maestro, onRefresh }) => {
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
      name: "Fecha Nacimiento",
      selector: (row) =>
        `${moment(row.NACIMIENTO).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "DNI",
      selector: (row) => `${row.NRO_DOC}`,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Plan",
      selector: (row) => `${row.PLAN}${row.SUB_PLAN} `,
      sortable: true,
      grow: 0.1,
    },
    {
      name: "Fecha Alta",
      selector: (row) =>
        `${moment(row.ALTA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Fecha Vigencia",
      selector: (row) =>
        `${moment(row.VIGENCIA).utcOffset("+0300").format("DD/MM/YYYY")}`,
      sortable: true,
      grow: 0.2,
    },
    {
      name: "Estado Fox",
      button: true,
      grow: 0.1,
      cell: (row, index) => (
        <>
          {!row.BAJA ? (
            <>Activo</>
          ) : row.BAJA && row.FALLE === 999 ? (
            <>
              Fallecio -{" "}
              {moment(row.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
            </>
          ) : row.BAJA && row.FALLE !== 999 ? (
            <>
              Baja - {moment(row.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
            </>
          ) : null}
        </>
      ),
    },

  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleOpenModal = () => {
      setModalOpen(true);
    };

    return (
      <button
        key="delete"
        onClick={handleOpenModal}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Solicitar Baja ({selectedRows.length})
      </button>
    );
  }, [selectedRows]);

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
      <div className="flex justify-between items-center w-full">
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />

        {selectedRows.length > 0 && (
          <button
            onClick={() => setModalOpen(true)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Solicitar Baja ({selectedRows.length})
          </button>
        )}
      </div>
    );
  }, [filterText, resetPaginationToggle, selectedRows]);

  return (
    <div>
      {modalOpen && (
        <ModalBajaAdherente
          adherentes={selectedRows}
          maestro={maestro}
          onBajaConfirmada={() => {
            onRefresh();
            setToggleCleared(!toggleCleared);
            setSelectedRows([]);
            setModalOpen(false);
          }}
          open={modalOpen}
          setOpen={setModalOpen}
        />
      )}

      <DataTable
        columns={columns}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
        selectableRows
        selectableRowDisabled={(row) => row.ESTADO == 1}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
      />
    </div>
  );
};

export default ListadoAdherentes;
