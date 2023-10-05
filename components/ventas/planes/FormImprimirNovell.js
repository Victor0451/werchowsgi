import React from "react";
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
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import moment from "moment";
import CondicionesNovell from "./CondicionesNovell";
import ReactToPrint from "react-to-print";

const FormImprimirNovell = ({ novell }) => {
  let componentRef = React.createRef();

  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <div className="grid md:grid-cols-2 md:gap-6 mt-6">
          <div className="flex justify-start">
            <Typography variant="h2">Impresion Plan Novell</Typography>
          </div>
          <div className="flex justify-end ">
            <div className="">
              <ReactToPrint
                trigger={() => <Button>Imprimir</Button>}
                content={() => componentRef}
              />
            </div>

            <div className="ml-1">
              <Link href={"/"}>
                <Button color="red">Cancelar</Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="p-4 border-2 rounded-lg mt-6"
          ref={(el) => (componentRef = el)}
        >
          <div className="grid md:grid-cols-3 md:gap-6 mt-6">
            <div className="flex justify-start">
              <img
                className="werchowlogo -mt-5"
                src="/img/logo.png"
                alt="Werchow Logo"
              />
            </div>
            <div className="flex justify-center">
              <Typography variant="h5" color="blue-gray" className="-ml-20">
                <u> Solicitud de Adhesion</u>
              </Typography>
            </div>
            <div className="flex justify-end">
              <Input
                label="Fecha"
                type="text"
                value={moment().format("DD/MM/YYYY")}
                readOnly
              />
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="p-4 border-2 rounded-lg mt-6">
            <Textarea
              label="Detalle del Servicio"
              rows={5}
              defaultValue={novell.servicio}
            />
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto Total (Numero)"
                  type="number"
                  defaultValue={novell.monto}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto Total (Letra)"
                  type="text"
                  defaultValue={novell.monto_letra}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Anticipo (Numero)"
                  type="number"
                  defaultValue={novell.anticipo}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Anticipo (Letra)"
                  type="text"
                  defaultValue={novell.anticipo_letra}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cuotas del Saldo"
                  type="number"
                  defaultValue={novell.cuotas}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto del Saldo (Numero)"
                  type="number"
                  defaultValue={novell.cuotasaldo}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto del Saldo (Letras)"
                  type="text"
                  defaultValue={novell.cuotasaldo_letra}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Gastos Adminitrativos"
                  type="number"
                  defaultValue={novell.gastos_adm}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cuota Mantenimiento"
                  type="number"
                  defaultValue={novell.cuota_mantenimiento}
                />
              </div>
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h6" color="blue-gray">
              <u> Datos del Solicitante</u>
            </Typography>

            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="Apellido"
                  type="text"
                  defaultValue={novell.apellido_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nombre"
                  type="text"
                  defaultValue={novell.nombre_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="DNI"
                  type="number"
                  defaultValue={novell.dni_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Estado Civil"
                  type="text"
                  defaultValue={novell.estcivil_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  defaultValue={novell.fecha_nac_sol}
                />
              </div>
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                label="Domicilio"
                type="text"
                defaultValue={novell.dom_sol}
              />
            </div>
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="N°"
                  type="text"
                  defaultValue={novell.domnum_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Piso"
                  type="text"
                  defaultValue={novell.piso_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Barrio"
                  type="text"
                  defaultValue={novell.barrio_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Localidad"
                  type="text"
                  defaultValue={novell.localidad_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nacionalidad"
                  type="text"
                  defaultValue={novell.nacionalidad_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cod. Postal"
                  type="number"
                  defaultValue={novell.codpostal_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Telefono"
                  type="number"
                  defaultValue={novell.telefono_sol}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Celular"
                  type="number"
                  defaultValue={novell.movil_sol}
                />
              </div>
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />
          <br />

          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h6" color="blue-gray">
              <u> Datos del Beneficiario</u>
            </Typography>

            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="Apellido"
                  type="text"
                  defaultValue={novell.apellido_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nombre"
                  type="text"
                  defaultValue={novell.nombre_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="DNI"
                  type="number"
                  defaultValue={novell.dni_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Estado Civil"
                  type="text"
                  defaultValue={novell.estcivil_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  defaultValue={novell.fecha_nac_ben}
                />
              </div>
            </div>
            <div className="relative w-full mb-6 group">
              <Input
                label="Domicilio"
                type="text"
                defaultValue={novell.dom_ben}
              />
            </div>
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="N°"
                  type="text"
                  defaultValue={novell.domnum_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Piso"
                  type="text"
                  defaultValue={novell.piso_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Barrio"
                  type="text"
                  defaultValue={novell.barrio_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Localidad"
                  type="text"
                  defaultValue={novell.localidad_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nacionalidad"
                  type="text"
                  defaultValue={novell.nacionalidad_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cod. Postal"
                  type="number"
                  defaultValue={novell.codpostal_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Telefono"
                  type="number"
                  defaultValue={novell.telefono_ben}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Celular"
                  type="number"
                  defaultValue={novell.movil_ben}
                />
              </div>
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <CondicionesNovell novell={novell} />
        </div>
        <div className="flex justify-end mt-6">
          <div className="">
            <ReactToPrint
              trigger={() => <Button>Imprimir</Button>}
              content={() => componentRef}
            />
          </div>

          <div className="ml-1">
            <Link href={"/"}>
              <Button color="red">Cancelar</Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormImprimirNovell;
