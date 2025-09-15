import moment from "moment";
import { werchow, sgi, serv, sep } from "../../libs/db/index";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "maestro") {
      const mae = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro contrato") {
      let mae = await werchow.query(`
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
        
        `);

      await werchow.end();
      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro apellido") {
      const mae = await await werchow.query(`
            SELECT
               *     
            FROM maestro as m               
            WHERE m.APELLIDOS LIKE UPPER('%${req.query.apellido}%')

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro baja") {
      const mae = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro baja contrato") {
      const mae = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "adh") {
      const adh = await await werchow.query(`
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
                

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(adh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual") {
      const mut = await await werchow.query(`
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

            `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual contrato") {
      const mut = await werchow.query(`
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

            `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual apellido") {
      const mae = await await werchow.query(`
            SELECT
               *    
            FROM mutual as m               
            WHERE m.APELLIDOS LIKE UPPER('%${req.query.apellido}%')

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual baja") {
      const mae = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual baja contrato") {
      const mae = await await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual adh") {
      const mutAdh = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mae adh") {
      const maeAdh = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(maeAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mae adh baja") {
      const maeAdh = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(maeAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mut adh") {
      const mutAdh = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mut adh baja") {
      const mutAdh = await werchow.query(`
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

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer grupo") {
      const grup = await werchow.query(`
            SELECT
                CODIGO,
                DESCRIP                
            FROM grupos 
            WHERE CODIGO = ${req.query.grupo}
                

    `);

      await werchow.end();

      res.status(200).json(grup);
    } else if (req.query.f && req.query.f === "traer pagos") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pagos
                WHERE CONTRATO = ${parseInt(req.query.ficha)}
                AND MOVIM = 'P'
                ORDER BY DIA_PAG DESC
          `
        );

        await werchow.end();

        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pagos_mutual
                WHERE CONTRATO = ${parseInt(req.query.ficha)}
                AND MOVIM = 'P'
                ORDER BY DIA_PAG DESC
          `
        );

        await werchow.end();

        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer pagosb") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await werchow.query(
          `
          SELECT *
          FROM pago_bco
          WHERE CONTRATO = ${parseInt(req.query.ficha)}  
          ORDER BY DIA_PAGO DESC
          `
        );
        await werchow.end();
        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pago_bcom
                WHERE CONTRATO = ${parseInt(req.query.ficha)}                
                ORDER BY DIA_PAGO DESC
          `
        );

        await werchow.end();
        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer archivos") {
      const archivos = await sgi.query(`
                SELECT *
                FROM legajo_virtual
                WHERE contrato = ${parseInt(req.query.ficha)}

                `);

      await sgi.end();

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
          const reporte = await werchow.query(`
            
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
         
  
      `);

          await werchow.end();

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
        const reporte = await werchow.query(`
          
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

    `);

        await werchow.end();

        res
          .status(200)
          .json(
            JSON.stringify(reporte, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else if (req.query.emp === "M") {
        const reporte = await werchow.query(`
          
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

`);
        await werchow.end();

        res
          .status(200)
          .json(
            JSON.stringify(reporte, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "generar ncert") {
      const nCert = await sgi.query(
        `
          SELECT *
          FROM certificado_estudiantes
          ORDER BY idcertificado DESC
          
          `
      );

      await sgi.end();

      res.status(200).json(nCert);
    } else if (req.query.f && req.query.f === "traer usos") {
      const usos = await serv.query(`
         
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
              `);

      await serv.end();

      const usosFa = await serv.query(`
         
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
`);

      await serv.end();

      let historial = usos.concat(usosFa);

      res
        .status(200)
        .json(
          JSON.stringify(historial, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer grupos") {
      const grupos = await sgi.query(`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               grupos       
        
            ORDER BY CODIGO ASC
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(grupos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer zonas") {
      const zonas = await sgi.query(`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               zonas       
        
            ORDER BY CODIGO ASC
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(zonas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer sucursales") {
      const sucursales = await sgi.query(`
         
            SELECT
              codigo,
              sucursal
            FROM
               sucursal        
            
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(sucursales, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer productores") {
      const producto = await sgi.query(`
         
            SELECT
               CODIGO,
               DESCRIP
            FROM
               producto       
        
            ORDER BY CODIGO ASC      
            
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(producto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer localidades") {
      const localida = await sgi.query(`
         
            SELECT
               CODIGO,
               DETALLE 'DESCRIP'
            FROM
               localida   
        
            ORDER BY CODIGO ASC      
            
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(localida, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer obra social") {
      const localida = await werchow.query(`
         
            SELECT
               CODIGO,
               NOMBRE 'DESCRIP'
            FROM
               obra_soc   
        
            ORDER BY CODIGO ASC      
            
              `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(localida, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes") {
      const planes = await werchow.query(`
         
            SELECT
               PLAN,
               SUB_PLAN,
               DESCRIP
            FROM
               planes   
                     
            
              `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(planes, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer n ficha") {
      const nFicha = await werchow.query(
        `
          SELECT CONTRATO
          FROM maestro
          WHERE CONTRATO <= 100000
          ORDER BY CONTRATO DESC
          `
      );

      await werchow.end();

      res.status(200).json(nFicha);
    } else if (req.query.f && req.query.f === "traer historial") {
      const histCuota = await werchow.query(`
         
      SELECT
            *
      FROM
         historia
      WHERE 
         CONTRATO = ${parseInt(req.query.contrato)}                

      ORDER BY idhistoria DESC
        `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(histCuota, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cuota mensual") {
      const cuotaMensual = await werchow.query(
        `
          SELECT *
          FROM cuo_fija
          WHERE CONTRATO = ${parseInt(req.query.contrato)}
        `
      );

      await werchow.end();

      res.status(200).json(cuotaMensual);
    } else if (req.query.f && req.query.f === "traer cuotas") {
      const histCuota = await werchow.query(`
         
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
              `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(histCuota, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado reintegros") {
      const listReintegros = await sgi.query(`
         
      SELECT
        *
      FROM
        reintegros
      
        `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(listReintegros, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer beneficios") {
      const beneficios = await sgi.query(
        `
          SELECT *
          FROM beneficios
          WHERE contrato = ${parseInt(req.query.ficha)}  
  
        `
      );

      await sgi.end();

      res.status(200).json(beneficios);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "soli afi") {
      const regSoli = await sgi.query(
        `
        INSERT INTO rehabilitaciones

         (contrato,
          apellido,
          nombre,
          operador,
          idoperador,
          vigencia,
          fecha,
          cuotas,
          dni,
          empresa)

        VALUES (
         ${req.body.contrato},
           '${req.body.apellido}',
           '${req.body.nombre}',
           '${req.body.operador}',
           ${parseInt(req.body.idoperador)},
           '${moment(req.body.vigencia).format("YYYY-MM-DD")}',
           '${moment(req.body.fecha).format("YYYY-MM-DD")}',
           ${parseInt(req.body.cuotas)},
           ${parseInt(req.body.dni)},
           '${req.body.empresa}'
        
        )

        `
      );

      await sgi.end();

      res.status(200).json(regSoli);
    } else if (req.body.f && req.body.f === "reg certificado") {
      const regSoli = await sgi.query(
        `
         INSERT INTO certificado_estudiantes 
         (
          contrato,
          socio,
          fecha,
          operador,
          ncert
         )

         VALUES

        (
           ${parseInt(req.body.contrato)},
           '${req.body.socio}',
           '${moment(req.body.fecha).format("YYYY-MM-DD")}',
           '${req.body.operador}',
           ${req.body.ncert},
        
        )


  `
      );

      await sgi.end();

      res.status(200).json(regSoli);
    } else if (req.body.f && req.body.f === "reg socio") {
      const regSocio = await werchow.query(
        `
      INSERT INTO maestro
         (
          CONTRATO,
          GRUPO,
          ZONA,
          SUCURSAL,
          PRODUCTOR,
          APELLIDOS,
          NOMBRES,
          NRO_DOC,
          NACIMIENTO,
          CALLE,
          NRO_CALLE,
          BARRIO,
          LOCALIDAD,
          DOMI_COBR,
          DOM_LAB,
          ALTA,
          VIGENCIA,
          TELEFONO,
          MOVIL,
          MAIL,
          EMPRESA,
          OPERADOR,
          OBRA_SOC,
          PLAN,
          SUB_PLAN

      )

      VALUES 
      (
           ${parseInt(req.body.CONTRATO)},
           ${parseInt(req.body.GRUPO)},
           ${parseInt(req.body.ZONA)},
           '${req.body.SUCURSAL}',
           ${parseInt(req.body.PRODUCTO)},
           '${req.body.APELLIDOS}',
           '${req.body.NOMBRES}',
           ${parseInt(req.body.NRO_DOC)},
           ${moment(req.body.NACIMIENTO).format("YYYY-MM-DD")},
           '${req.body.CALLE}',
           ${parseInt(req.body.NRO_CALLE)},
           '${req.body.BARRIO}',
           '${req.body.LOCALIDAD}',
           '${req.body.DOMI_COBR}',
           '${req.body.DOMI_LAB}',
           ${moment(req.body.ALTA).format("YYYY-MM-DD")},
           ${moment(req.body.VIGENCIA).format("YYYY-MM-DD")},
           '${req.body.TELEFONO}',
           '${req.body.MOVIL}',
           '${req.body.MAIL}',
           '${req.body.EMPRESA}',
           ${parseInt(req.body.OPERADOR)},
           ${parseInt(req.body.OBRA_SOC)},
           '${req.body.PLAN}',
           '${req.body.SUB_PLAN}',
      
      )

`
      );

      await werchow.end();

      res.status(200).json(regSocio);
    } else if (req.body.f && req.body.f === "reg adh") {
      const regAdh = await werchow.query(
        `
      INSERT INTO adherent
       (
          CONTRATO,
          SUCURSAL,
          PRODUCTOR,
          APELLIDOS,
          NOMBRES,
          NRO_DOC,
          NACIMIENTO,
          ALTA,
          VIGENCIA,
          OBRA_SOC,
          PLAN,
          SUB_PLAN
       )

      VALUES 
      (
           ${parseInt(req.body.CONTRATO)},
           '${req.body.SUCURSAL}',
           ${parseInt(req.body.PRODUCTOR)},
           '${req.body.APELLIDOS}',
           '${req.body.NOMBRES}',
           ${parseInt(req.body.NRO_DOC)},
           ${moment(req.body.NACIMIENTO).format("YYYY-MM-DD")},
           ${moment(req.body.ALTA).format("YYYY-MM-DD")},
           ${moment(req.body.VIGENCIA).format("YYYY-MM-DD")},
           ${parseInt(req.body.OBRA_SOC)},
           '${req.body.PLAN}',
           '${req.body.SUB_PLAN}',
      
      ) 
`
      );

      await werchow.end();

      res.status(200).json(regAdh);
    } else if (req.body.f && req.body.f === "reg cuota") {
      const regCuota = await werchow.query(
        `
        INSERT INTO cuo_fija
          (
            CONTRATO,
            IMPORTE,
            CUO_ANT,
            DESDE,
            OPERADOR
          
          )
        VALUES 
          (
            ${parseInt(req.body.CONTRATO)},
            ${parseFloat(req.body.IMPORTE)},
            ${parseFloat(req.body.CUO_ANT)},
            ${moment(req.body.DESDE).format("YYYY-MM-DD")},
            '${req.body.OPERADOR}',

          )

        
        `
      );

      await werchow.end();

      res.status(200).json(regCuota);
    } else if (req.body.f && req.body.f === "solicitud reintegro") {
      const regCuota = await sgi.query(
        `
          INSERT INTO reintegros
            (
                contrato,
                socio,
                dni,
                entidad,
                norden,
                importe,
                observacion,
                operador,
                fecha

            )

          VALUES 
            (
                ${parseInt(req.body.contrato)},
                '${req.body.socio}',
                ${parseInt(req.body.dni)},
                '${req.body.entidad}',
                '${req.body.nOrden}',
                ${parseFloat(req.body.importe)},
                '${req.body.observacion}',
                '${req.body.operador}',
                ${moment(req.body.fecha).format("YYYY-MM-DD")},


            )  
  
  `
      );

      await sgi.end();

      res.status(200).json(regCuota);
    } else if (req.body.f && req.body.f === "reg beneficio") {
      const regBene = await sgi.query(
        `
          INSERT INTO beneficios
            (
            contrato,
            dni,
            socio,
            beneficio,
            observacion,
            fecha,
            operador
            
            )

          VALUES
            (
              ${parseInt(req.body.contrato)},
              ${parseInt(req.body.dni)},
              '${req.body.socio}',
              '${req.body.beneficio}',
              '${req.body.observacion}',
              '${moment(req.body.fecha).format("YYYY-MM-DD")}',
              '${req.body.operador}'

            )

        `
      );

      await sgi.end();

      res.status(200).json(regBene);
    }
  } else if (req.method === "PUT") {
  }
}
