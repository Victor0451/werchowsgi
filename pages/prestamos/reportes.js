import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import useSWR from 'swr'
import { FormReportes } from '@/components/prestamos/FormReportes';


export default function Reportes() {

    let desdeRef = React.createRef()
    let hastaRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [reportes, guardarReportes] = useState([])
    const [listPrest, guardarListPrest] = useState([])

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const buscarPeriodo = async () => {

        guardarErrores(null)

        let desde = desdeRef.current.value
        let hasta = hastaRef.current.value


        if (desde === "" || hasta === "") {

            guardarErrores("Debes ingresar una fecha en los campos DESDE y HASTA")

        } else if (hasta < desde) {

            guardarErrores("La fecha del campo HASTA no puede ser menor a la fecha del campo DESDE")

        } else {

            await axios.get(`/api/prestamos`, {
                params: {
                    f: 'reporte prestamos',
                    desde: desde,
                    hasta: hasta
                }
            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarReportes(JSON.parse(res.data))

                    } else if (res.data.length === 0) {

                        toast.info("No hay datos registrados en este periodo")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al generar el reporte")
                })

            await axios.get(`/api/prestamos`, {
                params: {
                    f: 'rep list prestamos',
                    desde: desde,
                    hasta: hasta
                }
            })
                .then(res => {
                    if (res.data.length > 0) {

                        guardarListPrest(res.data)

                    } else if (res.data.length === 0) {

                        toast.info("No hay datos registrados en este periodo")

                    }
                })
        }

    }

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>

                        <FormReportes
                            desdeRef={desdeRef}
                            hastaRef={hastaRef}
                            errores={errores}
                            buscarPeriodo={buscarPeriodo}
                            reportes={reportes}
                            listPrest={listPrest}
                            usu={usu}
                            desde={desdeRef}
                            hasta={hastaRef}

                        />




                    </>
                )

            }

        </>
    )
}
