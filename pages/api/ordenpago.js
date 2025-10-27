import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer detalle medico") {
      const detalleMedico = await serv.query(`
         
        SELECT 
            COD_PRES, 
            NOMBRE, 
            DIRECCION, 
            TELEFONOS, 
            HORARIO1, 
            HORARIO2,      
            SUBSTR(LIS_ESPE,1,3) "SERVICIO", 
            CON_PAGA,
            LIQUIDACION,
            LUGAR,
            OTERO,
            PROMO, 
            AUSENTE
        FROM PRESTADO
        WHERE COD_PRES = '${req.query.prestado}'
      `);

      res
        .status(200)
        .json(
          JSON.stringify(detalleMedico, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "norden") {
      const nOrden = await sgi.query(
        `
          SELECT idorden
          FROM ordenes_pago
          ORDER BY idorden DESC
          LIMIT 1
        
        `
      );

      res.status(200).json(nOrden);
    } else if (req.query.f && req.query.f === "traer ordenes") {
      if (
        parseInt(req.query.perfil) === 1 ||
        parseInt(req.query.perfil) === 3
      ) {
        const listado = await sgi.query(
          `
            SELECT *
            FROM ordenes_pago
            ORDER BY idorden DESC
          `
        );

        res.status(200).json(listado);
      } else {
        const listado = await sgi.query(
          `
            SELECT *
            FROM ordenes_pago
            WHERE operador_carga = '${req.query.usu}'
            ORDER BY idorden DESC
          `
        );

        res.status(200).json(listado);
      }
    } else if (req.query.f && req.query.f === "traer orden") {
      const Orden = await sgi.query(
        `
           SELECT *
            FROM ordenes_pago
            WHERE idorden = ${parseInt(req.query.idorden)}
  
        `
      );

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer detalle orden") {
      const Orden = await sgi.query(
        `
          SELECT *
          FROM detalle_orden_pago
           WHERE norden = '${req.query.idorden}'
        `
      );

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer datos orden") {
      const Orden = await sgi.query(
        `
            SELECT *
            FROM ordenes_pago
            WHERE norden = '${req.query.idorden}'
          `
      );

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer ordenes pendientes") {
      const Orden = await sgi.query(
        `
            SELECT *
            FROM ordenes_pago
            WHERE autorizado = false
            AND estado = true
          `
      );

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "usos sin puntear") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await sgi.query(`
      SELECT nconsulta, norden, fecha  
      FROM detalle_orden_pago
      WHERE fecha BETWEEN '${desde}' AND '${hasta}'

        `);

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await serv.query(`
            SELECT * 
            FROM USOS
            WHERE ORDEN = '${detUsos[i].nconsulta}'
            AND CONTROL IS NULL
  `);

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.query.f && req.query.f === "usos fa sin puntear") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await sgi.query(`
      SELECT nconsulta, norden, fecha  
      FROM detalle_orden_pago
      WHERE fecha BETWEEN '${desde}' AND '${hasta}'

        `);

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await serv.query(`
            SELECT * 
            FROM USOSFA
            WHERE ORDEN = '${detUsos[i].nconsulta}'
            AND CONTROL IS NULL
  `);

        if (response[0]) usosSinPun.push(response[0]);
      }

      await sgi.end();
      res.status(200).json(usosSinPun);
    } else if (req.query.f && req.query.f === "traer orden otero") {
      const Orden = await serv.query(
        `
        SELECT *
        FROM USOS
        WHERE ORDEN = '${req.query.orden}'
        
        `
      );

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer orden fabian") {
      const Orden = await serv.query(
        `
        SELECT *
        FROM USOSFA
        WHERE ORDEN = '${req.query.orden}'
        
        `
      );

      res.status(200).json(Orden);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva orden") {
      const regNovell = await sgi.query(`
          INSERT INTO ordenes_pago
          (
            fecha,
            proveedor,
            nombre,
            cuit_cuil,
            total,
            operador_carga,
            norden,
            observacion,
            autorizado,
            tipo_orden,
            nfactura,
            tipo_factura,
            fecha_pago,
            pagado,
            estado
          )
          
          VALUES

          (
            '${moment(req.body.fecha).format("YYYY-MM-DD")}',
            '${req.body.proveedor}',
            '${req.body.nombre}',
            '${req.body.cuit_cuil}',
            ${parseFloat(req.body.total) || 0},
            '${req.body.operador_carga}',
            'TEMP',
           ' ${req.body.observacion}',
            ${req.body.autorizado},
            '${req.body.tipo_orden}',
            '${req.body.nfactura}',
            '${req.body.tipo_factura}',
           '${moment__WEBPACK_IMPORTED_MODULE_1___default()(
             req.body.fecha_pago
           ).format("YYYY-MM-DD")}',
            ${req.body.pagado},
            ${req.body.estado}
          )
          
          `);

      const newId = regNovell.insertId;
      const nordenFinal = `${newId}/${moment__WEBPACK_IMPORTED_MODULE_1___default()().format(
        "YYYY"
      )}`;
      await sgi.query(`
              UPDATE ordenes_pago
              SET norden = '${nordenFinal}'
              WHERE idorden = ${newId}
            `);

      res.status(200).json({
        idorden: newId,
        norden: nordenFinal,
      });
    } else if (req.body.f && req.body.f === "nuevo detalle") {
      const regNovell = await sgi.query(
        `
            INSERT INTO detalle_orden_pago
            (
              norden,
              nconsulta,
              sucursal,
              prestador,
              servicio,
              importe,
              operador_carga,
              fecha            
            )

            VALUES
            (
              '${req.body.norden}',
              '${req.body.nconsulta}',
              '${req.body.sucursal}',
              '${req.body.prestador}',
              '${req.body.servicio}',
              '${req.body.importe}',
              '${req.body.operador_carga}',
              '${moment(req.body.fecha).format("YYYY-MM-DD")}'
            )
          `
      );

      res.status(200).json(regNovell);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "punteo orden") {
      const checkUSOS = await serv.query(
        `
          UPDATE USOS
          SET CONTROL= true,
              NORDEN = '${req.body.nor}',
              FECHA_CONTROL = '${moment(req.body.fec).format("YYYY-MM-DD")}'
          WHERE iduso = ${parseInt(req.body.iduso)}
        `
      );

      res.status(200).json(checkUSOS);
    } else if (req.body.f && req.body.f === "punteo orden FA") {
      const checkUSOSFA = await serv.query(
        `
          UPDATE USOSFA
          SET CONTROL= true,
              NORDEN = '${req.body.nor}',
              FECHA_CONTROL = '${moment(req.body.fec).format("YYYY-MM-DD")}'
          WHERE iduso = ${parseInt(req.body.iduso)}
        `
      );

      res.status(200).json(checkUSOSFA);
    } else if (req.body.f && req.body.f === "anular detalle orden") {
      const checkUSOS = await serv.query(`
      UPDATE USOS
      SET CONTROL = null,
          FECHA_CONTROL= null,
          NORDEN =null      
      WHERE NORDEN = '${req.body.norden}'         

      `);

      res.status(200).json(checkUSOS);

      const checkUSOSFA = await serv.query(`
      UPDATE USOSFA
      SET CONTROL = null,
          FECHA_CONTROL= null,
          NORDEN =null      
      WHERE NORDEN = '${req.body.norden}'         

      `);

      res.status(200).json(checkUSOSFA);
    } else if (req.body.f && req.body.f === "aprobar orden") {
      const apOrden = await sgi.query(
        `
          UPDATE ordenes_pago
          SET autorizado =  true,
              operador_autorizacion= '${req.body.usu}'
          WHERE idorden = ${parseInt(req.body.idorden)}

        `
      );

      res.status(200).json(apOrden);
    } else if (req.body.f && req.body.f === "anular orden") {
      const apOrden = await sgi.query(
        `
          UPDATE ordenes_pago
          SET estado= false
          WHERE idorden = ${parseInt(req.body.idorden)}
        `
      );

      res.status(200).json(apOrden);
    } else if (req.body.f && req.body.f === "imp liq ordenes") {
      const impLiq = await serv.query(`
          UPDATE USOSFA as u
          INNER JOIN PRESTADO as p ON p.COD_PRES = u.PRESTADO
          SET u.IMP_LIQ = p.CON_PAGA
          WHERE u.SERVICIO = 'ORDE'     

      `);

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "imp liq practicas") {
      const impLiq = await serv.query(`
        UPDATE USOSFA as u        
        SET u.IMP_LIQ = u.IMPORTE
        WHERE u.SERVICIO NOT IN ('ORDE', 'FARM') 

  `);

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "imp liq sin valor") {
      const impLiq = await serv.query(`
            UPDATE USOSFA AS u
            SET u.IMP_LIQ = 0
            WHERE u.IMP_LIQ IS NULL            
            OR u.IMP_LIQ = ''

`);

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "repunteo de usos web") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await sgi.query(`
      SELECT nconsulta, norden, fecha 
      FROM detalle_orden_pago
      WHERE fecha BETWEEN '${desde}' AND '${hasta}'

`);

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await serv.query(`
            UPDATE USOS
            SET CONTROL = 1,
                NORDEN = '${detUsos[i].norden}',
                FECHA_CONTROL= '${moment(detUsos[i].fecha).format(
                  "YYYY-MM-DD"
                )}'
            WHERE ORDEN = '${detUsos[i].nconsulta}'    

  `);

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.body.f && req.body.f === "repunteo de usos fox") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await sgi.query(`
      SELECT nconsulta, norden, fecha 
      FROM detalle_orden_pago
      WHERE fecha BETWEEN ${desde} AND ${hasta}

`);

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await serv.query(`
            UPDATE USOSFA
            SET CONTROL = 1,
                NORDEN = '${detUsos[i].norden}',
                FECHA_CONTROL= '${moment(detUsos[i].fecha).format(
                  "YYYY-MM-DD"
                )}'
            WHERE ORDEN = '${detUsos[i].nconsulta}' 

  `);

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.body.f && req.body.f === "levantar anulado") {
      if (req.body.sis === "O") {
        const levUso = await serv.query(
          `
            UPDATE USOS
            SET ANULADO = 0
            WHERE iduso = ${parseInt(req.body.iduso)}
  
           `
        );

        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await serv.query(
          `
            UPDATE USOSFA
            SET ANULADO = 0
            WHERE iduso = ${parseInt(req.body.iduso)}
  
           `
        );

        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "desbloquear uso") {
      if (req.body.sis === "O") {
        const levUso = await serv.query(
          `
            UPDATE USOS
            SET CONTROL = null,
                NORDEN = null,
                FECHA_CONTROL = null
            WHERE iduso = ${parseInt(req.body.iduso)}
  
           `
        );

        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await serv.query(
          `
            UPDATE USOSFA
            SET CONTROL = null,
                NORDEN = null,
                FECHA_CONTROL = null
            WHERE iduso = ${parseInt(req.body.iduso)}
  
           `
        );

        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "modificar imp liq") {
      if (req.body.sis === "O") {
        const levUso = await serv.query(
          `
        UPDATE USOS
        SET IMP_LIQ = ${parseInt(req.body.iduso)}
        WHERE iduso = ${parseInt(req.body.iduso)}
        `
        );

        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await serv.query(
          `
        UPDATE USOSFA
        SET IMP_LIQ = ${parseInt(req.body.iduso)}
        WHERE iduso = ${parseInt(req.body.iduso)}
        `
        );

        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "act importe ordenes") {
      const actImpDetOrde = await sgi.query(`
      
        UPDATE detalle_orden_pago         
        SET importe = '${req.body.importe}' 
        WHERE norden = '${req.body.orde}' 
        AND servicio = "ORDE"`);

      res.status(200).json(actImpDetOrde);
    } else if (req.body.f && req.body.f === "act importe orden pago") {
      const actTotOrdePag = await sgi.query(`

        UPDATE ordenes_pago         
        SET total = ${parseFloat(req.body.total)} 
        WHERE norden = '${req.body.orde}' 
        
        `);

      res.status(200).json(actTotOrdePag);
    } else if (req.body.f && req.body.f === "modificar importe orden") {
      if (req.body.sis === "-") {
        const modImp = await serv.query(
          `
          UPDATE USOS
          SET IMP_LIQ = ${parseFloat(req.body.importe)}
          WHERE iduso = ${parseInt(req.body.iduso)}
            
          `
        );

        res.status(200).json(modImp);
      } else {
        const modImp = await serv.query(
          `
          UPDATE USOSFA
          SET IMP_LIQ = ${parseFloat(req.body.importe)}
          WHERE iduso = ${parseInt(req.body.iduso)}
            
          `
        );

        res.status(200).json(modImp);
      }
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar duplicado") {
      if (req.query.sis === "O") {
        const levUso = await serv.query(
          `
        DELETE FROM USOS
        WHERE iduso = ${parseInt(req.query.iduso)}
        
        `
        );

        res.status(200).json(levUso);
      } else if (req.query.sis === "F") {
        const levUso = await serv.query(
          `
        DELETE FROM USOSFA
        WHERE iduso = ${parseInt(req.query.iduso)}
        
        `
        );

        res.status(200).json(levUso);
      }
    }
  }
}
