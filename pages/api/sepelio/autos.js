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
    if (req.query.f && req.query.f === "traer autos") {
      const autos = await sep.query(
        `
            SELECT *
            FROM autos
        `
      );

      await sep.end();

      res.status(200).json(autos);
    } else if (req.query.f && req.query.f === "traer auto sel") {
      const autos = await sep.query(
        `
            SELECT *
            FROM autos
            WHERE idauto= ${parseInt(req.query.id)}
        `
      );

      await sep.end();
      res.status(200).json(autos);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const autos = await sep.query(
        `
            SELECT *
            FROM legajo_virtual_autos
            WHERE patente = '${req.query.patente}'
        `
      );
      await sep.end();

      res.status(200).json(autos);
    } else if (req.query.f && req.query.f === "Hist Nov") {
      const autos = await sep.query(
        `
             SELECT *
             FROM autos_novedades
             WHERE patente = '${req.query.patente}'
            `
      );

      await sep.end();

      res.status(200).json(autos);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo auto") {
      const regAuto = await sep.query(
        `
            INSERT INTO autos
            (
                patente,
                auto,
                kilometros,
                responsable,
                nro_poliza,
                empresa,
                vencimiento,
                motor,
                chasis,
                modelo,
                cobertura,
                estado,
                operador
            )
            VALUES 
            (
                 '${req.body.patente}',
                 '${req.body.auto}',
                 ${parseFloat(req.body.kilometros)},
                 '${req.body.responsable}',
                 '${req.body.nro_poliza}',
                 '${req.body.empresa}',
                 '${moment(req.body.vencimiento).format("YYYY-MM-DD")}',
                 '${req.body.motor}',
                 '${req.body.chasis}',
                 ${parseInt(req.body.modelo)},
                 '${req.body.cobertura}',
                 ${req.body.estado},
                 '${req.body.operador}'
            )
        `
      );

      await sep.end();

      res.status(200).json(regAuto);
    }
    if (req.body.f && req.body.f === "reg nov auto") {
      const regAuto = await sep.query(
        `
        INSERT INTO autos_novedades
        (
          novedad,
          patente,
          auto,
          operador,
          fecha
        )
        VALUES
        (
           '${req.body.novedad}',
           '${req.body.patente}',
           '${req.body.auto}',
           '${req.body.operador}',
           '${moment(req.body.fecha).format("YYYY-MM-DD")}' 
        )
    `
      );

      await sep.end();

      res.status(200).json(regAuto);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "renov poliza") {
      const regAuto = await sep.query(
        `
                UPDATE autos
                SET nro_poliza= '${req.body.nro_poliza}',
                    empresa= '${req.body.empresa}',
                    vencimiento= '${moment(req.body.vencimiento).format(
                      "YYYY-MM-DD"
                    )}',
                    cobertura= '${req.body.cobertura}' 
                WHERE idauto = ${parseInt(req.body.idauto)}
            `
      );

      await sep.end();

      res.status(200).json(regAuto);
    }
  }
}
