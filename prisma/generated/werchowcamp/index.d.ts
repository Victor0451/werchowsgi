
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type at2campanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["at2campana"]>
  composites: {}
}

/**
 * Model at2campana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type at2campana = runtime.Types.DefaultSelection<at2campanaPayload>
export type atcampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    MAIL: string | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["atcampana"]>
  composites: {}
}

/**
 * Model atcampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type atcampana = runtime.Types.DefaultSelection<atcampanaPayload>
export type blancampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["blancampana"]>
  composites: {}
}

/**
 * Model blancampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type blancampana = runtime.Types.DefaultSelection<blancampanaPayload>
export type reccampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["reccampana"]>
  composites: {}
}

/**
 * Model reccampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type reccampana = runtime.Types.DefaultSelection<reccampanaPayload>
export type reincampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["reincampana"]>
  composites: {}
}

/**
 * Model reincampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type reincampana = runtime.Types.DefaultSelection<reincampanaPayload>
export type auxcampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["auxcampana"]>
  composites: {}
}

/**
 * Model auxcampana
 * 
 */
export type auxcampana = runtime.Types.DefaultSelection<auxcampanaPayload>
export type policampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["policampana"]>
  composites: {}
}

/**
 * Model policampana
 * 
 */
export type policampana = runtime.Types.DefaultSelection<policampanaPayload>
export type at2campanaMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["at2campanaM"]>
  composites: {}
}

/**
 * Model at2campanaM
 * 
 */
export type at2campanaM = runtime.Types.DefaultSelection<at2campanaMPayload>
export type atcampanaMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["atcampanaM"]>
  composites: {}
}

/**
 * Model atcampanaM
 * 
 */
export type atcampanaM = runtime.Types.DefaultSelection<atcampanaMPayload>
export type blancampanaMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["blancampanaM"]>
  composites: {}
}

/**
 * Model blancampanaM
 * 
 */
export type blancampanaM = runtime.Types.DefaultSelection<blancampanaMPayload>
export type reccampanaMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["reccampanaM"]>
  composites: {}
}

/**
 * Model reccampanaM
 * 
 */
export type reccampanaM = runtime.Types.DefaultSelection<reccampanaMPayload>
export type reincampanaMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["reincampanaM"]>
  composites: {}
}

/**
 * Model reincampanaM
 * 
 */
export type reincampanaM = runtime.Types.DefaultSelection<reincampanaMPayload>
export type atcampanaSMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["atcampanaSM"]>
  composites: {}
}

/**
 * Model atcampanaSM
 * 
 */
export type atcampanaSM = runtime.Types.DefaultSelection<atcampanaSMPayload>
export type reccampanaSMPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["reccampanaSM"]>
  composites: {}
}

/**
 * Model reccampanaSM
 * 
 */
export type reccampanaSM = runtime.Types.DefaultSelection<reccampanaSMPayload>
export type tempcampanaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
  }, ExtArgs["result"]["tempcampana"]>
  composites: {}
}

/**
 * Model tempcampana
 * 
 */
