
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

exports.Prisma.C1000ScalarFieldEnum = {
  id: 'id',
  zona: 'zona',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  descr: 'descr'
};

exports.Prisma.C1000mScalarFieldEnum = {
  zona: 'zona',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  descr: 'descr',
  id: 'id'
};

exports.Prisma.CbancoScalarFieldEnum = {
  id: 'id',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  sucursal: 'sucursal',
  descr: 'descr'
};

exports.Prisma.CconvenioScalarFieldEnum = {
  id_mora: 'id_mora',
  tipo: 'tipo',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  sucursal: 'sucursal'
};

exports.Prisma.CpoliciaScalarFieldEnum = {
  id: 'id',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  sucursal: 'sucursal',
  descr: 'descr'
};

exports.Prisma.CprestamosScalarFieldEnum = {
  id: 'id',
  total: 'total',
  cobrado: 'cobrado',
  mes: 'mes',
  ano: 'ano',
  sucursal: 'sucursal',
  descr: 'descr',
  fichas: 'fichas',
  fichascob: 'fichascob',
  adelantado: 'adelantado'
};

exports.Prisma.CtjtScalarFieldEnum = {
  id: 'id',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  adelantado: 'adelantado',
  sucursal: 'sucursal',
  descr: 'descr'
};

exports.Prisma.CtjtmScalarFieldEnum = {
  grupo: 'grupo',
  total: 'total',
  fichas: 'fichas',
  cobrado: 'cobrado',
  fichascob: 'fichascob',
  mes: 'mes',
  ano: 'ano',
  sucursal: 'sucursal',
  adelantado: 'adelantado',
  descr: 'descr',
  id: 'id'
};

exports.Prisma.M1000ScalarFieldEnum = {
  idm1000: 'idm1000',
  zona: 'zona',
  descr: 'descr',
  fichasinicial: 'fichasinicial',
  morainicial: 'morainicial',
  fichasactual: 'fichasactual',
  moraactual: 'moraactual',
  mes: 'mes',
  ano: 'ano',
  fecha_actualizacion: 'fecha_actualizacion',
  fecha_creacion: 'fecha_creacion'
};

exports.Prisma.MtjtScalarFieldEnum = {
  idmtjt: 'idmtjt',
  grupo: 'grupo',
  descr: 'descr',
  fichasinicial: 'fichasinicial',
  morainicial: 'morainicial',
  fichasactual: 'fichasactual',
  moraactual: 'moraactual',
  mes: 'mes',
  ano: 'ano',
  fecha_actualizacion: 'fecha_actualizacion',
  fecha_creacion: 'fecha_creacion'
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
  c1000: 'c1000',
  c1000m: 'c1000m',
  cbanco: 'cbanco',
  cconvenio: 'cconvenio',
  cpolicia: 'cpolicia',
  cprestamos: 'cprestamos',
  ctjt: 'ctjt',
  ctjtm: 'ctjtm',
  m1000: 'm1000',
  mtjt: 'mtjt'
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
