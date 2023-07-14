import React, { Fragment, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from '../../Layouts/FilterComponent';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Alert,
    Select,
    Option,
    Textarea,
    Input

} from "@material-tailwind/react";
import {
    NewspaperIcon,
    InformationCircleIcon
} from "@heroicons/react/24/solid";
import moment from "moment";



export default function ModalNovedades({
    row,
    errores,
    alertas,
    listado,
    handleChange,
    regNovedad,
    traerHistNov,
    histNov,
}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    let columns = [

        {
            name: "Fecha",
            selector: row => `${moment(row.fecha).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Auto",
            selector: row => `${row.auto}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Patente",
            selector: row => `${row.patente}`,
            sortable: true,
            grow: 0.1
        },


        {
            name: "Novedad",
            selector: row => `${row.novedad}`,
            sortable: true,
            grow: 0.4
        },
        {
            name: "Operador",
            selector: row => `${row.operador}`,
            sortable: true,
            grow: 0.1
        },



    ];

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = histNov.filter(
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

            <NewspaperIcon color='green' className="butlist mt-px h-6 w-6"
                onClick={() => {
                    handleOpen();
                    traerHistNov(row);
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
                <DialogHeader>Registro de Novedades</DialogHeader>
                <DialogBody divider={true} className="h-[45vw] overflow-scroll">


                    <Alert
                        icon={
                            <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        }
                    >
                        <Typography className="font-medium">Atencion.</Typography>
                        <Typography variant="paragraph">Registro de novedades del vehiculo</Typography>
                    </Alert>

                    <div className='p-4 border-2 rounded-lg mt-6 '>

                        <Typography variant="h5" color="blue-gray" className="mb-6">
                            Novedades
                        </Typography>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Select
                                    label="Elige un vehiculo"
                                    animate={{
                                        mount: { y: 0 },
                                        unmount: { y: 25 },
                                    }}
                                    onChange={(value) => { handleChange('auto', value) }}
                                >

                                    {
                                        listado.map((a, index) => (
                                            <Option key={index} value={`${a.patente}-${a.auto}`}>{a.patente} - {a.auto}</Option>
                                        ))
                                    }




                                </Select>

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Textarea rows={5} size="md" label="Novedades" type="text" onChange={(value) => { handleChange('nov', value) }} />

                            </div>
                        </div>

                    </div>

                    <hr className="mt-5 mb-5 border-2" />

                    <div className='p-4 border-2 rounded-lg mt-6 '>
                        <Typography variant="h5" color="blue-gray" >
                            Historial de Novedades
                        </Typography>

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

                    {errores ? (

                        <Alert
                            color="red"
                            className="mt-5"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {errores}
                        </Alert>

                    ) : null}

                    {alertas ? (

                        <Alert
                            color="green"
                            className="mt-5"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {alertas}
                        </Alert>

                    ) : null}

                </DialogBody>
                <DialogFooter>

                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                            regNovedad(row)
                        }}
                    >
                        <span>Registrar</span>
                    </Button>

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
        </Fragment >
    );
}

