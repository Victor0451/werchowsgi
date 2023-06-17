import React, { useMemo, Fragment, useState } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from '../../Layouts/FilterComponent';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Alert
} from "@material-tailwind/react";
import {
    BookOpenIcon,
    InformationCircleIcon
} from "@heroicons/react/24/solid";
import moment from 'moment';


export default function ModalHistorialAtaud({
    row,
    listado,
    traerHistorial
}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const columns = [
        {
            name: "Fecha Carga",
            selector: row => `${moment(row.fecha_carga).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Fecha Recepcion",
            selector: row => `${moment(row.fecha_recepcion).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.2
        },



        {
            name: "N° Remito",
            selector: row => `${row.remito}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Stock Anterior",
            selector: row => `${row.stock_anterior}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Stock Nuevo",
            selector: row => `${row.stock_nuevo}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Operador",
            selector: row => `${row.operador}`,
            sortable: true,
            grow: 0.2
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

            <BookOpenIcon
                color='#0288d1'
                className="butlist mt-px h-7 w-7"
                onClick={() => {
                    handleOpen()
                    traerHistorial(row.idataud)
                }} />

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size="xl"
            >
                <DialogHeader>Historial</DialogHeader>
                <DialogBody divider className="h-[50rem] overflow-scroll">

                    {
                        listado.length === 0 ? (

                            <Alert
                                icon={
                                    <InformationCircleIcon
                                        strokeWidth={2}
                                        className="h-6 w-6"
                                    />
                                }
                            >
                                No hay historial registrado.
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

                        )
                    }



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