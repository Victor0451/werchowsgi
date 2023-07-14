import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { Typography, Badge, Button, Tooltip, Spinner } from "@material-tailwind/react";


export const ListadoCampana = ({
    listado,
    camp,
    CasaCentralMG,
    CasaCentralGG,
    perico,
    palpala,
    sanPedro,
    crearCampana
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
                    Resumen
                </Typography>

                <div className=' mt-4 grid gap-6 mb-6 md:grid-cols-5'>

                    <div>
                        <Badge content={`${CasaCentralMG.length}`} withBorder>
                            <Tooltip content="Asignar Campaña" placement="bottom-start">
                                <Button onClick={() => crearCampana(CasaCentralMG, camp, 'mgalian')}>Campaña: Maria</Button>
                            </Tooltip>
                        </Badge>
                    </div>

                    <div>
                        <Badge content={`${CasaCentralGG.length}`} withBorder>
                            <Tooltip content="Asignar Campaña" placement="bottom-start">
                                <Button onClick={() => crearCampana(CasaCentralGG, camp, 'ladorno')}>Campaña: Lucia</Button>
                            </Tooltip>
                        </Badge>
                    </div>

                    <div>
                        <Badge content={`${palpala.length}`} withBorder>
                            <Tooltip content="Asignar Campaña" placement="bottom-start">

                                <Button onClick={() => crearCampana(palpala, camp, 'palpala')}>Campaña: Palpala</Button>
                            </Tooltip>
                        </Badge>
                    </div>

                    <div>
                        <Badge content={`${perico.length}`} withBorder>
                            <Tooltip content="Asignar Campaña" placement="bottom-start">

                                <Button onClick={() => crearCampana(perico, camp, 'perico')}>Campaña: Perico</Button>
                            </Tooltip>
                        </Badge>
                    </div>

                    <div>
                        <Badge content={`${sanPedro.length}`} withBorder>
                            <Tooltip content="Asignar Campaña" placement="bottom-start">
                                <Button onClick={() => crearCampana(sanPedro, camp, 'sanpedro')}>Campaña: San Pedro</Button>
                            </Tooltip>
                        </Badge>
                    </div>

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
