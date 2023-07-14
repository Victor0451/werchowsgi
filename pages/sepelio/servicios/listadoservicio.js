import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import useSWR from 'swr'
import { confirmAlert } from 'react-confirm-alert';
import moment from 'moment';
import { registrarHistoria } from '@/libs/funciones';
import { FormNuevoServicio } from '@/components/sepelio/servicios/FormNuevoServicio';
import Router from 'next/router';
import ListadoServicios from '@/components/sepelio/servicios/ListadoServicios';

function ListadoServicio(props) {

    const [listado, guardarListado] = useState([])
    const [noData, guardarNoData] = useState(false)


    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerServicios = async () => {

        await axios.get('/api/sepelio/servicios', {
            params: {
                f: 'traer servicios'
            }
        })
            .then(res => {

                if (res.data.length > 0) {
                    
                    guardarListado(res.data)
                    guardarNoData(false)

                } else if (res.data.length === 0) {

                    toast.info("No hay servicios registrados")
                    guardarNoData(true)

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al generar el listado")
            })

    }

    useSWR("/api/sepelio/ataudes", traerServicios);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <ListadoServicios
                            listado={listado}
                            usu={usu}
                            noData={noData}

                        />
                    </>
                )

            }

        </>
    );
}

export default ListadoServicio;