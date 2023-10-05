
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

exports.Prisma.Ataud_precioScalarFieldEnum = {
  idprecio: 'idprecio',
  idataud: 'idataud',
  codigo: 'codigo',
  ataud: 'ataud',
  precio: 'precio',
  pri_desc: 'pri_desc',
  sec_desc: 'sec_desc',
  fecha: 'fecha',
  operador: 'operador',
  estado: 'estado'
};

exports.Prisma.Ataud_ventaScalarFieldEnum = {
  idataudventa: 'idataudventa',
  idataud: 'idataud',
  contrato: 'contrato',
  apellido_fall: 'apellido_fall',
  nombre_fall: 'nombre_fall',
  dni_fall: 'dni_fall',
  dom_fall: 'dom_fall',
  ndom_fall: 'ndom_fall',
  barrio_fall: 'barrio_fall',
  telefono_fall: 'telefono_fall',
  apellido_sol: 'apellido_sol',
  nombre_sol: 'nombre_sol',
  dni_sol: 'dni_sol',
  telefono_sol: 'telefono_sol',
  fecha: 'fecha',
  operador: 'operador',
  ataud: 'ataud'
};

exports.Prisma.AtaudesScalarFieldEnum = {
  idataud: 'idataud',
  nombre: 'nombre',
  tipo: 'tipo',
  medidas: 'medidas',
  uso: 'uso',
  fabricante: 'fabricante',
  codigo: 'codigo',
  fecha_alta: 'fecha_alta',
  stock: 'stock',
  fecha_reposicion: 'fecha_reposicion',
  fecha_baja: 'fecha_baja',
  observaciones: 'observaciones',
  estado: 'estado',
  operador: 'operador'
};

exports.Prisma.AutosScalarFieldEnum = {
  patente: 'patente',
  auto: 'auto',
  kilometros: 'kilometros',
  responsable: 'responsable',
  nro_poliza: 'nro_poliza',
  empresa: 'empresa',
  vencimiento: 'vencimiento',
  motor: 'motor',
  chasis: 'chasis',
  modelo: 'modelo',
  cobertura: 'cobertura',
  idauto: 'idauto',
  estado: 'estado',
  operador: 'operador'
};

exports.Prisma.Autos_hoja_rutaScalarFieldEnum = {
  idhojaruta: 'idhojaruta',
  patente: 'patente',
  auto: 'auto',
  conductor: 'conductor',
  idservicio: 'idservicio',
  fecha_salida: 'fecha_salida',
  km_salida: 'km_salida',
  fecha_llegada: 'fecha_llegada',
  km_llegada: 'km_llegada',
  fecha_registro: 'fecha_registro',
  operador: 'operador'
};

exports.Prisma.Autos_novedadesScalarFieldEnum = {
  idnovedad: 'idnovedad',
  patente: 'patente',
  fecha: 'fecha',
  novedad: 'novedad',
  operador: 'operador',
  auto: 'auto'
};

exports.Prisma.Autos_pago_patenteScalarFieldEnum = {
  idpago: 'idpago',
  patente: 'patente',
  mes: 'mes',
  ano: 'ano',
  importe: 'importe',
  cod_pago: 'cod_pago',
  idauto: 'idauto',
  operador: 'operador'
};

exports.Prisma.Caja_sepelioScalarFieldEnum = {
  idcaja: 'idcaja',
  operador: 'operador',
  detalle: 'detalle',
  monto: 'monto',
  estado: 'estado',
  fecha: 'fecha',
  gastos: 'gastos',
  totalcaja: 'totalcaja',
  empresa: 'empresa',
  tipofactura: 'tipofactura',
  nfactura: 'nfactura',
  ptoventa: 'ptoventa',
  concepto: 'concepto',
  cierre: 'cierre',
  ultimacarga: 'ultimacarga'
};

exports.Prisma.ConceptosScalarFieldEnum = {
  idconcepto: 'idconcepto',
  concepto: 'concepto',
  tipo: 'tipo'
};

exports.Prisma.Fabricante_ataudScalarFieldEnum = {
  idfabricante: 'idfabricante',
  fabricante: 'fabricante'
};

exports.Prisma.Gasto_lutoScalarFieldEnum = {
  idgastoluto: 'idgastoluto',
  idservicio: 'idservicio',
  contrato: 'contrato',
  dni_extinto: 'dni_extinto',
  extinto: 'extinto',
  gasto_luto: 'gasto_luto',
  idataud: 'idataud',
  apellido_ben: 'apellido_ben',
  nombre_ben: 'nombre_ben',
  telefono_ben: 'telefono_ben',
  fecha: 'fecha',
  operador: 'operador',
  parentezco: 'parentezco'
};

