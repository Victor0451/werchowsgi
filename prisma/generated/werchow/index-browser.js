
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

exports.Prisma.AccionesScalarFieldEnum = {
  acc_id: 'acc_id',
  acc_fecha: 'acc_fecha',
  acc_detalle: 'acc_detalle',
  acc_descrip: 'acc_descrip',
  acc_estado: 'acc_estado',
  acc_lugar: 'acc_lugar',
  acc_tipo: 'acc_tipo',
  acc_cta_asocia: 'acc_cta_asocia'
};

exports.Prisma.AdherentScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CLAVE: 'CLAVE',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  SEXO: 'SEXO',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  PARENT: 'PARENT',
  PAMI: 'PAMI',
  OBRA_SOC: 'OBRA_SOC',
  SEGURO: 'SEGURO',
  PRODUCTOR: 'PRODUCTOR',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  BENEF: 'BENEF',
  ORDEN: 'ORDEN',
  ACTUALIZA: 'ACTUALIZA',
  EDAD: 'EDAD',
  VIG_OPT: 'VIG_OPT',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  DECL_JUR: 'DECL_JUR',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  TICOMISE: 'TICOMISE',
  PACOMISE: 'PACOMISE',
  ESTADO: 'ESTADO',
  idadherent: 'idadherent'
};

exports.Prisma.Alta_adheScalarFieldEnum = {
  adhe_id: 'adhe_id',
  adhe_fechacarga: 'adhe_fechacarga',
  adhe_fechafi: 'adhe_fechafi',
  adhe_asesor: 'adhe_asesor',
  adhe_contrato: 'adhe_contrato',
  adhe_apellido: 'adhe_apellido',
  adhe_nombre: 'adhe_nombre',
  adhe_dni: 'adhe_dni',
  adhe_fecnac: 'adhe_fecnac',
  adhe_paren: 'adhe_paren',
  adhe_recibo: 'adhe_recibo',
  adhe_monto: 'adhe_monto',
  adhe_pago: 'adhe_pago',
  adhe_fecpago: 'adhe_fecpago',
  adhe_estado: 'adhe_estado'
};

exports.Prisma.AnticiposScalarFieldEnum = {
  ant_id: 'ant_id',
  ant_fecha: 'ant_fecha',
  ant_empleado: 'ant_empleado',
  ant_anticipo: 'ant_anticipo',
  ant_autorizo: 'ant_autorizo',
  ant_estado: 'ant_estado',
  ant_carga: 'ant_carga'
};

exports.Prisma.BajasScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  PRECIO: 'PRECIO',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  PAMI: 'PAMI',
  OBRA_SOC: 'OBRA_SOC',
  SEGURO: 'SEGURO',
  PRODUCTOR: 'PRODUCTOR',
  PROD_DEB: 'PROD_DEB',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  TRASPASO: 'TRASPASO',
  FEC_REAFIL: 'FEC_REAFIL',
  NUM_REAFIL: 'NUM_REAFIL',
  LEGAJO: 'LEGAJO',
  COD_POST: 'COD_POST',
  VIG_OPT: 'VIG_OPT',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  DECL_JUR: 'DECL_JUR',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  ANTICIPO: 'ANTICIPO',
  CUOTAS: 'CUOTAS',
  MAIL: 'MAIL',
  idbajas: 'idbajas'
};

exports.Prisma.BancosScalarFieldEnum = {
  bco_id: 'bco_id',
  bco_nombre: 'bco_nombre',
  bco_tipo: 'bco_tipo',
  bco_descrip: 'bco_descrip',
  bco_estado: 'bco_estado'
};

exports.Prisma.Caja_sucursalScalarFieldEnum = {
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
  iditem: 'iditem',
  idcaja: 'idcaja',
  estado: 'estado',
  usuario: 'usuario'
};

exports.Prisma.CajasScalarFieldEnum = {
  cj_id: 'cj_id',
  cj_nombre: 'cj_nombre',
  cj_descrip: 'cj_descrip',
  cj_estado: 'cj_estado',
  cj_tipo: 'cj_tipo',
  cj_suc: 'cj_suc'
};

exports.Prisma.CertificadosScalarFieldEnum = {
  cer_id: 'cer_id',
  cer_fecha: 'cer_fecha',
  cer_us: 'cer_us',
  cer_contrato: 'cer_contrato'
};

