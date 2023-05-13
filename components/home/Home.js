import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Alertas from './Alertas'
import { AccesosDirectos } from './AccesosDirectos'
import { Typography, Card, CardHeader } from "@material-tailwind/react";
import useWerchow from '@/hook/useWerchow';
import useUser from '@/hook/useUser';
import useSWR from 'swr'

export const Home = () => {

    const { isLoading } = useUser()

    const { usu } = useWerchow()

    const [noticia, guardarNoticia] = useState(null)

    const mostarNoticias = async (perfil) => {
        await axios
            .get(`/api/noticias`, {
                params: {
                    per: 2
                }
            })
            .then((res) => {
                const noticia = res.data;

                guardarNoticia(noticia);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useSWR('/api/noticias', mostarNoticias(usu.perfil))

    return (
        <>
            {isLoading === true ? <Skeleton />
                : (
                    <>
                        {!usu ? (
                            <Redirect />
                        ) : usu ? (

                            <Card className="h-full w-full">
                                <CardHeader floated={false} shadow={false} className="rounded-none">

                                    <Alertas
                                        noticia={noticia}
                                    />
                                    <hr className=' border-2' />
                                    <AccesosDirectos />

                                </CardHeader>
                            </Card>

                        ) : null}
                    </>
                )}
        </>
    )
}


