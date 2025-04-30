import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const Menu = ({
  vistas,
  listadoCheck,
  guardarListado,
  guardarListadoCheck,
}) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const advertencia = () => {
    if (listadoCheck.length > 0) {
      confirmAlert({
        title: "ATENCION",
        message:
          "¿Seguro quieres abanodar la generacion de esta orden de pago?. Perderas los datos precargados",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              guardarListado([]);
              guardarListadoCheck([]);
              openDrawer();
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    } else if (listadoCheck.length === 0) {
      guardarListado([]);
      openDrawer();
    }
  };
  return (
    <>
      <Button className=" bg-blue-gray-900" onClick={advertencia}>
        Menu
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-gray-200">
        <Card className="">
          <List>
            <ListItem
              onClick={() => {
                vistas("C");
                closeDrawer();
              }}
            >
              Contables
            </ListItem>
            <ListItem
              onClick={() => {
                vistas("O");
                closeDrawer();
              }}
            >
              Ordenes Medicas
            </ListItem>
            <ListItem
              onClick={() => {
                vistas("P");
                closeDrawer();
              }}
            >
              Practicas Medicas
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default Menu;
