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
  ButtonGroup,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoAdherentes from "./ListadoAdherentes";
import { FormSubirArchivos } from "../archivos/FormSubirArchivos";
import { Archivo } from "../archivos/Archivo";
import GastoLuto from "../Layouts/GastoLuto";
import ListadoPagos from "./ListadoPagos";
import Router from "next/router";
import ModalAfiliacion from "./ModalAfiliacion";
import ListadoUsos from "./ListadoUsos";
import ListadoHistorial from "./ListadoHistorial";
import Link from "next/link";
import ModalActualizarCuota from "./ModalActualizarCuota";
import ModalApellidos from "./ModalApellidos";
import ModalBuscarAdherentes from "./ModalBuscarAdherentes";
import ModalBeneficio from "./ModalBeneficio";

const FormLegajoSocio = ({
  dniRef,
  contratoRef,
  errores,
  alertas,
  traerSocio,
  tarerSocioContrato,
  traerApellido,
  traerApellidoMutual,
  traerSocioMutual,
  tarerSocioContratoMutual,
  show,
  ficha,
  archivos,
  eliminarArchivos,
  file,
  handleSoli,
  handleCondi,
  handleRehab,
  handleNoti,
  handleRecD,
  handleRecF,
  adhs,
  grupo,
  allPagos,
  cuotasRef,
  handleVigencia,
  handleBlur,
  vigencia,
  cuotas,
  showAfi,
  regAfi,
  usos,
  historial,
  histCuotas,
  cuotaMensual,
  baja,
  apellidoRef,
  listApe,
  gl,
  regBeneficio,
  beneficioRef,
  observacionRef,
  traerBeneficios,
  beneficios,
  traerAdhs
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        {ficha ? (
          <div className="flex flex-wrap -mx-3 mb-6 items-center">
            <div className="w-full md:w-10/12  px-3 mt-6 mb-6 md:mb-0">
              <Typography variant="h3" color="blue-gray" className="leading-tight">
                <u>Legajo Virtual</u>: {ficha.CONTRATO} - {ficha.APELLIDOS},{" "}
                {ficha.NOMBRES}
              </Typography>
              <Typography color="gray" className="text-sm mt-1">
                Información general del socio — revise los datos antes de continuar.
              </Typography>
            </div>
            <div className="w-full md:w-2/12 px-3 mt-6 mb-6 md:mb-0 text-right">
              {ficha.EMPRESA === "WERCHOW" ? (
                <img className="werchowlogo inline-block" src="/img/logo.png" />
              ) : ficha.EMPRESA === "MUTUAL" ? (
                <img className="mutuallogo inline-block" src="/img/logom.jpg" />
              ) : null}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <Typography variant="h3">
              <u>Legajo Virtual</u>
            </Typography>
            <Typography color="gray" className="text-sm mt-1">
              Busque por N° de socio, DNI o apellido para acceder al legajo.
            </Typography>
          </div>
        )}

        {show === false ? (
          <>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative w-full mb-6 group">
                <div className="card-simple p-4 mt-6">
                  <Typography variant="h5" color="blue-gray" className="mb-4">
                    Ingrese el N° de Socio
                  </Typography>

                  <div className="flex flex-wrap -mx-3 mb-6 items-end">
                    <div className="w-full md:w-1/2  px-3 mt-2 mb-2 md:mb-0">
                      <Input
                        size="md"
                        label="N° Socio"
                        type="number"
                        inputRef={contratoRef}
                      />
                    </div>
                    <div className="w-full md:w-1/2  px-3 mt-2 mb-2 md:mb-0 flex items-center md:justify-end">
                      <div className="flex gap-2">
                        <Button size="sm" className="btn-primary" onClick={tarerSocioContrato}>
                          Werchow
                        </Button>
                        <Button size="sm" className="btn-secondary" onClick={tarerSocioContratoMutual}>
                          Mutual
                        </Button>
                      </div>
                    </div>
                  </div>

                  {errores ? (
                    <Alert
                      color="red"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {errores}
                    </Alert>
                  ) : null}

                  {alertas ? (
                    <Alert
                      color="blue"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {alertas}
                    </Alert>
                  ) : null}
                </div>
              </div>

              <div className="relative w-full mb-6 group">
                <div className="card-simple p-4 mt-6">
                  <Typography variant="h5" color="blue-gray" className="mb-4">
                    Ingrese el DNI del Titular
                  </Typography>

                  <div className="flex flex-wrap -mx-3 mb-6 items-end">
                    <div className="w-full md:w-1/2  px-3 mt-2 mb-2 md:mb-0">
                      <Input
                        size="md"
                        label="DNI"
                        type="number"
                        inputRef={dniRef}
                      />
                    </div>
                    <div className="w-full md:w-1/2  px-3 mt-2 mb-2 md:mb-0 flex items-center md:justify-end">
                      <div className="flex gap-2">
                        <Button size="sm" className="btn-primary" onClick={traerSocio}>Werchow</Button>
                        <Button size="sm" className="btn-secondary" onClick={traerSocioMutual}>Mutual</Button>
                      </div>
                    </div>
                  </div>

                  {errores ? (
                    <Alert
                      color="red"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {errores}
                    </Alert>
                  ) : null}

                  {alertas ? (
                    <Alert
                      color="blue"
                      icon={
                        <InformationCircleIcon
                          strokeWidth={2}
                          className="h-6 w-6"
                        />
                      }
                    >
                      {alertas}
                    </Alert>
                  ) : null}
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-5" />

            <div className="card-simple p-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna izquierda: búsqueda del TITULAR por apellido */}
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Buscar Titular por Apellido
                  </Typography>

                  <div className="flex flex-col gap-3">
                    <Input
                      size="md"
                      label="Ingrese el apellido"
                      type="text"
                      inputRef={apellidoRef}
                    />

                    <div className="flex gap-2">
                      <ModalApellidos
                        nombreBoton={"Werchow"}
                        listado={listApe}
                        fn={traerApellido}
                        tarerSocioContrato={tarerSocioContrato}
                        tarerSocioContratoMutual={tarerSocioContratoMutual}
                      />
                      <ModalApellidos
                        nombreBoton={"Mutual"}
                        listado={listApe}
                        fn={traerApellidoMutual}
                        tarerSocioContrato={tarerSocioContrato}
                        tarerSocioContratoMutual={tarerSocioContratoMutual}
                      />
                    </div>
                  </div>
                </div>

                {/* Columna derecha: búsqueda de ADHERENTES (separada) */}
                <div className="md:pl-6 md:border-l md:border-gray-200">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Buscar Adherente
                  </Typography>

                  <div className="mb-3">
                    <Typography color="gray" className="text-sm">
                      Busca por DNI (exacto) o por Apellido (lista de resultados).
                    </Typography>
                  </div>

                  <div className="flex gap-2">
                    <ModalBuscarAdherentes
                      nombreBoton={"Adherente W"}
                      endpoint={"/api/socios/buscarAdherente"}
                      source={"WERCHOW"}
                      onSelect={(item) => {
                        if (item && item.CONTRATO) tarerSocioContrato(item.CONTRATO);
                      }}
                    />

                    <ModalBuscarAdherentes
                      nombreBoton={"Adherente M"}
                      endpoint={"/api/socios/buscarAdherente"}
                      source={"MUTUAL"}
                      onSelect={(item) => {
                        if (item && item.CONTRATO) tarerSocioContratoMutual(item.CONTRATO);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mb-6 group mt-10">
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Puedes consultar el legajo virtual de todos los socios, tanto de
                Werchow como de Mutual
              </Alert>
            </div>
          </>
        ) : show === true ? (
          <>
            <GastoLuto
              plan={`${ficha.PLAN}${ficha.SUB_PLAN}`}
              alta={ficha.ALTA}
              cantadh={0}
              gl={gl}
            />

            <div>
              <div className="p-4 border border-gray-200 rounded-lg mt-6 bg-white shadow-sm">
                {(ficha && ficha.GRUPO === 666) ||
                  (ficha && ficha.GRUPO === 1001) ||
                  (ficha && ficha.GRUPO === 1005) ||
                  (ficha && ficha.GRUPO === 1006) ||
                  (ficha && ficha.GRUPO === 3444) ||
                  (ficha && ficha.GRUPO === 3666) ||
                  (ficha && ficha.GRUPO === 3777) ||
                  (ficha && ficha.GRUPO === 3888) ||
                  (ficha && ficha.GRUPO === 3999) ||
                  (ficha && ficha.GRUPO === 4004) ||
                  (ficha && ficha.GRUPO === 7777) ||
                  (ficha && ficha.GRUPO === 8500) ? (
                  <Alert
                    color="red"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                    className="mt-2 mb-2"
                  >
                    <strong>
                      Ficha en estado moroso. Verifique su situacion
                    </strong>
                  </Alert>
                ) : null}

                {baja === true ? (
                  <Alert
                    color="red"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                    className="mt-2 mb-2"
                  >
                    <strong>¡CUIDADO!... Esta ficha esta dada de baja.</strong>
                  </Alert>
                ) : baja === false ? (
                  <Alert
                    color="green"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                    className="mt-2 mb-2"
                  >
                    <strong>Esta ficha esta activa.</strong>
                  </Alert>
                ) : null}

                <div className="mt-5 mb-5 border border-gray-200 p-4 rounded-xl bg-white">
                  <Typography variant="h5" color="blue-gray">
                    Opciones
                  </Typography>

                  <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
                    <div>
                      <ModalAfiliacion
                        ficha={ficha}
                        cuotasRef={cuotasRef}
                        handleVigencia={handleVigencia}
                        handleBlur={handleBlur}
                        vigencia={vigencia}
                        cuotas={cuotas}
                        errores={errores}
                        showAfi={showAfi}
                        regAfi={regAfi}
                      />
                    </div>

                    <div>
                      <ModalBeneficio
                        errores={errores}
                        regBeneficio={regBeneficio}
                        beneficioRef={beneficioRef}
                        observacionRef={observacionRef}
                        ficha={ficha}
                        traerBeneficios={traerBeneficios}
                        beneficios={beneficios}
                      />
                    </div>

                    <div>
                      <ListadoUsos listado={usos} />
                    </div>

                    <Link
                      href={{
                        pathname: "/socios/adherentes",
                        query: {
                          contrato: ficha.CONTRATO,
                        },
                      }}
                      target="__blank"
                    >
                      <Button className="btn-secondary" size="sm">
                        Agregar Adherentes
                      </Button>
                    </Link>

                    <div>
                      <ListadoHistorial listado={historial} />
                    </div>

                    <div>
                      <ModalActualizarCuota
                        histCuotas={histCuotas}
                        cuotaMensual={cuotaMensual}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Informacion del Socio
                  </Typography>

                  <div className="grid md:grid-cols-3 md:gap-6 mt-6">
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Medio Pago"
                        type="text"
                        defaultValue={grupo}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="DNI"
                        type="text"
                        defaultValue={ficha.NRO_DOC}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Fecha Nacimiento"
                        type="text"
                        defaultValue={moment(ficha.NACIMIENTO).format(
                          "DD/MM/YYYY"
                        )}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Plan"
                        type="text"
                        defaultValue={`${ficha.PLAN}${ficha.SUB_PLAN}`}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Obra Social"
                        type="text"
                        defaultValue={ficha.OBRA_SOC}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Fecha Alta"
                        type="text"
                        defaultValue={moment(ficha.ALTA).format("DD/MM/YYYY")}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Fecha Vigencia"
                        type="text"
                        defaultValue={moment(ficha.VIGENCIA).format(
                          "DD/MM/YYYY"
                        )}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Telefono"
                        type="text"
                        value={ficha.TELEFONO}
                        readOnly
                      />
                    </div>
                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Movil"
                        type="text"
                        value={ficha.MOVIL}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Cuota Mensual"
                        type="text"
                        value={`$${cuotaMensual}`}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Calle"
                        type="text"
                        defaultValue={ficha.CALLE}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Nro Calle"
                        type="text"
                        defaultValue={ficha.NRO_CALLE}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Barrio"
                        type="text"
                        defaultValue={ficha.BARRIO}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Localidad"
                        type="text"
                        defaultValue={ficha.LOCALIDAD}
                        readOnly
                      />
                    </div>

                    <div className="relative w-full mb-6 group">
                      <Input
                        size="lg"
                        label="Mail"
                        type="text"
                        defaultValue={ficha.MAIL}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-5 mb-5 border-t border-gray-200" />

              {adhs.length === 0 ? (
                <Alert
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  Este socio no posee adherentes registrados.
                </Alert>
              ) : (
                <>

                  <Alert
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                    color="blue"
                  >
                    Selecciona el/los adherentes que deseas solicitar baja, luego presiona el botón "Solicitar Baja" para imprimi y confirmar la baja de los mismos.
                    El adherente que no puedas seleccionar es por que ya se le emitio una solicitud de baja, solo queda que el operador la impacte en el FOX.
                  </Alert>

                  <div className="p-4 border border-gray-200 rounded-lg mt-6 bg-white shadow-sm">
                    <Typography variant="h5" color="blue-gray" className="mb-6">
                      Adherentes
                    </Typography>

                    <ListadoAdherentes
                      listado={adhs}
                      maestro={ficha}
                      onRefresh={() => traerAdhs && traerAdhs(ficha.EMPRESA === "WERCHOW" ? "adh" : "adhm", ficha.CONTRATO)}
                    />
                  </div>
                </>
              )}
            </div>
            <hr className="mt-5 mb-5 border-t border-gray-200" />

            {allPagos.length === 0 ? (
              <Alert
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Este socio no posee pagos registrados.
              </Alert>
            ) : (
              <div className="p-4 border border-gray-200 rounded-lg mt-6 bg-white shadow-sm">
                <Typography variant="h5" color="blue-gray" className="mb-6">
                  Pagos
                </Typography>

                <ListadoPagos listado={allPagos} />
              </div>
            )}

            <hr className="mt-5 mb-5 border-t border-gray-200" />

            <div className="p-4 border border-gray-200 rounded-lg mt-6 bg-white shadow-sm">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Solicitud
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleSoli} />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Condiciones
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleCondi} />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Rehabilitacion
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleRehab} />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Notificacion
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleNoti} />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Recibo (FRENTE)
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleRecF} />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <Typography variant="h5" color="blue-gray" className="mb-6">
                    Subir Recibo (DORSO)
                  </Typography>

                  <FormSubirArchivos file={file} handleUpload={handleRecD} />
                </div>
              </div>
            </div>

            <hr className="mt-5 mb-5 border-t border-gray-200" />

            <div className="p-4 border border-gray-200 rounded-lg mt-6 bg-white shadow-sm">
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Archivos
              </Typography>

              <div className="grid md:grid-cols-3 md:gap-6">
                {archivos.length > 0 ? (
                  <>
                    {archivos.map((a, index) => (
                      <div
                        key={index}
                        className="relative z-0 w-full mb-6 group"
                      >
                        <Archivo
                          url={"api/archivos/legajovirtual/archivo/"}
                          urlDesc={
                            "api/archivos/legajovirtual/descargararchivo/"
                          }
                          archivo={a.archivo}
                          eliminarArchivos={eliminarArchivos}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <Alert
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    El legajo no contiene archivos.
                  </Alert>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                className="ml-1"
                color="red"
                onClick={() => {
                  Router.reload();
                }}
              >
                Cerrar
              </Button>
            </div>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormLegajoSocio;
