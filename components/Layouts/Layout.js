import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import useUser from '@/hook/useUser';

export const Layout = ({
    children
}) => {

    const { user, isLoading } = useUser();


    return (
        <div className='div className="min-h-full"'>
            <Head>
                <title>WERCHOW - S.G.I.</title>

            </Head>

            <main>
               
                {
                    !user ? null
                        : (<Navbar />)
                }

                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
