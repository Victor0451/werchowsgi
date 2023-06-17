import React, { useMemo, Fragment, useState } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from '../Layouts/FilterComponent';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {
    CurrencyDollarIcon,
    CreditCardIcon
} from "@heroicons/react/24/solid";
import moment from 'moment';


export default function ModalCronoPagos({
    row,
    listPrestPagos,
    listado,
    pagarCuota
}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const columns = [

        {
            name: "Cuota",
            selector: row => `${row.cuota}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Fecha Cobro",
            selector: row => `${moment(row.fecha_cobro).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Importe",
            selector: row => `$${row.importe}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Fecha Pago",
            button: true,
            grow: 0.2,
            cell: (row, index) =>
            (
                <>
                    {
                        row.fecha_pago === null ? (
                            <>
                                -----
                            </>

                        ) : row.fecha_pago !== null ? (

                            <>
                                {moment(row.fecha_pago).format('DD/MM/YYYY')}
                            </>

                        ) : null
                    }

                </>

            )
        },

        {
            name: "Estado",
            button: true,
            grow: 0.2,
            cell: (row, index) =>
            (
                <>
                    {
                        row.estado === true ? (
                            <>
                                Pagado
                            </>

                        ) : row.estado === false ? (

                            <>
                                A cobrar
                            </>

                        ) : null
                    }

                </>

            )
        },
        {
            name: "Cobrado por",
            button: true,
            grow: 0.2,
            cell: (row, index) =>
            (
                <>
                    {
                        row.operador === null ? (
                            <>
                                ----
                            </>

                        ) : row.operador !== null ? (

                            <>
                                {row.operador}
                            </>

                        ) : null
                    }

                </>

            )
        },

        {
            name: "Acciones",
            button: true,
            grow: 0.2,
            cell: (row, index) =>
            (
                <>

                    {row.estado === false ? (

                        <CreditCardIcon color='green' className="butlist mt-px h-7 w-7" onClick={() => pagarCuota(row.idpago, row.cuota, row.importe, row.idprestamo)} />

                    ) : row.estado === true ? (

                        <>
                            Sin acciones
                        </>

                    ) : null}


                </>

            )
        }

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

            <CurrencyDollarIcon
                color='#0288d1'
                className="butlist mt-px h-7 w-7"
                onClick={() => {
                    handleOpen()
                    listPrestPagos(row.idprestamo)

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
                <DialogHeader>Cobranza de Cuotas</DialogHeader>
                <DialogBody divider className="h-[50rem] overflow-scroll">
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