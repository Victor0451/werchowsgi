import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import useUser from "@/hook/useUser";
import useSWR from "swr";
import axios from "axios";

export const Layout = ({ children }) => {
  const [msj, guardarMensajes] = useState(0);
  const [prest, guardarPrest] = useState(0);
  const [orde, guardarOrde] = useState(0);

  const { user, isLoading } = useUser();

  const traerNotificaciones = async () => {
    if (user) {
      let usu = JSON.parse(user.name);

      await axios
        .get(`/api/mailinterno`, {
          params: {
            f: "noti entrada",
            usu: usu.usuario,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            guardarMensajes(res.data.length);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer los mensajes", "ATENCION");
        });

      if (usu.perfil === 1 || usu.perfil === 3) {
        await axios
          .get(`/api/prestamos`, {
            params: {
              f: "list prest pendientes",
            },
          })
          .then((res) => {
            guardarPrest(res.data.length);
          })
          .catch((error) => {
            console.log(error);
          });

        await axios
          .get(`/api/ordenpago`, {
            params: {
              f: "traer ordenes pendientes",
            },
          })
          .then((res) => {
            guardarOrde(res.data.length);
          })
          .catch((error) => {
            console.log(error);
            toastr.error("Ocurrio un error al generar el listado", "ATENCION");
          });
      }
    }
  };

  useSWR("/api/ordenpago", traerNotificaciones);

  return (
    <div className='div className="min-h-full"'>
      <Head>
        <title>WERCHOW - S.G.I.</title>
      </Head>

      <main>
        {!user ? null : (
          <Navbar
            user={JSON.parse(user.name)}
            msj={msj}
            prest={prest}
            orde={orde}
          />
        )}

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};
