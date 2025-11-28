import React, { useState } from "react";
import {
    Typography,
    Input,
    Checkbox,
    Textarea,
    Button,
} from "@material-tailwind/react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";

const FormBajaAdherente = ({ adherentes, maestro, onBajaConfirmada, onClose }) => {
    const [loading, setLoading] = useState(false);

    // Estados para los checkboxes
    const [domicilioParticular, setDomicilioParticular] = useState(false);
    const [debitoSocio, setDebitoSocio] = useState(false);
    const [tarjeta, setTarjeta] = useState(false);
    const [convenio, setConvenio] = useState(false);
    const [cobDomicilio, setCobDomicilio] = useState(false);
    const [enSucursal, setEnSucursal] = useState(false);

    const handlePrint = () => {
        // Crear una nueva ventana para imprimir solo el contenido del formulario
        const printWindow = window.open('', '_blank');
        const formContent = document.getElementById('form-baja-adherente');

        if (printWindow && formContent) {
            printWindow.document.write(`
        <html>
          <head>
            <title>Solicitud de Baja de Adherente</title>
            <style>
              @page {
                size: A4;
                margin: 10mm;
              }
              body { 
                font-family: Arial, sans-serif; 
                padding: 0;
                margin: 0;
                font-size: 9pt;
                -webkit-print-color-adjust: exact;
              }
              table { 
                border-collapse: collapse; 
                width: 100%; 
                margin-bottom: 8px;
              }
              th, td { 
                border: 1px solid black; 
                padding: 3px 5px; 
                text-align: left;
                font-size: 8pt;
              }
              th {
                background-color: #e3f2fd !important;
                font-weight: bold;
              }
              /* Tailwind Utility Shims for Print */
              .bg-white { background-color: white; }
              .p-4 { padding: 16px; }
              .p-3 { padding: 12px; }
              .p-2 { padding: 8px; }
              .mb-4 { margin-bottom: 16px; }
              .mb-3 { margin-bottom: 12px; }
              .mb-2 { margin-bottom: 8px; }
              .mt-4 { margin-top: 16px; }
              .mt-6 { margin-top: 24px; }
              
              .border-2 { border: 2px solid black; }
              .border { border: 1px solid #999; }
              .border-gray-800 { border-color: black; }
              .border-gray-400 { border-color: #999; }
              .border-dotted { border-style: dotted; }
              .border-b { border-bottom-width: 1px; }
              
              .flex { display: flex; }
              .justify-between { justify-content: space-between; }
              .items-center { align-items: center; }
              .items-start { align-items: flex-start; }
              .gap-1 { gap: 4px; }
              .gap-2 { gap: 8px; }
              .gap-3 { gap: 12px; }
              .gap-4 { gap: 16px; }
              .gap-6 { gap: 24px; }
              .gap-8 { gap: 32px; }
              
              .grid { display: grid; }
              .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
              .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
              .grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
              .col-span-2 { grid-column: span 2; }
              .col-span-4 { grid-column: span 4; }
              
              .text-center { text-align: center; }
              .text-right { text-align: right; }
              .text-justify { text-align: justify; }
              
              .font-bold { font-weight: bold; }
              .underline { text-decoration: underline; }
              .text-xs { font-size: 7pt; }
              .text-sm { font-size: 8pt; }
              .leading-tight { line-height: 1.2; }
              
              .w-full { width: 100%; }
              .w-32 { width: 128px; }
              .w-20 { width: 80px; }
              .w-24 { width: 96px; }
              .h-4 { height: 16px; }
              .h-5 { height: 20px; }
              .h-10 { height: 40px; }
              .h-16 { height: 64px; }
              .flex-1 { flex: 1; }
              
              /* Specific overrides */
              img { max-height: 40px; width: auto; }
              
              @media print {
                body { margin: 0; }
                .no-print { display: none; }
                button { display: none; }
              }
            </style>
          </head>
          <body>
            ${formContent.innerHTML}
          </body>
        </html>
      `);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 250);
        }
    };

    const handleConfirmarBaja = async () => {
        if (!adherentes || adherentes.length === 0) {
            toast.error("No hay adherentes seleccionados");
            return;
        }

        setLoading(true);
        try {
            // Procesar todas las bajas en paralelo
            const promises = adherentes.map(adh =>
                axios.put("/api/socios/bajaAdherente", {
                    contrato: adh.CONTRATO,
                    nroDoc: adh.NRO_DOC,
                    empresa: maestro?.EMPRESA || "WERCHOW",
                })
            );

            await Promise.all(promises);

            toast.success("Baja de adherentes confirmada exitosamente");
            if (onBajaConfirmada) {
                onBajaConfirmada();
            }
            if (onClose) {
                onClose();
            }

        } catch (error) {
            console.error("Error al confirmar baja:", error);
            toast.error("Error al confirmar la baja de los adherentes");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="form-baja-adherente" className="bg-white p-4">
            {/* Header */}
            <div className="border-2 border-gray-800 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        {maestro?.EMPRESA === "WERCHOW" ? (
                            <img src="/img/logo.png" alt="Werchow" className="h-10" />
                        ) : maestro?.EMPRESA === "MUTUAL" ? (
                            <img src="/img/logom.jpg" alt="Mutual" className="h-10" />
                        ) : null}
                    </div>
                    <div className="text-center flex-1">
                        <Typography variant="h5" className="font-bold">
                            SOLICITUD DE BAJA DE ADHERENTE
                        </Typography>
                    </div>
                    <div className="text-right">
                        <Typography variant="small" className="font-bold text-xs">
                            COD
                        </Typography>
                        <div className="border border-gray-400 px-2 py-1 min-w-[80px] text-xs">
                            ...........
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                    <div>
                        <Typography variant="small" className="font-bold inline">
                            AFILIADO N°:{" "}
                        </Typography>
                        <span className="underline">{maestro?.CONTRATO || "____"}</span>
                    </div>
                    <div>
                        <Typography variant="small" className="font-bold inline">
                            FECHA:{" "}
                        </Typography>
                        <span className="underline">
                            {moment().format("DD / MM / YYYY")}
                        </span>
                    </div>
                    <div className="text-right">
                        <Typography variant="small" className="font-bold inline">
                            COD:{" "}
                        </Typography>
                        <span className="underline">............</span>
                    </div>
                </div>

                <div className="mt-2">
                    <Typography variant="small" className="text-xs">
                        Por medio de la presente yo,{" "}
                        <span className="font-bold">
                            {maestro?.APELLIDOS}, {maestro?.NOMBRES}
                        </span>
                        , con DNI N° <span className="font-bold">{maestro?.NRO_DOC}</span>,
                        en mi carácter de titular del servicio de sepelio, me dirijo a
                        ustedes para solicitar forme parte la baja de el o los siguientes
                        adherentes:
                    </Typography>
                </div>
            </div>

            {/* Tabla de Adherentes */}
            <div className="mb-3">
                <table className="w-full border-2 border-gray-800">
                    <thead>
                        <tr className="bg-blue-50">
                            <th className="border border-gray-800 p-2 text-xs">
                                APELLIDO Y NOMBRE
                            </th>
                            <th className="border border-gray-800 p-2 text-xs">
                                Fecha Nacimiento
                            </th>
                            <th className="border border-gray-800 p-2 text-xs">Documento</th>
                            <th className="border border-gray-800 p-2 text-xs">Parentesco</th>
                            <th className="border border-gray-800 p-2 text-xs">
                                Ob. Social
                            </th>
                            <th className="border border-gray-800 p-2 text-xs">
                                FECHA DE BAJA
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {adherentes && adherentes.length > 0 ? (
                            adherentes.map((adh, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-800 p-2 text-sm">
                                        {adh.APELLIDOS}, {adh.NOMBRES}
                                    </td>
                                    <td className="border border-gray-800 p-2 text-center text-sm">
                                        {adh.NACIMIENTO
                                            ? moment(adh.NACIMIENTO)
                                                .utcOffset("+0300")
                                                .format("DD / MM / YYYY")
                                            : ""}
                                    </td>
                                    <td className="border border-gray-800 p-2 text-center text-sm">
                                        {adh.NRO_DOC}
                                    </td>
                                    <td className="border border-gray-800 p-2 text-center text-sm">
                                        {adh.PARENTESCO || "ADHERENTE"}
                                    </td>
                                    <td className="border border-gray-800 p-2 text-center text-sm">
                                        {adh.OBRA_SOC || ""}
                                    </td>
                                    <td className="border border-gray-800 p-2 text-center text-sm">
                                        {moment().format("DD/MM/YYYY")}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border border-gray-800 p-2 text-center">
                                    No hay adherentes seleccionados
                                </td>
                            </tr>
                        )}
                        {/* Filas vacías adicionales si hay menos de 5 */}
                        {Array.from({ length: Math.max(0, 5 - (adherentes?.length || 0)) }).map((_, i) => (
                            <tr key={`empty-${i}`}>
                                <td className="border border-gray-800 p-2 h-8">&nbsp;</td>
                                <td className="border border-gray-800 p-2">&nbsp;</td>
                                <td className="border border-gray-800 p-2">&nbsp;</td>
                                <td className="border border-gray-800 p-2">&nbsp;</td>
                                <td className="border border-gray-800 p-2">&nbsp;</td>
                                <td className="border border-gray-800 p-2">&nbsp;</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sección de Domicilio y Forma de Pago */}
            <div className="border-2 border-gray-800 p-2 mb-3">
                <div className="mb-2">
                    <div className="border border-gray-400 p-2 mb-2">
                        <div className="flex items-center gap-2 mb-1">
                            <Typography variant="small" className="font-bold text-xs w-32">
                                DOMICILIO PARTICULAR:
                            </Typography>
                            <div className="flex-1 border-b border-gray-400 border-dotted h-5"></div>
                        </div>
                        <div className="grid grid-cols-6 gap-2">
                            <div className="col-span-4 flex items-center gap-1">
                                <Typography variant="small" className="text-xs font-bold">Calle:</Typography>
                                <div className="flex-1 border-b border-gray-400 border-dotted h-4"></div>
                            </div>
                            <div className="col-span-2 flex items-center gap-1">
                                <Typography variant="small" className="text-xs font-bold">N°:</Typography>
                                <div className="flex-1 border-b border-gray-400 border-dotted h-4"></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="border border-gray-400 p-2">
                            <div className="flex items-center gap-2">
                                <Typography variant="small" className="font-bold text-xs w-20">
                                    Salud Sero:
                                </Typography>
                                <div className="flex-1 border-b border-gray-400 border-dotted h-5"></div>
                            </div>
                        </div>

                        <div className="border border-gray-400 p-2">
                            <div className="flex items-center gap-2">
                                <Typography variant="small" className="font-bold text-xs w-24">
                                    Lugar de Trabajo:
                                </Typography>
                                <div className="flex-1 border-b border-gray-400 border-dotted h-5"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-2">
                    <div className="flex items-center">
                        <Checkbox
                            checked={debitoSocio}
                            onChange={(e) => setDebitoSocio(e.target.checked)}
                            label={<span className="text-xs font-bold">DEBITO SOCIO</span>}
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            checked={tarjeta}
                            onChange={(e) => setTarjeta(e.target.checked)}
                            label={<span className="text-xs font-bold">TARJETA</span>}
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            checked={convenio}
                            onChange={(e) => setConvenio(e.target.checked)}
                            label={<span className="text-xs font-bold">CONVENIO</span>}
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            checked={cobDomicilio}
                            onChange={(e) => setCobDomicilio(e.target.checked)}
                            label={<span className="text-xs font-bold">COB. A DOMICILIO</span>}
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            checked={enSucursal}
                            onChange={(e) => setEnSucursal(e.target.checked)}
                            label={<span className="text-xs font-bold">EN SUCURSAL</span>}
                        />
                    </div>
                </div>
            </div>

            {/* Texto legal */}
            <div className="mb-4 text-xs leading-tight border border-gray-400 p-3">
                <Typography variant="small" className="text-justify">
                    Werchow Medicina Privada S.A., es una empresa de Servicios Sociales,
                    Pompa Fúnebres y Servicios conexos, no es compatible de brindar
                    servicios de medicina prepaga. Werchow Medicina Privada S.A. informa
                    que ha firmado un convenio de prestación con la empresa Medicus S.A.
                    para la prestación de servicios de medicina prepaga. En virtud de
                    dicho convenio, Werchow Medicina Privada S.A. ofrece a sus clientes
                    el curso COVID 19 SERVICIOS FUNEBRES. De acuerdo con los nuevos
                    acontecimientos en relación al CORONA VIRUS COVID 19 y en respuesta a
                    las medidas adoptadas por el Gobierno Nacional, Provincial y
                    Municipal, Werchow Medicina Privada S.A. informa que en caso de
                    fallecimiento de alguno de sus afiliados por COVID-19, el servicio se
                    prestará conforme a los protocolos establecidos por las autoridades
                    sanitarias. Los restos serán trasladados directamente al cementerio
                    para su inhumación. El presente es un programa siempre de SERVICIOS
                    SOCIALES que cumple con el objetivo de brindar un servicio de
                    prestación de salud a sus afiliados. Werchow Medicina Privada S.A. NO
                    OFRECE COBERTURA DE SALUD. DICHO SERVICIO ESTA CONDICIONADO A LA
                    PERMANENCIA EN LA CALIDAD DE AFILIADO LA EMPRESA NO REINTEGRA NINGUN
                    GASTO GENERADO POR SERVICIOS CONEXOS ESTA CONDICIONADO A LA
                    PERMANENCIA EN LA CALIDAD DE AFILIADO. La empresa no reintegra ningún
                    gasto generado por servicios conexos.
                </Typography>
            </div>

            {/* Cuadro A */}
            <div className="mb-4">
                <Typography variant="h6" className="font-bold mb-2">
                    CUADRO "A"
                </Typography>
                <table className="w-full border border-gray-800 text-xs">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-800 p-1">EDAD</th>
                            <th className="border border-gray-800 p-1">CUADRO BASICO</th>
                            <th className="border border-gray-800 p-1">CUADRO SUPERIOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-800 p-1 text-center">
                                De 0 a 65
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                10.000
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                15.000
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 p-1 text-center">
                                De 66 a 75
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                12.000
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                18.000
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 p-1 text-center">
                                De 76 a 85
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                15.000
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                20.000
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 p-1 text-center">
                                De 86 a +
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                20.000
                            </td>
                            <td className="border border-gray-800 p-1 text-center">
                                25.000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Firmas */}
            <div className="grid grid-cols-3 gap-8 mt-8 mb-4">
                <div className="text-center">
                    <div className="border-t-2 border-gray-800 pt-2 mt-16">
                        <Typography variant="small" className="font-bold">
                            Firma
                        </Typography>
                    </div>
                </div>
                <div className="text-center">
                    <div className="border-t-2 border-gray-800 pt-2 mt-16">
                        <Typography variant="small" className="font-bold">
                            Aclaración de Firma
                        </Typography>
                    </div>
                </div>
                <div className="text-center">
                    <div className="border-t-2 border-gray-800 pt-2 mt-16">
                        <Typography variant="small" className="font-bold">
                            DNI N°
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-3 mt-6 print:hidden">
                <Button onClick={handlePrint} className="btn-secondary">
                    Imprimir
                </Button>
                <Button
                    onClick={handleConfirmarBaja}
                    className="btn-primary"
                    disabled={loading}
                >
                    {loading ? "Procesando..." : "Confirmar Baja"}
                </Button>
            </div>
        </div>
    );
};

export default FormBajaAdherente;
