import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import moment from "moment";

const Opciones = ({ actFunctions, creaFunctions }) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Button color="gray" onClick={openDrawer}>
        Opciones
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Administracion de Tablas
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <Card className="border-2 rounded-xl p-2">
          <Typography color="gray" variant="h6">
            Crear Tablas Para el mes {moment().format("MM/YYYY")}
          </Typography>
          <List>
            <ListItem
              onClick={() => {
                creaFunctions("traer cCob", "Cobradores");
              }}
            >
              Cobradores
              <ListItemSuffix>
                <Chip color="green" size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                creaFunctions("traer cOf", "Oficina");
              }}
            >
              Oficina
              <ListItemSuffix>
                <Chip color="green" size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                creaFunctions("traer ctjt", "Tarjetas");
              }}
            >
              Tarjetas
              <ListItemSuffix>
                <Chip color="green" size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                creaFunctions("traer cbanco", "Banco");
              }}
            >
              Banco
              <ListItemSuffix>
                <Chip color="green" size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                creaFunctions("traer cpolicia", "Policias");
              }}
            >
              Policia
              <ListItemSuffix>
                <Chip color="green" size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
          </List>
        </Card>

        <hr className="border-2 mt-5 mb-5" />

        <Card className="border-2 rounded-xl p-2">
          <Typography color="gray" variant="h6">
            Actualizar Tablas Para el mes {moment().format("MM/YYYY")}
          </Typography>
          <List>
            <ListItem
              onClick={() => {
                actFunctions("act cobradores", "Cobradores");
              }}
            >
              Cobradores
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions("act oficina", "Oficinas");
              }}
            >
              Oficinas
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions("act adelantado", "Cobranza Adelantada");
              }}
            >
              Cobranza Adelantados
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions(
                  "act adelantado null",
                  "Sacando Null en Adelantados"
                );
              }}
            >
              Adelantados Null
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions("act tarjetas", "Tarjetas");
              }}
            >
              Tarjetas
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions("act banco", "Bancos");
              }}
            >
              Banco
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem
              onClick={() => {
                actFunctions("act policia", "Policias");
              }}
            >
              Policia
              <ListItemSuffix>
                <Chip size="sm" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default Opciones;
