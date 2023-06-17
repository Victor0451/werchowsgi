import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import useSWR from 'swr'
import moment from 'moment';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie'
import { CaratulaPrestamo } from '@/components/prestamos/CaratulaPrestamo';
import ReactToPrint from "react-to-print";
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


export default function Caratula() {

    let componentRef = React.createRef();

    const [prestamo, guardarPrestamo] = useState(null)
    const [socio, guardarSocio] = useState(null)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    let router = useRouter()
    if (router.query.idprest) {
        jsCookie.set("idprest", router.query.idprest)
    }

    const traerPrest = async () => {


        if (jsCookie.get("idprest")) {

            await axios.get('/api/prestamos', {
                params: {
                    id: jsCookie.get("idprest"),
                    f: 'prest id'
                }
            })
                .then(res => {

                    if (res.data) {
                        toast.success("Generando caratula")
                        guardarPrestamo(res.data)

                        axios.get('/api/prestamos', {
                            params: {
                                f: 'prest socio',
                                hc: res.data.ptm_ficha
                            }

                        })
                            .then(res1 => {

                                if (res1.data) {
                                    guardarSocio(res1.data)
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toast.error("Ocurrio un error al buscar los datos del socio")
                            })

                    } else if (!res.data) {

                        toast.info("No se encontro el prestamo seleccionado")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al consultar los datos")
                })



        }

    }

  
    useSWR("/api/prestamos", traerPrest);


    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (
                    <>

                        {prestamo && socio ? (

                            <>
                                <div id="todo" ref={(el) => (componentRef = el)}>
                                    <CaratulaPrestamo
                                        prestamo={prestamo}
                                        socio={socio}
                                    />
                                </div>

                                <Card className="h-full w-full p-4 mt-5 ">
                                    <CardHeader floated={false} shadow={false} className="rounded-none">
                                        <Typography variant="h4">Opciones</Typography>

                                        <div className=' flex justify-center mt-5'>
                                            <ReactToPrint
                                                trigger={() => (
                                                    <Button>
                                                        Imprimir{" "}
                                                    </Button>
                                                )}
                                                content={() => componentRef}
                                            />
                                        </div>
                                    </CardHeader>
                                </Card>

                            </>
                        ) : null
                        }
                    </>
                )

            }

        </>
    )
}
