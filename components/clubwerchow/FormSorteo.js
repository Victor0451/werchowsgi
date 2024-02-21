import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
  Checkbox,
  List,
  ListItem,
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import Ruleta from "../Layouts/Ruleta";
import { toast } from "react-toastify";

const FormSorteo = ({
  participantes,
  selec,
  ganadores,
  buscarGanador,
  eliminarGanador,
  eliminarGanadores,
  imprimir,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Club Werchow - Sorteos</Typography>

        <div className="p-4 border-2 rounded-lg mt-6">
          <Typography variant="h6" color="blue-gray" className="mb-6">
            Para poder participar de los sorteos del Club Werchow entra en: {""}
            <a href="https://clubwerchow.com" target="_blank">
              https://clubwerchow.com
            </a>
          </Typography>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Ruleta fn={buscarGanador} />
            </div>
            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              {selec ? (
                <>
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
                    El ganador es: {selec.participante}
                  </Alert>
                </>
              ) : null}

              {/* IMAGEN DE PREMIOS */}

              {/* <img src="/img/premios.jpg" className="premios " /> */}

              {/* ------------------------  */}
            </div>
          </div>

          <hr className="border-2 mt-5 mb-5" />

          <div className="flex flex-wrap -mx-3 mb-12">
            <div className="w-full md:w-1/2 px-3  mt-12 mb-6 md:mb-0">
              <Typography variant="h5" color="blue-gray" className="">
                Listado de Participantes
              </Typography>
              <Typography color="gray" className="font-normal mb-6">
                <u>Total</u>: {participantes.length}
              </Typography>

              <Card className="border-2 rounded-xl">
                <List className="verticalScroll">
                  {participantes.map((p, index) => (
                    <ListItem key={index}>
                      {`${index + 1}) ${p.participante} - ${p.dni}`}
                    </ListItem>
                  ))}
                </List>
              </Card>
            </div>

            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Typography variant="h5" color="blue-gray" className="">
                    Ganadores
                  </Typography>
                  <Typography color="gray" className="font-normal mb-6">
                    <u>Total</u>: {ganadores.length}
                  </Typography>
                </div>

                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Button color="red" onClick={eliminarGanadores}>
                    Eliminar{" "}
                  </Button>
                </div>

                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                  <Button color="blue" onClick={imprimir}>
                    Imprimir
                  </Button>
                </div>
              </div>

              <Card className="border-2 rounded-xl">
                <List id="win" className="verticalScroll">
                  {ganadores.map((p, index) => (
                    <ListItem
                      key={index}
                      onClick={() => {
                        eliminarGanador(p);
                      }}
                    >
                      {`${index + 1}) ${p.participante} - ${p.dni}`}
                    </ListItem>
                  ))}
                </List>
              </Card>

              <Alert
                className="mt-5 mb-5"
                color="blue"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                En caso de querer eliminar un ganador, solo debes hacer click en
                su nombre
              </Alert>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FormSorteo;
