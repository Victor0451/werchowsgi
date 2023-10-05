import { Werchow, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  const prisma = SGI;

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
    if (req.body.f && req.body.f === "nueva noticia") {
      const noti = await prisma.noticia.create({
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
