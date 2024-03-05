import React from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  ArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ip } from "../../config/config";

export const Sepelio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Sepelio{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden  grid-cols-4 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-4 flex w-full flex-col gap-1">
            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Archivos (Descarga)</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/inst-convenios-fadedsfya.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      Listado de Convenios FADEDSFYA
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/conformidad_servicio_moroso.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      Conformidad de Servicio Para Morosos
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/prot-inst-domicilio.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      Protocolo Inst. en domicilio
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/aut-policia-servdom.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      Modelo de autorizacion policial para serv. en domicilio
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/ISJ-SOLI.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      ISJ - Solicitud de Pago
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/ISJ-DDJJ.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      ISJ - Declaracion Jurada
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href={`${ip}api/archivos/sepelio/descargararchivo/sol-crem-divina-misericordia.pdf`}
                >
                  <MenuItem>
                    <Typography color="black">
                      {" "}
                      Solicitud Cremacion Divina Misericordia
                    </Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Autos</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/autos/nuevoauto"}>
                  <MenuItem>
                    <Typography color="black">Registrar Autos</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/autos/listadoautos"}>
                  <MenuItem>
                    <Typography color="black">Listado Autos</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Ataudes</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/ataudes/nuevoataud"}>
                  <MenuItem>
                    <Typography color="black">Registrar Ataud</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/ataudes/listadoataudes"}>
                  <MenuItem>
                    <Typography color="black">Listado Ataudes</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Caja Sep.</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/caja/nuevacaja"}>
                  <MenuItem>
                    <Typography color="black">Habilitar</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/caja/listadocajas"}>
                  <MenuItem>
                    <Typography color="black">Listado Cajas</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Servicios</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/servicios/nuevoservicio"}>
                  <MenuItem>
                    <Typography color="black">Nuevo Servicio</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/servicios/listadoservicio"}>
                  <MenuItem>
                    <Typography color="black">Listado Servicio</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Parcelas</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/parcelas/nuevaparcela"}>
                  <MenuItem>
                    <Typography color="black">Nueva Parcela</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/parcelas/listadoparcela"}>
                  <MenuItem>
                    <Typography color="black">Listado Parcelas</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Tareas</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/tareas/calendario"}>
                  <MenuItem>
                    <Typography color="black">Calendario</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Proveedores</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/proveedores/nuevo"}>
                  <MenuItem>
                    <Typography color="black">Nuevo Proveedor</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/proveedores/listado"}>
                  <MenuItem>
                    <Typography color="black">Listado Proveedores</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Guardias</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/guardias/liquidacion"}>
                  <MenuItem>
                    <Typography color="black">Liquidacion</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Sepelio{" "}
      </MenuItem>
    </React.Fragment>
  );
};
