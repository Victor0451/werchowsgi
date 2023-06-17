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
import { PrestamosPendientes } from '@/components/prestamos/PrestamosPendientes';
import { PrestamosOp } from '@/components/prestamos/PrestamosOp';

export default function ListadoPrestamos() {

    const [listado, guardarListado] = useState([])
    const [noData, guardarNodata] = useState(false)

    const traerPrestamos = async () => {

        guardarListado([])

        if (usu.perfil === 1 || usu.perfil === 3) {

            await axios.get('/api/prestamos', {
                params: {
                    f: 'list prest pendientes'
                }
            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado(res.data)
                        guardarNodata(false)

                    } else if (res.data.length === 0) {

                        toast.info("No hay subsidios registrados")
                        guardarNodata(true)

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al generar el listado")
                })

        } else if (usu.perfil !== 1 || usu.perfil !== 3) {

            await axios.get('/api/prestamos', {
                params: {
                    f: 'list prest',
                    desde: moment().startOf("month").format('YYYY-MM-DD'),
                    hasta: moment().endOf("month").format('YYYY-MM-DD'),
                    op: usu.codigo
                }
            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado(res.data)
                        guardarNodata(false)

                    } else if (res.data.length === 0) {

                        toast.info("No hay subsidios registrados")
                        guardarNodata(true)
                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al generar el listado")
                })

        }



    }

    const estadoPrest = async (est, id) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres cambiar el estado de este subsidio?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let data = {
                            f: 'est prest',
                            estado: '',
                            id: id
                        }

                        let toastMsg = ""


                        if (est === 'A') {

                            data.estado = 'APROBADO'
                            toastMsg = 'aprobado'

                        } else if (est === 'R') {

                            data.estado = 'RECHAZADO'
                            toastMsg = 'rechazado'

                        }


                        axios.put('/api/prestamos', data)
                            .then(res => {
                                if (res.status === 200) {

                                    toast.success(`El subsidio fue ${toastMsg} con exito`)

                                    let accionHis = `Se cambio el estado del subsidio ID ${id} de 'PENDIENTE' a ${data.estado}.`

                                    registrarHistoria(accionHis, usu.usuario)

                                    traerPrestamos()

                                }
                            })
                            .catch(error => {

                                console.log(error)
                                toast.error("Ocurrio un error al actualizar el estado del subsidio")

                            })

                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                        toastr.info("El subsidio fue cancelado", "ATENCION")

                    }
                }
            ]
        });




    }

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    useSWR("/api/prestamos", traerPrestamos);

    if (isLoading === true) return <Skeleton />


    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        {
                            usu.perfil === 1 || usu.perfil === 3 ? (

                                <PrestamosPendientes
                                    listado={listado}
                                    usu={usu}
                                    estadoPrest={estadoPrest}
                                    noData={noData}
                                />


                            ) : usu.perfil !== 1 || usu.perfil !== 3 ? (

                                <PrestamosOp
                                    listado={listado}
                                    usu={usu}
                                    noData={noData}

                                />

                            ) : null
                        }

                    </>
                )

            }

        </>
    )
}
