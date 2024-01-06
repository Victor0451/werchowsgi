import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Alert,
  Input,
  Option,
  Textarea,
  Select,
} from "@material-tailwind/react";
import { DocumentIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Select2 from "react-select";

export default function ModalPreGasto({
  facturas,
  conceptos,
  proveedores,
  servicios,
  operadores,
  handleChange,
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  montoIVARef,
  retIIBBRef,
  retggciasRef,
  percIVARef,
  totalRef,
  nuevoGasto,
  errores,
  alertas,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        color="green"
        onClick={() => {
          handleOpen();
        }}
      >
        Generar Gastos
      </Button>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xl"
      >
        <DialogHeader>Generar Gastos</DialogHeader>
        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
          <div className="p-4 border-2 rounded-lg mt-6 ">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Datos del Gasto
            </Typography>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Select
                  defaultValue={""}
                  label="Elige la Empresa"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                  onChange={(value) => {
                    handleChange("empresa", value);
                  }}
                >
                  <Option value={"WERCHOW S.A."}>WERCHOW S.A.</Option>
                  <Option value={"WERCHOW S.R.L."}>WERCHOW S.R.L.</Option>
                </Select>
              </div>

              <div className="relative w-full mb-6 group">
                <Select2
                  placeholder="Tipo Factura"
                  options={facturas.map((i) => ({
                    label: `${i.tipo_factura}`,
                    value: `${i.tipo_factura}`,
                  }))}
                  onChange={(value) => {
                    handleChange("tipofactura", value);
                  }}
                ></Select2>
              </div>
              <div className="relative w-full mb-6 group">
                <Select2
                  placeholder="Proveedores"
                  options={proveedores.map((i) => ({
                    label: `${i.razon}`,
                    value: `${i.razon}`,
                  }))}
                  onChange={(value) => {
                    handleChange("proveedores", value);
                  }}
                ></Select2>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Fecha"
                  type="date"
                  inputRef={fechaRef}
                />
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Pto Venta"
                  type="number"
                  defaultValue={0}
                  inputRef={ptoVentaRef}
                />
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="N° Factura"
                  type="number"
                  defaultValue={0}
                  inputRef={nFacturaRef}
                />
              </div>

              <div className="relative w-full mb-6 group">
                <Select
                  label="Medio de Pago"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                  onChange={(value) => {
                    handleChange("mediopago", value);
                  }}
                >
                  <Option value={"Contado"}>Contado</Option>
                  <Option value={"A Cuenta"}>A Cuenta</Option>
                  <Option value={"Banco"}>Banco</Option>
                  <Option value={"Tarjeta"}>Tarjeta</Option>
                </Select>
              </div>

              <div className="relative w-full mb-6 group">
                <Select2
                  placeholder="Conceptos"
                  options={conceptos.map((i) => ({
                    label: `${i.concepto}`,
                    value: `${i.concepto}`,
                  }))}
                  onChange={(value) => {
                    handleChange("concepto", value);
                  }}
                ></Select2>
              </div>

              <div className="relative w-full mb-6 group">
                <Select
                  label="Tipo I.V.A."
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                  onChange={(value) => {
                    handleChange("iva", value);
                  }}
                >
                  <Option value={"IVA 21%"}>IVA 21%</Option>
                  <Option value={"IVA 10,5%"}>IVA 10,5%</Option>
                </Select>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Monto Con I.V.A."
                  type="number"
                  defaultValue={0}
                  inputRef={montoIVARef}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Ret. IIBB"
                  type="number"
                  defaultValue={0}
                  inputRef={retIIBBRef}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Ret. Ganancias"
                  type="number"
                  defaultValue={0}
                  inputRef={retggciasRef}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Perc. I.V.A."
                  type="number"
                  defaultValue={0}
                  inputRef={percIVARef}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Total"
                  type="number"
                  defaultValue={0}
                  inputRef={totalRef}
                />
              </div>

              <div className="relative w-full mb-6 group">
                <Select2
                  placeholder="Operador"
                  options={operadores.map((i) => ({
                    label: `${i.operador}`,
                    value: `${i.operador}`,
                  }))}
                  onChange={(value) => {
                    handleChange("operador", value);
                  }}
                ></Select2>
              </div>

              <div className="relative w-full mb-6 group">
                <Select2
                  placeholder="Servicios"
                  options={servicios.map((i) => ({
                    label: `${i.apellido}, ${i.nombre}`,
                    value: `${i.idservicio}`,
                  }))}
                  onChange={(value) => {
                    handleChange("servicio", value);
                  }}
                ></Select2>
              </div>
            </div>

            <div className="relative w-full mb-6 group">
              <Textarea
                rows={5}
                label="Detalle"
                onChange={(value) => {
                  handleChange("detalle", value);
                }}
              />
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

            {alertas ? (
              <Alert
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {alertas}
              </Alert>
            ) : null}
          </div>
          <div className="flex justify-end mt-6">
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                nuevoGasto();
              }}
            >
              <span>Registrar</span>
            </Button>

            <Button
              variant="gradient"
              color="red"
              onClick={handleOpen}
              className="ml-1"
            >
              <span>Cerrar</span>
            </Button>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </Fragment>
  );
}
