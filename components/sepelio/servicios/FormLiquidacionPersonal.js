import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Alert,
  Button,
  Option,
  Input,
} from "@material-tailwind/react";
import moment from "moment";
import Select from "react-select";
import { IconSolid } from "../../../libs/funciones";
import ListadoLiquidacionPersonal from "./ListadoLiquidacionPersonal";

const FormLiquidacionPersonal = ({
  operadores,
  errores,
  handleChange,
  buscarLiquidacion,
  tareas,
  guardias,
  opSel,
  calcTotal,
  pagarLiquidacion,
  liqItem,
  liquidarGuardia
}) => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardBody floated={false} shadow={false} className="rounded-none">
        <Typography variant="h2">Liquidacion Personal Sepelio</Typography>

        <div className="p-4 border-2 rounded-lg mt-6 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Select
                className=" text-sm rounded-xl"
                placeholder="Operador"
                options={operadores.map((i) => ({
                  label: i.operador,
                  value: i.operador,
                }))}
                onChange={(value) => {
                  handleChange("operador", value.value);
                }}
              />
            </div>

            <div className="w-full md:w-1/4 px-3 mt-6 mb-6 md:mb-0">
              <Button onClick={buscarLiquidacion}>Buscar</Button>
            </div>

            <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
              <Alert className="" color="blue" icon={<IconSolid />}>
                ¡ATENCION! - Se motraran las guardias, tareas en serivios y
                changas del personal de sepelio que tengas un importe a
                liquidar. Las mismas que tengas valor 0 por estar en horario de
                trabajos quedaran registradas pero no se mostraran en este
                apartado.
              </Alert>
            </div>

            {errores ? (
              <Alert color="red" icon={<IconSolid />} className="mt-5 mb-5">
                {errores}
              </Alert>
            ) : null}
          </div>
        </div>

        {tareas.length > 0 ? (
          <>
            <hr className="border-2 mt-5 mb-5" />

            <ListadoLiquidacionPersonal
              operador={opSel}
              tareas={tareas}
              guardias={guardias}
              calcTotal={calcTotal}
              pagarLiquidacion={pagarLiquidacion}
              liqItem={liqItem}
              liquidarGuardia={liquidarGuardia}
            />
          </>
        ) : tareas === 1 ? (
          <Alert color="orange" icon={<IconSolid />} className="mt-5 mb-5">
            El operador seleccionado no posee tareas o guardias a liquidar.
          </Alert>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FormLiquidacionPersonal;
