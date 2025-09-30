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
    }
    if (req.body.f && req.body.f === "reg ganador hist") {
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
