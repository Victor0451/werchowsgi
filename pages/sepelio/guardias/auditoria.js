import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment/moment";
import { registrarHistoria } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import ListadoAuditoria from "@/components/sepelio/guardias/ListadoAuditoria";

function Auditoria(props) {
  const [listGuar, guardarListGuar] = useState([]);
  const [listP, guardarListP] = useState(0);
  const [listL, guardarListL] = useState(0);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerDatos = async () => {
    await axios
      .get("/api/sepelio/guardias", {
        params: {
          f: "traer guardias",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarListGuar(res.data);
        } else if (res.data.length === 0) {
          toast.info("No hay guardias registradas");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al traer el listado de guardias");
      });
  };

  const estadoGuardia = async (est, id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres cambiar el estado de la guardia seleccionada?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "estado liquidacion",
              estado: "",
              id: id,
              usu: usu.usuario,
              fecha: moment().format("YYYY-MM-DD"),
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
              .put("/api/sepelio/guardias", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(`El informe fue ${toastMsg} con exito`);

                  let accionHis = `La guardia de sepelio ID ${id} fue ${toastMsg} para su liquidacion.`;

                  registrarHistoria(accionHis, usu.usuario);

                  traerDatos();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error(
                  "Ocurrio un error al actualizar el estado de la guardia seleccionada"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info(
              "No se realizaron cambios en la guardia seleccionada",
              "ATENCION"
            );
          },
        },
      ],
    });
  };

  const liquidarGuardia = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres liquidar de esta guardia?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              f: "liquidar guardia",
              estado: 1,
              id: id,
              usu: usu.usuario,
              fecha: moment().format("YYYY-MM-DD"),
            };

            axios
              .put("/api/sepelio/guardias", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(
                    `La guardia fue marcado como liquidado con exito`
                  );

                  let accionHis = `La guardia de sepelio ID ${id} fue marcado como liquidada.`;

                  registrarHistoria(accionHis, usu.usuario);

                  traerDatos();
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Ocurrio un error al liquidar la guardia");
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.info("La guardia seleccionada no fue liquidada", "ATENCION");
          },
        },
      ],
    });
  };

  const calcTotal = (arr, f) => {
    let total = 0;
    let li = [];

    if (f === "P") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 0) {
          total += parseFloat(arr[i].importe);
          li.push(arr[i]);
        }
      }

      guardarListP(li.length);

      return total.toFixed(2);
    } else if (f === "L") {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].liquidado === 1) {
          total += parseFloat(arr[i].importe);
          li.push(arr[i]);
        }
      }

      guardarListL(li.length);

      return total.toFixed(2);
    }
  };

  useSWR("/api/sepelio/guardias", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <ListadoAuditoria
            listado={listGuar}
            estadoGuardia={estadoGuardia}
            liquidarGuardia={liquidarGuardia}
            calcTotal={calcTotal}
            listL={listL}
            listP={listP}
            usu={usu}
          />
        </>
      )}
    </>
  );
}

export default Auditoria;
