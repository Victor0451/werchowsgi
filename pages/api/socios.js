import { Werchow, SGI, Camp, Sep, Serv, Arch } from "../../libs/config";
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
    } else if (req.query.f && req.query.f === "maestro apellido") {
      const mae = await Werchow.$queryRawUnsafe(`
            SELECT
               *     
            FROM maestro as m               
            WHERE m.APELLIDOS LIKE UPPER('%${req.query.apellido}%')

    `);

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro baja") {
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
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                "WERCHOW SERV. SOC." as "OBRA_SOC",
                "47" as "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM bajas as m              
                WHERE m.NRO_DOC = ${req.query.dni}

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro baja contrato") {
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
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                "WERCHOW SERV. SOC." as "OBRA_SOC",
                "47" as "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM bajas as m              
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
                a.EDAD 'FALLE',
                a.PLAN,
                a.SUB_PLAN
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
    } else if (req.query.f && req.query.f === "mutual apellido") {
      const mae = await Werchow.$queryRawUnsafe(`
            SELECT
               *    
            FROM mutual as m               
            WHERE m.APELLIDOS LIKE UPPER('%${req.query.apellido}%')

    `);

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual baja") {
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
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                "WERCHOW SERV. SOC." as "OBRA_SOC",
                "47" as "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM bajas_mutual as m              
                WHERE m.NRO_DOC = ${req.query.dni}

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual baja contrato") {
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
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                "WERCHOW SERV. SOC." as "OBRA_SOC",
                "47" as "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM bajas_mutual as m              
                WHERE m.CONTRATO = ${req.query.ficha}

    `;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
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
    } else if (req.query.f && req.query.f === "mae adh baja") {
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
                AND BAJA IS NOT NULL

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
    } else if (req.query.f && req.query.f === "mut adh baja") {
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
                AND BAJA IS NOT NULL

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
    } else if (req.query.f && req.query.f === "traer grupos") {
      const grupos = await SGI.$queryRaw`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               grupos       
        
            ORDER BY CODIGO ASC
              `;

      res
        .status(200)
        .json(
          JSON.stringify(grupos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer zonas") {
      const zonas = await SGI.$queryRaw`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               zonas       
        
            ORDER BY CODIGO ASC
              `;

      res
        .status(200)
        .json(
          JSON.stringify(zonas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer sucursales") {
      const sucursales = await SGI.$queryRaw`
         
            SELECT
              codigo,
              sucursal
            FROM
               sucursal        
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(sucursales, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer productores") {
      const producto = await SGI.$queryRaw`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               producto       
        
            ORDER BY CODIGO ASC      
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(producto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer localidades") {
      const localida = await SGI.$queryRaw`
         
            SELECT
               CODIGO,
               DETALLE 'DESCRIP'
            FROM
               localida   
        
            ORDER BY CODIGO ASC      
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(localida, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer obra social") {
      const localida = await Werchow.$queryRaw`
         
            SELECT
               CODIGO,
               NOMBRE 'DESCRIP'
            FROM
               obra_soc   
        
            ORDER BY CODIGO ASC      
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(localida, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes") {
      const planes = await Werchow.$queryRaw`
         
            SELECT
               PLAN,
               SUB_PLAN,
               DESCRIP
            FROM
               planes   
                     
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(planes, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer n ficha") {
      const nFicha = await Werchow.maestro.findFirst({
        select: {
          CONTRATO: true,
        },
        where: {
          CONTRATO: {
            lte: 100000,
          },
        },
        orderBy: {
          CONTRATO: "desc",
        },
      });
      res.status(200).json(nFicha);
    } else if (req.query.f && req.query.f === "traer historial") {
      const histCuota = await Werchow.$queryRaw`
         
      SELECT
            *
      FROM
         historia
      WHERE 
         CONTRATO = ${parseInt(req.query.contrato)}                

      ORDER BY idhistoria DESC
        `;

      res
        .status(200)
        .json(
          JSON.stringify(histCuota, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cuota mensual") {
      const cuotaMensual = await Werchow.cuo_fija.findMany({
        where: {
          CONTRATO: parseInt(req.query.contrato),
        },
      });

      res.status(200).json(cuotaMensual);
    } else if (req.query.f && req.query.f === "traer cuotas") {
      const histCuota = await Werchow.$queryRaw`
         
            SELECT
               CONTRATO,
               ACTUALIZA,
               ANTERIOR,
               NUEVO
            FROM
               historia
            WHERE 
               CONTRATO = ${parseInt(req.query.contrato)}                
            AND 
               NUEVO like '%AUMENTO%'                       
            ORDER BY idhistoria DESC
              `;

      res
        .status(200)
        .json(
          JSON.stringify(histCuota, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado reintegros") {
      const listReintegros = await SGI.$queryRaw`
         
      SELECT
        *
      FROM
        reintegros
      
        `;

      res
        .status(200)
        .json(
          JSON.stringify(listReintegros, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer beneficios") {
      const beneficios = await SGI.beneficios.findMany({
        where: {
          contrato: parseInt(req.query.ficha),
        },
      });

      res.status(200).json(beneficios);
    }
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
    } else if (req.body.f && req.body.f === "reg socio") {
      const regSocio = await Werchow.maestro.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          GRUPO: parseInt(req.body.GRUPO),
          ZONA: parseInt(req.body.ZONA),
          SUCURSAL: req.body.SUCURSAL,
          PRODUCTOR: parseInt(req.body.PRODUCTO),
          APELLIDOS: req.body.APELLIDOS,
          NOMBRES: req.body.NOMBRES,
          NRO_DOC: parseInt(req.body.NRO_DOC),
          NACIMIENTO: new Date(req.body.NACIMIENTO),
          CALLE: req.body.CALLE,
          NRO_CALLE: parseInt(req.body.NRO_CALLE),
          BARRIO: req.body.BARRIO,
          LOCALIDAD: req.body.LOCALIDAD,
          DOMI_COBR: req.body.DOMI_COBR,
          DOM_LAB: req.body.DOMI_LAB,
          ALTA: new Date(req.body.ALTA),
          VIGENCIA: new Date(req.body.VIGENCIA),
          TELEFONO: req.body.TELEFONO,
          MOVIL: req.body.MOVIL,
          MAIL: req.body.MAIL,
          EMPRESA: req.body.EMPRESA,
          OPERADOR: parseInt(req.body.OPERADOR),
          OBRA_SOC: parseInt(req.body.OBRA_SOC),
          PLAN: req.body.PLAN,
          SUB_PLAN: req.body.SUB_PLAN,
        },
      });

      res.status(200).json(regSocio);
    } else if (req.body.f && req.body.f === "reg adh") {
      const regAdh = await Werchow.adherent.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          SUCURSAL: req.body.SUCURSAL,
          PRODUCTOR: parseInt(req.body.PRODUCTOR),
          APELLIDOS: req.body.APELLIDOS,
          NOMBRES: req.body.NOMBRES,
          NRO_DOC: parseInt(req.body.NRO_DOC),
          NACIMIENTO: new Date(req.body.NACIMIENTO),
          ALTA: new Date(req.body.ALTA),
          VIGENCIA: new Date(req.body.VIGENCIA),
          OBRA_SOC: req.body.OBRA_SOC,
          PLAN: req.body.PLAN,
          SUB_PLAN: req.body.SUB_PLAN,
        },
      });

      res.status(200).json(regAdh);
    } else if (req.body.f && req.body.f === "reg cuota") {
      const regCuota = await Werchow.cuo_fija.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          IMPORTE: parseFloat(req.body.IMPORTE),
          CUO_ANT: parseFloat(req.body.CUO_ANT),
          DESDE: new Date(req.body.DESDE),
          OPERADOR: req.body.OPERADOR,
        },
      });

      res.status(200).json(regCuota);
    } else if (req.body.f && req.body.f === "solicitud reintegro") {
      const regCuota = await SGI.reintegros.create({
        data: {
          contrato: parseInt(req.body.contrato),
          socio: req.body.socio,
          dni: parseInt(req.body.dni),
          entidad: req.body.entidad,
          norden: req.body.nOrden,
          importe: parseFloat(req.body.importe),
          observacion: req.body.observacion,
          operador: req.body.operador,
          fecha: new Date(req.body.fecha),
        },
      });

      res.status(200).json(regCuota);
    } else if (req.body.f && req.body.f === "reg beneficio") {
      const regBene = await SGI.beneficios.create({
        data: {
          contrato: parseInt(req.body.contrato),
          dni: parseInt(req.body.dni),
          socio: req.body.socio,
          beneficio: req.body.beneficio,
          observacion: req.body.observacion,
          fecha: new Date(req.body.fecha),
          operador: req.body.operador,
        },
      });

      res.status(200).json(regBene);
    }
  } else if (req.method === "PUT") {
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
