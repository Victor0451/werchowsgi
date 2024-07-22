import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer facturas") {
      const tipoFac = await SGI.tipo_facturas.findMany({
        where: {
          estado: true,
        },
      });

      res.status(200).json(tipoFac);
    } else if (req.query.f && req.query.f === "traer conceptos") {
      const tipoFac = await Sep.conceptos.findMany();

      res.status(200).json(tipoFac);
    } else if (req.query.f && req.query.f === "traer cajas") {
      const cajaSep = await Sep.caja_sepelio.findMany({
        orderBy: {
          fecha: "desc",
        },
      });

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer caja") {
      const cajaSep = await Sep.caja_sepelio.findUnique({
        where: {
          idcaja: parseInt(req.query.idcaja),
        },
      });

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer ingresos") {
      const cajaSep = await Sep.ingreso_caja.findMany({
        where: {
          idcaja: parseInt(req.query.idcaja),
        },
      });

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer gastos caja") {
      const cajaSep = await Sep.gastos_caja.findMany({
        where: {
          idcaja: parseInt(req.query.idcaja),
        },
      });

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer proveedores") {
      const prov = await Sep.proveedores.findMany();

      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const prov = await Sep.operadorsep.findMany({
        select: {
          operador: true,
        },
      });

      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "traer servicios") {
      const prov = await Sep.servicios.findMany({
        select: {
          idservicio: true,
          apellido: true,
          nombre: true,
        },
        orderBy: {
          idservicio: "desc",
        },
      });

      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "ingresos sa") {
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
    } else if (req.query.f && req.query.f === "total gastos") {
      const gastos = await Sep.$queryRaw`
             select SUM(total) as total
             from gastos_caja  
             where idcaja = ${parseInt(req.query.idcaja)}
      
`;

      res
        .status(200)
        .json(
          JSON.stringify(gastos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg caja") {
      const regCaja = await Sep.caja_sepelio.create({
        data: {
          empresa: req.body.empresa,
          monto: parseFloat(req.body.monto),
          concepto: req.body.concepto,
          detalle: req.body.detalle,
          fecha: new Date(req.body.fecha),
          tipofactura: req.body.tipofactura,
          ptoventa: parseInt(req.body.ptoventa),
          nfactura: parseInt(req.body.nfactura),
          operador: req.body.operador,
          estado: req.body.estado,
          gastos: parseFloat(req.body.gastos),
          totalcaja: parseFloat(req.body.totalcaja),
        },
      });

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg gasto caja") {
      const regCaja = await Sep.gastos_caja.create({
        data: {
          idcaja: parseInt(req.body.idcaja),
          concepto: req.body.concepto,
          mediopago: req.body.mediopago,
          tipofactura: req.body.tipofactura,
          proveedor: req.body.proveedor,
          empresa: req.body.empresa,
          porciva: req.body.porciva,
          fecha: new Date(req.body.fecha),
          nfactura: req.body.nfactura,
          ptoventa: parseFloat(req.body.ptoventa),
          operadorgestion: req.body.operadorgestion,
          operadortramite: req.body.operadortramite,
          montoiva: parseFloat(req.body.montoiva),
          retiibb: parseFloat(req.body.retiibb),
          retggcias: parseFloat(req.body.retggcias),
          perciva: parseFloat(req.body.perciva),
          detalle: req.body.detalle,
          total: parseFloat(req.body.total),
          idservicio: parseInt(req.body.idservicio),
        },
      });

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg ingreso caja") {
      const regCaja = await Sep.ingreso_caja.create({
        data: {
          idcaja: parseInt(req.body.idcaja),
          concepto: req.body.concepto,
          tipofactura: req.body.tipofactura,
          empresa: req.body.empresa,
          fecha: new Date(req.body.fecha),
          nfactura: req.body.nfactura,
          ptoventa: parseFloat(req.body.ptoventa),
          detalle: req.body.detalle,
          monto: parseFloat(req.body.total),
        },
      });

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg periodo") {
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
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "cerrar caja") {
      const cerrarCaja = await Sep.caja_sepelio.update({
        data: {
          estado: req.body.estado,
          cierre: new Date(req.body.cierre),
        },
        where: {
          idcaja: parseInt(req.body.idcaja),
        },
      });

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "ultima carga") {
      const cerrarCaja = await Sep.caja_sepelio.update({
        data: {
          ultimacarga: new Date(req.body.ultimacarga),
        },
        where: {
          idcaja: parseInt(req.body.idcaja),
        },
      });

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "update valores") {
      const cerrarCaja = await Sep.caja_sepelio.update({
        data: {
          gastos: parseFloat(req.body.gastos),
          totalcaja: parseFloat(req.body.totalcaja),
        },
        where: {
          idcaja: parseInt(req.body.idcaja),
        },
      });

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "update valores ing") {
      const cerrarCaja = await Sep.caja_sepelio.update({
        data: {
          monto: parseFloat(req.body.monto),
          totalcaja: parseFloat(req.body.totalcaja),
        },
        where: {
          idcaja: parseInt(req.body.idcaja),
        },
      });

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "reajustar caja") {
      const reajusteCaja = await Sep.caja_sepelio.update({
        data: {
          gastos: parseFloat(req.body.gastos),
          totalcaja: parseFloat(req.body.totalcaja),
        },
        where: {
          idcaja: parseInt(req.body.idcaja),
        },
      });

      res.status(200).json(reajusteCaja);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar gastos reg") {
      const delGastos = await Sep.gastos_caja.delete({
        where: {
          idgastos: parseInt(req.query.idgastos),
        },
      });

      res.status(200).json(delGastos);
    } else if (req.query.f && req.query.f === "eliminar caja") {
      const delCaja = await Sep.caja_sepelio.delete({
        where: {
          idcaja: parseInt(req.query.idcaja),
        },
      });

      res.status(200).json(delCaja);
    } else if (req.query.f && req.query.f === "eliminar ingresos caja") {
      const delIngreso = await Sep.$queryRaw`
      
      DELETE
      FROM ingreso_caja 
      WHERE idcaja = ${parseInt(req.query.idcaja)}
     
`;

      res.status(200).json(delIngreso);
    } else if (req.query.f && req.query.f === "eliminar egresos caja") {
      const delEgreso = await Sep.$queryRaw`
      
      DELETE
      FROM gastos_caja 
      WHERE idcaja = ${parseInt(req.query.idcaja)}     
`;

      res.status(200).json(delEgreso);
    }
  }
}
