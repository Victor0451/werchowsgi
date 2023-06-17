import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import useSWR from 'swr'
import { FormNuevoPrestamo } from '@/components/prestamos/FormNuevoPrestamo';
import { confirmAlert } from 'react-confirm-alert';
import moment from 'moment';
import { registrarHistoria } from '@/libs/funciones';

export default function NuevoPrestamo() {

    let contratoRef = React.createRef()
    let legajoRef = React.createRef()
    let sueldoNetoRef = React.createRef()
    let antiRef = React.createRef()

    const [ficha, guardarFicha] = useState(null)
    const [capital, guardarCapital] = useState([])
    const [planCuotas, guardarPlanCuotas] = useState([])
    const [tasas, guardarTasas] = useState([])
    const [errores, guardarErrores] = useState(null)
    const [alertas, guardarAlertas] = useState(null)
    const [planSelec, guardarPlanSelec] = useState("")
    const [capSelec, guardarCapSelec] = useState("")
    const [renova, guardarRenova] = useState("")
    const [capADev, guardarCapADev] = useState(0)
    const [couPrest, guardarCuoPrest] = useState(0)
    const [flag, guardarFlag] = useState(false)
    const [capiNoAut, guardarCapiNoAut] = useState(true)


    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const buscarFicha = async () => {

        guardarErrores(null)
        guardarAlertas(null)

        let hc = contratoRef.current.value

        if (hc === "") {

            guardarErrores("Debes ingresar un N° de socio")

        } else {


            await axios.get('/api/prestamos', {
                params: {
                    f: 'traer poli',
                    hc: hc
                }
            })
                .then(res => {

                    if (res.data && res.data.GRUPO === 6) {

                        guardarFicha(res.data)

                    } else {

                        toast.warning("El socio que estas buscando no es policia")
                        guardarAlertas("El socio que estas buscando no es policia")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al traer la ficha")
                })

        }


    }

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
                guardarCapiNoAut(false)
            }
        } else if (f === 'renova') {

            guardarRenova(value)

        }

    }

    const registrarPrestamo = async () => {


        let data = {
            fechacarga: moment().format('YYYY-MM-DD'),
            fechasol: moment().format('YYYY-MM-DD'),
            operador: usu.codigo,
            ficha: ficha.CONTRATO,
            legajo: legajoRef.current.value,
            anti: antiRef.current.value,
            renova: renova,
            capital: capSelec,
            cuotas: planSelec,
            valcuota: couPrest,
            neto: sueldoNetoRef.current.value,
            estado: "PENDIENTE",
            codptmleg: `${ficha.CONTRATO}-${moment().format("YYYY-MM-DD")}`,
            ptm_afi: `${ficha.APELLIDOS}, ${ficha.NOMBRES}`,
            capinoaut: capiNoAut,
            f: 'reg prestamo'
        }

        if (data.legajo === "") {

            guardarErrores("Debe ingresa el legajo del policia.")

        } else if (data.anti === "") {

            guardarErrores("Debe ingresar la antigüedad del policia en su trabajo.")

        } else if (data.neto === "") {

            guardarErrores("Debe ingresar el sueldo neto del policia.")

        } else if (data.renova === "") {

            guardarErrores("Debe seleccionar si este subsidio es una renovacion o no.")

        } else {


            await confirmAlert({
                title: 'ATENCION',
                message: '¿Estas seguro que quieres registrar el subsidio?',
                buttons: [
                    {
                        label: 'Si',
                        onClick: () => {

                            axios.post(`/api/prestamos`, data)
                                .then(res => {

                                    if (res.status === 200) {

                                        toast.success("Se registro el subsidio con exito")

                                        let accionHis = `Se confecciono un prestamo del ${data.capital} en un plan de ${data.cuotas}, al afiliado ${data.ficha} - ${data.ptm_afi}`

                                        registrarHistoria(accionHis, usu.usuario)


                                    }

                                })
                                .catch(error => {
                                    console.log(error)
                                    toast.error("Ocurrio un error al registrar el subsidio")
                                })

                        }
                    },
                    {
                        label: 'No',
                        onClick: () => { }
                    }
                ]


            });
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

                    <FormNuevoPrestamo
                        contratoRef={contratoRef}
                        buscarFicha={buscarFicha}
                        errores={errores}
                        alertas={alertas}
                        ficha={ficha}
                        capital={capital}
                        planCuotas={planCuotas}
                        handleChange={handleChange}
                        registrarPrestamo={registrarPrestamo}
                        simularPrestamo={simularPrestamo}
                        flag={flag}
                        planSelec={planSelec}
                        capSelec={capSelec}
                        capADev={capADev}
                        couPrest={couPrest}
                        legajoRef={legajoRef}
                        antiRef={antiRef}
                        sueldoNetoRef={sueldoNetoRef}
                    />
                )
            }

        </>
    )
}
