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
    if (req.query.f && req.query.f === "traer guardias") {
      const plani = await sep.query(
        `                
        SELECT
          *
        FROM
          liquidacion_guardias
        WHERE liquidado = 0

               `
      );

      await sep.end();

      res.status(200).json(plani);
    } else if (req.query.f && req.query.f === "traer liquidacion") {
      const plani = await sep.query(
        `
              SELECT *
              FROM liquidacion_guardias
            `
      );

      await sep.end();

      res.status(200).json(plani);
    } else if (req.query.f && req.query.f === "traer guardias operador") {
      const guardiasOp = await sep.query(
        `
              SELECT *
              FROM liquidacion_guardias
              WHERE operador = '${req.query.operador}'
              AND liquidado = 0
              ORDER BY liquidado ASC
          `
      );

      await sep.end();

      res.status(200).json(guardiasOp);
    } else if (
      req.query.f &&
      req.query.f === "traer historial guardias operador"
    ) {
      const guardiasOp = await sep.query(
        `
        SELECT *
        FROM liquidacion_guardias
        WHERE operador = '${req.query.operador}'
        AND liquidado = 1
        ORDER BY liquidado ASC 
      `
      );

      await sep.end();

      res.status(200).json(guardiasOp);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva liquidacion") {
      const regTarea = await sep.query(
        `
              INSERT INTO liquidacion_guardias
              (
                lugar,
                inicio,
                fin,
                horas,
                importe,
                feriado,
                mes,
                ano,
                operador,
                aprobado,
                liquidado
              )

              VALUES
              (
                '${req.body.lugar}',
                '${req.body.inicio}',
                '${req.body.fin}',
                ${parseInt(req.body.horas)},
                ${parseFloat(req.body.importe)},
                ${req.body.feriado},
                ${parseInt(req.body.mes)},
                ${parseInt(req.body.ano)},
                '${req.body.operador}',
                ${parseInt(req.body.aprobado)},
                ${parseInt(req.body.liquidado)}
              )
          `
      );

      await sep.end();

      res.status(200).json(regTarea);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "estado liquidacion") {
      const regAuto = await sep.query(
        `
            UPDATE liquidacion_guardias
            SET aprobado= ${parseInt(req.body.estado)},
                operadorap= '${req.body.usu}',
                fecha_aprobacion= '${moment(req.body.fecha).format(
                  "YYYY-MM-DD"
                )}'
            WHERE idturno= ${parseInt(req.body.id)}
          `
      );

      await sep.end();

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "liquidar guardia") {
      const regAuto = await sep.query(
        `
              UPDATE liquidacion_guardias
              SET liquidado= ${parseInt(req.body.estado)},
                  operadorliq= '${req.body.usu}',
                  fecha_liquidacion= '${moment(req.body.fecha).format(
                    "YYYY-MM-DD"
                  )}'
              WHERE idturno= ${parseInt(req.body.id)}
            `
      );
      await sep.end();

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "liquidar guardia 2") {
      const liqGuardia = await sep.query(
        `
              UPDATE liquidacion_guardias
              SET liquidado= ${parseInt(req.body.liquidado)},
                  operadorliq= '${req.body.operadorliq}',
                  fecha_liquidacion= '${moment(
                    req.body.fecha_liquidacion
                  ).format("YYYY-MM-DD")}'
              WHERE idturno= ${parseInt(req.body.id)}
          `
      );

      await sep.end();

      res.status(200).json(liqGuardia);
    } else if (req.body.f && req.body.f === "liquidar guardias") {
      const liqGuardia = await sep.query(
        `                
          UPDATE liquidacion_guardias
          SET liquidado = 1,
              fecha_liquidacion = '${req.body.fecha_liquidacion}',
              operadorliq = '${req.body.operadorliq}'
          WHERE operador = '${req.body.operador}'
          AND liquidado = 0

          
                       `
      );

      await sep.end();

      res.status(200).json(liqGuardia);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar guardia") {
      const delGuardia = await sep.query(
        `
            DELETE FROM liquidacion_guardias
            WHERE idturno = ${parseInt(req.query.idturno)}
          `
      );

      await sep.end();

      res.status(200).json(delGuardia);
    }
  }
}
