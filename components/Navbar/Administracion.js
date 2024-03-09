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

export const Administracion = () => {
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
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />{" "}
              Administracion{" "}
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
                  <Typography color="black">Campañas</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/campanas/asignarcampana"}>
                  <MenuItem>
                    <Typography color="black">Asignar campañas</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/campanas/progresocampana"}>
                  <MenuItem>
                    <Typography color="black">Progreso campañas</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/campanas/cerrarcampana"}>
                  <MenuItem>
                    <Typography color="black">Cerrar campañas</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Cobranza</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/cobranza/werchow/efectividad"}>
                  <MenuItem>
                    <Typography color="black">Efectividad</Typography>
                  </MenuItem>
                </Link>{" "}
              </MenuList>
            </Menu>

            <Link href={"/administracion/historial/panel"}>
              <MenuItem>
                <Typography color="black">Historial del Sistema</Typography>
              </MenuItem>
            </Link>

            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Noticias</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/administracion/noticias/nuevanoticia"}>
                  <MenuItem>
                    <Typography color="black">Registrar Noticia</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Sepelio</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/sepelio/administracion/cajas"}>
                  <MenuItem>
                    <Typography color="black">Generar Cajas</Typography>
                  </MenuItem>
                </Link>{" "}
                <Link href={"/sepelio/administracion/servicios"}>
                  <MenuItem>
                    <Typography color="black">Servicios Sin Imp.</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/servicios/informeservicios"}>
                  <MenuItem>
                    <Typography color="black">Informes de Servicio</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/guardias/auditoria"}>
                  <MenuItem>
                    <Typography color="black">Auditoria Guardias</Typography>
                  </MenuItem>
                </Link>
                <Link href={"/sepelio/servicios/liquidacion"}>
                  <MenuItem>
                    <Typography color="black">Liquidacion Personal</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Orden de pago</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/ordenpago/auditoriaorden"}>
                  <MenuItem>
                    <Typography color="black">Auditoria</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Personal</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/administracion/personal/vacaciones"}>
                  <MenuItem>
                    <Typography color="black">Vacaciones</Typography>
                  </MenuItem>
                </Link>{" "}
              </MenuList>
            </Menu>
            <Menu placement="right-start">
              <MenuHandler>
                <MenuItem className="hidden items-center gap-2 lg:flex lg:rounded-full">
                  <Typography color="black">Prestamos</Typography>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform `}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <Link href={"/prestamos/listadoprestamos"}>
                  <MenuItem>
                    <Typography color="black">
                      Listado Subsidios Policias
                    </Typography>
                  </MenuItem>
                </Link>
                <Link href={"/prestamos/reportes"}>
                  <MenuItem>
                    <Typography color="black">Reportes</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </ul>
        </MenuList>
      </Menu>

      <MenuItem className="flex items-center gap-2 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Administracion{" "}
      </MenuItem>
    </React.Fragment>
  );
};
