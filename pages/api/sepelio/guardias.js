import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer guardias") {
      const plani = await Sep.$queryRawUnsafe(
        `                
        SELECT
          *
        FROM
          liquidacion_guardias
       

               `
      );

      res.status(200).json(plani);
    } else if (req.query.f && req.query.f === "traer liquidacion") {
      const plani = await Sep.liquidacion_guardias.findMany();

      res.status(200).json(plani);
    } else if (req.query.f && req.query.f === "traer guardias operador") {
      const guardiasOp = await Sep.liquidacion_guardias.findMany({
        where: {
          operador: req.query.operador,          
        },
        orderBy: {
          liquidado: "asc",
        },
      });

      res.status(200).json(guardiasOp);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva liquidacion") {
      const regTarea = await Sep.liquidacion_guardias.create({
        data: {
          lugar: req.body.lugar,
          inicio: req.body.inicio,
          fin: req.body.fin,
          horas: parseInt(req.body.horas),
          importe: parseFloat(req.body.importe),
          feriado: req.body.feriado,
          mes: parseInt(req.body.mes),
          ano: parseInt(req.body.ano),
          operador: req.body.operador,
          aprobado: parseInt(req.body.aprobado),
          liquidado: parseInt(req.body.liquidado),
        },
      });

      res.status(200).json(regTarea);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "editar evento") {
      const regAuto = await Sep.tareas.update({
        data: {
          title: req.body.title,
          start: req.body.start,
          end: req.body.end,
          allDay: req.body.allDay,
        },
        where: {
          idevents: parseInt(req.body.id),
        },
      });

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "estado liquidacion") {
      const regAuto = await Sep.liquidacion_guardias.update({
        data: {
          aprobado: parseInt(req.body.estado),
          operadorap: req.body.usu,
          fecha_aprobacion: new Date(req.body.fecha),
        },
        where: {
          idturno: parseInt(req.body.id),
        },
      });

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "liquidar guardia") {
      const regAuto = await Sep.liquidacion_guardias.update({
        data: {
          liquidado: parseInt(req.body.estado),
          operadorliq: req.body.usu,
          fecha_liquidacion: new Date(req.body.fecha),
        },
        where: {
          idturno: parseInt(req.body.id),
        },
      });

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "liquidar guardia 2") {
      const liqGuardia = await Sep.liquidacion_guardias.update({
        data: {
          liquidado: parseInt(req.body.liquidado),
          operadorliq: req.body.operadorliq,
          fecha_liquidacion: new Date(req.body.fecha_liquidacion),
        },
        where: {
          idturno: parseInt(req.body.idturno),
        },
      });

      res.status(200).json(liqGuardia);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
      const delTarea = await Sep.tareas.delete({
        where: {
          idevents: parseInt(req.query.id),
        },
      });

      res.status(200).json(delTarea);
    } else if (req.query.f && req.query.f === "eliminar guardia") {
      const delGuardia = await Sep.liquidacion_guardias.delete({
        where: {
          idturno: parseInt(req.query.idturno),
        },
      });

      res.status(200).json(delGuardia);
    }
  }
}
