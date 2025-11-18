import React, { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Alert,
  Spinner,
  IconButton,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const BuscarAdherentes = ({ endpoint = "/api/socios/buscarAdherente", onSelect, source }) => {
  const [mode, setMode] = useState("dni"); // 'dni' o 'apellido'
  const [dni, setDni] = useState("");
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState(null); // array para apellido, objeto para dni
  const [selected, setSelected] = useState(null);
  const [filterText, setFilterText] = useState(""); // filtro para resultados
  const [currentPage, setCurrentPage] = useState(1); // página actual
  const itemsPerPage = 5; // items por página

  const validate = () => {
    setError("");
    if (mode === "dni") {
      if (!dni) {
        setError("Ingrese un número de documento.");
        return false;
      }
      const onlyDigits = String(dni).replace(/\D/g, "");
      if (onlyDigits.length < 6) {
        setError("DNI inválido. Debe contener al menos 6 dígitos.");
        return false;
      }
    } else {
      if (!apellido || apellido.trim().length < 3) {
        setError("Ingrese al menos 3 letras del apellido.");
        return false;
      }
    }
    return true;
  };

  const handleSearch = async () => {
    if (!validate()) return;
    setLoading(true);
    setError("");
    setResults(null);
    setSelected(null);
    setFilterText(""); // limpiar filtro
    setCurrentPage(1); // resetear página

    try {
      const payload = {
        tipo: mode === "dni" ? "dni" : "apellido",
        valor: mode === "dni" ? String(dni).trim() : apellido.trim(),
      };

      if (source) payload.source = source;

      const res = await axios.post(endpoint, payload);
      const data = res.data;

      if (mode === "dni") {
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setError("No se encontró el adherente con ese DNI.");
        } else {
          const found = Array.isArray(data) ? data[0] : data;
          setResults(found);
          setSelected(found);
        }
      } else {
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setError("No se encontraron adherentes con ese apellido.");
        } else {
          setResults(data);
        }
      }
    } catch (err) {
      console.log(err);
      setError(err.message || "Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  // Filtrar resultados según el texto ingresado
  const filteredResults = useMemo(() => {
    if (!Array.isArray(results)) return [];
    if (!filterText.trim()) return results;

    const filter = filterText.toLowerCase();
    return results.filter((item) => {
      const fullName = `${item.APELLIDOS} ${item.NOMBRES}`.toLowerCase();
      const dni = String(item.NRO_DOC || "");
      const contrato = String(item.CONTRATO || "");

      return (
        fullName.includes(filter) ||
        dni.includes(filter) ||
        contrato.includes(filter)
      );
    });
  }, [results, filterText]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = filteredResults.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSelectItem = (item) => {
    setSelected(item);
    if (onSelect) onSelect(item);
  };

  return (
    <Card className="w-full shadow-lg border border-gray-200">
      <CardBody className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div>
            <Typography variant="h5" className="font-bold text-gray-800">
              🔍 Buscar Adherentes
            </Typography>
            <Typography variant="small" color="gray" className="mt-1">
              Encuentre adherentes por DNI o apellido
            </Typography>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className={`transition-all ${mode === "dni" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setMode("dni")}
            >
              📋 DNI
            </Button>
            <Button 
              size="sm" 
              className={`transition-all ${mode === "apellido" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setMode("apellido")}
            >
              👤 Apellido
            </Button>
          </div>
        </div>

        {/* Error Alert */}
        {error ? (
          <Alert color="red" className="mb-4 border-l-4 border-red-500 bg-red-50">
            <Typography className="text-sm">{error}</Typography>
          </Alert>
        ) : null}

        {/* Search Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            {mode === "dni" ? (
              <Input 
                size="lg"
                label="Número de Documento" 
                type="number" 
                value={dni} 
                onChange={(e) => setDni(e.target.value)}
                placeholder="Ej: 12345678"
                className="rounded-lg"
              />
            ) : (
              <Input 
                size="lg"
                label="Apellido" 
                type="text" 
                value={apellido} 
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Ej: García, López, etc"
                className="rounded-lg"
              />
            )}
          </div>

          <div className="flex items-end">
            <Button 
              onClick={handleSearch} 
              color="blue" 
              disabled={loading}
              className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md transition-all"
              size="lg"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner className="h-4 w-4" /> Buscando...
                </div>
              ) : (
                "🔎 Buscar"
              )}
            </Button>
          </div>
        </div>

        {/* Resultado por DNI */}
        {selected && mode === "dni" && (
          <div className="p-5 border-2 border-green-300 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 mb-4 shadow-sm">
            <Typography variant="small" className="text-green-700 font-semibold mb-2">
              ✓ Adherente encontrado
            </Typography>
            <div className="mt-3 space-y-2">
              <Typography className="font-bold text-lg text-gray-800">
                {selected.APELLIDOS}, {selected.NOMBRES}
              </Typography>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <Typography color="gray" className="text-xs font-semibold uppercase">DNI</Typography>
                  <Typography className="font-bold text-gray-700">{selected.NRO_DOC}</Typography>
                </div>
                <div>
                  <Typography color="gray" className="text-xs font-semibold uppercase">Contrato</Typography>
                  <Typography className="font-bold text-gray-700">{selected.CONTRATO}</Typography>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md"
                  onClick={() => handleSelectItem(selected)}
                >
                  ✓ Seleccionar
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Filtro para búsqueda por apellido */}
        {Array.isArray(results) && results.length > 0 && mode === "apellido" && (
          <div className="mb-4">
            <Input
              size="lg"
              label="🔍 Filtrar resultados"
              type="text"
              value={filterText}
              onChange={(e) => {
                setFilterText(e.target.value);
                setCurrentPage(1);
              }}
              disabled={loading}
              placeholder="Buscar por nombre, DNI o contrato..."
              className="rounded-lg"
            />
          </div>
        )}

        {/* Lista por apellido con scroll y paginación */}
        {Array.isArray(results) && results.length > 0 && mode === "apellido" && (
          <div className="space-y-3">
            {/* Info de resultados */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-lg border border-blue-100">
              <Typography color="gray" className="text-sm font-semibold">
                📊 Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredResults.length)} de{" "}
                {filteredResults.length} resultados
              </Typography>
            </div>

            {/* Contenedor con scroll - Mejorado */}
            <div className="max-h-72 overflow-y-auto border-2 border-gray-200 rounded-lg bg-white shadow-sm">
              {paginatedResults.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {paginatedResults.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-4 hover:bg-blue-50 cursor-pointer transition-all duration-200 transform hover:scale-102 hover:shadow-sm border-l-4 border-l-transparent hover:border-l-blue-500"
                      onClick={() => handleSelectItem(r)}
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <Typography className="font-bold text-gray-800 text-sm md:text-base">
                            {r.APELLIDOS}, {r.NOMBRES}
                          </Typography>
                          <div className="flex gap-4 mt-2">
                            <div>
                              <Typography color="gray" className="text-xs font-semibold uppercase">DNI</Typography>
                              <Typography className="font-semibold text-gray-700 text-sm">{r.NRO_DOC}</Typography>
                            </div>
                            <div>
                              <Typography color="gray" className="text-xs font-semibold uppercase">Contrato</Typography>
                              <Typography className="font-semibold text-gray-700 text-sm">{r.CONTRATO}</Typography>
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block text-blue-500 opacity-0 group-hover:opacity-100">
                          →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <Typography color="gray" className="text-center">
                    😕 No hay resultados que coincidan con el filtro
                  </Typography>
                </div>
              )}
            </div>

            {/* Controles de paginación - Mejorados */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                <Typography color="gray" className="text-sm font-semibold">
                  Página <span className="text-blue-600 font-bold">{currentPage}</span> de <span className="font-bold">{totalPages}</span>
                </Typography>
                <div className="flex gap-2">
                  <IconButton
                    size="sm"
                    className="hover:bg-blue-100 transition-colors"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </IconButton>
                  <IconButton
                    size="sm"
                    className="hover:bg-blue-100 transition-colors"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-8">
            <Spinner className="h-8 w-8 text-blue-500" />
            <Typography color="gray" className="mt-3 text-sm">
              Buscando adherentes...
            </Typography>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default BuscarAdherentes;
