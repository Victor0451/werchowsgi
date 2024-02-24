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
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { ip } from "@/config/config";
import { Alert } from "@material-tailwind/react";
import ListadoInformes from "@/components/sepelio/servicios/ListadoInformes";

const InformeServicios = () => {
  const [informes, guardarInformes] = useState([]);
  const [noData, guardarNoData] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerInfo = async () => {
    await axios
      .get(`/api/sepelio/servicios`, {
        params: {
          f: "traer informes servicios",
        },
      })
      .then((res) => {
        if (res.data) {
          let list = JSON.parse(res.data);
          guardarInformes(list);
          guardarNoData(false);
        } else if (!res.data) {
          toast.info("No hay informes registrados");
          guardarNoData(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado");
      });
  };

  const estadoInforme = async (est, id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres cambiar el estado de este informe?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "estado informe",
              estado: "",
              id: id,
              usu: usu.usuario,
            };

            let toastMsg = "";

            if (est === "A") {
              data.estado = 1;
              toastMsg = "aprobado";
            } else if (est === "R") {
              data.estado = 2;
              toastMsg = "rechazado";
            }

            axios
              .put("/api/sepelio/servicios", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(`El informe fue ${toastMsg} con exito`);

                  let accionHis = `El informe de sepelio ID ${id} fue ${toastMsg}.`;

                  registrarHistoria(accionHis, usu.usuario);

                  traerInfo();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al actualizar el estado del informe"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("No se realizaron cambios en el informe", "ATENCION");
          },
        },
      ],
    });
  };

  const liquidarInforme = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres liquidar de este informe?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "liquidar informe",
              liquidado: true,
              id: id,
              usu: usu.usuario,
            };

            axios
              .put("/api/sepelio/servicios", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    `El informe fue marcado como liquidado con exito`
                  );

                  let accionHis = `El informe de sepelio ID ${id} fue marcado como liquidado.`;

                  registrarHistoria(accionHis, usu.usuario);

                  traerInfo();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al actualizar el estado del informe"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("No se realizaron cambios en el informe", "ATENCION");
          },
        },
      ],
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
          <ListadoInformes
            listado={informes}
            estadoInforme={estadoInforme}
            liquidarInforme={liquidarInforme}
          />
        </>
      )}
    </>
  );
};

export default InformeServicios;
