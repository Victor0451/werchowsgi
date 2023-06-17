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
import { FormNuevaCaja } from '@/components/sepelio/caja/FormNuevaCaja';

export default function NuevaCaja() {

    let montoRef = React.createRef()
    let ptoVentaRef = React.createRef()
    let nfacturaRef = React.createRef()


    const [facturas, guardarFacturas] = useState([])
    const [conceptos, guardarConceptos] = useState([])
    const [empresaSel, guardarEmpresaSel] = useState("")
    const [conceptoSel, guardarConceptoSel] = useState("")
    const [facturaSel, guardarFacturaSel] = useState("")
    const [detalleSel, guardarDetalleSel] = useState("")
    const [errores, guardarErrores] = useState("")

    const { usu } = useWerchow()

    const { isLoading } = useUser();

    const traerDatos = async () => {

        await axios.get('/api/sepelio/caja', {
            params: {
                f: 'traer facturas'
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarFacturas(res.data)

                } else if (res.data.length === 0) {

                    toast.info("No hay facturas registradas")

                }

            })
            .catch(error => {

                console.log(error)
                toast.error("Ocurrio un error al traer las facturas")

            })

        await axios.get('/api/sepelio/caja', {
            params: {
                f: 'traer conceptos'
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarConceptos(res.data)

                } else if (res.data.length === 0) {

                    toast.info("No hay conceptos registrados")

                }

            })
            .catch(error => {

                console.log(error)
                toast.error("Ocurrio un error al traer los conceptos")

            })

    }

    const handleChange = (flag, value) => {

        if (flag === "empresa") {

            guardarEmpresaSel(value);

        } else if (flag === "concepto") {

            guardarConceptoSel(value);

        } else if (flag === "tipofactura") {

            guardarFacturaSel(value);

        } else if (flag === "detalle") {

            guardarDetalleSel(value.target.value);

        }
    };

    const nuevaCaja = async () => {

        guardarErrores(null);

        const caja = {
            empresa: empresaSel,
            monto: montoRef.current.value,
            concepto: conceptoSel,
            detalle: detalleSel,
            fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
            tipofactura: facturaSel,
            ptoventa: ptoVentaRef.current.value,
            nfactura: nfacturaRef.current.value,
            operador: usu.usuario,
            estado: true,
            gastos: 0,
            totalcaja: montoRef.current.value,
            f: 'reg caja'
        };

        if (caja.empresa === "") {

            guardarErrores("Debes selecionar una empresa");

        } else if (caja.monto === "") {

            guardarErrores("Debes ingresar el monto de la habilitacion");

        } else if (caja.concepto === "") {

            guardarErrores("Debes selecionar un concepto");

        } else if (caja.tipofactura === "") {

            guardarErrores("Debes selecionar un tipo de factura");

        } else if (caja.monto === "") {

            guardarErrores("Debes ingresar un monto");

        } else {


            await axios
                .post(
                    `/api/sepelio/caja`,
                    caja
                )
                .then((res) => {
                    console.log(res.data)

                    if (res.status === 200) {

                        toast.success("Se habilito la caja con exito");

                        let accion = `Se habilito caja de sepelio N° ${res.data.idcaja} por un monto de $${caja.monto} bajo el concepto de ${caja.concepto}`

                        registrarHistoria(accion, usu.usuario)

                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Ocurrio un error al registrar la caja")
                });
        }



    };

    useSWR("/api/sepelio/caja", traerDatos);

    if (isLoading === true) return <Skeleton />

    return (
        <>
            {
                !usu ? (
                    <Redirect />
                ) : (

                    <>
                        <FormNuevaCaja
                            montoRef={montoRef}
                            ptoVentaRef={ptoVentaRef}
                            nfacturaRef={nfacturaRef}
                            facturas={facturas}
                            conceptos={conceptos}
                            handleChange={handleChange}
                            errores={errores}
                            nuevaCaja={nuevaCaja}

                        />

                    </>
                )

            }

        </>
    )
}
