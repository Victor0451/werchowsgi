import { Werchow, SGI, Camp, Sep } from '../../../libs/config'
import moment from 'moment';
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "list fab ataud") {


            const fabri = await Sep.$queryRaw`
               SELECT 
                fabricante AS 'value',
                fabricante AS 'label'
               FROM fabricante_ataud           
        
        `
            res.status(200).json(fabri)



        } else if (req.query.f && req.query.f === "list ataudes") {


            const ataudes = await Sep.ataudes.findMany()

            res.status(200).json(ataudes)



        } else if (req.query.f && req.query.f === "traer ataud") {


            const ataudes = await Sep.ataudes.findUnique({
                where: {
                    idataud: parseInt(req.query.id)
                }

            })

            res.status(200).json(ataudes)

        } else if (req.query.f && req.query.f === "traer historial id") {


            const ataudes = await Sep.historial_stock_ataud.findMany({
                where: {
                    idataud: parseInt(req.query.idataud)
                },

                orderBy: {
                    fecha_carga: 'desc',
                }

            })

            res.status(200).json(ataudes)

        }

    } else if (req.method === "POST") {

        if (req.body.f && req.body.f === "reg ataud") {


            const regAtaud = await Sep.ataudes.create({
                data: {
                    nombre: req.body.nombre,
                    tipo: req.body.tipo,
                    medidas: req.body.medidas,
                    uso: req.body.uso,
                    fabricante: req.body.fabricante,
                    stock: parseInt(req.body.stock),
                    fecha_alta: new Date(req.body.fecha_alta),
                    operador: req.body.operador,
                    estado: req.body.estado,
                }
            })


            res.status(200).json(regAtaud);

        } else if (req.body.f && req.body.f === "reg nov auto") {


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

        } else if (req.body.f && req.body.f === "reg hist ataud") {


            const regHistAtaud = await Sep.historial_stock_ataud.create({
                data: {
                    idataud: parseInt(req.body.idataud),
                    stock_anterior: parseInt(req.body.stock_anterior),
                    stock_nuevo: parseInt(req.body.stock_nuevo),
                    fecha_carga: new Date(req.body.fecha_carga),
                    fecha_recepcion: new Date(req.body.fecha_recepcion),
                    remito: req.body.remito,
                    operador: req.body.operador,
                }
            })


            res.status(200).json(regHistAtaud);

        }

    } else if (req.method === "PUT") {

        if (req.body.f && req.body.f === "act stock") {


            const actStock = await Sep.ataudes.update({
                data: {

                    stock: parseInt(req.body.stock),
                    observaciones: req.body.observaciones,
                    fecha_reposicion: new Date(req.body.fecha_reposicion),
                    operador: req.body.operador,

                },
                where: {
                    idataud: parseInt(req.body.idataud)
                }

            })


            res.status(200).json(actStock);

        } else if (req.body.f && req.body.f === "act stock servicio") {


            const actStock = await Sep.ataudes.update({
                data: {

                    stock: parseInt(req.body.nuevo)

                },
                where: {
                    idataud: parseInt(req.body.idataud)
                }

            })


            res.status(200).json(actStock);

        }

    }





}