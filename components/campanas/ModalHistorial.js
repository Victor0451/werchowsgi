import React, { Fragment, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Alert
} from "@material-tailwind/react";
import {
    ArchiveBoxIcon,
    InformationCircleIcon
} from "@heroicons/react/24/outline";

export default function ModalHistorial({
    row,
    historialBonif,
    listado

}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const columns = [

        {
            name: "Contrato",
            selector: row => `${row.CONTRATO}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Operador",
            selector: row => `${row.OPERADOR}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Bonificacion",
            selector: row => `${row.ANTERIOR}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Fecha",
            selector: row => `${row.FECHA}`,
            sortable: true,
            grow: 0.1
        },


    ];

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = listado.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
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
                    onFilter={e => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                />



            </>


        );
    }, [filterText, resetPaginationToggle]);

    return (
        <Fragment>

            <Button
                size="sm"
                color="gray"
                onClick={() => {
                    handleOpen()
                    historialBonif(row.contrato)
                }} className="ml-1" >
                <ArchiveBoxIcon strokeWidth={2} className="h-3 w-3" />
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
                <DialogHeader>Historial de Bonificaciones</DialogHeader>
                <DialogBody divider className="h-[50rem] overflow-scroll">

                    {!listado || listado.length === 0 ? (

                        <Alert
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            No hay bonificaciones registradas.
                        </Alert>

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