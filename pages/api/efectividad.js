// import moment from "moment";
// import { Werchow, SGI, Camp, Info } from "../../libs/config";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     if (req.query.f && req.query.f === "traer cOf") {
//       const cOf = await Werchow.$queryRaw`
//       SELECT
//       m.ZONA as 'zona',
//       g.DESCRIP as 'descr',
//       (
//         SELECT
//           SUM(c.IMPORTE)
//         FROM
//           maestro AS m1
//         INNER JOIN cuo_fija AS c ON c.CONTRATO = m1.CONTRATO
//         WHERE
//           m.ZONA = m1.ZONA
//         AND m1.ZONA IN (1, 3, 5, 30, 60)
//         AND m1.GRUPO = 1000
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m.ZONA ASC
//       ) 'total',
//       (
//         SELECT
//           COUNT(*)
//         FROM
//           maestro AS m1
//         WHERE
//           m.ZONA = m1.ZONA
//         AND m1.ZONA IN (1, 3, 5, 30, 60)
//         AND m1.GRUPO = 1000
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m.ZONA ASC
//       ) 'fichas',
//       (
//         SELECT
//           SUM(p.IMPORTE)
//         FROM
//           pagos AS p
//         INNER JOIN maestro AS m1 ON m1.CONTRATO = p.CONTRATO
//         WHERE
//           m.ZONA = m1.ZONA
//         AND MES = ${parseInt(req.query.mes)}
//         AND ANO = ${parseInt(req.query.ano)}
//         AND MOVIM = 'P'
//         AND m1.ZONA IN (1, 3, 5, 30, 60)
//         AND m1.GRUPO = 1000
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m1.ZONA ASC
//       ) 'cobrado',
//       COUNT(*) 'fichascob',
//       (
// 		IFNULL(
// 			(
// 				SELECT
// 					SUM(c.IMPORTE)
// 				FROM
// 					pagos AS c
// 				INNER JOIN maestro AS m1 ON m1.CONTRATO = c.CONTRATO
			
// 				WHERE
// 					m.ZONA = m1.ZONA
// 				AND c.MES > ${parseInt(req.query.mes)}
// 				AND c.ANO = ${parseInt(req.query.ano)}
// 				AND c.MOVIM = 'P'
//         AND c.DIA_PAG BETWEEN ${moment()
//           .startOf("month")
//           .format("YYYY-MM-DD")} AND ${moment()
//         .endOf("month")
//         .format("YYYY-MM-DD")}
// 				AND m1.ZONA  IN (1, 3, 5, 30, 60)
// 				AND m1.GRUPO = 1000
// 				GROUP BY
// 					m1.ZONA
// 				ORDER BY
// 					m1.ZONA ASC
// 			),
// 			0
// 		)
// 	) 'adelantado'
//     FROM
//       maestro AS m
//     INNER JOIN zonas AS g ON g.CODIGO = m.ZONA
//     INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
//     WHERE
//       m.ZONA IN (1, 3, 5, 30, 60)
//     AND m.GRUPO = 1000
//     AND EXISTS (
//       SELECT
//         *
//       FROM
//         pagos AS p
//       WHERE
//         m.CONTRATO = p.CONTRATO
//       AND MES = ${parseInt(req.query.mes)}
//       AND ANO = ${parseInt(req.query.ano)}
//       AND MOVIM = 'P'
//     )
//     GROUP BY
//       m.ZONA,
//       g.DESCRIP
//     ORDER BY
//       m.ZONA ASC               
      
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cOf, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer cCob") {
//       const cOf = await Werchow.$queryRaw`
//       SELECT
//       m.ZONA as 'zona',
//       g.DESCRIP as 'descr',
//       (
//         SELECT
//           SUM(c.IMPORTE)
//         FROM
//           maestro AS m1
//         INNER JOIN emi AS c ON c.CONTRATO = m1.CONTRATO
//         WHERE
//           m.ZONA = m1.ZONA
//         AND m1.ZONA NOT IN (1, 3, 5, 30, 60, 99)
//         AND m1.GRUPO = 1000
//         AND c.DIA_EMI = ${moment().startOf("month").format("YYYY-MM-DD")}
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m.ZONA ASC
//       ) 'total',
//       (
//         SELECT
//           COUNT(*)
//         FROM
//           maestro AS m1
//         WHERE
//           m.ZONA = m1.ZONA
//         AND m1.ZONA NOT IN (1, 3, 5, 30, 60, 99)
//         AND m1.GRUPO = 1000
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m.ZONA ASC
//       ) 'fichas',
//       (
//         SELECT
//           SUM(p.IMPORTE)
//         FROM
//           pagos AS p
//         INNER JOIN maestro AS m1 ON m1.CONTRATO = p.CONTRATO
//         INNER JOIN emi AS c ON c.CONTRATO = m1.CONTRATO
//         WHERE
//           m.ZONA = m1.ZONA
//         AND c.NRO_RECIBO = p.NRO_RECIBO
//         AND c.SERIE = p.SERIE
//         AND c.ANO = ${parseInt(req.query.ano)}
//         AND p.MOVIM = 'P'
//         AND m1.ZONA NOT IN (1, 3, 5, 30, 60, 99)
//         AND m1.GRUPO = 1000
//         GROUP BY
//           m1.ZONA
//         ORDER BY
//           m1.ZONA ASC
//       ) 'cobrado',
//       COUNT(*) 'fichascob',
//       (
// 		IFNULL(
// 			(
// 				SELECT
// 					SUM(c.IMPORTE)
// 				FROM
// 					pagos AS c
// 				INNER JOIN maestro AS m1 ON m1.CONTRATO = c.CONTRATO
			
