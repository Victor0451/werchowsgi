import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


export const AccesosDirectos = () => {
    return (
        <div className='mt-4'>
            <Typography variant="h5" color="blue-gray">
                Accesos Directos
            </Typography>

            <div className="mt-4 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
                <Card className="mt-6 w-96">
                    <CardBody>
                        <ArrowRightCircleIcon className="text-blue-500 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Ficha Virtual
                        </Typography>
                        <Typography>
                            Este es un acceso rapido a la seccion que te permite ver la
                            ficha del socio, adherentes y pagos, emulando la funcion del fox.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link href="/socios/ficha/ficha">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Buscar Ficha
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody>
                        <ArrowRightCircleIcon className="text-blue-500 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Subir Archivos
                        </Typography>
                        <Typography>
                            Acceso rapido para subir archivos digitales al legajo virtual
                            del socio.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link href="/socios/legajovirtual/subirarchivo">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Subir Archivos
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody>
                        <ArrowRightCircleIcon className="text-blue-500 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Subir Archivos
                        </Typography>
                        <Typography>
                            Acceso rapido para subir archivos digitales al legajo virtual
                            del socio.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link href="/socios/legajovirtual/subirarchivo">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Subir Archivos
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

            </div>

        </div>
    )
}
