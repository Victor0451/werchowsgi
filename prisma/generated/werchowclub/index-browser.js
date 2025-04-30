
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.17.0-dev.38
 * Query Engine version: e6267db1c1bc827b8eb87f644288c3cb0800ec89
 */
Prisma.prismaVersion = {
  client: "4.17.0-dev.38",
  engine: "e6267db1c1bc827b8eb87f644288c3cb0800ec89"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BeneficiosScalarFieldEnum = {
  idbeneficio: 'idbeneficio',
  socio: 'socio',
  dni: 'dni',
  idcomercio: 'idcomercio',
  nombre: 'nombre',
  monto_compra: 'monto_compra',
  beneficio: 'beneficio',
  monto_final: 'monto_final',
  fecha: 'fecha',
  n_trans: 'n_trans',
  ape_nom: 'ape_nom'
};

exports.Prisma.ComerciosScalarFieldEnum = {
  idcomercio: 'idcomercio',
  comercio: 'comercio',
  rubro: 'rubro',
  direccion: 'direccion',
  beneficio: 'beneficio',
  localidad: 'localidad',
  estado: 'estado',
  descuento: 'descuento'
};

exports.Prisma.ConnacScalarFieldEnum = {
  idconvenio: 'idconvenio',
  convenio: 'convenio',
  estado: 'estado',
  pagina: 'pagina'
};

exports.Prisma.GanadoresScalarFieldEnum = {
  idganador: 'idganador',
  participante: 'participante',
  premio: 'premio',
  fecha: 'fecha',
  telefono: 'telefono',
  dni: 'dni'
};

exports.Prisma.Participantes_sorteoScalarFieldEnum = {
  participante: 'participante',
  dni: 'dni',
  doble: 'doble',
  estado: 'estado',
  telefono: 'telefono',
  idparticipante: 'idparticipante'
};

exports.Prisma.SociosScalarFieldEnum = {
  idsocio: 'idsocio',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  mail: 'mail',
  telefono: 'telefono',
  socio: 'socio',
  nosocio: 'nosocio',
  referido: 'referido',
  fecha_solicitud: 'fecha_solicitud',
  cargada: 'cargada'
};

exports.Prisma.Solicitud_sorteoScalarFieldEnum = {
  idsocio: 'idsocio',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  mail: 'mail',
  telefono: 'telefono',
  socio: 'socio',
  nosocio: 'nosocio',
  referido: 'referido',
  fecha_solicitud: 'fecha_solicitud',
  cargada: 'cargada',
  obra_soc: 'obra_soc'
};

exports.Prisma.Solicitud_sorteo_webScalarFieldEnum = {
  idnosocio: 'idnosocio',
  solicitante: 'solicitante',
  dni: 'dni',
  telefono: 'telefono',
  mail: 'mail',
  fecha: 'fecha',
  detalle: 'detalle',
  estado: 'estado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  beneficios: 'beneficios',
  comercios: 'comercios',
  connac: 'connac',
  ganadores: 'ganadores',
  participantes_sorteo: 'participantes_sorteo',
  socios: 'socios',
  solicitud_sorteo: 'solicitud_sorteo',
  solicitud_sorteo_web: 'solicitud_sorteo_web'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
