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
const FormNovell = ({
  montoRef,
  monto_letraRef,
  anticipoRef,
  anticipo_letraRef,
  cuotasRef,
  cuotasaldoRef,
  cuotasaldo_letraRef,
  cuota_mantenimientoRef,
  gastos_admRef,
  apellido_solRef,
  nombre_solRef,
  dni_solRef,
  estcivil_solRef,
  fecha_nac_solRef,
  dom_solRef,
  domnum_solRef,
  piso_solRef,
  barrio_solRef,
  localidad_solRef,
  nacionalidad_solRef,
  codpostal_solRef,
  telefono_solRef,
  movil_solRef,
  apellido_benRef,
  nombre_benRef,
  dni_benRef,
  estcivil_benRef,
  fecha_nac_benRef,
  dom_benRef,
  domnum_benRef,
  piso_benRef,
  barrio_benRef,
  localidad_benRef,
  nacionalidad_benRef,
  codpostal_benRef,
  telefono_benRef,
  movil_benRef,
  handleChange,
  errores,
  altaNovell,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Plan Novell</Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
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
              onChange={(value) => handleChange("servicio", value)}
            />
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto Total (Numero)"
                  type="number"
                  inputRef={montoRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto Total (Letra)"
                  type="text"
                  inputRef={monto_letraRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Anticipo (Numero)"
                  type="number"
                  inputRef={anticipoRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Anticipo (Letra)"
                  type="text"
                  inputRef={anticipo_letraRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cuotas del Saldo"
                  type="number"
                  inputRef={cuotasRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto del Saldo (Numero)"
                  type="number"
                  inputRef={cuotasaldoRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Monto del Saldo (Letras)"
                  type="text"
                  inputRef={cuotasaldo_letraRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Gastos Adminitrativos"
                  type="number"
                  inputRef={gastos_admRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cuota Mantenimiento"
                  type="number"
                  inputRef={cuota_mantenimientoRef}
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
                  inputRef={apellido_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Nombre" type="text" inputRef={nombre_solRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="DNI" type="number" inputRef={dni_solRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Estado Civil"
                  type="text"
                  inputRef={estcivil_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  inputRef={fecha_nac_solRef}
                />
              </div>
            </div>
            <div className="relative w-full mb-6 group">
              <Input label="Domicilio" type="text" inputRef={dom_solRef} />
            </div>
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input label="N°" type="text" inputRef={domnum_solRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Piso" type="text" inputRef={piso_solRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Barrio" type="text" inputRef={barrio_solRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Localidad"
                  type="text"
                  inputRef={localidad_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nacionalidad"
                  type="text"
                  inputRef={nacionalidad_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cod. Postal"
                  type="number"
                  inputRef={codpostal_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Telefono"
                  type="number"
                  inputRef={telefono_solRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Celular" type="number" inputRef={movil_solRef} />
              </div>
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h6" color="blue-gray">
              <u> Datos del Beneficiario</u>
            </Typography>

            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input
                  label="Apellido"
                  type="text"
                  inputRef={apellido_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Nombre" type="text" inputRef={nombre_benRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="DNI" type="number" inputRef={dni_benRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Estado Civil"
                  type="text"
                  inputRef={estcivil_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  inputRef={fecha_nac_benRef}
                />
              </div>
            </div>
            <div className="relative w-full mb-6 group">
              <Input label="Domicilio" type="text" inputRef={dom_benRef} />
            </div>
            <div className="grid md:grid-cols-4 md:gap-6 mt-6">
              <div className="relative w-full mb-6 group">
                <Input label="N°" type="text" inputRef={domnum_benRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Piso" type="text" inputRef={piso_benRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Barrio" type="text" inputRef={barrio_benRef} />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Localidad"
                  type="text"
                  inputRef={localidad_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Nacionalidad"
                  type="text"
                  inputRef={nacionalidad_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Cod. Postal"
                  type="number"
                  inputRef={codpostal_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  label="Telefono"
                  type="number"
                  inputRef={telefono_benRef}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input label="Celular" type="number" inputRef={movil_benRef} />
              </div>
            </div>
          </div>

          {errores ? (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              {errores}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <div className="">
              <Button onClick={altaNovell}>Registrar</Button>
            </div>

            <div className="ml-1">
              <Link href={"/"}>
                <Button color="red">Cancelar</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormNovell;
