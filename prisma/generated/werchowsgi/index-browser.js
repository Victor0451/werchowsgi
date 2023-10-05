
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

exports.Prisma.Alta_novellScalarFieldEnum = {
  idnovell: 'idnovell',
  fecha_recepcion: 'fecha_recepcion',
  servicio: 'servicio',
  monto: 'monto',
  monto_letra: 'monto_letra',
  anticipo: 'anticipo',
  gastos_adm: 'gastos_adm',
  apellido_sol: 'apellido_sol',
  nombre_sol: 'nombre_sol',
  dni_sol: 'dni_sol',
  estcivil_sol: 'estcivil_sol',
  fecha_nac_sol: 'fecha_nac_sol',
  dom_sol: 'dom_sol',
  domnum_sol: 'domnum_sol',
  piso_sol: 'piso_sol',
  barrio_sol: 'barrio_sol',
  localidad_sol: 'localidad_sol',
  codpostal_sol: 'codpostal_sol',
  telefono_sol: 'telefono_sol',
  movil_sol: 'movil_sol',
  apellido_ben: 'apellido_ben',
  nombre_ben: 'nombre_ben',
  dni_ben: 'dni_ben',
  estcivil_ben: 'estcivil_ben',
  fecha_nac_ben: 'fecha_nac_ben',
  dom_ben: 'dom_ben',
  domnum_ben: 'domnum_ben',
  piso_ben: 'piso_ben',
  barrio_ben: 'barrio_ben',
  localidad_ben: 'localidad_ben',
  codpostal_ben: 'codpostal_ben',
  telefono_ben: 'telefono_ben',
  movil_ben: 'movil_ben',
  operador: 'operador',
  cuotas: 'cuotas',
  nacionalidad_sol: 'nacionalidad_sol',
  nacionalidad_ben: 'nacionalidad_ben',
  anticipo_letra: 'anticipo_letra',
  cuotasaldo: 'cuotasaldo',
  cuotasaldo_letra: 'cuotasaldo_letra',
  cuota_mantenimiento: 'cuota_mantenimiento'
};

exports.Prisma.Caja_sucursalesScalarFieldEnum = {
  idcaja: 'idcaja',
  fecha_carga: 'fecha_carga',
  sucursal: 'sucursal',
  ingresos: 'ingresos',
  egresos: 'egresos',
  saldo: 'saldo',
  operador_carga: 'operador_carga',
  empresa: 'empresa'
};

exports.Prisma.CampanacasosScalarFieldEnum = {
  idcaso: 'idcaso',
  idcampana: 'idcampana',
  fechacampana: 'fechacampana',
  mes: 'mes',
  ano: 'ano',
  sucursal: 'sucursal',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  telefono: 'telefono',
  movil: 'movil',
  calle: 'calle',
  nro_calle: 'nro_calle',
  barrio: 'barrio',
  localidad: 'localidad',
  cuota: 'cuota',
  cuotasadeudadas: 'cuotasadeudadas',
  montoadeudado: 'montoadeudado',
  estadocaso: 'estadocaso',
  accion: 'accion',
  edad: 'edad',
  adherentes: 'adherentes',
  alta: 'alta',
  vigencia: 'vigencia'
};

exports.Prisma.CampanasScalarFieldEnum = {
  idcampana: 'idcampana',
  descripcion: 'descripcion',
  operador: 'operador',
  fecha: 'fecha',
  empresa: 'empresa',
  sucursal: 'sucursal'
};

exports.Prisma.CampanatemporalScalarFieldEnum = {
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
  operador: 'operador',
  estado: 'estado',
  idcaso: 'idcaso',
  observacion: 'observacion',
  fecha: 'fecha',
  fecha_observacion: 'fecha_observacion',
  accion: 'accion'
};

exports.Prisma.Capital_prestamoScalarFieldEnum = {
  idcapital: 'idcapital',
  capital: 'capital',
  fecha: 'fecha',
  estado: 'estado',
  autorizacion: 'autorizacion'
};

