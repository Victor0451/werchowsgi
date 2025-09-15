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
import { Gestion } from "./Gestion";
import { ClubWerchow } from "./ClubWerchow";
import { Contabilidad } from "./Contabilidad";
export const NavListItems = ({}) => {
  let usu = {};

  if (jsCookie.get("usuario")) {
    usu = JSON.parse(jsCookie.get("usuario"));
  }

  return (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {usu.administracion === 1 ? <Administracion /> : null}
        {usu.gestion === 1 ? <Gestion usu={usu} /> : null}
        {usu.contabilidad === 1 ? <Contabilidad /> : null}
        {usu.campanas === 1 ? <Campanas /> : null}
        {/* {usu.cobranza === 1 ? <Cobranza /> : null} */}
        {usu.prestamos === 1 ? <Prestamos /> : null}
        {usu.sepelio === 1 ? <Sepelio usu={usu} /> : null}
        {usu.socios === 1 ? <Socios /> : null}
        {usu.clubwerchow === 1 ? <ClubWerchow /> : null}
        {usu.ventas === 1 ? <Ventas /> : null}
        {usu.ordenpago === 1 ? <OrdenPago /> : null}
      </ul>
    </>
  );
};
