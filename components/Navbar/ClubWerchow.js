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

export const ClubWerchow = () => {
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
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Club Werchow{" "}
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
            <Link href={"/clubwerchow/sorteo"}>
              <MenuItem>
                <Typography color="black">Sorteo de Participantes</Typography>
              </MenuItem>
            </Link>
            <Link href={"/clubwerchow/sorteopremios"}>
              <MenuItem>
                <Typography color="black">Sorteo de Premios</Typography>
              </MenuItem>
            </Link>

            <Link href={"/clubwerchow/ganadores"}>
              <MenuItem>
                <Typography color="black">Listado de Ganadores</Typography>
              </MenuItem>
            </Link>
            <Link href={"/clubwerchow/stockpremios"}>
              <MenuItem>
                <Typography color="black">Stock de Premios</Typography>
              </MenuItem>
            </Link>
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Club Werchow{" "}
      </MenuItem>
    </React.Fragment>
  );
};
