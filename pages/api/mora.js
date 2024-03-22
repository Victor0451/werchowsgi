import moment from "moment";
import { Werchow, SGI, Camp, Info } from "../../libs/config";

export default async function handler(req, res) {
  const prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer mcob") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            m.ZONA 'zona',
            g.DESCRIP 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'
          FROM
            maestro AS m
          INNER JOIN zonas AS g ON g.CODIGO = m.ZONA
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
              AND MES = ${req.query.mes}
              AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
             AND MES = ${req.query.mes}
             AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
          AND m.ZONA NOT IN (1, 3, 5, 30, 60)
          AND m.GRUPO = 1000  
          GROUP BY
            m.ZONA,
            g.DESCRIP
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.query.f && req.query.f === "traer mof") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            m.ZONA 'zona',
            g.DESCRIP 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'
          FROM
            maestro AS m
          INNER JOIN zonas AS g ON g.CODIGO = m.ZONA
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
              AND MES = ${req.query.mes}
              AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
            AND MES = ${req.query.mes}
            AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
          AND m.ZONA IN (1, 3, 5, 30, 60)
          AND m.GRUPO = 1000          
          GROUP BY
            m.ZONA,
            g.DESCRIP
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer mtjt") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            m.GRUPO 'zona',
            g.DESCRIP 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'         
           
          FROM
            maestro AS m
          INNER JOIN grupos AS g ON g.CODIGO = m.GRUPO
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
              AND MES = ${req.query.mes}
              AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
            AND MES = ${req.query.mes}
            AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
          AND m.GRUPO IN (
            3400,
            3600,
            3700,
            3800,
            3900,
            4000
          )
          GROUP BY
            m.GRUPO,
            g.DESCRIP              
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer mbanco activo") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            "BANCO ACTIVO" AS 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'
          FROM
            maestro AS m
          INNER JOIN grupos AS g ON g.CODIGO = m.GRUPO
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
             AND MES = ${req.query.mes}
             AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
            AND MES = ${req.query.mes}
            AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
          AND m.GRUPO > 5000
          AND m.GRUPO NOT IN (
            6600,
            6601,
            6602,
            6603,
            6604,
            6605,
            6606,
            6607,
            6608,
            6609,
            6610,
            6611,
            6612,
            6613,
            6614,
            6635,
            6636,
            6637,
            6638,
            6639,
            7777,
            8500,
            9999
          )           
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer mbanco pasivo") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            "BANCO PASIVO" AS 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'
          FROM
            maestro AS m
          INNER JOIN grupos AS g ON g.CODIGO = m.GRUPO
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
              AND MES = ${req.query.mes}
              AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
            AND MES = ${req.query.mes}
            AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
        
          AND m.GRUPO IN (
            6600,
            6601,
            6602,
            6603,
            6604,
            6605,
            6606,
            6607,
            6608,
            6609,
            6610,
            6611,
            6612,
            6613,
            6614,
            6635,
            6636,
            6637,
            6638,
            6639
            
          )           
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer mpolicia") {
      const cOf = await Werchow.$queryRaw`
         
          SELECT
            "POLICIAS" AS 'descr',
            COUNT(*) 'fichas',
            SUM(c.IMPORTE) 'mora'
          FROM
            maestro AS m
          INNER JOIN grupos AS g ON g.CODIGO = m.GRUPO
          INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          WHERE
            NOT EXISTS (
              SELECT
                *
              FROM
                pago_bco AS p
              WHERE
                m.CONTRATO = p.CONTRATO
              AND MES = ${req.query.mes}
              AND ANO = ${req.query.ano}
            )
          AND NOT EXISTS (
            SELECT
              *
            FROM
              pagos AS p
            WHERE
              m.CONTRATO = p.CONTRATO
            AND MES = ${req.query.mes}
            AND ANO = ${req.query.ano}
            AND MOVIm = 'P'
          )
        
          AND m.GRUPO = 6
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cOf, (key, value) =>
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
