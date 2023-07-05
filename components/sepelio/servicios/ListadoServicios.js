import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from '../../Layouts/FilterComponent';
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
import { FolderIcon, InformationCircleIcon, PrinterIcon } from "@heroicons/react/24/solid";
import moment from 'moment';
import Link from 'next/link';


const ListadoServicios = ({
    listado,
    usu,
    noData
}) => {
    let columns = [
        {
            name: "#",
            button: true,
            grow: 0.1,
            cell: (row, index) =>
            (
                <>
                    {index + 1}
                </>

            )
        },
        {
            name: "Difunto",
            selector: row => `${row.apellido}, ${row.nombre}`,
            sortable: true,
            grow: 0.3
        },

        {
            name: "DNI",
            selector: row => `${row.dni}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Causa Muerte",
            selector: row => `${row.motivo}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Tipo Serv.",
            selector: row => `${row.tipo_servicio}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Fecha Fallec.",
            selector: row => `${moment(row.fecha_fallecimiento).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Acciones",
            button: true,
            grow: 0.1,
            cell: (row, index) =>
            (
                <>
                    {
                        usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
                            <>

                                {
                                    row.estado === true ? (
                                        <>

                                            <Link

                                                href={{
                                                    pathname: '/sepelio/servicios/legajo',
                                                    query: { idservicio: row.idservicio },
                                                }}
                                            >
                                                <FolderIcon color='orange' className="butlist mt-px h-6 w-6" />
                                            </Link>

                                            <Link

                                                href={{
                                                    pathname: '/sepelio/servicios/imprimir',
                                                    query: { idservicio: row.idservicio },
                                                }}
                                            >
                                                <PrinterIcon color='black' className="butlist mt-px h-6 w-6" />
                                            </Link>

                                        </>
                                    ) : row.estado === false ? (
                                        <>
                                            Vehiculo dado de baja, sin acciones
                                        </>
                                    ) : null
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
                <Typography variant="h2">Listado de Servicios Registrados</Typography>

                <div className='mt-4'>
                    <Typography variant="h5" color="blue-gray">
                        Servicios
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
                                No hay autos registrados.
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
        </Card >
    )
};

export default ListadoServicios;