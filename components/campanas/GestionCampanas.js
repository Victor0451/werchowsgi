import React from 'react'
import {
    Card, 
    CardHeader,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    BellIcon
} from "@heroicons/react/24/solid";
import { Campana } from './Campana';



export const GestionCampanas = () => {
    let operadorNom = {}
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
                        <Tab value={"mutual"} >
                            <div className="flex items-start gap-2">
                                {React.createElement(BellIcon, { className: "w-5 h-5" })}
                                Campañas Mutual
                            </div>
                        </Tab>


                    </TabsHeader>

                    <hr />

                    <TabsBody>

                        <TabPanel value={"werchow"}>
                            <p className="text-2xl underline underline-offset-8">
                                Werchow
                            </p>
                            <div className="mt-5 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 p-4">

                                <Campana
                                    titulo="ATRASADOS 1 CUOTA"
                                    camp="Atrasados"
                                    empresa="werchow"
                                    operador={"vlongo"}
                                />
                                <Campana
                                    titulo="ATRASADOS 2 CUOTAS"
                                    camp="Atrasados2"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />
                                <Campana
                                    titulo="RECUPERACIONES"
                                    camp="Recuperacion"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />
                                <Campana
                                    titulo="REINCIDENTES"
                                    camp="Reincidente"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="BLANQUEOS"
                                    camp="Blanqueo"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="POLICIAS"
                                    camp="Policia"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="CAMPAÑA AUXILIAR"
                                    camp="Recordatorio"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="CAMPAÑA AUXILIAR 2"
                                    camp="Recordatorio2"
                                    empresa="werchow"
                                    operador={operadorNom}
                                />

                            </div>

                        </TabPanel >

                        <TabPanel value={"mutual"}>
                            <p className="text-2xl underline underline-offset-8">
                                Mutual
                            </p>
                            <div className="mt-5 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 ">

                                <Campana
                                    titulo="ATRASADOS 1 CUOTA"
                                    camp="Atrasados"
                                    empresa="mutual"
                                    operador={operadorNom}
                                    
                                />

                                <Campana
                                    titulo="ATRASADOS 2 CUOTAS"
                                    camp="Atrasados2"
                                    empresa="mutual"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="RECUPERACIONES"
                                    camp="Recuperacion"
                                    empresa="mutual"
                                    operador={operadorNom}
                                />

                                <Campana
                                    titulo="REINCIDENTES"
                                    camp="Reincidente"
                                    empresa="mutual"
                                    operador={operadorNom}
                                />


                                <Campana
                                    titulo="BLANQUEOS"
                                    camp="Blanqueo"
                                    empresa="mutual"
                                    operador={operadorNom}
                                />

                            </div>
                        </TabPanel>

                    </TabsBody>


                </Tabs>

            </CardHeader>
        </Card>
    )
}


