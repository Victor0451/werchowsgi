import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria, regHistorialAuto } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import { FormLegajoServicio } from "@/components/sepelio/servicios/FormLegajoServicio";
import { Alert } from "@material-tailwind/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export default function Legajo() {
  const [servicio, guardarServicio] = useState(null);
  const [archivos, guardarArchivos] = useState([]);
  const [ataud, guardarAtaud] = useState([]);
  const [parcela, guardarParcela] = useState([]);
  const [file, setFile] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idservicio) {
    jsCookie.set("idservicio", router.query.idservicio, { expires: 1 });
  }

  const traerInfo = async () => {
    if (jsCookie.get("idservicio")) {
      await axios
        .get(`/api/sepelio/servicios`, {
          params: {
            f: "legajo servicio",
            id: jsCookie.get("idservicio"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarServicio(res.data[0]);

            axios
              .get(`/api/sepelio/servicios`, {
                params: {
                  dni: res.data[0].dni,
                  f: "traer archivos",
                },
              })
              .then((res1) => {
                let archivos = res1.data;

                guardarArchivos(archivos);

                if (res1.data.length === 0) {
                  toast.warning("Este legajo no tiene archivos adjuntos");
                } else {
                  toast.info(
                    "Se trajeron los archivos adjuntados a este legajo"
                  );
                }
              })
              .catch((error) => {
                console.log(error);
              });

            axios
              .get(`/api/sepelio/ataudes`, {
                params: {
                  f: "traer ataud",
                  id: res.data[0].idataud,
                },
              })
              .then((res2) => {
                if (res2.data) {
                  guardarAtaud(res2.data);
                } else if (!res2.data) {
                  toast.info("Este servicio no posee ataud registrado");
                }
              })
              .catch((error) => {
                toast.error("Ocurrio un error al generar el listado");
                console.log(error);
              });

            axios
              .get(`/api/sepelio/parcelas`, {
                params: {
                  f: "check parcela",
                  dni: res.data[0].dni,
                },
              })
              .then((res3) => {
                let re = JSON.parse(res3.data);
                console.log(re[0]);
                if (re[0]) {
                  guardarParcela(re[0]);
                } else if (!re[0]) {
                  toast.info("Este servicio no posee parcela asignada");
                }
              })
              .catch((error) => {
                toast.error("Ocurrio un error al generar el listado");
                console.log(error);
              });
          }
        })
        .catch((error) => {
          toast.error("Ocurrio un error al generar el listado");
          console.log(error);
        });
    }
  };

  const eliminarArchivos = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar la imagen?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(
                `${ip}api/archivos/legajovirtualservicios/eliminararchivos/${id}`
              )
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El archivo eliminado ");

                  let accion = `Se elimino un archivo en el legajo virtual del servicio  ${servicio.idservicio} - ${servicio.apellido}, ${servicio.nombre}.`;

                  registrarHistoria(accion, usu.usuario);

                  traerInfo();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleUpload = async (file) => {
    setFile(file);

    const upload = new FormData();

    upload.append("file", file);

    await axios
      .post(
        `${ip}api/archivos/legajovirtualservicios/uploadfichalegajo/${servicio.dni}`,
        upload
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual del del servicio  ${servicio.idservicio} - ${servicio.apellido}, ${servicio.nombre}.`;

          registrarHistoria(accion, usu.usuario);
        }

        traerInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useSWR("/api/sepelio/servicios", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {servicio ? (
            <>
              <FormLegajoServicio
                archivos={archivos}
                eliminarArchivos={eliminarArchivos}
                file={file}
                handleUpload={handleUpload}
                servicio={servicio}
                ataud={ataud}
                parcela={parcela}
              />
            </>
          ) : (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
            >
              <strong>No se encontro el legajo servicio selecionado</strong>
            </Alert>
          )}
        </>
      )}
    </>
  );
}