exports.Prisma.Capital_prestamo_empleadosScalarFieldEnum = {
  idcapital: 'idcapital',
  capital: 'capital',
  fecha: 'fecha',
  estado: 'estado',
  autorizacion: 'autorizacion'
};

exports.Prisma.Categoria_obsequioScalarFieldEnum = {
  idcategoria: 'idcategoria',
  categoria: 'categoria',
  observacion: 'observacion'
};

exports.Prisma.ContratosScalarFieldEnum = {
  idcontrato: 'idcontrato',
  locatario1: 'locatario1',
  dni1: 'dni1',
  domicilio1: 'domicilio1',
  locatario2: 'locatario2',
  dni2: 'dni2',
  domicilio2: 'domicilio2',
  monto: 'monto',
  fecha_inicio: 'fecha_inicio',
  duracion: 'duracion',
  locador: 'locador',
  operador: 'operador',
  local: 'local',
  uf: 'uf'
};

exports.Prisma.Convenio_deudaScalarFieldEnum = {
  idconvdeuda: 'idconvdeuda',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  operador: 'operador',
  vigencia: 'vigencia',
  fecha: 'fecha',
  cuotas: 'cuotas',
  dni: 'dni',
  empresa: 'empresa',
  idoperador: 'idoperador',
  vencimiento1: 'vencimiento1',
  importe1: 'importe1',
  vencimiento2: 'vencimiento2',
  importe2: 'importe2',
  deuda: 'deuda',
  bonificacion: 'bonificacion',
  saldo: 'saldo'
};

exports.Prisma.DatosScalarFieldEnum = {
  iddato: 'iddato',
  apellido: 'apellido',
  nombre: 'nombre',
  edad: 'edad',
  telefono: 'telefono',
  celular: 'celular',
  cobertura: 'cobertura',
  grupo_familiar: 'grupo_familiar',
  observacion: 'observacion',
  operador: 'operador',
  domicilio: 'domicilio',
  fecha: 'fecha'
};

exports.Prisma.Datos_atencionScalarFieldEnum = {
  iddatos: 'iddatos',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  telefono: 'telefono',
  parentezco: 'parentezco',
  motivo: 'motivo',
  operador: 'operador',
  operadoratencion: 'operadoratencion',
  fecha: 'fecha'
};

exports.Prisma.Detalle_orden_pagoScalarFieldEnum = {
  iddetallepago: 'iddetallepago',
  norden: 'norden',
  nconsulta: 'nconsulta',
  sucursal: 'sucursal',
  prestador: 'prestador',
  importe: 'importe',
  operador_carga: 'operador_carga',
  fecha: 'fecha'
};

exports.Prisma.EmpresasScalarFieldEnum = {
  idempresa: 'idempresa',
  empresa: 'empresa',
  cuit: 'cuit'
};

exports.Prisma.EventosScalarFieldEnum = {
  idevents: 'idevents',
  title: 'title',
  allDay: 'allDay',
  start: 'start',
  end: 'end'
};

exports.Prisma.Fabricante_ataudScalarFieldEnum = {
  idfabricante: 'idfabricante',
  fabricante: 'fabricante'
};

exports.Prisma.GestioncasoScalarFieldEnum = {
  idgestion: 'idgestion',
  idcaso: 'idcaso',
  contrato: 'contrato',
  operador: 'operador',
  accion: 'accion',
  observacion: 'observacion',
  fechaaccion: 'fechaaccion',
  nuevaaccion: 'nuevaaccion',
  fechanuevaaccion: 'fechanuevaaccion',
  realizado: 'realizado',
  observacion_nuevaaccion: 'observacion_nuevaaccion'
};

exports.Prisma.Historial_accionesScalarFieldEnum = {
  idhistorial: 'idhistorial',
  operador: 'operador',
  fecha: 'fecha',
  accion: 'accion'
};

