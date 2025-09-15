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
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "liquidacion registro") {
      const regLiq = await sep.query(
        `
            INSERT INTO liquidacion_registro
            (

            fecha,
            empleado,
            concepto,
            fecha_concepto,
            importe,
            operador
            )
            
            VALUES
            (
              '${moment(req.body.fecha).format("YYYY-MM-DD")}',
              '${req.body.empleado}',
              '${req.body.concepto}',
              '${moment(req.body.fecha_concepto).format("YYYY-MM-DD")}',
              ${parseFloat(req.body.importe)},
             ' ${req.body.operador}',
            )
        
        `
      );

      await sep.end();

      res.status(200).json(regLiq);
    }
  }
}
