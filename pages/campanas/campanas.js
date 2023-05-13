import React from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import { GestionCampanas } from '@/components/campanas/GestionCampanas';
import useWerchow from '@/hook/useWerchow';


export default function Campanas() {

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    if (isLoading === true) return <Skeleton />

    return (

        <>
            {!usu ? (
                <Redirect />
            ) : usu ? (

                <GestionCampanas />

            ) : null}
        </>

    )
}

