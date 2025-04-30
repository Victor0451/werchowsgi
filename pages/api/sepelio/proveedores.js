import { Werchow, SGI, Camp, Sep } from "../../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer proveedores") {
      const prov = await Sep.proveedores.findMany();

      res.status(200).json(prov);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo proveedor") {
      const regProv = await Sep.proveedores.create({
        data: {
          razon: req.body.razon,
          cuit: req.body.cuit,
          telefonos: req.body.telefono,
          domicilio: req.body.domicilio,
          estado: req.body.estado,
          operador: req.body.operador,
        },
      });

      res.status(200).json(regProv);
    }
  }
}
