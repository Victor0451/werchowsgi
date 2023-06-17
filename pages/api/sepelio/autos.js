import { Werchow, SGI, Camp, Sep } from '../../../libs/config'
import moment from 'moment';
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "traer autos") {

            const autos = await Sep.autos.findMany()

            res.status(200).json(autos);

        } else if (req.query.f && req.query.f === "traer auto sel") {

            const autos = await Sep.autos.findUnique({
                where: {
                    idauto: parseInt(req.query.id)
                }
            })

            res.status(200).json(autos);

        } else if (req.query.f && req.query.f === "traer archivos") {

            const autos = await Sep.legajo_virtual_autos.findMany({
                where: {
                    patente: req.query.patente
                }
            })

            res.status(200).json(autos);

        } else if (req.query.f && req.query.f === "Hist Nov") {

            const autos = await Sep.autos_novedades.findMany({
                where: {
                    patente: req.query.id
                }
            })

            res.status(200).json(autos);

        }

    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "nuevo auto") {


            const regAuto = await Sep.autos.create({
                data: {
                    patente: req.body.patente,
                    auto: req.body.auto,
                    kilometros: parseFloat(req.body.kilometros),
                    responsable: req.body.responsable,
                    nro_poliza: req.body.nro_poliza,
                    empresa: req.body.empresa,
                    vencimiento: new Date(req.body.vencimiento),
                    motor: req.body.motor,
                    chasis: req.body.chasis,
                    modelo: parseInt(req.body.modelo),
                    cobertura: req.body.cobertura,
                    estado: req.body.estado,
                    operador: req.body.operador,
                }
            })


            res.status(200).json(regAuto);

        } if (req.body.f && req.body.f === "reg nov auto") {


            const regAuto = await Sep.autos_novedades.create({
                data: {
                    novedad: req.body.novedad,
                    patente: req.body.patente,
                    auto: req.body.auto,
                    operador: req.body.operador,
                    fecha: new Date(req.body.fecha),
                }
            })


            res.status(200).json(regAuto);

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