exports.Prisma.Cuota_prestamoScalarFieldEnum = {
  cuoptm_id: 'cuoptm_id',
  cuoptm_capital: 'cuoptm_capital',
  cuoptm_cantidad: 'cuoptm_cantidad',
  cuoptm_cuota: 'cuoptm_cuota',
  cuoptm_cuotaant: 'cuoptm_cuotaant'
};

exports.Prisma.Cuotas_adeudadasScalarFieldEnum = {
  id_deuda: 'id_deuda',
  contrato: 'contrato',
  monto_cuota: 'monto_cuota',
  cuotas_adeudadas: 'cuotas_adeudadas'
};

exports.Prisma.DebitosScalarFieldEnum = {
  dbt_id: 'dbt_id',
  dbt_descripcion: 'dbt_descripcion',
  dbt_estado: 'dbt_estado'
};

exports.Prisma.Liq_temporalScalarFieldEnum = {
  liqtmp_id: 'liqtmp_id',
  liqtmp_recup: 'liqtmp_recup',
  liqtmp_mes: 'liqtmp_mes',
  liqtmp_totcomi: 'liqtmp_totcomi',
  liqtmp_bono: 'liqtmp_bono',
  liqtmp_totcobrado: 'liqtmp_totcobrado',
  liq_tmp_basico: 'liq_tmp_basico'
};

exports.Prisma.LiquidacionesScalarFieldEnum = {
  liq_id: 'liq_id',
  liq_fecha: 'liq_fecha',
  liq_emp: 'liq_emp',
  liq_socio: 'liq_socio',
  liq_nombre: 'liq_nombre',
  liq_accion: 'liq_accion',
  liq_plan: 'liq_plan',
  liq_fpago: 'liq_fpago',
  liq_recup: 'liq_recup',
  liq_monto: 'liq_monto',
  liq_canrec: 'liq_canrec',
  liq_recibo: 'liq_recibo',
  liq_cuotas: 'liq_cuotas',
  liq_estado: 'liq_estado',
  liq_fechacarga: 'liq_fechacarga',
  liq_caja: 'liq_caja',
  liq_rendido: 'liq_rendido',
  liq_fechren: 'liq_fechren',
  liq_rein: 'liq_rein'
};

exports.Prisma.LocalidadScalarFieldEnum = {
  local_id: 'local_id',
  local_descrip: 'local_descrip'
};

exports.Prisma.MaestroScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  PRECIO: 'PRECIO',
  CUO_VIEJA: 'CUO_VIEJA',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PROD_DEB: 'PROD_DEB',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  TRASPASO: 'TRASPASO',
  FEC_REAFIL: 'FEC_REAFIL',
  NUM_REAFIL: 'NUM_REAFIL',
  SEGURO: 'SEGURO',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  VIG_OPT: 'VIG_OPT',
  DECL_JUR: 'DECL_JUR',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  ANTICIPO: 'ANTICIPO',
  CUOTAS: 'CUOTAS',
  CAMBIO: 'CAMBIO',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  CANT_TRASP: 'CANT_TRASP',
  PGO_TRASP: 'PGO_TRASP',
  MAY_21: 'MAY_21',
  MAY_65: 'MAY_65',
  INTEG: 'INTEG',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL'
};

exports.Prisma.Maestro22ScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  PRECIO: 'PRECIO',
  CUO_VIEJA: 'CUO_VIEJA',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PROD_DEB: 'PROD_DEB',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  TRASPASO: 'TRASPASO',
  FEC_REAFIL: 'FEC_REAFIL',
  NUM_REAFIL: 'NUM_REAFIL',
  SEGURO: 'SEGURO',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  VIG_OPT: 'VIG_OPT',
  DECL_JUR: 'DECL_JUR',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  ANTICIPO: 'ANTICIPO',
  CUOTAS: 'CUOTAS',
  CAMBIO: 'CAMBIO',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  CANT_TRASP: 'CANT_TRASP',
  PGO_TRASP: 'PGO_TRASP',
  MAY_21: 'MAY_21',
  MAY_65: 'MAY_65',
  INTEG: 'INTEG',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL'
};

