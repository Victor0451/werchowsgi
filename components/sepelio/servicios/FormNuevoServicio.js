import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import Link from 'next/link';
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from 'moment';
import { FormSocio } from './FormSocio';
import { FormParticular } from './FormParticular';
import Router from 'next/router';
import ModalAtaudes from './ModalAtaudes';
import ModalParcelas from './ModalParcelas';
import ModalAdhs from './ModalAdhs';


export const FormNuevoServicio = ({
    dniRef,
    traerDifunto,
    errores,
    alertas,
    show,
    servPart,
    part,
    ficha,
    fechaFacRef,
    lugarFacRef,
    alturaRef,
    pesoRef,
    detalleCausaRef,
    retiroExtRef,
    casaMorRef,
    fechaInuRef,
    horaInuRef,
    cemmenterioRef,
    solicitanteRef,
    dniSolicRef,
    domicilioSoliRef,
    apellidoRef,
    nombreRef,
    edadRef,
    dniPartiRef,
    handleChange,
    motivoSel,
    regServicio,
    ataudes,
    usu,
    regAtaud,
    ataudSel,
    parcelas,
    parceSel,
    regParce,
    adhs,
    regAdh,
    adhSel,
}) => {

    return (
        <Card className="h-full w-full p-4 ">
            <CardBody className="rounded-none">
                <Typography variant="h2">Registro de Servicios de Sepelio</Typography>


                {
                    show === false ? (
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative w-full mb-6 group">
                                <div className='p-4 border-2 rounded-lg mt-6 '>

                                    <Typography variant="h5" color="blue-gray" className="mb-6">
                                        Ingrese el DNI del socio difunto.
                                    </Typography>

                                    <div className="grid md:grid-cols-2 md:gap-6">

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="DNI" type="number" inputRef={dniRef} />

                                        </div>
                                        <div className="relative w-full mb-6 group">
                                            <Button onClick={traerDifunto}>
                                                Buscar
                                            </Button>

                                        </div>


                                    </div>

                                    {errores ? (

                                        <Alert
                                            color="red"
                                            icon={
                                                <InformationCircleIcon
                                                    strokeWidth={2}
                                                    className="h-6 w-6"
                                                />
                                            }
                                        >
                                            {errores}
                                        </Alert>

                                    ) : null}

                                    {alertas ? (

                                        <Alert
                                            color="blue"
                                            icon={
                                                <InformationCircleIcon
                                                    strokeWidth={2}
                                                    className="h-6 w-6"
                                                />
                                            }
                                        >
                                            {alertas}
                                        </Alert>

                                    ) : null}

                                </div>
                            </div>

                            <div className="relative w-full mb-6 group">
                                <div className='p-4 border-2 rounded-lg mt-6 '>

                                    <Typography variant="h5" color="blue-gray" className="mb-6">
                                        Servicio Particular
                                    </Typography>

                                    <div className="grid md:grid-cols-2 md:gap-6">

                                        <div className="relative w-full mb-6 group">
                                            <Button onClick={servPart} >
                                                Registrar
                                            </Button>

                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>

                    ) : show === true ? (

                        <div className='mt-6'>

                            {alertas ? (

                                <Alert
                                    color="blue"
                                    icon={
                                        <InformationCircleIcon
                                            strokeWidth={2}
                                            className="h-6 w-6"
                                        />
                                    }
                                >
                                    <strong> {alertas}</strong>
                                </Alert>

                            ) : null}

                            <div className='border-2 rounded-xl mt-6 p-4'>

                                <Typography variant="h4" color="blue-gray" className="mt-6 mb-6">
                                    Formulario Solicitud de Servicio
                                </Typography>

                                <div className='border-2 rounded-xl mt-6 p-4'>


                                    {
                                        ficha[0] && ficha[0].GRUPO === 666 ||
                                            ficha[0] && ficha[0].GRUPO === 1001 ||
                                            ficha[0] && ficha[0].GRUPO === 1005 ||
                                            ficha[0] && ficha[0].GRUPO === 1006 ||
                                            ficha[0] && ficha[0].GRUPO === 3444 ||
                                            ficha[0] && ficha[0].GRUPO === 3666 ||
                                            ficha[0] && ficha[0].GRUPO === 3777 ||
                                            ficha[0] && ficha[0].GRUPO === 3888 ||
                                            ficha[0] && ficha[0].GRUPO === 3999 ||
                                            ficha[0] && ficha[0].GRUPO === 4004 ||
                                            ficha[0] && ficha[0].GRUPO === 7777 ||
                                            ficha[0] && ficha[0].GRUPO === 8500
                                            ? (

                                                <Alert
                                                    color="red"
                                                    icon={
                                                        <InformationCircleIcon
                                                            strokeWidth={2}
                                                            className="h-6 w-6"
                                                        />
                                                    }
                                                >
                                                    <strong>Ficha en estado moroso. Verifique su situacion</strong>
                                                </Alert>
                                            ) : null
                                    }

                                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                        Datos del extinto
                                    </Typography>

                                    <div className="grid md:grid-cols-4 md:gap-4">

                                        {
                                            ficha[0] ? (


                                                <FormSocio
                                                    ficha={ficha}
                                                />


                                            ) : (

                                                <FormParticular
                                                    apellidoRef={apellidoRef}
                                                    nombreRef={nombreRef}
                                                    edadRef={edadRef}
                                                    dniPartiRef={dniPartiRef}
                                                />


                                            )
                                        }

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Fecha Fallecimiento" type="date" inputRef={fechaFacRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Lugar Fallecimiento" type="text" inputRef={lugarFacRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Altura" type="text" inputRef={alturaRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Peso" type="text" inputRef={pesoRef} />
                                        </div>

                                    </div>
                                </div>

                                <hr className='border-2 mt-5 mb-5' />
                                {adhs.length > 0 ? (
                                    <>

                                        <div className='border-2 rounded-xl mt-6 p-4'>

                                            <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                                Selecciona el nuevo titular:
                                            </Typography>

                                            <div className="grid md:grid-cols-4 md:gap-4">

                                                <div className="relative w-full mb-6 group">
                                                    <Input size="md" label="Adherente" type="text" value={adhSel.adh} readOnly />
                                                </div>

                                                <div className="relative w-full mb-6 group">
                                                    <Input size="md" label="DNI" type="text" value={adhSel.dni_nuevotitular} readOnly />
                                                </div>

                                                <div className="relative w-full mb-6 group">
                                                    <ModalAdhs
                                                        listado={adhs}
                                                        usu={usu}
                                                        regAdh={regAdh}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Alert
                                        color="blue"
                                        icon={
                                            <InformationCircleIcon
                                                strokeWidth={2}
                                                className="h-6 w-6"
                                            />
                                        }
                                    >
                                        <strong>No es necesario seleccionar nuevo titular.</strong>
                                    </Alert>
                                )}

                                <hr className='border-2 mt-5 mb-5' />

                                <div className='border-2 rounded-xl mt-6 p-4'>

                                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                        Datos del Servicio
                                    </Typography>

                                    <div className="grid md:grid-cols-4 md:gap-4">

                                        {ficha[0] ? (
                                            <div className="relative w-full mb-6 group">
                                                <Input size="md" label="Tipo Servicio" type="text" readOnly value={`Plan ${ficha[0].PLAN}`} />
                                            </div>
                                        ) : (
                                            <div className="relative w-full mb-6 group">
                                                <Input size="md" label="Tipo Servicio" type="text" readOnly value={`Particular`} />
                                            </div>
                                        )}


                                        <div className="relative w-full mb-6 group">
                                            <Select label="Motivo Fallec."
                                                onChange={(value) => { handleChange('motivo', value) }}
                                            >
                                                <Option value="COVID 19" >COVID 19</Option>
                                                <Option value='OTRO' >OTRO</Option>
                                            </Select>
                                        </div>

                                        {
                                            motivoSel === "COVID 19" ? (
                                                <div className="relative w-full mb-6 group ">
                                                    <Input size="md" label="Detalle Causa Fallec." type="text" value={"COVID 19"} inputRef={detalleCausaRef} readOnly />
                                                </div>
                                            ) : (
                                                <div className="relative w-full mb-6 group ">
                                                    <Input size="md" label="Detalle Causa Fallec." type="text" inputRef={detalleCausaRef} />
                                                </div>
                                            )
                                        }



                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Retiro del Extinto" type="text" inputRef={retiroExtRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Casa Mortuaria" type="text" inputRef={casaMorRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Fecha de Inumacion" type="date" inputRef={fechaInuRef} />
                                        </div>


                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Hora de Inumacion" type="time" inputRef={horaInuRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Cementerio" type="text" inputRef={cemmenterioRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Select label="Cremacion"
                                                onChange={(value) => { handleChange('cremacion', value) }}
                                            >
                                                <Option value='SI' >Si</Option>
                                                <Option value='NO' >No</Option>
                                            </Select>

                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Select label="Donacion"
                                                onChange={(value) => { handleChange('donacion', value) }}
                                            >
                                                <Option value='SI' >Si</Option>
                                                <Option value='NO' >No</Option>
                                            </Select>
                                        </div>

                                    </div>

                                </div>

                                <hr className='border-2 mt-5 mb-5' />

                                <div className='border-2 rounded-xl mt-6 p-4'>

                                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                        Datos del Solicitante
                                    </Typography>

                                    <div className="grid md:grid-cols-3 md:gap-4">

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Solicitado por" type="text" inputRef={solicitanteRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="DNI" type="number" inputRef={dniSolicRef} />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Select label="Parentezco"
                                                onChange={(value) => { handleChange('parentezco', value) }}
                                            >
                                                <Option value='Cónyugue' >Cónyugue</Option>
                                                <Option value='Hijo/a' >Hijo/a</Option>
                                                <Option value='Hermano/a'>Hermano/a</Option>
                                                <Option value='Otro' >Otro</Option>
                                            </Select>
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Domicilio" type="text" inputRef={domicilioSoliRef} />
                                        </div>

                                    </div>
                                </div>

                                <hr className='border-2 mt-5 mb-5' />

                                <div className='border-2 rounded-xl mt-6 p-4'>

                                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                        Datos del Ataud
                                    </Typography>

                                    <div className="grid md:grid-cols-4 md:gap-4">

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Codigo" type="text" value={ataudSel.idataud} readOnly />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Ataud" type="text" value={ataudSel.nombre} readOnly />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <Input size="md" label="Uso" type="text" value={ataudSel.uso} readOnly />
                                        </div>

                                        <div className="relative w-full mb-6 group">
                                            <ModalAtaudes
                                                listado={ataudes}
                                                usu={usu}
                                                regAtaud={regAtaud}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {
                                    part === true ? null
                                        : part === false ? (

                                            <>

                                                <hr className='border-2 mt-5 mb-5' />

                                                <div className='border-2 rounded-xl mt-6 p-4'>

                                                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                                                        Datos de la Parcela
                                                    </Typography>

                                                    <div className="grid md:grid-cols-4 md:gap-4">

                                                        <div className="relative w-full mb-6 group">
                                                            <Input size="md" label="Parcela" type="text" value={parceSel.parcela} readOnly />
                                                        </div>

                                                        <div className="relative w-full mb-6 group">
                                                            <Input size="md" label="Manzana" type="text" value={parceSel.mza} readOnly />
                                                        </div>

                                                        <div className="relative w-full mb-6 group">
                                                            <Input size="md" label="Lote" type="text" value={parceSel.lote} readOnly />
                                                        </div>

                                                        <div className="relative w-full mb-6 group">
                                                            <ModalParcelas
                                                                listado={parcelas}
                                                                usu={usu}
                                                                regParce={regParce}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>

                                        ) : null
                                }


                            </div>

                            {errores ? (

                                <Alert
                                    color="red"
                                    icon={
                                        <InformationCircleIcon
                                            strokeWidth={2}
                                            className="h-6 w-6"
                                        />
                                    }
                                >
                                    {errores}
                                </Alert>

                            ) : null}


                            <div className='flex justify-end mt-6'>
                                <Button
                                    onClick={regServicio}
                                >
                                    Registrar Servicio
                                </Button>


                                <Button className='ml-1' color='red' onClick={() => { Router.reload() }}>
                                    Canelar
                                </Button>

                            </div>
                        </div>
                    ) : null
                }












            </CardBody>
        </Card >

    )
}
