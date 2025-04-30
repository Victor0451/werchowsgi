import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f === "prestadores") {
      const prestadores = await Serv.PRESTADO.findMany({
        orderBy: {
          NOMBRE: "asc",
        },
      });
      res.status(200).json(prestadores);
    }
    if (req.query.f === "prestadores sucu") {
      if (req.query.sucu === "O") {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            OTERO: 1,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      } else if (req.query.sucu === "W") {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            SUC: req.query.sucu,
            OTERO: 0,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      } else {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            SUC: req.query.sucu,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      }
    } else if (req.query.f === "consultas otero") {
      const consultas = await Serv.USOS.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: "ORDE",
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "consultas fabian") {
      const consultas = await Serv.USOSFA.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: "ORDE",
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "practicas otero") {
      const consultas = await Serv.USOS.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: { notIn: ["ORDE", "FARM"] },
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "practicas fabian") {
      const consultas = await Serv.USOSFA.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: { notIn: ["ORDE", "FARM"] },
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (
      req.query.f &&
      req.query.f === "informe orden por especialidad"
    ) {
      if (req.query.sucursal === "O") {
        const infoPres = await Serv.$queryRaw`
         
        SELECT 'OTERO' as SUC, p.LIS_ESPE, COUNT(*) as 'USOS', SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO = 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = 'W'
        AND p.OTERO = 1
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.LIS_ESPE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoPres, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const infoEspe = await Serv.$queryRaw`
         
        SELECT 
          (CASE 
            WHEN p.SUC = 'W'
            THEN 'C. CENTRAL'
            WHEN p.SUC = 'L'
            THEN 'PALPALA'
            WHEN p.SUC = 'R'
            THEN 'PERICO'
            WHEN p.SUC = 'C'
            THEN 'EL CARMEN'
            WHEN p.SUC = 'P'
            THEN 'SAN PEDRO'
            END
          ) as 'SUC', 
          p.LIS_ESPE, 
          COUNT(*) as 'USOS', 
          SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO = 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = ${req.query.sucursal}
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.LIS_ESPE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoEspe, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (
      req.query.f &&
      req.query.f === "informe practicas por especialidad"
    ) {
      if (req.query.sucursal === "O") {
        const infoPres = await Serv.$queryRaw`
         
        SELECT 'OTERO' as SUC, p.LIS_ESPE, COUNT(*) as 'USOS', SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO != 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = 'W'
        AND p.OTERO = 1
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.LIS_ESPE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoPres, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const infoEspe = await Serv.$queryRaw`
         
        SELECT 
          (CASE 
            WHEN p.SUC = 'W'
            THEN 'C. CENTRAL'
            WHEN p.SUC = 'L'
            THEN 'PALPALA'
            WHEN p.SUC = 'R'
            THEN 'PERICO'
            WHEN p.SUC = 'C'
            THEN 'EL CARMEN'
            WHEN p.SUC = 'P'
            THEN 'SAN PEDRO'
            END
          ) as 'SUC', 
          p.LIS_ESPE, 
          COUNT(*) as 'USOS', 
          SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO != 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = ${req.query.sucursal}
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.LIS_ESPE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoEspe, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "informe orden por prestador") {
      if (req.query.sucursal === "O") {
        const infoPres = await Serv.$queryRaw`
         
        SELECT 'OTERO' as SUC, p.NOMBRE, COUNT(*) as 'USOS', SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO = 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = 'W'
        AND p.OTERO = 1
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.NOMBRE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoPres, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const infoEspe = await Serv.$queryRaw`
         
        SELECT 
          (CASE 
            WHEN p.SUC = 'W'
            THEN 'C. CENTRAL'
            WHEN p.SUC = 'L'
            THEN 'PALPALA'
            WHEN p.SUC = 'R'
            THEN 'PERICO'
            WHEN p.SUC = 'C'
            THEN 'EL CARMEN'
            WHEN p.SUC = 'P'
            THEN 'SAN PEDRO'
            END
          ) as 'SUC', 
          p.NOMBRE, 
          COUNT(*) as 'USOS', 
          SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO = 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = ${req.query.sucursal}
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.NOMBRE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoEspe, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (
      req.query.f &&
      req.query.f === "informe practicas por prestador"
    ) {
      if (req.query.sucursal === "O") {
        const infoPres = await Serv.$queryRaw`
         
        SELECT 'OTERO' as SUC, p.NOMBRE, COUNT(*) as 'USOS', SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO != 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = 'W'
        AND p.OTERO = 1
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.NOMBRE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoPres, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const infoEspe = await Serv.$queryRaw`
         
        SELECT 
          (CASE 
            WHEN p.SUC = 'W'
            THEN 'C. CENTRAL'
            WHEN p.SUC = 'L'
            THEN 'PALPALA'
            WHEN p.SUC = 'R'
            THEN 'PERICO'
            WHEN p.SUC = 'C'
            THEN 'EL CARMEN'
            WHEN p.SUC = 'P'
            THEN 'SAN PEDRO'
            END
          ) as 'SUC', 
          p.NOMBRE, 
          COUNT(*) as 'USOS', 
          SUM(IMPORTE) as 'IMPORTE'
        FROM USOS as u
        INNER JOIN PRESTADO as p on p.COD_PRES = u.PRESTADO
        WHERE u.ANULADO = 0
        AND u.SERVICIO != 'ORDE'
        AND p.SUC is not null 
        AND p.SUC = ${req.query.sucursal}
        AND u.FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
        GROUP BY p.SUC, p.NOMBRE
        ORDER BY COUNT(*) DESC
     
       `;

        res
          .status(200)
          .json(
            JSON.stringify(infoEspe, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "informe top practicas") {
      const topPrac = await Serv.$queryRaw`
         
         SELECT PRAC_REA, COD_PRAC, DESCRIP, COUNT(*) as 'USOS', SUM(IMPORTE) as 'IMPORTE'
         FROM PRACTICA
         WHERE ANULADO = 0
         AND FECHA BETWEEN ${req.query.desde} and ${req.query.hasta}
         AND SUC_PRA = ${req.query.sucursal}
         GROUP BY COD_PRAC, DESCRIP, PRAC_REA
         ORDER BY COUNT(*) DESC
     
       `;

      res
        .status(200)
        .json(
          JSON.stringify(topPrac, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
