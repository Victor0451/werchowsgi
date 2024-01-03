import { Werchow, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "ultimo recibo") {
      const ultimoRec = await Werchow.pagos.findFirst({
        select: {
          SERIE: true,
          NRO_RECIBO: true,
          DIA_PAG: true,
        },
        where: {
          SERIE: parseInt(req.query.serie),
        },
        orderBy: {
          DIA_PAG: "desc",
        },
      });
      res.status(200).json(ultimoRec);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva noticia") {
      const noti = await SGI.noticia.create({
        data: {
          fecha: new Date(req.body.fecha),
          noticia: req.body.noticia,
          operador: req.body.operador,
          perfil: parseInt(req.body.perfil),
        },
      });
      res.status(200).json(noti);
    }
  }
}
