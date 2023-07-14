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
} from "@material-tailwind/react";
import moment from "moment";
import ReactToPrint from "react-to-print";

const FormImpSolicitud = ({ servicio, ataud, componentRef }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div ref={(el) => (componentRef = el)} className="p-4">
          <Typography variant="h2">
            <u>Solicitud de Servicio</u>
          </Typography>

          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion del Servicio
            </Typography>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Fecha Recepcion"
                  type="text"
                  defaultValue={moment(servicio.fecha_recepcion).format(
                    "DD/MM/YYYY"
                  )}
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
                  defaultValue={moment(servicio.fecha_fallecimiento).format(
                    "DD/MM/YYYY"
                  )}
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
                  defaultValue={moment(servicio.fecha_inhumacion).format(
                    "DD/MM/YYYY"
                  )}
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
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="p-4 border-2 rounded-lg mt-6">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Informacion del Ataud
            </Typography>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Ataud"
                  type="text"
                  defaultValue={ataud.nombre}
                  readOnly
                />
              </div>
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
                  label="Uso"
                  type="text"
                  defaultValue={ataud.uso}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" p-4">
              <Typography variant="h4" className="mb-4 text-center">
                <strong>
                  <u>CONFORMIDAD DEL SERVICIO DE SEPELIO</u>
                </strong>
              </Typography>

              <div className="mt-10 conform">
                <Typography variant="small" className=" text-justify mt-4">
                  El/la que subscribe
                  .................................................................,
                  en carácter de ..............................................
                  en adelante el responsable del/la Extinto/a
                  .............................................., Acepta que el
                  servicio de brinde en la siguiente modalidad:
                </Typography>
                <Typography variant="small" className=" text-justify mt-10">
                  Acepta que el servicio se brinde bajo las siguientes
                  modalidades y condiciones: 1- El horario de Inhumación fijado,
                  se refiere al horario de llegada al Cementerio y/o Crematorio
                  (si correspondiere de acuerdo al Plan). 2- Los Automóviles de
                  Duelo serán ofrecidos siempre que en la Localidad donde se
                  brinde el servicio haya disponibilidad de remises, taxis o
                  servicios de transporte alternativos. 3- En las Localidades
                  donde los coches de duelo no puedan  llegar por razones de
                  distancias geográficas la empresa dispondrá de remises, taxis
                  o servicios de transporte alternativos. Sin embargo la empresa
                  no enviara autos de duelo a zonas semi- urbanas, rural o de
                  difícil acceso para el transporte de vehículos, para lo
                  cual proporcionará solamente  una camioneta tanto para la
                  instalación como para el servicio de inhumación. 4- Los
                  Trámites serán realizados por el personal de la empresa,
                  acompañado por un familiar. Excepto en el interior donde la
                  empresa no tenga sucursales. 5- Las modificaciones que se
                  hicieren unilateralmente por parte de los deudos sin previo
                  acuerdo con La Empresa, tales como contratación otros medios
                  de difusión de otros avisos necrológicos, transporte, etc,
                   liberarán a ésta de toda responsabilidad, careciendo el
                  afiliado de derecho a reintegro alguno.- 6- El lapso de espera
                  de los vehículos durante la inhumación no superará los 40
                  minutos; caso contrario La Empresa cobrará por la misma un
                  valor equivalente al alquiler de un automóvil. 7- La Empresa
                  proveerá de un set de cafetería: 1 kg de azúcar, 1 caja de te
                  de 50 u, 1 caja de mate de 25 u, 1 café, y bebidas gaseosas (
                  3) . 8- El responsable designado es el único con exclusivo
                  derecho a cobrar el gasto luto del plan queda excluido el
                  subsidio de contención familiar que tiene beneficiarios
                  designados por el titular. 9- El responsable es el único
                  interlocutor con derecho a efectuar consultas o cambios en el
                  servicio, siempre que las mismas estén a tiempo de realizarse
                  10-.Por razones de bio seguridad, ante la eventual
                  certificación de una enfermedad transmisible( neumonía, OMS
                  b24, meningitis, u otra enfermedad infecto contagiosa) y si el
                  velatorio se realiza en sala velatoria de la empresa, el mismo
                  será a ataúd cerrado o en su defecto si se realizaría en
                  domicilio ante la explicación idónea del personal se actuara
                  de la misma forma , salvo criterio de los familiares, quedando
                  exceptuado toda responsabilidad esta empresa si ocurriese
                  algún contagio de dichas enfermedades antes mencionadas 11-
                  Dada las circunstancias acontecidas de público conocimiento
                  referidas a CORONA VIRUS COVID 19 Y EN ESPECIAL POR LO
                  DISPUESTO POR EL DECRETO DE NECESIDAD Y URGENCIA NRO 297/2020
                  EMITIDO POR EL PODER EJECUTIVO NACIONAL EN MARCO DE LA
                  EMERGENCIA SANITARIA DECLARADA EN TODO EL PAIS. El servicio se
                  bridara con el retiro del cuerpo en ataúd en un móvil
                  sanitario, y traslado 12- El responsable manifiesta su total
                  conformidad para que el Servicio de Sepelio se efectúe de
                  acuerdo al detalle precedente, renunciando a cualquier reclamo
                  o indemnización alguna.
                </Typography>

                <div className="mt-10">
                  <div className="grid md:grid-cols-3 md:gap-4 ml-24">
                    <div className="relative w-full mb-6 group">
                      <br />
                      <p>-----------------------------</p>
                      <label>Firma</label>
                    </div>

                    <div className="relative w-full mb-6 group">
                      <br />
                      <p>-----------------------------</p>
                      <label>Aclaracion</label>
                    </div>

                    <div className="relative w-full mb-6 group">
                      <br />
                      <p>-----------------------------</p>
                      <label>N° de documento</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5 border-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Opciones
          </Typography>

          <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
            <ReactToPrint
              trigger={() => <Button>Imprimir</Button>}
              content={() => componentRef}
            />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormImpSolicitud;
