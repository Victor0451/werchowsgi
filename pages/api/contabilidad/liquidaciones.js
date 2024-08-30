import { data } from "autoprefixer";
import { Werchow, SGI, Camp } from "../../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer legajos") {
      const legajos = await SGI.$queryRaw`
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
      

        `;
      res.status(200).json(legajos);
    } else if (req.query.f && req.query.f === "traer legajo personal") {
      const legajos = await SGI.$queryRaw`
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
          WHERE idlegajo = ${req.query.idlegajo}
          `;
      res.status(200).json(legajos);
    } else if (req.query.f && req.query.f === "traer conceptos liquidacion") {
      const conceptos = await SGI.conceptos_liquidacion.findMany();
      res.status(200).json(conceptos);
    } else if (req.query.f && req.query.f === "verificar liquidacion") {
      const chekLiq = await SGI.$queryRaw`
      SELECT 
          *
      FROM recibo_liquidacion   
      WHERE periodo = ${req.query.periodo}
      AND operador_cuil = ${req.query.cuil}
      `;
      res.status(200).json(chekLiq);
    } else if (req.query.f && req.query.f === "traer historial recibos") {
      const histRec = await SGI.$queryRaw`
      SELECT 
          *
      FROM recibo_liquidacion   
      WHERE idlegajo = ${parseInt(req.query.idlegajo)}
      
      `;
      res.status(200).json(histRec);
    } else if (req.query.f && req.query.f === "traer recibo") {
      const recibo = await SGI.$queryRaw`
      SELECT 
         *
      FROM recibo_liquidacion      
      WHERE idrecibo = ${req.query.idrecibo}
      `;
      res.status(200).json(recibo);
    } else if (req.query.f && req.query.f === "traer movimientos recibo") {
      const reciboMov = await SGI.$queryRaw`
      SELECT 
         *
      FROM recibo_movimientos      
      WHERE idrecibo = ${req.query.idrecibo}
      `;
      res.status(200).json(reciboMov);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "crear recibo") {
      const recibo = await SGI.recibo_liquidacion.create({
        data: {
          empresa: req.body.empresa,
          empresa_cuit: req.body.empresa_cuit,
          operador: req.body.operador,
          operador_cuil: req.body.operador_cuil,
          categoria: req.body.categoria,
          fecha_ingreso: new Date(req.body.fecha_ingreso),
          anti: req.body.anti,
          idlegajo: req.body.idlegajo,
          fecha: new Date(req.body.fecha),
          fecha_deposito: new Date(req.body.fecha_deposito),
          banco: req.body.banco,
          periodo: req.body.periodo,
          seccion: req.body.seccion,
        },
      });
      res.status(200).json(recibo);
    } else if (req.body.f && req.body.f === "reg movim recibo") {
      const reciboMovim = await SGI.recibo_movimientos.create({
        data: {
          idrecibo: req.body.idrecibo,
          cuil: req.body.cuil,
          concepto: req.body.concepto,
          remu_ren: parseFloat(req.body.remu_ren),
          remu_exe: parseFloat(req.body.remu_exe),
          descuento: parseFloat(req.body.desc),
        },
      });
      res.status(200).json(reciboMovim);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "actualizar total neto") {
      const recibo = await SGI.recibo_liquidacion.update({
        data: {
          total_neto: parseFloat(req.body.total_neto),
        },
        where: {
          idrecibo: parseInt(req.body.idrecibo),
        },
      });
      res.status(200).json(recibo);
    }
  }
}
