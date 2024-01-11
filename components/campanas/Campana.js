import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const Campana = ({ titulo, camp, empresa, operador }) => {
  return (
    <Card className="mt-6  ml-2">
      <CardBody>
        <ListBulletIcon className="text-blue-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {titulo}
        </Typography>
        <Typography>{camp}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link
          href={{
            pathname: "/campanas/gestioncaso/[campana]",

            query: {
              camp: camp,
              empresa: empresa,
              operador: operador,
            },
          }}
          as="/campanas/gestioncaso/campana"
        >
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Ver Casos
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
