import React, { useMemo } from "react";
import moment from "moment";
import { Card, Typography } from "@material-tailwind/react";

const ListadoAdherentes = ({ listado }) => {
  const TABLE_HEAD = [
    "Integrantes",
    "Plan",
    "Fecha Nac.",
    "DNI",
    "Alta",
    "Vigencia",
    "Estado",
  ];

  return (
    <div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-1"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listado.map((l, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.APELLIDOS ? (
                    <br />
                  ) : (
                    <>
                      {l.APELLIDOS}, {l.NOMBRES}
                    </>
                  )}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.NACIMIENTO ? (
                    ""
                  ) : (
                    <>
                      {l.PLAN}
                      {l.SUB_PLAN}
                    </>
                  )}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.NACIMIENTO ? (
                    ""
                  ) : (
                    <>
                      {moment(l.NACIMIENTO)
                        .utcOffset("+0300")
                        .format("DD/MM/YYYY")}
                    </>
                  )}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {l.NRO_DOC}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.ALTA ? (
                    ""
                  ) : (
                    <>
                      {moment(l.ALTA).utcOffset("+0300").format("DD/MM/YYYY")}
                    </>
                  )}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.VIGENCIA ? (
                    <></>
                  ) : (
                    <>
                      {moment(l.VIGENCIA)
                        .utcOffset("+0300")
                        .format("DD/MM/YYYY")}
                    </>
                  )}
                </Typography>
              </td>
              <td className="p-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {!l.BAJA && l.APELLIDOS ? (
                    <>Activo</>
                  ) : l.BAJA && l.FALLE === 999 ? (
                    <>
                      Fallecio -{" "}
                      {moment(l.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
                    </>
                  ) : l.BAJA && l.FALLE !== 999 ? (
                    <>
                      Baja -{" "}
                      {moment(l.BAJA).utcOffset("+0300").format("DD/MM/YYYY")}
                    </>
                  ) : !l.BAJA && !l.APELLIDOS ? (
                    <></>
                  ) : null}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoAdherentes;