exports.Prisma.Gastos_cajaScalarFieldEnum = {
  idgastos: 'idgastos',
  idcaja: 'idcaja',
  concepto: 'concepto',
  tipofactura: 'tipofactura',
  nfactura: 'nfactura',
  fecha: 'fecha',
  operadorgestion: 'operadorgestion',
  operadortramite: 'operadortramite',
  ptoventa: 'ptoventa',
  porciva: 'porciva',
  montoiva: 'montoiva',
  retiibb: 'retiibb',
  retggcias: 'retggcias',
  perciva: 'perciva',
  detalle: 'detalle',
  mediopago: 'mediopago',
  proveedor: 'proveedor',
  empresa: 'empresa',
  total: 'total',
  idservicio: 'idservicio'
};

exports.Prisma.Historial_autosScalarFieldEnum = {
  idhistorial: 'idhistorial',
  patente: 'patente',
  idauto: 'idauto',
  operador: 'operador',
  fecha: 'fecha',
  accion: 'accion'
};

exports.Prisma.Historial_stock_ataudScalarFieldEnum = {
  idhistorial: 'idhistorial',
  idataud: 'idataud',
  fecha_carga: 'fecha_carga',
  stock_anterior: 'stock_anterior',
  stock_nuevo: 'stock_nuevo',
  remito: 'remito',
  operador: 'operador',
  fecha_recepcion: 'fecha_recepcion'
};

exports.Prisma.HonorariosScalarFieldEnum = {
  idtrabajo: 'idtrabajo',
  trabajo: 'trabajo',
  dias_habiles: 'dias_habiles',
  finde: 'finde',
  feriado: 'feriado'
};

exports.Prisma.Ingreso_cajaScalarFieldEnum = {
  idingreso: 'idingreso',
  idcaja: 'idcaja',
  concepto: 'concepto',
  monto: 'monto',
  operador: 'operador',
  fecha: 'fecha',
  tipofactura: 'tipofactura',
  nfactura: 'nfactura',
  empresa: 'empresa',
  detalle: 'detalle',
  ptoventa: 'ptoventa'
};

exports.Prisma.Legajo_virtual_autosScalarFieldEnum = {
  idlegajo: 'idlegajo',
  patente: 'patente',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida'
};

exports.Prisma.Legajo_virtual_serviciosScalarFieldEnum = {
  idlegajo: 'idlegajo',
  servicio: 'servicio',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa'
};

exports.Prisma.NovedadesScalarFieldEnum = {
  idnovedad: 'idnovedad',
  novedad: 'novedad',
  fecha: 'fecha',
  operador: 'operador'
};

exports.Prisma.OperadorsepScalarFieldEnum = {
  idoperador: 'idoperador',
  operador: 'operador'
};

exports.Prisma.ParcelasScalarFieldEnum = {
  idparcela: 'idparcela',
  idservicio: 'idservicio',
  dni_extinto: 'dni_extinto',
  ficha: 'ficha',
  parcela: 'parcela',
  mza: 'mza',
  lote: 'lote',
  asignada: 'asignada',
  fecha: 'fecha',
  cementerio: 'cementerio',
  operador: 'operador',
  fecha_alta: 'fecha_alta',
  operador_asignacion: 'operador_asignacion',
  fecha_asignacion: 'fecha_asignacion',
  lugares: 'lugares'
};

exports.Prisma.Planificacion_guardiasScalarFieldEnum = {
  idturno: 'idturno',
  lugar: 'lugar',
  inicio: 'inicio',
  fin: 'fin',
  horas: 'horas',
  operador: 'operador',
  mes_planificacion: 'mes_planificacion',
  feriado: 'feriado',
  tarea: 'tarea',
  liquidado: 'liquidado',
  fecha_liquidacion: 'fecha_liquidacion',
  operadorliq: 'operadorliq',
  aprobado: 'aprobado',
  fecha_aprobacion: 'fecha_aprobacion',
  operadorap: 'operadorap',
  ano_planificacion: 'ano_planificacion'
};

exports.Prisma.Precio_servicioScalarFieldEnum = {
  idprecio: 'idprecio',
  codigo: 'codigo',
  contado: 'contado',
  contado_cremacion: 'contado_cremacion',
  descuento1: 'descuento1',
  descuento1_cremacion: 'descuento1_cremacion',
  descuento2: 'descuento2',
  descuento2_cremacion: 'descuento2_cremacion',
  fecha_vigencia: 'fecha_vigencia'
};

