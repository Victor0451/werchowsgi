import React from "react";
import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import Notificacion from "./Notificacion";
import ReactToPrint from "react-to-print";
import {
    PrinterIcon
} from "@heroicons/react/24/outline";

export default function ModalImpNotificaciones({
    casos,
    usu,
    f
}) {
    let componentRef = React.createRef();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);


    return (
        <Fragment>

            {
                f === "T" ? (
                    <Button size="sm" onClick={handleOpen}>
                        Imp. Notificaciones
                    </Button>
                ) :
                    f === 'U' ? (
                        <Button size="sm" color="yellow" onClick={handleOpen} className="ml-1">
                            <PrinterIcon strokeWidth={2} className="h-3 w-3" />
                        </Button>
                    ) : null
            }


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
                <DialogBody divider className="h-[45vw] overflow-scroll">

                    {f === 'U' ? (
                        <div id="todo" ref={(el) => (componentRef = el)}>
                            <Notificacion caso={casos} userData={usu.usuario} />
                        </div>

                    ) : f === 'T' ?
                        (
                            <div id="todo" ref={(el) => (componentRef = el)}>
                                {casos.map((caso) => (
                                    <>
                                        <Notificacion caso={caso} userData={usu.usuario} />
                                    </>
                                ))}
                            </div>
                        ) : null}


                </DialogBody>
                <DialogFooter>

                    <Button
                        variant="gradient"
                        color="green"

                    >
                        <ReactToPrint
                            trigger={() => (
                                <a href="#" className="btn btn-primary">
                                    imprimir{" "}
                                </a>
                            )}
                            content={() => componentRef}
                        />
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