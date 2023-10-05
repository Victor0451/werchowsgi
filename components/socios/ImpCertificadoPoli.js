import React from "react";
import CertPreImpreso from "./CertPreImpreso";
import CertPDF from "./CertPDF";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Spinner,
} from "@material-tailwind/react";
import ReactToPrint from "react-to-print";
import Router from "next/router";

const ImpCertificadoPoli = ({ ficha, preImpRef, PDFRef, registrarCert }) => {
  return (
    <Card className="h-full w-full p-4 mt-10">
      <CardBody floated={false} shadow={false} className="rounded-none">
        <div>
          <div className="mt-5 mb-5 border-2 p-4 rounded-xl">
            <Typography variant="h5" color="blue-gray">
              Opciones
            </Typography>

            <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
              <ReactToPrint
                onAfterPrint={() => registrarCert()}
                trigger={() => <Button>Imprimir Pre Impreso</Button>}
                content={() => preImpRef}
              />
              <ReactToPrint
                onAfterPrint={() => registrarCert()}
                trigger={() => <Button>Imprimir PDF</Button>}
                content={() => PDFRef}
              />
              <Button
                color="red"
                onClick={() => {
                  Router.reload("/socios/solicitudes/certificadopoli");
                }}
              >
                Cancelar
              </Button>
            </div>
          </div>

          <div ref={(el) => (preImpRef = el)}>
            <CertPreImpreso ficha={ficha} />
          </div>

          <div ref={(el) => (PDFRef = el)}>
            <CertPDF ficha={ficha} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ImpCertificadoPoli;
