import React from "react";
import {
  Card,
  CardHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import { ListadoCampana } from "./ListadoCampana";

export const AsignarCampañas = ({
  buscarCamp,
  campana,
  listado,
  CasaCentralMG,
  CasaCentralGG,
  perico,
  palpala,
  sanPedro,
  crearCampana,
  spin,
}) => {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Tabs value="werchow">
          <TabsHeader>
            <Tab value={"werchow"}>
              <div className="flex items-start  gap-2">
                {React.createElement(BellIcon, { className: "w-5 h-5" })}
                Campañas Werchow
              </div>
            </Tab>
            <Tab value={"mutual"}>
              <div className="flex items-start gap-2">
                {React.createElement(BellIcon, { className: "w-5 h-5" })}
                Campañas Mutual
              </div>
            </Tab>
            <Tab value={"sanmiguel"}>
              <div className="flex items-start gap-2">
                {React.createElement(BellIcon, { className: "w-5 h-5" })}
                Campañas San Miguel
              </div>
            </Tab>
          </TabsHeader>

          <hr />

          <TabsBody>
            <TabPanel value={"werchow"}>
              <p className="text-2xl underline underline-offset-8">Werchow</p>
              <div className="mt-5 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 ">
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("atcampana");
                  }}
                >
                  Atrasados
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("at2campana");
                  }}
                >
                  Atrasados2
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("reccampana");
                  }}
                >
                  Recuperacion
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("reincampana");
                  }}
                >
                  Reincidentes
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("blancampana");
                  }}
                >
                  Blanqueos
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("policampana");
                  }}
                >
                  Policias
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("auxcampana");
                  }}
                >
                  Auxiliar
                </Button>
              </div>

              {listado.length > 0 ? (
                <>
                  {spin === true ? (
                    <>
                      <div className=" flex justify-center">
                        <Spinner className="mt-5 h-16 w-16 text-gray-900/50" />
                      </div>
                      <div className="mt-5 flex justify-center">
                        <Typography variant="h6">Asignando...</Typography>
                      </div>
                    </>
                  ) : spin === false ? (
                    <ListadoCampana
                      listado={listado}
                      camp={campana}
                      CasaCentralMG={CasaCentralMG}
                      CasaCentralGG={CasaCentralGG}
                      perico={perico}
                      palpala={palpala}
                      sanPedro={sanPedro}
                      crearCampana={crearCampana}
                    />
                  ) : null}
                </>
              ) : null}
            </TabPanel>
            <TabPanel value={"mutual"}>
              <p className="text-2xl underline underline-offset-8">Mutual</p>
              <div className="mt-5 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 ">
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("atcampanaM");
                  }}
                >
                  Atrasados
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("at2campanaM");
                  }}
                >
                  Atrasados2
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("reccampanaM");
                  }}
                >
                  Recuperacion
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("reincampanaM");
                  }}
                >
                  Reincidentes
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("blancampanaM");
                  }}
                >
                  Blanqueos
                </Button>
              </div>

              {listado.length > 0 ? (
                <ListadoCampana
                  listado={listado}
                  camp={campana}
                  CasaCentralMG={CasaCentralMG}
                  CasaCentralGG={CasaCentralGG}
                  perico={perico}
                  palpala={palpala}
                  sanPedro={sanPedro}
                  crearCampana={crearCampana}
                />
              ) : null}
            </TabPanel>
            <TabPanel value={"sanmiguel"}>
              <p className="text-2xl underline underline-offset-8">
                San Miguel
              </p>
              <div className="mt-5 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 ">
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("atcampanaSM");
                  }}
                >
                  Atrasados
                </Button>
                <Button
                  className="ml-1 mt-1"
                  onClick={() => {
                    buscarCamp("reccampanaSM");
                  }}
                >
                  Recuperacion
                </Button>
              </div>

              {listado.length > 0 ? (
                <ListadoCampana
                  listado={listado}
                  camp={campana}
                  CasaCentralMG={CasaCentralMG}
                  CasaCentralGG={CasaCentralGG}
                  perico={perico}
                  palpala={palpala}
                  sanPedro={sanPedro}
                  crearCampana={crearCampana}
                />
              ) : null}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardHeader>
    </Card>
  );
};
