import { Werchow, SGI, Camp, Sep } from '../../../libs/config'
import moment from 'moment';
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "traer facturas") {

            const tipoFac = await SGI.tipo_facturas.findMany({
                where: {
                    estado: true
                }
            })

            res.status(200).json(tipoFac);

        } else if (req.query.f && req.query.f === "traer conceptos") {

            const tipoFac = await Sep.conceptos.findMany()

            res.status(200).json(tipoFac);

        } else if (req.query.f && req.query.f === "traer cajas") {

            const cajaSep = await Sep.caja_sepelio.findMany({
                orderBy: {
                    fecha: 'desc',
                }
            })

            res.status(200).json(cajaSep);

        } else if (req.query.f && req.query.f === "traer caja") {

            const cajaSep = await Sep.caja_sepelio.findUnique({
                where: {
                    idcaja: parseInt(req.query.idcaja)
                }
            })

            res.status(200).json(cajaSep);

        } else if (req.query.f && req.query.f === "traer gastos caja") {

            const cajaSep = await Sep.gastos_caja.findMany({
                where: {
                    idcaja: parseInt(req.query.idcaja)
                }
            })

            res.status(200).json(cajaSep);

        } else if (req.query.f && req.query.f === "traer proveedores") {

            const prov = await Sep.proveedores.findMany()

            res.status(200).json(prov);

        } else if (req.query.f && req.query.f === "traer operadores") {

            const prov = await SGI.operador.findMany({
                where: {
                    perfil: 4
                },
                select: {
                    usuario: true,

                },
            })

            res.status(200).json(prov);

        } else if (req.query.f && req.query.f === "traer servicios") {

            const prov = await Sep.servicios.findMany({
                select: {
                    idservicio: true,
                    apellido: true,
                    nombre: true

                },
                orderBy: {
                    idservicio: 'desc'
                }
            })

            res.status(200).json(prov);

        }


    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "reg caja") {


            const regCaja = await Sep.caja_sepelio.create({
                data: {
                    empresa: req.body.empresa,
                    monto: parseFloat(req.body.monto),
                    concepto: req.body.concepto,
                    detalle: req.body.detalle,
                    fecha: new Date(req.body.fecha),
                    tipofactura: req.body.tipofactura,
                    ptoventa: parseInt(req.body.ptoventa),
                    nfactura: parseInt(req.body.nfactura),
                    operador: req.body.operador,
                    estado: req.body.estado,
                    gastos: parseFloat(req.body.gastos),
                    totalcaja: parseFloat(req.body.totalcaja),
                }
            })


            res.status(200).json(regCaja);

        } else if (req.body.f && req.body.f === "reg gasto caja") {


            const regCaja = await Sep.gastos_caja.create({
                data: {
                    idcaja: parseInt(req.body.idcaja),
                    concepto: req.body.concepto,
                    mediopago: req.body.mediopago,
                    tipofactura: req.body.tipofactura,
                    proveedor: req.body.proveedor,
                    empresa: req.body.empresa,
                    porciva: req.body.porciva,
                    fecha: new Date(req.body.fecha),
                    nfactura: req.body.nfactura,
                    ptoventa: parseFloat(req.body.ptoventa),
                    operadorgestion: req.body.operadorgestion,
                    operadortramite: req.body.operadortramite,
                    montoiva: parseFloat(req.body.montoiva),
                    retiibb: parseFloat(req.body.retiibb),
                    retggcias: parseFloat(req.body.retggcias),
                    perciva: parseFloat(req.body.perciva),
                    detalle: req.body.detalle,
                    total: parseFloat(req.body.total),
                    idservicio: parseInt(req.body.idservicio),
                }
            })


            res.status(200).json(regCaja);

        }

    } if (req.method === "PUT") {

        if (req.body.f && req.body.f === "cerrar caja") {


            const cerrarCaja = await Sep.caja_sepelio.update({
                data: {

                    estado: req.body.estado,
                    cierre: new Date(req.body.cierre)

                },
                where: {
                    idcaja: parseInt(req.body.idcaja)
                }

            })


            res.status(200).json(cerrarCaja);

        } else if (req.body.f && req.body.f === "ultima carga") {


            const cerrarCaja = await Sep.caja_sepelio.update({
                data: {

                    ultimacarga: new Date(req.body.ultimacarga)

                },
                where: {
                    idcaja: parseInt(req.body.idcaja)
                }

            })


            res.status(200).json(cerrarCaja);

        } else if (req.body.f && req.body.f === "update valores") {


            const cerrarCaja = await Sep.caja_sepelio.update({
                data: {

                    gastos: parseFloat(req.body.gastos),
                    totalcaja: parseFloat(req.body.totalcaja),

                },
                where: {
                    idcaja: parseInt(req.body.idcaja)
                }

            })


            res.status(200).json(cerrarCaja);

        }

    }





}