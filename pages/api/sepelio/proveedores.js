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
    if (req.query.f && req.query.f === "traer proveedores") {
      const prov = await sep.query(
        `
            SELECT *
            FROM proveedores
          `
      );

      await sep.end();

      res.status(200).json(prov);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo proveedor") {
      const regProv = await sep.query(
        `
              INSERT INTO proveedores
              (
                razon,
                cuit,
                telefonos,
                domicilio,
                estado,
                operador,
              )
              
              VALUES
              (
                 '${req.body.razon}',
                 '${req.body.cuit}',
                 '${req.body.telefono}',
                 '${req.body.domicilio}',
                 ${req.body.estado},
                 '${req.body.operador}',
              )

            `
      );

      await sep.end();

      res.status(200).json(regProv);
    }
  }
}
