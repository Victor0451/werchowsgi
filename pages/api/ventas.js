import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f === "listado novells") {
      const novell = await sgi.query(
        `
            SELECT *
            FROM alta_novell
            ORDER BY fecha_recepcion DESC
          
          `
      );

      await sgi.end();

      res.status(200).json(novell);
    } else if (req.query.f === "traer novell") {
      const listado = await sgi.query(
        `
            SELECT *
            FROM alta_novell
            WHERE idnovell= ${parseInt(req.query.idnovell)}
            
          
          `
      );

      await sgi.end();

      res.status(200).json(listado);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "alta novell") {
      const regNovell = await sgi.query(
        `
          INSERT INTO alta_novell
            (
                servicio,
                fecha_recepcion,
                monto,
                monto_letra,
                anticipo,
                anticipo_letra,
                cuotas,
                cuotasaldo,
                cuotasaldo_letra,
                cuota_mantenimiento,
                gastos_adm,
                apellido_sol,
                nombre_sol,
                dni_sol,
                estcivil_sol,
                fecha_nac_sol,
                dom_sol,
                domnum_sol,
                piso_sol,
                barrio_sol,
                localidad_sol,
                nacionalidad_sol,
                codpostal_sol,
                telefono_sol,
                movil_sol,
                apellido_ben,
                nombre_ben,
                dni_ben,
                estcivil_ben,
                fecha_nac_ben,
                dom_ben,
                domnum_ben,
                piso_ben,
                barrio_ben,
                localidad_ben,
                nacionalidad_ben,
                codpostal_ben,
                telefono_ben,
                movil_ben,
                operador
            )
          VALUES
            (
                '${req.body.servicio}',
                '${moment(req.body.fecha_recepcion).format("YYYY-MM-DD")}',
                ${parseInt(req.body.monto)},
                '${req.body.monto_letra}',
                ${parseInt(req.body.anticipo)},
                '${req.body.anticipo_letra}',
                ${parseInt(req.body.cuotas)},
                ${parseInt(req.body.cuotasaldo)},
                '${req.body.cuotasaldo_letra}',
                ${parseInt(req.body.cuota_mantenimiento)},
                ${parseInt(req.body.gastos_adm)},
                '${req.body.apellido_sol}',
                '${req.body.nombre_sol}',
                ${parseInt(req.body.dni_sol)},
                '${req.body.estcivil_sol}',
                '${moment(req.body.fecha_nac_sol).format("YYYY-MM-DD")}',
                '${req.body.dom_sol}',
                ${parseInt(req.body.domnum_sol)},
                '${req.body.piso_sol}',
                '${req.body.barrio_sol}',
                '${req.body.localidad_sol}',
                '${req.body.nacionalidad_sol}',
                ${parseInt(req.body.codpostal_sol)},
                '${req.body.telefono_sol}',
                '${req.body.movil_sol}',
                '${req.body.apellido_ben}',
                '${req.body.nombre_ben}',
                ${parseInt(req.body.dni_ben)},
                '${req.body.estcivil_ben}',
                '${moment(req.body.fecha_nac_ben).format("YYYY-MM-DD")}',
                '${req.body.dom_ben}',
                ${parseInt(req.body.domnum_ben)},
                '${req.body.piso_ben}',
                '${req.body.barrio_ben}',
                '${req.body.localidad_ben}',
                '${req.body.nacionalidad_ben}',
                ${parseInt(req.body.codpostal_ben)},
                '${req.body.telefono_ben}',
                '${req.body.movil_ben}',
                '${req.body.operador}'
            )
        
        `
      );

      await sgi.end();

      res.status(200).json(regNovell);
    }
  }
}
