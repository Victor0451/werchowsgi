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
import { ListadoAutos } from '@/components/sepelio/autos/ListadoAutos';

export default function Listadoautos() {

    let empresaRef = React.createRef();
    let nroPolizaRef = React.createRef();
    let vencimientoRef = React.createRef();
    let coberturaRef = React.createRef();


    const [autos, guardarAutos] = useState([])
    const [histNov, guardarHistNov] = useState([])
    const [errores, guardarErrores] = useState(null)
    const [alertas, guardarAlertas] = useState(null)
    const [autoSel, guardarAutoSel] = useState("")
    const [novedad, guardarNovedad] = useState("")
    const [noData, guardarNoData] = useState(false)

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerAutos = async () => {

        await axios.get(`/api/sepelio/autos`, {
            params: {
                f: "traer autos"
            }
        })
            .then((res) => {
                if (res.data.length > 0) {

                    guardarAutos(res.data)
                    guardarNoData(false)

                } else if (res.data.length === 0) {

                    guardarNoData(true)
                    toast.info("No hay autos registrados en el sistema")

                }
            })
            .catch(error => {
                toast.error("Ocurrio un error al generar el listado de autos")
                console.log(error)
            })

    }

    const renovPoliza = async (row) => {

        guardarErrores(null)
        guardarAlertas(null)

        let poli = {

            empresa: empresaRef.current.value,
            nro_poliza: nroPolizaRef.current.value,
            vencimiento: vencimientoRef.current.value,
            cobertura: coberturaRef.current.value,
            f: 'renov poliza',
            idauto: row.idauto
        }



        if (poli.empresa === "") {

            guardarErrores("Debes ingresar el nombre de la empresa aseguradora")

        } else if (poli.nro_poliza === "") {

            guardarErrores("Debes ingresar el numero de la poliza de seguro")

        } else if (poli.vencimiento === "") {

            guardarErrores("Debes ingresar la fecha del vencimiento de la poliza")

        } else if (poli.cobertura === "") {

            guardarErrores("Debes ingresar el tipo de cobertura de la poliza")

        } else {


            await axios.put(`/api/sepelio/autos`, poli)
                .then(res => {

                    if (res.status === 200) {

                        toast.success("Se renovo la poliza con exito")

                        traerAutos()

                        let accAuto = "Actualizacion de poliza."

                        regHistorialAuto(row.idauto, row.patente, usu.usuario, accAuto)

                        let accion = `Se actualizo la poliza de seguro del auto ${row.auto}, patente:${row.patente}.`

                        registrarHistoria(accion, usu.usuario)

                        guardarAlertas("Se actualizo la poliza con exito")

                    }

                })
                .catch(error => {

                    console.log(error)
                    toast.error("Ocurrio un error al renovar la poliza")

                })


        }
    }

    const handleChange = (f, value) => {


        if (f === 'auto') {

            guardarAutoSel(value)

        } else if (f === 'nov') {

            guardarNovedad(value.target.value)

        }

    }

    const regNovedad = async (row) => {

        guardarErrores(null)

        if (autoSel === "") {

            guardarErrores("Debes seleccionar un auto")

        } else if (novedad === "") {

            guardarErrores("Debes ingresar una novedad")

        } else {

            let car = autoSel;
            let fields = car.split("-");
            const chapa = `${fields[0]}-${fields[1]}`;
            const modelo = fields[2];

            const nov = {

                novedad: novedad,
                patente: chapa,
                auto: modelo,
                operador: usu.usuario,
                fecha: moment().format('YYYY-MM-DD'),
                f: "reg nov auto"

            }
            console.log(nov)

            await axios.post(`/api/sepelio/autos`, nov)
                .then(res => {

                    if (res.status === 200) {

                        toast.success("La novedad se registro con exito")

                        guardarAlertas("La novedad se registro con exito")

                        mandarMail(nov)

                        let accion = `Se registraron novedades en el auto modelo: ${nov.auto} - patente: ${nov.patente}`

                        registrarHistoria(accion, usu.usuario)

                        let accAuto = "Registro de novedades"

                        regHistorialAuto(row.idauto, nov.patente, usu.usuario, accAuto)
                    }
                })
                .catch(error => {
                    toast.error("Ocurrio un error al registrar la novedad")
                    console.log(error)
                })
        }
    }

    const mandarMail = (array) => {
        fetch("/api/mail/sepelio/mailnovedades", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(array),
        })
            .then((res) => {
                if (res.status === 200) {
                    toast.info(
                        "Se envio un email con la notificacion de la novedad"
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerHistNov = async (row) => {

        await axios.get('/api/sepelio/autos', {
            params: {
                f: 'Hist Nov',
                id: row.patente
            }
        })
            .then(res => {

                if (res.status === 200) {

                    guardarHistNov(res.data)

                }

            })
            .catch(error => {

                console.log(error)
                toast.error("Ocurrio un error al traer el historial de novedades")

            })

    }

    useSWR("/api/sepelio/autos", traerAutos);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <ListadoAutos
                            listado={autos}
                            usu={usu}
                            empresaRef={empresaRef}
                            nroPolizaRef={nroPolizaRef}
                            vencimientoRef={vencimientoRef}
                            coberturaRef={coberturaRef}
                            errores={errores}
                            alertas={alertas}
                            renovPoliza={renovPoliza}
                            handleChange={handleChange}
                            regNovedad={regNovedad}
                            traerHistNov={traerHistNov}
                            histNov={histNov}
                            noData={noData}
                        />
                    </>
                )

            }

        </>
    )
}