exports.Prisma.Maestro_bisScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  PRECIO: 'PRECIO',
  CUO_VIEJA: 'CUO_VIEJA',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PROD_DEB: 'PROD_DEB',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  TRASPASO: 'TRASPASO',
  FEC_REAFIL: 'FEC_REAFIL',
  NUM_REAFIL: 'NUM_REAFIL',
  SEGURO: 'SEGURO',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  VIG_OPT: 'VIG_OPT',
  DECL_JUR: 'DECL_JUR',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  ANTICIPO: 'ANTICIPO',
  CUOTAS: 'CUOTAS',
  CAMBIO: 'CAMBIO',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  CANT_TRASP: 'CANT_TRASP',
  PGO_TRASP: 'PGO_TRASP',
  MAY_21: 'MAY_21',
  MAY_65: 'MAY_65',
  INTEG: 'INTEG',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL'
};

exports.Prisma.MemoScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  MEMO: 'MEMO',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ID: 'ID'
};

exports.Prisma.MesesScalarFieldEnum = {
  mes: 'mes'
};

exports.Prisma.MutualScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  PRECIO: 'PRECIO',
  CUO_VIEJA: 'CUO_VIEJA',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PROD_DEB: 'PROD_DEB',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  TRASPASO: 'TRASPASO',
  FEC_REAFIL: 'FEC_REAFIL',
  NUM_REAFIL: 'NUM_REAFIL',
  SEGURO: 'SEGURO',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  VIG_OPT: 'VIG_OPT',
  DECL_JUR: 'DECL_JUR',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  ANTICIPO: 'ANTICIPO',
  CUOTAS: 'CUOTAS',
  CAMBIO: 'CAMBIO',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  CANT_TRASP: 'CANT_TRASP',
  PGO_TRASP: 'PGO_TRASP',
  MAY_21: 'MAY_21',
  MAY_65: 'MAY_65',
  INTEG: 'INTEG',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL',
  idmutual: 'idmutual'
};

exports.Prisma.Mutual_adhScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CLAVE: 'CLAVE',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  SEXO: 'SEXO',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  VIGENCIA: 'VIGENCIA',
  ALT_SEG: 'ALT_SEG',
  VIG_SEG: 'VIG_SEG',
  ENC_SEG: 'ENC_SEG',
  VIG_AYUDA: 'VIG_AYUDA',
  PARENT: 'PARENT',
  PAMI: 'PAMI',
  OBRA_SOC: 'OBRA_SOC',
  SEGURO: 'SEGURO',
  PRODUCTOR: 'PRODUCTOR',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  FEC_PLAN: 'FEC_PLAN',
  MOD_1: 'MOD_1',
  PRO_1: 'PRO_1',
  MOD_2: 'MOD_2',
  PRO_2: 'PRO_2',
  MOD_3: 'MOD_3',
  PRO_3: 'PRO_3',
  MOD_4: 'MOD_4',
  PRO_4: 'PRO_4',
  MOD_5: 'MOD_5',
  TSEG: 'TSEG',
  PRO_5: 'PRO_5',
  MOD_6: 'MOD_6',
  PRO_6: 'PRO_6',
  MOD_7: 'MOD_7',
  PRO_7: 'PRO_7',
  MOD_8: 'MOD_8',
  PRO_8: 'PRO_8',
  MOD_9: 'MOD_9',
  PRO_9: 'PRO_9',
  MOD_10: 'MOD_10',
  PRO_10: 'PRO_10',
  MOD_11: 'MOD_11',
  PRO_11: 'PRO_11',
  MOD_12: 'MOD_12',
  PRO_12: 'PRO_12',
  TOT_MOD: 'TOT_MOD',
  BENEF: 'BENEF',
  ORDEN: 'ORDEN',
  ACTUALIZA: 'ACTUALIZA',
  EDAD: 'EDAD',
  VIG_OPT: 'VIG_OPT',
  VIG_SUB: 'VIG_SUB',
  VIG_CONSU: 'VIG_CONSU',
  VIG_SMEDI: 'VIG_SMEDI',
  DECL_JUR: 'DECL_JUR',
  TIPO_COMI: 'TIPO_COMI',
  PAGA_COMI: 'PAGA_COMI',
  TIPO_SEGU: 'TIPO_SEGU',
  PAGO_SEGU: 'PAGO_SEGU',
  TICOMISE: 'TICOMISE',
  PACOMISE: 'PACOMISE',
  id_adherente: 'id_adherente'
};

