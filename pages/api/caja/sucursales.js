import { Werchow, SGI, Camp } from "../../../libs/config";

export default async function handler(req, res) {
  const prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer cajas usuario") {
      const cajas = await SGI.caja_sucursales.findMany({
        where: {
          operador_carga: req.query.user,
        },
        orderBy: {
          fecha_carga: "desc",
        },
      });
      res.status(200).json(cajas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg movimientos") {
      const caja = await SGI.movimiento_caja_sucursales.create({
        data: {
          idcaja: parseInt(req.body.idcaja),
          fecha_carga: new Date(req.body.fecha_carga),
          sucursal: req.body.sucursal,
          fecha_movimiento: new Date(req.body.fecha_movimiento),
          concepto: req.body.concepto,
          movimiento: req.body.movimiento,
          importe: parseFloat(req.body.importe),
          operador_carga: req.body.operador_carga,
          empresa: req.body.empresa,
        },
      });
      res.status(200).json(caja);
    } else if (req.body.f && req.body.f === "reg caja") {
      const movCaja = await SGI.caja_sucursales.create({
        data: {
          fecha_carga: new Date(req.body.fecha_carga),
          sucursal: req.body.sucursal,
          ingresos: parseFloat(req.body.ingresos),
          egresos: parseFloat(req.body.egresos),
          saldo: parseFloat(req.body.saldo),
          operador_carga: req.body.operador_carga,
          empresa: req.body.empresa,
        },
      });
      res.status(200).json(movCaja);
    }
  }
}
