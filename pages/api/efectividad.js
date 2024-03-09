import { Werchow, SGI, Camp, Info } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer cOf") {
      const cOf = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         c1000
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}
      AND 
         zona in (1,3,5,30,60)                     
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cCob") {
      const cOf = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         c1000
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}
      AND 
         zona not in (1,3,5,30,60)                     
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cbanco") {
      const cbanco = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         cbanco
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}
             
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cbanco, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ctjt") {
      const ctjt = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         ctjt
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}
             
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(ctjt, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cpolicia") {
      const cpolicia = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         cpolicia
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}
             
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cpolicia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    // if (req.body.f && req.body.f === "nueva noticia") {
    //   const noti = await prisma.noticia.create({
    //     data: {
    //       fecha: new Date(req.body.fecha),
    //       noticia: req.body.noticia,
    //       operador: req.body.operador,
    //       perfil: parseInt(req.body.perfil),
    //     },
    //   });
    //   res.status(200).json(noti);
    // }
  }
}