exports.Prisma.Obra_socScalarFieldEnum = {
  CODIGO: 'CODIGO',
  NOMBRE: 'NOMBRE',
  DETALLE: 'DETALLE',
  DOMICILIO: 'DOMICILIO',
  FECHA_SUSP: 'FECHA_SUSP',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  SUSPENDIDO: 'SUSPENDIDO',
  id: 'id'
};

exports.Prisma.Pago_bcoScalarFieldEnum = {
  NRO_DOC: 'NRO_DOC',
  CONTRATO: 'CONTRATO',
  COD_SUC: 'COD_SUC',
  NRO_CTA: 'NRO_CTA',
  FEC_ACR: 'FEC_ACR',
  IMPORTE: 'IMPORTE',
  MARCA: 'MARCA',
  MES: 'MES',
  ANO: 'ANO',
  DIA_PAGO: 'DIA_PAGO',
  SUCURSAL: 'SUCURSAL',
  SEGURO: 'SEGURO',
  id: 'id'
};

exports.Prisma.Pago_bcomScalarFieldEnum = {
  NRO_DOC: 'NRO_DOC',
  CONTRATO: 'CONTRATO',
  COD_SUC: 'COD_SUC',
  NRO_CTA: 'NRO_CTA',
  FEC_ACR: 'FEC_ACR',
  IMPORTE: 'IMPORTE',
  MARCA: 'MARCA',
  MES: 'MES',
  ANO: 'ANO',
  DIA_PAGO: 'DIA_PAGO',
  SUCURSAL: 'SUCURSAL',
  SEGURO: 'SEGURO',
  id: 'id'
};

exports.Prisma.PagosScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  NRO_RECIBO: 'NRO_RECIBO',
  SERIE: 'SERIE',
  COMPROB: 'COMPROB',
  DIA_REN: 'DIA_REN',
  DIA_CAR: 'DIA_CAR',
  DIA_EMI: 'DIA_EMI',
  DIA_PAG: 'DIA_PAG',
  HORA_CAR: 'HORA_CAR',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  MAN_COM: 'MAN_COM',
  MOVIM: 'MOVIM',
  EX: 'EX',
  GR: 'GR',
  SEGURO: 'SEGURO',
  CARGA: 'CARGA',
  OPERADOR: 'OPERADOR',
  EXTRA: 'EXTRA',
  TIP_EXT: 'TIP_EXT',
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  ACTUALIZA: 'ACTUALIZA',
  MARCA: 'MARCA',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  CAE: 'CAE',
  CAE_VTO: 'CAE_VTO',
  NCR_SERIE: 'NCR_SERIE',
  NCR_NRO: 'NCR_NRO',
  BARCOD: 'BARCOD',
  DNI: 'DNI',
  FE_SERIE: 'FE_SERIE',
  FE_NRO: 'FE_NRO',
  FEC_REF: 'FEC_REF',
  CUOTAS_REF: 'CUOTAS_REF',
  IMPO_REF: 'IMPO_REF',
  id: 'id'
};

exports.Prisma.Pagos_mutualScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  NRO_RECIBO: 'NRO_RECIBO',
  SERIE: 'SERIE',
  COMPROB: 'COMPROB',
  DIA_REN: 'DIA_REN',
  DIA_CAR: 'DIA_CAR',
  DIA_EMI: 'DIA_EMI',
  DIA_PAG: 'DIA_PAG',
  HORA_CAR: 'HORA_CAR',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  MAN_COM: 'MAN_COM',
  MOVIM: 'MOVIM',
  EX: 'EX',
  GR: 'GR',
  SEGURO: 'SEGURO',
  CARGA: 'CARGA',
  OPERADOR: 'OPERADOR',
  EXTRA: 'EXTRA',
  TIP_EXT: 'TIP_EXT',
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  ACTUALIZA: 'ACTUALIZA',
  MARCA: 'MARCA',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  CAE: 'CAE',
  CAE_VTO: 'CAE_VTO',
  NCR_SERIE: 'NCR_SERIE',
  NCR_NRO: 'NCR_NRO',
  BARCOD: 'BARCOD',
  DNI: 'DNI',
  FE_SERIE: 'FE_SERIE',
  FE_NRO: 'FE_NRO',
  FEC_REF: 'FEC_REF',
  CUOTAS_REF: 'CUOTAS_REF',
  IMPO_REF: 'IMPO_REF',
  id: 'id'
};

