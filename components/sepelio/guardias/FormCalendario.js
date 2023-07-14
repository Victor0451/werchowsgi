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
} from "@material-tailwind/react";
import Link from "next/link";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import es from "@fullcalendar/core/locales/es";

const FormCalendario = ({ plani }) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">
          Calendario de Planificaciones de Guardia
        </Typography>

        <div className="mt-5 mb-5 border-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Opciones
          </Typography>

          <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
            <Link href={"/sepelio/guardias/planificacion"}>
              <Button color="blue">Registrar Nueva Guardia</Button>
            </Link>
          </div>
        </div>

        <div className="mt-5 mb-5 border-2 p-4">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridWeek"
            selectMirror={true}
            dayMaxEvents={true}
            events={plani}
            locale={es}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FormCalendario;
