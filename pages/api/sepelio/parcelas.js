import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "list parcelas") {
      const listParce = await Sep.parcelas.findMany();

      res.status(200).json(listParce);
    } else if (req.query.f && req.query.f === "traer parcela") {
      const parce = await Sep.parcelas.findMany({
        where: {
          idparcela: parseInt(req.query.id),
        },
      });

      res.status(200).json(parce);
    } else if (req.query.f && req.query.f === "traer historial parcela") {
      const parce = await Sep.parcelas_lugares.findMany({
        where: {
          idparcela: parseInt(req.query.id),
        },
      });

      res.status(200).json(parce);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva parcela") {
      const regParce = await Sep.parcelas.create({
        data: {
          parcela: req.body.parcela,
          mza: parseInt(req.body.mza),
          lote: parseInt(req.body.lote),
          cementerio: req.body.cementerio,
          lugares: parseInt(req.body.lugares),
          operador: req.body.operador,
          fecha_alta: req.body.fecha_alta,
          asignada: req.body.asignada,
        },
      });

      res.status(200).json(regParce);
    } else if (req.body.f && req.body.f === "asig lugar") {
      const asigLugar = await Sep.parcelas_lugares.create({
        data: {
          idparcela: parseInt(req.body.idparcela),
          contrato: parseInt(req.body.contrato),
          dni: parseInt(req.body.dni),
          fecha: new Date(req.body.fecha),
          operador: req.body.operador,
          lugar: parseInt(req.body.lugar),
        },
      });

      res.status(200).json(asigLugar);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "act parcela asig") {
      const regAuto = await Sep.parcelas.update({
        data: {
          idservicio: parseInt(req.body.idservicio),
          dni_extinto: parseInt(req.body.dni_extinto),
          operador_asignacion: req.body.operador_asignacion,
          fecha_asignacion: req.body.fecha_asignacion,
          ficha: parseInt(req.body.ficha),
          lugares: parseInt(req.body.lugares),
        },
        where: {
          idparcela: parseInt(req.body.idparcela),
        },
      });

      res.status(200).json(regAuto);
    } else if (req.body.f && req.body.f === "update lugar") {
      const updateLugar = await Sep.parcelas.update({
        data: {
          lugares: parseInt(req.body.lugares),
        },
        where: {
          idparcela: parseInt(req.body.idparcela),
        },
      });

      res.status(200).json(updateLugar);
    }
  }
}
