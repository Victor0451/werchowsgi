import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "servicios") {
      const servicios = await Sep.servicios.findMany({
        where: {
          dni: parseInt(req.query.dni),
        },
      });

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "check servicio") {
      const servicios = await Sep.servicios.findFirst({
        where: {
          dni: parseInt(req.query.dni),
        },
      });

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "traer servicios") {
      const servicios = await Sep.servicios.findMany({
        orderBy: {
          fecha_fallecimiento: "desc",
        },
      });

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "traer servicios historicos") {
      const servicios = await Sep.servicios_historico.findMany();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "legajo servicio") {
      const servicios = await Sep.servicios.findMany({
        where: {
          idservicio: parseInt(req.query.id),
        },
      });

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const servicios = await Sep.legajo_virtual_servicios.findMany({
        where: {
          servicio: parseInt(req.query.dni),
        },
      });

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "servicios sin impactar") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
                SELECT
                s.empresa,
                s.contrato,
                concat(s.apellido,', ', s.nombre, ' - ', s.dni) 'difunto',                
                (
                  CASE
                  WHEN s.empresa = 'Werchow'
                  AND EXISTS (
                    SELECT
                      SEGURO
                    FROM
                      werchow.maestro AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND SEGURO = 1
                  ) THEN
                    'SI'
                  WHEN s.empresa = 'Werchow'
                  AND EXISTS (
                    SELECT
                      SEGURO
                    FROM
                      werchow.adherent AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND SEGURO = 1
                  ) THEN
                    'SI'
                  WHEN s.empresa = 'Mutual'
                  AND EXISTS (
                    SELECT
                      SEGURO
                    FROM
                      werchow.mutual AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND SEGURO = 1
                  ) THEN
                    'SI'
                  WHEN s.empresa = 'Mutual'
                  AND EXISTS (
                    SELECT
                      SEGURO
                    FROM
                      werchow.mutual_adh AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND SEGURO = 1
                  ) THEN
                    'SI'
                  ELSE
                    'NO'
                  END
                ) AS 'seguro',
                (
                  CASE
                  WHEN dni_nuevotitular = 11111111
                  AND s.empresa = 'Werchow'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.maestro AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN = 'P'
                    AND m.ADHERENTES = 0
                  ) THEN
                    'NOVELL/SIN ADH'
                  WHEN dni_nuevotitular = 11111111
                  AND s.empresa = 'Werchow'
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.maestro AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN = 'P'
                    AND m.ADHERENTES = 0
                  ) THEN
                    'NOVELL REALIZADO, FALTA IMPACTAR'
                  WHEN dni_nuevotitular = 11111111
                  AND s.empresa = 'Mutual'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN = 'P'
                    AND m.ADHERENTES = 0
                  ) THEN
                    'NOVELL/SIN ADH'
                  WHEN dni_nuevotitular = 11111111
                  AND s.empresa = 'Mutual'
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN = 'P'
                    AND m.ADHERENTES = 0
                  ) THEN
                    'NOVELL REALIZADO, FALTA IMPACTAR'
                  WHEN s.empresa = 'Werchow'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.maestro AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN != 'P'
                  ) THEN
                  (SELECT
                    CONCAT(
                      'NUEVO TIT.',
                      ' --> ',
                      m.APELLIDOS,
                      ', ',
                      m.NOMBRES,
                      ' - ',
                      m.NRO_DOC
                    )
                  FROM
                    werchow.adherent AS m
                  WHERE
                    m.NRO_DOC = s.dni_nuevotitular
                 ) 
                  WHEN s.empresa = 'Werchow'
                  AND s.dni_nuevotitular NOT IN (1, 11111111)
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.maestro AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN != 'P'
                  ) THEN
                    'TITULAR REALIZADO, FALTA IMPACTAR'
                  WHEN s.empresa = 'Mutual'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN != 'P'
                  ) THEN
                  (SELECT
                      CONCAT(
                        'NUEVO TIT.',
                        ' --> ',
                        m.APELLIDOS,
                        ', ',
                        m.NOMBRES,
                        ' - ',
                        m.NRO_DOC
                      )
                    FROM
                      werchow.mutual_adh AS m
                    WHERE
                    m.NRO_DOC = s.dni_nuevotitular
                   ) 
                  WHEN s.empresa = 'Mutual'
                  AND s.dni_nuevotitular NOT IN (1, 11111111)
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.PLAN != 'P'
                  ) THEN
                    'TITULAR REALIZADO, FALTA IMPACTAR'
                  WHEN dni_nuevotitular = 1
                  AND s.empresa = 'Werchow'
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.adherent AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.BAJA IS NOT NULL
                    AND m.EDAD = 999
                  ) THEN                 
                    'ADHERENTE'
                  WHEN dni_nuevotitular = 1
                  AND s.empresa = 'Werchow'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.adherent AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.BAJA IS NOT NULL
                    AND m.EDAD = 999
                  ) THEN
                    'ADHERENTE REALIZADO, FALTA IMPACTAR'
                  WHEN dni_nuevotitular = 1
                  AND s.empresa = 'Mutual'
                  AND NOT EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual_adh AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.BAJA IS NOT NULL
                    AND m.EDAD != 999
                  ) THEN                
                    'ADHERENTE'
                  WHEN dni_nuevotitular = 1
                  AND s.empresa = 'Mutual'
                  AND EXISTS (
                    SELECT
                      *
                    FROM
                      werchow.mutual_adh AS m
                    WHERE
                      m.NRO_DOC = s.dni
                    AND m.BAJA IS NOT NULL
                    AND m.EDAD != 999
                  ) THEN
                    'ADHERENTE REALIZADO, FALTA IMPACTAR'
                  WHEN dni_nuevotitular IS NULL THEN
                    'PARTICULAR'
                  END
                ) AS 'estado_ficha',
                fecha_fallecimiento
              FROM
                servicios AS s
              WHERE
                impactado = 0
              AND dni IS NOT NULL
               `
      );

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo servicio") {
      const regServ = await Sep.servicios.create({
        data: {
          contrato: parseInt(req.body.contrato),
          empresa: req.body.empresa,
          dni: parseInt(req.body.dni),
          obra_soc: req.body.obra_soc,
          apellido: req.body.apellido,
          nombre: req.body.nombre,
          edad: parseInt(req.body.edad),
          fecha_fallecimiento: new Date(req.body.fecha_fallecimiento),
          lugar_fallecimiento: req.body.lugar_fallecimiento,
          tipo_servicio: req.body.tipo_servicio,
          casa_mortuaria: req.body.casa_mortuaria,
          fecha_inhumacion: new Date(req.body.fecha_inhumacion),
          hora_inhumacion: req.body.hora_inhumacion,
          cementerio: req.body.cementerio,
          altura: parseFloat(req.body.altura),
          peso: parseFloat(req.body.peso),
          motivo: req.body.motivo,
          retiro: req.body.retiro,
          solicitado: req.body.solicitado,
          parentesco: req.body.parentesco,
          fecha_recepcion: req.body.fecha_recepcion,
          sucursal: req.body.sucursal,
          estado: req.body.estado,
          dni_nuevotitular: parseInt(req.body.dni_nuevotitular),
          operador: req.body.operador,
          idataud: parseInt(req.body.idataud),
          dni_solicitante: parseInt(req.body.dni_solicitante),
          domicilio_solicitante: req.body.domicilio_solicitante,
          cremacion: req.body.cremacion,
          liquidado: req.body.liquidado,
          donacion: req.body.donacion,
        },
      });

      res.status(200).json(regServ);
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
    } else if (req.body.f && req.body.f === "act titulares werchow") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
            UPDATE servicios AS s

            SET impactado = (
              CASE
              WHEN NOT EXISTS (
                SELECT
                  a.NRO_DOC
                FROM
                  werchow.maestro AS a
                WHERE
                  a.NRO_DOC = s.dni
               
              ) THEN
                TRUE
            
            WHEN EXISTS (
                SELECT
                  a.NRO_DOC
                FROM
                  werchow.maestro AS a
                WHERE
                  a.NRO_DOC = s.dni          
              ) THEN
                FALSE
              
              END
            )
            WHERE empresa = 'Werchow'
            and dni_nuevotitular is not NULL
            and dni_nuevotitular != 1
                   `
      );

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act titulares mutual") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
          UPDATE servicios AS s

          SET impactado = (
            CASE
            WHEN NOT EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.mutual AS a
              WHERE
                a.NRO_DOC = s.dni
            
            ) THEN
              TRUE
          
          WHEN EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.mutual AS a
              WHERE
                a.NRO_DOC = s.dni
            
            ) THEN
              FALSE
            
            END
          )
          WHERE empresa = 'Mutual'
          and dni_nuevotitular is not NULL
          and dni_nuevotitular != 1
                     `
      );

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act adherentes werchow") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
          UPDATE servicios AS s

          SET impactado = (
            CASE
            WHEN EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.adherent AS a
              WHERE
                a.NRO_DOC = s.dni
              AND a.BAJA IS NOT NULL
              AND a.EDAD = 999
            ) THEN
              TRUE
          
          WHEN EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.adherent AS a
              WHERE
                a.NRO_DOC = s.dni
              AND a.BAJA IS NULL
              AND a.EDAD != 999
            ) THEN
              FALSE
            
            END
          )
          WHERE empresa = 'Werchow'
          and dni_nuevotitular = 1
                       `
      );

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act adherentes mutual") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
          UPDATE servicios AS s
            
          SET impactado = (
            CASE
            WHEN EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.mutual_adh AS a
              WHERE
                a.NRO_DOC = s.dni
              AND a.BAJA IS NOT NULL
              AND a.EDAD = 999
            ) THEN
              TRUE
    
          WHEN EXISTS (
              SELECT
                a.NRO_DOC
              FROM
                werchow.mutual_adh AS a
              WHERE
                a.NRO_DOC = s.dni
              AND a.BAJA IS NULL
              AND a.EDAD != 999
            ) THEN
              FALSE
            
            END
          )
          where empresa = 'Mutual'
          and dni_nuevotitular = 1      
                       `
      );

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
