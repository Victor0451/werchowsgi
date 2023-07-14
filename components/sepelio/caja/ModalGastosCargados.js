import React, { Fragment, useState, useMemo } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Alert,
    Input
} from "@material-tailwind/react";
import {
    DocumentIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import DataTable from "react-data-table-component";
import FilterComponent from '../../Layouts/FilterComponent';

export default function ModalGastosCargados({
    traerGastosCaja,
    listado
}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);


    let columns = [

        {
            name: "Fecha",
            selector: row => `${moment(row.fecha).format('DD/MM/YYYY HH:mm')}`,
            sortable: true,
            grow: 0.2
        },


        {
            name: "Empresa",
            selector: row => `${row.empresa}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Concepto",
            selector: row => `${row.concepto}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Pto Venta",
            selector: row => `${row.ptoventa}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "N° Factura",
            selector: row => `${row.nfactura}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Monto",
            selector: row => `$${row.total}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Operador",
            selector: row => `${row.operadortramite}`,
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
                color='blue'
                onClick={() => {
                    handleOpen()
                    traerGastosCaja()
                }}
            >
                Gastos Cargados
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
                <DialogHeader>Gastos Cargados</DialogHeader>
                <DialogBody divider={true} className="h-[45vw] overflow-scroll">

                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        defaultSortField="name"
                        striped
                        pagination
                        subHeader
                        subHeaderComponent={subHeaderComponent}
                    />

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

