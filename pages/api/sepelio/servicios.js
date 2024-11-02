import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "gasto luto") {
      const gastoLuto = await SGI.gasto_luto.findMany();

      res.status(200).json(gastoLuto);
    } else if (req.query.f && req.query.f === "servicios") {
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
                    m.NRO_DOC = s.dni_nuevotitular LIMIT 1
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
    } else if (req.query.f && req.query.f === "traer tareas") {
      const tareas = await Sep.honorarios.findMany();

      res.status(200).json(tareas);
    } else if (req.query.f && req.query.f === "traer valor guardia") {
      const tareas = await Sep.honorarios.findMany({
        where: {
          trabajo: "Guardia oficina",
        },
      });

      res.status(200).json(tareas);
    } else if (req.query.f && req.query.f === "traer gastos") {
      const gastos = await Sep.servicios_gastos.findMany();

      res.status(200).json(gastos);
    } else if (req.query.f && req.query.f === "traer tareas reg") {
      const tareasReg = await Sep.informe_tareas.findMany({
        where: {
          idservicio: parseInt(req.query.idservicio),
        },
      });

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer tareas operador") {
      const tareasSinLiq = await Sep.$queryRawUnsafe(
        `                
                SELECT *
                FROM informe_tareas
                WHERE operador = '${req.query.operador}'                
                AND liquidado = 0
                AND monto > 0
               
              
               `
      );

      res
        .status(200)
        .json(
          JSON.stringify(tareasSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (
      req.query.f &&
      req.query.f === "traer historial tareas operador"
    ) {
      const tareasSinLiq = await Sep.$queryRawUnsafe(
        `                
                SELECT *
                FROM informe_tareas
                WHERE operador = '${req.query.operador}'                
                AND liquidado = 1                
               
              
               `
      );

      res
        .status(200)
        .json(
          JSON.stringify(tareasSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer gastos reg") {
      const tareasReg = await Sep.informe_gastos.findMany({
        where: {
          idservicio: parseInt(req.query.idservicio),
        },
      });

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer informe servicio") {
      const tareasReg = await Sep.servicio_informes.findMany({
        where: {
          idservicio: parseInt(req.query.idservicio),
        },
      });

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer informes servicios") {
      const servImp = await Sep.$queryRawUnsafe(
        `                
        SELECT
          s.idservicio,
          si.idinforme,
          CONCAT(s.apellido, ', ', s.nombre) 'extinto',
          s.fecha_fallecimiento,
          si.fecha,
          si.aprobado,
          si.fecha_aprobado,
          si.liquidado,
          si.fecha_liquidado,
          si.operador_liquidado,
          si.operador_aprobado,
          (
            SELECT SUM(it.monto)
            FROM informe_tareas as it
            WHERE it.idinforme = si.idinforme

          ) as 'tareas',
          (
            SELECT SUM(it.importe)
            FROM informe_gastos as it
            WHERE it.idinforme = si.idinforme

          ) as 'gastos'
        FROM
          servicio_informes AS si
        INNER JOIN servicios AS s ON s.idservicio = si.idservicio       

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
  } else if (req.method === "POST") {
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
          telefono: req.body.telefono,
          movil: req.body.movil,
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
          detalle_corona: req.body.detalle_corona,
          religion: req.body.religion,
          estado_civil: req.body.estado_civil,
          importe_servicio: parseFloat(req.body.importe_servicio),
          gasto_luto: req.body.gasto,
          conyugue: req.body.conyugue,
        },
      });

      res.status(200).json(regServ);
    } else if (req.body.f && req.body.f === "reg informe servicio") {
      const regInforme = await Sep.servicio_informes.create({
        data: {
          idservicio: parseInt(req.body.idservicio),
          fecha: new Date(req.body.fecha),
          liquidado: req.body.liquidado,
          aprobado: req.body.aprobado,
        },
      });

      res.status(200).json(regInforme);
    } else if (req.body.f && req.body.f === "reg tarea informe") {
      const regInforme = await Sep.informe_tareas.create({
        data: {
          idinforme: parseInt(req.body.idinforme),
          idservicio: parseInt(req.body.idservicio),
          operador: req.body.operador,
          tarea: req.body.tarea,
          inicio: req.body.inicio,
          fin: req.body.fin,
          horas: parseInt(req.body.horas),
          monto: parseFloat(req.body.monto),
          liquidado: req.body.liquidado,
        },
      });

      res.status(200).json(regInforme);
    } else if (req.body.f && req.body.f === "reg gasto informe") {
      const regGato = await Sep.informe_gastos.create({
        data: {
          idinforme: parseInt(req.body.idinforme),
          idservicio: parseInt(req.body.idservicio),
          gasto: req.body.gasto,
          importe: parseFloat(req.body.importe),
          observacion: req.body.observacion,
          liquidado: req.body.liquidado,
        },
      });

      res.status(200).json(regGato);
    } else if (req.body.f && req.body.f === "reg presupuesto servicio") {
      const regPresupuesto = await Sep.servicio_presupuesto.create({
        data: {
          fecha: new Date(req.body.fecha),
          idservicio: parseInt(req.body.idservicio),
          apoderado: req.body.apoderado,
          domicilio: req.body.domicilio,
          telefono: req.body.telefono,
          detalle: req.body.detalle,
          total: parseFloat(req.body.total),
          anticipo: parseFloat(req.body.anticipo),
          cuotas: parseInt(req.body.cuotas),
          saldo: parseFloat(req.body.saldo),
          operador: req.body.operador,
        },
      });

      res.status(200).json(regPresupuesto);
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
    } else if (req.body.f && req.body.f === "estado informe") {
      const estadoInforme = await Sep.$queryRawUnsafe(
        `                
          UPDATE servicio_informes 
          SET aprobado = ${req.body.estado},
              fecha_aprobado = '${moment().format("YYYY-MM-DD")}',
              operador_aprobado = '${req.body.usu}'
          WHERE idinforme = ${req.body.id}

          
                       `
      );

      res
        .status(200)
        .json(
          JSON.stringify(estadoInforme, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "liquidar informe") {
      const estadoInforme = await Sep.$queryRawUnsafe(
        `                
          UPDATE servicio_informes 
          SET liquidado = ${req.body.liquidado},
              fecha_liquidado = '${moment().format("YYYY-MM-DD")}',
              operador_liquidado = '${req.body.usu}'
          WHERE idinforme = ${req.body.id}

          
                       `
      );

      res
        .status(200)
        .json(
          JSON.stringify(estadoInforme, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "liquidar tarea individual") {
      const liqTarea = await Sep.informe_tareas.update({
        data: {
          liquidado: true,
          operadorliq: req.body.operadorliq,
          fecha_liquidacion: new Date(req.body.fecha_liquidado),
        },
        where: {
          idtareas: parseInt(req.body.id),
        },
      });

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "liquidar tareas") {
      const liqTarea = await Sep.$queryRawUnsafe(
        `                
          UPDATE informe_tareas 
          SET liquidado = 1,
              fecha_liquidacion = '${req.body.fecha_liquidado}',
              operadorliq = '${req.body.operadorliq}'
          WHERE operador = '${req.body.operador}'
          AND liquidado = 0

          
                       `
      );

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "liquidar gasto individual") {
      const liqGasto = await Sep.informe_gastos.update({
        data: {
          liquidado: true,
          operadorliq: req.body.operadorliq,
          fecha_liquidado: new Date(req.body.fecha_liquidado),
        },
        where: {
          idgastos: parseInt(req.body.id),
        },
      });

      res.status(200).json(liqGasto);
    } else if (req.body.f && req.body.f === "liquidar tarea informe") {
      const liqTarea = await Sep.$queryRawUnsafe(
        `                
          UPDATE informe_tareas 
          SET liquidado = ${req.body.liquidado},
              fecha_liquidacion = '${req.body.fecha_liquidacion}',
              operadorliq = '${req.body.usu}'
          WHERE idinforme = ${req.body.idinforme}

          
                       `
      );

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "act idinformes tareas") {
      const liqTarea = await Sep.$queryRawUnsafe(
        `                
        UPDATE informe_tareas as t
        INNER JOIN servicio_informes as i on i.idservicio = t.idservicio 
        set t.idinforme = i.idinforme
        where t.idinforme IS NULL

          
                       `
      );

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "act idinformes gastos") {
      const liqTarea = await Sep.$queryRawUnsafe(
        `                
        UPDATE informe_gastos as t
        INNER JOIN servicio_informes as i on i.idservicio = t.idservicio 
        set t.idinforme = i.idinforme
        where t.idinforme IS NULL

          
                       `
      );

      res.status(200).json(liqTarea);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
      const delTarea = await Sep.informe_tareas.delete({
        where: {
          idtareas: parseInt(req.query.idtarea),
        },
      });

      res.status(200).json(delTarea);
    } else if (req.query.f && req.query.f === "eliminar gasto") {
      const delGasto = await Sep.informe_gastos.delete({
        where: {
          idgastos: parseInt(req.query.idgastos),
        },
      });

      res.status(200).json(delGasto);
    } else if (req.query.f && req.query.f === "eliminar servicio") {
      const delServ = await Sep.servicios.delete({
        where: {
          idservicio: parseInt(req.query.idservicio),
        },
      });

      res.status(200).json(delServ);
    }
  }
}
