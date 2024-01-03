import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f === "prestadores") {
      const prestadores = await Serv.PRESTADO.findMany({
        orderBy: {
          NOMBRE: "asc",
        },
      });
      res.status(200).json(prestadores);
    } else if (req.query.f === "consultas otero") {
      const consultas = await Serv.USOS.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: "ORDE",
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "consultas fabian") {
      const consultas = await Serv.USOSFA.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: "ORDE",
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "practicas otero") {
      const consultas = await Serv.USOS.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: { notIn: ["ORDE", "FARM"] },
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    } else if (req.query.f === "practicas fabian") {
      const consultas = await Serv.USOSFA.findMany({
        where: {
          PRESTADO: req.query.codigo,
          SERVICIO: { notIn: ["ORDE", "FARM"] },
          CONTROL: null,
        },
      });
      res.status(200).json(consultas);
    }
  }
}