exports.Prisma.Historial_aprobacion_prestamosScalarFieldEnum = {
  idaprobacion: 'idaprobacion',
  operador: 'operador',
  idprestamo: 'idprestamo',
  fecha: 'fecha',
  contrato: 'contrato',
  afiliado: 'afiliado',
  productor: 'productor'
};

exports.Prisma.Historial_liquidacionesScalarFieldEnum = {
  idliquidacion: 'idliquidacion',
  operador: 'operador',
  fecha: 'fecha',
  mes: 'mes',
  ano: 'ano',
  cobranza: 'cobranza',
  total: 'total',
  comision: 'comision',
  entidad: 'entidad'
};

exports.Prisma.Intereses_tarjetasScalarFieldEnum = {
  idplan: 'idplan',
  plan_cuota: 'plan_cuota',
  interes: 'interes',
  tarjeta: 'tarjeta',
  fecha: 'fecha',
  estado: 'estado'
};

exports.Prisma.Legajo_virtualScalarFieldEnum = {
  idlegajo: 'idlegajo',
  contrato: 'contrato',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa',
  tipoarchivo: 'tipoarchivo'
};

exports.Prisma.Legajo_virtual_cajasScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idcaja: 'idcaja',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida'
};

exports.Prisma.Legajo_virtual_ordenesScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idorden: 'idorden',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa'
};

exports.Prisma.Legajo_virtual_personalScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idpersonal: 'idpersonal',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida'
};

exports.Prisma.Legajo_virtual_prestamosScalarFieldEnum = {
  idlegajo: 'idlegajo',
  contrato: 'contrato',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa',
  cod_ptm_leg: 'cod_ptm_leg'
};

exports.Prisma.LocadorScalarFieldEnum = {
  dni: 'dni',
  apellido: 'apellido',
  nombre: 'nombre',
  domicilio: 'domicilio',
  barrio: 'barrio',
  localidad: 'localidad',
  provincia: 'provincia'
};

exports.Prisma.MailsScalarFieldEnum = {
  idmail: 'idmail',
  fecha: 'fecha',
  envia: 'envia',
  recibe: 'recibe',
  descrip: 'descrip',
  codmail: 'codmail',
  asunto: 'asunto',
  leido: 'leido',
  fecha_leido: 'fecha_leido',
  url_caja: 'url_caja'
};

exports.Prisma.Mails_adjuntosScalarFieldEnum = {
  idadjunto: 'idadjunto',
  codmail: 'codmail',
  adjunto: 'adjunto',
  tipo: 'tipo'
};

exports.Prisma.MbanconvScalarFieldEnum = {
  id_mora: 'id_mora',
  tipo: 'tipo',
  mora: 'mora',
  fichas: 'fichas',
  morarec: 'morarec',
  fichasrec: 'fichasrec',
  mes: 'mes',
  ano: 'ano'
};

exports.Prisma.Movimiento_caja_sucursalesScalarFieldEnum = {
  idmovimiento: 'idmovimiento',
  fecha_carga: 'fecha_carga',
  fecha_movimiento: 'fecha_movimiento',
  sucursal: 'sucursal',
  concepto: 'concepto',
  movimiento: 'movimiento',
  importe: 'importe',
  operador_carga: 'operador_carga',
  idcaja: 'idcaja',
  empresa: 'empresa'
};

exports.Prisma.NoticiaScalarFieldEnum = {
  idnoticia: 'idnoticia',
  fecha: 'fecha',
  noticia: 'noticia',
  operador: 'operador',
  perfil: 'perfil'
};

exports.Prisma.NovedadesScalarFieldEnum = {
  idnovedades: 'idnovedades',
  novedad: 'novedad',
  fecha: 'fecha',
  operador: 'operador',
  estado: 'estado'
};

