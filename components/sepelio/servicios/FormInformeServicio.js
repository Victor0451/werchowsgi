import React, { use } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import moment from "moment";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import ListadoTareas from "./ListadoTareas";
import ListadoGastos from "./ListadoGastos";
import GastoLuto from "@/components/Layouts/GastoLuto";

const FormInformeServicio = ({
  servicio,
  operadores,
  tareas,
  tarReg,
  handleChange,
  regTarea,
  errores,
  inicioRef,
  finRef,
  delTarea,
  delGasto,
  calcTotal,
  f,
  gastos,
  importeRef,
  gasReg,
  regGastos,
  gl,
  liqItem,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">
          <u>Servicio N°</u>: {servicio.idservicio} - {servicio.apellido},{" "}
          {servicio.nombre}
        </Typography>

        <GastoLuto
          plan={`${servicio.PLAN}${servicio.SUB_PLAN}`}
          alta={servicio.ALTA}
          cantadh={0}
          gl={gl}
        />

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
        <hr className="border-2 mt-6 mb-6" />
        <div className="p-4 border-2 rounded-lg mt-6">
          {f && f === "vista" ? null : (
            <>
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Tareas Realizadas en Servicio
              </Typography>

              <div className="grid md:grid-cols-4 md:gap-6">
                <div className="relative w-full mb-6 group">
                  <Select
                    label="Operador"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    onChange={(value) => {
                      handleChange("operador", value);
                    }}
                  >
                    {operadores.map((f, index) => (
                      <Option key={index} value={f.operador}>
                        {f.operador}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Select
                    label="Tareas"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    onChange={(value) => {
                      handleChange("tarea", value);
                    }}
                  >
                    {tareas.map((f, index) => (
                      <Option key={index} value={f.trabajo}>
                        {f.trabajo}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="relative w-full mb-6 group">
                  <Input
                    type="datetime-local"
                    label="Inicio"
                    inputRef={inicioRef}
                  />
                </div>

                <div className="relative w-full mb-6 group">
                  <Input type="datetime-local" label="Fin" inputRef={finRef} />
                </div>
                <div className="relative w-full mb-6 group">
                  <Checkbox
                    label="En Horario Laboral"
                    ripple={true}
                    onChange={(e) => handleChange("check", e)}
                  />
                </div>
                <div className="relative w-full mb-6 group">
                  <Checkbox
                    label="Feriado"
                    ripple={true}
                    onChange={(e) => handleChange("check feriado", e)}
                  />
                </div>
              </div>
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
                className="mt-5 mb-5"
              >
                Por defecto el sistema liquida la tarea contemplando que el
                operador NO ESTA EN HORARIO LABORAL. En caso contrario, marcar
                el check con la leyenda "En Horario Laboral".
              </Alert>
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
                className="mt-5 mb-5"
              >
                Por defecto el sistema liquida la tarea contemplando que el dia
                hábil de la semana NO ES UN FERIADO. En caso contrario, marcar
                el check con la leyenda "Feriado".
              </Alert>

              <div className="mt-4 flex justify-end mb-6 group">
                <Button onClick={regTarea}>Registrar</Button>
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

              <hr className="border-2 mt-6 mb-6" />
            </>
          )}

          <ListadoTareas
            listado={tarReg}
            delTarea={delTarea}
            calcTotal={calcTotal}
            f={f}
            liqItem={liqItem}
          />
        </div>
        <hr className="border-2 mt-6 mb-6" />

        <div className="p-4 border-2 rounded-lg mt-6">
          {f && f === "vista" ? null : (
            <>
              <Typography variant="h5" color="blue-gray" className="mb-6">
                Gastos Realizados en Servicio
              </Typography>

              <div className="grid md:grid-cols-3 md:gap-6">
                <div className="relative w-full mb-6 group">
                  <Select
                    label="Operador"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    onChange={(value) => {
                      handleChange("operador", value);
                    }}
                  >
                    {operadores.map((f, index) => (
                      <Option key={index} value={f.operador}>
                        {f.operador}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="relative w-full mb-6 group">
                  <Select
                    label="Gastos"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    onChange={(value) => {
                      handleChange("gasto", value);
                    }}
                  >
                    {gastos.map((f, index) => (
                      <Option key={index} value={f.gastos}>
                        {f.gastos}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="relative w-full mb-6 group">
                  <Input type="number" label="Monto" inputRef={importeRef} />
                </div>
              </div>
              <div className="relative w-full mb-6 group">
                <Textarea
                  rows={5}
                  label="Observacion"
                  onChange={(e) => handleChange("gasto obse", e.target.value)}
                />
              </div>

              <div className="mt-4 flex justify-end mb-6 group">
                <Button onClick={regGastos}>Registrar</Button>
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

              <hr className="border-2 mt-6 mb-6" />
            </>
          )}

          <ListadoGastos
            listado={gasReg}
            calcTotal={calcTotal}
            f={f}
            delGasto={delGasto}
            liqItem={liqItem}
          />
        </div>

        <div class="text-center py-4 lg:px-4">
          <div
            class="p-2 bg-blue-400 items-center text-white leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              {" "}
              ESTE SERVICIO GENERO UN GASTO TOTAL DE: $
              {parseFloat(calcTotal(tarReg, "t")) +
                parseFloat(calcTotal(gasReg, "g"))}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormInformeServicio;
