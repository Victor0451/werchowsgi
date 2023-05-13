import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import moment from 'moment';
import { Typography, Card, CardHeader } from "@material-tailwind/react";
import ModalAcciones from './ModalAcciones';
import ModalImpNotificaciones from './ModalImpNotificaciones';


const ListadoCasos = ({
    listado,
    camp,
    RegistrarGestion,
    handleChange,
    errores,
    usu

}) => {
    const columns = [

        {
            name: "Contrato",
            selector: row => `${row.contrato}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Socio",
            selector: row => `${row.apellido}, ${row.nombre}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Calle",
            selector: row => `${row.calle}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "N°",
            selector: row => `${row.nro_calle}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Barrio",
            selector: row => `${row.barrio}`,
            sortable: true,
            grow: 0.2
        },
        {
            name: "Deuda",
            selector: row => `${row.cuotasadeudadas}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Cuota",
            selector: row => `${row.cuota}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "Edad",
            selector: row => `${row.edad}`,
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
                    <ModalAcciones
                        row={row}
                        RegistrarGestion={RegistrarGestion}
                        handleChange={handleChange}
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
                Listado de Casos Asignados
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                <u>Campaña</u>: {camp}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                <u>Total de Casos</u>: {listado.length}
            </Typography>

            <div className='mt-5 mb-5 border-2 p-4'>
                <Typography variant="h5" color="blue-gray">
                    Opciones
                </Typography>

                <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-6'>

                    <ModalImpNotificaciones
                        casos={listado}
                        usu={usu}
                    />

                </div>
            </div>

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
    )
}

export default ListadoCasos