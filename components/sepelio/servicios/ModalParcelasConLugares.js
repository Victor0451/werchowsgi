import React, { Fragment, useState, useMemo, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Card,
    CardBody,
    Chip,
} from "@material-tailwind/react";
import {
    CheckCircleIcon,
    XCircleIcon,
} from "@heroicons/react/24/solid";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Layouts/FilterComponent";
import axios from "axios";
import { toast } from "react-toastify";

export default function ModalParcelasConLugares({ listado, usu, regParceConLugar }) {
    const [open, setOpen] = useState(false);
    const [lugaresOcupados, guardarLugaresOcupados] = useState({});
    const [parcelaExpandida, setParcelaExpandida] = useState(null);

    const handleOpen = () => setOpen(!open);

    // Cargar información de lugares ocupados para cada parcela
    // useEffect(() => {
    //     if (open && listado.length > 0) {
    //         cargarLugaresOcupados();
    //     }
    // }, [open, listado]);

    const cargarLugaresParcela = async (idparcela) => {
        if (lugaresOcupados[idparcela]) return; // Ya cargado

        try {
            const res = await axios.get("/api/sepelio/parcelas", {
                params: {
                    f: "traer historial parcela",
                    id: idparcela,
                },
            });

            const ocupados = res.data && res.data.length > 0 ? res.data.map(l => l.lugar) : [];

            guardarLugaresOcupados(prev => ({
                ...prev,
                [idparcela]: ocupados
            }));

        } catch (error) {
            console.log(error);
            guardarLugaresOcupados(prev => ({
                ...prev,
                [idparcela]: []
            }));
        }
    };

    const getLugaresDisponibles = (idparcela) => {
        const ocupados = lugaresOcupados[idparcela] || [];
        return [1, 2, 3].filter(lugar => !ocupados.includes(lugar));
    };

    const seleccionarLugar = (parcela, lugar) => {
        regParceConLugar(parcela, lugar);
        setParcelaExpandida(null);
        handleOpen();
    };

    const expandirParcela = (idparcela) => {
        if (parcelaExpandida === idparcela) {
            setParcelaExpandida(null);
        } else {
            setParcelaExpandida(idparcela);
            cargarLugaresParcela(idparcela);
        }
    };

    const LugaresVisual = ({ parcela }) => {
        const ocupados = lugaresOcupados[parcela.idparcela];
        const cargando = ocupados === undefined;
        const ocupadosSafe = ocupados || [];
        const disponibles = [1, 2, 3].filter(lugar => !ocupadosSafe.includes(lugar));
        const expandida = parcelaExpandida === parcela.idparcela;

        return (
            <div className="w-full py-2">
                <div className="flex flex-col gap-2">
                    {/* Círculos de lugares */}
                    <div className="flex items-center justify-start gap-2">
                        {[1, 2, 3].map((lugar) => {
                            const estaOcupado = ocupadosSafe.includes(lugar);
                            return (
                                <div
                                    key={lugar}
                                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${cargando ? "bg-gray-100 border-gray-400" :
                                            estaOcupado
                                                ? "bg-red-100 border-red-500"
                                                : "bg-green-100 border-green-500"
                                        }`}
                                    title={cargando ? "Verificar disponibilidad" : `Lugar ${lugar}: ${estaOcupado ? "Ocupado" : "Disponible"}`}
                                >
                                    {cargando ? (
                                        <span className="text-xs text-gray-500">?</span>
                                    ) : estaOcupado ? (
                                        <XCircleIcon className="h-5 w-5 text-red-500" />
                                    ) : (
                                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Texto de disponibilidad */}
                    <div>
                        <Typography variant="small" className="text-gray-600">
                            {cargando ? (
                                <span className="text-gray-600 font-medium">Seleccionar para ver</span>
                            ) : disponibles.length === 0 ? (
                                <span className="text-red-600 font-medium">Sin lugares</span>
                            ) : disponibles.length === 1 ? (
                                <span className="text-green-600 font-medium">1 disponible</span>
                            ) : (
                                <span className="text-green-600 font-medium">{disponibles.length} disponibles</span>
                            )}
                        </Typography>
                    </div>
                </div>

                {expandida && (
                    <div className="mt-3">
                        {cargando ? (
                            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
                                <Typography variant="small">Cargando disponibilidad...</Typography>
                            </div>
                        ) : disponibles.length > 0 ? (
                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <Typography variant="small" className="mb-2 font-semibold text-blue-gray-800">
                                    Seleccionar lugar:
                                </Typography>
                                <div className="flex gap-2">
                                    {disponibles.map((lugar) => (
                                        <Button
                                            key={lugar}
                                            size="sm"
                                            color="green"
                                            onClick={() => seleccionarLugar(parcela, lugar)}
                                        >
                                            Lugar {lugar}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                <Typography variant="small" color="red">
                                    No hay lugares disponibles en esta parcela
                                </Typography>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    let columns = [
        {
            name: "Parcela",
            selector: (row) => `${row.parcela}`,
            sortable: true,
            grow: 0.5,
        },
        {
            name: "Manzana",
            selector: (row) => `${row.mza}`,
            sortable: true,
            grow: 0.5,
        },
        {
            name: "Lote",
            selector: (row) => `${row.lote}`,
            sortable: true,
            grow: 0.5,
        },
        {
            name: "Cementerio",
            selector: (row) => `${row.cementerio}`,
            sortable: true,
            grow: 0.8,
        },
        {
            name: "Lugares",
            button: true,
            width: "200px",
            cell: (row) => <LugaresVisual parcela={row} />,
        },
        {
            name: "Acciones",
            button: true,
            width: "200px",
            center: true,
            cell: (row) => {
                const disponibles = getLugaresDisponibles(row.idparcela);
                return (
                    <>
                        {usu.perfil === 1 || usu.perfil === 3 || usu.perfil === 4 ? (
                            <Button
                                size="sm"
                                color={disponibles.length > 0 ? "blue" : "gray"}
                                disabled={disponibles.length === 0}
                                onClick={() => expandirParcela(row.idparcela)}
                            >
                                {parcelaExpandida === row.idparcela ? "Cerrar" : "Seleccionar"}
                            </Button>
                        ) : null}
                    </>
                );
            },
        },
    ];

    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = listado.filter(
        (item) =>
            JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <Fragment>
            <Button
                color="blue"
                onClick={() => {
                    handleOpen();
                }}
            >
                Parcelas
            </Button>

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size="xxl"
            >
                <DialogHeader>Seleccionar Parcela y Lugar</DialogHeader>
                <DialogBody divider={true} className="h-[45vw] overflow-scroll">
                    <div className="mb-4">
                        <Typography variant="small" color="gray">
                            <strong>Instrucciones:</strong> Haz clic en "Seleccionar" para ver los lugares disponibles de cada parcela.
                            Los círculos verdes indican lugares disponibles y los rojos lugares ocupados.
                        </Typography>
                    </div>

                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        defaultSortField="parcela"
                        striped
                        pagination
                        subHeader
                        subHeaderComponent={subHeaderComponent}
                        expandableRows={false}
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
