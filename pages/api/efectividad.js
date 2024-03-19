import moment from "moment";
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

      ORDER BY descr ASC                         
      
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
             
      ORDER BY descr ASC      
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

      ORDER BY descr ASC           
      
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

      ORDER BY descr ASC                
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cpolicia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cprestamos") {
      const cprestamos = await Info.$queryRaw`
         
      SELECT
        *
      FROM
         cprestamos
      WHERE 
          mes = ${parseInt(req.query.mes)}
      AND           
          ano = ${parseInt(req.query.ano)}

      ORDER BY descr ASC    
             
      
        `;
      res
        .status(200)
        .json(
          JSON.stringify(cprestamos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "insert cCob") {
      const c1000 = await Info.$queryRaw`
         
         INSERT INTO c1000
          (zona, total, fichas, mes, ano, descr)

          (
          select m.ZONA, SUM(c.IMPORTE), COUNT(*), MONTH(CURDATE()) , YEAR(CURDATE()), z.DESCRIP
          from werchow.maestro as m
          INNER JOIN werchow.pagos as c on c.CONTRATO = m.CONTRATO
          INNER JOIN werchow.zonas as z on z.CODIGO = m.ZONA
          where m.zona not in (1,3,5,30,60)
          and m.GRUPO = 1000
          and c.MES = ${parseInt(req.body.mes)}
          and c.ANO = ${parseInt(req.body.ano)}
          and c.MOVIM = 'N'

          GROUP BY m.ZONA, z.DESCRIP
          ORDER BY m.ZONA
          )
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(c1000, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "insert cOf") {
      const c1000 = await Info.$queryRaw`
         
         INSERT INTO c1000
          (zona, total, fichas, mes, ano, descr)

          (
          select m.ZONA, SUM(c.IMPORTE), COUNT(*), MONTH(CURDATE()) , YEAR(CURDATE()), z.DESCRIP
          from werchow.maestro as m
          INNER JOIN werchow.cuo_fija as c on c.CONTRATO = m.CONTRATO
          INNER JOIN werchow.zonas as z on z.CODIGO = m.ZONA
          where zona in (1,3,5,30,60)
          and m.GRUPO = 1000

          GROUP BY m.ZONA, z.DESCRIP
          ORDER BY m.ZONA
          )
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(c1000, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "insert ctjt") {
      const ctjt = await Info.$queryRaw`
         
         INSERT INTO ctjt (
            fichas,
            total,
            mes,
            ano,
            sucursal,
            descr
          ) SELECT
            COUNT(*),
            SUM(m.CUOTA),
            MONTH (CURDATE()),
            YEAR (CURDATE()),
            m.SUCURSAL,
            (
              CASE
              WHEN m.SUCURSAL = 'C' THEN
                'EL CARMEN'
              WHEN m.SUCURSAL = 'L' THEN
                'PALPALA'
              WHEN m.SUCURSAL = 'R' THEN
                'PERICO'
              WHEN m.SUCURSAL = 'P' THEN
                'SAN PEDRO'
              WHEN m.SUCURSAL = 'W' THEN
                'CASA CENTRAL'
              END
            ) 'descr'
          FROM
            sow AS m
          INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
          WHERE
            GRUPO IN (3400,3600,3700,3800,3900,4000)
          GROUP BY
            m.SUCURSAL
          ORDER BY
            m.SUCURSAL
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(ctjt, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "insert cbanco") {
      const cbanco = await Info.$queryRaw`
         
        
         INSERT INTO cbanco (
            fichas,
            total,
            mes,
            ano,
            sucursal,
            descr
          ) SELECT
            COUNT(*),
            SUM(m.CUOTA),
            MONTH (CURDATE()),
            YEAR (CURDATE()),
            m.SUCURSAL,
            (
              CASE
              WHEN m.SUCURSAL = 'C' THEN
                'EL CARMEN'
              WHEN m.SUCURSAL = 'L' THEN
                'PALPALA'
              WHEN m.SUCURSAL = 'R' THEN
                'PERICO'
              WHEN m.SUCURSAL = 'P' THEN
                'SAN PEDRO'
              WHEN m.SUCURSAL = 'W' THEN
                'CASA CENTRAL'
              END
            ) 'descr'
          FROM
            sow AS m
          INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
          WHERE
            GRUPO > 5000
          AND GRUPO NOT IN (7777, 8500, 9999)
          GROUP BY
            m.SUCURSAL
          ORDER BY
            m.SUCURSAL    
              `;
      res
        .status(200)
        .json(
          JSON.stringify(cbanco, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "insert cpolicia") {
      const cpoliciia = await Info.$queryRaw`
         
         INSERT INTO cpolicia (
            fichas,
            total,
            mes,
            ano,
            sucursal,
            descr
          ) SELECT
            COUNT(*),
            SUM(m.CUOTA),
            MONTH (CURDATE()),
            YEAR (CURDATE()),
            m.SUCURSAL,
            (
              CASE
              WHEN m.SUCURSAL = 'C' THEN
                'EL CARMEN'
              WHEN m.SUCURSAL = 'L' THEN
                'PALPALA'
              WHEN m.SUCURSAL = 'R' THEN
                'PERICO'
              WHEN m.SUCURSAL = 'P' THEN
                'SAN PEDRO'
              WHEN m.SUCURSAL = 'W' THEN
                'CASA CENTRAL'
              END
            ) 'descr'
          FROM
          sow AS m
          INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
          INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
          WHERE
            GRUPO = 6
          GROUP BY
            m.SUCURSAL
          ORDER BY
            m.SUCURSAL
      
              `;
      res
        .status(200)
        .json(
          JSON.stringify(cpoliciia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act adelantado") {
      const c1000 = await Info.$queryRaw`
         
          UPDATE c1000 i
          JOIN werchow.maestro AS m ON i.zona = m.ZONA
          SET i.adelantado = (
            SELECT
              sum(p.IMPORTE)
            FROM
              werchow.pagos AS p
            INNER JOIN werchow.maestro AS so ON so.CONTRATO = p.CONTRATO
            WHERE
              i.zona = so.ZONA
            AND so.GRUPO = 1000
            AND p.MES > ${parseInt(req.body.mes)}
            AND p.ANO = ${parseInt(req.body.ano)}
            AND p.MOVIM = 'P'
            and p.DIA_PAG between ${moment()
              .startOf("month")
              .format("YYYY-MM-DD")} and ${moment()
        .endOf("month")
        .format("YYYY-MM-DD")}
            GROUP BY
              so.ZONA
          )
          WHERE i.mes = ${parseInt(req.body.mes)}
          AND i.ano = ${parseInt(req.body.ano)}
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(c1000, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act cobradores") {
      const c1000 = await Info.$queryRaw`
         
          UPDATE c1000 i    
          SET i.cobrado = 
          (
          SELECT  sum(p.IMPORTE)
          FROM  werchow.pagos AS p
          inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
          WHERE  i.zona = so.ZONA
          and p.MOVIM = 'P'
          and p.DIA_EMI = ${moment().startOf("month").format("YYYY-MM-DD")} 
          and so.ZONA not in (1,3,5,30,60,99)
          group by so.ZONA
          ),
          
          i.fichascob = 
          (
          SELECT  count(p.CONTRATO)
          FROM  werchow.pagos AS p
          inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
          WHERE  i.zona = so.ZONA
          and p.MOVIM = 'P'
          and p.DIA_EMI = ${moment().startOf("month").format("YYYY-MM-DD")} 
          and so.ZONA not in (1,3,5,30,60,99)
          group by so.ZONA
          )
          
          where i.mes = ${parseInt(req.body.mes)}
          and i.ano = ${parseInt(req.body.ano)}
          and i.zona not in (1,3,5,30,60,99)
                  
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(c1000, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act oficina") {
      const c1000 = await Info.$queryRaw`
         
          UPDATE c1000 i    
          SET i.cobrado = 
          (
          SELECT  sum(p.IMPORTE)
          FROM  werchow.pagos AS p
          inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
          WHERE  i.zona = so.ZONA
          and p.MES <= ${parseInt(req.body.mes)}
          and p.ANO =${parseInt(req.body.ano)}
          and p.MOVIM = 'P'
          and p.DIA_PAG between ${moment()
            .startOf("month")
            .format("YYYY-MM-DD")} and ${moment()
        .endOf("month")
        .format("YYYY-MM-DD")}
          and so.ZONA in (1,3,5,30,60)
          group by so.ZONA
          ),
          
          i.fichascob = 
          (
          SELECT  count(p.CONTRATO)
          FROM  werchow.pagos AS p
          inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
          WHERE  i.zona = so.ZONA
          and p.MES <= ${parseInt(req.body.mes)}
          and p.ANO =${parseInt(req.body.ano)}
          and p.MOVIM = 'P'
          and p.DIA_PAG between ${moment()
            .startOf("month")
            .format("YYYY-MM-DD")} and ${moment()
        .endOf("month")
        .format("YYYY-MM-DD")}
          and so.ZONA in (1,3,5,30,60)
          group by so.ZONA
          )
          
          where i.mes = ${parseInt(req.body.mes)}
          and i.ano = ${parseInt(req.body.ano)}
          and i.zona in (1,3,5,30,60)
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(c1000, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act tarjetas") {
      const ctjt = await Info.$queryRaw`
         
          UPDATE ctjt i
          SET i.fichascob = (
            SELECT
              COUNT(p.ID_ABONADO)
            FROM
              debpesoW AS p
            INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
            WHERE
              p.CONVENIO in (3400,3600,3700,3800,3900,4000)
            AND s.SUCURSAL = i.sucursal
          ),
          i.cobrado = (
            SELECT
              sum(p.IMPORTE)
            FROM
              debpesoW AS p
            INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
            WHERE
              p.CONVENIO in (3400,3600,3700,3800,3900,4000)
            AND s.SUCURSAL = i.sucursal
          )
          where i.mes = ${parseInt(req.body.mes)}
          and i.ano = ${parseInt(req.body.ano)}
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(ctjt, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act banco") {
      const cbanco = await Info.$queryRaw`
         
          UPDATE cbanco i
          SET i.fichascob = (
            SELECT
              COUNT(p.ID_ABONADO)
            FROM
              debpesoW AS p
            INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
            WHERE
              p.CONVENIO = 10666
            AND s.SUCURSAL = i.sucursal
          ),
          i.cobrado = (
            SELECT
              sum(p.IMPORTE)
            FROM
              debpesoW AS p
            INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
            WHERE
              p.CONVENIO = 10666
            AND s.SUCURSAL = i.sucursal
          )
          where i.mes = ${parseInt(req.body.mes)}
          and i.ano = ${parseInt(req.body.ano)}
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(cbanco, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act policia") {
      const cpolicia = await Info.$queryRaw`
         
            UPDATE cpolicia i
            SET i.fichascob = (
              SELECT
                COUNT(p.ID_ABONADO)
              FROM
                debpesoW AS p
              INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
              WHERE
                p.CONVENIO = 6
              AND s.SUCURSAL = i.sucursal
            ),
            i.cobrado = (
              SELECT
                sum(p.IMPORTE)
              FROM
                debpesoW AS p
              INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
              WHERE
                p.CONVENIO = 6
              AND s.SUCURSAL = i.sucursal
            )
            where i.mes = ${parseInt(req.body.mes)}
            and i.ano = ${parseInt(req.body.ano)}
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(cpolicia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act adelantado null") {
      const adelNull = await Info.$queryRaw`
         
          UPDATE c1000
          SET adelantado = 0
          WHERE
            adelantado IS NULL
                        
            
              `;
      res
        .status(200)
        .json(
          JSON.stringify(adelNull, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
