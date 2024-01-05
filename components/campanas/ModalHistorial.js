import React, { useState, Fragment } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert,
} from "@material-tailwind/react";
import {
  ArchiveBoxIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import ListadoBonificaciones from "./ListadoBonificaciones";
import ListadoAcciones from "./ListadoAcciones";

export default function ModalHistorial({
  row,
  historialBonif,
  historial,
  historialAcciones,
  historialAcc,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        size="sm"
        color="gray"
        onClick={() => {
          handleOpen();
          historialBonif(row.contrato);
          historialAcciones(row.contrato);
        }}
        className="ml-1"
      >
        <ArchiveBoxIcon strokeWidth={2} className="h-3 w-3" />
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
        <DialogHeader>Historial de Acciones y Bonificaciones</DialogHeader>
        <DialogBody divider className="h-[45vw] overflow-scroll">
          <div className="p-4 border-2 rounded-xl  mt-10 grid md:grid-cols-1 md:gap-6">
            <div className="relative w-full mb-6 group">
              <ListadoAcciones listado={historialAcc} />
            </div>
          </div>

          <div className="p-4 border-2 rounded-xl  mt-10 grid md:grid-cols-1 md:gap-6">
            <div className="relative w-full mb-6 group">
              <ListadoBonificaciones listado={historial} />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
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
