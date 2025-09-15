import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer vacaciones") {
      const listVacas = await sgi.query(
        `
              SELECT *
              FROM vacaciones  
            `
      );

      await sgi.end();

      res.status(200).json(listVacas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg vacaciones") {
      const regVacas = await sgi.query(
        `
        INSERT INTO vacaciones
        (
          empleado,
          inicio,
          fin,
          dias,
          observacion,
          operador,
          fecha
        
        )

        VALUES
        (
           '${req.body.empleado}',
           '${moment(req.body.inicio).format("YYYY-MM-DD")}',
           '${moment(req.body.fin).format("YYYY-MM-DD")}',
           ${parseInt(req.body.dias)},
           '${req.body.observacion}',
           '${req.body.operador}',
           '${moment(req.body.fecha).format("YYYY-MM-DD")}'
        )
        
        `
      );

      await sgi.end();

      res.status(200).json(regVacas);
    }
  } else if (req.method === "DELETE") {
    const eliminarVacas = await sgi.query(
      `
      DELETE FROM vacaciones
      WHERE idvacaciones = ${parseInt(req.query.idvacaciones)}
      
      `
    );

    await sgi.end();

    res.status(200).json(eliminarVacas);
  }
}
