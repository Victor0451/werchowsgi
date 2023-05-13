import React from "react";
import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import Notificacion2 from "./Notificacion2";

export default function ModalImpNotificaciones({
    casos,
    usu
}) {
    let componentRef = React.createRef();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>

            <Button size="sm" onClick={handleOpen}>
                Imp. Notificaciones
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
                <DialogHeader>Notificaciones</DialogHeader>
                <DialogBody divider>

                    <div id="todo" ref={(el) => (componentRef = el)}>
                        {casos.map((caso) => (
                            <>
                                <Notificacion2 caso={caso} userData={usu.ususario} />
                            </>
                        ))}
                    </div>

                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                            RegistrarGestion(row)
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