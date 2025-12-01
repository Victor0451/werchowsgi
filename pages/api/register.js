import bcrypt from "bcryptjs";
import configs from "config";
import jwt from "jsonwebtoken";
import auth from "../../hook/auth";
import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.f && req.body.f === "register") {
      const { usuario, contrasena, nombre, apellido, perfil } = req.body;

      // Check if user already exists
      const existingUser = await sgi.query(
        `
        SELECT *
        FROM operador
        WHERE usuario = '${usuario}'
        `
      );

      if (existingUser.length > 0) {
        await sgi.end();
        return res.status(400).json({ msg: "Usuario ya existe" });
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

      // Insert new user
      await sgi.query(
        `
        INSERT INTO operador (usuario, contrasena, nombre, apellido, perfil, estado, createdAt, updatedAt)
        VALUES ('${usuario}', '${hashedPassword}', '${nombre}', '${apellido}', '${perfil}', 1, NOW(), NOW())
        `
      );

      const newUser = await sgi.query(`SELECT LAST_INSERT_ID() as id`);

      await sgi.end();

      // Optionally, generate token for auto-login
      const token = jwt.sign(
        { id: newUser[0].id },
        configs.get("jwtSecret"),
        { expiresIn: 3600 }
      );

      res.status(200).json({
        msg: "Usuario registrado exitosamente",
        token,
        user: {
          id: newUser[0].id,
          usuario,
          nombre,
          apellido,
          perfil,
          estado: 1,
        },
      });
    }
  } else {
    res.status(405).json({ msg: "Método no permitido" });
  }
}