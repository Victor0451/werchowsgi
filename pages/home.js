import React from 'react'
import useUser from '@/hook/useUser';
import { Redirect } from '@/components/auth/Redirect';
import { Home } from '@/components/home/Home';
import { Skeleton } from '@/components/Layouts/Skeleton';


export default function home() {

    const { user, isLoading } = useUser();

    if (isLoading === true) return <Skeleton />

    return (
        <>
            
            {!user ? (
                <Redirect />
            ) : user ? (
                <Home />
            ) : null}
        </>
    )
}
