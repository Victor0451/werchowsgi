import { FormLogin } from "@/components/auth/FormLogin";
import jsCookie from "js-cookie";
import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { ip } from '../config/config'

export default function Index() {

  let usuarioRef = React.createRef()
  let contrasenaRef = React.createRef()

  const [errores, guardarErrores] = useState(null)

  const iniciarSesion = async () => {

    let usuario = usuarioRef.current.value
    let contrasena = contrasenaRef.current.value

    if (usuario === "") {

      guardarErrores("Debes ingresar un nombre de usuario")

    } else if (contrasena === "") {

      guardarErrores("Debes ingresar una contraseña")

    } else {
      try {
        //headers
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        //Req body

        const body = JSON.stringify({ usuario, contrasena });

        await axios.post(`${ip}api/sgi/auth/auth`, body, config)
          .then((res) => {
            let user = JSON.stringify(res.data.user)
            jsCookie.set("token", res.data.token);
            jsCookie.set("usuario", user);

            Router.push("/home");
          });
      } catch (error) {
        console.log(error, "LOGIN_FAIL");

      }
    }


  }

  let token = jsCookie.get("token");

  if (token) {
    Router.push("/home");

  }



  return (

    <>
      <FormLogin
        usuarioRef={usuarioRef}
        contrasenaRef={contrasenaRef}
        iniciarSesion={iniciarSesion}
        errores={errores}
      />

    </>
  )
}
