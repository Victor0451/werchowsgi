import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
  Checkbox,
  List,
  ListItem,
} from "@material-tailwind/react";

import ListadoStock from "./ListadoStock";
import { toast } from "react-toastify";

const FormSorteo = ({ listado, ficha, regPremio }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = () => {
    const password = "Werchow2025$";
    
    // Método 1: Usar Clipboard API (moderno)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        toast.success("Contraseña copiada al portapapeles");
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        // Si falla, usar fallback
        copyTextFallback(password);
      });
    } else {
      // Método 2: Fallback para navegadores antiguos o contexto inseguro
      copyTextFallback(password);
    }
  };

  const copyTextFallback = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    
    try {
      textarea.select();
      const result = document.execCommand("copy");
      if (result) {
        setCopied(true);
        toast.success("Contraseña copiada al portapapeles");
        setTimeout(() => setCopied(false), 2000);
      } else {
        toast.error("No se pudo copiar la contraseña");
      }
    } catch (err) {
      console.error("Error al copiar:", err);
      toast.error("No se pudo copiar la contraseña");
    } finally {
      document.body.removeChild(textarea);
    }
  };
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <div className="p-4 border-2 rounded-lg mt-6">
          <div className="mb-6">
            <div className="bg-white border border-gray-100 rounded-lg p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm">
              <div className="flex-1">
                <Typography className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-2">
                  Participá en los sorteos del Club Werchow
                </Typography>

                <Typography className="text-sm md:text-base text-gray-600 mb-4">
                  Al abrir la página de sorteos se abrirá en una pestaña nueva. Allí podrás participar y consultar las bases.
                </Typography>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3">
                    <div>
                      <span className="text-xs font-medium text-gray-600">CONTRASEÑA</span>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-base font-bold text-indigo-700">Werchow2025$</code>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPassword}
                      className={`flex-shrink-0 p-2 rounded-md transition ${
                        copied
                          ? "bg-green-100 text-green-700"
                          : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      }`}
                      aria-label="Copiar contraseña"
                      title={copied ? "¡Copiado!" : "Copiar contraseña"}
                    >
                      {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                          <rect x="8" y="8" width="12" height="12" rx="2" ry="2" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <a
                    href="https://sorteowerchow.my.canva.site/inicio-sitio-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ir a Club Werchow - Sorteos (se abre en una nueva pestaña)"
                    className="inline-flex items-center justify-center w-full md:w-auto gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
                  >
                    Participar ahora
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                {/* Avatar: initials */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white text-xl font-bold">
                  {ficha && (ficha.APELLIDOS ? ficha.APELLIDOS.charAt(0) : "")}
                </div>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 font-semibold"
                    >
                      Nº CONTRATO
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-blue-900 font-semibold"
                    >
                      {ficha.CONTRATO || "-"}
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 font-semibold"
                    >
                      BENEFICIARIO
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-blue-900 font-semibold"
                    >
                      {`${ficha.APELLIDOS || ""}${
                        ficha.NOMBRES ? ", " + ficha.NOMBRES : ""
                      }` || "-"}
                    </Typography>
                  </div>

                  {ficha.NRO_DOC && (
                    <div>
                      <Typography
                        variant="small"
                        className="text-gray-600 font-semibold"
                      >
                        DNI
                      </Typography>
                      <Typography variant="body1" className="text-gray-800">
                        {ficha.NRO_DOC}
                      </Typography>
                    </div>
                  )}

                  {ficha.perfil && (
                    <div>
                      <Typography
                        variant="small"
                        className="text-gray-600 font-semibold"
                      >
                        Perfil
                      </Typography>
                      <Typography variant="body1" className="text-gray-800">
                        {ficha.perfil === "T"
                          ? "Titular"
                          : ficha.perfil === "A"
                          ? "Adherente"
                          : null}
                      </Typography>
                    </div>
                  )}

                  {ficha.DOMICILIO && (
                    <div>
                      <Typography
                        variant="small"
                        className="text-gray-600 font-semibold"
                      >
                        DOMICILIO
                      </Typography>
                      <Typography variant="body1" className="text-gray-800">
                        {ficha.DOMICILIO}
                      </Typography>
                    </div>
                  )}

                  {ficha.GRUPO && (
                    <div>
                      <Typography
                        variant="small"
                        className="text-gray-600 font-semibold"
                      >
                        GRUPO
                      </Typography>
                      <Typography variant="body1" className="text-gray-800">
                        {ficha.GRUPO}
                      </Typography>
                    </div>
                  )}

                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Validado ✅
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="p-4 border-2 rounded-xl mt-5">
            <Typography variant="h5" className="mb-4">
              Listado de Premios con Stock Disponible
            </Typography>

            <hr className="mt-5 mb-5" />

            <ListadoStock
              listado={listado}
              regPremio={regPremio}
              f={"S"}
              ficha={ficha}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormSorteo;
