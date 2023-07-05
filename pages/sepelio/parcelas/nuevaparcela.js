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
import { registrarHistoria } from '@/libs/funciones';
import { useRouter } from 'next/router'
import jsCookie from 'js-cookie'
import FormNuevaParcela from '@/components/sepelio/parcelas/FormNuevaParcela';


function NuevaParcela(props) {

    let cementerioRef = React.createRef()
    let parcelaRef = React.createRef()
    let manzanaRef = React.createRef()
    let loteRef = React.createRef()
    let lugaresRef = React.createRef()

    const [errores, guardarErrores] = useState(null)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const registrarParcela = async () => {

        guardarErrores(null)

        let parce = {

            parcela: parcelaRef.current.value,
            mza: manzanaRef.current.value,
            lote: loteRef.current.value,
            cementerio: cementerioRef.current.value,
            lugares: lugaresRef.current.value,
            operador: usu.usuario,
            fecha_alta: moment().format('YYYY-MM-DD'),
            asignada: false,
            f: 'nueva parcela'

        }

        if (parce.cementerio === "") {

            guardarErrores("Debes ingresar el cementerio al cual pertenece la parcela")

        } else if (parce.parcela === "") {

            guardarErrores("Debes ingresar la letra que identifica a la parcela")

        } else if (parce.mza === "") {

            guardarErrores("Debes ingresar la manzana de la parcela")

        } else if (parce.lote === "") {

            guardarErrores("Debes ingresar el lote de la parcela")

        } else {

            await axios.post(`/api/sepelio/parcelas`, parce)
                .then(res => {

                    if (res.status === 200) {

                        toast.success("Se registro la parcela con exito")

                        let accion = `Se registro una nueva parcela en el sistema. Parcela: ${parce.parcela}, manzana: ${parce.mza}, lote: ${parce.lote} perteneciente al cementerio: ${parce.cementerio}`

                        registrarHistoria(accion, usu.usuario)

                    }

                })
                .catch(error => {

                    console.log(error)
                    toast.error("Ocurrio un error al registrar la parcela")

                })

        }


    }

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>

                        <FormNuevaParcela
                            cementerioRef={cementerioRef}
                            parcelaRef={parcelaRef}
                            manzanaRef={manzanaRef}
                            loteRef={loteRef}
                            lugaresRef={lugaresRef}
                            errores={errores}
                            registrarParcela={registrarParcela}
                        />

                    </>
                )

            }

        </>
    );
}

export default NuevaParcela;