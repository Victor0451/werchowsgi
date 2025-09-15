import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "ultimo recibo") {
      const ultimoRec = await werchow.query(
        `
      SELECT 
        SERIE,
        NRO_RECIBO,
        DIA_PAG
      WHERE SERIE= ${parseInt(req.query.serie)}
      ORDER BY DIA_PAG DESC
  `
      );

      await werchow.end();

      res.status(200).json(ultimoRec);
    }
  }
}