// 				WHERE
// 					m.ZONA = m1.ZONA
// 				AND c.MES > ${parseInt(req.query.mes)}
// 				AND c.ANO = ${parseInt(req.query.ano)}
// 				AND c.MOVIM = 'P'
//         AND c.DIA_PAG BETWEEN ${moment()
//           .startOf("month")
//           .format("YYYY-MM-DD")} AND ${moment()
//         .endOf("month")
//         .format("YYYY-MM-DD")}
// 				AND m1.ZONA  NOT IN (1, 3, 5, 30, 60, 99)
// 				AND m1.GRUPO = 1000
// 				GROUP BY
// 					m1.ZONA
// 				ORDER BY
// 					m1.ZONA ASC
// 			),
// 			0
// 		)
// 	) 'adelantado'
//     FROM
//       maestro AS m
//     INNER JOIN zonas AS g ON g.CODIGO = m.ZONA
//     INNER JOIN emi AS c ON c.CONTRATO = m.CONTRATO
//     WHERE
//       m.ZONA NOT IN (1, 3, 5, 30, 60, 99)
//     AND m.GRUPO = 1000
//     AND EXISTS (
//       SELECT
//         *
//       FROM
//         pagos AS p
//       WHERE
//         c.CONTRATO = p.CONTRATO
//       AND c.NRO_RECIBO = p.NRO_RECIBO
//       AND c.SERIE = p.SERIE
//       AND c.ANO = ${req.query.ano}
//       AND MOVIM = 'P'
//     )
//     GROUP BY
//       m.ZONA,
//       g.DESCRIP
//     ORDER BY
//       m.ZONA ASC                             
      
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cOf, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer cbanco") {
//       const cbanco = await Werchow.$queryRaw`
         
