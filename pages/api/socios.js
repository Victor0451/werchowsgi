import { Werchow, SGI, Camp, Sep, Serv } from "../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "maestro") {
      const mae = await Werchow.$queryRaw`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,
                m.SUB_PLAN, 
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.NRO_DOC = ${req.query.dni}

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro contrato") {
      const mae = await Werchow.$queryRaw`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,
                m.SUB_PLAN, 
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.CONTRATO = ${req.query.ficha}

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "adh") {
      const adh = await Werchow.$queryRaw`
          SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.BAJA,
                a.EDAD 'FALLE'
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.contrato}
                

    `;

      res
        .status(200)
        .json(
          JSON.stringify(adh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual") {
      const mut = await Werchow.$queryRaw`
                    SELECT
                        m.CONTRATO, 
                        m.GRUPO, 
                        m.SUCURSAL, 
                        m.NRO_DOC, 
                        m.APELLIDOS,
                        m.NOMBRES, 
                        m.ALTA, 
                        m.VIGENCIA, 
                        m.DOM_LAB, 
                        m.PLAN,
                        m.SUB_PLAN, 
                        m.CALLE, 
                        m.NRO_CALLE,
                        m.BARRIO, 
                        m.NACIMIENTO, 
                        m.TELEFONO, 
                        m.MOVIL, 
                        m.MAIL, 
                        c.IMPORTE, 
                        m.PRODUCTOR, 
                        m.LOCALIDAD, 
                        m.DOM_LAB , 
                        m.TSEG , 
                        "T" as "perfil", 
                        o.NOMBRE "OBRA_SOC",
                        o.CODIGO "COD_OBRA", 
                        m.ADHERENTES, 
                        TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                        m.SEXO,
                        CASE 
                            WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                            WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                            ELSE  null
                        END 'EMPRESA'                        
                        FROM mutual as m
                        INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
                        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                        WHERE m.NRO_DOC = ${req.query.dni}

            `;

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual contrato") {
      const mut = await Werchow.$queryRaw`
                    SELECT
                        m.CONTRATO, 
                        m.GRUPO, 
                        m.SUCURSAL, 
                        m.NRO_DOC, 
                        m.APELLIDOS,
                        m.NOMBRES, 
                        m.ALTA, 
                        m.VIGENCIA, 
                        m.DOM_LAB, 
                        m.PLAN,
                        m.SUB_PLAN, 
                        m.CALLE, 
                        m.NRO_CALLE,
                        m.BARRIO, 
                        m.NACIMIENTO, 
                        m.TELEFONO, 
                        m.MOVIL, 
                        m.MAIL, 
                        c.IMPORTE, 
                        m.PRODUCTOR, 
                        m.LOCALIDAD, 
                        m.DOM_LAB , 
                        m.TSEG , 
                        "T" as "perfil", 
                        o.NOMBRE "OBRA_SOC",
                        o.CODIGO "COD_OBRA", 
                        m.ADHERENTES, 
                        TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                        m.SEXO,
                        CASE 
                            WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                            WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                            ELSE  null
                        END 'EMPRESA'                        
                        FROM mutual as m
                        INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
                        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                        WHERE m.CONTRATO = ${req.query.ficha}

            `;

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual adh") {
      const mutAdh = await Werchow.$queryRaw`
        SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.BAJA,
                a.EDAD 'FALLE'
                FROM mutual_adh as a
                INNER JOIN mutual as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.contrato}
                AND BAJA IS NULL

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mae adh") {
      const maeAdh = await Werchow.$queryRaw`
            SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.EDAD 'FALLE'
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}
                AND BAJA IS NULL

    `;

      res
        .status(200)
        .json(
          JSON.stringify(maeAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mut adh") {
      const mutAdh = await Werchow.$queryRaw`
            SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.EDAD 'FALLE'
                FROM mutual_adh as a
                INNER JOIN mutual as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}
                AND BAJA IS NULL

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer grupo") {
      const grup = await Werchow.$queryRaw`
            SELECT
                CODIGO,
                DESCRIP                
            FROM grupos 
            WHERE CODIGO = ${req.query.grupo}
                

    `;

      res.status(200).json(grup);
    } else if (req.query.f && req.query.f === "traer pagos") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await Werchow.pagos.findMany({
          where: {
            CONTRATO: parseInt(req.query.ficha),
            MOVIM: "P",
          },
          orderBy: {
            DIA_PAG: "desc",
          },
        });

        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await Werchow.pagos_mutual.findMany({
          where: {
            CONTRATO: parseInt(req.query.ficha),
            MOVIM: "P",
          },
          orderBy: {
            DIA_PAG: "desc",
          },
        });

        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer pagosb") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await Werchow.pago_bco.findMany({
          where: {
            CONTRATO: parseInt(req.query.ficha),
          },
          orderBy: {
            DIA_PAGO: "desc",
          },
        });
        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await Werchow.pago_bcom.findMany({
          where: {
            CONTRATO: parseInt(req.query.ficha),
          },
          orderBy: {
            DIA_PAGO: "desc",
          },
        });
        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer archivos") {
      const archivos = await SGI.legajo_virtual.findMany({
        where: {
          contrato: parseInt(req.query.ficha),
        },
      });
      res.status(200).json(archivos);
    } else if (req.query.f && req.query.f === "reporte cartera") {
      let mes = parseInt(req.query.mes);
      let ano = parseInt(req.query.ano);
      let cartera = parseInt(req.query.cartera);
      let zona = "";
      let grupo = "";

      if (cartera === 0) {
        grupo = "1000";
        if (parseInt(req.query.zona) === 1) {
          zona = "21,22,39,40,41,42,45,23,48,54,69";
        } else if (parseInt(req.query.zona) === 3) {
          zona = "14,15";
        } else if (parseInt(req.query.zona) === 5) {
          zona = "4,47";
        } else if (parseInt(req.query.zona) === 60) {
          zona = "28,63,64,53";
        }
      } else if (cartera === 1) {
        grupo = "1000";
        zona = parseInt(req.query.zona);
      } else if (cartera === 2) {
        grupo = "3400,3600,3700,3800,3900,4000";
        zona = "99";
      } else if (cartera === 3) {
        if (req.query.emp === "W") {
          const reporte = await Werchow.$queryRaw`
            
               SELECT 
                  m.SUCURSAL,
                  m.GRUPO,
                  m.ZONA,  
                  m.CONTRATO,
                  m.NRO_DOC, 
                  m.APELLIDOS, 
                  m.NOMBRES, 
                  m.ALTA, 
                  m.CALLE, 
                  m.NRO_CALLE, 
                  m.BARRIO,
                  m.LOCALIDAD, 
                  m.TELEFONO, 
                  m.MOVIL, 
                  CASE
                  WHEN DAY(CURDATE()) <= 15 
                      THEN c.IMPORTE          
                      WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) >= ${mes}
                      THEN c.IMPORTE + (c.IMPORTE * 0.10)
                      WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) < ${mes}
                      THEN c.IMPORTE 
                      WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) >= ${mes}
                      THEN c.IMPORTE + (c.IMPORTE * 0.20)
                      WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) < ${mes}
                      THEN c.IMPORTE 
                  END 'IMPORTE' 
                  FROM maestro as m
                  INNER JOIN cuo_fija as c ON c.CONTRATO = m.CONTRATO
                  WHERE NOT EXISTS
                  (SELECT * FROM pagos as p
                  WHERE p.CONTRATO = m.CONTRATO
                  and p.MES = ${mes}
                  and p.ANO = ${ano}
                  and p.MOVIM = 'P'
                  )
                   AND NOT EXISTS
                  (SELECT * FROM pago_bco as p
                  WHERE p.CONTRATO = m.CONTRATO
                  and p.MES = ${mes}
                  and p.ANO = ${ano}                  
                  )
                  and m.PLAN != 'P'
                  AND m.GRUPO > 5000
                  AND m.GRUPO NOT IN(7777,8500,9999)
         
  
      `;

          res
            .status(200)
            .json(
              JSON.stringify(reporte, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
              )
            );
        }
      }

      if (req.query.emp === "W") {
        const reporte = await Werchow.$queryRaw`
          
             SELECT 
                m.SUCURSAL,
                m.GRUPO,
                m.ZONA,  
                m.CONTRATO,
                m.NRO_DOC, 
                m.APELLIDOS, 
                m.NOMBRES, 
                m.ALTA, 
                m.CALLE, 
                m.NRO_CALLE, 
                m.BARRIO,
                m.LOCALIDAD, 
                m.TELEFONO, 
                m.MOVIL, 
                CASE
                WHEN DAY(CURDATE()) <= 15 
                    THEN c.IMPORTE          
                    WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) >= ${mes}
                    THEN c.IMPORTE + (c.IMPORTE * 0.10)
                    WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) < ${mes}
                    THEN c.IMPORTE 
                    WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) >= ${mes}
                    THEN c.IMPORTE + (c.IMPORTE * 0.20)
                    WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) < ${mes}
                    THEN c.IMPORTE 
                END 'IMPORTE' 
                FROM maestro as m
                INNER JOIN cuo_fija as c ON c.CONTRATO = m.CONTRATO
                WHERE NOT EXISTS
                (SELECT * FROM pagos as p
                WHERE p.CONTRATO = m.CONTRATO
                and p.MES = ${mes}
                and p.ANO = ${ano}
                and p.MOVIM = 'P'
                )
                 AND NOT EXISTS
                (SELECT * FROM pago_bco as p
                WHERE p.CONTRATO = m.CONTRATO
                and p.MES = ${mes}
                and p.ANO = ${ano}                  
                )
                and m.PLAN != 'P'
                AND FIND_IN_SET(GRUPO, ${grupo} )
                AND FIND_IN_SET(ZONA, ${zona} )

    `;

        res
          .status(200)
          .json(
            JSON.stringify(reporte, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else if (req.query.emp === "M") {
        const reporte = await Werchow.$queryRaw`
          
        SELECT 
           m.SUCURSAL,
           m.GRUPO,
           m.ZONA,  
           m.CONTRATO,
           m.NRO_DOC, 
           m.APELLIDOS, 
           m.NOMBRES, 
           m.ALTA, 
           m.CALLE, 
           m.NRO_CALLE, 
           m.BARRIO,
           m.LOCALIDAD, 
           m.TELEFONO, 
           m.MOVIL, 
           CASE
           WHEN DAY(CURDATE()) <= 15 
               THEN c.IMPORTE          
               WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) >= ${mes}
               THEN c.IMPORTE + (c.IMPORTE * 0.10)
               WHEN DAY(CURDATE()) > 15 && MONTH(CURDATE()) < ${mes}
               THEN c.IMPORTE 
               WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) >= ${mes}
               THEN c.IMPORTE + (c.IMPORTE * 0.20)
               WHEN DAY(CURDATE()) >= 28 && MONTH(CURDATE()) < ${mes}
               THEN c.IMPORTE 
           END 'IMPORTE' 
           FROM mutual as m
           INNER JOIN cuo_mutual as c ON c.CONTRATO = m.CONTRATO
           WHERE NOT EXISTS
           (SELECT * FROM pagos_mutual as p
           WHERE p.CONTRATO = m.CONTRATO
           and p.MES = ${mes}
           and p.ANO = ${ano}
           and p.MOVIM = 'P'
           )
           AND NOT EXISTS
                (SELECT * FROM pago_bcom as p
                WHERE p.CONTRATO = m.CONTRATO
                and p.MES = ${mes}
                and p.ANO = ${ano}                  
                )
           and m.PLAN != 'P'
           AND FIND_IN_SET(GRUPO, ${grupo} )
           AND FIND_IN_SET(ZONA, ${zona} )

`;

        res
          .status(200)
          .json(
            JSON.stringify(reporte, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "generar ncert") {
      const nCert = await SGI.certificado_estudiantes.findFirst({
        select: {
          idcertificado: true,
        },
        orderBy: {
          idcertificado: "desc",
        },
      });
      res.status(200).json(nCert);
    } else if (req.query.f && req.query.f === "traer usos") {
      const usos = await Serv.$queryRaw`
         
         SELECT
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          p.NOMBRE,
          u.SERVICIO,
          u.IMPORTE,
          u.ANULADO,
          'WEB' AS SISTEMA,
          u.ORDEN
        FROM
          USOS AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.CONTRATO = ${parseInt(req.query.contrato)}
        ORDER BY u.FECHA DESC
              `;

      const usosFa = await Serv.$queryRaw`
         
         SELECT
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          p.NOMBRE,
          u.SERVICIO,
          u.IMPORTE,
          u.ANULADO,
          'FOX' AS SISTEMA,
          u.ORDEN
        FROM
          USOSFA AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.CONTRATO = ${parseInt(req.query.contrato)}
        ORDER BY u.FECHA DESC
`;

      let historial = usos.concat(usosFa);

      res
        .status(200)
        .json(
          JSON.stringify(historial, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.method === "POST") {
      if (req.body.f && req.body.f === "soli afi") {
        const regSoli = await SGI.rehabilitaciones.create({
          data: {
            contrato: `${req.body.contrato}`,
            apellido: req.body.apellido,
            nombre: req.body.nombre,
            operador: req.body.operador,
            idoperador: parseInt(req.body.idoperador),
            vigencia: new Date(req.body.vigencia),
            fecha: new Date(req.body.fecha),
            cuotas: parseInt(req.body.cuotas),
            dni: parseInt(req.body.dni),
            empresa: req.body.empresa,
          },
        });

        res.status(200).json(regSoli);
      } else if (req.body.f && req.body.f === "reg certificado") {
        const regSoli = await SGI.certificado_estudiantes.create({
          data: {
            contrato: parseInt(req.body.contrato),
            socio: req.body.socio,
            fecha: new Date(req.body.fecha),
            operador: req.body.operador,
            ncert: req.body.ncert,
          },
        });

        res.status(200).json(regSoli);
      }
    }
    if (req.method === "PUT") {
      if (req.body.f && req.body.f === "renov poliza") {
        const regAuto = await Sep.autos.update({
          data: {
            nro_poliza: req.body.nro_poliza,
            empresa: req.body.empresa,
            vencimiento: new Date(req.body.vencimiento),
            cobertura: req.body.cobertura,
          },
          where: {
            idauto: req.body.idauto,
          },
        });

        res.status(200).json(regAuto);
      }
    }
  }
}