exports.Prisma.ObsequiosScalarFieldEnum = {
  idobsequio: 'idobsequio',
  producto: 'producto',
  marca: 'marca',
  categoria: 'categoria',
  precio: 'precio',
  stock: 'stock',
  operador: 'operador',
  fecha: 'fecha',
  observacion: 'observacion',
  fecha_reposicion: 'fecha_reposicion',
  operador_rep: 'operador_rep'
};

exports.Prisma.Openia_keysScalarFieldEnum = {
  idkey: 'idkey',
  key: 'key',
  fecha: 'fecha',
  estado: 'estado'
};

exports.Prisma.OperadorScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  apellido: 'apellido',
  usuario: 'usuario',
  contrasena: 'contrasena',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  puestom: 'puestom',
  perfil: 'perfil',
  estado: 'estado',
  puestow: 'puestow',
  codigo: 'codigo',
  medicos: 'medicos',
  sucursal: 'sucursal',
  prestamos: 'prestamos',
  ordenpago: 'ordenpago',
  clubwerchow: 'clubwerchow',
  ventas: 'ventas',
  administracion: 'administracion',
  campanas: 'campanas',
  socios: 'socios',
  sepelio: 'sepelio'
};

exports.Prisma.Ordenes_pagoScalarFieldEnum = {
  idorden: 'idorden',
  fecha: 'fecha',
  proveedor: 'proveedor',
  cuit_cuil: 'cuit_cuil',
  total: 'total',
  operador_carga: 'operador_carga',
  autorizado: 'autorizado',
  operador_autorizacion: 'operador_autorizacion',
  fecha_autorizacion: 'fecha_autorizacion',
  norden: 'norden',
  observacion: 'observacion',
  nombre: 'nombre',
  tipo_orden: 'tipo_orden',
  nfactura: 'nfactura',
  tipo_factura: 'tipo_factura',
  fecha_pago: 'fecha_pago',
  pagado: 'pagado',
  estado: 'estado'
};

exports.Prisma.PersonalScalarFieldEnum = {
  idpersonal: 'idpersonal',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  alta: 'alta',
  rol: 'rol',
  legajo: 'legajo',
  baja: 'baja'
};

exports.Prisma.Plan_cuentasScalarFieldEnum = {
  idcuenta: 'idcuenta',
  idempresa: 'idempresa',
  codigo: 'codigo',
  descripcion: 'descripcion',
  asiento: 'asiento',
  tipo: 'tipo'
};

exports.Prisma.Plan_cuentas_xScalarFieldEnum = {
  idcuenta: 'idcuenta',
  idempresa: 'idempresa',
  codigo: 'codigo',
  descripcion: 'descripcion',
  asiento: 'asiento',
  tipo: 'tipo'
};

exports.Prisma.Plan_detalleScalarFieldEnum = {
  id_plandetalle: 'id_plandetalle',
  detalle: 'detalle',
  cuota: 'cuota',
  sub_ext: 'sub_ext',
  vigencia: 'vigencia',
  id_plan: 'id_plan'
};

exports.Prisma.Plan_precioScalarFieldEnum = {
  id_plan: 'id_plan',
  plan: 'plan',
  tipo_plan: 'tipo_plan',
  codigo: 'codigo'
};

exports.Prisma.Porcentaje_liqScalarFieldEnum = {
  porcliq_id: 'porcliq_id',
  porcliq_nombre: 'porcliq_nombre',
  porcliq_descrip: 'porcliq_descrip',
  porcliq_cuotas: 'porcliq_cuotas',
  porcliq_porcentaje: 'porcliq_porcentaje'
};

exports.Prisma.Prestamos_empleadosScalarFieldEnum = {
  idprestamo: 'idprestamo',
  empleado: 'empleado',
  fecha_solicitud: 'fecha_solicitud',
  capital: 'capital',
  plan_cuotas: 'plan_cuotas',
  cuota_mensual: 'cuota_mensual',
  capital_dev: 'capital_dev',
  inicia: 'inicia',
  termina: 'termina',
  estado: 'estado',
  capinoaut: 'capinoaut'
};

