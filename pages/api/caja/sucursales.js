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
    if (req.query.f && req.query.f === "traer cajas usuario") {
      const cajas = await sgi.query(
        `
            SELECT *
            FROM caja_sucursales
            WHERE operador_carga = '${req.query.user}'
            ORDER BY fecha_carga DESC
          `
      );

      await sgi.end();

      res.status(200).json(cajas);
    } else if (req.query.f && req.query.f === "traer cajas") {
      const cajas = await sgi.query(
        `
        SELECT *
        FROM caja_sucursales
        ORDER BY fecha_carga DESC
          
        `
      );

      await sgi.end();

      res.status(200).json(cajas);
    } else if (req.query.f && req.query.f === "traer movimientos caja") {
      const cajas = await sgi.query(
        `
          SELECT *
          FROM movimiento_caja_sucursales
          WHERE idcaja = ${parseInt(req.query.idcaja)}
        `
      );
      await sgi.end();

      res.status(200).json(cajas);
    } else if (req.query.f && req.query.f === "traer ingresos caja") {
      const cajas = await sgi.query(
        `
        SELECT *
        FROM movimiento_caja_sucursales
        WHERE idcaja = ${parseInt(req.query.idcaja)}
        AND movimiento = "I"
        
      `
      );

      await sgi.end();

      res.status(200).json(cajas);
    } else if (req.query.f && req.query.f === "traer egresos caja") {
      const cajas = await sgi.query(
        `
           SELECT *
           FROM movimiento_caja_sucursales
           WHERE idcaja = ${parseInt(req.query.idcaja)}
           AND movimiento = "E"
          
          `
      );

      await sgi.end();

      res.status(200).json(cajas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg movimientos") {
      const caja = await sgi.query(
        `
        INSERT INTO movimiento_caja_sucursales
        (
          idcaja,
          fecha_carga,
          sucursal,
          fecha_movimiento,
          concepto,
          movimiento,
          importe,
          operador_carga,
          empresa
        )
        VALUES
        (
           ${parseInt(req.body.idcaja)},
           '${moment(req.body.fecha_carga).format("YYYY-MM-DD")}',
           '${req.body.sucursal}',
           '${moment(req.body.fecha_movimiento).format("YYYY-MM-DD")}',
           '${req.body.concepto}',
           '${req.body.movimiento}',
           ${parseFloat(req.body.importe)},
           '${req.body.operador_carga}',
           '${req.body.empresa}'
        )  
      `
      );
      await sgi.end();

      res.status(200).json(caja);
    } else if (req.body.f && req.body.f === "reg caja") {
      const movCaja = await sgi.query(
        `
        INSERT INTO caja_sucursales
        (
          fecha_carga,
          sucursal,
          ingresos,
          egresos,
          saldo,
          operador_carga,
          empresa
        )

        VALUES
        (
           '${moment(req.body.fecha_carga).format("YYYY-MM-DD")}',
           '${req.body.sucursal}',
           ${parseFloat(req.body.ingresos)},
           ${parseFloat(req.body.egresos)},
           ${parseFloat(req.body.saldo)},
           '${req.body.operador_carga}',
           '${req.body.empresa}'
        )
      `
      );

      await sgi.end();

      res.status(200).json(movCaja);
    }
  }
}
