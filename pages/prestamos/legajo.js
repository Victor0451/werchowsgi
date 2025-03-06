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
import { registrarHistoria } from "@/libs/funciones";
import { FormLegajoPrestamo } from "@/components/prestamos/FormLegajoPrestamo";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";

export default function legajo() {
  const [prestamo, guardarPrestamo] = useState(null);
  const [socio, guardarSocio] = useState(null);
  const [archivos, guardarArchivos] = useState([]);
  const [file, setFile] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let router = useRouter();
  if (router.query.idprest) {
    jsCookie.set("idprest", router.query.idprest);
  }

  const traerPrest = async () => {
    if (jsCookie.get("idprest")) {
      await axios
        .get("/api/prestamos", {
          params: {
            id: jsCookie.get("idprest"),
            f: "prest id",
          },
        })
        .then((res) => {
          if (res.data) {
            guardarPrestamo(res.data);

            axios
              .get("/api/prestamos", {
                params: {
                  f: "prest socio",
                  hc: res.data.ptm_ficha,
                },
              })
              .then((res1) => {
                if (res1.data) {
                  let dat = JSON.parse(res1.data);
                  guardarSocio(dat[0]);
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al buscar los datos del socio");
              });

            axios
              .get(`/api/prestamos`, {
                params: {
                  f: "traer archivos",
                  id: res.data.cod_ptm_legajo,
                  hc: res.data.ptm_ficha,
                },
              })
              .then((res2) => {
                if (res2.data.length > 0) {
                  guardarArchivos(res2.data);
                } else if (res2.data.length === 0) {
                  toast.info("Este legajo virtual no tienen archivos aun");
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al traer los archivos de este legajo virtual"
                );
              });
          } else if (!res.data) {
            toast.info("No se encontro el prestamo seleccionado");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al consultar los datos");
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
                `${ip}api/archivos/legajovirtualprestamos/eliminararchivos/${id}`
              )
              .then((res) => {
                if (res.status === 200) {
                  toast.success("El archivo eliminado ");

                  let accion = `Se elimino un archivo en el legajo virtual ${prestamo.cod_ptm_legajo}, del prestamo perteneciente al socio ${prestamo.ptm_ficha}.`;

                  registrarHistoria(accion, usu.usuario);

                  traerPrest();
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
        `${ip}api/archivos/legajovirtualprestamos/uploadfichalegajo/${prestamo.ptm_ficha}`,
        upload
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Archivo Subido Con Exito", "Atencion");

          let accion = `Se subio un archivo al legajo virtual ${prestamo.cod_ptm_legajo}, del prestamo perteneciente al socio ${prestamo.ptm_ficha}.`;

          registrarHistoria(accion, usu.usuario);
        }

        traerPrest();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useSWR("/api/prestamos", traerPrest);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {prestamo && socio ? (
            <>
              <FormLegajoPrestamo
                socio={socio}
                prestamo={prestamo}
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
