
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

exports.Prisma.AUT_PRACScalarFieldEnum = {
  ESP_PRAC: 'ESP_PRAC',
  CODIGOS: 'CODIGOS',
  DESCRIP: 'DESCRIP',
  FECHA_ALT: 'FECHA_ALT',
  ANULADO: 'ANULADO',
  COD_PRES01: 'COD_PRES01',
  PRECIO_01: 'PRECIO_01',
  SUC_01: 'SUC_01',
  COD_PRES02: 'COD_PRES02',
  PRECIO_02: 'PRECIO_02',
  SUC_02: 'SUC_02',
  COD_PRES03: 'COD_PRES03',
  PRECIO_03: 'PRECIO_03',
  SUC_03: 'SUC_03',
  COD_PRES04: 'COD_PRES04',
  PRECIO_04: 'PRECIO_04',
  SUC_04: 'SUC_04',
  COD_PRES05: 'COD_PRES05',
  PRECIO_05: 'PRECIO_05',
  SUC_05: 'SUC_05',
  COD_PRES06: 'COD_PRES06',
  PRECIO_06: 'PRECIO_06',
  SUC_06: 'SUC_06',
  COD_PRES07: 'COD_PRES07',
  PRECIO_07: 'PRECIO_07',
  SUC_07: 'SUC_07',
  COD_PRES08: 'COD_PRES08',
  PRECIO_08: 'PRECIO_08',
  SUC_08: 'SUC_08',
  COD_PRES09: 'COD_PRES09',
  PRECIO_09: 'PRECIO_09',
  SUC_09: 'SUC_09',
  COD_PRES10: 'COD_PRES10',
  PRECIO_10: 'PRECIO_10',
  SUC_10: 'SUC_10',
  COD_PRES11: 'COD_PRES11',
  PRECIO_11: 'PRECIO_11',
  SUC_11: 'SUC_11',
  COD_PRES12: 'COD_PRES12',
  PRECIO_12: 'PRECIO_12',
  SUC_12: 'SUC_12',
  COD_PRES13: 'COD_PRES13',
  PRECIO_13: 'PRECIO_13',
  SUC_13: 'SUC_13',
  COD_PRES14: 'COD_PRES14',
  PRECIO_14: 'PRECIO_14',
  SUC_14: 'SUC_14',
  COD_PRES15: 'COD_PRES15',
  PRECIO_15: 'PRECIO_15',
  SUC_15: 'SUC_15',
  COD_PRES16: 'COD_PRES16',
  PRECIO_16: 'PRECIO_16',
  SUC_16: 'SUC_16',
  COD_PRES17: 'COD_PRES17',
  PRECIO_17: 'PRECIO_17',
  SUC_17: 'SUC_17',
  COD_PRES18: 'COD_PRES18',
  PRECIO_18: 'PRECIO_18',
  SUC_18: 'SUC_18',
  COD_PRES19: 'COD_PRES19',
  PRECIO_19: 'PRECIO_19',
  SUC_19: 'SUC_19',
  COD_PRES20: 'COD_PRES20',
  PRECIO_20: 'PRECIO_20',
  SUC_20: 'SUC_20',
  idpractica: 'idpractica'
};

exports.Prisma.CAJAScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  CODIGO: 'CODIGO',
  MOVIM: 'MOVIM',
  CUENTA: 'CUENTA',
  IMPORTE: 'IMPORTE',
  TIPO: 'TIPO',
  SERIE: 'SERIE',
  NUMERO: 'NUMERO',
  CUIT: 'CUIT',
  DETALLE: 'DETALLE',
  DET_AUX: 'DET_AUX',
  FECHA: 'FECHA',
  FEC_COMP: 'FEC_COMP',
  HORA: 'HORA',
  ORIGEN: 'ORIGEN',
  OPERADOR: 'OPERADOR',
  ASIENTO: 'ASIENTO',
  EXENTO: 'EXENTO',
  CANT_AFIL: 'CANT_AFIL',
  CAE: 'CAE',
  VTO_CAE: 'VTO_CAE',
  iditem: 'iditem'
};

exports.Prisma.CONSULTAScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  COD_PRES: 'COD_PRES',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  DIAGNOSTIC: 'DIAGNOSTIC',
  ATENCION: 'ATENCION',
  NRO_DNI: 'NRO_DNI',
  idconsulta: 'idconsulta',
  SUC: 'SUC'
};

