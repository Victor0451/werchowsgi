import config from "config";
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //chek for token

  if (!token)
    return res
      .status(401)
      .json({ msg: "No hay token, autorizacion degnegada" });

  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token Invalido" });
  }
}
module.exports = auth;
