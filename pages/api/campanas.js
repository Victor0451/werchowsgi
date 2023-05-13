import { PrismaClient as WerchowsgiClient } from '../../prisma/generated/werchowsgi'
import moment from 'moment';

export default async function handler(req, res) {

    const prisma = new WerchowsgiClient();

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "nuevos casos") {

            let operador = req.query.operador;
            let campana = req.query.campana;
            let empresa = req.query.empresa;


            const nuevosCasos = await prisma.$queryRaw`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = "mgalian"
                AND c.descripcion = ${campana}
                AND c.empresa =  ${empresa}
                AND cc.estadocaso = 1
                AND cc.accion IS NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `
            res.status(200).json(nuevosCasos)

        } if (req.query.f && req.query.f === "casos trabajados") {

            let operador = req.query.operador;
            let campana = req.query.campana;
            let empresa = req.query.empresa;


            const casosTrab = await prisma.$queryRaw`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = "mgalian"
                AND c.descripcion = ${campana}
                AND c.empresa =  ${empresa}
                AND cc.estadocaso = 1
                AND cc.accion IS NOT NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `
            res.status(200).json(casosTrab)

        }


    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "reg caso") {

            const gestionCaso = await prisma.gestioncaso.create({
                data: {
                    operador: req.body.operador,
                    idcaso: req.body.idcaso,
                    fechaaccion: moment(req.body.fechaaccion).format('YYYY-MM-DD'),
                    accion: req.body.accion,
                    observacion: req.body.observacion,
                    fechanuevaaccion: moment(req.body.fechanuevaaccion).format('YYYY-MM-DD'),
                    nuevaaccion: req.body.nuevaaccion,
                    observacion_nuevaaccion: req.body.observacion_nuevaaccion,
                    contrato: req.body.contrato,
                }
            })

            res.status(200).json(gestionCaso);
        }


    } if (req.method === "PUT") {
        console.log(req.body)

        if (req.body.f && req.body.f === "update caso") {


            const campanaCasos = await prisma.campanacasos.update({

                where: {
                    idcaso: req.body.caso
                },

                data: {
                    accion: req.body.accion
                }

            })

            console.log(campanaCasos)

            res.status(200).json(campanaCasos);

        }


    }





}