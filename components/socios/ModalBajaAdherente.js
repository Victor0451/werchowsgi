import React, { useState, Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import FormBajaAdherente from "./FormBajaAdherente";

const ModalBajaAdherente = ({ adherentes, maestro, onBajaConfirmada, open, setOpen }) => {
    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>
            <Dialog
                open={open}
                handler={handleOpen}
                size="xxl"
                className="overflow-y-auto max-h-[90vh]"
            >
                <DialogBody className="p-0">
                    <FormBajaAdherente
                        adherentes={adherentes}
                        maestro={maestro}
                        onBajaConfirmada={onBajaConfirmada}
                        onClose={() => setOpen(false)}
                    />
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setOpen(false)}>
                        <span>Cerrar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
};

export default ModalBajaAdherente;
