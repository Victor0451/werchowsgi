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
import { ListPrestamosEmpleados } from '@/components/prestamos/ListPrestamosEmpleados';
import {

    Alert
} from "@material-tailwind/react";
import {

    InformationCircleIcon
} from "@heroicons/react/24/solid";


export default function ListadoPrestamosEmpleados() {

    const [listado, guardarListado] = useState([])
    const [listPagos, guardarListPagos] = useState([])
    const [noData, guardarNodata] = useState(false)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const tarerPrestamosEmp = async () => {

        guardarListado([])

        await axios.get('/api/prestamos', {
            params: {
                f: 'list prest emp'
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarListado(res.data)
                    guardarNodata(false)

                } else if (res.data.length === 0) {

                    guardarNodata(true)
                    toast.info("No hay prestamos registrados")

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al generar el listado")
            })
    }

    const estadoPrest = async (est, id) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres cambiar el estado de este prestamo?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let data = {
                            f: 'est prest emp',
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

                                    toast.success(`El prestamo fue ${toastMsg} con exito`)

                                    let accionHis = `Se cambio el estado del prestamo ID ${id} de 'PENDIENTE' a ${data.estado}.`

                                    registrarHistoria(accionHis, usu.usuario)

                                    tarerPrestamosEmp()

                                }
                            })
                            .catch(error => {

                                console.log(error)
                                toast.error("Ocurrio un error al actualizar el estado del prestamo")

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

    const listPrestPagos = async (id) => {

        await axios.get('/api/prestamos', {
            params: {
                f: 'list prest pagos',
                id: id
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarListPagos(res.data)

                } else if (res.data, length === 0) {

                    toast.info("Este prestamo no posee el cronograma de pagos generado")

                }

            })
            .catch(error => {
                console.log(error)

                toast.error("Ocurrio un error al generar el listado de pagos")
            })

    }

    const pagarCuota = async (idpago, cuota, valor, idprest) => {


        let data = {
            f: "cobro cuota prest",
            fecha_pago: moment().format('YYYY-MM-DD'),
            estado: true,
            operador: usu.usuario,
            id: idpago

        }


        await axios.put('/api/prestamos', data)
            .then(res => {

                if (res.status === 200) {

                    toast.success("Cuota cobrada con exito")

                    let accionHis = `Se cobro la cuota N° ${cuota} del prestamo ID ${idprest}, por un monto de ${valor}.`

                    registrarHistoria(accionHis, usu.usuario)

                    listPrestPagos(idprest)

                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al impactar la cuota cobrada en el sistema")
            })

    }

    useSWR("/api/prestamos", tarerPrestamosEmp);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>

                        <ListPrestamosEmpleados
                            listado={listado}
                            estadoPrest={estadoPrest}
                            usu={usu}
                            listPrestPagos={listPrestPagos}
                            listPagos={listPagos}
                            pagarCuota={pagarCuota}
                            noData={noData}
                        />


                    </>
                )

            }

        </>
    )
}
