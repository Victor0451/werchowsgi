export const config = {
  api: {
    responseLimit: false,
  },
};

import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer historial") {
      if (req.query.operador === "") {
        const historial = await sgi.query(
          `
            SELECT *
            FROM historial_acciones
            ORDER BY fecha DESC
          `
        );
        await sgi.end();
        res.status(200).json(historial);
      } else {
        const historial = await sgi.query(
          `
            SELECT *
            FROM historial_acciones
            WHERE operador = '${req.query.operador}'
            ORDER BY fecha DESC
          `
        );
        await sgi.end();
        res.status(200).json(historial);
      }
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "sistema") {
      const historial = await sgi.query(
        `
            INSERT INTO historial_acciones
            (
             operador,
             fecha,
             accion
            )

            VALUE 
            (
              '${req.body.operador}',
              '${moment(req.body.fecha).format("YYYY-MM-DD HH:mm:SS")}',
              '${req.body.accion}'
            
            )
        `
      );

      await sgi.end();

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "prestamos") {
      const historial = await sgi.query(
        `
          INSERT INTO historial_aprobacion_prestamos
            (
              operador,
              idprestamo,
              contrato,
              afiliado,
              fecha,
              productor
            )

          VALUE 
            (
              '${req.body.operador}',
              ${parseInt(req.body.idprestamo)},
              ${parseInt(req.body.contrato)},
              '${req.body.afiliado}',
              '${moment(req.body.fecha).format("YYYY-MM-DD HH:mm:ss")}',
              ${parseInt(req.body.productor)}
            )  
        
        `
      );

      await sgi.end();

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "autos") {
      const historial = await sgi.query(
        `
          INSERT INTO historial_autos
            (
                patente,
                idauto,
                operador,
                fecha,
                accion
            )

          VALUES
            (
                '${req.body.patente}',
                ${parseInt(req.body.idauto)},
                '${req.body.operador}',
                '${moment(req.body.fecha).format("YYYY-MM-DD")}',
                '${req.body.accion}',
            )      

        `
      );

      await sgi.end();

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "socios") {
      const historial = await werchow.query(
        `
            INSERT INTO historia
             (
                CONTRATO,
                OPERADOR,
                ARCHIVO,
                CAMPO,
                ANTERIOR,
                NUEVO,
                ACTUALIZA
             )

             VALUES

             (
                ${parseInt(req.body.CONTRATO)},
               ' ${req.body.OPERADOR}',
                '${parseInt(req.body.ARCHIVO)}',
                '${req.body.CAMPO}',
                '${req.body.ANTERIOR}',
                '${req.body.NUEVO}',
                '${req.body.ACTUALIZA}'
             )
          `
      );

      await werchow.end();

      res.status(200).json(historial);
    }
  }
}
