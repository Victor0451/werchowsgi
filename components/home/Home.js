import React, { useEffect, useState } from 'react'
import Alertas from './Alertas'
import { AccesosDirectos } from './AccesosDirectos'
import { Typography, Card, CardHeader } from "@material-tailwind/react";


export const Home = ({
    noticia
}) => {

    return (

        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">

                <Alertas
                    noticia={noticia}
                />
                <hr className=' border-2' />
                <AccesosDirectos />

            </CardHeader>
        </Card>

    )
}