//          SELECT
// 	'BANCO ACTIVO' AS 'descr',
// 	(
// 		SELECT
// 			SUM(c.IMPORTE)
// 		FROM
// 			maestro AS m1
// 		INNER JOIN cuo_fija AS c ON c.CONTRATO = m1.CONTRATO
// 		WHERE
// 			m1.GRUPO > 5000
// 		AND m1.GRUPO NOT IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639,
// 			7777,
// 			8500,
// 			9999
// 		)
// 	) 'total',
// 	(
// 		SELECT
// 			COUNT(*)
// 		FROM
// 			maestro AS m1
// 		WHERE
// 			m1.GRUPO > 5000
// 		AND m1.GRUPO NOT IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639,
// 			7777,
// 			8500,
// 			9999
// 		)
// 	) 'fichas',
// 	(
// 		SELECT
// 			SUM(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 10666
// 		AND m1.GRUPO > 5000
// 		AND m1.GRUPO NOT IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639,
// 			7777,
// 			8500,
// 			9999
// 		)
// 	) 'cobrado',
// 	(
// 		SELECT
// 			count(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 10666
// 		AND m1.GRUPO > 5000
// 		AND m1.GRUPO NOT IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639,
// 			7777,
// 			8500,
// 			9999
// 		)
// 	) 'fichascob',
//   0 as adelantado
// FROM
// 	maestro AS m
// LIMIT 1  
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cbanco, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer cbanco pasivo") {
//       const cbanco = await Werchow.$queryRaw`
         
//          SELECT
// 	'BANCO PASIVO' AS 'descr',
// 	(
// 		SELECT
// 			SUM(c.IMPORTE)
// 		FROM
// 			maestro AS m1
// 		INNER JOIN cuo_fija AS c ON c.CONTRATO = m1.CONTRATO
// 		WHERE
// 			m1.GRUPO IN (
// 				6600,
// 				6601,
// 				6602,
// 				6603,
// 				6604,
// 				6605,
// 				6606,
// 				6607,
// 				6608,
// 				6609,
// 				6610,
// 				6611,
// 				6612,
// 				6613,
// 				6614,
// 				6635,
// 				6636,
// 				6637,
// 				6638,
// 				6639
// 			)
// 	) 'total',
// 	(
// 		SELECT
// 			COUNT(*)
// 		FROM
// 			maestro AS m1
// 		WHERE
// 			m1.GRUPO IN (
// 				6600,
// 				6601,
// 				6602,
// 				6603,
// 				6604,
// 				6605,
// 				6606,
// 				6607,
// 				6608,
// 				6609,
// 				6610,
// 				6611,
// 				6612,
// 				6613,
// 				6614,
// 				6635,
// 				6636,
// 				6637,
// 				6638,
// 				6639
// 			)
// 	) 'fichas',
// 	(
// 		SELECT
// 			SUM(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 10666
// 		AND m1.GRUPO IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639
// 		)
// 	) 'cobrado',
// 	(
// 		SELECT
// 			count(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 10666
// 		AND m1.GRUPO IN (
// 			6600,
// 			6601,
// 			6602,
// 			6603,
// 			6604,
// 			6605,
// 			6606,
// 			6607,
// 			6608,
// 			6609,
// 			6610,
// 			6611,
// 			6612,
// 			6613,
// 			6614,
// 			6635,
// 			6636,
// 			6637,
// 			6638,
// 			6639
// 		)
// 	) 'fichascob',
//   0 as adelantado
// FROM
// 	maestro AS m
// LIMIT 1
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cbanco, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer ctjt") {
//       const ctjt = await Werchow.$queryRaw`
         
