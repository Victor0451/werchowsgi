import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "tasas") {
      const tasas = await sgi.query(
        `
         SELECT *
         FROM prestamos_tasas
         WHERE estado = true
         AND tipo = "policias"
        `
      );

      await sgi.end();

      res.status(200).json(tasas);
    }
    if (req.query.f && req.query.f === "tasas emp") {
      const tasas = await sgi.query(
        `
         SELECT *
         FROM prestamos_tasas
         WHERE estado = true
         AND tipo = "empleados"
        `
      );

      await sgi.end();
      res.status(200).json(tasas);
    }
    if (req.query.f && req.query.f === "capital") {
      const capital = await sgi.query(
        `
        SELECT *
        FROM capital_prestamo
        WHERE estado =  true        
        
        `
      );

      await sgi.end();

      res.status(200).json(capital);
    }
    if (req.query.f && req.query.f === "capital emp") {
      const capitalEmp = await sgi.query(
        `
        SELECT *
        FROM capital_prestamo_empleados
        WHERE estado =  true        
        
        `
      );

      await sgi.end();
      res.status(200).json(capitalEmp);
    }
    if (req.query.f && req.query.f === "plan cuotas") {
      const planes = await sgi.query(
        `
        SELECT *
        FROM prestamos_plan_cuotas
        WHERE estado =  true        
        
        `
      );

      await sgi.end();
      res.status(200).json(planes);
    }
    if (req.query.f && req.query.f === "traer poli") {
      const poli = await werchow.query(`
            SELECT *            
            FROM maestro   
            WHERE CONTRATO = ${parseInt(req.query.hc)}
         
        
        `);

      await werchow.end();
      res.status(200).json(poli);
    }
    if (req.query.f && req.query.f === "traer empleados") {
      const emple = await sgi.query(`
            SELECT usuario as 'value',
              CONCAT(apellido, ', ', nombre) as 'label'    
            FROM operador            
            WHERE estado = 1            
            ORDER BY apellido ASC
        
        `);

      await sgi.end();
      res.status(200).json(emple);
    }
    if (req.query.f && req.query.f === "list prest") {
      const prest = await werchow.query(`
            SELECT *              
            FROM prestamos
            WHERE ptm_op = ${parseInt(req.query.op)}      
           
            ORDER BY ptm_fechasol DESC
        
        `);

      await werchow.end();
      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "list prest pendientes") {
      const prest = await werchow.query(
        `
        SELECT *
        FROM prestamos
        WHERE ptm_estado = "PENDIENTE"  
        ORDER BY ptm_fechasol DESC
      `
      );

      await werchow.end();

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "list prest emp") {
      const emple = await sgi.query(
        `
          SELECT *
          FROM prestamos_empleados
          
          `
      );

      await sgi.end();

      res.status(200).json(emple);
    }
    if (req.query.f && req.query.f === "list prest pagos") {
      const listPagos = await sgi.query(
        `
          SELECT *
          FROM prestamos_empleados_cobro
          WHERE idprestamo = ${parseInt(req.query.id)}
        `
      );

      await sgi.end();

      res.status(200).json(listPagos);
    }
    if (req.query.f && req.query.f === "prest id") {
      const prest = await werchow.query(
        `
          SELECT * 
          FROM prestamos
          WHERE ptm_id= ${parseInt(req.query.id)}
        `
      );

      await werchow.end();

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "prest socio") {
      const ficha = await werchow.query(`
            
            SELECT  *                    
            FROM maestro
            WHERE CONTRATO  = ${parseInt(req.query.hc)}
            
        
        `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(ficha, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.query.f && req.query.f === "traer archivos") {
      const prest = await sgi.query(
        `
          SELECT archivo
          FROM legajo_virtual_prestamos
          WHERE cod_ptm_leg= '${req.query.id}'
          AND contrato = ${parseInt(req.query.hc)}

        `
      );

      await sgi.end();

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "reporte prestamos") {
      const reporte = await werchow.query(`
            
            SELECT  
             CONCAT(u.usu_apellido, ', ', u.usu_nombre) as 'operador',
             COUNT(*) as 'prestamos',
             SUM(ptm_prestamo) as 'capital',
             SUM(ptm_valcuota) as 'interes',
            (SUM(ptm_valcuota * ptm_cuotas)) as 'capconint'             
            FROM prestamos as p
            INNER JOIN usuario as u on u.usu_ide = p.ptm_op           
            WHERE ptm_estado  = 'APROBADO'
            AND ptm_fechasol BETWEEN '${req.query.desde}' AND '${req.query.hasta}'
            GROUP BY ptm_op
        
        `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(reporte, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.query.f && req.query.f === "rep list prestamos") {
      const reporte = await werchow.query(`
            
            SELECT  
             p.ptm_fechasol,
             p.ptm_ficha,
             p.ptm_afi,
             p.ptm_renov,
             p.ptm_prestamo,
             p.ptm_cuotas,
             p.ptm_valcuota,
             p.ptm_estado,
             CONCAT(u.usu_apellido, ', ', u.usu_nombre) as 'operador'
            FROM prestamos as p    
            INNER JOIN usuario as u on u.usu_ide = p.ptm_op     
            WHERE ptm_fechasol BETWEEN '${req.query.desde}' AND '${req.query.hasta}'
                    
        `);

      await werchow.end();

      res.status(200).json(reporte);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg prestamo") {
      const nuPrest = await werchow.query(
        `
          INSERT INTO prestamos
              (
                ptm_fechacarga,
                ptm_fechasol,
                ptm_op,
                ptm_ficha,
                ptm_legajo,
                ptm_ant,
                ptm_renov,
                ptm_prestamo,
                ptm_cuotas,
                ptm_valcuota,
                ptm_neto,
                ptm_estado,
                cod_ptm_leg,
                ptm_afi,
                capinoaut,
                ptm_fechaingreso,
                ptm_inicio,
                ptm_fin
              )
        VALUES
              (
                '${moment(req.body.fechacarga).format("YYYY-MM-DD")}',
                '${moment(req.body.fechasol).format("YYYY-MM-DD")}',
                ${parseInt(req.body.operador)},
                ${parseInt(req.body.ficha)},
                ${parseInt(req.body.legajo)},
                ${parseInt(req.body.anti)},
                '${req.body.renova}',
                ${parseFloat(req.body.capital)},
                ${parseInt(req.body.cuotas)},
                ${parseFloat(req.body.valcuota)},
                ${parseFloat(req.body.neto)},
                '${req.body.estado}',
                '${req.body.codptmleg}',
                '${req.body.ptm_afi}',
                ${req.body.capinoaut},
                '${moment(req.body.ingreso).format("YYYY-MM-DD")}',
                '${req.body.inicio}',
                '${req.body.fin}'
              )
  `
      );

      await werchow.end();

      res.status(200).json(nuPrest);
    }
    if (req.body.f && req.body.f === "reg prestamo emp") {
      const nuPrest = await sgi.query(
        `
            INSERT INTO prestamos_empleados
            (
              empleado,
              fecha_solicitud,
              capital,
              plan_cuotas,
              cuota_mensual,
              capital_dev,
              inicia,
              termina,
              estado,
              capinoaut,
            )
            VALUES
            (
               '${req.body.empleado}',
               '${moment(req.body.fecha_solicitud).format("YYYY-MM-DD")}',
               ${parseFloat(req.body.capital)},
               ${parseInt(req.body.plan_cuotas)},
               ${parseFloat(req.body.cuota_mensual)},
               ${parseFloat(req.body.capital_dev)},
               '${req.body.inicia}',
               '${req.body.termina}',
               '${req.body.estado}',
               ${req.body.capinoaut},
            
            )  



          `
      );

      await sgi.end();

      res.status(200).json(nuPrest);
    }
    if (req.body.f && req.body.f === "reg plan pagos") {
      const planPagos = await sgi.query(
        `
            INSERT INTO prestamos_empleados_cobro
            (
              idprestamo,
              cuota,
              importe,
              fecha_cobro,
              estado,
            )
            VALUE
            (
              ${parseInt(req.body.idprestamo)},
              ${parseInt(req.body.cuota)},
              ${parseFloat(req.body.importe)},
              '${moment(req.body.fecha_cobro).format("YYYY-MM-DD")}',
              ${req.body.estado}
            )          
          `
      );

      res.status(200).json(planPagos);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "est prest emp") {
      const apPrest = await sgi.query(
        `
          UPDATE prestamos_empleados
          SET estado = '${req.body.estado}'
          WHERE idprestamo = ${parseInt(req.body.id)}
        
        `
      );

      await sgi.end();

      res.status(200).json(apPrest);
    }
    if (req.body.f && req.body.f === "est prest") {
      const apPrest = await werchow.query(
        `
      UPDATE prestamos
      SET ptm_estado='${req.body.estado}'
      WHERE ptm_id= ${parseInt(req.body.id)}
     `
      );

      await werchow.end();

      res.status(200).json(apPrest);
    }
    if (req.body.f && req.body.f === "cobro cuota prest") {
      const apPrest = await sgi.query(
        `
            UPDATE prestamos_empleados_cobro
            SET fecha_pago= '${moment(req.body.fecha_pago).format(
              "YYYY-MM-DD"
            )}',
                estado: ${req.body.estado},
                operador: ${req.body.operador}
            
            `
      );

      await sgi.end();

      res.status(200).json(apPrest);
    }
  }
}
