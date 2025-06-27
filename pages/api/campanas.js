// import { PrismaClient as WerchowsgiClient } from '../../prisma/generated/werchowsgi'
// import { PrismaClient as WerchowsClient } from '../../prisma/generated/werchow'
// import { PrismaClient as WerchowCampClient } from '../../prisma/generated/werchowcamp'
import { Werchow, SGI, Camp } from "../../libs/config";

import moment from "moment";

export default async function handler(req, res) {
  let prisma = SGI;
  let prismaWer = Werchow;
  let prismaWerCamp = Camp;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "nuevos casos") {
      let operador = req.query.operador;
      let campana = req.query.campana;
      let empresa = req.query.empresa;

      const nuevosCasos = await prisma.$queryRaw`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = ${operador}
                AND c.descripcion = ${campana}
                AND c.empresa =  ${empresa}
                AND cc.estadocaso = 1
                AND cc.accion IS NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `;
      res.status(200).json(nuevosCasos);
    } else if (req.query.f && req.query.f === "casos asignados progreso") {
      const nuevosCasos = await prisma.$queryRaw`
                SELECT COUNT(*) 'asig'
                FROM campanacasos as cc
                INNER JOIN campanas as c ON cc.idcampana = c.idcampana
                WHERE MONTH(cc.fechacampana) = ${req.query.mes}
                AND YEAR(cc.fechacampana) = ${req.query.ano}
                AND c.operador = ${req.query.op}

            
            `;
      res
        .status(200)
        .json(
          JSON.stringify(nuevosCasos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "casos trabajados") {
      let operador = req.query.operador;
      let campana = req.query.campana;
      let empresa = req.query.empresa;

      const casosTrab = await prisma.$queryRaw`
                SELECT * 
                FROM campanacasos AS cc 
                INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                WHERE c.operador = ${operador}
                AND c.descripcion = ${campana}
                AND c.empresa =  ${empresa}
                AND cc.estadocaso = 1
                AND cc.accion IS NOT NULL
                ORDER BY cc.barrio, cc.calle, cc.nro_calle 
            
            `;
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "casos trabajados progreso") {
      const casosTrab = await prisma.$queryRaw`
                SELECT COUNT(*) 'trab'
                FROM campanacasos as cc
                INNER JOIN campanas as c ON cc.idcampana = c.idcampana
                WHERE MONTH(cc.fechacampana) = ${req.query.mes}
                AND YEAR(cc.fechacampana) = ${req.query.ano}
                AND c.operador = ${req.query.op}
                AND cc.accion = 1

            
            `;
      res
        .status(200)
        .json(
          JSON.stringify(casosTrab, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "campanas activas") {
      const campActivas = await prisma.$queryRaw`
                select c.idcampana, c.operador, c.descripcion, c.empresa, count(cc.contrato) as cantidad
                from campanas as c
                inner join campanacasos as cc on c.idcampana = cc.idcampana
                where cc.estadocaso = 1
                group by c.idcampana

            
            `;
      res
        .status(200)
        .json(
          JSON.stringify(campActivas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "historial") {
      const hist = await prismaWer.$queryRaw`
                SELECT
                h.CONTRATO,
                o.OPERADOR,
                h.ANTERIOR,
                CONCAT(
                    SUBSTR(h.ACTUALIZA, 1, 4),
                    '-',
                    LEFT(SUBSTR(h.ACTUALIZA, 5,6),2),
                    '-',
                    LEFT(SUBSTR(h.ACTUALIZA, 7,8),2)
                ) 'FECHA'
                FROM
                historia AS h
                INNER JOIN operador AS o ON o.CODIGO = h.OPERADOR
                WHERE
                h.ANTERIOR LIKE '%PAGO 0%'
                AND h.CONTRATO = ${req.query.id}
            
            `;
      res.status(200).json(hist);
    } else if (req.query.f && req.query.f === "asignar camp") {
      let tabla = `${req.query.camp}`;

      if (tabla === "atcampana") {
        const asigCamp = await prismaWerCamp.atcampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "at2campana") {
        const asigCamp = await prismaWerCamp.at2campana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "reccampana") {
        const asigCamp = await prismaWerCamp.reccampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "reincampana") {
        const asigCamp = await prismaWerCamp.reincampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "blancampana") {
        const asigCamp = await prismaWerCamp.blancampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "auxcampana") {
        const asigCamp = await prismaWerCamp.auxcampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "policampana") {
        const asigCamp = await prismaWerCamp.policampana.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "atcampanaM") {
        const asigCamp = await prismaWerCamp.atcampanaM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "at2campanaM") {
        const asigCamp = await prismaWerCamp.at2campanaM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "reccampanaM") {
        const asigCamp = await prismaWerCamp.reccampanaM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "reincampanaM") {
        const asigCamp = await prismaWerCamp.reincampanaM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "blancampanaM") {
        const asigCamp = await prismaWerCamp.blancampanaM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "atcampanaSM") {
        const asigCamp = await prismaWerCamp.atcampanaSM.findMany();
        res.status(200).json(asigCamp);
      } else if (tabla === "reccampanaSM") {
        const asigCamp = await prismaWerCamp.reccampanaSM.findMany();
        res.status(200).json(asigCamp);
      }
    } else if (req.query.f && req.query.f === "camp temp") {
      const campTemp = await prisma.campanatemporal.findMany({
        where: {
          operador: req.query.operador,
          estado: true,
        },
      });
      res.status(200).json(campTemp);
    } else if (req.query.f && req.query.f === "camp temp trab") {
      const campTemp = await prisma.campanatemporal.findMany({
        where: {
          operador: req.query.operador,
          estado: false,
        },
      });
      res.status(200).json(campTemp);
    } else if (req.query.f && req.query.f === "buscar contrato") {
      const casosTrab = await prisma.$queryRaw`
                  SELECT * 
                  FROM campanacasos AS cc 
                  INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                  WHERE cc.contrato = ${parseInt(req.query.hc)}
                  AND cc.estadocaso = true
                  
              
              `;
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "buscar dni") {
      const casosTrab = await prisma.$queryRaw`
                    SELECT * 
                    FROM campanacasos AS cc 
                    INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
                    WHERE cc.contrato = ${parseInt(req.query.dni)}
                    AND cc.estadocaso = true
                    
                
                `;
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "gestion caso") {
      const casosTrab = await prisma.$queryRaw`
                      SELECT * 
                      FROM gestioncaso                       
                      WHERE contrato = ${parseInt(req.query.contrato)}
                      
                  
                  `;
      res.status(200).json(casosTrab);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const casosTrab = await prisma.$queryRaw`
                   SELECT usuario as 'value',
                    CONCAT(apellido, ', ', nombre) as 'label'    
                    FROM operador            
                    WHERE estado = 1
                    AND perfil = 2 
                    AND campanas = 1           
                    ORDER BY apellido ASC
                      
                  
                  `;
      res.status(200).json(casosTrab);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg caso") {
      const gestionCaso = await prisma.gestioncaso.create({
        data: {
          operador: req.body.operador,
          idcaso: req.body.idcaso,
          fechaaccion: moment(req.body.fechaaccion).format("YYYY-MM-DD"),
          accion: req.body.accion,
          observacion: req.body.observacion,
          fechanuevaaccion: moment(req.body.fechanuevaaccion).format(
            "YYYY-MM-DD"
          ),
          nuevaaccion: req.body.nuevaaccion,
          observacion_nuevaaccion: req.body.observacion_nuevaaccion,
          contrato: req.body.contrato,
        },
      });

      res.status(200).json(gestionCaso);
    } else if (req.body.f && req.body.f === "asig caso") {
      const asigCaso = await prisma.campanacasos.create({
        data: {
          idcampana: req.body.idcampana,
          fechacampana: new Date(req.body.fechacampana).toISOString(),
          mes: req.body.mes,
          ano: req.body.ano,
          sucursal: req.body.sucursal,
          contrato: req.body.contrato,
          apellido: req.body.apellido,
          edad: req.body.edad,
          nombre: req.body.nombre,
          dni: req.body.dni,
          telefono: req.body.telefono,
          movil: req.body.movil,
          calle: req.body.calle,
          nro_calle: req.body.nro_calle,
          barrio: req.body.barrio,
          localidad: req.body.localidad,
          cuota: req.body.cuota,
          cuotasadeudadas: req.body.cuotasadeudadas,
          montoadeudado: req.body.montoadeudado,
          estadocaso: req.body.estadocaso,
          alta: req.body.alta,
          vigencia: req.body.vigencia,
        },
      });

      res.status(200).json(asigCaso);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "update caso") {
      const campanaCasos = await prisma.campanacasos.update({
        where: {
          idcaso: req.body.caso,
        },

        data: {
          accion: req.body.accion,
        },
      });

      res.status(200).json(campanaCasos);
    } else if (req.body.f && req.body.f === "act caso temp") {
      const campanaTemp = await prisma.campanatemporal.update({
        where: {
          idcaso: req.body.idcaso,
        },

        data: {
          accion: req.body.accion,
          fecha_observacion: req.body.fecha_observacion,
          observacion: req.body.observacion,
          estado: false,
        },
      });

      res.status(200).json(campanaTemp);
    } else if (req.body.f && req.body.f === "cerrar campaña") {
      const casosTrab = await prisma.$queryRaw`
                  UPDATE campanacasos
                  SET estadocaso = 0
                  WHERE idcampana = ${parseInt(req.body.idcampana)}
                      
                  
                  `;
      res.status(200).json(casosTrab);
    }
  }
}
