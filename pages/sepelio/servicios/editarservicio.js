import React, { useState, useEffect } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import FormEditarServicio from "@/components/sepelio/servicios/FormEditarServicio";
import { useRouter } from "next/router";

const editarservicio = () => {
  const { usu } = useWerchow();
  const { isLoading } = useUser();
  const router = useRouter();

  const [servicio, guardarServicio] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [ataudes, guardarAtaudes] = useState([]);
  const [ataudSel, guardarAtaudSel] = useState({});
  const [ataudOriginal, guardarAtaudOriginal] = useState(null); // ID del ataúd original
  const [parcelas, guardarParcelas] = useState([]);
  const [parceSel, guardarParceSel] = useState({});
  const [parcelaOriginal, guardarParcelaOriginal] = useState(null); // ID de la parcela original
  const [lugarSel, guardarLugarSel] = useState(null); // Lugar seleccionado (1, 2, o 3)
  const [lugarOriginal, guardarLugarOriginal] = useState(null); // Lugar original
  const [cremacionSel, guardarCremacionSel] = useState(false);
  const [donacionSel, guardarDonacionSel] = useState(false);
  const [domicilioSel, guardarDomicilioSel] = useState(false);

  // Obtener el ID del servicio desde la URL
  const idservicio = router.query.id;

  const traerServicio = async (listaAtaudes = [], listaParcelas = []) => {
    if (!idservicio) return;

    await axios
      .get("/api/sepelio/servicios", {
        params: {
          f: "legajo servicio",
          id: idservicio,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          const serv = res.data[0];
          guardarServicio(serv);

          // Configurar estados iniciales
          guardarCremacionSel(serv.cremacion);
          guardarDonacionSel(serv.donacion);
          guardarDomicilioSel(serv.serv_domicilio);

          // Guardar el ID del ataúd original para control de inventario
          guardarAtaudOriginal(serv.idataud);

          // Guardar la parcela original para control de cambios
          if (serv.idparcela) {
            guardarParcelaOriginal(serv.idparcela);
          }

          // Usar la lista pasada por argumento o el estado
          const ataudesData = listaAtaudes.length > 0 ? listaAtaudes : ataudes;

          // Buscar la información completa del ataúd en la lista de ataúdes
          const ataudEncontrado = ataudesData.find(a => a.idataud === serv.idataud);

          if (ataudEncontrado) {
            guardarAtaudSel({
              idataud: ataudEncontrado.idataud,
              nombre: ataudEncontrado.nombre,
              uso: ataudEncontrado.uso,
              stock: ataudEncontrado.stock,
            });
          } else {
            // Si no se encuentra en la lista, guardar solo el ID
            guardarAtaudSel({
              idataud: serv.idataud,
              nombre: "",
              uso: "",
              stock: 0,
            });
          }

          // Usar la lista pasada por argumento o el estado
          const parcelasData = listaParcelas.length > 0 ? listaParcelas : parcelas;

          // Buscar la información completa de la parcela si existe
          if (serv.idparcela) {
            const parcelaEncontrada = parcelasData.find(p => p.idparcela === serv.idparcela);

            if (parcelaEncontrada) {
              guardarParceSel({
                idparcela: parcelaEncontrada.idparcela,
                parcela: parcelaEncontrada.parcela,
                mza: parcelaEncontrada.mza,
                lote: parcelaEncontrada.lote,
                lugares: parcelaEncontrada.lugares,
                cementerio: parcelaEncontrada.cementerio,
              });
            } else {
              guardarParceSel({
                idparcela: serv.idparcela,
                parcela: "",
                mza: "",
                lote: "",
                lugares: 0,
                cementerio: "",
              });
            }

            // Obtener el lugar asignado de la tabla parcelas_lugares
            axios.get("/api/sepelio/parcelas", {
              params: {
                f: "traer lugar servicio",
                idservicio: serv.idservicio,
              },
            }).then((resLugar) => {
              if (resLugar.data && resLugar.data.length > 0) {
                const lugar = resLugar.data[0].lugar;
                guardarLugarSel(lugar);
                guardarLugarOriginal(lugar);
              }
            }).catch((error) => {
              console.log("Error al obtener lugar:", error);
            });
          }
        } else {
          toast.error("No se encontró el servicio");
          router.push("/sepelio/servicios/listadoservicio");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrió un error al traer los datos del servicio");
      });
  };

  const traerDatos = async () => {
    let ataudesList = [];
    let parcelasList = [];

    try {
      const resAtaudes = await axios.get(`/api/sepelio/ataudes`, {
        params: {
          f: "list ataudes",
        },
      });
      if (resAtaudes.data.length > 0) {
        ataudesList = resAtaudes.data;
        guardarAtaudes(resAtaudes.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al generar el listado de ataúdes");
    }

    try {
      const resParcelas = await axios.get(`/api/sepelio/parcelas`, {
        params: {
          f: "list parcelas",
        },
      });
      if (resParcelas.data.length > 0) {
        parcelasList = resParcelas.data;
        guardarParcelas(resParcelas.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al generar el listado de parcelas");
    }

    traerServicio(ataudesList, parcelasList);
  };

  const handleChange = (f, value) => {
    if (f === "cremacion") {
      guardarCremacionSel(value === "SI");
    } else if (f === "donacion") {
      guardarDonacionSel(value === "SI");
    } else if (f === "domicilio") {
      guardarDomicilioSel(value === "SI");
    }
  };

  const regAtaud = (row) => {
    const ata = {
      idataud: row.idataud,
      nombre: row.nombre,
      uso: row.uso,
      stock: row.stock,
    };

    guardarAtaudSel(ata);
  };

  const regParceConLugar = (parcela, lugar) => {
    const par = {
      idparcela: parcela.idparcela,
      parcela: parcela.parcela,
      mza: parcela.mza,
      lote: parcela.lote,
      lugares: parcela.lugares,
      cementerio: parcela.cementerio,
    };

    guardarParceSel(par);
    guardarLugarSel(lugar);

    toast.success(`Parcela ${parcela.parcela} - Lugar ${lugar} seleccionado`);


  };

  const actualizarServicio = async (datosFormulario) => {
    guardarErrores(null);

    const servicioActualizado = {
      idservicio: servicio.idservicio,
      apellido: datosFormulario.apellido,
      nombre: datosFormulario.nombre,
      edad: datosFormulario.edad,
      telefono: datosFormulario.telefono,
      movil: datosFormulario.movil,
      fecha_fallecimiento: datosFormulario.fecha_fallecimiento,
      lugar_fallecimiento: datosFormulario.lugar_fallecimiento,
      casa_mortuaria: datosFormulario.casa_mortuaria,
      fecha_inhumacion: datosFormulario.fecha_inhumacion,
      hora_inhumacion: datosFormulario.hora_inhumacion,
      cementerio: datosFormulario.cementerio,
      altura: datosFormulario.altura,
      peso: datosFormulario.peso,
      motivo: datosFormulario.motivo,
      retiro: datosFormulario.retiro,
      solicitado: datosFormulario.solicitado,
      parentesco: datosFormulario.parentesco,
      dni_solicitante: datosFormulario.dni_solicitante,
      domicilio_solicitante: datosFormulario.domicilio_solicitante,
      cremacion: cremacionSel,
      donacion: donacionSel,
      serv_domicilio: domicilioSel,
      idataud: ataudSel.idataud,
      idparcela: parceSel.idparcela || 0,
      detalle_corona: datosFormulario.detalle_corona,
      religion: datosFormulario.religion,
      estado_civil: datosFormulario.estado_civil,
      importe_servicio: datosFormulario.importe_servicio || 0,
      conyugue: datosFormulario.conyugue,
      f: "actualizar servicio",
    };

    // Validaciones
    if (!servicioActualizado.apellido) {
      guardarErrores("Debes ingresar el apellido del difunto");
      return;
    } else if (!servicioActualizado.nombre) {
      guardarErrores("Debes ingresar el nombre del difunto");
      return;
    } else if (!servicioActualizado.edad) {
      guardarErrores("Debes ingresar la edad del difunto");
      return;
    } else if (!servicioActualizado.fecha_fallecimiento) {
      guardarErrores("Debes ingresar la fecha de fallecimiento del difunto");
      return;
    } else if (!servicioActualizado.lugar_fallecimiento) {
      guardarErrores("Debes ingresar el lugar de fallecimiento del difunto");
      return;
    } else if (!servicioActualizado.altura) {
      guardarErrores("Debes ingresar la altura del difunto");
      return;
    } else if (!servicioActualizado.peso) {
      guardarErrores("Debes ingresar el peso del difunto");
      return;
    } else if (!servicioActualizado.motivo) {
      guardarErrores("Debes ingresar el detalle o motivo de fallecimiento");
      return;
    } else if (!servicioActualizado.retiro) {
      guardarErrores("Debes ingresar el lugar donde se retirará al difunto");
      return;
    } else if (!servicioActualizado.casa_mortuaria) {
      guardarErrores("Debes ingresar la casa mortuaria");
      return;
    } else if (!servicioActualizado.fecha_inhumacion) {
      guardarErrores("Debes ingresar la fecha de inhumación");
      return;
    } else if (!servicioActualizado.hora_inhumacion) {
      guardarErrores("Debes ingresar la hora de inhumación");
      return;
    } else if (!servicioActualizado.cementerio) {
      guardarErrores("Debes ingresar el cementerio");
      return;
    } else if (!servicioActualizado.solicitado) {
      guardarErrores("Debes ingresar el solicitante del servicio");
      return;
    } else if (!servicioActualizado.dni_solicitante) {
      guardarErrores("Debes ingresar el DNI del solicitante");
      return;
    } else if (!servicioActualizado.parentesco) {
      guardarErrores("Debes seleccionar el parentesco del solicitante");
      return;
    } else if (!servicioActualizado.domicilio_solicitante) {
      guardarErrores("Debes ingresar el domicilio del solicitante");
      return;
    } else if (!servicioActualizado.idataud) {
      guardarErrores("Debes seleccionar el ataúd del difunto");
      return;
    }

    // Verificar si cambió el ataúd para actualizar el inventario
    const ataudCambio = ataudOriginal && ataudOriginal !== ataudSel.idataud;

    try {
      // Si cambió el ataúd, actualizar inventario
      if (ataudCambio) {
        // Buscar el ataúd original en la lista para obtener su stock actual
        const ataudAnterior = ataudes.find(a => a.idataud === ataudOriginal);
        const ataudNuevo = ataudes.find(a => a.idataud === ataudSel.idataud);

        if (ataudAnterior) {
          // Incrementar stock del ataúd anterior (se devuelve)
          await axios.put(`/api/sepelio/ataudes`, {
            f: "act stock servicio",
            idataud: ataudOriginal,
            nuevo: ataudAnterior.stock + 1,
          });
        }

        if (ataudNuevo) {
          // Decrementar stock del ataúd nuevo (se usa)
          await axios.put(`/api/sepelio/ataudes`, {
            f: "act stock servicio",
            idataud: ataudSel.idataud,
            nuevo: ataudNuevo.stock - 1,
          });
        }
      }

      // Verificar si cambió la parcela o el lugar para actualizar
      const parcelaCambio = parceSel.idparcela && (parcelaOriginal !== parceSel.idparcela || lugarOriginal !== lugarSel);

      if (parcelaCambio && parceSel.idparcela && lugarSel) {

        await axios.put("/api/sepelio/parcelas", {
          f: "editar parcela servicio",
          idservicio: servicio.idservicio,
          idparcela_original: parcelaOriginal,
          idparcela_nueva: parceSel.idparcela,
          lugar_nuevo: lugarSel,
          operador: usu.usuario,
          dni: servicio.dni,
          contrato: servicio.contrato,
          fecha: moment().format("YYYY-MM-DD"),
        });

      }

      // Actualizar el servicio
      const res = await axios.put(`/api/sepelio/servicios`, servicioActualizado);

      if (res.status === 200) {
        toast.success("Servicio actualizado correctamente");

        let accionHis = `Se actualizó el servicio ID: ${servicio.idservicio} del extinto: ${servicioActualizado.apellido}, ${servicioActualizado.nombre} - DNI: ${servicio.dni}`;

        registrarHistoria(accionHis, usu.usuario);

        setTimeout(() => {
          router.push("/sepelio/servicios/listadoservicio");
        }, 500);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al actualizar el servicio");
    }
  };

  // useEffect para manejar el query de Router cuando se refresca la página
  useEffect(() => {
    if (router.isReady && idservicio) {
      traerDatos();
    }
  }, [router.isReady, idservicio]);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          {servicio && (
            <FormEditarServicio
              servicio={servicio}
              errores={errores}
              handleChange={handleChange}
              actualizarServicio={actualizarServicio}
              ataudes={ataudes}
              usu={usu}
              regAtaud={regAtaud}
              ataudSel={ataudSel}
              parcelas={parcelas}
              parceSel={parceSel}
              regParceConLugar={regParceConLugar}
              lugarSel={lugarSel}
              cremacionSel={cremacionSel}
              donacionSel={donacionSel}
              domicilioSel={domicilioSel}
            />
          )}
        </>
      )}
    </>
  );
};

export default editarservicio;
