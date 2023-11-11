
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type AUT_PRACPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    ESP_PRAC: string | null
    CODIGOS: string | null
    DESCRIP: string | null
    FECHA_ALT: Date | null
    ANULADO: number | null
    COD_PRES01: string | null
    PRECIO_01: string | null
    SUC_01: string | null
    COD_PRES02: string | null
    PRECIO_02: string | null
    SUC_02: string | null
    COD_PRES03: string | null
    PRECIO_03: string | null
    SUC_03: string | null
    COD_PRES04: string | null
    PRECIO_04: string | null
    SUC_04: string | null
    COD_PRES05: string | null
    PRECIO_05: number | null
    SUC_05: string | null
    COD_PRES06: string | null
    PRECIO_06: number | null
    SUC_06: string | null
    COD_PRES07: string | null
    PRECIO_07: number | null
    SUC_07: string | null
    COD_PRES08: string | null
    PRECIO_08: number | null
    SUC_08: string | null
    COD_PRES09: string | null
    PRECIO_09: number | null
    SUC_09: string | null
    COD_PRES10: string | null
    PRECIO_10: string | null
    SUC_10: string | null
    COD_PRES11: string | null
    PRECIO_11: string | null
    SUC_11: string | null
    COD_PRES12: string | null
    PRECIO_12: string | null
    SUC_12: string | null
    COD_PRES13: string | null
    PRECIO_13: string | null
    SUC_13: string | null
    COD_PRES14: string | null
    PRECIO_14: string | null
    SUC_14: string | null
    COD_PRES15: string | null
    PRECIO_15: string | null
    SUC_15: string | null
    COD_PRES16: string | null
    PRECIO_16: number | null
    SUC_16: string | null
    COD_PRES17: string | null
    PRECIO_17: number | null
    SUC_17: string | null
    COD_PRES18: string | null
    PRECIO_18: number | null
    SUC_18: string | null
    COD_PRES19: string | null
    PRECIO_19: number | null
    SUC_19: string | null
    COD_PRES20: string | null
    PRECIO_20: number | null
    SUC_20: string | null
    idpractica: number
  }, ExtArgs["result"]["aUT_PRAC"]>
  composites: {}
}

/**
 * Model AUT_PRAC
 * 
 */
export type AUT_PRAC = runtime.Types.DefaultSelection<AUT_PRACPayload>
export type CAJAPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    PUESTO: string | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    DET_AUX: string | null
    FECHA: Date | null
    FEC_COMP: string | null
    HORA: string | null
    ORIGEN: string | null
    OPERADOR: string | null
    ASIENTO: number | null
    EXENTO: string | null
    CANT_AFIL: number | null
    CAE: string | null
    VTO_CAE: string | null
    iditem: number
  }, ExtArgs["result"]["cAJA"]>
  composites: {}
}

/**
 * Model CAJA
 * 
 */
export type CAJA = runtime.Types.DefaultSelection<CAJAPayload>
export type CONSULTAPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    COD_PRES: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    DIAGNOSTIC: string | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number
    SUC: string | null
  }, ExtArgs["result"]["cONSULTA"]>
  composites: {}
}

/**
 * Model CONSULTA
 * 
 */
export type CONSULTA = runtime.Types.DefaultSelection<CONSULTAPayload>
export type ENFERMERPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number
    CANTIDAD: number | null
    SUC: string | null
  }, ExtArgs["result"]["eNFERMER"]>
  composites: {}
}

/**
 * Model ENFERMER
 * 
 */
export type ENFERMER = runtime.Types.DefaultSelection<ENFERMERPayload>
export type FARMACIAPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_DOC: number | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    MODO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    FEC_USO: Date | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number
    SUC: string | null
  }, ExtArgs["result"]["fARMACIA"]>
  composites: {}
}

/**
 * Model FARMACIA
 * 
 */
export type FARMACIA = runtime.Types.DefaultSelection<FARMACIAPayload>
export type MEDICOS_TURNOSPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idturno: number
    turno: string | null
    fecha: Date | null
    hora: string | null
    doctor: string | null
    paciente: string | null
    obra_soc: string | null
    telefono: bigint | null
    estado: number | null
    operador: string | null
    domicilio: string | null
    mail: string | null
    dni: number | null
  }, ExtArgs["result"]["mEDICOS_TURNOS"]>
  composites: {}
}

/**
 * Model MEDICOS_TURNOS
 * 
 */
export type MEDICOS_TURNOS = runtime.Types.DefaultSelection<MEDICOS_TURNOSPayload>
export type PRACTICAPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUC_PRA: string | null
    CONTRATO: number | null
    NRO_DNI: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    PRAC_REA: string | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    COD_PRAC: string | null
    idpractica: number
    DESCRIP: string | null
  }, ExtArgs["result"]["pRACTICA"]>
  composites: {}
}

/**
 * Model PRACTICA
 * 
 */
export type PRACTICA = runtime.Types.DefaultSelection<PRACTICAPayload>
export type PRACT_ENFERPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idpractica: number
    practica: string | null
    importe: number | null
  }, ExtArgs["result"]["pRACT_ENFER"]>
  composites: {}
}

/**
 * Model PRACT_ENFER
 * 
 */
export type PRACT_ENFER = runtime.Types.DefaultSelection<PRACT_ENFERPayload>
export type PRESTADOPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    COD_PRES: string
    NOMBRE: string | null
    ESPEC: string | null
    LIS_ESPE: string | null
    SUC: string | null
    DIRECCION: string | null
    LOCALIDAD: string | null
    TELEFONOS: string | null
    HORARIO1: string | null
    HORARIO2: string | null
    MODALIDAD: string | null
    MATRICULA: string | null
    COD_POST: number | null
    AUSENTE: number | null
    DESDE: Date | null
    HASTA: Date | null
    CUIT: string | null
    FEC_NAC: Date | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    ALTA: Date | null
    BAJA: Date | null
    OTERO: number | null
    idprest: number
    PROMO: boolean | null
  }, ExtArgs["result"]["pRESTADO"]>
  composites: {}
}

/**
 * Model PRESTADO
 * 
 */
export type PRESTADO = runtime.Types.DefaultSelection<PRESTADOPayload>
export type USOSPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUC: string | null
    ORDEN: string | null
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    PLAN: string | null
    EDAD: number | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: Date | null
    FEC_CAJA: Date | null
    HORA: string | null
    SERVICIO: string | null
    NUSOS: number | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: number | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: number | null
    OPERADOR: string | null
    RENDIDO: number | null
    FECHA_CIERRE: Date | null
    EMPRESA: string | null
    iduso: number
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    IMP_LIQ: number | null
  }, ExtArgs["result"]["uSOS"]>
  composites: {}
}

/**
 * Model USOS
 * 
 */
export type USOS = runtime.Types.DefaultSelection<USOSPayload>
export type USOSFAPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUC: string | null
    ORDEN: string | null
    CONTRATO: string | null
    NRO_ADH: string | null
    NRO_DOC: string | null
    PLAN: string | null
    EDAD: string | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: string | null
    FEC_CAJA: string | null
    HORA: string | null
    SERVICIO: string | null
    COMPROBA: string | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: string | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: string | null
    OPERADOR: string | null
    OPE_AUTO: string | null
    FEC_USO: string | null
    PEDIDO: string | null
    NRO_RECETA: string | null
    COMP: string | null
    EMPRESA: string | null
    N_SERIE: string | null
    N_RECIBO: string | null
    IMP_NC: string | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    iduso: number
    IMP_LIQ: string | null
  }, ExtArgs["result"]["uSOSFA"]>
  composites: {}
}

/**
 * Model USOSFA
 * 
 */
export type USOSFA = runtime.Types.DefaultSelection<USOSFAPayload>
export type adherent_proviPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idadherent: number
    CONTRATO: number | null
    NRO_DOC: number | null
    PLAN: string | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    EMPRESA: string | null
    ESTADO: boolean | null
  }, ExtArgs["result"]["adherent_provi"]>
  composites: {}
}

/**
 * Model adherent_provi
 * 
 */
export type adherent_provi = runtime.Types.DefaultSelection<adherent_proviPayload>
export type nosociosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idnosocio: number
    nosocio: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    obra_soc: string | null
    fecha: Date | null
    codigo: number | null
    gremio: string | null
    estado: boolean | null
    otra_os: string | null
  }, ExtArgs["result"]["nosocios"]>
  composites: {}
}

/**
 * Model nosocios
 * 
 */
export type nosocios = runtime.Types.DefaultSelection<nosociosPayload>
export type planes_odontologicosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idplan: number
    total: number | null
    pago_inicial: number | null
    detalle: string | null
    estado: boolean | null
    visitas: number | null
    fecha_plan: Date | null
    cuotas: number | null
    plan: string | null
  }, ExtArgs["result"]["planes_odontologicos"]>
  composites: {}
}

/**
 * Model planes_odontologicos
 * 
 */
export type planes_odontologicos = runtime.Types.DefaultSelection<planes_odontologicosPayload>
export type planes_socioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idplansocio: number
    contrato: number | null
    dni: number | null
    socio: string | null
    fecha: Date | null
    total: number | null
    pagado: number | null
    saldo: number | null
    estado: boolean | null
    prestador: string | null
    prestador_nombre: string | null
    operador: string | null
    sucursal: string | null
    plan: string | null
  }, ExtArgs["result"]["planes_socio"]>
  composites: {}
}

/**
 * Model planes_socio
 * 
 */
export type planes_socio = runtime.Types.DefaultSelection<planes_socioPayload>
export type planes_visitasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idvisita: number
    idplan: number | null
    nvisita: number | null
    pago: number | null
    fecha: Date | null
    pagado: boolean | null
    operador: string | null
    plan: string | null
  }, ExtArgs["result"]["planes_visitas"]>
  composites: {}
}

/**
 * Model planes_visitas
 * 
 */
export type planes_visitas = runtime.Types.DefaultSelection<planes_visitasPayload>
export type pacientesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idpaciente: number
    paciente: string | null
    dni: number | null
    obra_soc: string | null
    telefono: bigint | null
    domicilio: string | null
    mail: string | null
  }, ExtArgs["result"]["pacientes"]>
  composites: {}
}

/**
 * Model pacientes
 * 
 */
export type pacientes = runtime.Types.DefaultSelection<pacientesPayload>
export type promocionesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idpromo: number
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
  }, ExtArgs["result"]["promociones"]>
  composites: {}
}

/**
 * Model promociones
 * 
 */
export type promociones = runtime.Types.DefaultSelection<promocionesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AUT_PRACS
 * const aUT_PRACS = await prisma.aUT_PRAC.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AUT_PRACS
   * const aUT_PRACS = await prisma.aUT_PRAC.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.aUT_PRAC`: Exposes CRUD operations for the **AUT_PRAC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AUT_PRACS
    * const aUT_PRACS = await prisma.aUT_PRAC.findMany()
    * ```
    */
  get aUT_PRAC(): Prisma.AUT_PRACDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cAJA`: Exposes CRUD operations for the **CAJA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CAJAS
    * const cAJAS = await prisma.cAJA.findMany()
    * ```
    */
  get cAJA(): Prisma.CAJADelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cONSULTA`: Exposes CRUD operations for the **CONSULTA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CONSULTAS
    * const cONSULTAS = await prisma.cONSULTA.findMany()
    * ```
    */
  get cONSULTA(): Prisma.CONSULTADelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.eNFERMER`: Exposes CRUD operations for the **ENFERMER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ENFERMERS
    * const eNFERMERS = await prisma.eNFERMER.findMany()
    * ```
    */
  get eNFERMER(): Prisma.ENFERMERDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.fARMACIA`: Exposes CRUD operations for the **FARMACIA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FARMACIAS
    * const fARMACIAS = await prisma.fARMACIA.findMany()
    * ```
    */
  get fARMACIA(): Prisma.FARMACIADelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.mEDICOS_TURNOS`: Exposes CRUD operations for the **MEDICOS_TURNOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MEDICOS_TURNOS
    * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findMany()
    * ```
    */
  get mEDICOS_TURNOS(): Prisma.MEDICOS_TURNOSDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pRACTICA`: Exposes CRUD operations for the **PRACTICA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRACTICAS
    * const pRACTICAS = await prisma.pRACTICA.findMany()
    * ```
    */
  get pRACTICA(): Prisma.PRACTICADelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pRACT_ENFER`: Exposes CRUD operations for the **PRACT_ENFER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRACT_ENFERS
    * const pRACT_ENFERS = await prisma.pRACT_ENFER.findMany()
    * ```
    */
  get pRACT_ENFER(): Prisma.PRACT_ENFERDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pRESTADO`: Exposes CRUD operations for the **PRESTADO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRESTADOS
    * const pRESTADOS = await prisma.pRESTADO.findMany()
    * ```
    */
  get pRESTADO(): Prisma.PRESTADODelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.uSOS`: Exposes CRUD operations for the **USOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USOS
    * const uSOS = await prisma.uSOS.findMany()
    * ```
    */
  get uSOS(): Prisma.USOSDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.uSOSFA`: Exposes CRUD operations for the **USOSFA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USOSFAS
    * const uSOSFAS = await prisma.uSOSFA.findMany()
    * ```
    */
  get uSOSFA(): Prisma.USOSFADelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.adherent_provi`: Exposes CRUD operations for the **adherent_provi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adherent_provis
    * const adherent_provis = await prisma.adherent_provi.findMany()
    * ```
    */
  get adherent_provi(): Prisma.adherent_proviDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.nosocios`: Exposes CRUD operations for the **nosocios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nosocios
    * const nosocios = await prisma.nosocios.findMany()
    * ```
    */
  get nosocios(): Prisma.nosociosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.planes_odontologicos`: Exposes CRUD operations for the **planes_odontologicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planes_odontologicos
    * const planes_odontologicos = await prisma.planes_odontologicos.findMany()
    * ```
    */
  get planes_odontologicos(): Prisma.planes_odontologicosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.planes_socio`: Exposes CRUD operations for the **planes_socio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planes_socios
    * const planes_socios = await prisma.planes_socio.findMany()
    * ```
    */
  get planes_socio(): Prisma.planes_socioDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.planes_visitas`: Exposes CRUD operations for the **planes_visitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planes_visitas
    * const planes_visitas = await prisma.planes_visitas.findMany()
    * ```
    */
  get planes_visitas(): Prisma.planes_visitasDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.promociones`: Exposes CRUD operations for the **promociones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promociones
    * const promociones = await prisma.promociones.findMany()
    * ```
    */
  get promociones(): Prisma.promocionesDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.17.0-dev.38
   * Query Engine version: e6267db1c1bc827b8eb87f644288c3cb0800ec89
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    nosocios: 'nosocios',
    planes_odontologicos: 'planes_odontologicos',
    planes_socio: 'planes_socio',
    planes_visitas: 'planes_visitas',
    pacientes: 'pacientes',
    promociones: 'promociones'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'aUT_PRAC' | 'cAJA' | 'cONSULTA' | 'eNFERMER' | 'fARMACIA' | 'mEDICOS_TURNOS' | 'pRACTICA' | 'pRACT_ENFER' | 'pRESTADO' | 'uSOS' | 'uSOSFA' | 'adherent_provi' | 'nosocios' | 'planes_odontologicos' | 'planes_socio' | 'planes_visitas' | 'pacientes' | 'promociones'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      AUT_PRAC: {
        operations: {
          findUnique: {
            args: Prisma.AUT_PRACFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload> | null
            payload: AUT_PRACPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.AUT_PRACFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.AUT_PRACFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload> | null
            payload: AUT_PRACPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.AUT_PRACFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.AUT_PRACFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>[]
            payload: AUT_PRACPayload<ExtArgs>
          }
          create: {
            args: Prisma.AUT_PRACCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.AUT_PRACCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AUT_PRACPayload<ExtArgs>
          }
          delete: {
            args: Prisma.AUT_PRACDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          update: {
            args: Prisma.AUT_PRACUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.AUT_PRACDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AUT_PRACPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.AUT_PRACUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AUT_PRACPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.AUT_PRACUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AUT_PRACPayload>
            payload: AUT_PRACPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AUT_PRACAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAUT_PRAC>
            payload: AUT_PRACPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.AUT_PRACGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AUT_PRACGroupByOutputType>[]
            payload: AUT_PRACPayload<ExtArgs>
          }
          count: {
            args: Prisma.AUT_PRACCountArgs<ExtArgs>,
            result: $Utils.Optional<AUT_PRACCountAggregateOutputType> | number
            payload: AUT_PRACPayload<ExtArgs>
          }
        }
      }
      CAJA: {
        operations: {
          findUnique: {
            args: Prisma.CAJAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload> | null
            payload: CAJAPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CAJAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CAJAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload> | null
            payload: CAJAPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CAJAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CAJAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>[]
            payload: CAJAPayload<ExtArgs>
          }
          create: {
            args: Prisma.CAJACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CAJACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CAJAPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CAJADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          update: {
            args: Prisma.CAJAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CAJADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CAJAPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CAJAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CAJAPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CAJAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CAJAPayload>
            payload: CAJAPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CAJAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCAJA>
            payload: CAJAPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CAJAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CAJAGroupByOutputType>[]
            payload: CAJAPayload<ExtArgs>
          }
          count: {
            args: Prisma.CAJACountArgs<ExtArgs>,
            result: $Utils.Optional<CAJACountAggregateOutputType> | number
            payload: CAJAPayload<ExtArgs>
          }
        }
      }
      CONSULTA: {
        operations: {
          findUnique: {
            args: Prisma.CONSULTAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload> | null
            payload: CONSULTAPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CONSULTAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CONSULTAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload> | null
            payload: CONSULTAPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CONSULTAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CONSULTAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>[]
            payload: CONSULTAPayload<ExtArgs>
          }
          create: {
            args: Prisma.CONSULTACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CONSULTACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CONSULTAPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CONSULTADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          update: {
            args: Prisma.CONSULTAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CONSULTADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CONSULTAPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CONSULTAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CONSULTAPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CONSULTAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CONSULTAPayload>
            payload: CONSULTAPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CONSULTAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCONSULTA>
            payload: CONSULTAPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CONSULTAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CONSULTAGroupByOutputType>[]
            payload: CONSULTAPayload<ExtArgs>
          }
          count: {
            args: Prisma.CONSULTACountArgs<ExtArgs>,
            result: $Utils.Optional<CONSULTACountAggregateOutputType> | number
            payload: CONSULTAPayload<ExtArgs>
          }
        }
      }
      ENFERMER: {
        operations: {
          findUnique: {
            args: Prisma.ENFERMERFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload> | null
            payload: ENFERMERPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ENFERMERFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ENFERMERFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload> | null
            payload: ENFERMERPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ENFERMERFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ENFERMERFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>[]
            payload: ENFERMERPayload<ExtArgs>
          }
          create: {
            args: Prisma.ENFERMERCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ENFERMERCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ENFERMERPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ENFERMERDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          update: {
            args: Prisma.ENFERMERUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ENFERMERDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ENFERMERPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ENFERMERUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ENFERMERPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ENFERMERUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ENFERMERPayload>
            payload: ENFERMERPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ENFERMERAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateENFERMER>
            payload: ENFERMERPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ENFERMERGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ENFERMERGroupByOutputType>[]
            payload: ENFERMERPayload<ExtArgs>
          }
          count: {
            args: Prisma.ENFERMERCountArgs<ExtArgs>,
            result: $Utils.Optional<ENFERMERCountAggregateOutputType> | number
            payload: ENFERMERPayload<ExtArgs>
          }
        }
      }
      FARMACIA: {
        operations: {
          findUnique: {
            args: Prisma.FARMACIAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload> | null
            payload: FARMACIAPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.FARMACIAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.FARMACIAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload> | null
            payload: FARMACIAPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.FARMACIAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.FARMACIAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>[]
            payload: FARMACIAPayload<ExtArgs>
          }
          create: {
            args: Prisma.FARMACIACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.FARMACIACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: FARMACIAPayload<ExtArgs>
          }
          delete: {
            args: Prisma.FARMACIADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          update: {
            args: Prisma.FARMACIAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.FARMACIADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: FARMACIAPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.FARMACIAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: FARMACIAPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.FARMACIAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FARMACIAPayload>
            payload: FARMACIAPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.FARMACIAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFARMACIA>
            payload: FARMACIAPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.FARMACIAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FARMACIAGroupByOutputType>[]
            payload: FARMACIAPayload<ExtArgs>
          }
          count: {
            args: Prisma.FARMACIACountArgs<ExtArgs>,
            result: $Utils.Optional<FARMACIACountAggregateOutputType> | number
            payload: FARMACIAPayload<ExtArgs>
          }
        }
      }
      MEDICOS_TURNOS: {
        operations: {
          findUnique: {
            args: Prisma.MEDICOS_TURNOSFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload> | null
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.MEDICOS_TURNOSFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.MEDICOS_TURNOSFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload> | null
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.MEDICOS_TURNOSFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.MEDICOS_TURNOSFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>[]
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          create: {
            args: Prisma.MEDICOS_TURNOSCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.MEDICOS_TURNOSCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          delete: {
            args: Prisma.MEDICOS_TURNOSDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          update: {
            args: Prisma.MEDICOS_TURNOSUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.MEDICOS_TURNOSDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.MEDICOS_TURNOSUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.MEDICOS_TURNOSUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MEDICOS_TURNOSPayload>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.MEDICOS_TURNOSAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMEDICOS_TURNOS>
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.MEDICOS_TURNOSGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MEDICOS_TURNOSGroupByOutputType>[]
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
          count: {
            args: Prisma.MEDICOS_TURNOSCountArgs<ExtArgs>,
            result: $Utils.Optional<MEDICOS_TURNOSCountAggregateOutputType> | number
            payload: MEDICOS_TURNOSPayload<ExtArgs>
          }
        }
      }
      PRACTICA: {
        operations: {
          findUnique: {
            args: Prisma.PRACTICAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload> | null
            payload: PRACTICAPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.PRACTICAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.PRACTICAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload> | null
            payload: PRACTICAPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.PRACTICAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.PRACTICAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>[]
            payload: PRACTICAPayload<ExtArgs>
          }
          create: {
            args: Prisma.PRACTICACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.PRACTICACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACTICAPayload<ExtArgs>
          }
          delete: {
            args: Prisma.PRACTICADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          update: {
            args: Prisma.PRACTICAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.PRACTICADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACTICAPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.PRACTICAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACTICAPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.PRACTICAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACTICAPayload>
            payload: PRACTICAPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PRACTICAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRACTICA>
            payload: PRACTICAPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.PRACTICAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRACTICAGroupByOutputType>[]
            payload: PRACTICAPayload<ExtArgs>
          }
          count: {
            args: Prisma.PRACTICACountArgs<ExtArgs>,
            result: $Utils.Optional<PRACTICACountAggregateOutputType> | number
            payload: PRACTICAPayload<ExtArgs>
          }
        }
      }
      PRACT_ENFER: {
        operations: {
          findUnique: {
            args: Prisma.PRACT_ENFERFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload> | null
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.PRACT_ENFERFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.PRACT_ENFERFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload> | null
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.PRACT_ENFERFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.PRACT_ENFERFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>[]
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          create: {
            args: Prisma.PRACT_ENFERCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.PRACT_ENFERCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          delete: {
            args: Prisma.PRACT_ENFERDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          update: {
            args: Prisma.PRACT_ENFERUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.PRACT_ENFERDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.PRACT_ENFERUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.PRACT_ENFERUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRACT_ENFERPayload>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PRACT_ENFERAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRACT_ENFER>
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.PRACT_ENFERGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRACT_ENFERGroupByOutputType>[]
            payload: PRACT_ENFERPayload<ExtArgs>
          }
          count: {
            args: Prisma.PRACT_ENFERCountArgs<ExtArgs>,
            result: $Utils.Optional<PRACT_ENFERCountAggregateOutputType> | number
            payload: PRACT_ENFERPayload<ExtArgs>
          }
        }
      }
      PRESTADO: {
        operations: {
          findUnique: {
            args: Prisma.PRESTADOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload> | null
            payload: PRESTADOPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.PRESTADOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.PRESTADOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload> | null
            payload: PRESTADOPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.PRESTADOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.PRESTADOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>[]
            payload: PRESTADOPayload<ExtArgs>
          }
          create: {
            args: Prisma.PRESTADOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.PRESTADOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRESTADOPayload<ExtArgs>
          }
          delete: {
            args: Prisma.PRESTADODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          update: {
            args: Prisma.PRESTADOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.PRESTADODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRESTADOPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.PRESTADOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: PRESTADOPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.PRESTADOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PRESTADOPayload>
            payload: PRESTADOPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PRESTADOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRESTADO>
            payload: PRESTADOPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.PRESTADOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRESTADOGroupByOutputType>[]
            payload: PRESTADOPayload<ExtArgs>
          }
          count: {
            args: Prisma.PRESTADOCountArgs<ExtArgs>,
            result: $Utils.Optional<PRESTADOCountAggregateOutputType> | number
            payload: PRESTADOPayload<ExtArgs>
          }
        }
      }
      USOS: {
        operations: {
          findUnique: {
            args: Prisma.USOSFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload> | null
            payload: USOSPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.USOSFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.USOSFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload> | null
            payload: USOSPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.USOSFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.USOSFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>[]
            payload: USOSPayload<ExtArgs>
          }
          create: {
            args: Prisma.USOSCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.USOSCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSPayload<ExtArgs>
          }
          delete: {
            args: Prisma.USOSDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          update: {
            args: Prisma.USOSUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.USOSDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.USOSUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.USOSUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSPayload>
            payload: USOSPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.USOSAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUSOS>
            payload: USOSPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.USOSGroupByArgs<ExtArgs>,
            result: $Utils.Optional<USOSGroupByOutputType>[]
            payload: USOSPayload<ExtArgs>
          }
          count: {
            args: Prisma.USOSCountArgs<ExtArgs>,
            result: $Utils.Optional<USOSCountAggregateOutputType> | number
            payload: USOSPayload<ExtArgs>
          }
        }
      }
      USOSFA: {
        operations: {
          findUnique: {
            args: Prisma.USOSFAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload> | null
            payload: USOSFAPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.USOSFAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.USOSFAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload> | null
            payload: USOSFAPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.USOSFAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.USOSFAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>[]
            payload: USOSFAPayload<ExtArgs>
          }
          create: {
            args: Prisma.USOSFACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.USOSFACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSFAPayload<ExtArgs>
          }
          delete: {
            args: Prisma.USOSFADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          update: {
            args: Prisma.USOSFAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.USOSFADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSFAPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.USOSFAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: USOSFAPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.USOSFAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<USOSFAPayload>
            payload: USOSFAPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.USOSFAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUSOSFA>
            payload: USOSFAPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.USOSFAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<USOSFAGroupByOutputType>[]
            payload: USOSFAPayload<ExtArgs>
          }
          count: {
            args: Prisma.USOSFACountArgs<ExtArgs>,
            result: $Utils.Optional<USOSFACountAggregateOutputType> | number
            payload: USOSFAPayload<ExtArgs>
          }
        }
      }
      adherent_provi: {
        operations: {
          findUnique: {
            args: Prisma.adherent_proviFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload> | null
            payload: adherent_proviPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.adherent_proviFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.adherent_proviFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload> | null
            payload: adherent_proviPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.adherent_proviFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.adherent_proviFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>[]
            payload: adherent_proviPayload<ExtArgs>
          }
          create: {
            args: Prisma.adherent_proviCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.adherent_proviCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: adherent_proviPayload<ExtArgs>
          }
          delete: {
            args: Prisma.adherent_proviDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          update: {
            args: Prisma.adherent_proviUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.adherent_proviDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: adherent_proviPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.adherent_proviUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: adherent_proviPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.adherent_proviUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherent_proviPayload>
            payload: adherent_proviPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Adherent_proviAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdherent_provi>
            payload: adherent_proviPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.adherent_proviGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Adherent_proviGroupByOutputType>[]
            payload: adherent_proviPayload<ExtArgs>
          }
          count: {
            args: Prisma.adherent_proviCountArgs<ExtArgs>,
            result: $Utils.Optional<Adherent_proviCountAggregateOutputType> | number
            payload: adherent_proviPayload<ExtArgs>
          }
        }
      }
      nosocios: {
        operations: {
          findUnique: {
            args: Prisma.nosociosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload> | null
            payload: nosociosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.nosociosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.nosociosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload> | null
            payload: nosociosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.nosociosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.nosociosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>[]
            payload: nosociosPayload<ExtArgs>
          }
          create: {
            args: Prisma.nosociosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.nosociosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: nosociosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.nosociosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          update: {
            args: Prisma.nosociosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.nosociosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: nosociosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.nosociosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: nosociosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.nosociosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nosociosPayload>
            payload: nosociosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.NosociosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNosocios>
            payload: nosociosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.nosociosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NosociosGroupByOutputType>[]
            payload: nosociosPayload<ExtArgs>
          }
          count: {
            args: Prisma.nosociosCountArgs<ExtArgs>,
            result: $Utils.Optional<NosociosCountAggregateOutputType> | number
            payload: nosociosPayload<ExtArgs>
          }
        }
      }
      planes_odontologicos: {
        operations: {
          findUnique: {
            args: Prisma.planes_odontologicosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload> | null
            payload: planes_odontologicosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.planes_odontologicosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.planes_odontologicosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload> | null
            payload: planes_odontologicosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.planes_odontologicosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.planes_odontologicosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>[]
            payload: planes_odontologicosPayload<ExtArgs>
          }
          create: {
            args: Prisma.planes_odontologicosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.planes_odontologicosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_odontologicosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.planes_odontologicosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          update: {
            args: Prisma.planes_odontologicosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.planes_odontologicosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_odontologicosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.planes_odontologicosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_odontologicosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.planes_odontologicosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_odontologicosPayload>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Planes_odontologicosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlanes_odontologicos>
            payload: planes_odontologicosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.planes_odontologicosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Planes_odontologicosGroupByOutputType>[]
            payload: planes_odontologicosPayload<ExtArgs>
          }
          count: {
            args: Prisma.planes_odontologicosCountArgs<ExtArgs>,
            result: $Utils.Optional<Planes_odontologicosCountAggregateOutputType> | number
            payload: planes_odontologicosPayload<ExtArgs>
          }
        }
      }
      planes_socio: {
        operations: {
          findUnique: {
            args: Prisma.planes_socioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload> | null
            payload: planes_socioPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.planes_socioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.planes_socioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload> | null
            payload: planes_socioPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.planes_socioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.planes_socioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>[]
            payload: planes_socioPayload<ExtArgs>
          }
          create: {
            args: Prisma.planes_socioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.planes_socioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_socioPayload<ExtArgs>
          }
          delete: {
            args: Prisma.planes_socioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          update: {
            args: Prisma.planes_socioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.planes_socioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_socioPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.planes_socioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_socioPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.planes_socioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_socioPayload>
            payload: planes_socioPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Planes_socioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlanes_socio>
            payload: planes_socioPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.planes_socioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Planes_socioGroupByOutputType>[]
            payload: planes_socioPayload<ExtArgs>
          }
          count: {
            args: Prisma.planes_socioCountArgs<ExtArgs>,
            result: $Utils.Optional<Planes_socioCountAggregateOutputType> | number
            payload: planes_socioPayload<ExtArgs>
          }
        }
      }
      planes_visitas: {
        operations: {
          findUnique: {
            args: Prisma.planes_visitasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload> | null
            payload: planes_visitasPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.planes_visitasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.planes_visitasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload> | null
            payload: planes_visitasPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.planes_visitasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.planes_visitasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>[]
            payload: planes_visitasPayload<ExtArgs>
          }
          create: {
            args: Prisma.planes_visitasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.planes_visitasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_visitasPayload<ExtArgs>
          }
          delete: {
            args: Prisma.planes_visitasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          update: {
            args: Prisma.planes_visitasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.planes_visitasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_visitasPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.planes_visitasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: planes_visitasPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.planes_visitasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<planes_visitasPayload>
            payload: planes_visitasPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Planes_visitasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlanes_visitas>
            payload: planes_visitasPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.planes_visitasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Planes_visitasGroupByOutputType>[]
            payload: planes_visitasPayload<ExtArgs>
          }
          count: {
            args: Prisma.planes_visitasCountArgs<ExtArgs>,
            result: $Utils.Optional<Planes_visitasCountAggregateOutputType> | number
            payload: planes_visitasPayload<ExtArgs>
          }
        }
      }
      pacientes: {
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload> | null
            payload: pacientesPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload> | null
            payload: pacientesPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>[]
            payload: pacientesPayload<ExtArgs>
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: pacientesPayload<ExtArgs>
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: pacientesPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: pacientesPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pacientesPayload>
            payload: pacientesPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePacientes>
            payload: pacientesPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PacientesGroupByOutputType>[]
            payload: pacientesPayload<ExtArgs>
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>,
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
            payload: pacientesPayload<ExtArgs>
          }
        }
      }
      promociones: {
        operations: {
          findUnique: {
            args: Prisma.promocionesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload> | null
            payload: promocionesPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.promocionesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.promocionesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload> | null
            payload: promocionesPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.promocionesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.promocionesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>[]
            payload: promocionesPayload<ExtArgs>
          }
          create: {
            args: Prisma.promocionesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.promocionesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: promocionesPayload<ExtArgs>
          }
          delete: {
            args: Prisma.promocionesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          update: {
            args: Prisma.promocionesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.promocionesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: promocionesPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.promocionesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: promocionesPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.promocionesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<promocionesPayload>
            payload: promocionesPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PromocionesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePromociones>
            payload: promocionesPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.promocionesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromocionesGroupByOutputType>[]
            payload: promocionesPayload<ExtArgs>
          }
          count: {
            args: Prisma.promocionesCountArgs<ExtArgs>,
            result: $Utils.Optional<PromocionesCountAggregateOutputType> | number
            payload: promocionesPayload<ExtArgs>
          }
        }
      }
    }
  } & {
    other: {
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AUT_PRAC
   */


  export type AggregateAUT_PRAC = {
    _count: AUT_PRACCountAggregateOutputType | null
    _avg: AUT_PRACAvgAggregateOutputType | null
    _sum: AUT_PRACSumAggregateOutputType | null
    _min: AUT_PRACMinAggregateOutputType | null
    _max: AUT_PRACMaxAggregateOutputType | null
  }

  export type AUT_PRACAvgAggregateOutputType = {
    ANULADO: number | null
    PRECIO_05: number | null
    PRECIO_06: number | null
    PRECIO_07: number | null
    PRECIO_08: number | null
    PRECIO_09: number | null
    PRECIO_16: number | null
    PRECIO_17: number | null
    PRECIO_18: number | null
    PRECIO_19: number | null
    PRECIO_20: number | null
    idpractica: number | null
  }

  export type AUT_PRACSumAggregateOutputType = {
    ANULADO: number | null
    PRECIO_05: number | null
    PRECIO_06: number | null
    PRECIO_07: number | null
    PRECIO_08: number | null
    PRECIO_09: number | null
    PRECIO_16: number | null
    PRECIO_17: number | null
    PRECIO_18: number | null
    PRECIO_19: number | null
    PRECIO_20: number | null
    idpractica: number | null
  }

  export type AUT_PRACMinAggregateOutputType = {
    ESP_PRAC: string | null
    CODIGOS: string | null
    DESCRIP: string | null
    FECHA_ALT: Date | null
    ANULADO: number | null
    COD_PRES01: string | null
    PRECIO_01: string | null
    SUC_01: string | null
    COD_PRES02: string | null
    PRECIO_02: string | null
    SUC_02: string | null
    COD_PRES03: string | null
    PRECIO_03: string | null
    SUC_03: string | null
    COD_PRES04: string | null
    PRECIO_04: string | null
    SUC_04: string | null
    COD_PRES05: string | null
    PRECIO_05: number | null
    SUC_05: string | null
    COD_PRES06: string | null
    PRECIO_06: number | null
    SUC_06: string | null
    COD_PRES07: string | null
    PRECIO_07: number | null
    SUC_07: string | null
    COD_PRES08: string | null
    PRECIO_08: number | null
    SUC_08: string | null
    COD_PRES09: string | null
    PRECIO_09: number | null
    SUC_09: string | null
    COD_PRES10: string | null
    PRECIO_10: string | null
    SUC_10: string | null
    COD_PRES11: string | null
    PRECIO_11: string | null
    SUC_11: string | null
    COD_PRES12: string | null
    PRECIO_12: string | null
    SUC_12: string | null
    COD_PRES13: string | null
    PRECIO_13: string | null
    SUC_13: string | null
    COD_PRES14: string | null
    PRECIO_14: string | null
    SUC_14: string | null
    COD_PRES15: string | null
    PRECIO_15: string | null
    SUC_15: string | null
    COD_PRES16: string | null
    PRECIO_16: number | null
    SUC_16: string | null
    COD_PRES17: string | null
    PRECIO_17: number | null
    SUC_17: string | null
    COD_PRES18: string | null
    PRECIO_18: number | null
    SUC_18: string | null
    COD_PRES19: string | null
    PRECIO_19: number | null
    SUC_19: string | null
    COD_PRES20: string | null
    PRECIO_20: number | null
    SUC_20: string | null
    idpractica: number | null
  }

  export type AUT_PRACMaxAggregateOutputType = {
    ESP_PRAC: string | null
    CODIGOS: string | null
    DESCRIP: string | null
    FECHA_ALT: Date | null
    ANULADO: number | null
    COD_PRES01: string | null
    PRECIO_01: string | null
    SUC_01: string | null
    COD_PRES02: string | null
    PRECIO_02: string | null
    SUC_02: string | null
    COD_PRES03: string | null
    PRECIO_03: string | null
    SUC_03: string | null
    COD_PRES04: string | null
    PRECIO_04: string | null
    SUC_04: string | null
    COD_PRES05: string | null
    PRECIO_05: number | null
    SUC_05: string | null
    COD_PRES06: string | null
    PRECIO_06: number | null
    SUC_06: string | null
    COD_PRES07: string | null
    PRECIO_07: number | null
    SUC_07: string | null
    COD_PRES08: string | null
    PRECIO_08: number | null
    SUC_08: string | null
    COD_PRES09: string | null
    PRECIO_09: number | null
    SUC_09: string | null
    COD_PRES10: string | null
    PRECIO_10: string | null
    SUC_10: string | null
    COD_PRES11: string | null
    PRECIO_11: string | null
    SUC_11: string | null
    COD_PRES12: string | null
    PRECIO_12: string | null
    SUC_12: string | null
    COD_PRES13: string | null
    PRECIO_13: string | null
    SUC_13: string | null
    COD_PRES14: string | null
    PRECIO_14: string | null
    SUC_14: string | null
    COD_PRES15: string | null
    PRECIO_15: string | null
    SUC_15: string | null
    COD_PRES16: string | null
    PRECIO_16: number | null
    SUC_16: string | null
    COD_PRES17: string | null
    PRECIO_17: number | null
    SUC_17: string | null
    COD_PRES18: string | null
    PRECIO_18: number | null
    SUC_18: string | null
    COD_PRES19: string | null
    PRECIO_19: number | null
    SUC_19: string | null
    COD_PRES20: string | null
    PRECIO_20: number | null
    SUC_20: string | null
    idpractica: number | null
  }

  export type AUT_PRACCountAggregateOutputType = {
    ESP_PRAC: number
    CODIGOS: number
    DESCRIP: number
    FECHA_ALT: number
    ANULADO: number
    COD_PRES01: number
    PRECIO_01: number
    SUC_01: number
    COD_PRES02: number
    PRECIO_02: number
    SUC_02: number
    COD_PRES03: number
    PRECIO_03: number
    SUC_03: number
    COD_PRES04: number
    PRECIO_04: number
    SUC_04: number
    COD_PRES05: number
    PRECIO_05: number
    SUC_05: number
    COD_PRES06: number
    PRECIO_06: number
    SUC_06: number
    COD_PRES07: number
    PRECIO_07: number
    SUC_07: number
    COD_PRES08: number
    PRECIO_08: number
    SUC_08: number
    COD_PRES09: number
    PRECIO_09: number
    SUC_09: number
    COD_PRES10: number
    PRECIO_10: number
    SUC_10: number
    COD_PRES11: number
    PRECIO_11: number
    SUC_11: number
    COD_PRES12: number
    PRECIO_12: number
    SUC_12: number
    COD_PRES13: number
    PRECIO_13: number
    SUC_13: number
    COD_PRES14: number
    PRECIO_14: number
    SUC_14: number
    COD_PRES15: number
    PRECIO_15: number
    SUC_15: number
    COD_PRES16: number
    PRECIO_16: number
    SUC_16: number
    COD_PRES17: number
    PRECIO_17: number
    SUC_17: number
    COD_PRES18: number
    PRECIO_18: number
    SUC_18: number
    COD_PRES19: number
    PRECIO_19: number
    SUC_19: number
    COD_PRES20: number
    PRECIO_20: number
    SUC_20: number
    idpractica: number
    _all: number
  }


  export type AUT_PRACAvgAggregateInputType = {
    ANULADO?: true
    PRECIO_05?: true
    PRECIO_06?: true
    PRECIO_07?: true
    PRECIO_08?: true
    PRECIO_09?: true
    PRECIO_16?: true
    PRECIO_17?: true
    PRECIO_18?: true
    PRECIO_19?: true
    PRECIO_20?: true
    idpractica?: true
  }

  export type AUT_PRACSumAggregateInputType = {
    ANULADO?: true
    PRECIO_05?: true
    PRECIO_06?: true
    PRECIO_07?: true
    PRECIO_08?: true
    PRECIO_09?: true
    PRECIO_16?: true
    PRECIO_17?: true
    PRECIO_18?: true
    PRECIO_19?: true
    PRECIO_20?: true
    idpractica?: true
  }

  export type AUT_PRACMinAggregateInputType = {
    ESP_PRAC?: true
    CODIGOS?: true
    DESCRIP?: true
    FECHA_ALT?: true
    ANULADO?: true
    COD_PRES01?: true
    PRECIO_01?: true
    SUC_01?: true
    COD_PRES02?: true
    PRECIO_02?: true
    SUC_02?: true
    COD_PRES03?: true
    PRECIO_03?: true
    SUC_03?: true
    COD_PRES04?: true
    PRECIO_04?: true
    SUC_04?: true
    COD_PRES05?: true
    PRECIO_05?: true
    SUC_05?: true
    COD_PRES06?: true
    PRECIO_06?: true
    SUC_06?: true
    COD_PRES07?: true
    PRECIO_07?: true
    SUC_07?: true
    COD_PRES08?: true
    PRECIO_08?: true
    SUC_08?: true
    COD_PRES09?: true
    PRECIO_09?: true
    SUC_09?: true
    COD_PRES10?: true
    PRECIO_10?: true
    SUC_10?: true
    COD_PRES11?: true
    PRECIO_11?: true
    SUC_11?: true
    COD_PRES12?: true
    PRECIO_12?: true
    SUC_12?: true
    COD_PRES13?: true
    PRECIO_13?: true
    SUC_13?: true
    COD_PRES14?: true
    PRECIO_14?: true
    SUC_14?: true
    COD_PRES15?: true
    PRECIO_15?: true
    SUC_15?: true
    COD_PRES16?: true
    PRECIO_16?: true
    SUC_16?: true
    COD_PRES17?: true
    PRECIO_17?: true
    SUC_17?: true
    COD_PRES18?: true
    PRECIO_18?: true
    SUC_18?: true
    COD_PRES19?: true
    PRECIO_19?: true
    SUC_19?: true
    COD_PRES20?: true
    PRECIO_20?: true
    SUC_20?: true
    idpractica?: true
  }

  export type AUT_PRACMaxAggregateInputType = {
    ESP_PRAC?: true
    CODIGOS?: true
    DESCRIP?: true
    FECHA_ALT?: true
    ANULADO?: true
    COD_PRES01?: true
    PRECIO_01?: true
    SUC_01?: true
    COD_PRES02?: true
    PRECIO_02?: true
    SUC_02?: true
    COD_PRES03?: true
    PRECIO_03?: true
    SUC_03?: true
    COD_PRES04?: true
    PRECIO_04?: true
    SUC_04?: true
    COD_PRES05?: true
    PRECIO_05?: true
    SUC_05?: true
    COD_PRES06?: true
    PRECIO_06?: true
    SUC_06?: true
    COD_PRES07?: true
    PRECIO_07?: true
    SUC_07?: true
    COD_PRES08?: true
    PRECIO_08?: true
    SUC_08?: true
    COD_PRES09?: true
    PRECIO_09?: true
    SUC_09?: true
    COD_PRES10?: true
    PRECIO_10?: true
    SUC_10?: true
    COD_PRES11?: true
    PRECIO_11?: true
    SUC_11?: true
    COD_PRES12?: true
    PRECIO_12?: true
    SUC_12?: true
    COD_PRES13?: true
    PRECIO_13?: true
    SUC_13?: true
    COD_PRES14?: true
    PRECIO_14?: true
    SUC_14?: true
    COD_PRES15?: true
    PRECIO_15?: true
    SUC_15?: true
    COD_PRES16?: true
    PRECIO_16?: true
    SUC_16?: true
    COD_PRES17?: true
    PRECIO_17?: true
    SUC_17?: true
    COD_PRES18?: true
    PRECIO_18?: true
    SUC_18?: true
    COD_PRES19?: true
    PRECIO_19?: true
    SUC_19?: true
    COD_PRES20?: true
    PRECIO_20?: true
    SUC_20?: true
    idpractica?: true
  }

  export type AUT_PRACCountAggregateInputType = {
    ESP_PRAC?: true
    CODIGOS?: true
    DESCRIP?: true
    FECHA_ALT?: true
    ANULADO?: true
    COD_PRES01?: true
    PRECIO_01?: true
    SUC_01?: true
    COD_PRES02?: true
    PRECIO_02?: true
    SUC_02?: true
    COD_PRES03?: true
    PRECIO_03?: true
    SUC_03?: true
    COD_PRES04?: true
    PRECIO_04?: true
    SUC_04?: true
    COD_PRES05?: true
    PRECIO_05?: true
    SUC_05?: true
    COD_PRES06?: true
    PRECIO_06?: true
    SUC_06?: true
    COD_PRES07?: true
    PRECIO_07?: true
    SUC_07?: true
    COD_PRES08?: true
    PRECIO_08?: true
    SUC_08?: true
    COD_PRES09?: true
    PRECIO_09?: true
    SUC_09?: true
    COD_PRES10?: true
    PRECIO_10?: true
    SUC_10?: true
    COD_PRES11?: true
    PRECIO_11?: true
    SUC_11?: true
    COD_PRES12?: true
    PRECIO_12?: true
    SUC_12?: true
    COD_PRES13?: true
    PRECIO_13?: true
    SUC_13?: true
    COD_PRES14?: true
    PRECIO_14?: true
    SUC_14?: true
    COD_PRES15?: true
    PRECIO_15?: true
    SUC_15?: true
    COD_PRES16?: true
    PRECIO_16?: true
    SUC_16?: true
    COD_PRES17?: true
    PRECIO_17?: true
    SUC_17?: true
    COD_PRES18?: true
    PRECIO_18?: true
    SUC_18?: true
    COD_PRES19?: true
    PRECIO_19?: true
    SUC_19?: true
    COD_PRES20?: true
    PRECIO_20?: true
    SUC_20?: true
    idpractica?: true
    _all?: true
  }

  export type AUT_PRACAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AUT_PRAC to aggregate.
     */
    where?: AUT_PRACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUT_PRACS to fetch.
     */
    orderBy?: AUT_PRACOrderByWithRelationInput | AUT_PRACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AUT_PRACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUT_PRACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUT_PRACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AUT_PRACS
    **/
    _count?: true | AUT_PRACCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AUT_PRACAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AUT_PRACSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AUT_PRACMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AUT_PRACMaxAggregateInputType
  }

  export type GetAUT_PRACAggregateType<T extends AUT_PRACAggregateArgs> = {
        [P in keyof T & keyof AggregateAUT_PRAC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAUT_PRAC[P]>
      : GetScalarType<T[P], AggregateAUT_PRAC[P]>
  }




  export type AUT_PRACGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AUT_PRACWhereInput
    orderBy?: AUT_PRACOrderByWithAggregationInput | AUT_PRACOrderByWithAggregationInput[]
    by: AUT_PRACScalarFieldEnum[] | AUT_PRACScalarFieldEnum
    having?: AUT_PRACScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AUT_PRACCountAggregateInputType | true
    _avg?: AUT_PRACAvgAggregateInputType
    _sum?: AUT_PRACSumAggregateInputType
    _min?: AUT_PRACMinAggregateInputType
    _max?: AUT_PRACMaxAggregateInputType
  }


  export type AUT_PRACGroupByOutputType = {
    ESP_PRAC: string | null
    CODIGOS: string | null
    DESCRIP: string | null
    FECHA_ALT: Date | null
    ANULADO: number | null
    COD_PRES01: string | null
    PRECIO_01: string | null
    SUC_01: string | null
    COD_PRES02: string | null
    PRECIO_02: string | null
    SUC_02: string | null
    COD_PRES03: string | null
    PRECIO_03: string | null
    SUC_03: string | null
    COD_PRES04: string | null
    PRECIO_04: string | null
    SUC_04: string | null
    COD_PRES05: string | null
    PRECIO_05: number | null
    SUC_05: string | null
    COD_PRES06: string | null
    PRECIO_06: number | null
    SUC_06: string | null
    COD_PRES07: string | null
    PRECIO_07: number | null
    SUC_07: string | null
    COD_PRES08: string | null
    PRECIO_08: number | null
    SUC_08: string | null
    COD_PRES09: string | null
    PRECIO_09: number | null
    SUC_09: string | null
    COD_PRES10: string | null
    PRECIO_10: string | null
    SUC_10: string | null
    COD_PRES11: string | null
    PRECIO_11: string | null
    SUC_11: string | null
    COD_PRES12: string | null
    PRECIO_12: string | null
    SUC_12: string | null
    COD_PRES13: string | null
    PRECIO_13: string | null
    SUC_13: string | null
    COD_PRES14: string | null
    PRECIO_14: string | null
    SUC_14: string | null
    COD_PRES15: string | null
    PRECIO_15: string | null
    SUC_15: string | null
    COD_PRES16: string | null
    PRECIO_16: number | null
    SUC_16: string | null
    COD_PRES17: string | null
    PRECIO_17: number | null
    SUC_17: string | null
    COD_PRES18: string | null
    PRECIO_18: number | null
    SUC_18: string | null
    COD_PRES19: string | null
    PRECIO_19: number | null
    SUC_19: string | null
    COD_PRES20: string | null
    PRECIO_20: number | null
    SUC_20: string | null
    idpractica: number
    _count: AUT_PRACCountAggregateOutputType | null
    _avg: AUT_PRACAvgAggregateOutputType | null
    _sum: AUT_PRACSumAggregateOutputType | null
    _min: AUT_PRACMinAggregateOutputType | null
    _max: AUT_PRACMaxAggregateOutputType | null
  }

  type GetAUT_PRACGroupByPayload<T extends AUT_PRACGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AUT_PRACGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AUT_PRACGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AUT_PRACGroupByOutputType[P]>
            : GetScalarType<T[P], AUT_PRACGroupByOutputType[P]>
        }
      >
    >


  export type AUT_PRACSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ESP_PRAC?: boolean
    CODIGOS?: boolean
    DESCRIP?: boolean
    FECHA_ALT?: boolean
    ANULADO?: boolean
    COD_PRES01?: boolean
    PRECIO_01?: boolean
    SUC_01?: boolean
    COD_PRES02?: boolean
    PRECIO_02?: boolean
    SUC_02?: boolean
    COD_PRES03?: boolean
    PRECIO_03?: boolean
    SUC_03?: boolean
    COD_PRES04?: boolean
    PRECIO_04?: boolean
    SUC_04?: boolean
    COD_PRES05?: boolean
    PRECIO_05?: boolean
    SUC_05?: boolean
    COD_PRES06?: boolean
    PRECIO_06?: boolean
    SUC_06?: boolean
    COD_PRES07?: boolean
    PRECIO_07?: boolean
    SUC_07?: boolean
    COD_PRES08?: boolean
    PRECIO_08?: boolean
    SUC_08?: boolean
    COD_PRES09?: boolean
    PRECIO_09?: boolean
    SUC_09?: boolean
    COD_PRES10?: boolean
    PRECIO_10?: boolean
    SUC_10?: boolean
    COD_PRES11?: boolean
    PRECIO_11?: boolean
    SUC_11?: boolean
    COD_PRES12?: boolean
    PRECIO_12?: boolean
    SUC_12?: boolean
    COD_PRES13?: boolean
    PRECIO_13?: boolean
    SUC_13?: boolean
    COD_PRES14?: boolean
    PRECIO_14?: boolean
    SUC_14?: boolean
    COD_PRES15?: boolean
    PRECIO_15?: boolean
    SUC_15?: boolean
    COD_PRES16?: boolean
    PRECIO_16?: boolean
    SUC_16?: boolean
    COD_PRES17?: boolean
    PRECIO_17?: boolean
    SUC_17?: boolean
    COD_PRES18?: boolean
    PRECIO_18?: boolean
    SUC_18?: boolean
    COD_PRES19?: boolean
    PRECIO_19?: boolean
    SUC_19?: boolean
    COD_PRES20?: boolean
    PRECIO_20?: boolean
    SUC_20?: boolean
    idpractica?: boolean
  }, ExtArgs["result"]["aUT_PRAC"]>

  export type AUT_PRACSelectScalar = {
    ESP_PRAC?: boolean
    CODIGOS?: boolean
    DESCRIP?: boolean
    FECHA_ALT?: boolean
    ANULADO?: boolean
    COD_PRES01?: boolean
    PRECIO_01?: boolean
    SUC_01?: boolean
    COD_PRES02?: boolean
    PRECIO_02?: boolean
    SUC_02?: boolean
    COD_PRES03?: boolean
    PRECIO_03?: boolean
    SUC_03?: boolean
    COD_PRES04?: boolean
    PRECIO_04?: boolean
    SUC_04?: boolean
    COD_PRES05?: boolean
    PRECIO_05?: boolean
    SUC_05?: boolean
    COD_PRES06?: boolean
    PRECIO_06?: boolean
    SUC_06?: boolean
    COD_PRES07?: boolean
    PRECIO_07?: boolean
    SUC_07?: boolean
    COD_PRES08?: boolean
    PRECIO_08?: boolean
    SUC_08?: boolean
    COD_PRES09?: boolean
    PRECIO_09?: boolean
    SUC_09?: boolean
    COD_PRES10?: boolean
    PRECIO_10?: boolean
    SUC_10?: boolean
    COD_PRES11?: boolean
    PRECIO_11?: boolean
    SUC_11?: boolean
    COD_PRES12?: boolean
    PRECIO_12?: boolean
    SUC_12?: boolean
    COD_PRES13?: boolean
    PRECIO_13?: boolean
    SUC_13?: boolean
    COD_PRES14?: boolean
    PRECIO_14?: boolean
    SUC_14?: boolean
    COD_PRES15?: boolean
    PRECIO_15?: boolean
    SUC_15?: boolean
    COD_PRES16?: boolean
    PRECIO_16?: boolean
    SUC_16?: boolean
    COD_PRES17?: boolean
    PRECIO_17?: boolean
    SUC_17?: boolean
    COD_PRES18?: boolean
    PRECIO_18?: boolean
    SUC_18?: boolean
    COD_PRES19?: boolean
    PRECIO_19?: boolean
    SUC_19?: boolean
    COD_PRES20?: boolean
    PRECIO_20?: boolean
    SUC_20?: boolean
    idpractica?: boolean
  }


  type AUT_PRACGetPayload<S extends boolean | null | undefined | AUT_PRACArgs> = $Types.GetResult<AUT_PRACPayload, S>

  type AUT_PRACCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AUT_PRACFindManyArgs, 'select' | 'include'> & {
      select?: AUT_PRACCountAggregateInputType | true
    }

  export interface AUT_PRACDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AUT_PRAC'], meta: { name: 'AUT_PRAC' } }
    /**
     * Find zero or one AUT_PRAC that matches the filter.
     * @param {AUT_PRACFindUniqueArgs} args - Arguments to find a AUT_PRAC
     * @example
     * // Get one AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AUT_PRACFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AUT_PRACFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AUT_PRAC'> extends True ? Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AUT_PRAC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AUT_PRACFindUniqueOrThrowArgs} args - Arguments to find a AUT_PRAC
     * @example
     * // Get one AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AUT_PRACFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AUT_PRACFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AUT_PRAC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACFindFirstArgs} args - Arguments to find a AUT_PRAC
     * @example
     * // Get one AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AUT_PRACFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AUT_PRACFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AUT_PRAC'> extends True ? Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AUT_PRAC that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACFindFirstOrThrowArgs} args - Arguments to find a AUT_PRAC
     * @example
     * // Get one AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AUT_PRACFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AUT_PRACFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AUT_PRACS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AUT_PRACS
     * const aUT_PRACS = await prisma.aUT_PRAC.findMany()
     * 
     * // Get first 10 AUT_PRACS
     * const aUT_PRACS = await prisma.aUT_PRAC.findMany({ take: 10 })
     * 
     * // Only select the `ESP_PRAC`
     * const aUT_PRACWithESP_PRACOnly = await prisma.aUT_PRAC.findMany({ select: { ESP_PRAC: true } })
     * 
    **/
    findMany<T extends AUT_PRACFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUT_PRACFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AUT_PRAC.
     * @param {AUT_PRACCreateArgs} args - Arguments to create a AUT_PRAC.
     * @example
     * // Create one AUT_PRAC
     * const AUT_PRAC = await prisma.aUT_PRAC.create({
     *   data: {
     *     // ... data to create a AUT_PRAC
     *   }
     * })
     * 
    **/
    create<T extends AUT_PRACCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AUT_PRACCreateArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AUT_PRACS.
     *     @param {AUT_PRACCreateManyArgs} args - Arguments to create many AUT_PRACS.
     *     @example
     *     // Create many AUT_PRACS
     *     const aUT_PRAC = await prisma.aUT_PRAC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AUT_PRACCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUT_PRACCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AUT_PRAC.
     * @param {AUT_PRACDeleteArgs} args - Arguments to delete one AUT_PRAC.
     * @example
     * // Delete one AUT_PRAC
     * const AUT_PRAC = await prisma.aUT_PRAC.delete({
     *   where: {
     *     // ... filter to delete one AUT_PRAC
     *   }
     * })
     * 
    **/
    delete<T extends AUT_PRACDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AUT_PRACDeleteArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AUT_PRAC.
     * @param {AUT_PRACUpdateArgs} args - Arguments to update one AUT_PRAC.
     * @example
     * // Update one AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AUT_PRACUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AUT_PRACUpdateArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AUT_PRACS.
     * @param {AUT_PRACDeleteManyArgs} args - Arguments to filter AUT_PRACS to delete.
     * @example
     * // Delete a few AUT_PRACS
     * const { count } = await prisma.aUT_PRAC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AUT_PRACDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUT_PRACDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AUT_PRACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AUT_PRACS
     * const aUT_PRAC = await prisma.aUT_PRAC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AUT_PRACUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AUT_PRACUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AUT_PRAC.
     * @param {AUT_PRACUpsertArgs} args - Arguments to update or create a AUT_PRAC.
     * @example
     * // Update or create a AUT_PRAC
     * const aUT_PRAC = await prisma.aUT_PRAC.upsert({
     *   create: {
     *     // ... data to create a AUT_PRAC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AUT_PRAC we want to update
     *   }
     * })
    **/
    upsert<T extends AUT_PRACUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AUT_PRACUpsertArgs<ExtArgs>>
    ): Prisma__AUT_PRACClient<$Types.GetResult<AUT_PRACPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AUT_PRACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACCountArgs} args - Arguments to filter AUT_PRACS to count.
     * @example
     * // Count the number of AUT_PRACS
     * const count = await prisma.aUT_PRAC.count({
     *   where: {
     *     // ... the filter for the AUT_PRACS we want to count
     *   }
     * })
    **/
    count<T extends AUT_PRACCountArgs>(
      args?: Subset<T, AUT_PRACCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AUT_PRACCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AUT_PRAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AUT_PRACAggregateArgs>(args: Subset<T, AUT_PRACAggregateArgs>): Prisma.PrismaPromise<GetAUT_PRACAggregateType<T>>

    /**
     * Group by AUT_PRAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUT_PRACGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AUT_PRACGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AUT_PRACGroupByArgs['orderBy'] }
        : { orderBy?: AUT_PRACGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AUT_PRACGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAUT_PRACGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AUT_PRAC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AUT_PRACClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AUT_PRAC base type for findUnique actions
   */
  export type AUT_PRACFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter, which AUT_PRAC to fetch.
     */
    where: AUT_PRACWhereUniqueInput
  }

  /**
   * AUT_PRAC findUnique
   */
  export interface AUT_PRACFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AUT_PRACFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AUT_PRAC findUniqueOrThrow
   */
  export type AUT_PRACFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter, which AUT_PRAC to fetch.
     */
    where: AUT_PRACWhereUniqueInput
  }


  /**
   * AUT_PRAC base type for findFirst actions
   */
  export type AUT_PRACFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter, which AUT_PRAC to fetch.
     */
    where?: AUT_PRACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUT_PRACS to fetch.
     */
    orderBy?: AUT_PRACOrderByWithRelationInput | AUT_PRACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AUT_PRACS.
     */
    cursor?: AUT_PRACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUT_PRACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUT_PRACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AUT_PRACS.
     */
    distinct?: AUT_PRACScalarFieldEnum | AUT_PRACScalarFieldEnum[]
  }

  /**
   * AUT_PRAC findFirst
   */
  export interface AUT_PRACFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AUT_PRACFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AUT_PRAC findFirstOrThrow
   */
  export type AUT_PRACFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter, which AUT_PRAC to fetch.
     */
    where?: AUT_PRACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUT_PRACS to fetch.
     */
    orderBy?: AUT_PRACOrderByWithRelationInput | AUT_PRACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AUT_PRACS.
     */
    cursor?: AUT_PRACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUT_PRACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUT_PRACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AUT_PRACS.
     */
    distinct?: AUT_PRACScalarFieldEnum | AUT_PRACScalarFieldEnum[]
  }


  /**
   * AUT_PRAC findMany
   */
  export type AUT_PRACFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter, which AUT_PRACS to fetch.
     */
    where?: AUT_PRACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUT_PRACS to fetch.
     */
    orderBy?: AUT_PRACOrderByWithRelationInput | AUT_PRACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AUT_PRACS.
     */
    cursor?: AUT_PRACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUT_PRACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUT_PRACS.
     */
    skip?: number
    distinct?: AUT_PRACScalarFieldEnum | AUT_PRACScalarFieldEnum[]
  }


  /**
   * AUT_PRAC create
   */
  export type AUT_PRACCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * The data needed to create a AUT_PRAC.
     */
    data?: XOR<AUT_PRACCreateInput, AUT_PRACUncheckedCreateInput>
  }


  /**
   * AUT_PRAC createMany
   */
  export type AUT_PRACCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AUT_PRACS.
     */
    data: AUT_PRACCreateManyInput | AUT_PRACCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AUT_PRAC update
   */
  export type AUT_PRACUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * The data needed to update a AUT_PRAC.
     */
    data: XOR<AUT_PRACUpdateInput, AUT_PRACUncheckedUpdateInput>
    /**
     * Choose, which AUT_PRAC to update.
     */
    where: AUT_PRACWhereUniqueInput
  }


  /**
   * AUT_PRAC updateMany
   */
  export type AUT_PRACUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AUT_PRACS.
     */
    data: XOR<AUT_PRACUpdateManyMutationInput, AUT_PRACUncheckedUpdateManyInput>
    /**
     * Filter which AUT_PRACS to update
     */
    where?: AUT_PRACWhereInput
  }


  /**
   * AUT_PRAC upsert
   */
  export type AUT_PRACUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * The filter to search for the AUT_PRAC to update in case it exists.
     */
    where: AUT_PRACWhereUniqueInput
    /**
     * In case the AUT_PRAC found by the `where` argument doesn't exist, create a new AUT_PRAC with this data.
     */
    create: XOR<AUT_PRACCreateInput, AUT_PRACUncheckedCreateInput>
    /**
     * In case the AUT_PRAC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AUT_PRACUpdateInput, AUT_PRACUncheckedUpdateInput>
  }


  /**
   * AUT_PRAC delete
   */
  export type AUT_PRACDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
    /**
     * Filter which AUT_PRAC to delete.
     */
    where: AUT_PRACWhereUniqueInput
  }


  /**
   * AUT_PRAC deleteMany
   */
  export type AUT_PRACDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AUT_PRACS to delete
     */
    where?: AUT_PRACWhereInput
  }


  /**
   * AUT_PRAC without action
   */
  export type AUT_PRACArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUT_PRAC
     */
    select?: AUT_PRACSelect<ExtArgs> | null
  }



  /**
   * Model CAJA
   */


  export type AggregateCAJA = {
    _count: CAJACountAggregateOutputType | null
    _avg: CAJAAvgAggregateOutputType | null
    _sum: CAJASumAggregateOutputType | null
    _min: CAJAMinAggregateOutputType | null
    _max: CAJAMaxAggregateOutputType | null
  }

  export type CAJAAvgAggregateOutputType = {
    CODIGO: number | null
    IMPORTE: number | null
    SERIE: number | null
    NUMERO: number | null
    ASIENTO: number | null
    CANT_AFIL: number | null
    iditem: number | null
  }

  export type CAJASumAggregateOutputType = {
    CODIGO: number | null
    IMPORTE: number | null
    SERIE: number | null
    NUMERO: number | null
    ASIENTO: number | null
    CANT_AFIL: number | null
    iditem: number | null
  }

  export type CAJAMinAggregateOutputType = {
    SUCURSAL: string | null
    PUESTO: string | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    DET_AUX: string | null
    FECHA: Date | null
    FEC_COMP: string | null
    HORA: string | null
    ORIGEN: string | null
    OPERADOR: string | null
    ASIENTO: number | null
    EXENTO: string | null
    CANT_AFIL: number | null
    CAE: string | null
    VTO_CAE: string | null
    iditem: number | null
  }

  export type CAJAMaxAggregateOutputType = {
    SUCURSAL: string | null
    PUESTO: string | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    DET_AUX: string | null
    FECHA: Date | null
    FEC_COMP: string | null
    HORA: string | null
    ORIGEN: string | null
    OPERADOR: string | null
    ASIENTO: number | null
    EXENTO: string | null
    CANT_AFIL: number | null
    CAE: string | null
    VTO_CAE: string | null
    iditem: number | null
  }

  export type CAJACountAggregateOutputType = {
    SUCURSAL: number
    PUESTO: number
    CODIGO: number
    MOVIM: number
    CUENTA: number
    IMPORTE: number
    TIPO: number
    SERIE: number
    NUMERO: number
    CUIT: number
    DETALLE: number
    DET_AUX: number
    FECHA: number
    FEC_COMP: number
    HORA: number
    ORIGEN: number
    OPERADOR: number
    ASIENTO: number
    EXENTO: number
    CANT_AFIL: number
    CAE: number
    VTO_CAE: number
    iditem: number
    _all: number
  }


  export type CAJAAvgAggregateInputType = {
    CODIGO?: true
    IMPORTE?: true
    SERIE?: true
    NUMERO?: true
    ASIENTO?: true
    CANT_AFIL?: true
    iditem?: true
  }

  export type CAJASumAggregateInputType = {
    CODIGO?: true
    IMPORTE?: true
    SERIE?: true
    NUMERO?: true
    ASIENTO?: true
    CANT_AFIL?: true
    iditem?: true
  }

  export type CAJAMinAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    DET_AUX?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    ORIGEN?: true
    OPERADOR?: true
    ASIENTO?: true
    EXENTO?: true
    CANT_AFIL?: true
    CAE?: true
    VTO_CAE?: true
    iditem?: true
  }

  export type CAJAMaxAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    DET_AUX?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    ORIGEN?: true
    OPERADOR?: true
    ASIENTO?: true
    EXENTO?: true
    CANT_AFIL?: true
    CAE?: true
    VTO_CAE?: true
    iditem?: true
  }

  export type CAJACountAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    DET_AUX?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    ORIGEN?: true
    OPERADOR?: true
    ASIENTO?: true
    EXENTO?: true
    CANT_AFIL?: true
    CAE?: true
    VTO_CAE?: true
    iditem?: true
    _all?: true
  }

  export type CAJAAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CAJA to aggregate.
     */
    where?: CAJAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAJAS to fetch.
     */
    orderBy?: CAJAOrderByWithRelationInput | CAJAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CAJAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAJAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAJAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CAJAS
    **/
    _count?: true | CAJACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CAJAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CAJASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CAJAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CAJAMaxAggregateInputType
  }

  export type GetCAJAAggregateType<T extends CAJAAggregateArgs> = {
        [P in keyof T & keyof AggregateCAJA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCAJA[P]>
      : GetScalarType<T[P], AggregateCAJA[P]>
  }




  export type CAJAGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CAJAWhereInput
    orderBy?: CAJAOrderByWithAggregationInput | CAJAOrderByWithAggregationInput[]
    by: CAJAScalarFieldEnum[] | CAJAScalarFieldEnum
    having?: CAJAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CAJACountAggregateInputType | true
    _avg?: CAJAAvgAggregateInputType
    _sum?: CAJASumAggregateInputType
    _min?: CAJAMinAggregateInputType
    _max?: CAJAMaxAggregateInputType
  }


  export type CAJAGroupByOutputType = {
    SUCURSAL: string | null
    PUESTO: string | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    DET_AUX: string | null
    FECHA: Date | null
    FEC_COMP: string | null
    HORA: string | null
    ORIGEN: string | null
    OPERADOR: string | null
    ASIENTO: number | null
    EXENTO: string | null
    CANT_AFIL: number | null
    CAE: string | null
    VTO_CAE: string | null
    iditem: number
    _count: CAJACountAggregateOutputType | null
    _avg: CAJAAvgAggregateOutputType | null
    _sum: CAJASumAggregateOutputType | null
    _min: CAJAMinAggregateOutputType | null
    _max: CAJAMaxAggregateOutputType | null
  }

  type GetCAJAGroupByPayload<T extends CAJAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CAJAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CAJAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CAJAGroupByOutputType[P]>
            : GetScalarType<T[P], CAJAGroupByOutputType[P]>
        }
      >
    >


  export type CAJASelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    PUESTO?: boolean
    CODIGO?: boolean
    MOVIM?: boolean
    CUENTA?: boolean
    IMPORTE?: boolean
    TIPO?: boolean
    SERIE?: boolean
    NUMERO?: boolean
    CUIT?: boolean
    DETALLE?: boolean
    DET_AUX?: boolean
    FECHA?: boolean
    FEC_COMP?: boolean
    HORA?: boolean
    ORIGEN?: boolean
    OPERADOR?: boolean
    ASIENTO?: boolean
    EXENTO?: boolean
    CANT_AFIL?: boolean
    CAE?: boolean
    VTO_CAE?: boolean
    iditem?: boolean
  }, ExtArgs["result"]["cAJA"]>

  export type CAJASelectScalar = {
    SUCURSAL?: boolean
    PUESTO?: boolean
    CODIGO?: boolean
    MOVIM?: boolean
    CUENTA?: boolean
    IMPORTE?: boolean
    TIPO?: boolean
    SERIE?: boolean
    NUMERO?: boolean
    CUIT?: boolean
    DETALLE?: boolean
    DET_AUX?: boolean
    FECHA?: boolean
    FEC_COMP?: boolean
    HORA?: boolean
    ORIGEN?: boolean
    OPERADOR?: boolean
    ASIENTO?: boolean
    EXENTO?: boolean
    CANT_AFIL?: boolean
    CAE?: boolean
    VTO_CAE?: boolean
    iditem?: boolean
  }


  type CAJAGetPayload<S extends boolean | null | undefined | CAJAArgs> = $Types.GetResult<CAJAPayload, S>

  type CAJACountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CAJAFindManyArgs, 'select' | 'include'> & {
      select?: CAJACountAggregateInputType | true
    }

  export interface CAJADelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CAJA'], meta: { name: 'CAJA' } }
    /**
     * Find zero or one CAJA that matches the filter.
     * @param {CAJAFindUniqueArgs} args - Arguments to find a CAJA
     * @example
     * // Get one CAJA
     * const cAJA = await prisma.cAJA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CAJAFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CAJAFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CAJA'> extends True ? Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one CAJA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CAJAFindUniqueOrThrowArgs} args - Arguments to find a CAJA
     * @example
     * // Get one CAJA
     * const cAJA = await prisma.cAJA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CAJAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CAJAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first CAJA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAFindFirstArgs} args - Arguments to find a CAJA
     * @example
     * // Get one CAJA
     * const cAJA = await prisma.cAJA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CAJAFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CAJAFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CAJA'> extends True ? Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first CAJA that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAFindFirstOrThrowArgs} args - Arguments to find a CAJA
     * @example
     * // Get one CAJA
     * const cAJA = await prisma.cAJA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CAJAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CAJAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more CAJAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CAJAS
     * const cAJAS = await prisma.cAJA.findMany()
     * 
     * // Get first 10 CAJAS
     * const cAJAS = await prisma.cAJA.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const cAJAWithSUCURSALOnly = await prisma.cAJA.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends CAJAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CAJAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a CAJA.
     * @param {CAJACreateArgs} args - Arguments to create a CAJA.
     * @example
     * // Create one CAJA
     * const CAJA = await prisma.cAJA.create({
     *   data: {
     *     // ... data to create a CAJA
     *   }
     * })
     * 
    **/
    create<T extends CAJACreateArgs<ExtArgs>>(
      args: SelectSubset<T, CAJACreateArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many CAJAS.
     *     @param {CAJACreateManyArgs} args - Arguments to create many CAJAS.
     *     @example
     *     // Create many CAJAS
     *     const cAJA = await prisma.cAJA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CAJACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CAJACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CAJA.
     * @param {CAJADeleteArgs} args - Arguments to delete one CAJA.
     * @example
     * // Delete one CAJA
     * const CAJA = await prisma.cAJA.delete({
     *   where: {
     *     // ... filter to delete one CAJA
     *   }
     * })
     * 
    **/
    delete<T extends CAJADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CAJADeleteArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one CAJA.
     * @param {CAJAUpdateArgs} args - Arguments to update one CAJA.
     * @example
     * // Update one CAJA
     * const cAJA = await prisma.cAJA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CAJAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CAJAUpdateArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more CAJAS.
     * @param {CAJADeleteManyArgs} args - Arguments to filter CAJAS to delete.
     * @example
     * // Delete a few CAJAS
     * const { count } = await prisma.cAJA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CAJADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CAJADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CAJAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CAJAS
     * const cAJA = await prisma.cAJA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CAJAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CAJAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CAJA.
     * @param {CAJAUpsertArgs} args - Arguments to update or create a CAJA.
     * @example
     * // Update or create a CAJA
     * const cAJA = await prisma.cAJA.upsert({
     *   create: {
     *     // ... data to create a CAJA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CAJA we want to update
     *   }
     * })
    **/
    upsert<T extends CAJAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CAJAUpsertArgs<ExtArgs>>
    ): Prisma__CAJAClient<$Types.GetResult<CAJAPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of CAJAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJACountArgs} args - Arguments to filter CAJAS to count.
     * @example
     * // Count the number of CAJAS
     * const count = await prisma.cAJA.count({
     *   where: {
     *     // ... the filter for the CAJAS we want to count
     *   }
     * })
    **/
    count<T extends CAJACountArgs>(
      args?: Subset<T, CAJACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CAJACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CAJA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CAJAAggregateArgs>(args: Subset<T, CAJAAggregateArgs>): Prisma.PrismaPromise<GetCAJAAggregateType<T>>

    /**
     * Group by CAJA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAJAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CAJAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CAJAGroupByArgs['orderBy'] }
        : { orderBy?: CAJAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CAJAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCAJAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CAJA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CAJAClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CAJA base type for findUnique actions
   */
  export type CAJAFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter, which CAJA to fetch.
     */
    where: CAJAWhereUniqueInput
  }

  /**
   * CAJA findUnique
   */
  export interface CAJAFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CAJAFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CAJA findUniqueOrThrow
   */
  export type CAJAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter, which CAJA to fetch.
     */
    where: CAJAWhereUniqueInput
  }


  /**
   * CAJA base type for findFirst actions
   */
  export type CAJAFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter, which CAJA to fetch.
     */
    where?: CAJAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAJAS to fetch.
     */
    orderBy?: CAJAOrderByWithRelationInput | CAJAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CAJAS.
     */
    cursor?: CAJAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAJAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAJAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CAJAS.
     */
    distinct?: CAJAScalarFieldEnum | CAJAScalarFieldEnum[]
  }

  /**
   * CAJA findFirst
   */
  export interface CAJAFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CAJAFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CAJA findFirstOrThrow
   */
  export type CAJAFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter, which CAJA to fetch.
     */
    where?: CAJAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAJAS to fetch.
     */
    orderBy?: CAJAOrderByWithRelationInput | CAJAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CAJAS.
     */
    cursor?: CAJAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAJAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAJAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CAJAS.
     */
    distinct?: CAJAScalarFieldEnum | CAJAScalarFieldEnum[]
  }


  /**
   * CAJA findMany
   */
  export type CAJAFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter, which CAJAS to fetch.
     */
    where?: CAJAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAJAS to fetch.
     */
    orderBy?: CAJAOrderByWithRelationInput | CAJAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CAJAS.
     */
    cursor?: CAJAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAJAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAJAS.
     */
    skip?: number
    distinct?: CAJAScalarFieldEnum | CAJAScalarFieldEnum[]
  }


  /**
   * CAJA create
   */
  export type CAJACreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * The data needed to create a CAJA.
     */
    data?: XOR<CAJACreateInput, CAJAUncheckedCreateInput>
  }


  /**
   * CAJA createMany
   */
  export type CAJACreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CAJAS.
     */
    data: CAJACreateManyInput | CAJACreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CAJA update
   */
  export type CAJAUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * The data needed to update a CAJA.
     */
    data: XOR<CAJAUpdateInput, CAJAUncheckedUpdateInput>
    /**
     * Choose, which CAJA to update.
     */
    where: CAJAWhereUniqueInput
  }


  /**
   * CAJA updateMany
   */
  export type CAJAUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CAJAS.
     */
    data: XOR<CAJAUpdateManyMutationInput, CAJAUncheckedUpdateManyInput>
    /**
     * Filter which CAJAS to update
     */
    where?: CAJAWhereInput
  }


  /**
   * CAJA upsert
   */
  export type CAJAUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * The filter to search for the CAJA to update in case it exists.
     */
    where: CAJAWhereUniqueInput
    /**
     * In case the CAJA found by the `where` argument doesn't exist, create a new CAJA with this data.
     */
    create: XOR<CAJACreateInput, CAJAUncheckedCreateInput>
    /**
     * In case the CAJA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CAJAUpdateInput, CAJAUncheckedUpdateInput>
  }


  /**
   * CAJA delete
   */
  export type CAJADeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
    /**
     * Filter which CAJA to delete.
     */
    where: CAJAWhereUniqueInput
  }


  /**
   * CAJA deleteMany
   */
  export type CAJADeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CAJAS to delete
     */
    where?: CAJAWhereInput
  }


  /**
   * CAJA without action
   */
  export type CAJAArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAJA
     */
    select?: CAJASelect<ExtArgs> | null
  }



  /**
   * Model CONSULTA
   */


  export type AggregateCONSULTA = {
    _count: CONSULTACountAggregateOutputType | null
    _avg: CONSULTAAvgAggregateOutputType | null
    _sum: CONSULTASumAggregateOutputType | null
    _min: CONSULTAMinAggregateOutputType | null
    _max: CONSULTAMaxAggregateOutputType | null
  }

  export type CONSULTAAvgAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number | null
  }

  export type CONSULTASumAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number | null
  }

  export type CONSULTAMinAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    COD_PRES: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    DIAGNOSTIC: string | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number | null
    SUC: string | null
  }

  export type CONSULTAMaxAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    COD_PRES: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    DIAGNOSTIC: string | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number | null
    SUC: string | null
  }

  export type CONSULTACountAggregateOutputType = {
    CONTRATO: number
    FECHA: number
    HORA: number
    NRO_ORDEN: number
    DESTINO: number
    COD_PRES: number
    IMPORTE: number
    ANULADO: number
    OPERADOR: number
    OPE_ANU: number
    DIAGNOSTIC: number
    ATENCION: number
    NRO_DNI: number
    idconsulta: number
    SUC: number
    _all: number
  }


  export type CONSULTAAvgAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    ATENCION?: true
    NRO_DNI?: true
    idconsulta?: true
  }

  export type CONSULTASumAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    ATENCION?: true
    NRO_DNI?: true
    idconsulta?: true
  }

  export type CONSULTAMinAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    COD_PRES?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    DIAGNOSTIC?: true
    ATENCION?: true
    NRO_DNI?: true
    idconsulta?: true
    SUC?: true
  }

  export type CONSULTAMaxAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    COD_PRES?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    DIAGNOSTIC?: true
    ATENCION?: true
    NRO_DNI?: true
    idconsulta?: true
    SUC?: true
  }

  export type CONSULTACountAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    COD_PRES?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    DIAGNOSTIC?: true
    ATENCION?: true
    NRO_DNI?: true
    idconsulta?: true
    SUC?: true
    _all?: true
  }

  export type CONSULTAAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONSULTA to aggregate.
     */
    where?: CONSULTAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONSULTAS to fetch.
     */
    orderBy?: CONSULTAOrderByWithRelationInput | CONSULTAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CONSULTAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONSULTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONSULTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CONSULTAS
    **/
    _count?: true | CONSULTACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CONSULTAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CONSULTASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CONSULTAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CONSULTAMaxAggregateInputType
  }

  export type GetCONSULTAAggregateType<T extends CONSULTAAggregateArgs> = {
        [P in keyof T & keyof AggregateCONSULTA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCONSULTA[P]>
      : GetScalarType<T[P], AggregateCONSULTA[P]>
  }




  export type CONSULTAGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CONSULTAWhereInput
    orderBy?: CONSULTAOrderByWithAggregationInput | CONSULTAOrderByWithAggregationInput[]
    by: CONSULTAScalarFieldEnum[] | CONSULTAScalarFieldEnum
    having?: CONSULTAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CONSULTACountAggregateInputType | true
    _avg?: CONSULTAAvgAggregateInputType
    _sum?: CONSULTASumAggregateInputType
    _min?: CONSULTAMinAggregateInputType
    _max?: CONSULTAMaxAggregateInputType
  }


  export type CONSULTAGroupByOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    COD_PRES: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    DIAGNOSTIC: string | null
    ATENCION: number | null
    NRO_DNI: number | null
    idconsulta: number
    SUC: string | null
    _count: CONSULTACountAggregateOutputType | null
    _avg: CONSULTAAvgAggregateOutputType | null
    _sum: CONSULTASumAggregateOutputType | null
    _min: CONSULTAMinAggregateOutputType | null
    _max: CONSULTAMaxAggregateOutputType | null
  }

  type GetCONSULTAGroupByPayload<T extends CONSULTAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CONSULTAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CONSULTAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CONSULTAGroupByOutputType[P]>
            : GetScalarType<T[P], CONSULTAGroupByOutputType[P]>
        }
      >
    >


  export type CONSULTASelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    COD_PRES?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    DIAGNOSTIC?: boolean
    ATENCION?: boolean
    NRO_DNI?: boolean
    idconsulta?: boolean
    SUC?: boolean
  }, ExtArgs["result"]["cONSULTA"]>

  export type CONSULTASelectScalar = {
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    COD_PRES?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    DIAGNOSTIC?: boolean
    ATENCION?: boolean
    NRO_DNI?: boolean
    idconsulta?: boolean
    SUC?: boolean
  }


  type CONSULTAGetPayload<S extends boolean | null | undefined | CONSULTAArgs> = $Types.GetResult<CONSULTAPayload, S>

  type CONSULTACountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CONSULTAFindManyArgs, 'select' | 'include'> & {
      select?: CONSULTACountAggregateInputType | true
    }

  export interface CONSULTADelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CONSULTA'], meta: { name: 'CONSULTA' } }
    /**
     * Find zero or one CONSULTA that matches the filter.
     * @param {CONSULTAFindUniqueArgs} args - Arguments to find a CONSULTA
     * @example
     * // Get one CONSULTA
     * const cONSULTA = await prisma.cONSULTA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CONSULTAFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CONSULTAFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CONSULTA'> extends True ? Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one CONSULTA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CONSULTAFindUniqueOrThrowArgs} args - Arguments to find a CONSULTA
     * @example
     * // Get one CONSULTA
     * const cONSULTA = await prisma.cONSULTA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CONSULTAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CONSULTAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first CONSULTA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAFindFirstArgs} args - Arguments to find a CONSULTA
     * @example
     * // Get one CONSULTA
     * const cONSULTA = await prisma.cONSULTA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CONSULTAFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CONSULTAFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CONSULTA'> extends True ? Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first CONSULTA that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAFindFirstOrThrowArgs} args - Arguments to find a CONSULTA
     * @example
     * // Get one CONSULTA
     * const cONSULTA = await prisma.cONSULTA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CONSULTAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CONSULTAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more CONSULTAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CONSULTAS
     * const cONSULTAS = await prisma.cONSULTA.findMany()
     * 
     * // Get first 10 CONSULTAS
     * const cONSULTAS = await prisma.cONSULTA.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const cONSULTAWithCONTRATOOnly = await prisma.cONSULTA.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends CONSULTAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CONSULTAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a CONSULTA.
     * @param {CONSULTACreateArgs} args - Arguments to create a CONSULTA.
     * @example
     * // Create one CONSULTA
     * const CONSULTA = await prisma.cONSULTA.create({
     *   data: {
     *     // ... data to create a CONSULTA
     *   }
     * })
     * 
    **/
    create<T extends CONSULTACreateArgs<ExtArgs>>(
      args: SelectSubset<T, CONSULTACreateArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many CONSULTAS.
     *     @param {CONSULTACreateManyArgs} args - Arguments to create many CONSULTAS.
     *     @example
     *     // Create many CONSULTAS
     *     const cONSULTA = await prisma.cONSULTA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CONSULTACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CONSULTACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CONSULTA.
     * @param {CONSULTADeleteArgs} args - Arguments to delete one CONSULTA.
     * @example
     * // Delete one CONSULTA
     * const CONSULTA = await prisma.cONSULTA.delete({
     *   where: {
     *     // ... filter to delete one CONSULTA
     *   }
     * })
     * 
    **/
    delete<T extends CONSULTADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CONSULTADeleteArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one CONSULTA.
     * @param {CONSULTAUpdateArgs} args - Arguments to update one CONSULTA.
     * @example
     * // Update one CONSULTA
     * const cONSULTA = await prisma.cONSULTA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CONSULTAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CONSULTAUpdateArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more CONSULTAS.
     * @param {CONSULTADeleteManyArgs} args - Arguments to filter CONSULTAS to delete.
     * @example
     * // Delete a few CONSULTAS
     * const { count } = await prisma.cONSULTA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CONSULTADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CONSULTADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONSULTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CONSULTAS
     * const cONSULTA = await prisma.cONSULTA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CONSULTAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CONSULTAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CONSULTA.
     * @param {CONSULTAUpsertArgs} args - Arguments to update or create a CONSULTA.
     * @example
     * // Update or create a CONSULTA
     * const cONSULTA = await prisma.cONSULTA.upsert({
     *   create: {
     *     // ... data to create a CONSULTA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CONSULTA we want to update
     *   }
     * })
    **/
    upsert<T extends CONSULTAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CONSULTAUpsertArgs<ExtArgs>>
    ): Prisma__CONSULTAClient<$Types.GetResult<CONSULTAPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of CONSULTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTACountArgs} args - Arguments to filter CONSULTAS to count.
     * @example
     * // Count the number of CONSULTAS
     * const count = await prisma.cONSULTA.count({
     *   where: {
     *     // ... the filter for the CONSULTAS we want to count
     *   }
     * })
    **/
    count<T extends CONSULTACountArgs>(
      args?: Subset<T, CONSULTACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CONSULTACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CONSULTA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CONSULTAAggregateArgs>(args: Subset<T, CONSULTAAggregateArgs>): Prisma.PrismaPromise<GetCONSULTAAggregateType<T>>

    /**
     * Group by CONSULTA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONSULTAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CONSULTAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CONSULTAGroupByArgs['orderBy'] }
        : { orderBy?: CONSULTAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CONSULTAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCONSULTAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CONSULTA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CONSULTAClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CONSULTA base type for findUnique actions
   */
  export type CONSULTAFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter, which CONSULTA to fetch.
     */
    where: CONSULTAWhereUniqueInput
  }

  /**
   * CONSULTA findUnique
   */
  export interface CONSULTAFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CONSULTAFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CONSULTA findUniqueOrThrow
   */
  export type CONSULTAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter, which CONSULTA to fetch.
     */
    where: CONSULTAWhereUniqueInput
  }


  /**
   * CONSULTA base type for findFirst actions
   */
  export type CONSULTAFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter, which CONSULTA to fetch.
     */
    where?: CONSULTAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONSULTAS to fetch.
     */
    orderBy?: CONSULTAOrderByWithRelationInput | CONSULTAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONSULTAS.
     */
    cursor?: CONSULTAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONSULTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONSULTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONSULTAS.
     */
    distinct?: CONSULTAScalarFieldEnum | CONSULTAScalarFieldEnum[]
  }

  /**
   * CONSULTA findFirst
   */
  export interface CONSULTAFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CONSULTAFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CONSULTA findFirstOrThrow
   */
  export type CONSULTAFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter, which CONSULTA to fetch.
     */
    where?: CONSULTAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONSULTAS to fetch.
     */
    orderBy?: CONSULTAOrderByWithRelationInput | CONSULTAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONSULTAS.
     */
    cursor?: CONSULTAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONSULTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONSULTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONSULTAS.
     */
    distinct?: CONSULTAScalarFieldEnum | CONSULTAScalarFieldEnum[]
  }


  /**
   * CONSULTA findMany
   */
  export type CONSULTAFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter, which CONSULTAS to fetch.
     */
    where?: CONSULTAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONSULTAS to fetch.
     */
    orderBy?: CONSULTAOrderByWithRelationInput | CONSULTAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CONSULTAS.
     */
    cursor?: CONSULTAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONSULTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONSULTAS.
     */
    skip?: number
    distinct?: CONSULTAScalarFieldEnum | CONSULTAScalarFieldEnum[]
  }


  /**
   * CONSULTA create
   */
  export type CONSULTACreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * The data needed to create a CONSULTA.
     */
    data?: XOR<CONSULTACreateInput, CONSULTAUncheckedCreateInput>
  }


  /**
   * CONSULTA createMany
   */
  export type CONSULTACreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CONSULTAS.
     */
    data: CONSULTACreateManyInput | CONSULTACreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CONSULTA update
   */
  export type CONSULTAUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * The data needed to update a CONSULTA.
     */
    data: XOR<CONSULTAUpdateInput, CONSULTAUncheckedUpdateInput>
    /**
     * Choose, which CONSULTA to update.
     */
    where: CONSULTAWhereUniqueInput
  }


  /**
   * CONSULTA updateMany
   */
  export type CONSULTAUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CONSULTAS.
     */
    data: XOR<CONSULTAUpdateManyMutationInput, CONSULTAUncheckedUpdateManyInput>
    /**
     * Filter which CONSULTAS to update
     */
    where?: CONSULTAWhereInput
  }


  /**
   * CONSULTA upsert
   */
  export type CONSULTAUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * The filter to search for the CONSULTA to update in case it exists.
     */
    where: CONSULTAWhereUniqueInput
    /**
     * In case the CONSULTA found by the `where` argument doesn't exist, create a new CONSULTA with this data.
     */
    create: XOR<CONSULTACreateInput, CONSULTAUncheckedCreateInput>
    /**
     * In case the CONSULTA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CONSULTAUpdateInput, CONSULTAUncheckedUpdateInput>
  }


  /**
   * CONSULTA delete
   */
  export type CONSULTADeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
    /**
     * Filter which CONSULTA to delete.
     */
    where: CONSULTAWhereUniqueInput
  }


  /**
   * CONSULTA deleteMany
   */
  export type CONSULTADeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONSULTAS to delete
     */
    where?: CONSULTAWhereInput
  }


  /**
   * CONSULTA without action
   */
  export type CONSULTAArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONSULTA
     */
    select?: CONSULTASelect<ExtArgs> | null
  }



  /**
   * Model ENFERMER
   */


  export type AggregateENFERMER = {
    _count: ENFERMERCountAggregateOutputType | null
    _avg: ENFERMERAvgAggregateOutputType | null
    _sum: ENFERMERSumAggregateOutputType | null
    _min: ENFERMERMinAggregateOutputType | null
    _max: ENFERMERMaxAggregateOutputType | null
  }

  export type ENFERMERAvgAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number | null
    CANTIDAD: number | null
  }

  export type ENFERMERSumAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number | null
    CANTIDAD: number | null
  }

  export type ENFERMERMinAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number | null
    CANTIDAD: number | null
    SUC: string | null
  }

  export type ENFERMERMaxAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number | null
    CANTIDAD: number | null
    SUC: string | null
  }

  export type ENFERMERCountAggregateOutputType = {
    CONTRATO: number
    FECHA: number
    HORA: number
    NRO_ORDEN: number
    DESTINO: number
    IMPORTE: number
    ANULADO: number
    PRACTICA: number
    OPERADOR: number
    OPE_ANU: number
    NRO_DNI: number
    idenfermer: number
    CANTIDAD: number
    SUC: number
    _all: number
  }


  export type ENFERMERAvgAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    ANULADO?: true
    PRACTICA?: true
    OPE_ANU?: true
    NRO_DNI?: true
    idenfermer?: true
    CANTIDAD?: true
  }

  export type ENFERMERSumAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    ANULADO?: true
    PRACTICA?: true
    OPE_ANU?: true
    NRO_DNI?: true
    idenfermer?: true
    CANTIDAD?: true
  }

  export type ENFERMERMinAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    IMPORTE?: true
    ANULADO?: true
    PRACTICA?: true
    OPERADOR?: true
    OPE_ANU?: true
    NRO_DNI?: true
    idenfermer?: true
    CANTIDAD?: true
    SUC?: true
  }

  export type ENFERMERMaxAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    IMPORTE?: true
    ANULADO?: true
    PRACTICA?: true
    OPERADOR?: true
    OPE_ANU?: true
    NRO_DNI?: true
    idenfermer?: true
    CANTIDAD?: true
    SUC?: true
  }

  export type ENFERMERCountAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    DESTINO?: true
    IMPORTE?: true
    ANULADO?: true
    PRACTICA?: true
    OPERADOR?: true
    OPE_ANU?: true
    NRO_DNI?: true
    idenfermer?: true
    CANTIDAD?: true
    SUC?: true
    _all?: true
  }

  export type ENFERMERAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENFERMER to aggregate.
     */
    where?: ENFERMERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENFERMERS to fetch.
     */
    orderBy?: ENFERMEROrderByWithRelationInput | ENFERMEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ENFERMERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENFERMERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENFERMERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ENFERMERS
    **/
    _count?: true | ENFERMERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ENFERMERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ENFERMERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ENFERMERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ENFERMERMaxAggregateInputType
  }

  export type GetENFERMERAggregateType<T extends ENFERMERAggregateArgs> = {
        [P in keyof T & keyof AggregateENFERMER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateENFERMER[P]>
      : GetScalarType<T[P], AggregateENFERMER[P]>
  }




  export type ENFERMERGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ENFERMERWhereInput
    orderBy?: ENFERMEROrderByWithAggregationInput | ENFERMEROrderByWithAggregationInput[]
    by: ENFERMERScalarFieldEnum[] | ENFERMERScalarFieldEnum
    having?: ENFERMERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ENFERMERCountAggregateInputType | true
    _avg?: ENFERMERAvgAggregateInputType
    _sum?: ENFERMERSumAggregateInputType
    _min?: ENFERMERMinAggregateInputType
    _max?: ENFERMERMaxAggregateInputType
  }


  export type ENFERMERGroupByOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    PRACTICA: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    NRO_DNI: number | null
    idenfermer: number
    CANTIDAD: number | null
    SUC: string | null
    _count: ENFERMERCountAggregateOutputType | null
    _avg: ENFERMERAvgAggregateOutputType | null
    _sum: ENFERMERSumAggregateOutputType | null
    _min: ENFERMERMinAggregateOutputType | null
    _max: ENFERMERMaxAggregateOutputType | null
  }

  type GetENFERMERGroupByPayload<T extends ENFERMERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ENFERMERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ENFERMERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ENFERMERGroupByOutputType[P]>
            : GetScalarType<T[P], ENFERMERGroupByOutputType[P]>
        }
      >
    >


  export type ENFERMERSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    PRACTICA?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    NRO_DNI?: boolean
    idenfermer?: boolean
    CANTIDAD?: boolean
    SUC?: boolean
  }, ExtArgs["result"]["eNFERMER"]>

  export type ENFERMERSelectScalar = {
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    PRACTICA?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    NRO_DNI?: boolean
    idenfermer?: boolean
    CANTIDAD?: boolean
    SUC?: boolean
  }


  type ENFERMERGetPayload<S extends boolean | null | undefined | ENFERMERArgs> = $Types.GetResult<ENFERMERPayload, S>

  type ENFERMERCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ENFERMERFindManyArgs, 'select' | 'include'> & {
      select?: ENFERMERCountAggregateInputType | true
    }

  export interface ENFERMERDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ENFERMER'], meta: { name: 'ENFERMER' } }
    /**
     * Find zero or one ENFERMER that matches the filter.
     * @param {ENFERMERFindUniqueArgs} args - Arguments to find a ENFERMER
     * @example
     * // Get one ENFERMER
     * const eNFERMER = await prisma.eNFERMER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ENFERMERFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ENFERMERFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ENFERMER'> extends True ? Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ENFERMER that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ENFERMERFindUniqueOrThrowArgs} args - Arguments to find a ENFERMER
     * @example
     * // Get one ENFERMER
     * const eNFERMER = await prisma.eNFERMER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ENFERMERFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ENFERMERFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ENFERMER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERFindFirstArgs} args - Arguments to find a ENFERMER
     * @example
     * // Get one ENFERMER
     * const eNFERMER = await prisma.eNFERMER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ENFERMERFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ENFERMERFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ENFERMER'> extends True ? Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ENFERMER that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERFindFirstOrThrowArgs} args - Arguments to find a ENFERMER
     * @example
     * // Get one ENFERMER
     * const eNFERMER = await prisma.eNFERMER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ENFERMERFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ENFERMERFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ENFERMERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ENFERMERS
     * const eNFERMERS = await prisma.eNFERMER.findMany()
     * 
     * // Get first 10 ENFERMERS
     * const eNFERMERS = await prisma.eNFERMER.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const eNFERMERWithCONTRATOOnly = await prisma.eNFERMER.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends ENFERMERFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ENFERMERFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ENFERMER.
     * @param {ENFERMERCreateArgs} args - Arguments to create a ENFERMER.
     * @example
     * // Create one ENFERMER
     * const ENFERMER = await prisma.eNFERMER.create({
     *   data: {
     *     // ... data to create a ENFERMER
     *   }
     * })
     * 
    **/
    create<T extends ENFERMERCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ENFERMERCreateArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ENFERMERS.
     *     @param {ENFERMERCreateManyArgs} args - Arguments to create many ENFERMERS.
     *     @example
     *     // Create many ENFERMERS
     *     const eNFERMER = await prisma.eNFERMER.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ENFERMERCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ENFERMERCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ENFERMER.
     * @param {ENFERMERDeleteArgs} args - Arguments to delete one ENFERMER.
     * @example
     * // Delete one ENFERMER
     * const ENFERMER = await prisma.eNFERMER.delete({
     *   where: {
     *     // ... filter to delete one ENFERMER
     *   }
     * })
     * 
    **/
    delete<T extends ENFERMERDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ENFERMERDeleteArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ENFERMER.
     * @param {ENFERMERUpdateArgs} args - Arguments to update one ENFERMER.
     * @example
     * // Update one ENFERMER
     * const eNFERMER = await prisma.eNFERMER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ENFERMERUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ENFERMERUpdateArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ENFERMERS.
     * @param {ENFERMERDeleteManyArgs} args - Arguments to filter ENFERMERS to delete.
     * @example
     * // Delete a few ENFERMERS
     * const { count } = await prisma.eNFERMER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ENFERMERDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ENFERMERDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ENFERMERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ENFERMERS
     * const eNFERMER = await prisma.eNFERMER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ENFERMERUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ENFERMERUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ENFERMER.
     * @param {ENFERMERUpsertArgs} args - Arguments to update or create a ENFERMER.
     * @example
     * // Update or create a ENFERMER
     * const eNFERMER = await prisma.eNFERMER.upsert({
     *   create: {
     *     // ... data to create a ENFERMER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ENFERMER we want to update
     *   }
     * })
    **/
    upsert<T extends ENFERMERUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ENFERMERUpsertArgs<ExtArgs>>
    ): Prisma__ENFERMERClient<$Types.GetResult<ENFERMERPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ENFERMERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERCountArgs} args - Arguments to filter ENFERMERS to count.
     * @example
     * // Count the number of ENFERMERS
     * const count = await prisma.eNFERMER.count({
     *   where: {
     *     // ... the filter for the ENFERMERS we want to count
     *   }
     * })
    **/
    count<T extends ENFERMERCountArgs>(
      args?: Subset<T, ENFERMERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ENFERMERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ENFERMER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ENFERMERAggregateArgs>(args: Subset<T, ENFERMERAggregateArgs>): Prisma.PrismaPromise<GetENFERMERAggregateType<T>>

    /**
     * Group by ENFERMER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENFERMERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ENFERMERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ENFERMERGroupByArgs['orderBy'] }
        : { orderBy?: ENFERMERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ENFERMERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetENFERMERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ENFERMER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ENFERMERClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ENFERMER base type for findUnique actions
   */
  export type ENFERMERFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter, which ENFERMER to fetch.
     */
    where: ENFERMERWhereUniqueInput
  }

  /**
   * ENFERMER findUnique
   */
  export interface ENFERMERFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ENFERMERFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ENFERMER findUniqueOrThrow
   */
  export type ENFERMERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter, which ENFERMER to fetch.
     */
    where: ENFERMERWhereUniqueInput
  }


  /**
   * ENFERMER base type for findFirst actions
   */
  export type ENFERMERFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter, which ENFERMER to fetch.
     */
    where?: ENFERMERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENFERMERS to fetch.
     */
    orderBy?: ENFERMEROrderByWithRelationInput | ENFERMEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENFERMERS.
     */
    cursor?: ENFERMERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENFERMERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENFERMERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENFERMERS.
     */
    distinct?: ENFERMERScalarFieldEnum | ENFERMERScalarFieldEnum[]
  }

  /**
   * ENFERMER findFirst
   */
  export interface ENFERMERFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ENFERMERFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ENFERMER findFirstOrThrow
   */
  export type ENFERMERFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter, which ENFERMER to fetch.
     */
    where?: ENFERMERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENFERMERS to fetch.
     */
    orderBy?: ENFERMEROrderByWithRelationInput | ENFERMEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENFERMERS.
     */
    cursor?: ENFERMERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENFERMERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENFERMERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENFERMERS.
     */
    distinct?: ENFERMERScalarFieldEnum | ENFERMERScalarFieldEnum[]
  }


  /**
   * ENFERMER findMany
   */
  export type ENFERMERFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter, which ENFERMERS to fetch.
     */
    where?: ENFERMERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENFERMERS to fetch.
     */
    orderBy?: ENFERMEROrderByWithRelationInput | ENFERMEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ENFERMERS.
     */
    cursor?: ENFERMERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENFERMERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENFERMERS.
     */
    skip?: number
    distinct?: ENFERMERScalarFieldEnum | ENFERMERScalarFieldEnum[]
  }


  /**
   * ENFERMER create
   */
  export type ENFERMERCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * The data needed to create a ENFERMER.
     */
    data?: XOR<ENFERMERCreateInput, ENFERMERUncheckedCreateInput>
  }


  /**
   * ENFERMER createMany
   */
  export type ENFERMERCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ENFERMERS.
     */
    data: ENFERMERCreateManyInput | ENFERMERCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ENFERMER update
   */
  export type ENFERMERUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * The data needed to update a ENFERMER.
     */
    data: XOR<ENFERMERUpdateInput, ENFERMERUncheckedUpdateInput>
    /**
     * Choose, which ENFERMER to update.
     */
    where: ENFERMERWhereUniqueInput
  }


  /**
   * ENFERMER updateMany
   */
  export type ENFERMERUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ENFERMERS.
     */
    data: XOR<ENFERMERUpdateManyMutationInput, ENFERMERUncheckedUpdateManyInput>
    /**
     * Filter which ENFERMERS to update
     */
    where?: ENFERMERWhereInput
  }


  /**
   * ENFERMER upsert
   */
  export type ENFERMERUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * The filter to search for the ENFERMER to update in case it exists.
     */
    where: ENFERMERWhereUniqueInput
    /**
     * In case the ENFERMER found by the `where` argument doesn't exist, create a new ENFERMER with this data.
     */
    create: XOR<ENFERMERCreateInput, ENFERMERUncheckedCreateInput>
    /**
     * In case the ENFERMER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ENFERMERUpdateInput, ENFERMERUncheckedUpdateInput>
  }


  /**
   * ENFERMER delete
   */
  export type ENFERMERDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
    /**
     * Filter which ENFERMER to delete.
     */
    where: ENFERMERWhereUniqueInput
  }


  /**
   * ENFERMER deleteMany
   */
  export type ENFERMERDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENFERMERS to delete
     */
    where?: ENFERMERWhereInput
  }


  /**
   * ENFERMER without action
   */
  export type ENFERMERArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENFERMER
     */
    select?: ENFERMERSelect<ExtArgs> | null
  }



  /**
   * Model FARMACIA
   */


  export type AggregateFARMACIA = {
    _count: FARMACIACountAggregateOutputType | null
    _avg: FARMACIAAvgAggregateOutputType | null
    _sum: FARMACIASumAggregateOutputType | null
    _min: FARMACIAMinAggregateOutputType | null
    _max: FARMACIAMaxAggregateOutputType | null
  }

  export type FARMACIAAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number | null
  }

  export type FARMACIASumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number | null
  }

  export type FARMACIAMinAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_DOC: number | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    MODO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    FEC_USO: Date | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number | null
    SUC: string | null
  }

  export type FARMACIAMaxAggregateOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_DOC: number | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    MODO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    FEC_USO: Date | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number | null
    SUC: string | null
  }

  export type FARMACIACountAggregateOutputType = {
    CONTRATO: number
    FECHA: number
    HORA: number
    NRO_DOC: number
    NRO_ORDEN: number
    DESTINO: number
    MODO: number
    IMPORTE: number
    ANULADO: number
    OPERADOR: number
    OPE_ANU: number
    FEC_USO: number
    CAN_MEDI: number
    MATRICULA: number
    HABILITA: number
    idfarmacia: number
    SUC: number
    _all: number
  }


  export type FARMACIAAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    CAN_MEDI?: true
    MATRICULA?: true
    HABILITA?: true
    idfarmacia?: true
  }

  export type FARMACIASumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    CAN_MEDI?: true
    MATRICULA?: true
    HABILITA?: true
    idfarmacia?: true
  }

  export type FARMACIAMinAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_DOC?: true
    NRO_ORDEN?: true
    DESTINO?: true
    MODO?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    FEC_USO?: true
    CAN_MEDI?: true
    MATRICULA?: true
    HABILITA?: true
    idfarmacia?: true
    SUC?: true
  }

  export type FARMACIAMaxAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_DOC?: true
    NRO_ORDEN?: true
    DESTINO?: true
    MODO?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    FEC_USO?: true
    CAN_MEDI?: true
    MATRICULA?: true
    HABILITA?: true
    idfarmacia?: true
    SUC?: true
  }

  export type FARMACIACountAggregateInputType = {
    CONTRATO?: true
    FECHA?: true
    HORA?: true
    NRO_DOC?: true
    NRO_ORDEN?: true
    DESTINO?: true
    MODO?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    FEC_USO?: true
    CAN_MEDI?: true
    MATRICULA?: true
    HABILITA?: true
    idfarmacia?: true
    SUC?: true
    _all?: true
  }

  export type FARMACIAAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FARMACIA to aggregate.
     */
    where?: FARMACIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FARMACIAS to fetch.
     */
    orderBy?: FARMACIAOrderByWithRelationInput | FARMACIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FARMACIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FARMACIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FARMACIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FARMACIAS
    **/
    _count?: true | FARMACIACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FARMACIAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FARMACIASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FARMACIAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FARMACIAMaxAggregateInputType
  }

  export type GetFARMACIAAggregateType<T extends FARMACIAAggregateArgs> = {
        [P in keyof T & keyof AggregateFARMACIA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFARMACIA[P]>
      : GetScalarType<T[P], AggregateFARMACIA[P]>
  }




  export type FARMACIAGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FARMACIAWhereInput
    orderBy?: FARMACIAOrderByWithAggregationInput | FARMACIAOrderByWithAggregationInput[]
    by: FARMACIAScalarFieldEnum[] | FARMACIAScalarFieldEnum
    having?: FARMACIAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FARMACIACountAggregateInputType | true
    _avg?: FARMACIAAvgAggregateInputType
    _sum?: FARMACIASumAggregateInputType
    _min?: FARMACIAMinAggregateInputType
    _max?: FARMACIAMaxAggregateInputType
  }


  export type FARMACIAGroupByOutputType = {
    CONTRATO: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_DOC: number | null
    NRO_ORDEN: string | null
    DESTINO: string | null
    MODO: string | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    FEC_USO: Date | null
    CAN_MEDI: number | null
    MATRICULA: number | null
    HABILITA: number | null
    idfarmacia: number
    SUC: string | null
    _count: FARMACIACountAggregateOutputType | null
    _avg: FARMACIAAvgAggregateOutputType | null
    _sum: FARMACIASumAggregateOutputType | null
    _min: FARMACIAMinAggregateOutputType | null
    _max: FARMACIAMaxAggregateOutputType | null
  }

  type GetFARMACIAGroupByPayload<T extends FARMACIAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FARMACIAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FARMACIAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FARMACIAGroupByOutputType[P]>
            : GetScalarType<T[P], FARMACIAGroupByOutputType[P]>
        }
      >
    >


  export type FARMACIASelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_DOC?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    MODO?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    FEC_USO?: boolean
    CAN_MEDI?: boolean
    MATRICULA?: boolean
    HABILITA?: boolean
    idfarmacia?: boolean
    SUC?: boolean
  }, ExtArgs["result"]["fARMACIA"]>

  export type FARMACIASelectScalar = {
    CONTRATO?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_DOC?: boolean
    NRO_ORDEN?: boolean
    DESTINO?: boolean
    MODO?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    FEC_USO?: boolean
    CAN_MEDI?: boolean
    MATRICULA?: boolean
    HABILITA?: boolean
    idfarmacia?: boolean
    SUC?: boolean
  }


  type FARMACIAGetPayload<S extends boolean | null | undefined | FARMACIAArgs> = $Types.GetResult<FARMACIAPayload, S>

  type FARMACIACountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FARMACIAFindManyArgs, 'select' | 'include'> & {
      select?: FARMACIACountAggregateInputType | true
    }

  export interface FARMACIADelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FARMACIA'], meta: { name: 'FARMACIA' } }
    /**
     * Find zero or one FARMACIA that matches the filter.
     * @param {FARMACIAFindUniqueArgs} args - Arguments to find a FARMACIA
     * @example
     * // Get one FARMACIA
     * const fARMACIA = await prisma.fARMACIA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FARMACIAFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FARMACIAFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FARMACIA'> extends True ? Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one FARMACIA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FARMACIAFindUniqueOrThrowArgs} args - Arguments to find a FARMACIA
     * @example
     * // Get one FARMACIA
     * const fARMACIA = await prisma.fARMACIA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FARMACIAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FARMACIAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first FARMACIA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAFindFirstArgs} args - Arguments to find a FARMACIA
     * @example
     * // Get one FARMACIA
     * const fARMACIA = await prisma.fARMACIA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FARMACIAFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FARMACIAFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FARMACIA'> extends True ? Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first FARMACIA that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAFindFirstOrThrowArgs} args - Arguments to find a FARMACIA
     * @example
     * // Get one FARMACIA
     * const fARMACIA = await prisma.fARMACIA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FARMACIAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FARMACIAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more FARMACIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FARMACIAS
     * const fARMACIAS = await prisma.fARMACIA.findMany()
     * 
     * // Get first 10 FARMACIAS
     * const fARMACIAS = await prisma.fARMACIA.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const fARMACIAWithCONTRATOOnly = await prisma.fARMACIA.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends FARMACIAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FARMACIAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a FARMACIA.
     * @param {FARMACIACreateArgs} args - Arguments to create a FARMACIA.
     * @example
     * // Create one FARMACIA
     * const FARMACIA = await prisma.fARMACIA.create({
     *   data: {
     *     // ... data to create a FARMACIA
     *   }
     * })
     * 
    **/
    create<T extends FARMACIACreateArgs<ExtArgs>>(
      args: SelectSubset<T, FARMACIACreateArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many FARMACIAS.
     *     @param {FARMACIACreateManyArgs} args - Arguments to create many FARMACIAS.
     *     @example
     *     // Create many FARMACIAS
     *     const fARMACIA = await prisma.fARMACIA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FARMACIACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FARMACIACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FARMACIA.
     * @param {FARMACIADeleteArgs} args - Arguments to delete one FARMACIA.
     * @example
     * // Delete one FARMACIA
     * const FARMACIA = await prisma.fARMACIA.delete({
     *   where: {
     *     // ... filter to delete one FARMACIA
     *   }
     * })
     * 
    **/
    delete<T extends FARMACIADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FARMACIADeleteArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one FARMACIA.
     * @param {FARMACIAUpdateArgs} args - Arguments to update one FARMACIA.
     * @example
     * // Update one FARMACIA
     * const fARMACIA = await prisma.fARMACIA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FARMACIAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FARMACIAUpdateArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more FARMACIAS.
     * @param {FARMACIADeleteManyArgs} args - Arguments to filter FARMACIAS to delete.
     * @example
     * // Delete a few FARMACIAS
     * const { count } = await prisma.fARMACIA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FARMACIADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FARMACIADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FARMACIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FARMACIAS
     * const fARMACIA = await prisma.fARMACIA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FARMACIAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FARMACIAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FARMACIA.
     * @param {FARMACIAUpsertArgs} args - Arguments to update or create a FARMACIA.
     * @example
     * // Update or create a FARMACIA
     * const fARMACIA = await prisma.fARMACIA.upsert({
     *   create: {
     *     // ... data to create a FARMACIA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FARMACIA we want to update
     *   }
     * })
    **/
    upsert<T extends FARMACIAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FARMACIAUpsertArgs<ExtArgs>>
    ): Prisma__FARMACIAClient<$Types.GetResult<FARMACIAPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of FARMACIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIACountArgs} args - Arguments to filter FARMACIAS to count.
     * @example
     * // Count the number of FARMACIAS
     * const count = await prisma.fARMACIA.count({
     *   where: {
     *     // ... the filter for the FARMACIAS we want to count
     *   }
     * })
    **/
    count<T extends FARMACIACountArgs>(
      args?: Subset<T, FARMACIACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FARMACIACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FARMACIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FARMACIAAggregateArgs>(args: Subset<T, FARMACIAAggregateArgs>): Prisma.PrismaPromise<GetFARMACIAAggregateType<T>>

    /**
     * Group by FARMACIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FARMACIAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FARMACIAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FARMACIAGroupByArgs['orderBy'] }
        : { orderBy?: FARMACIAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FARMACIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFARMACIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FARMACIA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FARMACIAClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FARMACIA base type for findUnique actions
   */
  export type FARMACIAFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter, which FARMACIA to fetch.
     */
    where: FARMACIAWhereUniqueInput
  }

  /**
   * FARMACIA findUnique
   */
  export interface FARMACIAFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FARMACIAFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FARMACIA findUniqueOrThrow
   */
  export type FARMACIAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter, which FARMACIA to fetch.
     */
    where: FARMACIAWhereUniqueInput
  }


  /**
   * FARMACIA base type for findFirst actions
   */
  export type FARMACIAFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter, which FARMACIA to fetch.
     */
    where?: FARMACIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FARMACIAS to fetch.
     */
    orderBy?: FARMACIAOrderByWithRelationInput | FARMACIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FARMACIAS.
     */
    cursor?: FARMACIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FARMACIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FARMACIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FARMACIAS.
     */
    distinct?: FARMACIAScalarFieldEnum | FARMACIAScalarFieldEnum[]
  }

  /**
   * FARMACIA findFirst
   */
  export interface FARMACIAFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FARMACIAFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FARMACIA findFirstOrThrow
   */
  export type FARMACIAFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter, which FARMACIA to fetch.
     */
    where?: FARMACIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FARMACIAS to fetch.
     */
    orderBy?: FARMACIAOrderByWithRelationInput | FARMACIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FARMACIAS.
     */
    cursor?: FARMACIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FARMACIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FARMACIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FARMACIAS.
     */
    distinct?: FARMACIAScalarFieldEnum | FARMACIAScalarFieldEnum[]
  }


  /**
   * FARMACIA findMany
   */
  export type FARMACIAFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter, which FARMACIAS to fetch.
     */
    where?: FARMACIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FARMACIAS to fetch.
     */
    orderBy?: FARMACIAOrderByWithRelationInput | FARMACIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FARMACIAS.
     */
    cursor?: FARMACIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FARMACIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FARMACIAS.
     */
    skip?: number
    distinct?: FARMACIAScalarFieldEnum | FARMACIAScalarFieldEnum[]
  }


  /**
   * FARMACIA create
   */
  export type FARMACIACreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * The data needed to create a FARMACIA.
     */
    data?: XOR<FARMACIACreateInput, FARMACIAUncheckedCreateInput>
  }


  /**
   * FARMACIA createMany
   */
  export type FARMACIACreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FARMACIAS.
     */
    data: FARMACIACreateManyInput | FARMACIACreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FARMACIA update
   */
  export type FARMACIAUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * The data needed to update a FARMACIA.
     */
    data: XOR<FARMACIAUpdateInput, FARMACIAUncheckedUpdateInput>
    /**
     * Choose, which FARMACIA to update.
     */
    where: FARMACIAWhereUniqueInput
  }


  /**
   * FARMACIA updateMany
   */
  export type FARMACIAUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FARMACIAS.
     */
    data: XOR<FARMACIAUpdateManyMutationInput, FARMACIAUncheckedUpdateManyInput>
    /**
     * Filter which FARMACIAS to update
     */
    where?: FARMACIAWhereInput
  }


  /**
   * FARMACIA upsert
   */
  export type FARMACIAUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * The filter to search for the FARMACIA to update in case it exists.
     */
    where: FARMACIAWhereUniqueInput
    /**
     * In case the FARMACIA found by the `where` argument doesn't exist, create a new FARMACIA with this data.
     */
    create: XOR<FARMACIACreateInput, FARMACIAUncheckedCreateInput>
    /**
     * In case the FARMACIA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FARMACIAUpdateInput, FARMACIAUncheckedUpdateInput>
  }


  /**
   * FARMACIA delete
   */
  export type FARMACIADeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
    /**
     * Filter which FARMACIA to delete.
     */
    where: FARMACIAWhereUniqueInput
  }


  /**
   * FARMACIA deleteMany
   */
  export type FARMACIADeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FARMACIAS to delete
     */
    where?: FARMACIAWhereInput
  }


  /**
   * FARMACIA without action
   */
  export type FARMACIAArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FARMACIA
     */
    select?: FARMACIASelect<ExtArgs> | null
  }



  /**
   * Model MEDICOS_TURNOS
   */


  export type AggregateMEDICOS_TURNOS = {
    _count: MEDICOS_TURNOSCountAggregateOutputType | null
    _avg: MEDICOS_TURNOSAvgAggregateOutputType | null
    _sum: MEDICOS_TURNOSSumAggregateOutputType | null
    _min: MEDICOS_TURNOSMinAggregateOutputType | null
    _max: MEDICOS_TURNOSMaxAggregateOutputType | null
  }

  export type MEDICOS_TURNOSAvgAggregateOutputType = {
    idturno: number | null
    telefono: number | null
    estado: number | null
    dni: number | null
  }

  export type MEDICOS_TURNOSSumAggregateOutputType = {
    idturno: number | null
    telefono: bigint | null
    estado: number | null
    dni: number | null
  }

  export type MEDICOS_TURNOSMinAggregateOutputType = {
    idturno: number | null
    turno: string | null
    fecha: Date | null
    hora: string | null
    doctor: string | null
    paciente: string | null
    obra_soc: string | null
    telefono: bigint | null
    estado: number | null
    operador: string | null
    domicilio: string | null
    mail: string | null
    dni: number | null
  }

  export type MEDICOS_TURNOSMaxAggregateOutputType = {
    idturno: number | null
    turno: string | null
    fecha: Date | null
    hora: string | null
    doctor: string | null
    paciente: string | null
    obra_soc: string | null
    telefono: bigint | null
    estado: number | null
    operador: string | null
    domicilio: string | null
    mail: string | null
    dni: number | null
  }

  export type MEDICOS_TURNOSCountAggregateOutputType = {
    idturno: number
    turno: number
    fecha: number
    hora: number
    doctor: number
    paciente: number
    obra_soc: number
    telefono: number
    estado: number
    operador: number
    domicilio: number
    mail: number
    dni: number
    _all: number
  }


  export type MEDICOS_TURNOSAvgAggregateInputType = {
    idturno?: true
    telefono?: true
    estado?: true
    dni?: true
  }

  export type MEDICOS_TURNOSSumAggregateInputType = {
    idturno?: true
    telefono?: true
    estado?: true
    dni?: true
  }

  export type MEDICOS_TURNOSMinAggregateInputType = {
    idturno?: true
    turno?: true
    fecha?: true
    hora?: true
    doctor?: true
    paciente?: true
    obra_soc?: true
    telefono?: true
    estado?: true
    operador?: true
    domicilio?: true
    mail?: true
    dni?: true
  }

  export type MEDICOS_TURNOSMaxAggregateInputType = {
    idturno?: true
    turno?: true
    fecha?: true
    hora?: true
    doctor?: true
    paciente?: true
    obra_soc?: true
    telefono?: true
    estado?: true
    operador?: true
    domicilio?: true
    mail?: true
    dni?: true
  }

  export type MEDICOS_TURNOSCountAggregateInputType = {
    idturno?: true
    turno?: true
    fecha?: true
    hora?: true
    doctor?: true
    paciente?: true
    obra_soc?: true
    telefono?: true
    estado?: true
    operador?: true
    domicilio?: true
    mail?: true
    dni?: true
    _all?: true
  }

  export type MEDICOS_TURNOSAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MEDICOS_TURNOS to aggregate.
     */
    where?: MEDICOS_TURNOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MEDICOS_TURNOS to fetch.
     */
    orderBy?: MEDICOS_TURNOSOrderByWithRelationInput | MEDICOS_TURNOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MEDICOS_TURNOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MEDICOS_TURNOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MEDICOS_TURNOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MEDICOS_TURNOS
    **/
    _count?: true | MEDICOS_TURNOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MEDICOS_TURNOSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MEDICOS_TURNOSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MEDICOS_TURNOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MEDICOS_TURNOSMaxAggregateInputType
  }

  export type GetMEDICOS_TURNOSAggregateType<T extends MEDICOS_TURNOSAggregateArgs> = {
        [P in keyof T & keyof AggregateMEDICOS_TURNOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMEDICOS_TURNOS[P]>
      : GetScalarType<T[P], AggregateMEDICOS_TURNOS[P]>
  }




  export type MEDICOS_TURNOSGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MEDICOS_TURNOSWhereInput
    orderBy?: MEDICOS_TURNOSOrderByWithAggregationInput | MEDICOS_TURNOSOrderByWithAggregationInput[]
    by: MEDICOS_TURNOSScalarFieldEnum[] | MEDICOS_TURNOSScalarFieldEnum
    having?: MEDICOS_TURNOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MEDICOS_TURNOSCountAggregateInputType | true
    _avg?: MEDICOS_TURNOSAvgAggregateInputType
    _sum?: MEDICOS_TURNOSSumAggregateInputType
    _min?: MEDICOS_TURNOSMinAggregateInputType
    _max?: MEDICOS_TURNOSMaxAggregateInputType
  }


  export type MEDICOS_TURNOSGroupByOutputType = {
    idturno: number
    turno: string | null
    fecha: Date | null
    hora: string | null
    doctor: string | null
    paciente: string | null
    obra_soc: string | null
    telefono: bigint | null
    estado: number | null
    operador: string | null
    domicilio: string | null
    mail: string | null
    dni: number | null
    _count: MEDICOS_TURNOSCountAggregateOutputType | null
    _avg: MEDICOS_TURNOSAvgAggregateOutputType | null
    _sum: MEDICOS_TURNOSSumAggregateOutputType | null
    _min: MEDICOS_TURNOSMinAggregateOutputType | null
    _max: MEDICOS_TURNOSMaxAggregateOutputType | null
  }

  type GetMEDICOS_TURNOSGroupByPayload<T extends MEDICOS_TURNOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MEDICOS_TURNOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MEDICOS_TURNOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MEDICOS_TURNOSGroupByOutputType[P]>
            : GetScalarType<T[P], MEDICOS_TURNOSGroupByOutputType[P]>
        }
      >
    >


  export type MEDICOS_TURNOSSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idturno?: boolean
    turno?: boolean
    fecha?: boolean
    hora?: boolean
    doctor?: boolean
    paciente?: boolean
    obra_soc?: boolean
    telefono?: boolean
    estado?: boolean
    operador?: boolean
    domicilio?: boolean
    mail?: boolean
    dni?: boolean
  }, ExtArgs["result"]["mEDICOS_TURNOS"]>

  export type MEDICOS_TURNOSSelectScalar = {
    idturno?: boolean
    turno?: boolean
    fecha?: boolean
    hora?: boolean
    doctor?: boolean
    paciente?: boolean
    obra_soc?: boolean
    telefono?: boolean
    estado?: boolean
    operador?: boolean
    domicilio?: boolean
    mail?: boolean
    dni?: boolean
  }


  type MEDICOS_TURNOSGetPayload<S extends boolean | null | undefined | MEDICOS_TURNOSArgs> = $Types.GetResult<MEDICOS_TURNOSPayload, S>

  type MEDICOS_TURNOSCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MEDICOS_TURNOSFindManyArgs, 'select' | 'include'> & {
      select?: MEDICOS_TURNOSCountAggregateInputType | true
    }

  export interface MEDICOS_TURNOSDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MEDICOS_TURNOS'], meta: { name: 'MEDICOS_TURNOS' } }
    /**
     * Find zero or one MEDICOS_TURNOS that matches the filter.
     * @param {MEDICOS_TURNOSFindUniqueArgs} args - Arguments to find a MEDICOS_TURNOS
     * @example
     * // Get one MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MEDICOS_TURNOSFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MEDICOS_TURNOSFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MEDICOS_TURNOS'> extends True ? Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one MEDICOS_TURNOS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MEDICOS_TURNOSFindUniqueOrThrowArgs} args - Arguments to find a MEDICOS_TURNOS
     * @example
     * // Get one MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MEDICOS_TURNOSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MEDICOS_TURNOSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first MEDICOS_TURNOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSFindFirstArgs} args - Arguments to find a MEDICOS_TURNOS
     * @example
     * // Get one MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MEDICOS_TURNOSFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MEDICOS_TURNOSFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MEDICOS_TURNOS'> extends True ? Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first MEDICOS_TURNOS that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSFindFirstOrThrowArgs} args - Arguments to find a MEDICOS_TURNOS
     * @example
     * // Get one MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MEDICOS_TURNOSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MEDICOS_TURNOSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more MEDICOS_TURNOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findMany()
     * 
     * // Get first 10 MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.findMany({ take: 10 })
     * 
     * // Only select the `idturno`
     * const mEDICOS_TURNOSWithIdturnoOnly = await prisma.mEDICOS_TURNOS.findMany({ select: { idturno: true } })
     * 
    **/
    findMany<T extends MEDICOS_TURNOSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MEDICOS_TURNOSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a MEDICOS_TURNOS.
     * @param {MEDICOS_TURNOSCreateArgs} args - Arguments to create a MEDICOS_TURNOS.
     * @example
     * // Create one MEDICOS_TURNOS
     * const MEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.create({
     *   data: {
     *     // ... data to create a MEDICOS_TURNOS
     *   }
     * })
     * 
    **/
    create<T extends MEDICOS_TURNOSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MEDICOS_TURNOSCreateArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many MEDICOS_TURNOS.
     *     @param {MEDICOS_TURNOSCreateManyArgs} args - Arguments to create many MEDICOS_TURNOS.
     *     @example
     *     // Create many MEDICOS_TURNOS
     *     const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MEDICOS_TURNOSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MEDICOS_TURNOSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MEDICOS_TURNOS.
     * @param {MEDICOS_TURNOSDeleteArgs} args - Arguments to delete one MEDICOS_TURNOS.
     * @example
     * // Delete one MEDICOS_TURNOS
     * const MEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.delete({
     *   where: {
     *     // ... filter to delete one MEDICOS_TURNOS
     *   }
     * })
     * 
    **/
    delete<T extends MEDICOS_TURNOSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MEDICOS_TURNOSDeleteArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one MEDICOS_TURNOS.
     * @param {MEDICOS_TURNOSUpdateArgs} args - Arguments to update one MEDICOS_TURNOS.
     * @example
     * // Update one MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MEDICOS_TURNOSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MEDICOS_TURNOSUpdateArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more MEDICOS_TURNOS.
     * @param {MEDICOS_TURNOSDeleteManyArgs} args - Arguments to filter MEDICOS_TURNOS to delete.
     * @example
     * // Delete a few MEDICOS_TURNOS
     * const { count } = await prisma.mEDICOS_TURNOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MEDICOS_TURNOSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MEDICOS_TURNOSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MEDICOS_TURNOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MEDICOS_TURNOSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MEDICOS_TURNOSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MEDICOS_TURNOS.
     * @param {MEDICOS_TURNOSUpsertArgs} args - Arguments to update or create a MEDICOS_TURNOS.
     * @example
     * // Update or create a MEDICOS_TURNOS
     * const mEDICOS_TURNOS = await prisma.mEDICOS_TURNOS.upsert({
     *   create: {
     *     // ... data to create a MEDICOS_TURNOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MEDICOS_TURNOS we want to update
     *   }
     * })
    **/
    upsert<T extends MEDICOS_TURNOSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MEDICOS_TURNOSUpsertArgs<ExtArgs>>
    ): Prisma__MEDICOS_TURNOSClient<$Types.GetResult<MEDICOS_TURNOSPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of MEDICOS_TURNOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSCountArgs} args - Arguments to filter MEDICOS_TURNOS to count.
     * @example
     * // Count the number of MEDICOS_TURNOS
     * const count = await prisma.mEDICOS_TURNOS.count({
     *   where: {
     *     // ... the filter for the MEDICOS_TURNOS we want to count
     *   }
     * })
    **/
    count<T extends MEDICOS_TURNOSCountArgs>(
      args?: Subset<T, MEDICOS_TURNOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MEDICOS_TURNOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MEDICOS_TURNOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MEDICOS_TURNOSAggregateArgs>(args: Subset<T, MEDICOS_TURNOSAggregateArgs>): Prisma.PrismaPromise<GetMEDICOS_TURNOSAggregateType<T>>

    /**
     * Group by MEDICOS_TURNOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MEDICOS_TURNOSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MEDICOS_TURNOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MEDICOS_TURNOSGroupByArgs['orderBy'] }
        : { orderBy?: MEDICOS_TURNOSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MEDICOS_TURNOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMEDICOS_TURNOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MEDICOS_TURNOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MEDICOS_TURNOSClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MEDICOS_TURNOS base type for findUnique actions
   */
  export type MEDICOS_TURNOSFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter, which MEDICOS_TURNOS to fetch.
     */
    where: MEDICOS_TURNOSWhereUniqueInput
  }

  /**
   * MEDICOS_TURNOS findUnique
   */
  export interface MEDICOS_TURNOSFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MEDICOS_TURNOSFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MEDICOS_TURNOS findUniqueOrThrow
   */
  export type MEDICOS_TURNOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter, which MEDICOS_TURNOS to fetch.
     */
    where: MEDICOS_TURNOSWhereUniqueInput
  }


  /**
   * MEDICOS_TURNOS base type for findFirst actions
   */
  export type MEDICOS_TURNOSFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter, which MEDICOS_TURNOS to fetch.
     */
    where?: MEDICOS_TURNOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MEDICOS_TURNOS to fetch.
     */
    orderBy?: MEDICOS_TURNOSOrderByWithRelationInput | MEDICOS_TURNOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MEDICOS_TURNOS.
     */
    cursor?: MEDICOS_TURNOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MEDICOS_TURNOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MEDICOS_TURNOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MEDICOS_TURNOS.
     */
    distinct?: MEDICOS_TURNOSScalarFieldEnum | MEDICOS_TURNOSScalarFieldEnum[]
  }

  /**
   * MEDICOS_TURNOS findFirst
   */
  export interface MEDICOS_TURNOSFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MEDICOS_TURNOSFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MEDICOS_TURNOS findFirstOrThrow
   */
  export type MEDICOS_TURNOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter, which MEDICOS_TURNOS to fetch.
     */
    where?: MEDICOS_TURNOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MEDICOS_TURNOS to fetch.
     */
    orderBy?: MEDICOS_TURNOSOrderByWithRelationInput | MEDICOS_TURNOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MEDICOS_TURNOS.
     */
    cursor?: MEDICOS_TURNOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MEDICOS_TURNOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MEDICOS_TURNOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MEDICOS_TURNOS.
     */
    distinct?: MEDICOS_TURNOSScalarFieldEnum | MEDICOS_TURNOSScalarFieldEnum[]
  }


  /**
   * MEDICOS_TURNOS findMany
   */
  export type MEDICOS_TURNOSFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter, which MEDICOS_TURNOS to fetch.
     */
    where?: MEDICOS_TURNOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MEDICOS_TURNOS to fetch.
     */
    orderBy?: MEDICOS_TURNOSOrderByWithRelationInput | MEDICOS_TURNOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MEDICOS_TURNOS.
     */
    cursor?: MEDICOS_TURNOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MEDICOS_TURNOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MEDICOS_TURNOS.
     */
    skip?: number
    distinct?: MEDICOS_TURNOSScalarFieldEnum | MEDICOS_TURNOSScalarFieldEnum[]
  }


  /**
   * MEDICOS_TURNOS create
   */
  export type MEDICOS_TURNOSCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * The data needed to create a MEDICOS_TURNOS.
     */
    data?: XOR<MEDICOS_TURNOSCreateInput, MEDICOS_TURNOSUncheckedCreateInput>
  }


  /**
   * MEDICOS_TURNOS createMany
   */
  export type MEDICOS_TURNOSCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MEDICOS_TURNOS.
     */
    data: MEDICOS_TURNOSCreateManyInput | MEDICOS_TURNOSCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MEDICOS_TURNOS update
   */
  export type MEDICOS_TURNOSUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * The data needed to update a MEDICOS_TURNOS.
     */
    data: XOR<MEDICOS_TURNOSUpdateInput, MEDICOS_TURNOSUncheckedUpdateInput>
    /**
     * Choose, which MEDICOS_TURNOS to update.
     */
    where: MEDICOS_TURNOSWhereUniqueInput
  }


  /**
   * MEDICOS_TURNOS updateMany
   */
  export type MEDICOS_TURNOSUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MEDICOS_TURNOS.
     */
    data: XOR<MEDICOS_TURNOSUpdateManyMutationInput, MEDICOS_TURNOSUncheckedUpdateManyInput>
    /**
     * Filter which MEDICOS_TURNOS to update
     */
    where?: MEDICOS_TURNOSWhereInput
  }


  /**
   * MEDICOS_TURNOS upsert
   */
  export type MEDICOS_TURNOSUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * The filter to search for the MEDICOS_TURNOS to update in case it exists.
     */
    where: MEDICOS_TURNOSWhereUniqueInput
    /**
     * In case the MEDICOS_TURNOS found by the `where` argument doesn't exist, create a new MEDICOS_TURNOS with this data.
     */
    create: XOR<MEDICOS_TURNOSCreateInput, MEDICOS_TURNOSUncheckedCreateInput>
    /**
     * In case the MEDICOS_TURNOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MEDICOS_TURNOSUpdateInput, MEDICOS_TURNOSUncheckedUpdateInput>
  }


  /**
   * MEDICOS_TURNOS delete
   */
  export type MEDICOS_TURNOSDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
    /**
     * Filter which MEDICOS_TURNOS to delete.
     */
    where: MEDICOS_TURNOSWhereUniqueInput
  }


  /**
   * MEDICOS_TURNOS deleteMany
   */
  export type MEDICOS_TURNOSDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MEDICOS_TURNOS to delete
     */
    where?: MEDICOS_TURNOSWhereInput
  }


  /**
   * MEDICOS_TURNOS without action
   */
  export type MEDICOS_TURNOSArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MEDICOS_TURNOS
     */
    select?: MEDICOS_TURNOSSelect<ExtArgs> | null
  }



  /**
   * Model PRACTICA
   */


  export type AggregatePRACTICA = {
    _count: PRACTICACountAggregateOutputType | null
    _avg: PRACTICAAvgAggregateOutputType | null
    _sum: PRACTICASumAggregateOutputType | null
    _min: PRACTICAMinAggregateOutputType | null
    _max: PRACTICAMaxAggregateOutputType | null
  }

  export type PRACTICAAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DNI: number | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    idpractica: number | null
  }

  export type PRACTICASumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DNI: number | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPE_ANU: number | null
    idpractica: number | null
  }

  export type PRACTICAMinAggregateOutputType = {
    SUC_PRA: string | null
    CONTRATO: number | null
    NRO_DNI: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    PRAC_REA: string | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    COD_PRAC: string | null
    idpractica: number | null
    DESCRIP: string | null
  }

  export type PRACTICAMaxAggregateOutputType = {
    SUC_PRA: string | null
    CONTRATO: number | null
    NRO_DNI: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    PRAC_REA: string | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    COD_PRAC: string | null
    idpractica: number | null
    DESCRIP: string | null
  }

  export type PRACTICACountAggregateOutputType = {
    SUC_PRA: number
    CONTRATO: number
    NRO_DNI: number
    FECHA: number
    HORA: number
    NRO_ORDEN: number
    PRAC_REA: number
    CANT_PRA: number
    IMPORTE: number
    ANULADO: number
    OPERADOR: number
    OPE_ANU: number
    COD_PRAC: number
    idpractica: number
    DESCRIP: number
    _all: number
  }


  export type PRACTICAAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DNI?: true
    CANT_PRA?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    idpractica?: true
  }

  export type PRACTICASumAggregateInputType = {
    CONTRATO?: true
    NRO_DNI?: true
    CANT_PRA?: true
    IMPORTE?: true
    ANULADO?: true
    OPE_ANU?: true
    idpractica?: true
  }

  export type PRACTICAMinAggregateInputType = {
    SUC_PRA?: true
    CONTRATO?: true
    NRO_DNI?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    PRAC_REA?: true
    CANT_PRA?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    COD_PRAC?: true
    idpractica?: true
    DESCRIP?: true
  }

  export type PRACTICAMaxAggregateInputType = {
    SUC_PRA?: true
    CONTRATO?: true
    NRO_DNI?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    PRAC_REA?: true
    CANT_PRA?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    COD_PRAC?: true
    idpractica?: true
    DESCRIP?: true
  }

  export type PRACTICACountAggregateInputType = {
    SUC_PRA?: true
    CONTRATO?: true
    NRO_DNI?: true
    FECHA?: true
    HORA?: true
    NRO_ORDEN?: true
    PRAC_REA?: true
    CANT_PRA?: true
    IMPORTE?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_ANU?: true
    COD_PRAC?: true
    idpractica?: true
    DESCRIP?: true
    _all?: true
  }

  export type PRACTICAAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRACTICA to aggregate.
     */
    where?: PRACTICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACTICAS to fetch.
     */
    orderBy?: PRACTICAOrderByWithRelationInput | PRACTICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRACTICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACTICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACTICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRACTICAS
    **/
    _count?: true | PRACTICACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRACTICAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRACTICASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRACTICAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRACTICAMaxAggregateInputType
  }

  export type GetPRACTICAAggregateType<T extends PRACTICAAggregateArgs> = {
        [P in keyof T & keyof AggregatePRACTICA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRACTICA[P]>
      : GetScalarType<T[P], AggregatePRACTICA[P]>
  }




  export type PRACTICAGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PRACTICAWhereInput
    orderBy?: PRACTICAOrderByWithAggregationInput | PRACTICAOrderByWithAggregationInput[]
    by: PRACTICAScalarFieldEnum[] | PRACTICAScalarFieldEnum
    having?: PRACTICAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRACTICACountAggregateInputType | true
    _avg?: PRACTICAAvgAggregateInputType
    _sum?: PRACTICASumAggregateInputType
    _min?: PRACTICAMinAggregateInputType
    _max?: PRACTICAMaxAggregateInputType
  }


  export type PRACTICAGroupByOutputType = {
    SUC_PRA: string | null
    CONTRATO: number | null
    NRO_DNI: number | null
    FECHA: Date | null
    HORA: string | null
    NRO_ORDEN: string | null
    PRAC_REA: string | null
    CANT_PRA: number | null
    IMPORTE: number | null
    ANULADO: number | null
    OPERADOR: string | null
    OPE_ANU: number | null
    COD_PRAC: string | null
    idpractica: number
    DESCRIP: string | null
    _count: PRACTICACountAggregateOutputType | null
    _avg: PRACTICAAvgAggregateOutputType | null
    _sum: PRACTICASumAggregateOutputType | null
    _min: PRACTICAMinAggregateOutputType | null
    _max: PRACTICAMaxAggregateOutputType | null
  }

  type GetPRACTICAGroupByPayload<T extends PRACTICAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRACTICAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRACTICAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRACTICAGroupByOutputType[P]>
            : GetScalarType<T[P], PRACTICAGroupByOutputType[P]>
        }
      >
    >


  export type PRACTICASelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUC_PRA?: boolean
    CONTRATO?: boolean
    NRO_DNI?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    PRAC_REA?: boolean
    CANT_PRA?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    COD_PRAC?: boolean
    idpractica?: boolean
    DESCRIP?: boolean
  }, ExtArgs["result"]["pRACTICA"]>

  export type PRACTICASelectScalar = {
    SUC_PRA?: boolean
    CONTRATO?: boolean
    NRO_DNI?: boolean
    FECHA?: boolean
    HORA?: boolean
    NRO_ORDEN?: boolean
    PRAC_REA?: boolean
    CANT_PRA?: boolean
    IMPORTE?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_ANU?: boolean
    COD_PRAC?: boolean
    idpractica?: boolean
    DESCRIP?: boolean
  }


  type PRACTICAGetPayload<S extends boolean | null | undefined | PRACTICAArgs> = $Types.GetResult<PRACTICAPayload, S>

  type PRACTICACountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PRACTICAFindManyArgs, 'select' | 'include'> & {
      select?: PRACTICACountAggregateInputType | true
    }

  export interface PRACTICADelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRACTICA'], meta: { name: 'PRACTICA' } }
    /**
     * Find zero or one PRACTICA that matches the filter.
     * @param {PRACTICAFindUniqueArgs} args - Arguments to find a PRACTICA
     * @example
     * // Get one PRACTICA
     * const pRACTICA = await prisma.pRACTICA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRACTICAFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PRACTICAFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PRACTICA'> extends True ? Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PRACTICA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRACTICAFindUniqueOrThrowArgs} args - Arguments to find a PRACTICA
     * @example
     * // Get one PRACTICA
     * const pRACTICA = await prisma.pRACTICA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRACTICAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACTICAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PRACTICA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAFindFirstArgs} args - Arguments to find a PRACTICA
     * @example
     * // Get one PRACTICA
     * const pRACTICA = await prisma.pRACTICA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRACTICAFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PRACTICAFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PRACTICA'> extends True ? Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PRACTICA that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAFindFirstOrThrowArgs} args - Arguments to find a PRACTICA
     * @example
     * // Get one PRACTICA
     * const pRACTICA = await prisma.pRACTICA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRACTICAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACTICAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PRACTICAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRACTICAS
     * const pRACTICAS = await prisma.pRACTICA.findMany()
     * 
     * // Get first 10 PRACTICAS
     * const pRACTICAS = await prisma.pRACTICA.findMany({ take: 10 })
     * 
     * // Only select the `SUC_PRA`
     * const pRACTICAWithSUC_PRAOnly = await prisma.pRACTICA.findMany({ select: { SUC_PRA: true } })
     * 
    **/
    findMany<T extends PRACTICAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACTICAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PRACTICA.
     * @param {PRACTICACreateArgs} args - Arguments to create a PRACTICA.
     * @example
     * // Create one PRACTICA
     * const PRACTICA = await prisma.pRACTICA.create({
     *   data: {
     *     // ... data to create a PRACTICA
     *   }
     * })
     * 
    **/
    create<T extends PRACTICACreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRACTICACreateArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PRACTICAS.
     *     @param {PRACTICACreateManyArgs} args - Arguments to create many PRACTICAS.
     *     @example
     *     // Create many PRACTICAS
     *     const pRACTICA = await prisma.pRACTICA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRACTICACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACTICACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRACTICA.
     * @param {PRACTICADeleteArgs} args - Arguments to delete one PRACTICA.
     * @example
     * // Delete one PRACTICA
     * const PRACTICA = await prisma.pRACTICA.delete({
     *   where: {
     *     // ... filter to delete one PRACTICA
     *   }
     * })
     * 
    **/
    delete<T extends PRACTICADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRACTICADeleteArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PRACTICA.
     * @param {PRACTICAUpdateArgs} args - Arguments to update one PRACTICA.
     * @example
     * // Update one PRACTICA
     * const pRACTICA = await prisma.pRACTICA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRACTICAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRACTICAUpdateArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PRACTICAS.
     * @param {PRACTICADeleteManyArgs} args - Arguments to filter PRACTICAS to delete.
     * @example
     * // Delete a few PRACTICAS
     * const { count } = await prisma.pRACTICA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRACTICADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACTICADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRACTICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRACTICAS
     * const pRACTICA = await prisma.pRACTICA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRACTICAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRACTICAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRACTICA.
     * @param {PRACTICAUpsertArgs} args - Arguments to update or create a PRACTICA.
     * @example
     * // Update or create a PRACTICA
     * const pRACTICA = await prisma.pRACTICA.upsert({
     *   create: {
     *     // ... data to create a PRACTICA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRACTICA we want to update
     *   }
     * })
    **/
    upsert<T extends PRACTICAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRACTICAUpsertArgs<ExtArgs>>
    ): Prisma__PRACTICAClient<$Types.GetResult<PRACTICAPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PRACTICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICACountArgs} args - Arguments to filter PRACTICAS to count.
     * @example
     * // Count the number of PRACTICAS
     * const count = await prisma.pRACTICA.count({
     *   where: {
     *     // ... the filter for the PRACTICAS we want to count
     *   }
     * })
    **/
    count<T extends PRACTICACountArgs>(
      args?: Subset<T, PRACTICACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRACTICACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRACTICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRACTICAAggregateArgs>(args: Subset<T, PRACTICAAggregateArgs>): Prisma.PrismaPromise<GetPRACTICAAggregateType<T>>

    /**
     * Group by PRACTICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACTICAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRACTICAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRACTICAGroupByArgs['orderBy'] }
        : { orderBy?: PRACTICAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRACTICAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRACTICAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PRACTICA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PRACTICAClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PRACTICA base type for findUnique actions
   */
  export type PRACTICAFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter, which PRACTICA to fetch.
     */
    where: PRACTICAWhereUniqueInput
  }

  /**
   * PRACTICA findUnique
   */
  export interface PRACTICAFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRACTICAFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRACTICA findUniqueOrThrow
   */
  export type PRACTICAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter, which PRACTICA to fetch.
     */
    where: PRACTICAWhereUniqueInput
  }


  /**
   * PRACTICA base type for findFirst actions
   */
  export type PRACTICAFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter, which PRACTICA to fetch.
     */
    where?: PRACTICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACTICAS to fetch.
     */
    orderBy?: PRACTICAOrderByWithRelationInput | PRACTICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRACTICAS.
     */
    cursor?: PRACTICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACTICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACTICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRACTICAS.
     */
    distinct?: PRACTICAScalarFieldEnum | PRACTICAScalarFieldEnum[]
  }

  /**
   * PRACTICA findFirst
   */
  export interface PRACTICAFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRACTICAFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRACTICA findFirstOrThrow
   */
  export type PRACTICAFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter, which PRACTICA to fetch.
     */
    where?: PRACTICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACTICAS to fetch.
     */
    orderBy?: PRACTICAOrderByWithRelationInput | PRACTICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRACTICAS.
     */
    cursor?: PRACTICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACTICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACTICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRACTICAS.
     */
    distinct?: PRACTICAScalarFieldEnum | PRACTICAScalarFieldEnum[]
  }


  /**
   * PRACTICA findMany
   */
  export type PRACTICAFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter, which PRACTICAS to fetch.
     */
    where?: PRACTICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACTICAS to fetch.
     */
    orderBy?: PRACTICAOrderByWithRelationInput | PRACTICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRACTICAS.
     */
    cursor?: PRACTICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACTICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACTICAS.
     */
    skip?: number
    distinct?: PRACTICAScalarFieldEnum | PRACTICAScalarFieldEnum[]
  }


  /**
   * PRACTICA create
   */
  export type PRACTICACreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * The data needed to create a PRACTICA.
     */
    data?: XOR<PRACTICACreateInput, PRACTICAUncheckedCreateInput>
  }


  /**
   * PRACTICA createMany
   */
  export type PRACTICACreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRACTICAS.
     */
    data: PRACTICACreateManyInput | PRACTICACreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRACTICA update
   */
  export type PRACTICAUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * The data needed to update a PRACTICA.
     */
    data: XOR<PRACTICAUpdateInput, PRACTICAUncheckedUpdateInput>
    /**
     * Choose, which PRACTICA to update.
     */
    where: PRACTICAWhereUniqueInput
  }


  /**
   * PRACTICA updateMany
   */
  export type PRACTICAUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRACTICAS.
     */
    data: XOR<PRACTICAUpdateManyMutationInput, PRACTICAUncheckedUpdateManyInput>
    /**
     * Filter which PRACTICAS to update
     */
    where?: PRACTICAWhereInput
  }


  /**
   * PRACTICA upsert
   */
  export type PRACTICAUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * The filter to search for the PRACTICA to update in case it exists.
     */
    where: PRACTICAWhereUniqueInput
    /**
     * In case the PRACTICA found by the `where` argument doesn't exist, create a new PRACTICA with this data.
     */
    create: XOR<PRACTICACreateInput, PRACTICAUncheckedCreateInput>
    /**
     * In case the PRACTICA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRACTICAUpdateInput, PRACTICAUncheckedUpdateInput>
  }


  /**
   * PRACTICA delete
   */
  export type PRACTICADeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
    /**
     * Filter which PRACTICA to delete.
     */
    where: PRACTICAWhereUniqueInput
  }


  /**
   * PRACTICA deleteMany
   */
  export type PRACTICADeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRACTICAS to delete
     */
    where?: PRACTICAWhereInput
  }


  /**
   * PRACTICA without action
   */
  export type PRACTICAArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACTICA
     */
    select?: PRACTICASelect<ExtArgs> | null
  }



  /**
   * Model PRACT_ENFER
   */


  export type AggregatePRACT_ENFER = {
    _count: PRACT_ENFERCountAggregateOutputType | null
    _avg: PRACT_ENFERAvgAggregateOutputType | null
    _sum: PRACT_ENFERSumAggregateOutputType | null
    _min: PRACT_ENFERMinAggregateOutputType | null
    _max: PRACT_ENFERMaxAggregateOutputType | null
  }

  export type PRACT_ENFERAvgAggregateOutputType = {
    idpractica: number | null
    importe: number | null
  }

  export type PRACT_ENFERSumAggregateOutputType = {
    idpractica: number | null
    importe: number | null
  }

  export type PRACT_ENFERMinAggregateOutputType = {
    idpractica: number | null
    practica: string | null
    importe: number | null
  }

  export type PRACT_ENFERMaxAggregateOutputType = {
    idpractica: number | null
    practica: string | null
    importe: number | null
  }

  export type PRACT_ENFERCountAggregateOutputType = {
    idpractica: number
    practica: number
    importe: number
    _all: number
  }


  export type PRACT_ENFERAvgAggregateInputType = {
    idpractica?: true
    importe?: true
  }

  export type PRACT_ENFERSumAggregateInputType = {
    idpractica?: true
    importe?: true
  }

  export type PRACT_ENFERMinAggregateInputType = {
    idpractica?: true
    practica?: true
    importe?: true
  }

  export type PRACT_ENFERMaxAggregateInputType = {
    idpractica?: true
    practica?: true
    importe?: true
  }

  export type PRACT_ENFERCountAggregateInputType = {
    idpractica?: true
    practica?: true
    importe?: true
    _all?: true
  }

  export type PRACT_ENFERAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRACT_ENFER to aggregate.
     */
    where?: PRACT_ENFERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACT_ENFERS to fetch.
     */
    orderBy?: PRACT_ENFEROrderByWithRelationInput | PRACT_ENFEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRACT_ENFERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACT_ENFERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACT_ENFERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRACT_ENFERS
    **/
    _count?: true | PRACT_ENFERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRACT_ENFERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRACT_ENFERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRACT_ENFERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRACT_ENFERMaxAggregateInputType
  }

  export type GetPRACT_ENFERAggregateType<T extends PRACT_ENFERAggregateArgs> = {
        [P in keyof T & keyof AggregatePRACT_ENFER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRACT_ENFER[P]>
      : GetScalarType<T[P], AggregatePRACT_ENFER[P]>
  }




  export type PRACT_ENFERGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PRACT_ENFERWhereInput
    orderBy?: PRACT_ENFEROrderByWithAggregationInput | PRACT_ENFEROrderByWithAggregationInput[]
    by: PRACT_ENFERScalarFieldEnum[] | PRACT_ENFERScalarFieldEnum
    having?: PRACT_ENFERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRACT_ENFERCountAggregateInputType | true
    _avg?: PRACT_ENFERAvgAggregateInputType
    _sum?: PRACT_ENFERSumAggregateInputType
    _min?: PRACT_ENFERMinAggregateInputType
    _max?: PRACT_ENFERMaxAggregateInputType
  }


  export type PRACT_ENFERGroupByOutputType = {
    idpractica: number
    practica: string | null
    importe: number | null
    _count: PRACT_ENFERCountAggregateOutputType | null
    _avg: PRACT_ENFERAvgAggregateOutputType | null
    _sum: PRACT_ENFERSumAggregateOutputType | null
    _min: PRACT_ENFERMinAggregateOutputType | null
    _max: PRACT_ENFERMaxAggregateOutputType | null
  }

  type GetPRACT_ENFERGroupByPayload<T extends PRACT_ENFERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRACT_ENFERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRACT_ENFERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRACT_ENFERGroupByOutputType[P]>
            : GetScalarType<T[P], PRACT_ENFERGroupByOutputType[P]>
        }
      >
    >


  export type PRACT_ENFERSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpractica?: boolean
    practica?: boolean
    importe?: boolean
  }, ExtArgs["result"]["pRACT_ENFER"]>

  export type PRACT_ENFERSelectScalar = {
    idpractica?: boolean
    practica?: boolean
    importe?: boolean
  }


  type PRACT_ENFERGetPayload<S extends boolean | null | undefined | PRACT_ENFERArgs> = $Types.GetResult<PRACT_ENFERPayload, S>

  type PRACT_ENFERCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PRACT_ENFERFindManyArgs, 'select' | 'include'> & {
      select?: PRACT_ENFERCountAggregateInputType | true
    }

  export interface PRACT_ENFERDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRACT_ENFER'], meta: { name: 'PRACT_ENFER' } }
    /**
     * Find zero or one PRACT_ENFER that matches the filter.
     * @param {PRACT_ENFERFindUniqueArgs} args - Arguments to find a PRACT_ENFER
     * @example
     * // Get one PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRACT_ENFERFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PRACT_ENFERFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PRACT_ENFER'> extends True ? Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PRACT_ENFER that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRACT_ENFERFindUniqueOrThrowArgs} args - Arguments to find a PRACT_ENFER
     * @example
     * // Get one PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRACT_ENFERFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACT_ENFERFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PRACT_ENFER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERFindFirstArgs} args - Arguments to find a PRACT_ENFER
     * @example
     * // Get one PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRACT_ENFERFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PRACT_ENFERFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PRACT_ENFER'> extends True ? Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PRACT_ENFER that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERFindFirstOrThrowArgs} args - Arguments to find a PRACT_ENFER
     * @example
     * // Get one PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRACT_ENFERFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACT_ENFERFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PRACT_ENFERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRACT_ENFERS
     * const pRACT_ENFERS = await prisma.pRACT_ENFER.findMany()
     * 
     * // Get first 10 PRACT_ENFERS
     * const pRACT_ENFERS = await prisma.pRACT_ENFER.findMany({ take: 10 })
     * 
     * // Only select the `idpractica`
     * const pRACT_ENFERWithIdpracticaOnly = await prisma.pRACT_ENFER.findMany({ select: { idpractica: true } })
     * 
    **/
    findMany<T extends PRACT_ENFERFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACT_ENFERFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PRACT_ENFER.
     * @param {PRACT_ENFERCreateArgs} args - Arguments to create a PRACT_ENFER.
     * @example
     * // Create one PRACT_ENFER
     * const PRACT_ENFER = await prisma.pRACT_ENFER.create({
     *   data: {
     *     // ... data to create a PRACT_ENFER
     *   }
     * })
     * 
    **/
    create<T extends PRACT_ENFERCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRACT_ENFERCreateArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PRACT_ENFERS.
     *     @param {PRACT_ENFERCreateManyArgs} args - Arguments to create many PRACT_ENFERS.
     *     @example
     *     // Create many PRACT_ENFERS
     *     const pRACT_ENFER = await prisma.pRACT_ENFER.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRACT_ENFERCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACT_ENFERCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRACT_ENFER.
     * @param {PRACT_ENFERDeleteArgs} args - Arguments to delete one PRACT_ENFER.
     * @example
     * // Delete one PRACT_ENFER
     * const PRACT_ENFER = await prisma.pRACT_ENFER.delete({
     *   where: {
     *     // ... filter to delete one PRACT_ENFER
     *   }
     * })
     * 
    **/
    delete<T extends PRACT_ENFERDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRACT_ENFERDeleteArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PRACT_ENFER.
     * @param {PRACT_ENFERUpdateArgs} args - Arguments to update one PRACT_ENFER.
     * @example
     * // Update one PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRACT_ENFERUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRACT_ENFERUpdateArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PRACT_ENFERS.
     * @param {PRACT_ENFERDeleteManyArgs} args - Arguments to filter PRACT_ENFERS to delete.
     * @example
     * // Delete a few PRACT_ENFERS
     * const { count } = await prisma.pRACT_ENFER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRACT_ENFERDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRACT_ENFERDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRACT_ENFERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRACT_ENFERS
     * const pRACT_ENFER = await prisma.pRACT_ENFER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRACT_ENFERUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRACT_ENFERUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRACT_ENFER.
     * @param {PRACT_ENFERUpsertArgs} args - Arguments to update or create a PRACT_ENFER.
     * @example
     * // Update or create a PRACT_ENFER
     * const pRACT_ENFER = await prisma.pRACT_ENFER.upsert({
     *   create: {
     *     // ... data to create a PRACT_ENFER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRACT_ENFER we want to update
     *   }
     * })
    **/
    upsert<T extends PRACT_ENFERUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRACT_ENFERUpsertArgs<ExtArgs>>
    ): Prisma__PRACT_ENFERClient<$Types.GetResult<PRACT_ENFERPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PRACT_ENFERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERCountArgs} args - Arguments to filter PRACT_ENFERS to count.
     * @example
     * // Count the number of PRACT_ENFERS
     * const count = await prisma.pRACT_ENFER.count({
     *   where: {
     *     // ... the filter for the PRACT_ENFERS we want to count
     *   }
     * })
    **/
    count<T extends PRACT_ENFERCountArgs>(
      args?: Subset<T, PRACT_ENFERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRACT_ENFERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRACT_ENFER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRACT_ENFERAggregateArgs>(args: Subset<T, PRACT_ENFERAggregateArgs>): Prisma.PrismaPromise<GetPRACT_ENFERAggregateType<T>>

    /**
     * Group by PRACT_ENFER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRACT_ENFERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRACT_ENFERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRACT_ENFERGroupByArgs['orderBy'] }
        : { orderBy?: PRACT_ENFERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRACT_ENFERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRACT_ENFERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PRACT_ENFER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PRACT_ENFERClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PRACT_ENFER base type for findUnique actions
   */
  export type PRACT_ENFERFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter, which PRACT_ENFER to fetch.
     */
    where: PRACT_ENFERWhereUniqueInput
  }

  /**
   * PRACT_ENFER findUnique
   */
  export interface PRACT_ENFERFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRACT_ENFERFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRACT_ENFER findUniqueOrThrow
   */
  export type PRACT_ENFERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter, which PRACT_ENFER to fetch.
     */
    where: PRACT_ENFERWhereUniqueInput
  }


  /**
   * PRACT_ENFER base type for findFirst actions
   */
  export type PRACT_ENFERFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter, which PRACT_ENFER to fetch.
     */
    where?: PRACT_ENFERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACT_ENFERS to fetch.
     */
    orderBy?: PRACT_ENFEROrderByWithRelationInput | PRACT_ENFEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRACT_ENFERS.
     */
    cursor?: PRACT_ENFERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACT_ENFERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACT_ENFERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRACT_ENFERS.
     */
    distinct?: PRACT_ENFERScalarFieldEnum | PRACT_ENFERScalarFieldEnum[]
  }

  /**
   * PRACT_ENFER findFirst
   */
  export interface PRACT_ENFERFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRACT_ENFERFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRACT_ENFER findFirstOrThrow
   */
  export type PRACT_ENFERFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter, which PRACT_ENFER to fetch.
     */
    where?: PRACT_ENFERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACT_ENFERS to fetch.
     */
    orderBy?: PRACT_ENFEROrderByWithRelationInput | PRACT_ENFEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRACT_ENFERS.
     */
    cursor?: PRACT_ENFERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACT_ENFERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACT_ENFERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRACT_ENFERS.
     */
    distinct?: PRACT_ENFERScalarFieldEnum | PRACT_ENFERScalarFieldEnum[]
  }


  /**
   * PRACT_ENFER findMany
   */
  export type PRACT_ENFERFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter, which PRACT_ENFERS to fetch.
     */
    where?: PRACT_ENFERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRACT_ENFERS to fetch.
     */
    orderBy?: PRACT_ENFEROrderByWithRelationInput | PRACT_ENFEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRACT_ENFERS.
     */
    cursor?: PRACT_ENFERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRACT_ENFERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRACT_ENFERS.
     */
    skip?: number
    distinct?: PRACT_ENFERScalarFieldEnum | PRACT_ENFERScalarFieldEnum[]
  }


  /**
   * PRACT_ENFER create
   */
  export type PRACT_ENFERCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * The data needed to create a PRACT_ENFER.
     */
    data?: XOR<PRACT_ENFERCreateInput, PRACT_ENFERUncheckedCreateInput>
  }


  /**
   * PRACT_ENFER createMany
   */
  export type PRACT_ENFERCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRACT_ENFERS.
     */
    data: PRACT_ENFERCreateManyInput | PRACT_ENFERCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRACT_ENFER update
   */
  export type PRACT_ENFERUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * The data needed to update a PRACT_ENFER.
     */
    data: XOR<PRACT_ENFERUpdateInput, PRACT_ENFERUncheckedUpdateInput>
    /**
     * Choose, which PRACT_ENFER to update.
     */
    where: PRACT_ENFERWhereUniqueInput
  }


  /**
   * PRACT_ENFER updateMany
   */
  export type PRACT_ENFERUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRACT_ENFERS.
     */
    data: XOR<PRACT_ENFERUpdateManyMutationInput, PRACT_ENFERUncheckedUpdateManyInput>
    /**
     * Filter which PRACT_ENFERS to update
     */
    where?: PRACT_ENFERWhereInput
  }


  /**
   * PRACT_ENFER upsert
   */
  export type PRACT_ENFERUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * The filter to search for the PRACT_ENFER to update in case it exists.
     */
    where: PRACT_ENFERWhereUniqueInput
    /**
     * In case the PRACT_ENFER found by the `where` argument doesn't exist, create a new PRACT_ENFER with this data.
     */
    create: XOR<PRACT_ENFERCreateInput, PRACT_ENFERUncheckedCreateInput>
    /**
     * In case the PRACT_ENFER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRACT_ENFERUpdateInput, PRACT_ENFERUncheckedUpdateInput>
  }


  /**
   * PRACT_ENFER delete
   */
  export type PRACT_ENFERDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
    /**
     * Filter which PRACT_ENFER to delete.
     */
    where: PRACT_ENFERWhereUniqueInput
  }


  /**
   * PRACT_ENFER deleteMany
   */
  export type PRACT_ENFERDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRACT_ENFERS to delete
     */
    where?: PRACT_ENFERWhereInput
  }


  /**
   * PRACT_ENFER without action
   */
  export type PRACT_ENFERArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRACT_ENFER
     */
    select?: PRACT_ENFERSelect<ExtArgs> | null
  }



  /**
   * Model PRESTADO
   */


  export type AggregatePRESTADO = {
    _count: PRESTADOCountAggregateOutputType | null
    _avg: PRESTADOAvgAggregateOutputType | null
    _sum: PRESTADOSumAggregateOutputType | null
    _min: PRESTADOMinAggregateOutputType | null
    _max: PRESTADOMaxAggregateOutputType | null
  }

  export type PRESTADOAvgAggregateOutputType = {
    COD_POST: number | null
    AUSENTE: number | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    OTERO: number | null
    idprest: number | null
  }

  export type PRESTADOSumAggregateOutputType = {
    COD_POST: number | null
    AUSENTE: number | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    OTERO: number | null
    idprest: number | null
  }

  export type PRESTADOMinAggregateOutputType = {
    COD_PRES: string | null
    NOMBRE: string | null
    ESPEC: string | null
    LIS_ESPE: string | null
    SUC: string | null
    DIRECCION: string | null
    LOCALIDAD: string | null
    TELEFONOS: string | null
    HORARIO1: string | null
    HORARIO2: string | null
    MODALIDAD: string | null
    MATRICULA: string | null
    COD_POST: number | null
    AUSENTE: number | null
    DESDE: Date | null
    HASTA: Date | null
    CUIT: string | null
    FEC_NAC: Date | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    ALTA: Date | null
    BAJA: Date | null
    OTERO: number | null
    idprest: number | null
    PROMO: boolean | null
  }

  export type PRESTADOMaxAggregateOutputType = {
    COD_PRES: string | null
    NOMBRE: string | null
    ESPEC: string | null
    LIS_ESPE: string | null
    SUC: string | null
    DIRECCION: string | null
    LOCALIDAD: string | null
    TELEFONOS: string | null
    HORARIO1: string | null
    HORARIO2: string | null
    MODALIDAD: string | null
    MATRICULA: string | null
    COD_POST: number | null
    AUSENTE: number | null
    DESDE: Date | null
    HASTA: Date | null
    CUIT: string | null
    FEC_NAC: Date | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    ALTA: Date | null
    BAJA: Date | null
    OTERO: number | null
    idprest: number | null
    PROMO: boolean | null
  }

  export type PRESTADOCountAggregateOutputType = {
    COD_PRES: number
    NOMBRE: number
    ESPEC: number
    LIS_ESPE: number
    SUC: number
    DIRECCION: number
    LOCALIDAD: number
    TELEFONOS: number
    HORARIO1: number
    HORARIO2: number
    MODALIDAD: number
    MATRICULA: number
    COD_POST: number
    AUSENTE: number
    DESDE: number
    HASTA: number
    CUIT: number
    FEC_NAC: number
    LUGAR: number
    MALA_PRAXI: number
    CON_PAGA: number
    ALTA: number
    BAJA: number
    OTERO: number
    idprest: number
    PROMO: number
    _all: number
  }


  export type PRESTADOAvgAggregateInputType = {
    COD_POST?: true
    AUSENTE?: true
    LUGAR?: true
    MALA_PRAXI?: true
    CON_PAGA?: true
    OTERO?: true
    idprest?: true
  }

  export type PRESTADOSumAggregateInputType = {
    COD_POST?: true
    AUSENTE?: true
    LUGAR?: true
    MALA_PRAXI?: true
    CON_PAGA?: true
    OTERO?: true
    idprest?: true
  }

  export type PRESTADOMinAggregateInputType = {
    COD_PRES?: true
    NOMBRE?: true
    ESPEC?: true
    LIS_ESPE?: true
    SUC?: true
    DIRECCION?: true
    LOCALIDAD?: true
    TELEFONOS?: true
    HORARIO1?: true
    HORARIO2?: true
    MODALIDAD?: true
    MATRICULA?: true
    COD_POST?: true
    AUSENTE?: true
    DESDE?: true
    HASTA?: true
    CUIT?: true
    FEC_NAC?: true
    LUGAR?: true
    MALA_PRAXI?: true
    CON_PAGA?: true
    ALTA?: true
    BAJA?: true
    OTERO?: true
    idprest?: true
    PROMO?: true
  }

  export type PRESTADOMaxAggregateInputType = {
    COD_PRES?: true
    NOMBRE?: true
    ESPEC?: true
    LIS_ESPE?: true
    SUC?: true
    DIRECCION?: true
    LOCALIDAD?: true
    TELEFONOS?: true
    HORARIO1?: true
    HORARIO2?: true
    MODALIDAD?: true
    MATRICULA?: true
    COD_POST?: true
    AUSENTE?: true
    DESDE?: true
    HASTA?: true
    CUIT?: true
    FEC_NAC?: true
    LUGAR?: true
    MALA_PRAXI?: true
    CON_PAGA?: true
    ALTA?: true
    BAJA?: true
    OTERO?: true
    idprest?: true
    PROMO?: true
  }

  export type PRESTADOCountAggregateInputType = {
    COD_PRES?: true
    NOMBRE?: true
    ESPEC?: true
    LIS_ESPE?: true
    SUC?: true
    DIRECCION?: true
    LOCALIDAD?: true
    TELEFONOS?: true
    HORARIO1?: true
    HORARIO2?: true
    MODALIDAD?: true
    MATRICULA?: true
    COD_POST?: true
    AUSENTE?: true
    DESDE?: true
    HASTA?: true
    CUIT?: true
    FEC_NAC?: true
    LUGAR?: true
    MALA_PRAXI?: true
    CON_PAGA?: true
    ALTA?: true
    BAJA?: true
    OTERO?: true
    idprest?: true
    PROMO?: true
    _all?: true
  }

  export type PRESTADOAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRESTADO to aggregate.
     */
    where?: PRESTADOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRESTADOS to fetch.
     */
    orderBy?: PRESTADOOrderByWithRelationInput | PRESTADOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRESTADOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRESTADOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRESTADOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRESTADOS
    **/
    _count?: true | PRESTADOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRESTADOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRESTADOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRESTADOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRESTADOMaxAggregateInputType
  }

  export type GetPRESTADOAggregateType<T extends PRESTADOAggregateArgs> = {
        [P in keyof T & keyof AggregatePRESTADO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRESTADO[P]>
      : GetScalarType<T[P], AggregatePRESTADO[P]>
  }




  export type PRESTADOGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PRESTADOWhereInput
    orderBy?: PRESTADOOrderByWithAggregationInput | PRESTADOOrderByWithAggregationInput[]
    by: PRESTADOScalarFieldEnum[] | PRESTADOScalarFieldEnum
    having?: PRESTADOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRESTADOCountAggregateInputType | true
    _avg?: PRESTADOAvgAggregateInputType
    _sum?: PRESTADOSumAggregateInputType
    _min?: PRESTADOMinAggregateInputType
    _max?: PRESTADOMaxAggregateInputType
  }


  export type PRESTADOGroupByOutputType = {
    COD_PRES: string
    NOMBRE: string | null
    ESPEC: string | null
    LIS_ESPE: string | null
    SUC: string | null
    DIRECCION: string | null
    LOCALIDAD: string | null
    TELEFONOS: string | null
    HORARIO1: string | null
    HORARIO2: string | null
    MODALIDAD: string | null
    MATRICULA: string | null
    COD_POST: number | null
    AUSENTE: number | null
    DESDE: Date | null
    HASTA: Date | null
    CUIT: string | null
    FEC_NAC: Date | null
    LUGAR: number | null
    MALA_PRAXI: number | null
    CON_PAGA: number | null
    ALTA: Date | null
    BAJA: Date | null
    OTERO: number | null
    idprest: number
    PROMO: boolean | null
    _count: PRESTADOCountAggregateOutputType | null
    _avg: PRESTADOAvgAggregateOutputType | null
    _sum: PRESTADOSumAggregateOutputType | null
    _min: PRESTADOMinAggregateOutputType | null
    _max: PRESTADOMaxAggregateOutputType | null
  }

  type GetPRESTADOGroupByPayload<T extends PRESTADOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRESTADOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRESTADOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRESTADOGroupByOutputType[P]>
            : GetScalarType<T[P], PRESTADOGroupByOutputType[P]>
        }
      >
    >


  export type PRESTADOSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    COD_PRES?: boolean
    NOMBRE?: boolean
    ESPEC?: boolean
    LIS_ESPE?: boolean
    SUC?: boolean
    DIRECCION?: boolean
    LOCALIDAD?: boolean
    TELEFONOS?: boolean
    HORARIO1?: boolean
    HORARIO2?: boolean
    MODALIDAD?: boolean
    MATRICULA?: boolean
    COD_POST?: boolean
    AUSENTE?: boolean
    DESDE?: boolean
    HASTA?: boolean
    CUIT?: boolean
    FEC_NAC?: boolean
    LUGAR?: boolean
    MALA_PRAXI?: boolean
    CON_PAGA?: boolean
    ALTA?: boolean
    BAJA?: boolean
    OTERO?: boolean
    idprest?: boolean
    PROMO?: boolean
  }, ExtArgs["result"]["pRESTADO"]>

  export type PRESTADOSelectScalar = {
    COD_PRES?: boolean
    NOMBRE?: boolean
    ESPEC?: boolean
    LIS_ESPE?: boolean
    SUC?: boolean
    DIRECCION?: boolean
    LOCALIDAD?: boolean
    TELEFONOS?: boolean
    HORARIO1?: boolean
    HORARIO2?: boolean
    MODALIDAD?: boolean
    MATRICULA?: boolean
    COD_POST?: boolean
    AUSENTE?: boolean
    DESDE?: boolean
    HASTA?: boolean
    CUIT?: boolean
    FEC_NAC?: boolean
    LUGAR?: boolean
    MALA_PRAXI?: boolean
    CON_PAGA?: boolean
    ALTA?: boolean
    BAJA?: boolean
    OTERO?: boolean
    idprest?: boolean
    PROMO?: boolean
  }


  type PRESTADOGetPayload<S extends boolean | null | undefined | PRESTADOArgs> = $Types.GetResult<PRESTADOPayload, S>

  type PRESTADOCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PRESTADOFindManyArgs, 'select' | 'include'> & {
      select?: PRESTADOCountAggregateInputType | true
    }

  export interface PRESTADODelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRESTADO'], meta: { name: 'PRESTADO' } }
    /**
     * Find zero or one PRESTADO that matches the filter.
     * @param {PRESTADOFindUniqueArgs} args - Arguments to find a PRESTADO
     * @example
     * // Get one PRESTADO
     * const pRESTADO = await prisma.pRESTADO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRESTADOFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PRESTADOFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PRESTADO'> extends True ? Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PRESTADO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRESTADOFindUniqueOrThrowArgs} args - Arguments to find a PRESTADO
     * @example
     * // Get one PRESTADO
     * const pRESTADO = await prisma.pRESTADO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRESTADOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRESTADOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PRESTADO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOFindFirstArgs} args - Arguments to find a PRESTADO
     * @example
     * // Get one PRESTADO
     * const pRESTADO = await prisma.pRESTADO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRESTADOFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PRESTADOFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PRESTADO'> extends True ? Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PRESTADO that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOFindFirstOrThrowArgs} args - Arguments to find a PRESTADO
     * @example
     * // Get one PRESTADO
     * const pRESTADO = await prisma.pRESTADO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRESTADOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRESTADOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PRESTADOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRESTADOS
     * const pRESTADOS = await prisma.pRESTADO.findMany()
     * 
     * // Get first 10 PRESTADOS
     * const pRESTADOS = await prisma.pRESTADO.findMany({ take: 10 })
     * 
     * // Only select the `COD_PRES`
     * const pRESTADOWithCOD_PRESOnly = await prisma.pRESTADO.findMany({ select: { COD_PRES: true } })
     * 
    **/
    findMany<T extends PRESTADOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRESTADOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PRESTADO.
     * @param {PRESTADOCreateArgs} args - Arguments to create a PRESTADO.
     * @example
     * // Create one PRESTADO
     * const PRESTADO = await prisma.pRESTADO.create({
     *   data: {
     *     // ... data to create a PRESTADO
     *   }
     * })
     * 
    **/
    create<T extends PRESTADOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRESTADOCreateArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PRESTADOS.
     *     @param {PRESTADOCreateManyArgs} args - Arguments to create many PRESTADOS.
     *     @example
     *     // Create many PRESTADOS
     *     const pRESTADO = await prisma.pRESTADO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRESTADOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRESTADOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRESTADO.
     * @param {PRESTADODeleteArgs} args - Arguments to delete one PRESTADO.
     * @example
     * // Delete one PRESTADO
     * const PRESTADO = await prisma.pRESTADO.delete({
     *   where: {
     *     // ... filter to delete one PRESTADO
     *   }
     * })
     * 
    **/
    delete<T extends PRESTADODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRESTADODeleteArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PRESTADO.
     * @param {PRESTADOUpdateArgs} args - Arguments to update one PRESTADO.
     * @example
     * // Update one PRESTADO
     * const pRESTADO = await prisma.pRESTADO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRESTADOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRESTADOUpdateArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PRESTADOS.
     * @param {PRESTADODeleteManyArgs} args - Arguments to filter PRESTADOS to delete.
     * @example
     * // Delete a few PRESTADOS
     * const { count } = await prisma.pRESTADO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRESTADODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRESTADODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRESTADOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRESTADOS
     * const pRESTADO = await prisma.pRESTADO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRESTADOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRESTADOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRESTADO.
     * @param {PRESTADOUpsertArgs} args - Arguments to update or create a PRESTADO.
     * @example
     * // Update or create a PRESTADO
     * const pRESTADO = await prisma.pRESTADO.upsert({
     *   create: {
     *     // ... data to create a PRESTADO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRESTADO we want to update
     *   }
     * })
    **/
    upsert<T extends PRESTADOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRESTADOUpsertArgs<ExtArgs>>
    ): Prisma__PRESTADOClient<$Types.GetResult<PRESTADOPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PRESTADOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOCountArgs} args - Arguments to filter PRESTADOS to count.
     * @example
     * // Count the number of PRESTADOS
     * const count = await prisma.pRESTADO.count({
     *   where: {
     *     // ... the filter for the PRESTADOS we want to count
     *   }
     * })
    **/
    count<T extends PRESTADOCountArgs>(
      args?: Subset<T, PRESTADOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRESTADOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRESTADO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRESTADOAggregateArgs>(args: Subset<T, PRESTADOAggregateArgs>): Prisma.PrismaPromise<GetPRESTADOAggregateType<T>>

    /**
     * Group by PRESTADO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRESTADOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRESTADOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRESTADOGroupByArgs['orderBy'] }
        : { orderBy?: PRESTADOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRESTADOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRESTADOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PRESTADO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PRESTADOClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PRESTADO base type for findUnique actions
   */
  export type PRESTADOFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter, which PRESTADO to fetch.
     */
    where: PRESTADOWhereUniqueInput
  }

  /**
   * PRESTADO findUnique
   */
  export interface PRESTADOFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRESTADOFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRESTADO findUniqueOrThrow
   */
  export type PRESTADOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter, which PRESTADO to fetch.
     */
    where: PRESTADOWhereUniqueInput
  }


  /**
   * PRESTADO base type for findFirst actions
   */
  export type PRESTADOFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter, which PRESTADO to fetch.
     */
    where?: PRESTADOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRESTADOS to fetch.
     */
    orderBy?: PRESTADOOrderByWithRelationInput | PRESTADOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRESTADOS.
     */
    cursor?: PRESTADOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRESTADOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRESTADOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRESTADOS.
     */
    distinct?: PRESTADOScalarFieldEnum | PRESTADOScalarFieldEnum[]
  }

  /**
   * PRESTADO findFirst
   */
  export interface PRESTADOFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PRESTADOFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PRESTADO findFirstOrThrow
   */
  export type PRESTADOFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter, which PRESTADO to fetch.
     */
    where?: PRESTADOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRESTADOS to fetch.
     */
    orderBy?: PRESTADOOrderByWithRelationInput | PRESTADOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRESTADOS.
     */
    cursor?: PRESTADOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRESTADOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRESTADOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRESTADOS.
     */
    distinct?: PRESTADOScalarFieldEnum | PRESTADOScalarFieldEnum[]
  }


  /**
   * PRESTADO findMany
   */
  export type PRESTADOFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter, which PRESTADOS to fetch.
     */
    where?: PRESTADOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRESTADOS to fetch.
     */
    orderBy?: PRESTADOOrderByWithRelationInput | PRESTADOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRESTADOS.
     */
    cursor?: PRESTADOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRESTADOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRESTADOS.
     */
    skip?: number
    distinct?: PRESTADOScalarFieldEnum | PRESTADOScalarFieldEnum[]
  }


  /**
   * PRESTADO create
   */
  export type PRESTADOCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * The data needed to create a PRESTADO.
     */
    data: XOR<PRESTADOCreateInput, PRESTADOUncheckedCreateInput>
  }


  /**
   * PRESTADO createMany
   */
  export type PRESTADOCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRESTADOS.
     */
    data: PRESTADOCreateManyInput | PRESTADOCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRESTADO update
   */
  export type PRESTADOUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * The data needed to update a PRESTADO.
     */
    data: XOR<PRESTADOUpdateInput, PRESTADOUncheckedUpdateInput>
    /**
     * Choose, which PRESTADO to update.
     */
    where: PRESTADOWhereUniqueInput
  }


  /**
   * PRESTADO updateMany
   */
  export type PRESTADOUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRESTADOS.
     */
    data: XOR<PRESTADOUpdateManyMutationInput, PRESTADOUncheckedUpdateManyInput>
    /**
     * Filter which PRESTADOS to update
     */
    where?: PRESTADOWhereInput
  }


  /**
   * PRESTADO upsert
   */
  export type PRESTADOUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * The filter to search for the PRESTADO to update in case it exists.
     */
    where: PRESTADOWhereUniqueInput
    /**
     * In case the PRESTADO found by the `where` argument doesn't exist, create a new PRESTADO with this data.
     */
    create: XOR<PRESTADOCreateInput, PRESTADOUncheckedCreateInput>
    /**
     * In case the PRESTADO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRESTADOUpdateInput, PRESTADOUncheckedUpdateInput>
  }


  /**
   * PRESTADO delete
   */
  export type PRESTADODeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
    /**
     * Filter which PRESTADO to delete.
     */
    where: PRESTADOWhereUniqueInput
  }


  /**
   * PRESTADO deleteMany
   */
  export type PRESTADODeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRESTADOS to delete
     */
    where?: PRESTADOWhereInput
  }


  /**
   * PRESTADO without action
   */
  export type PRESTADOArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRESTADO
     */
    select?: PRESTADOSelect<ExtArgs> | null
  }



  /**
   * Model USOS
   */


  export type AggregateUSOS = {
    _count: USOSCountAggregateOutputType | null
    _avg: USOSAvgAggregateOutputType | null
    _sum: USOSSumAggregateOutputType | null
    _min: USOSMinAggregateOutputType | null
    _max: USOSMaxAggregateOutputType | null
  }

  export type USOSAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    EDAD: number | null
    NUSOS: number | null
    IMPORTE: number | null
    ANULADO: number | null
    RENDIDO: number | null
    iduso: number | null
    IMP_LIQ: number | null
  }

  export type USOSSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    EDAD: number | null
    NUSOS: number | null
    IMPORTE: number | null
    ANULADO: number | null
    RENDIDO: number | null
    iduso: number | null
    IMP_LIQ: number | null
  }

  export type USOSMinAggregateOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    PLAN: string | null
    EDAD: number | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: Date | null
    FEC_CAJA: Date | null
    HORA: string | null
    SERVICIO: string | null
    NUSOS: number | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: number | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: number | null
    OPERADOR: string | null
    RENDIDO: number | null
    FECHA_CIERRE: Date | null
    EMPRESA: string | null
    iduso: number | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    IMP_LIQ: number | null
  }

  export type USOSMaxAggregateOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    PLAN: string | null
    EDAD: number | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: Date | null
    FEC_CAJA: Date | null
    HORA: string | null
    SERVICIO: string | null
    NUSOS: number | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: number | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: number | null
    OPERADOR: string | null
    RENDIDO: number | null
    FECHA_CIERRE: Date | null
    EMPRESA: string | null
    iduso: number | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    IMP_LIQ: number | null
  }

  export type USOSCountAggregateOutputType = {
    SUC: number
    ORDEN: number
    CONTRATO: number
    NRO_ADH: number
    NRO_DOC: number
    PLAN: number
    EDAD: number
    SEXO: number
    OBRA_SOC: number
    FECHA: number
    FEC_CAJA: number
    HORA: number
    SERVICIO: number
    NUSOS: number
    MODALIDAD: number
    VALOR: number
    IMPORTE: number
    PUESTO: number
    PRESTADO: number
    ANULADO: number
    OPERADOR: number
    RENDIDO: number
    FECHA_CIERRE: number
    EMPRESA: number
    iduso: number
    CONTROL: number
    NORDEN: number
    FECHA_CONTROL: number
    IMP_LIQ: number
    _all: number
  }


  export type USOSAvgAggregateInputType = {
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    EDAD?: true
    NUSOS?: true
    IMPORTE?: true
    ANULADO?: true
    RENDIDO?: true
    iduso?: true
    IMP_LIQ?: true
  }

  export type USOSSumAggregateInputType = {
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    EDAD?: true
    NUSOS?: true
    IMPORTE?: true
    ANULADO?: true
    RENDIDO?: true
    iduso?: true
    IMP_LIQ?: true
  }

  export type USOSMinAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    NUSOS?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    RENDIDO?: true
    FECHA_CIERRE?: true
    EMPRESA?: true
    iduso?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    IMP_LIQ?: true
  }

  export type USOSMaxAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    NUSOS?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    RENDIDO?: true
    FECHA_CIERRE?: true
    EMPRESA?: true
    iduso?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    IMP_LIQ?: true
  }

  export type USOSCountAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    NUSOS?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    RENDIDO?: true
    FECHA_CIERRE?: true
    EMPRESA?: true
    iduso?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    IMP_LIQ?: true
    _all?: true
  }

  export type USOSAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which USOS to aggregate.
     */
    where?: USOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOS to fetch.
     */
    orderBy?: USOSOrderByWithRelationInput | USOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USOS
    **/
    _count?: true | USOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USOSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USOSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USOSMaxAggregateInputType
  }

  export type GetUSOSAggregateType<T extends USOSAggregateArgs> = {
        [P in keyof T & keyof AggregateUSOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSOS[P]>
      : GetScalarType<T[P], AggregateUSOS[P]>
  }




  export type USOSGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: USOSWhereInput
    orderBy?: USOSOrderByWithAggregationInput | USOSOrderByWithAggregationInput[]
    by: USOSScalarFieldEnum[] | USOSScalarFieldEnum
    having?: USOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USOSCountAggregateInputType | true
    _avg?: USOSAvgAggregateInputType
    _sum?: USOSSumAggregateInputType
    _min?: USOSMinAggregateInputType
    _max?: USOSMaxAggregateInputType
  }


  export type USOSGroupByOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: number | null
    NRO_ADH: number | null
    NRO_DOC: number | null
    PLAN: string | null
    EDAD: number | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: Date | null
    FEC_CAJA: Date | null
    HORA: string | null
    SERVICIO: string | null
    NUSOS: number | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: number | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: number | null
    OPERADOR: string | null
    RENDIDO: number | null
    FECHA_CIERRE: Date | null
    EMPRESA: string | null
    iduso: number
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    IMP_LIQ: number | null
    _count: USOSCountAggregateOutputType | null
    _avg: USOSAvgAggregateOutputType | null
    _sum: USOSSumAggregateOutputType | null
    _min: USOSMinAggregateOutputType | null
    _max: USOSMaxAggregateOutputType | null
  }

  type GetUSOSGroupByPayload<T extends USOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USOSGroupByOutputType[P]>
            : GetScalarType<T[P], USOSGroupByOutputType[P]>
        }
      >
    >


  export type USOSSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUC?: boolean
    ORDEN?: boolean
    CONTRATO?: boolean
    NRO_ADH?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    EDAD?: boolean
    SEXO?: boolean
    OBRA_SOC?: boolean
    FECHA?: boolean
    FEC_CAJA?: boolean
    HORA?: boolean
    SERVICIO?: boolean
    NUSOS?: boolean
    MODALIDAD?: boolean
    VALOR?: boolean
    IMPORTE?: boolean
    PUESTO?: boolean
    PRESTADO?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    RENDIDO?: boolean
    FECHA_CIERRE?: boolean
    EMPRESA?: boolean
    iduso?: boolean
    CONTROL?: boolean
    NORDEN?: boolean
    FECHA_CONTROL?: boolean
    IMP_LIQ?: boolean
  }, ExtArgs["result"]["uSOS"]>

  export type USOSSelectScalar = {
    SUC?: boolean
    ORDEN?: boolean
    CONTRATO?: boolean
    NRO_ADH?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    EDAD?: boolean
    SEXO?: boolean
    OBRA_SOC?: boolean
    FECHA?: boolean
    FEC_CAJA?: boolean
    HORA?: boolean
    SERVICIO?: boolean
    NUSOS?: boolean
    MODALIDAD?: boolean
    VALOR?: boolean
    IMPORTE?: boolean
    PUESTO?: boolean
    PRESTADO?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    RENDIDO?: boolean
    FECHA_CIERRE?: boolean
    EMPRESA?: boolean
    iduso?: boolean
    CONTROL?: boolean
    NORDEN?: boolean
    FECHA_CONTROL?: boolean
    IMP_LIQ?: boolean
  }


  type USOSGetPayload<S extends boolean | null | undefined | USOSArgs> = $Types.GetResult<USOSPayload, S>

  type USOSCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<USOSFindManyArgs, 'select' | 'include'> & {
      select?: USOSCountAggregateInputType | true
    }

  export interface USOSDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USOS'], meta: { name: 'USOS' } }
    /**
     * Find zero or one USOS that matches the filter.
     * @param {USOSFindUniqueArgs} args - Arguments to find a USOS
     * @example
     * // Get one USOS
     * const uSOS = await prisma.uSOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends USOSFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, USOSFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'USOS'> extends True ? Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one USOS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {USOSFindUniqueOrThrowArgs} args - Arguments to find a USOS
     * @example
     * // Get one USOS
     * const uSOS = await prisma.uSOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends USOSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first USOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFindFirstArgs} args - Arguments to find a USOS
     * @example
     * // Get one USOS
     * const uSOS = await prisma.uSOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends USOSFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, USOSFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'USOS'> extends True ? Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first USOS that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFindFirstOrThrowArgs} args - Arguments to find a USOS
     * @example
     * // Get one USOS
     * const uSOS = await prisma.uSOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends USOSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more USOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USOS
     * const uSOS = await prisma.uSOS.findMany()
     * 
     * // Get first 10 USOS
     * const uSOS = await prisma.uSOS.findMany({ take: 10 })
     * 
     * // Only select the `SUC`
     * const uSOSWithSUCOnly = await prisma.uSOS.findMany({ select: { SUC: true } })
     * 
    **/
    findMany<T extends USOSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<USOSPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a USOS.
     * @param {USOSCreateArgs} args - Arguments to create a USOS.
     * @example
     * // Create one USOS
     * const USOS = await prisma.uSOS.create({
     *   data: {
     *     // ... data to create a USOS
     *   }
     * })
     * 
    **/
    create<T extends USOSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, USOSCreateArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many USOS.
     *     @param {USOSCreateManyArgs} args - Arguments to create many USOS.
     *     @example
     *     // Create many USOS
     *     const uSOS = await prisma.uSOS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends USOSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USOS.
     * @param {USOSDeleteArgs} args - Arguments to delete one USOS.
     * @example
     * // Delete one USOS
     * const USOS = await prisma.uSOS.delete({
     *   where: {
     *     // ... filter to delete one USOS
     *   }
     * })
     * 
    **/
    delete<T extends USOSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, USOSDeleteArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one USOS.
     * @param {USOSUpdateArgs} args - Arguments to update one USOS.
     * @example
     * // Update one USOS
     * const uSOS = await prisma.uSOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends USOSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, USOSUpdateArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more USOS.
     * @param {USOSDeleteManyArgs} args - Arguments to filter USOS to delete.
     * @example
     * // Delete a few USOS
     * const { count } = await prisma.uSOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends USOSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USOS
     * const uSOS = await prisma.uSOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends USOSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, USOSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USOS.
     * @param {USOSUpsertArgs} args - Arguments to update or create a USOS.
     * @example
     * // Update or create a USOS
     * const uSOS = await prisma.uSOS.upsert({
     *   create: {
     *     // ... data to create a USOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USOS we want to update
     *   }
     * })
    **/
    upsert<T extends USOSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, USOSUpsertArgs<ExtArgs>>
    ): Prisma__USOSClient<$Types.GetResult<USOSPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of USOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSCountArgs} args - Arguments to filter USOS to count.
     * @example
     * // Count the number of USOS
     * const count = await prisma.uSOS.count({
     *   where: {
     *     // ... the filter for the USOS we want to count
     *   }
     * })
    **/
    count<T extends USOSCountArgs>(
      args?: Subset<T, USOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USOSAggregateArgs>(args: Subset<T, USOSAggregateArgs>): Prisma.PrismaPromise<GetUSOSAggregateType<T>>

    /**
     * Group by USOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USOSGroupByArgs['orderBy'] }
        : { orderBy?: USOSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for USOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__USOSClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * USOS base type for findUnique actions
   */
  export type USOSFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter, which USOS to fetch.
     */
    where: USOSWhereUniqueInput
  }

  /**
   * USOS findUnique
   */
  export interface USOSFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends USOSFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * USOS findUniqueOrThrow
   */
  export type USOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter, which USOS to fetch.
     */
    where: USOSWhereUniqueInput
  }


  /**
   * USOS base type for findFirst actions
   */
  export type USOSFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter, which USOS to fetch.
     */
    where?: USOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOS to fetch.
     */
    orderBy?: USOSOrderByWithRelationInput | USOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USOS.
     */
    cursor?: USOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USOS.
     */
    distinct?: USOSScalarFieldEnum | USOSScalarFieldEnum[]
  }

  /**
   * USOS findFirst
   */
  export interface USOSFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends USOSFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * USOS findFirstOrThrow
   */
  export type USOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter, which USOS to fetch.
     */
    where?: USOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOS to fetch.
     */
    orderBy?: USOSOrderByWithRelationInput | USOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USOS.
     */
    cursor?: USOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USOS.
     */
    distinct?: USOSScalarFieldEnum | USOSScalarFieldEnum[]
  }


  /**
   * USOS findMany
   */
  export type USOSFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter, which USOS to fetch.
     */
    where?: USOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOS to fetch.
     */
    orderBy?: USOSOrderByWithRelationInput | USOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USOS.
     */
    cursor?: USOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOS.
     */
    skip?: number
    distinct?: USOSScalarFieldEnum | USOSScalarFieldEnum[]
  }


  /**
   * USOS create
   */
  export type USOSCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * The data needed to create a USOS.
     */
    data?: XOR<USOSCreateInput, USOSUncheckedCreateInput>
  }


  /**
   * USOS createMany
   */
  export type USOSCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USOS.
     */
    data: USOSCreateManyInput | USOSCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * USOS update
   */
  export type USOSUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * The data needed to update a USOS.
     */
    data: XOR<USOSUpdateInput, USOSUncheckedUpdateInput>
    /**
     * Choose, which USOS to update.
     */
    where: USOSWhereUniqueInput
  }


  /**
   * USOS updateMany
   */
  export type USOSUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USOS.
     */
    data: XOR<USOSUpdateManyMutationInput, USOSUncheckedUpdateManyInput>
    /**
     * Filter which USOS to update
     */
    where?: USOSWhereInput
  }


  /**
   * USOS upsert
   */
  export type USOSUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * The filter to search for the USOS to update in case it exists.
     */
    where: USOSWhereUniqueInput
    /**
     * In case the USOS found by the `where` argument doesn't exist, create a new USOS with this data.
     */
    create: XOR<USOSCreateInput, USOSUncheckedCreateInput>
    /**
     * In case the USOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USOSUpdateInput, USOSUncheckedUpdateInput>
  }


  /**
   * USOS delete
   */
  export type USOSDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
    /**
     * Filter which USOS to delete.
     */
    where: USOSWhereUniqueInput
  }


  /**
   * USOS deleteMany
   */
  export type USOSDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which USOS to delete
     */
    where?: USOSWhereInput
  }


  /**
   * USOS without action
   */
  export type USOSArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOS
     */
    select?: USOSSelect<ExtArgs> | null
  }



  /**
   * Model USOSFA
   */


  export type AggregateUSOSFA = {
    _count: USOSFACountAggregateOutputType | null
    _avg: USOSFAAvgAggregateOutputType | null
    _sum: USOSFASumAggregateOutputType | null
    _min: USOSFAMinAggregateOutputType | null
    _max: USOSFAMaxAggregateOutputType | null
  }

  export type USOSFAAvgAggregateOutputType = {
    iduso: number | null
  }

  export type USOSFASumAggregateOutputType = {
    iduso: number | null
  }

  export type USOSFAMinAggregateOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: string | null
    NRO_ADH: string | null
    NRO_DOC: string | null
    PLAN: string | null
    EDAD: string | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: string | null
    FEC_CAJA: string | null
    HORA: string | null
    SERVICIO: string | null
    COMPROBA: string | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: string | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: string | null
    OPERADOR: string | null
    OPE_AUTO: string | null
    FEC_USO: string | null
    PEDIDO: string | null
    NRO_RECETA: string | null
    COMP: string | null
    EMPRESA: string | null
    N_SERIE: string | null
    N_RECIBO: string | null
    IMP_NC: string | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    iduso: number | null
    IMP_LIQ: string | null
  }

  export type USOSFAMaxAggregateOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: string | null
    NRO_ADH: string | null
    NRO_DOC: string | null
    PLAN: string | null
    EDAD: string | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: string | null
    FEC_CAJA: string | null
    HORA: string | null
    SERVICIO: string | null
    COMPROBA: string | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: string | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: string | null
    OPERADOR: string | null
    OPE_AUTO: string | null
    FEC_USO: string | null
    PEDIDO: string | null
    NRO_RECETA: string | null
    COMP: string | null
    EMPRESA: string | null
    N_SERIE: string | null
    N_RECIBO: string | null
    IMP_NC: string | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    iduso: number | null
    IMP_LIQ: string | null
  }

  export type USOSFACountAggregateOutputType = {
    SUC: number
    ORDEN: number
    CONTRATO: number
    NRO_ADH: number
    NRO_DOC: number
    PLAN: number
    EDAD: number
    SEXO: number
    OBRA_SOC: number
    FECHA: number
    FEC_CAJA: number
    HORA: number
    SERVICIO: number
    COMPROBA: number
    MODALIDAD: number
    VALOR: number
    IMPORTE: number
    PUESTO: number
    PRESTADO: number
    ANULADO: number
    OPERADOR: number
    OPE_AUTO: number
    FEC_USO: number
    PEDIDO: number
    NRO_RECETA: number
    COMP: number
    EMPRESA: number
    N_SERIE: number
    N_RECIBO: number
    IMP_NC: number
    CONTROL: number
    NORDEN: number
    FECHA_CONTROL: number
    iduso: number
    IMP_LIQ: number
    _all: number
  }


  export type USOSFAAvgAggregateInputType = {
    iduso?: true
  }

  export type USOSFASumAggregateInputType = {
    iduso?: true
  }

  export type USOSFAMinAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    COMPROBA?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_AUTO?: true
    FEC_USO?: true
    PEDIDO?: true
    NRO_RECETA?: true
    COMP?: true
    EMPRESA?: true
    N_SERIE?: true
    N_RECIBO?: true
    IMP_NC?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    iduso?: true
    IMP_LIQ?: true
  }

  export type USOSFAMaxAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    COMPROBA?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_AUTO?: true
    FEC_USO?: true
    PEDIDO?: true
    NRO_RECETA?: true
    COMP?: true
    EMPRESA?: true
    N_SERIE?: true
    N_RECIBO?: true
    IMP_NC?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    iduso?: true
    IMP_LIQ?: true
  }

  export type USOSFACountAggregateInputType = {
    SUC?: true
    ORDEN?: true
    CONTRATO?: true
    NRO_ADH?: true
    NRO_DOC?: true
    PLAN?: true
    EDAD?: true
    SEXO?: true
    OBRA_SOC?: true
    FECHA?: true
    FEC_CAJA?: true
    HORA?: true
    SERVICIO?: true
    COMPROBA?: true
    MODALIDAD?: true
    VALOR?: true
    IMPORTE?: true
    PUESTO?: true
    PRESTADO?: true
    ANULADO?: true
    OPERADOR?: true
    OPE_AUTO?: true
    FEC_USO?: true
    PEDIDO?: true
    NRO_RECETA?: true
    COMP?: true
    EMPRESA?: true
    N_SERIE?: true
    N_RECIBO?: true
    IMP_NC?: true
    CONTROL?: true
    NORDEN?: true
    FECHA_CONTROL?: true
    iduso?: true
    IMP_LIQ?: true
    _all?: true
  }

  export type USOSFAAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which USOSFA to aggregate.
     */
    where?: USOSFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOSFAS to fetch.
     */
    orderBy?: USOSFAOrderByWithRelationInput | USOSFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USOSFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOSFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOSFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USOSFAS
    **/
    _count?: true | USOSFACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USOSFAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USOSFASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USOSFAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USOSFAMaxAggregateInputType
  }

  export type GetUSOSFAAggregateType<T extends USOSFAAggregateArgs> = {
        [P in keyof T & keyof AggregateUSOSFA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSOSFA[P]>
      : GetScalarType<T[P], AggregateUSOSFA[P]>
  }




  export type USOSFAGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: USOSFAWhereInput
    orderBy?: USOSFAOrderByWithAggregationInput | USOSFAOrderByWithAggregationInput[]
    by: USOSFAScalarFieldEnum[] | USOSFAScalarFieldEnum
    having?: USOSFAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USOSFACountAggregateInputType | true
    _avg?: USOSFAAvgAggregateInputType
    _sum?: USOSFASumAggregateInputType
    _min?: USOSFAMinAggregateInputType
    _max?: USOSFAMaxAggregateInputType
  }


  export type USOSFAGroupByOutputType = {
    SUC: string | null
    ORDEN: string | null
    CONTRATO: string | null
    NRO_ADH: string | null
    NRO_DOC: string | null
    PLAN: string | null
    EDAD: string | null
    SEXO: string | null
    OBRA_SOC: string | null
    FECHA: string | null
    FEC_CAJA: string | null
    HORA: string | null
    SERVICIO: string | null
    COMPROBA: string | null
    MODALIDAD: string | null
    VALOR: string | null
    IMPORTE: string | null
    PUESTO: string | null
    PRESTADO: string | null
    ANULADO: string | null
    OPERADOR: string | null
    OPE_AUTO: string | null
    FEC_USO: string | null
    PEDIDO: string | null
    NRO_RECETA: string | null
    COMP: string | null
    EMPRESA: string | null
    N_SERIE: string | null
    N_RECIBO: string | null
    IMP_NC: string | null
    CONTROL: boolean | null
    NORDEN: string | null
    FECHA_CONTROL: Date | null
    iduso: number
    IMP_LIQ: string | null
    _count: USOSFACountAggregateOutputType | null
    _avg: USOSFAAvgAggregateOutputType | null
    _sum: USOSFASumAggregateOutputType | null
    _min: USOSFAMinAggregateOutputType | null
    _max: USOSFAMaxAggregateOutputType | null
  }

  type GetUSOSFAGroupByPayload<T extends USOSFAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USOSFAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USOSFAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USOSFAGroupByOutputType[P]>
            : GetScalarType<T[P], USOSFAGroupByOutputType[P]>
        }
      >
    >


  export type USOSFASelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUC?: boolean
    ORDEN?: boolean
    CONTRATO?: boolean
    NRO_ADH?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    EDAD?: boolean
    SEXO?: boolean
    OBRA_SOC?: boolean
    FECHA?: boolean
    FEC_CAJA?: boolean
    HORA?: boolean
    SERVICIO?: boolean
    COMPROBA?: boolean
    MODALIDAD?: boolean
    VALOR?: boolean
    IMPORTE?: boolean
    PUESTO?: boolean
    PRESTADO?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_AUTO?: boolean
    FEC_USO?: boolean
    PEDIDO?: boolean
    NRO_RECETA?: boolean
    COMP?: boolean
    EMPRESA?: boolean
    N_SERIE?: boolean
    N_RECIBO?: boolean
    IMP_NC?: boolean
    CONTROL?: boolean
    NORDEN?: boolean
    FECHA_CONTROL?: boolean
    iduso?: boolean
    IMP_LIQ?: boolean
  }, ExtArgs["result"]["uSOSFA"]>

  export type USOSFASelectScalar = {
    SUC?: boolean
    ORDEN?: boolean
    CONTRATO?: boolean
    NRO_ADH?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    EDAD?: boolean
    SEXO?: boolean
    OBRA_SOC?: boolean
    FECHA?: boolean
    FEC_CAJA?: boolean
    HORA?: boolean
    SERVICIO?: boolean
    COMPROBA?: boolean
    MODALIDAD?: boolean
    VALOR?: boolean
    IMPORTE?: boolean
    PUESTO?: boolean
    PRESTADO?: boolean
    ANULADO?: boolean
    OPERADOR?: boolean
    OPE_AUTO?: boolean
    FEC_USO?: boolean
    PEDIDO?: boolean
    NRO_RECETA?: boolean
    COMP?: boolean
    EMPRESA?: boolean
    N_SERIE?: boolean
    N_RECIBO?: boolean
    IMP_NC?: boolean
    CONTROL?: boolean
    NORDEN?: boolean
    FECHA_CONTROL?: boolean
    iduso?: boolean
    IMP_LIQ?: boolean
  }


  type USOSFAGetPayload<S extends boolean | null | undefined | USOSFAArgs> = $Types.GetResult<USOSFAPayload, S>

  type USOSFACountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<USOSFAFindManyArgs, 'select' | 'include'> & {
      select?: USOSFACountAggregateInputType | true
    }

  export interface USOSFADelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USOSFA'], meta: { name: 'USOSFA' } }
    /**
     * Find zero or one USOSFA that matches the filter.
     * @param {USOSFAFindUniqueArgs} args - Arguments to find a USOSFA
     * @example
     * // Get one USOSFA
     * const uSOSFA = await prisma.uSOSFA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends USOSFAFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, USOSFAFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'USOSFA'> extends True ? Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one USOSFA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {USOSFAFindUniqueOrThrowArgs} args - Arguments to find a USOSFA
     * @example
     * // Get one USOSFA
     * const uSOSFA = await prisma.uSOSFA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends USOSFAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first USOSFA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAFindFirstArgs} args - Arguments to find a USOSFA
     * @example
     * // Get one USOSFA
     * const uSOSFA = await prisma.uSOSFA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends USOSFAFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, USOSFAFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'USOSFA'> extends True ? Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first USOSFA that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAFindFirstOrThrowArgs} args - Arguments to find a USOSFA
     * @example
     * // Get one USOSFA
     * const uSOSFA = await prisma.uSOSFA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends USOSFAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more USOSFAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USOSFAS
     * const uSOSFAS = await prisma.uSOSFA.findMany()
     * 
     * // Get first 10 USOSFAS
     * const uSOSFAS = await prisma.uSOSFA.findMany({ take: 10 })
     * 
     * // Only select the `SUC`
     * const uSOSFAWithSUCOnly = await prisma.uSOSFA.findMany({ select: { SUC: true } })
     * 
    **/
    findMany<T extends USOSFAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a USOSFA.
     * @param {USOSFACreateArgs} args - Arguments to create a USOSFA.
     * @example
     * // Create one USOSFA
     * const USOSFA = await prisma.uSOSFA.create({
     *   data: {
     *     // ... data to create a USOSFA
     *   }
     * })
     * 
    **/
    create<T extends USOSFACreateArgs<ExtArgs>>(
      args: SelectSubset<T, USOSFACreateArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many USOSFAS.
     *     @param {USOSFACreateManyArgs} args - Arguments to create many USOSFAS.
     *     @example
     *     // Create many USOSFAS
     *     const uSOSFA = await prisma.uSOSFA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends USOSFACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USOSFA.
     * @param {USOSFADeleteArgs} args - Arguments to delete one USOSFA.
     * @example
     * // Delete one USOSFA
     * const USOSFA = await prisma.uSOSFA.delete({
     *   where: {
     *     // ... filter to delete one USOSFA
     *   }
     * })
     * 
    **/
    delete<T extends USOSFADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, USOSFADeleteArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one USOSFA.
     * @param {USOSFAUpdateArgs} args - Arguments to update one USOSFA.
     * @example
     * // Update one USOSFA
     * const uSOSFA = await prisma.uSOSFA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends USOSFAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, USOSFAUpdateArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more USOSFAS.
     * @param {USOSFADeleteManyArgs} args - Arguments to filter USOSFAS to delete.
     * @example
     * // Delete a few USOSFAS
     * const { count } = await prisma.uSOSFA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends USOSFADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USOSFADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USOSFAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USOSFAS
     * const uSOSFA = await prisma.uSOSFA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends USOSFAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, USOSFAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USOSFA.
     * @param {USOSFAUpsertArgs} args - Arguments to update or create a USOSFA.
     * @example
     * // Update or create a USOSFA
     * const uSOSFA = await prisma.uSOSFA.upsert({
     *   create: {
     *     // ... data to create a USOSFA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USOSFA we want to update
     *   }
     * })
    **/
    upsert<T extends USOSFAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, USOSFAUpsertArgs<ExtArgs>>
    ): Prisma__USOSFAClient<$Types.GetResult<USOSFAPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of USOSFAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFACountArgs} args - Arguments to filter USOSFAS to count.
     * @example
     * // Count the number of USOSFAS
     * const count = await prisma.uSOSFA.count({
     *   where: {
     *     // ... the filter for the USOSFAS we want to count
     *   }
     * })
    **/
    count<T extends USOSFACountArgs>(
      args?: Subset<T, USOSFACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USOSFACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USOSFA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USOSFAAggregateArgs>(args: Subset<T, USOSFAAggregateArgs>): Prisma.PrismaPromise<GetUSOSFAAggregateType<T>>

    /**
     * Group by USOSFA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USOSFAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USOSFAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USOSFAGroupByArgs['orderBy'] }
        : { orderBy?: USOSFAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USOSFAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSOSFAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for USOSFA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__USOSFAClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * USOSFA base type for findUnique actions
   */
  export type USOSFAFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter, which USOSFA to fetch.
     */
    where: USOSFAWhereUniqueInput
  }

  /**
   * USOSFA findUnique
   */
  export interface USOSFAFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends USOSFAFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * USOSFA findUniqueOrThrow
   */
  export type USOSFAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter, which USOSFA to fetch.
     */
    where: USOSFAWhereUniqueInput
  }


  /**
   * USOSFA base type for findFirst actions
   */
  export type USOSFAFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter, which USOSFA to fetch.
     */
    where?: USOSFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOSFAS to fetch.
     */
    orderBy?: USOSFAOrderByWithRelationInput | USOSFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USOSFAS.
     */
    cursor?: USOSFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOSFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOSFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USOSFAS.
     */
    distinct?: USOSFAScalarFieldEnum | USOSFAScalarFieldEnum[]
  }

  /**
   * USOSFA findFirst
   */
  export interface USOSFAFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends USOSFAFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * USOSFA findFirstOrThrow
   */
  export type USOSFAFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter, which USOSFA to fetch.
     */
    where?: USOSFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOSFAS to fetch.
     */
    orderBy?: USOSFAOrderByWithRelationInput | USOSFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USOSFAS.
     */
    cursor?: USOSFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOSFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOSFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USOSFAS.
     */
    distinct?: USOSFAScalarFieldEnum | USOSFAScalarFieldEnum[]
  }


  /**
   * USOSFA findMany
   */
  export type USOSFAFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter, which USOSFAS to fetch.
     */
    where?: USOSFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USOSFAS to fetch.
     */
    orderBy?: USOSFAOrderByWithRelationInput | USOSFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USOSFAS.
     */
    cursor?: USOSFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USOSFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USOSFAS.
     */
    skip?: number
    distinct?: USOSFAScalarFieldEnum | USOSFAScalarFieldEnum[]
  }


  /**
   * USOSFA create
   */
  export type USOSFACreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * The data needed to create a USOSFA.
     */
    data?: XOR<USOSFACreateInput, USOSFAUncheckedCreateInput>
  }


  /**
   * USOSFA createMany
   */
  export type USOSFACreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USOSFAS.
     */
    data: USOSFACreateManyInput | USOSFACreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * USOSFA update
   */
  export type USOSFAUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * The data needed to update a USOSFA.
     */
    data: XOR<USOSFAUpdateInput, USOSFAUncheckedUpdateInput>
    /**
     * Choose, which USOSFA to update.
     */
    where: USOSFAWhereUniqueInput
  }


  /**
   * USOSFA updateMany
   */
  export type USOSFAUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USOSFAS.
     */
    data: XOR<USOSFAUpdateManyMutationInput, USOSFAUncheckedUpdateManyInput>
    /**
     * Filter which USOSFAS to update
     */
    where?: USOSFAWhereInput
  }


  /**
   * USOSFA upsert
   */
  export type USOSFAUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * The filter to search for the USOSFA to update in case it exists.
     */
    where: USOSFAWhereUniqueInput
    /**
     * In case the USOSFA found by the `where` argument doesn't exist, create a new USOSFA with this data.
     */
    create: XOR<USOSFACreateInput, USOSFAUncheckedCreateInput>
    /**
     * In case the USOSFA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USOSFAUpdateInput, USOSFAUncheckedUpdateInput>
  }


  /**
   * USOSFA delete
   */
  export type USOSFADeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
    /**
     * Filter which USOSFA to delete.
     */
    where: USOSFAWhereUniqueInput
  }


  /**
   * USOSFA deleteMany
   */
  export type USOSFADeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which USOSFAS to delete
     */
    where?: USOSFAWhereInput
  }


  /**
   * USOSFA without action
   */
  export type USOSFAArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USOSFA
     */
    select?: USOSFASelect<ExtArgs> | null
  }



  /**
   * Model adherent_provi
   */


  export type AggregateAdherent_provi = {
    _count: Adherent_proviCountAggregateOutputType | null
    _avg: Adherent_proviAvgAggregateOutputType | null
    _sum: Adherent_proviSumAggregateOutputType | null
    _min: Adherent_proviMinAggregateOutputType | null
    _max: Adherent_proviMaxAggregateOutputType | null
  }

  export type Adherent_proviAvgAggregateOutputType = {
    idadherent: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
  }

  export type Adherent_proviSumAggregateOutputType = {
    idadherent: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
  }

  export type Adherent_proviMinAggregateOutputType = {
    idadherent: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
    PLAN: string | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    EMPRESA: string | null
    ESTADO: boolean | null
  }

  export type Adherent_proviMaxAggregateOutputType = {
    idadherent: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
    PLAN: string | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    EMPRESA: string | null
    ESTADO: boolean | null
  }

  export type Adherent_proviCountAggregateOutputType = {
    idadherent: number
    CONTRATO: number
    NRO_DOC: number
    PLAN: number
    APELLIDOS: number
    NOMBRES: number
    NACIMIENTO: number
    EMPRESA: number
    ESTADO: number
    _all: number
  }


  export type Adherent_proviAvgAggregateInputType = {
    idadherent?: true
    CONTRATO?: true
    NRO_DOC?: true
  }

  export type Adherent_proviSumAggregateInputType = {
    idadherent?: true
    CONTRATO?: true
    NRO_DOC?: true
  }

  export type Adherent_proviMinAggregateInputType = {
    idadherent?: true
    CONTRATO?: true
    NRO_DOC?: true
    PLAN?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    EMPRESA?: true
    ESTADO?: true
  }

  export type Adherent_proviMaxAggregateInputType = {
    idadherent?: true
    CONTRATO?: true
    NRO_DOC?: true
    PLAN?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    EMPRESA?: true
    ESTADO?: true
  }

  export type Adherent_proviCountAggregateInputType = {
    idadherent?: true
    CONTRATO?: true
    NRO_DOC?: true
    PLAN?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    EMPRESA?: true
    ESTADO?: true
    _all?: true
  }

  export type Adherent_proviAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which adherent_provi to aggregate.
     */
    where?: adherent_proviWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherent_provis to fetch.
     */
    orderBy?: adherent_proviOrderByWithRelationInput | adherent_proviOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adherent_proviWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherent_provis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherent_provis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adherent_provis
    **/
    _count?: true | Adherent_proviCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Adherent_proviAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Adherent_proviSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Adherent_proviMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Adherent_proviMaxAggregateInputType
  }

  export type GetAdherent_proviAggregateType<T extends Adherent_proviAggregateArgs> = {
        [P in keyof T & keyof AggregateAdherent_provi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdherent_provi[P]>
      : GetScalarType<T[P], AggregateAdherent_provi[P]>
  }




  export type adherent_proviGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: adherent_proviWhereInput
    orderBy?: adherent_proviOrderByWithAggregationInput | adherent_proviOrderByWithAggregationInput[]
    by: Adherent_proviScalarFieldEnum[] | Adherent_proviScalarFieldEnum
    having?: adherent_proviScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Adherent_proviCountAggregateInputType | true
    _avg?: Adherent_proviAvgAggregateInputType
    _sum?: Adherent_proviSumAggregateInputType
    _min?: Adherent_proviMinAggregateInputType
    _max?: Adherent_proviMaxAggregateInputType
  }


  export type Adherent_proviGroupByOutputType = {
    idadherent: number
    CONTRATO: number | null
    NRO_DOC: number | null
    PLAN: string | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    EMPRESA: string | null
    ESTADO: boolean | null
    _count: Adherent_proviCountAggregateOutputType | null
    _avg: Adherent_proviAvgAggregateOutputType | null
    _sum: Adherent_proviSumAggregateOutputType | null
    _min: Adherent_proviMinAggregateOutputType | null
    _max: Adherent_proviMaxAggregateOutputType | null
  }

  type GetAdherent_proviGroupByPayload<T extends adherent_proviGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Adherent_proviGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Adherent_proviGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Adherent_proviGroupByOutputType[P]>
            : GetScalarType<T[P], Adherent_proviGroupByOutputType[P]>
        }
      >
    >


  export type adherent_proviSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idadherent?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    EMPRESA?: boolean
    ESTADO?: boolean
  }, ExtArgs["result"]["adherent_provi"]>

  export type adherent_proviSelectScalar = {
    idadherent?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    PLAN?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    EMPRESA?: boolean
    ESTADO?: boolean
  }


  type adherent_proviGetPayload<S extends boolean | null | undefined | adherent_proviArgs> = $Types.GetResult<adherent_proviPayload, S>

  type adherent_proviCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<adherent_proviFindManyArgs, 'select' | 'include'> & {
      select?: Adherent_proviCountAggregateInputType | true
    }

  export interface adherent_proviDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adherent_provi'], meta: { name: 'adherent_provi' } }
    /**
     * Find zero or one Adherent_provi that matches the filter.
     * @param {adherent_proviFindUniqueArgs} args - Arguments to find a Adherent_provi
     * @example
     * // Get one Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adherent_proviFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, adherent_proviFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'adherent_provi'> extends True ? Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Adherent_provi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adherent_proviFindUniqueOrThrowArgs} args - Arguments to find a Adherent_provi
     * @example
     * // Get one Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adherent_proviFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adherent_proviFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Adherent_provi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviFindFirstArgs} args - Arguments to find a Adherent_provi
     * @example
     * // Get one Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adherent_proviFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, adherent_proviFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'adherent_provi'> extends True ? Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Adherent_provi that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviFindFirstOrThrowArgs} args - Arguments to find a Adherent_provi
     * @example
     * // Get one Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adherent_proviFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adherent_proviFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Adherent_provis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adherent_provis
     * const adherent_provis = await prisma.adherent_provi.findMany()
     * 
     * // Get first 10 Adherent_provis
     * const adherent_provis = await prisma.adherent_provi.findMany({ take: 10 })
     * 
     * // Only select the `idadherent`
     * const adherent_proviWithIdadherentOnly = await prisma.adherent_provi.findMany({ select: { idadherent: true } })
     * 
    **/
    findMany<T extends adherent_proviFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherent_proviFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Adherent_provi.
     * @param {adherent_proviCreateArgs} args - Arguments to create a Adherent_provi.
     * @example
     * // Create one Adherent_provi
     * const Adherent_provi = await prisma.adherent_provi.create({
     *   data: {
     *     // ... data to create a Adherent_provi
     *   }
     * })
     * 
    **/
    create<T extends adherent_proviCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adherent_proviCreateArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Adherent_provis.
     *     @param {adherent_proviCreateManyArgs} args - Arguments to create many Adherent_provis.
     *     @example
     *     // Create many Adherent_provis
     *     const adherent_provi = await prisma.adherent_provi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adherent_proviCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherent_proviCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adherent_provi.
     * @param {adherent_proviDeleteArgs} args - Arguments to delete one Adherent_provi.
     * @example
     * // Delete one Adherent_provi
     * const Adherent_provi = await prisma.adherent_provi.delete({
     *   where: {
     *     // ... filter to delete one Adherent_provi
     *   }
     * })
     * 
    **/
    delete<T extends adherent_proviDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adherent_proviDeleteArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Adherent_provi.
     * @param {adherent_proviUpdateArgs} args - Arguments to update one Adherent_provi.
     * @example
     * // Update one Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adherent_proviUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adherent_proviUpdateArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Adherent_provis.
     * @param {adherent_proviDeleteManyArgs} args - Arguments to filter Adherent_provis to delete.
     * @example
     * // Delete a few Adherent_provis
     * const { count } = await prisma.adherent_provi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adherent_proviDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherent_proviDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherent_provis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adherent_provis
     * const adherent_provi = await prisma.adherent_provi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adherent_proviUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adherent_proviUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adherent_provi.
     * @param {adherent_proviUpsertArgs} args - Arguments to update or create a Adherent_provi.
     * @example
     * // Update or create a Adherent_provi
     * const adherent_provi = await prisma.adherent_provi.upsert({
     *   create: {
     *     // ... data to create a Adherent_provi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adherent_provi we want to update
     *   }
     * })
    **/
    upsert<T extends adherent_proviUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adherent_proviUpsertArgs<ExtArgs>>
    ): Prisma__adherent_proviClient<$Types.GetResult<adherent_proviPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Adherent_provis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviCountArgs} args - Arguments to filter Adherent_provis to count.
     * @example
     * // Count the number of Adherent_provis
     * const count = await prisma.adherent_provi.count({
     *   where: {
     *     // ... the filter for the Adherent_provis we want to count
     *   }
     * })
    **/
    count<T extends adherent_proviCountArgs>(
      args?: Subset<T, adherent_proviCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Adherent_proviCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adherent_provi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adherent_proviAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Adherent_proviAggregateArgs>(args: Subset<T, Adherent_proviAggregateArgs>): Prisma.PrismaPromise<GetAdherent_proviAggregateType<T>>

    /**
     * Group by Adherent_provi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherent_proviGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adherent_proviGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adherent_proviGroupByArgs['orderBy'] }
        : { orderBy?: adherent_proviGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adherent_proviGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdherent_proviGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for adherent_provi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__adherent_proviClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * adherent_provi base type for findUnique actions
   */
  export type adherent_proviFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter, which adherent_provi to fetch.
     */
    where: adherent_proviWhereUniqueInput
  }

  /**
   * adherent_provi findUnique
   */
  export interface adherent_proviFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends adherent_proviFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * adherent_provi findUniqueOrThrow
   */
  export type adherent_proviFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter, which adherent_provi to fetch.
     */
    where: adherent_proviWhereUniqueInput
  }


  /**
   * adherent_provi base type for findFirst actions
   */
  export type adherent_proviFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter, which adherent_provi to fetch.
     */
    where?: adherent_proviWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherent_provis to fetch.
     */
    orderBy?: adherent_proviOrderByWithRelationInput | adherent_proviOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adherent_provis.
     */
    cursor?: adherent_proviWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherent_provis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherent_provis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adherent_provis.
     */
    distinct?: Adherent_proviScalarFieldEnum | Adherent_proviScalarFieldEnum[]
  }

  /**
   * adherent_provi findFirst
   */
  export interface adherent_proviFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends adherent_proviFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * adherent_provi findFirstOrThrow
   */
  export type adherent_proviFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter, which adherent_provi to fetch.
     */
    where?: adherent_proviWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherent_provis to fetch.
     */
    orderBy?: adherent_proviOrderByWithRelationInput | adherent_proviOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adherent_provis.
     */
    cursor?: adherent_proviWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherent_provis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherent_provis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adherent_provis.
     */
    distinct?: Adherent_proviScalarFieldEnum | Adherent_proviScalarFieldEnum[]
  }


  /**
   * adherent_provi findMany
   */
  export type adherent_proviFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter, which adherent_provis to fetch.
     */
    where?: adherent_proviWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherent_provis to fetch.
     */
    orderBy?: adherent_proviOrderByWithRelationInput | adherent_proviOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adherent_provis.
     */
    cursor?: adherent_proviWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherent_provis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherent_provis.
     */
    skip?: number
    distinct?: Adherent_proviScalarFieldEnum | Adherent_proviScalarFieldEnum[]
  }


  /**
   * adherent_provi create
   */
  export type adherent_proviCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * The data needed to create a adherent_provi.
     */
    data?: XOR<adherent_proviCreateInput, adherent_proviUncheckedCreateInput>
  }


  /**
   * adherent_provi createMany
   */
  export type adherent_proviCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adherent_provis.
     */
    data: adherent_proviCreateManyInput | adherent_proviCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * adherent_provi update
   */
  export type adherent_proviUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * The data needed to update a adherent_provi.
     */
    data: XOR<adherent_proviUpdateInput, adherent_proviUncheckedUpdateInput>
    /**
     * Choose, which adherent_provi to update.
     */
    where: adherent_proviWhereUniqueInput
  }


  /**
   * adherent_provi updateMany
   */
  export type adherent_proviUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adherent_provis.
     */
    data: XOR<adherent_proviUpdateManyMutationInput, adherent_proviUncheckedUpdateManyInput>
    /**
     * Filter which adherent_provis to update
     */
    where?: adherent_proviWhereInput
  }


  /**
   * adherent_provi upsert
   */
  export type adherent_proviUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * The filter to search for the adherent_provi to update in case it exists.
     */
    where: adherent_proviWhereUniqueInput
    /**
     * In case the adherent_provi found by the `where` argument doesn't exist, create a new adherent_provi with this data.
     */
    create: XOR<adherent_proviCreateInput, adherent_proviUncheckedCreateInput>
    /**
     * In case the adherent_provi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adherent_proviUpdateInput, adherent_proviUncheckedUpdateInput>
  }


  /**
   * adherent_provi delete
   */
  export type adherent_proviDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
    /**
     * Filter which adherent_provi to delete.
     */
    where: adherent_proviWhereUniqueInput
  }


  /**
   * adherent_provi deleteMany
   */
  export type adherent_proviDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which adherent_provis to delete
     */
    where?: adherent_proviWhereInput
  }


  /**
   * adherent_provi without action
   */
  export type adherent_proviArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent_provi
     */
    select?: adherent_proviSelect<ExtArgs> | null
  }



  /**
   * Model nosocios
   */


  export type AggregateNosocios = {
    _count: NosociosCountAggregateOutputType | null
    _avg: NosociosAvgAggregateOutputType | null
    _sum: NosociosSumAggregateOutputType | null
    _min: NosociosMinAggregateOutputType | null
    _max: NosociosMaxAggregateOutputType | null
  }

  export type NosociosAvgAggregateOutputType = {
    idnosocio: number | null
    dni: number | null
    codigo: number | null
  }

  export type NosociosSumAggregateOutputType = {
    idnosocio: number | null
    dni: bigint | null
    codigo: number | null
  }

  export type NosociosMinAggregateOutputType = {
    idnosocio: number | null
    nosocio: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    obra_soc: string | null
    fecha: Date | null
    codigo: number | null
    gremio: string | null
    estado: boolean | null
    otra_os: string | null
  }

  export type NosociosMaxAggregateOutputType = {
    idnosocio: number | null
    nosocio: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    obra_soc: string | null
    fecha: Date | null
    codigo: number | null
    gremio: string | null
    estado: boolean | null
    otra_os: string | null
  }

  export type NosociosCountAggregateOutputType = {
    idnosocio: number
    nosocio: number
    dni: number
    telefono: number
    mail: number
    obra_soc: number
    fecha: number
    codigo: number
    gremio: number
    estado: number
    otra_os: number
    _all: number
  }


  export type NosociosAvgAggregateInputType = {
    idnosocio?: true
    dni?: true
    codigo?: true
  }

  export type NosociosSumAggregateInputType = {
    idnosocio?: true
    dni?: true
    codigo?: true
  }

  export type NosociosMinAggregateInputType = {
    idnosocio?: true
    nosocio?: true
    dni?: true
    telefono?: true
    mail?: true
    obra_soc?: true
    fecha?: true
    codigo?: true
    gremio?: true
    estado?: true
    otra_os?: true
  }

  export type NosociosMaxAggregateInputType = {
    idnosocio?: true
    nosocio?: true
    dni?: true
    telefono?: true
    mail?: true
    obra_soc?: true
    fecha?: true
    codigo?: true
    gremio?: true
    estado?: true
    otra_os?: true
  }

  export type NosociosCountAggregateInputType = {
    idnosocio?: true
    nosocio?: true
    dni?: true
    telefono?: true
    mail?: true
    obra_soc?: true
    fecha?: true
    codigo?: true
    gremio?: true
    estado?: true
    otra_os?: true
    _all?: true
  }

  export type NosociosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which nosocios to aggregate.
     */
    where?: nosociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nosocios to fetch.
     */
    orderBy?: nosociosOrderByWithRelationInput | nosociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nosociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nosocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nosocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nosocios
    **/
    _count?: true | NosociosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NosociosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NosociosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NosociosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NosociosMaxAggregateInputType
  }

  export type GetNosociosAggregateType<T extends NosociosAggregateArgs> = {
        [P in keyof T & keyof AggregateNosocios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNosocios[P]>
      : GetScalarType<T[P], AggregateNosocios[P]>
  }




  export type nosociosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: nosociosWhereInput
    orderBy?: nosociosOrderByWithAggregationInput | nosociosOrderByWithAggregationInput[]
    by: NosociosScalarFieldEnum[] | NosociosScalarFieldEnum
    having?: nosociosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NosociosCountAggregateInputType | true
    _avg?: NosociosAvgAggregateInputType
    _sum?: NosociosSumAggregateInputType
    _min?: NosociosMinAggregateInputType
    _max?: NosociosMaxAggregateInputType
  }


  export type NosociosGroupByOutputType = {
    idnosocio: number
    nosocio: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    obra_soc: string | null
    fecha: Date | null
    codigo: number | null
    gremio: string | null
    estado: boolean | null
    otra_os: string | null
    _count: NosociosCountAggregateOutputType | null
    _avg: NosociosAvgAggregateOutputType | null
    _sum: NosociosSumAggregateOutputType | null
    _min: NosociosMinAggregateOutputType | null
    _max: NosociosMaxAggregateOutputType | null
  }

  type GetNosociosGroupByPayload<T extends nosociosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NosociosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NosociosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NosociosGroupByOutputType[P]>
            : GetScalarType<T[P], NosociosGroupByOutputType[P]>
        }
      >
    >


  export type nosociosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idnosocio?: boolean
    nosocio?: boolean
    dni?: boolean
    telefono?: boolean
    mail?: boolean
    obra_soc?: boolean
    fecha?: boolean
    codigo?: boolean
    gremio?: boolean
    estado?: boolean
    otra_os?: boolean
  }, ExtArgs["result"]["nosocios"]>

  export type nosociosSelectScalar = {
    idnosocio?: boolean
    nosocio?: boolean
    dni?: boolean
    telefono?: boolean
    mail?: boolean
    obra_soc?: boolean
    fecha?: boolean
    codigo?: boolean
    gremio?: boolean
    estado?: boolean
    otra_os?: boolean
  }


  type nosociosGetPayload<S extends boolean | null | undefined | nosociosArgs> = $Types.GetResult<nosociosPayload, S>

  type nosociosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<nosociosFindManyArgs, 'select' | 'include'> & {
      select?: NosociosCountAggregateInputType | true
    }

  export interface nosociosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nosocios'], meta: { name: 'nosocios' } }
    /**
     * Find zero or one Nosocios that matches the filter.
     * @param {nosociosFindUniqueArgs} args - Arguments to find a Nosocios
     * @example
     * // Get one Nosocios
     * const nosocios = await prisma.nosocios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends nosociosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, nosociosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'nosocios'> extends True ? Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Nosocios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {nosociosFindUniqueOrThrowArgs} args - Arguments to find a Nosocios
     * @example
     * // Get one Nosocios
     * const nosocios = await prisma.nosocios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends nosociosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nosociosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Nosocios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosFindFirstArgs} args - Arguments to find a Nosocios
     * @example
     * // Get one Nosocios
     * const nosocios = await prisma.nosocios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends nosociosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, nosociosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'nosocios'> extends True ? Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Nosocios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosFindFirstOrThrowArgs} args - Arguments to find a Nosocios
     * @example
     * // Get one Nosocios
     * const nosocios = await prisma.nosocios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends nosociosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nosociosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Nosocios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nosocios
     * const nosocios = await prisma.nosocios.findMany()
     * 
     * // Get first 10 Nosocios
     * const nosocios = await prisma.nosocios.findMany({ take: 10 })
     * 
     * // Only select the `idnosocio`
     * const nosociosWithIdnosocioOnly = await prisma.nosocios.findMany({ select: { idnosocio: true } })
     * 
    **/
    findMany<T extends nosociosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nosociosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Nosocios.
     * @param {nosociosCreateArgs} args - Arguments to create a Nosocios.
     * @example
     * // Create one Nosocios
     * const Nosocios = await prisma.nosocios.create({
     *   data: {
     *     // ... data to create a Nosocios
     *   }
     * })
     * 
    **/
    create<T extends nosociosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, nosociosCreateArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Nosocios.
     *     @param {nosociosCreateManyArgs} args - Arguments to create many Nosocios.
     *     @example
     *     // Create many Nosocios
     *     const nosocios = await prisma.nosocios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends nosociosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nosociosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nosocios.
     * @param {nosociosDeleteArgs} args - Arguments to delete one Nosocios.
     * @example
     * // Delete one Nosocios
     * const Nosocios = await prisma.nosocios.delete({
     *   where: {
     *     // ... filter to delete one Nosocios
     *   }
     * })
     * 
    **/
    delete<T extends nosociosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, nosociosDeleteArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Nosocios.
     * @param {nosociosUpdateArgs} args - Arguments to update one Nosocios.
     * @example
     * // Update one Nosocios
     * const nosocios = await prisma.nosocios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends nosociosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, nosociosUpdateArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Nosocios.
     * @param {nosociosDeleteManyArgs} args - Arguments to filter Nosocios to delete.
     * @example
     * // Delete a few Nosocios
     * const { count } = await prisma.nosocios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends nosociosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nosociosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nosocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nosocios
     * const nosocios = await prisma.nosocios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends nosociosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, nosociosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nosocios.
     * @param {nosociosUpsertArgs} args - Arguments to update or create a Nosocios.
     * @example
     * // Update or create a Nosocios
     * const nosocios = await prisma.nosocios.upsert({
     *   create: {
     *     // ... data to create a Nosocios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nosocios we want to update
     *   }
     * })
    **/
    upsert<T extends nosociosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, nosociosUpsertArgs<ExtArgs>>
    ): Prisma__nosociosClient<$Types.GetResult<nosociosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Nosocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosCountArgs} args - Arguments to filter Nosocios to count.
     * @example
     * // Count the number of Nosocios
     * const count = await prisma.nosocios.count({
     *   where: {
     *     // ... the filter for the Nosocios we want to count
     *   }
     * })
    **/
    count<T extends nosociosCountArgs>(
      args?: Subset<T, nosociosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NosociosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nosocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NosociosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NosociosAggregateArgs>(args: Subset<T, NosociosAggregateArgs>): Prisma.PrismaPromise<GetNosociosAggregateType<T>>

    /**
     * Group by Nosocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nosociosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nosociosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nosociosGroupByArgs['orderBy'] }
        : { orderBy?: nosociosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nosociosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNosociosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for nosocios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__nosociosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * nosocios base type for findUnique actions
   */
  export type nosociosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter, which nosocios to fetch.
     */
    where: nosociosWhereUniqueInput
  }

  /**
   * nosocios findUnique
   */
  export interface nosociosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends nosociosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nosocios findUniqueOrThrow
   */
  export type nosociosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter, which nosocios to fetch.
     */
    where: nosociosWhereUniqueInput
  }


  /**
   * nosocios base type for findFirst actions
   */
  export type nosociosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter, which nosocios to fetch.
     */
    where?: nosociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nosocios to fetch.
     */
    orderBy?: nosociosOrderByWithRelationInput | nosociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nosocios.
     */
    cursor?: nosociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nosocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nosocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nosocios.
     */
    distinct?: NosociosScalarFieldEnum | NosociosScalarFieldEnum[]
  }

  /**
   * nosocios findFirst
   */
  export interface nosociosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends nosociosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nosocios findFirstOrThrow
   */
  export type nosociosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter, which nosocios to fetch.
     */
    where?: nosociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nosocios to fetch.
     */
    orderBy?: nosociosOrderByWithRelationInput | nosociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nosocios.
     */
    cursor?: nosociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nosocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nosocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nosocios.
     */
    distinct?: NosociosScalarFieldEnum | NosociosScalarFieldEnum[]
  }


  /**
   * nosocios findMany
   */
  export type nosociosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter, which nosocios to fetch.
     */
    where?: nosociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nosocios to fetch.
     */
    orderBy?: nosociosOrderByWithRelationInput | nosociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nosocios.
     */
    cursor?: nosociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nosocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nosocios.
     */
    skip?: number
    distinct?: NosociosScalarFieldEnum | NosociosScalarFieldEnum[]
  }


  /**
   * nosocios create
   */
  export type nosociosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * The data needed to create a nosocios.
     */
    data?: XOR<nosociosCreateInput, nosociosUncheckedCreateInput>
  }


  /**
   * nosocios createMany
   */
  export type nosociosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nosocios.
     */
    data: nosociosCreateManyInput | nosociosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * nosocios update
   */
  export type nosociosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * The data needed to update a nosocios.
     */
    data: XOR<nosociosUpdateInput, nosociosUncheckedUpdateInput>
    /**
     * Choose, which nosocios to update.
     */
    where: nosociosWhereUniqueInput
  }


  /**
   * nosocios updateMany
   */
  export type nosociosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nosocios.
     */
    data: XOR<nosociosUpdateManyMutationInput, nosociosUncheckedUpdateManyInput>
    /**
     * Filter which nosocios to update
     */
    where?: nosociosWhereInput
  }


  /**
   * nosocios upsert
   */
  export type nosociosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * The filter to search for the nosocios to update in case it exists.
     */
    where: nosociosWhereUniqueInput
    /**
     * In case the nosocios found by the `where` argument doesn't exist, create a new nosocios with this data.
     */
    create: XOR<nosociosCreateInput, nosociosUncheckedCreateInput>
    /**
     * In case the nosocios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nosociosUpdateInput, nosociosUncheckedUpdateInput>
  }


  /**
   * nosocios delete
   */
  export type nosociosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
    /**
     * Filter which nosocios to delete.
     */
    where: nosociosWhereUniqueInput
  }


  /**
   * nosocios deleteMany
   */
  export type nosociosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which nosocios to delete
     */
    where?: nosociosWhereInput
  }


  /**
   * nosocios without action
   */
  export type nosociosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nosocios
     */
    select?: nosociosSelect<ExtArgs> | null
  }



  /**
   * Model planes_odontologicos
   */


  export type AggregatePlanes_odontologicos = {
    _count: Planes_odontologicosCountAggregateOutputType | null
    _avg: Planes_odontologicosAvgAggregateOutputType | null
    _sum: Planes_odontologicosSumAggregateOutputType | null
    _min: Planes_odontologicosMinAggregateOutputType | null
    _max: Planes_odontologicosMaxAggregateOutputType | null
  }

  export type Planes_odontologicosAvgAggregateOutputType = {
    idplan: number | null
    total: number | null
    pago_inicial: number | null
    visitas: number | null
    cuotas: number | null
  }

  export type Planes_odontologicosSumAggregateOutputType = {
    idplan: number | null
    total: number | null
    pago_inicial: number | null
    visitas: number | null
    cuotas: number | null
  }

  export type Planes_odontologicosMinAggregateOutputType = {
    idplan: number | null
    total: number | null
    pago_inicial: number | null
    detalle: string | null
    estado: boolean | null
    visitas: number | null
    fecha_plan: Date | null
    cuotas: number | null
    plan: string | null
  }

  export type Planes_odontologicosMaxAggregateOutputType = {
    idplan: number | null
    total: number | null
    pago_inicial: number | null
    detalle: string | null
    estado: boolean | null
    visitas: number | null
    fecha_plan: Date | null
    cuotas: number | null
    plan: string | null
  }

  export type Planes_odontologicosCountAggregateOutputType = {
    idplan: number
    total: number
    pago_inicial: number
    detalle: number
    estado: number
    visitas: number
    fecha_plan: number
    cuotas: number
    plan: number
    _all: number
  }


  export type Planes_odontologicosAvgAggregateInputType = {
    idplan?: true
    total?: true
    pago_inicial?: true
    visitas?: true
    cuotas?: true
  }

  export type Planes_odontologicosSumAggregateInputType = {
    idplan?: true
    total?: true
    pago_inicial?: true
    visitas?: true
    cuotas?: true
  }

  export type Planes_odontologicosMinAggregateInputType = {
    idplan?: true
    total?: true
    pago_inicial?: true
    detalle?: true
    estado?: true
    visitas?: true
    fecha_plan?: true
    cuotas?: true
    plan?: true
  }

  export type Planes_odontologicosMaxAggregateInputType = {
    idplan?: true
    total?: true
    pago_inicial?: true
    detalle?: true
    estado?: true
    visitas?: true
    fecha_plan?: true
    cuotas?: true
    plan?: true
  }

  export type Planes_odontologicosCountAggregateInputType = {
    idplan?: true
    total?: true
    pago_inicial?: true
    detalle?: true
    estado?: true
    visitas?: true
    fecha_plan?: true
    cuotas?: true
    plan?: true
    _all?: true
  }

  export type Planes_odontologicosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_odontologicos to aggregate.
     */
    where?: planes_odontologicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_odontologicos to fetch.
     */
    orderBy?: planes_odontologicosOrderByWithRelationInput | planes_odontologicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planes_odontologicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_odontologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_odontologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planes_odontologicos
    **/
    _count?: true | Planes_odontologicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Planes_odontologicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Planes_odontologicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Planes_odontologicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Planes_odontologicosMaxAggregateInputType
  }

  export type GetPlanes_odontologicosAggregateType<T extends Planes_odontologicosAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanes_odontologicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanes_odontologicos[P]>
      : GetScalarType<T[P], AggregatePlanes_odontologicos[P]>
  }




  export type planes_odontologicosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: planes_odontologicosWhereInput
    orderBy?: planes_odontologicosOrderByWithAggregationInput | planes_odontologicosOrderByWithAggregationInput[]
    by: Planes_odontologicosScalarFieldEnum[] | Planes_odontologicosScalarFieldEnum
    having?: planes_odontologicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Planes_odontologicosCountAggregateInputType | true
    _avg?: Planes_odontologicosAvgAggregateInputType
    _sum?: Planes_odontologicosSumAggregateInputType
    _min?: Planes_odontologicosMinAggregateInputType
    _max?: Planes_odontologicosMaxAggregateInputType
  }


  export type Planes_odontologicosGroupByOutputType = {
    idplan: number
    total: number | null
    pago_inicial: number | null
    detalle: string | null
    estado: boolean | null
    visitas: number | null
    fecha_plan: Date | null
    cuotas: number | null
    plan: string | null
    _count: Planes_odontologicosCountAggregateOutputType | null
    _avg: Planes_odontologicosAvgAggregateOutputType | null
    _sum: Planes_odontologicosSumAggregateOutputType | null
    _min: Planes_odontologicosMinAggregateOutputType | null
    _max: Planes_odontologicosMaxAggregateOutputType | null
  }

  type GetPlanes_odontologicosGroupByPayload<T extends planes_odontologicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Planes_odontologicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Planes_odontologicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Planes_odontologicosGroupByOutputType[P]>
            : GetScalarType<T[P], Planes_odontologicosGroupByOutputType[P]>
        }
      >
    >


  export type planes_odontologicosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idplan?: boolean
    total?: boolean
    pago_inicial?: boolean
    detalle?: boolean
    estado?: boolean
    visitas?: boolean
    fecha_plan?: boolean
    cuotas?: boolean
    plan?: boolean
  }, ExtArgs["result"]["planes_odontologicos"]>

  export type planes_odontologicosSelectScalar = {
    idplan?: boolean
    total?: boolean
    pago_inicial?: boolean
    detalle?: boolean
    estado?: boolean
    visitas?: boolean
    fecha_plan?: boolean
    cuotas?: boolean
    plan?: boolean
  }


  type planes_odontologicosGetPayload<S extends boolean | null | undefined | planes_odontologicosArgs> = $Types.GetResult<planes_odontologicosPayload, S>

  type planes_odontologicosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<planes_odontologicosFindManyArgs, 'select' | 'include'> & {
      select?: Planes_odontologicosCountAggregateInputType | true
    }

  export interface planes_odontologicosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['planes_odontologicos'], meta: { name: 'planes_odontologicos' } }
    /**
     * Find zero or one Planes_odontologicos that matches the filter.
     * @param {planes_odontologicosFindUniqueArgs} args - Arguments to find a Planes_odontologicos
     * @example
     * // Get one Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends planes_odontologicosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, planes_odontologicosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'planes_odontologicos'> extends True ? Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Planes_odontologicos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {planes_odontologicosFindUniqueOrThrowArgs} args - Arguments to find a Planes_odontologicos
     * @example
     * // Get one Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends planes_odontologicosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_odontologicosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Planes_odontologicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosFindFirstArgs} args - Arguments to find a Planes_odontologicos
     * @example
     * // Get one Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends planes_odontologicosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, planes_odontologicosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'planes_odontologicos'> extends True ? Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Planes_odontologicos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosFindFirstOrThrowArgs} args - Arguments to find a Planes_odontologicos
     * @example
     * // Get one Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends planes_odontologicosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_odontologicosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Planes_odontologicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findMany()
     * 
     * // Get first 10 Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.findMany({ take: 10 })
     * 
     * // Only select the `idplan`
     * const planes_odontologicosWithIdplanOnly = await prisma.planes_odontologicos.findMany({ select: { idplan: true } })
     * 
    **/
    findMany<T extends planes_odontologicosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_odontologicosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Planes_odontologicos.
     * @param {planes_odontologicosCreateArgs} args - Arguments to create a Planes_odontologicos.
     * @example
     * // Create one Planes_odontologicos
     * const Planes_odontologicos = await prisma.planes_odontologicos.create({
     *   data: {
     *     // ... data to create a Planes_odontologicos
     *   }
     * })
     * 
    **/
    create<T extends planes_odontologicosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_odontologicosCreateArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Planes_odontologicos.
     *     @param {planes_odontologicosCreateManyArgs} args - Arguments to create many Planes_odontologicos.
     *     @example
     *     // Create many Planes_odontologicos
     *     const planes_odontologicos = await prisma.planes_odontologicos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends planes_odontologicosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_odontologicosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planes_odontologicos.
     * @param {planes_odontologicosDeleteArgs} args - Arguments to delete one Planes_odontologicos.
     * @example
     * // Delete one Planes_odontologicos
     * const Planes_odontologicos = await prisma.planes_odontologicos.delete({
     *   where: {
     *     // ... filter to delete one Planes_odontologicos
     *   }
     * })
     * 
    **/
    delete<T extends planes_odontologicosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, planes_odontologicosDeleteArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Planes_odontologicos.
     * @param {planes_odontologicosUpdateArgs} args - Arguments to update one Planes_odontologicos.
     * @example
     * // Update one Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends planes_odontologicosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_odontologicosUpdateArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Planes_odontologicos.
     * @param {planes_odontologicosDeleteManyArgs} args - Arguments to filter Planes_odontologicos to delete.
     * @example
     * // Delete a few Planes_odontologicos
     * const { count } = await prisma.planes_odontologicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends planes_odontologicosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_odontologicosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planes_odontologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends planes_odontologicosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, planes_odontologicosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planes_odontologicos.
     * @param {planes_odontologicosUpsertArgs} args - Arguments to update or create a Planes_odontologicos.
     * @example
     * // Update or create a Planes_odontologicos
     * const planes_odontologicos = await prisma.planes_odontologicos.upsert({
     *   create: {
     *     // ... data to create a Planes_odontologicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planes_odontologicos we want to update
     *   }
     * })
    **/
    upsert<T extends planes_odontologicosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, planes_odontologicosUpsertArgs<ExtArgs>>
    ): Prisma__planes_odontologicosClient<$Types.GetResult<planes_odontologicosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Planes_odontologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosCountArgs} args - Arguments to filter Planes_odontologicos to count.
     * @example
     * // Count the number of Planes_odontologicos
     * const count = await prisma.planes_odontologicos.count({
     *   where: {
     *     // ... the filter for the Planes_odontologicos we want to count
     *   }
     * })
    **/
    count<T extends planes_odontologicosCountArgs>(
      args?: Subset<T, planes_odontologicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Planes_odontologicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planes_odontologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Planes_odontologicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Planes_odontologicosAggregateArgs>(args: Subset<T, Planes_odontologicosAggregateArgs>): Prisma.PrismaPromise<GetPlanes_odontologicosAggregateType<T>>

    /**
     * Group by Planes_odontologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_odontologicosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends planes_odontologicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planes_odontologicosGroupByArgs['orderBy'] }
        : { orderBy?: planes_odontologicosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, planes_odontologicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanes_odontologicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for planes_odontologicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__planes_odontologicosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * planes_odontologicos base type for findUnique actions
   */
  export type planes_odontologicosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter, which planes_odontologicos to fetch.
     */
    where: planes_odontologicosWhereUniqueInput
  }

  /**
   * planes_odontologicos findUnique
   */
  export interface planes_odontologicosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_odontologicosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_odontologicos findUniqueOrThrow
   */
  export type planes_odontologicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter, which planes_odontologicos to fetch.
     */
    where: planes_odontologicosWhereUniqueInput
  }


  /**
   * planes_odontologicos base type for findFirst actions
   */
  export type planes_odontologicosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter, which planes_odontologicos to fetch.
     */
    where?: planes_odontologicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_odontologicos to fetch.
     */
    orderBy?: planes_odontologicosOrderByWithRelationInput | planes_odontologicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_odontologicos.
     */
    cursor?: planes_odontologicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_odontologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_odontologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_odontologicos.
     */
    distinct?: Planes_odontologicosScalarFieldEnum | Planes_odontologicosScalarFieldEnum[]
  }

  /**
   * planes_odontologicos findFirst
   */
  export interface planes_odontologicosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_odontologicosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_odontologicos findFirstOrThrow
   */
  export type planes_odontologicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter, which planes_odontologicos to fetch.
     */
    where?: planes_odontologicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_odontologicos to fetch.
     */
    orderBy?: planes_odontologicosOrderByWithRelationInput | planes_odontologicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_odontologicos.
     */
    cursor?: planes_odontologicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_odontologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_odontologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_odontologicos.
     */
    distinct?: Planes_odontologicosScalarFieldEnum | Planes_odontologicosScalarFieldEnum[]
  }


  /**
   * planes_odontologicos findMany
   */
  export type planes_odontologicosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter, which planes_odontologicos to fetch.
     */
    where?: planes_odontologicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_odontologicos to fetch.
     */
    orderBy?: planes_odontologicosOrderByWithRelationInput | planes_odontologicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planes_odontologicos.
     */
    cursor?: planes_odontologicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_odontologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_odontologicos.
     */
    skip?: number
    distinct?: Planes_odontologicosScalarFieldEnum | Planes_odontologicosScalarFieldEnum[]
  }


  /**
   * planes_odontologicos create
   */
  export type planes_odontologicosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * The data needed to create a planes_odontologicos.
     */
    data?: XOR<planes_odontologicosCreateInput, planes_odontologicosUncheckedCreateInput>
  }


  /**
   * planes_odontologicos createMany
   */
  export type planes_odontologicosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planes_odontologicos.
     */
    data: planes_odontologicosCreateManyInput | planes_odontologicosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * planes_odontologicos update
   */
  export type planes_odontologicosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * The data needed to update a planes_odontologicos.
     */
    data: XOR<planes_odontologicosUpdateInput, planes_odontologicosUncheckedUpdateInput>
    /**
     * Choose, which planes_odontologicos to update.
     */
    where: planes_odontologicosWhereUniqueInput
  }


  /**
   * planes_odontologicos updateMany
   */
  export type planes_odontologicosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planes_odontologicos.
     */
    data: XOR<planes_odontologicosUpdateManyMutationInput, planes_odontologicosUncheckedUpdateManyInput>
    /**
     * Filter which planes_odontologicos to update
     */
    where?: planes_odontologicosWhereInput
  }


  /**
   * planes_odontologicos upsert
   */
  export type planes_odontologicosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * The filter to search for the planes_odontologicos to update in case it exists.
     */
    where: planes_odontologicosWhereUniqueInput
    /**
     * In case the planes_odontologicos found by the `where` argument doesn't exist, create a new planes_odontologicos with this data.
     */
    create: XOR<planes_odontologicosCreateInput, planes_odontologicosUncheckedCreateInput>
    /**
     * In case the planes_odontologicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planes_odontologicosUpdateInput, planes_odontologicosUncheckedUpdateInput>
  }


  /**
   * planes_odontologicos delete
   */
  export type planes_odontologicosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
    /**
     * Filter which planes_odontologicos to delete.
     */
    where: planes_odontologicosWhereUniqueInput
  }


  /**
   * planes_odontologicos deleteMany
   */
  export type planes_odontologicosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_odontologicos to delete
     */
    where?: planes_odontologicosWhereInput
  }


  /**
   * planes_odontologicos without action
   */
  export type planes_odontologicosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_odontologicos
     */
    select?: planes_odontologicosSelect<ExtArgs> | null
  }



  /**
   * Model planes_socio
   */


  export type AggregatePlanes_socio = {
    _count: Planes_socioCountAggregateOutputType | null
    _avg: Planes_socioAvgAggregateOutputType | null
    _sum: Planes_socioSumAggregateOutputType | null
    _min: Planes_socioMinAggregateOutputType | null
    _max: Planes_socioMaxAggregateOutputType | null
  }

  export type Planes_socioAvgAggregateOutputType = {
    idplansocio: number | null
    contrato: number | null
    dni: number | null
    total: number | null
    pagado: number | null
    saldo: number | null
  }

  export type Planes_socioSumAggregateOutputType = {
    idplansocio: number | null
    contrato: number | null
    dni: number | null
    total: number | null
    pagado: number | null
    saldo: number | null
  }

  export type Planes_socioMinAggregateOutputType = {
    idplansocio: number | null
    contrato: number | null
    dni: number | null
    socio: string | null
    fecha: Date | null
    total: number | null
    pagado: number | null
    saldo: number | null
    estado: boolean | null
    prestador: string | null
    prestador_nombre: string | null
    operador: string | null
    sucursal: string | null
    plan: string | null
  }

  export type Planes_socioMaxAggregateOutputType = {
    idplansocio: number | null
    contrato: number | null
    dni: number | null
    socio: string | null
    fecha: Date | null
    total: number | null
    pagado: number | null
    saldo: number | null
    estado: boolean | null
    prestador: string | null
    prestador_nombre: string | null
    operador: string | null
    sucursal: string | null
    plan: string | null
  }

  export type Planes_socioCountAggregateOutputType = {
    idplansocio: number
    contrato: number
    dni: number
    socio: number
    fecha: number
    total: number
    pagado: number
    saldo: number
    estado: number
    prestador: number
    prestador_nombre: number
    operador: number
    sucursal: number
    plan: number
    _all: number
  }


  export type Planes_socioAvgAggregateInputType = {
    idplansocio?: true
    contrato?: true
    dni?: true
    total?: true
    pagado?: true
    saldo?: true
  }

  export type Planes_socioSumAggregateInputType = {
    idplansocio?: true
    contrato?: true
    dni?: true
    total?: true
    pagado?: true
    saldo?: true
  }

  export type Planes_socioMinAggregateInputType = {
    idplansocio?: true
    contrato?: true
    dni?: true
    socio?: true
    fecha?: true
    total?: true
    pagado?: true
    saldo?: true
    estado?: true
    prestador?: true
    prestador_nombre?: true
    operador?: true
    sucursal?: true
    plan?: true
  }

  export type Planes_socioMaxAggregateInputType = {
    idplansocio?: true
    contrato?: true
    dni?: true
    socio?: true
    fecha?: true
    total?: true
    pagado?: true
    saldo?: true
    estado?: true
    prestador?: true
    prestador_nombre?: true
    operador?: true
    sucursal?: true
    plan?: true
  }

  export type Planes_socioCountAggregateInputType = {
    idplansocio?: true
    contrato?: true
    dni?: true
    socio?: true
    fecha?: true
    total?: true
    pagado?: true
    saldo?: true
    estado?: true
    prestador?: true
    prestador_nombre?: true
    operador?: true
    sucursal?: true
    plan?: true
    _all?: true
  }

  export type Planes_socioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_socio to aggregate.
     */
    where?: planes_socioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_socios to fetch.
     */
    orderBy?: planes_socioOrderByWithRelationInput | planes_socioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planes_socioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planes_socios
    **/
    _count?: true | Planes_socioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Planes_socioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Planes_socioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Planes_socioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Planes_socioMaxAggregateInputType
  }

  export type GetPlanes_socioAggregateType<T extends Planes_socioAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanes_socio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanes_socio[P]>
      : GetScalarType<T[P], AggregatePlanes_socio[P]>
  }




  export type planes_socioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: planes_socioWhereInput
    orderBy?: planes_socioOrderByWithAggregationInput | planes_socioOrderByWithAggregationInput[]
    by: Planes_socioScalarFieldEnum[] | Planes_socioScalarFieldEnum
    having?: planes_socioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Planes_socioCountAggregateInputType | true
    _avg?: Planes_socioAvgAggregateInputType
    _sum?: Planes_socioSumAggregateInputType
    _min?: Planes_socioMinAggregateInputType
    _max?: Planes_socioMaxAggregateInputType
  }


  export type Planes_socioGroupByOutputType = {
    idplansocio: number
    contrato: number | null
    dni: number | null
    socio: string | null
    fecha: Date | null
    total: number | null
    pagado: number | null
    saldo: number | null
    estado: boolean | null
    prestador: string | null
    prestador_nombre: string | null
    operador: string | null
    sucursal: string | null
    plan: string | null
    _count: Planes_socioCountAggregateOutputType | null
    _avg: Planes_socioAvgAggregateOutputType | null
    _sum: Planes_socioSumAggregateOutputType | null
    _min: Planes_socioMinAggregateOutputType | null
    _max: Planes_socioMaxAggregateOutputType | null
  }

  type GetPlanes_socioGroupByPayload<T extends planes_socioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Planes_socioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Planes_socioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Planes_socioGroupByOutputType[P]>
            : GetScalarType<T[P], Planes_socioGroupByOutputType[P]>
        }
      >
    >


  export type planes_socioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idplansocio?: boolean
    contrato?: boolean
    dni?: boolean
    socio?: boolean
    fecha?: boolean
    total?: boolean
    pagado?: boolean
    saldo?: boolean
    estado?: boolean
    prestador?: boolean
    prestador_nombre?: boolean
    operador?: boolean
    sucursal?: boolean
    plan?: boolean
  }, ExtArgs["result"]["planes_socio"]>

  export type planes_socioSelectScalar = {
    idplansocio?: boolean
    contrato?: boolean
    dni?: boolean
    socio?: boolean
    fecha?: boolean
    total?: boolean
    pagado?: boolean
    saldo?: boolean
    estado?: boolean
    prestador?: boolean
    prestador_nombre?: boolean
    operador?: boolean
    sucursal?: boolean
    plan?: boolean
  }


  type planes_socioGetPayload<S extends boolean | null | undefined | planes_socioArgs> = $Types.GetResult<planes_socioPayload, S>

  type planes_socioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<planes_socioFindManyArgs, 'select' | 'include'> & {
      select?: Planes_socioCountAggregateInputType | true
    }

  export interface planes_socioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['planes_socio'], meta: { name: 'planes_socio' } }
    /**
     * Find zero or one Planes_socio that matches the filter.
     * @param {planes_socioFindUniqueArgs} args - Arguments to find a Planes_socio
     * @example
     * // Get one Planes_socio
     * const planes_socio = await prisma.planes_socio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends planes_socioFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, planes_socioFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'planes_socio'> extends True ? Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Planes_socio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {planes_socioFindUniqueOrThrowArgs} args - Arguments to find a Planes_socio
     * @example
     * // Get one Planes_socio
     * const planes_socio = await prisma.planes_socio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends planes_socioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_socioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Planes_socio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioFindFirstArgs} args - Arguments to find a Planes_socio
     * @example
     * // Get one Planes_socio
     * const planes_socio = await prisma.planes_socio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends planes_socioFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, planes_socioFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'planes_socio'> extends True ? Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Planes_socio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioFindFirstOrThrowArgs} args - Arguments to find a Planes_socio
     * @example
     * // Get one Planes_socio
     * const planes_socio = await prisma.planes_socio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends planes_socioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_socioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Planes_socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planes_socios
     * const planes_socios = await prisma.planes_socio.findMany()
     * 
     * // Get first 10 Planes_socios
     * const planes_socios = await prisma.planes_socio.findMany({ take: 10 })
     * 
     * // Only select the `idplansocio`
     * const planes_socioWithIdplansocioOnly = await prisma.planes_socio.findMany({ select: { idplansocio: true } })
     * 
    **/
    findMany<T extends planes_socioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_socioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Planes_socio.
     * @param {planes_socioCreateArgs} args - Arguments to create a Planes_socio.
     * @example
     * // Create one Planes_socio
     * const Planes_socio = await prisma.planes_socio.create({
     *   data: {
     *     // ... data to create a Planes_socio
     *   }
     * })
     * 
    **/
    create<T extends planes_socioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_socioCreateArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Planes_socios.
     *     @param {planes_socioCreateManyArgs} args - Arguments to create many Planes_socios.
     *     @example
     *     // Create many Planes_socios
     *     const planes_socio = await prisma.planes_socio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends planes_socioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_socioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planes_socio.
     * @param {planes_socioDeleteArgs} args - Arguments to delete one Planes_socio.
     * @example
     * // Delete one Planes_socio
     * const Planes_socio = await prisma.planes_socio.delete({
     *   where: {
     *     // ... filter to delete one Planes_socio
     *   }
     * })
     * 
    **/
    delete<T extends planes_socioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, planes_socioDeleteArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Planes_socio.
     * @param {planes_socioUpdateArgs} args - Arguments to update one Planes_socio.
     * @example
     * // Update one Planes_socio
     * const planes_socio = await prisma.planes_socio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends planes_socioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_socioUpdateArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Planes_socios.
     * @param {planes_socioDeleteManyArgs} args - Arguments to filter Planes_socios to delete.
     * @example
     * // Delete a few Planes_socios
     * const { count } = await prisma.planes_socio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends planes_socioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_socioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planes_socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planes_socios
     * const planes_socio = await prisma.planes_socio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends planes_socioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, planes_socioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planes_socio.
     * @param {planes_socioUpsertArgs} args - Arguments to update or create a Planes_socio.
     * @example
     * // Update or create a Planes_socio
     * const planes_socio = await prisma.planes_socio.upsert({
     *   create: {
     *     // ... data to create a Planes_socio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planes_socio we want to update
     *   }
     * })
    **/
    upsert<T extends planes_socioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, planes_socioUpsertArgs<ExtArgs>>
    ): Prisma__planes_socioClient<$Types.GetResult<planes_socioPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Planes_socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioCountArgs} args - Arguments to filter Planes_socios to count.
     * @example
     * // Count the number of Planes_socios
     * const count = await prisma.planes_socio.count({
     *   where: {
     *     // ... the filter for the Planes_socios we want to count
     *   }
     * })
    **/
    count<T extends planes_socioCountArgs>(
      args?: Subset<T, planes_socioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Planes_socioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planes_socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Planes_socioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Planes_socioAggregateArgs>(args: Subset<T, Planes_socioAggregateArgs>): Prisma.PrismaPromise<GetPlanes_socioAggregateType<T>>

    /**
     * Group by Planes_socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_socioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends planes_socioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planes_socioGroupByArgs['orderBy'] }
        : { orderBy?: planes_socioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, planes_socioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanes_socioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for planes_socio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__planes_socioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * planes_socio base type for findUnique actions
   */
  export type planes_socioFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter, which planes_socio to fetch.
     */
    where: planes_socioWhereUniqueInput
  }

  /**
   * planes_socio findUnique
   */
  export interface planes_socioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_socioFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_socio findUniqueOrThrow
   */
  export type planes_socioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter, which planes_socio to fetch.
     */
    where: planes_socioWhereUniqueInput
  }


  /**
   * planes_socio base type for findFirst actions
   */
  export type planes_socioFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter, which planes_socio to fetch.
     */
    where?: planes_socioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_socios to fetch.
     */
    orderBy?: planes_socioOrderByWithRelationInput | planes_socioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_socios.
     */
    cursor?: planes_socioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_socios.
     */
    distinct?: Planes_socioScalarFieldEnum | Planes_socioScalarFieldEnum[]
  }

  /**
   * planes_socio findFirst
   */
  export interface planes_socioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_socioFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_socio findFirstOrThrow
   */
  export type planes_socioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter, which planes_socio to fetch.
     */
    where?: planes_socioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_socios to fetch.
     */
    orderBy?: planes_socioOrderByWithRelationInput | planes_socioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_socios.
     */
    cursor?: planes_socioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_socios.
     */
    distinct?: Planes_socioScalarFieldEnum | Planes_socioScalarFieldEnum[]
  }


  /**
   * planes_socio findMany
   */
  export type planes_socioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter, which planes_socios to fetch.
     */
    where?: planes_socioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_socios to fetch.
     */
    orderBy?: planes_socioOrderByWithRelationInput | planes_socioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planes_socios.
     */
    cursor?: planes_socioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_socios.
     */
    skip?: number
    distinct?: Planes_socioScalarFieldEnum | Planes_socioScalarFieldEnum[]
  }


  /**
   * planes_socio create
   */
  export type planes_socioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * The data needed to create a planes_socio.
     */
    data?: XOR<planes_socioCreateInput, planes_socioUncheckedCreateInput>
  }


  /**
   * planes_socio createMany
   */
  export type planes_socioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planes_socios.
     */
    data: planes_socioCreateManyInput | planes_socioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * planes_socio update
   */
  export type planes_socioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * The data needed to update a planes_socio.
     */
    data: XOR<planes_socioUpdateInput, planes_socioUncheckedUpdateInput>
    /**
     * Choose, which planes_socio to update.
     */
    where: planes_socioWhereUniqueInput
  }


  /**
   * planes_socio updateMany
   */
  export type planes_socioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planes_socios.
     */
    data: XOR<planes_socioUpdateManyMutationInput, planes_socioUncheckedUpdateManyInput>
    /**
     * Filter which planes_socios to update
     */
    where?: planes_socioWhereInput
  }


  /**
   * planes_socio upsert
   */
  export type planes_socioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * The filter to search for the planes_socio to update in case it exists.
     */
    where: planes_socioWhereUniqueInput
    /**
     * In case the planes_socio found by the `where` argument doesn't exist, create a new planes_socio with this data.
     */
    create: XOR<planes_socioCreateInput, planes_socioUncheckedCreateInput>
    /**
     * In case the planes_socio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planes_socioUpdateInput, planes_socioUncheckedUpdateInput>
  }


  /**
   * planes_socio delete
   */
  export type planes_socioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
    /**
     * Filter which planes_socio to delete.
     */
    where: planes_socioWhereUniqueInput
  }


  /**
   * planes_socio deleteMany
   */
  export type planes_socioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_socios to delete
     */
    where?: planes_socioWhereInput
  }


  /**
   * planes_socio without action
   */
  export type planes_socioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_socio
     */
    select?: planes_socioSelect<ExtArgs> | null
  }



  /**
   * Model planes_visitas
   */


  export type AggregatePlanes_visitas = {
    _count: Planes_visitasCountAggregateOutputType | null
    _avg: Planes_visitasAvgAggregateOutputType | null
    _sum: Planes_visitasSumAggregateOutputType | null
    _min: Planes_visitasMinAggregateOutputType | null
    _max: Planes_visitasMaxAggregateOutputType | null
  }

  export type Planes_visitasAvgAggregateOutputType = {
    idvisita: number | null
    idplan: number | null
    nvisita: number | null
    pago: number | null
  }

  export type Planes_visitasSumAggregateOutputType = {
    idvisita: number | null
    idplan: number | null
    nvisita: number | null
    pago: number | null
  }

  export type Planes_visitasMinAggregateOutputType = {
    idvisita: number | null
    idplan: number | null
    nvisita: number | null
    pago: number | null
    fecha: Date | null
    pagado: boolean | null
    operador: string | null
    plan: string | null
  }

  export type Planes_visitasMaxAggregateOutputType = {
    idvisita: number | null
    idplan: number | null
    nvisita: number | null
    pago: number | null
    fecha: Date | null
    pagado: boolean | null
    operador: string | null
    plan: string | null
  }

  export type Planes_visitasCountAggregateOutputType = {
    idvisita: number
    idplan: number
    nvisita: number
    pago: number
    fecha: number
    pagado: number
    operador: number
    plan: number
    _all: number
  }


  export type Planes_visitasAvgAggregateInputType = {
    idvisita?: true
    idplan?: true
    nvisita?: true
    pago?: true
  }

  export type Planes_visitasSumAggregateInputType = {
    idvisita?: true
    idplan?: true
    nvisita?: true
    pago?: true
  }

  export type Planes_visitasMinAggregateInputType = {
    idvisita?: true
    idplan?: true
    nvisita?: true
    pago?: true
    fecha?: true
    pagado?: true
    operador?: true
    plan?: true
  }

  export type Planes_visitasMaxAggregateInputType = {
    idvisita?: true
    idplan?: true
    nvisita?: true
    pago?: true
    fecha?: true
    pagado?: true
    operador?: true
    plan?: true
  }

  export type Planes_visitasCountAggregateInputType = {
    idvisita?: true
    idplan?: true
    nvisita?: true
    pago?: true
    fecha?: true
    pagado?: true
    operador?: true
    plan?: true
    _all?: true
  }

  export type Planes_visitasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_visitas to aggregate.
     */
    where?: planes_visitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_visitas to fetch.
     */
    orderBy?: planes_visitasOrderByWithRelationInput | planes_visitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planes_visitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planes_visitas
    **/
    _count?: true | Planes_visitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Planes_visitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Planes_visitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Planes_visitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Planes_visitasMaxAggregateInputType
  }

  export type GetPlanes_visitasAggregateType<T extends Planes_visitasAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanes_visitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanes_visitas[P]>
      : GetScalarType<T[P], AggregatePlanes_visitas[P]>
  }




  export type planes_visitasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: planes_visitasWhereInput
    orderBy?: planes_visitasOrderByWithAggregationInput | planes_visitasOrderByWithAggregationInput[]
    by: Planes_visitasScalarFieldEnum[] | Planes_visitasScalarFieldEnum
    having?: planes_visitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Planes_visitasCountAggregateInputType | true
    _avg?: Planes_visitasAvgAggregateInputType
    _sum?: Planes_visitasSumAggregateInputType
    _min?: Planes_visitasMinAggregateInputType
    _max?: Planes_visitasMaxAggregateInputType
  }


  export type Planes_visitasGroupByOutputType = {
    idvisita: number
    idplan: number | null
    nvisita: number | null
    pago: number | null
    fecha: Date | null
    pagado: boolean | null
    operador: string | null
    plan: string | null
    _count: Planes_visitasCountAggregateOutputType | null
    _avg: Planes_visitasAvgAggregateOutputType | null
    _sum: Planes_visitasSumAggregateOutputType | null
    _min: Planes_visitasMinAggregateOutputType | null
    _max: Planes_visitasMaxAggregateOutputType | null
  }

  type GetPlanes_visitasGroupByPayload<T extends planes_visitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Planes_visitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Planes_visitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Planes_visitasGroupByOutputType[P]>
            : GetScalarType<T[P], Planes_visitasGroupByOutputType[P]>
        }
      >
    >


  export type planes_visitasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idvisita?: boolean
    idplan?: boolean
    nvisita?: boolean
    pago?: boolean
    fecha?: boolean
    pagado?: boolean
    operador?: boolean
    plan?: boolean
  }, ExtArgs["result"]["planes_visitas"]>

  export type planes_visitasSelectScalar = {
    idvisita?: boolean
    idplan?: boolean
    nvisita?: boolean
    pago?: boolean
    fecha?: boolean
    pagado?: boolean
    operador?: boolean
    plan?: boolean
  }


  type planes_visitasGetPayload<S extends boolean | null | undefined | planes_visitasArgs> = $Types.GetResult<planes_visitasPayload, S>

  type planes_visitasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<planes_visitasFindManyArgs, 'select' | 'include'> & {
      select?: Planes_visitasCountAggregateInputType | true
    }

  export interface planes_visitasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['planes_visitas'], meta: { name: 'planes_visitas' } }
    /**
     * Find zero or one Planes_visitas that matches the filter.
     * @param {planes_visitasFindUniqueArgs} args - Arguments to find a Planes_visitas
     * @example
     * // Get one Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends planes_visitasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, planes_visitasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'planes_visitas'> extends True ? Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Planes_visitas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {planes_visitasFindUniqueOrThrowArgs} args - Arguments to find a Planes_visitas
     * @example
     * // Get one Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends planes_visitasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_visitasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Planes_visitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasFindFirstArgs} args - Arguments to find a Planes_visitas
     * @example
     * // Get one Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends planes_visitasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, planes_visitasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'planes_visitas'> extends True ? Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Planes_visitas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasFindFirstOrThrowArgs} args - Arguments to find a Planes_visitas
     * @example
     * // Get one Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends planes_visitasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_visitasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Planes_visitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findMany()
     * 
     * // Get first 10 Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.findMany({ take: 10 })
     * 
     * // Only select the `idvisita`
     * const planes_visitasWithIdvisitaOnly = await prisma.planes_visitas.findMany({ select: { idvisita: true } })
     * 
    **/
    findMany<T extends planes_visitasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_visitasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Planes_visitas.
     * @param {planes_visitasCreateArgs} args - Arguments to create a Planes_visitas.
     * @example
     * // Create one Planes_visitas
     * const Planes_visitas = await prisma.planes_visitas.create({
     *   data: {
     *     // ... data to create a Planes_visitas
     *   }
     * })
     * 
    **/
    create<T extends planes_visitasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_visitasCreateArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Planes_visitas.
     *     @param {planes_visitasCreateManyArgs} args - Arguments to create many Planes_visitas.
     *     @example
     *     // Create many Planes_visitas
     *     const planes_visitas = await prisma.planes_visitas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends planes_visitasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_visitasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planes_visitas.
     * @param {planes_visitasDeleteArgs} args - Arguments to delete one Planes_visitas.
     * @example
     * // Delete one Planes_visitas
     * const Planes_visitas = await prisma.planes_visitas.delete({
     *   where: {
     *     // ... filter to delete one Planes_visitas
     *   }
     * })
     * 
    **/
    delete<T extends planes_visitasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, planes_visitasDeleteArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Planes_visitas.
     * @param {planes_visitasUpdateArgs} args - Arguments to update one Planes_visitas.
     * @example
     * // Update one Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends planes_visitasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, planes_visitasUpdateArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Planes_visitas.
     * @param {planes_visitasDeleteManyArgs} args - Arguments to filter Planes_visitas to delete.
     * @example
     * // Delete a few Planes_visitas
     * const { count } = await prisma.planes_visitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends planes_visitasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, planes_visitasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planes_visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends planes_visitasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, planes_visitasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planes_visitas.
     * @param {planes_visitasUpsertArgs} args - Arguments to update or create a Planes_visitas.
     * @example
     * // Update or create a Planes_visitas
     * const planes_visitas = await prisma.planes_visitas.upsert({
     *   create: {
     *     // ... data to create a Planes_visitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planes_visitas we want to update
     *   }
     * })
    **/
    upsert<T extends planes_visitasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, planes_visitasUpsertArgs<ExtArgs>>
    ): Prisma__planes_visitasClient<$Types.GetResult<planes_visitasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Planes_visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasCountArgs} args - Arguments to filter Planes_visitas to count.
     * @example
     * // Count the number of Planes_visitas
     * const count = await prisma.planes_visitas.count({
     *   where: {
     *     // ... the filter for the Planes_visitas we want to count
     *   }
     * })
    **/
    count<T extends planes_visitasCountArgs>(
      args?: Subset<T, planes_visitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Planes_visitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planes_visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Planes_visitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Planes_visitasAggregateArgs>(args: Subset<T, Planes_visitasAggregateArgs>): Prisma.PrismaPromise<GetPlanes_visitasAggregateType<T>>

    /**
     * Group by Planes_visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_visitasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends planes_visitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planes_visitasGroupByArgs['orderBy'] }
        : { orderBy?: planes_visitasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, planes_visitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanes_visitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for planes_visitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__planes_visitasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * planes_visitas base type for findUnique actions
   */
  export type planes_visitasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter, which planes_visitas to fetch.
     */
    where: planes_visitasWhereUniqueInput
  }

  /**
   * planes_visitas findUnique
   */
  export interface planes_visitasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_visitasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_visitas findUniqueOrThrow
   */
  export type planes_visitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter, which planes_visitas to fetch.
     */
    where: planes_visitasWhereUniqueInput
  }


  /**
   * planes_visitas base type for findFirst actions
   */
  export type planes_visitasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter, which planes_visitas to fetch.
     */
    where?: planes_visitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_visitas to fetch.
     */
    orderBy?: planes_visitasOrderByWithRelationInput | planes_visitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_visitas.
     */
    cursor?: planes_visitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_visitas.
     */
    distinct?: Planes_visitasScalarFieldEnum | Planes_visitasScalarFieldEnum[]
  }

  /**
   * planes_visitas findFirst
   */
  export interface planes_visitasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends planes_visitasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * planes_visitas findFirstOrThrow
   */
  export type planes_visitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter, which planes_visitas to fetch.
     */
    where?: planes_visitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_visitas to fetch.
     */
    orderBy?: planes_visitasOrderByWithRelationInput | planes_visitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_visitas.
     */
    cursor?: planes_visitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_visitas.
     */
    distinct?: Planes_visitasScalarFieldEnum | Planes_visitasScalarFieldEnum[]
  }


  /**
   * planes_visitas findMany
   */
  export type planes_visitasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter, which planes_visitas to fetch.
     */
    where?: planes_visitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_visitas to fetch.
     */
    orderBy?: planes_visitasOrderByWithRelationInput | planes_visitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planes_visitas.
     */
    cursor?: planes_visitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_visitas.
     */
    skip?: number
    distinct?: Planes_visitasScalarFieldEnum | Planes_visitasScalarFieldEnum[]
  }


  /**
   * planes_visitas create
   */
  export type planes_visitasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * The data needed to create a planes_visitas.
     */
    data?: XOR<planes_visitasCreateInput, planes_visitasUncheckedCreateInput>
  }


  /**
   * planes_visitas createMany
   */
  export type planes_visitasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planes_visitas.
     */
    data: planes_visitasCreateManyInput | planes_visitasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * planes_visitas update
   */
  export type planes_visitasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * The data needed to update a planes_visitas.
     */
    data: XOR<planes_visitasUpdateInput, planes_visitasUncheckedUpdateInput>
    /**
     * Choose, which planes_visitas to update.
     */
    where: planes_visitasWhereUniqueInput
  }


  /**
   * planes_visitas updateMany
   */
  export type planes_visitasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planes_visitas.
     */
    data: XOR<planes_visitasUpdateManyMutationInput, planes_visitasUncheckedUpdateManyInput>
    /**
     * Filter which planes_visitas to update
     */
    where?: planes_visitasWhereInput
  }


  /**
   * planes_visitas upsert
   */
  export type planes_visitasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * The filter to search for the planes_visitas to update in case it exists.
     */
    where: planes_visitasWhereUniqueInput
    /**
     * In case the planes_visitas found by the `where` argument doesn't exist, create a new planes_visitas with this data.
     */
    create: XOR<planes_visitasCreateInput, planes_visitasUncheckedCreateInput>
    /**
     * In case the planes_visitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planes_visitasUpdateInput, planes_visitasUncheckedUpdateInput>
  }


  /**
   * planes_visitas delete
   */
  export type planes_visitasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
    /**
     * Filter which planes_visitas to delete.
     */
    where: planes_visitasWhereUniqueInput
  }


  /**
   * planes_visitas deleteMany
   */
  export type planes_visitasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_visitas to delete
     */
    where?: planes_visitasWhereInput
  }


  /**
   * planes_visitas without action
   */
  export type planes_visitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_visitas
     */
    select?: planes_visitasSelect<ExtArgs> | null
  }



  /**
   * Model pacientes
   */


  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    idpaciente: number | null
    dni: number | null
    telefono: number | null
  }

  export type PacientesSumAggregateOutputType = {
    idpaciente: number | null
    dni: number | null
    telefono: bigint | null
  }

  export type PacientesMinAggregateOutputType = {
    idpaciente: number | null
    paciente: string | null
    dni: number | null
    obra_soc: string | null
    telefono: bigint | null
    domicilio: string | null
    mail: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    idpaciente: number | null
    paciente: string | null
    dni: number | null
    obra_soc: string | null
    telefono: bigint | null
    domicilio: string | null
    mail: string | null
  }

  export type PacientesCountAggregateOutputType = {
    idpaciente: number
    paciente: number
    dni: number
    obra_soc: number
    telefono: number
    domicilio: number
    mail: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    idpaciente?: true
    dni?: true
    telefono?: true
  }

  export type PacientesSumAggregateInputType = {
    idpaciente?: true
    dni?: true
    telefono?: true
  }

  export type PacientesMinAggregateInputType = {
    idpaciente?: true
    paciente?: true
    dni?: true
    obra_soc?: true
    telefono?: true
    domicilio?: true
    mail?: true
  }

  export type PacientesMaxAggregateInputType = {
    idpaciente?: true
    paciente?: true
    dni?: true
    obra_soc?: true
    telefono?: true
    domicilio?: true
    mail?: true
  }

  export type PacientesCountAggregateInputType = {
    idpaciente?: true
    paciente?: true
    dni?: true
    obra_soc?: true
    telefono?: true
    domicilio?: true
    mail?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }


  export type PacientesGroupByOutputType = {
    idpaciente: number
    paciente: string | null
    dni: number | null
    obra_soc: string | null
    telefono: bigint | null
    domicilio: string | null
    mail: string | null
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpaciente?: boolean
    paciente?: boolean
    dni?: boolean
    obra_soc?: boolean
    telefono?: boolean
    domicilio?: boolean
    mail?: boolean
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    idpaciente?: boolean
    paciente?: boolean
    dni?: boolean
    obra_soc?: boolean
    telefono?: boolean
    domicilio?: boolean
    mail?: boolean
  }


  type pacientesGetPayload<S extends boolean | null | undefined | pacientesArgs> = $Types.GetResult<pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<pacientesFindManyArgs, 'select' | 'include'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pacientesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pacientes'> extends True ? Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Pacientes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pacientesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pacientes'> extends True ? Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `idpaciente`
     * const pacientesWithIdpacienteOnly = await prisma.pacientes.findMany({ select: { idpaciente: true } })
     * 
    **/
    findMany<T extends pacientesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
    **/
    create<T extends pacientesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Pacientes.
     *     @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     *     @example
     *     // Create many Pacientes
     *     const pacientes = await prisma.pacientes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pacientesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
    **/
    delete<T extends pacientesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pacientesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pacientesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pacientesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
    **/
    upsert<T extends pacientesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>
    ): Prisma__pacientesClient<$Types.GetResult<pacientesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pacientes base type for findUnique actions
   */
  export type pacientesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUnique
   */
  export interface pacientesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pacientesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }


  /**
   * pacientes base type for findFirst actions
   */
  export type pacientesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirst
   */
  export interface pacientesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pacientesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }


  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }


  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data?: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }


  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }


  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
  }


  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }


  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }


  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
  }


  /**
   * pacientes without action
   */
  export type pacientesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
  }



  /**
   * Model promociones
   */


  export type AggregatePromociones = {
    _count: PromocionesCountAggregateOutputType | null
    _avg: PromocionesAvgAggregateOutputType | null
    _sum: PromocionesSumAggregateOutputType | null
    _min: PromocionesMinAggregateOutputType | null
    _max: PromocionesMaxAggregateOutputType | null
  }

  export type PromocionesAvgAggregateOutputType = {
    idpromo: number | null
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
  }

  export type PromocionesSumAggregateOutputType = {
    idpromo: number | null
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
  }

  export type PromocionesMinAggregateOutputType = {
    idpromo: number | null
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
  }

  export type PromocionesMaxAggregateOutputType = {
    idpromo: number | null
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
  }

  export type PromocionesCountAggregateOutputType = {
    idpromo: number
    pot1: number
    pot2: number
    pint1: number
    pint2: number
    _all: number
  }


  export type PromocionesAvgAggregateInputType = {
    idpromo?: true
    pot1?: true
    pot2?: true
    pint1?: true
    pint2?: true
  }

  export type PromocionesSumAggregateInputType = {
    idpromo?: true
    pot1?: true
    pot2?: true
    pint1?: true
    pint2?: true
  }

  export type PromocionesMinAggregateInputType = {
    idpromo?: true
    pot1?: true
    pot2?: true
    pint1?: true
    pint2?: true
  }

  export type PromocionesMaxAggregateInputType = {
    idpromo?: true
    pot1?: true
    pot2?: true
    pint1?: true
    pint2?: true
  }

  export type PromocionesCountAggregateInputType = {
    idpromo?: true
    pot1?: true
    pot2?: true
    pint1?: true
    pint2?: true
    _all?: true
  }

  export type PromocionesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which promociones to aggregate.
     */
    where?: promocionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promociones to fetch.
     */
    orderBy?: promocionesOrderByWithRelationInput | promocionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: promocionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promociones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promociones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promociones
    **/
    _count?: true | PromocionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromocionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromocionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocionesMaxAggregateInputType
  }

  export type GetPromocionesAggregateType<T extends PromocionesAggregateArgs> = {
        [P in keyof T & keyof AggregatePromociones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromociones[P]>
      : GetScalarType<T[P], AggregatePromociones[P]>
  }




  export type promocionesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: promocionesWhereInput
    orderBy?: promocionesOrderByWithAggregationInput | promocionesOrderByWithAggregationInput[]
    by: PromocionesScalarFieldEnum[] | PromocionesScalarFieldEnum
    having?: promocionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocionesCountAggregateInputType | true
    _avg?: PromocionesAvgAggregateInputType
    _sum?: PromocionesSumAggregateInputType
    _min?: PromocionesMinAggregateInputType
    _max?: PromocionesMaxAggregateInputType
  }


  export type PromocionesGroupByOutputType = {
    idpromo: number
    pot1: number | null
    pot2: number | null
    pint1: number | null
    pint2: number | null
    _count: PromocionesCountAggregateOutputType | null
    _avg: PromocionesAvgAggregateOutputType | null
    _sum: PromocionesSumAggregateOutputType | null
    _min: PromocionesMinAggregateOutputType | null
    _max: PromocionesMaxAggregateOutputType | null
  }

  type GetPromocionesGroupByPayload<T extends promocionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocionesGroupByOutputType[P]>
            : GetScalarType<T[P], PromocionesGroupByOutputType[P]>
        }
      >
    >


  export type promocionesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpromo?: boolean
    pot1?: boolean
    pot2?: boolean
    pint1?: boolean
    pint2?: boolean
  }, ExtArgs["result"]["promociones"]>

  export type promocionesSelectScalar = {
    idpromo?: boolean
    pot1?: boolean
    pot2?: boolean
    pint1?: boolean
    pint2?: boolean
  }


  type promocionesGetPayload<S extends boolean | null | undefined | promocionesArgs> = $Types.GetResult<promocionesPayload, S>

  type promocionesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<promocionesFindManyArgs, 'select' | 'include'> & {
      select?: PromocionesCountAggregateInputType | true
    }

  export interface promocionesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['promociones'], meta: { name: 'promociones' } }
    /**
     * Find zero or one Promociones that matches the filter.
     * @param {promocionesFindUniqueArgs} args - Arguments to find a Promociones
     * @example
     * // Get one Promociones
     * const promociones = await prisma.promociones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends promocionesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, promocionesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'promociones'> extends True ? Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Promociones that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {promocionesFindUniqueOrThrowArgs} args - Arguments to find a Promociones
     * @example
     * // Get one Promociones
     * const promociones = await prisma.promociones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends promocionesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, promocionesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Promociones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesFindFirstArgs} args - Arguments to find a Promociones
     * @example
     * // Get one Promociones
     * const promociones = await prisma.promociones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends promocionesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, promocionesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'promociones'> extends True ? Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Promociones that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesFindFirstOrThrowArgs} args - Arguments to find a Promociones
     * @example
     * // Get one Promociones
     * const promociones = await prisma.promociones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends promocionesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, promocionesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Promociones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promociones
     * const promociones = await prisma.promociones.findMany()
     * 
     * // Get first 10 Promociones
     * const promociones = await prisma.promociones.findMany({ take: 10 })
     * 
     * // Only select the `idpromo`
     * const promocionesWithIdpromoOnly = await prisma.promociones.findMany({ select: { idpromo: true } })
     * 
    **/
    findMany<T extends promocionesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promocionesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Promociones.
     * @param {promocionesCreateArgs} args - Arguments to create a Promociones.
     * @example
     * // Create one Promociones
     * const Promociones = await prisma.promociones.create({
     *   data: {
     *     // ... data to create a Promociones
     *   }
     * })
     * 
    **/
    create<T extends promocionesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, promocionesCreateArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Promociones.
     *     @param {promocionesCreateManyArgs} args - Arguments to create many Promociones.
     *     @example
     *     // Create many Promociones
     *     const promociones = await prisma.promociones.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends promocionesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promocionesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promociones.
     * @param {promocionesDeleteArgs} args - Arguments to delete one Promociones.
     * @example
     * // Delete one Promociones
     * const Promociones = await prisma.promociones.delete({
     *   where: {
     *     // ... filter to delete one Promociones
     *   }
     * })
     * 
    **/
    delete<T extends promocionesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, promocionesDeleteArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Promociones.
     * @param {promocionesUpdateArgs} args - Arguments to update one Promociones.
     * @example
     * // Update one Promociones
     * const promociones = await prisma.promociones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends promocionesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, promocionesUpdateArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Promociones.
     * @param {promocionesDeleteManyArgs} args - Arguments to filter Promociones to delete.
     * @example
     * // Delete a few Promociones
     * const { count } = await prisma.promociones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends promocionesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promocionesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promociones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promociones
     * const promociones = await prisma.promociones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends promocionesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, promocionesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promociones.
     * @param {promocionesUpsertArgs} args - Arguments to update or create a Promociones.
     * @example
     * // Update or create a Promociones
     * const promociones = await prisma.promociones.upsert({
     *   create: {
     *     // ... data to create a Promociones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promociones we want to update
     *   }
     * })
    **/
    upsert<T extends promocionesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, promocionesUpsertArgs<ExtArgs>>
    ): Prisma__promocionesClient<$Types.GetResult<promocionesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Promociones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesCountArgs} args - Arguments to filter Promociones to count.
     * @example
     * // Count the number of Promociones
     * const count = await prisma.promociones.count({
     *   where: {
     *     // ... the filter for the Promociones we want to count
     *   }
     * })
    **/
    count<T extends promocionesCountArgs>(
      args?: Subset<T, promocionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promociones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromocionesAggregateArgs>(args: Subset<T, PromocionesAggregateArgs>): Prisma.PrismaPromise<GetPromocionesAggregateType<T>>

    /**
     * Group by Promociones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promocionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends promocionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promocionesGroupByArgs['orderBy'] }
        : { orderBy?: promocionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, promocionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for promociones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__promocionesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * promociones base type for findUnique actions
   */
  export type promocionesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter, which promociones to fetch.
     */
    where: promocionesWhereUniqueInput
  }

  /**
   * promociones findUnique
   */
  export interface promocionesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends promocionesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * promociones findUniqueOrThrow
   */
  export type promocionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter, which promociones to fetch.
     */
    where: promocionesWhereUniqueInput
  }


  /**
   * promociones base type for findFirst actions
   */
  export type promocionesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter, which promociones to fetch.
     */
    where?: promocionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promociones to fetch.
     */
    orderBy?: promocionesOrderByWithRelationInput | promocionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promociones.
     */
    cursor?: promocionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promociones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promociones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promociones.
     */
    distinct?: PromocionesScalarFieldEnum | PromocionesScalarFieldEnum[]
  }

  /**
   * promociones findFirst
   */
  export interface promocionesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends promocionesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * promociones findFirstOrThrow
   */
  export type promocionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter, which promociones to fetch.
     */
    where?: promocionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promociones to fetch.
     */
    orderBy?: promocionesOrderByWithRelationInput | promocionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promociones.
     */
    cursor?: promocionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promociones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promociones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promociones.
     */
    distinct?: PromocionesScalarFieldEnum | PromocionesScalarFieldEnum[]
  }


  /**
   * promociones findMany
   */
  export type promocionesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter, which promociones to fetch.
     */
    where?: promocionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promociones to fetch.
     */
    orderBy?: promocionesOrderByWithRelationInput | promocionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promociones.
     */
    cursor?: promocionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promociones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promociones.
     */
    skip?: number
    distinct?: PromocionesScalarFieldEnum | PromocionesScalarFieldEnum[]
  }


  /**
   * promociones create
   */
  export type promocionesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * The data needed to create a promociones.
     */
    data?: XOR<promocionesCreateInput, promocionesUncheckedCreateInput>
  }


  /**
   * promociones createMany
   */
  export type promocionesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many promociones.
     */
    data: promocionesCreateManyInput | promocionesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * promociones update
   */
  export type promocionesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * The data needed to update a promociones.
     */
    data: XOR<promocionesUpdateInput, promocionesUncheckedUpdateInput>
    /**
     * Choose, which promociones to update.
     */
    where: promocionesWhereUniqueInput
  }


  /**
   * promociones updateMany
   */
  export type promocionesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update promociones.
     */
    data: XOR<promocionesUpdateManyMutationInput, promocionesUncheckedUpdateManyInput>
    /**
     * Filter which promociones to update
     */
    where?: promocionesWhereInput
  }


  /**
   * promociones upsert
   */
  export type promocionesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * The filter to search for the promociones to update in case it exists.
     */
    where: promocionesWhereUniqueInput
    /**
     * In case the promociones found by the `where` argument doesn't exist, create a new promociones with this data.
     */
    create: XOR<promocionesCreateInput, promocionesUncheckedCreateInput>
    /**
     * In case the promociones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promocionesUpdateInput, promocionesUncheckedUpdateInput>
  }


  /**
   * promociones delete
   */
  export type promocionesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
    /**
     * Filter which promociones to delete.
     */
    where: promocionesWhereUniqueInput
  }


  /**
   * promociones deleteMany
   */
  export type promocionesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which promociones to delete
     */
    where?: promocionesWhereInput
  }


  /**
   * promociones without action
   */
  export type promocionesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promociones
     */
    select?: promocionesSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AUT_PRACScalarFieldEnum: {
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

  export type AUT_PRACScalarFieldEnum = (typeof AUT_PRACScalarFieldEnum)[keyof typeof AUT_PRACScalarFieldEnum]


  export const CAJAScalarFieldEnum: {
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

  export type CAJAScalarFieldEnum = (typeof CAJAScalarFieldEnum)[keyof typeof CAJAScalarFieldEnum]


  export const CONSULTAScalarFieldEnum: {
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

  export type CONSULTAScalarFieldEnum = (typeof CONSULTAScalarFieldEnum)[keyof typeof CONSULTAScalarFieldEnum]


  export const ENFERMERScalarFieldEnum: {
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

  export type ENFERMERScalarFieldEnum = (typeof ENFERMERScalarFieldEnum)[keyof typeof ENFERMERScalarFieldEnum]


  export const FARMACIAScalarFieldEnum: {
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

  export type FARMACIAScalarFieldEnum = (typeof FARMACIAScalarFieldEnum)[keyof typeof FARMACIAScalarFieldEnum]


  export const MEDICOS_TURNOSScalarFieldEnum: {
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

  export type MEDICOS_TURNOSScalarFieldEnum = (typeof MEDICOS_TURNOSScalarFieldEnum)[keyof typeof MEDICOS_TURNOSScalarFieldEnum]


  export const PRACTICAScalarFieldEnum: {
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

  export type PRACTICAScalarFieldEnum = (typeof PRACTICAScalarFieldEnum)[keyof typeof PRACTICAScalarFieldEnum]


  export const PRACT_ENFERScalarFieldEnum: {
    idpractica: 'idpractica',
    practica: 'practica',
    importe: 'importe'
  };

  export type PRACT_ENFERScalarFieldEnum = (typeof PRACT_ENFERScalarFieldEnum)[keyof typeof PRACT_ENFERScalarFieldEnum]


  export const PRESTADOScalarFieldEnum: {
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
    DESDE: 'DESDE',
    HASTA: 'HASTA',
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

  export type PRESTADOScalarFieldEnum = (typeof PRESTADOScalarFieldEnum)[keyof typeof PRESTADOScalarFieldEnum]


  export const USOSScalarFieldEnum: {
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

  export type USOSScalarFieldEnum = (typeof USOSScalarFieldEnum)[keyof typeof USOSScalarFieldEnum]


  export const USOSFAScalarFieldEnum: {
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

  export type USOSFAScalarFieldEnum = (typeof USOSFAScalarFieldEnum)[keyof typeof USOSFAScalarFieldEnum]


  export const Adherent_proviScalarFieldEnum: {
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

  export type Adherent_proviScalarFieldEnum = (typeof Adherent_proviScalarFieldEnum)[keyof typeof Adherent_proviScalarFieldEnum]


  export const NosociosScalarFieldEnum: {
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

  export type NosociosScalarFieldEnum = (typeof NosociosScalarFieldEnum)[keyof typeof NosociosScalarFieldEnum]


  export const Planes_odontologicosScalarFieldEnum: {
    idplan: 'idplan',
    total: 'total',
    pago_inicial: 'pago_inicial',
    detalle: 'detalle',
    estado: 'estado',
    visitas: 'visitas',
    fecha_plan: 'fecha_plan',
    cuotas: 'cuotas',
    plan: 'plan'
  };

  export type Planes_odontologicosScalarFieldEnum = (typeof Planes_odontologicosScalarFieldEnum)[keyof typeof Planes_odontologicosScalarFieldEnum]


  export const Planes_socioScalarFieldEnum: {
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
    plan: 'plan'
  };

  export type Planes_socioScalarFieldEnum = (typeof Planes_socioScalarFieldEnum)[keyof typeof Planes_socioScalarFieldEnum]


  export const Planes_visitasScalarFieldEnum: {
    idvisita: 'idvisita',
    idplan: 'idplan',
    nvisita: 'nvisita',
    pago: 'pago',
    fecha: 'fecha',
    pagado: 'pagado',
    operador: 'operador',
    plan: 'plan'
  };

  export type Planes_visitasScalarFieldEnum = (typeof Planes_visitasScalarFieldEnum)[keyof typeof Planes_visitasScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    idpaciente: 'idpaciente',
    paciente: 'paciente',
    dni: 'dni',
    obra_soc: 'obra_soc',
    telefono: 'telefono',
    domicilio: 'domicilio',
    mail: 'mail'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const PromocionesScalarFieldEnum: {
    idpromo: 'idpromo',
    pot1: 'pot1',
    pot2: 'pot2',
    pint1: 'pint1',
    pint2: 'pint2'
  };

  export type PromocionesScalarFieldEnum = (typeof PromocionesScalarFieldEnum)[keyof typeof PromocionesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type AUT_PRACWhereInput = {
    AND?: AUT_PRACWhereInput | AUT_PRACWhereInput[]
    OR?: AUT_PRACWhereInput[]
    NOT?: AUT_PRACWhereInput | AUT_PRACWhereInput[]
    ESP_PRAC?: StringNullableFilter | string | null
    CODIGOS?: StringNullableFilter | string | null
    DESCRIP?: StringNullableFilter | string | null
    FECHA_ALT?: DateTimeNullableFilter | Date | string | null
    ANULADO?: IntNullableFilter | number | null
    COD_PRES01?: StringNullableFilter | string | null
    PRECIO_01?: StringNullableFilter | string | null
    SUC_01?: StringNullableFilter | string | null
    COD_PRES02?: StringNullableFilter | string | null
    PRECIO_02?: StringNullableFilter | string | null
    SUC_02?: StringNullableFilter | string | null
    COD_PRES03?: StringNullableFilter | string | null
    PRECIO_03?: StringNullableFilter | string | null
    SUC_03?: StringNullableFilter | string | null
    COD_PRES04?: StringNullableFilter | string | null
    PRECIO_04?: StringNullableFilter | string | null
    SUC_04?: StringNullableFilter | string | null
    COD_PRES05?: StringNullableFilter | string | null
    PRECIO_05?: FloatNullableFilter | number | null
    SUC_05?: StringNullableFilter | string | null
    COD_PRES06?: StringNullableFilter | string | null
    PRECIO_06?: FloatNullableFilter | number | null
    SUC_06?: StringNullableFilter | string | null
    COD_PRES07?: StringNullableFilter | string | null
    PRECIO_07?: FloatNullableFilter | number | null
    SUC_07?: StringNullableFilter | string | null
    COD_PRES08?: StringNullableFilter | string | null
    PRECIO_08?: FloatNullableFilter | number | null
    SUC_08?: StringNullableFilter | string | null
    COD_PRES09?: StringNullableFilter | string | null
    PRECIO_09?: FloatNullableFilter | number | null
    SUC_09?: StringNullableFilter | string | null
    COD_PRES10?: StringNullableFilter | string | null
    PRECIO_10?: StringNullableFilter | string | null
    SUC_10?: StringNullableFilter | string | null
    COD_PRES11?: StringNullableFilter | string | null
    PRECIO_11?: StringNullableFilter | string | null
    SUC_11?: StringNullableFilter | string | null
    COD_PRES12?: StringNullableFilter | string | null
    PRECIO_12?: StringNullableFilter | string | null
    SUC_12?: StringNullableFilter | string | null
    COD_PRES13?: StringNullableFilter | string | null
    PRECIO_13?: StringNullableFilter | string | null
    SUC_13?: StringNullableFilter | string | null
    COD_PRES14?: StringNullableFilter | string | null
    PRECIO_14?: StringNullableFilter | string | null
    SUC_14?: StringNullableFilter | string | null
    COD_PRES15?: StringNullableFilter | string | null
    PRECIO_15?: StringNullableFilter | string | null
    SUC_15?: StringNullableFilter | string | null
    COD_PRES16?: StringNullableFilter | string | null
    PRECIO_16?: FloatNullableFilter | number | null
    SUC_16?: StringNullableFilter | string | null
    COD_PRES17?: StringNullableFilter | string | null
    PRECIO_17?: FloatNullableFilter | number | null
    SUC_17?: StringNullableFilter | string | null
    COD_PRES18?: StringNullableFilter | string | null
    PRECIO_18?: FloatNullableFilter | number | null
    SUC_18?: StringNullableFilter | string | null
    COD_PRES19?: StringNullableFilter | string | null
    PRECIO_19?: FloatNullableFilter | number | null
    SUC_19?: StringNullableFilter | string | null
    COD_PRES20?: StringNullableFilter | string | null
    PRECIO_20?: FloatNullableFilter | number | null
    SUC_20?: StringNullableFilter | string | null
    idpractica?: IntFilter | number
  }

  export type AUT_PRACOrderByWithRelationInput = {
    ESP_PRAC?: SortOrderInput | SortOrder
    CODIGOS?: SortOrderInput | SortOrder
    DESCRIP?: SortOrderInput | SortOrder
    FECHA_ALT?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    COD_PRES01?: SortOrderInput | SortOrder
    PRECIO_01?: SortOrderInput | SortOrder
    SUC_01?: SortOrderInput | SortOrder
    COD_PRES02?: SortOrderInput | SortOrder
    PRECIO_02?: SortOrderInput | SortOrder
    SUC_02?: SortOrderInput | SortOrder
    COD_PRES03?: SortOrderInput | SortOrder
    PRECIO_03?: SortOrderInput | SortOrder
    SUC_03?: SortOrderInput | SortOrder
    COD_PRES04?: SortOrderInput | SortOrder
    PRECIO_04?: SortOrderInput | SortOrder
    SUC_04?: SortOrderInput | SortOrder
    COD_PRES05?: SortOrderInput | SortOrder
    PRECIO_05?: SortOrderInput | SortOrder
    SUC_05?: SortOrderInput | SortOrder
    COD_PRES06?: SortOrderInput | SortOrder
    PRECIO_06?: SortOrderInput | SortOrder
    SUC_06?: SortOrderInput | SortOrder
    COD_PRES07?: SortOrderInput | SortOrder
    PRECIO_07?: SortOrderInput | SortOrder
    SUC_07?: SortOrderInput | SortOrder
    COD_PRES08?: SortOrderInput | SortOrder
    PRECIO_08?: SortOrderInput | SortOrder
    SUC_08?: SortOrderInput | SortOrder
    COD_PRES09?: SortOrderInput | SortOrder
    PRECIO_09?: SortOrderInput | SortOrder
    SUC_09?: SortOrderInput | SortOrder
    COD_PRES10?: SortOrderInput | SortOrder
    PRECIO_10?: SortOrderInput | SortOrder
    SUC_10?: SortOrderInput | SortOrder
    COD_PRES11?: SortOrderInput | SortOrder
    PRECIO_11?: SortOrderInput | SortOrder
    SUC_11?: SortOrderInput | SortOrder
    COD_PRES12?: SortOrderInput | SortOrder
    PRECIO_12?: SortOrderInput | SortOrder
    SUC_12?: SortOrderInput | SortOrder
    COD_PRES13?: SortOrderInput | SortOrder
    PRECIO_13?: SortOrderInput | SortOrder
    SUC_13?: SortOrderInput | SortOrder
    COD_PRES14?: SortOrderInput | SortOrder
    PRECIO_14?: SortOrderInput | SortOrder
    SUC_14?: SortOrderInput | SortOrder
    COD_PRES15?: SortOrderInput | SortOrder
    PRECIO_15?: SortOrderInput | SortOrder
    SUC_15?: SortOrderInput | SortOrder
    COD_PRES16?: SortOrderInput | SortOrder
    PRECIO_16?: SortOrderInput | SortOrder
    SUC_16?: SortOrderInput | SortOrder
    COD_PRES17?: SortOrderInput | SortOrder
    PRECIO_17?: SortOrderInput | SortOrder
    SUC_17?: SortOrderInput | SortOrder
    COD_PRES18?: SortOrderInput | SortOrder
    PRECIO_18?: SortOrderInput | SortOrder
    SUC_18?: SortOrderInput | SortOrder
    COD_PRES19?: SortOrderInput | SortOrder
    PRECIO_19?: SortOrderInput | SortOrder
    SUC_19?: SortOrderInput | SortOrder
    COD_PRES20?: SortOrderInput | SortOrder
    PRECIO_20?: SortOrderInput | SortOrder
    SUC_20?: SortOrderInput | SortOrder
    idpractica?: SortOrder
  }

  export type AUT_PRACWhereUniqueInput = {
    idpractica?: number
  }

  export type AUT_PRACOrderByWithAggregationInput = {
    ESP_PRAC?: SortOrderInput | SortOrder
    CODIGOS?: SortOrderInput | SortOrder
    DESCRIP?: SortOrderInput | SortOrder
    FECHA_ALT?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    COD_PRES01?: SortOrderInput | SortOrder
    PRECIO_01?: SortOrderInput | SortOrder
    SUC_01?: SortOrderInput | SortOrder
    COD_PRES02?: SortOrderInput | SortOrder
    PRECIO_02?: SortOrderInput | SortOrder
    SUC_02?: SortOrderInput | SortOrder
    COD_PRES03?: SortOrderInput | SortOrder
    PRECIO_03?: SortOrderInput | SortOrder
    SUC_03?: SortOrderInput | SortOrder
    COD_PRES04?: SortOrderInput | SortOrder
    PRECIO_04?: SortOrderInput | SortOrder
    SUC_04?: SortOrderInput | SortOrder
    COD_PRES05?: SortOrderInput | SortOrder
    PRECIO_05?: SortOrderInput | SortOrder
    SUC_05?: SortOrderInput | SortOrder
    COD_PRES06?: SortOrderInput | SortOrder
    PRECIO_06?: SortOrderInput | SortOrder
    SUC_06?: SortOrderInput | SortOrder
    COD_PRES07?: SortOrderInput | SortOrder
    PRECIO_07?: SortOrderInput | SortOrder
    SUC_07?: SortOrderInput | SortOrder
    COD_PRES08?: SortOrderInput | SortOrder
    PRECIO_08?: SortOrderInput | SortOrder
    SUC_08?: SortOrderInput | SortOrder
    COD_PRES09?: SortOrderInput | SortOrder
    PRECIO_09?: SortOrderInput | SortOrder
    SUC_09?: SortOrderInput | SortOrder
    COD_PRES10?: SortOrderInput | SortOrder
    PRECIO_10?: SortOrderInput | SortOrder
    SUC_10?: SortOrderInput | SortOrder
    COD_PRES11?: SortOrderInput | SortOrder
    PRECIO_11?: SortOrderInput | SortOrder
    SUC_11?: SortOrderInput | SortOrder
    COD_PRES12?: SortOrderInput | SortOrder
    PRECIO_12?: SortOrderInput | SortOrder
    SUC_12?: SortOrderInput | SortOrder
    COD_PRES13?: SortOrderInput | SortOrder
    PRECIO_13?: SortOrderInput | SortOrder
    SUC_13?: SortOrderInput | SortOrder
    COD_PRES14?: SortOrderInput | SortOrder
    PRECIO_14?: SortOrderInput | SortOrder
    SUC_14?: SortOrderInput | SortOrder
    COD_PRES15?: SortOrderInput | SortOrder
    PRECIO_15?: SortOrderInput | SortOrder
    SUC_15?: SortOrderInput | SortOrder
    COD_PRES16?: SortOrderInput | SortOrder
    PRECIO_16?: SortOrderInput | SortOrder
    SUC_16?: SortOrderInput | SortOrder
    COD_PRES17?: SortOrderInput | SortOrder
    PRECIO_17?: SortOrderInput | SortOrder
    SUC_17?: SortOrderInput | SortOrder
    COD_PRES18?: SortOrderInput | SortOrder
    PRECIO_18?: SortOrderInput | SortOrder
    SUC_18?: SortOrderInput | SortOrder
    COD_PRES19?: SortOrderInput | SortOrder
    PRECIO_19?: SortOrderInput | SortOrder
    SUC_19?: SortOrderInput | SortOrder
    COD_PRES20?: SortOrderInput | SortOrder
    PRECIO_20?: SortOrderInput | SortOrder
    SUC_20?: SortOrderInput | SortOrder
    idpractica?: SortOrder
    _count?: AUT_PRACCountOrderByAggregateInput
    _avg?: AUT_PRACAvgOrderByAggregateInput
    _max?: AUT_PRACMaxOrderByAggregateInput
    _min?: AUT_PRACMinOrderByAggregateInput
    _sum?: AUT_PRACSumOrderByAggregateInput
  }

  export type AUT_PRACScalarWhereWithAggregatesInput = {
    AND?: AUT_PRACScalarWhereWithAggregatesInput | AUT_PRACScalarWhereWithAggregatesInput[]
    OR?: AUT_PRACScalarWhereWithAggregatesInput[]
    NOT?: AUT_PRACScalarWhereWithAggregatesInput | AUT_PRACScalarWhereWithAggregatesInput[]
    ESP_PRAC?: StringNullableWithAggregatesFilter | string | null
    CODIGOS?: StringNullableWithAggregatesFilter | string | null
    DESCRIP?: StringNullableWithAggregatesFilter | string | null
    FECHA_ALT?: DateTimeNullableWithAggregatesFilter | Date | string | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    COD_PRES01?: StringNullableWithAggregatesFilter | string | null
    PRECIO_01?: StringNullableWithAggregatesFilter | string | null
    SUC_01?: StringNullableWithAggregatesFilter | string | null
    COD_PRES02?: StringNullableWithAggregatesFilter | string | null
    PRECIO_02?: StringNullableWithAggregatesFilter | string | null
    SUC_02?: StringNullableWithAggregatesFilter | string | null
    COD_PRES03?: StringNullableWithAggregatesFilter | string | null
    PRECIO_03?: StringNullableWithAggregatesFilter | string | null
    SUC_03?: StringNullableWithAggregatesFilter | string | null
    COD_PRES04?: StringNullableWithAggregatesFilter | string | null
    PRECIO_04?: StringNullableWithAggregatesFilter | string | null
    SUC_04?: StringNullableWithAggregatesFilter | string | null
    COD_PRES05?: StringNullableWithAggregatesFilter | string | null
    PRECIO_05?: FloatNullableWithAggregatesFilter | number | null
    SUC_05?: StringNullableWithAggregatesFilter | string | null
    COD_PRES06?: StringNullableWithAggregatesFilter | string | null
    PRECIO_06?: FloatNullableWithAggregatesFilter | number | null
    SUC_06?: StringNullableWithAggregatesFilter | string | null
    COD_PRES07?: StringNullableWithAggregatesFilter | string | null
    PRECIO_07?: FloatNullableWithAggregatesFilter | number | null
    SUC_07?: StringNullableWithAggregatesFilter | string | null
    COD_PRES08?: StringNullableWithAggregatesFilter | string | null
    PRECIO_08?: FloatNullableWithAggregatesFilter | number | null
    SUC_08?: StringNullableWithAggregatesFilter | string | null
    COD_PRES09?: StringNullableWithAggregatesFilter | string | null
    PRECIO_09?: FloatNullableWithAggregatesFilter | number | null
    SUC_09?: StringNullableWithAggregatesFilter | string | null
    COD_PRES10?: StringNullableWithAggregatesFilter | string | null
    PRECIO_10?: StringNullableWithAggregatesFilter | string | null
    SUC_10?: StringNullableWithAggregatesFilter | string | null
    COD_PRES11?: StringNullableWithAggregatesFilter | string | null
    PRECIO_11?: StringNullableWithAggregatesFilter | string | null
    SUC_11?: StringNullableWithAggregatesFilter | string | null
    COD_PRES12?: StringNullableWithAggregatesFilter | string | null
    PRECIO_12?: StringNullableWithAggregatesFilter | string | null
    SUC_12?: StringNullableWithAggregatesFilter | string | null
    COD_PRES13?: StringNullableWithAggregatesFilter | string | null
    PRECIO_13?: StringNullableWithAggregatesFilter | string | null
    SUC_13?: StringNullableWithAggregatesFilter | string | null
    COD_PRES14?: StringNullableWithAggregatesFilter | string | null
    PRECIO_14?: StringNullableWithAggregatesFilter | string | null
    SUC_14?: StringNullableWithAggregatesFilter | string | null
    COD_PRES15?: StringNullableWithAggregatesFilter | string | null
    PRECIO_15?: StringNullableWithAggregatesFilter | string | null
    SUC_15?: StringNullableWithAggregatesFilter | string | null
    COD_PRES16?: StringNullableWithAggregatesFilter | string | null
    PRECIO_16?: FloatNullableWithAggregatesFilter | number | null
    SUC_16?: StringNullableWithAggregatesFilter | string | null
    COD_PRES17?: StringNullableWithAggregatesFilter | string | null
    PRECIO_17?: FloatNullableWithAggregatesFilter | number | null
    SUC_17?: StringNullableWithAggregatesFilter | string | null
    COD_PRES18?: StringNullableWithAggregatesFilter | string | null
    PRECIO_18?: FloatNullableWithAggregatesFilter | number | null
    SUC_18?: StringNullableWithAggregatesFilter | string | null
    COD_PRES19?: StringNullableWithAggregatesFilter | string | null
    PRECIO_19?: FloatNullableWithAggregatesFilter | number | null
    SUC_19?: StringNullableWithAggregatesFilter | string | null
    COD_PRES20?: StringNullableWithAggregatesFilter | string | null
    PRECIO_20?: FloatNullableWithAggregatesFilter | number | null
    SUC_20?: StringNullableWithAggregatesFilter | string | null
    idpractica?: IntWithAggregatesFilter | number
  }

  export type CAJAWhereInput = {
    AND?: CAJAWhereInput | CAJAWhereInput[]
    OR?: CAJAWhereInput[]
    NOT?: CAJAWhereInput | CAJAWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    PUESTO?: StringNullableFilter | string | null
    CODIGO?: IntNullableFilter | number | null
    MOVIM?: StringNullableFilter | string | null
    CUENTA?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    TIPO?: StringNullableFilter | string | null
    SERIE?: IntNullableFilter | number | null
    NUMERO?: IntNullableFilter | number | null
    CUIT?: StringNullableFilter | string | null
    DETALLE?: StringNullableFilter | string | null
    DET_AUX?: StringNullableFilter | string | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    FEC_COMP?: StringNullableFilter | string | null
    HORA?: StringNullableFilter | string | null
    ORIGEN?: StringNullableFilter | string | null
    OPERADOR?: StringNullableFilter | string | null
    ASIENTO?: IntNullableFilter | number | null
    EXENTO?: StringNullableFilter | string | null
    CANT_AFIL?: IntNullableFilter | number | null
    CAE?: StringNullableFilter | string | null
    VTO_CAE?: StringNullableFilter | string | null
    iditem?: IntFilter | number
  }

  export type CAJAOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    CODIGO?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    CUENTA?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    NUMERO?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    DET_AUX?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_COMP?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    ORIGEN?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ASIENTO?: SortOrderInput | SortOrder
    EXENTO?: SortOrderInput | SortOrder
    CANT_AFIL?: SortOrderInput | SortOrder
    CAE?: SortOrderInput | SortOrder
    VTO_CAE?: SortOrderInput | SortOrder
    iditem?: SortOrder
  }

  export type CAJAWhereUniqueInput = {
    iditem?: number
  }

  export type CAJAOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    CODIGO?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    CUENTA?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    NUMERO?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    DET_AUX?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_COMP?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    ORIGEN?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ASIENTO?: SortOrderInput | SortOrder
    EXENTO?: SortOrderInput | SortOrder
    CANT_AFIL?: SortOrderInput | SortOrder
    CAE?: SortOrderInput | SortOrder
    VTO_CAE?: SortOrderInput | SortOrder
    iditem?: SortOrder
    _count?: CAJACountOrderByAggregateInput
    _avg?: CAJAAvgOrderByAggregateInput
    _max?: CAJAMaxOrderByAggregateInput
    _min?: CAJAMinOrderByAggregateInput
    _sum?: CAJASumOrderByAggregateInput
  }

  export type CAJAScalarWhereWithAggregatesInput = {
    AND?: CAJAScalarWhereWithAggregatesInput | CAJAScalarWhereWithAggregatesInput[]
    OR?: CAJAScalarWhereWithAggregatesInput[]
    NOT?: CAJAScalarWhereWithAggregatesInput | CAJAScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    PUESTO?: StringNullableWithAggregatesFilter | string | null
    CODIGO?: IntNullableWithAggregatesFilter | number | null
    MOVIM?: StringNullableWithAggregatesFilter | string | null
    CUENTA?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    TIPO?: StringNullableWithAggregatesFilter | string | null
    SERIE?: IntNullableWithAggregatesFilter | number | null
    NUMERO?: IntNullableWithAggregatesFilter | number | null
    CUIT?: StringNullableWithAggregatesFilter | string | null
    DETALLE?: StringNullableWithAggregatesFilter | string | null
    DET_AUX?: StringNullableWithAggregatesFilter | string | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    FEC_COMP?: StringNullableWithAggregatesFilter | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    ORIGEN?: StringNullableWithAggregatesFilter | string | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    ASIENTO?: IntNullableWithAggregatesFilter | number | null
    EXENTO?: StringNullableWithAggregatesFilter | string | null
    CANT_AFIL?: IntNullableWithAggregatesFilter | number | null
    CAE?: StringNullableWithAggregatesFilter | string | null
    VTO_CAE?: StringNullableWithAggregatesFilter | string | null
    iditem?: IntWithAggregatesFilter | number
  }

  export type CONSULTAWhereInput = {
    AND?: CONSULTAWhereInput | CONSULTAWhereInput[]
    OR?: CONSULTAWhereInput[]
    NOT?: CONSULTAWhereInput | CONSULTAWhereInput[]
    CONTRATO?: IntNullableFilter | number | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    HORA?: StringNullableFilter | string | null
    NRO_ORDEN?: StringNullableFilter | string | null
    DESTINO?: StringNullableFilter | string | null
    COD_PRES?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    ANULADO?: IntNullableFilter | number | null
    OPERADOR?: StringNullableFilter | string | null
    OPE_ANU?: IntNullableFilter | number | null
    DIAGNOSTIC?: StringNullableFilter | string | null
    ATENCION?: IntNullableFilter | number | null
    NRO_DNI?: IntNullableFilter | number | null
    idconsulta?: IntFilter | number
    SUC?: StringNullableFilter | string | null
  }

  export type CONSULTAOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    COD_PRES?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    DIAGNOSTIC?: SortOrderInput | SortOrder
    ATENCION?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    idconsulta?: SortOrder
    SUC?: SortOrderInput | SortOrder
  }

  export type CONSULTAWhereUniqueInput = {
    idconsulta?: number
  }

  export type CONSULTAOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    COD_PRES?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    DIAGNOSTIC?: SortOrderInput | SortOrder
    ATENCION?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    idconsulta?: SortOrder
    SUC?: SortOrderInput | SortOrder
    _count?: CONSULTACountOrderByAggregateInput
    _avg?: CONSULTAAvgOrderByAggregateInput
    _max?: CONSULTAMaxOrderByAggregateInput
    _min?: CONSULTAMinOrderByAggregateInput
    _sum?: CONSULTASumOrderByAggregateInput
  }

  export type CONSULTAScalarWhereWithAggregatesInput = {
    AND?: CONSULTAScalarWhereWithAggregatesInput | CONSULTAScalarWhereWithAggregatesInput[]
    OR?: CONSULTAScalarWhereWithAggregatesInput[]
    NOT?: CONSULTAScalarWhereWithAggregatesInput | CONSULTAScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    NRO_ORDEN?: StringNullableWithAggregatesFilter | string | null
    DESTINO?: StringNullableWithAggregatesFilter | string | null
    COD_PRES?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    OPE_ANU?: IntNullableWithAggregatesFilter | number | null
    DIAGNOSTIC?: StringNullableWithAggregatesFilter | string | null
    ATENCION?: IntNullableWithAggregatesFilter | number | null
    NRO_DNI?: IntNullableWithAggregatesFilter | number | null
    idconsulta?: IntWithAggregatesFilter | number
    SUC?: StringNullableWithAggregatesFilter | string | null
  }

  export type ENFERMERWhereInput = {
    AND?: ENFERMERWhereInput | ENFERMERWhereInput[]
    OR?: ENFERMERWhereInput[]
    NOT?: ENFERMERWhereInput | ENFERMERWhereInput[]
    CONTRATO?: IntNullableFilter | number | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    HORA?: StringNullableFilter | string | null
    NRO_ORDEN?: StringNullableFilter | string | null
    DESTINO?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    ANULADO?: IntNullableFilter | number | null
    PRACTICA?: IntNullableFilter | number | null
    OPERADOR?: StringNullableFilter | string | null
    OPE_ANU?: IntNullableFilter | number | null
    NRO_DNI?: IntNullableFilter | number | null
    idenfermer?: IntFilter | number
    CANTIDAD?: IntNullableFilter | number | null
    SUC?: StringNullableFilter | string | null
  }

  export type ENFERMEROrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    PRACTICA?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrderInput | SortOrder
    SUC?: SortOrderInput | SortOrder
  }

  export type ENFERMERWhereUniqueInput = {
    idenfermer?: number
  }

  export type ENFERMEROrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    PRACTICA?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrderInput | SortOrder
    SUC?: SortOrderInput | SortOrder
    _count?: ENFERMERCountOrderByAggregateInput
    _avg?: ENFERMERAvgOrderByAggregateInput
    _max?: ENFERMERMaxOrderByAggregateInput
    _min?: ENFERMERMinOrderByAggregateInput
    _sum?: ENFERMERSumOrderByAggregateInput
  }

  export type ENFERMERScalarWhereWithAggregatesInput = {
    AND?: ENFERMERScalarWhereWithAggregatesInput | ENFERMERScalarWhereWithAggregatesInput[]
    OR?: ENFERMERScalarWhereWithAggregatesInput[]
    NOT?: ENFERMERScalarWhereWithAggregatesInput | ENFERMERScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    NRO_ORDEN?: StringNullableWithAggregatesFilter | string | null
    DESTINO?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    PRACTICA?: IntNullableWithAggregatesFilter | number | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    OPE_ANU?: IntNullableWithAggregatesFilter | number | null
    NRO_DNI?: IntNullableWithAggregatesFilter | number | null
    idenfermer?: IntWithAggregatesFilter | number
    CANTIDAD?: IntNullableWithAggregatesFilter | number | null
    SUC?: StringNullableWithAggregatesFilter | string | null
  }

  export type FARMACIAWhereInput = {
    AND?: FARMACIAWhereInput | FARMACIAWhereInput[]
    OR?: FARMACIAWhereInput[]
    NOT?: FARMACIAWhereInput | FARMACIAWhereInput[]
    CONTRATO?: IntNullableFilter | number | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    HORA?: StringNullableFilter | string | null
    NRO_DOC?: IntNullableFilter | number | null
    NRO_ORDEN?: StringNullableFilter | string | null
    DESTINO?: StringNullableFilter | string | null
    MODO?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    ANULADO?: IntNullableFilter | number | null
    OPERADOR?: StringNullableFilter | string | null
    OPE_ANU?: IntNullableFilter | number | null
    FEC_USO?: DateTimeNullableFilter | Date | string | null
    CAN_MEDI?: IntNullableFilter | number | null
    MATRICULA?: IntNullableFilter | number | null
    HABILITA?: IntNullableFilter | number | null
    idfarmacia?: IntFilter | number
    SUC?: StringNullableFilter | string | null
  }

  export type FARMACIAOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    MODO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    FEC_USO?: SortOrderInput | SortOrder
    CAN_MEDI?: SortOrderInput | SortOrder
    MATRICULA?: SortOrderInput | SortOrder
    HABILITA?: SortOrderInput | SortOrder
    idfarmacia?: SortOrder
    SUC?: SortOrderInput | SortOrder
  }

  export type FARMACIAWhereUniqueInput = {
    idfarmacia?: number
  }

  export type FARMACIAOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    DESTINO?: SortOrderInput | SortOrder
    MODO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    FEC_USO?: SortOrderInput | SortOrder
    CAN_MEDI?: SortOrderInput | SortOrder
    MATRICULA?: SortOrderInput | SortOrder
    HABILITA?: SortOrderInput | SortOrder
    idfarmacia?: SortOrder
    SUC?: SortOrderInput | SortOrder
    _count?: FARMACIACountOrderByAggregateInput
    _avg?: FARMACIAAvgOrderByAggregateInput
    _max?: FARMACIAMaxOrderByAggregateInput
    _min?: FARMACIAMinOrderByAggregateInput
    _sum?: FARMACIASumOrderByAggregateInput
  }

  export type FARMACIAScalarWhereWithAggregatesInput = {
    AND?: FARMACIAScalarWhereWithAggregatesInput | FARMACIAScalarWhereWithAggregatesInput[]
    OR?: FARMACIAScalarWhereWithAggregatesInput[]
    NOT?: FARMACIAScalarWhereWithAggregatesInput | FARMACIAScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    NRO_ORDEN?: StringNullableWithAggregatesFilter | string | null
    DESTINO?: StringNullableWithAggregatesFilter | string | null
    MODO?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    OPE_ANU?: IntNullableWithAggregatesFilter | number | null
    FEC_USO?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CAN_MEDI?: IntNullableWithAggregatesFilter | number | null
    MATRICULA?: IntNullableWithAggregatesFilter | number | null
    HABILITA?: IntNullableWithAggregatesFilter | number | null
    idfarmacia?: IntWithAggregatesFilter | number
    SUC?: StringNullableWithAggregatesFilter | string | null
  }

  export type MEDICOS_TURNOSWhereInput = {
    AND?: MEDICOS_TURNOSWhereInput | MEDICOS_TURNOSWhereInput[]
    OR?: MEDICOS_TURNOSWhereInput[]
    NOT?: MEDICOS_TURNOSWhereInput | MEDICOS_TURNOSWhereInput[]
    idturno?: IntFilter | number
    turno?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    hora?: StringNullableFilter | string | null
    doctor?: StringNullableFilter | string | null
    paciente?: StringNullableFilter | string | null
    obra_soc?: StringNullableFilter | string | null
    telefono?: BigIntNullableFilter | bigint | number | null
    estado?: IntNullableFilter | number | null
    operador?: StringNullableFilter | string | null
    domicilio?: StringNullableFilter | string | null
    mail?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
  }

  export type MEDICOS_TURNOSOrderByWithRelationInput = {
    idturno?: SortOrder
    turno?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    hora?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    paciente?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    domicilio?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
  }

  export type MEDICOS_TURNOSWhereUniqueInput = {
    idturno?: number
  }

  export type MEDICOS_TURNOSOrderByWithAggregationInput = {
    idturno?: SortOrder
    turno?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    hora?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    paciente?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    domicilio?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    _count?: MEDICOS_TURNOSCountOrderByAggregateInput
    _avg?: MEDICOS_TURNOSAvgOrderByAggregateInput
    _max?: MEDICOS_TURNOSMaxOrderByAggregateInput
    _min?: MEDICOS_TURNOSMinOrderByAggregateInput
    _sum?: MEDICOS_TURNOSSumOrderByAggregateInput
  }

  export type MEDICOS_TURNOSScalarWhereWithAggregatesInput = {
    AND?: MEDICOS_TURNOSScalarWhereWithAggregatesInput | MEDICOS_TURNOSScalarWhereWithAggregatesInput[]
    OR?: MEDICOS_TURNOSScalarWhereWithAggregatesInput[]
    NOT?: MEDICOS_TURNOSScalarWhereWithAggregatesInput | MEDICOS_TURNOSScalarWhereWithAggregatesInput[]
    idturno?: IntWithAggregatesFilter | number
    turno?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    hora?: StringNullableWithAggregatesFilter | string | null
    doctor?: StringNullableWithAggregatesFilter | string | null
    paciente?: StringNullableWithAggregatesFilter | string | null
    obra_soc?: StringNullableWithAggregatesFilter | string | null
    telefono?: BigIntNullableWithAggregatesFilter | bigint | number | null
    estado?: IntNullableWithAggregatesFilter | number | null
    operador?: StringNullableWithAggregatesFilter | string | null
    domicilio?: StringNullableWithAggregatesFilter | string | null
    mail?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
  }

  export type PRACTICAWhereInput = {
    AND?: PRACTICAWhereInput | PRACTICAWhereInput[]
    OR?: PRACTICAWhereInput[]
    NOT?: PRACTICAWhereInput | PRACTICAWhereInput[]
    SUC_PRA?: StringNullableFilter | string | null
    CONTRATO?: IntNullableFilter | number | null
    NRO_DNI?: IntNullableFilter | number | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    HORA?: StringNullableFilter | string | null
    NRO_ORDEN?: StringNullableFilter | string | null
    PRAC_REA?: StringNullableFilter | string | null
    CANT_PRA?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ANULADO?: IntNullableFilter | number | null
    OPERADOR?: StringNullableFilter | string | null
    OPE_ANU?: IntNullableFilter | number | null
    COD_PRAC?: StringNullableFilter | string | null
    idpractica?: IntFilter | number
    DESCRIP?: StringNullableFilter | string | null
  }

  export type PRACTICAOrderByWithRelationInput = {
    SUC_PRA?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    PRAC_REA?: SortOrderInput | SortOrder
    CANT_PRA?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    COD_PRAC?: SortOrderInput | SortOrder
    idpractica?: SortOrder
    DESCRIP?: SortOrderInput | SortOrder
  }

  export type PRACTICAWhereUniqueInput = {
    idpractica?: number
  }

  export type PRACTICAOrderByWithAggregationInput = {
    SUC_PRA?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DNI?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    NRO_ORDEN?: SortOrderInput | SortOrder
    PRAC_REA?: SortOrderInput | SortOrder
    CANT_PRA?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_ANU?: SortOrderInput | SortOrder
    COD_PRAC?: SortOrderInput | SortOrder
    idpractica?: SortOrder
    DESCRIP?: SortOrderInput | SortOrder
    _count?: PRACTICACountOrderByAggregateInput
    _avg?: PRACTICAAvgOrderByAggregateInput
    _max?: PRACTICAMaxOrderByAggregateInput
    _min?: PRACTICAMinOrderByAggregateInput
    _sum?: PRACTICASumOrderByAggregateInput
  }

  export type PRACTICAScalarWhereWithAggregatesInput = {
    AND?: PRACTICAScalarWhereWithAggregatesInput | PRACTICAScalarWhereWithAggregatesInput[]
    OR?: PRACTICAScalarWhereWithAggregatesInput[]
    NOT?: PRACTICAScalarWhereWithAggregatesInput | PRACTICAScalarWhereWithAggregatesInput[]
    SUC_PRA?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    NRO_DNI?: IntNullableWithAggregatesFilter | number | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    NRO_ORDEN?: StringNullableWithAggregatesFilter | string | null
    PRAC_REA?: StringNullableWithAggregatesFilter | string | null
    CANT_PRA?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    OPE_ANU?: IntNullableWithAggregatesFilter | number | null
    COD_PRAC?: StringNullableWithAggregatesFilter | string | null
    idpractica?: IntWithAggregatesFilter | number
    DESCRIP?: StringNullableWithAggregatesFilter | string | null
  }

  export type PRACT_ENFERWhereInput = {
    AND?: PRACT_ENFERWhereInput | PRACT_ENFERWhereInput[]
    OR?: PRACT_ENFERWhereInput[]
    NOT?: PRACT_ENFERWhereInput | PRACT_ENFERWhereInput[]
    idpractica?: IntFilter | number
    practica?: StringNullableFilter | string | null
    importe?: FloatNullableFilter | number | null
  }

  export type PRACT_ENFEROrderByWithRelationInput = {
    idpractica?: SortOrder
    practica?: SortOrderInput | SortOrder
    importe?: SortOrderInput | SortOrder
  }

  export type PRACT_ENFERWhereUniqueInput = {
    idpractica?: number
  }

  export type PRACT_ENFEROrderByWithAggregationInput = {
    idpractica?: SortOrder
    practica?: SortOrderInput | SortOrder
    importe?: SortOrderInput | SortOrder
    _count?: PRACT_ENFERCountOrderByAggregateInput
    _avg?: PRACT_ENFERAvgOrderByAggregateInput
    _max?: PRACT_ENFERMaxOrderByAggregateInput
    _min?: PRACT_ENFERMinOrderByAggregateInput
    _sum?: PRACT_ENFERSumOrderByAggregateInput
  }

  export type PRACT_ENFERScalarWhereWithAggregatesInput = {
    AND?: PRACT_ENFERScalarWhereWithAggregatesInput | PRACT_ENFERScalarWhereWithAggregatesInput[]
    OR?: PRACT_ENFERScalarWhereWithAggregatesInput[]
    NOT?: PRACT_ENFERScalarWhereWithAggregatesInput | PRACT_ENFERScalarWhereWithAggregatesInput[]
    idpractica?: IntWithAggregatesFilter | number
    practica?: StringNullableWithAggregatesFilter | string | null
    importe?: FloatNullableWithAggregatesFilter | number | null
  }

  export type PRESTADOWhereInput = {
    AND?: PRESTADOWhereInput | PRESTADOWhereInput[]
    OR?: PRESTADOWhereInput[]
    NOT?: PRESTADOWhereInput | PRESTADOWhereInput[]
    COD_PRES?: StringFilter | string
    NOMBRE?: StringNullableFilter | string | null
    ESPEC?: StringNullableFilter | string | null
    LIS_ESPE?: StringNullableFilter | string | null
    SUC?: StringNullableFilter | string | null
    DIRECCION?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    TELEFONOS?: StringNullableFilter | string | null
    HORARIO1?: StringNullableFilter | string | null
    HORARIO2?: StringNullableFilter | string | null
    MODALIDAD?: StringNullableFilter | string | null
    MATRICULA?: StringNullableFilter | string | null
    COD_POST?: IntNullableFilter | number | null
    AUSENTE?: IntNullableFilter | number | null
    DESDE?: DateTimeNullableFilter | Date | string | null
    HASTA?: DateTimeNullableFilter | Date | string | null
    CUIT?: StringNullableFilter | string | null
    FEC_NAC?: DateTimeNullableFilter | Date | string | null
    LUGAR?: IntNullableFilter | number | null
    MALA_PRAXI?: IntNullableFilter | number | null
    CON_PAGA?: IntNullableFilter | number | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    BAJA?: DateTimeNullableFilter | Date | string | null
    OTERO?: IntNullableFilter | number | null
    idprest?: IntFilter | number
    PROMO?: BoolNullableFilter | boolean | null
  }

  export type PRESTADOOrderByWithRelationInput = {
    COD_PRES?: SortOrder
    NOMBRE?: SortOrderInput | SortOrder
    ESPEC?: SortOrderInput | SortOrder
    LIS_ESPE?: SortOrderInput | SortOrder
    SUC?: SortOrderInput | SortOrder
    DIRECCION?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    TELEFONOS?: SortOrderInput | SortOrder
    HORARIO1?: SortOrderInput | SortOrder
    HORARIO2?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    MATRICULA?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    AUSENTE?: SortOrderInput | SortOrder
    DESDE?: SortOrderInput | SortOrder
    HASTA?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    FEC_NAC?: SortOrderInput | SortOrder
    LUGAR?: SortOrderInput | SortOrder
    MALA_PRAXI?: SortOrderInput | SortOrder
    CON_PAGA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    BAJA?: SortOrderInput | SortOrder
    OTERO?: SortOrderInput | SortOrder
    idprest?: SortOrder
    PROMO?: SortOrderInput | SortOrder
  }

  export type PRESTADOWhereUniqueInput = {
    idprest?: number
  }

  export type PRESTADOOrderByWithAggregationInput = {
    COD_PRES?: SortOrder
    NOMBRE?: SortOrderInput | SortOrder
    ESPEC?: SortOrderInput | SortOrder
    LIS_ESPE?: SortOrderInput | SortOrder
    SUC?: SortOrderInput | SortOrder
    DIRECCION?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    TELEFONOS?: SortOrderInput | SortOrder
    HORARIO1?: SortOrderInput | SortOrder
    HORARIO2?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    MATRICULA?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    AUSENTE?: SortOrderInput | SortOrder
    DESDE?: SortOrderInput | SortOrder
    HASTA?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    FEC_NAC?: SortOrderInput | SortOrder
    LUGAR?: SortOrderInput | SortOrder
    MALA_PRAXI?: SortOrderInput | SortOrder
    CON_PAGA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    BAJA?: SortOrderInput | SortOrder
    OTERO?: SortOrderInput | SortOrder
    idprest?: SortOrder
    PROMO?: SortOrderInput | SortOrder
    _count?: PRESTADOCountOrderByAggregateInput
    _avg?: PRESTADOAvgOrderByAggregateInput
    _max?: PRESTADOMaxOrderByAggregateInput
    _min?: PRESTADOMinOrderByAggregateInput
    _sum?: PRESTADOSumOrderByAggregateInput
  }

  export type PRESTADOScalarWhereWithAggregatesInput = {
    AND?: PRESTADOScalarWhereWithAggregatesInput | PRESTADOScalarWhereWithAggregatesInput[]
    OR?: PRESTADOScalarWhereWithAggregatesInput[]
    NOT?: PRESTADOScalarWhereWithAggregatesInput | PRESTADOScalarWhereWithAggregatesInput[]
    COD_PRES?: StringWithAggregatesFilter | string
    NOMBRE?: StringNullableWithAggregatesFilter | string | null
    ESPEC?: StringNullableWithAggregatesFilter | string | null
    LIS_ESPE?: StringNullableWithAggregatesFilter | string | null
    SUC?: StringNullableWithAggregatesFilter | string | null
    DIRECCION?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    TELEFONOS?: StringNullableWithAggregatesFilter | string | null
    HORARIO1?: StringNullableWithAggregatesFilter | string | null
    HORARIO2?: StringNullableWithAggregatesFilter | string | null
    MODALIDAD?: StringNullableWithAggregatesFilter | string | null
    MATRICULA?: StringNullableWithAggregatesFilter | string | null
    COD_POST?: IntNullableWithAggregatesFilter | number | null
    AUSENTE?: IntNullableWithAggregatesFilter | number | null
    DESDE?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HASTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CUIT?: StringNullableWithAggregatesFilter | string | null
    FEC_NAC?: DateTimeNullableWithAggregatesFilter | Date | string | null
    LUGAR?: IntNullableWithAggregatesFilter | number | null
    MALA_PRAXI?: IntNullableWithAggregatesFilter | number | null
    CON_PAGA?: IntNullableWithAggregatesFilter | number | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    BAJA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    OTERO?: IntNullableWithAggregatesFilter | number | null
    idprest?: IntWithAggregatesFilter | number
    PROMO?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type USOSWhereInput = {
    AND?: USOSWhereInput | USOSWhereInput[]
    OR?: USOSWhereInput[]
    NOT?: USOSWhereInput | USOSWhereInput[]
    SUC?: StringNullableFilter | string | null
    ORDEN?: StringNullableFilter | string | null
    CONTRATO?: IntNullableFilter | number | null
    NRO_ADH?: IntNullableFilter | number | null
    NRO_DOC?: IntNullableFilter | number | null
    PLAN?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    SEXO?: StringNullableFilter | string | null
    OBRA_SOC?: StringNullableFilter | string | null
    FECHA?: DateTimeNullableFilter | Date | string | null
    FEC_CAJA?: DateTimeNullableFilter | Date | string | null
    HORA?: StringNullableFilter | string | null
    SERVICIO?: StringNullableFilter | string | null
    NUSOS?: IntNullableFilter | number | null
    MODALIDAD?: StringNullableFilter | string | null
    VALOR?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    PUESTO?: StringNullableFilter | string | null
    PRESTADO?: StringNullableFilter | string | null
    ANULADO?: IntNullableFilter | number | null
    OPERADOR?: StringNullableFilter | string | null
    RENDIDO?: IntNullableFilter | number | null
    FECHA_CIERRE?: DateTimeNullableFilter | Date | string | null
    EMPRESA?: StringNullableFilter | string | null
    iduso?: IntFilter | number
    CONTROL?: BoolNullableFilter | boolean | null
    NORDEN?: StringNullableFilter | string | null
    FECHA_CONTROL?: DateTimeNullableFilter | Date | string | null
    IMP_LIQ?: FloatNullableFilter | number | null
  }

  export type USOSOrderByWithRelationInput = {
    SUC?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_ADH?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_CAJA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    SERVICIO?: SortOrderInput | SortOrder
    NUSOS?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    VALOR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    PRESTADO?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    RENDIDO?: SortOrderInput | SortOrder
    FECHA_CIERRE?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    iduso?: SortOrder
    CONTROL?: SortOrderInput | SortOrder
    NORDEN?: SortOrderInput | SortOrder
    FECHA_CONTROL?: SortOrderInput | SortOrder
    IMP_LIQ?: SortOrderInput | SortOrder
  }

  export type USOSWhereUniqueInput = {
    iduso?: number
  }

  export type USOSOrderByWithAggregationInput = {
    SUC?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_ADH?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_CAJA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    SERVICIO?: SortOrderInput | SortOrder
    NUSOS?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    VALOR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    PRESTADO?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    RENDIDO?: SortOrderInput | SortOrder
    FECHA_CIERRE?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    iduso?: SortOrder
    CONTROL?: SortOrderInput | SortOrder
    NORDEN?: SortOrderInput | SortOrder
    FECHA_CONTROL?: SortOrderInput | SortOrder
    IMP_LIQ?: SortOrderInput | SortOrder
    _count?: USOSCountOrderByAggregateInput
    _avg?: USOSAvgOrderByAggregateInput
    _max?: USOSMaxOrderByAggregateInput
    _min?: USOSMinOrderByAggregateInput
    _sum?: USOSSumOrderByAggregateInput
  }

  export type USOSScalarWhereWithAggregatesInput = {
    AND?: USOSScalarWhereWithAggregatesInput | USOSScalarWhereWithAggregatesInput[]
    OR?: USOSScalarWhereWithAggregatesInput[]
    NOT?: USOSScalarWhereWithAggregatesInput | USOSScalarWhereWithAggregatesInput[]
    SUC?: StringNullableWithAggregatesFilter | string | null
    ORDEN?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    NRO_ADH?: IntNullableWithAggregatesFilter | number | null
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    PLAN?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    SEXO?: StringNullableWithAggregatesFilter | string | null
    OBRA_SOC?: StringNullableWithAggregatesFilter | string | null
    FECHA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    FEC_CAJA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    SERVICIO?: StringNullableWithAggregatesFilter | string | null
    NUSOS?: IntNullableWithAggregatesFilter | number | null
    MODALIDAD?: StringNullableWithAggregatesFilter | string | null
    VALOR?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    PUESTO?: StringNullableWithAggregatesFilter | string | null
    PRESTADO?: StringNullableWithAggregatesFilter | string | null
    ANULADO?: IntNullableWithAggregatesFilter | number | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    RENDIDO?: IntNullableWithAggregatesFilter | number | null
    FECHA_CIERRE?: DateTimeNullableWithAggregatesFilter | Date | string | null
    EMPRESA?: StringNullableWithAggregatesFilter | string | null
    iduso?: IntWithAggregatesFilter | number
    CONTROL?: BoolNullableWithAggregatesFilter | boolean | null
    NORDEN?: StringNullableWithAggregatesFilter | string | null
    FECHA_CONTROL?: DateTimeNullableWithAggregatesFilter | Date | string | null
    IMP_LIQ?: FloatNullableWithAggregatesFilter | number | null
  }

  export type USOSFAWhereInput = {
    AND?: USOSFAWhereInput | USOSFAWhereInput[]
    OR?: USOSFAWhereInput[]
    NOT?: USOSFAWhereInput | USOSFAWhereInput[]
    SUC?: StringNullableFilter | string | null
    ORDEN?: StringNullableFilter | string | null
    CONTRATO?: StringNullableFilter | string | null
    NRO_ADH?: StringNullableFilter | string | null
    NRO_DOC?: StringNullableFilter | string | null
    PLAN?: StringNullableFilter | string | null
    EDAD?: StringNullableFilter | string | null
    SEXO?: StringNullableFilter | string | null
    OBRA_SOC?: StringNullableFilter | string | null
    FECHA?: StringNullableFilter | string | null
    FEC_CAJA?: StringNullableFilter | string | null
    HORA?: StringNullableFilter | string | null
    SERVICIO?: StringNullableFilter | string | null
    COMPROBA?: StringNullableFilter | string | null
    MODALIDAD?: StringNullableFilter | string | null
    VALOR?: StringNullableFilter | string | null
    IMPORTE?: StringNullableFilter | string | null
    PUESTO?: StringNullableFilter | string | null
    PRESTADO?: StringNullableFilter | string | null
    ANULADO?: StringNullableFilter | string | null
    OPERADOR?: StringNullableFilter | string | null
    OPE_AUTO?: StringNullableFilter | string | null
    FEC_USO?: StringNullableFilter | string | null
    PEDIDO?: StringNullableFilter | string | null
    NRO_RECETA?: StringNullableFilter | string | null
    COMP?: StringNullableFilter | string | null
    EMPRESA?: StringNullableFilter | string | null
    N_SERIE?: StringNullableFilter | string | null
    N_RECIBO?: StringNullableFilter | string | null
    IMP_NC?: StringNullableFilter | string | null
    CONTROL?: BoolNullableFilter | boolean | null
    NORDEN?: StringNullableFilter | string | null
    FECHA_CONTROL?: DateTimeNullableFilter | Date | string | null
    iduso?: IntFilter | number
    IMP_LIQ?: StringNullableFilter | string | null
  }

  export type USOSFAOrderByWithRelationInput = {
    SUC?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_ADH?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_CAJA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    SERVICIO?: SortOrderInput | SortOrder
    COMPROBA?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    VALOR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    PRESTADO?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_AUTO?: SortOrderInput | SortOrder
    FEC_USO?: SortOrderInput | SortOrder
    PEDIDO?: SortOrderInput | SortOrder
    NRO_RECETA?: SortOrderInput | SortOrder
    COMP?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    N_SERIE?: SortOrderInput | SortOrder
    N_RECIBO?: SortOrderInput | SortOrder
    IMP_NC?: SortOrderInput | SortOrder
    CONTROL?: SortOrderInput | SortOrder
    NORDEN?: SortOrderInput | SortOrder
    FECHA_CONTROL?: SortOrderInput | SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrderInput | SortOrder
  }

  export type USOSFAWhereUniqueInput = {
    iduso?: number
  }

  export type USOSFAOrderByWithAggregationInput = {
    SUC?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_ADH?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_CAJA?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    SERVICIO?: SortOrderInput | SortOrder
    COMPROBA?: SortOrderInput | SortOrder
    MODALIDAD?: SortOrderInput | SortOrder
    VALOR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    PRESTADO?: SortOrderInput | SortOrder
    ANULADO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OPE_AUTO?: SortOrderInput | SortOrder
    FEC_USO?: SortOrderInput | SortOrder
    PEDIDO?: SortOrderInput | SortOrder
    NRO_RECETA?: SortOrderInput | SortOrder
    COMP?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    N_SERIE?: SortOrderInput | SortOrder
    N_RECIBO?: SortOrderInput | SortOrder
    IMP_NC?: SortOrderInput | SortOrder
    CONTROL?: SortOrderInput | SortOrder
    NORDEN?: SortOrderInput | SortOrder
    FECHA_CONTROL?: SortOrderInput | SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrderInput | SortOrder
    _count?: USOSFACountOrderByAggregateInput
    _avg?: USOSFAAvgOrderByAggregateInput
    _max?: USOSFAMaxOrderByAggregateInput
    _min?: USOSFAMinOrderByAggregateInput
    _sum?: USOSFASumOrderByAggregateInput
  }

  export type USOSFAScalarWhereWithAggregatesInput = {
    AND?: USOSFAScalarWhereWithAggregatesInput | USOSFAScalarWhereWithAggregatesInput[]
    OR?: USOSFAScalarWhereWithAggregatesInput[]
    NOT?: USOSFAScalarWhereWithAggregatesInput | USOSFAScalarWhereWithAggregatesInput[]
    SUC?: StringNullableWithAggregatesFilter | string | null
    ORDEN?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: StringNullableWithAggregatesFilter | string | null
    NRO_ADH?: StringNullableWithAggregatesFilter | string | null
    NRO_DOC?: StringNullableWithAggregatesFilter | string | null
    PLAN?: StringNullableWithAggregatesFilter | string | null
    EDAD?: StringNullableWithAggregatesFilter | string | null
    SEXO?: StringNullableWithAggregatesFilter | string | null
    OBRA_SOC?: StringNullableWithAggregatesFilter | string | null
    FECHA?: StringNullableWithAggregatesFilter | string | null
    FEC_CAJA?: StringNullableWithAggregatesFilter | string | null
    HORA?: StringNullableWithAggregatesFilter | string | null
    SERVICIO?: StringNullableWithAggregatesFilter | string | null
    COMPROBA?: StringNullableWithAggregatesFilter | string | null
    MODALIDAD?: StringNullableWithAggregatesFilter | string | null
    VALOR?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: StringNullableWithAggregatesFilter | string | null
    PUESTO?: StringNullableWithAggregatesFilter | string | null
    PRESTADO?: StringNullableWithAggregatesFilter | string | null
    ANULADO?: StringNullableWithAggregatesFilter | string | null
    OPERADOR?: StringNullableWithAggregatesFilter | string | null
    OPE_AUTO?: StringNullableWithAggregatesFilter | string | null
    FEC_USO?: StringNullableWithAggregatesFilter | string | null
    PEDIDO?: StringNullableWithAggregatesFilter | string | null
    NRO_RECETA?: StringNullableWithAggregatesFilter | string | null
    COMP?: StringNullableWithAggregatesFilter | string | null
    EMPRESA?: StringNullableWithAggregatesFilter | string | null
    N_SERIE?: StringNullableWithAggregatesFilter | string | null
    N_RECIBO?: StringNullableWithAggregatesFilter | string | null
    IMP_NC?: StringNullableWithAggregatesFilter | string | null
    CONTROL?: BoolNullableWithAggregatesFilter | boolean | null
    NORDEN?: StringNullableWithAggregatesFilter | string | null
    FECHA_CONTROL?: DateTimeNullableWithAggregatesFilter | Date | string | null
    iduso?: IntWithAggregatesFilter | number
    IMP_LIQ?: StringNullableWithAggregatesFilter | string | null
  }

  export type adherent_proviWhereInput = {
    AND?: adherent_proviWhereInput | adherent_proviWhereInput[]
    OR?: adherent_proviWhereInput[]
    NOT?: adherent_proviWhereInput | adherent_proviWhereInput[]
    idadherent?: IntFilter | number
    CONTRATO?: IntNullableFilter | number | null
    NRO_DOC?: IntNullableFilter | number | null
    PLAN?: StringNullableFilter | string | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    NACIMIENTO?: DateTimeNullableFilter | Date | string | null
    EMPRESA?: StringNullableFilter | string | null
    ESTADO?: BoolNullableFilter | boolean | null
  }

  export type adherent_proviOrderByWithRelationInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
  }

  export type adherent_proviWhereUniqueInput = {
    idadherent?: number
  }

  export type adherent_proviOrderByWithAggregationInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
    _count?: adherent_proviCountOrderByAggregateInput
    _avg?: adherent_proviAvgOrderByAggregateInput
    _max?: adherent_proviMaxOrderByAggregateInput
    _min?: adherent_proviMinOrderByAggregateInput
    _sum?: adherent_proviSumOrderByAggregateInput
  }

  export type adherent_proviScalarWhereWithAggregatesInput = {
    AND?: adherent_proviScalarWhereWithAggregatesInput | adherent_proviScalarWhereWithAggregatesInput[]
    OR?: adherent_proviScalarWhereWithAggregatesInput[]
    NOT?: adherent_proviScalarWhereWithAggregatesInput | adherent_proviScalarWhereWithAggregatesInput[]
    idadherent?: IntWithAggregatesFilter | number
    CONTRATO?: IntNullableWithAggregatesFilter | number | null
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    PLAN?: StringNullableWithAggregatesFilter | string | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    NACIMIENTO?: DateTimeNullableWithAggregatesFilter | Date | string | null
    EMPRESA?: StringNullableWithAggregatesFilter | string | null
    ESTADO?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type nosociosWhereInput = {
    AND?: nosociosWhereInput | nosociosWhereInput[]
    OR?: nosociosWhereInput[]
    NOT?: nosociosWhereInput | nosociosWhereInput[]
    idnosocio?: IntFilter | number
    nosocio?: StringNullableFilter | string | null
    dni?: BigIntNullableFilter | bigint | number | null
    telefono?: StringNullableFilter | string | null
    mail?: StringNullableFilter | string | null
    obra_soc?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    codigo?: IntNullableFilter | number | null
    gremio?: StringNullableFilter | string | null
    estado?: BoolNullableFilter | boolean | null
    otra_os?: StringNullableFilter | string | null
  }

  export type nosociosOrderByWithRelationInput = {
    idnosocio?: SortOrder
    nosocio?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    gremio?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    otra_os?: SortOrderInput | SortOrder
  }

  export type nosociosWhereUniqueInput = {
    idnosocio?: number
  }

  export type nosociosOrderByWithAggregationInput = {
    idnosocio?: SortOrder
    nosocio?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    gremio?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    otra_os?: SortOrderInput | SortOrder
    _count?: nosociosCountOrderByAggregateInput
    _avg?: nosociosAvgOrderByAggregateInput
    _max?: nosociosMaxOrderByAggregateInput
    _min?: nosociosMinOrderByAggregateInput
    _sum?: nosociosSumOrderByAggregateInput
  }

  export type nosociosScalarWhereWithAggregatesInput = {
    AND?: nosociosScalarWhereWithAggregatesInput | nosociosScalarWhereWithAggregatesInput[]
    OR?: nosociosScalarWhereWithAggregatesInput[]
    NOT?: nosociosScalarWhereWithAggregatesInput | nosociosScalarWhereWithAggregatesInput[]
    idnosocio?: IntWithAggregatesFilter | number
    nosocio?: StringNullableWithAggregatesFilter | string | null
    dni?: BigIntNullableWithAggregatesFilter | bigint | number | null
    telefono?: StringNullableWithAggregatesFilter | string | null
    mail?: StringNullableWithAggregatesFilter | string | null
    obra_soc?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    codigo?: IntNullableWithAggregatesFilter | number | null
    gremio?: StringNullableWithAggregatesFilter | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
    otra_os?: StringNullableWithAggregatesFilter | string | null
  }

  export type planes_odontologicosWhereInput = {
    AND?: planes_odontologicosWhereInput | planes_odontologicosWhereInput[]
    OR?: planes_odontologicosWhereInput[]
    NOT?: planes_odontologicosWhereInput | planes_odontologicosWhereInput[]
    idplan?: IntFilter | number
    total?: FloatNullableFilter | number | null
    pago_inicial?: FloatNullableFilter | number | null
    detalle?: StringNullableFilter | string | null
    estado?: BoolNullableFilter | boolean | null
    visitas?: IntNullableFilter | number | null
    fecha_plan?: DateTimeNullableFilter | Date | string | null
    cuotas?: IntNullableFilter | number | null
    plan?: StringNullableFilter | string | null
  }

  export type planes_odontologicosOrderByWithRelationInput = {
    idplan?: SortOrder
    total?: SortOrderInput | SortOrder
    pago_inicial?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    visitas?: SortOrderInput | SortOrder
    fecha_plan?: SortOrderInput | SortOrder
    cuotas?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
  }

  export type planes_odontologicosWhereUniqueInput = {
    idplan?: number
  }

  export type planes_odontologicosOrderByWithAggregationInput = {
    idplan?: SortOrder
    total?: SortOrderInput | SortOrder
    pago_inicial?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    visitas?: SortOrderInput | SortOrder
    fecha_plan?: SortOrderInput | SortOrder
    cuotas?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    _count?: planes_odontologicosCountOrderByAggregateInput
    _avg?: planes_odontologicosAvgOrderByAggregateInput
    _max?: planes_odontologicosMaxOrderByAggregateInput
    _min?: planes_odontologicosMinOrderByAggregateInput
    _sum?: planes_odontologicosSumOrderByAggregateInput
  }

  export type planes_odontologicosScalarWhereWithAggregatesInput = {
    AND?: planes_odontologicosScalarWhereWithAggregatesInput | planes_odontologicosScalarWhereWithAggregatesInput[]
    OR?: planes_odontologicosScalarWhereWithAggregatesInput[]
    NOT?: planes_odontologicosScalarWhereWithAggregatesInput | planes_odontologicosScalarWhereWithAggregatesInput[]
    idplan?: IntWithAggregatesFilter | number
    total?: FloatNullableWithAggregatesFilter | number | null
    pago_inicial?: FloatNullableWithAggregatesFilter | number | null
    detalle?: StringNullableWithAggregatesFilter | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
    visitas?: IntNullableWithAggregatesFilter | number | null
    fecha_plan?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cuotas?: IntNullableWithAggregatesFilter | number | null
    plan?: StringNullableWithAggregatesFilter | string | null
  }

  export type planes_socioWhereInput = {
    AND?: planes_socioWhereInput | planes_socioWhereInput[]
    OR?: planes_socioWhereInput[]
    NOT?: planes_socioWhereInput | planes_socioWhereInput[]
    idplansocio?: IntFilter | number
    contrato?: IntNullableFilter | number | null
    dni?: IntNullableFilter | number | null
    socio?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    total?: FloatNullableFilter | number | null
    pagado?: FloatNullableFilter | number | null
    saldo?: FloatNullableFilter | number | null
    estado?: BoolNullableFilter | boolean | null
    prestador?: StringNullableFilter | string | null
    prestador_nombre?: StringNullableFilter | string | null
    operador?: StringNullableFilter | string | null
    sucursal?: StringNullableFilter | string | null
    plan?: StringNullableFilter | string | null
  }

  export type planes_socioOrderByWithRelationInput = {
    idplansocio?: SortOrder
    contrato?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    pagado?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    prestador?: SortOrderInput | SortOrder
    prestador_nombre?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
  }

  export type planes_socioWhereUniqueInput = {
    idplansocio?: number
  }

  export type planes_socioOrderByWithAggregationInput = {
    idplansocio?: SortOrder
    contrato?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    pagado?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    prestador?: SortOrderInput | SortOrder
    prestador_nombre?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    _count?: planes_socioCountOrderByAggregateInput
    _avg?: planes_socioAvgOrderByAggregateInput
    _max?: planes_socioMaxOrderByAggregateInput
    _min?: planes_socioMinOrderByAggregateInput
    _sum?: planes_socioSumOrderByAggregateInput
  }

  export type planes_socioScalarWhereWithAggregatesInput = {
    AND?: planes_socioScalarWhereWithAggregatesInput | planes_socioScalarWhereWithAggregatesInput[]
    OR?: planes_socioScalarWhereWithAggregatesInput[]
    NOT?: planes_socioScalarWhereWithAggregatesInput | planes_socioScalarWhereWithAggregatesInput[]
    idplansocio?: IntWithAggregatesFilter | number
    contrato?: IntNullableWithAggregatesFilter | number | null
    dni?: IntNullableWithAggregatesFilter | number | null
    socio?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    total?: FloatNullableWithAggregatesFilter | number | null
    pagado?: FloatNullableWithAggregatesFilter | number | null
    saldo?: FloatNullableWithAggregatesFilter | number | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
    prestador?: StringNullableWithAggregatesFilter | string | null
    prestador_nombre?: StringNullableWithAggregatesFilter | string | null
    operador?: StringNullableWithAggregatesFilter | string | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    plan?: StringNullableWithAggregatesFilter | string | null
  }

  export type planes_visitasWhereInput = {
    AND?: planes_visitasWhereInput | planes_visitasWhereInput[]
    OR?: planes_visitasWhereInput[]
    NOT?: planes_visitasWhereInput | planes_visitasWhereInput[]
    idvisita?: IntFilter | number
    idplan?: IntNullableFilter | number | null
    nvisita?: IntNullableFilter | number | null
    pago?: FloatNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    pagado?: BoolNullableFilter | boolean | null
    operador?: StringNullableFilter | string | null
    plan?: StringNullableFilter | string | null
  }

  export type planes_visitasOrderByWithRelationInput = {
    idvisita?: SortOrder
    idplan?: SortOrderInput | SortOrder
    nvisita?: SortOrderInput | SortOrder
    pago?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    pagado?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
  }

  export type planes_visitasWhereUniqueInput = {
    idvisita?: number
  }

  export type planes_visitasOrderByWithAggregationInput = {
    idvisita?: SortOrder
    idplan?: SortOrderInput | SortOrder
    nvisita?: SortOrderInput | SortOrder
    pago?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    pagado?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    _count?: planes_visitasCountOrderByAggregateInput
    _avg?: planes_visitasAvgOrderByAggregateInput
    _max?: planes_visitasMaxOrderByAggregateInput
    _min?: planes_visitasMinOrderByAggregateInput
    _sum?: planes_visitasSumOrderByAggregateInput
  }

  export type planes_visitasScalarWhereWithAggregatesInput = {
    AND?: planes_visitasScalarWhereWithAggregatesInput | planes_visitasScalarWhereWithAggregatesInput[]
    OR?: planes_visitasScalarWhereWithAggregatesInput[]
    NOT?: planes_visitasScalarWhereWithAggregatesInput | planes_visitasScalarWhereWithAggregatesInput[]
    idvisita?: IntWithAggregatesFilter | number
    idplan?: IntNullableWithAggregatesFilter | number | null
    nvisita?: IntNullableWithAggregatesFilter | number | null
    pago?: FloatNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    pagado?: BoolNullableWithAggregatesFilter | boolean | null
    operador?: StringNullableWithAggregatesFilter | string | null
    plan?: StringNullableWithAggregatesFilter | string | null
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    idpaciente?: IntFilter | number
    paciente?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
    obra_soc?: StringNullableFilter | string | null
    telefono?: BigIntNullableFilter | bigint | number | null
    domicilio?: StringNullableFilter | string | null
    mail?: StringNullableFilter | string | null
  }

  export type pacientesOrderByWithRelationInput = {
    idpaciente?: SortOrder
    paciente?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    domicilio?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
  }

  export type pacientesWhereUniqueInput = {
    idpaciente?: number
  }

  export type pacientesOrderByWithAggregationInput = {
    idpaciente?: SortOrder
    paciente?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    domicilio?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    idpaciente?: IntWithAggregatesFilter | number
    paciente?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
    obra_soc?: StringNullableWithAggregatesFilter | string | null
    telefono?: BigIntNullableWithAggregatesFilter | bigint | number | null
    domicilio?: StringNullableWithAggregatesFilter | string | null
    mail?: StringNullableWithAggregatesFilter | string | null
  }

  export type promocionesWhereInput = {
    AND?: promocionesWhereInput | promocionesWhereInput[]
    OR?: promocionesWhereInput[]
    NOT?: promocionesWhereInput | promocionesWhereInput[]
    idpromo?: IntFilter | number
    pot1?: IntNullableFilter | number | null
    pot2?: IntNullableFilter | number | null
    pint1?: IntNullableFilter | number | null
    pint2?: IntNullableFilter | number | null
  }

  export type promocionesOrderByWithRelationInput = {
    idpromo?: SortOrder
    pot1?: SortOrderInput | SortOrder
    pot2?: SortOrderInput | SortOrder
    pint1?: SortOrderInput | SortOrder
    pint2?: SortOrderInput | SortOrder
  }

  export type promocionesWhereUniqueInput = {
    idpromo?: number
  }

  export type promocionesOrderByWithAggregationInput = {
    idpromo?: SortOrder
    pot1?: SortOrderInput | SortOrder
    pot2?: SortOrderInput | SortOrder
    pint1?: SortOrderInput | SortOrder
    pint2?: SortOrderInput | SortOrder
    _count?: promocionesCountOrderByAggregateInput
    _avg?: promocionesAvgOrderByAggregateInput
    _max?: promocionesMaxOrderByAggregateInput
    _min?: promocionesMinOrderByAggregateInput
    _sum?: promocionesSumOrderByAggregateInput
  }

  export type promocionesScalarWhereWithAggregatesInput = {
    AND?: promocionesScalarWhereWithAggregatesInput | promocionesScalarWhereWithAggregatesInput[]
    OR?: promocionesScalarWhereWithAggregatesInput[]
    NOT?: promocionesScalarWhereWithAggregatesInput | promocionesScalarWhereWithAggregatesInput[]
    idpromo?: IntWithAggregatesFilter | number
    pot1?: IntNullableWithAggregatesFilter | number | null
    pot2?: IntNullableWithAggregatesFilter | number | null
    pint1?: IntNullableWithAggregatesFilter | number | null
    pint2?: IntNullableWithAggregatesFilter | number | null
  }

  export type AUT_PRACCreateInput = {
    ESP_PRAC?: string | null
    CODIGOS?: string | null
    DESCRIP?: string | null
    FECHA_ALT?: Date | string | null
    ANULADO?: number | null
    COD_PRES01?: string | null
    PRECIO_01?: string | null
    SUC_01?: string | null
    COD_PRES02?: string | null
    PRECIO_02?: string | null
    SUC_02?: string | null
    COD_PRES03?: string | null
    PRECIO_03?: string | null
    SUC_03?: string | null
    COD_PRES04?: string | null
    PRECIO_04?: string | null
    SUC_04?: string | null
    COD_PRES05?: string | null
    PRECIO_05?: number | null
    SUC_05?: string | null
    COD_PRES06?: string | null
    PRECIO_06?: number | null
    SUC_06?: string | null
    COD_PRES07?: string | null
    PRECIO_07?: number | null
    SUC_07?: string | null
    COD_PRES08?: string | null
    PRECIO_08?: number | null
    SUC_08?: string | null
    COD_PRES09?: string | null
    PRECIO_09?: number | null
    SUC_09?: string | null
    COD_PRES10?: string | null
    PRECIO_10?: string | null
    SUC_10?: string | null
    COD_PRES11?: string | null
    PRECIO_11?: string | null
    SUC_11?: string | null
    COD_PRES12?: string | null
    PRECIO_12?: string | null
    SUC_12?: string | null
    COD_PRES13?: string | null
    PRECIO_13?: string | null
    SUC_13?: string | null
    COD_PRES14?: string | null
    PRECIO_14?: string | null
    SUC_14?: string | null
    COD_PRES15?: string | null
    PRECIO_15?: string | null
    SUC_15?: string | null
    COD_PRES16?: string | null
    PRECIO_16?: number | null
    SUC_16?: string | null
    COD_PRES17?: string | null
    PRECIO_17?: number | null
    SUC_17?: string | null
    COD_PRES18?: string | null
    PRECIO_18?: number | null
    SUC_18?: string | null
    COD_PRES19?: string | null
    PRECIO_19?: number | null
    SUC_19?: string | null
    COD_PRES20?: string | null
    PRECIO_20?: number | null
    SUC_20?: string | null
  }

  export type AUT_PRACUncheckedCreateInput = {
    ESP_PRAC?: string | null
    CODIGOS?: string | null
    DESCRIP?: string | null
    FECHA_ALT?: Date | string | null
    ANULADO?: number | null
    COD_PRES01?: string | null
    PRECIO_01?: string | null
    SUC_01?: string | null
    COD_PRES02?: string | null
    PRECIO_02?: string | null
    SUC_02?: string | null
    COD_PRES03?: string | null
    PRECIO_03?: string | null
    SUC_03?: string | null
    COD_PRES04?: string | null
    PRECIO_04?: string | null
    SUC_04?: string | null
    COD_PRES05?: string | null
    PRECIO_05?: number | null
    SUC_05?: string | null
    COD_PRES06?: string | null
    PRECIO_06?: number | null
    SUC_06?: string | null
    COD_PRES07?: string | null
    PRECIO_07?: number | null
    SUC_07?: string | null
    COD_PRES08?: string | null
    PRECIO_08?: number | null
    SUC_08?: string | null
    COD_PRES09?: string | null
    PRECIO_09?: number | null
    SUC_09?: string | null
    COD_PRES10?: string | null
    PRECIO_10?: string | null
    SUC_10?: string | null
    COD_PRES11?: string | null
    PRECIO_11?: string | null
    SUC_11?: string | null
    COD_PRES12?: string | null
    PRECIO_12?: string | null
    SUC_12?: string | null
    COD_PRES13?: string | null
    PRECIO_13?: string | null
    SUC_13?: string | null
    COD_PRES14?: string | null
    PRECIO_14?: string | null
    SUC_14?: string | null
    COD_PRES15?: string | null
    PRECIO_15?: string | null
    SUC_15?: string | null
    COD_PRES16?: string | null
    PRECIO_16?: number | null
    SUC_16?: string | null
    COD_PRES17?: string | null
    PRECIO_17?: number | null
    SUC_17?: string | null
    COD_PRES18?: string | null
    PRECIO_18?: number | null
    SUC_18?: string | null
    COD_PRES19?: string | null
    PRECIO_19?: number | null
    SUC_19?: string | null
    COD_PRES20?: string | null
    PRECIO_20?: number | null
    SUC_20?: string | null
    idpractica?: number
  }

  export type AUT_PRACUpdateInput = {
    ESP_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_ALT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRES01?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_01?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_01?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES02?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_02?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_02?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES03?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_03?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_03?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES04?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_04?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_04?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES05?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_05?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_05?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES06?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_06?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_06?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES07?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_07?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_07?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES08?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_08?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_08?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES09?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_09?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_09?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES10?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_10?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_10?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES11?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_11?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_11?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES12?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_12?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_12?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES13?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_13?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_13?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES14?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_14?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_14?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES15?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_15?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_15?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES16?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_16?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_16?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES17?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_17?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_17?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES18?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_18?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_18?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES19?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_19?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_19?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES20?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_20?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_20?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AUT_PRACUncheckedUpdateInput = {
    ESP_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_ALT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRES01?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_01?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_01?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES02?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_02?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_02?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES03?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_03?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_03?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES04?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_04?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_04?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES05?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_05?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_05?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES06?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_06?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_06?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES07?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_07?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_07?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES08?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_08?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_08?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES09?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_09?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_09?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES10?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_10?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_10?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES11?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_11?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_11?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES12?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_12?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_12?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES13?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_13?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_13?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES14?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_14?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_14?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES15?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_15?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_15?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES16?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_16?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_16?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES17?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_17?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_17?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES18?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_18?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_18?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES19?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_19?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_19?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES20?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_20?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_20?: NullableStringFieldUpdateOperationsInput | string | null
    idpractica?: IntFieldUpdateOperationsInput | number
  }

  export type AUT_PRACCreateManyInput = {
    ESP_PRAC?: string | null
    CODIGOS?: string | null
    DESCRIP?: string | null
    FECHA_ALT?: Date | string | null
    ANULADO?: number | null
    COD_PRES01?: string | null
    PRECIO_01?: string | null
    SUC_01?: string | null
    COD_PRES02?: string | null
    PRECIO_02?: string | null
    SUC_02?: string | null
    COD_PRES03?: string | null
    PRECIO_03?: string | null
    SUC_03?: string | null
    COD_PRES04?: string | null
    PRECIO_04?: string | null
    SUC_04?: string | null
    COD_PRES05?: string | null
    PRECIO_05?: number | null
    SUC_05?: string | null
    COD_PRES06?: string | null
    PRECIO_06?: number | null
    SUC_06?: string | null
    COD_PRES07?: string | null
    PRECIO_07?: number | null
    SUC_07?: string | null
    COD_PRES08?: string | null
    PRECIO_08?: number | null
    SUC_08?: string | null
    COD_PRES09?: string | null
    PRECIO_09?: number | null
    SUC_09?: string | null
    COD_PRES10?: string | null
    PRECIO_10?: string | null
    SUC_10?: string | null
    COD_PRES11?: string | null
    PRECIO_11?: string | null
    SUC_11?: string | null
    COD_PRES12?: string | null
    PRECIO_12?: string | null
    SUC_12?: string | null
    COD_PRES13?: string | null
    PRECIO_13?: string | null
    SUC_13?: string | null
    COD_PRES14?: string | null
    PRECIO_14?: string | null
    SUC_14?: string | null
    COD_PRES15?: string | null
    PRECIO_15?: string | null
    SUC_15?: string | null
    COD_PRES16?: string | null
    PRECIO_16?: number | null
    SUC_16?: string | null
    COD_PRES17?: string | null
    PRECIO_17?: number | null
    SUC_17?: string | null
    COD_PRES18?: string | null
    PRECIO_18?: number | null
    SUC_18?: string | null
    COD_PRES19?: string | null
    PRECIO_19?: number | null
    SUC_19?: string | null
    COD_PRES20?: string | null
    PRECIO_20?: number | null
    SUC_20?: string | null
    idpractica?: number
  }

  export type AUT_PRACUpdateManyMutationInput = {
    ESP_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_ALT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRES01?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_01?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_01?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES02?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_02?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_02?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES03?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_03?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_03?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES04?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_04?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_04?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES05?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_05?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_05?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES06?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_06?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_06?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES07?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_07?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_07?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES08?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_08?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_08?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES09?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_09?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_09?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES10?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_10?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_10?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES11?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_11?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_11?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES12?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_12?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_12?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES13?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_13?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_13?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES14?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_14?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_14?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES15?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_15?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_15?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES16?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_16?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_16?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES17?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_17?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_17?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES18?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_18?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_18?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES19?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_19?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_19?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES20?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_20?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_20?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AUT_PRACUncheckedUpdateManyInput = {
    ESP_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_ALT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRES01?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_01?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_01?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES02?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_02?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_02?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES03?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_03?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_03?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES04?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_04?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_04?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES05?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_05?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_05?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES06?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_06?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_06?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES07?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_07?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_07?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES08?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_08?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_08?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES09?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_09?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_09?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES10?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_10?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_10?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES11?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_11?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_11?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES12?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_12?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_12?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES13?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_13?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_13?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES14?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_14?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_14?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES15?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_15?: NullableStringFieldUpdateOperationsInput | string | null
    SUC_15?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES16?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_16?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_16?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES17?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_17?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_17?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES18?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_18?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_18?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES19?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_19?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_19?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES20?: NullableStringFieldUpdateOperationsInput | string | null
    PRECIO_20?: NullableFloatFieldUpdateOperationsInput | number | null
    SUC_20?: NullableStringFieldUpdateOperationsInput | string | null
    idpractica?: IntFieldUpdateOperationsInput | number
  }

  export type CAJACreateInput = {
    SUCURSAL?: string | null
    PUESTO?: string | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    DET_AUX?: string | null
    FECHA?: Date | string | null
    FEC_COMP?: string | null
    HORA?: string | null
    ORIGEN?: string | null
    OPERADOR?: string | null
    ASIENTO?: number | null
    EXENTO?: string | null
    CANT_AFIL?: number | null
    CAE?: string | null
    VTO_CAE?: string | null
  }

  export type CAJAUncheckedCreateInput = {
    SUCURSAL?: string | null
    PUESTO?: string | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    DET_AUX?: string | null
    FECHA?: Date | string | null
    FEC_COMP?: string | null
    HORA?: string | null
    ORIGEN?: string | null
    OPERADOR?: string | null
    ASIENTO?: number | null
    EXENTO?: string | null
    CANT_AFIL?: number | null
    CAE?: string | null
    VTO_CAE?: string | null
    iditem?: number
  }

  export type CAJAUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DET_AUX?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    ORIGEN?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ASIENTO?: NullableIntFieldUpdateOperationsInput | number | null
    EXENTO?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_AFIL?: NullableIntFieldUpdateOperationsInput | number | null
    CAE?: NullableStringFieldUpdateOperationsInput | string | null
    VTO_CAE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CAJAUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DET_AUX?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    ORIGEN?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ASIENTO?: NullableIntFieldUpdateOperationsInput | number | null
    EXENTO?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_AFIL?: NullableIntFieldUpdateOperationsInput | number | null
    CAE?: NullableStringFieldUpdateOperationsInput | string | null
    VTO_CAE?: NullableStringFieldUpdateOperationsInput | string | null
    iditem?: IntFieldUpdateOperationsInput | number
  }

  export type CAJACreateManyInput = {
    SUCURSAL?: string | null
    PUESTO?: string | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    DET_AUX?: string | null
    FECHA?: Date | string | null
    FEC_COMP?: string | null
    HORA?: string | null
    ORIGEN?: string | null
    OPERADOR?: string | null
    ASIENTO?: number | null
    EXENTO?: string | null
    CANT_AFIL?: number | null
    CAE?: string | null
    VTO_CAE?: string | null
    iditem?: number
  }

  export type CAJAUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DET_AUX?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    ORIGEN?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ASIENTO?: NullableIntFieldUpdateOperationsInput | number | null
    EXENTO?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_AFIL?: NullableIntFieldUpdateOperationsInput | number | null
    CAE?: NullableStringFieldUpdateOperationsInput | string | null
    VTO_CAE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CAJAUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DET_AUX?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    ORIGEN?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ASIENTO?: NullableIntFieldUpdateOperationsInput | number | null
    EXENTO?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_AFIL?: NullableIntFieldUpdateOperationsInput | number | null
    CAE?: NullableStringFieldUpdateOperationsInput | string | null
    VTO_CAE?: NullableStringFieldUpdateOperationsInput | string | null
    iditem?: IntFieldUpdateOperationsInput | number
  }

  export type CONSULTACreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    COD_PRES?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    DIAGNOSTIC?: string | null
    ATENCION?: number | null
    NRO_DNI?: number | null
    SUC?: string | null
  }

  export type CONSULTAUncheckedCreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    COD_PRES?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    DIAGNOSTIC?: string | null
    ATENCION?: number | null
    NRO_DNI?: number | null
    idconsulta?: number
    SUC?: string | null
  }

  export type CONSULTAUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    DIAGNOSTIC?: NullableStringFieldUpdateOperationsInput | string | null
    ATENCION?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CONSULTAUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    DIAGNOSTIC?: NullableStringFieldUpdateOperationsInput | string | null
    ATENCION?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    idconsulta?: IntFieldUpdateOperationsInput | number
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CONSULTACreateManyInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    COD_PRES?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    DIAGNOSTIC?: string | null
    ATENCION?: number | null
    NRO_DNI?: number | null
    idconsulta?: number
    SUC?: string | null
  }

  export type CONSULTAUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    DIAGNOSTIC?: NullableStringFieldUpdateOperationsInput | string | null
    ATENCION?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CONSULTAUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PRES?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    DIAGNOSTIC?: NullableStringFieldUpdateOperationsInput | string | null
    ATENCION?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    idconsulta?: IntFieldUpdateOperationsInput | number
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ENFERMERCreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    PRACTICA?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    NRO_DNI?: number | null
    CANTIDAD?: number | null
    SUC?: string | null
  }

  export type ENFERMERUncheckedCreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    PRACTICA?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    NRO_DNI?: number | null
    idenfermer?: number
    CANTIDAD?: number | null
    SUC?: string | null
  }

  export type ENFERMERUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    PRACTICA?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    CANTIDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ENFERMERUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    PRACTICA?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    idenfermer?: IntFieldUpdateOperationsInput | number
    CANTIDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ENFERMERCreateManyInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    PRACTICA?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    NRO_DNI?: number | null
    idenfermer?: number
    CANTIDAD?: number | null
    SUC?: string | null
  }

  export type ENFERMERUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    PRACTICA?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    CANTIDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ENFERMERUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    PRACTICA?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    idenfermer?: IntFieldUpdateOperationsInput | number
    CANTIDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FARMACIACreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_DOC?: number | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    MODO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    FEC_USO?: Date | string | null
    CAN_MEDI?: number | null
    MATRICULA?: number | null
    HABILITA?: number | null
    SUC?: string | null
  }

  export type FARMACIAUncheckedCreateInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_DOC?: number | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    MODO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    FEC_USO?: Date | string | null
    CAN_MEDI?: number | null
    MATRICULA?: number | null
    HABILITA?: number | null
    idfarmacia?: number
    SUC?: string | null
  }

  export type FARMACIAUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    MODO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    FEC_USO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CAN_MEDI?: NullableIntFieldUpdateOperationsInput | number | null
    MATRICULA?: NullableIntFieldUpdateOperationsInput | number | null
    HABILITA?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FARMACIAUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    MODO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    FEC_USO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CAN_MEDI?: NullableIntFieldUpdateOperationsInput | number | null
    MATRICULA?: NullableIntFieldUpdateOperationsInput | number | null
    HABILITA?: NullableIntFieldUpdateOperationsInput | number | null
    idfarmacia?: IntFieldUpdateOperationsInput | number
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FARMACIACreateManyInput = {
    CONTRATO?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_DOC?: number | null
    NRO_ORDEN?: string | null
    DESTINO?: string | null
    MODO?: string | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    FEC_USO?: Date | string | null
    CAN_MEDI?: number | null
    MATRICULA?: number | null
    HABILITA?: number | null
    idfarmacia?: number
    SUC?: string | null
  }

  export type FARMACIAUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    MODO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    FEC_USO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CAN_MEDI?: NullableIntFieldUpdateOperationsInput | number | null
    MATRICULA?: NullableIntFieldUpdateOperationsInput | number | null
    HABILITA?: NullableIntFieldUpdateOperationsInput | number | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FARMACIAUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    MODO?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    FEC_USO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CAN_MEDI?: NullableIntFieldUpdateOperationsInput | number | null
    MATRICULA?: NullableIntFieldUpdateOperationsInput | number | null
    HABILITA?: NullableIntFieldUpdateOperationsInput | number | null
    idfarmacia?: IntFieldUpdateOperationsInput | number
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MEDICOS_TURNOSCreateInput = {
    turno?: string | null
    fecha?: Date | string | null
    hora?: string | null
    doctor?: string | null
    paciente?: string | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    estado?: number | null
    operador?: string | null
    domicilio?: string | null
    mail?: string | null
    dni?: number | null
  }

  export type MEDICOS_TURNOSUncheckedCreateInput = {
    idturno?: number
    turno?: string | null
    fecha?: Date | string | null
    hora?: string | null
    doctor?: string | null
    paciente?: string | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    estado?: number | null
    operador?: string | null
    domicilio?: string | null
    mail?: string | null
    dni?: number | null
  }

  export type MEDICOS_TURNOSUpdateInput = {
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MEDICOS_TURNOSUncheckedUpdateInput = {
    idturno?: IntFieldUpdateOperationsInput | number
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MEDICOS_TURNOSCreateManyInput = {
    idturno?: number
    turno?: string | null
    fecha?: Date | string | null
    hora?: string | null
    doctor?: string | null
    paciente?: string | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    estado?: number | null
    operador?: string | null
    domicilio?: string | null
    mail?: string | null
    dni?: number | null
  }

  export type MEDICOS_TURNOSUpdateManyMutationInput = {
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MEDICOS_TURNOSUncheckedUpdateManyInput = {
    idturno?: IntFieldUpdateOperationsInput | number
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PRACTICACreateInput = {
    SUC_PRA?: string | null
    CONTRATO?: number | null
    NRO_DNI?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    PRAC_REA?: string | null
    CANT_PRA?: number | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    COD_PRAC?: string | null
    DESCRIP?: string | null
  }

  export type PRACTICAUncheckedCreateInput = {
    SUC_PRA?: string | null
    CONTRATO?: number | null
    NRO_DNI?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    PRAC_REA?: string | null
    CANT_PRA?: number | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    COD_PRAC?: string | null
    idpractica?: number
    DESCRIP?: string | null
  }

  export type PRACTICAUpdateInput = {
    SUC_PRA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    PRAC_REA?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_PRA?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PRACTICAUncheckedUpdateInput = {
    SUC_PRA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    PRAC_REA?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_PRA?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    idpractica?: IntFieldUpdateOperationsInput | number
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PRACTICACreateManyInput = {
    SUC_PRA?: string | null
    CONTRATO?: number | null
    NRO_DNI?: number | null
    FECHA?: Date | string | null
    HORA?: string | null
    NRO_ORDEN?: string | null
    PRAC_REA?: string | null
    CANT_PRA?: number | null
    IMPORTE?: number | null
    ANULADO?: number | null
    OPERADOR?: string | null
    OPE_ANU?: number | null
    COD_PRAC?: string | null
    idpractica?: number
    DESCRIP?: string | null
  }

  export type PRACTICAUpdateManyMutationInput = {
    SUC_PRA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    PRAC_REA?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_PRA?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PRACTICAUncheckedUpdateManyInput = {
    SUC_PRA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DNI?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    PRAC_REA?: NullableStringFieldUpdateOperationsInput | string | null
    CANT_PRA?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_ANU?: NullableIntFieldUpdateOperationsInput | number | null
    COD_PRAC?: NullableStringFieldUpdateOperationsInput | string | null
    idpractica?: IntFieldUpdateOperationsInput | number
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PRACT_ENFERCreateInput = {
    practica?: string | null
    importe?: number | null
  }

  export type PRACT_ENFERUncheckedCreateInput = {
    idpractica?: number
    practica?: string | null
    importe?: number | null
  }

  export type PRACT_ENFERUpdateInput = {
    practica?: NullableStringFieldUpdateOperationsInput | string | null
    importe?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PRACT_ENFERUncheckedUpdateInput = {
    idpractica?: IntFieldUpdateOperationsInput | number
    practica?: NullableStringFieldUpdateOperationsInput | string | null
    importe?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PRACT_ENFERCreateManyInput = {
    idpractica?: number
    practica?: string | null
    importe?: number | null
  }

  export type PRACT_ENFERUpdateManyMutationInput = {
    practica?: NullableStringFieldUpdateOperationsInput | string | null
    importe?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PRACT_ENFERUncheckedUpdateManyInput = {
    idpractica?: IntFieldUpdateOperationsInput | number
    practica?: NullableStringFieldUpdateOperationsInput | string | null
    importe?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PRESTADOCreateInput = {
    COD_PRES: string
    NOMBRE?: string | null
    ESPEC?: string | null
    LIS_ESPE?: string | null
    SUC?: string | null
    DIRECCION?: string | null
    LOCALIDAD?: string | null
    TELEFONOS?: string | null
    HORARIO1?: string | null
    HORARIO2?: string | null
    MODALIDAD?: string | null
    MATRICULA?: string | null
    COD_POST?: number | null
    AUSENTE?: number | null
    DESDE?: Date | string | null
    HASTA?: Date | string | null
    CUIT?: string | null
    FEC_NAC?: Date | string | null
    LUGAR?: number | null
    MALA_PRAXI?: number | null
    CON_PAGA?: number | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    OTERO?: number | null
    PROMO?: boolean | null
  }

  export type PRESTADOUncheckedCreateInput = {
    COD_PRES: string
    NOMBRE?: string | null
    ESPEC?: string | null
    LIS_ESPE?: string | null
    SUC?: string | null
    DIRECCION?: string | null
    LOCALIDAD?: string | null
    TELEFONOS?: string | null
    HORARIO1?: string | null
    HORARIO2?: string | null
    MODALIDAD?: string | null
    MATRICULA?: string | null
    COD_POST?: number | null
    AUSENTE?: number | null
    DESDE?: Date | string | null
    HASTA?: Date | string | null
    CUIT?: string | null
    FEC_NAC?: Date | string | null
    LUGAR?: number | null
    MALA_PRAXI?: number | null
    CON_PAGA?: number | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    OTERO?: number | null
    idprest?: number
    PROMO?: boolean | null
  }

  export type PRESTADOUpdateInput = {
    COD_PRES?: StringFieldUpdateOperationsInput | string
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ESPEC?: NullableStringFieldUpdateOperationsInput | string | null
    LIS_ESPE?: NullableStringFieldUpdateOperationsInput | string | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONOS?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO1?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO2?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    MATRICULA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    AUSENTE?: NullableIntFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HASTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_NAC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LUGAR?: NullableIntFieldUpdateOperationsInput | number | null
    MALA_PRAXI?: NullableIntFieldUpdateOperationsInput | number | null
    CON_PAGA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OTERO?: NullableIntFieldUpdateOperationsInput | number | null
    PROMO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PRESTADOUncheckedUpdateInput = {
    COD_PRES?: StringFieldUpdateOperationsInput | string
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ESPEC?: NullableStringFieldUpdateOperationsInput | string | null
    LIS_ESPE?: NullableStringFieldUpdateOperationsInput | string | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONOS?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO1?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO2?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    MATRICULA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    AUSENTE?: NullableIntFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HASTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_NAC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LUGAR?: NullableIntFieldUpdateOperationsInput | number | null
    MALA_PRAXI?: NullableIntFieldUpdateOperationsInput | number | null
    CON_PAGA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OTERO?: NullableIntFieldUpdateOperationsInput | number | null
    idprest?: IntFieldUpdateOperationsInput | number
    PROMO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PRESTADOCreateManyInput = {
    COD_PRES: string
    NOMBRE?: string | null
    ESPEC?: string | null
    LIS_ESPE?: string | null
    SUC?: string | null
    DIRECCION?: string | null
    LOCALIDAD?: string | null
    TELEFONOS?: string | null
    HORARIO1?: string | null
    HORARIO2?: string | null
    MODALIDAD?: string | null
    MATRICULA?: string | null
    COD_POST?: number | null
    AUSENTE?: number | null
    DESDE?: Date | string | null
    HASTA?: Date | string | null
    CUIT?: string | null
    FEC_NAC?: Date | string | null
    LUGAR?: number | null
    MALA_PRAXI?: number | null
    CON_PAGA?: number | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    OTERO?: number | null
    idprest?: number
    PROMO?: boolean | null
  }

  export type PRESTADOUpdateManyMutationInput = {
    COD_PRES?: StringFieldUpdateOperationsInput | string
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ESPEC?: NullableStringFieldUpdateOperationsInput | string | null
    LIS_ESPE?: NullableStringFieldUpdateOperationsInput | string | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONOS?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO1?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO2?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    MATRICULA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    AUSENTE?: NullableIntFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HASTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_NAC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LUGAR?: NullableIntFieldUpdateOperationsInput | number | null
    MALA_PRAXI?: NullableIntFieldUpdateOperationsInput | number | null
    CON_PAGA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OTERO?: NullableIntFieldUpdateOperationsInput | number | null
    PROMO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PRESTADOUncheckedUpdateManyInput = {
    COD_PRES?: StringFieldUpdateOperationsInput | string
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ESPEC?: NullableStringFieldUpdateOperationsInput | string | null
    LIS_ESPE?: NullableStringFieldUpdateOperationsInput | string | null
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONOS?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO1?: NullableStringFieldUpdateOperationsInput | string | null
    HORARIO2?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    MATRICULA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    AUSENTE?: NullableIntFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HASTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_NAC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LUGAR?: NullableIntFieldUpdateOperationsInput | number | null
    MALA_PRAXI?: NullableIntFieldUpdateOperationsInput | number | null
    CON_PAGA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OTERO?: NullableIntFieldUpdateOperationsInput | number | null
    idprest?: IntFieldUpdateOperationsInput | number
    PROMO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type USOSCreateInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: number | null
    NRO_ADH?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    EDAD?: number | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: Date | string | null
    FEC_CAJA?: Date | string | null
    HORA?: string | null
    SERVICIO?: string | null
    NUSOS?: number | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: number | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: number | null
    OPERADOR?: string | null
    RENDIDO?: number | null
    FECHA_CIERRE?: Date | string | null
    EMPRESA?: string | null
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    IMP_LIQ?: number | null
  }

  export type USOSUncheckedCreateInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: number | null
    NRO_ADH?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    EDAD?: number | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: Date | string | null
    FEC_CAJA?: Date | string | null
    HORA?: string | null
    SERVICIO?: string | null
    NUSOS?: number | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: number | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: number | null
    OPERADOR?: string | null
    RENDIDO?: number | null
    FECHA_CIERRE?: Date | string | null
    EMPRESA?: string | null
    iduso?: number
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    IMP_LIQ?: number | null
  }

  export type USOSUpdateInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ADH?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_CAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    NUSOS?: NullableIntFieldUpdateOperationsInput | number | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CIERRE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type USOSUncheckedUpdateInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ADH?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_CAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    NUSOS?: NullableIntFieldUpdateOperationsInput | number | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CIERRE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    iduso?: IntFieldUpdateOperationsInput | number
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type USOSCreateManyInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: number | null
    NRO_ADH?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    EDAD?: number | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: Date | string | null
    FEC_CAJA?: Date | string | null
    HORA?: string | null
    SERVICIO?: string | null
    NUSOS?: number | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: number | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: number | null
    OPERADOR?: string | null
    RENDIDO?: number | null
    FECHA_CIERRE?: Date | string | null
    EMPRESA?: string | null
    iduso?: number
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    IMP_LIQ?: number | null
  }

  export type USOSUpdateManyMutationInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ADH?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_CAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    NUSOS?: NullableIntFieldUpdateOperationsInput | number | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CIERRE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type USOSUncheckedUpdateManyInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_ADH?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FEC_CAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    NUSOS?: NullableIntFieldUpdateOperationsInput | number | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CIERRE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    iduso?: IntFieldUpdateOperationsInput | number
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type USOSFACreateInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: string | null
    NRO_ADH?: string | null
    NRO_DOC?: string | null
    PLAN?: string | null
    EDAD?: string | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: string | null
    FEC_CAJA?: string | null
    HORA?: string | null
    SERVICIO?: string | null
    COMPROBA?: string | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: string | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: string | null
    OPERADOR?: string | null
    OPE_AUTO?: string | null
    FEC_USO?: string | null
    PEDIDO?: string | null
    NRO_RECETA?: string | null
    COMP?: string | null
    EMPRESA?: string | null
    N_SERIE?: string | null
    N_RECIBO?: string | null
    IMP_NC?: string | null
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    IMP_LIQ?: string | null
  }

  export type USOSFAUncheckedCreateInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: string | null
    NRO_ADH?: string | null
    NRO_DOC?: string | null
    PLAN?: string | null
    EDAD?: string | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: string | null
    FEC_CAJA?: string | null
    HORA?: string | null
    SERVICIO?: string | null
    COMPROBA?: string | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: string | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: string | null
    OPERADOR?: string | null
    OPE_AUTO?: string | null
    FEC_USO?: string | null
    PEDIDO?: string | null
    NRO_RECETA?: string | null
    COMP?: string | null
    EMPRESA?: string | null
    N_SERIE?: string | null
    N_RECIBO?: string | null
    IMP_NC?: string | null
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    iduso?: number
    IMP_LIQ?: string | null
  }

  export type USOSFAUpdateInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ADH?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPROBA?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_AUTO?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_USO?: NullableStringFieldUpdateOperationsInput | string | null
    PEDIDO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_RECETA?: NullableStringFieldUpdateOperationsInput | string | null
    COMP?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    N_SERIE?: NullableStringFieldUpdateOperationsInput | string | null
    N_RECIBO?: NullableStringFieldUpdateOperationsInput | string | null
    IMP_NC?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USOSFAUncheckedUpdateInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ADH?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPROBA?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_AUTO?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_USO?: NullableStringFieldUpdateOperationsInput | string | null
    PEDIDO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_RECETA?: NullableStringFieldUpdateOperationsInput | string | null
    COMP?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    N_SERIE?: NullableStringFieldUpdateOperationsInput | string | null
    N_RECIBO?: NullableStringFieldUpdateOperationsInput | string | null
    IMP_NC?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iduso?: IntFieldUpdateOperationsInput | number
    IMP_LIQ?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USOSFACreateManyInput = {
    SUC?: string | null
    ORDEN?: string | null
    CONTRATO?: string | null
    NRO_ADH?: string | null
    NRO_DOC?: string | null
    PLAN?: string | null
    EDAD?: string | null
    SEXO?: string | null
    OBRA_SOC?: string | null
    FECHA?: string | null
    FEC_CAJA?: string | null
    HORA?: string | null
    SERVICIO?: string | null
    COMPROBA?: string | null
    MODALIDAD?: string | null
    VALOR?: string | null
    IMPORTE?: string | null
    PUESTO?: string | null
    PRESTADO?: string | null
    ANULADO?: string | null
    OPERADOR?: string | null
    OPE_AUTO?: string | null
    FEC_USO?: string | null
    PEDIDO?: string | null
    NRO_RECETA?: string | null
    COMP?: string | null
    EMPRESA?: string | null
    N_SERIE?: string | null
    N_RECIBO?: string | null
    IMP_NC?: string | null
    CONTROL?: boolean | null
    NORDEN?: string | null
    FECHA_CONTROL?: Date | string | null
    iduso?: number
    IMP_LIQ?: string | null
  }

  export type USOSFAUpdateManyMutationInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ADH?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPROBA?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_AUTO?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_USO?: NullableStringFieldUpdateOperationsInput | string | null
    PEDIDO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_RECETA?: NullableStringFieldUpdateOperationsInput | string | null
    COMP?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    N_SERIE?: NullableStringFieldUpdateOperationsInput | string | null
    N_RECIBO?: NullableStringFieldUpdateOperationsInput | string | null
    IMP_NC?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IMP_LIQ?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USOSFAUncheckedUpdateManyInput = {
    SUC?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_ADH?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    SERVICIO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPROBA?: NullableStringFieldUpdateOperationsInput | string | null
    MODALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableStringFieldUpdateOperationsInput | string | null
    PRESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    ANULADO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OPE_AUTO?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_USO?: NullableStringFieldUpdateOperationsInput | string | null
    PEDIDO?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_RECETA?: NullableStringFieldUpdateOperationsInput | string | null
    COMP?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    N_SERIE?: NullableStringFieldUpdateOperationsInput | string | null
    N_RECIBO?: NullableStringFieldUpdateOperationsInput | string | null
    IMP_NC?: NullableStringFieldUpdateOperationsInput | string | null
    CONTROL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_CONTROL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iduso?: IntFieldUpdateOperationsInput | number
    IMP_LIQ?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adherent_proviCreateInput = {
    CONTRATO?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    EMPRESA?: string | null
    ESTADO?: boolean | null
  }

  export type adherent_proviUncheckedCreateInput = {
    idadherent?: number
    CONTRATO?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    EMPRESA?: string | null
    ESTADO?: boolean | null
  }

  export type adherent_proviUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adherent_proviUncheckedUpdateInput = {
    idadherent?: IntFieldUpdateOperationsInput | number
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adherent_proviCreateManyInput = {
    idadherent?: number
    CONTRATO?: number | null
    NRO_DOC?: number | null
    PLAN?: string | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    EMPRESA?: string | null
    ESTADO?: boolean | null
  }

  export type adherent_proviUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adherent_proviUncheckedUpdateManyInput = {
    idadherent?: IntFieldUpdateOperationsInput | number
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type nosociosCreateInput = {
    nosocio?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    obra_soc?: string | null
    fecha?: Date | string | null
    codigo?: number | null
    gremio?: string | null
    estado?: boolean | null
    otra_os?: string | null
  }

  export type nosociosUncheckedCreateInput = {
    idnosocio?: number
    nosocio?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    obra_soc?: string | null
    fecha?: Date | string | null
    codigo?: number | null
    gremio?: string | null
    estado?: boolean | null
    otra_os?: string | null
  }

  export type nosociosUpdateInput = {
    nosocio?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    gremio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otra_os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nosociosUncheckedUpdateInput = {
    idnosocio?: IntFieldUpdateOperationsInput | number
    nosocio?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    gremio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otra_os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nosociosCreateManyInput = {
    idnosocio?: number
    nosocio?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    obra_soc?: string | null
    fecha?: Date | string | null
    codigo?: number | null
    gremio?: string | null
    estado?: boolean | null
    otra_os?: string | null
  }

  export type nosociosUpdateManyMutationInput = {
    nosocio?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    gremio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otra_os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nosociosUncheckedUpdateManyInput = {
    idnosocio?: IntFieldUpdateOperationsInput | number
    nosocio?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    gremio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otra_os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_odontologicosCreateInput = {
    total?: number | null
    pago_inicial?: number | null
    detalle?: string | null
    estado?: boolean | null
    visitas?: number | null
    fecha_plan?: Date | string | null
    cuotas?: number | null
    plan?: string | null
  }

  export type planes_odontologicosUncheckedCreateInput = {
    idplan?: number
    total?: number | null
    pago_inicial?: number | null
    detalle?: string | null
    estado?: boolean | null
    visitas?: number | null
    fecha_plan?: Date | string | null
    cuotas?: number | null
    plan?: string | null
  }

  export type planes_odontologicosUpdateInput = {
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pago_inicial?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visitas?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_odontologicosUncheckedUpdateInput = {
    idplan?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pago_inicial?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visitas?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_odontologicosCreateManyInput = {
    idplan?: number
    total?: number | null
    pago_inicial?: number | null
    detalle?: string | null
    estado?: boolean | null
    visitas?: number | null
    fecha_plan?: Date | string | null
    cuotas?: number | null
    plan?: string | null
  }

  export type planes_odontologicosUpdateManyMutationInput = {
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pago_inicial?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visitas?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_odontologicosUncheckedUpdateManyInput = {
    idplan?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pago_inicial?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visitas?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_socioCreateInput = {
    contrato?: number | null
    dni?: number | null
    socio?: string | null
    fecha?: Date | string | null
    total?: number | null
    pagado?: number | null
    saldo?: number | null
    estado?: boolean | null
    prestador?: string | null
    prestador_nombre?: string | null
    operador?: string | null
    sucursal?: string | null
    plan?: string | null
  }

  export type planes_socioUncheckedCreateInput = {
    idplansocio?: number
    contrato?: number | null
    dni?: number | null
    socio?: string | null
    fecha?: Date | string | null
    total?: number | null
    pagado?: number | null
    saldo?: number | null
    estado?: boolean | null
    prestador?: string | null
    prestador_nombre?: string | null
    operador?: string | null
    sucursal?: string | null
    plan?: string | null
  }

  export type planes_socioUpdateInput = {
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    socio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pagado?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: NullableStringFieldUpdateOperationsInput | string | null
    prestador_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_socioUncheckedUpdateInput = {
    idplansocio?: IntFieldUpdateOperationsInput | number
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    socio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pagado?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: NullableStringFieldUpdateOperationsInput | string | null
    prestador_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_socioCreateManyInput = {
    idplansocio?: number
    contrato?: number | null
    dni?: number | null
    socio?: string | null
    fecha?: Date | string | null
    total?: number | null
    pagado?: number | null
    saldo?: number | null
    estado?: boolean | null
    prestador?: string | null
    prestador_nombre?: string | null
    operador?: string | null
    sucursal?: string | null
    plan?: string | null
  }

  export type planes_socioUpdateManyMutationInput = {
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    socio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pagado?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: NullableStringFieldUpdateOperationsInput | string | null
    prestador_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_socioUncheckedUpdateManyInput = {
    idplansocio?: IntFieldUpdateOperationsInput | number
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    socio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    pagado?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: NullableStringFieldUpdateOperationsInput | string | null
    prestador_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_visitasCreateInput = {
    idplan?: number | null
    nvisita?: number | null
    pago?: number | null
    fecha?: Date | string | null
    pagado?: boolean | null
    operador?: string | null
    plan?: string | null
  }

  export type planes_visitasUncheckedCreateInput = {
    idvisita?: number
    idplan?: number | null
    nvisita?: number | null
    pago?: number | null
    fecha?: Date | string | null
    pagado?: boolean | null
    operador?: string | null
    plan?: string | null
  }

  export type planes_visitasUpdateInput = {
    idplan?: NullableIntFieldUpdateOperationsInput | number | null
    nvisita?: NullableIntFieldUpdateOperationsInput | number | null
    pago?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_visitasUncheckedUpdateInput = {
    idvisita?: IntFieldUpdateOperationsInput | number
    idplan?: NullableIntFieldUpdateOperationsInput | number | null
    nvisita?: NullableIntFieldUpdateOperationsInput | number | null
    pago?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_visitasCreateManyInput = {
    idvisita?: number
    idplan?: number | null
    nvisita?: number | null
    pago?: number | null
    fecha?: Date | string | null
    pagado?: boolean | null
    operador?: string | null
    plan?: string | null
  }

  export type planes_visitasUpdateManyMutationInput = {
    idplan?: NullableIntFieldUpdateOperationsInput | number | null
    nvisita?: NullableIntFieldUpdateOperationsInput | number | null
    pago?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type planes_visitasUncheckedUpdateManyInput = {
    idvisita?: IntFieldUpdateOperationsInput | number
    idplan?: NullableIntFieldUpdateOperationsInput | number | null
    nvisita?: NullableIntFieldUpdateOperationsInput | number | null
    pago?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesCreateInput = {
    paciente?: string | null
    dni?: number | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    domicilio?: string | null
    mail?: string | null
  }

  export type pacientesUncheckedCreateInput = {
    idpaciente?: number
    paciente?: string | null
    dni?: number | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    domicilio?: string | null
    mail?: string | null
  }

  export type pacientesUpdateInput = {
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUncheckedUpdateInput = {
    idpaciente?: IntFieldUpdateOperationsInput | number
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesCreateManyInput = {
    idpaciente?: number
    paciente?: string | null
    dni?: number | null
    obra_soc?: string | null
    telefono?: bigint | number | null
    domicilio?: string | null
    mail?: string | null
  }

  export type pacientesUpdateManyMutationInput = {
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUncheckedUpdateManyInput = {
    idpaciente?: IntFieldUpdateOperationsInput | number
    paciente?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type promocionesCreateInput = {
    pot1?: number | null
    pot2?: number | null
    pint1?: number | null
    pint2?: number | null
  }

  export type promocionesUncheckedCreateInput = {
    idpromo?: number
    pot1?: number | null
    pot2?: number | null
    pint1?: number | null
    pint2?: number | null
  }

  export type promocionesUpdateInput = {
    pot1?: NullableIntFieldUpdateOperationsInput | number | null
    pot2?: NullableIntFieldUpdateOperationsInput | number | null
    pint1?: NullableIntFieldUpdateOperationsInput | number | null
    pint2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type promocionesUncheckedUpdateInput = {
    idpromo?: IntFieldUpdateOperationsInput | number
    pot1?: NullableIntFieldUpdateOperationsInput | number | null
    pot2?: NullableIntFieldUpdateOperationsInput | number | null
    pint1?: NullableIntFieldUpdateOperationsInput | number | null
    pint2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type promocionesCreateManyInput = {
    idpromo?: number
    pot1?: number | null
    pot2?: number | null
    pint1?: number | null
    pint2?: number | null
  }

  export type promocionesUpdateManyMutationInput = {
    pot1?: NullableIntFieldUpdateOperationsInput | number | null
    pot2?: NullableIntFieldUpdateOperationsInput | number | null
    pint1?: NullableIntFieldUpdateOperationsInput | number | null
    pint2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type promocionesUncheckedUpdateManyInput = {
    idpromo?: IntFieldUpdateOperationsInput | number
    pot1?: NullableIntFieldUpdateOperationsInput | number | null
    pot2?: NullableIntFieldUpdateOperationsInput | number | null
    pint1?: NullableIntFieldUpdateOperationsInput | number | null
    pint2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AUT_PRACCountOrderByAggregateInput = {
    ESP_PRAC?: SortOrder
    CODIGOS?: SortOrder
    DESCRIP?: SortOrder
    FECHA_ALT?: SortOrder
    ANULADO?: SortOrder
    COD_PRES01?: SortOrder
    PRECIO_01?: SortOrder
    SUC_01?: SortOrder
    COD_PRES02?: SortOrder
    PRECIO_02?: SortOrder
    SUC_02?: SortOrder
    COD_PRES03?: SortOrder
    PRECIO_03?: SortOrder
    SUC_03?: SortOrder
    COD_PRES04?: SortOrder
    PRECIO_04?: SortOrder
    SUC_04?: SortOrder
    COD_PRES05?: SortOrder
    PRECIO_05?: SortOrder
    SUC_05?: SortOrder
    COD_PRES06?: SortOrder
    PRECIO_06?: SortOrder
    SUC_06?: SortOrder
    COD_PRES07?: SortOrder
    PRECIO_07?: SortOrder
    SUC_07?: SortOrder
    COD_PRES08?: SortOrder
    PRECIO_08?: SortOrder
    SUC_08?: SortOrder
    COD_PRES09?: SortOrder
    PRECIO_09?: SortOrder
    SUC_09?: SortOrder
    COD_PRES10?: SortOrder
    PRECIO_10?: SortOrder
    SUC_10?: SortOrder
    COD_PRES11?: SortOrder
    PRECIO_11?: SortOrder
    SUC_11?: SortOrder
    COD_PRES12?: SortOrder
    PRECIO_12?: SortOrder
    SUC_12?: SortOrder
    COD_PRES13?: SortOrder
    PRECIO_13?: SortOrder
    SUC_13?: SortOrder
    COD_PRES14?: SortOrder
    PRECIO_14?: SortOrder
    SUC_14?: SortOrder
    COD_PRES15?: SortOrder
    PRECIO_15?: SortOrder
    SUC_15?: SortOrder
    COD_PRES16?: SortOrder
    PRECIO_16?: SortOrder
    SUC_16?: SortOrder
    COD_PRES17?: SortOrder
    PRECIO_17?: SortOrder
    SUC_17?: SortOrder
    COD_PRES18?: SortOrder
    PRECIO_18?: SortOrder
    SUC_18?: SortOrder
    COD_PRES19?: SortOrder
    PRECIO_19?: SortOrder
    SUC_19?: SortOrder
    COD_PRES20?: SortOrder
    PRECIO_20?: SortOrder
    SUC_20?: SortOrder
    idpractica?: SortOrder
  }

  export type AUT_PRACAvgOrderByAggregateInput = {
    ANULADO?: SortOrder
    PRECIO_05?: SortOrder
    PRECIO_06?: SortOrder
    PRECIO_07?: SortOrder
    PRECIO_08?: SortOrder
    PRECIO_09?: SortOrder
    PRECIO_16?: SortOrder
    PRECIO_17?: SortOrder
    PRECIO_18?: SortOrder
    PRECIO_19?: SortOrder
    PRECIO_20?: SortOrder
    idpractica?: SortOrder
  }

  export type AUT_PRACMaxOrderByAggregateInput = {
    ESP_PRAC?: SortOrder
    CODIGOS?: SortOrder
    DESCRIP?: SortOrder
    FECHA_ALT?: SortOrder
    ANULADO?: SortOrder
    COD_PRES01?: SortOrder
    PRECIO_01?: SortOrder
    SUC_01?: SortOrder
    COD_PRES02?: SortOrder
    PRECIO_02?: SortOrder
    SUC_02?: SortOrder
    COD_PRES03?: SortOrder
    PRECIO_03?: SortOrder
    SUC_03?: SortOrder
    COD_PRES04?: SortOrder
    PRECIO_04?: SortOrder
    SUC_04?: SortOrder
    COD_PRES05?: SortOrder
    PRECIO_05?: SortOrder
    SUC_05?: SortOrder
    COD_PRES06?: SortOrder
    PRECIO_06?: SortOrder
    SUC_06?: SortOrder
    COD_PRES07?: SortOrder
    PRECIO_07?: SortOrder
    SUC_07?: SortOrder
    COD_PRES08?: SortOrder
    PRECIO_08?: SortOrder
    SUC_08?: SortOrder
    COD_PRES09?: SortOrder
    PRECIO_09?: SortOrder
    SUC_09?: SortOrder
    COD_PRES10?: SortOrder
    PRECIO_10?: SortOrder
    SUC_10?: SortOrder
    COD_PRES11?: SortOrder
    PRECIO_11?: SortOrder
    SUC_11?: SortOrder
    COD_PRES12?: SortOrder
    PRECIO_12?: SortOrder
    SUC_12?: SortOrder
    COD_PRES13?: SortOrder
    PRECIO_13?: SortOrder
    SUC_13?: SortOrder
    COD_PRES14?: SortOrder
    PRECIO_14?: SortOrder
    SUC_14?: SortOrder
    COD_PRES15?: SortOrder
    PRECIO_15?: SortOrder
    SUC_15?: SortOrder
    COD_PRES16?: SortOrder
    PRECIO_16?: SortOrder
    SUC_16?: SortOrder
    COD_PRES17?: SortOrder
    PRECIO_17?: SortOrder
    SUC_17?: SortOrder
    COD_PRES18?: SortOrder
    PRECIO_18?: SortOrder
    SUC_18?: SortOrder
    COD_PRES19?: SortOrder
    PRECIO_19?: SortOrder
    SUC_19?: SortOrder
    COD_PRES20?: SortOrder
    PRECIO_20?: SortOrder
    SUC_20?: SortOrder
    idpractica?: SortOrder
  }

  export type AUT_PRACMinOrderByAggregateInput = {
    ESP_PRAC?: SortOrder
    CODIGOS?: SortOrder
    DESCRIP?: SortOrder
    FECHA_ALT?: SortOrder
    ANULADO?: SortOrder
    COD_PRES01?: SortOrder
    PRECIO_01?: SortOrder
    SUC_01?: SortOrder
    COD_PRES02?: SortOrder
    PRECIO_02?: SortOrder
    SUC_02?: SortOrder
    COD_PRES03?: SortOrder
    PRECIO_03?: SortOrder
    SUC_03?: SortOrder
    COD_PRES04?: SortOrder
    PRECIO_04?: SortOrder
    SUC_04?: SortOrder
    COD_PRES05?: SortOrder
    PRECIO_05?: SortOrder
    SUC_05?: SortOrder
    COD_PRES06?: SortOrder
    PRECIO_06?: SortOrder
    SUC_06?: SortOrder
    COD_PRES07?: SortOrder
    PRECIO_07?: SortOrder
    SUC_07?: SortOrder
    COD_PRES08?: SortOrder
    PRECIO_08?: SortOrder
    SUC_08?: SortOrder
    COD_PRES09?: SortOrder
    PRECIO_09?: SortOrder
    SUC_09?: SortOrder
    COD_PRES10?: SortOrder
    PRECIO_10?: SortOrder
    SUC_10?: SortOrder
    COD_PRES11?: SortOrder
    PRECIO_11?: SortOrder
    SUC_11?: SortOrder
    COD_PRES12?: SortOrder
    PRECIO_12?: SortOrder
    SUC_12?: SortOrder
    COD_PRES13?: SortOrder
    PRECIO_13?: SortOrder
    SUC_13?: SortOrder
    COD_PRES14?: SortOrder
    PRECIO_14?: SortOrder
    SUC_14?: SortOrder
    COD_PRES15?: SortOrder
    PRECIO_15?: SortOrder
    SUC_15?: SortOrder
    COD_PRES16?: SortOrder
    PRECIO_16?: SortOrder
    SUC_16?: SortOrder
    COD_PRES17?: SortOrder
    PRECIO_17?: SortOrder
    SUC_17?: SortOrder
    COD_PRES18?: SortOrder
    PRECIO_18?: SortOrder
    SUC_18?: SortOrder
    COD_PRES19?: SortOrder
    PRECIO_19?: SortOrder
    SUC_19?: SortOrder
    COD_PRES20?: SortOrder
    PRECIO_20?: SortOrder
    SUC_20?: SortOrder
    idpractica?: SortOrder
  }

  export type AUT_PRACSumOrderByAggregateInput = {
    ANULADO?: SortOrder
    PRECIO_05?: SortOrder
    PRECIO_06?: SortOrder
    PRECIO_07?: SortOrder
    PRECIO_08?: SortOrder
    PRECIO_09?: SortOrder
    PRECIO_16?: SortOrder
    PRECIO_17?: SortOrder
    PRECIO_18?: SortOrder
    PRECIO_19?: SortOrder
    PRECIO_20?: SortOrder
    idpractica?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type CAJACountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    DET_AUX?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    ORIGEN?: SortOrder
    OPERADOR?: SortOrder
    ASIENTO?: SortOrder
    EXENTO?: SortOrder
    CANT_AFIL?: SortOrder
    CAE?: SortOrder
    VTO_CAE?: SortOrder
    iditem?: SortOrder
  }

  export type CAJAAvgOrderByAggregateInput = {
    CODIGO?: SortOrder
    IMPORTE?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    ASIENTO?: SortOrder
    CANT_AFIL?: SortOrder
    iditem?: SortOrder
  }

  export type CAJAMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    DET_AUX?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    ORIGEN?: SortOrder
    OPERADOR?: SortOrder
    ASIENTO?: SortOrder
    EXENTO?: SortOrder
    CANT_AFIL?: SortOrder
    CAE?: SortOrder
    VTO_CAE?: SortOrder
    iditem?: SortOrder
  }

  export type CAJAMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    DET_AUX?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    ORIGEN?: SortOrder
    OPERADOR?: SortOrder
    ASIENTO?: SortOrder
    EXENTO?: SortOrder
    CANT_AFIL?: SortOrder
    CAE?: SortOrder
    VTO_CAE?: SortOrder
    iditem?: SortOrder
  }

  export type CAJASumOrderByAggregateInput = {
    CODIGO?: SortOrder
    IMPORTE?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    ASIENTO?: SortOrder
    CANT_AFIL?: SortOrder
    iditem?: SortOrder
  }

  export type CONSULTACountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    COD_PRES?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    DIAGNOSTIC?: SortOrder
    ATENCION?: SortOrder
    NRO_DNI?: SortOrder
    idconsulta?: SortOrder
    SUC?: SortOrder
  }

  export type CONSULTAAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    ATENCION?: SortOrder
    NRO_DNI?: SortOrder
    idconsulta?: SortOrder
  }

  export type CONSULTAMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    COD_PRES?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    DIAGNOSTIC?: SortOrder
    ATENCION?: SortOrder
    NRO_DNI?: SortOrder
    idconsulta?: SortOrder
    SUC?: SortOrder
  }

  export type CONSULTAMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    COD_PRES?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    DIAGNOSTIC?: SortOrder
    ATENCION?: SortOrder
    NRO_DNI?: SortOrder
    idconsulta?: SortOrder
    SUC?: SortOrder
  }

  export type CONSULTASumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    ATENCION?: SortOrder
    NRO_DNI?: SortOrder
    idconsulta?: SortOrder
  }

  export type ENFERMERCountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    PRACTICA?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    NRO_DNI?: SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrder
    SUC?: SortOrder
  }

  export type ENFERMERAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    PRACTICA?: SortOrder
    OPE_ANU?: SortOrder
    NRO_DNI?: SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrder
  }

  export type ENFERMERMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    PRACTICA?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    NRO_DNI?: SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrder
    SUC?: SortOrder
  }

  export type ENFERMERMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    PRACTICA?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    NRO_DNI?: SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrder
    SUC?: SortOrder
  }

  export type ENFERMERSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    PRACTICA?: SortOrder
    OPE_ANU?: SortOrder
    NRO_DNI?: SortOrder
    idenfermer?: SortOrder
    CANTIDAD?: SortOrder
  }

  export type FARMACIACountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_DOC?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    MODO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    FEC_USO?: SortOrder
    CAN_MEDI?: SortOrder
    MATRICULA?: SortOrder
    HABILITA?: SortOrder
    idfarmacia?: SortOrder
    SUC?: SortOrder
  }

  export type FARMACIAAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    CAN_MEDI?: SortOrder
    MATRICULA?: SortOrder
    HABILITA?: SortOrder
    idfarmacia?: SortOrder
  }

  export type FARMACIAMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_DOC?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    MODO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    FEC_USO?: SortOrder
    CAN_MEDI?: SortOrder
    MATRICULA?: SortOrder
    HABILITA?: SortOrder
    idfarmacia?: SortOrder
    SUC?: SortOrder
  }

  export type FARMACIAMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_DOC?: SortOrder
    NRO_ORDEN?: SortOrder
    DESTINO?: SortOrder
    MODO?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    FEC_USO?: SortOrder
    CAN_MEDI?: SortOrder
    MATRICULA?: SortOrder
    HABILITA?: SortOrder
    idfarmacia?: SortOrder
    SUC?: SortOrder
  }

  export type FARMACIASumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    CAN_MEDI?: SortOrder
    MATRICULA?: SortOrder
    HABILITA?: SortOrder
    idfarmacia?: SortOrder
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type MEDICOS_TURNOSCountOrderByAggregateInput = {
    idturno?: SortOrder
    turno?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    doctor?: SortOrder
    paciente?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    operador?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
    dni?: SortOrder
  }

  export type MEDICOS_TURNOSAvgOrderByAggregateInput = {
    idturno?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    dni?: SortOrder
  }

  export type MEDICOS_TURNOSMaxOrderByAggregateInput = {
    idturno?: SortOrder
    turno?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    doctor?: SortOrder
    paciente?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    operador?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
    dni?: SortOrder
  }

  export type MEDICOS_TURNOSMinOrderByAggregateInput = {
    idturno?: SortOrder
    turno?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    doctor?: SortOrder
    paciente?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    operador?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
    dni?: SortOrder
  }

  export type MEDICOS_TURNOSSumOrderByAggregateInput = {
    idturno?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    dni?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type PRACTICACountOrderByAggregateInput = {
    SUC_PRA?: SortOrder
    CONTRATO?: SortOrder
    NRO_DNI?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    PRAC_REA?: SortOrder
    CANT_PRA?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    COD_PRAC?: SortOrder
    idpractica?: SortOrder
    DESCRIP?: SortOrder
  }

  export type PRACTICAAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DNI?: SortOrder
    CANT_PRA?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    idpractica?: SortOrder
  }

  export type PRACTICAMaxOrderByAggregateInput = {
    SUC_PRA?: SortOrder
    CONTRATO?: SortOrder
    NRO_DNI?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    PRAC_REA?: SortOrder
    CANT_PRA?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    COD_PRAC?: SortOrder
    idpractica?: SortOrder
    DESCRIP?: SortOrder
  }

  export type PRACTICAMinOrderByAggregateInput = {
    SUC_PRA?: SortOrder
    CONTRATO?: SortOrder
    NRO_DNI?: SortOrder
    FECHA?: SortOrder
    HORA?: SortOrder
    NRO_ORDEN?: SortOrder
    PRAC_REA?: SortOrder
    CANT_PRA?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_ANU?: SortOrder
    COD_PRAC?: SortOrder
    idpractica?: SortOrder
    DESCRIP?: SortOrder
  }

  export type PRACTICASumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DNI?: SortOrder
    CANT_PRA?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    OPE_ANU?: SortOrder
    idpractica?: SortOrder
  }

  export type PRACT_ENFERCountOrderByAggregateInput = {
    idpractica?: SortOrder
    practica?: SortOrder
    importe?: SortOrder
  }

  export type PRACT_ENFERAvgOrderByAggregateInput = {
    idpractica?: SortOrder
    importe?: SortOrder
  }

  export type PRACT_ENFERMaxOrderByAggregateInput = {
    idpractica?: SortOrder
    practica?: SortOrder
    importe?: SortOrder
  }

  export type PRACT_ENFERMinOrderByAggregateInput = {
    idpractica?: SortOrder
    practica?: SortOrder
    importe?: SortOrder
  }

  export type PRACT_ENFERSumOrderByAggregateInput = {
    idpractica?: SortOrder
    importe?: SortOrder
  }

  export type StringFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type PRESTADOCountOrderByAggregateInput = {
    COD_PRES?: SortOrder
    NOMBRE?: SortOrder
    ESPEC?: SortOrder
    LIS_ESPE?: SortOrder
    SUC?: SortOrder
    DIRECCION?: SortOrder
    LOCALIDAD?: SortOrder
    TELEFONOS?: SortOrder
    HORARIO1?: SortOrder
    HORARIO2?: SortOrder
    MODALIDAD?: SortOrder
    MATRICULA?: SortOrder
    COD_POST?: SortOrder
    AUSENTE?: SortOrder
    DESDE?: SortOrder
    HASTA?: SortOrder
    CUIT?: SortOrder
    FEC_NAC?: SortOrder
    LUGAR?: SortOrder
    MALA_PRAXI?: SortOrder
    CON_PAGA?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    OTERO?: SortOrder
    idprest?: SortOrder
    PROMO?: SortOrder
  }

  export type PRESTADOAvgOrderByAggregateInput = {
    COD_POST?: SortOrder
    AUSENTE?: SortOrder
    LUGAR?: SortOrder
    MALA_PRAXI?: SortOrder
    CON_PAGA?: SortOrder
    OTERO?: SortOrder
    idprest?: SortOrder
  }

  export type PRESTADOMaxOrderByAggregateInput = {
    COD_PRES?: SortOrder
    NOMBRE?: SortOrder
    ESPEC?: SortOrder
    LIS_ESPE?: SortOrder
    SUC?: SortOrder
    DIRECCION?: SortOrder
    LOCALIDAD?: SortOrder
    TELEFONOS?: SortOrder
    HORARIO1?: SortOrder
    HORARIO2?: SortOrder
    MODALIDAD?: SortOrder
    MATRICULA?: SortOrder
    COD_POST?: SortOrder
    AUSENTE?: SortOrder
    DESDE?: SortOrder
    HASTA?: SortOrder
    CUIT?: SortOrder
    FEC_NAC?: SortOrder
    LUGAR?: SortOrder
    MALA_PRAXI?: SortOrder
    CON_PAGA?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    OTERO?: SortOrder
    idprest?: SortOrder
    PROMO?: SortOrder
  }

  export type PRESTADOMinOrderByAggregateInput = {
    COD_PRES?: SortOrder
    NOMBRE?: SortOrder
    ESPEC?: SortOrder
    LIS_ESPE?: SortOrder
    SUC?: SortOrder
    DIRECCION?: SortOrder
    LOCALIDAD?: SortOrder
    TELEFONOS?: SortOrder
    HORARIO1?: SortOrder
    HORARIO2?: SortOrder
    MODALIDAD?: SortOrder
    MATRICULA?: SortOrder
    COD_POST?: SortOrder
    AUSENTE?: SortOrder
    DESDE?: SortOrder
    HASTA?: SortOrder
    CUIT?: SortOrder
    FEC_NAC?: SortOrder
    LUGAR?: SortOrder
    MALA_PRAXI?: SortOrder
    CON_PAGA?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    OTERO?: SortOrder
    idprest?: SortOrder
    PROMO?: SortOrder
  }

  export type PRESTADOSumOrderByAggregateInput = {
    COD_POST?: SortOrder
    AUSENTE?: SortOrder
    LUGAR?: SortOrder
    MALA_PRAXI?: SortOrder
    CON_PAGA?: SortOrder
    OTERO?: SortOrder
    idprest?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type USOSCountOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    NUSOS?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CIERRE?: SortOrder
    EMPRESA?: SortOrder
    iduso?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    EDAD?: SortOrder
    NUSOS?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    RENDIDO?: SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSMaxOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    NUSOS?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CIERRE?: SortOrder
    EMPRESA?: SortOrder
    iduso?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSMinOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    NUSOS?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CIERRE?: SortOrder
    EMPRESA?: SortOrder
    iduso?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    EDAD?: SortOrder
    NUSOS?: SortOrder
    IMPORTE?: SortOrder
    ANULADO?: SortOrder
    RENDIDO?: SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSFACountOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    COMPROBA?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_AUTO?: SortOrder
    FEC_USO?: SortOrder
    PEDIDO?: SortOrder
    NRO_RECETA?: SortOrder
    COMP?: SortOrder
    EMPRESA?: SortOrder
    N_SERIE?: SortOrder
    N_RECIBO?: SortOrder
    IMP_NC?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSFAAvgOrderByAggregateInput = {
    iduso?: SortOrder
  }

  export type USOSFAMaxOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    COMPROBA?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_AUTO?: SortOrder
    FEC_USO?: SortOrder
    PEDIDO?: SortOrder
    NRO_RECETA?: SortOrder
    COMP?: SortOrder
    EMPRESA?: SortOrder
    N_SERIE?: SortOrder
    N_RECIBO?: SortOrder
    IMP_NC?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSFAMinOrderByAggregateInput = {
    SUC?: SortOrder
    ORDEN?: SortOrder
    CONTRATO?: SortOrder
    NRO_ADH?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    EDAD?: SortOrder
    SEXO?: SortOrder
    OBRA_SOC?: SortOrder
    FECHA?: SortOrder
    FEC_CAJA?: SortOrder
    HORA?: SortOrder
    SERVICIO?: SortOrder
    COMPROBA?: SortOrder
    MODALIDAD?: SortOrder
    VALOR?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    PRESTADO?: SortOrder
    ANULADO?: SortOrder
    OPERADOR?: SortOrder
    OPE_AUTO?: SortOrder
    FEC_USO?: SortOrder
    PEDIDO?: SortOrder
    NRO_RECETA?: SortOrder
    COMP?: SortOrder
    EMPRESA?: SortOrder
    N_SERIE?: SortOrder
    N_RECIBO?: SortOrder
    IMP_NC?: SortOrder
    CONTROL?: SortOrder
    NORDEN?: SortOrder
    FECHA_CONTROL?: SortOrder
    iduso?: SortOrder
    IMP_LIQ?: SortOrder
  }

  export type USOSFASumOrderByAggregateInput = {
    iduso?: SortOrder
  }

  export type adherent_proviCountOrderByAggregateInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    EMPRESA?: SortOrder
    ESTADO?: SortOrder
  }

  export type adherent_proviAvgOrderByAggregateInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
  }

  export type adherent_proviMaxOrderByAggregateInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    EMPRESA?: SortOrder
    ESTADO?: SortOrder
  }

  export type adherent_proviMinOrderByAggregateInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    PLAN?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    EMPRESA?: SortOrder
    ESTADO?: SortOrder
  }

  export type adherent_proviSumOrderByAggregateInput = {
    idadherent?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
  }

  export type nosociosCountOrderByAggregateInput = {
    idnosocio?: SortOrder
    nosocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    obra_soc?: SortOrder
    fecha?: SortOrder
    codigo?: SortOrder
    gremio?: SortOrder
    estado?: SortOrder
    otra_os?: SortOrder
  }

  export type nosociosAvgOrderByAggregateInput = {
    idnosocio?: SortOrder
    dni?: SortOrder
    codigo?: SortOrder
  }

  export type nosociosMaxOrderByAggregateInput = {
    idnosocio?: SortOrder
    nosocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    obra_soc?: SortOrder
    fecha?: SortOrder
    codigo?: SortOrder
    gremio?: SortOrder
    estado?: SortOrder
    otra_os?: SortOrder
  }

  export type nosociosMinOrderByAggregateInput = {
    idnosocio?: SortOrder
    nosocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    obra_soc?: SortOrder
    fecha?: SortOrder
    codigo?: SortOrder
    gremio?: SortOrder
    estado?: SortOrder
    otra_os?: SortOrder
  }

  export type nosociosSumOrderByAggregateInput = {
    idnosocio?: SortOrder
    dni?: SortOrder
    codigo?: SortOrder
  }

  export type planes_odontologicosCountOrderByAggregateInput = {
    idplan?: SortOrder
    total?: SortOrder
    pago_inicial?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
    visitas?: SortOrder
    fecha_plan?: SortOrder
    cuotas?: SortOrder
    plan?: SortOrder
  }

  export type planes_odontologicosAvgOrderByAggregateInput = {
    idplan?: SortOrder
    total?: SortOrder
    pago_inicial?: SortOrder
    visitas?: SortOrder
    cuotas?: SortOrder
  }

  export type planes_odontologicosMaxOrderByAggregateInput = {
    idplan?: SortOrder
    total?: SortOrder
    pago_inicial?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
    visitas?: SortOrder
    fecha_plan?: SortOrder
    cuotas?: SortOrder
    plan?: SortOrder
  }

  export type planes_odontologicosMinOrderByAggregateInput = {
    idplan?: SortOrder
    total?: SortOrder
    pago_inicial?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
    visitas?: SortOrder
    fecha_plan?: SortOrder
    cuotas?: SortOrder
    plan?: SortOrder
  }

  export type planes_odontologicosSumOrderByAggregateInput = {
    idplan?: SortOrder
    total?: SortOrder
    pago_inicial?: SortOrder
    visitas?: SortOrder
    cuotas?: SortOrder
  }

  export type planes_socioCountOrderByAggregateInput = {
    idplansocio?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    socio?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    pagado?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    prestador?: SortOrder
    prestador_nombre?: SortOrder
    operador?: SortOrder
    sucursal?: SortOrder
    plan?: SortOrder
  }

  export type planes_socioAvgOrderByAggregateInput = {
    idplansocio?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    total?: SortOrder
    pagado?: SortOrder
    saldo?: SortOrder
  }

  export type planes_socioMaxOrderByAggregateInput = {
    idplansocio?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    socio?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    pagado?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    prestador?: SortOrder
    prestador_nombre?: SortOrder
    operador?: SortOrder
    sucursal?: SortOrder
    plan?: SortOrder
  }

  export type planes_socioMinOrderByAggregateInput = {
    idplansocio?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    socio?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    pagado?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    prestador?: SortOrder
    prestador_nombre?: SortOrder
    operador?: SortOrder
    sucursal?: SortOrder
    plan?: SortOrder
  }

  export type planes_socioSumOrderByAggregateInput = {
    idplansocio?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    total?: SortOrder
    pagado?: SortOrder
    saldo?: SortOrder
  }

  export type planes_visitasCountOrderByAggregateInput = {
    idvisita?: SortOrder
    idplan?: SortOrder
    nvisita?: SortOrder
    pago?: SortOrder
    fecha?: SortOrder
    pagado?: SortOrder
    operador?: SortOrder
    plan?: SortOrder
  }

  export type planes_visitasAvgOrderByAggregateInput = {
    idvisita?: SortOrder
    idplan?: SortOrder
    nvisita?: SortOrder
    pago?: SortOrder
  }

  export type planes_visitasMaxOrderByAggregateInput = {
    idvisita?: SortOrder
    idplan?: SortOrder
    nvisita?: SortOrder
    pago?: SortOrder
    fecha?: SortOrder
    pagado?: SortOrder
    operador?: SortOrder
    plan?: SortOrder
  }

  export type planes_visitasMinOrderByAggregateInput = {
    idvisita?: SortOrder
    idplan?: SortOrder
    nvisita?: SortOrder
    pago?: SortOrder
    fecha?: SortOrder
    pagado?: SortOrder
    operador?: SortOrder
    plan?: SortOrder
  }

  export type planes_visitasSumOrderByAggregateInput = {
    idvisita?: SortOrder
    idplan?: SortOrder
    nvisita?: SortOrder
    pago?: SortOrder
  }

  export type pacientesCountOrderByAggregateInput = {
    idpaciente?: SortOrder
    paciente?: SortOrder
    dni?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    idpaciente?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    idpaciente?: SortOrder
    paciente?: SortOrder
    dni?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    idpaciente?: SortOrder
    paciente?: SortOrder
    dni?: SortOrder
    obra_soc?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    mail?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    idpaciente?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
  }

  export type promocionesCountOrderByAggregateInput = {
    idpromo?: SortOrder
    pot1?: SortOrder
    pot2?: SortOrder
    pint1?: SortOrder
    pint2?: SortOrder
  }

  export type promocionesAvgOrderByAggregateInput = {
    idpromo?: SortOrder
    pot1?: SortOrder
    pot2?: SortOrder
    pint1?: SortOrder
    pint2?: SortOrder
  }

  export type promocionesMaxOrderByAggregateInput = {
    idpromo?: SortOrder
    pot1?: SortOrder
    pot2?: SortOrder
    pint1?: SortOrder
    pint2?: SortOrder
  }

  export type promocionesMinOrderByAggregateInput = {
    idpromo?: SortOrder
    pot1?: SortOrder
    pot2?: SortOrder
    pint1?: SortOrder
    pint2?: SortOrder
  }

  export type promocionesSumOrderByAggregateInput = {
    idpromo?: SortOrder
    pot1?: SortOrder
    pot2?: SortOrder
    pint1?: SortOrder
    pint2?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}