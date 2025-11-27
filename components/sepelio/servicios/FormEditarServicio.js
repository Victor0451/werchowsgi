import React, { useState, useRef } from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,

} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Router from "next/router";
import ModalAtaudes from "./ModalAtaudes";
import ModalParcelasConLugares from "./ModalParcelasConLugares";

const FormEditarServicio = ({
  servicio,
  errores,
  handleChange,
  actualizarServicio,
  ataudes,
  usu,
  regAtaud,
  ataudSel,
  parcelas,
  parceSel,
  regParceConLugar,
  lugarSel,
  cremacionSel,
  donacionSel,
  domicilioSel,
}) => {
  // Referencias para los campos del formulario
  const apellidoRef = useRef(null);
  const nombreRef = useRef(null);
  const edadRef = useRef(null);
  const telefonoRef = useRef(null);
  const movilRef = useRef(null);
  const estCivilRef = useRef(null);
  const conyugueRef = useRef(null);
  const religionRef = useRef(null);
  const fechaFacRef = useRef(null);
  const lugarFacRef = useRef(null);
  const alturaRef = useRef(null);
  const pesoRef = useRef(null);
  const detalleCausaRef = useRef(null);
  const retiroExtRef = useRef(null);
  const casaMorRef = useRef(null);
  const fechaInuRef = useRef(null);
  const horaInuRef = useRef(null);
  const cemmenterioRef = useRef(null);
  const detCoronaRef = useRef(null);
  const impServRef = useRef(null);
  const solicitanteRef = useRef(null);
  const dniSolicRef = useRef(null);
  const domicilioSoliRef = useRef(null);

  const [parentezcoSel, guardarParentezcoSel] = useState(servicio.parentesco || "");

  const handleSubmit = () => {
    const datosFormulario = {
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
      telefono: telefonoRef.current.value,
      movil: movilRef.current.value,
      estado_civil: estCivilRef.current.value,
      conyugue: conyugueRef.current.value,
      religion: religionRef.current.value,
      fecha_fallecimiento: fechaFacRef.current.value,
      lugar_fallecimiento: lugarFacRef.current.value,
      altura: alturaRef.current.value,
      peso: pesoRef.current.value,
      motivo: detalleCausaRef.current.value,
      retiro: retiroExtRef.current.value,
      casa_mortuaria: casaMorRef.current.value,
      fecha_inhumacion: fechaInuRef.current.value,
      hora_inhumacion: horaInuRef.current.value,
      cementerio: cemmenterioRef.current.value,
      detalle_corona: detCoronaRef.current.value,
      importe_servicio: impServRef.current.value,
      solicitado: solicitanteRef.current.value,
      dni_solicitante: dniSolicRef.current.value,
      domicilio_solicitante: domicilioSoliRef.current.value,
      parentesco: parentezcoSel,
    };

    actualizarServicio(datosFormulario);
  };

  return (
    <Card className="h-full w-full p-4">
      <CardBody className="rounded-none">
        <Typography variant="h2">Editar Servicio de Sepelio</Typography>

        <div className="mt-6">
          <div className="border-2 rounded-xl mt-6 p-4">
            <Typography variant="h4" color="blue-gray" className="mt-6 mb-6">
              Servicio ID: {servicio.idservicio}
            </Typography>

            <div className="border-2 rounded-xl mt-6 p-4">
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                Datos del Extinto
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-4">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="text"
                    value={servicio.dni}
                    readOnly
                    disabled
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Contrato"
                    type="text"
                    value={servicio.contrato}
                    readOnly
                    disabled
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Empresa"
                    type="text"
                    value={servicio.empresa}
                    readOnly
                    disabled
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Tipo Servicio"
                    type="text"
                    value={servicio.tipo_servicio}
                    readOnly
                    disabled
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Apellido"
                    type="text"
                    inputRef={apellidoRef}
                    defaultValue={servicio.apellido}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Nombre"
                    type="text"
                    inputRef={nombreRef}
                    defaultValue={servicio.nombre}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Edad"
                    type="number"
                    inputRef={edadRef}
                    defaultValue={servicio.edad}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Teléfono"
                    type="text"
                    inputRef={telefonoRef}
                    defaultValue={servicio.telefono}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Móvil"
                    type="text"
                    inputRef={movilRef}
                    defaultValue={servicio.movil}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Est. Civil"
                    type="text"
                    inputRef={estCivilRef}
                    defaultValue={servicio.estado_civil}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Conyugue"
                    type="text"
                    inputRef={conyugueRef}
                    defaultValue={servicio.conyugue}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Religión"
                    type="text"
                    inputRef={religionRef}
                    defaultValue={servicio.religion}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha Fallecimiento"
                    type="date"
                    inputRef={fechaFacRef}
                    defaultValue={moment(servicio.fecha_fallecimiento).format(
                      "YYYY-MM-DD"
                    )}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Lugar Fallecimiento"
                    type="text"
                    inputRef={lugarFacRef}
                    defaultValue={servicio.lugar_fallecimiento}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Altura"
                    type="text"
                    inputRef={alturaRef}
                    defaultValue={servicio.altura}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Peso"
                    type="text"
                    inputRef={pesoRef}
                    defaultValue={servicio.peso}
                  />
                </div>
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="border-2 rounded-xl mt-6 p-4">
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                Datos del Servicio
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-4">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Detalle Causa Fallec."
                    type="text"
                    inputRef={detalleCausaRef}
                    defaultValue={servicio.motivo}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Retiro del Extinto"
                    type="text"
                    inputRef={retiroExtRef}
                    defaultValue={servicio.retiro}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Casa Mortuaria"
                    type="text"
                    inputRef={casaMorRef}
                    defaultValue={servicio.casa_mortuaria}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Fecha de Inhumación"
                    type="date"
                    inputRef={fechaInuRef}
                    defaultValue={moment(servicio.fecha_inhumacion).format(
                      "YYYY-MM-DD"
                    )}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Hora de Inhumación"
                    type="time"
                    inputRef={horaInuRef}
                    defaultValue={servicio.hora_inhumacion}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Cementerio"
                    type="text"
                    inputRef={cemmenterioRef}
                    defaultValue={servicio.cementerio}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Select
                    label="Cremación"
                    value={cremacionSel ? "SI" : "NO"}
                    onChange={(value) => {
                      handleChange("cremacion", value);
                    }}
                  >
                    <Option value="SI">Si</Option>
                    <Option value="NO">No</Option>
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Select
                    label="Donación"
                    value={donacionSel ? "SI" : "NO"}
                    onChange={(value) => {
                      handleChange("donacion", value);
                    }}
                  >
                    <Option value="SI">Si</Option>
                    <Option value="NO">No</Option>
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Select
                    label="Serv. en Domicilio"
                    value={domicilioSel ? "SI" : "NO"}
                    onChange={(value) => {
                      handleChange("domicilio", value);
                    }}
                  >
                    <Option value="SI">Si</Option>
                    <Option value="NO">No</Option>
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Importe Servicio (Serv. Particular)"
                    type="number"
                    inputRef={impServRef}
                    defaultValue={servicio.importe_servicio || 0}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 md:gap-4">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Detalle Corona"
                    type="text"
                    inputRef={detCoronaRef}
                    defaultValue={servicio.detalle_corona}
                  />
                </div>
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="border-2 rounded-xl mt-6 p-4">
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                Datos del Solicitante
              </Typography>

              <div className="grid md:grid-cols-3 md:gap-4">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Solicitado por"
                    type="text"
                    inputRef={solicitanteRef}
                    defaultValue={servicio.solicitado}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="DNI"
                    type="number"
                    inputRef={dniSolicRef}
                    defaultValue={servicio.dni_solicitante}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Select
                    label="Parentezco"
                    value={parentezcoSel}
                    onChange={(value) => {
                      guardarParentezcoSel(value);
                    }}
                  >
                    <Option value="Cónyugue">Cónyugue</Option>
                    <Option value="Hijo/a">Hijo/a</Option>
                    <Option value="Hermano/a">Hermano/a</Option>
                    <Option value="Otro">Otro</Option>
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Domicilio"
                    type="text"
                    inputRef={domicilioSoliRef}
                    defaultValue={servicio.domicilio_solicitante}
                  />
                </div>
              </div>
            </div>

            <hr className="border-2 mt-5 mb-5" />

            <div className="border-2 rounded-xl mt-6 p-4">
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-6">
                Datos del Ataúd
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-4">
                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Código"
                    type="text"
                    value={ataudSel.idataud || servicio.idataud}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Ataúd"
                    type="text"
                    value={ataudSel.nombre || ""}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    size="md"
                    label="Uso"
                    type="text"
                    value={ataudSel.uso || ""}
                    readOnly
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <ModalAtaudes
                    listado={ataudes}
                    usu={usu}
                    regAtaud={regAtaud}
                  />
                </div>
              </div>
            </div>

            {servicio.tipo_servicio !== "Particular" && (
              <>


                <hr className="border-2 mt-5 mb-5" />


                {!servicio.idparcela ? (

                  <Alert color="blue"
                    icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
                    className="mt-6"
                  >
                    Este servicio no tiene una parcela asignada.
                  </Alert>

                ) : null}

                <div className="border-2 rounded-xl mt-6 p-4">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mt-6 mb-6"
                  >
                    Datos de la Parcela
                  </Typography>

                  <div className="grid md:grid-cols-3 md:gap-4">
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="Cementerio"
                        type="text"
                        value={parceSel.cementerio || ""}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="Parcela"
                        type="text"
                        value={parceSel.parcela || ""}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="Manzana"
                        type="text"
                        value={parceSel.mza || ""}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="Lote"
                        type="text"
                        value={parceSel.lote || ""}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="md"
                        label="Lugar"
                        type="text"
                        value={lugarSel ? `Lugar ${lugarSel}` : ""}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group flex items-center">
                      <ModalParcelasConLugares
                        listado={parcelas}
                        usu={usu}
                        regParceConLugar={regParceConLugar}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {errores ? (
            <Alert
              color="red"
              icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
              className="mt-6"
            >
              {errores}
            </Alert>
          ) : null}

          <div className="flex justify-end mt-6">
            <Button onClick={handleSubmit}>Actualizar Servicio</Button>

            <Button
              className="ml-1"
              color="red"
              onClick={() => {
                Router.push("/sepelio/servicios/listadoservicio");
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormEditarServicio;
