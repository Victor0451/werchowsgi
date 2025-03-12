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
    }
    if (req.query.f === "prestadores sucu") {
      if (req.query.sucu === "O") {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            OTERO: 1,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      } else if (req.query.sucu === "W") {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            SUC: req.query.sucu,
            OTERO: 0,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      } else {
        const prestadores = await Serv.PRESTADO.findMany({
          where: {
            SUC: req.query.sucu,
          },
          orderBy: {
            NOMBRE: "asc",
          },
        });
        res.status(200).json(prestadores);
      }
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
