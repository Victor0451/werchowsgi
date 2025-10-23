import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { NavListItems } from "./NavListItems";
import { ProfileMenu } from "./ProfileMenu";

export default function ComplexNavbar({ user, msj, orde, prest }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full p-2 lg:pl-6 bg-blue-900 text-white">
      <div className="relative mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white"
        >
          Werchow S.G.I
        </Typography>

        <div className="hidden lg:block">
          <NavListItems />
        </div>

        <div className="flex items-center gap-x-1">
          <IconButton
            size="sm"
            color="white"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu user={user} msj={msj} orde={orde} prest={prest} />
        </div>
      </div>

      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavListItems />
      </Collapse>
    </Navbar>
  );
}
