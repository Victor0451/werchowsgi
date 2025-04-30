import { Werchow, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer vacaciones") {
      const listVacas = await SGI.vacaciones.findMany();
      res.status(200).json(listVacas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg vacaciones") {
      const regVacas = await SGI.vacaciones.create({
        data: {
          empleado: req.body.empleado,
          inicio: new Date(req.body.inicio),
          fin: new Date(req.body.fin),
          dias: parseInt(req.body.dias),
          observacion: req.body.observacion,
          operador: req.body.operador,
          fecha: new Date(req.body.fecha),
        },
      });
      res.status(200).json(regVacas);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar periodo") {
      const eliminarVacas = await SGI.vacaciones.delete({
        where: { idvacaciones: parseInt(req.query.idvacaciones) },
      });
      res.status(200).json(eliminarVacas);
    }
  }
}
