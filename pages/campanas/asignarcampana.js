import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import { AsignarCampañas } from "@/components/campanas/AsignarCampañas";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";

export default function AsignarCampana() {
  const [campana, guardarCampana] = useState("");
  const [final, guardarFinal] = useState(false);
  const [array, guardarArray] = useState({});
  const [perico, guardarPerico] = useState({});
  const [palpala, guardarPalpala] = useState({});
  const [sanPedro, guardarSanPedro] = useState({});
  const [CasaCentralMG, guardarCCMG] = useState({});
  const [CasaCentralGG, guardarCCGG] = useState({});
  //const [CasaCentralVF, guardarCCVF] = useState({});

  const segmentacion = (array) => {
    let perico = array.filter((at) => {
      return at.SUCURSAL === "R";
    });

    let palpala = array.filter((at) => {
      return at.SUCURSAL === "L";
    });

    let sanPedro = array.filter((at) => {
      return at.SUCURSAL === "P";
    });

    let CasaCentral = array.filter((at) => {
      return at.SUCURSAL === "W";
    });

    // DIVIDIR EN DOS

    let CCmitad = Math.floor(CasaCentral.length / 2);

    let CasaCentralGG = CasaCentral.slice(0, CCmitad);

    let CasaCentralMG = CasaCentral.slice(CCmitad, CasaCentral.length);

    // -------------------

    // DIVIDIR EN TRES

    // let CCparte1 = Math.floor(CasaCentral.length / 3);

    // let CCparte2 = CCparte1 * 2;

    // let CasaCentralGG = CasaCentral.slice(0, CCparte1);

    // let CasaCentralMG = CasaCentral.slice(CCparte1, CCparte2);

    // let CasaCentralVF = CasaCentral.slice(CCparte2, CasaCentral.length);
    // ----------------------------

    guardarPerico(perico);
    guardarPalpala(palpala);
    guardarSanPedro(sanPedro);
    //guardarCCMG(CasaCentral)  // AHORA VA TODO A MARIA

    // CUANDO SE DIVIDIA POR 2 O POR 3

    guardarCCMG(CasaCentralMG);
    guardarCCGG(CasaCentralGG);
    //guardarCCVF(CasaCentralVF);
  };

  // CAMPAÑAS DE WERCHOW

  const buscarCamp = async (camp) => {
    await axios
      .get(`/api/campanas`, {
        params: {
          camp: camp,
          f: "asignar camp",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          const array = res.data;
          guardarArray(array);
          segmentacion(array);

          guardarCampana(camp);
        } else if (res.data.length === 0) {
          toast.warning("No se encuentran casos para asignar", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("La tabla no fue creada", "ATENCION");
      });
  };

  const crearCampana = async (array, camp, op) => {
    let fecha = moment().format("YYYY-MM-DD");
    let idcamp = 0;

    if (op === "mgalian") {
      if (camp === "atcampana") {
        idcamp = 11;
      } else if (camp === "atcampanaM") {
        idcamp = 28;
      } else if (camp === "at2campana") {
        idcamp = 67;
      } else if (camp === "at2campanaM") {
        idcamp = 70;
      } else if (camp === "reccampana") {
        idcamp = 1;
      } else if (camp === "reccampanaM") {
        idcamp = 33;
      } else if (camp === "reincampana") {
        idcamp = 6;
      } else if (camp === "reincampanaM") {
        idcamp = 38;
      } else if (camp === "blancampana") {
        idcamp = 16;
      } else if (camp === "blancampanaM") {
        idcamp = 43;
      } else if (camp === "policampana") {
        idcamp = 50;
      } else if (camp === "auxcampana") {
        idcamp = 22;
      }
    } else if (op === "ladorno") {
      if (camp === "atcampana") {
        idcamp = 12;
      } else if (camp === "atcampanaM") {
        idcamp = 29;
      } else if (camp === "at2campana") {
        idcamp = 68;
      } else if (camp === "at2campanaM") {
        idcamp = 71;
      } else if (camp === "reccampana") {
        idcamp = 2;
      } else if (camp === "reccampanaM") {
        idcamp = 34;
      } else if (camp === "reincampana") {
        idcamp = 7;
      } else if (camp === "reincampanaM") {
        idcamp = 39;
      } else if (camp === "blancampana") {
        idcamp = 17;
      } else if (camp === "blancampanaM") {
        idcamp = 44;
      } else if (camp === "policampana") {
        idcamp = 51;
      } else if (camp === "auxcampana") {
        idcamp = 23;
      }
    } else if (op === "palpala") {
      if (camp === "atcampana") {
        idcamp = 13;
      } else if (camp === "atcampanaM") {
        idcamp = 30;
      } else if (camp === "auxcampana") {
        idcamp = 24;
      }
    } else if (op === "perico") {
      if (camp === "atcampana") {
        idcamp = 14;
      } else if (camp === "atcampanaM") {
        idcamp = 31;
      } else if (camp === "auxcampana") {
        idcamp = 25;
      }
    } else if (op === "sanpedro") {
      if (camp === "atcampana") {
        idcamp = 15;
      } else if (camp === "atcampanaM") {
        idcamp = 32;
      } else if (camp === "auxcampana") {
        idcamp = 26;
      }
    }

    if (array.length === 0) {
      toast.warning("No hay casos para asignar");
    } else {
      toast.info(
        "Asignando... Esto tomara unos segundos, espera a que el proceso termine."
      );

      for (let i = 0; i < array.length; i++) {
        const caso = {
          idcampana: idcamp,
          fechacampana: fecha,
          mes: array[i].MES,
          ano: array[i].ANO,
          sucursal: array[i].SUCURSAL,
          contrato: array[i].CONTRATO,
          apellido: array[i].APELLIDOS,
          edad: array[i].EDAD,
          nombre: array[i].NOMBRES,
          dni: array[i].NRO_DOC,
          telefono: array[i].TELEFONO,
          movil: array[i].MOVIL,
          calle: array[i].CALLE,
          nro_calle: array[i].NRO_CALLE,
          barrio: array[i].BARRIO,
          localidad: array[i].LOCALIDAD,
          cuota: array[i].IMPORTE,
          cuotasadeudadas: 1,
          montoadeudado: array[i].IMPORTE * 3,
          estadocaso: true,
          alta: array[i].ALTA,
          vigencia: array[i].VIGENCIA,
          f: "asig caso",
        };

        let fin = i + 1;

        if (array.length === fin) {
          guardarFinal(true);
          toast.success(
            `Los casos ya estan asignados en la campaña: ${camp} del operador: ${op}`
          );
        }

        await axios.post(`/api/campanas`, caso);
      }

      let accionHis = `Se asigno la campaña ${camp} con ${array.length} casos, para el operador ${op}.`;

      registrarHistoria(accionHis, usu.usuario);
    }
  };

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : usu ? (
        <AsignarCampañas
          buscarCamp={buscarCamp}
          campana={campana}
          listado={array}
          CasaCentralMG={CasaCentralMG}
          CasaCentralGG={CasaCentralGG}
          perico={perico}
          palpala={palpala}
          sanPedro={sanPedro}
          crearCampana={crearCampana}
        />
      ) : null}
    </>
  );
}
