import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Alert,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const ModalModifImp = ({
  row,
  nuImpor,
  updateImporte,
  alertas,
  errores,
  exito,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <PencilSquareIcon
        color="orange"
        className="butlist mt-px h-6 w-6"
        onClick={handleOpen}
      />
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Modificar Importe</DialogHeader>
        <DialogBody>
          <div className="border-2 p-4 rounded-xl">
            <Typography variant="h5" color="blue-gray">
              Orden N°: {row.ORDEN}
            </Typography>

            <div className="mt-10 grid md:grid-cols-2 md:gap-6">
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Importe Actual"
                  type="text"
                  value={`$${row.IMP_LIQ}`}
                />
              </div>
              <div className="relative w-full mb-6 group">
                <Input
                  size="md"
                  label="Nuevo Importe"
                  type="number"
                  inputRef={nuImpor}
                />
              </div>
            </div>

            {alertas ? (
              <Alert
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {alertas}
              </Alert>
            ) : null}

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

            {exito ? (
              <Alert
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                {exito}
              </Alert>
            ) : null}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => updateImporte(row.iduso, row.ORDEN, row.SERVICIO)}
            className="mr-1"
          >
            <span>Modificar</span>
          </Button>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Cancelar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalModifImp;