exports.Prisma.ProveedoresScalarFieldEnum = {
  idproveedor: 'idproveedor',
  razon: 'razon',
  cuit: 'cuit',
  domicilio: 'domicilio',
  telefonos: 'telefonos',
  estado: 'estado',
  operador: 'operador'
};

exports.Prisma.Servicio_detallesScalarFieldEnum = {
  iddetalles: 'iddetalles',
  idservicio: 'idservicio',
  detalle: 'detalle',
  lugar: 'lugar',
  monto: 'monto',
  patente: 'patente',
  operador: 'operador',
  fecha: 'fecha',
  observacion: 'observacion'
};

exports.Prisma.Servicio_gastosScalarFieldEnum = {
  idgastos: 'idgastos',
  idservicio: 'idservicio',
  tipo_gasto: 'tipo_gasto',
  horas: 'horas',
  operador: 'operador',
  observaciones: 'observaciones',
  inicio: 'inicio',
  fin: 'fin',
  feriado: 'feriado',
  liquidado: 'liquidado',
  operadorliq: 'operadorliq',
  fecha_liquidacion: 'fecha_liquidacion',
  aprobado: 'aprobado',
  operadorap: 'operadorap',
  fecha_aprobacion: 'fecha_aprobacion'
};

exports.Prisma.Servicio_ventaScalarFieldEnum = {
  idventa: 'idventa',
  idservicio: 'idservicio',
  monto: 'monto',
  operador: 'operador',
  fecha_venta: 'fecha_venta',
  apellido_sol: 'apellido_sol',
  nombre_sol: 'nombre_sol',
  dni_sol: 'dni_sol',
  parentesco: 'parentesco',
  operador_venta: 'operador_venta',
  liquidado: 'liquidado',
  operadorliq: 'operadorliq',
  fecha_liquidacion: 'fecha_liquidacion',
  aprobado: 'aprobado',
  operadorap: 'operadorap',
  fecha_aprobacion: 'fecha_aprobacion',
  comision: 'comision',
  fecha_carga: 'fecha_carga',
  valor_cuota: 'valor_cuota',
  plan_cuota: 'plan_cuota',
  monto_financiacion: 'monto_financiacion',
  financiacion: 'financiacion',
  efectivo: 'efectivo'
};

exports.Prisma.ServiciosScalarFieldEnum = {
  idservicio: 'idservicio',
  empresa: 'empresa',
  dni: 'dni',
  apellido: 'apellido',
  nombre: 'nombre',
  edad: 'edad',
  fecha_fallecimiento: 'fecha_fallecimiento',
  lugar_fallecimiento: 'lugar_fallecimiento',
  tipo_servicio: 'tipo_servicio',
  casa_mortuaria: 'casa_mortuaria',
  fecha_inhumacion: 'fecha_inhumacion',
  hora_inhumacion: 'hora_inhumacion',
  cementerio: 'cementerio',
  estado: 'estado',
  contrato: 'contrato',
  fecha_recepcion: 'fecha_recepcion',
  sucursal: 'sucursal',
  motivo: 'motivo',
  retiro: 'retiro',
  solicitado: 'solicitado',
  parentesco: 'parentesco',
  altura: 'altura',
  peso: 'peso',
  dni_nuevotitular: 'dni_nuevotitular',
  operador: 'operador',
  idataud: 'idataud',
  dni_solicitante: 'dni_solicitante',
  impactado: 'impactado',
  cremacion: 'cremacion',
  idparcela: 'idparcela',
  liquidado: 'liquidado',
  fecha_liquidacion: 'fecha_liquidacion',
  gastos_cargados: 'gastos_cargados',
  obra_soc: 'obra_soc',
  importe: 'importe',
  donacion: 'donacion',
  domicilio_solicitante: 'domicilio_solicitante'
};

exports.Prisma.Servicios_liquidacionScalarFieldEnum = {
  idliquidacion: 'idliquidacion',
  idservicio: 'idservicio',
  total_liquidacion: 'total_liquidacion',
  fecha_liquidacion: 'fecha_liquidacion',
  operador: 'operador'
};

exports.Prisma.TareasScalarFieldEnum = {
  idevents: 'idevents',
  title: 'title',
  allDay: 'allDay',
  start: 'start',
  end: 'end',
  priority: 'priority'
};

