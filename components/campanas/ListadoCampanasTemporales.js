import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { Typography, Badge, Button, Tooltip, Spinner } from "@material-tailwind/react";
import ModalAccionesTemp from './ModalAccionesTemp';


export const ListadoCampanaTemporales = ({
    listado,
    handleChange,
    RegistrarGestion,
    errores,
}) => {

    const columns = [

        {
            name: "Contrato",
            selector: row => `${row.CONTRATO}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Socio",
            selector: row => `${row.APELLIDOS}, ${row.NOMBRES}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Calle",
            selector: row => `${row.CALLE}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "N°",
            selector: row => `${row.NRO_CALLE}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Barrio",
            selector: row => `${row.BARRIO}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Cuota",
            selector: row => `${row.IMPORTE}`,
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

                    <ModalAccionesTemp
                        row={row}
                        handleChange={handleChange}
                        RegistrarGestion={RegistrarGestion}
                        errores={errores}
                    />

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
        <div className='mt-4'>
            <Typography variant="h5" color="blue-gray">
                Campañas Temporales
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                <u>Campaña</u>: Temporal
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                <u>Total de Casos</u>: {listado.length}
            </Typography>

            <div className='mt-5 mb-5 border-2 p-4'>
                <Typography variant="h5" color="blue-gray">
                    Resumen
                </Typography>

                <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-5'>


                </div>

            </div>

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

        </div>
    )
}
