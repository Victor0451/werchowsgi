import React from "react";
import moment from "moment";
import { Typography } from "@material-tailwind/react";

function CertPDF({ ficha }) {
  return (
    <div>
      <div className="certFondo  text-sm">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="mt-2 p-4">
          <div className="mt-2">
            <Typography variant="small" className=" font-bold">
              San Salvador de Jujuy {moment().format("ll")}
            </Typography>
          </div>

          <div className="mt-4">
            <Typography variant="small" className=" font-bold">
              A: {ficha.APELLIDOS}, {ficha.NOMBRES}
            </Typography>
          </div>

          <div className="">
            <Typography variant="small" className=" font-bold">
              <strong>DNI: {ficha.NRO_DOC}</strong>
            </Typography>
          </div>

          <div className="mt-2">
            <Typography variant="small" className="text-justify">
              Por medio de la presente se extiende una constancia de cobertura
              de sepelio, la cual al momento de la fecha se encuentra al dia con
              las cuotas mensuales. Este documento fue solicitado para ser
              presentado ante las <strong>AUTORIDADES QUE LO REQUIERAN</strong>
            </Typography>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CertPDF;
