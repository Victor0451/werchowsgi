import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { FormAccionesTemp } from "./FormAccionesTemp";

export default function ModalAccionesTemp({
  row,
  RegistrarGestion,
  handleChange,
  errores,
  f,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button size="sm" onClick={handleOpen}>
        <ListBulletIcon strokeWidth={2} className="h-3 w-3" />
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
        <DialogHeader>Detalle Caso</DialogHeader>
       

        <DialogBody divider className="h-[40vw] overflow-scroll">
        <div className="flex justify-end  mb-2">
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              RegistrarGestion(row);
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
         
          <FormAccionesTemp
            row={row}
            RegistrarGestion={RegistrarGestion}
            handleChange={handleChange}
            errores={errores}
            f={f}
          />
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
