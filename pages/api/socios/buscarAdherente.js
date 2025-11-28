import { werchow } from "../../../libs/db/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { tipo, valor, source } = req.body;

    // Validaciones básicas
    if (!tipo || !valor) {
      return res.status(400).json({ error: "tipo y valor son requeridos" });
    }

    const sourceList = source ? [source] : ["WERCHOW", "MUTUAL"];

    try {
      let results = [];

      for (const src of sourceList) {
        let query = "";

        if (tipo === "dni") {
          // Búsqueda por DNI exacto en tabla de adherentes
          if (src === "WERCHOW") {
            const adherentResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "WERCHOW" as "EMPRESA"
              FROM adherent as m
              WHERE m.NRO_DOC = ${parseInt(valor)}
              LIMIT 1
            `);

            if (adherentResults && adherentResults.length > 0) {
              results.push(adherentResults[0]);
            }
          } else if (src === "MUTUAL") {
            const mutualAdhResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "MUTUAL" as "EMPRESA"
              FROM mutual_adh as m
              WHERE m.NRO_DOC = ${parseInt(valor)}
              LIMIT 1
            `);

            if (mutualAdhResults && mutualAdhResults.length > 0) {
              results.push(mutualAdhResults[0]);
            }
          }
        } else if (tipo === "apellido") {
          // Búsqueda por apellido (lista de resultados en tabla de adherentes)
          if (src === "WERCHOW") {
            const maestroResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "WERCHOW" as "EMPRESA"
              FROM adherent as m
              WHERE m.APELLIDOS LIKE UPPER('%${valor.toUpperCase()}%')
              ORDER BY m.APELLIDOS, m.NOMBRES
              LIMIT 50
            `);

            if (maestroResults && maestroResults.length > 0) {
              results = results.concat(maestroResults);
            }
          } else if (src === "MUTUAL") {
            const mutualResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "MUTUAL" as "EMPRESA"
              FROM mutual_adh as m
              WHERE m.APELLIDOS LIKE UPPER('%${valor.toUpperCase()}%')
              ORDER BY m.APELLIDOS, m.NOMBRES
              LIMIT 50
            `);

            if (mutualResults && mutualResults.length > 0) {
              results = results.concat(mutualResults);
            }
          }
        }
      }

      await werchow.end();

      // Para búsqueda por DNI devolver un objeto (o array con 1 item), para apellido devolver array
      if (tipo === "dni") {
        return res.status(200).json(results.length > 0 ? results[0] : null);
      } else {
        return res.status(200).json(results);
      }
    } catch (error) {
      console.error("Error en buscarAdherente:", error);
      return res.status(500).json({ error: "Error al buscar adherentes" });
    }
  } else if (req.method === "GET") {
    // Alternativa GET (si se prefiere, los parámetros vienen en query)
    const { tipo, valor, source } = req.query;

    if (!tipo || !valor) {
      return res.status(400).json({ error: "tipo y valor son requeridos" });
    }

    const sourceList = source ? [source] : ["WERCHOW", "MUTUAL"];

    try {
      let results = [];

      for (const src of sourceList) {
        if (tipo === "dni") {
          if (src === "WERCHOW") {
            const adherentResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "WERCHOW" as "EMPRESA"
              FROM adherent as m
              WHERE m.NRO_DOC = ${parseInt(valor)}
              LIMIT 1
            `);

            if (adherentResults && adherentResults.length > 0) {
              results.push(adherentResults[0]);
            }
          } else if (src === "MUTUAL") {
            const mutualAdhResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "MUTUAL" as "EMPRESA"
              FROM mutual_adh as m
              WHERE m.NRO_DOC = ${parseInt(valor)}
              LIMIT 1
            `);

            if (mutualAdhResults && mutualAdhResults.length > 0) {
              results.push(mutualAdhResults[0]);
            }
          }
        } else if (tipo === "apellido") {
          if (src === "WERCHOW") {
            const maestroResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "WERCHOW" as "EMPRESA"
              FROM adherent as m
              WHERE m.APELLIDOS LIKE UPPER('%${valor.toUpperCase()}%')
              ORDER BY m.APELLIDOS, m.NOMBRES
              LIMIT 50
            `);

            if (maestroResults && maestroResults.length > 0) {
              results = results.concat(maestroResults);
            }
          } else if (src === "MUTUAL") {
            const mutualResults = await werchow.query(`
              SELECT
                m.CONTRATO, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.PLAN,
                m.SUB_PLAN,
                "MUTUAL" as "EMPRESA"
              FROM mutual_adh as m
              WHERE m.APELLIDOS LIKE UPPER('%${valor.toUpperCase()}%')
              ORDER BY m.APELLIDOS, m.NOMBRES
              LIMIT 50
            `);

            if (mutualResults && mutualResults.length > 0) {
              results = results.concat(mutualResults);
            }
          }
        }
      }

      await werchow.end();

      if (tipo === "dni") {
        return res.status(200).json(results.length > 0 ? results[0] : null);
      } else {
        return res.status(200).json(results);
      }
    } catch (error) {
      console.error("Error en buscarAdherente:", error);
      return res.status(500).json({ error: "Error al buscar adherentes" });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}
