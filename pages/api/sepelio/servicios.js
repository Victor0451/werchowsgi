import {
  werchow,
  sgi,
  serv,
  sep,
  camp,
  arch,
  club,
} from "../../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "gasto luto") {
      const gastoLuto = await sgi.query(
        `
          SELECT *
          FROM gasto_luto
        `
      );

      await sgi.end();

      res.status(200).json(gastoLuto);
    } else if (
      (req.query.f && req.query.f === "servicios") ||
      req.query.f === "check servicio"
    ) {
      const servicios = await sep.query(
        `
          SELECT *
          FROM servicios
          WHERE dni= ${parseInt(req.query.dni)}
        `
      );

      await sep.end();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "traer servicios") {
      const servicios = await sep.query(
        `
          SELECT *
          FROM servicios
          ORDER BY fecha_fallecimiento DESC
        `
      );

      await sep.end();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "filtrar servicios") {
      const filtServ = await sep.query(
        `                
        SELECT
         *
        FROM
          servicios
        WHERE fecha_fallecimiento >= '${moment(req.query.desde).format(
          "YYYY-MM-DD"
        )}'
        AND fecha_fallecimiento <= '${moment(req.query.hasta).format(
          "YYYY-MM-DD"
        )}'

        ORDER BY fecha_fallecimiento DESC

               `
      );

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(filtServ, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer servicios historicos") {
      const servicios = await sep.query(
        `
          SELECT *
          FROM servicios_historico
                  `
      );

      await sep.end();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "legajo servicio") {
      const servicios = await sep.query(
        `
          SELECT *
          FROM servicios
          WHERE idservicio = ${parseInt(req.query.id)}      
       `
      );

      await sep.end();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const servicios = await sep.query(
        `
          SELECT *
          FROM legajo_virtual_servicios
          WHERE servicio = ${parseInt(req.query.dni)}      
       `
      );

      await sep.end();

      res.status(200).json(servicios);
    } else if (req.query.f && req.query.f === "servicios sin impactar") {
      const servImp = await sep.query(
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
      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer tareas") {
      const tareas = await sep.query(
        `
            SELECT *
            FROM honorarios
          `
      );

      await sep.end();

      res.status(200).json(tareas);
    } else if (req.query.f && req.query.f === "traer valor guardia") {
      const tareas = await sep.query(
        `
            SELECT *
            FROM honorarios
            WHERE trabajo = "Guardia oficina"
          `
      );

      await sep.end();

      res.status(200).json(tareas);
    } else if (req.query.f && req.query.f === "traer gastos") {
      const gastos = await sep.query(
        `
            SELECT *
            FROM servicios_gastos
            
          `
      );

      await sep.end();

      res.status(200).json(gastos);
    } else if (req.query.f && req.query.f === "traer tareas reg") {
      const tareasReg = await sep.query(
        `
            SELECT *
            FROM informe_tareas
            WHERE idservicio = ${parseInt(req.query.idservicio)}
            
          `
      );

      await sep.end();

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer tareas operador") {
      const tareasSinLiq = await sep.query(
        `                
                SELECT *
                FROM informe_tareas
                WHERE operador = '${req.query.operador}'                
                AND liquidado = 0
                AND monto > 0
               
              
               `
      );

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(tareasSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer gastos operador") {
      const gastoSinLiq = await sep.query(
        `                
                SELECT *
                FROM informe_gastos
                WHERE operador = '${req.query.operador}'                
                AND gasto = 'Comision por Venta'
                AND liquidado = 0
              
               `
      );
      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(gastoSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (
      req.query.f &&
      req.query.f === "traer historial tareas operador"
    ) {
      const tareasSinLiq = await sep.query(
        `                
                SELECT *
                FROM informe_tareas
                WHERE operador = '${req.query.operador}'                
                AND liquidado = 1                
               
              
               `
      );

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(tareasSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (
      req.query.f &&
      req.query.f === "traer historial gastos operador"
    ) {
      const tareasSinLiq = await sep.query(
        `                
                SELECT *
                FROM informe_gastos
                WHERE operador = '${req.query.operador}'                
                AND liquidado = 1                
               
              
               `
      );
      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(tareasSinLiq, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer gastos reg") {
      const tareasReg = await sep.query(
        `                
                SELECT *
                FROM informe_gastos
                WHERE idservicio = ${parseInt(req.query.idservicio)}           
               
              
               `
      );
      await sep.end();

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer informe servicio") {
      const tareasReg = await sep.query(
        `                
                SELECT *
                FROM servicio_informes
                WHERE idservicio = ${parseInt(req.query.idservicio)}           
               
              
               `
      );
      await sep.end();

      res.status(200).json(tareasReg);
    } else if (req.query.f && req.query.f === "traer informes servicios") {
      const servImp = await sep.query(
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

      await sep.end();

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
      
      const regServ = await sep.query(
        `
          INSERT INTO servicios
          (
                contrato,
                empresa,
                dni,
                obra_soc,
                apellido,
                nombre,
                edad,
                telefono,
                movil,
                fecha_fallecimiento,
                lugar_fallecimiento,
                tipo_servicio,
                casa_mortuaria,
                fecha_inhumacion,
                hora_inhumacion,
                cementerio,
                altura,
                peso,
                motivo,
                retiro,
                solicitado,
                parentesco,
                fecha_recepcion,
                sucursal,
                estado,
                dni_nuevotitular,
                operador,
                idataud,
                dni_solicitante,
                domicilio_solicitante,
                cremacion,
                liquidado,
                donacion,
                detalle_corona,
                religion,
                estado_civil,
                importe_servicio,
                gasto_luto,
                conyugue,
                serv_domicilio
          )

          VALUES 
          (
                 ${parseInt(req.body.contrato)},
                 '${req.body.empresa}',
                 ${parseInt(req.body.dni)},
                 '${req.body.obra_soc}',
                 '${req.body.apellido}',
                 '${req.body.nombre}',
                 ${parseInt(req.body.edad)},
                 '${req.body.telefono}',
                 '${req.body.movil}',
                 '${moment(req.body.fecha_fallecimiento).format("YYYY-MM-DD")}',
                 '${req.body.lugar_fallecimiento}',
                 '${req.body.tipo_servicio}',
                 '${req.body.casa_mortuaria}',
                 '${moment(req.body.fecha_inhumacion).format("YYYY-MM-DD")}',
                 '${req.body.hora_inhumacion}',
                 '${req.body.cementerio}',
                 ${parseFloat(req.body.altura)},
                 ${parseFloat(req.body.peso)},
                 '${req.body.motivo}',
                 '${req.body.retiro}',
                 '${req.body.solicitado}',
                 '${req.body.parentesco}',
                 '${req.body.fecha_recepcion}',
                 '${req.body.sucursal}',
                 ${req.body.estado},
                 ${parseInt(req.body.dni_nuevotitular)},
                 '${req.body.operador}',
                 ${parseInt(req.body.idataud)},
                 ${parseInt(req.body.dni_solicitante)},
                 '${req.body.domicilio_solicitante}',
                 ${req.body.cremacion},
                 ${req.body.liquidado},
                 ${req.body.donacion},
                 '${req.body.detalle_corona}',
                 '${req.body.religion}',
                 '${req.body.estado_civil}',
                 ${parseFloat(req.body.importe_servicio)},
                 '${req.body.gasto}',
                 '${req.body.conyugue}',
                 ${req.body.serv_domicilio}
          )

        `
      );

      await sep.end();

      res.status(200).json(regServ);
    } else if (req.body.f && req.body.f === "reg informe servicio") {
      const regInforme = await sep.query(
        `
          INSERT INTO servicio_informes
          (
            idservicio,
            fecha,
            liquidado,
            aprobado
          )
          VALUES
          (
             ${parseInt(req.body.idservicio)},
             '${moment(req.body.fecha).format("YYYY-MM-DD")}',
             ${req.body.liquidado},
             ${req.body.aprobado}
          )
        `
      );

      await sep.end();

      res.status(200).json(regInforme);
    } else if (req.body.f && req.body.f === "reg tarea informe") {
      const regInforme = await sep.query(
        `
          INSERT INTO informe_tareas
          (
            idinforme,
            idservicio,
            operador,
            tarea,
            inicio,
            fin,
            horas,
            monto,
            liquidado
          )
          VALUE
          (
             ${parseInt(req.body.idinforme)},
             ${parseInt(req.body.idservicio)},
             '${req.body.operador}',
             '${req.body.tarea}',
             '${req.body.inicio}',
             '${req.body.fin}',
             ${parseInt(req.body.horas)},
             ${parseFloat(req.body.monto)},
             ${req.body.liquidado}
          )
        `
      );

      await sep.end();

      res.status(200).json(regInforme);
    } else if (req.body.f && req.body.f === "reg gasto informe") {
      const regGato = await sep.query(
        ` 
          INSERT INTO informe_gastos
          (
            idinforme,
            idservicio,
            operador,
            gasto,
            importe,
            observacion,
            liquidado
          )
          VALUES
          (
             ${parseInt(req.body.idinforme)},
             ${parseInt(req.body.idservicio)},
             '${req.body.operador}',
             '${req.body.gasto}',
             ${parseFloat(req.body.importe)},
             '${req.body.observacion}',
             ${req.body.liquidado}
          )
          `
      );

      await sep.end();

      res.status(200).json(regGato);
    } else if (req.body.f && req.body.f === "reg presupuesto servicio") {
      const regPresupuesto = await sep.query(
        `
      INSERT INTO servicio_presupuesto
      (
          fecha,
          idservicio,
          apoderado,
          domicilio,
          telefono,
          detalle,
          total,
          anticipo,
          cuotas,
          saldo,
          operador
      )
      VALUES
      (
           '${moment(req.body.fecha).format("YYYY-MM-DD")}',
           ${parseInt(req.body.idservicio)},
           '${req.body.apoderado}',
           '${req.body.domicilio}',
           '${req.body.telefono}',
           '${req.body.detalle}',
           ${parseFloat(req.body.total)},
           ${parseFloat(req.body.anticipo)},
           ${parseInt(req.body.cuotas)},
           ${parseFloat(req.body.saldo)},
           '${req.body.operador}'
      )
    `
      );

      await sep.end();

      res.status(200).json(regPresupuesto);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act titulares werchow") {
      const servImp = await sep.query(
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

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act titulares mutual") {
      const servImp = await sep.query(
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

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act adherentes werchow") {
      const servImp = await sep.query(
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

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act adherentes mutual") {
      const servImp = await sep.query(
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

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(servImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "estado informe") {
      const estadoInforme = await sep.query(
        `                
          UPDATE servicio_informes 
          SET aprobado = ${req.body.estado},
              fecha_aprobado = '${moment().format("YYYY-MM-DD")}',
              operador_aprobado = '${req.body.usu}'
          WHERE idinforme = ${req.body.id}

          
                       `
      );

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(estadoInforme, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "liquidar informe") {
      const estadoInforme = await sep.query(
        `                
          UPDATE servicio_informes 
          SET liquidado = ${req.body.liquidado},
              fecha_liquidado = '${moment().format("YYYY-MM-DD")}',
              operador_liquidado = '${req.body.usu}'
          WHERE idinforme = ${req.body.id}

          
                       `
      );

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(estadoInforme, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "liquidar tarea individual") {
      const liqTarea = await sep.query(
        `
            UPDATE informe_tareas
            SET liquidado= true,
                operadorliq= '${req.body.operadorliq}',
                fecha_liquidacion= '${moment(req.body.fecha_liquidado).format(
                  "YYYY-MM-DD"
                )}'
            WHERE  idtareas= ${parseInt(req.body.id)}   
          `
      );

      await sep.end();

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "liquidar tareas") {
      const liqTarea = await sep.query(
        `                
          UPDATE informe_tareas 
          SET liquidado = 1,
              fecha_liquidacion = '${req.body.fecha_liquidado}',
              operadorliq = '${req.body.operadorliq}'
          WHERE operador = '${req.body.operador}'
          AND liquidado = 0

          
                       `
      );

      await sep.end();

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "liquidar comisiones") {
      const liqTarea = await sep.query(
        `                
          UPDATE informe_gastos 
          SET liquidado = 1,
              fecha_liquidado = '${req.body.fecha_liquidado}',
              operadorliq = '${req.body.operadorliq}'
          WHERE operador = '${req.body.operador}'
          AND gasto = 'Comision por Venta'
          AND liquidado = 0

          
                       `
      );
      await sep.end();

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "liquidar gasto individual") {
      const liqGasto = await sep.query(
        `                
          UPDATE informe_gastos 
          SET liquidado = true,
              fecha_liquidado = '${moment(req.body.fecha_liquidado).format(
                "YYYY-MM-DD"
              )}',
              operadorliq = '${req.body.operadorliq}'
          WHERE operador = '${req.body.operador}'
          AND liquidado = 0

          
                       `
      );

      await sep.end();

      res.status(200).json(liqGasto);
    } else if (req.body.f && req.body.f === "liquidar tarea informe") {
      const liqTarea = await sep.query(
        `                
          UPDATE informe_tareas 
          SET liquidado = ${req.body.liquidado},
              fecha_liquidacion = '${req.body.fecha_liquidacion}',
              operadorliq = '${req.body.usu}'
          WHERE idinforme = ${req.body.idinforme}

          
                       `
      );
      await sep.end();

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "act idinformes tareas") {
      const liqTarea = await sep.query(
        `                
        UPDATE informe_tareas as t
        INNER JOIN servicio_informes as i on i.idservicio = t.idservicio 
        set t.idinforme = i.idinforme
        where t.idinforme IS NULL

          
                       `
      );
      await sep.end();

      res.status(200).json(liqTarea);
    } else if (req.body.f && req.body.f === "act idinformes gastos") {
      const liqTarea = await sep.query(
        `                
        UPDATE informe_gastos as t
        INNER JOIN servicio_informes as i on i.idservicio = t.idservicio 
        set t.idinforme = i.idinforme
        where t.idinforme IS NULL

          
                       `
      );

      await sep.end();

      res.status(200).json(liqTarea);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
      const delTarea = await sep.query(
        `
          DELETE FROM informe_tareas
          WHERE idtareas = ${parseInt(req.query.idtarea)}
        `
      );

      await sep.end();

      res.status(200).json(delTarea);
    } else if (req.query.f && req.query.f === "eliminar gasto") {
      const delGasto = await sep.query(
        `
          DELETE FROM informe_gastos
          WHERE idgastos = ${parseInt(req.query.idgastos)}
        `
      );

      await sep.end();

      res.status(200).json(delGasto);
    } else if (req.query.f && req.query.f === "eliminar servicio") {
      const delServ = await sep.query(
        `
          DELETE FROM servicios
          WHERE idservicio = ${parseInt(req.query.idservicio)}
        `
      );

      await sep.end();

      res.status(200).json(delServ);
    }
  }
}
