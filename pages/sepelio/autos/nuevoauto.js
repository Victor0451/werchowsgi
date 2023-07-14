import React, { useState } from 'react'
import useUser from '@/hook/useUser'
import { Skeleton } from '@/components/Layouts/Skeleton'
import useWerchow from '@/hook/useWerchow';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Redirect } from '@/components/auth/Redirect';
import useSWR from 'swr'
import { confirmAlert } from 'react-confirm-alert';
import moment from 'moment';
import { registrarHistoria, regHistorialAuto } from '@/libs/funciones';
import { FormNuevoAuto } from '@/components/sepelio/autos/FormNuevoAuto';

export default function NuevoAuto() {

    const [errores, guardarErrores] = useState(null)

    let patenteRef = React.createRef();
    let autoRef = React.createRef();
    let kilometrosRef = React.createRef();
    let responsableRef = React.createRef();
    let motorRef = React.createRef();
    let chasisRef = React.createRef();
    let modeloRef = React.createRef();
    let empresaRef = React.createRef();
    let nroPolizaRef = React.createRef();
    let vencimientoRef = React.createRef();
    let coberturaRef = React.createRef();

    const registrarAuto = async () => {

        guardarErrores(null)

        const car = {

            patente: patenteRef.current.value,
            auto: autoRef.current.value,
            kilometros: kilometrosRef.current.value,
            responsable: responsableRef.current.value,
            nro_poliza: nroPolizaRef.current.value,
            empresa: empresaRef.current.value,
            vencimiento: moment(vencimientoRef.current.value).format('YYYY/MM/DD'),
            motor: motorRef.current.value,
            chasis: chasisRef.current.value,
            modelo: modeloRef.current.value,
            cobertura: coberturaRef.current.value,
            estado: true,
            operador: usu.usuario,
            f: 'nuevo auto'
        }


        if (car.patente === "") {
            guardarErrores("Debes ingresar la patente")
        } else if (car.auto === "") {
            guardarErrores("Debes ingresar la marca y el modelo del auto")
        } else if (car.kilometros === "") {
            guardarErrores("Debes ingresar el kilometraje del auto")
        } else if (car.motor === "") {
            guardarErrores("Debes ingresar el n° de serie del motor")
        } else if (car.chasis === "") {
            guardarErrores("Debes ingresar el n° de serie del chasis")
        } else if (car.modelo === "") {
            guardarErrores("Debes ingresar el modelo o año de fabricacion del auto")
        } else if (car.empresa === "") {
            guardarErrores("Debes ingresar la empresa aseguradora")
        } else if (car.nro_poliza === "") {
            guardarErrores("Debes ingresar el n° de poliza del seguro")
        } else if (car.vencimiento === "Invalid date") {
            guardarErrores("Debes ingresar el vencimiento de la poliza")
        } else if (car.cobertura === "") {
            guardarErrores("Debes ingresar el tipo de cobertura de la poliza")
        } else {


            await axios.post(`/api/sepelio/autos`, car)
                .then(res => {
                    if (res.status === 200) {

                        toast.success("El auto se registro con exito")


                        let accAuto = "Registro de nuevo automovil"

                        regHistorialAuto(res.data.idauto, car.patente, usu.usuario, accAuto)

                        let accion = `Se registro un nuevo auto en el sistema, patente:${car.patente} - modelo: ${car.auto}`

                        registrarHistoria(accion, usu.usuario)



                    }
                })
                .catch(error => {
                    toast.error("Ocurrio un error al registrar el auto")
                    console.log(error)
                })
        }


    }

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <FormNuevoAuto
                            errores={errores}
                            patenteRef={patenteRef}
                            autoRef={autoRef}
                            kilometrosRef={kilometrosRef}
                            responsableRef={responsableRef}
                            motorRef={motorRef}
                            chasisRef={chasisRef}
                            modeloRef={modeloRef}
                            empresaRef={empresaRef}
                            nroPolizaRef={nroPolizaRef}
                            vencimientoRef={vencimientoRef}
                            coberturaRef={coberturaRef}
                            registrarAuto={registrarAuto}
                        />
                    </>
                )

            }

        </>
    )
}