exports.Prisma.ParcelasScalarFieldEnum = {
  par_id: 'par_id',
  par_fechalta: 'par_fechalta',
  par_usualta: 'par_usualta',
  par_cementerio: 'par_cementerio',
  par_mza: 'par_mza',
  par_nom: 'par_nom',
  par_seccion: 'par_seccion',
  par_estado: 'par_estado'
};

exports.Prisma.PlanificacionScalarFieldEnum = {
  pln_ide: 'pln_ide',
  pln_usu: 'pln_usu',
  pln_dia: 'pln_dia',
  pln_obs: 'pln_obs'
};

exports.Prisma.Porcentaje_liqScalarFieldEnum = {
  porcliq_id: 'porcliq_id',
  porcliq_nombre: 'porcliq_nombre',
  porcliq_descrip: 'porcliq_descrip',
  porcliq_cuotas: 'porcliq_cuotas',
  porcliq_porcentaje: 'porcliq_porcentaje'
};

exports.Prisma.PrestamosScalarFieldEnum = {
  ptm_id: 'ptm_id',
  ptm_fechacarga: 'ptm_fechacarga',
  ptm_op: 'ptm_op',
  ptm_ficha: 'ptm_ficha',
  ptm_legajo: 'ptm_legajo',
  ptm_ant: 'ptm_ant',
  ptm_fechasol: 'ptm_fechasol',
  ptm_renov: 'ptm_renov',
  ptm_prestamo: 'ptm_prestamo',
  ptm_cuotas: 'ptm_cuotas',
  ptm_valcuota: 'ptm_valcuota',
  ptm_neto: 'ptm_neto',
  ptm_estado: 'ptm_estado',
  cod_ptm_leg: 'cod_ptm_leg',
  ptm_afi: 'ptm_afi',
  capinoaut: 'capinoaut'
};

exports.Prisma.ProduccionScalarFieldEnum = {
  prod_ide: 'prod_ide',
  prod_fechacarga: 'prod_fechacarga',
  prod_fechaafi: 'prod_fechaafi',
  prod_asesor: 'prod_asesor',
  prod_empre: 'prod_empre',
  prod_mes: 'prod_mes',
  prod_anio: 'prod_anio',
  prod_apeafi: 'prod_apeafi',
  prod_nomafi: 'prod_nomafi',
  prod_dniafi: 'prod_dniafi',
  prod_local: 'prod_local',
  prod_recibo: 'prod_recibo',
  prod_monto: 'prod_monto',
  prod_plan: 'prod_plan',
  prod_pago: 'prod_pago',
  prod_cta_tar: 'prod_cta_tar',
  prod_obs: 'prod_obs',
  prod_semana: 'prod_semana',
  prod_estado: 'prod_estado',
  prod_cierre: 'prod_cierre',
  prod_afiliado: 'prod_afiliado',
  prod_rendido: 'prod_rendido',
  prod_recibosis: 'prod_recibosis',
  prod_fechren: 'prod_fechren',
  prod_tel: 'prod_tel',
  prod_adh: 'prod_adh',
  prod_mesn: 'prod_mesn'
};

exports.Prisma.Produccion_copyScalarFieldEnum = {
  prod_ide: 'prod_ide',
  prod_fechacarga: 'prod_fechacarga',
  prod_fechaafi: 'prod_fechaafi',
  prod_asesor: 'prod_asesor',
  prod_empre: 'prod_empre',
  prod_mes: 'prod_mes',
  prod_anio: 'prod_anio',
  prod_apeafi: 'prod_apeafi',
  prod_nomafi: 'prod_nomafi',
  prod_dniafi: 'prod_dniafi',
  prod_local: 'prod_local',
  prod_recibo: 'prod_recibo',
  prod_monto: 'prod_monto',
  prod_plan: 'prod_plan',
  prod_pago: 'prod_pago',
  prod_cta_tar: 'prod_cta_tar',
  prod_obs: 'prod_obs',
  prod_semana: 'prod_semana',
  prod_estado: 'prod_estado',
  prod_cierre: 'prod_cierre',
  prod_afiliado: 'prod_afiliado',
  prod_rendido: 'prod_rendido',
  prod_recibosis: 'prod_recibosis',
  prod_fechren: 'prod_fechren',
  prod_tel: 'prod_tel',
  prod_adh: 'prod_adh',
  prod_mesn: 'prod_mesn'
};