export type tempcampana = runtime.Types.DefaultSelection<tempcampanaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more At2campanas
 * const at2campanas = await prisma.at2campana.findMany()
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
   * // Fetch zero or more At2campanas
   * const at2campanas = await prisma.at2campana.findMany()
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
   * `prisma.at2campana`: Exposes CRUD operations for the **at2campana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more At2campanas
    * const at2campanas = await prisma.at2campana.findMany()
    * ```
    */
  get at2campana(): Prisma.at2campanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.atcampana`: Exposes CRUD operations for the **atcampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atcampanas
    * const atcampanas = await prisma.atcampana.findMany()
    * ```
    */
  get atcampana(): Prisma.atcampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.blancampana`: Exposes CRUD operations for the **blancampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blancampanas
    * const blancampanas = await prisma.blancampana.findMany()
    * ```
    */
  get blancampana(): Prisma.blancampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reccampana`: Exposes CRUD operations for the **reccampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reccampanas
    * const reccampanas = await prisma.reccampana.findMany()
    * ```
    */
  get reccampana(): Prisma.reccampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reincampana`: Exposes CRUD operations for the **reincampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reincampanas
    * const reincampanas = await prisma.reincampana.findMany()
    * ```
    */
  get reincampana(): Prisma.reincampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.auxcampana`: Exposes CRUD operations for the **auxcampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auxcampanas
    * const auxcampanas = await prisma.auxcampana.findMany()
    * ```
    */
  get auxcampana(): Prisma.auxcampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.policampana`: Exposes CRUD operations for the **policampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policampanas
    * const policampanas = await prisma.policampana.findMany()
    * ```
    */
  get policampana(): Prisma.policampanaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.at2campanaM`: Exposes CRUD operations for the **at2campanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more At2campanaMS
    * const at2campanaMS = await prisma.at2campanaM.findMany()
    * ```
    */
  get at2campanaM(): Prisma.at2campanaMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.atcampanaM`: Exposes CRUD operations for the **atcampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtcampanaMS
    * const atcampanaMS = await prisma.atcampanaM.findMany()
    * ```
    */
  get atcampanaM(): Prisma.atcampanaMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.blancampanaM`: Exposes CRUD operations for the **blancampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlancampanaMS
    * const blancampanaMS = await prisma.blancampanaM.findMany()
    * ```
    */
  get blancampanaM(): Prisma.blancampanaMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reccampanaM`: Exposes CRUD operations for the **reccampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReccampanaMS
    * const reccampanaMS = await prisma.reccampanaM.findMany()
    * ```
    */
  get reccampanaM(): Prisma.reccampanaMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reincampanaM`: Exposes CRUD operations for the **reincampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReincampanaMS
    * const reincampanaMS = await prisma.reincampanaM.findMany()
    * ```
    */
  get reincampanaM(): Prisma.reincampanaMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.atcampanaSM`: Exposes CRUD operations for the **atcampanaSM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtcampanaSMS
    * const atcampanaSMS = await prisma.atcampanaSM.findMany()
    * ```
    */
  get atcampanaSM(): Prisma.atcampanaSMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reccampanaSM`: Exposes CRUD operations for the **reccampanaSM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReccampanaSMS
    * const reccampanaSMS = await prisma.reccampanaSM.findMany()
    * ```
    */
  get reccampanaSM(): Prisma.reccampanaSMDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tempcampana`: Exposes CRUD operations for the **tempcampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tempcampanas
    * const tempcampanas = await prisma.tempcampana.findMany()
    * ```
    */
  get tempcampana(): Prisma.tempcampanaDelegate<GlobalReject, ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'at2campana' | 'atcampana' | 'blancampana' | 'reccampana' | 'reincampana' | 'auxcampana' | 'policampana' | 'at2campanaM' | 'atcampanaM' | 'blancampanaM' | 'reccampanaM' | 'reincampanaM' | 'atcampanaSM' | 'reccampanaSM' | 'tempcampana'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      at2campana: {
        operations: {
          findUnique: {
            args: Prisma.at2campanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload> | null
            payload: at2campanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.at2campanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.at2campanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload> | null
            payload: at2campanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.at2campanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.at2campanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>[]
            payload: at2campanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.at2campanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.at2campanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.at2campanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.at2campanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.at2campanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.at2campanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.at2campanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaPayload>
            payload: at2campanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.At2campanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAt2campana>
            payload: at2campanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.at2campanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<At2campanaGroupByOutputType>[]
            payload: at2campanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.at2campanaCountArgs<ExtArgs>,
            result: $Utils.Optional<At2campanaCountAggregateOutputType> | number
            payload: at2campanaPayload<ExtArgs>
          }
        }
      }
      atcampana: {
        operations: {
          findUnique: {
            args: Prisma.atcampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload> | null
            payload: atcampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.atcampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.atcampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload> | null
            payload: atcampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.atcampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.atcampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>[]
            payload: atcampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.atcampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.atcampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.atcampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.atcampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.atcampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.atcampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.atcampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaPayload>
            payload: atcampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AtcampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAtcampana>
            payload: atcampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.atcampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaGroupByOutputType>[]
            payload: atcampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.atcampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaCountAggregateOutputType> | number
            payload: atcampanaPayload<ExtArgs>
          }
        }
      }
      blancampana: {
        operations: {
          findUnique: {
            args: Prisma.blancampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload> | null
            payload: blancampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.blancampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.blancampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload> | null
            payload: blancampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.blancampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.blancampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>[]
            payload: blancampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.blancampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.blancampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.blancampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.blancampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.blancampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.blancampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.blancampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaPayload>
            payload: blancampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.BlancampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlancampana>
            payload: blancampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.blancampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlancampanaGroupByOutputType>[]
            payload: blancampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.blancampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<BlancampanaCountAggregateOutputType> | number
            payload: blancampanaPayload<ExtArgs>
          }
        }
      }
      reccampana: {
        operations: {
          findUnique: {
            args: Prisma.reccampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload> | null
            payload: reccampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.reccampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.reccampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload> | null
            payload: reccampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.reccampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.reccampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>[]
            payload: reccampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.reccampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.reccampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.reccampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.reccampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.reccampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.reccampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.reccampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaPayload>
            payload: reccampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ReccampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReccampana>
            payload: reccampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.reccampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaGroupByOutputType>[]
            payload: reccampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.reccampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaCountAggregateOutputType> | number
            payload: reccampanaPayload<ExtArgs>
          }
        }
      }
      reincampana: {
        operations: {
          findUnique: {
            args: Prisma.reincampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload> | null
            payload: reincampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.reincampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.reincampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload> | null
            payload: reincampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.reincampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.reincampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>[]
            payload: reincampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.reincampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.reincampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.reincampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.reincampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.reincampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.reincampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.reincampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaPayload>
            payload: reincampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ReincampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReincampana>
            payload: reincampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.reincampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReincampanaGroupByOutputType>[]
            payload: reincampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.reincampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<ReincampanaCountAggregateOutputType> | number
            payload: reincampanaPayload<ExtArgs>
          }
        }
      }
      auxcampana: {
        operations: {
          findUnique: {
            args: Prisma.auxcampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload> | null
            payload: auxcampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.auxcampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.auxcampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload> | null
            payload: auxcampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.auxcampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.auxcampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>[]
            payload: auxcampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.auxcampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.auxcampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: auxcampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.auxcampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.auxcampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.auxcampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: auxcampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.auxcampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: auxcampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.auxcampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<auxcampanaPayload>
            payload: auxcampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AuxcampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuxcampana>
            payload: auxcampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.auxcampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuxcampanaGroupByOutputType>[]
            payload: auxcampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.auxcampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<AuxcampanaCountAggregateOutputType> | number
            payload: auxcampanaPayload<ExtArgs>
          }
        }
      }
      policampana: {
        operations: {
          findUnique: {
            args: Prisma.policampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload> | null
            payload: policampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.policampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.policampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload> | null
            payload: policampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.policampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.policampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>[]
            payload: policampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.policampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.policampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: policampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.policampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.policampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.policampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: policampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.policampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: policampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.policampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<policampanaPayload>
            payload: policampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.PolicampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePolicampana>
            payload: policampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.policampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PolicampanaGroupByOutputType>[]
            payload: policampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.policampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<PolicampanaCountAggregateOutputType> | number
            payload: policampanaPayload<ExtArgs>
          }
        }
      }
      at2campanaM: {
        operations: {
          findUnique: {
            args: Prisma.at2campanaMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload> | null
            payload: at2campanaMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.at2campanaMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.at2campanaMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload> | null
            payload: at2campanaMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.at2campanaMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.at2campanaMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>[]
            payload: at2campanaMPayload<ExtArgs>
          }
          create: {
            args: Prisma.at2campanaMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.at2campanaMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.at2campanaMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          update: {
            args: Prisma.at2campanaMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.at2campanaMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.at2campanaMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: at2campanaMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.at2campanaMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<at2campanaMPayload>
            payload: at2campanaMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.At2campanaMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAt2campanaM>
            payload: at2campanaMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.at2campanaMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<At2campanaMGroupByOutputType>[]
            payload: at2campanaMPayload<ExtArgs>
          }
          count: {
            args: Prisma.at2campanaMCountArgs<ExtArgs>,
            result: $Utils.Optional<At2campanaMCountAggregateOutputType> | number
            payload: at2campanaMPayload<ExtArgs>
          }
        }
      }
      atcampanaM: {
        operations: {
          findUnique: {
            args: Prisma.atcampanaMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload> | null
            payload: atcampanaMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.atcampanaMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.atcampanaMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload> | null
            payload: atcampanaMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.atcampanaMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.atcampanaMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>[]
            payload: atcampanaMPayload<ExtArgs>
          }
          create: {
            args: Prisma.atcampanaMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.atcampanaMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.atcampanaMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          update: {
            args: Prisma.atcampanaMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.atcampanaMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.atcampanaMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.atcampanaMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaMPayload>
            payload: atcampanaMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AtcampanaMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAtcampanaM>
            payload: atcampanaMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.atcampanaMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaMGroupByOutputType>[]
            payload: atcampanaMPayload<ExtArgs>
          }
          count: {
            args: Prisma.atcampanaMCountArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaMCountAggregateOutputType> | number
            payload: atcampanaMPayload<ExtArgs>
          }
        }
      }
      blancampanaM: {
        operations: {
          findUnique: {
            args: Prisma.blancampanaMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload> | null
            payload: blancampanaMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.blancampanaMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.blancampanaMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload> | null
            payload: blancampanaMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.blancampanaMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.blancampanaMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>[]
            payload: blancampanaMPayload<ExtArgs>
          }
          create: {
            args: Prisma.blancampanaMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.blancampanaMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.blancampanaMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          update: {
            args: Prisma.blancampanaMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.blancampanaMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.blancampanaMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: blancampanaMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.blancampanaMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<blancampanaMPayload>
            payload: blancampanaMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.BlancampanaMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlancampanaM>
            payload: blancampanaMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.blancampanaMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlancampanaMGroupByOutputType>[]
            payload: blancampanaMPayload<ExtArgs>
          }
          count: {
            args: Prisma.blancampanaMCountArgs<ExtArgs>,
            result: $Utils.Optional<BlancampanaMCountAggregateOutputType> | number
            payload: blancampanaMPayload<ExtArgs>
          }
        }
      }
      reccampanaM: {
        operations: {
          findUnique: {
            args: Prisma.reccampanaMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload> | null
            payload: reccampanaMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.reccampanaMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.reccampanaMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload> | null
            payload: reccampanaMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.reccampanaMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.reccampanaMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>[]
            payload: reccampanaMPayload<ExtArgs>
          }
          create: {
            args: Prisma.reccampanaMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.reccampanaMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.reccampanaMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          update: {
            args: Prisma.reccampanaMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.reccampanaMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.reccampanaMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.reccampanaMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaMPayload>
            payload: reccampanaMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ReccampanaMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReccampanaM>
            payload: reccampanaMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.reccampanaMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaMGroupByOutputType>[]
            payload: reccampanaMPayload<ExtArgs>
          }
          count: {
            args: Prisma.reccampanaMCountArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaMCountAggregateOutputType> | number
            payload: reccampanaMPayload<ExtArgs>
          }
        }
      }
      reincampanaM: {
        operations: {
          findUnique: {
            args: Prisma.reincampanaMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload> | null
            payload: reincampanaMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.reincampanaMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.reincampanaMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload> | null
            payload: reincampanaMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.reincampanaMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.reincampanaMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>[]
            payload: reincampanaMPayload<ExtArgs>
          }
          create: {
            args: Prisma.reincampanaMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.reincampanaMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.reincampanaMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          update: {
            args: Prisma.reincampanaMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.reincampanaMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.reincampanaMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reincampanaMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.reincampanaMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reincampanaMPayload>
            payload: reincampanaMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ReincampanaMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReincampanaM>
            payload: reincampanaMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.reincampanaMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReincampanaMGroupByOutputType>[]
            payload: reincampanaMPayload<ExtArgs>
          }
          count: {
            args: Prisma.reincampanaMCountArgs<ExtArgs>,
            result: $Utils.Optional<ReincampanaMCountAggregateOutputType> | number
            payload: reincampanaMPayload<ExtArgs>
          }
        }
      }
      atcampanaSM: {
        operations: {
          findUnique: {
            args: Prisma.atcampanaSMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload> | null
            payload: atcampanaSMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.atcampanaSMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.atcampanaSMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload> | null
            payload: atcampanaSMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.atcampanaSMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.atcampanaSMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>[]
            payload: atcampanaSMPayload<ExtArgs>
          }
          create: {
            args: Prisma.atcampanaSMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.atcampanaSMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaSMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.atcampanaSMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          update: {
            args: Prisma.atcampanaSMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.atcampanaSMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaSMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.atcampanaSMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: atcampanaSMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.atcampanaSMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<atcampanaSMPayload>
            payload: atcampanaSMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AtcampanaSMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAtcampanaSM>
            payload: atcampanaSMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.atcampanaSMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaSMGroupByOutputType>[]
            payload: atcampanaSMPayload<ExtArgs>
          }
          count: {
            args: Prisma.atcampanaSMCountArgs<ExtArgs>,
            result: $Utils.Optional<AtcampanaSMCountAggregateOutputType> | number
            payload: atcampanaSMPayload<ExtArgs>
          }
        }
      }
      reccampanaSM: {
        operations: {
          findUnique: {
            args: Prisma.reccampanaSMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload> | null
            payload: reccampanaSMPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.reccampanaSMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.reccampanaSMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload> | null
            payload: reccampanaSMPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.reccampanaSMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.reccampanaSMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>[]
            payload: reccampanaSMPayload<ExtArgs>
          }
          create: {
            args: Prisma.reccampanaSMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.reccampanaSMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaSMPayload<ExtArgs>
          }
          delete: {
            args: Prisma.reccampanaSMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          update: {
            args: Prisma.reccampanaSMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.reccampanaSMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaSMPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.reccampanaSMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: reccampanaSMPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.reccampanaSMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<reccampanaSMPayload>
            payload: reccampanaSMPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ReccampanaSMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReccampanaSM>
            payload: reccampanaSMPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.reccampanaSMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaSMGroupByOutputType>[]
            payload: reccampanaSMPayload<ExtArgs>
          }
          count: {
            args: Prisma.reccampanaSMCountArgs<ExtArgs>,
            result: $Utils.Optional<ReccampanaSMCountAggregateOutputType> | number
            payload: reccampanaSMPayload<ExtArgs>
          }
        }
      }
      tempcampana: {
        operations: {
          findUnique: {
            args: Prisma.tempcampanaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload> | null
            payload: tempcampanaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.tempcampanaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.tempcampanaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload> | null
            payload: tempcampanaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.tempcampanaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.tempcampanaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>[]
            payload: tempcampanaPayload<ExtArgs>
          }
          create: {
            args: Prisma.tempcampanaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.tempcampanaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: tempcampanaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.tempcampanaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          update: {
            args: Prisma.tempcampanaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.tempcampanaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: tempcampanaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.tempcampanaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: tempcampanaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.tempcampanaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tempcampanaPayload>
            payload: tempcampanaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.TempcampanaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTempcampana>
            payload: tempcampanaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.tempcampanaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TempcampanaGroupByOutputType>[]
            payload: tempcampanaPayload<ExtArgs>
          }
          count: {
            args: Prisma.tempcampanaCountArgs<ExtArgs>,
            result: $Utils.Optional<TempcampanaCountAggregateOutputType> | number
            payload: tempcampanaPayload<ExtArgs>
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
   * Model at2campana
   */


  export type AggregateAt2campana = {
    _count: At2campanaCountAggregateOutputType | null
    _avg: At2campanaAvgAggregateOutputType | null
    _sum: At2campanaSumAggregateOutputType | null
    _min: At2campanaMinAggregateOutputType | null
    _max: At2campanaMaxAggregateOutputType | null
  }

  export type At2campanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type At2campanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type At2campanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which at2campana to aggregate.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: at2campanaOrderByWithRelationInput | at2campanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: at2campanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned at2campanas
    **/
    _count?: true | At2campanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: At2campanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: At2campanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: At2campanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: At2campanaMaxAggregateInputType
  }

  export type GetAt2campanaAggregateType<T extends At2campanaAggregateArgs> = {
        [P in keyof T & keyof AggregateAt2campana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAt2campana[P]>
      : GetScalarType<T[P], AggregateAt2campana[P]>
  }




  export type at2campanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: at2campanaWhereInput
    orderBy?: at2campanaOrderByWithAggregationInput | at2campanaOrderByWithAggregationInput[]
    by: At2campanaScalarFieldEnum[] | At2campanaScalarFieldEnum
    having?: at2campanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: At2campanaCountAggregateInputType | true
    _avg?: At2campanaAvgAggregateInputType
    _sum?: At2campanaSumAggregateInputType
    _min?: At2campanaMinAggregateInputType
    _max?: At2campanaMaxAggregateInputType
  }


  export type At2campanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: At2campanaCountAggregateOutputType | null
    _avg: At2campanaAvgAggregateOutputType | null
    _sum: At2campanaSumAggregateOutputType | null
    _min: At2campanaMinAggregateOutputType | null
    _max: At2campanaMaxAggregateOutputType | null
  }

  type GetAt2campanaGroupByPayload<T extends at2campanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<At2campanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof At2campanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], At2campanaGroupByOutputType[P]>
            : GetScalarType<T[P], At2campanaGroupByOutputType[P]>
        }
      >
    >


  export type at2campanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["at2campana"]>

  export type at2campanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type at2campanaGetPayload<S extends boolean | null | undefined | at2campanaArgs> = $Types.GetResult<at2campanaPayload, S>

  type at2campanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<at2campanaFindManyArgs, 'select' | 'include'> & {
      select?: At2campanaCountAggregateInputType | true
    }

  export interface at2campanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['at2campana'], meta: { name: 'at2campana' } }
    /**
     * Find zero or one At2campana that matches the filter.
     * @param {at2campanaFindUniqueArgs} args - Arguments to find a At2campana
     * @example
     * // Get one At2campana
     * const at2campana = await prisma.at2campana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends at2campanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, at2campanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'at2campana'> extends True ? Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one At2campana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {at2campanaFindUniqueOrThrowArgs} args - Arguments to find a At2campana
     * @example
     * // Get one At2campana
     * const at2campana = await prisma.at2campana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends at2campanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first At2campana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaFindFirstArgs} args - Arguments to find a At2campana
     * @example
     * // Get one At2campana
     * const at2campana = await prisma.at2campana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends at2campanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, at2campanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'at2campana'> extends True ? Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first At2campana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaFindFirstOrThrowArgs} args - Arguments to find a At2campana
     * @example
     * // Get one At2campana
     * const at2campana = await prisma.at2campana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends at2campanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more At2campanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all At2campanas
     * const at2campanas = await prisma.at2campana.findMany()
     * 
     * // Get first 10 At2campanas
     * const at2campanas = await prisma.at2campana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const at2campanaWithSUCURSALOnly = await prisma.at2campana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends at2campanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a At2campana.
     * @param {at2campanaCreateArgs} args - Arguments to create a At2campana.
     * @example
     * // Create one At2campana
     * const At2campana = await prisma.at2campana.create({
     *   data: {
     *     // ... data to create a At2campana
     *   }
     * })
     * 
    **/
    create<T extends at2campanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaCreateArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many At2campanas.
     *     @param {at2campanaCreateManyArgs} args - Arguments to create many At2campanas.
     *     @example
     *     // Create many At2campanas
     *     const at2campana = await prisma.at2campana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends at2campanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a At2campana.
     * @param {at2campanaDeleteArgs} args - Arguments to delete one At2campana.
     * @example
     * // Delete one At2campana
     * const At2campana = await prisma.at2campana.delete({
     *   where: {
     *     // ... filter to delete one At2campana
     *   }
     * })
     * 
    **/
    delete<T extends at2campanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaDeleteArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one At2campana.
     * @param {at2campanaUpdateArgs} args - Arguments to update one At2campana.
     * @example
     * // Update one At2campana
     * const at2campana = await prisma.at2campana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends at2campanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaUpdateArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more At2campanas.
     * @param {at2campanaDeleteManyArgs} args - Arguments to filter At2campanas to delete.
     * @example
     * // Delete a few At2campanas
     * const { count } = await prisma.at2campana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends at2campanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more At2campanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many At2campanas
     * const at2campana = await prisma.at2campana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends at2campanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one At2campana.
     * @param {at2campanaUpsertArgs} args - Arguments to update or create a At2campana.
     * @example
     * // Update or create a At2campana
     * const at2campana = await prisma.at2campana.upsert({
     *   create: {
     *     // ... data to create a At2campana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the At2campana we want to update
     *   }
     * })
    **/
    upsert<T extends at2campanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaUpsertArgs<ExtArgs>>
    ): Prisma__at2campanaClient<$Types.GetResult<at2campanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of At2campanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaCountArgs} args - Arguments to filter At2campanas to count.
     * @example
     * // Count the number of At2campanas
     * const count = await prisma.at2campana.count({
     *   where: {
     *     // ... the filter for the At2campanas we want to count
     *   }
     * })
    **/
    count<T extends at2campanaCountArgs>(
      args?: Subset<T, at2campanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], At2campanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a At2campana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {At2campanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends At2campanaAggregateArgs>(args: Subset<T, At2campanaAggregateArgs>): Prisma.PrismaPromise<GetAt2campanaAggregateType<T>>

    /**
     * Group by At2campana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaGroupByArgs} args - Group by arguments.
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
      T extends at2campanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: at2campanaGroupByArgs['orderBy'] }
        : { orderBy?: at2campanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, at2campanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAt2campanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for at2campana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__at2campanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * at2campana base type for findUnique actions
   */
  export type at2campanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter, which at2campana to fetch.
     */
    where: at2campanaWhereUniqueInput
  }

  /**
   * at2campana findUnique
   */
  export interface at2campanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends at2campanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campana findUniqueOrThrow
   */
  export type at2campanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter, which at2campana to fetch.
     */
    where: at2campanaWhereUniqueInput
  }


  /**
   * at2campana base type for findFirst actions
   */
  export type at2campanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter, which at2campana to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: at2campanaOrderByWithRelationInput | at2campanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for at2campanas.
     */
    cursor?: at2campanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of at2campanas.
     */
    distinct?: At2campanaScalarFieldEnum | At2campanaScalarFieldEnum[]
  }

  /**
   * at2campana findFirst
   */
  export interface at2campanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends at2campanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campana findFirstOrThrow
   */
  export type at2campanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter, which at2campana to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: at2campanaOrderByWithRelationInput | at2campanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for at2campanas.
     */
    cursor?: at2campanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of at2campanas.
     */
    distinct?: At2campanaScalarFieldEnum | At2campanaScalarFieldEnum[]
  }


  /**
   * at2campana findMany
   */
  export type at2campanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter, which at2campanas to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: at2campanaOrderByWithRelationInput | at2campanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing at2campanas.
     */
    cursor?: at2campanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanas.
     */
    skip?: number
    distinct?: At2campanaScalarFieldEnum | At2campanaScalarFieldEnum[]
  }


  /**
   * at2campana create
   */
  export type at2campanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * The data needed to create a at2campana.
     */
    data: XOR<at2campanaCreateInput, at2campanaUncheckedCreateInput>
  }


  /**
   * at2campana createMany
   */
  export type at2campanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many at2campanas.
     */
    data: at2campanaCreateManyInput | at2campanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * at2campana update
   */
  export type at2campanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * The data needed to update a at2campana.
     */
    data: XOR<at2campanaUpdateInput, at2campanaUncheckedUpdateInput>
    /**
     * Choose, which at2campana to update.
     */
    where: at2campanaWhereUniqueInput
  }


  /**
   * at2campana updateMany
   */
  export type at2campanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update at2campanas.
     */
    data: XOR<at2campanaUpdateManyMutationInput, at2campanaUncheckedUpdateManyInput>
    /**
     * Filter which at2campanas to update
     */
    where?: at2campanaWhereInput
  }


  /**
   * at2campana upsert
   */
  export type at2campanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * The filter to search for the at2campana to update in case it exists.
     */
    where: at2campanaWhereUniqueInput
    /**
     * In case the at2campana found by the `where` argument doesn't exist, create a new at2campana with this data.
     */
    create: XOR<at2campanaCreateInput, at2campanaUncheckedCreateInput>
    /**
     * In case the at2campana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<at2campanaUpdateInput, at2campanaUncheckedUpdateInput>
  }


  /**
   * at2campana delete
   */
  export type at2campanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
    /**
     * Filter which at2campana to delete.
     */
    where: at2campanaWhereUniqueInput
  }


  /**
   * at2campana deleteMany
   */
  export type at2campanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which at2campanas to delete
     */
    where?: at2campanaWhereInput
  }


  /**
   * at2campana without action
   */
  export type at2campanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect<ExtArgs> | null
  }



  /**
   * Model atcampana
   */


  export type AggregateAtcampana = {
    _count: AtcampanaCountAggregateOutputType | null
    _avg: AtcampanaAvgAggregateOutputType | null
    _sum: AtcampanaSumAggregateOutputType | null
    _min: AtcampanaMinAggregateOutputType | null
    _max: AtcampanaMaxAggregateOutputType | null
  }

  export type AtcampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    MAIL: string | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    MAIL: string | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    MAIL: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type AtcampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    MAIL?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    MAIL?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    MAIL?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type AtcampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampana to aggregate.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: atcampanaOrderByWithRelationInput | atcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atcampanas
    **/
    _count?: true | AtcampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtcampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtcampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtcampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtcampanaMaxAggregateInputType
  }

  export type GetAtcampanaAggregateType<T extends AtcampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtcampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtcampana[P]>
      : GetScalarType<T[P], AggregateAtcampana[P]>
  }




  export type atcampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: atcampanaWhereInput
    orderBy?: atcampanaOrderByWithAggregationInput | atcampanaOrderByWithAggregationInput[]
    by: AtcampanaScalarFieldEnum[] | AtcampanaScalarFieldEnum
    having?: atcampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtcampanaCountAggregateInputType | true
    _avg?: AtcampanaAvgAggregateInputType
    _sum?: AtcampanaSumAggregateInputType
    _min?: AtcampanaMinAggregateInputType
    _max?: AtcampanaMaxAggregateInputType
  }


  export type AtcampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    MAIL: string | null
    IMPORTE: number | null
    ID: number
    _count: AtcampanaCountAggregateOutputType | null
    _avg: AtcampanaAvgAggregateOutputType | null
    _sum: AtcampanaSumAggregateOutputType | null
    _min: AtcampanaMinAggregateOutputType | null
    _max: AtcampanaMaxAggregateOutputType | null
  }

  type GetAtcampanaGroupByPayload<T extends atcampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtcampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtcampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtcampanaGroupByOutputType[P]>
            : GetScalarType<T[P], AtcampanaGroupByOutputType[P]>
        }
      >
    >


  export type atcampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    MAIL?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["atcampana"]>

  export type atcampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    MAIL?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type atcampanaGetPayload<S extends boolean | null | undefined | atcampanaArgs> = $Types.GetResult<atcampanaPayload, S>

  type atcampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<atcampanaFindManyArgs, 'select' | 'include'> & {
      select?: AtcampanaCountAggregateInputType | true
    }

  export interface atcampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atcampana'], meta: { name: 'atcampana' } }
    /**
     * Find zero or one Atcampana that matches the filter.
     * @param {atcampanaFindUniqueArgs} args - Arguments to find a Atcampana
     * @example
     * // Get one Atcampana
     * const atcampana = await prisma.atcampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends atcampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, atcampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'atcampana'> extends True ? Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Atcampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {atcampanaFindUniqueOrThrowArgs} args - Arguments to find a Atcampana
     * @example
     * // Get one Atcampana
     * const atcampana = await prisma.atcampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends atcampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Atcampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaFindFirstArgs} args - Arguments to find a Atcampana
     * @example
     * // Get one Atcampana
     * const atcampana = await prisma.atcampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends atcampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, atcampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'atcampana'> extends True ? Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Atcampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaFindFirstOrThrowArgs} args - Arguments to find a Atcampana
     * @example
     * // Get one Atcampana
     * const atcampana = await prisma.atcampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends atcampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Atcampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atcampanas
     * const atcampanas = await prisma.atcampana.findMany()
     * 
     * // Get first 10 Atcampanas
     * const atcampanas = await prisma.atcampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const atcampanaWithSUCURSALOnly = await prisma.atcampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends atcampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Atcampana.
     * @param {atcampanaCreateArgs} args - Arguments to create a Atcampana.
     * @example
     * // Create one Atcampana
     * const Atcampana = await prisma.atcampana.create({
     *   data: {
     *     // ... data to create a Atcampana
     *   }
     * })
     * 
    **/
    create<T extends atcampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaCreateArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Atcampanas.
     *     @param {atcampanaCreateManyArgs} args - Arguments to create many Atcampanas.
     *     @example
     *     // Create many Atcampanas
     *     const atcampana = await prisma.atcampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends atcampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atcampana.
     * @param {atcampanaDeleteArgs} args - Arguments to delete one Atcampana.
     * @example
     * // Delete one Atcampana
     * const Atcampana = await prisma.atcampana.delete({
     *   where: {
     *     // ... filter to delete one Atcampana
     *   }
     * })
     * 
    **/
    delete<T extends atcampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaDeleteArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Atcampana.
     * @param {atcampanaUpdateArgs} args - Arguments to update one Atcampana.
     * @example
     * // Update one Atcampana
     * const atcampana = await prisma.atcampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends atcampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaUpdateArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Atcampanas.
     * @param {atcampanaDeleteManyArgs} args - Arguments to filter Atcampanas to delete.
     * @example
     * // Delete a few Atcampanas
     * const { count } = await prisma.atcampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends atcampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atcampanas
     * const atcampana = await prisma.atcampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends atcampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atcampana.
     * @param {atcampanaUpsertArgs} args - Arguments to update or create a Atcampana.
     * @example
     * // Update or create a Atcampana
     * const atcampana = await prisma.atcampana.upsert({
     *   create: {
     *     // ... data to create a Atcampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atcampana we want to update
     *   }
     * })
    **/
    upsert<T extends atcampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaUpsertArgs<ExtArgs>>
    ): Prisma__atcampanaClient<$Types.GetResult<atcampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Atcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaCountArgs} args - Arguments to filter Atcampanas to count.
     * @example
     * // Count the number of Atcampanas
     * const count = await prisma.atcampana.count({
     *   where: {
     *     // ... the filter for the Atcampanas we want to count
     *   }
     * })
    **/
    count<T extends atcampanaCountArgs>(
      args?: Subset<T, atcampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtcampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtcampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtcampanaAggregateArgs>(args: Subset<T, AtcampanaAggregateArgs>): Prisma.PrismaPromise<GetAtcampanaAggregateType<T>>

    /**
     * Group by Atcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaGroupByArgs} args - Group by arguments.
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
      T extends atcampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atcampanaGroupByArgs['orderBy'] }
        : { orderBy?: atcampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atcampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtcampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for atcampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__atcampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * atcampana base type for findUnique actions
   */
  export type atcampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter, which atcampana to fetch.
     */
    where: atcampanaWhereUniqueInput
  }

  /**
   * atcampana findUnique
   */
  export interface atcampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampana findUniqueOrThrow
   */
  export type atcampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter, which atcampana to fetch.
     */
    where: atcampanaWhereUniqueInput
  }


  /**
   * atcampana base type for findFirst actions
   */
  export type atcampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter, which atcampana to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: atcampanaOrderByWithRelationInput | atcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanas.
     */
    cursor?: atcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanas.
     */
    distinct?: AtcampanaScalarFieldEnum | AtcampanaScalarFieldEnum[]
  }

  /**
   * atcampana findFirst
   */
  export interface atcampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampana findFirstOrThrow
   */
  export type atcampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter, which atcampana to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: atcampanaOrderByWithRelationInput | atcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanas.
     */
    cursor?: atcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanas.
     */
    distinct?: AtcampanaScalarFieldEnum | AtcampanaScalarFieldEnum[]
  }


  /**
   * atcampana findMany
   */
  export type atcampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter, which atcampanas to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: atcampanaOrderByWithRelationInput | atcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atcampanas.
     */
    cursor?: atcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanas.
     */
    skip?: number
    distinct?: AtcampanaScalarFieldEnum | AtcampanaScalarFieldEnum[]
  }


  /**
   * atcampana create
   */
  export type atcampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a atcampana.
     */
    data: XOR<atcampanaCreateInput, atcampanaUncheckedCreateInput>
  }


  /**
   * atcampana createMany
   */
  export type atcampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atcampanas.
     */
    data: atcampanaCreateManyInput | atcampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * atcampana update
   */
  export type atcampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a atcampana.
     */
    data: XOR<atcampanaUpdateInput, atcampanaUncheckedUpdateInput>
    /**
     * Choose, which atcampana to update.
     */
    where: atcampanaWhereUniqueInput
  }


  /**
   * atcampana updateMany
   */
  export type atcampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atcampanas.
     */
    data: XOR<atcampanaUpdateManyMutationInput, atcampanaUncheckedUpdateManyInput>
    /**
     * Filter which atcampanas to update
     */
    where?: atcampanaWhereInput
  }


  /**
   * atcampana upsert
   */
  export type atcampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the atcampana to update in case it exists.
     */
    where: atcampanaWhereUniqueInput
    /**
     * In case the atcampana found by the `where` argument doesn't exist, create a new atcampana with this data.
     */
    create: XOR<atcampanaCreateInput, atcampanaUncheckedCreateInput>
    /**
     * In case the atcampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atcampanaUpdateInput, atcampanaUncheckedUpdateInput>
  }


  /**
   * atcampana delete
   */
  export type atcampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
    /**
     * Filter which atcampana to delete.
     */
    where: atcampanaWhereUniqueInput
  }


  /**
   * atcampana deleteMany
   */
  export type atcampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampanas to delete
     */
    where?: atcampanaWhereInput
  }


  /**
   * atcampana without action
   */
  export type atcampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect<ExtArgs> | null
  }



  /**
   * Model blancampana
   */


  export type AggregateBlancampana = {
    _count: BlancampanaCountAggregateOutputType | null
    _avg: BlancampanaAvgAggregateOutputType | null
    _sum: BlancampanaSumAggregateOutputType | null
    _min: BlancampanaMinAggregateOutputType | null
    _max: BlancampanaMaxAggregateOutputType | null
  }

  export type BlancampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type BlancampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type BlancampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which blancampana to aggregate.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: blancampanaOrderByWithRelationInput | blancampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blancampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blancampanas
    **/
    _count?: true | BlancampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlancampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlancampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlancampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlancampanaMaxAggregateInputType
  }

  export type GetBlancampanaAggregateType<T extends BlancampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateBlancampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlancampana[P]>
      : GetScalarType<T[P], AggregateBlancampana[P]>
  }




  export type blancampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: blancampanaWhereInput
    orderBy?: blancampanaOrderByWithAggregationInput | blancampanaOrderByWithAggregationInput[]
    by: BlancampanaScalarFieldEnum[] | BlancampanaScalarFieldEnum
    having?: blancampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlancampanaCountAggregateInputType | true
    _avg?: BlancampanaAvgAggregateInputType
    _sum?: BlancampanaSumAggregateInputType
    _min?: BlancampanaMinAggregateInputType
    _max?: BlancampanaMaxAggregateInputType
  }


  export type BlancampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: BlancampanaCountAggregateOutputType | null
    _avg: BlancampanaAvgAggregateOutputType | null
    _sum: BlancampanaSumAggregateOutputType | null
    _min: BlancampanaMinAggregateOutputType | null
    _max: BlancampanaMaxAggregateOutputType | null
  }

  type GetBlancampanaGroupByPayload<T extends blancampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlancampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlancampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlancampanaGroupByOutputType[P]>
            : GetScalarType<T[P], BlancampanaGroupByOutputType[P]>
        }
      >
    >


  export type blancampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["blancampana"]>

  export type blancampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type blancampanaGetPayload<S extends boolean | null | undefined | blancampanaArgs> = $Types.GetResult<blancampanaPayload, S>

  type blancampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<blancampanaFindManyArgs, 'select' | 'include'> & {
      select?: BlancampanaCountAggregateInputType | true
    }

  export interface blancampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blancampana'], meta: { name: 'blancampana' } }
    /**
     * Find zero or one Blancampana that matches the filter.
     * @param {blancampanaFindUniqueArgs} args - Arguments to find a Blancampana
     * @example
     * // Get one Blancampana
     * const blancampana = await prisma.blancampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends blancampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, blancampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'blancampana'> extends True ? Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Blancampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {blancampanaFindUniqueOrThrowArgs} args - Arguments to find a Blancampana
     * @example
     * // Get one Blancampana
     * const blancampana = await prisma.blancampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends blancampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Blancampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaFindFirstArgs} args - Arguments to find a Blancampana
     * @example
     * // Get one Blancampana
     * const blancampana = await prisma.blancampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends blancampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, blancampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'blancampana'> extends True ? Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Blancampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaFindFirstOrThrowArgs} args - Arguments to find a Blancampana
     * @example
     * // Get one Blancampana
     * const blancampana = await prisma.blancampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends blancampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Blancampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blancampanas
     * const blancampanas = await prisma.blancampana.findMany()
     * 
     * // Get first 10 Blancampanas
     * const blancampanas = await prisma.blancampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const blancampanaWithSUCURSALOnly = await prisma.blancampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends blancampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Blancampana.
     * @param {blancampanaCreateArgs} args - Arguments to create a Blancampana.
     * @example
     * // Create one Blancampana
     * const Blancampana = await prisma.blancampana.create({
     *   data: {
     *     // ... data to create a Blancampana
     *   }
     * })
     * 
    **/
    create<T extends blancampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaCreateArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Blancampanas.
     *     @param {blancampanaCreateManyArgs} args - Arguments to create many Blancampanas.
     *     @example
     *     // Create many Blancampanas
     *     const blancampana = await prisma.blancampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends blancampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blancampana.
     * @param {blancampanaDeleteArgs} args - Arguments to delete one Blancampana.
     * @example
     * // Delete one Blancampana
     * const Blancampana = await prisma.blancampana.delete({
     *   where: {
     *     // ... filter to delete one Blancampana
     *   }
     * })
     * 
    **/
    delete<T extends blancampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaDeleteArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Blancampana.
     * @param {blancampanaUpdateArgs} args - Arguments to update one Blancampana.
     * @example
     * // Update one Blancampana
     * const blancampana = await prisma.blancampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends blancampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaUpdateArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Blancampanas.
     * @param {blancampanaDeleteManyArgs} args - Arguments to filter Blancampanas to delete.
     * @example
     * // Delete a few Blancampanas
     * const { count } = await prisma.blancampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends blancampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blancampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blancampanas
     * const blancampana = await prisma.blancampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends blancampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blancampana.
     * @param {blancampanaUpsertArgs} args - Arguments to update or create a Blancampana.
     * @example
     * // Update or create a Blancampana
     * const blancampana = await prisma.blancampana.upsert({
     *   create: {
     *     // ... data to create a Blancampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blancampana we want to update
     *   }
     * })
    **/
    upsert<T extends blancampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaUpsertArgs<ExtArgs>>
    ): Prisma__blancampanaClient<$Types.GetResult<blancampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Blancampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaCountArgs} args - Arguments to filter Blancampanas to count.
     * @example
     * // Count the number of Blancampanas
     * const count = await prisma.blancampana.count({
     *   where: {
     *     // ... the filter for the Blancampanas we want to count
     *   }
     * })
    **/
    count<T extends blancampanaCountArgs>(
      args?: Subset<T, blancampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlancampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blancampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlancampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlancampanaAggregateArgs>(args: Subset<T, BlancampanaAggregateArgs>): Prisma.PrismaPromise<GetBlancampanaAggregateType<T>>

    /**
     * Group by Blancampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaGroupByArgs} args - Group by arguments.
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
      T extends blancampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blancampanaGroupByArgs['orderBy'] }
        : { orderBy?: blancampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blancampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlancampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for blancampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blancampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * blancampana base type for findUnique actions
   */
  export type blancampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter, which blancampana to fetch.
     */
    where: blancampanaWhereUniqueInput
  }

  /**
   * blancampana findUnique
   */
  export interface blancampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends blancampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampana findUniqueOrThrow
   */
  export type blancampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter, which blancampana to fetch.
     */
    where: blancampanaWhereUniqueInput
  }


  /**
   * blancampana base type for findFirst actions
   */
  export type blancampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter, which blancampana to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: blancampanaOrderByWithRelationInput | blancampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blancampanas.
     */
    cursor?: blancampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blancampanas.
     */
    distinct?: BlancampanaScalarFieldEnum | BlancampanaScalarFieldEnum[]
  }

  /**
   * blancampana findFirst
   */
  export interface blancampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends blancampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampana findFirstOrThrow
   */
  export type blancampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter, which blancampana to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: blancampanaOrderByWithRelationInput | blancampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blancampanas.
     */
    cursor?: blancampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blancampanas.
     */
    distinct?: BlancampanaScalarFieldEnum | BlancampanaScalarFieldEnum[]
  }


  /**
   * blancampana findMany
   */
  export type blancampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter, which blancampanas to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: blancampanaOrderByWithRelationInput | blancampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blancampanas.
     */
    cursor?: blancampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanas.
     */
    skip?: number
    distinct?: BlancampanaScalarFieldEnum | BlancampanaScalarFieldEnum[]
  }


  /**
   * blancampana create
   */
  export type blancampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a blancampana.
     */
    data: XOR<blancampanaCreateInput, blancampanaUncheckedCreateInput>
  }


  /**
   * blancampana createMany
   */
  export type blancampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blancampanas.
     */
    data: blancampanaCreateManyInput | blancampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * blancampana update
   */
  export type blancampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a blancampana.
     */
    data: XOR<blancampanaUpdateInput, blancampanaUncheckedUpdateInput>
    /**
     * Choose, which blancampana to update.
     */
    where: blancampanaWhereUniqueInput
  }


  /**
   * blancampana updateMany
   */
  export type blancampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blancampanas.
     */
    data: XOR<blancampanaUpdateManyMutationInput, blancampanaUncheckedUpdateManyInput>
    /**
     * Filter which blancampanas to update
     */
    where?: blancampanaWhereInput
  }


  /**
   * blancampana upsert
   */
  export type blancampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the blancampana to update in case it exists.
     */
    where: blancampanaWhereUniqueInput
    /**
     * In case the blancampana found by the `where` argument doesn't exist, create a new blancampana with this data.
     */
    create: XOR<blancampanaCreateInput, blancampanaUncheckedCreateInput>
    /**
     * In case the blancampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blancampanaUpdateInput, blancampanaUncheckedUpdateInput>
  }


  /**
   * blancampana delete
   */
  export type blancampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
    /**
     * Filter which blancampana to delete.
     */
    where: blancampanaWhereUniqueInput
  }


  /**
   * blancampana deleteMany
   */
  export type blancampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which blancampanas to delete
     */
    where?: blancampanaWhereInput
  }


  /**
   * blancampana without action
   */
  export type blancampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect<ExtArgs> | null
  }



  /**
   * Model reccampana
   */


  export type AggregateReccampana = {
    _count: ReccampanaCountAggregateOutputType | null
    _avg: ReccampanaAvgAggregateOutputType | null
    _sum: ReccampanaSumAggregateOutputType | null
    _min: ReccampanaMinAggregateOutputType | null
    _max: ReccampanaMaxAggregateOutputType | null
  }

  export type ReccampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type ReccampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type ReccampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampana to aggregate.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: reccampanaOrderByWithRelationInput | reccampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reccampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reccampanas
    **/
    _count?: true | ReccampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReccampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReccampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReccampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReccampanaMaxAggregateInputType
  }

  export type GetReccampanaAggregateType<T extends ReccampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateReccampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReccampana[P]>
      : GetScalarType<T[P], AggregateReccampana[P]>
  }




  export type reccampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: reccampanaWhereInput
    orderBy?: reccampanaOrderByWithAggregationInput | reccampanaOrderByWithAggregationInput[]
    by: ReccampanaScalarFieldEnum[] | ReccampanaScalarFieldEnum
    having?: reccampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReccampanaCountAggregateInputType | true
    _avg?: ReccampanaAvgAggregateInputType
    _sum?: ReccampanaSumAggregateInputType
    _min?: ReccampanaMinAggregateInputType
    _max?: ReccampanaMaxAggregateInputType
  }


  export type ReccampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: ReccampanaCountAggregateOutputType | null
    _avg: ReccampanaAvgAggregateOutputType | null
    _sum: ReccampanaSumAggregateOutputType | null
    _min: ReccampanaMinAggregateOutputType | null
    _max: ReccampanaMaxAggregateOutputType | null
  }

  type GetReccampanaGroupByPayload<T extends reccampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReccampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReccampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReccampanaGroupByOutputType[P]>
            : GetScalarType<T[P], ReccampanaGroupByOutputType[P]>
        }
      >
    >


  export type reccampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["reccampana"]>

  export type reccampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type reccampanaGetPayload<S extends boolean | null | undefined | reccampanaArgs> = $Types.GetResult<reccampanaPayload, S>

  type reccampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<reccampanaFindManyArgs, 'select' | 'include'> & {
      select?: ReccampanaCountAggregateInputType | true
    }

  export interface reccampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reccampana'], meta: { name: 'reccampana' } }
    /**
     * Find zero or one Reccampana that matches the filter.
     * @param {reccampanaFindUniqueArgs} args - Arguments to find a Reccampana
     * @example
     * // Get one Reccampana
     * const reccampana = await prisma.reccampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reccampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reccampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reccampana'> extends True ? Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Reccampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reccampanaFindUniqueOrThrowArgs} args - Arguments to find a Reccampana
     * @example
     * // Get one Reccampana
     * const reccampana = await prisma.reccampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reccampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Reccampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaFindFirstArgs} args - Arguments to find a Reccampana
     * @example
     * // Get one Reccampana
     * const reccampana = await prisma.reccampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reccampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reccampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reccampana'> extends True ? Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Reccampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaFindFirstOrThrowArgs} args - Arguments to find a Reccampana
     * @example
     * // Get one Reccampana
     * const reccampana = await prisma.reccampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reccampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Reccampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reccampanas
     * const reccampanas = await prisma.reccampana.findMany()
     * 
     * // Get first 10 Reccampanas
     * const reccampanas = await prisma.reccampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const reccampanaWithSUCURSALOnly = await prisma.reccampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends reccampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Reccampana.
     * @param {reccampanaCreateArgs} args - Arguments to create a Reccampana.
     * @example
     * // Create one Reccampana
     * const Reccampana = await prisma.reccampana.create({
     *   data: {
     *     // ... data to create a Reccampana
     *   }
     * })
     * 
    **/
    create<T extends reccampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaCreateArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Reccampanas.
     *     @param {reccampanaCreateManyArgs} args - Arguments to create many Reccampanas.
     *     @example
     *     // Create many Reccampanas
     *     const reccampana = await prisma.reccampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reccampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reccampana.
     * @param {reccampanaDeleteArgs} args - Arguments to delete one Reccampana.
     * @example
     * // Delete one Reccampana
     * const Reccampana = await prisma.reccampana.delete({
     *   where: {
     *     // ... filter to delete one Reccampana
     *   }
     * })
     * 
    **/
    delete<T extends reccampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaDeleteArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Reccampana.
     * @param {reccampanaUpdateArgs} args - Arguments to update one Reccampana.
     * @example
     * // Update one Reccampana
     * const reccampana = await prisma.reccampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reccampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaUpdateArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Reccampanas.
     * @param {reccampanaDeleteManyArgs} args - Arguments to filter Reccampanas to delete.
     * @example
     * // Delete a few Reccampanas
     * const { count } = await prisma.reccampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reccampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reccampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reccampanas
     * const reccampana = await prisma.reccampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reccampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reccampana.
     * @param {reccampanaUpsertArgs} args - Arguments to update or create a Reccampana.
     * @example
     * // Update or create a Reccampana
     * const reccampana = await prisma.reccampana.upsert({
     *   create: {
     *     // ... data to create a Reccampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reccampana we want to update
     *   }
     * })
    **/
    upsert<T extends reccampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaUpsertArgs<ExtArgs>>
    ): Prisma__reccampanaClient<$Types.GetResult<reccampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Reccampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaCountArgs} args - Arguments to filter Reccampanas to count.
     * @example
     * // Count the number of Reccampanas
     * const count = await prisma.reccampana.count({
     *   where: {
     *     // ... the filter for the Reccampanas we want to count
     *   }
     * })
    **/
    count<T extends reccampanaCountArgs>(
      args?: Subset<T, reccampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReccampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reccampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReccampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReccampanaAggregateArgs>(args: Subset<T, ReccampanaAggregateArgs>): Prisma.PrismaPromise<GetReccampanaAggregateType<T>>

    /**
     * Group by Reccampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaGroupByArgs} args - Group by arguments.
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
      T extends reccampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reccampanaGroupByArgs['orderBy'] }
        : { orderBy?: reccampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reccampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReccampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reccampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reccampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * reccampana base type for findUnique actions
   */
  export type reccampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter, which reccampana to fetch.
     */
    where: reccampanaWhereUniqueInput
  }

  /**
   * reccampana findUnique
   */
  export interface reccampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampana findUniqueOrThrow
   */
  export type reccampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter, which reccampana to fetch.
     */
    where: reccampanaWhereUniqueInput
  }


  /**
   * reccampana base type for findFirst actions
   */
  export type reccampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter, which reccampana to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: reccampanaOrderByWithRelationInput | reccampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanas.
     */
    cursor?: reccampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanas.
     */
    distinct?: ReccampanaScalarFieldEnum | ReccampanaScalarFieldEnum[]
  }

  /**
   * reccampana findFirst
   */
  export interface reccampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampana findFirstOrThrow
   */
  export type reccampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter, which reccampana to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: reccampanaOrderByWithRelationInput | reccampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanas.
     */
    cursor?: reccampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanas.
     */
    distinct?: ReccampanaScalarFieldEnum | ReccampanaScalarFieldEnum[]
  }


  /**
   * reccampana findMany
   */
  export type reccampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter, which reccampanas to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: reccampanaOrderByWithRelationInput | reccampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reccampanas.
     */
    cursor?: reccampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanas.
     */
    skip?: number
    distinct?: ReccampanaScalarFieldEnum | ReccampanaScalarFieldEnum[]
  }


  /**
   * reccampana create
   */
  export type reccampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a reccampana.
     */
    data: XOR<reccampanaCreateInput, reccampanaUncheckedCreateInput>
  }


  /**
   * reccampana createMany
   */
  export type reccampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reccampanas.
     */
    data: reccampanaCreateManyInput | reccampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reccampana update
   */
  export type reccampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a reccampana.
     */
    data: XOR<reccampanaUpdateInput, reccampanaUncheckedUpdateInput>
    /**
     * Choose, which reccampana to update.
     */
    where: reccampanaWhereUniqueInput
  }


  /**
   * reccampana updateMany
   */
  export type reccampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reccampanas.
     */
    data: XOR<reccampanaUpdateManyMutationInput, reccampanaUncheckedUpdateManyInput>
    /**
     * Filter which reccampanas to update
     */
    where?: reccampanaWhereInput
  }


  /**
   * reccampana upsert
   */
  export type reccampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the reccampana to update in case it exists.
     */
    where: reccampanaWhereUniqueInput
    /**
     * In case the reccampana found by the `where` argument doesn't exist, create a new reccampana with this data.
     */
    create: XOR<reccampanaCreateInput, reccampanaUncheckedCreateInput>
    /**
     * In case the reccampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reccampanaUpdateInput, reccampanaUncheckedUpdateInput>
  }


  /**
   * reccampana delete
   */
  export type reccampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
    /**
     * Filter which reccampana to delete.
     */
    where: reccampanaWhereUniqueInput
  }


  /**
   * reccampana deleteMany
   */
  export type reccampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampanas to delete
     */
    where?: reccampanaWhereInput
  }


  /**
   * reccampana without action
   */
  export type reccampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect<ExtArgs> | null
  }



  /**
   * Model reincampana
   */


  export type AggregateReincampana = {
    _count: ReincampanaCountAggregateOutputType | null
    _avg: ReincampanaAvgAggregateOutputType | null
    _sum: ReincampanaSumAggregateOutputType | null
    _min: ReincampanaMinAggregateOutputType | null
    _max: ReincampanaMaxAggregateOutputType | null
  }

  export type ReincampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type ReincampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type ReincampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reincampana to aggregate.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: reincampanaOrderByWithRelationInput | reincampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reincampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reincampanas
    **/
    _count?: true | ReincampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReincampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReincampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReincampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReincampanaMaxAggregateInputType
  }

  export type GetReincampanaAggregateType<T extends ReincampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateReincampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReincampana[P]>
      : GetScalarType<T[P], AggregateReincampana[P]>
  }




  export type reincampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: reincampanaWhereInput
    orderBy?: reincampanaOrderByWithAggregationInput | reincampanaOrderByWithAggregationInput[]
    by: ReincampanaScalarFieldEnum[] | ReincampanaScalarFieldEnum
    having?: reincampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReincampanaCountAggregateInputType | true
    _avg?: ReincampanaAvgAggregateInputType
    _sum?: ReincampanaSumAggregateInputType
    _min?: ReincampanaMinAggregateInputType
    _max?: ReincampanaMaxAggregateInputType
  }


  export type ReincampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: ReincampanaCountAggregateOutputType | null
    _avg: ReincampanaAvgAggregateOutputType | null
    _sum: ReincampanaSumAggregateOutputType | null
    _min: ReincampanaMinAggregateOutputType | null
    _max: ReincampanaMaxAggregateOutputType | null
  }

  type GetReincampanaGroupByPayload<T extends reincampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReincampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReincampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReincampanaGroupByOutputType[P]>
            : GetScalarType<T[P], ReincampanaGroupByOutputType[P]>
        }
      >
    >


  export type reincampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["reincampana"]>

  export type reincampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type reincampanaGetPayload<S extends boolean | null | undefined | reincampanaArgs> = $Types.GetResult<reincampanaPayload, S>

  type reincampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<reincampanaFindManyArgs, 'select' | 'include'> & {
      select?: ReincampanaCountAggregateInputType | true
    }

  export interface reincampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reincampana'], meta: { name: 'reincampana' } }
    /**
     * Find zero or one Reincampana that matches the filter.
     * @param {reincampanaFindUniqueArgs} args - Arguments to find a Reincampana
     * @example
     * // Get one Reincampana
     * const reincampana = await prisma.reincampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reincampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reincampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reincampana'> extends True ? Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Reincampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reincampanaFindUniqueOrThrowArgs} args - Arguments to find a Reincampana
     * @example
     * // Get one Reincampana
     * const reincampana = await prisma.reincampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reincampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Reincampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaFindFirstArgs} args - Arguments to find a Reincampana
     * @example
     * // Get one Reincampana
     * const reincampana = await prisma.reincampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reincampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reincampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reincampana'> extends True ? Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Reincampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaFindFirstOrThrowArgs} args - Arguments to find a Reincampana
     * @example
     * // Get one Reincampana
     * const reincampana = await prisma.reincampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reincampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Reincampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reincampanas
     * const reincampanas = await prisma.reincampana.findMany()
     * 
     * // Get first 10 Reincampanas
     * const reincampanas = await prisma.reincampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const reincampanaWithSUCURSALOnly = await prisma.reincampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends reincampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Reincampana.
     * @param {reincampanaCreateArgs} args - Arguments to create a Reincampana.
     * @example
     * // Create one Reincampana
     * const Reincampana = await prisma.reincampana.create({
     *   data: {
     *     // ... data to create a Reincampana
     *   }
     * })
     * 
    **/
    create<T extends reincampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaCreateArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Reincampanas.
     *     @param {reincampanaCreateManyArgs} args - Arguments to create many Reincampanas.
     *     @example
     *     // Create many Reincampanas
     *     const reincampana = await prisma.reincampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reincampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reincampana.
     * @param {reincampanaDeleteArgs} args - Arguments to delete one Reincampana.
     * @example
     * // Delete one Reincampana
     * const Reincampana = await prisma.reincampana.delete({
     *   where: {
     *     // ... filter to delete one Reincampana
     *   }
     * })
     * 
    **/
    delete<T extends reincampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaDeleteArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Reincampana.
     * @param {reincampanaUpdateArgs} args - Arguments to update one Reincampana.
     * @example
     * // Update one Reincampana
     * const reincampana = await prisma.reincampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reincampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaUpdateArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Reincampanas.
     * @param {reincampanaDeleteManyArgs} args - Arguments to filter Reincampanas to delete.
     * @example
     * // Delete a few Reincampanas
     * const { count } = await prisma.reincampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reincampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reincampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reincampanas
     * const reincampana = await prisma.reincampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reincampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reincampana.
     * @param {reincampanaUpsertArgs} args - Arguments to update or create a Reincampana.
     * @example
     * // Update or create a Reincampana
     * const reincampana = await prisma.reincampana.upsert({
     *   create: {
     *     // ... data to create a Reincampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reincampana we want to update
     *   }
     * })
    **/
    upsert<T extends reincampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaUpsertArgs<ExtArgs>>
    ): Prisma__reincampanaClient<$Types.GetResult<reincampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Reincampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaCountArgs} args - Arguments to filter Reincampanas to count.
     * @example
     * // Count the number of Reincampanas
     * const count = await prisma.reincampana.count({
     *   where: {
     *     // ... the filter for the Reincampanas we want to count
     *   }
     * })
    **/
    count<T extends reincampanaCountArgs>(
      args?: Subset<T, reincampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReincampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reincampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReincampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReincampanaAggregateArgs>(args: Subset<T, ReincampanaAggregateArgs>): Prisma.PrismaPromise<GetReincampanaAggregateType<T>>

    /**
     * Group by Reincampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaGroupByArgs} args - Group by arguments.
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
      T extends reincampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reincampanaGroupByArgs['orderBy'] }
        : { orderBy?: reincampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reincampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReincampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reincampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reincampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * reincampana base type for findUnique actions
   */
  export type reincampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter, which reincampana to fetch.
     */
    where: reincampanaWhereUniqueInput
  }

  /**
   * reincampana findUnique
   */
  export interface reincampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reincampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampana findUniqueOrThrow
   */
  export type reincampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter, which reincampana to fetch.
     */
    where: reincampanaWhereUniqueInput
  }


  /**
   * reincampana base type for findFirst actions
   */
  export type reincampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter, which reincampana to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: reincampanaOrderByWithRelationInput | reincampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reincampanas.
     */
    cursor?: reincampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reincampanas.
     */
    distinct?: ReincampanaScalarFieldEnum | ReincampanaScalarFieldEnum[]
  }

  /**
   * reincampana findFirst
   */
  export interface reincampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reincampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampana findFirstOrThrow
   */
  export type reincampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter, which reincampana to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: reincampanaOrderByWithRelationInput | reincampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reincampanas.
     */
    cursor?: reincampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reincampanas.
     */
    distinct?: ReincampanaScalarFieldEnum | ReincampanaScalarFieldEnum[]
  }


  /**
   * reincampana findMany
   */
  export type reincampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter, which reincampanas to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: reincampanaOrderByWithRelationInput | reincampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reincampanas.
     */
    cursor?: reincampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanas.
     */
    skip?: number
    distinct?: ReincampanaScalarFieldEnum | ReincampanaScalarFieldEnum[]
  }


  /**
   * reincampana create
   */
  export type reincampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a reincampana.
     */
    data: XOR<reincampanaCreateInput, reincampanaUncheckedCreateInput>
  }


  /**
   * reincampana createMany
   */
  export type reincampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reincampanas.
     */
    data: reincampanaCreateManyInput | reincampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reincampana update
   */
  export type reincampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a reincampana.
     */
    data: XOR<reincampanaUpdateInput, reincampanaUncheckedUpdateInput>
    /**
     * Choose, which reincampana to update.
     */
    where: reincampanaWhereUniqueInput
  }


  /**
   * reincampana updateMany
   */
  export type reincampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reincampanas.
     */
    data: XOR<reincampanaUpdateManyMutationInput, reincampanaUncheckedUpdateManyInput>
    /**
     * Filter which reincampanas to update
     */
    where?: reincampanaWhereInput
  }


  /**
   * reincampana upsert
   */
  export type reincampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the reincampana to update in case it exists.
     */
    where: reincampanaWhereUniqueInput
    /**
     * In case the reincampana found by the `where` argument doesn't exist, create a new reincampana with this data.
     */
    create: XOR<reincampanaCreateInput, reincampanaUncheckedCreateInput>
    /**
     * In case the reincampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reincampanaUpdateInput, reincampanaUncheckedUpdateInput>
  }


  /**
   * reincampana delete
   */
  export type reincampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
    /**
     * Filter which reincampana to delete.
     */
    where: reincampanaWhereUniqueInput
  }


  /**
   * reincampana deleteMany
   */
  export type reincampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reincampanas to delete
     */
    where?: reincampanaWhereInput
  }


  /**
   * reincampana without action
   */
  export type reincampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect<ExtArgs> | null
  }



  /**
   * Model auxcampana
   */


  export type AggregateAuxcampana = {
    _count: AuxcampanaCountAggregateOutputType | null
    _avg: AuxcampanaAvgAggregateOutputType | null
    _sum: AuxcampanaSumAggregateOutputType | null
    _min: AuxcampanaMinAggregateOutputType | null
    _max: AuxcampanaMaxAggregateOutputType | null
  }

  export type AuxcampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AuxcampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AuxcampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AuxcampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AuxcampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type AuxcampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AuxcampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AuxcampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AuxcampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AuxcampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type AuxcampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which auxcampana to aggregate.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: auxcampanaOrderByWithRelationInput | auxcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auxcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auxcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auxcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auxcampanas
    **/
    _count?: true | AuxcampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuxcampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuxcampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuxcampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuxcampanaMaxAggregateInputType
  }

  export type GetAuxcampanaAggregateType<T extends AuxcampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuxcampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuxcampana[P]>
      : GetScalarType<T[P], AggregateAuxcampana[P]>
  }




  export type auxcampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: auxcampanaWhereInput
    orderBy?: auxcampanaOrderByWithAggregationInput | auxcampanaOrderByWithAggregationInput[]
    by: AuxcampanaScalarFieldEnum[] | AuxcampanaScalarFieldEnum
    having?: auxcampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuxcampanaCountAggregateInputType | true
    _avg?: AuxcampanaAvgAggregateInputType
    _sum?: AuxcampanaSumAggregateInputType
    _min?: AuxcampanaMinAggregateInputType
    _max?: AuxcampanaMaxAggregateInputType
  }


  export type AuxcampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: AuxcampanaCountAggregateOutputType | null
    _avg: AuxcampanaAvgAggregateOutputType | null
    _sum: AuxcampanaSumAggregateOutputType | null
    _min: AuxcampanaMinAggregateOutputType | null
    _max: AuxcampanaMaxAggregateOutputType | null
  }

  type GetAuxcampanaGroupByPayload<T extends auxcampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuxcampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuxcampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuxcampanaGroupByOutputType[P]>
            : GetScalarType<T[P], AuxcampanaGroupByOutputType[P]>
        }
      >
    >


  export type auxcampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["auxcampana"]>

  export type auxcampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type auxcampanaGetPayload<S extends boolean | null | undefined | auxcampanaArgs> = $Types.GetResult<auxcampanaPayload, S>

  type auxcampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<auxcampanaFindManyArgs, 'select' | 'include'> & {
      select?: AuxcampanaCountAggregateInputType | true
    }

  export interface auxcampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auxcampana'], meta: { name: 'auxcampana' } }
    /**
     * Find zero or one Auxcampana that matches the filter.
     * @param {auxcampanaFindUniqueArgs} args - Arguments to find a Auxcampana
     * @example
     * // Get one Auxcampana
     * const auxcampana = await prisma.auxcampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auxcampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auxcampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auxcampana'> extends True ? Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Auxcampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auxcampanaFindUniqueOrThrowArgs} args - Arguments to find a Auxcampana
     * @example
     * // Get one Auxcampana
     * const auxcampana = await prisma.auxcampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auxcampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auxcampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Auxcampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaFindFirstArgs} args - Arguments to find a Auxcampana
     * @example
     * // Get one Auxcampana
     * const auxcampana = await prisma.auxcampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auxcampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auxcampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auxcampana'> extends True ? Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Auxcampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaFindFirstOrThrowArgs} args - Arguments to find a Auxcampana
     * @example
     * // Get one Auxcampana
     * const auxcampana = await prisma.auxcampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auxcampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auxcampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Auxcampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auxcampanas
     * const auxcampanas = await prisma.auxcampana.findMany()
     * 
     * // Get first 10 Auxcampanas
     * const auxcampanas = await prisma.auxcampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const auxcampanaWithSUCURSALOnly = await prisma.auxcampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends auxcampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auxcampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Auxcampana.
     * @param {auxcampanaCreateArgs} args - Arguments to create a Auxcampana.
     * @example
     * // Create one Auxcampana
     * const Auxcampana = await prisma.auxcampana.create({
     *   data: {
     *     // ... data to create a Auxcampana
     *   }
     * })
     * 
    **/
    create<T extends auxcampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, auxcampanaCreateArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Auxcampanas.
     *     @param {auxcampanaCreateManyArgs} args - Arguments to create many Auxcampanas.
     *     @example
     *     // Create many Auxcampanas
     *     const auxcampana = await prisma.auxcampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auxcampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auxcampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auxcampana.
     * @param {auxcampanaDeleteArgs} args - Arguments to delete one Auxcampana.
     * @example
     * // Delete one Auxcampana
     * const Auxcampana = await prisma.auxcampana.delete({
     *   where: {
     *     // ... filter to delete one Auxcampana
     *   }
     * })
     * 
    **/
    delete<T extends auxcampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, auxcampanaDeleteArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Auxcampana.
     * @param {auxcampanaUpdateArgs} args - Arguments to update one Auxcampana.
     * @example
     * // Update one Auxcampana
     * const auxcampana = await prisma.auxcampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auxcampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, auxcampanaUpdateArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Auxcampanas.
     * @param {auxcampanaDeleteManyArgs} args - Arguments to filter Auxcampanas to delete.
     * @example
     * // Delete a few Auxcampanas
     * const { count } = await prisma.auxcampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auxcampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auxcampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auxcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auxcampanas
     * const auxcampana = await prisma.auxcampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auxcampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, auxcampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auxcampana.
     * @param {auxcampanaUpsertArgs} args - Arguments to update or create a Auxcampana.
     * @example
     * // Update or create a Auxcampana
     * const auxcampana = await prisma.auxcampana.upsert({
     *   create: {
     *     // ... data to create a Auxcampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auxcampana we want to update
     *   }
     * })
    **/
    upsert<T extends auxcampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, auxcampanaUpsertArgs<ExtArgs>>
    ): Prisma__auxcampanaClient<$Types.GetResult<auxcampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Auxcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaCountArgs} args - Arguments to filter Auxcampanas to count.
     * @example
     * // Count the number of Auxcampanas
     * const count = await prisma.auxcampana.count({
     *   where: {
     *     // ... the filter for the Auxcampanas we want to count
     *   }
     * })
    **/
    count<T extends auxcampanaCountArgs>(
      args?: Subset<T, auxcampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuxcampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auxcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxcampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuxcampanaAggregateArgs>(args: Subset<T, AuxcampanaAggregateArgs>): Prisma.PrismaPromise<GetAuxcampanaAggregateType<T>>

    /**
     * Group by Auxcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auxcampanaGroupByArgs} args - Group by arguments.
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
      T extends auxcampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auxcampanaGroupByArgs['orderBy'] }
        : { orderBy?: auxcampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auxcampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuxcampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auxcampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auxcampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * auxcampana base type for findUnique actions
   */
  export type auxcampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where: auxcampanaWhereUniqueInput
  }

  /**
   * auxcampana findUnique
   */
  export interface auxcampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends auxcampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auxcampana findUniqueOrThrow
   */
  export type auxcampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where: auxcampanaWhereUniqueInput
  }


  /**
   * auxcampana base type for findFirst actions
   */
  export type auxcampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: auxcampanaOrderByWithRelationInput | auxcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auxcampanas.
     */
    cursor?: auxcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auxcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auxcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auxcampanas.
     */
    distinct?: AuxcampanaScalarFieldEnum | AuxcampanaScalarFieldEnum[]
  }

  /**
   * auxcampana findFirst
   */
  export interface auxcampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends auxcampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auxcampana findFirstOrThrow
   */
  export type auxcampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: auxcampanaOrderByWithRelationInput | auxcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auxcampanas.
     */
    cursor?: auxcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auxcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auxcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auxcampanas.
     */
    distinct?: AuxcampanaScalarFieldEnum | AuxcampanaScalarFieldEnum[]
  }


  /**
   * auxcampana findMany
   */
  export type auxcampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter, which auxcampanas to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: auxcampanaOrderByWithRelationInput | auxcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auxcampanas.
     */
    cursor?: auxcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auxcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auxcampanas.
     */
    skip?: number
    distinct?: AuxcampanaScalarFieldEnum | AuxcampanaScalarFieldEnum[]
  }


  /**
   * auxcampana create
   */
  export type auxcampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a auxcampana.
     */
    data: XOR<auxcampanaCreateInput, auxcampanaUncheckedCreateInput>
  }


  /**
   * auxcampana createMany
   */
  export type auxcampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auxcampanas.
     */
    data: auxcampanaCreateManyInput | auxcampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * auxcampana update
   */
  export type auxcampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a auxcampana.
     */
    data: XOR<auxcampanaUpdateInput, auxcampanaUncheckedUpdateInput>
    /**
     * Choose, which auxcampana to update.
     */
    where: auxcampanaWhereUniqueInput
  }


  /**
   * auxcampana updateMany
   */
  export type auxcampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auxcampanas.
     */
    data: XOR<auxcampanaUpdateManyMutationInput, auxcampanaUncheckedUpdateManyInput>
    /**
     * Filter which auxcampanas to update
     */
    where?: auxcampanaWhereInput
  }


  /**
   * auxcampana upsert
   */
  export type auxcampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the auxcampana to update in case it exists.
     */
    where: auxcampanaWhereUniqueInput
    /**
     * In case the auxcampana found by the `where` argument doesn't exist, create a new auxcampana with this data.
     */
    create: XOR<auxcampanaCreateInput, auxcampanaUncheckedCreateInput>
    /**
     * In case the auxcampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auxcampanaUpdateInput, auxcampanaUncheckedUpdateInput>
  }


  /**
   * auxcampana delete
   */
  export type auxcampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
    /**
     * Filter which auxcampana to delete.
     */
    where: auxcampanaWhereUniqueInput
  }


  /**
   * auxcampana deleteMany
   */
  export type auxcampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which auxcampanas to delete
     */
    where?: auxcampanaWhereInput
  }


  /**
   * auxcampana without action
   */
  export type auxcampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect<ExtArgs> | null
  }



  /**
   * Model policampana
   */


  export type AggregatePolicampana = {
    _count: PolicampanaCountAggregateOutputType | null
    _avg: PolicampanaAvgAggregateOutputType | null
    _sum: PolicampanaSumAggregateOutputType | null
    _min: PolicampanaMinAggregateOutputType | null
    _max: PolicampanaMaxAggregateOutputType | null
  }

  export type PolicampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type PolicampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type PolicampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type PolicampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type PolicampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type PolicampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type PolicampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type PolicampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type PolicampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type PolicampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type PolicampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which policampana to aggregate.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: policampanaOrderByWithRelationInput | policampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: policampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned policampanas
    **/
    _count?: true | PolicampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicampanaMaxAggregateInputType
  }

  export type GetPolicampanaAggregateType<T extends PolicampanaAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicampana[P]>
      : GetScalarType<T[P], AggregatePolicampana[P]>
  }




  export type policampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: policampanaWhereInput
    orderBy?: policampanaOrderByWithAggregationInput | policampanaOrderByWithAggregationInput[]
    by: PolicampanaScalarFieldEnum[] | PolicampanaScalarFieldEnum
    having?: policampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicampanaCountAggregateInputType | true
    _avg?: PolicampanaAvgAggregateInputType
    _sum?: PolicampanaSumAggregateInputType
    _min?: PolicampanaMinAggregateInputType
    _max?: PolicampanaMaxAggregateInputType
  }


  export type PolicampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: PolicampanaCountAggregateOutputType | null
    _avg: PolicampanaAvgAggregateOutputType | null
    _sum: PolicampanaSumAggregateOutputType | null
    _min: PolicampanaMinAggregateOutputType | null
    _max: PolicampanaMaxAggregateOutputType | null
  }

  type GetPolicampanaGroupByPayload<T extends policampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicampanaGroupByOutputType[P]>
            : GetScalarType<T[P], PolicampanaGroupByOutputType[P]>
        }
      >
    >


  export type policampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["policampana"]>

  export type policampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type policampanaGetPayload<S extends boolean | null | undefined | policampanaArgs> = $Types.GetResult<policampanaPayload, S>

  type policampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<policampanaFindManyArgs, 'select' | 'include'> & {
      select?: PolicampanaCountAggregateInputType | true
    }

  export interface policampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['policampana'], meta: { name: 'policampana' } }
    /**
     * Find zero or one Policampana that matches the filter.
     * @param {policampanaFindUniqueArgs} args - Arguments to find a Policampana
     * @example
     * // Get one Policampana
     * const policampana = await prisma.policampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends policampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, policampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'policampana'> extends True ? Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Policampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {policampanaFindUniqueOrThrowArgs} args - Arguments to find a Policampana
     * @example
     * // Get one Policampana
     * const policampana = await prisma.policampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends policampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, policampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Policampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaFindFirstArgs} args - Arguments to find a Policampana
     * @example
     * // Get one Policampana
     * const policampana = await prisma.policampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends policampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, policampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'policampana'> extends True ? Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Policampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaFindFirstOrThrowArgs} args - Arguments to find a Policampana
     * @example
     * // Get one Policampana
     * const policampana = await prisma.policampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends policampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, policampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Policampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policampanas
     * const policampanas = await prisma.policampana.findMany()
     * 
     * // Get first 10 Policampanas
     * const policampanas = await prisma.policampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const policampanaWithSUCURSALOnly = await prisma.policampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends policampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, policampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Policampana.
     * @param {policampanaCreateArgs} args - Arguments to create a Policampana.
     * @example
     * // Create one Policampana
     * const Policampana = await prisma.policampana.create({
     *   data: {
     *     // ... data to create a Policampana
     *   }
     * })
     * 
    **/
    create<T extends policampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, policampanaCreateArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Policampanas.
     *     @param {policampanaCreateManyArgs} args - Arguments to create many Policampanas.
     *     @example
     *     // Create many Policampanas
     *     const policampana = await prisma.policampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends policampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, policampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Policampana.
     * @param {policampanaDeleteArgs} args - Arguments to delete one Policampana.
     * @example
     * // Delete one Policampana
     * const Policampana = await prisma.policampana.delete({
     *   where: {
     *     // ... filter to delete one Policampana
     *   }
     * })
     * 
    **/
    delete<T extends policampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, policampanaDeleteArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Policampana.
     * @param {policampanaUpdateArgs} args - Arguments to update one Policampana.
     * @example
     * // Update one Policampana
     * const policampana = await prisma.policampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends policampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, policampanaUpdateArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Policampanas.
     * @param {policampanaDeleteManyArgs} args - Arguments to filter Policampanas to delete.
     * @example
     * // Delete a few Policampanas
     * const { count } = await prisma.policampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends policampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, policampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policampanas
     * const policampana = await prisma.policampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends policampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, policampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Policampana.
     * @param {policampanaUpsertArgs} args - Arguments to update or create a Policampana.
     * @example
     * // Update or create a Policampana
     * const policampana = await prisma.policampana.upsert({
     *   create: {
     *     // ... data to create a Policampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policampana we want to update
     *   }
     * })
    **/
    upsert<T extends policampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, policampanaUpsertArgs<ExtArgs>>
    ): Prisma__policampanaClient<$Types.GetResult<policampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Policampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaCountArgs} args - Arguments to filter Policampanas to count.
     * @example
     * // Count the number of Policampanas
     * const count = await prisma.policampana.count({
     *   where: {
     *     // ... the filter for the Policampanas we want to count
     *   }
     * })
    **/
    count<T extends policampanaCountArgs>(
      args?: Subset<T, policampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicampanaAggregateArgs>(args: Subset<T, PolicampanaAggregateArgs>): Prisma.PrismaPromise<GetPolicampanaAggregateType<T>>

    /**
     * Group by Policampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policampanaGroupByArgs} args - Group by arguments.
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
      T extends policampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: policampanaGroupByArgs['orderBy'] }
        : { orderBy?: policampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, policampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for policampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__policampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * policampana base type for findUnique actions
   */
  export type policampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter, which policampana to fetch.
     */
    where: policampanaWhereUniqueInput
  }

  /**
   * policampana findUnique
   */
  export interface policampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends policampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * policampana findUniqueOrThrow
   */
  export type policampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter, which policampana to fetch.
     */
    where: policampanaWhereUniqueInput
  }


  /**
   * policampana base type for findFirst actions
   */
  export type policampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter, which policampana to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: policampanaOrderByWithRelationInput | policampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for policampanas.
     */
    cursor?: policampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of policampanas.
     */
    distinct?: PolicampanaScalarFieldEnum | PolicampanaScalarFieldEnum[]
  }

  /**
   * policampana findFirst
   */
  export interface policampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends policampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * policampana findFirstOrThrow
   */
  export type policampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter, which policampana to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: policampanaOrderByWithRelationInput | policampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for policampanas.
     */
    cursor?: policampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of policampanas.
     */
    distinct?: PolicampanaScalarFieldEnum | PolicampanaScalarFieldEnum[]
  }


  /**
   * policampana findMany
   */
  export type policampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter, which policampanas to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: policampanaOrderByWithRelationInput | policampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing policampanas.
     */
    cursor?: policampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policampanas.
     */
    skip?: number
    distinct?: PolicampanaScalarFieldEnum | PolicampanaScalarFieldEnum[]
  }


  /**
   * policampana create
   */
  export type policampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a policampana.
     */
    data: XOR<policampanaCreateInput, policampanaUncheckedCreateInput>
  }


  /**
   * policampana createMany
   */
  export type policampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many policampanas.
     */
    data: policampanaCreateManyInput | policampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * policampana update
   */
  export type policampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a policampana.
     */
    data: XOR<policampanaUpdateInput, policampanaUncheckedUpdateInput>
    /**
     * Choose, which policampana to update.
     */
    where: policampanaWhereUniqueInput
  }


  /**
   * policampana updateMany
   */
  export type policampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update policampanas.
     */
    data: XOR<policampanaUpdateManyMutationInput, policampanaUncheckedUpdateManyInput>
    /**
     * Filter which policampanas to update
     */
    where?: policampanaWhereInput
  }


  /**
   * policampana upsert
   */
  export type policampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the policampana to update in case it exists.
     */
    where: policampanaWhereUniqueInput
    /**
     * In case the policampana found by the `where` argument doesn't exist, create a new policampana with this data.
     */
    create: XOR<policampanaCreateInput, policampanaUncheckedCreateInput>
    /**
     * In case the policampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<policampanaUpdateInput, policampanaUncheckedUpdateInput>
  }


  /**
   * policampana delete
   */
  export type policampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
    /**
     * Filter which policampana to delete.
     */
    where: policampanaWhereUniqueInput
  }


  /**
   * policampana deleteMany
   */
  export type policampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which policampanas to delete
     */
    where?: policampanaWhereInput
  }


  /**
   * policampana without action
   */
  export type policampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect<ExtArgs> | null
  }



  /**
   * Model at2campanaM
   */


  export type AggregateAt2campanaM = {
    _count: At2campanaMCountAggregateOutputType | null
    _avg: At2campanaMAvgAggregateOutputType | null
    _sum: At2campanaMSumAggregateOutputType | null
    _min: At2campanaMMinAggregateOutputType | null
    _max: At2campanaMMaxAggregateOutputType | null
  }

  export type At2campanaMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type At2campanaMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type At2campanaMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type At2campanaMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type At2campanaMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which at2campanaM to aggregate.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: at2campanaMOrderByWithRelationInput | at2campanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: at2campanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned at2campanaMS
    **/
    _count?: true | At2campanaMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: At2campanaMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: At2campanaMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: At2campanaMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: At2campanaMMaxAggregateInputType
  }

  export type GetAt2campanaMAggregateType<T extends At2campanaMAggregateArgs> = {
        [P in keyof T & keyof AggregateAt2campanaM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAt2campanaM[P]>
      : GetScalarType<T[P], AggregateAt2campanaM[P]>
  }




  export type at2campanaMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: at2campanaMWhereInput
    orderBy?: at2campanaMOrderByWithAggregationInput | at2campanaMOrderByWithAggregationInput[]
    by: At2campanaMScalarFieldEnum[] | At2campanaMScalarFieldEnum
    having?: at2campanaMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: At2campanaMCountAggregateInputType | true
    _avg?: At2campanaMAvgAggregateInputType
    _sum?: At2campanaMSumAggregateInputType
    _min?: At2campanaMMinAggregateInputType
    _max?: At2campanaMMaxAggregateInputType
  }


  export type At2campanaMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: At2campanaMCountAggregateOutputType | null
    _avg: At2campanaMAvgAggregateOutputType | null
    _sum: At2campanaMSumAggregateOutputType | null
    _min: At2campanaMMinAggregateOutputType | null
    _max: At2campanaMMaxAggregateOutputType | null
  }

  type GetAt2campanaMGroupByPayload<T extends at2campanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<At2campanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof At2campanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], At2campanaMGroupByOutputType[P]>
            : GetScalarType<T[P], At2campanaMGroupByOutputType[P]>
        }
      >
    >


  export type at2campanaMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["at2campanaM"]>

  export type at2campanaMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type at2campanaMGetPayload<S extends boolean | null | undefined | at2campanaMArgs> = $Types.GetResult<at2campanaMPayload, S>

  type at2campanaMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<at2campanaMFindManyArgs, 'select' | 'include'> & {
      select?: At2campanaMCountAggregateInputType | true
    }

  export interface at2campanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['at2campanaM'], meta: { name: 'at2campanaM' } }
    /**
     * Find zero or one At2campanaM that matches the filter.
     * @param {at2campanaMFindUniqueArgs} args - Arguments to find a At2campanaM
     * @example
     * // Get one At2campanaM
     * const at2campanaM = await prisma.at2campanaM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends at2campanaMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, at2campanaMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'at2campanaM'> extends True ? Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one At2campanaM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {at2campanaMFindUniqueOrThrowArgs} args - Arguments to find a At2campanaM
     * @example
     * // Get one At2campanaM
     * const at2campanaM = await prisma.at2campanaM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends at2campanaMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first At2campanaM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMFindFirstArgs} args - Arguments to find a At2campanaM
     * @example
     * // Get one At2campanaM
     * const at2campanaM = await prisma.at2campanaM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends at2campanaMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, at2campanaMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'at2campanaM'> extends True ? Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first At2campanaM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMFindFirstOrThrowArgs} args - Arguments to find a At2campanaM
     * @example
     * // Get one At2campanaM
     * const at2campanaM = await prisma.at2campanaM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends at2campanaMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more At2campanaMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all At2campanaMS
     * const at2campanaMS = await prisma.at2campanaM.findMany()
     * 
     * // Get first 10 At2campanaMS
     * const at2campanaMS = await prisma.at2campanaM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const at2campanaMWithSUCURSALOnly = await prisma.at2campanaM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends at2campanaMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a At2campanaM.
     * @param {at2campanaMCreateArgs} args - Arguments to create a At2campanaM.
     * @example
     * // Create one At2campanaM
     * const At2campanaM = await prisma.at2campanaM.create({
     *   data: {
     *     // ... data to create a At2campanaM
     *   }
     * })
     * 
    **/
    create<T extends at2campanaMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaMCreateArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many At2campanaMS.
     *     @param {at2campanaMCreateManyArgs} args - Arguments to create many At2campanaMS.
     *     @example
     *     // Create many At2campanaMS
     *     const at2campanaM = await prisma.at2campanaM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends at2campanaMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a At2campanaM.
     * @param {at2campanaMDeleteArgs} args - Arguments to delete one At2campanaM.
     * @example
     * // Delete one At2campanaM
     * const At2campanaM = await prisma.at2campanaM.delete({
     *   where: {
     *     // ... filter to delete one At2campanaM
     *   }
     * })
     * 
    **/
    delete<T extends at2campanaMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaMDeleteArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one At2campanaM.
     * @param {at2campanaMUpdateArgs} args - Arguments to update one At2campanaM.
     * @example
     * // Update one At2campanaM
     * const at2campanaM = await prisma.at2campanaM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends at2campanaMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaMUpdateArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more At2campanaMS.
     * @param {at2campanaMDeleteManyArgs} args - Arguments to filter At2campanaMS to delete.
     * @example
     * // Delete a few At2campanaMS
     * const { count } = await prisma.at2campanaM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends at2campanaMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, at2campanaMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more At2campanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many At2campanaMS
     * const at2campanaM = await prisma.at2campanaM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends at2campanaMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one At2campanaM.
     * @param {at2campanaMUpsertArgs} args - Arguments to update or create a At2campanaM.
     * @example
     * // Update or create a At2campanaM
     * const at2campanaM = await prisma.at2campanaM.upsert({
     *   create: {
     *     // ... data to create a At2campanaM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the At2campanaM we want to update
     *   }
     * })
    **/
    upsert<T extends at2campanaMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, at2campanaMUpsertArgs<ExtArgs>>
    ): Prisma__at2campanaMClient<$Types.GetResult<at2campanaMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of At2campanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMCountArgs} args - Arguments to filter At2campanaMS to count.
     * @example
     * // Count the number of At2campanaMS
     * const count = await prisma.at2campanaM.count({
     *   where: {
     *     // ... the filter for the At2campanaMS we want to count
     *   }
     * })
    **/
    count<T extends at2campanaMCountArgs>(
      args?: Subset<T, at2campanaMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], At2campanaMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a At2campanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {At2campanaMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends At2campanaMAggregateArgs>(args: Subset<T, At2campanaMAggregateArgs>): Prisma.PrismaPromise<GetAt2campanaMAggregateType<T>>

    /**
     * Group by At2campanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {at2campanaMGroupByArgs} args - Group by arguments.
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
      T extends at2campanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: at2campanaMGroupByArgs['orderBy'] }
        : { orderBy?: at2campanaMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, at2campanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAt2campanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for at2campanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__at2campanaMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * at2campanaM base type for findUnique actions
   */
  export type at2campanaMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where: at2campanaMWhereUniqueInput
  }

  /**
   * at2campanaM findUnique
   */
  export interface at2campanaMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends at2campanaMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campanaM findUniqueOrThrow
   */
  export type at2campanaMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where: at2campanaMWhereUniqueInput
  }


  /**
   * at2campanaM base type for findFirst actions
   */
  export type at2campanaMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: at2campanaMOrderByWithRelationInput | at2campanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for at2campanaMS.
     */
    cursor?: at2campanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of at2campanaMS.
     */
    distinct?: At2campanaMScalarFieldEnum | At2campanaMScalarFieldEnum[]
  }

  /**
   * at2campanaM findFirst
   */
  export interface at2campanaMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends at2campanaMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campanaM findFirstOrThrow
   */
  export type at2campanaMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: at2campanaMOrderByWithRelationInput | at2campanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for at2campanaMS.
     */
    cursor?: at2campanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of at2campanaMS.
     */
    distinct?: At2campanaMScalarFieldEnum | At2campanaMScalarFieldEnum[]
  }


  /**
   * at2campanaM findMany
   */
  export type at2campanaMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter, which at2campanaMS to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: at2campanaMOrderByWithRelationInput | at2campanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing at2campanaMS.
     */
    cursor?: at2campanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` at2campanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` at2campanaMS.
     */
    skip?: number
    distinct?: At2campanaMScalarFieldEnum | At2campanaMScalarFieldEnum[]
  }


  /**
   * at2campanaM create
   */
  export type at2campanaMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * The data needed to create a at2campanaM.
     */
    data: XOR<at2campanaMCreateInput, at2campanaMUncheckedCreateInput>
  }


  /**
   * at2campanaM createMany
   */
  export type at2campanaMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many at2campanaMS.
     */
    data: at2campanaMCreateManyInput | at2campanaMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * at2campanaM update
   */
  export type at2campanaMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * The data needed to update a at2campanaM.
     */
    data: XOR<at2campanaMUpdateInput, at2campanaMUncheckedUpdateInput>
    /**
     * Choose, which at2campanaM to update.
     */
    where: at2campanaMWhereUniqueInput
  }


  /**
   * at2campanaM updateMany
   */
  export type at2campanaMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update at2campanaMS.
     */
    data: XOR<at2campanaMUpdateManyMutationInput, at2campanaMUncheckedUpdateManyInput>
    /**
     * Filter which at2campanaMS to update
     */
    where?: at2campanaMWhereInput
  }


  /**
   * at2campanaM upsert
   */
  export type at2campanaMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * The filter to search for the at2campanaM to update in case it exists.
     */
    where: at2campanaMWhereUniqueInput
    /**
     * In case the at2campanaM found by the `where` argument doesn't exist, create a new at2campanaM with this data.
     */
    create: XOR<at2campanaMCreateInput, at2campanaMUncheckedCreateInput>
    /**
     * In case the at2campanaM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<at2campanaMUpdateInput, at2campanaMUncheckedUpdateInput>
  }


  /**
   * at2campanaM delete
   */
  export type at2campanaMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
    /**
     * Filter which at2campanaM to delete.
     */
    where: at2campanaMWhereUniqueInput
  }


  /**
   * at2campanaM deleteMany
   */
  export type at2campanaMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which at2campanaMS to delete
     */
    where?: at2campanaMWhereInput
  }


  /**
   * at2campanaM without action
   */
  export type at2campanaMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect<ExtArgs> | null
  }



  /**
   * Model atcampanaM
   */


  export type AggregateAtcampanaM = {
    _count: AtcampanaMCountAggregateOutputType | null
    _avg: AtcampanaMAvgAggregateOutputType | null
    _sum: AtcampanaMSumAggregateOutputType | null
    _min: AtcampanaMMinAggregateOutputType | null
    _max: AtcampanaMMaxAggregateOutputType | null
  }

  export type AtcampanaMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type AtcampanaMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type AtcampanaMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampanaM to aggregate.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: atcampanaMOrderByWithRelationInput | atcampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atcampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atcampanaMS
    **/
    _count?: true | AtcampanaMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtcampanaMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtcampanaMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtcampanaMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtcampanaMMaxAggregateInputType
  }

  export type GetAtcampanaMAggregateType<T extends AtcampanaMAggregateArgs> = {
        [P in keyof T & keyof AggregateAtcampanaM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtcampanaM[P]>
      : GetScalarType<T[P], AggregateAtcampanaM[P]>
  }




  export type atcampanaMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: atcampanaMWhereInput
    orderBy?: atcampanaMOrderByWithAggregationInput | atcampanaMOrderByWithAggregationInput[]
    by: AtcampanaMScalarFieldEnum[] | AtcampanaMScalarFieldEnum
    having?: atcampanaMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtcampanaMCountAggregateInputType | true
    _avg?: AtcampanaMAvgAggregateInputType
    _sum?: AtcampanaMSumAggregateInputType
    _min?: AtcampanaMMinAggregateInputType
    _max?: AtcampanaMMaxAggregateInputType
  }


  export type AtcampanaMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: AtcampanaMCountAggregateOutputType | null
    _avg: AtcampanaMAvgAggregateOutputType | null
    _sum: AtcampanaMSumAggregateOutputType | null
    _min: AtcampanaMMinAggregateOutputType | null
    _max: AtcampanaMMaxAggregateOutputType | null
  }

  type GetAtcampanaMGroupByPayload<T extends atcampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtcampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtcampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtcampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], AtcampanaMGroupByOutputType[P]>
        }
      >
    >


  export type atcampanaMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["atcampanaM"]>

  export type atcampanaMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type atcampanaMGetPayload<S extends boolean | null | undefined | atcampanaMArgs> = $Types.GetResult<atcampanaMPayload, S>

  type atcampanaMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<atcampanaMFindManyArgs, 'select' | 'include'> & {
      select?: AtcampanaMCountAggregateInputType | true
    }

  export interface atcampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atcampanaM'], meta: { name: 'atcampanaM' } }
    /**
     * Find zero or one AtcampanaM that matches the filter.
     * @param {atcampanaMFindUniqueArgs} args - Arguments to find a AtcampanaM
     * @example
     * // Get one AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends atcampanaMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, atcampanaMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'atcampanaM'> extends True ? Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AtcampanaM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {atcampanaMFindUniqueOrThrowArgs} args - Arguments to find a AtcampanaM
     * @example
     * // Get one AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends atcampanaMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AtcampanaM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMFindFirstArgs} args - Arguments to find a AtcampanaM
     * @example
     * // Get one AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends atcampanaMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, atcampanaMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'atcampanaM'> extends True ? Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AtcampanaM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMFindFirstOrThrowArgs} args - Arguments to find a AtcampanaM
     * @example
     * // Get one AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends atcampanaMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AtcampanaMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtcampanaMS
     * const atcampanaMS = await prisma.atcampanaM.findMany()
     * 
     * // Get first 10 AtcampanaMS
     * const atcampanaMS = await prisma.atcampanaM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const atcampanaMWithSUCURSALOnly = await prisma.atcampanaM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends atcampanaMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AtcampanaM.
     * @param {atcampanaMCreateArgs} args - Arguments to create a AtcampanaM.
     * @example
     * // Create one AtcampanaM
     * const AtcampanaM = await prisma.atcampanaM.create({
     *   data: {
     *     // ... data to create a AtcampanaM
     *   }
     * })
     * 
    **/
    create<T extends atcampanaMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaMCreateArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AtcampanaMS.
     *     @param {atcampanaMCreateManyArgs} args - Arguments to create many AtcampanaMS.
     *     @example
     *     // Create many AtcampanaMS
     *     const atcampanaM = await prisma.atcampanaM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends atcampanaMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AtcampanaM.
     * @param {atcampanaMDeleteArgs} args - Arguments to delete one AtcampanaM.
     * @example
     * // Delete one AtcampanaM
     * const AtcampanaM = await prisma.atcampanaM.delete({
     *   where: {
     *     // ... filter to delete one AtcampanaM
     *   }
     * })
     * 
    **/
    delete<T extends atcampanaMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaMDeleteArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AtcampanaM.
     * @param {atcampanaMUpdateArgs} args - Arguments to update one AtcampanaM.
     * @example
     * // Update one AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends atcampanaMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaMUpdateArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AtcampanaMS.
     * @param {atcampanaMDeleteManyArgs} args - Arguments to filter AtcampanaMS to delete.
     * @example
     * // Delete a few AtcampanaMS
     * const { count } = await prisma.atcampanaM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends atcampanaMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtcampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtcampanaMS
     * const atcampanaM = await prisma.atcampanaM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends atcampanaMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtcampanaM.
     * @param {atcampanaMUpsertArgs} args - Arguments to update or create a AtcampanaM.
     * @example
     * // Update or create a AtcampanaM
     * const atcampanaM = await prisma.atcampanaM.upsert({
     *   create: {
     *     // ... data to create a AtcampanaM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtcampanaM we want to update
     *   }
     * })
    **/
    upsert<T extends atcampanaMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaMUpsertArgs<ExtArgs>>
    ): Prisma__atcampanaMClient<$Types.GetResult<atcampanaMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AtcampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMCountArgs} args - Arguments to filter AtcampanaMS to count.
     * @example
     * // Count the number of AtcampanaMS
     * const count = await prisma.atcampanaM.count({
     *   where: {
     *     // ... the filter for the AtcampanaMS we want to count
     *   }
     * })
    **/
    count<T extends atcampanaMCountArgs>(
      args?: Subset<T, atcampanaMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtcampanaMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtcampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtcampanaMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtcampanaMAggregateArgs>(args: Subset<T, AtcampanaMAggregateArgs>): Prisma.PrismaPromise<GetAtcampanaMAggregateType<T>>

    /**
     * Group by AtcampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaMGroupByArgs} args - Group by arguments.
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
      T extends atcampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atcampanaMGroupByArgs['orderBy'] }
        : { orderBy?: atcampanaMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atcampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtcampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for atcampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__atcampanaMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * atcampanaM base type for findUnique actions
   */
  export type atcampanaMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where: atcampanaMWhereUniqueInput
  }

  /**
   * atcampanaM findUnique
   */
  export interface atcampanaMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaM findUniqueOrThrow
   */
  export type atcampanaMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where: atcampanaMWhereUniqueInput
  }


  /**
   * atcampanaM base type for findFirst actions
   */
  export type atcampanaMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: atcampanaMOrderByWithRelationInput | atcampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanaMS.
     */
    cursor?: atcampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanaMS.
     */
    distinct?: AtcampanaMScalarFieldEnum | AtcampanaMScalarFieldEnum[]
  }

  /**
   * atcampanaM findFirst
   */
  export interface atcampanaMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaM findFirstOrThrow
   */
  export type atcampanaMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: atcampanaMOrderByWithRelationInput | atcampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanaMS.
     */
    cursor?: atcampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanaMS.
     */
    distinct?: AtcampanaMScalarFieldEnum | AtcampanaMScalarFieldEnum[]
  }


  /**
   * atcampanaM findMany
   */
  export type atcampanaMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaMS to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: atcampanaMOrderByWithRelationInput | atcampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atcampanaMS.
     */
    cursor?: atcampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaMS.
     */
    skip?: number
    distinct?: AtcampanaMScalarFieldEnum | AtcampanaMScalarFieldEnum[]
  }


  /**
   * atcampanaM create
   */
  export type atcampanaMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * The data needed to create a atcampanaM.
     */
    data: XOR<atcampanaMCreateInput, atcampanaMUncheckedCreateInput>
  }


  /**
   * atcampanaM createMany
   */
  export type atcampanaMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atcampanaMS.
     */
    data: atcampanaMCreateManyInput | atcampanaMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * atcampanaM update
   */
  export type atcampanaMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * The data needed to update a atcampanaM.
     */
    data: XOR<atcampanaMUpdateInput, atcampanaMUncheckedUpdateInput>
    /**
     * Choose, which atcampanaM to update.
     */
    where: atcampanaMWhereUniqueInput
  }


  /**
   * atcampanaM updateMany
   */
  export type atcampanaMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atcampanaMS.
     */
    data: XOR<atcampanaMUpdateManyMutationInput, atcampanaMUncheckedUpdateManyInput>
    /**
     * Filter which atcampanaMS to update
     */
    where?: atcampanaMWhereInput
  }


  /**
   * atcampanaM upsert
   */
  export type atcampanaMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * The filter to search for the atcampanaM to update in case it exists.
     */
    where: atcampanaMWhereUniqueInput
    /**
     * In case the atcampanaM found by the `where` argument doesn't exist, create a new atcampanaM with this data.
     */
    create: XOR<atcampanaMCreateInput, atcampanaMUncheckedCreateInput>
    /**
     * In case the atcampanaM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atcampanaMUpdateInput, atcampanaMUncheckedUpdateInput>
  }


  /**
   * atcampanaM delete
   */
  export type atcampanaMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
    /**
     * Filter which atcampanaM to delete.
     */
    where: atcampanaMWhereUniqueInput
  }


  /**
   * atcampanaM deleteMany
   */
  export type atcampanaMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampanaMS to delete
     */
    where?: atcampanaMWhereInput
  }


  /**
   * atcampanaM without action
   */
  export type atcampanaMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect<ExtArgs> | null
  }



  /**
   * Model blancampanaM
   */


  export type AggregateBlancampanaM = {
    _count: BlancampanaMCountAggregateOutputType | null
    _avg: BlancampanaMAvgAggregateOutputType | null
    _sum: BlancampanaMSumAggregateOutputType | null
    _min: BlancampanaMMinAggregateOutputType | null
    _max: BlancampanaMMaxAggregateOutputType | null
  }

  export type BlancampanaMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type BlancampanaMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type BlancampanaMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type BlancampanaMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type BlancampanaMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which blancampanaM to aggregate.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: blancampanaMOrderByWithRelationInput | blancampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blancampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blancampanaMS
    **/
    _count?: true | BlancampanaMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlancampanaMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlancampanaMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlancampanaMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlancampanaMMaxAggregateInputType
  }

  export type GetBlancampanaMAggregateType<T extends BlancampanaMAggregateArgs> = {
        [P in keyof T & keyof AggregateBlancampanaM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlancampanaM[P]>
      : GetScalarType<T[P], AggregateBlancampanaM[P]>
  }




  export type blancampanaMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: blancampanaMWhereInput
    orderBy?: blancampanaMOrderByWithAggregationInput | blancampanaMOrderByWithAggregationInput[]
    by: BlancampanaMScalarFieldEnum[] | BlancampanaMScalarFieldEnum
    having?: blancampanaMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlancampanaMCountAggregateInputType | true
    _avg?: BlancampanaMAvgAggregateInputType
    _sum?: BlancampanaMSumAggregateInputType
    _min?: BlancampanaMMinAggregateInputType
    _max?: BlancampanaMMaxAggregateInputType
  }


  export type BlancampanaMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: BlancampanaMCountAggregateOutputType | null
    _avg: BlancampanaMAvgAggregateOutputType | null
    _sum: BlancampanaMSumAggregateOutputType | null
    _min: BlancampanaMMinAggregateOutputType | null
    _max: BlancampanaMMaxAggregateOutputType | null
  }

  type GetBlancampanaMGroupByPayload<T extends blancampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlancampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlancampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlancampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], BlancampanaMGroupByOutputType[P]>
        }
      >
    >


  export type blancampanaMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["blancampanaM"]>

  export type blancampanaMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type blancampanaMGetPayload<S extends boolean | null | undefined | blancampanaMArgs> = $Types.GetResult<blancampanaMPayload, S>

  type blancampanaMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<blancampanaMFindManyArgs, 'select' | 'include'> & {
      select?: BlancampanaMCountAggregateInputType | true
    }

  export interface blancampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blancampanaM'], meta: { name: 'blancampanaM' } }
    /**
     * Find zero or one BlancampanaM that matches the filter.
     * @param {blancampanaMFindUniqueArgs} args - Arguments to find a BlancampanaM
     * @example
     * // Get one BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends blancampanaMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, blancampanaMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'blancampanaM'> extends True ? Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one BlancampanaM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {blancampanaMFindUniqueOrThrowArgs} args - Arguments to find a BlancampanaM
     * @example
     * // Get one BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends blancampanaMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first BlancampanaM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMFindFirstArgs} args - Arguments to find a BlancampanaM
     * @example
     * // Get one BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends blancampanaMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, blancampanaMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'blancampanaM'> extends True ? Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first BlancampanaM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMFindFirstOrThrowArgs} args - Arguments to find a BlancampanaM
     * @example
     * // Get one BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends blancampanaMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more BlancampanaMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlancampanaMS
     * const blancampanaMS = await prisma.blancampanaM.findMany()
     * 
     * // Get first 10 BlancampanaMS
     * const blancampanaMS = await prisma.blancampanaM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const blancampanaMWithSUCURSALOnly = await prisma.blancampanaM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends blancampanaMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a BlancampanaM.
     * @param {blancampanaMCreateArgs} args - Arguments to create a BlancampanaM.
     * @example
     * // Create one BlancampanaM
     * const BlancampanaM = await prisma.blancampanaM.create({
     *   data: {
     *     // ... data to create a BlancampanaM
     *   }
     * })
     * 
    **/
    create<T extends blancampanaMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaMCreateArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many BlancampanaMS.
     *     @param {blancampanaMCreateManyArgs} args - Arguments to create many BlancampanaMS.
     *     @example
     *     // Create many BlancampanaMS
     *     const blancampanaM = await prisma.blancampanaM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends blancampanaMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlancampanaM.
     * @param {blancampanaMDeleteArgs} args - Arguments to delete one BlancampanaM.
     * @example
     * // Delete one BlancampanaM
     * const BlancampanaM = await prisma.blancampanaM.delete({
     *   where: {
     *     // ... filter to delete one BlancampanaM
     *   }
     * })
     * 
    **/
    delete<T extends blancampanaMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaMDeleteArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one BlancampanaM.
     * @param {blancampanaMUpdateArgs} args - Arguments to update one BlancampanaM.
     * @example
     * // Update one BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends blancampanaMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaMUpdateArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more BlancampanaMS.
     * @param {blancampanaMDeleteManyArgs} args - Arguments to filter BlancampanaMS to delete.
     * @example
     * // Delete a few BlancampanaMS
     * const { count } = await prisma.blancampanaM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends blancampanaMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blancampanaMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlancampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlancampanaMS
     * const blancampanaM = await prisma.blancampanaM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends blancampanaMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlancampanaM.
     * @param {blancampanaMUpsertArgs} args - Arguments to update or create a BlancampanaM.
     * @example
     * // Update or create a BlancampanaM
     * const blancampanaM = await prisma.blancampanaM.upsert({
     *   create: {
     *     // ... data to create a BlancampanaM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlancampanaM we want to update
     *   }
     * })
    **/
    upsert<T extends blancampanaMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blancampanaMUpsertArgs<ExtArgs>>
    ): Prisma__blancampanaMClient<$Types.GetResult<blancampanaMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of BlancampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMCountArgs} args - Arguments to filter BlancampanaMS to count.
     * @example
     * // Count the number of BlancampanaMS
     * const count = await prisma.blancampanaM.count({
     *   where: {
     *     // ... the filter for the BlancampanaMS we want to count
     *   }
     * })
    **/
    count<T extends blancampanaMCountArgs>(
      args?: Subset<T, blancampanaMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlancampanaMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlancampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlancampanaMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlancampanaMAggregateArgs>(args: Subset<T, BlancampanaMAggregateArgs>): Prisma.PrismaPromise<GetBlancampanaMAggregateType<T>>

    /**
     * Group by BlancampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blancampanaMGroupByArgs} args - Group by arguments.
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
      T extends blancampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blancampanaMGroupByArgs['orderBy'] }
        : { orderBy?: blancampanaMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blancampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlancampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for blancampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blancampanaMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * blancampanaM base type for findUnique actions
   */
  export type blancampanaMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where: blancampanaMWhereUniqueInput
  }

  /**
   * blancampanaM findUnique
   */
  export interface blancampanaMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends blancampanaMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampanaM findUniqueOrThrow
   */
  export type blancampanaMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where: blancampanaMWhereUniqueInput
  }


  /**
   * blancampanaM base type for findFirst actions
   */
  export type blancampanaMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: blancampanaMOrderByWithRelationInput | blancampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blancampanaMS.
     */
    cursor?: blancampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blancampanaMS.
     */
    distinct?: BlancampanaMScalarFieldEnum | BlancampanaMScalarFieldEnum[]
  }

  /**
   * blancampanaM findFirst
   */
  export interface blancampanaMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends blancampanaMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampanaM findFirstOrThrow
   */
  export type blancampanaMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: blancampanaMOrderByWithRelationInput | blancampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blancampanaMS.
     */
    cursor?: blancampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blancampanaMS.
     */
    distinct?: BlancampanaMScalarFieldEnum | BlancampanaMScalarFieldEnum[]
  }


  /**
   * blancampanaM findMany
   */
  export type blancampanaMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter, which blancampanaMS to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: blancampanaMOrderByWithRelationInput | blancampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blancampanaMS.
     */
    cursor?: blancampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blancampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blancampanaMS.
     */
    skip?: number
    distinct?: BlancampanaMScalarFieldEnum | BlancampanaMScalarFieldEnum[]
  }


  /**
   * blancampanaM create
   */
  export type blancampanaMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * The data needed to create a blancampanaM.
     */
    data: XOR<blancampanaMCreateInput, blancampanaMUncheckedCreateInput>
  }


  /**
   * blancampanaM createMany
   */
  export type blancampanaMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blancampanaMS.
     */
    data: blancampanaMCreateManyInput | blancampanaMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * blancampanaM update
   */
  export type blancampanaMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * The data needed to update a blancampanaM.
     */
    data: XOR<blancampanaMUpdateInput, blancampanaMUncheckedUpdateInput>
    /**
     * Choose, which blancampanaM to update.
     */
    where: blancampanaMWhereUniqueInput
  }


  /**
   * blancampanaM updateMany
   */
  export type blancampanaMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blancampanaMS.
     */
    data: XOR<blancampanaMUpdateManyMutationInput, blancampanaMUncheckedUpdateManyInput>
    /**
     * Filter which blancampanaMS to update
     */
    where?: blancampanaMWhereInput
  }


  /**
   * blancampanaM upsert
   */
  export type blancampanaMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * The filter to search for the blancampanaM to update in case it exists.
     */
    where: blancampanaMWhereUniqueInput
    /**
     * In case the blancampanaM found by the `where` argument doesn't exist, create a new blancampanaM with this data.
     */
    create: XOR<blancampanaMCreateInput, blancampanaMUncheckedCreateInput>
    /**
     * In case the blancampanaM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blancampanaMUpdateInput, blancampanaMUncheckedUpdateInput>
  }


  /**
   * blancampanaM delete
   */
  export type blancampanaMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
    /**
     * Filter which blancampanaM to delete.
     */
    where: blancampanaMWhereUniqueInput
  }


  /**
   * blancampanaM deleteMany
   */
  export type blancampanaMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which blancampanaMS to delete
     */
    where?: blancampanaMWhereInput
  }


  /**
   * blancampanaM without action
   */
  export type blancampanaMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect<ExtArgs> | null
  }



  /**
   * Model reccampanaM
   */


  export type AggregateReccampanaM = {
    _count: ReccampanaMCountAggregateOutputType | null
    _avg: ReccampanaMAvgAggregateOutputType | null
    _sum: ReccampanaMSumAggregateOutputType | null
    _min: ReccampanaMMinAggregateOutputType | null
    _max: ReccampanaMMaxAggregateOutputType | null
  }

  export type ReccampanaMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type ReccampanaMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type ReccampanaMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampanaM to aggregate.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: reccampanaMOrderByWithRelationInput | reccampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reccampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reccampanaMS
    **/
    _count?: true | ReccampanaMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReccampanaMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReccampanaMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReccampanaMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReccampanaMMaxAggregateInputType
  }

  export type GetReccampanaMAggregateType<T extends ReccampanaMAggregateArgs> = {
        [P in keyof T & keyof AggregateReccampanaM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReccampanaM[P]>
      : GetScalarType<T[P], AggregateReccampanaM[P]>
  }




  export type reccampanaMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: reccampanaMWhereInput
    orderBy?: reccampanaMOrderByWithAggregationInput | reccampanaMOrderByWithAggregationInput[]
    by: ReccampanaMScalarFieldEnum[] | ReccampanaMScalarFieldEnum
    having?: reccampanaMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReccampanaMCountAggregateInputType | true
    _avg?: ReccampanaMAvgAggregateInputType
    _sum?: ReccampanaMSumAggregateInputType
    _min?: ReccampanaMMinAggregateInputType
    _max?: ReccampanaMMaxAggregateInputType
  }


  export type ReccampanaMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: ReccampanaMCountAggregateOutputType | null
    _avg: ReccampanaMAvgAggregateOutputType | null
    _sum: ReccampanaMSumAggregateOutputType | null
    _min: ReccampanaMMinAggregateOutputType | null
    _max: ReccampanaMMaxAggregateOutputType | null
  }

  type GetReccampanaMGroupByPayload<T extends reccampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReccampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReccampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReccampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], ReccampanaMGroupByOutputType[P]>
        }
      >
    >


  export type reccampanaMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["reccampanaM"]>

  export type reccampanaMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type reccampanaMGetPayload<S extends boolean | null | undefined | reccampanaMArgs> = $Types.GetResult<reccampanaMPayload, S>

  type reccampanaMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<reccampanaMFindManyArgs, 'select' | 'include'> & {
      select?: ReccampanaMCountAggregateInputType | true
    }

  export interface reccampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reccampanaM'], meta: { name: 'reccampanaM' } }
    /**
     * Find zero or one ReccampanaM that matches the filter.
     * @param {reccampanaMFindUniqueArgs} args - Arguments to find a ReccampanaM
     * @example
     * // Get one ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reccampanaMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reccampanaMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reccampanaM'> extends True ? Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ReccampanaM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reccampanaMFindUniqueOrThrowArgs} args - Arguments to find a ReccampanaM
     * @example
     * // Get one ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reccampanaMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ReccampanaM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMFindFirstArgs} args - Arguments to find a ReccampanaM
     * @example
     * // Get one ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reccampanaMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reccampanaMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reccampanaM'> extends True ? Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ReccampanaM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMFindFirstOrThrowArgs} args - Arguments to find a ReccampanaM
     * @example
     * // Get one ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reccampanaMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ReccampanaMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReccampanaMS
     * const reccampanaMS = await prisma.reccampanaM.findMany()
     * 
     * // Get first 10 ReccampanaMS
     * const reccampanaMS = await prisma.reccampanaM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const reccampanaMWithSUCURSALOnly = await prisma.reccampanaM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends reccampanaMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ReccampanaM.
     * @param {reccampanaMCreateArgs} args - Arguments to create a ReccampanaM.
     * @example
     * // Create one ReccampanaM
     * const ReccampanaM = await prisma.reccampanaM.create({
     *   data: {
     *     // ... data to create a ReccampanaM
     *   }
     * })
     * 
    **/
    create<T extends reccampanaMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaMCreateArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ReccampanaMS.
     *     @param {reccampanaMCreateManyArgs} args - Arguments to create many ReccampanaMS.
     *     @example
     *     // Create many ReccampanaMS
     *     const reccampanaM = await prisma.reccampanaM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reccampanaMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReccampanaM.
     * @param {reccampanaMDeleteArgs} args - Arguments to delete one ReccampanaM.
     * @example
     * // Delete one ReccampanaM
     * const ReccampanaM = await prisma.reccampanaM.delete({
     *   where: {
     *     // ... filter to delete one ReccampanaM
     *   }
     * })
     * 
    **/
    delete<T extends reccampanaMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaMDeleteArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ReccampanaM.
     * @param {reccampanaMUpdateArgs} args - Arguments to update one ReccampanaM.
     * @example
     * // Update one ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reccampanaMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaMUpdateArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ReccampanaMS.
     * @param {reccampanaMDeleteManyArgs} args - Arguments to filter ReccampanaMS to delete.
     * @example
     * // Delete a few ReccampanaMS
     * const { count } = await prisma.reccampanaM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reccampanaMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReccampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReccampanaMS
     * const reccampanaM = await prisma.reccampanaM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reccampanaMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReccampanaM.
     * @param {reccampanaMUpsertArgs} args - Arguments to update or create a ReccampanaM.
     * @example
     * // Update or create a ReccampanaM
     * const reccampanaM = await prisma.reccampanaM.upsert({
     *   create: {
     *     // ... data to create a ReccampanaM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReccampanaM we want to update
     *   }
     * })
    **/
    upsert<T extends reccampanaMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaMUpsertArgs<ExtArgs>>
    ): Prisma__reccampanaMClient<$Types.GetResult<reccampanaMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ReccampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMCountArgs} args - Arguments to filter ReccampanaMS to count.
     * @example
     * // Count the number of ReccampanaMS
     * const count = await prisma.reccampanaM.count({
     *   where: {
     *     // ... the filter for the ReccampanaMS we want to count
     *   }
     * })
    **/
    count<T extends reccampanaMCountArgs>(
      args?: Subset<T, reccampanaMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReccampanaMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReccampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReccampanaMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReccampanaMAggregateArgs>(args: Subset<T, ReccampanaMAggregateArgs>): Prisma.PrismaPromise<GetReccampanaMAggregateType<T>>

    /**
     * Group by ReccampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaMGroupByArgs} args - Group by arguments.
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
      T extends reccampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reccampanaMGroupByArgs['orderBy'] }
        : { orderBy?: reccampanaMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reccampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReccampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reccampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reccampanaMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * reccampanaM base type for findUnique actions
   */
  export type reccampanaMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where: reccampanaMWhereUniqueInput
  }

  /**
   * reccampanaM findUnique
   */
  export interface reccampanaMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaM findUniqueOrThrow
   */
  export type reccampanaMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where: reccampanaMWhereUniqueInput
  }


  /**
   * reccampanaM base type for findFirst actions
   */
  export type reccampanaMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: reccampanaMOrderByWithRelationInput | reccampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanaMS.
     */
    cursor?: reccampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanaMS.
     */
    distinct?: ReccampanaMScalarFieldEnum | ReccampanaMScalarFieldEnum[]
  }

  /**
   * reccampanaM findFirst
   */
  export interface reccampanaMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaM findFirstOrThrow
   */
  export type reccampanaMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: reccampanaMOrderByWithRelationInput | reccampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanaMS.
     */
    cursor?: reccampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanaMS.
     */
    distinct?: ReccampanaMScalarFieldEnum | ReccampanaMScalarFieldEnum[]
  }


  /**
   * reccampanaM findMany
   */
  export type reccampanaMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaMS to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: reccampanaMOrderByWithRelationInput | reccampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reccampanaMS.
     */
    cursor?: reccampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaMS.
     */
    skip?: number
    distinct?: ReccampanaMScalarFieldEnum | ReccampanaMScalarFieldEnum[]
  }


  /**
   * reccampanaM create
   */
  export type reccampanaMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * The data needed to create a reccampanaM.
     */
    data: XOR<reccampanaMCreateInput, reccampanaMUncheckedCreateInput>
  }


  /**
   * reccampanaM createMany
   */
  export type reccampanaMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reccampanaMS.
     */
    data: reccampanaMCreateManyInput | reccampanaMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reccampanaM update
   */
  export type reccampanaMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * The data needed to update a reccampanaM.
     */
    data: XOR<reccampanaMUpdateInput, reccampanaMUncheckedUpdateInput>
    /**
     * Choose, which reccampanaM to update.
     */
    where: reccampanaMWhereUniqueInput
  }


  /**
   * reccampanaM updateMany
   */
  export type reccampanaMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reccampanaMS.
     */
    data: XOR<reccampanaMUpdateManyMutationInput, reccampanaMUncheckedUpdateManyInput>
    /**
     * Filter which reccampanaMS to update
     */
    where?: reccampanaMWhereInput
  }


  /**
   * reccampanaM upsert
   */
  export type reccampanaMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * The filter to search for the reccampanaM to update in case it exists.
     */
    where: reccampanaMWhereUniqueInput
    /**
     * In case the reccampanaM found by the `where` argument doesn't exist, create a new reccampanaM with this data.
     */
    create: XOR<reccampanaMCreateInput, reccampanaMUncheckedCreateInput>
    /**
     * In case the reccampanaM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reccampanaMUpdateInput, reccampanaMUncheckedUpdateInput>
  }


  /**
   * reccampanaM delete
   */
  export type reccampanaMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
    /**
     * Filter which reccampanaM to delete.
     */
    where: reccampanaMWhereUniqueInput
  }


  /**
   * reccampanaM deleteMany
   */
  export type reccampanaMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampanaMS to delete
     */
    where?: reccampanaMWhereInput
  }


  /**
   * reccampanaM without action
   */
  export type reccampanaMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect<ExtArgs> | null
  }



  /**
   * Model reincampanaM
   */


  export type AggregateReincampanaM = {
    _count: ReincampanaMCountAggregateOutputType | null
    _avg: ReincampanaMAvgAggregateOutputType | null
    _sum: ReincampanaMSumAggregateOutputType | null
    _min: ReincampanaMMinAggregateOutputType | null
    _max: ReincampanaMMaxAggregateOutputType | null
  }

  export type ReincampanaMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReincampanaMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type ReincampanaMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReincampanaMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type ReincampanaMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reincampanaM to aggregate.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: reincampanaMOrderByWithRelationInput | reincampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reincampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reincampanaMS
    **/
    _count?: true | ReincampanaMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReincampanaMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReincampanaMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReincampanaMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReincampanaMMaxAggregateInputType
  }

  export type GetReincampanaMAggregateType<T extends ReincampanaMAggregateArgs> = {
        [P in keyof T & keyof AggregateReincampanaM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReincampanaM[P]>
      : GetScalarType<T[P], AggregateReincampanaM[P]>
  }




  export type reincampanaMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: reincampanaMWhereInput
    orderBy?: reincampanaMOrderByWithAggregationInput | reincampanaMOrderByWithAggregationInput[]
    by: ReincampanaMScalarFieldEnum[] | ReincampanaMScalarFieldEnum
    having?: reincampanaMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReincampanaMCountAggregateInputType | true
    _avg?: ReincampanaMAvgAggregateInputType
    _sum?: ReincampanaMSumAggregateInputType
    _min?: ReincampanaMMinAggregateInputType
    _max?: ReincampanaMMaxAggregateInputType
  }


  export type ReincampanaMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: ReincampanaMCountAggregateOutputType | null
    _avg: ReincampanaMAvgAggregateOutputType | null
    _sum: ReincampanaMSumAggregateOutputType | null
    _min: ReincampanaMMinAggregateOutputType | null
    _max: ReincampanaMMaxAggregateOutputType | null
  }

  type GetReincampanaMGroupByPayload<T extends reincampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReincampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReincampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReincampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], ReincampanaMGroupByOutputType[P]>
        }
      >
    >


  export type reincampanaMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["reincampanaM"]>

  export type reincampanaMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type reincampanaMGetPayload<S extends boolean | null | undefined | reincampanaMArgs> = $Types.GetResult<reincampanaMPayload, S>

  type reincampanaMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<reincampanaMFindManyArgs, 'select' | 'include'> & {
      select?: ReincampanaMCountAggregateInputType | true
    }

  export interface reincampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reincampanaM'], meta: { name: 'reincampanaM' } }
    /**
     * Find zero or one ReincampanaM that matches the filter.
     * @param {reincampanaMFindUniqueArgs} args - Arguments to find a ReincampanaM
     * @example
     * // Get one ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reincampanaMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reincampanaMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reincampanaM'> extends True ? Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ReincampanaM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reincampanaMFindUniqueOrThrowArgs} args - Arguments to find a ReincampanaM
     * @example
     * // Get one ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reincampanaMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ReincampanaM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMFindFirstArgs} args - Arguments to find a ReincampanaM
     * @example
     * // Get one ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reincampanaMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reincampanaMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reincampanaM'> extends True ? Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ReincampanaM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMFindFirstOrThrowArgs} args - Arguments to find a ReincampanaM
     * @example
     * // Get one ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reincampanaMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ReincampanaMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReincampanaMS
     * const reincampanaMS = await prisma.reincampanaM.findMany()
     * 
     * // Get first 10 ReincampanaMS
     * const reincampanaMS = await prisma.reincampanaM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const reincampanaMWithSUCURSALOnly = await prisma.reincampanaM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends reincampanaMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ReincampanaM.
     * @param {reincampanaMCreateArgs} args - Arguments to create a ReincampanaM.
     * @example
     * // Create one ReincampanaM
     * const ReincampanaM = await prisma.reincampanaM.create({
     *   data: {
     *     // ... data to create a ReincampanaM
     *   }
     * })
     * 
    **/
    create<T extends reincampanaMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaMCreateArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ReincampanaMS.
     *     @param {reincampanaMCreateManyArgs} args - Arguments to create many ReincampanaMS.
     *     @example
     *     // Create many ReincampanaMS
     *     const reincampanaM = await prisma.reincampanaM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reincampanaMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReincampanaM.
     * @param {reincampanaMDeleteArgs} args - Arguments to delete one ReincampanaM.
     * @example
     * // Delete one ReincampanaM
     * const ReincampanaM = await prisma.reincampanaM.delete({
     *   where: {
     *     // ... filter to delete one ReincampanaM
     *   }
     * })
     * 
    **/
    delete<T extends reincampanaMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaMDeleteArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ReincampanaM.
     * @param {reincampanaMUpdateArgs} args - Arguments to update one ReincampanaM.
     * @example
     * // Update one ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reincampanaMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaMUpdateArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ReincampanaMS.
     * @param {reincampanaMDeleteManyArgs} args - Arguments to filter ReincampanaMS to delete.
     * @example
     * // Delete a few ReincampanaMS
     * const { count } = await prisma.reincampanaM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reincampanaMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reincampanaMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReincampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReincampanaMS
     * const reincampanaM = await prisma.reincampanaM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reincampanaMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReincampanaM.
     * @param {reincampanaMUpsertArgs} args - Arguments to update or create a ReincampanaM.
     * @example
     * // Update or create a ReincampanaM
     * const reincampanaM = await prisma.reincampanaM.upsert({
     *   create: {
     *     // ... data to create a ReincampanaM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReincampanaM we want to update
     *   }
     * })
    **/
    upsert<T extends reincampanaMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reincampanaMUpsertArgs<ExtArgs>>
    ): Prisma__reincampanaMClient<$Types.GetResult<reincampanaMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ReincampanaMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMCountArgs} args - Arguments to filter ReincampanaMS to count.
     * @example
     * // Count the number of ReincampanaMS
     * const count = await prisma.reincampanaM.count({
     *   where: {
     *     // ... the filter for the ReincampanaMS we want to count
     *   }
     * })
    **/
    count<T extends reincampanaMCountArgs>(
      args?: Subset<T, reincampanaMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReincampanaMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReincampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReincampanaMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReincampanaMAggregateArgs>(args: Subset<T, ReincampanaMAggregateArgs>): Prisma.PrismaPromise<GetReincampanaMAggregateType<T>>

    /**
     * Group by ReincampanaM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reincampanaMGroupByArgs} args - Group by arguments.
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
      T extends reincampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reincampanaMGroupByArgs['orderBy'] }
        : { orderBy?: reincampanaMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reincampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReincampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reincampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reincampanaMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * reincampanaM base type for findUnique actions
   */
  export type reincampanaMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where: reincampanaMWhereUniqueInput
  }

  /**
   * reincampanaM findUnique
   */
  export interface reincampanaMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reincampanaMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampanaM findUniqueOrThrow
   */
  export type reincampanaMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where: reincampanaMWhereUniqueInput
  }


  /**
   * reincampanaM base type for findFirst actions
   */
  export type reincampanaMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: reincampanaMOrderByWithRelationInput | reincampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reincampanaMS.
     */
    cursor?: reincampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reincampanaMS.
     */
    distinct?: ReincampanaMScalarFieldEnum | ReincampanaMScalarFieldEnum[]
  }

  /**
   * reincampanaM findFirst
   */
  export interface reincampanaMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reincampanaMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampanaM findFirstOrThrow
   */
  export type reincampanaMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: reincampanaMOrderByWithRelationInput | reincampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reincampanaMS.
     */
    cursor?: reincampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanaMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reincampanaMS.
     */
    distinct?: ReincampanaMScalarFieldEnum | ReincampanaMScalarFieldEnum[]
  }


  /**
   * reincampanaM findMany
   */
  export type reincampanaMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter, which reincampanaMS to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: reincampanaMOrderByWithRelationInput | reincampanaMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reincampanaMS.
     */
    cursor?: reincampanaMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reincampanaMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reincampanaMS.
     */
    skip?: number
    distinct?: ReincampanaMScalarFieldEnum | ReincampanaMScalarFieldEnum[]
  }


  /**
   * reincampanaM create
   */
  export type reincampanaMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * The data needed to create a reincampanaM.
     */
    data: XOR<reincampanaMCreateInput, reincampanaMUncheckedCreateInput>
  }


  /**
   * reincampanaM createMany
   */
  export type reincampanaMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reincampanaMS.
     */
    data: reincampanaMCreateManyInput | reincampanaMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reincampanaM update
   */
  export type reincampanaMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * The data needed to update a reincampanaM.
     */
    data: XOR<reincampanaMUpdateInput, reincampanaMUncheckedUpdateInput>
    /**
     * Choose, which reincampanaM to update.
     */
    where: reincampanaMWhereUniqueInput
  }


  /**
   * reincampanaM updateMany
   */
  export type reincampanaMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reincampanaMS.
     */
    data: XOR<reincampanaMUpdateManyMutationInput, reincampanaMUncheckedUpdateManyInput>
    /**
     * Filter which reincampanaMS to update
     */
    where?: reincampanaMWhereInput
  }


  /**
   * reincampanaM upsert
   */
  export type reincampanaMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * The filter to search for the reincampanaM to update in case it exists.
     */
    where: reincampanaMWhereUniqueInput
    /**
     * In case the reincampanaM found by the `where` argument doesn't exist, create a new reincampanaM with this data.
     */
    create: XOR<reincampanaMCreateInput, reincampanaMUncheckedCreateInput>
    /**
     * In case the reincampanaM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reincampanaMUpdateInput, reincampanaMUncheckedUpdateInput>
  }


  /**
   * reincampanaM delete
   */
  export type reincampanaMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
    /**
     * Filter which reincampanaM to delete.
     */
    where: reincampanaMWhereUniqueInput
  }


  /**
   * reincampanaM deleteMany
   */
  export type reincampanaMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reincampanaMS to delete
     */
    where?: reincampanaMWhereInput
  }


  /**
   * reincampanaM without action
   */
  export type reincampanaMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect<ExtArgs> | null
  }



  /**
   * Model atcampanaSM
   */


  export type AggregateAtcampanaSM = {
    _count: AtcampanaSMCountAggregateOutputType | null
    _avg: AtcampanaSMAvgAggregateOutputType | null
    _sum: AtcampanaSMSumAggregateOutputType | null
    _min: AtcampanaSMMinAggregateOutputType | null
    _max: AtcampanaSMMaxAggregateOutputType | null
  }

  export type AtcampanaSMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaSMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaSMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaSMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type AtcampanaSMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type AtcampanaSMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaSMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaSMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaSMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type AtcampanaSMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type AtcampanaSMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampanaSM to aggregate.
     */
    where?: atcampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaSMS to fetch.
     */
    orderBy?: atcampanaSMOrderByWithRelationInput | atcampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atcampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atcampanaSMS
    **/
    _count?: true | AtcampanaSMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtcampanaSMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtcampanaSMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtcampanaSMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtcampanaSMMaxAggregateInputType
  }

  export type GetAtcampanaSMAggregateType<T extends AtcampanaSMAggregateArgs> = {
        [P in keyof T & keyof AggregateAtcampanaSM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtcampanaSM[P]>
      : GetScalarType<T[P], AggregateAtcampanaSM[P]>
  }




  export type atcampanaSMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: atcampanaSMWhereInput
    orderBy?: atcampanaSMOrderByWithAggregationInput | atcampanaSMOrderByWithAggregationInput[]
    by: AtcampanaSMScalarFieldEnum[] | AtcampanaSMScalarFieldEnum
    having?: atcampanaSMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtcampanaSMCountAggregateInputType | true
    _avg?: AtcampanaSMAvgAggregateInputType
    _sum?: AtcampanaSMSumAggregateInputType
    _min?: AtcampanaSMMinAggregateInputType
    _max?: AtcampanaSMMaxAggregateInputType
  }


  export type AtcampanaSMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: AtcampanaSMCountAggregateOutputType | null
    _avg: AtcampanaSMAvgAggregateOutputType | null
    _sum: AtcampanaSMSumAggregateOutputType | null
    _min: AtcampanaSMMinAggregateOutputType | null
    _max: AtcampanaSMMaxAggregateOutputType | null
  }

  type GetAtcampanaSMGroupByPayload<T extends atcampanaSMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtcampanaSMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtcampanaSMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtcampanaSMGroupByOutputType[P]>
            : GetScalarType<T[P], AtcampanaSMGroupByOutputType[P]>
        }
      >
    >


  export type atcampanaSMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["atcampanaSM"]>

  export type atcampanaSMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type atcampanaSMGetPayload<S extends boolean | null | undefined | atcampanaSMArgs> = $Types.GetResult<atcampanaSMPayload, S>

  type atcampanaSMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<atcampanaSMFindManyArgs, 'select' | 'include'> & {
      select?: AtcampanaSMCountAggregateInputType | true
    }

  export interface atcampanaSMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atcampanaSM'], meta: { name: 'atcampanaSM' } }
    /**
     * Find zero or one AtcampanaSM that matches the filter.
     * @param {atcampanaSMFindUniqueArgs} args - Arguments to find a AtcampanaSM
     * @example
     * // Get one AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends atcampanaSMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, atcampanaSMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'atcampanaSM'> extends True ? Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AtcampanaSM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {atcampanaSMFindUniqueOrThrowArgs} args - Arguments to find a AtcampanaSM
     * @example
     * // Get one AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends atcampanaSMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaSMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AtcampanaSM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMFindFirstArgs} args - Arguments to find a AtcampanaSM
     * @example
     * // Get one AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends atcampanaSMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, atcampanaSMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'atcampanaSM'> extends True ? Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AtcampanaSM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMFindFirstOrThrowArgs} args - Arguments to find a AtcampanaSM
     * @example
     * // Get one AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends atcampanaSMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaSMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AtcampanaSMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtcampanaSMS
     * const atcampanaSMS = await prisma.atcampanaSM.findMany()
     * 
     * // Get first 10 AtcampanaSMS
     * const atcampanaSMS = await prisma.atcampanaSM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const atcampanaSMWithSUCURSALOnly = await prisma.atcampanaSM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends atcampanaSMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaSMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AtcampanaSM.
     * @param {atcampanaSMCreateArgs} args - Arguments to create a AtcampanaSM.
     * @example
     * // Create one AtcampanaSM
     * const AtcampanaSM = await prisma.atcampanaSM.create({
     *   data: {
     *     // ... data to create a AtcampanaSM
     *   }
     * })
     * 
    **/
    create<T extends atcampanaSMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaSMCreateArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AtcampanaSMS.
     *     @param {atcampanaSMCreateManyArgs} args - Arguments to create many AtcampanaSMS.
     *     @example
     *     // Create many AtcampanaSMS
     *     const atcampanaSM = await prisma.atcampanaSM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends atcampanaSMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaSMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AtcampanaSM.
     * @param {atcampanaSMDeleteArgs} args - Arguments to delete one AtcampanaSM.
     * @example
     * // Delete one AtcampanaSM
     * const AtcampanaSM = await prisma.atcampanaSM.delete({
     *   where: {
     *     // ... filter to delete one AtcampanaSM
     *   }
     * })
     * 
    **/
    delete<T extends atcampanaSMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaSMDeleteArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AtcampanaSM.
     * @param {atcampanaSMUpdateArgs} args - Arguments to update one AtcampanaSM.
     * @example
     * // Update one AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends atcampanaSMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaSMUpdateArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AtcampanaSMS.
     * @param {atcampanaSMDeleteManyArgs} args - Arguments to filter AtcampanaSMS to delete.
     * @example
     * // Delete a few AtcampanaSMS
     * const { count } = await prisma.atcampanaSM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends atcampanaSMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atcampanaSMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtcampanaSMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtcampanaSMS
     * const atcampanaSM = await prisma.atcampanaSM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends atcampanaSMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaSMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtcampanaSM.
     * @param {atcampanaSMUpsertArgs} args - Arguments to update or create a AtcampanaSM.
     * @example
     * // Update or create a AtcampanaSM
     * const atcampanaSM = await prisma.atcampanaSM.upsert({
     *   create: {
     *     // ... data to create a AtcampanaSM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtcampanaSM we want to update
     *   }
     * })
    **/
    upsert<T extends atcampanaSMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, atcampanaSMUpsertArgs<ExtArgs>>
    ): Prisma__atcampanaSMClient<$Types.GetResult<atcampanaSMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AtcampanaSMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMCountArgs} args - Arguments to filter AtcampanaSMS to count.
     * @example
     * // Count the number of AtcampanaSMS
     * const count = await prisma.atcampanaSM.count({
     *   where: {
     *     // ... the filter for the AtcampanaSMS we want to count
     *   }
     * })
    **/
    count<T extends atcampanaSMCountArgs>(
      args?: Subset<T, atcampanaSMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtcampanaSMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtcampanaSM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtcampanaSMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtcampanaSMAggregateArgs>(args: Subset<T, AtcampanaSMAggregateArgs>): Prisma.PrismaPromise<GetAtcampanaSMAggregateType<T>>

    /**
     * Group by AtcampanaSM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atcampanaSMGroupByArgs} args - Group by arguments.
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
      T extends atcampanaSMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atcampanaSMGroupByArgs['orderBy'] }
        : { orderBy?: atcampanaSMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atcampanaSMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtcampanaSMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for atcampanaSM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__atcampanaSMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * atcampanaSM base type for findUnique actions
   */
  export type atcampanaSMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaSM to fetch.
     */
    where: atcampanaSMWhereUniqueInput
  }

  /**
   * atcampanaSM findUnique
   */
  export interface atcampanaSMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaSMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaSM findUniqueOrThrow
   */
  export type atcampanaSMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaSM to fetch.
     */
    where: atcampanaSMWhereUniqueInput
  }


  /**
   * atcampanaSM base type for findFirst actions
   */
  export type atcampanaSMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaSM to fetch.
     */
    where?: atcampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaSMS to fetch.
     */
    orderBy?: atcampanaSMOrderByWithRelationInput | atcampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanaSMS.
     */
    cursor?: atcampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanaSMS.
     */
    distinct?: AtcampanaSMScalarFieldEnum | AtcampanaSMScalarFieldEnum[]
  }

  /**
   * atcampanaSM findFirst
   */
  export interface atcampanaSMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends atcampanaSMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaSM findFirstOrThrow
   */
  export type atcampanaSMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaSM to fetch.
     */
    where?: atcampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaSMS to fetch.
     */
    orderBy?: atcampanaSMOrderByWithRelationInput | atcampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atcampanaSMS.
     */
    cursor?: atcampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atcampanaSMS.
     */
    distinct?: AtcampanaSMScalarFieldEnum | AtcampanaSMScalarFieldEnum[]
  }


  /**
   * atcampanaSM findMany
   */
  export type atcampanaSMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which atcampanaSMS to fetch.
     */
    where?: atcampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaSMS to fetch.
     */
    orderBy?: atcampanaSMOrderByWithRelationInput | atcampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atcampanaSMS.
     */
    cursor?: atcampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atcampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atcampanaSMS.
     */
    skip?: number
    distinct?: AtcampanaSMScalarFieldEnum | AtcampanaSMScalarFieldEnum[]
  }


  /**
   * atcampanaSM create
   */
  export type atcampanaSMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * The data needed to create a atcampanaSM.
     */
    data: XOR<atcampanaSMCreateInput, atcampanaSMUncheckedCreateInput>
  }


  /**
   * atcampanaSM createMany
   */
  export type atcampanaSMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atcampanaSMS.
     */
    data: atcampanaSMCreateManyInput | atcampanaSMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * atcampanaSM update
   */
  export type atcampanaSMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * The data needed to update a atcampanaSM.
     */
    data: XOR<atcampanaSMUpdateInput, atcampanaSMUncheckedUpdateInput>
    /**
     * Choose, which atcampanaSM to update.
     */
    where: atcampanaSMWhereUniqueInput
  }


  /**
   * atcampanaSM updateMany
   */
  export type atcampanaSMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atcampanaSMS.
     */
    data: XOR<atcampanaSMUpdateManyMutationInput, atcampanaSMUncheckedUpdateManyInput>
    /**
     * Filter which atcampanaSMS to update
     */
    where?: atcampanaSMWhereInput
  }


  /**
   * atcampanaSM upsert
   */
  export type atcampanaSMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * The filter to search for the atcampanaSM to update in case it exists.
     */
    where: atcampanaSMWhereUniqueInput
    /**
     * In case the atcampanaSM found by the `where` argument doesn't exist, create a new atcampanaSM with this data.
     */
    create: XOR<atcampanaSMCreateInput, atcampanaSMUncheckedCreateInput>
    /**
     * In case the atcampanaSM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atcampanaSMUpdateInput, atcampanaSMUncheckedUpdateInput>
  }


  /**
   * atcampanaSM delete
   */
  export type atcampanaSMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
    /**
     * Filter which atcampanaSM to delete.
     */
    where: atcampanaSMWhereUniqueInput
  }


  /**
   * atcampanaSM deleteMany
   */
  export type atcampanaSMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which atcampanaSMS to delete
     */
    where?: atcampanaSMWhereInput
  }


  /**
   * atcampanaSM without action
   */
  export type atcampanaSMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atcampanaSM
     */
    select?: atcampanaSMSelect<ExtArgs> | null
  }



  /**
   * Model reccampanaSM
   */


  export type AggregateReccampanaSM = {
    _count: ReccampanaSMCountAggregateOutputType | null
    _avg: ReccampanaSMAvgAggregateOutputType | null
    _sum: ReccampanaSMSumAggregateOutputType | null
    _min: ReccampanaSMMinAggregateOutputType | null
    _max: ReccampanaSMMaxAggregateOutputType | null
  }

  export type ReccampanaSMAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaSMSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaSMMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaSMMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type ReccampanaSMCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type ReccampanaSMAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaSMSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaSMMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaSMMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type ReccampanaSMCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type ReccampanaSMAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampanaSM to aggregate.
     */
    where?: reccampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaSMS to fetch.
     */
    orderBy?: reccampanaSMOrderByWithRelationInput | reccampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reccampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reccampanaSMS
    **/
    _count?: true | ReccampanaSMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReccampanaSMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReccampanaSMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReccampanaSMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReccampanaSMMaxAggregateInputType
  }

  export type GetReccampanaSMAggregateType<T extends ReccampanaSMAggregateArgs> = {
        [P in keyof T & keyof AggregateReccampanaSM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReccampanaSM[P]>
      : GetScalarType<T[P], AggregateReccampanaSM[P]>
  }




  export type reccampanaSMGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: reccampanaSMWhereInput
    orderBy?: reccampanaSMOrderByWithAggregationInput | reccampanaSMOrderByWithAggregationInput[]
    by: ReccampanaSMScalarFieldEnum[] | ReccampanaSMScalarFieldEnum
    having?: reccampanaSMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReccampanaSMCountAggregateInputType | true
    _avg?: ReccampanaSMAvgAggregateInputType
    _sum?: ReccampanaSMSumAggregateInputType
    _min?: ReccampanaSMMinAggregateInputType
    _max?: ReccampanaSMMaxAggregateInputType
  }


  export type ReccampanaSMGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: ReccampanaSMCountAggregateOutputType | null
    _avg: ReccampanaSMAvgAggregateOutputType | null
    _sum: ReccampanaSMSumAggregateOutputType | null
    _min: ReccampanaSMMinAggregateOutputType | null
    _max: ReccampanaSMMaxAggregateOutputType | null
  }

  type GetReccampanaSMGroupByPayload<T extends reccampanaSMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReccampanaSMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReccampanaSMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReccampanaSMGroupByOutputType[P]>
            : GetScalarType<T[P], ReccampanaSMGroupByOutputType[P]>
        }
      >
    >


  export type reccampanaSMSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["reccampanaSM"]>

  export type reccampanaSMSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type reccampanaSMGetPayload<S extends boolean | null | undefined | reccampanaSMArgs> = $Types.GetResult<reccampanaSMPayload, S>

  type reccampanaSMCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<reccampanaSMFindManyArgs, 'select' | 'include'> & {
      select?: ReccampanaSMCountAggregateInputType | true
    }

  export interface reccampanaSMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reccampanaSM'], meta: { name: 'reccampanaSM' } }
    /**
     * Find zero or one ReccampanaSM that matches the filter.
     * @param {reccampanaSMFindUniqueArgs} args - Arguments to find a ReccampanaSM
     * @example
     * // Get one ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reccampanaSMFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reccampanaSMFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reccampanaSM'> extends True ? Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ReccampanaSM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reccampanaSMFindUniqueOrThrowArgs} args - Arguments to find a ReccampanaSM
     * @example
     * // Get one ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reccampanaSMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaSMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ReccampanaSM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMFindFirstArgs} args - Arguments to find a ReccampanaSM
     * @example
     * // Get one ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reccampanaSMFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reccampanaSMFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reccampanaSM'> extends True ? Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ReccampanaSM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMFindFirstOrThrowArgs} args - Arguments to find a ReccampanaSM
     * @example
     * // Get one ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reccampanaSMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaSMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ReccampanaSMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReccampanaSMS
     * const reccampanaSMS = await prisma.reccampanaSM.findMany()
     * 
     * // Get first 10 ReccampanaSMS
     * const reccampanaSMS = await prisma.reccampanaSM.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const reccampanaSMWithSUCURSALOnly = await prisma.reccampanaSM.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends reccampanaSMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaSMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ReccampanaSM.
     * @param {reccampanaSMCreateArgs} args - Arguments to create a ReccampanaSM.
     * @example
     * // Create one ReccampanaSM
     * const ReccampanaSM = await prisma.reccampanaSM.create({
     *   data: {
     *     // ... data to create a ReccampanaSM
     *   }
     * })
     * 
    **/
    create<T extends reccampanaSMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaSMCreateArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ReccampanaSMS.
     *     @param {reccampanaSMCreateManyArgs} args - Arguments to create many ReccampanaSMS.
     *     @example
     *     // Create many ReccampanaSMS
     *     const reccampanaSM = await prisma.reccampanaSM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reccampanaSMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaSMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReccampanaSM.
     * @param {reccampanaSMDeleteArgs} args - Arguments to delete one ReccampanaSM.
     * @example
     * // Delete one ReccampanaSM
     * const ReccampanaSM = await prisma.reccampanaSM.delete({
     *   where: {
     *     // ... filter to delete one ReccampanaSM
     *   }
     * })
     * 
    **/
    delete<T extends reccampanaSMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaSMDeleteArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ReccampanaSM.
     * @param {reccampanaSMUpdateArgs} args - Arguments to update one ReccampanaSM.
     * @example
     * // Update one ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reccampanaSMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaSMUpdateArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ReccampanaSMS.
     * @param {reccampanaSMDeleteManyArgs} args - Arguments to filter ReccampanaSMS to delete.
     * @example
     * // Delete a few ReccampanaSMS
     * const { count } = await prisma.reccampanaSM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reccampanaSMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reccampanaSMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReccampanaSMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReccampanaSMS
     * const reccampanaSM = await prisma.reccampanaSM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reccampanaSMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaSMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReccampanaSM.
     * @param {reccampanaSMUpsertArgs} args - Arguments to update or create a ReccampanaSM.
     * @example
     * // Update or create a ReccampanaSM
     * const reccampanaSM = await prisma.reccampanaSM.upsert({
     *   create: {
     *     // ... data to create a ReccampanaSM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReccampanaSM we want to update
     *   }
     * })
    **/
    upsert<T extends reccampanaSMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reccampanaSMUpsertArgs<ExtArgs>>
    ): Prisma__reccampanaSMClient<$Types.GetResult<reccampanaSMPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ReccampanaSMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMCountArgs} args - Arguments to filter ReccampanaSMS to count.
     * @example
     * // Count the number of ReccampanaSMS
     * const count = await prisma.reccampanaSM.count({
     *   where: {
     *     // ... the filter for the ReccampanaSMS we want to count
     *   }
     * })
    **/
    count<T extends reccampanaSMCountArgs>(
      args?: Subset<T, reccampanaSMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReccampanaSMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReccampanaSM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReccampanaSMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReccampanaSMAggregateArgs>(args: Subset<T, ReccampanaSMAggregateArgs>): Prisma.PrismaPromise<GetReccampanaSMAggregateType<T>>

    /**
     * Group by ReccampanaSM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reccampanaSMGroupByArgs} args - Group by arguments.
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
      T extends reccampanaSMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reccampanaSMGroupByArgs['orderBy'] }
        : { orderBy?: reccampanaSMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reccampanaSMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReccampanaSMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reccampanaSM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reccampanaSMClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * reccampanaSM base type for findUnique actions
   */
  export type reccampanaSMFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaSM to fetch.
     */
    where: reccampanaSMWhereUniqueInput
  }

  /**
   * reccampanaSM findUnique
   */
  export interface reccampanaSMFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaSMFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaSM findUniqueOrThrow
   */
  export type reccampanaSMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaSM to fetch.
     */
    where: reccampanaSMWhereUniqueInput
  }


  /**
   * reccampanaSM base type for findFirst actions
   */
  export type reccampanaSMFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaSM to fetch.
     */
    where?: reccampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaSMS to fetch.
     */
    orderBy?: reccampanaSMOrderByWithRelationInput | reccampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanaSMS.
     */
    cursor?: reccampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanaSMS.
     */
    distinct?: ReccampanaSMScalarFieldEnum | ReccampanaSMScalarFieldEnum[]
  }

  /**
   * reccampanaSM findFirst
   */
  export interface reccampanaSMFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends reccampanaSMFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaSM findFirstOrThrow
   */
  export type reccampanaSMFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaSM to fetch.
     */
    where?: reccampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaSMS to fetch.
     */
    orderBy?: reccampanaSMOrderByWithRelationInput | reccampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reccampanaSMS.
     */
    cursor?: reccampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaSMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reccampanaSMS.
     */
    distinct?: ReccampanaSMScalarFieldEnum | ReccampanaSMScalarFieldEnum[]
  }


  /**
   * reccampanaSM findMany
   */
  export type reccampanaSMFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter, which reccampanaSMS to fetch.
     */
    where?: reccampanaSMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaSMS to fetch.
     */
    orderBy?: reccampanaSMOrderByWithRelationInput | reccampanaSMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reccampanaSMS.
     */
    cursor?: reccampanaSMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reccampanaSMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reccampanaSMS.
     */
    skip?: number
    distinct?: ReccampanaSMScalarFieldEnum | ReccampanaSMScalarFieldEnum[]
  }


  /**
   * reccampanaSM create
   */
  export type reccampanaSMCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * The data needed to create a reccampanaSM.
     */
    data: XOR<reccampanaSMCreateInput, reccampanaSMUncheckedCreateInput>
  }


  /**
   * reccampanaSM createMany
   */
  export type reccampanaSMCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reccampanaSMS.
     */
    data: reccampanaSMCreateManyInput | reccampanaSMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reccampanaSM update
   */
  export type reccampanaSMUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * The data needed to update a reccampanaSM.
     */
    data: XOR<reccampanaSMUpdateInput, reccampanaSMUncheckedUpdateInput>
    /**
     * Choose, which reccampanaSM to update.
     */
    where: reccampanaSMWhereUniqueInput
  }


  /**
   * reccampanaSM updateMany
   */
  export type reccampanaSMUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reccampanaSMS.
     */
    data: XOR<reccampanaSMUpdateManyMutationInput, reccampanaSMUncheckedUpdateManyInput>
    /**
     * Filter which reccampanaSMS to update
     */
    where?: reccampanaSMWhereInput
  }


  /**
   * reccampanaSM upsert
   */
  export type reccampanaSMUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * The filter to search for the reccampanaSM to update in case it exists.
     */
    where: reccampanaSMWhereUniqueInput
    /**
     * In case the reccampanaSM found by the `where` argument doesn't exist, create a new reccampanaSM with this data.
     */
    create: XOR<reccampanaSMCreateInput, reccampanaSMUncheckedCreateInput>
    /**
     * In case the reccampanaSM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reccampanaSMUpdateInput, reccampanaSMUncheckedUpdateInput>
  }


  /**
   * reccampanaSM delete
   */
  export type reccampanaSMDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
    /**
     * Filter which reccampanaSM to delete.
     */
    where: reccampanaSMWhereUniqueInput
  }


  /**
   * reccampanaSM deleteMany
   */
  export type reccampanaSMDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which reccampanaSMS to delete
     */
    where?: reccampanaSMWhereInput
  }


  /**
   * reccampanaSM without action
   */
  export type reccampanaSMArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reccampanaSM
     */
    select?: reccampanaSMSelect<ExtArgs> | null
  }



  /**
   * Model tempcampana
   */


  export type AggregateTempcampana = {
    _count: TempcampanaCountAggregateOutputType | null
    _avg: TempcampanaAvgAggregateOutputType | null
    _sum: TempcampanaSumAggregateOutputType | null
    _min: TempcampanaMinAggregateOutputType | null
    _max: TempcampanaMaxAggregateOutputType | null
  }

  export type TempcampanaAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type TempcampanaSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    GRUPO: number | null
    ZONA: number | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type TempcampanaMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type TempcampanaMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number | null
  }

  export type TempcampanaCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    ALTA: number
    VIGENCIA: number
    CALLE: number
    NRO_CALLE: number
    BARRIO: number
    LOCALIDAD: number
    GRUPO: number
    ZONA: number
    TELEFONO: number
    MOVIL: number
    EDAD: number
    MES: number
    ANO: number
    IMPORTE: number
    ID: number
    _all: number
  }


  export type TempcampanaAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type TempcampanaSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    GRUPO?: true
    ZONA?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type TempcampanaMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type TempcampanaMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
  }

  export type TempcampanaCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    ALTA?: true
    VIGENCIA?: true
    CALLE?: true
    NRO_CALLE?: true
    BARRIO?: true
    LOCALIDAD?: true
    GRUPO?: true
    ZONA?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    ID?: true
    _all?: true
  }

  export type TempcampanaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tempcampana to aggregate.
     */
    where?: tempcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempcampanas to fetch.
     */
    orderBy?: tempcampanaOrderByWithRelationInput | tempcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tempcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tempcampanas
    **/
    _count?: true | TempcampanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempcampanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempcampanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempcampanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempcampanaMaxAggregateInputType
  }

  export type GetTempcampanaAggregateType<T extends TempcampanaAggregateArgs> = {
        [P in keyof T & keyof AggregateTempcampana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempcampana[P]>
      : GetScalarType<T[P], AggregateTempcampana[P]>
  }




  export type tempcampanaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tempcampanaWhereInput
    orderBy?: tempcampanaOrderByWithAggregationInput | tempcampanaOrderByWithAggregationInput[]
    by: TempcampanaScalarFieldEnum[] | TempcampanaScalarFieldEnum
    having?: tempcampanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempcampanaCountAggregateInputType | true
    _avg?: TempcampanaAvgAggregateInputType
    _sum?: TempcampanaSumAggregateInputType
    _min?: TempcampanaMinAggregateInputType
    _max?: TempcampanaMaxAggregateInputType
  }


  export type TempcampanaGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    ALTA: Date | null
    VIGENCIA: Date | null
    CALLE: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    LOCALIDAD: string | null
    GRUPO: number | null
    ZONA: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    ID: number
    _count: TempcampanaCountAggregateOutputType | null
    _avg: TempcampanaAvgAggregateOutputType | null
    _sum: TempcampanaSumAggregateOutputType | null
    _min: TempcampanaMinAggregateOutputType | null
    _max: TempcampanaMaxAggregateOutputType | null
  }

  type GetTempcampanaGroupByPayload<T extends tempcampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempcampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempcampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempcampanaGroupByOutputType[P]>
            : GetScalarType<T[P], TempcampanaGroupByOutputType[P]>
        }
      >
    >


  export type tempcampanaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }, ExtArgs["result"]["tempcampana"]>

  export type tempcampanaSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    CALLE?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    LOCALIDAD?: boolean
    GRUPO?: boolean
    ZONA?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    ID?: boolean
  }


  type tempcampanaGetPayload<S extends boolean | null | undefined | tempcampanaArgs> = $Types.GetResult<tempcampanaPayload, S>

  type tempcampanaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tempcampanaFindManyArgs, 'select' | 'include'> & {
      select?: TempcampanaCountAggregateInputType | true
    }

  export interface tempcampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tempcampana'], meta: { name: 'tempcampana' } }
    /**
     * Find zero or one Tempcampana that matches the filter.
     * @param {tempcampanaFindUniqueArgs} args - Arguments to find a Tempcampana
     * @example
     * // Get one Tempcampana
     * const tempcampana = await prisma.tempcampana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tempcampanaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tempcampanaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tempcampana'> extends True ? Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tempcampana that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tempcampanaFindUniqueOrThrowArgs} args - Arguments to find a Tempcampana
     * @example
     * // Get one Tempcampana
     * const tempcampana = await prisma.tempcampana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tempcampanaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tempcampanaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tempcampana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaFindFirstArgs} args - Arguments to find a Tempcampana
     * @example
     * // Get one Tempcampana
     * const tempcampana = await prisma.tempcampana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tempcampanaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tempcampanaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tempcampana'> extends True ? Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tempcampana that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaFindFirstOrThrowArgs} args - Arguments to find a Tempcampana
     * @example
     * // Get one Tempcampana
     * const tempcampana = await prisma.tempcampana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tempcampanaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tempcampanaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tempcampanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tempcampanas
     * const tempcampanas = await prisma.tempcampana.findMany()
     * 
     * // Get first 10 Tempcampanas
     * const tempcampanas = await prisma.tempcampana.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const tempcampanaWithSUCURSALOnly = await prisma.tempcampana.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends tempcampanaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tempcampanaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tempcampana.
     * @param {tempcampanaCreateArgs} args - Arguments to create a Tempcampana.
     * @example
     * // Create one Tempcampana
     * const Tempcampana = await prisma.tempcampana.create({
     *   data: {
     *     // ... data to create a Tempcampana
     *   }
     * })
     * 
    **/
    create<T extends tempcampanaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tempcampanaCreateArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tempcampanas.
     *     @param {tempcampanaCreateManyArgs} args - Arguments to create many Tempcampanas.
     *     @example
     *     // Create many Tempcampanas
     *     const tempcampana = await prisma.tempcampana.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tempcampanaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tempcampanaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tempcampana.
     * @param {tempcampanaDeleteArgs} args - Arguments to delete one Tempcampana.
     * @example
     * // Delete one Tempcampana
     * const Tempcampana = await prisma.tempcampana.delete({
     *   where: {
     *     // ... filter to delete one Tempcampana
     *   }
     * })
     * 
    **/
    delete<T extends tempcampanaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tempcampanaDeleteArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tempcampana.
     * @param {tempcampanaUpdateArgs} args - Arguments to update one Tempcampana.
     * @example
     * // Update one Tempcampana
     * const tempcampana = await prisma.tempcampana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tempcampanaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tempcampanaUpdateArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tempcampanas.
     * @param {tempcampanaDeleteManyArgs} args - Arguments to filter Tempcampanas to delete.
     * @example
     * // Delete a few Tempcampanas
     * const { count } = await prisma.tempcampana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tempcampanaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tempcampanaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tempcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tempcampanas
     * const tempcampana = await prisma.tempcampana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tempcampanaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tempcampanaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tempcampana.
     * @param {tempcampanaUpsertArgs} args - Arguments to update or create a Tempcampana.
     * @example
     * // Update or create a Tempcampana
     * const tempcampana = await prisma.tempcampana.upsert({
     *   create: {
     *     // ... data to create a Tempcampana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tempcampana we want to update
     *   }
     * })
    **/
    upsert<T extends tempcampanaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tempcampanaUpsertArgs<ExtArgs>>
    ): Prisma__tempcampanaClient<$Types.GetResult<tempcampanaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tempcampanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaCountArgs} args - Arguments to filter Tempcampanas to count.
     * @example
     * // Count the number of Tempcampanas
     * const count = await prisma.tempcampana.count({
     *   where: {
     *     // ... the filter for the Tempcampanas we want to count
     *   }
     * })
    **/
    count<T extends tempcampanaCountArgs>(
      args?: Subset<T, tempcampanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempcampanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tempcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempcampanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempcampanaAggregateArgs>(args: Subset<T, TempcampanaAggregateArgs>): Prisma.PrismaPromise<GetTempcampanaAggregateType<T>>

    /**
     * Group by Tempcampana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempcampanaGroupByArgs} args - Group by arguments.
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
      T extends tempcampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tempcampanaGroupByArgs['orderBy'] }
        : { orderBy?: tempcampanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tempcampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempcampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tempcampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tempcampanaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * tempcampana base type for findUnique actions
   */
  export type tempcampanaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter, which tempcampana to fetch.
     */
    where: tempcampanaWhereUniqueInput
  }

  /**
   * tempcampana findUnique
   */
  export interface tempcampanaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tempcampanaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tempcampana findUniqueOrThrow
   */
  export type tempcampanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter, which tempcampana to fetch.
     */
    where: tempcampanaWhereUniqueInput
  }


  /**
   * tempcampana base type for findFirst actions
   */
  export type tempcampanaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter, which tempcampana to fetch.
     */
    where?: tempcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempcampanas to fetch.
     */
    orderBy?: tempcampanaOrderByWithRelationInput | tempcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tempcampanas.
     */
    cursor?: tempcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tempcampanas.
     */
    distinct?: TempcampanaScalarFieldEnum | TempcampanaScalarFieldEnum[]
  }

  /**
   * tempcampana findFirst
   */
  export interface tempcampanaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tempcampanaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tempcampana findFirstOrThrow
   */
  export type tempcampanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter, which tempcampana to fetch.
     */
    where?: tempcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempcampanas to fetch.
     */
    orderBy?: tempcampanaOrderByWithRelationInput | tempcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tempcampanas.
     */
    cursor?: tempcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempcampanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tempcampanas.
     */
    distinct?: TempcampanaScalarFieldEnum | TempcampanaScalarFieldEnum[]
  }


  /**
   * tempcampana findMany
   */
  export type tempcampanaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter, which tempcampanas to fetch.
     */
    where?: tempcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempcampanas to fetch.
     */
    orderBy?: tempcampanaOrderByWithRelationInput | tempcampanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tempcampanas.
     */
    cursor?: tempcampanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempcampanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempcampanas.
     */
    skip?: number
    distinct?: TempcampanaScalarFieldEnum | TempcampanaScalarFieldEnum[]
  }


  /**
   * tempcampana create
   */
  export type tempcampanaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * The data needed to create a tempcampana.
     */
    data: XOR<tempcampanaCreateInput, tempcampanaUncheckedCreateInput>
  }


  /**
   * tempcampana createMany
   */
  export type tempcampanaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tempcampanas.
     */
    data: tempcampanaCreateManyInput | tempcampanaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tempcampana update
   */
  export type tempcampanaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * The data needed to update a tempcampana.
     */
    data: XOR<tempcampanaUpdateInput, tempcampanaUncheckedUpdateInput>
    /**
     * Choose, which tempcampana to update.
     */
    where: tempcampanaWhereUniqueInput
  }


  /**
   * tempcampana updateMany
   */
  export type tempcampanaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tempcampanas.
     */
    data: XOR<tempcampanaUpdateManyMutationInput, tempcampanaUncheckedUpdateManyInput>
    /**
     * Filter which tempcampanas to update
     */
    where?: tempcampanaWhereInput
  }


  /**
   * tempcampana upsert
   */
  export type tempcampanaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * The filter to search for the tempcampana to update in case it exists.
     */
    where: tempcampanaWhereUniqueInput
    /**
     * In case the tempcampana found by the `where` argument doesn't exist, create a new tempcampana with this data.
     */
    create: XOR<tempcampanaCreateInput, tempcampanaUncheckedCreateInput>
    /**
     * In case the tempcampana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tempcampanaUpdateInput, tempcampanaUncheckedUpdateInput>
  }


  /**
   * tempcampana delete
   */
  export type tempcampanaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
    /**
     * Filter which tempcampana to delete.
     */
    where: tempcampanaWhereUniqueInput
  }


  /**
   * tempcampana deleteMany
   */
  export type tempcampanaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tempcampanas to delete
     */
    where?: tempcampanaWhereInput
  }


  /**
   * tempcampana without action
   */
  export type tempcampanaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempcampana
     */
    select?: tempcampanaSelect<ExtArgs> | null
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


  export const At2campanaScalarFieldEnum: {
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

  export type At2campanaScalarFieldEnum = (typeof At2campanaScalarFieldEnum)[keyof typeof At2campanaScalarFieldEnum]


  export const AtcampanaScalarFieldEnum: {
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

  export type AtcampanaScalarFieldEnum = (typeof AtcampanaScalarFieldEnum)[keyof typeof AtcampanaScalarFieldEnum]


  export const BlancampanaScalarFieldEnum: {
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

  export type BlancampanaScalarFieldEnum = (typeof BlancampanaScalarFieldEnum)[keyof typeof BlancampanaScalarFieldEnum]


  export const ReccampanaScalarFieldEnum: {
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

  export type ReccampanaScalarFieldEnum = (typeof ReccampanaScalarFieldEnum)[keyof typeof ReccampanaScalarFieldEnum]


  export const ReincampanaScalarFieldEnum: {
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

  export type ReincampanaScalarFieldEnum = (typeof ReincampanaScalarFieldEnum)[keyof typeof ReincampanaScalarFieldEnum]


  export const AuxcampanaScalarFieldEnum: {
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

  export type AuxcampanaScalarFieldEnum = (typeof AuxcampanaScalarFieldEnum)[keyof typeof AuxcampanaScalarFieldEnum]


  export const PolicampanaScalarFieldEnum: {
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

  export type PolicampanaScalarFieldEnum = (typeof PolicampanaScalarFieldEnum)[keyof typeof PolicampanaScalarFieldEnum]


  export const At2campanaMScalarFieldEnum: {
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

  export type At2campanaMScalarFieldEnum = (typeof At2campanaMScalarFieldEnum)[keyof typeof At2campanaMScalarFieldEnum]


  export const AtcampanaMScalarFieldEnum: {
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

  export type AtcampanaMScalarFieldEnum = (typeof AtcampanaMScalarFieldEnum)[keyof typeof AtcampanaMScalarFieldEnum]


  export const BlancampanaMScalarFieldEnum: {
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

  export type BlancampanaMScalarFieldEnum = (typeof BlancampanaMScalarFieldEnum)[keyof typeof BlancampanaMScalarFieldEnum]


  export const ReccampanaMScalarFieldEnum: {
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

  export type ReccampanaMScalarFieldEnum = (typeof ReccampanaMScalarFieldEnum)[keyof typeof ReccampanaMScalarFieldEnum]


  export const ReincampanaMScalarFieldEnum: {
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

  export type ReincampanaMScalarFieldEnum = (typeof ReincampanaMScalarFieldEnum)[keyof typeof ReincampanaMScalarFieldEnum]


  export const AtcampanaSMScalarFieldEnum: {
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

  export type AtcampanaSMScalarFieldEnum = (typeof AtcampanaSMScalarFieldEnum)[keyof typeof AtcampanaSMScalarFieldEnum]


  export const ReccampanaSMScalarFieldEnum: {
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

  export type ReccampanaSMScalarFieldEnum = (typeof ReccampanaSMScalarFieldEnum)[keyof typeof ReccampanaSMScalarFieldEnum]


  export const TempcampanaScalarFieldEnum: {
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

  export type TempcampanaScalarFieldEnum = (typeof TempcampanaScalarFieldEnum)[keyof typeof TempcampanaScalarFieldEnum]


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


  export type at2campanaWhereInput = {
    AND?: at2campanaWhereInput | at2campanaWhereInput[]
    OR?: at2campanaWhereInput[]
    NOT?: at2campanaWhereInput | at2campanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type at2campanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type at2campanaWhereUniqueInput = {
    ID?: number
  }

  export type at2campanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: at2campanaCountOrderByAggregateInput
    _avg?: at2campanaAvgOrderByAggregateInput
    _max?: at2campanaMaxOrderByAggregateInput
    _min?: at2campanaMinOrderByAggregateInput
    _sum?: at2campanaSumOrderByAggregateInput
  }

  export type at2campanaScalarWhereWithAggregatesInput = {
    AND?: at2campanaScalarWhereWithAggregatesInput | at2campanaScalarWhereWithAggregatesInput[]
    OR?: at2campanaScalarWhereWithAggregatesInput[]
    NOT?: at2campanaScalarWhereWithAggregatesInput | at2campanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type atcampanaWhereInput = {
    AND?: atcampanaWhereInput | atcampanaWhereInput[]
    OR?: atcampanaWhereInput[]
    NOT?: atcampanaWhereInput | atcampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    MAIL?: StringNullableFilter | string | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type atcampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type atcampanaWhereUniqueInput = {
    ID?: number
  }

  export type atcampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: atcampanaCountOrderByAggregateInput
    _avg?: atcampanaAvgOrderByAggregateInput
    _max?: atcampanaMaxOrderByAggregateInput
    _min?: atcampanaMinOrderByAggregateInput
    _sum?: atcampanaSumOrderByAggregateInput
  }

  export type atcampanaScalarWhereWithAggregatesInput = {
    AND?: atcampanaScalarWhereWithAggregatesInput | atcampanaScalarWhereWithAggregatesInput[]
    OR?: atcampanaScalarWhereWithAggregatesInput[]
    NOT?: atcampanaScalarWhereWithAggregatesInput | atcampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    MAIL?: StringNullableWithAggregatesFilter | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type blancampanaWhereInput = {
    AND?: blancampanaWhereInput | blancampanaWhereInput[]
    OR?: blancampanaWhereInput[]
    NOT?: blancampanaWhereInput | blancampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type blancampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type blancampanaWhereUniqueInput = {
    ID?: number
  }

  export type blancampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: blancampanaCountOrderByAggregateInput
    _avg?: blancampanaAvgOrderByAggregateInput
    _max?: blancampanaMaxOrderByAggregateInput
    _min?: blancampanaMinOrderByAggregateInput
    _sum?: blancampanaSumOrderByAggregateInput
  }

  export type blancampanaScalarWhereWithAggregatesInput = {
    AND?: blancampanaScalarWhereWithAggregatesInput | blancampanaScalarWhereWithAggregatesInput[]
    OR?: blancampanaScalarWhereWithAggregatesInput[]
    NOT?: blancampanaScalarWhereWithAggregatesInput | blancampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type reccampanaWhereInput = {
    AND?: reccampanaWhereInput | reccampanaWhereInput[]
    OR?: reccampanaWhereInput[]
    NOT?: reccampanaWhereInput | reccampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type reccampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type reccampanaWhereUniqueInput = {
    ID?: number
  }

  export type reccampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: reccampanaCountOrderByAggregateInput
    _avg?: reccampanaAvgOrderByAggregateInput
    _max?: reccampanaMaxOrderByAggregateInput
    _min?: reccampanaMinOrderByAggregateInput
    _sum?: reccampanaSumOrderByAggregateInput
  }

  export type reccampanaScalarWhereWithAggregatesInput = {
    AND?: reccampanaScalarWhereWithAggregatesInput | reccampanaScalarWhereWithAggregatesInput[]
    OR?: reccampanaScalarWhereWithAggregatesInput[]
    NOT?: reccampanaScalarWhereWithAggregatesInput | reccampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type reincampanaWhereInput = {
    AND?: reincampanaWhereInput | reincampanaWhereInput[]
    OR?: reincampanaWhereInput[]
    NOT?: reincampanaWhereInput | reincampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type reincampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type reincampanaWhereUniqueInput = {
    ID?: number
  }

  export type reincampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: reincampanaCountOrderByAggregateInput
    _avg?: reincampanaAvgOrderByAggregateInput
    _max?: reincampanaMaxOrderByAggregateInput
    _min?: reincampanaMinOrderByAggregateInput
    _sum?: reincampanaSumOrderByAggregateInput
  }

  export type reincampanaScalarWhereWithAggregatesInput = {
    AND?: reincampanaScalarWhereWithAggregatesInput | reincampanaScalarWhereWithAggregatesInput[]
    OR?: reincampanaScalarWhereWithAggregatesInput[]
    NOT?: reincampanaScalarWhereWithAggregatesInput | reincampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type auxcampanaWhereInput = {
    AND?: auxcampanaWhereInput | auxcampanaWhereInput[]
    OR?: auxcampanaWhereInput[]
    NOT?: auxcampanaWhereInput | auxcampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type auxcampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type auxcampanaWhereUniqueInput = {
    ID?: number
  }

  export type auxcampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: auxcampanaCountOrderByAggregateInput
    _avg?: auxcampanaAvgOrderByAggregateInput
    _max?: auxcampanaMaxOrderByAggregateInput
    _min?: auxcampanaMinOrderByAggregateInput
    _sum?: auxcampanaSumOrderByAggregateInput
  }

  export type auxcampanaScalarWhereWithAggregatesInput = {
    AND?: auxcampanaScalarWhereWithAggregatesInput | auxcampanaScalarWhereWithAggregatesInput[]
    OR?: auxcampanaScalarWhereWithAggregatesInput[]
    NOT?: auxcampanaScalarWhereWithAggregatesInput | auxcampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type policampanaWhereInput = {
    AND?: policampanaWhereInput | policampanaWhereInput[]
    OR?: policampanaWhereInput[]
    NOT?: policampanaWhereInput | policampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type policampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type policampanaWhereUniqueInput = {
    ID?: number
  }

  export type policampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: policampanaCountOrderByAggregateInput
    _avg?: policampanaAvgOrderByAggregateInput
    _max?: policampanaMaxOrderByAggregateInput
    _min?: policampanaMinOrderByAggregateInput
    _sum?: policampanaSumOrderByAggregateInput
  }

  export type policampanaScalarWhereWithAggregatesInput = {
    AND?: policampanaScalarWhereWithAggregatesInput | policampanaScalarWhereWithAggregatesInput[]
    OR?: policampanaScalarWhereWithAggregatesInput[]
    NOT?: policampanaScalarWhereWithAggregatesInput | policampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type at2campanaMWhereInput = {
    AND?: at2campanaMWhereInput | at2campanaMWhereInput[]
    OR?: at2campanaMWhereInput[]
    NOT?: at2campanaMWhereInput | at2campanaMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type at2campanaMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type at2campanaMWhereUniqueInput = {
    ID?: number
  }

  export type at2campanaMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: at2campanaMCountOrderByAggregateInput
    _avg?: at2campanaMAvgOrderByAggregateInput
    _max?: at2campanaMMaxOrderByAggregateInput
    _min?: at2campanaMMinOrderByAggregateInput
    _sum?: at2campanaMSumOrderByAggregateInput
  }

  export type at2campanaMScalarWhereWithAggregatesInput = {
    AND?: at2campanaMScalarWhereWithAggregatesInput | at2campanaMScalarWhereWithAggregatesInput[]
    OR?: at2campanaMScalarWhereWithAggregatesInput[]
    NOT?: at2campanaMScalarWhereWithAggregatesInput | at2campanaMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type atcampanaMWhereInput = {
    AND?: atcampanaMWhereInput | atcampanaMWhereInput[]
    OR?: atcampanaMWhereInput[]
    NOT?: atcampanaMWhereInput | atcampanaMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type atcampanaMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type atcampanaMWhereUniqueInput = {
    ID?: number
  }

  export type atcampanaMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: atcampanaMCountOrderByAggregateInput
    _avg?: atcampanaMAvgOrderByAggregateInput
    _max?: atcampanaMMaxOrderByAggregateInput
    _min?: atcampanaMMinOrderByAggregateInput
    _sum?: atcampanaMSumOrderByAggregateInput
  }

  export type atcampanaMScalarWhereWithAggregatesInput = {
    AND?: atcampanaMScalarWhereWithAggregatesInput | atcampanaMScalarWhereWithAggregatesInput[]
    OR?: atcampanaMScalarWhereWithAggregatesInput[]
    NOT?: atcampanaMScalarWhereWithAggregatesInput | atcampanaMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type blancampanaMWhereInput = {
    AND?: blancampanaMWhereInput | blancampanaMWhereInput[]
    OR?: blancampanaMWhereInput[]
    NOT?: blancampanaMWhereInput | blancampanaMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type blancampanaMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type blancampanaMWhereUniqueInput = {
    ID?: number
  }

  export type blancampanaMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: blancampanaMCountOrderByAggregateInput
    _avg?: blancampanaMAvgOrderByAggregateInput
    _max?: blancampanaMMaxOrderByAggregateInput
    _min?: blancampanaMMinOrderByAggregateInput
    _sum?: blancampanaMSumOrderByAggregateInput
  }

  export type blancampanaMScalarWhereWithAggregatesInput = {
    AND?: blancampanaMScalarWhereWithAggregatesInput | blancampanaMScalarWhereWithAggregatesInput[]
    OR?: blancampanaMScalarWhereWithAggregatesInput[]
    NOT?: blancampanaMScalarWhereWithAggregatesInput | blancampanaMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type reccampanaMWhereInput = {
    AND?: reccampanaMWhereInput | reccampanaMWhereInput[]
    OR?: reccampanaMWhereInput[]
    NOT?: reccampanaMWhereInput | reccampanaMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type reccampanaMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type reccampanaMWhereUniqueInput = {
    ID?: number
  }

  export type reccampanaMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: reccampanaMCountOrderByAggregateInput
    _avg?: reccampanaMAvgOrderByAggregateInput
    _max?: reccampanaMMaxOrderByAggregateInput
    _min?: reccampanaMMinOrderByAggregateInput
    _sum?: reccampanaMSumOrderByAggregateInput
  }

  export type reccampanaMScalarWhereWithAggregatesInput = {
    AND?: reccampanaMScalarWhereWithAggregatesInput | reccampanaMScalarWhereWithAggregatesInput[]
    OR?: reccampanaMScalarWhereWithAggregatesInput[]
    NOT?: reccampanaMScalarWhereWithAggregatesInput | reccampanaMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type reincampanaMWhereInput = {
    AND?: reincampanaMWhereInput | reincampanaMWhereInput[]
    OR?: reincampanaMWhereInput[]
    NOT?: reincampanaMWhereInput | reincampanaMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type reincampanaMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type reincampanaMWhereUniqueInput = {
    ID?: number
  }

  export type reincampanaMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: reincampanaMCountOrderByAggregateInput
    _avg?: reincampanaMAvgOrderByAggregateInput
    _max?: reincampanaMMaxOrderByAggregateInput
    _min?: reincampanaMMinOrderByAggregateInput
    _sum?: reincampanaMSumOrderByAggregateInput
  }

  export type reincampanaMScalarWhereWithAggregatesInput = {
    AND?: reincampanaMScalarWhereWithAggregatesInput | reincampanaMScalarWhereWithAggregatesInput[]
    OR?: reincampanaMScalarWhereWithAggregatesInput[]
    NOT?: reincampanaMScalarWhereWithAggregatesInput | reincampanaMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type atcampanaSMWhereInput = {
    AND?: atcampanaSMWhereInput | atcampanaSMWhereInput[]
    OR?: atcampanaSMWhereInput[]
    NOT?: atcampanaSMWhereInput | atcampanaSMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type atcampanaSMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMWhereUniqueInput = {
    ID?: number
  }

  export type atcampanaSMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: atcampanaSMCountOrderByAggregateInput
    _avg?: atcampanaSMAvgOrderByAggregateInput
    _max?: atcampanaSMMaxOrderByAggregateInput
    _min?: atcampanaSMMinOrderByAggregateInput
    _sum?: atcampanaSMSumOrderByAggregateInput
  }

  export type atcampanaSMScalarWhereWithAggregatesInput = {
    AND?: atcampanaSMScalarWhereWithAggregatesInput | atcampanaSMScalarWhereWithAggregatesInput[]
    OR?: atcampanaSMScalarWhereWithAggregatesInput[]
    NOT?: atcampanaSMScalarWhereWithAggregatesInput | atcampanaSMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type reccampanaSMWhereInput = {
    AND?: reccampanaSMWhereInput | reccampanaSMWhereInput[]
    OR?: reccampanaSMWhereInput[]
    NOT?: reccampanaSMWhereInput | reccampanaSMWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type reccampanaSMOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMWhereUniqueInput = {
    ID?: number
  }

  export type reccampanaSMOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: reccampanaSMCountOrderByAggregateInput
    _avg?: reccampanaSMAvgOrderByAggregateInput
    _max?: reccampanaSMMaxOrderByAggregateInput
    _min?: reccampanaSMMinOrderByAggregateInput
    _sum?: reccampanaSMSumOrderByAggregateInput
  }

  export type reccampanaSMScalarWhereWithAggregatesInput = {
    AND?: reccampanaSMScalarWhereWithAggregatesInput | reccampanaSMScalarWhereWithAggregatesInput[]
    OR?: reccampanaSMScalarWhereWithAggregatesInput[]
    NOT?: reccampanaSMScalarWhereWithAggregatesInput | reccampanaSMScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type tempcampanaWhereInput = {
    AND?: tempcampanaWhereInput | tempcampanaWhereInput[]
    OR?: tempcampanaWhereInput[]
    NOT?: tempcampanaWhereInput | tempcampanaWhereInput[]
    SUCURSAL?: StringNullableFilter | string | null
    CONTRATO?: IntFilter | number
    NRO_DOC?: IntNullableFilter | number | null
    APELLIDOS?: StringNullableFilter | string | null
    NOMBRES?: StringNullableFilter | string | null
    ALTA?: DateTimeNullableFilter | Date | string | null
    VIGENCIA?: DateTimeNullableFilter | Date | string | null
    CALLE?: StringNullableFilter | string | null
    NRO_CALLE?: IntNullableFilter | number | null
    BARRIO?: StringNullableFilter | string | null
    LOCALIDAD?: StringNullableFilter | string | null
    GRUPO?: IntNullableFilter | number | null
    ZONA?: IntNullableFilter | number | null
    TELEFONO?: StringNullableFilter | string | null
    MOVIL?: StringNullableFilter | string | null
    EDAD?: IntNullableFilter | number | null
    MES?: IntNullableFilter | number | null
    ANO?: IntNullableFilter | number | null
    IMPORTE?: FloatNullableFilter | number | null
    ID?: IntFilter | number
  }

  export type tempcampanaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
  }

  export type tempcampanaWhereUniqueInput = {
    ID?: number
  }

  export type tempcampanaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    ID?: SortOrder
    _count?: tempcampanaCountOrderByAggregateInput
    _avg?: tempcampanaAvgOrderByAggregateInput
    _max?: tempcampanaMaxOrderByAggregateInput
    _min?: tempcampanaMinOrderByAggregateInput
    _sum?: tempcampanaSumOrderByAggregateInput
  }

  export type tempcampanaScalarWhereWithAggregatesInput = {
    AND?: tempcampanaScalarWhereWithAggregatesInput | tempcampanaScalarWhereWithAggregatesInput[]
    OR?: tempcampanaScalarWhereWithAggregatesInput[]
    NOT?: tempcampanaScalarWhereWithAggregatesInput | tempcampanaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter | string | null
    CONTRATO?: IntWithAggregatesFilter | number
    NRO_DOC?: IntNullableWithAggregatesFilter | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter | string | null
    NOMBRES?: StringNullableWithAggregatesFilter | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter | number | null
    BARRIO?: StringNullableWithAggregatesFilter | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter | string | null
    GRUPO?: IntNullableWithAggregatesFilter | number | null
    ZONA?: IntNullableWithAggregatesFilter | number | null
    TELEFONO?: StringNullableWithAggregatesFilter | string | null
    MOVIL?: StringNullableWithAggregatesFilter | string | null
    EDAD?: IntNullableWithAggregatesFilter | number | null
    MES?: IntNullableWithAggregatesFilter | number | null
    ANO?: IntNullableWithAggregatesFilter | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter | number | null
    ID?: IntWithAggregatesFilter | number
  }

  export type at2campanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type at2campanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type at2campanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type at2campanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type at2campanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type at2campanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type at2campanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    MAIL?: string | null
    IMPORTE?: number | null
  }

  export type atcampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    MAIL?: string | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    MAIL?: string | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type blancampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type blancampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type blancampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type blancampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type blancampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type blancampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type blancampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type reccampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reincampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type reincampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reincampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reincampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reincampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reincampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reincampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type auxcampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type auxcampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type auxcampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type auxcampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type auxcampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type auxcampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type auxcampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type policampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type policampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type policampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type policampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type policampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type policampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type policampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type at2campanaMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type at2campanaMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type at2campanaMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type at2campanaMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type at2campanaMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type at2campanaMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type at2campanaMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type atcampanaMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type blancampanaMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type blancampanaMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type blancampanaMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type blancampanaMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type blancampanaMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type blancampanaMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type blancampanaMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type reccampanaMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reincampanaMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type reincampanaMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reincampanaMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reincampanaMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reincampanaMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reincampanaMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reincampanaMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaSMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type atcampanaSMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaSMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaSMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type atcampanaSMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type atcampanaSMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type atcampanaSMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaSMCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type reccampanaSMUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaSMUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaSMUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type reccampanaSMCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type reccampanaSMUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reccampanaSMUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type tempcampanaCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
  }

  export type tempcampanaUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type tempcampanaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tempcampanaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
  }

  export type tempcampanaCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    CALLE?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    LOCALIDAD?: string | null
    GRUPO?: number | null
    ZONA?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD?: number | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    ID?: number
  }

  export type tempcampanaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tempcampanaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    ID?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type at2campanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
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

  export type atcampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    MAIL?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    MAIL?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    MAIL?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type auxcampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type auxcampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type auxcampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type auxcampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type auxcampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type policampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type policampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type policampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type policampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type policampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type at2campanaMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type blancampanaMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reincampanaMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type atcampanaSMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type reccampanaSMSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type tempcampanaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type tempcampanaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type tempcampanaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type tempcampanaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    CALLE?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    LOCALIDAD?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type tempcampanaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    GRUPO?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    ID?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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