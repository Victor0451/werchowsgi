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
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import es from "@fullcalendar/core/locales/es";
import FormEvents from "./FormEvents";
import FormNewEvent from "./FormNewEvent";

const FormCalendar = ({
  edit,
  events,
  handleDateSelect,
  selEvent,
  editEnable,
  delet,
  deleteEnable,
  eventSelected,
  cerrarEvento,
  reg,
  handleChange,
  operadores,
  datosEv,
  postEvent,
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody className="rounded-none">
        <Typography variant="h2">Registro de tareas</Typography>

        <div className="mt-5 mb-5 border-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Opciones
          </Typography>

          <div className=" mt-4 grid gap-6 mb-6 md:grid-cols-5">
            <Button
              color="orange"
              onClick={() => {
                editEnable();
              }}
            >
              Editar
            </Button>
            <Button
              color="red"
              onClick={() => {
                deleteEnable();
              }}
            >
              Eliminar
            </Button>
          </div>
        </div>

        {edit === true ? (
          <>
            <Alert
              className="mt-5 mb-5"
              color="orange"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              Activaste el modo edicion, ahora puedes editar la fecha y hora de
              tus eventos registrados.
            </Alert>

            <Alert
              className="mt-5 mb-5"
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              Puedes cambiar la fecha y hora del evento simplemente
              arrastrandolo y/o expandiendolo. Para registrar la modificacion
              solo deberas hacer click en el evento y se te notificara cuando se
              haya realizado exitosamente.
            </Alert>
          </>
        ) : null}

        {delet === true ? (
          <>
            <Alert
              className="mt-5 mb-5"
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              Activaste el modo eliminacion, ahora puedes editar la fecha y hora
              de tus eventos registrados.
            </Alert>

            <Alert
              className="mt-5 mb-5"
              color="blue"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              Puedes cambiar la fecha y hora del evento simplemente
              arrastrandolo y/o expandiendolo. Para registrar la modificacion
              solo deberas hacer click en el evento y se te notificara cuando se
              haya realizado exitosamente.
            </Alert>
          </>
        ) : null}

        {eventSelected.length === 0 && reg === false ? (
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridWeek"
            editable={edit}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            events={events}
            locale={es}
            eventClick={selEvent}
          />
        ) : eventSelected.length !== 0 ? (
          <FormEvents eventos={eventSelected} cerrarEvento={cerrarEvento} />
        ) : reg === true ? (
          <>
            <FormNewEvent
              cerrarEvento={cerrarEvento}
              handleChange={handleChange}
              operadores={operadores}
              datosEv={datosEv}
              postEvent={postEvent}
            />
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormCalendar;