exports.Prisma.PuestosScalarFieldEnum = {
  codigo: 'codigo',
  descrip: 'descrip'
};

exports.Prisma.Registro_diario_saldosScalarFieldEnum = {
  reg_diario_id: 'reg_diario_id',
  reg_diario_fecha: 'reg_diario_fecha',
  reg_diario_movim: 'reg_diario_movim',
  reg_diario_entidad: 'reg_diario_entidad',
  reg_diario_ent_tipo: 'reg_diario_ent_tipo',
  reg_diario_descrip: 'reg_diario_descrip',
  reg_diario_saldo: 'reg_diario_saldo',
  reg_diario_estado: 'reg_diario_estado',
  reg_diario_usu: 'reg_diario_usu',
  reg_diario_fecha_egreso: 'reg_diario_fecha_egreso',
  reg_diario_item: 'reg_diario_item',
  reg_diario_cancelado: 'reg_diario_cancelado',
  reg_diario_cheque: 'reg_diario_cheque'
};

exports.Prisma.Registro_egreso_diarioScalarFieldEnum = {
  reg_egre_id: 'reg_egre_id',
  reg_egre_fecha: 'reg_egre_fecha',
  reg_egre_entidad: 'reg_egre_entidad',
  reg_egre_item: 'reg_egre_item',
  reg_egre_detalle: 'reg_egre_detalle',
  reg_egre_nro_cheque: 'reg_egre_nro_cheque',
  reg_egre_fec_debito: 'reg_egre_fec_debito',
  reg_egre_saldo: 'reg_egre_saldo',
  reg_egre_cancelado: 'reg_egre_cancelado',
  reg_egre_usu_carga: 'reg_egre_usu_carga'
};

exports.Prisma.Registro_ingreso_diarioScalarFieldEnum = {
  reg_ing_id: 'reg_ing_id',
  reg_ing_date: 'reg_ing_date',
  reg_ing_entidad: 'reg_ing_entidad',
  reg_ing_detalle: 'reg_ing_detalle',
  reg_ing_saldo: 'reg_ing_saldo',
  reg_ing_usu_car: 'reg_ing_usu_car'
};

exports.Prisma.Registro_sucursalScalarFieldEnum = {
  reg_suc_id: 'reg_suc_id',
  reg_suc_fecha: 'reg_suc_fecha',
  reg_suc_usu: 'reg_suc_usu',
  reg_sucursal: 'reg_sucursal',
  reg_suc_caja: 'reg_suc_caja',
  reg_suc_descrip: 'reg_suc_descrip',
  reg_suc_monto: 'reg_suc_monto',
  reg_suc_movim: 'reg_suc_movim',
  reg_suc_item: 'reg_suc_item',
  reg_suc_estado: 'reg_suc_estado'
};

exports.Prisma.Semana_asesorScalarFieldEnum = {
  semase_id: 'semase_id',
  semase_fecha: 'semase_fecha',
  semase_asesor: 'semase_asesor',
  semase_mes: 'semase_mes',
  semase_semana: 'semase_semana',
  semase_anio: 'semase_anio',
  semase_ventas: 'semase_ventas',
  semase_codcar: 'semase_codcar'
};

exports.Prisma.SemanasScalarFieldEnum = {
  sem_id: 'sem_id',
  sem_mes: 'sem_mes',
  sem_anio: 'sem_anio',
  sem_semana: 'sem_semana',
  sem_desde: 'sem_desde',
  sem_hasta: 'sem_hasta'
};

