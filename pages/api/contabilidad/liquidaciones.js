import { werchow, sgi, serv, sep, camp, arch, club } from "../../../libs/db/index";
import moment from "moment";
export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer legajos") {
      const legajos = await sgi.query(`
        SELECT 
            idlegajo,
            operador,
            cuil,
            fecha_ingreso,
            antiguedad,
            categoria,
            tiempo_trabajo,
            fecha_pago,
            contratacion,
            empresa,
            cuit,
            estado
        FROM legajo_operador as l
        INNER JOIN empresas as e on l.idempresa = e.idempresa
      

        `);

      await sgi.end();

      res.status(200).json(legajos);
    } else if (req.query.f && req.query.f === "traer legajo personal") {
      const legajos = await sgi.query(`
          SELECT 
              idlegajo,
              operador,
              cuil,
              fecha_ingreso,
              antiguedad,
              categoria,
              tiempo_trabajo,
              fecha_pago,
              contratacion,
              empresa,
              cuit,
              estado
  
          FROM legajo_operador as l
          INNER JOIN empresas as e on l.idempresa = e.idempresa
          WHERE idlegajo = ${parseInt(req.query.idlegajo)}
          `);

      await sgi.end();

      res.status(200).json(legajos);
    } else if (req.query.f && req.query.f === "traer conceptos liquidacion") {
      const conceptos = await sgi.query(
        `
          SELECT *
          FROM conceptos_liquidacion
        `
      );
      await sgi.end();

      res.status(200).json(conceptos);
    } else if (req.query.f && req.query.f === "verificar liquidacion") {
      const chekLiq = await sgi.query(`
      SELECT 
          *
      FROM recibo_liquidacion   
      WHERE periodo = '${req.query.periodo}'
      AND operador_cuil = '${req.query.cuil}'
      `);

      await sgi.end();

      res.status(200).json(chekLiq);
    } else if (req.query.f && req.query.f === "traer historial recibos") {
      const histRec = await sgi.query(`
      SELECT 
          *
      FROM recibo_liquidacion   
      WHERE idlegajo = ${parseInt(req.query.idlegajo)}
      
      `);

      await sgi.end();

      res.status(200).json(histRec);
    } else if (req.query.f && req.query.f === "traer recibo") {
      const recibo = await sgi.query(`
      SELECT 
         *
      FROM recibo_liquidacion      
      WHERE idrecibo = ${parseInt(req.query.idrecibo)}
      `);

      await sgi.end();

      res.status(200).json(recibo);
    } else if (req.query.f && req.query.f === "traer movimientos recibo") {
      const reciboMov = await sgi.query(`
      SELECT 
         *
      FROM recibo_movimientos      
      WHERE idrecibo =  ${parseInt(req.query.idrecibo)}
      `);

      await sgi.end();
      res.status(200).json(reciboMov);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "crear recibo") {
      const recibo = await sgi.query(
        `
        INSERT INTO recibo_liquidacion
        (
          empresa,
          empresa_cuit,
          operador,
          operador_cuil,
          categoria,
          fecha_ingreso,
          anti,
          idlegajo,
          fecha,
          fecha_deposito,
          banco,
          periodo,
          seccion
        )
        VALUE
        (
           '${req.body.empresa}',
           '${req.body.empresa_cuit}',
           '${req.body.operador}',
           '${req.body.operador_cuil}',
           '${req.body.categoria}',
           '${moment(req.body.fecha_ingreso).format("YYYY-MM-DD")}',
           ${parseInt(req.body.anti)},
           ${parseInt(req.body.idlegajo)},
           '${moment(req.body.fecha).format("YYYY-MM-DD")}',
           '${moment(req.body.fecha_deposito).format("YYYY-MM-DD")}',
           '${req.body.banco}',
           '${req.body.periodo}',
           '${req.body.seccion}'
        )
        `
      );

      await sgi.end();

      res.status(200).json(recibo);
    } else if (req.body.f && req.body.f === "reg movim recibo") {
      const reciboMovim = await sgi.query(
        `
        INSERT INTO recibo_movimientos
        (
          idrecibo,
          cuil,
          concepto,
          remu_ren,
          remu_exe,
          descuento
        
        )

        VALUES

        (
           ${parseInt(req.body.idrecibo)},
           '${req.body.cuil}',
           '${req.body.concepto}',
           ${parseFloat(req.body.remu_ren)},
           ${parseFloat(req.body.remu_exe)},
           ${parseFloat(req.body.desc)}
        
        )
    
    `
      );

      await sgi.end();

      res.status(200).json(reciboMovim);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "actualizar total neto") {
      const recibo = await sgi.query(
        `
        UPDATE recibo_liquidacion
        SET total_neto= ${parseFloat(req.body.total_neto)}
        WHERE idrecibo= ${parseInt(req.body.idrecibo)}
      `
      );

      await sgi.end();

      res.status(200).json(recibo);
    }
  }
}