exports.Prisma.Prestamos_empleados_cobroScalarFieldEnum = {
  idpago: 'idpago',
  idprestamo: 'idprestamo',
  cuota: 'cuota',
  importe: 'importe',
  fecha_cobro: 'fecha_cobro',
  estado: 'estado',
  fecha_pago: 'fecha_pago',
  operador: 'operador'
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
  prod_tel: 'prod_tel'
};

exports.Prisma.Registro_constancia_afiliacionScalarFieldEnum = {
  idconstancia: 'idconstancia',
  apellido_extinto: 'apellido_extinto',
  nombre_extinto: 'nombre_extinto',
  dni_extinto: 'dni_extinto',
  apellido_soli: 'apellido_soli',
  nombre_soli: 'nombre_soli',
  dni_soli: 'dni_soli',
  lugar_presentacion: 'lugar_presentacion',
  fecha: 'fecha',
  operador: 'operador',
  idservicio: 'idservicio'
};

exports.Prisma.RehabilitacionesScalarFieldEnum = {
  idrehab: 'idrehab',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  operador: 'operador',
  vigencia: 'vigencia',
  fecha: 'fecha',
  cuotas: 'cuotas',
  dni: 'dni',
  empresa: 'empresa',
  idoperador: 'idoperador'
};

exports.Prisma.Rol_personalScalarFieldEnum = {
  idrol: 'idrol',
  rol: 'rol'
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
  sld_basicoant: 'sld_basicoant'
};

exports.Prisma.Tab_efScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  allDay: 'allDay',
  holiday: 'holiday',
  title: 'title',
  user: 'user',
  detail: 'detail'
};

exports.Prisma.Tablero_efectividadScalarFieldEnum = {
  idregistro: 'idregistro',
  ano: 'ano',
  mes: 'mes',
  dia: 'dia',
  efectividad: 'efectividad',
  aumento: 'aumento',
  por_aumento: 'por_aumento',
  feriado: 'feriado'
};

exports.Prisma.Tareas_sucursalesScalarFieldEnum = {
  idevents: 'idevents',
  title: 'title',
  allDay: 'allDay',
  start: 'start',
  end: 'end',
  priority: 'priority',
  sucursal: 'sucursal',
  operador: 'operador',
  leido: 'leido'
};

exports.Prisma.Tipo_contratosScalarFieldEnum = {
  idtipocontrato: 'idtipocontrato',
  tipo_contrato: 'tipo_contrato',
  url: 'url'
};

exports.Prisma.Tipo_facturasScalarFieldEnum = {
  idfactura: 'idfactura',
  tipo_factura: 'tipo_factura',
  fecha: 'fecha',
  estado: 'estado'
};

exports.Prisma.Turno_bajasScalarFieldEnum = {
  idturno: 'idturno',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  fecha_pedido: 'fecha_pedido',
  fecha_turno: 'fecha_turno',
  motivo: 'motivo',
  operador: 'operador',
  telefono: 'telefono',
  movil: 'movil',
  fecha_atencion: 'fecha_atencion',
  estado: 'estado',
  empresa: 'empresa',
  respuesta: 'respuesta',
  operador_atencion: 'operador_atencion',
  detalle: 'detalle'
};

exports.Prisma.VacacionesScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  allDay: 'allDay',
  priority: 'priority',
  title: 'title',
  user: 'user',
  detail: 'detail'
};

exports.Prisma.Motivos_atencionScalarFieldEnum = {
  idmotivo: 'idmotivo',
  motivo: 'motivo',
  estado: 'estado'
};

exports.Prisma.Prestamos_plan_cuotasScalarFieldEnum = {
  idplan: 'idplan',
  plan_cuotas: 'plan_cuotas',
  detalle: 'detalle',
  estado: 'estado'
};

exports.Prisma.Prestamos_tasasScalarFieldEnum = {
  idtasa: 'idtasa',
  tasa: 'tasa',
  plan: 'plan',
  tipo: 'tipo',
  estado: 'estado'
};

