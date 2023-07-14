import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import {
    Card,
    CardHeader,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,
    Spinner
} from "@material-tailwind/react";

import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from 'moment';
import { toast } from 'react-toastify';
import ModalCronoPagos from './ModalCronoPagos';

export const ListPrestamosEmpleados = ({
    listado,
    estadoPrest,
    usu,
    listPrestPagos,
    listPagos,
    pagarCuota,
    noData
}) => {

    const columns = [

        {
            name: "Fecha",
            selector: row => `${moment(row.fecha_solicitud).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Empleado",
            selector: row => `${row.empleado}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Capital",
            selector: row => `$${row.capital}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Plan Cuotas",
            selector: row => `${row.plan_cuotas}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Cuo. Mensual",
            selector: row => `$${row.cuota_mensual}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "A Devolver",
            selector: row => `$${row.capital_dev}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Inicia - Termina",
            selector: row => `${row.inicia} - ${row.termina}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Estado",
            selector: row => `${row.estado}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "acciones",
            button: true,
            grow: 0.1,
            cell: (row, index) =>
            (
                <>
                    {
                        usu.perfil === 1 || usu.perfil === 3 ? (
                            <>

                                {
                                    row.estado === "PENDIENTE" ? (
                                        <>
                                            <CheckCircleIcon color='green' className="butlist mt-px h-7 w-7" onClick={() => estadoPrest('A', row.idprestamo)} />

                                            <XCircleIcon color='red' className="butlist mt-px h-7 w-7" onClick={() => estadoPrest('R', row.idprestamo)} />
                                        </>
                                    ) : row.estado === "APROBADO" ? (
                                        <ModalCronoPagos
                                            row={row}
                                            listPrestPagos={listPrestPagos}
                                            listado={listPagos}
                                            pagarCuota={pagarCuota}
                                        />
                                    ) : (
                                        <>
                                            Sin Acciones
                                        </>
                                    )
                                }

                            </>

                        ) : null
                    }




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
        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Listado de Prestamos</Typography>

                <div className='mt-4'>
                    <Typography variant="h5" color="blue-gray">
                        Prestamos Registrados
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        <u>Total</u>: {listado.length}
                    </Typography>

                    <div className='mt-5 mb-5 border-2 p-4'>
                        <Typography variant="h5" color="blue-gray">
                            Resumen
                        </Typography>

                        <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-5'>


                        </div>

                    </div>

                    {
                        noData === true ? (
                            <Alert
                                icon={
                                    <InformationCircleIcon
                                        strokeWidth={2}
                                        className="h-6 w-6"
                                    />
                                }
                            >
                                No hay prestamos registrados.
                            </Alert>
                        ) : (
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
                        )
                    }



                </div>


            </CardHeader>
        </Card>
    )
}
