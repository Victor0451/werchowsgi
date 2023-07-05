import { Werchow, SGI, Camp, Sep } from '../../../libs/config'
import moment from 'moment';
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "list parcelas") {

            const servicios = await Sep.parcelas.findMany(
                {
                    where: {
                        asignada: false
                    }
                }
            )

            res.status(200).json(servicios);

        }

    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "nueva parcela") {


            const regParce = await Sep.parcelas.create({
                data: {
                    parcela: req.body.parcela,
                    mza: parseInt(req.body.mza),
                    lote: parseInt(req.body.lote),
                    cementerio: req.body.cementerio,
                    lugares: parseInt(req.body.lugares),
                    operador: req.body.operador,
                    fecha_alta: req.body.fecha_alta,
                    asignada: req.body.asignada,
                }
            })


            res.status(200).json(regParce);

        }

    } if (req.method === "PUT") {

        if (req.body.f && req.body.f === "act parcela asig") {


            const regAuto = await Sep.parcelas.update({
                data: {

                    idservicio: parseInt(req.body.idservicio),
                    dni_extinto: parseInt(req.body.dni_extinto),
                    operador_asignacion: req.body.operador_asignacion,
                    fecha_asignacion: req.body.fecha_asignacion,
                    ficha: parseInt(req.body.ficha),
                    lugares: parseInt(req.body.lugares),

                },
                where: {
                    idparcela: parseInt(req.body.idparcela)
                }

            })


            res.status(200).json(regAuto);

        }

    }





}