exports.Prisma.SomScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  APE_NOM: 'APE_NOM',
  ALTA: 'ALTA',
  GRUPO: 'GRUPO',
  ADHS: 'ADHS',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  SUCURSAL: 'SUCURSAL',
  EDAD_PROM: 'EDAD_PROM',
  PERMANEN: 'PERMANEN',
  DEUDA: 'DEUDA'
};

exports.Prisma.SowScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  APE_NOM: 'APE_NOM',
  ALTA: 'ALTA',
  GRUPO: 'GRUPO',
  ADHS: 'ADHS',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  SUCURSAL: 'SUCURSAL',
  EDAD_PROM: 'EDAD_PROM',
  PERMANEN: 'PERMANEN',
  DEUDA: 'DEUDA',
  idso: 'idso'
};

exports.Prisma.SucursalScalarFieldEnum = {
  idsucursal: 'idsucursal',
  sucursal: 'sucursal',
  codigo: 'codigo'
};

exports.Prisma.SueldosScalarFieldEnum = {
  sld_id: 'sld_id',
  sld_perfil: 'sld_perfil',
  sld_basico: 'sld_basico',
  sld_basicoant: 'sld_basicoant',
  sld_fecha_cbio: 'sld_fecha_cbio'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  usu_ide: 'usu_ide',
  usu_apellido: 'usu_apellido',
  usu_nombre: 'usu_nombre',
  usu_dni: 'usu_dni',
  usu_nick: 'usu_nick',
  usu_perfil: 'usu_perfil',
  usu_clave: 'usu_clave',
  usu_alta: 'usu_alta',
  usu_baja: 'usu_baja',
  usu_estado: 'usu_estado',
  usu_obs: 'usu_obs',
  usu_sem1: 'usu_sem1',
  usu_sem2: 'usu_sem2',
  usu_sem3: 'usu_sem3',
  usu_sem4: 'usu_sem4',
  usu_grupo: 'usu_grupo'
};

exports.Prisma.SO1ScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  APE_NOM: 'APE_NOM',
  ALTA: 'ALTA',
  GRUPO: 'GRUPO',
  ADHS: 'ADHS',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  SUCURSAL: 'SUCURSAL',
  EDAD_PROM: 'EDAD_PROM',
  PERMANEN: 'PERMANEN',
  DEUDA: 'DEUDA'
};

exports.Prisma.GuardiaScalarFieldEnum = {
  g_id: 'g_id',
  g_fec: 'g_fec',
  g_turno: 'g_turno',
  g_descrIp: 'g_descrIp',
  g_id_usuario: 'g_id_usuario'
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
  acciones: 'acciones',
  adherent: 'adherent',
  alta_adhe: 'alta_adhe',
  anticipos: 'anticipos',
  bajas: 'bajas',
  bancos: 'bancos',
  caja_sucursal: 'caja_sucursal',
  cajas: 'cajas',
  certificados: 'certificados',
  cuota_prestamo: 'cuota_prestamo',
  cuotas_adeudadas: 'cuotas_adeudadas',
  debitos: 'debitos',
  liq_temporal: 'liq_temporal',
  liquidaciones: 'liquidaciones',
  localidad: 'localidad',
  maestro: 'maestro',
  maestro22: 'maestro22',
  maestro_bis: 'maestro_bis',
  memo: 'memo',
  meses: 'meses',
  mutual: 'mutual',
  mutual_adh: 'mutual_adh',
  obra_soc: 'obra_soc',
  pago_bco: 'pago_bco',
  pago_bcom: 'pago_bcom',
  pagos: 'pagos',
  pagos_mutual: 'pagos_mutual',
  parcelas: 'parcelas',
  planificacion: 'planificacion',
  porcentaje_liq: 'porcentaje_liq',
  prestamos: 'prestamos',
  produccion: 'produccion',
  produccion_copy: 'produccion_copy',
  puestos: 'puestos',
  registro_diario_saldos: 'registro_diario_saldos',
  registro_egreso_diario: 'registro_egreso_diario',
  registro_ingreso_diario: 'registro_ingreso_diario',
  registro_sucursal: 'registro_sucursal',
  semana_asesor: 'semana_asesor',
  semanas: 'semanas',
  som: 'som',
  sow: 'sow',
  sucursal: 'sucursal',
  sueldos: 'sueldos',
  usuario: 'usuario',
  SO1: 'SO1',
  guardia: 'guardia'
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