exports.Prisma.ENFERMERScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  PRACTICA: 'PRACTICA',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  NRO_DNI: 'NRO_DNI',
  idenfermer: 'idenfermer',
  CANTIDAD: 'CANTIDAD',
  SUC: 'SUC'
};

exports.Prisma.FARMACIAScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_DOC: 'NRO_DOC',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  MODO: 'MODO',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  FEC_USO: 'FEC_USO',
  CAN_MEDI: 'CAN_MEDI',
  MATRICULA: 'MATRICULA',
  HABILITA: 'HABILITA',
  idfarmacia: 'idfarmacia',
  SUC: 'SUC'
};

exports.Prisma.MEDICOS_TURNOSScalarFieldEnum = {
  idturno: 'idturno',
  turno: 'turno',
  fecha: 'fecha',
  hora: 'hora',
  doctor: 'doctor',
  paciente: 'paciente',
  obra_soc: 'obra_soc',
  telefono: 'telefono',
  estado: 'estado',
  operador: 'operador',
  domicilio: 'domicilio',
  mail: 'mail',
  dni: 'dni'
};

exports.Prisma.PRACTICAScalarFieldEnum = {
  SUC_PRA: 'SUC_PRA',
  CONTRATO: 'CONTRATO',
  NRO_DNI: 'NRO_DNI',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  PRAC_REA: 'PRAC_REA',
  CANT_PRA: 'CANT_PRA',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  COD_PRAC: 'COD_PRAC',
  idpractica: 'idpractica',
  DESCRIP: 'DESCRIP'
};

exports.Prisma.PRACT_ENFERScalarFieldEnum = {
  idpractica: 'idpractica',
  practica: 'practica',
  importe: 'importe'
};

exports.Prisma.PRESTADOScalarFieldEnum = {
  COD_PRES: 'COD_PRES',
  NOMBRE: 'NOMBRE',
  ESPEC: 'ESPEC',
  LIS_ESPE: 'LIS_ESPE',
  SUC: 'SUC',
  DIRECCION: 'DIRECCION',
  LOCALIDAD: 'LOCALIDAD',
  TELEFONOS: 'TELEFONOS',
  HORARIO1: 'HORARIO1',
  HORARIO2: 'HORARIO2',
  MODALIDAD: 'MODALIDAD',
  MATRICULA: 'MATRICULA',
  COD_POST: 'COD_POST',
  AUSENTE: 'AUSENTE',
  CUIT: 'CUIT',
  FEC_NAC: 'FEC_NAC',
  LUGAR: 'LUGAR',
  MALA_PRAXI: 'MALA_PRAXI',
  CON_PAGA: 'CON_PAGA',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  OTERO: 'OTERO',
  idprest: 'idprest',
  PROMO: 'PROMO'
};

exports.Prisma.USOSScalarFieldEnum = {
  SUC: 'SUC',
  ORDEN: 'ORDEN',
  CONTRATO: 'CONTRATO',
  NRO_ADH: 'NRO_ADH',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  EDAD: 'EDAD',
  SEXO: 'SEXO',
  OBRA_SOC: 'OBRA_SOC',
  FECHA: 'FECHA',
  FEC_CAJA: 'FEC_CAJA',
  HORA: 'HORA',
  SERVICIO: 'SERVICIO',
  NUSOS: 'NUSOS',
  MODALIDAD: 'MODALIDAD',
  VALOR: 'VALOR',
  IMPORTE: 'IMPORTE',
  PUESTO: 'PUESTO',
  PRESTADO: 'PRESTADO',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  RENDIDO: 'RENDIDO',
  FECHA_CIERRE: 'FECHA_CIERRE',
  EMPRESA: 'EMPRESA',
  iduso: 'iduso',
  CONTROL: 'CONTROL',
  NORDEN: 'NORDEN',
  FECHA_CONTROL: 'FECHA_CONTROL',
  IMP_LIQ: 'IMP_LIQ'
};

