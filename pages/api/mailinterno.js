import { Werchow, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "entrada") {
      const entrada = await SGI.mails.findMany({
        where: { recibe: req.query.usu },
        orderBy: {
          fecha: "desc",
        },
      });

      res.status(200).json(entrada);
    } else if (req.query.f && req.query.f === "salida") {
      const salida = await SGI.mails.findMany({
        where: { envia: req.query.usu },
        orderBy: {
          fecha: "desc",
        },
      });

      res.status(200).json(salida);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const archivos = await SGI.mails_adjuntos.findMany({
        where: { codmail: req.query.codmail },
      });

      res.status(200).json(archivos);
    } else if (req.query.f && req.query.f === "traer cajas mail") {
      const cajasMail = await SGI.$queryRaw`
       SELECT 
                CONCAT(empresa, '-' , idcaja, '-', fecha_carga) 'label',                
                CONCAT('/caja/sucursales/cajamail?id=',idcaja) 'value'
        FROM caja_sucursales
        WHERE operador_carga = ${req.query.op}
        ORDER BY idcaja DESC
  
  `;
      res.status(200).json(cajasMail);
    } else if (req.query.f && req.query.f === "noti entrada") {
      const entrada = await SGI.mails.findMany({
        where: {
          recibe: req.query.usu,
          leido: false,
        },
        orderBy: {
          fecha: "desc",
        },
      });

      res.status(200).json(entrada);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "enviar mail") {
      const enviarMail = await SGI.mails.create({
        data: {
          fecha: new Date(req.body.fecha),
          envia: req.body.envia,
          recibe: req.body.recibe,
          descrip: req.body.descrip,
          codmail: req.body.codmail,
          asunto: req.body.asunto,
          leido: req.body.leido,
          fecha_leido: new Date(req.body.fecha_leido),
          url_caja: req.body.url_caja,
        },
      });

      res.status(200).json(enviarMail);
    }
  } else if (req.method === "PUT") {
  }
}
