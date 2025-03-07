import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Alert,
  Input,
} from "@material-tailwind/react";
import { DocumentIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import ListadoBeneficios from "./ListadoBeneficios";

export default function ModalBeneficio({
  errores,
  regBeneficio,
  beneficioRef,
  observacionRef,
  ficha,
  traerBeneficios,
  beneficios,
}) {
  let componentRef = React.createRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        className=" bg-gray-900"
        size="sm"
        onClick={() => {
          handleOpen();
          traerBeneficios(ficha.CONTRATO);
        }}
      >
        Registrar Beneficios
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
        <DialogHeader>Registro de Beneficios</DialogHeader>
        <DialogBody divider={true} className="h-[35vw] overflow-scroll">
          <Typography variant="h6" color="blue-gray" className="mb-6">
            Detalle del Beneficio Otorgado
          </Typography>
          <div className="mt-5 border-2 rounded-xl p-4 ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="Cuota Actual"
                  type="number"
                  value={ficha.CONTRATO}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="DNI"
                  type="text"
                  value={ficha.NRO_DOC}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="Beneficiario"
                  type="text"
                  value={`${ficha.APELLIDOS}, ${ficha.NOMBRES}`}
                  readOnly
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="Beneficio"
                  type="text"
                  inputRef={beneficioRef}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                <Input
                  size="md"
                  label="Observacion"
                  type="text"
                  inputRef={observacionRef}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={regBeneficio}>Registrar</Button>
            </div>
          </div>
          <hr className="mt-5 mb-5 border-2" />

          <Typography variant="h6" color="blue-gray" className="mb-6">
            Historial de Beneficios
          </Typography>

          <div className="border-2 rounded-xl p-4">
            <ListadoBeneficios listado={beneficios} />
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