//          SELECT
// 	m.GRUPO as 'zona',
// 	g.DESCRIP as 'descr',
// 	(
// 		SELECT
// 			SUM(c.IMPORTE)
// 		FROM
// 			maestro AS m1
// 		INNER JOIN cuo_fija AS c ON c.CONTRATO = m1.CONTRATO
// 		WHERE
// 			m.GRUPO = m1.GRUPO
// 		AND m1.GRUPO IN (
// 			3400,
// 			3600,
// 			3700,
// 			3800,
// 			3900,
// 			4000
// 		)
// 		GROUP BY
// 			m1.GRUPO
// 		ORDER BY
// 			m.GRUPO ASC
// 	) 'total',
// 	(
// 		SELECT
// 			COUNT(*)
// 		FROM
// 			maestro AS m1
// 		WHERE
// 			m.GRUPO = m1.GRUPO
// 		AND m1.GRUPO IN (
// 			3400,
// 			3600,
// 			3700,
// 			3800,
// 			3900,
// 			4000
// 		)
// 		GROUP BY
// 			m1.GRUPO
// 		ORDER BY
// 			m.GRUPO ASC
// 	) 'fichas',
// 	(
// 		SELECT
// 			SUM(p.IMPORTE)
// 		FROM
// 			pago_bco AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.CONTRATO
// 		WHERE
// 			m.GRUPO = m1.GRUPO
// 		AND MES = ${parseInt(req.query.mes)}
// 		AND ANO = ${parseInt(req.query.ano)}
// 		AND m1.GRUPO IN (
// 			3400,
// 			3600,
// 			3700,
// 			3800,
// 			3900,
// 			4000
// 		)
// 		GROUP BY
// 			m1.GRUPO
// 		ORDER BY
// 			m1.GRUPO ASC
// 	) 'cobrado',
// 	COUNT(*) 'fichascob',
//    0 as 'adelantado'
// FROM
// 	maestro AS m
// INNER JOIN grupos AS g ON g.CODIGO = m.GRUPO
// INNER JOIN cuo_fija AS c ON c.CONTRATO = m.CONTRATO
// WHERE
// 	m.GRUPO IN (
// 		3400,
// 		3600,
// 		3700,
// 		3800,
// 		3900,
// 		4000
// 	)
// AND EXISTS (
// 	SELECT
// 		*
// 	FROM
// 		pago_bco AS p
// 	WHERE
// 		m.CONTRATO = p.CONTRATO
// 	AND MES = ${parseInt(req.query.mes)}
// 	AND ANO = ${parseInt(req.query.ano)}
// )
// GROUP BY
// 	m.GRUPO,
// 	g.DESCRIP
// ORDER BY
// 	m.GRUPO ASC
      
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(ctjt, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer cpolicia") {
//       const cpolicia = await Werchow.$queryRaw`
         
//          SELECT
// 	'POLICIAS' AS 'descr',
// 	(
// 		SELECT
// 			SUM(c.IMPORTE)
// 		FROM
// 			maestro AS m1
// 		INNER JOIN cuo_fija AS c ON c.CONTRATO = m1.CONTRATO
// 		WHERE
// 			m1.GRUPO IN (
// 				6
// 			)
// 	) 'total',
// 	(
// 		SELECT
// 			COUNT(*)
// 		FROM
// 			maestro AS m1
// 		WHERE
// 			m1.GRUPO IN (
// 			6
// 			)
// 	) 'fichas',
// 	(
// 		SELECT
// 			SUM(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 6
// 		AND m1.GRUPO IN (
// 		6
// 		)
// 	) 'cobrado',
// 	(
// 		SELECT
// 			count(p.IMPORTE)
// 		FROM
// 			debpeso AS p
// 		INNER JOIN maestro AS m1 ON m1.CONTRATO = p.ID_ABONADO
// 		WHERE
// 			CONVENIO = 6
// 		AND m1.GRUPO IN (
// 			6
// 		)
// 	) 'fichascob',
//   0 as adelantado
// FROM
// 	maestro AS m
// LIMIT 1            
      
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cpolicia, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.query.f && req.query.f === "traer cprestamos") {
//       const cprestamos = await Info.$queryRaw`
         
//       SELECT
//         *
//       FROM
//          cprestamos
//       WHERE 
//           mes = ${parseInt(req.query.mes)}
//       AND           
//           ano = ${parseInt(req.query.ano)}

//       ORDER BY descr ASC    
             
      
//         `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cprestamos, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     }
//   } else if (req.method === "POST") {
//     if (req.body.f && req.body.f === "insert cCob") {
//       const c1000 = await Info.$queryRaw`
         
//          INSERT INTO c1000
//           (zona, total, fichas, mes, ano, descr)

//           (
//           select m.ZONA, SUM(c.IMPORTE), COUNT(*), MONTH(CURDATE()) , YEAR(CURDATE()), z.DESCRIP
//           from werchow.maestro as m
//           INNER JOIN werchow.pagos as c on c.CONTRATO = m.CONTRATO
//           INNER JOIN werchow.zonas as z on z.CODIGO = m.ZONA
//           where m.zona not in (1,3,5,30,60)
//           and m.GRUPO = 1000
//           and c.MES = ${parseInt(req.body.mes)}
//           and c.ANO = ${parseInt(req.body.ano)}
//           and c.MOVIM = 'N'

//           GROUP BY m.ZONA, z.DESCRIP
//           ORDER BY m.ZONA
//           )
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(c1000, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "insert cOf") {
//       const c1000 = await Info.$queryRaw`
         
//          INSERT INTO c1000
//           (zona, total, fichas, mes, ano, descr)

//           (
//           select m.ZONA, SUM(c.IMPORTE), COUNT(*), MONTH(CURDATE()) , YEAR(CURDATE()), z.DESCRIP
//           from werchow.maestro as m
//           INNER JOIN werchow.cuo_fija as c on c.CONTRATO = m.CONTRATO
//           INNER JOIN werchow.zonas as z on z.CODIGO = m.ZONA
//           where zona in (1,3,5,30,60)
//           and m.GRUPO = 1000

//           GROUP BY m.ZONA, z.DESCRIP
//           ORDER BY m.ZONA
//           )
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(c1000, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "insert ctjt") {
//       const ctjt = await Info.$queryRaw`
         
//          INSERT INTO ctjt (
//             fichas,
//             total,
//             mes,
//             ano,
//             sucursal,
//             descr
//           ) SELECT
//             COUNT(*),
//             SUM(m.CUOTA),
//             MONTH (CURDATE()),
//             YEAR (CURDATE()),
//             m.SUCURSAL,
//             (
//               CASE
//               WHEN m.SUCURSAL = 'C' THEN
//                 'EL CARMEN'
//               WHEN m.SUCURSAL = 'L' THEN
//                 'PALPALA'
//               WHEN m.SUCURSAL = 'R' THEN
//                 'PERICO'
//               WHEN m.SUCURSAL = 'P' THEN
//                 'SAN PEDRO'
//               WHEN m.SUCURSAL = 'W' THEN
//                 'CASA CENTRAL'
//               END
//             ) 'descr'
//           FROM
//             sow AS m
//           INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
//           INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
//           WHERE
//             GRUPO IN (3400,3600,3700,3800,3900,4000)
//           GROUP BY
//             m.SUCURSAL
//           ORDER BY
//             m.SUCURSAL
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(ctjt, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "insert cbanco") {
//       const cbanco = await Info.$queryRaw`
         
        
//          INSERT INTO cbanco (
//             fichas,
//             total,
//             mes,
//             ano,
//             sucursal,
//             descr
//           ) SELECT
//             COUNT(*),
//             SUM(m.CUOTA),
//             MONTH (CURDATE()),
//             YEAR (CURDATE()),
//             m.SUCURSAL,
//             (
//               CASE
//               WHEN m.SUCURSAL = 'C' THEN
//                 'EL CARMEN'
//               WHEN m.SUCURSAL = 'L' THEN
//                 'PALPALA'
//               WHEN m.SUCURSAL = 'R' THEN
//                 'PERICO'
//               WHEN m.SUCURSAL = 'P' THEN
//                 'SAN PEDRO'
//               WHEN m.SUCURSAL = 'W' THEN
//                 'CASA CENTRAL'
//               END
//             ) 'descr'
//           FROM
//             sow AS m
//           INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
//           INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
//           WHERE
//             GRUPO > 5000
//           AND GRUPO NOT IN (7777, 8500, 9999)
//           GROUP BY
//             m.SUCURSAL
//           ORDER BY
//             m.SUCURSAL    
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cbanco, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "insert cpolicia") {
//       const cpoliciia = await Info.$queryRaw`
         
//          INSERT INTO cpolicia (
//             fichas,
//             total,
//             mes,
//             ano,
//             sucursal,
//             descr
//           ) SELECT
//             COUNT(*),
//             SUM(m.CUOTA),
//             MONTH (CURDATE()),
//             YEAR (CURDATE()),
//             m.SUCURSAL,
//             (
//               CASE
//               WHEN m.SUCURSAL = 'C' THEN
//                 'EL CARMEN'
//               WHEN m.SUCURSAL = 'L' THEN
//                 'PALPALA'
//               WHEN m.SUCURSAL = 'R' THEN
//                 'PERICO'
//               WHEN m.SUCURSAL = 'P' THEN
//                 'SAN PEDRO'
//               WHEN m.SUCURSAL = 'W' THEN
//                 'CASA CENTRAL'
//               END
//             ) 'descr'
//           FROM
//           sow AS m
//           INNER JOIN werchow.cuo_fija AS c ON c.CONTRATO = m.CONTRATO
//           INNER JOIN werchow.grupos AS z ON z.CODIGO = m.GRUPO
//           WHERE
//             GRUPO = 6
//           GROUP BY
//             m.SUCURSAL
//           ORDER BY
//             m.SUCURSAL
      
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cpoliciia, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     }
//   } else if (req.method === "PUT") {
//     if (req.body.f && req.body.f === "act adelantado") {
//       const c1000 = await Info.$queryRaw`
         
//           UPDATE c1000 i
//           JOIN werchow.maestro AS m ON i.zona = m.ZONA
//           SET i.adelantado = (
//             SELECT
//               sum(p.IMPORTE)
//             FROM
//               werchow.pagos AS p
//             INNER JOIN werchow.maestro AS so ON so.CONTRATO = p.CONTRATO
//             WHERE
//               i.zona = so.ZONA
//             AND so.GRUPO = 1000
//             AND p.MES > ${parseInt(req.body.mes)}
//             AND p.ANO = ${parseInt(req.body.ano)}
//             AND p.MOVIM = 'P'
//             and p.DIA_PAG between ${moment()
//               .startOf("month")
//               .format("YYYY-MM-DD")} and ${moment()
//         .endOf("month")
//         .format("YYYY-MM-DD")}
//             GROUP BY
//               so.ZONA
//           )
//           WHERE i.mes = ${parseInt(req.body.mes)}
//           AND i.ano = ${parseInt(req.body.ano)}
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(c1000, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act cobradores") {
//       const c1000 = await Info.$queryRaw`
         
//           UPDATE c1000 i    
//           SET i.cobrado = 
//           (
//           SELECT  sum(p.IMPORTE)
//           FROM  werchow.pagos AS p
//           inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
//           WHERE  i.zona = so.ZONA
//           and p.MOVIM = 'P'
//           and p.DIA_EMI = ${moment().startOf("month").format("YYYY-MM-DD")} 
//           and so.ZONA not in (1,3,5,30,60,99)
//           group by so.ZONA
//           ),
          
//           i.fichascob = 
//           (
//           SELECT  count(p.CONTRATO)
//           FROM  werchow.pagos AS p
//           inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
//           WHERE  i.zona = so.ZONA
//           and p.MOVIM = 'P'
//           and p.DIA_EMI = ${moment().startOf("month").format("YYYY-MM-DD")} 
//           and so.ZONA not in (1,3,5,30,60,99)
//           group by so.ZONA
//           )
          
//           where i.mes = ${parseInt(req.body.mes)}
//           and i.ano = ${parseInt(req.body.ano)}
//           and i.zona not in (1,3,5,30,60,99)
                  
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(c1000, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act oficina") {
//       const c1000 = await Info.$queryRaw`
         
//           UPDATE c1000 i    
//           SET i.cobrado = 
//           (
//           SELECT  sum(p.IMPORTE)
//           FROM  werchow.pagos AS p
//           inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
//           WHERE  i.zona = so.ZONA
//           and p.MES <= ${parseInt(req.body.mes)}
//           and p.ANO =${parseInt(req.body.ano)}
//           and p.MOVIM = 'P'
//           and p.DIA_PAG between ${moment()
//             .startOf("month")
//             .format("YYYY-MM-DD")} and ${moment()
//         .endOf("month")
//         .format("YYYY-MM-DD")}
//           and so.ZONA in (1,3,5,30,60)
//           group by so.ZONA
//           ),
          
//           i.fichascob = 
//           (
//           SELECT  count(p.CONTRATO)
//           FROM  werchow.pagos AS p
//           inner join werchow.maestro as so on so.CONTRATO = p.CONTRATO 
//           WHERE  i.zona = so.ZONA
//           and p.MES <= ${parseInt(req.body.mes)}
//           and p.ANO =${parseInt(req.body.ano)}
//           and p.MOVIM = 'P'
//           and p.DIA_PAG between ${moment()
//             .startOf("month")
//             .format("YYYY-MM-DD")} and ${moment()
//         .endOf("month")
//         .format("YYYY-MM-DD")}
//           and so.ZONA in (1,3,5,30,60)
//           group by so.ZONA
//           )
          
//           where i.mes = ${parseInt(req.body.mes)}
//           and i.ano = ${parseInt(req.body.ano)}
//           and i.zona in (1,3,5,30,60)
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(c1000, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act tarjetas") {
//       const ctjt = await Info.$queryRaw`
         
//           UPDATE ctjt i
//           SET i.fichascob = (
//             SELECT
//               COUNT(p.ID_ABONADO)
//             FROM
//               debpesoW AS p
//             INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//             WHERE
//               p.CONVENIO in (3400,3600,3700,3800,3900,4000)
//             AND s.SUCURSAL = i.sucursal
//           ),
//           i.cobrado = (
//             SELECT
//               sum(p.IMPORTE)
//             FROM
//               debpesoW AS p
//             INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//             WHERE
//               p.CONVENIO in (3400,3600,3700,3800,3900,4000)
//             AND s.SUCURSAL = i.sucursal
//           )
//           where i.mes = ${parseInt(req.body.mes)}
//           and i.ano = ${parseInt(req.body.ano)}
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(ctjt, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act banco") {
//       const cbanco = await Info.$queryRaw`
         
//           UPDATE cbanco i
//           SET i.fichascob = (
//             SELECT
//               COUNT(p.ID_ABONADO)
//             FROM
//               debpesoW AS p
//             INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//             WHERE
//               p.CONVENIO = 10666
//             AND s.SUCURSAL = i.sucursal
//           ),
//           i.cobrado = (
//             SELECT
//               sum(p.IMPORTE)
//             FROM
//               debpesoW AS p
//             INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//             WHERE
//               p.CONVENIO = 10666
//             AND s.SUCURSAL = i.sucursal
//           )
//           where i.mes = ${parseInt(req.body.mes)}
//           and i.ano = ${parseInt(req.body.ano)}
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cbanco, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act policia") {
//       const cpolicia = await Info.$queryRaw`
         
//             UPDATE cpolicia i
//             SET i.fichascob = (
//               SELECT
//                 COUNT(p.ID_ABONADO)
//               FROM
//                 debpesoW AS p
//               INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//               WHERE
//                 p.CONVENIO = 6
//               AND s.SUCURSAL = i.sucursal
//             ),
//             i.cobrado = (
//               SELECT
//                 sum(p.IMPORTE)
//               FROM
//                 debpesoW AS p
//               INNER JOIN sow AS s ON p.ID_ABONADO = s.CONTRATO
//               WHERE
//                 p.CONVENIO = 6
//               AND s.SUCURSAL = i.sucursal
//             )
//             where i.mes = ${parseInt(req.body.mes)}
//             and i.ano = ${parseInt(req.body.ano)}
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(cpolicia, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     } else if (req.body.f && req.body.f === "act adelantado null") {
//       const adelNull = await Info.$queryRaw`
         
//           UPDATE c1000
//           SET adelantado = 0
//           WHERE
//             adelantado IS NULL
                        
            
//               `;
//       res
//         .status(200)
//         .json(
//           JSON.stringify(adelNull, (key, value) =>
//             typeof value === "bigint" ? value.toString() : value
//           )
//         );
//     }
//   }
// }
