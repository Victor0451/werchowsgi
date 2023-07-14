import React from 'react'

export const Redirect = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg">

            <div className="">
                <img
                    className=" max-h-full max-w-full"
                    src="img/logerr.jpg"
                    alt="No Registrado"
                />


            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm justify-center">
                <h1 className='text-gray-900 font-bold text-xl mb-2 mt-4'>
                    Se requiere autorizacion para navergar por el sistema. Haz click en el link para {""}
                    <a href='/' className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Iniciar Sesion
                    </a>
                </h1>
            </div>
        </div>
    )
}
