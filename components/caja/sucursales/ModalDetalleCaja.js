import React, { useMemo, Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { EyeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import ListadoMovimiento from "./ListadoMovimiento";

export default function ModalDetalleCaja({
  row,
  traerMovimientos,
  totales,
  ingreso,
  egreso,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <EyeIcon
        color="#0288d1"
        className="butlist mt-px h-7 w-7"
        onClick={() => {
          handleOpen();
          traerMovimientos(row.idcaja);
        }}
      />

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xl"
      >
        <DialogHeader>
          Detalle Caja N°: {row.idcaja} -{" "}
          {row.empresa === "WSRL" ? (
            <>Werchow S.R.L.</>
          ) : row.empresa === "WSA" ? (
            <>Werchow S.A.</>
          ) : row.empresa === "M" ? (
            <>Mutual San Valentin</>
          ) : null}
        </DialogHeader>
        <DialogBody divider className="h-[45vw] overflow-scroll">
          <div className="mt-5 border-2 rounded-xl p-4">
            <Typography variant="h5">Caja</Typography>

            <div className=" flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0">
                <Alert
                  className="mt-5 mb-5"
                  color="blue"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong>
                    {" "}
                    SALDO: ${totales(ingreso, "I") - totales(egreso, "E")}
                  </strong>
                </Alert>
              </div>

              <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
                <Alert
                  className="mt-5 mb-5"
                  color="green"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong>TOTAL INGRESOS: ${totales(ingreso, "I")}</strong>
                </Alert>
              </div>

              <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 ">
                <Alert
                  className="mt-5 mb-5"
                  color="red"
                  icon={
                    <InformationCircleIcon
                      strokeWidth={2}
                      className="h-6 w-6"
                    />
                  }
                >
                  <strong>TOTAL EGRESOS: ${totales(egreso, "E")}</strong>
                </Alert>
              </div>

              <Typography variant="h5" className="mt-5">
                Detalle Ingresos
              </Typography>

              <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
                <ListadoMovimiento listado={ingreso} f="vista" />
              </div>

              <Typography variant="h5" className="mt-5">
                Detalle Egresos
              </Typography>

              <div className="w-full md:w-full px-3 mt-6 mb-6 md:mb-0 border-2 rounded-xl p-2">
                <ListadoMovimiento listado={egreso} f="vista" />
              </div>
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
