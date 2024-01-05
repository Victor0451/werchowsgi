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
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { DocumentIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Select2 from "react-select";

export default function ModalPreIngreso({
  facturas,
  conceptos,
  handleChange,
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  totalRef,
  errores,
  nuevoIngreso,
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
        Generar Ingresos
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
        <DialogHeader>Generar Ingresos</DialogHeader>
        <DialogBody divider={true} className="h-[45vw] overflow-scroll">
          <div className="p-4 border-2 rounded-lg mt-6 ">
            <Typography variant="h5" color="blue-gray" className="mb-6">
              Datos del Ingreso
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

              <div className="relative z-0 w-full mb-6 group">
                <Input
                  size="md"
                  label="Monto"
                  type="number"
                  defaultValue={0}
                  inputRef={totalRef}
                />
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
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              nuevoIngreso();
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
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
