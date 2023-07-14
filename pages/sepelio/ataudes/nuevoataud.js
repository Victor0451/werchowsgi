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
import { FormNuevoAtaud } from '@/components/sepelio/ataudes/FormNuevoAtaud';
import Router from 'next/router';


export default function NuevoAtaud() {

    let nombreRef = React.createRef()
    let medidasRef = React.createRef()
    let stockRef = React.createRef()

    const [fabricantes, guardarFabricantes] = useState([])
    const [errores, guardarErrores] = useState(null)
    const [fabriSelec, guardarFabriSelec] = useState("")
    const [uso, guardarUso] = useState("")
    const [tipo, guardarTipo] = useState("")

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerFabricante = async () => {
        await axios
            .get(`/api/sepelio/ataudes`, {
                params: {
                    f: 'list fab ataud'
                }
            })
            .then((res) => {
                guardarFabricantes(res.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al traer el listado de fabricantes");
            });
    };

    const handleChange = (f, value) => {

        if (f === 'fabricante') {

            guardarFabriSelec(value)

        } else if (f === 'uso') {

            guardarUso(value)

        } else if (f === 'tipo') {

            guardarTipo(value)

        }

    }

    const regAtaud = async () => {

        const ataud = {
            nombre: nombreRef.current.value,
            tipo: tipo,
            medidas: medidasRef.current.value,
            uso: uso,
            fabricante: fabriSelec,
            stock: stockRef.current.value,
            fecha_alta: moment().format("YYYY-MM-DD"),
            operador: usu.usuario,
            estado: true,
            f: 'reg ataud'
        }

        if (ataud.nombre === "") {

            guardarErrores("Debes ingresar un nombre")

        } else if (ataud.fabricante === "") {

            guardarErrores("Debes seleccionar el fabricante del ataud")

        } else if (ataud.tipo === "") {

            guardarErrores("Debes seleccionar el tipo de ataud")

        } else if (ataud.uso === "") {

            guardarErrores("Debes seleccionar el tipo de uso que tendra el ataud")

        } else if (ataud.medidas === "") {

            guardarErrores("Debes ingresar las medidas del ataud")

        } else if (ataud.stock === "") {

            guardarErrores("Debes ingresar el stock con el que cuenta este ataud")

        } else {

            await axios.post(`/api/sepelio/ataudes`, ataud)
                .then(res => {
                    if (res.status === 200) {

                        toast.success("El ataud se registro correctamente")

                        let accion = `Se registro un nuevo ataud ID: ${res.data.idataud}, ${ataud.nombre}. Fabricante ${ataud.fabricante}, tipo ${ataud.tipo} en el sistema con un stock de ${ataud.stock}.`

                        registrarHistoria(accion, usu.usuario)

                        setTimeout(() => {
                            Router.reload('/sepelio/ataudes/nuevoataud')
                        }, 500);

                    }
                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al registrar el ataud")
                })

        }



    }

    useSWR("/api/sepelio/ataudes", traerFabricante);

    if (isLoading === true) return <Skeleton />


    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <FormNuevoAtaud
                            fabricantes={fabricantes}
                            errores={errores}
                            regAtaud={regAtaud}
                            handleChange={handleChange}
                            nombreRef={nombreRef}
                            medidasRef={medidasRef}
                            stockRef={stockRef}
                        />
                    </>
                )

            }

        </>
    )
}
