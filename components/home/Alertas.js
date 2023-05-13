import React from 'react'
import moment from 'moment'

const Alertas = ({
    noticia
}) => {
    return (
        <>
            {noticia ? (
                <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">Novedades</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                        {noticia.noticia}
                    </div>
                    <hr className='border-blue-300' />
                    <div className="flex mt-2">
                        <p className="mb-0 text-center">
                            {noticia.operador} - {moment.utc(noticia.fecha).format("DD/MM/YYYY")}
                        </p>
                    </div>
                </div>
            ) : (

                <div id="alert-border-1" className="flex p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
                    <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <div className="ml-3 text-sm font-medium">
                        No se registraron novedades.
                    </div>
                </div>
            )}
        </>

    )
}

export default Alertas