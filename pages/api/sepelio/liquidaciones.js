import { Werchow, SGI, Camp, Sep } from "../../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer noticias") {
      const noti = await prisma.noticia.findFirst({
        where: {
          perfil: parseInt(req.query.perfil),
        },
        orderBy: {
          fecha: "desc",
        },
      });
      res.status(200).json(noti);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "liquidacion registro") {
      const regLiq = await Sep.liquidacion_registro.create({
        data: {
          fecha: new Date(req.body.fecha),
          empleado: req.body.empleado,
          concepto: req.body.concepto,
          fecha_concepto: new Date(req.body.fecha_concepto),
          importe: parseFloat(req.body.importe),
          operador: req.body.operador,
        },
      });
      res.status(200).json(regLiq);
    }
  }
}
