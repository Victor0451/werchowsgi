import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import BuscarAdherentes from "./BuscarAdherentes";

const ModalBuscarAdherentes = ({
  nombreBoton = "Buscar",
  endpoint,
  source,
  onSelect,
}) => {
  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(null);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // When BuscarAdherentes calls onSelect, we receive the item here and show confirmation
  const handleSelect = (item) => {
    setPending(item);
    setConfirmOpen(true);
  };

  const finalizeSelection = () => {
    if (onSelect && pending) onSelect(pending);
    setConfirmOpen(false);
    setPending(null);
    setOpen(false);
  };

  const cancelSelection = () => {
    setConfirmOpen(false);
    setPending(null);
  };

  return (
    <>
      <Button onClick={handleOpen}>{nombreBoton}</Button>

      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader>Buscar Adherentes - {nombreBoton}</DialogHeader>
        <DialogBody divider>
          <BuscarAdherentes
            endpoint={endpoint}
            source={source}
            onSelect={handleSelect}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen}>
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Confirmación antes de notificar al parent */}
      <Dialog open={confirmOpen} handler={() => setConfirmOpen(!confirmOpen)} size="sm">
        <DialogHeader>Confirmar selección</DialogHeader>
        <DialogBody>
          {pending ? (
            <div>
              <Typography variant="small" color="gray">
                Está por seleccionar al siguiente adherente:
              </Typography>
              <div className="mt-3">
                <Typography className="font-bold">
                  {pending.APELLIDOS}, {pending.NOMBRES}
                </Typography>
                <Typography color="gray">DNI: {pending.NRO_DOC}</Typography>
                <Typography color="gray">Contrato: {pending.CONTRATO}</Typography>
              </div>
            </div>
          ) : null}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={cancelSelection}>
            Cancelar
          </Button>
          <Button color="green" onClick={finalizeSelection}>
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalBuscarAdherentes;
