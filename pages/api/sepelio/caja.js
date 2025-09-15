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
    if (req.query.f && req.query.f === "traer facturas") {
      const tipoFac = await sgi.query(
        `
          SELECT * 
          FROM tipo_facturas
          WHERE estado = true
        `
      );

      await sgi.end();

      res.status(200).json(tipoFac);
    } else if (req.query.f && req.query.f === "traer conceptos") {
      const tipoFac = await sep.query(
        `
          SELECT *
          FROM conceptos
        `
      );

      await sep.end();

      res.status(200).json(tipoFac);
    } else if (req.query.f && req.query.f === "traer cajas") {
      const cajaSep = await sep.query(
        `
            SELECT *
            FROM caja_sepelio
            ORDER BY fecha DESC
            
          `
      );

      await sep.end();

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer caja") {
      const cajaSep = await sep.query(
        `
            SELECT *
            FROM caja_sepelio
            WHERE idcaja = ${parseInt(req.query.idcaja)}
            
          `
      );

      await sep.end();

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer ingresos") {
      const cajaSep = await sep.query(
        `
            SELECT *
            FROM ingreso_caja
            WHERE idcaja = ${parseInt(req.query.idcaja)}
            
          `
      );

      await sep.end();

      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer gastos caja") {
      const cajaSep = await sep.query(
        `
            SELECT *
            FROM gastos_caja
            WHERE idcaja = ${parseInt(req.query.idcaja)}
            
          `
      );

      await sep.end();
      res.status(200).json(cajaSep);
    } else if (req.query.f && req.query.f === "traer proveedores") {
      const prov = await sep.query(
        `
          SELECT *
          FROM proveedores

        `
      );
      await sep.end();
      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const prov = await sep.query(
        `
            SELECT operador
            FROM operadorsep

          `
      );
      await sep.end();

      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "traer servicios") {
      const prov = await sep.query(
        `
            SELECT idservicio,
                   apellido,
                   nombre
            FROM servicios
            ORDER BY idservicio DESC

        `
      );

      await sep.end();

      res.status(200).json(prov);
    } else if (req.query.f && req.query.f === "ingresos sa") {
      const ingresos = await sep.query(`
                 
                  SELECT ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 6 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.monto as 'importe' ,  ca.concepto as 'comentarios', 88 as 'operador' 
                  FROM caja_sepelio as ca
                  INNER JOIN conceptos as c on c.concepto = ca.concepto
                  INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
      
                  WHERE ca.empresa = 'WERCHOW S.A.'
                  AND cs.idempresa = 1
                   AND ca.fecha BETWEEN '${moment(req.query.desde).format(
                     "YYYY-MM-DD"
                   )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
      
                  ORDER BY ca.fecha ASC
          `);

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(ingresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ingresos srl") {
      const ingresos = await sep.query(`
                    SELECT ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 16 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.monto as 'importe' ,  ca.concepto as 'comentarios', 88 as 'operador' 
                    FROM caja_sepelio as ca
                    INNER JOIN conceptos as c on c.concepto = ca.concepto
                    INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
        
                    WHERE ca.empresa = 'WERCHOW S.R.L.'
                    AND cs.idempresa = 2
                     AND ca.fecha BETWEEN '${moment(req.query.desde).format(
                       "YYYY-MM-DD"
                     )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
      
                    ORDER BY ca.fecha ASC
            `);

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(ingresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "egresos sa") {
      const egresos = await sep.query(`
                      SELECT ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 6 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.total as 'importe', ca.concepto as 'comentarios', 88 as 'operador', p.cuit as 'cuit', p.razon as 'proveedor'
                      FROM gastos_caja as ca
                      INNER JOIN conceptos as c on c.concepto = ca.concepto
                      INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
                      INNER JOIN proveedores as p on p.razon = ca.proveedor
          
                      WHERE ca.empresa = 'WERCHOW S.A.'
                      AND cs.idempresa = 1
                       AND ca.fecha BETWEEN '${moment(req.query.desde).format(
                         "YYYY-MM-DD"
                       )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
        
                      ORDER BY ca.fecha ASC
              `);

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(egresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "egresos srl") {
      const egresos = await sep.query(`
                        SELECT ca.idcaja as 'nro_caja', ca.fecha as 'fecha', 16 as 'puesto', cs.sc_cuenta as 'codigo', c.tipo as 'movim' , cs.sc_descripcion as 'cuenta', ca.tipofactura as 'tipo', ca.ptoventa as 'serie', ca.nfactura as 'factura',  ca.total as 'importe', ca.concepto as 'comentarios', 88 as 'operador', p.cuit as 'cuit', p.razon as 'proveedor'
                        FROM gastos_caja as ca
                        INNER JOIN conceptos as c on c.concepto = ca.concepto
                        INNER JOIN conceptos_sepelio_cuentas as cs on cs.idconcepto = c.idconcepto
                        INNER JOIN proveedores as p on p.razon = ca.proveedor
            
                        WHERE ca.empresa = 'WERCHOW S.R.L.'
                        AND cs.idempresa = 2
                        AND ca.fecha BETWEEN '${moment(req.query.desde).format(
                          "YYYY-MM-DD"
                        )}' AND '${moment(req.query.hasta).format(
        "YYYY-MM-DD"
      )}'
                            
                        ORDER BY ca.fecha ASC
                `);

      await sep.end();

      res
        .status(200)
        .json(
          JSON.stringify(egresos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "consulta caja") {
      const consulta = await sep.query(
        `
            SELECT *
            FROM generacion_cajas
            WHERE desde = '${momen(req.query.desde).format("YYYY-MM-DD")}'
            AND hasta = '${momen(req.query.hasta).format("YYYY-MM-DD")}'
            AND empresa = '${req.query.emp}'
        `
      );
      await sep.end();

      res.status(200).json(consulta);
    } else if (req.query.f && req.query.f === "reporte caja sa") {
      const consulta = await sep.query(
        `
            SELECT *
            FROM caja_sa
            WHERE fecha BETWEEN '${moment(req.query.desde).format(
              "YYYY-MM-DD"
            )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
        `
      );
      await sep.end();

      res.status(200).json(consulta);
    } else if (req.query.f && req.query.f === "reporte caja srl") {
      const consulta = await sep.query(
        `
            SELECT *
            FROM caja_srl
            WHERE fecha BETWEEN '${moment(req.query.desde).format(
              "YYYY-MM-DD"
            )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
        `
      );
      await sep.end();

      res.status(200).json(consulta);
    } else if (req.query.f && req.query.f === "total gastos") {
      const gastos = await sep.query(`
  
             SELECT SUM(total) as total
             FROM gastos_caja  
             WHERE idcaja = ${parseInt(req.query.idcaja)}
      
`);

      await sep.end();

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
      const regCaja = await sep.query(
        `
            INSERT INTO caja_sepelio
            (
              empresa,
              monto,
              concepto,
              detalle,
              fecha,
              tipofactura,
              ptoventa,
              nfactura,
              operador,
              estado,
              gastos,
              totalcaja
            
            )

            VALUES
            (
               '${req.body.empresa}',
               ${parseFloat(req.body.monto)},
               '${req.body.concepto}',
               '${req.body.detalle}',
               '${moment(req.body.fecha).format("YYYY-MM-DD")}',
               '${req.body.tipofactura}',
               ${parseInt(req.body.ptoventa)},
               ${parseInt(req.body.nfactura)},
               '${req.body.operador}',
               ${req.body.estado},
               ${parseFloat(req.body.gastos)},
               ${parseFloat(req.body.totalcaja)}
            )
          `
      );

      await sep.end();

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg gasto caja") {
      const regCaja = await sep.query(
        `
            INSERT INTO gastos_caja
            (
              idcaja,
              concepto,
              mediopago,
              tipofactura,
              proveedor,
              empresa,
              porciva,
              fecha,
              nfactura,
              ptoventa,
              operadorgestion,
              operadortramite,
              montoiva,
              retiibb,
              retggcias,
              perciva,
              detalle,
              total,
              idservicio
            )
            
            VALUES
            (
               ${parseInt(req.body.idcaja)},
               '${req.body.concepto}',
               '${req.body.mediopago}',
               '${req.body.tipofactura}',
               '${req.body.proveedor}',
               '${req.body.empresa}',
'               ${req.body.porciva}',
               '${momen(req.body.fecha).format("YYYY-MM-DD")}',
               '${req.body.nfactura}',
               ${parseFloat(req.body.ptoventa)},
               ${req.body.operadorgestion},
               ${req.body.operadortramite},
               ${parseFloat(req.body.montoiva)},
               ${parseFloat(req.body.retiibb)},
               ${parseFloat(req.body.retggcias)},
               ${parseFloat(req.body.perciva)},
               ${req.body.detalle},
               ${parseFloat(req.body.total)},
               ${parseInt(req.body.idservicio)}
            )
          `
      );

      await sep.end();

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg ingreso caja") {
      const regCaja = await sep.query(
        `
              INSERT INTO ingreso_caja
              (
                idcaja,
                concepto,
                tipofactura,
                empresa,
                fecha,
                nfactura,
                ptoventa,
                detalle,
                monto
              )

              VALUES
              (
                 ${parseInt(req.body.idcaja)},
                 '${req.body.concepto},
                 '${req.body.tipofactura}',
                 '${req.body.empresa}',
                 '${momen(req.body.fecha).format("YYYY-MM-DD")}',
                 '${req.body.nfactura}',
                 ${parseFloat(req.body.ptoventa)},
                 '${req.body.detalle}',
                 ${parseFloat(req.body.total)}
                
              )
            
            `
      );

      await sep.end();

      res.status(200).json(regCaja);
    } else if (req.body.f && req.body.f === "reg periodo") {
      const genCaja = await sep.query(
        `
              INSERT INTO generacion_cajas
              (
                desde,
                hasta,
                empresa,
                operador,
                fecha
              )
              
              VALUES 
              (
                 '${moment(req.body.desde).format("YYYY-MM-DD")}',
                 '${moment(req.body.hasta).format("YYYY-MM-DD")}',
                 '${req.body.empresa}',
                 '${req.body.operador}',
                 '${moment(req.body.fecha).format("YYYY-MM-DD")}',
              )
            `
      );
      await sep.end();

      res.status(200).json(genCaja);
    } else if (req.body.f && req.body.f === "reg sa") {
      const cajaSA = await sep.query(
        `
              INSERT INTO caja_sa
              (
                nro_caja,
                fecha,
                puesto,
                codigo,
                movim,
                cuenta,
                tipo,
                serie,
                factura,
                importe,
                comentarios,
                operador,
                cuit,
                proveedor
              
              )

              VALUES 
              (
                 ${parseInt(req.body.nro_caja)},
                 '${moment(req.body.fecha).format("YYYY-MM-DD")}',
                 ${parseInt(req.body.puesto)},
                 ${parseInt(req.body.codigo)},
                 '${req.body.movim}',
                 '${req.body.cuenta}',
                 '${req.body.tipo}',
                 ${parseInt(req.body.serie)},
                 ${parseInt(req.body.factura)},
                 ${parseFloat(req.body.importe)},
                 '${req.body.comentarios}',
                 ${parseInt(req.body.operador)},
                 '${req.body.cuit}',
                 '${req.body.proveedor}'
              
              )
            `
      );

      await sep.end();

      res.status(200).json(cajaSA);
    } else if (req.body.f && req.body.f === "reg srl") {
      const cajaSRL = await sep.query(
        `
              INSERT INTO caja_srl
              (
                nro_caja,
                fecha,
                puesto,
                codigo,
                movim,
                cuenta,
                tipo,
                serie,
                factura,
                importe,
                comentarios,
                operador,
                cuit,
                proveedor
              
              )

              VALUES 
              (
                 ${parseInt(req.body.nro_caja)},
                 '${moment(req.body.fecha).format("YYYY-MM-DD")}',
                 ${parseInt(req.body.puesto)},
                 ${parseInt(req.body.codigo)},
                 '${req.body.movim}',
                 '${req.body.cuenta}',
                 '${req.body.tipo}',
                 ${parseInt(req.body.serie)},
                 ${parseInt(req.body.factura)},
                 ${parseFloat(req.body.importe)},
                 '${req.body.comentarios}',
                 ${parseInt(req.body.operador)},
                 '${req.body.cuit}',
                 '${req.body.proveedor}'
              
              )
            `
      );

      await sep.end();

      res.status(200).json(cajaSRL);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "cerrar caja") {
      const cerrarCaja = await sep.query(
        `
                UPDATE caja_sepelio
                SET  estado= ${req.body.estado},
                     cierre= '${moment(req.body.cierre).format("YYYY-MM-DD")}'
                WHERE idcaja = ${parseInt(req.body.idcaja)}
              
              `
      );

      await sep.end();

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "ultima carga") {
      const cerrarCaja = await sep.query(
        `
              UPDATE caja_sepelio
              SET ultimacarga = '${moment(req.body.ultimacarga).format(
                "YYYY-MM-DD"
              )}'
              WHERE idcaja = ${parseInt(req.body.idcaja)}
            
            `
      );
      await sep.end();

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "update valores") {
      const cerrarCaja = await sep.query(
        `
            UPDATE caja_sepelio
            SET gastos= ${parseFloat(req.body.gastos)},
                totalcaja= ${parseFloat(req.body.totalcaja)}
            WHERE idcaja = ${parseInt(req.body.idcaja)}
          `
      );
      await sep.end();

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "update valores ing") {
      const cerrarCaja = await sep.query(
        `
            UPDATE caja_sepelio
            SET monto= ${parseFloat(req.body.monto)},
                totalcaja= ${parseFloat(req.body.totalcaja)}
            WHERE idcaja = ${parseInt(req.body.idcaja)}

          `
      );

      await sep.end();

      res.status(200).json(cerrarCaja);
    } else if (req.body.f && req.body.f === "reajustar caja") {
      const reajusteCaja = await sep.query(
        `
            UPDATE caja_sepelio
            SET gastos= ${parseFloat(req.body.gastos)},
                totalcaja= ${parseFloat(req.body.totalcaja)}
            WHERE idcaja = ${parseInt(req.body.idcaja)}
          `
      );

      await sep.end();

      res.status(200).json(reajusteCaja);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar gastos reg") {
      const delGastos = await sep.query(
        `
        DELETE FROM gastos_caja
        WHERE idgastos= ${parseInt(req.query.idgastos)}
      `
      );

      await sep.end();

      res.status(200).json(delGastos);
    } else if (req.query.f && req.query.f === "eliminar caja") {
      const delCaja = await sep.query(
        `
        DELETE FROM caja_sepelio
        WHERE idcaja = ${parseInt(req.query.idcaja)}
      `
      );

      await sep.end();
      res.status(200).json(delCaja);
    } else if (req.query.f && req.query.f === "eliminar ingresos caja") {
      const delIngreso = await sep.query(`
      
      DELETE
      FROM ingreso_caja 
      WHERE idcaja = ${parseInt(req.query.idcaja)}
     
`);

      await sep.end();

      res.status(200).json(delIngreso);
    } else if (req.query.f && req.query.f === "eliminar egresos caja") {
      const delEgreso = await sep.query(`
      
      DELETE
      FROM gastos_caja 
      WHERE idcaja = ${parseInt(req.query.idcaja)}     
`);

      await sep.end();

      res.status(200).json(delEgreso);
    }
  }
}
