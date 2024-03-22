import React, { useState } from "react";
import {
  Input,
  Alert,
  Typography,
  Option,
  Textarea,
  Card,
  CardBody,
  Button,
  Collapse,
} from "@material-tailwind/react";
import moment from "moment";

const TablaEfectividad = ({
  cCob,
  cOf,
  ctjt,
  cbanco,
  cbancoP,
  cpolicia,
  cprestamos,
  totArr,
  porcent,
  totales,
}) => {
  return (
    <>
      <div className="block w-full overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className=" bg-blueGray-50  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Zona / Grupo
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Detalle
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Fichas
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Emitido
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Fichas Cobradas
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Cobrado
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Adelantado
              </th>
              <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Efect. %
              </th>
            </tr>
          </thead>

          <tbody>
            {/* COBRADORES */}
            <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              COBRADORES
            </th>
            {cCob.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}
            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(cCob, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cCob, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(cCob, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cCob, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cCob, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(cCob, "adelantado"),
                    totales(cCob, "emi"),
                    totales(cCob, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}
            {/* OFICINA */}
            <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              OFICINAS
            </th>
            {cOf.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}
            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(cOf, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cOf, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(cOf, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cOf, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cOf, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(cOf, "adelantado"),
                    totales(cOf, "emi"),
                    totales(cOf, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}
            {/* TARJETAS */}
            <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              TARJETAS
            </th>
            {ctjt.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}
            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(ctjt, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(ctjt, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(ctjt, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(ctjt, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(ctjt, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(ctjt, "adelantado"),
                    totales(ctjt, "emi"),
                    totales(ctjt, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}
            {/* BANCO  */}
            <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              BANCO
            </th>
            {cbanco.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}
           
            {/* ---------------------------------------------------------------------------- */}

            {/* BANCO PASIVO */}

            {cbancoP.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}
            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(cbancoP.concat(cbanco), "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cbancoP.concat(cbanco), "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(cbancoP.concat(cbanco), "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cbancoP.concat(cbanco), "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cbancoP.concat(cbanco), "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(cbancoP.concat(cbanco), "adelantado"),
                    totales(cbancoP.concat(cbanco), "emi"),
                    totales(cbancoP.concat(cbanco), "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}

            {/* POLICIAS */}
            <tr>
              <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                POLICIA
              </th>
            </tr>
            {cpolicia.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}

            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(cpolicia, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cpolicia, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(cpolicia, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cpolicia, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cpolicia, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(cpolicia, "adelantado"),
                    totales(cpolicia, "emi"),
                    totales(cpolicia, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}
            {/* PRESTAMOS */}
            <tr>
              <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                PRESTAMOS
              </th>
            </tr>
            {cprestamos.map((a, index) => (
              <>
                <tr key={index}>
                  <th className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {!a.zona ? <>---</> : a.zona}
                  </th>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {a.descr}
                  </td>
                  <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {a.fichas}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.total}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {a.fichascob}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.cobrado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                    {a.adelantado}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                    {porcent(a.adelantado, a.total, a.cobrado)} %
                  </td>
                </tr>
              </>
            ))}

            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTALES</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(cprestamos, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cprestamos, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(cprestamos, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cprestamos, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(cprestamos, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(cprestamos, "adelantado"),
                    totales(cprestamos, "emi"),
                    totales(cprestamos, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
            {/* ---------------------------------------------------------------------------- */}

            <tr className="border-t-2 border-b-2 ">
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                <strong>TOTAL GENERAL</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
              <td className="border-t-0  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <strong> {totales(totArr, "fichas emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(totArr, "emi")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>{totales(totArr, "fichas cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(totArr, "cob")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>${" "}
                <strong>{totales(totArr, "adelantado")}</strong>
              </td>
              <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>{" "}
                <strong>
                  {porcent(
                    totales(totArr, "adelantado"),
                    totales(totArr, "emi"),
                    totales(totArr, "cob")
                  )}{" "}
                  %
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaEfectividad;
