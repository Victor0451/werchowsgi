import { Werchow, SGI, Camp, Sep } from "../../libs/config";
import moment from "moment";
//import { PrismaClient as WerchowSepClient } from '../../../prisma/generated/werchowsep'

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f === "listado novells") {
      const novell = await SGI.alta_novell.findMany({
        orderBy: {
          fecha_recepcion: "desc",
        },
      });

      res.status(200).json(novell);
    } else if (req.query.f === "traer novell") {
      const listado = await SGI.alta_novell.findMany({
        where: {
          idnovell: parseInt(req.query.idnovell),
        },
      });

      res.status(200).json(listado);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "alta novell") {
      const regNovell = await SGI.alta_novell.create({
        data: {
          servicio: req.body.servicio,
          fecha_recepcion: new Date(req.body.fecha_recepcion),
          monto: parseInt(req.body.monto),
          monto_letra: req.body.monto_letra,
          anticipo: parseInt(req.body.anticipo),
          anticipo_letra: req.body.anticipo_letra,
          cuotas: parseInt(req.body.cuotas),
          cuotasaldo: parseInt(req.body.cuotasaldo),
          cuotasaldo_letra: req.body.cuotasaldo_letra,
          cuota_mantenimiento: parseInt(req.body.cuota_mantenimiento),
          gastos_adm: parseInt(req.body.gastos_adm),
          apellido_sol: req.body.apellido_sol,
          nombre_sol: req.body.nombre_sol,
          dni_sol: parseInt(req.body.dni_sol),
          estcivil_sol: req.body.estcivil_sol,
          fecha_nac_sol: new Date(req.body.fecha_nac_sol),
          dom_sol: req.body.dom_sol,
          domnum_sol: parseInt(req.body.domnum_sol),
          piso_sol: req.body.piso_sol,
          barrio_sol: req.body.barrio_sol,
          localidad_sol: req.body.localidad_sol,
          nacionalidad_sol: req.body.nacionalidad_sol,
          codpostal_sol: parseInt(req.body.codpostal_sol),
          telefono_sol: req.body.telefono_sol,
          movil_sol: req.body.movil_sol,
          apellido_ben: req.body.apellido_ben,
          nombre_ben: req.body.nombre_ben,
          dni_ben: parseInt(req.body.dni_ben),
          estcivil_ben: req.body.estcivil_ben,
          fecha_nac_ben: new Date(req.body.fecha_nac_ben),
          dom_ben: req.body.dom_ben,
          domnum_ben: parseInt(req.body.domnum_ben),
          piso_ben: req.body.piso_ben,
          barrio_ben: req.body.barrio_ben,
          localidad_ben: req.body.localidad_ben,
          nacionalidad_ben: req.body.nacionalidad_ben,
          codpostal_ben: parseInt(req.body.codpostal_ben),
          telefono_ben: req.body.telefono_ben,
          movil_ben: req.body.movil_ben,
          operador: req.body.operador,
        },
      });

      res.status(200).json(regNovell);
    }
  }
}
