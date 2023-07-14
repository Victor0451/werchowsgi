import { Werchow, SGI, Camp, Sep } from '../../../libs/config'
import moment from 'moment';
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "servicios") {

            const servicios = await Sep.servicios.findMany(
                {
                    where: {
                        dni: parseInt(req.query.dni)
                    }
                }
            )

            res.status(200).json(servicios);

        } else if (req.query.f && req.query.f === "traer servicios") {

            const servicios = await Sep.servicios.findMany({
                orderBy: {
                    fecha_fallecimiento: 'desc',
                }
            })

            res.status(200).json(servicios);

        } else if (req.query.f && req.query.f === "legajo servicio") {

            const servicios = await Sep.servicios.findMany({
                where: {
                    idservicio: parseInt(req.query.id)
                }
            })

            res.status(200).json(servicios);

        } else if (req.query.f && req.query.f === "traer archivos") {

            const servicios = await Sep.legajo_virtual_servicios.findMany({
                where: {
                    servicio: parseInt(req.query.dni)
                }
            })

            res.status(200).json(servicios);

        }

    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "nuevo servicio") {

            const regServ = await Sep.servicios.create({
                data: {
                    contrato: parseInt(req.body.contrato),
                    empresa: req.body.empresa,
                    dni: parseInt(req.body.dni),
                    obra_soc: req.body.obra_soc,
                    apellido: req.body.apellido,
                    nombre: req.body.nombre,
                    edad: parseInt(req.body.edad),
                    fecha_fallecimiento: new Date(req.body.fecha_fallecimiento),
                    lugar_fallecimiento: req.body.lugar_fallecimiento,
                    tipo_servicio: req.body.tipo_servicio,
                    casa_mortuaria: req.body.casa_mortuaria,
                    fecha_inhumacion: new Date(req.body.fecha_inhumacion),
                    hora_inhumacion: req.body.hora_inhumacion,
                    cementerio: req.body.cementerio,
                    altura: parseFloat(req.body.altura),
                    peso: parseFloat(req.body.peso),
                    motivo: req.body.motivo,
                    retiro: req.body.retiro,
                    solicitado: req.body.solicitado,
                    parentesco: req.body.parentesco,
                    fecha_recepcion: req.body.fecha_recepcion,
                    sucursal: req.body.sucursal,
                    estado: req.body.estado,
                    dni_nuevotitular: parseInt(req.body.dni_nuevotitular),
                    operador: req.body.operador,
                    idataud: parseInt(req.body.idataud),
                    dni_solicitante: parseInt(req.body.dni_solicitante),
                    domicilio_solicitante: req.body.domicilio_solicitante,
                    cremacion: req.body.cremacion,
                    liquidado: req.body.liquidado,
                    donacion: req.body.donacion,
                }
            })


            res.status(200).json(regServ);

        }

    } if (req.method === "PUT") {

        if (req.body.f && req.body.f === "renov poliza") {


            const regAuto = await Sep.autos.update({
                data: {

                    nro_poliza: req.body.nro_poliza,
                    empresa: req.body.empresa,
                    vencimiento: new Date(req.body.vencimiento),
                    cobertura: req.body.cobertura,

                },
                where: {
                    idauto: req.body.idauto
                }

            })


            res.status(200).json(regAuto);

        }

    }





}