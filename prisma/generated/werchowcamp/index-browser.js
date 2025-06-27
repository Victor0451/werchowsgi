
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

exports.Prisma.At2campanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.AtcampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  MAIL: 'MAIL',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.BlancampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.ReccampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.ReincampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.AuxcampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.PolicampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.At2campanaMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.AtcampanaMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.BlancampanaMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.ReccampanaMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.ReincampanaMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.AtcampanaSMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.ReccampanaSMScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
};

exports.Prisma.TempcampanaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  ID: 'ID'
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
  at2campana: 'at2campana',
  atcampana: 'atcampana',
  blancampana: 'blancampana',
  reccampana: 'reccampana',
  reincampana: 'reincampana',
  auxcampana: 'auxcampana',
  policampana: 'policampana',
  at2campanaM: 'at2campanaM',
  atcampanaM: 'atcampanaM',
  blancampanaM: 'blancampanaM',
  reccampanaM: 'reccampanaM',
  reincampanaM: 'reincampanaM',
  atcampanaSM: 'atcampanaSM',
  reccampanaSM: 'reccampanaSM',
  tempcampana: 'tempcampana'
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
