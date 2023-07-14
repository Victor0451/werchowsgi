import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import { Campanas } from "./Campanas";
import { Prestamos } from "./Prestamos";
import { Sepelio } from "./Sepelio";
import { Socios } from "./Socios";

export const NavListItems = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Campanas />
      <Prestamos />
      <Sepelio />
      <Socios />
    </ul>
  );
};