exports.Prisma.Certificado_estudiantesScalarFieldEnum = {
  idcertificado: 'idcertificado',
  contrato: 'contrato',
  socio: 'socio',
  fecha: 'fecha',
  operador: 'operador',
  ncert: 'ncert'
};

exports.Prisma.CarteraScalarFieldEnum = {
  contrato: 'contrato',
  socio: 'socio',
  alta: 'alta',
  grupo: 'grupo',
  adhs: 'adhs',
  plan: 'plan',
  sub_plan: 'sub_plan',
  zona: 'zona',
  cuota: 'cuota',
  empresa: 'empresa',
  sucursal: 'sucursal',
  deuda: 'deuda',
  mes: 'mes',
  ano: 'ano',
  idcartera: 'idcartera'
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
  alta_novell: 'alta_novell',
  caja_sucursales: 'caja_sucursales',
  campanacasos: 'campanacasos',
  campanas: 'campanas',
  campanatemporal: 'campanatemporal',
  capital_prestamo: 'capital_prestamo',
  capital_prestamo_empleados: 'capital_prestamo_empleados',
  categoria_obsequio: 'categoria_obsequio',
  contratos: 'contratos',
  convenio_deuda: 'convenio_deuda',
  datos: 'datos',
  datos_atencion: 'datos_atencion',
  detalle_orden_pago: 'detalle_orden_pago',
  empresas: 'empresas',
  eventos: 'eventos',
  fabricante_ataud: 'fabricante_ataud',
  gestioncaso: 'gestioncaso',
  historial_acciones: 'historial_acciones',
  historial_aprobacion_prestamos: 'historial_aprobacion_prestamos',
  historial_liquidaciones: 'historial_liquidaciones',
  intereses_tarjetas: 'intereses_tarjetas',
  legajo_virtual: 'legajo_virtual',
  legajo_virtual_cajas: 'legajo_virtual_cajas',
  legajo_virtual_ordenes: 'legajo_virtual_ordenes',
  legajo_virtual_personal: 'legajo_virtual_personal',
  legajo_virtual_prestamos: 'legajo_virtual_prestamos',
  locador: 'locador',
  mails: 'mails',
  mails_adjuntos: 'mails_adjuntos',
  mbanconv: 'mbanconv',
  movimiento_caja_sucursales: 'movimiento_caja_sucursales',
  noticia: 'noticia',
  novedades: 'novedades',
  obsequios: 'obsequios',
  openia_keys: 'openia_keys',
  operador: 'operador',
  ordenes_pago: 'ordenes_pago',
  personal: 'personal',
  plan_cuentas: 'plan_cuentas',
  plan_cuentas_x: 'plan_cuentas_x',
  plan_detalle: 'plan_detalle',
  plan_precio: 'plan_precio',
  porcentaje_liq: 'porcentaje_liq',
  prestamos_empleados: 'prestamos_empleados',
  prestamos_empleados_cobro: 'prestamos_empleados_cobro',
  produccion: 'produccion',
  registro_constancia_afiliacion: 'registro_constancia_afiliacion',
  rehabilitaciones: 'rehabilitaciones',
  rol_personal: 'rol_personal',
  sucursal: 'sucursal',
  sueldos: 'sueldos',
  tab_ef: 'tab_ef',
  tablero_efectividad: 'tablero_efectividad',
  tareas_sucursales: 'tareas_sucursales',
  tipo_contratos: 'tipo_contratos',
  tipo_facturas: 'tipo_facturas',
  turno_bajas: 'turno_bajas',
  vacaciones: 'vacaciones',
  motivos_atencion: 'motivos_atencion',
  prestamos_plan_cuotas: 'prestamos_plan_cuotas',
  prestamos_tasas: 'prestamos_tasas',
  certificado_estudiantes: 'certificado_estudiantes',
  cartera: 'cartera'
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
