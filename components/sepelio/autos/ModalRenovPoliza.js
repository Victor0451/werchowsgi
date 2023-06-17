import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Alert,
    Input
} from "@material-tailwind/react";
import {
    DocumentIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";


export default function ModalRenovPoliza({
    row,
    empresaRef,
    nroPolizaRef,
    vencimientoRef,
    coberturaRef,
    errores,
    renovPoliza,
    alertas
}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>

            <DocumentIcon color='#0288d1' className="butlist mt-px h-6 w-6" onClick={handleOpen} />

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size="xl"

            >
                <DialogHeader>Renovar Poliza</DialogHeader>
                <DialogBody divider={true} className="h-[45vw] overflow-scroll">

                    <Alert
                        icon={
                            <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        }
                    >
                        <Typography className="font-medium">Datos de la poliza vigente:</Typography>
                        <ul class="mt-2 ml-2 list-disc list-inside">
                            <li><u>Empresa</u>: {row.empresa}</li>
                            <li><u>N° Poliza</u>: {row.nro_poliza}</li>
                            <li><u>Cobertura</u>: {row.cobertura}</li>
                            <li><u>Vencimiento</u>: {moment(row.vencimiento).format('DD/MM/YYYY')}</li>
                        </ul>
                    </Alert>

                    <div className='p-4 border-2 rounded-lg mt-6 '>

                        <Typography variant="h5" color="blue-gray" className="mb-6">
                            Datos de la Poliza
                        </Typography>

                        <div className="grid md:grid-cols-4 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Input size="md" label="Empresa" type="text" inputRef={empresaRef} />

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input size="md" label="N° Poliza" type="text" inputRef={nroPolizaRef} />

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input size="md" label="Vencimiento" type="date" inputRef={vencimientoRef} />

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input size="md" label="Cobertura" type="text" inputRef={coberturaRef} />

                            </div>
                        </div>
                    </div>

                    {errores ? (

                        <Alert
                            color="red"
                            className="mt-5"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {errores}
                        </Alert>

                    ) : null}

                    {alertas ? (

                        <Alert
                            color="green"
                            className="mt-5"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {alertas}
                        </Alert>

                    ) : null}

                </DialogBody>
                <DialogFooter>

                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                            renovPoliza(row)
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

