import { Werchow, SGI, Camp, Sep } from "../../libs/config";
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
                END 'EMPRESA'   ,
                "A" as "perfil",
                m.PLAN
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}

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
                m.PLAN
                FROM mutual_adh as a
                INNER JOIN mutual as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}

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
                "A" as "perfil"
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.contrato}
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
                "A" as "perfil"
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
        console.log(pagos);
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
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo auto") {
      const regAuto = await Sep.autos.create({
        data: {
          patente: req.body.patente,
          auto: req.body.auto,
          kilometros: parseFloat(req.body.kilometros),
          responsable: req.body.responsable,
          nro_poliza: req.body.nro_poliza,
          empresa: req.body.empresa,
          vencimiento: new Date(req.body.vencimiento),
          motor: req.body.motor,
          chasis: req.body.chasis,
          modelo: parseInt(req.body.modelo),
          cobertura: req.body.cobertura,
          estado: req.body.estado,
          operador: req.body.operador,
        },
      });

      res.status(200).json(regAuto);
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
