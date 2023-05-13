import { PrismaClient as WerchowsgiClient } from '../../prisma/generated/werchowsgi'
import moment from 'moment';

export default async function handler(req, res) {

    const prisma = new WerchowsgiClient();

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "nuevos casos") {



        }


    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "sistema") {

            const historial = await prisma.historial_acciones.create({
                data: {
                    operador: req.body.operador,
                    fecha: new Date(req.body.fecha).toISOString(),
                    accion: req.body.accion,
                }
            })

            res.status(200).json(historial);

        }


    }





}