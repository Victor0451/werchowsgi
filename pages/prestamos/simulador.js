import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import { FormSimulador } from '@/components/prestamos/FormSimulador';
import useSWR from 'swr'

export default function Simulador() {

    const [capital, guardarCapital] = useState([])
    const [planCuotas, guardarPlanCuotas] = useState([])
    const [tasas, guardarTasas] = useState([])
    const [planSelec, guardarPlanSelec] = useState("")
    const [capSelec, guardarCapSelec] = useState("")
    const [alertas, guardarAlertas] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [flag, guardarFlag] = useState(false)
    const [capADev, guardarCapADev] = useState(0)
    const [couPrest, guardarCuoPrest] = useState(0)



    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerDatos = async () => {

        await axios.get('/api/prestamos', {
            params: {
                f: 'tasas'
            }

        })
            .then(res => {
                if (res.status === 200) {
                    guardarTasas(res.data)
                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al tarer las tasas")
            })


        await axios.get('/api/prestamos', {
            params: {
                f: 'capital'
            }

        })
            .then(res => {
                if (res.status === 200) {
                    guardarCapital(res.data)
                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al tarer el listado de capitales")
            })


        await axios.get('/api/prestamos', {
            params: {
                f: 'plan cuotas'
            }

        })
            .then(res => {
                if (res.status === 200) {
                    guardarPlanCuotas(res.data)
                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al tarer los planes de cuotas")
            })

    }

    const handleChange = (f, value) => {


        if (f === 'plan') {

            guardarPlanSelec(value)

        } else if (f === 'cap') {

            guardarAlertas(null)

            guardarCapSelec(value.capital)

            if (value.autorizacion === false) {
                guardarAlertas("ESTE CAPITAL REQUIERE SI O SI AUTORIZACION POR PARTE DE LA GERENCIA.")
                toast.warning("Este capital requiere autorizacion por parte de la gerencia")
            }
        }

    }

    const simularPrestamo = () => {

        guardarFlag(false);
        guardarErrores(null)

        if (capSelec === "") {

            guardarErrores("Debes Seleccionar un capital")

        } else if (planSelec === "") {

            guardarErrores("Debes Seleccionar un plan de cuotas")

        } else {

            let principal = parseInt(capSelec);

            let payments = parseInt(planSelec);

            let x = 0
            let monthly = 0

            let tasa = 0

            if (payments === 3) {

                tasa = tasas[0].tasa / 100 / 12

                x = Math.pow(1 + tasa, payments);
                monthly = ((principal * x * tasa) / (x - 1)).toFixed(0);

            } else if (payments === 6) {

                tasa = tasas[1].tasa / 100 / 12

                x = Math.pow(1 + tasa, payments);
                monthly = ((principal * x * tasa) / (x - 1)).toFixed(0);

            } else if (payments === 10) {

                tasa = tasas[2].tasa / 100 / 12

                x = Math.pow(1 + tasa, payments);
                monthly = ((principal * x * tasa) / (x - 1)).toFixed(0);

            } else if (payments === 12) {

                tasa = tasas[3].tasa / 100 / 12

                x = Math.pow(1 + tasa, payments);
                monthly = ((principal * x * tasa) / (x - 1)).toFixed(0);

            }


            guardarCuoPrest(monthly);

            let capadev = monthly * payments;

            guardarCapADev(capadev);

            guardarFlag(true);

        }
    }

    useSWR("/api/prestamos", traerDatos);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (
                    <FormSimulador
                        capital={capital}
                        planCuotas={planCuotas}
                        handleChange={handleChange}
                        simularPrestamo={simularPrestamo}
                        alertas={alertas}
                        flag={flag}
                        capADev={capADev}
                        couPrest={couPrest}
                        planSelec={planSelec}
                        capSelec={capSelec}
                        errores={errores}
                    />
                )
            }

        </>

    )
}
