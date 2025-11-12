import { werchow, sgi, serv, sep, camp } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "nuevos casos") {
      let operador = req.query.operador;
      let campana = req.query.campana;
      let empresa = req.query.empresa;

      const nuevosCasos = await sgi.query(`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = '${operador}'
                AND c.descripcion = '${campana}'
                AND c.empresa =  '${empresa}'
                AND cc.estadocaso = 1
                AND cc.accion IS NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `);

      await sgi.end();
      res.status(200).json(nuevosCasos);
    } else if (req.query.f && req.query.f === "casos asignados progreso") {
      const nuevosCasos = await sgi.query(`
                SELECT c.idcampana, c.descripcion, COUNT(*) 'asig',sum(cc.cuota) 'mora'
                FROM campanacasos as cc
                INNER JOIN campanas as c ON cc.idcampana = c.idcampana
                WHERE MONTH(cc.fechacampana) = ${req.query.mes}
                AND YEAR(cc.fechacampana) = ${req.query.ano}
                AND c.operador = '${req.query.op}'
                AND cc.estadocaso = 1
                Group by c.idcampana, c.descripcion

            
            `);

      await sgi.end();
      res
        .status(200)
        .json(
          JSON.stringify(nuevosCasos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "casos trabajados") {
      let operador = req.query.operador;
      let campana = req.query.campana;
      let empresa = req.query.empresa;

      const casosTrab = await sgi.query(`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = '${operador}'
                AND c.descripcion = '${campana}'
                AND c.empresa =  '${empresa}'
                AND cc.estadocaso = 1
                AND cc.accion IS NOT NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `);

      await sgi.end();
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "casos trabajados progreso") {
      const casosTrab = await sgi.query(`
                SELECT c.idcampana, c.descripcion, COUNT(*) 'trab', sum(cc.cuota) 'mora'
                FROM campanacasos as cc
                INNER JOIN campanas as c ON cc.idcampana = c.idcampana
                WHERE MONTH(cc.fechacampana) = ${req.query.mes}
                AND YEAR(cc.fechacampana) = ${req.query.ano}
                AND c.operador = '${req.query.op}'
                AND cc.estadocaso = 1
                AND cc.accion = 1
                Group by c.idcampana, c.descripcion

            
            `);
      await sgi.end();
      res
        .status(200)
        .json(
          JSON.stringify(casosTrab, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "gestiones progreso") {
      const casosTrab = await sgi.query(`
                SELECT c.idcampana, c.descripcion, IFNULL(gc.accion, 'Sin Gestion') as accion, count(*) as 'gestiones'
                FROM campanacasos as cc
                INNER JOIN campanas as c ON cc.idcampana = c.idcampana 
                LEFT JOIN gestioncaso as gc ON cc.idcaso = gc.idcaso
                WHERE MONTH(cc.fechacampana) = ${req.query.mes}
                AND YEAR(cc.fechacampana) = ${req.query.ano}
                AND c.operador = '${req.query.op}'
                AND cc.estadocaso = 1
                AND cc.accion IS NOT NULL
                Group by c.idcampana, c.descripcion, gc.accion

            
            `);
      await sgi.end();
      res
        .status(200)
        .json(
          JSON.stringify(casosTrab, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "campanas activas") {
      const campActivas = await sgi.query(`
                select c.idcampana, c.operador, c.descripcion, c.empresa, count(cc.contrato) as cantidad
                from campanas as c
                inner join campanacasos as cc on c.idcampana = cc.idcampana
                where cc.estadocaso = 1
                group by c.idcampana

            
            `);
      await sgi.end();
      res
        .status(200)
        .json(
          JSON.stringify(campActivas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "filtrar acciones") {
      let operador = req.query.operador;
      let campana = req.query.campana;
      let empresa = req.query.empresa;
      let accion = req.query.accion;

      const campActivas = await sgi.query(`
                select *
                from campanacasos as cc
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                INNER JOIN gestioncaso as gc ON cc.idcaso = gc.idcaso
                WHERE c.operador = '${operador}'
                AND c.descripcion = '${campana}'
                AND c.empresa =  '${empresa}'
                AND cc.estadocaso = 1
                AND cc.accion = 1
                AND gc.nuevaaccion = '${accion}'                
                ORDER BY cc.barrio, cc.calle, cc.nro_calle               

            
            `);
      await sgi.end();
      res
        .status(200)
        .json(
          JSON.stringify(campActivas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "historial") {
      const hist = await werchow.query(`
                SELECT
                h.CONTRATO,
                o.OPERADOR,
                h.ANTERIOR,
                CONCAT(
                    SUBSTR(h.ACTUALIZA, 1, 4),
                    '-',
                    LEFT(SUBSTR(h.ACTUALIZA, 5,6),2),
                    '-',
                    LEFT(SUBSTR(h.ACTUALIZA, 7,8),2)
                ) 'FECHA'
                FROM
                historia AS h
                INNER JOIN operador AS o ON o.CODIGO = h.OPERADOR
                WHERE
                h.ANTERIOR LIKE '%PAGO 0%'
                AND h.CONTRATO = ${req.query.id}
            
            `);

      await werchow.end();
      res.status(200).json(hist);
    } else if (req.query.f && req.query.f === "asignar camp") {
      let tabla = `${req.query.camp}`;

      const asigCamp = await camp.query(
        `
            SELECT *
            FROM ${tabla}

          `
      );
      await camp.end();
      res.status(200).json(asigCamp);
    } else if (req.query.f && req.query.f === "camp temp") {
      const campTemp = await sgi.query(
        `
        SELECT *
        FROM campanatemporal
        WHERE operador = '${req.query.operador}'
        AND ESTADO = true
        
        `
      );

      await sgi.end();
      res.status(200).json(campTemp);
    } else if (req.query.f && req.query.f === "camp temp trab") {
      const campTemp = await await sgi.query(
        `
        SELECT *
        FROM campanatemporal
        WHERE operador = '${req.query.operador}'
        AND ESTADO = false
        
        `
      );

      await sgi.end();
      res.status(200).json(campTemp);
    } else if (req.query.f && req.query.f === "buscar contrato") {
      const casosTrab = await sgi.query(`
                  SELECT * 
                  FROM campanacasos AS cc 
                  INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                  WHERE cc.contrato = ${parseInt(req.query.hc)}
                  AND cc.estadocaso = true
                  
              
              `);
      await sgi.end();
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "buscar dni") {
      const casosTrab = await sgi.query(`
                    SELECT * 
                    FROM campanacasos AS cc 
                    INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                    WHERE cc.contrato = ${parseInt(req.query.dni)}
                    AND cc.estadocaso = true
                    
                
                `);
      await sgi.end();
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "gestion caso") {
      const casosTrab = await sgi.query(`
                      SELECT * 
                      FROM gestioncaso                       
                      WHERE contrato = ${parseInt(req.query.contrato)}
                      
                  
                  `);
      await sgi.end();
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const casosTrab = await sgi.query(`
                   SELECT usuario as 'value',
                    CONCAT(apellido, ', ', nombre) as 'label'    
                    FROM operador            
                    WHERE estado = 1
                    AND perfil = 2 
                    AND campanas = 1           
                    ORDER BY apellido ASC
                      
                  
                  `);
      await sgi.end();
      res.status(200).json(casosTrab);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg caso") {
      const gestionCaso = await sgi.query(
        `
    INSERT INTO gestioncaso
       (
          operador,
          idcaso,
          fechaaccion,
          accion,
          observacion,
          fechanuevaaccion,     
          nuevaaccion,
          observacion_nuevaaccion,
          contrato    
    
       )

    VALUES 
      (
          ' ${req.body.operador}',
           ${parseInt(req.body.idcaso)},
           '${moment(req.body.fechaaccion).format("YYYY-MM-DD")}',
           '${req.body.accion}',
           '${req.body.observacion}',
           '${moment(req.body.fechanuevaaccion).format("YYYY-MM-DD")}',
           '${req.body.nuevaaccion}',
           '${req.body.observacion_nuevaaccion}',
           ${parseInt(req.body.contrato)}
    
      )
    
    `
      );

      await sgi.end();

      res.status(200).json(gestionCaso);
    } else if (req.body.f && req.body.f === "asig caso") {
      const asigCaso = await sgi.query(
        `
          INSERT INTO campanacasos
          (          
           idcampana,
          fechacampana,
          mes,
          ano,
          sucursal,
          contrato,
          apellido,
          edad,
          nombre,
          dni,
          telefono,
          movil,
          calle,
          nro_calle,
          barrio,
          localidad,
          cuota,
          cuotasadeudadas,
          montoadeudado,
          estadocaso,
          alta,
          vigencia
          )

          VALUES 

          (
           ${parseFloat(req.body.idcampana)},
           '${moment(req.body.fechacampana).format("YYYY-MM-DD")}',
           ${parseFloat(req.body.mes)},
           ${parseFloat(req.body.ano)},
           '${req.body.sucursal}',
           ${parseFloat(req.body.contrato)},
           '${req.body.apellido}',
           ${parseFloat(req.body.edad)},
           '${req.body.nombre}',
           ${parseFloat(req.body.dni)},
           '${req.body.telefono}',
           '${req.body.movil}',
           '${req.body.calle}',
           ${parseFloat(req.body.nro_calle)},
           '${req.body.barrio}',
           '${req.body.localidad}',
           ${parseFloat(req.body.cuota)},
           ${parseFloat(req.body.cuotasadeudadas)},
           ${parseFloat(req.body.montoadeudado)},
           ${req.body.estadocaso},
           '${moment(req.body.alta).format("YYYY-MM-DD")}',
           '${moment(req.body.vigencia).format("YYYY-MM-DD")}'
          
          )

        `
      );

      await sgi.end();

      res.status(200).json(asigCaso);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "update caso") {
      const campanaCasos = await sgi.query(
        `
        UPDATE campanacasos
        SET accion = ${parseInt(req.body.accion)}
        WHERE idcaso = ${parseInt(req.body.caso)}
        
        `
      );

      await sgi.end();

      res.status(200).json(campanaCasos);
    } else if (req.body.f && req.body.f === "act caso temp") {
      const campanaTemp = await sgi.query(
        `
        UPDATE campanatemporal
        SET  accion= '${req.body.accion}',
              fecha_observacion= '${moment(req.body.fecha_observacion).format(
                "YYYY-MM-DD"
              )}',
              observacion= '${req.body.observacion}',
              estado= false
        WHERE idcaso = ${parseInt(req.body.idcaso)}
        
        `
      );

      await sgi.end();

      res.status(200).json(campanaTemp);
    } else if (req.body.f && req.body.f === "cerrar campaña") {
      const casosTrab = await sgi.query(`
                  UPDATE campanacasos
                  SET estadocaso = 0
                  WHERE idcampana = ${parseInt(req.body.idcampana)}
                      
                  
                  `);

      await sgi.end();

      res.status(200).json(casosTrab);
    }
  }
}
