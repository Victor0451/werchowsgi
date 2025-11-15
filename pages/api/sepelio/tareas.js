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
    if (req.query.f && req.query.f === "traer tareas") {
      const autos = await sep.query(
        `
            SELECT *
            FROM tareas

          `
      );

      await sep.end();
      res.status(200).json(autos);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva tarea") {
      const regTarea = await sep.query(
        `
          INSERT INTO tareas
           (
              title,
              start,
              end,
              allDay,              
              priority
           )
          VALUES
          (
            '${req.body.title}',
            '${req.body.start}',
            '${req.body.end}',
            ${req.body.allDay},
            ${parseInt(req.body.priority)}
          )

        `
      );

      await sep.end();

      res.status(200).json(regTarea);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "editar evento") {
      const regAuto = await sep.query(
        `
     UPDATE tareas
     SET title= '${req.body.title}',
         start= '${req.body.start}',
         end= '${req.body.end}',
         allDay= ${req.body.allDay}
    WHERE idevents = ${parseInt(req.body.id)}
    `
      );

      await sep.end();

      res.status(200).json(regAuto);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
      const delTarea = await sgi.query(
        `
          DELETE FROM tareas
          WHERE idevents= ${parseInt(req.query.id)}
        `
      );

      await sgi.end();

      res.status(200).json(delTarea);
    }
  }
}
