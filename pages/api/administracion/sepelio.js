import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  const prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "ingresos sa") {
      const ingresos = await Sep.$queryRaw`
            select ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 6 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.monto as 'importe' ,  ca.concepto as 'comentarios', 88 as 'operador' 
            from caja_sepelio as ca
            INNER JOIN conceptos as c on c.concepto = ca.concepto
            INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto

            where ca.empresa = 'WERCHOW S.A.'
            and cs.idempresa = 1
            and ca.fecha BETWEEN ${req.query.desde} AND ${req.query.hasta}

            ORDER BY ca.fecha ASC
    `;

      res
        .status(200)
        .json(
          JSON.stringify(ingresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ingresos srl") {
      const ingresos = await Sep.$queryRaw`
              select ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 16 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.monto as 'importe' ,  ca.concepto as 'comentarios', 88 as 'operador' 
              from caja_sepelio as ca
              INNER JOIN conceptos as c on c.concepto = ca.concepto
              INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
  
              where ca.empresa = 'WERCHOW S.R.L.'
              and cs.idempresa = 2
              and ca.fecha BETWEEN ${req.query.desde} AND ${req.query.hasta}

              ORDER BY ca.fecha ASC
      `;

      res
        .status(200)
        .json(
          JSON.stringify(ingresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "egresos sa") {
      const egresos = await Sep.$queryRaw`
                select ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 6 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.total as 'importe', ca.concepto as 'comentarios', 88 as 'operador', p.cuit as 'cuit', p.razon as 'proveedor'
                from gastos_caja as ca
                INNER JOIN conceptos as c on c.concepto = ca.concepto
                INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
                INNER JOIN proveedores as p on p.razon = ca.proveedor
    
                where ca.empresa = 'WERCHOW S.A.'
                and cs.idempresa = 1
                and ca.fecha BETWEEN ${req.query.desde} AND ${req.query.hasta}
  
                ORDER BY ca.fecha ASC
        `;

      res
        .status(200)
        .json(
          JSON.stringify(egresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "egresos srl") {
      const egresos = await Sep.$queryRaw`
                  select ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 16 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.total as 'importe', ca.concepto as 'comentarios', 88 as 'operador', p.cuit as 'cuit', p.razon as 'proveedor'
                  from gastos_caja as ca
                  INNER JOIN conceptos as c on c.concepto = ca.concepto
                  INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
                  INNER JOIN proveedores as p on p.razon = ca.proveedor
      
                  where ca.empresa = 'WERCHOW S.R.L.'
                    and cs.idempresa = 2
                  and ca.fecha BETWEEN ${req.query.desde} AND ${req.query.hasta}
    
                  ORDER BY ca.fecha ASC
          `;

      res
        .status(200)
        .json(
          JSON.stringify(egresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "consulta caja") {
      const consulta = await Sep.generacion_cajas.findMany({
        where: {
          desde: new Date(req.query.desde),
          hasta: new Date(req.query.hasta),
          empresa: req.query.emp,
        },
      });
      res.status(200).json(consulta);
    } else if (req.query.f && req.query.f === "reporte caja sa") {
      const consulta = await Sep.caja_sa.findMany({
        where: {
          fecha: {
            lte: new Date(req.query.hasta),
            gte: new Date(req.query.desde),
          },
        },
      });
      res.status(200).json(consulta);
    } else if (req.query.f && req.query.f === "reporte caja srl") {
      const consulta = await Sep.caja_srl.findMany({
        where: {
          fecha: {
            lte: new Date(req.query.hasta),
            gte: new Date(req.query.desde),
          },
        },
      });
      res.status(200).json(consulta);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg periodo") {
      const genCaja = await Sep.generacion_cajas.create({
        data: {
          desde: new Date(req.body.desde),
          hasta: new Date(req.body.hasta),
          empresa: req.body.empresa,
          operador: req.body.operador,
          fecha: new Date(req.body.fecha),
        },
      });

      res.status(200).json(genCaja);
    } else if (req.body.f && req.body.f === "reg sa") {
      const cajaSA = await Sep.caja_sa.create({
        data: {
          nro_caja: parseInt(req.body.nro_caja),
          fecha: new Date(req.body.fecha),
          puesto: parseInt(req.body.puesto),
          codigo: parseInt(req.body.codigo),
          movim: req.body.movim,
          cuenta: req.body.cuenta,
          tipo: req.body.tipo,
          serie: parseInt(req.body.serie),
          factura: parseInt(req.body.factura),
          importe: parseFloat(req.body.importe),
          comentarios: req.body.comentarios,
          operador: parseInt(req.body.operador),
          cuit: req.body.cuit,
          proveedor: req.body.proveedor,
        },
      });

      res.status(200).json(cajaSA);
    } else if (req.body.f && req.body.f === "reg srl") {
      const cajaSRL = await Sep.caja_srl.create({
        data: {
          nro_caja: parseInt(req.body.nro_caja),
          fecha: new Date(req.body.fecha),
          puesto: parseInt(req.body.puesto),
          codigo: parseInt(req.body.codigo),
          movim: req.body.movim,
          cuenta: req.body.cuenta,
          tipo: req.body.tipo,
          serie: parseInt(req.body.serie),
          factura: parseInt(req.body.factura),
          importe: parseFloat(req.body.importe),
          comentarios: req.body.comentarios,
          operador: parseInt(req.body.operador),
          cuit: req.body.cuit,
          proveedor: req.body.proveedor,
        },
      });

      res.status(200).json(cajaSRL);
    }
  }
}
