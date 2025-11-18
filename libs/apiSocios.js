import axios from "axios";

// Wrapper para llamadas a /api/socios con parseo y manejo de errores centralizado
export async function apiGetSocios(params) {
  try {
    const res = await axios.get(`/api/socios`, { params });
    const data = res.data;

    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch (err) {
        console.warn("apiGetSocios: no se pudo parsear JSON, devolviendo raw", err);
        return data;
      }
    }

    return data;
  } catch (err) {
    console.error("apiGetSocios error", err);
    // Devolver null para que el caller pueda manejar el caso
    return null;
  }
}

export default apiGetSocios;
