import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer ganadores") {
      const ganadores = await arch.query(`
         
            SELECT
               *
            FROM
               historial_ganadores
                  
            ORDER BY fecha DESC
              `);

      await arch.end();

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ganadores becas") {
      const ganadores = await arch.query(`
         
            SELECT
               *
            FROM
               historial_ganadores_beca
                  
            ORDER BY fecha DESC
              `);

      await arch.end();

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer participantes sorteo") {
      const participantes = await club.query(`
         
            SELECT
               *
            FROM
               participantes_sorteo
                  
            
              `);

      await club.end();

      res
        .status(200)
        .json(
          JSON.stringify(participantes, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ganadores sorteo") {
      const ganadores = await club.query(`
         
            SELECT
               *
            FROM
               ganadores
                  
            
              `);

      await club.end();

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer stock") {
      const ganadores = await sgi.query(`
         
            SELECT
               *
            FROM
               premios
            WHERE STOCK >= 1
                  
            
              `);

      await sgi.end();

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg ganador") {
      const ganador = await club.query(
        `
          INSERT INTO ganadores
            (
              participante,
              premio,
              fecha,
              dni,
              telefono
            )

            VALUES 
            (
             '${req.body.participante}',
             ${parseInt(req.body.premio)},
             '${moment(req.body.fecha).format("YYYY-MM-DD")}',
             ${parseInt(req.body.dni)},
             '${req.body.telefono}'
            
            )

        `
      );

      await club.end();

      res.status(200).json(ganador);
    } else if (req.body.f && req.body.f === "reg stock") {
      const ganador = await sgi.query(
        `
          INSERT INTO premios
            (
                producto,
                marca,
                stock,
                fecha,
                operador,
                observacion
            )

            VALUES 
            (
               '${req.body.producto}',
               '${req.body.marca}',
               ${req.body.stock},
               '${moment(req.body.fecha).format("YYYY-MM-DD")}',
               '${req.body.operador}',
               '${req.body.observacion}'
            
            )

        `
      );

      await sgi.end();

      res.status(200).json(ganador);
    } else if (req.body.f && req.body.f === "reg ganador hist") {
      const ganador = await arch.query(
        `
          INSERT INTO historial_ganadores
            (
              participante,
              premio,
              fecha,
              dni
              
            )

            VALUES 
            (
             '${req.body.participante}',
             '${req.body.premio}',
             '${moment(req.body.fecha).format("YYYY-MM-DD")}',
             '${req.body.dni}'             
            
            )

        `
      );

      await arch.end();

      res.status(200).json(ganador);
    } else if (req.body.f && req.body.f === "check ganador") {
      try {
        const { dni } = req.body;

        // Verificar si existe en la tabla de ganadores
        const [ganador] = await arch.query(
          `
        SELECT * FROM historial_ganadores 
        WHERE dni = ?
        LIMIT 1
      `,
          [dni]
        );

        res.status(200).json({
          esGanador: !!ganador,
          detalles: ganador || null,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al verificar ganador" });
      }
    } else if (req.method === "POST" && req.body.f === "descontar stock") {
      
      try {
        const { producto_id, dni, socio, premio } = req.body;

        // Verificar stock actual
        const [stockActual] = await sgi.query(
          `
        SELECT stock FROM premios WHERE idpremio = ?
      `,
          [producto_id]
        );

        if (!stockActual || stockActual.stock <= 0) {
          res.status(400).json({ error: "No hay stock disponible" });
          return;
        }

        // Actualizar stock
        await sgi.query(
          `
        UPDATE premios
        SET stock = stock - 1 
        WHERE idpremio = ?
      `,
          [producto_id]
        );

        // Registrar entrega
        await arch.query(
          `
        INSERT INTO historial_ganadores (participante, dni,  premio, fecha ) 
        VALUES (?, ?, ?, ?)
      `,
          [socio, dni, premio, moment().format("YYYY-MM-DD")]
        );

        res.status(200).json({ message: "Stock actualizado correctamente" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al procesar la solicitud" });
      }
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act stock premios") {
      const actStock = await sgi.query(
        `
        UPDATE premios 
        SET stock = stock - 1
        WHERE idpremio = ${parseInt(req.body.idpremio)}      
      `
      );

      await sgi.end();
      res.status(200).json(actStock);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar ganador") {
      const eliminarGanador = await club.query(
        `
        DELETE FROM ganadores
        WHERE idganador = ${parseInt(req.query.idganador)}
        `
      );

      await club.end();
      res.status(200).json(eliminarGanador);
    } else if (req.query.f && req.query.f === "eliminar ganadores") {
      const eliminarGanador = await club.query(
        `
        DELETE FROM ganadores
       
        `
      );

      await club.end();
      res.status(200).json(eliminarGanador);
    }
  }
}
