import { Werchow, SGI, Camp, Sep, Serv } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "norden") {
      const nOrden = await SGI.ordenes_pago.findFirst({
        select: {
          idorden: true,
        },
        orderBy: {
          idorden: "desc",
        },
      });

      res.status(200).json(nOrden);
    } else if (req.query.f && req.query.f === "traer ordenes") {
      if (
        parseInt(req.query.perfil) === 1 ||
        parseInt(req.query.perfil) === 3
      ) {
        const listado = await SGI.ordenes_pago.findMany({
          orderBy: {
            idorden: "desc",
          },
        });

        res.status(200).json(listado);
      } else {
        const listado = await SGI.ordenes_pago.findMany({
          where: {
            operador_carga: req.query.usu,
          },
          orderBy: {
            idorden: "desc",
          },
        });

        res.status(200).json(listado);
      }
    } else if (req.query.f && req.query.f === "traer orden") {
      const Orden = await SGI.ordenes_pago.findMany({
        where: {
          idorden: parseInt(req.query.idorden),
        },
      });

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer detalle orden") {
      const Orden = await SGI.detalle_orden_pago.findMany({
        where: {
          norden: req.query.idorden,
        },
      });

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer ordenes pendientes") {
      const Orden = await SGI.ordenes_pago.findMany({
        where: {
          autorizado: false,
          estado: true,
        },
      });

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "usos sin puntear") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await SGI.$queryRaw`
      SELECT nconsulta, norden, fecha  
      FROM detalle_orden_pago
      WHERE fecha BETWEEN ${desde} AND ${hasta}

`;

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await Serv.$queryRaw`
            SELECT * 
            FROM USOS
            WHERE ORDEN = ${detUsos[i].nconsulta}
            AND CONTROL IS NULL
  `;

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.query.f && req.query.f === "usos fa sin puntear") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await SGI.$queryRaw`
      SELECT nconsulta, norden, fecha  
      FROM detalle_orden_pago
      WHERE fecha BETWEEN ${desde} AND ${hasta}

`;
      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await Serv.$queryRaw`
            SELECT * 
            FROM USOSFA
            WHERE ORDEN = ${detUsos[i].nconsulta}
            AND CONTROL IS NULL
  `;

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.query.f && req.query.f === "traer orden otero") {
      const Orden = await Serv.USOS.findMany({
        where: {
          ORDEN: req.query.orden,
        },
      });

      res.status(200).json(Orden);
    } else if (req.query.f && req.query.f === "traer orden fabian") {
      const Orden = await Serv.USOSFA.findMany({
        where: {
          ORDEN: req.query.orden,
        },
      });

      res.status(200).json(Orden);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva orden") {
      const regNovell = await SGI.ordenes_pago.create({
        data: {
          fecha: new Date(req.body.fecha),
          proveedor: req.body.proveedor,
          nombre: req.body.nombre,
          cuit_cuil: req.body.cuit_cuil,
          total: parseFloat(req.body.total),
          operador_carga: req.body.operador_carga,
          norden: req.body.norden,
          observacion: req.body.observacion,
          autorizado: req.body.autorizado,
          tipo_orden: req.body.tipo_orden,
          nfactura: req.body.nfactura,
          tipo_factura: req.body.tipo_factura,
          fecha_pago: new Date(req.body.fecha_pago),
          pagado: req.body.pagado,
          estado: req.body.estado,
        },
      });

      res.status(200).json(regNovell);
    } else if (req.body.f && req.body.f === "nuevo detalle") {
      const regNovell = await SGI.detalle_orden_pago.create({
        data: {
          norden: req.body.norden,
          nconsulta: req.body.nconsulta,
          sucursal: req.body.sucursal,
          prestador: req.body.prestador,
          servicio: req.body.servicio,
          importe: req.body.importe,
          operador_carga: req.body.operador_carga,
          fecha: new Date(req.body.fecha),
        },
      });

      res.status(200).json(regNovell);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "punteo orden") {
      const checkUSOS = await Serv.USOS.update({
        data: {
          CONTROL: true,
          NORDEN: req.body.nor,
          FECHA_CONTROL: new Date(req.body.fec),
        },
        where: {
          iduso: parseInt(req.body.iduso),
        },
      });
      res.status(200).json(checkUSOS);
    } else if (req.body.f && req.body.f === "punteo orden FA") {
      const checkUSOSFA = await Serv.USOSFA.update({
        data: {
          CONTROL: true,
          NORDEN: req.body.nor,
          FECHA_CONTROL: new Date(req.body.fec),
        },
        where: {
          iduso: parseInt(req.body.iduso),
        },
      });

      res.status(200).json(checkUSOSFA);
    } else if (req.body.f && req.body.f === "anular detalle orden") {
      const checkUSOS = await Serv.$queryRaw`
      UPDATE USOS
      SET CONTROL = null,
          FECHA_CONTROL= null,
          NORDEN =null      
      WHERE NORDEN = ${req.body.norden}         

      `;
      res.status(200).json(checkUSOS);

      const checkUSOSFA = await Serv.$queryRaw`
      UPDATE USOSFA
      SET CONTROL = null,
          FECHA_CONTROL= null,
          NORDEN =null      
      WHERE NORDEN = ${req.body.norden}         

      `;

      res.status(200).json(checkUSOSFA);
    } else if (req.body.f && req.body.f === "aprobar orden") {
      const apOrden = await SGI.ordenes_pago.update({
        data: {
          autorizado: true,
          operador_autorizacion: req.body.usu,
        },
        where: {
          idorden: parseInt(req.body.idorden),
        },
      });

      res.status(200).json(apOrden);
    } else if (req.body.f && req.body.f === "anular orden") {
      const apOrden = await SGI.ordenes_pago.update({
        data: {
          estado: false,
        },
        where: {
          idorden: parseInt(req.body.idorden),
        },
      });

      res.status(200).json(apOrden);
    } else if (req.body.f && req.body.f === "imp liq ordenes") {
      const impLiq = await Serv.$queryRaw`
          UPDATE USOSFA as u
          INNER JOIN PRESTADO as p ON p.COD_PRES = u.PRESTADO
          SET u.IMP_LIQ = p.CON_PAGA
          WHERE u.SERVICIO = 'ORDE'     

      `;

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "imp liq practicas") {
      const impLiq = await Serv.$queryRaw`
        UPDATE USOSFA as u        
        SET u.IMP_LIQ = u.IMPORTE
        WHERE u.SERVICIO NOT IN ('ORDE', 'FARM') 

  `;

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "imp liq sin valor") {
      const impLiq = await Serv.$queryRaw`
            UPDATE USOSFA AS u
            SET u.IMP_LIQ = 0
            WHERE u.IMP_LIQ IS NULL            
            OR u.IMP_LIQ = ''

`;

      res.status(200).json(impLiq);
    } else if (req.body.f && req.body.f === "repunteo de usos web") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await SGI.$queryRaw`
      SELECT nconsulta, norden, fecha 
      FROM detalle_orden_pago
      WHERE fecha BETWEEN ${desde} AND ${hasta}

`;

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await Serv.$queryRaw`
            UPDATE USOS
            SET CONTROL = 1,
                NORDEN = ${detUsos[i].norden},
                FECHA_CONTROL= ${moment(detUsos[i].fecha).format("YYYY-MM-DD")}
            WHERE ORDEN = ${detUsos[i].nconsulta}    

  `;

        if (response[0]) usosSinPun.push(response[0]);
      }
      res.status(200).json(usosSinPun);
    } else if (req.body.f && req.body.f === "repunteo de usos fox") {
      let desde = moment()
        .subtract(2, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      let hasta = moment().endOf("month").format("YYYY-MM-DD");

      const detUsos = await SGI.$queryRaw`
      SELECT nconsulta, norden, fecha 
      FROM detalle_orden_pago
      WHERE fecha BETWEEN ${desde} AND ${hasta}

`;

      const usosSinPun = [];

      for (let i = 0; i < detUsos.length; i++) {
        const response = await Serv.$queryRaw`
            UPDATE USOSFA
            SET CONTROL = 1,
                NORDEN = ${detUsos[i].norden},
                FECHA_CONTROL= ${moment(detUsos[i].fecha).format("YYYY-MM-DD")}
            WHERE ORDEN = ${detUsos[i].nconsulta}    

  `;

        if (response[0]) usosSinPun.push(response[0]);
      }

      res.status(200).json(usosSinPun);
    } else if (req.body.f && req.body.f === "levantar anulado") {
      if (req.body.sis === "O") {
        const levUso = await Serv.USOS.update({
          data: {
            ANULADO: 0,
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await Serv.USOSFA.update({
          data: {
            ANULADO: 0,
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "desbloquear uso") {
      if (req.body.sis === "O") {
        const levUso = await Serv.USOS.update({
          data: {
            CONTROL: null,
            NORDEN: null,
            FECHA_CONTROL: null,
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await Serv.USOSFA.update({
          data: {
            CONTROL: null,
            NORDEN: null,
            FECHA_CONTROL: null,
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "modificar imp liq") {
      if (req.body.sis === "O") {
        const levUso = await Serv.USOS.update({
          data: {
            IMP_LIQ: parseFloat(req.body.impliq),
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      } else if (req.body.sis === "F") {
        const levUso = await Serv.USOSFA.update({
          data: {
            IMP_LIQ: req.body.impliq,
          },
          where: {
            iduso: parseInt(req.body.iduso),
          },
        });
        res.status(200).json(levUso);
      }
    } else if (req.body.f && req.body.f === "act importe ordenes") {
      const actImpDetOrde = await SGI.$queryRaw`
        UPDATE detalle_orden_pago         
        SET importe = ${req.body.importe} 
        WHERE norden = ${req.body.orde} 
        AND servicio = "ORDE"`;

      res.status(200).json(actImpDetOrde);
    } else if (req.body.f && req.body.f === "act importe orden pago") {
      const actTotOrdePag = await SGI.$queryRaw`
        UPDATE ordenes_pago         
        SET total = ${parseFloat(req.body.total)} 
        WHERE norden = ${req.body.orde} 
        
        `;

      res.status(200).json(actTotOrdePag);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar duplicado") {
      if (req.query.sis === "O") {
        const levUso = await Serv.USOS.delete({
          where: {
            iduso: parseInt(req.query.iduso),
          },
        });
        res.status(200).json(levUso);
      } else if (req.query.sis === "F") {
        const levUso = await Serv.USOSFA.delete({
          where: {
            iduso: parseInt(req.query.iduso),
          },
        });
        res.status(200).json(levUso);
      }
    }
  }
}
