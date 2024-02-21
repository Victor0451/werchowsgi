import { Werchow, SGI, Camp, Arch, Club } from "../../libs/config";

export default async function handler(req, res) {
  const prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer ganadores") {
      const ganadores = await Arch.$queryRaw`
         
            SELECT
               *
            FROM
               historial_ganadores
                  
            ORDER BY fecha DESC
              `;

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ganadores becas") {
      const ganadores = await Arch.$queryRaw`
         
            SELECT
               *
            FROM
               historial_ganadores_beca
                  
            ORDER BY fecha DESC
              `;

      res
        .status(200)
        .json(
          JSON.stringify(ganadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer participantes sorteo") {
      const participantes = await Club.$queryRaw`
         
            SELECT
               *
            FROM
               participantes_sorteo
                  
            
              `;

      res
        .status(200)
        .json(
          JSON.stringify(participantes, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ganadores sorteo") {
      const ganadores = await Club.$queryRaw`
         
            SELECT
               *
            FROM
               ganadores
                  
            
              `;

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
      const ganador = await Club.ganadores.create({
        data: {
          participante: req.body.participante,
          premio: parseInt(req.body.premio),
          fecha: new Date(req.body.fecha),
          dni: parseInt(req.body.dni),
          telefono: req.body.telefono,
        },
      });
      res.status(200).json(ganador);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar ganador") {
      const eliminarGanador = await Club.ganadores.delete({
        where: {
          idganador: parseInt(req.query.idganador),
        },
      });
      res.status(200).json(eliminarGanador);
    } else if (req.query.f && req.query.f === "eliminar ganadores") {
      const eliminarGanador = await Club.ganadores.deleteMany();
      res.status(200).json(eliminarGanador);
    }
  }
}
