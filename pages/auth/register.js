import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormRegister } from "@/components/auth/FormRegister";

function Register() {
  let usuarioRef = React.createRef();
  let contrasenaRef = React.createRef();
  let nombreRef = React.createRef();
  let apellidoRef = React.createRef();
  let perfilRef = React.createRef();

  const [errores, guardarErrores] = useState(null);

  const registrarUsuario = async () => {
    guardarErrores(null);

    let usuario = usuarioRef.current.value;
    let contrasena = contrasenaRef.current.value;
    let nombre = nombreRef.current.value;
    let apellido = apellidoRef.current.value;
    let perfil = perfilRef.current.value;

    if (usuario === "" || contrasena === "" || nombre === "" || apellido === "" || perfil === "") {
      guardarErrores("Todos los campos son obligatorios");
      return;
    }

    let data = {
      usuario,
      contrasena,
      nombre,
      apellido,
      perfil,
      f: "register",
    };

    try {
      const res = await axios.post("/api/register", data);
      if (res.status === 200) {
        toast.success("Usuario registrado exitosamente");
        // Optionally redirect to login or clear form
        usuarioRef.current.value = "";
        contrasenaRef.current.value = "";
        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        perfilRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.msg) {
        guardarErrores(error.response.data.msg);
      } else {
        toast.error("Ocurrió un error al registrar el usuario");
      }
    }
  };

  return (
    <FormRegister
      usuarioRef={usuarioRef}
      contrasenaRef={contrasenaRef}
      nombreRef={nombreRef}
      apellidoRef={apellidoRef}
      perfilRef={perfilRef}
      registrarUsuario={registrarUsuario}
      errores={errores}
    />
  );
}

export default Register;