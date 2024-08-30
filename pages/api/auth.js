import bcrypt from "bcryptjs";
import config from "config";
import jwt from "jsonwebtoken";
import auth from "../../hook/auth";
import { Werchow, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "operadores") {
      const operadores = await SGI.operador.findMany({
        where: {
          estado: true,
        },
      });
      res.status(200).json(operadores);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "login") {
      const { usuario, contrasena } = req.body;

      // chek usuario existente
      await SGI.operador
        .findFirst({
          where: {
            usuario: usuario,
          },
        })
        .then((user) => {
          if (!user) {
            res.status(400).json({ msg: "Usuario Ingresado No Existe" });
          } else if (user.estado === 0) {
            res.status(400).json({ msg: "Usuario Dado de Baja" });
          } else {
            //Validate password
            bcrypt.compare(contrasena, user.contrasena).then((isMatch) => {
              if (!isMatch) {
                res.status(400).json({ msg: "Credenciales Invalidas" });
              }
              {
                jwt.sign(
                  { id: user.id },
                  config.get("jwtSecret"),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                      token,
                      user: {
                        id: user.id,
                        usuario: user.usuario,
                        contrasena: user.contrasena,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        perfil: user.perfil,
                        estado: user.estado,
                        puestom: user.puestom,
                        seriem: user.seriem,
                        m: user.m,
                        puestow: user.puestow,
                        seriew: user.seriew,
                        w: user.w,
                        codigo: user.codigo,
                        medicos: user.medicos,
                        sucursal: user.sucursal,
                        prestamos: user.prestamos,
                        ordenpago: user.ordenpago,
                        clubwerchow: user.clubwerchow,
                        ventas: user.ventas,
                        campanas: user.campanas,
                        socios: user.socios,
                        sepelio: user.sepelio,
                        administracion: user.administracion,
                        contabilidad: user.contabilidad,
                        gestion: user.gestion,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                      },
                    });
                  }
                );
              }
            });
          }
        });
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "cambiar contrasena") {
      let contra = req.body.contra;

      //Create salt & hash

      await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(contra, salt, (err, hash) => {
          if (err) throw err;
          contra = hash;
          SGI.operador
            .update({
              data: {
                contrasena: contra,
              },
              where: {
                usuario: req.body.id,
              },
            })
            .then((operador) => {
              res.status(200).json(operador);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        });
      });
    }
  }
}
