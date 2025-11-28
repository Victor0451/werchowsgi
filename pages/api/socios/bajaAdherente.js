import { werchow } from "../../../libs/db/index";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        const { contrato, nroDoc, empresa } = req.body;

        // Validaciones básicas
        if (!contrato || !nroDoc) {
            return res.status(400).json({ error: "contrato y nroDoc son requeridos" });
        }

        if (!empresa || !["WERCHOW", "MUTUAL"].includes(empresa)) {
            return res.status(400).json({
                error: "empresa debe ser 'WERCHOW' o 'MUTUAL'",
            });
        }

        try {
            const tableName = empresa === "WERCHOW" ? "adherent" : "mutual_adh";

            // Actualizar el campo ESTADO a 1
            const updateQuery = `
        UPDATE ${tableName}
        SET ESTADO = 1
        WHERE CONTRATO = ${parseInt(contrato)}
        AND NRO_DOC = ${parseInt(nroDoc)}
      `;

            await werchow.query(updateQuery);
            await werchow.end();

            return res.status(200).json({
                success: true,
                message: "Estado del adherente actualizado correctamente",
            });
        } catch (error) {
            console.error("Error al actualizar estado del adherente:", error);
            return res.status(500).json({
                error: "Error al actualizar el estado del adherente",
            });
        }
    } else {
        return res.status(405).json({ error: "Método no permitido" });
    }
}
