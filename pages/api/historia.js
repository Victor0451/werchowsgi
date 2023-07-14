import { Werchow, SGI, Camp, Sep } from '../../libs/config'
import moment from 'moment';

export default async function handler(req, res) {

    const prisma = SGI;

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

        } if (req.body.f && req.body.f === "autos") {

            const historial = await Sep.historial_autos.create({
                data: {
                    patente: req.body.patente,
                    idauto: parseInt(req.body.idauto),
                    operador: req.body.operador,
                    fecha: new Date(req.body.fecha).toISOString(),
                    accion: req.body.accion,
                }
            })

            res.status(200).json(historial);

        }



    }





}