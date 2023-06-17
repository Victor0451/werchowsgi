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

} from "@material-tailwind/react";
import { ListadoPrestamos } from './ListadoPrestamos';
import {
    InformationCircleIcon
} from "@heroicons/react/24/solid";

export const PrestamosOp = ({
    listado,
    usu,
    noData
}) => {


    return (
        <Card className="h-full w-full p-4 ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Typography variant="h2">Listado de Prestamos Realizados</Typography>

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
                            <ListadoPrestamos
                                listado={listado}
                                usu={usu}

                            />
                        )
                    }


                </div>


            </CardHeader>
        </Card>
    )
}
