import { Werchow, SGI, Camp, Sep } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  const prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer historial") {
      if (req.query.operador === "") {
        const historial = await SGI.historial_acciones.findMany({
          orderBy: {
            fecha: "desc",
          },
        });
        res.status(200).json(historial);
      } else {
        const historial = await SGI.historial_acciones.findMany({
          where: {
            operador: req.query.operador,
          },
          orderBy: {
            fecha: "desc",
          },
        });
        res.status(200).json(historial);
      }
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "sistema") {
      const historial = await prisma.historial_acciones.create({
        data: {
          operador: req.body.operador,
          fecha: new Date(req.body.fecha).toISOString(),
          accion: req.body.accion,
        },
      });

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "prestamos") {
      const historial = await prisma.historial_aprobacion_prestamos.create({
        data: {
          operador: req.body.operador,
          idprestamo: req.body.idprestamo,
          contrato: parseInt(req.body.contrato),
          afiliado: req.body.afiliado,
          fecha: new Date(req.body.fecha),
          productor: parseInt(req.body.productor),
        },
      });

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "autos") {
      const historial = await Sep.historial_autos.create({
        data: {
          patente: req.body.patente,
          idauto: parseInt(req.body.idauto),
          operador: req.body.operador,
          fecha: new Date(req.body.fecha).toISOString(),
          accion: req.body.accion,
        },
      });

      res.status(200).json(historial);
    } else if (req.body.f && req.body.f === "socios") {
      const historial = await Werchow.historia.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          OPERADOR: req.body.OPERADOR,
          ARCHIVO: parseInt(req.body.ARCHIVO),
          CAMPO: req.body.CAMPO,
          ANTERIOR: req.body.ANTERIOR,
          NUEVO: req.body.NUEVO,
          ACTUALIZA: req.body.ACTUALIZA,
        },
      });

      res.status(200).json(historial);
    }
  }
}
