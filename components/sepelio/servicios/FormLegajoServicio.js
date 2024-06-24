import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
} from "@material-tailwind/react";
import moment from "moment";
import { Archivo } from "../../archivos/Archivo";
import { FormSubirArchivos } from "../../archivos/FormSubirArchivos";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export const FormLegajoServicio = ({
  servicio,
  archivos,
  eliminarArchivos,
  file,
  handleUpload,
  ataud,
  parcela,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">
          <u>Legajo Virtual</u>: {servicio.idservicio} - {servicio.apellido},{" "}
          {servicio.nombre}
        </Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Informacion del Servicio
          </Typography>

          <div className="grid md:grid-cols-4 md:gap-6">
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Fecha Recepcion"
                type="text"
                defaultValue={moment(servicio.fecha_recepcion)
                  .utcOffset("+0300")
                  .format("DD/MM/YYYY")}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Empresa"
                type="text"
                defaultValue={servicio.empresa}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="N° Socio"
                type="number"
                defaultValue={servicio.contrato}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="DNI"
                type="number"
                defaultValue={servicio.dni}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Obra Social"
                type="text"
                defaultValue={servicio.obra_soc}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Apellido"
                type="text"
                defaultValue={servicio.apellido}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Nombre"
                type="text"
                defaultValue={servicio.nombre}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Edad"
                type="number"
                defaultValue={servicio.edad}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Fecha Fallecimiento"
                type="text"
                defaultValue={moment(servicio.fecha_fallecimiento)
                  .utcOffset("+0300")
                  .format("DD/MM/YYYY")}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Lugar Fallecimiento"
                type="text"
                defaultValue={servicio.lugar_fallecimiento}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Estado Civil"
                type="text"
                defaultValue={servicio.estado_civil}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Religion"
                type="text"
                defaultValue={servicio.religion}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Altura"
                type="text"
                defaultValue={servicio.altura}
                readOnly
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Peso"
                type="text"
                defaultValue={servicio.peso}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr className="border-2 mt-5 mb-5" />

        <div className="border-2 rounded-xl mt-6 p-4">
          <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
            Datos del Servicio
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-4">
            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Tipo Servicio"
                type="text"
                readOnly
                defaultValue={servicio.tipo_servicio}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Causa de Fallec."
                type="text"
                readOnly
                defaultValue={servicio.motivo}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Retiro del Extinto"
                type="text"
                readOnly
                defaultValue={servicio.retiro}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Casa Mortuaria"
                type="text"
                readOnly
                defaultValue={servicio.casa_mortuaria}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Fecha de Inumacion"
                type="text"
                readOnly
                defaultValue={moment(servicio.fecha_inhumacion)
                  .utcOffset("+0300")
                  .format("DD/MM/YYYY")}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Hora de Inumacion"
                type="time"
                readOnly
                defaultValue={servicio.hora_inhumacion}
              />
            </div>

            <div className="relative w-full mb-6 group">
              <Input
                size="md"
                label="Cementerio"
                type="text"
                readOnly
                defaultValue={servicio.cementerio}
              />
            </div>

            {servicio.cremacion === true ? (
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Cremacion"
                  type="text"
                  readOnly
                  defaultValue={"Si"}
                />
              </div>
            ) : (
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Cremacion"
                  type="text"
                  readOnly
                  defaultValue={"No"}
                />
              </div>
            )}

            {servicio.donacion === true ? (
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Donacion"
                  type="text"
                  readOnly
                  defaultValue={"Si"}
                />
              </div>
            ) : (
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Donacion"
                  type="text"
                  readOnly
                  defaultValue={"No"}
                />
              </div>
            )}
          </div>
          <Textarea
            label="Detalle Corona"
            rows={5}
            defaultValue={servicio.detalle_corona}
          />
        </div>

        <hr className="mt-5 mb-5 border-2" />

        {ataud.nombre ? (
          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion del Ataud
            </Typography>

            <div className="grid md:grid-cols-4 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Tipo"
                  type="text"
                  defaultValue={ataud.tipo}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Modelo"
                  type="text"
                  defaultValue={ataud.nombre}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Medidas"
                  type="text"
                  defaultValue={ataud.medidas}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Uso"
                  type="text"
                  defaultValue={ataud.uso}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Fabricante"
                  type="text"
                  defaultValue={ataud.fabricante}
                  readOnly
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion del Ataud
            </Typography>

            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>Este servicio no posee ataud registrado</strong>
            </Alert>
          </>
        )}

        <hr className="mt-5 mb-5 border-2" />

        {parcela.dni ? (
          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion de la Parcela
            </Typography>

            <div className="grid md:grid-cols-4 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Parcela"
                  type="text"
                  defaultValue={parcela.parcela}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Manzana"
                  type="text"
                  defaultValue={parcela.mza}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Lote"
                  type="text"
                  defaultValue={parcela.lote}
                  readOnly
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Fecha"
                  type="text"
                  defaultValue={moment(parcela.fecha)
                    .utcOffset("+0300")
                    .format("DD/MM/YYYY")}
                  readOnly
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion de la Parcela
            </Typography>

            <Alert
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>Este servicio no posee parcela asignada</strong>
            </Alert>
          </>
        )}

        <hr className="mt-5 mb-5 border-2" />

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Subir Archivos
          </Typography>

          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <FormSubirArchivos file={file} handleUpload={handleUpload} />
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5 border-2" />

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Archivos
          </Typography>

          <div className="grid md:grid-cols-3 md:gap-6">
            {archivos.length > 0 ? (
              <>
                {archivos.map((a, index) => (
                  <div key={index} className="relative z-0 w-full mb-6 group">
                    <Archivo
                      url={"api/archivos/legajovirtualservicios/archivo/"}
                      urlDesc={
                        "api/archivos/legajovirtualservicios/descargararchivo/"
                      }
                      archivo={a.archivo}
                      eliminarArchivos={eliminarArchivos}
                    />
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
