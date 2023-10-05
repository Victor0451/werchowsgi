import { Werchow, SGI, Camp } from "../../libs/config";
//import { PrismaClient as WerchowsClient } from '../../prisma/generated/werchow'

export default async function handler(req, res) {
  let prisma = SGI;

  if (req.method === "GET") {
    if (req.query.f && req.query.f === "tasas") {
      const tasas = await prisma.prestamos_tasas.findMany({
        where: {
          estado: true,
          tipo: "policias",
        },
      });
      res.status(200).json(tasas);
    }
    if (req.query.f && req.query.f === "tasas emp") {
      const tasas = await prisma.prestamos_tasas.findMany({
        where: {
          estado: true,
          tipo: "empleados",
        },
      });
      res.status(200).json(tasas);
    }
    if (req.query.f && req.query.f === "capital") {
      const capital = await prisma.capital_prestamo.findMany({
        where: {
          estado: true,
        },
      });
      res.status(200).json(capital);
    }
    if (req.query.f && req.query.f === "capital emp") {
      const capitalEmp = await prisma.capital_prestamo_empleados.findMany({
        where: {
          estado: true,
        },
      });
      res.status(200).json(capitalEmp);
    }
    if (req.query.f && req.query.f === "plan cuotas") {
      const planes = await prisma.prestamos_plan_cuotas.findMany({
        where: {
          estado: true,
        },
      });
      res.status(200).json(planes);
    }
    if (req.query.f && req.query.f === "traer poli") {
      const poli = await Werchow.maestro.findUnique({
        where: {
          CONTRATO: parseInt(req.query.hc),
        },
      });
      res.status(200).json(poli);
    }
    if (req.query.f && req.query.f === "traer empleados") {
      const emple = await prisma.$queryRaw`
            SELECT usuario as 'value',
              CONCAT(apellido, ', ', nombre) as 'label'    
            FROM operador            
            WHERE estado = 1            
            ORDER BY apellido ASC
        
        `;
      res.status(200).json(emple);
    }
    if (req.query.f && req.query.f === "list prest") {
      const prest = await Werchow.prestamos.findMany({
        where: {
          ptm_op: parseInt(req.query.op),
          ptm_fechasol: {
            lte: new Date(req.query.desde),
            gte: new Date(req.query.hasta),
          },
        },
      });

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "list prest pendientes") {
      const prest = await Werchow.prestamos.findMany({
        where: {
          ptm_estado: "PENDIENTE",
        },
        orderBy: {
          ptm_fechasol: "desc",
        },
      });

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "list prest emp") {
      const emple = await prisma.prestamos_empleados.findMany();

      res.status(200).json(emple);
    }
    if (req.query.f && req.query.f === "list prest pagos") {
      const listPagos = await prisma.prestamos_empleados_cobro.findMany({
        where: {
          idprestamo: parseInt(req.query.id),
        },
      });

      res.status(200).json(listPagos);
    }
    if (req.query.f && req.query.f === "prest id") {
      const prest = await Werchow.prestamos.findUnique({
        where: {
          ptm_id: parseInt(req.query.id),
        },
      });

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "prest socio") {
      const prest = await Werchow.maestro.findUnique({
        where: {
          CONTRATO: parseInt(req.query.hc),
        },
      });

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "traer archivos") {
      const prest = await prisma.legajo_virtual_prestamos.findMany({
        where: {
          cod_ptm_leg: req.query.id,
          contrato: parseInt(req.query.hc),
        },

        select: {
          archivo: true,
        },
      });

      res.status(200).json(prest);
    }
    if (req.query.f && req.query.f === "reporte prestamos") {
      const reporte = await Werchow.$queryRaw`
            
            SELECT  
             CONCAT(u.usu_apellido, ', ', u.usu_nombre) as 'operador',
             COUNT(*) as 'prestamos',
             SUM(ptm_prestamo) as 'capital',
             SUM(ptm_valcuota) as 'interes',
            (SUM(ptm_valcuota * ptm_cuotas)) as 'capconint'             
            FROM prestamos as p
            INNER JOIN usuario as u on u.usu_ide = p.ptm_op           
            WHERE ptm_estado  = 'APROBADO'
            AND ptm_fechasol BETWEEN ${req.query.desde} AND ${req.query.hasta}
            GROUP BY ptm_op
        
        `;

      res
        .status(200)
        .json(
          JSON.stringify(reporte, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.query.f && req.query.f === "rep list prestamos") {
      const reporte = await Werchow.$queryRaw`
            
            SELECT  
             p.ptm_fechasol,
             p.ptm_ficha,
             p.ptm_afi,
             p.ptm_renov,
             p.ptm_prestamo,
             p.ptm_cuotas,
             p.ptm_valcuota,
             p.ptm_estado,
             CONCAT(u.usu_apellido, ', ', u.usu_nombre) as 'operador'
            FROM prestamos as p    
            INNER JOIN usuario as u on u.usu_ide = p.ptm_op     
            WHERE ptm_fechasol BETWEEN ${req.query.desde} AND ${req.query.hasta}
                    
        `;

      res.status(200).json(reporte);
    }
  }
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg prestamo") {
      const nuPrest = await Werchow.prestamos.create({
        data: {
          ptm_fechacarga: new Date(req.body.fechacarga),
          ptm_fechasol: new Date(req.body.fechasol),
          ptm_op: parseInt(req.body.operador),
          ptm_ficha: parseInt(req.body.ficha),
          ptm_legajo: parseInt(req.body.legajo),
          ptm_ant: parseInt(req.body.anti),
          ptm_renov: req.body.renova,
          ptm_prestamo: parseFloat(req.body.capital),
          ptm_cuotas: parseInt(req.body.cuotas),
          ptm_valcuota: parseFloat(req.body.valcuota),
          ptm_neto: parseFloat(req.body.neto),
          ptm_estado: req.body.estado,
          cod_ptm_leg: req.body.codptmleg,
          ptm_afi: req.body.ptm_afi,
          capinoaut: req.body.capinoaut,
        },
      });

      res.status(200).json(nuPrest);
    }
    if (req.body.f && req.body.f === "reg prestamo emp") {
      const nuPrest = await prisma.prestamos_empleados.create({
        data: {
          empleado: req.body.empleado,
          fecha_solicitud: new Date(req.body.fecha_solicitud),
          capital: parseFloat(req.body.capital),
          plan_cuotas: parseInt(req.body.plan_cuotas),
          cuota_mensual: parseFloat(req.body.cuota_mensual),
          capital_dev: parseFloat(req.body.capital_dev),
          inicia: req.body.inicia,
          termina: req.body.termina,
          estado: req.body.estado,
          capinoaut: req.body.capinoaut,
        },
      });

      res.status(200).json(nuPrest);
    }
    if (req.body.f && req.body.f === "reg plan pagos") {
      const planPagos = await prisma.prestamos_empleados_cobro.create({
        data: {
          idprestamo: parseInt(req.body.idprestamo),
          cuota: parseInt(req.body.cuota),
          importe: parseFloat(req.body.importe),
          fecha_cobro: new Date(req.body.fecha_cobro),
          estado: req.body.estado,
        },
      });

      res.status(200).json(planPagos);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "est prest emp") {
      const apPrest = await prisma.prestamos_empleados.update({
        data: {
          estado: req.body.estado,
        },

        where: {
          idprestamo: parseInt(req.body.id),
        },
      });
      res.status(200).json(apPrest);
    }
    if (req.body.f && req.body.f === "est prest") {
      const apPrest = await Werchow.prestamos.update({
        data: {
          ptm_estado: req.body.estado,
        },

        where: {
          ptm_id: parseInt(req.body.id),
        },
      });
      res.status(200).json(apPrest);
    }
    if (req.body.f && req.body.f === "cobro cuota prest") {
      const apPrest = await prisma.prestamos_empleados_cobro.update({
        data: {
          fecha_pago: new Date(req.body.fecha_pago),
          estado: req.body.estado,
          operador: req.body.operador,
        },

        where: {
          idpago: parseInt(req.body.id),
        },
      });
      res.status(200).json(apPrest);
    }
  }
}
