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
import Router from 'next/router';
import { ListAtaudes } from '@/components/sepelio/ataudes/ListAtaudes';

export default function ListadoAtaudes() {

    const [listado, guardarListado] = useState([])
    const [historial, guardarHistorial] = useState([])
    const [noData, guardarNoData] = useState(false)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerAtaudes = async () => {

        await axios.get(`/api/sepelio/ataudes`, {
            params: {
                f: "list ataudes"
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarListado(res.data)

                } else if (res.data.length === 0) {

                    toast.info("No hay ataudes registrados")

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al generar el listado")
                guardarNoData(true)

            })

    }

    const traerHistorial = async (id) => {

        await axios.get(`/api/sepelio/ataudes`,
            {
                params: {
                    idataud: id,
                    f: 'traer historial id'
                }
            })

            .then(res => {

                if (res.data.length > 0) {

                    guardarHistorial(res.data)
                    guardarNoData(false)

                } else if (res.data.length === 0) {

                    guardarNoData(true)
                    toast.info("No hay ataudes registrados")

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer el historial")
            })

    }

    useSWR("/api/sepelio/ataudes", traerAtaudes);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <ListAtaudes
                            usu={usu}
                            listado={listado}
                            traerHistorial={traerHistorial}
                            historial={historial}
                            noData={noData}
                        />
                    </>
                )

            }

        </>
    )
}