exports.Prisma.USOSFAScalarFieldEnum = {
  SUC: 'SUC',
  ORDEN: 'ORDEN',
  CONTRATO: 'CONTRATO',
  NRO_ADH: 'NRO_ADH',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  EDAD: 'EDAD',
  SEXO: 'SEXO',
  OBRA_SOC: 'OBRA_SOC',
  FECHA: 'FECHA',
  FEC_CAJA: 'FEC_CAJA',
  HORA: 'HORA',
  SERVICIO: 'SERVICIO',
  COMPROBA: 'COMPROBA',
  MODALIDAD: 'MODALIDAD',
  VALOR: 'VALOR',
  IMPORTE: 'IMPORTE',
  PUESTO: 'PUESTO',
  PRESTADO: 'PRESTADO',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_AUTO: 'OPE_AUTO',
  FEC_USO: 'FEC_USO',
  PEDIDO: 'PEDIDO',
  NRO_RECETA: 'NRO_RECETA',
  COMP: 'COMP',
  EMPRESA: 'EMPRESA',
  N_SERIE: 'N_SERIE',
  N_RECIBO: 'N_RECIBO',
  IMP_NC: 'IMP_NC',
  CONTROL: 'CONTROL',
  NORDEN: 'NORDEN',
  FECHA_CONTROL: 'FECHA_CONTROL',
  iduso: 'iduso',
  IMP_LIQ: 'IMP_LIQ'
};

exports.Prisma.Adherent_proviScalarFieldEnum = {
  idadherent: 'idadherent',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  EMPRESA: 'EMPRESA',
  ESTADO: 'ESTADO'
};

exports.Prisma.AusenciasScalarFieldEnum = {
  idausencia: 'idausencia',
  cod_pres: 'cod_pres',
  prestador: 'prestador',
  motivo: 'motivo',
  desde: 'desde',
  hasta: 'hasta',
  observacion: 'observacion',
  estado: 'estado',
  operador: 'operador'
};

exports.Prisma.NosociosScalarFieldEnum = {
  idnosocio: 'idnosocio',
  nosocio: 'nosocio',
  dni: 'dni',
  telefono: 'telefono',
  mail: 'mail',
  obra_soc: 'obra_soc',
  fecha: 'fecha',
  codigo: 'codigo',
  gremio: 'gremio',
  estado: 'estado',
  otra_os: 'otra_os'
};

exports.Prisma.PacientesScalarFieldEnum = {
  idpaciente: 'idpaciente',
  paciente: 'paciente',
  dni: 'dni',
  obra_soc: 'obra_soc',
  telefono: 'telefono',
  domicilio: 'domicilio',
  mail: 'mail'
};

exports.Prisma.Planes_odontologicosScalarFieldEnum = {
  idplan: 'idplan',
  plan: 'plan',
  pago_inicial: 'pago_inicial',
  pago_cuota: 'pago_cuota',
  pago_final: 'pago_final',
  cuotas: 'cuotas',
  detalle: 'detalle',
  visitas: 'visitas',
  fecha_plan: 'fecha_plan',
  total: 'total',
  estado: 'estado',
  detalle_plan: 'detalle_plan'
};

exports.Prisma.Planes_socioScalarFieldEnum = {
  idplansocio: 'idplansocio',
  contrato: 'contrato',
  dni: 'dni',
  socio: 'socio',
  fecha: 'fecha',
  total: 'total',
  pagado: 'pagado',
  saldo: 'saldo',
  estado: 'estado',
  prestador: 'prestador',
  prestador_nombre: 'prestador_nombre',
  operador: 'operador',
  sucursal: 'sucursal',
  plan: 'plan',
  contencion: 'contencion'
};

exports.Prisma.Planes_visitasScalarFieldEnum = {
  idvisita: 'idvisita',
  idplan: 'idplan',
  nvisita: 'nvisita',
  pago: 'pago',
  fecha: 'fecha',
  pagado: 'pagado',
  operador: 'operador',
  plan: 'plan'
};

exports.Prisma.PromocionesScalarFieldEnum = {
  idpromo: 'idpromo',
  pot1: 'pot1',
  pot2: 'pot2',
  pint1: 'pint1',
  pint2: 'pint2'
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
  AUT_PRAC: 'AUT_PRAC',
  CAJA: 'CAJA',
  CONSULTA: 'CONSULTA',
  ENFERMER: 'ENFERMER',
  FARMACIA: 'FARMACIA',
  MEDICOS_TURNOS: 'MEDICOS_TURNOS',
  PRACTICA: 'PRACTICA',
  PRACT_ENFER: 'PRACT_ENFER',
  PRESTADO: 'PRESTADO',
  USOS: 'USOS',
  USOSFA: 'USOSFA',
  adherent_provi: 'adherent_provi',
  ausencias: 'ausencias',
  nosocios: 'nosocios',
  pacientes: 'pacientes',
  planes_odontologicos: 'planes_odontologicos',
  planes_socio: 'planes_socio',
  planes_visitas: 'planes_visitas',
  promociones: 'promociones'
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
