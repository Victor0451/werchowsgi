import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import FormCalendar from "@/components/sucursales/tareas/FormCalendar";

function tareas(props) {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const [events, saveEvents] = useState([]);
  const [datosEv, guardarDatosEv] = useState([]);
  const [eventSelected, saveEventSelected] = useState([]);
  const [reg, saveReg] = useState(false);
  const [edit, saveEdit] = useState(false);
  const [delet, saveDelete] = useState(false);
  const [tareaSel, guardarTareaSel] = useState("");
  const [opSel, guardarOpSel] = useState("");
  const [prioSel, guardarPiroSel] = useState("");
  const [sucSel, guardarSucSel] = useState("");
  const [operadores, guardarOperadores] = useState([]);

  const handleChange = (f, value) => {
    if (f === "tarea") {
      guardarTareaSel(value.target.value);
    } else if (f === "operador") {
      guardarOpSel(value);
    } else if (f === "prioridad") {
      guardarPiroSel(value);
    } else if (f === "sucursal") {
      guardarSucSel(value);
    }
  };

  // FUNCIONES CALENDARIO

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    saveReg(true);

    let datosEv = {
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    };

    if (datosEv.allDay === false) {
      datosEv.allDay = 0;
    } else if (datosEv.allDay === true) {
      datosEv.allDay = 1;
    }

    guardarDatosEv(datosEv);
  };

  const editEnable = () => {
    if (edit === true) {
      saveEdit(false);
      toast.info("Modo edicion desactivado", "ATENCION");
    } else if (edit === false) {
      saveEdit(true);
      toast.info("Modo edicion activado", "ATENCION");
    }
  };

  const deleteEnable = () => {
    if (delet === true) {
      saveDelete(false);
      toast.info("Modo eliminacion desactivado", "ATENCION");
    } else if (delet === false) {
      saveDelete(true);
      toast.info("Modo eliminacion activado", "ATENCION");
    }
  };

  const selEvent = (eventInfo) => {
    console.log(eventInfo.event.extendedProps.idevents);
    if (edit === true && delet === false) {
      let evE = {
        id: eventInfo.event.extendedProps.idevents,
        title: eventInfo.event.title,
        start: eventInfo.event.start,
        end: eventInfo.event.end,
        allDay: eventInfo.event.allDay,
        priority: eventInfo.event.extendedProps.priority,
        f: "editar evento",
        ft: "Modificacion",
      };

      if (evE.allDay === false) {
        evE.allDay = 0;
      } else if (evE.allDay === true) {
        evE.allDay = 1;
      }

      putEvent(evE);
    } else if (edit === false && delet === false) {
      saveEventSelected(eventInfo.event);
    } else if (edit === false && delet === true) {
      deleteEvents(eventInfo.event.extendedProps.idevents);
    }
  };

  const cerrarEvento = () => {
    saveEventSelected([]);
    saveReg(false);
  };

  // --------------------------------------

  // APIS

  const postEvent = async () => {
    let ev = {
      title: `${tareaSel} - ${sucSel}`,
      start: moment(datosEv.start).format("YYYY-MM-DD HH:mm"),
      end: moment(datosEv.end).format("YYYY-MM-DD HH:mm"),
      allDay: datosEv.allDay,
      priority: prioSel,
      sucursal: sucSel,
      operador: usu.usuario,
      f: "nueva tarea",
      ft: "Registro",
    };

    if (tareaSel === "") {
      toast.info("Debes ingresar la tarea a realizar");
    } else if (prioSel === "") {
      toast.info("Debes seleccionar la prioridad de la tarea");
    } else {
      saveEvents([...events, ev]);

      await axios
        .post("/api/sucursales/tareas", ev)
        .then((res) => {
          if (res.status === 200) {
            toast.success("El evento se registro correctamente");
            saveReg(false);

            mandarMail(ev);
          }
        })
        .catch((error) => {
          console.log(error);

          toast.error("Ocurrio un error al registrar el evento");
        });
    }
  };

  const getEvents = async () => {
    await axios
      .get("/api/sucursales/tareas", {
        params: {
          f: "traer tareas",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          saveEvents(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay tareas registradas");
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al cargar los eventos", "ATENCION");
      });

    await axios
      .get("/api/sepelio/caja", {
        params: {
          f: "traer operadores",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarOperadores(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay operadores registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de operadores");
      });
  };

  const putEvent = async (data) => {
    await axios
      .put("/api/sucursales/tareas", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("El evento se actualizo correctamente");
          mandarMail(data);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al registrar el evento");
      });
  };

  const deleteEvents = async (id) => {
    await axios
      .delete(`/api/sucursales/tareas`, {
        params: {
          id: id,
          f: "eliminar tarea",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Evento eliminado correctamente");

          let index = events
            .map(function (item) {
              return item.id;
            })
            .indexOf(id);

          let ev = events.splice(index, 1);

          saveEvents([...events, ev]);

          getEvents();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al eliminar el evento");
      });
  };

  const mandarMail = (array) => {
    fetch("/api/mail/sucursales/mailtareas", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.info("Se envio un email con la notificacion de la novedad");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // --------------------------------------

  useSWR("/api/sucursales/tareas", getEvents);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCalendar
            events={events}
            edit={edit}
            handleDateSelect={handleDateSelect}
            selEvent={selEvent}
            editEnable={editEnable}
            delet={delet}
            deleteEnable={deleteEnable}
            eventSelected={eventSelected}
            cerrarEvento={cerrarEvento}
            reg={reg}
            handleChange={handleChange}
            operadores={operadores}
            datosEv={datosEv}
            postEvent={postEvent}
            usu={usu}
          />
        </>
      )}
    </>
  );
}

export default tareas;