exports.Prisma.Tareas_adicionalesScalarFieldEnum = {
  idtarea: 'idtarea',
  inicio: 'inicio',
  fin: 'fin',
  tarea: 'tarea',
  operador: 'operador',
  observaciones: 'observaciones',
  horas: 'horas',
  feriado: 'feriado',
  liquidado: 'liquidado',
  fecha_liquidacion: 'fecha_liquidacion',
  operadorliq: 'operadorliq',
  aprobado: 'aprobado',
  fecha_aprobacion: 'fecha_aprobacion',
  operadorap: 'operadorap',
  mes_planificacion: 'mes_planificacion'
};

exports.Prisma.Tipo_detalleScalarFieldEnum = {
  idtipodetalle: 'idtipodetalle',
  tipo_detalle: 'tipo_detalle',
  observacion: 'observacion'
};

exports.Prisma.VisitantesScalarFieldEnum = {
  idvisitante: 'idvisitante',
  idservicio: 'idservicio',
  nombre: 'nombre',
  apellido: 'apellido',
  dni: 'dni',
  telefono: 'telefono',
  parentezco: 'parentezco',
  operador: 'operador',
  fecha: 'fecha',
  temperatura: 'temperatura'
};

exports.Prisma.Parcelas_lugaresScalarFieldEnum = {
  idlugar: 'idlugar',
  idparcela: 'idparcela',
  idservicio: 'idservicio',
  lugar: 'lugar',
  contrato: 'contrato',
  dni: 'dni',
  fecha: 'fecha',
  operador: 'operador'
};

exports.Prisma.Caja_saScalarFieldEnum = {
  idcaja: 'idcaja',
  codigo: 'codigo',
  cuenta: 'cuenta',
  tipo: 'tipo',
  serie: 'serie',
  factura: 'factura',
  importe: 'importe',
  comentarios: 'comentarios',
  nro_caja: 'nro_caja',
  movim: 'movim',
  fecha: 'fecha',
  puesto: 'puesto',
  operador: 'operador',
  cuit: 'cuit',
  proveedor: 'proveedor',
  sucursal: 'sucursal'
};

exports.Prisma.Caja_srlScalarFieldEnum = {
  idcaja: 'idcaja',
  codigo: 'codigo',
  cuenta: 'cuenta',
  tipo: 'tipo',
  serie: 'serie',
  factura: 'factura',
  importe: 'importe',
  comentarios: 'comentarios',
  nro_caja: 'nro_caja',
  movim: 'movim',
  fecha: 'fecha',
  puesto: 'puesto',
  operador: 'operador',
  cuit: 'cuit',
  proveedor: 'proveedor',
  sucursal: 'sucursal'
};

exports.Prisma.Generacion_cajasScalarFieldEnum = {
  idgeneracion: 'idgeneracion',
  desde: 'desde',
  hasta: 'hasta',
  empresa: 'empresa',
  operador: 'operador',
  fecha: 'fecha'
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
  ataud_precio: 'ataud_precio',
  ataud_venta: 'ataud_venta',
  ataudes: 'ataudes',
  autos: 'autos',
  autos_hoja_ruta: 'autos_hoja_ruta',
  autos_novedades: 'autos_novedades',
  autos_pago_patente: 'autos_pago_patente',
  caja_sepelio: 'caja_sepelio',
  conceptos: 'conceptos',
  fabricante_ataud: 'fabricante_ataud',
  gasto_luto: 'gasto_luto',
  gastos_caja: 'gastos_caja',
  historial_autos: 'historial_autos',
  historial_stock_ataud: 'historial_stock_ataud',
  honorarios: 'honorarios',
  ingreso_caja: 'ingreso_caja',
  legajo_virtual_autos: 'legajo_virtual_autos',
  legajo_virtual_servicios: 'legajo_virtual_servicios',
  novedades: 'novedades',
  operadorsep: 'operadorsep',
  parcelas: 'parcelas',
  planificacion_guardias: 'planificacion_guardias',
  precio_servicio: 'precio_servicio',
  proveedores: 'proveedores',
  servicio_detalles: 'servicio_detalles',
  servicio_gastos: 'servicio_gastos',
  servicio_venta: 'servicio_venta',
  servicios: 'servicios',
  servicios_liquidacion: 'servicios_liquidacion',
  tareas: 'tareas',
  tareas_adicionales: 'tareas_adicionales',
  tipo_detalle: 'tipo_detalle',
  visitantes: 'visitantes',
  parcelas_lugares: 'parcelas_lugares',
  caja_sa: 'caja_sa',
  caja_srl: 'caja_srl',
  generacion_cajas: 'generacion_cajas'
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
