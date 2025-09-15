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
    if (req.query.f && req.query.f === "list fab ataud") {
      const fabri = await sep.query(`
               SELECT 
                fabricante AS 'value',
                fabricante AS 'label'
               FROM fabricante_ataud           
        
        `);
      await sep.end();
      res.status(200).json(fabri);
    } else if (req.query.f && req.query.f === "list ataudes") {
      const ataudes = await sep.query(
        `
            SELECT *
            FROM ataudes           
           `
      );

      await sep.end();
      res.status(200).json(ataudes);
    } else if (req.query.f && req.query.f === "traer ataud") {
      const ataudes = await sep.query(
        `
            SELECT *
            FROM ataudes
            WHERE idataud = ${parseInt(req.query.id)}

        `
      );

      await sgi.end();

      res.status(200).json(ataudes);
    } else if (req.query.f && req.query.f === "traer historial id") {
      const ataudes = await sep.query(
        `
            SELECT *
            FROM historial_stock_ataud
            WHERE idataud = ${parseInt(req.query.idataud)}
            ORDER BY fecha_carga DESC
        `
      );

      await sep.end();
      res.status(200).json(ataudes);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg ataud") {
      const regAtaud = await sep.query(
        `
            INSERT INTO ataudes
            (
                nombre,
                tipo,
                medidas,
                uso,
                fabricante,
                stock,
                fecha_alta,
                operador,
                estado
            )
            VALUE
            (
                '${req.body.nombre},'
                '${req.body.tipo}',
                '${req.body.medidas}',
                '${req.body.uso}',
                '${req.body.fabricante}',
                ${parseInt(req.body.stock)},
                '${moment(req.body.fecha_alta).format("YYYY-MM-DD")}',
                '${req.body.operador}',
                ${req.body.estado}
            )
    `
      );

      await sep.end();

      res.status(200).json(regAtaud);
    } else if (req.body.f && req.body.f === "reg hist ataud") {
      const regHistAtaud = await sep.query(
        `
        INSERT INTO historial_stock_ataud
        (
          idataud,
          stock_anterior,
          stock_nuevo,
          fecha_carga,
          fecha_recepcion,
          remito,
          operador
        )
        VALUES
        (
           ${parseInt(req.body.idataud)},
           ${parseInt(req.body.stock_anterior)},
           ${parseInt(req.body.stock_nuevo)},
           '${moment(req.body.fecha_carga).format("YYYY-MM-DD")}',
           '${moment(req.body.fecha_recepcion).format("YYYY-MM-DD")}',
           '${req.body.remito}',
           '${req.body.operador}'
        )
    
    `
      );

      await sep.end();

      res.status(200).json(regHistAtaud);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act stock") {
      const actStock = await sep.query(
        `
            UPDATE ataudes
            SET stock= ${parseInt(req.body.stock)},
                observaciones= '${req.body.observaciones}',
                fecha_reposicion= '${moment(req.body.fecha_reposicion).format(
                  "YYYY-MM-DD"
                )}',
                operador= '${req.body.operador}'
            WHERE idataud= ${parseInt(req.body.idataud)}
        `
      );

      await sep.end();

      res.status(200).json(actStock);
    } else if (req.body.f && req.body.f === "act stock servicio") {
      const actStock = await sep.query(
        `
            UPDATE ataudes
            SET stock= ${parseInt(req.body.nuevo)}
            WHERE idataud= ${parseInt(req.body.idataud)}    
        `
      );

      await sep.end();

      res.status(200).json(actStock);
    }
  }
}
