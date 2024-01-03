import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import useUser from "@/hook/useUser";
import jsCookie from "js-cookie";
import { Campanas } from "./Campanas";
import { Prestamos } from "./Prestamos";
import { Sepelio } from "./Sepelio";
import { Socios } from "./Socios";
import { Ventas } from "./Ventas";
import { Administracion } from "./Administracion";
import { OrdenPago } from "./OrdenPago";
import { Cobranza } from "./Cobranza";

export const NavListItems = ({}) => {
  const { user, isLoading } = useUser();
  let usu = {};

  if (jsCookie.get("usuario")) {
    usu = JSON.parse(jsCookie.get("usuario"));
  }

  return (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {usu.administracion === true ? <Administracion /> : null}
        {usu.campanas === true ? <Campanas /> : null}
        {usu.cobranza === true ? <Cobranza /> : null}
        {usu.prestamos === true ? <Prestamos /> : null}
        {usu.sepelio === true ? <Sepelio /> : null}
        {usu.socios === true ? <Socios /> : null}
        {usu.ventas === true ? <Ventas /> : null}
        {usu.ordenpago === true ? <OrdenPago /> : null}
      </ul>
    </>
  );
};
