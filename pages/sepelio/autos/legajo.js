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
import { FormLegajoAuto } from "@/components/sepelio/autos/FormLegajoAutos";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";

export default function Legajo() {
  const [auto, guardarAuto] = useState(null);
  const [archivos, guardarArchivos] = useState([]);
  const [file, setFile] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idauto) {
    jsCookie.set("idauto", router.query.idauto, { expires: 1 });
  }

  const traerInfo = async () => {
    if (jsCookie.get("idauto")) {
      await axios
        .get(`/api/sepelio/autos`, {
          params: {
            f: "traer auto sel",
            id: jsCookie.get("idauto"),
          },
        })
        .then((res) => {
          if (res.data) {
            guardarAuto(res.data);

            axios
              .get(`/api/sepelio/autos`, {
                params: {
                  patente: res.data.patente,
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
          } else if (!res.data) {
            toast.info("No se encontro el auto seleccionado");
          }
        })
        .catch((error) => {
          toast.error("Ocurrio un error al gelerar el listado de autos");
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
                `${ip}api/archivos/legajovirtualautos/eliminararchivos/${id}`
              )
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El archivo eliminado ");

                  let accion = `Se elimino un archivo en el legajo virtual ${auto.patente}, del vehiculo ${auto.auto}.`;

                  registrarHistoria(accion, usu.usuario);

                  let accAuto = `Eliminacion de archivo: ${id} en legajo virtual`;

                  regHistorialAuto(
                    auto.idauto,
                    auto.patente,
                    usu.usuario,
                    accAuto
                  );

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
        `${ip}api/archivos/legajovirtualautos/uploadarchivo/${auto.patente}`,
        upload
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual ${auto.patente}, del vehiculo ${auto.auto}.`;

          registrarHistoria(accion, usu.usuario);

          let accAuto = `Carga de archivo en legajo virtual`;

          regHistorialAuto(auto.idauto, auto.patente, usu.usuario, accAuto);
        }

        traerInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useSWR("/api/sepelio/autos", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {auto ? (
            <>
              <FormLegajoAuto
                auto={auto}
                archivos={archivos}
                eliminarArchivos={eliminarArchivos}
                file={file}
                handleUpload={handleUpload}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
}
