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
import { ListadoCajaSep } from '@/components/sepelio/caja/ListadoCajaSep';

export default function ListadoCajas() {

    const [listado, guardarListado] = useState([])
    const [noData, guardarNoData] = useState(false)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerCajas = async () => {

        await axios.get(`/api/sepelio/caja`, {

            params: {
                f: 'traer cajas'
            }

        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarNoData(false)
                    guardarListado(res.data)

                } else if (res.data.length === 0) {

                    guardarNoData(true)

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer el listado")
            })

    }

    useSWR("/api/sepelio/caja", traerCajas);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>

                        <ListadoCajaSep
                            listado={listado}
                            noData={noData}
                            usu={usu}
                        />

                    </>
                )

            }

        </>
    )
}
