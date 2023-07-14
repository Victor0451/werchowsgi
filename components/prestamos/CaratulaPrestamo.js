import React from 'react'
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,

} from "@material-tailwind/react";
import moment from 'moment';
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const CaratulaPrestamo = ({
  prestamo,
  socio
}) => {

  let porcentaje = Math.floor(prestamo.ptm_neto * 30) / 100;

  return (
    <Card className="h-full w-full p-4 border-2 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">SUBSIDIO POR CONTENCION FAMILIAR</Typography>

        <Typography variant="h4" color="blue-gray" className="mt-5">
          <u>BENEFICIARIO</u>: {prestamo.ptm_afi}
        </Typography>

        <div className=' border-2 p-4 grid gap-2 mb-2 md:grid-cols-2 mt-5'>
          <Typography variant="paragraph">
            <u>DNI</u>: {socio.NRO_DOC}
          </Typography>
          <Typography variant="paragraph">
            <u>LEGAJO</u>: {prestamo.ptm_legajo}
          </Typography>
          <Typography variant="paragraph">
            <u>FICHA</u>: {socio.CONTRATO}
          </Typography>
          <Typography variant="paragraph">
            <u>ANTIGÜEDAD</u>: {prestamo.ptm_anti}
          </Typography>
          <Typography variant="paragraph">
            <u>FEC. SOLICITUD</u>: {moment(prestamo.ptm_fechasol).format('DD/MM/YYYY')}
          </Typography>
          <Typography variant="paragraph">
            <u>RENOVACION</u>: {prestamo.ptm_renov}
          </Typography>
        </div>

        <hr className='border-2 mt-5 mb-5' />


        <Typography variant="h4" color="blue-gray" className="mt-5">
          <u>DETALLES DEL SUBSIDIO</u>
        </Typography>

        <div className='border-2 p-4 grid gap-2 mb-2 md:grid-cols-2 mt-5'>
          <Typography variant="paragraph">
            <u>CAPITAL</u>: ${prestamo.ptm_prestamo}
          </Typography>
          <Typography variant="paragraph">
            <u>PLAN DE CUOTAS</u>: PLAN {prestamo.ptm_cuotas} CUOTAS
          </Typography>
          <Typography variant="paragraph">
            <u>CUOTA MENSUAL</u>: ${prestamo.ptm_valcuota}
          </Typography>
          <Typography variant="paragraph">
            <u>SUELDO NETO</u>: ${prestamo.ptm_neto}
          </Typography>
        </div>

        <hr className='border-2 mt-5 mb-5' />


        <Typography variant="h4" color="blue-gray" className="mt-5">
          <u>OBSERVACIONES</u>
        </Typography>

        <div className='border-2 p-4 grid gap-2 mb-2 md:grid-cols-1 mt-5'>




          {porcentaje > prestamo.ptm_valcuota ? (

            <Alert

              color="green"
              icon={
                <InformationCircleIcon className="h-6 w-6" />
              }
            >
              <Typography className="font-medium">PREAPROBACION</Typography>
              <ul class="mt-2 ml-2 list-disc list-inside">
                <li>EL 30% DEL SUELDO NETO DEL AFILIADO SUPERA AL VALOR DEL
                  SUBSIDIO SOLICITADO
                </li>
              </ul>
            </Alert>

          ) : porcentaje < prestamo.ptm_valcuota ? (
            <Alert

              color="red"
              icon={
                <InformationCircleIcon className="h-6 w-6" />
              }
            >
              <Typography className="font-medium">PREAPROBACION</Typography>
              <ul class="mt-2 ml-2 list-disc list-inside">
                <li>EL 30% DEL SUELDO NETO DEL AFILIADO NO SUPERA AL VALOR DEL
                  SUBSIDIO SOLICITADO
                </li>
              </ul>
            </Alert>

          ) : null}

        </div>

      </CardHeader>
    </Card>



  )
}
