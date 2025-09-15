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
    if (req.query.f && req.query.f === "list parcelas") {
      const listParce = await sep.query(
        `
        SELECT *
        FROM parcelas
      `
      );

      await sep.end();

      res.status(200).json(listParce);
    } else if (req.query.f && req.query.f === "traer parcela") {
      const parce = await sep.query(
        `
        SELECT *
        FROM parcelas
        WHERE idparcela = ${parseInt(req.query.id)}
      `
      );

      await sep.end();

      res.status(200).json(parce);
    } else if (req.query.f && req.query.f === "traer historial parcela") {
      const parce = await sep.query(
        `
        SELECT *
        FROM parcelas_lugares
        WHERE idparcela = ${parseInt(req.query.id)}
      `
      );

      await sep.end();

      res.status(200).json(parce);
    } else if (req.query.f && req.query.f === "check parcela") {
      const parce = await sep.query(`
        SELECT
                pl.dni,
                p.parcela,
                p.mza,
                p.lote,
                pl.fecha
        FROM parcelas as p
        INNER JOIN parcelas_lugares as pl on p.idparcela = pl.idparcela
        WHERE pl.dni = ${parseInt(req.query.dni)}
               

    `);

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(parce, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva parcela") {
      const regParce = await sep.query(
        `
        INSERT INTO parcelas
        (
          parcela,
          mza,
          lote,
          cementerio,
          lugares,
          operador,
          fecha_alta,
          asignada
        )

        VALUES
        (
           '${req.body.parcela}',
           ${parseInt(req.body.mza)},
           ${parseInt(req.body.lote)},
           '${req.body.cementerio}',
           ${parseInt(req.body.lugares)},
           '${req.body.operador}',
           '${req.body.fecha_alta}',
           ${req.body.asignada}
        )
      `
      );

      await sep.end();

      res.status(200).json(regParce);
    } else if (req.body.f && req.body.f === "asig lugar") {
      const asigLugar = await sep.query(
        `
            INSERT INTO parcelas_lugares
            (
              idparcela,
              contrato,
              dni,
              fecha,
              operador,
              lugar,
            )

            VALUES
            (
               ${parseInt(req.body.idparcela)},
               ${parseInt(req.body.contrato)},
               ${parseInt(req.body.dni)},
               '${moment(req.body.fecha).format("YYYY-MM-DD")}',
               '${req.body.operador}',
               ${parseInt(req.body.lugar)},
            )
          `
      );

      await sep.end();

      res.status(200).json(asigLugar);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act parcela asig") {
      const regAuto = await sep.query(
        `
              UPDATE parcelas
              SET idservicio= ${parseInt(req.body.idservicio)},
                  dni_extinto= ${parseInt(req.body.dni_extinto)},
                  operador_asignacion= '${req.body.operador_asignacion}',
                  fecha_asignacion= '${req.body.fecha_asignacion}',
                  ficha= ${parseInt(req.body.ficha)},
                  lugares= ${parseInt(req.body.lugares)}
              WHERE idparcela = ${parseInt(req.body.idparcela)}
            `
      );
      await sep.end();

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "update lugar") {
      const updateLugar = await sep.query(
        `
              UPDATE parcelas
              SET lugares= ${parseInt(req.body.lugares)}
              WHERE idparcela = ${parseInt(req.body.idparcela)}
          `
      );

      await sep.end();

      res.status(200).json(updateLugar);
    }
  }
}
