
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type beneficiosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idbeneficio: number
    socio: number | null
    dni: number | null
    idcomercio: number | null
    nombre: string | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
    fecha: Date | null
    n_trans: string | null
    ape_nom: string | null
  }, ExtArgs["result"]["beneficios"]>
  composites: {}
}

/**
 * Model beneficios
 * 
 */
export type beneficios = runtime.Types.DefaultSelection<beneficiosPayload>
export type comerciosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idcomercio: number
    comercio: string | null
    rubro: string | null
    direccion: string | null
    beneficio: string | null
    localidad: string | null
    estado: boolean | null
    descuento: number | null
  }, ExtArgs["result"]["comercios"]>
  composites: {}
}

/**
 * Model comercios
 * 
 */
export type comercios = runtime.Types.DefaultSelection<comerciosPayload>
export type connacPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idconvenio: number
    convenio: string | null
    estado: string | null
    pagina: string | null
  }, ExtArgs["result"]["connac"]>
  composites: {}
}

/**
 * Model connac
 * 
 */
export type connac = runtime.Types.DefaultSelection<connacPayload>
export type ganadoresPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idganador: number
    participante: string | null
    premio: number | null
    fecha: Date | null
    telefono: string | null
    dni: number | null
  }, ExtArgs["result"]["ganadores"]>
  composites: {}
}

/**
 * Model ganadores
 * 
 */
export type ganadores = runtime.Types.DefaultSelection<ganadoresPayload>
export type participantes_sorteoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    participante: string | null
    dni: number | null
    doble: number
    estado: number
    telefono: string | null
    idparticipante: number
  }, ExtArgs["result"]["participantes_sorteo"]>
  composites: {}
}

/**
 * Model participantes_sorteo
 * 
 */
export type participantes_sorteo = runtime.Types.DefaultSelection<participantes_sorteoPayload>
export type sociosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idsocio: number
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
  }, ExtArgs["result"]["socios"]>
  composites: {}
}

/**
 * Model socios
 * 
 */
export type socios = runtime.Types.DefaultSelection<sociosPayload>
export type solicitud_sorteoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idsocio: number
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
    obra_soc: string | null
  }, ExtArgs["result"]["solicitud_sorteo"]>
  composites: {}
}

/**
 * Model solicitud_sorteo
 * 
 */
export type solicitud_sorteo = runtime.Types.DefaultSelection<solicitud_sorteoPayload>
export type solicitud_sorteo_webPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idnosocio: number
    solicitante: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    fecha: Date | null
    detalle: string | null
    estado: boolean | null
  }, ExtArgs["result"]["solicitud_sorteo_web"]>
  composites: {}
}

/**
 * Model solicitud_sorteo_web
 * 
 */
export type solicitud_sorteo_web = runtime.Types.DefaultSelection<solicitud_sorteo_webPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Beneficios
 * const beneficios = await prisma.beneficios.findMany()
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
   * // Fetch zero or more Beneficios
   * const beneficios = await prisma.beneficios.findMany()
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
   * `prisma.beneficios`: Exposes CRUD operations for the **beneficios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficios
    * const beneficios = await prisma.beneficios.findMany()
    * ```
    */
  get beneficios(): Prisma.beneficiosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.comercios`: Exposes CRUD operations for the **comercios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comercios
    * const comercios = await prisma.comercios.findMany()
    * ```
    */
  get comercios(): Prisma.comerciosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.connac`: Exposes CRUD operations for the **connac** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connacs
    * const connacs = await prisma.connac.findMany()
    * ```
    */
  get connac(): Prisma.connacDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.ganadores`: Exposes CRUD operations for the **ganadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ganadores
    * const ganadores = await prisma.ganadores.findMany()
    * ```
    */
  get ganadores(): Prisma.ganadoresDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.participantes_sorteo`: Exposes CRUD operations for the **participantes_sorteo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes_sorteos
    * const participantes_sorteos = await prisma.participantes_sorteo.findMany()
    * ```
    */
  get participantes_sorteo(): Prisma.participantes_sorteoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.socios`: Exposes CRUD operations for the **socios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socios
    * const socios = await prisma.socios.findMany()
    * ```
    */
  get socios(): Prisma.sociosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.solicitud_sorteo`: Exposes CRUD operations for the **solicitud_sorteo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitud_sorteos
    * const solicitud_sorteos = await prisma.solicitud_sorteo.findMany()
    * ```
    */
  get solicitud_sorteo(): Prisma.solicitud_sorteoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.solicitud_sorteo_web`: Exposes CRUD operations for the **solicitud_sorteo_web** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitud_sorteo_webs
    * const solicitud_sorteo_webs = await prisma.solicitud_sorteo_web.findMany()
    * ```
    */
  get solicitud_sorteo_web(): Prisma.solicitud_sorteo_webDelegate<GlobalReject, ExtArgs>;
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
    beneficios: 'beneficios',
    comercios: 'comercios',
    connac: 'connac',
    ganadores: 'ganadores',
    participantes_sorteo: 'participantes_sorteo',
    socios: 'socios',
    solicitud_sorteo: 'solicitud_sorteo',
    solicitud_sorteo_web: 'solicitud_sorteo_web'
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
      modelProps: 'beneficios' | 'comercios' | 'connac' | 'ganadores' | 'participantes_sorteo' | 'socios' | 'solicitud_sorteo' | 'solicitud_sorteo_web'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      beneficios: {
        operations: {
          findUnique: {
            args: Prisma.beneficiosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload> | null
            payload: beneficiosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.beneficiosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.beneficiosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload> | null
            payload: beneficiosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.beneficiosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.beneficiosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>[]
            payload: beneficiosPayload<ExtArgs>
          }
          create: {
            args: Prisma.beneficiosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.beneficiosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: beneficiosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.beneficiosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          update: {
            args: Prisma.beneficiosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.beneficiosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: beneficiosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.beneficiosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: beneficiosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.beneficiosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<beneficiosPayload>
            payload: beneficiosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.BeneficiosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBeneficios>
            payload: beneficiosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.beneficiosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BeneficiosGroupByOutputType>[]
            payload: beneficiosPayload<ExtArgs>
          }
          count: {
            args: Prisma.beneficiosCountArgs<ExtArgs>,
            result: $Utils.Optional<BeneficiosCountAggregateOutputType> | number
            payload: beneficiosPayload<ExtArgs>
          }
        }
      }
      comercios: {
        operations: {
          findUnique: {
            args: Prisma.comerciosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload> | null
            payload: comerciosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.comerciosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.comerciosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload> | null
            payload: comerciosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.comerciosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.comerciosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>[]
            payload: comerciosPayload<ExtArgs>
          }
          create: {
            args: Prisma.comerciosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.comerciosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comerciosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.comerciosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          update: {
            args: Prisma.comerciosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.comerciosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comerciosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.comerciosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comerciosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.comerciosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comerciosPayload>
            payload: comerciosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ComerciosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComercios>
            payload: comerciosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.comerciosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComerciosGroupByOutputType>[]
            payload: comerciosPayload<ExtArgs>
          }
          count: {
            args: Prisma.comerciosCountArgs<ExtArgs>,
            result: $Utils.Optional<ComerciosCountAggregateOutputType> | number
            payload: comerciosPayload<ExtArgs>
          }
        }
      }
      connac: {
        operations: {
          findUnique: {
            args: Prisma.connacFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload> | null
            payload: connacPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.connacFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.connacFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload> | null
            payload: connacPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.connacFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.connacFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>[]
            payload: connacPayload<ExtArgs>
          }
          create: {
            args: Prisma.connacCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.connacCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: connacPayload<ExtArgs>
          }
          delete: {
            args: Prisma.connacDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          update: {
            args: Prisma.connacUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.connacDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: connacPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.connacUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: connacPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.connacUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<connacPayload>
            payload: connacPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ConnacAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConnac>
            payload: connacPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.connacGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConnacGroupByOutputType>[]
            payload: connacPayload<ExtArgs>
          }
          count: {
            args: Prisma.connacCountArgs<ExtArgs>,
            result: $Utils.Optional<ConnacCountAggregateOutputType> | number
            payload: connacPayload<ExtArgs>
          }
        }
      }
      ganadores: {
        operations: {
          findUnique: {
            args: Prisma.ganadoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload> | null
            payload: ganadoresPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ganadoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ganadoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload> | null
            payload: ganadoresPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ganadoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ganadoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>[]
            payload: ganadoresPayload<ExtArgs>
          }
          create: {
            args: Prisma.ganadoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ganadoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ganadoresPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ganadoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          update: {
            args: Prisma.ganadoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ganadoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ganadoresPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ganadoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ganadoresPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ganadoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ganadoresPayload>
            payload: ganadoresPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.GanadoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGanadores>
            payload: ganadoresPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ganadoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GanadoresGroupByOutputType>[]
            payload: ganadoresPayload<ExtArgs>
          }
          count: {
            args: Prisma.ganadoresCountArgs<ExtArgs>,
            result: $Utils.Optional<GanadoresCountAggregateOutputType> | number
            payload: ganadoresPayload<ExtArgs>
          }
        }
      }
      participantes_sorteo: {
        operations: {
          findUnique: {
            args: Prisma.participantes_sorteoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload> | null
            payload: participantes_sorteoPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.participantes_sorteoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.participantes_sorteoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload> | null
            payload: participantes_sorteoPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.participantes_sorteoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.participantes_sorteoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>[]
            payload: participantes_sorteoPayload<ExtArgs>
          }
          create: {
            args: Prisma.participantes_sorteoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.participantes_sorteoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: participantes_sorteoPayload<ExtArgs>
          }
          delete: {
            args: Prisma.participantes_sorteoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          update: {
            args: Prisma.participantes_sorteoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.participantes_sorteoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: participantes_sorteoPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.participantes_sorteoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: participantes_sorteoPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.participantes_sorteoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<participantes_sorteoPayload>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Participantes_sorteoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParticipantes_sorteo>
            payload: participantes_sorteoPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.participantes_sorteoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Participantes_sorteoGroupByOutputType>[]
            payload: participantes_sorteoPayload<ExtArgs>
          }
          count: {
            args: Prisma.participantes_sorteoCountArgs<ExtArgs>,
            result: $Utils.Optional<Participantes_sorteoCountAggregateOutputType> | number
            payload: participantes_sorteoPayload<ExtArgs>
          }
        }
      }
      socios: {
        operations: {
          findUnique: {
            args: Prisma.sociosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload> | null
            payload: sociosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.sociosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.sociosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload> | null
            payload: sociosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.sociosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.sociosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>[]
            payload: sociosPayload<ExtArgs>
          }
          create: {
            args: Prisma.sociosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.sociosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: sociosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.sociosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          update: {
            args: Prisma.sociosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.sociosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: sociosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.sociosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: sociosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.sociosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<sociosPayload>
            payload: sociosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.SociosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSocios>
            payload: sociosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.sociosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SociosGroupByOutputType>[]
            payload: sociosPayload<ExtArgs>
          }
          count: {
            args: Prisma.sociosCountArgs<ExtArgs>,
            result: $Utils.Optional<SociosCountAggregateOutputType> | number
            payload: sociosPayload<ExtArgs>
          }
        }
      }
      solicitud_sorteo: {
        operations: {
          findUnique: {
            args: Prisma.solicitud_sorteoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload> | null
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.solicitud_sorteoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.solicitud_sorteoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload> | null
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.solicitud_sorteoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.solicitud_sorteoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>[]
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          create: {
            args: Prisma.solicitud_sorteoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.solicitud_sorteoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          delete: {
            args: Prisma.solicitud_sorteoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          update: {
            args: Prisma.solicitud_sorteoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.solicitud_sorteoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.solicitud_sorteoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.solicitud_sorteoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteoPayload>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Solicitud_sorteoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSolicitud_sorteo>
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.solicitud_sorteoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Solicitud_sorteoGroupByOutputType>[]
            payload: solicitud_sorteoPayload<ExtArgs>
          }
          count: {
            args: Prisma.solicitud_sorteoCountArgs<ExtArgs>,
            result: $Utils.Optional<Solicitud_sorteoCountAggregateOutputType> | number
            payload: solicitud_sorteoPayload<ExtArgs>
          }
        }
      }
      solicitud_sorteo_web: {
        operations: {
          findUnique: {
            args: Prisma.solicitud_sorteo_webFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload> | null
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.solicitud_sorteo_webFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.solicitud_sorteo_webFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload> | null
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.solicitud_sorteo_webFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.solicitud_sorteo_webFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>[]
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          create: {
            args: Prisma.solicitud_sorteo_webCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.solicitud_sorteo_webCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          delete: {
            args: Prisma.solicitud_sorteo_webDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          update: {
            args: Prisma.solicitud_sorteo_webUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.solicitud_sorteo_webDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.solicitud_sorteo_webUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.solicitud_sorteo_webUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<solicitud_sorteo_webPayload>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Solicitud_sorteo_webAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSolicitud_sorteo_web>
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.solicitud_sorteo_webGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Solicitud_sorteo_webGroupByOutputType>[]
            payload: solicitud_sorteo_webPayload<ExtArgs>
          }
          count: {
            args: Prisma.solicitud_sorteo_webCountArgs<ExtArgs>,
            result: $Utils.Optional<Solicitud_sorteo_webCountAggregateOutputType> | number
            payload: solicitud_sorteo_webPayload<ExtArgs>
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
   * Model beneficios
   */


  export type AggregateBeneficios = {
    _count: BeneficiosCountAggregateOutputType | null
    _avg: BeneficiosAvgAggregateOutputType | null
    _sum: BeneficiosSumAggregateOutputType | null
    _min: BeneficiosMinAggregateOutputType | null
    _max: BeneficiosMaxAggregateOutputType | null
  }

  export type BeneficiosAvgAggregateOutputType = {
    idbeneficio: number | null
    socio: number | null
    dni: number | null
    idcomercio: number | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
  }

  export type BeneficiosSumAggregateOutputType = {
    idbeneficio: number | null
    socio: number | null
    dni: number | null
    idcomercio: number | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
  }

  export type BeneficiosMinAggregateOutputType = {
    idbeneficio: number | null
    socio: number | null
    dni: number | null
    idcomercio: number | null
    nombre: string | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
    fecha: Date | null
    n_trans: string | null
    ape_nom: string | null
  }

  export type BeneficiosMaxAggregateOutputType = {
    idbeneficio: number | null
    socio: number | null
    dni: number | null
    idcomercio: number | null
    nombre: string | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
    fecha: Date | null
    n_trans: string | null
    ape_nom: string | null
  }

  export type BeneficiosCountAggregateOutputType = {
    idbeneficio: number
    socio: number
    dni: number
    idcomercio: number
    nombre: number
    monto_compra: number
    beneficio: number
    monto_final: number
    fecha: number
    n_trans: number
    ape_nom: number
    _all: number
  }


  export type BeneficiosAvgAggregateInputType = {
    idbeneficio?: true
    socio?: true
    dni?: true
    idcomercio?: true
    monto_compra?: true
    beneficio?: true
    monto_final?: true
  }

  export type BeneficiosSumAggregateInputType = {
    idbeneficio?: true
    socio?: true
    dni?: true
    idcomercio?: true
    monto_compra?: true
    beneficio?: true
    monto_final?: true
  }

  export type BeneficiosMinAggregateInputType = {
    idbeneficio?: true
    socio?: true
    dni?: true
    idcomercio?: true
    nombre?: true
    monto_compra?: true
    beneficio?: true
    monto_final?: true
    fecha?: true
    n_trans?: true
    ape_nom?: true
  }

  export type BeneficiosMaxAggregateInputType = {
    idbeneficio?: true
    socio?: true
    dni?: true
    idcomercio?: true
    nombre?: true
    monto_compra?: true
    beneficio?: true
    monto_final?: true
    fecha?: true
    n_trans?: true
    ape_nom?: true
  }

  export type BeneficiosCountAggregateInputType = {
    idbeneficio?: true
    socio?: true
    dni?: true
    idcomercio?: true
    nombre?: true
    monto_compra?: true
    beneficio?: true
    monto_final?: true
    fecha?: true
    n_trans?: true
    ape_nom?: true
    _all?: true
  }

  export type BeneficiosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficios to aggregate.
     */
    where?: beneficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficios to fetch.
     */
    orderBy?: beneficiosOrderByWithRelationInput | beneficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficios
    **/
    _count?: true | BeneficiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiosMaxAggregateInputType
  }

  export type GetBeneficiosAggregateType<T extends BeneficiosAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficios[P]>
      : GetScalarType<T[P], AggregateBeneficios[P]>
  }




  export type beneficiosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: beneficiosWhereInput
    orderBy?: beneficiosOrderByWithAggregationInput | beneficiosOrderByWithAggregationInput[]
    by: BeneficiosScalarFieldEnum[] | BeneficiosScalarFieldEnum
    having?: beneficiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiosCountAggregateInputType | true
    _avg?: BeneficiosAvgAggregateInputType
    _sum?: BeneficiosSumAggregateInputType
    _min?: BeneficiosMinAggregateInputType
    _max?: BeneficiosMaxAggregateInputType
  }


  export type BeneficiosGroupByOutputType = {
    idbeneficio: number
    socio: number | null
    dni: number | null
    idcomercio: number | null
    nombre: string | null
    monto_compra: number | null
    beneficio: number | null
    monto_final: number | null
    fecha: Date | null
    n_trans: string | null
    ape_nom: string | null
    _count: BeneficiosCountAggregateOutputType | null
    _avg: BeneficiosAvgAggregateOutputType | null
    _sum: BeneficiosSumAggregateOutputType | null
    _min: BeneficiosMinAggregateOutputType | null
    _max: BeneficiosMaxAggregateOutputType | null
  }

  type GetBeneficiosGroupByPayload<T extends beneficiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiosGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiosGroupByOutputType[P]>
        }
      >
    >


  export type beneficiosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idbeneficio?: boolean
    socio?: boolean
    dni?: boolean
    idcomercio?: boolean
    nombre?: boolean
    monto_compra?: boolean
    beneficio?: boolean
    monto_final?: boolean
    fecha?: boolean
    n_trans?: boolean
    ape_nom?: boolean
  }, ExtArgs["result"]["beneficios"]>

  export type beneficiosSelectScalar = {
    idbeneficio?: boolean
    socio?: boolean
    dni?: boolean
    idcomercio?: boolean
    nombre?: boolean
    monto_compra?: boolean
    beneficio?: boolean
    monto_final?: boolean
    fecha?: boolean
    n_trans?: boolean
    ape_nom?: boolean
  }


  type beneficiosGetPayload<S extends boolean | null | undefined | beneficiosArgs> = $Types.GetResult<beneficiosPayload, S>

  type beneficiosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<beneficiosFindManyArgs, 'select' | 'include'> & {
      select?: BeneficiosCountAggregateInputType | true
    }

  export interface beneficiosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beneficios'], meta: { name: 'beneficios' } }
    /**
     * Find zero or one Beneficios that matches the filter.
     * @param {beneficiosFindUniqueArgs} args - Arguments to find a Beneficios
     * @example
     * // Get one Beneficios
     * const beneficios = await prisma.beneficios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends beneficiosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, beneficiosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'beneficios'> extends True ? Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Beneficios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {beneficiosFindUniqueOrThrowArgs} args - Arguments to find a Beneficios
     * @example
     * // Get one Beneficios
     * const beneficios = await prisma.beneficios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends beneficiosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, beneficiosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Beneficios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosFindFirstArgs} args - Arguments to find a Beneficios
     * @example
     * // Get one Beneficios
     * const beneficios = await prisma.beneficios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends beneficiosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, beneficiosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'beneficios'> extends True ? Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Beneficios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosFindFirstOrThrowArgs} args - Arguments to find a Beneficios
     * @example
     * // Get one Beneficios
     * const beneficios = await prisma.beneficios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends beneficiosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, beneficiosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Beneficios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficios
     * const beneficios = await prisma.beneficios.findMany()
     * 
     * // Get first 10 Beneficios
     * const beneficios = await prisma.beneficios.findMany({ take: 10 })
     * 
     * // Only select the `idbeneficio`
     * const beneficiosWithIdbeneficioOnly = await prisma.beneficios.findMany({ select: { idbeneficio: true } })
     * 
    **/
    findMany<T extends beneficiosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, beneficiosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Beneficios.
     * @param {beneficiosCreateArgs} args - Arguments to create a Beneficios.
     * @example
     * // Create one Beneficios
     * const Beneficios = await prisma.beneficios.create({
     *   data: {
     *     // ... data to create a Beneficios
     *   }
     * })
     * 
    **/
    create<T extends beneficiosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, beneficiosCreateArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Beneficios.
     *     @param {beneficiosCreateManyArgs} args - Arguments to create many Beneficios.
     *     @example
     *     // Create many Beneficios
     *     const beneficios = await prisma.beneficios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends beneficiosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, beneficiosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beneficios.
     * @param {beneficiosDeleteArgs} args - Arguments to delete one Beneficios.
     * @example
     * // Delete one Beneficios
     * const Beneficios = await prisma.beneficios.delete({
     *   where: {
     *     // ... filter to delete one Beneficios
     *   }
     * })
     * 
    **/
    delete<T extends beneficiosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, beneficiosDeleteArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Beneficios.
     * @param {beneficiosUpdateArgs} args - Arguments to update one Beneficios.
     * @example
     * // Update one Beneficios
     * const beneficios = await prisma.beneficios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends beneficiosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, beneficiosUpdateArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Beneficios.
     * @param {beneficiosDeleteManyArgs} args - Arguments to filter Beneficios to delete.
     * @example
     * // Delete a few Beneficios
     * const { count } = await prisma.beneficios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends beneficiosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, beneficiosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficios
     * const beneficios = await prisma.beneficios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends beneficiosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, beneficiosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficios.
     * @param {beneficiosUpsertArgs} args - Arguments to update or create a Beneficios.
     * @example
     * // Update or create a Beneficios
     * const beneficios = await prisma.beneficios.upsert({
     *   create: {
     *     // ... data to create a Beneficios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficios we want to update
     *   }
     * })
    **/
    upsert<T extends beneficiosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, beneficiosUpsertArgs<ExtArgs>>
    ): Prisma__beneficiosClient<$Types.GetResult<beneficiosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Beneficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosCountArgs} args - Arguments to filter Beneficios to count.
     * @example
     * // Count the number of Beneficios
     * const count = await prisma.beneficios.count({
     *   where: {
     *     // ... the filter for the Beneficios we want to count
     *   }
     * })
    **/
    count<T extends beneficiosCountArgs>(
      args?: Subset<T, beneficiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiosAggregateArgs>(args: Subset<T, BeneficiosAggregateArgs>): Prisma.PrismaPromise<GetBeneficiosAggregateType<T>>

    /**
     * Group by Beneficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosGroupByArgs} args - Group by arguments.
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
      T extends beneficiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beneficiosGroupByArgs['orderBy'] }
        : { orderBy?: beneficiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, beneficiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__beneficiosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * beneficios base type for findUnique actions
   */
  export type beneficiosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter, which beneficios to fetch.
     */
    where: beneficiosWhereUniqueInput
  }

  /**
   * beneficios findUnique
   */
  export interface beneficiosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends beneficiosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * beneficios findUniqueOrThrow
   */
  export type beneficiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter, which beneficios to fetch.
     */
    where: beneficiosWhereUniqueInput
  }


  /**
   * beneficios base type for findFirst actions
   */
  export type beneficiosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter, which beneficios to fetch.
     */
    where?: beneficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficios to fetch.
     */
    orderBy?: beneficiosOrderByWithRelationInput | beneficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficios.
     */
    cursor?: beneficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficios.
     */
    distinct?: BeneficiosScalarFieldEnum | BeneficiosScalarFieldEnum[]
  }

  /**
   * beneficios findFirst
   */
  export interface beneficiosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends beneficiosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * beneficios findFirstOrThrow
   */
  export type beneficiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter, which beneficios to fetch.
     */
    where?: beneficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficios to fetch.
     */
    orderBy?: beneficiosOrderByWithRelationInput | beneficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficios.
     */
    cursor?: beneficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficios.
     */
    distinct?: BeneficiosScalarFieldEnum | BeneficiosScalarFieldEnum[]
  }


  /**
   * beneficios findMany
   */
  export type beneficiosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter, which beneficios to fetch.
     */
    where?: beneficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficios to fetch.
     */
    orderBy?: beneficiosOrderByWithRelationInput | beneficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficios.
     */
    cursor?: beneficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficios.
     */
    skip?: number
    distinct?: BeneficiosScalarFieldEnum | BeneficiosScalarFieldEnum[]
  }


  /**
   * beneficios create
   */
  export type beneficiosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * The data needed to create a beneficios.
     */
    data?: XOR<beneficiosCreateInput, beneficiosUncheckedCreateInput>
  }


  /**
   * beneficios createMany
   */
  export type beneficiosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beneficios.
     */
    data: beneficiosCreateManyInput | beneficiosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * beneficios update
   */
  export type beneficiosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * The data needed to update a beneficios.
     */
    data: XOR<beneficiosUpdateInput, beneficiosUncheckedUpdateInput>
    /**
     * Choose, which beneficios to update.
     */
    where: beneficiosWhereUniqueInput
  }


  /**
   * beneficios updateMany
   */
  export type beneficiosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beneficios.
     */
    data: XOR<beneficiosUpdateManyMutationInput, beneficiosUncheckedUpdateManyInput>
    /**
     * Filter which beneficios to update
     */
    where?: beneficiosWhereInput
  }


  /**
   * beneficios upsert
   */
  export type beneficiosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * The filter to search for the beneficios to update in case it exists.
     */
    where: beneficiosWhereUniqueInput
    /**
     * In case the beneficios found by the `where` argument doesn't exist, create a new beneficios with this data.
     */
    create: XOR<beneficiosCreateInput, beneficiosUncheckedCreateInput>
    /**
     * In case the beneficios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiosUpdateInput, beneficiosUncheckedUpdateInput>
  }


  /**
   * beneficios delete
   */
  export type beneficiosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
    /**
     * Filter which beneficios to delete.
     */
    where: beneficiosWhereUniqueInput
  }


  /**
   * beneficios deleteMany
   */
  export type beneficiosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficios to delete
     */
    where?: beneficiosWhereInput
  }


  /**
   * beneficios without action
   */
  export type beneficiosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficios
     */
    select?: beneficiosSelect<ExtArgs> | null
  }



  /**
   * Model comercios
   */


  export type AggregateComercios = {
    _count: ComerciosCountAggregateOutputType | null
    _avg: ComerciosAvgAggregateOutputType | null
    _sum: ComerciosSumAggregateOutputType | null
    _min: ComerciosMinAggregateOutputType | null
    _max: ComerciosMaxAggregateOutputType | null
  }

  export type ComerciosAvgAggregateOutputType = {
    idcomercio: number | null
    descuento: number | null
  }

  export type ComerciosSumAggregateOutputType = {
    idcomercio: number | null
    descuento: number | null
  }

  export type ComerciosMinAggregateOutputType = {
    idcomercio: number | null
    comercio: string | null
    rubro: string | null
    direccion: string | null
    beneficio: string | null
    localidad: string | null
    estado: boolean | null
    descuento: number | null
  }

  export type ComerciosMaxAggregateOutputType = {
    idcomercio: number | null
    comercio: string | null
    rubro: string | null
    direccion: string | null
    beneficio: string | null
    localidad: string | null
    estado: boolean | null
    descuento: number | null
  }

  export type ComerciosCountAggregateOutputType = {
    idcomercio: number
    comercio: number
    rubro: number
    direccion: number
    beneficio: number
    localidad: number
    estado: number
    descuento: number
    _all: number
  }


  export type ComerciosAvgAggregateInputType = {
    idcomercio?: true
    descuento?: true
  }

  export type ComerciosSumAggregateInputType = {
    idcomercio?: true
    descuento?: true
  }

  export type ComerciosMinAggregateInputType = {
    idcomercio?: true
    comercio?: true
    rubro?: true
    direccion?: true
    beneficio?: true
    localidad?: true
    estado?: true
    descuento?: true
  }

  export type ComerciosMaxAggregateInputType = {
    idcomercio?: true
    comercio?: true
    rubro?: true
    direccion?: true
    beneficio?: true
    localidad?: true
    estado?: true
    descuento?: true
  }

  export type ComerciosCountAggregateInputType = {
    idcomercio?: true
    comercio?: true
    rubro?: true
    direccion?: true
    beneficio?: true
    localidad?: true
    estado?: true
    descuento?: true
    _all?: true
  }

  export type ComerciosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which comercios to aggregate.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comercios
    **/
    _count?: true | ComerciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComerciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComerciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComerciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComerciosMaxAggregateInputType
  }

  export type GetComerciosAggregateType<T extends ComerciosAggregateArgs> = {
        [P in keyof T & keyof AggregateComercios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComercios[P]>
      : GetScalarType<T[P], AggregateComercios[P]>
  }




  export type comerciosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: comerciosWhereInput
    orderBy?: comerciosOrderByWithAggregationInput | comerciosOrderByWithAggregationInput[]
    by: ComerciosScalarFieldEnum[] | ComerciosScalarFieldEnum
    having?: comerciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComerciosCountAggregateInputType | true
    _avg?: ComerciosAvgAggregateInputType
    _sum?: ComerciosSumAggregateInputType
    _min?: ComerciosMinAggregateInputType
    _max?: ComerciosMaxAggregateInputType
  }


  export type ComerciosGroupByOutputType = {
    idcomercio: number
    comercio: string | null
    rubro: string | null
    direccion: string | null
    beneficio: string | null
    localidad: string | null
    estado: boolean | null
    descuento: number | null
    _count: ComerciosCountAggregateOutputType | null
    _avg: ComerciosAvgAggregateOutputType | null
    _sum: ComerciosSumAggregateOutputType | null
    _min: ComerciosMinAggregateOutputType | null
    _max: ComerciosMaxAggregateOutputType | null
  }

  type GetComerciosGroupByPayload<T extends comerciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComerciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComerciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComerciosGroupByOutputType[P]>
            : GetScalarType<T[P], ComerciosGroupByOutputType[P]>
        }
      >
    >


  export type comerciosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcomercio?: boolean
    comercio?: boolean
    rubro?: boolean
    direccion?: boolean
    beneficio?: boolean
    localidad?: boolean
    estado?: boolean
    descuento?: boolean
  }, ExtArgs["result"]["comercios"]>

  export type comerciosSelectScalar = {
    idcomercio?: boolean
    comercio?: boolean
    rubro?: boolean
    direccion?: boolean
    beneficio?: boolean
    localidad?: boolean
    estado?: boolean
    descuento?: boolean
  }


  type comerciosGetPayload<S extends boolean | null | undefined | comerciosArgs> = $Types.GetResult<comerciosPayload, S>

  type comerciosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<comerciosFindManyArgs, 'select' | 'include'> & {
      select?: ComerciosCountAggregateInputType | true
    }

  export interface comerciosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comercios'], meta: { name: 'comercios' } }
    /**
     * Find zero or one Comercios that matches the filter.
     * @param {comerciosFindUniqueArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends comerciosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, comerciosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'comercios'> extends True ? Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Comercios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {comerciosFindUniqueOrThrowArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends comerciosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comerciosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindFirstArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends comerciosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, comerciosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'comercios'> extends True ? Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Comercios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindFirstOrThrowArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends comerciosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comerciosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comercios
     * const comercios = await prisma.comercios.findMany()
     * 
     * // Get first 10 Comercios
     * const comercios = await prisma.comercios.findMany({ take: 10 })
     * 
     * // Only select the `idcomercio`
     * const comerciosWithIdcomercioOnly = await prisma.comercios.findMany({ select: { idcomercio: true } })
     * 
    **/
    findMany<T extends comerciosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comerciosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Comercios.
     * @param {comerciosCreateArgs} args - Arguments to create a Comercios.
     * @example
     * // Create one Comercios
     * const Comercios = await prisma.comercios.create({
     *   data: {
     *     // ... data to create a Comercios
     *   }
     * })
     * 
    **/
    create<T extends comerciosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, comerciosCreateArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Comercios.
     *     @param {comerciosCreateManyArgs} args - Arguments to create many Comercios.
     *     @example
     *     // Create many Comercios
     *     const comercios = await prisma.comercios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends comerciosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comerciosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comercios.
     * @param {comerciosDeleteArgs} args - Arguments to delete one Comercios.
     * @example
     * // Delete one Comercios
     * const Comercios = await prisma.comercios.delete({
     *   where: {
     *     // ... filter to delete one Comercios
     *   }
     * })
     * 
    **/
    delete<T extends comerciosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, comerciosDeleteArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Comercios.
     * @param {comerciosUpdateArgs} args - Arguments to update one Comercios.
     * @example
     * // Update one Comercios
     * const comercios = await prisma.comercios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends comerciosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, comerciosUpdateArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Comercios.
     * @param {comerciosDeleteManyArgs} args - Arguments to filter Comercios to delete.
     * @example
     * // Delete a few Comercios
     * const { count } = await prisma.comercios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends comerciosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comerciosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comercios
     * const comercios = await prisma.comercios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends comerciosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, comerciosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comercios.
     * @param {comerciosUpsertArgs} args - Arguments to update or create a Comercios.
     * @example
     * // Update or create a Comercios
     * const comercios = await prisma.comercios.upsert({
     *   create: {
     *     // ... data to create a Comercios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comercios we want to update
     *   }
     * })
    **/
    upsert<T extends comerciosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, comerciosUpsertArgs<ExtArgs>>
    ): Prisma__comerciosClient<$Types.GetResult<comerciosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosCountArgs} args - Arguments to filter Comercios to count.
     * @example
     * // Count the number of Comercios
     * const count = await prisma.comercios.count({
     *   where: {
     *     // ... the filter for the Comercios we want to count
     *   }
     * })
    **/
    count<T extends comerciosCountArgs>(
      args?: Subset<T, comerciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComerciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComerciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComerciosAggregateArgs>(args: Subset<T, ComerciosAggregateArgs>): Prisma.PrismaPromise<GetComerciosAggregateType<T>>

    /**
     * Group by Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosGroupByArgs} args - Group by arguments.
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
      T extends comerciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comerciosGroupByArgs['orderBy'] }
        : { orderBy?: comerciosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comerciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComerciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for comercios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__comerciosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * comercios base type for findUnique actions
   */
  export type comerciosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where: comerciosWhereUniqueInput
  }

  /**
   * comercios findUnique
   */
  export interface comerciosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends comerciosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comercios findUniqueOrThrow
   */
  export type comerciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where: comerciosWhereUniqueInput
  }


  /**
   * comercios base type for findFirst actions
   */
  export type comerciosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comercios.
     */
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }

  /**
   * comercios findFirst
   */
  export interface comerciosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends comerciosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comercios findFirstOrThrow
   */
  export type comerciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comercios.
     */
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }


  /**
   * comercios findMany
   */
  export type comerciosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }


  /**
   * comercios create
   */
  export type comerciosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * The data needed to create a comercios.
     */
    data?: XOR<comerciosCreateInput, comerciosUncheckedCreateInput>
  }


  /**
   * comercios createMany
   */
  export type comerciosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comercios.
     */
    data: comerciosCreateManyInput | comerciosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * comercios update
   */
  export type comerciosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * The data needed to update a comercios.
     */
    data: XOR<comerciosUpdateInput, comerciosUncheckedUpdateInput>
    /**
     * Choose, which comercios to update.
     */
    where: comerciosWhereUniqueInput
  }


  /**
   * comercios updateMany
   */
  export type comerciosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comercios.
     */
    data: XOR<comerciosUpdateManyMutationInput, comerciosUncheckedUpdateManyInput>
    /**
     * Filter which comercios to update
     */
    where?: comerciosWhereInput
  }


  /**
   * comercios upsert
   */
  export type comerciosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * The filter to search for the comercios to update in case it exists.
     */
    where: comerciosWhereUniqueInput
    /**
     * In case the comercios found by the `where` argument doesn't exist, create a new comercios with this data.
     */
    create: XOR<comerciosCreateInput, comerciosUncheckedCreateInput>
    /**
     * In case the comercios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comerciosUpdateInput, comerciosUncheckedUpdateInput>
  }


  /**
   * comercios delete
   */
  export type comerciosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Filter which comercios to delete.
     */
    where: comerciosWhereUniqueInput
  }


  /**
   * comercios deleteMany
   */
  export type comerciosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which comercios to delete
     */
    where?: comerciosWhereInput
  }


  /**
   * comercios without action
   */
  export type comerciosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
  }



  /**
   * Model connac
   */


  export type AggregateConnac = {
    _count: ConnacCountAggregateOutputType | null
    _avg: ConnacAvgAggregateOutputType | null
    _sum: ConnacSumAggregateOutputType | null
    _min: ConnacMinAggregateOutputType | null
    _max: ConnacMaxAggregateOutputType | null
  }

  export type ConnacAvgAggregateOutputType = {
    idconvenio: number | null
  }

  export type ConnacSumAggregateOutputType = {
    idconvenio: number | null
  }

  export type ConnacMinAggregateOutputType = {
    idconvenio: number | null
    convenio: string | null
    estado: string | null
    pagina: string | null
  }

  export type ConnacMaxAggregateOutputType = {
    idconvenio: number | null
    convenio: string | null
    estado: string | null
    pagina: string | null
  }

  export type ConnacCountAggregateOutputType = {
    idconvenio: number
    convenio: number
    estado: number
    pagina: number
    _all: number
  }


  export type ConnacAvgAggregateInputType = {
    idconvenio?: true
  }

  export type ConnacSumAggregateInputType = {
    idconvenio?: true
  }

  export type ConnacMinAggregateInputType = {
    idconvenio?: true
    convenio?: true
    estado?: true
    pagina?: true
  }

  export type ConnacMaxAggregateInputType = {
    idconvenio?: true
    convenio?: true
    estado?: true
    pagina?: true
  }

  export type ConnacCountAggregateInputType = {
    idconvenio?: true
    convenio?: true
    estado?: true
    pagina?: true
    _all?: true
  }

  export type ConnacAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which connac to aggregate.
     */
    where?: connacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connacs to fetch.
     */
    orderBy?: connacOrderByWithRelationInput | connacOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: connacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connacs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connacs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned connacs
    **/
    _count?: true | ConnacCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnacAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnacSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnacMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnacMaxAggregateInputType
  }

  export type GetConnacAggregateType<T extends ConnacAggregateArgs> = {
        [P in keyof T & keyof AggregateConnac]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnac[P]>
      : GetScalarType<T[P], AggregateConnac[P]>
  }




  export type connacGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: connacWhereInput
    orderBy?: connacOrderByWithAggregationInput | connacOrderByWithAggregationInput[]
    by: ConnacScalarFieldEnum[] | ConnacScalarFieldEnum
    having?: connacScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnacCountAggregateInputType | true
    _avg?: ConnacAvgAggregateInputType
    _sum?: ConnacSumAggregateInputType
    _min?: ConnacMinAggregateInputType
    _max?: ConnacMaxAggregateInputType
  }


  export type ConnacGroupByOutputType = {
    idconvenio: number
    convenio: string | null
    estado: string | null
    pagina: string | null
    _count: ConnacCountAggregateOutputType | null
    _avg: ConnacAvgAggregateOutputType | null
    _sum: ConnacSumAggregateOutputType | null
    _min: ConnacMinAggregateOutputType | null
    _max: ConnacMaxAggregateOutputType | null
  }

  type GetConnacGroupByPayload<T extends connacGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnacGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnacGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnacGroupByOutputType[P]>
            : GetScalarType<T[P], ConnacGroupByOutputType[P]>
        }
      >
    >


  export type connacSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idconvenio?: boolean
    convenio?: boolean
    estado?: boolean
    pagina?: boolean
  }, ExtArgs["result"]["connac"]>

  export type connacSelectScalar = {
    idconvenio?: boolean
    convenio?: boolean
    estado?: boolean
    pagina?: boolean
  }


  type connacGetPayload<S extends boolean | null | undefined | connacArgs> = $Types.GetResult<connacPayload, S>

  type connacCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<connacFindManyArgs, 'select' | 'include'> & {
      select?: ConnacCountAggregateInputType | true
    }

  export interface connacDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['connac'], meta: { name: 'connac' } }
    /**
     * Find zero or one Connac that matches the filter.
     * @param {connacFindUniqueArgs} args - Arguments to find a Connac
     * @example
     * // Get one Connac
     * const connac = await prisma.connac.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends connacFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, connacFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'connac'> extends True ? Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Connac that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {connacFindUniqueOrThrowArgs} args - Arguments to find a Connac
     * @example
     * // Get one Connac
     * const connac = await prisma.connac.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends connacFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, connacFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Connac that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacFindFirstArgs} args - Arguments to find a Connac
     * @example
     * // Get one Connac
     * const connac = await prisma.connac.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends connacFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, connacFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'connac'> extends True ? Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Connac that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacFindFirstOrThrowArgs} args - Arguments to find a Connac
     * @example
     * // Get one Connac
     * const connac = await prisma.connac.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends connacFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, connacFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Connacs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connacs
     * const connacs = await prisma.connac.findMany()
     * 
     * // Get first 10 Connacs
     * const connacs = await prisma.connac.findMany({ take: 10 })
     * 
     * // Only select the `idconvenio`
     * const connacWithIdconvenioOnly = await prisma.connac.findMany({ select: { idconvenio: true } })
     * 
    **/
    findMany<T extends connacFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, connacFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<connacPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Connac.
     * @param {connacCreateArgs} args - Arguments to create a Connac.
     * @example
     * // Create one Connac
     * const Connac = await prisma.connac.create({
     *   data: {
     *     // ... data to create a Connac
     *   }
     * })
     * 
    **/
    create<T extends connacCreateArgs<ExtArgs>>(
      args: SelectSubset<T, connacCreateArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Connacs.
     *     @param {connacCreateManyArgs} args - Arguments to create many Connacs.
     *     @example
     *     // Create many Connacs
     *     const connac = await prisma.connac.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends connacCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, connacCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Connac.
     * @param {connacDeleteArgs} args - Arguments to delete one Connac.
     * @example
     * // Delete one Connac
     * const Connac = await prisma.connac.delete({
     *   where: {
     *     // ... filter to delete one Connac
     *   }
     * })
     * 
    **/
    delete<T extends connacDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, connacDeleteArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Connac.
     * @param {connacUpdateArgs} args - Arguments to update one Connac.
     * @example
     * // Update one Connac
     * const connac = await prisma.connac.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends connacUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, connacUpdateArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Connacs.
     * @param {connacDeleteManyArgs} args - Arguments to filter Connacs to delete.
     * @example
     * // Delete a few Connacs
     * const { count } = await prisma.connac.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends connacDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, connacDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connacs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connacs
     * const connac = await prisma.connac.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends connacUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, connacUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Connac.
     * @param {connacUpsertArgs} args - Arguments to update or create a Connac.
     * @example
     * // Update or create a Connac
     * const connac = await prisma.connac.upsert({
     *   create: {
     *     // ... data to create a Connac
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connac we want to update
     *   }
     * })
    **/
    upsert<T extends connacUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, connacUpsertArgs<ExtArgs>>
    ): Prisma__connacClient<$Types.GetResult<connacPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Connacs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacCountArgs} args - Arguments to filter Connacs to count.
     * @example
     * // Count the number of Connacs
     * const count = await prisma.connac.count({
     *   where: {
     *     // ... the filter for the Connacs we want to count
     *   }
     * })
    **/
    count<T extends connacCountArgs>(
      args?: Subset<T, connacCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnacCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connac.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnacAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnacAggregateArgs>(args: Subset<T, ConnacAggregateArgs>): Prisma.PrismaPromise<GetConnacAggregateType<T>>

    /**
     * Group by Connac.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connacGroupByArgs} args - Group by arguments.
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
      T extends connacGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: connacGroupByArgs['orderBy'] }
        : { orderBy?: connacGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, connacGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnacGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for connac.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__connacClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * connac base type for findUnique actions
   */
  export type connacFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter, which connac to fetch.
     */
    where: connacWhereUniqueInput
  }

  /**
   * connac findUnique
   */
  export interface connacFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends connacFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * connac findUniqueOrThrow
   */
  export type connacFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter, which connac to fetch.
     */
    where: connacWhereUniqueInput
  }


  /**
   * connac base type for findFirst actions
   */
  export type connacFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter, which connac to fetch.
     */
    where?: connacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connacs to fetch.
     */
    orderBy?: connacOrderByWithRelationInput | connacOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for connacs.
     */
    cursor?: connacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connacs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connacs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of connacs.
     */
    distinct?: ConnacScalarFieldEnum | ConnacScalarFieldEnum[]
  }

  /**
   * connac findFirst
   */
  export interface connacFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends connacFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * connac findFirstOrThrow
   */
  export type connacFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter, which connac to fetch.
     */
    where?: connacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connacs to fetch.
     */
    orderBy?: connacOrderByWithRelationInput | connacOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for connacs.
     */
    cursor?: connacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connacs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connacs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of connacs.
     */
    distinct?: ConnacScalarFieldEnum | ConnacScalarFieldEnum[]
  }


  /**
   * connac findMany
   */
  export type connacFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter, which connacs to fetch.
     */
    where?: connacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connacs to fetch.
     */
    orderBy?: connacOrderByWithRelationInput | connacOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing connacs.
     */
    cursor?: connacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connacs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connacs.
     */
    skip?: number
    distinct?: ConnacScalarFieldEnum | ConnacScalarFieldEnum[]
  }


  /**
   * connac create
   */
  export type connacCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * The data needed to create a connac.
     */
    data?: XOR<connacCreateInput, connacUncheckedCreateInput>
  }


  /**
   * connac createMany
   */
  export type connacCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many connacs.
     */
    data: connacCreateManyInput | connacCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * connac update
   */
  export type connacUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * The data needed to update a connac.
     */
    data: XOR<connacUpdateInput, connacUncheckedUpdateInput>
    /**
     * Choose, which connac to update.
     */
    where: connacWhereUniqueInput
  }


  /**
   * connac updateMany
   */
  export type connacUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update connacs.
     */
    data: XOR<connacUpdateManyMutationInput, connacUncheckedUpdateManyInput>
    /**
     * Filter which connacs to update
     */
    where?: connacWhereInput
  }


  /**
   * connac upsert
   */
  export type connacUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * The filter to search for the connac to update in case it exists.
     */
    where: connacWhereUniqueInput
    /**
     * In case the connac found by the `where` argument doesn't exist, create a new connac with this data.
     */
    create: XOR<connacCreateInput, connacUncheckedCreateInput>
    /**
     * In case the connac was found with the provided `where` argument, update it with this data.
     */
    update: XOR<connacUpdateInput, connacUncheckedUpdateInput>
  }


  /**
   * connac delete
   */
  export type connacDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
    /**
     * Filter which connac to delete.
     */
    where: connacWhereUniqueInput
  }


  /**
   * connac deleteMany
   */
  export type connacDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which connacs to delete
     */
    where?: connacWhereInput
  }


  /**
   * connac without action
   */
  export type connacArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connac
     */
    select?: connacSelect<ExtArgs> | null
  }



  /**
   * Model ganadores
   */


  export type AggregateGanadores = {
    _count: GanadoresCountAggregateOutputType | null
    _avg: GanadoresAvgAggregateOutputType | null
    _sum: GanadoresSumAggregateOutputType | null
    _min: GanadoresMinAggregateOutputType | null
    _max: GanadoresMaxAggregateOutputType | null
  }

  export type GanadoresAvgAggregateOutputType = {
    idganador: number | null
    premio: number | null
    dni: number | null
  }

  export type GanadoresSumAggregateOutputType = {
    idganador: number | null
    premio: number | null
    dni: number | null
  }

  export type GanadoresMinAggregateOutputType = {
    idganador: number | null
    participante: string | null
    premio: number | null
    fecha: Date | null
    telefono: string | null
    dni: number | null
  }

  export type GanadoresMaxAggregateOutputType = {
    idganador: number | null
    participante: string | null
    premio: number | null
    fecha: Date | null
    telefono: string | null
    dni: number | null
  }

  export type GanadoresCountAggregateOutputType = {
    idganador: number
    participante: number
    premio: number
    fecha: number
    telefono: number
    dni: number
    _all: number
  }


  export type GanadoresAvgAggregateInputType = {
    idganador?: true
    premio?: true
    dni?: true
  }

  export type GanadoresSumAggregateInputType = {
    idganador?: true
    premio?: true
    dni?: true
  }

  export type GanadoresMinAggregateInputType = {
    idganador?: true
    participante?: true
    premio?: true
    fecha?: true
    telefono?: true
    dni?: true
  }

  export type GanadoresMaxAggregateInputType = {
    idganador?: true
    participante?: true
    premio?: true
    fecha?: true
    telefono?: true
    dni?: true
  }

  export type GanadoresCountAggregateInputType = {
    idganador?: true
    participante?: true
    premio?: true
    fecha?: true
    telefono?: true
    dni?: true
    _all?: true
  }

  export type GanadoresAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ganadores to aggregate.
     */
    where?: ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ganadores to fetch.
     */
    orderBy?: ganadoresOrderByWithRelationInput | ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ganadores
    **/
    _count?: true | GanadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GanadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GanadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GanadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GanadoresMaxAggregateInputType
  }

  export type GetGanadoresAggregateType<T extends GanadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateGanadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGanadores[P]>
      : GetScalarType<T[P], AggregateGanadores[P]>
  }




  export type ganadoresGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ganadoresWhereInput
    orderBy?: ganadoresOrderByWithAggregationInput | ganadoresOrderByWithAggregationInput[]
    by: GanadoresScalarFieldEnum[] | GanadoresScalarFieldEnum
    having?: ganadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GanadoresCountAggregateInputType | true
    _avg?: GanadoresAvgAggregateInputType
    _sum?: GanadoresSumAggregateInputType
    _min?: GanadoresMinAggregateInputType
    _max?: GanadoresMaxAggregateInputType
  }


  export type GanadoresGroupByOutputType = {
    idganador: number
    participante: string | null
    premio: number | null
    fecha: Date | null
    telefono: string | null
    dni: number | null
    _count: GanadoresCountAggregateOutputType | null
    _avg: GanadoresAvgAggregateOutputType | null
    _sum: GanadoresSumAggregateOutputType | null
    _min: GanadoresMinAggregateOutputType | null
    _max: GanadoresMaxAggregateOutputType | null
  }

  type GetGanadoresGroupByPayload<T extends ganadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GanadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GanadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GanadoresGroupByOutputType[P]>
            : GetScalarType<T[P], GanadoresGroupByOutputType[P]>
        }
      >
    >


  export type ganadoresSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idganador?: boolean
    participante?: boolean
    premio?: boolean
    fecha?: boolean
    telefono?: boolean
    dni?: boolean
  }, ExtArgs["result"]["ganadores"]>

  export type ganadoresSelectScalar = {
    idganador?: boolean
    participante?: boolean
    premio?: boolean
    fecha?: boolean
    telefono?: boolean
    dni?: boolean
  }


  type ganadoresGetPayload<S extends boolean | null | undefined | ganadoresArgs> = $Types.GetResult<ganadoresPayload, S>

  type ganadoresCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ganadoresFindManyArgs, 'select' | 'include'> & {
      select?: GanadoresCountAggregateInputType | true
    }

  export interface ganadoresDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ganadores'], meta: { name: 'ganadores' } }
    /**
     * Find zero or one Ganadores that matches the filter.
     * @param {ganadoresFindUniqueArgs} args - Arguments to find a Ganadores
     * @example
     * // Get one Ganadores
     * const ganadores = await prisma.ganadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ganadoresFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ganadoresFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ganadores'> extends True ? Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Ganadores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ganadoresFindUniqueOrThrowArgs} args - Arguments to find a Ganadores
     * @example
     * // Get one Ganadores
     * const ganadores = await prisma.ganadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ganadoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ganadoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Ganadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresFindFirstArgs} args - Arguments to find a Ganadores
     * @example
     * // Get one Ganadores
     * const ganadores = await prisma.ganadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ganadoresFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ganadoresFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ganadores'> extends True ? Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Ganadores that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresFindFirstOrThrowArgs} args - Arguments to find a Ganadores
     * @example
     * // Get one Ganadores
     * const ganadores = await prisma.ganadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ganadoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ganadoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Ganadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ganadores
     * const ganadores = await prisma.ganadores.findMany()
     * 
     * // Get first 10 Ganadores
     * const ganadores = await prisma.ganadores.findMany({ take: 10 })
     * 
     * // Only select the `idganador`
     * const ganadoresWithIdganadorOnly = await prisma.ganadores.findMany({ select: { idganador: true } })
     * 
    **/
    findMany<T extends ganadoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ganadoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Ganadores.
     * @param {ganadoresCreateArgs} args - Arguments to create a Ganadores.
     * @example
     * // Create one Ganadores
     * const Ganadores = await prisma.ganadores.create({
     *   data: {
     *     // ... data to create a Ganadores
     *   }
     * })
     * 
    **/
    create<T extends ganadoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ganadoresCreateArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Ganadores.
     *     @param {ganadoresCreateManyArgs} args - Arguments to create many Ganadores.
     *     @example
     *     // Create many Ganadores
     *     const ganadores = await prisma.ganadores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ganadoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ganadoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ganadores.
     * @param {ganadoresDeleteArgs} args - Arguments to delete one Ganadores.
     * @example
     * // Delete one Ganadores
     * const Ganadores = await prisma.ganadores.delete({
     *   where: {
     *     // ... filter to delete one Ganadores
     *   }
     * })
     * 
    **/
    delete<T extends ganadoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ganadoresDeleteArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Ganadores.
     * @param {ganadoresUpdateArgs} args - Arguments to update one Ganadores.
     * @example
     * // Update one Ganadores
     * const ganadores = await prisma.ganadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ganadoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ganadoresUpdateArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Ganadores.
     * @param {ganadoresDeleteManyArgs} args - Arguments to filter Ganadores to delete.
     * @example
     * // Delete a few Ganadores
     * const { count } = await prisma.ganadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ganadoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ganadoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ganadores
     * const ganadores = await prisma.ganadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ganadoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ganadoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ganadores.
     * @param {ganadoresUpsertArgs} args - Arguments to update or create a Ganadores.
     * @example
     * // Update or create a Ganadores
     * const ganadores = await prisma.ganadores.upsert({
     *   create: {
     *     // ... data to create a Ganadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ganadores we want to update
     *   }
     * })
    **/
    upsert<T extends ganadoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ganadoresUpsertArgs<ExtArgs>>
    ): Prisma__ganadoresClient<$Types.GetResult<ganadoresPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresCountArgs} args - Arguments to filter Ganadores to count.
     * @example
     * // Count the number of Ganadores
     * const count = await prisma.ganadores.count({
     *   where: {
     *     // ... the filter for the Ganadores we want to count
     *   }
     * })
    **/
    count<T extends ganadoresCountArgs>(
      args?: Subset<T, ganadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GanadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GanadoresAggregateArgs>(args: Subset<T, GanadoresAggregateArgs>): Prisma.PrismaPromise<GetGanadoresAggregateType<T>>

    /**
     * Group by Ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ganadoresGroupByArgs} args - Group by arguments.
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
      T extends ganadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ganadoresGroupByArgs['orderBy'] }
        : { orderBy?: ganadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ganadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGanadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ganadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ganadoresClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * ganadores base type for findUnique actions
   */
  export type ganadoresFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which ganadores to fetch.
     */
    where: ganadoresWhereUniqueInput
  }

  /**
   * ganadores findUnique
   */
  export interface ganadoresFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ganadoresFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ganadores findUniqueOrThrow
   */
  export type ganadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which ganadores to fetch.
     */
    where: ganadoresWhereUniqueInput
  }


  /**
   * ganadores base type for findFirst actions
   */
  export type ganadoresFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which ganadores to fetch.
     */
    where?: ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ganadores to fetch.
     */
    orderBy?: ganadoresOrderByWithRelationInput | ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ganadores.
     */
    cursor?: ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ganadores.
     */
    distinct?: GanadoresScalarFieldEnum | GanadoresScalarFieldEnum[]
  }

  /**
   * ganadores findFirst
   */
  export interface ganadoresFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ganadoresFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ganadores findFirstOrThrow
   */
  export type ganadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which ganadores to fetch.
     */
    where?: ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ganadores to fetch.
     */
    orderBy?: ganadoresOrderByWithRelationInput | ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ganadores.
     */
    cursor?: ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ganadores.
     */
    distinct?: GanadoresScalarFieldEnum | GanadoresScalarFieldEnum[]
  }


  /**
   * ganadores findMany
   */
  export type ganadoresFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which ganadores to fetch.
     */
    where?: ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ganadores to fetch.
     */
    orderBy?: ganadoresOrderByWithRelationInput | ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ganadores.
     */
    cursor?: ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ganadores.
     */
    skip?: number
    distinct?: GanadoresScalarFieldEnum | GanadoresScalarFieldEnum[]
  }


  /**
   * ganadores create
   */
  export type ganadoresCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * The data needed to create a ganadores.
     */
    data?: XOR<ganadoresCreateInput, ganadoresUncheckedCreateInput>
  }


  /**
   * ganadores createMany
   */
  export type ganadoresCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ganadores.
     */
    data: ganadoresCreateManyInput | ganadoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ganadores update
   */
  export type ganadoresUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * The data needed to update a ganadores.
     */
    data: XOR<ganadoresUpdateInput, ganadoresUncheckedUpdateInput>
    /**
     * Choose, which ganadores to update.
     */
    where: ganadoresWhereUniqueInput
  }


  /**
   * ganadores updateMany
   */
  export type ganadoresUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ganadores.
     */
    data: XOR<ganadoresUpdateManyMutationInput, ganadoresUncheckedUpdateManyInput>
    /**
     * Filter which ganadores to update
     */
    where?: ganadoresWhereInput
  }


  /**
   * ganadores upsert
   */
  export type ganadoresUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * The filter to search for the ganadores to update in case it exists.
     */
    where: ganadoresWhereUniqueInput
    /**
     * In case the ganadores found by the `where` argument doesn't exist, create a new ganadores with this data.
     */
    create: XOR<ganadoresCreateInput, ganadoresUncheckedCreateInput>
    /**
     * In case the ganadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ganadoresUpdateInput, ganadoresUncheckedUpdateInput>
  }


  /**
   * ganadores delete
   */
  export type ganadoresDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
    /**
     * Filter which ganadores to delete.
     */
    where: ganadoresWhereUniqueInput
  }


  /**
   * ganadores deleteMany
   */
  export type ganadoresDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ganadores to delete
     */
    where?: ganadoresWhereInput
  }


  /**
   * ganadores without action
   */
  export type ganadoresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ganadores
     */
    select?: ganadoresSelect<ExtArgs> | null
  }



  /**
   * Model participantes_sorteo
   */


  export type AggregateParticipantes_sorteo = {
    _count: Participantes_sorteoCountAggregateOutputType | null
    _avg: Participantes_sorteoAvgAggregateOutputType | null
    _sum: Participantes_sorteoSumAggregateOutputType | null
    _min: Participantes_sorteoMinAggregateOutputType | null
    _max: Participantes_sorteoMaxAggregateOutputType | null
  }

  export type Participantes_sorteoAvgAggregateOutputType = {
    dni: number | null
    doble: number | null
    estado: number | null
    idparticipante: number | null
  }

  export type Participantes_sorteoSumAggregateOutputType = {
    dni: number | null
    doble: number | null
    estado: number | null
    idparticipante: number | null
  }

  export type Participantes_sorteoMinAggregateOutputType = {
    participante: string | null
    dni: number | null
    doble: number | null
    estado: number | null
    telefono: string | null
    idparticipante: number | null
  }

  export type Participantes_sorteoMaxAggregateOutputType = {
    participante: string | null
    dni: number | null
    doble: number | null
    estado: number | null
    telefono: string | null
    idparticipante: number | null
  }

  export type Participantes_sorteoCountAggregateOutputType = {
    participante: number
    dni: number
    doble: number
    estado: number
    telefono: number
    idparticipante: number
    _all: number
  }


  export type Participantes_sorteoAvgAggregateInputType = {
    dni?: true
    doble?: true
    estado?: true
    idparticipante?: true
  }

  export type Participantes_sorteoSumAggregateInputType = {
    dni?: true
    doble?: true
    estado?: true
    idparticipante?: true
  }

  export type Participantes_sorteoMinAggregateInputType = {
    participante?: true
    dni?: true
    doble?: true
    estado?: true
    telefono?: true
    idparticipante?: true
  }

  export type Participantes_sorteoMaxAggregateInputType = {
    participante?: true
    dni?: true
    doble?: true
    estado?: true
    telefono?: true
    idparticipante?: true
  }

  export type Participantes_sorteoCountAggregateInputType = {
    participante?: true
    dni?: true
    doble?: true
    estado?: true
    telefono?: true
    idparticipante?: true
    _all?: true
  }

  export type Participantes_sorteoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which participantes_sorteo to aggregate.
     */
    where?: participantes_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes_sorteos to fetch.
     */
    orderBy?: participantes_sorteoOrderByWithRelationInput | participantes_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participantes_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participantes_sorteos
    **/
    _count?: true | Participantes_sorteoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Participantes_sorteoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Participantes_sorteoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Participantes_sorteoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Participantes_sorteoMaxAggregateInputType
  }

  export type GetParticipantes_sorteoAggregateType<T extends Participantes_sorteoAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantes_sorteo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantes_sorteo[P]>
      : GetScalarType<T[P], AggregateParticipantes_sorteo[P]>
  }




  export type participantes_sorteoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: participantes_sorteoWhereInput
    orderBy?: participantes_sorteoOrderByWithAggregationInput | participantes_sorteoOrderByWithAggregationInput[]
    by: Participantes_sorteoScalarFieldEnum[] | Participantes_sorteoScalarFieldEnum
    having?: participantes_sorteoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Participantes_sorteoCountAggregateInputType | true
    _avg?: Participantes_sorteoAvgAggregateInputType
    _sum?: Participantes_sorteoSumAggregateInputType
    _min?: Participantes_sorteoMinAggregateInputType
    _max?: Participantes_sorteoMaxAggregateInputType
  }


  export type Participantes_sorteoGroupByOutputType = {
    participante: string | null
    dni: number | null
    doble: number
    estado: number
    telefono: string | null
    idparticipante: number
    _count: Participantes_sorteoCountAggregateOutputType | null
    _avg: Participantes_sorteoAvgAggregateOutputType | null
    _sum: Participantes_sorteoSumAggregateOutputType | null
    _min: Participantes_sorteoMinAggregateOutputType | null
    _max: Participantes_sorteoMaxAggregateOutputType | null
  }

  type GetParticipantes_sorteoGroupByPayload<T extends participantes_sorteoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Participantes_sorteoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Participantes_sorteoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Participantes_sorteoGroupByOutputType[P]>
            : GetScalarType<T[P], Participantes_sorteoGroupByOutputType[P]>
        }
      >
    >


  export type participantes_sorteoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participante?: boolean
    dni?: boolean
    doble?: boolean
    estado?: boolean
    telefono?: boolean
    idparticipante?: boolean
  }, ExtArgs["result"]["participantes_sorteo"]>

  export type participantes_sorteoSelectScalar = {
    participante?: boolean
    dni?: boolean
    doble?: boolean
    estado?: boolean
    telefono?: boolean
    idparticipante?: boolean
  }


  type participantes_sorteoGetPayload<S extends boolean | null | undefined | participantes_sorteoArgs> = $Types.GetResult<participantes_sorteoPayload, S>

  type participantes_sorteoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<participantes_sorteoFindManyArgs, 'select' | 'include'> & {
      select?: Participantes_sorteoCountAggregateInputType | true
    }

  export interface participantes_sorteoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participantes_sorteo'], meta: { name: 'participantes_sorteo' } }
    /**
     * Find zero or one Participantes_sorteo that matches the filter.
     * @param {participantes_sorteoFindUniqueArgs} args - Arguments to find a Participantes_sorteo
     * @example
     * // Get one Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends participantes_sorteoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, participantes_sorteoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'participantes_sorteo'> extends True ? Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Participantes_sorteo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {participantes_sorteoFindUniqueOrThrowArgs} args - Arguments to find a Participantes_sorteo
     * @example
     * // Get one Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends participantes_sorteoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, participantes_sorteoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Participantes_sorteo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoFindFirstArgs} args - Arguments to find a Participantes_sorteo
     * @example
     * // Get one Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends participantes_sorteoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, participantes_sorteoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'participantes_sorteo'> extends True ? Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Participantes_sorteo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoFindFirstOrThrowArgs} args - Arguments to find a Participantes_sorteo
     * @example
     * // Get one Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends participantes_sorteoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, participantes_sorteoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Participantes_sorteos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes_sorteos
     * const participantes_sorteos = await prisma.participantes_sorteo.findMany()
     * 
     * // Get first 10 Participantes_sorteos
     * const participantes_sorteos = await prisma.participantes_sorteo.findMany({ take: 10 })
     * 
     * // Only select the `participante`
     * const participantes_sorteoWithParticipanteOnly = await prisma.participantes_sorteo.findMany({ select: { participante: true } })
     * 
    **/
    findMany<T extends participantes_sorteoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, participantes_sorteoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Participantes_sorteo.
     * @param {participantes_sorteoCreateArgs} args - Arguments to create a Participantes_sorteo.
     * @example
     * // Create one Participantes_sorteo
     * const Participantes_sorteo = await prisma.participantes_sorteo.create({
     *   data: {
     *     // ... data to create a Participantes_sorteo
     *   }
     * })
     * 
    **/
    create<T extends participantes_sorteoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, participantes_sorteoCreateArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Participantes_sorteos.
     *     @param {participantes_sorteoCreateManyArgs} args - Arguments to create many Participantes_sorteos.
     *     @example
     *     // Create many Participantes_sorteos
     *     const participantes_sorteo = await prisma.participantes_sorteo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends participantes_sorteoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, participantes_sorteoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participantes_sorteo.
     * @param {participantes_sorteoDeleteArgs} args - Arguments to delete one Participantes_sorteo.
     * @example
     * // Delete one Participantes_sorteo
     * const Participantes_sorteo = await prisma.participantes_sorteo.delete({
     *   where: {
     *     // ... filter to delete one Participantes_sorteo
     *   }
     * })
     * 
    **/
    delete<T extends participantes_sorteoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, participantes_sorteoDeleteArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Participantes_sorteo.
     * @param {participantes_sorteoUpdateArgs} args - Arguments to update one Participantes_sorteo.
     * @example
     * // Update one Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends participantes_sorteoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, participantes_sorteoUpdateArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Participantes_sorteos.
     * @param {participantes_sorteoDeleteManyArgs} args - Arguments to filter Participantes_sorteos to delete.
     * @example
     * // Delete a few Participantes_sorteos
     * const { count } = await prisma.participantes_sorteo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends participantes_sorteoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, participantes_sorteoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes_sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes_sorteos
     * const participantes_sorteo = await prisma.participantes_sorteo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends participantes_sorteoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, participantes_sorteoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participantes_sorteo.
     * @param {participantes_sorteoUpsertArgs} args - Arguments to update or create a Participantes_sorteo.
     * @example
     * // Update or create a Participantes_sorteo
     * const participantes_sorteo = await prisma.participantes_sorteo.upsert({
     *   create: {
     *     // ... data to create a Participantes_sorteo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participantes_sorteo we want to update
     *   }
     * })
    **/
    upsert<T extends participantes_sorteoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, participantes_sorteoUpsertArgs<ExtArgs>>
    ): Prisma__participantes_sorteoClient<$Types.GetResult<participantes_sorteoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Participantes_sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoCountArgs} args - Arguments to filter Participantes_sorteos to count.
     * @example
     * // Count the number of Participantes_sorteos
     * const count = await prisma.participantes_sorteo.count({
     *   where: {
     *     // ... the filter for the Participantes_sorteos we want to count
     *   }
     * })
    **/
    count<T extends participantes_sorteoCountArgs>(
      args?: Subset<T, participantes_sorteoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Participantes_sorteoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participantes_sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Participantes_sorteoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Participantes_sorteoAggregateArgs>(args: Subset<T, Participantes_sorteoAggregateArgs>): Prisma.PrismaPromise<GetParticipantes_sorteoAggregateType<T>>

    /**
     * Group by Participantes_sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantes_sorteoGroupByArgs} args - Group by arguments.
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
      T extends participantes_sorteoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participantes_sorteoGroupByArgs['orderBy'] }
        : { orderBy?: participantes_sorteoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participantes_sorteoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantes_sorteoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for participantes_sorteo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__participantes_sorteoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * participantes_sorteo base type for findUnique actions
   */
  export type participantes_sorteoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which participantes_sorteo to fetch.
     */
    where: participantes_sorteoWhereUniqueInput
  }

  /**
   * participantes_sorteo findUnique
   */
  export interface participantes_sorteoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends participantes_sorteoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * participantes_sorteo findUniqueOrThrow
   */
  export type participantes_sorteoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which participantes_sorteo to fetch.
     */
    where: participantes_sorteoWhereUniqueInput
  }


  /**
   * participantes_sorteo base type for findFirst actions
   */
  export type participantes_sorteoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which participantes_sorteo to fetch.
     */
    where?: participantes_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes_sorteos to fetch.
     */
    orderBy?: participantes_sorteoOrderByWithRelationInput | participantes_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantes_sorteos.
     */
    cursor?: participantes_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantes_sorteos.
     */
    distinct?: Participantes_sorteoScalarFieldEnum | Participantes_sorteoScalarFieldEnum[]
  }

  /**
   * participantes_sorteo findFirst
   */
  export interface participantes_sorteoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends participantes_sorteoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * participantes_sorteo findFirstOrThrow
   */
  export type participantes_sorteoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which participantes_sorteo to fetch.
     */
    where?: participantes_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes_sorteos to fetch.
     */
    orderBy?: participantes_sorteoOrderByWithRelationInput | participantes_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantes_sorteos.
     */
    cursor?: participantes_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantes_sorteos.
     */
    distinct?: Participantes_sorteoScalarFieldEnum | Participantes_sorteoScalarFieldEnum[]
  }


  /**
   * participantes_sorteo findMany
   */
  export type participantes_sorteoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which participantes_sorteos to fetch.
     */
    where?: participantes_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes_sorteos to fetch.
     */
    orderBy?: participantes_sorteoOrderByWithRelationInput | participantes_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participantes_sorteos.
     */
    cursor?: participantes_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes_sorteos.
     */
    skip?: number
    distinct?: Participantes_sorteoScalarFieldEnum | Participantes_sorteoScalarFieldEnum[]
  }


  /**
   * participantes_sorteo create
   */
  export type participantes_sorteoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * The data needed to create a participantes_sorteo.
     */
    data?: XOR<participantes_sorteoCreateInput, participantes_sorteoUncheckedCreateInput>
  }


  /**
   * participantes_sorteo createMany
   */
  export type participantes_sorteoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participantes_sorteos.
     */
    data: participantes_sorteoCreateManyInput | participantes_sorteoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * participantes_sorteo update
   */
  export type participantes_sorteoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * The data needed to update a participantes_sorteo.
     */
    data: XOR<participantes_sorteoUpdateInput, participantes_sorteoUncheckedUpdateInput>
    /**
     * Choose, which participantes_sorteo to update.
     */
    where: participantes_sorteoWhereUniqueInput
  }


  /**
   * participantes_sorteo updateMany
   */
  export type participantes_sorteoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participantes_sorteos.
     */
    data: XOR<participantes_sorteoUpdateManyMutationInput, participantes_sorteoUncheckedUpdateManyInput>
    /**
     * Filter which participantes_sorteos to update
     */
    where?: participantes_sorteoWhereInput
  }


  /**
   * participantes_sorteo upsert
   */
  export type participantes_sorteoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * The filter to search for the participantes_sorteo to update in case it exists.
     */
    where: participantes_sorteoWhereUniqueInput
    /**
     * In case the participantes_sorteo found by the `where` argument doesn't exist, create a new participantes_sorteo with this data.
     */
    create: XOR<participantes_sorteoCreateInput, participantes_sorteoUncheckedCreateInput>
    /**
     * In case the participantes_sorteo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participantes_sorteoUpdateInput, participantes_sorteoUncheckedUpdateInput>
  }


  /**
   * participantes_sorteo delete
   */
  export type participantes_sorteoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
    /**
     * Filter which participantes_sorteo to delete.
     */
    where: participantes_sorteoWhereUniqueInput
  }


  /**
   * participantes_sorteo deleteMany
   */
  export type participantes_sorteoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which participantes_sorteos to delete
     */
    where?: participantes_sorteoWhereInput
  }


  /**
   * participantes_sorteo without action
   */
  export type participantes_sorteoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantes_sorteo
     */
    select?: participantes_sorteoSelect<ExtArgs> | null
  }



  /**
   * Model socios
   */


  export type AggregateSocios = {
    _count: SociosCountAggregateOutputType | null
    _avg: SociosAvgAggregateOutputType | null
    _sum: SociosSumAggregateOutputType | null
    _min: SociosMinAggregateOutputType | null
    _max: SociosMaxAggregateOutputType | null
  }

  export type SociosAvgAggregateOutputType = {
    idsocio: number | null
    dni: number | null
    telefono: number | null
  }

  export type SociosSumAggregateOutputType = {
    idsocio: number | null
    dni: number | null
    telefono: bigint | null
  }

  export type SociosMinAggregateOutputType = {
    idsocio: number | null
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
  }

  export type SociosMaxAggregateOutputType = {
    idsocio: number | null
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
  }

  export type SociosCountAggregateOutputType = {
    idsocio: number
    apellido: number
    nombre: number
    dni: number
    mail: number
    telefono: number
    socio: number
    nosocio: number
    referido: number
    fecha_solicitud: number
    cargada: number
    _all: number
  }


  export type SociosAvgAggregateInputType = {
    idsocio?: true
    dni?: true
    telefono?: true
  }

  export type SociosSumAggregateInputType = {
    idsocio?: true
    dni?: true
    telefono?: true
  }

  export type SociosMinAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
  }

  export type SociosMaxAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
  }

  export type SociosCountAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
    _all?: true
  }

  export type SociosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which socios to aggregate.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned socios
    **/
    _count?: true | SociosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SociosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SociosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SociosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SociosMaxAggregateInputType
  }

  export type GetSociosAggregateType<T extends SociosAggregateArgs> = {
        [P in keyof T & keyof AggregateSocios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocios[P]>
      : GetScalarType<T[P], AggregateSocios[P]>
  }




  export type sociosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: sociosWhereInput
    orderBy?: sociosOrderByWithAggregationInput | sociosOrderByWithAggregationInput[]
    by: SociosScalarFieldEnum[] | SociosScalarFieldEnum
    having?: sociosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SociosCountAggregateInputType | true
    _avg?: SociosAvgAggregateInputType
    _sum?: SociosSumAggregateInputType
    _min?: SociosMinAggregateInputType
    _max?: SociosMaxAggregateInputType
  }


  export type SociosGroupByOutputType = {
    idsocio: number
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
    _count: SociosCountAggregateOutputType | null
    _avg: SociosAvgAggregateOutputType | null
    _sum: SociosSumAggregateOutputType | null
    _min: SociosMinAggregateOutputType | null
    _max: SociosMaxAggregateOutputType | null
  }

  type GetSociosGroupByPayload<T extends sociosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SociosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SociosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SociosGroupByOutputType[P]>
            : GetScalarType<T[P], SociosGroupByOutputType[P]>
        }
      >
    >


  export type sociosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsocio?: boolean
    apellido?: boolean
    nombre?: boolean
    dni?: boolean
    mail?: boolean
    telefono?: boolean
    socio?: boolean
    nosocio?: boolean
    referido?: boolean
    fecha_solicitud?: boolean
    cargada?: boolean
  }, ExtArgs["result"]["socios"]>

  export type sociosSelectScalar = {
    idsocio?: boolean
    apellido?: boolean
    nombre?: boolean
    dni?: boolean
    mail?: boolean
    telefono?: boolean
    socio?: boolean
    nosocio?: boolean
    referido?: boolean
    fecha_solicitud?: boolean
    cargada?: boolean
  }


  type sociosGetPayload<S extends boolean | null | undefined | sociosArgs> = $Types.GetResult<sociosPayload, S>

  type sociosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<sociosFindManyArgs, 'select' | 'include'> & {
      select?: SociosCountAggregateInputType | true
    }

  export interface sociosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['socios'], meta: { name: 'socios' } }
    /**
     * Find zero or one Socios that matches the filter.
     * @param {sociosFindUniqueArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sociosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sociosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'socios'> extends True ? Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Socios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sociosFindUniqueOrThrowArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sociosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sociosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindFirstArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sociosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sociosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'socios'> extends True ? Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Socios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindFirstOrThrowArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sociosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sociosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socios
     * const socios = await prisma.socios.findMany()
     * 
     * // Get first 10 Socios
     * const socios = await prisma.socios.findMany({ take: 10 })
     * 
     * // Only select the `idsocio`
     * const sociosWithIdsocioOnly = await prisma.socios.findMany({ select: { idsocio: true } })
     * 
    **/
    findMany<T extends sociosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sociosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<sociosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Socios.
     * @param {sociosCreateArgs} args - Arguments to create a Socios.
     * @example
     * // Create one Socios
     * const Socios = await prisma.socios.create({
     *   data: {
     *     // ... data to create a Socios
     *   }
     * })
     * 
    **/
    create<T extends sociosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sociosCreateArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Socios.
     *     @param {sociosCreateManyArgs} args - Arguments to create many Socios.
     *     @example
     *     // Create many Socios
     *     const socios = await prisma.socios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sociosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sociosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Socios.
     * @param {sociosDeleteArgs} args - Arguments to delete one Socios.
     * @example
     * // Delete one Socios
     * const Socios = await prisma.socios.delete({
     *   where: {
     *     // ... filter to delete one Socios
     *   }
     * })
     * 
    **/
    delete<T extends sociosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sociosDeleteArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Socios.
     * @param {sociosUpdateArgs} args - Arguments to update one Socios.
     * @example
     * // Update one Socios
     * const socios = await prisma.socios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sociosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sociosUpdateArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Socios.
     * @param {sociosDeleteManyArgs} args - Arguments to filter Socios to delete.
     * @example
     * // Delete a few Socios
     * const { count } = await prisma.socios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sociosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sociosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socios
     * const socios = await prisma.socios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sociosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sociosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Socios.
     * @param {sociosUpsertArgs} args - Arguments to update or create a Socios.
     * @example
     * // Update or create a Socios
     * const socios = await prisma.socios.upsert({
     *   create: {
     *     // ... data to create a Socios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socios we want to update
     *   }
     * })
    **/
    upsert<T extends sociosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sociosUpsertArgs<ExtArgs>>
    ): Prisma__sociosClient<$Types.GetResult<sociosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosCountArgs} args - Arguments to filter Socios to count.
     * @example
     * // Count the number of Socios
     * const count = await prisma.socios.count({
     *   where: {
     *     // ... the filter for the Socios we want to count
     *   }
     * })
    **/
    count<T extends sociosCountArgs>(
      args?: Subset<T, sociosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SociosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SociosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SociosAggregateArgs>(args: Subset<T, SociosAggregateArgs>): Prisma.PrismaPromise<GetSociosAggregateType<T>>

    /**
     * Group by Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosGroupByArgs} args - Group by arguments.
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
      T extends sociosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sociosGroupByArgs['orderBy'] }
        : { orderBy?: sociosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sociosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSociosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for socios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sociosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * socios base type for findUnique actions
   */
  export type sociosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where: sociosWhereUniqueInput
  }

  /**
   * socios findUnique
   */
  export interface sociosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends sociosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * socios findUniqueOrThrow
   */
  export type sociosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where: sociosWhereUniqueInput
  }


  /**
   * socios base type for findFirst actions
   */
  export type sociosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socios.
     */
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }

  /**
   * socios findFirst
   */
  export interface sociosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends sociosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * socios findFirstOrThrow
   */
  export type sociosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socios.
     */
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }


  /**
   * socios findMany
   */
  export type sociosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }


  /**
   * socios create
   */
  export type sociosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * The data needed to create a socios.
     */
    data?: XOR<sociosCreateInput, sociosUncheckedCreateInput>
  }


  /**
   * socios createMany
   */
  export type sociosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many socios.
     */
    data: sociosCreateManyInput | sociosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * socios update
   */
  export type sociosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * The data needed to update a socios.
     */
    data: XOR<sociosUpdateInput, sociosUncheckedUpdateInput>
    /**
     * Choose, which socios to update.
     */
    where: sociosWhereUniqueInput
  }


  /**
   * socios updateMany
   */
  export type sociosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update socios.
     */
    data: XOR<sociosUpdateManyMutationInput, sociosUncheckedUpdateManyInput>
    /**
     * Filter which socios to update
     */
    where?: sociosWhereInput
  }


  /**
   * socios upsert
   */
  export type sociosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * The filter to search for the socios to update in case it exists.
     */
    where: sociosWhereUniqueInput
    /**
     * In case the socios found by the `where` argument doesn't exist, create a new socios with this data.
     */
    create: XOR<sociosCreateInput, sociosUncheckedCreateInput>
    /**
     * In case the socios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sociosUpdateInput, sociosUncheckedUpdateInput>
  }


  /**
   * socios delete
   */
  export type sociosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Filter which socios to delete.
     */
    where: sociosWhereUniqueInput
  }


  /**
   * socios deleteMany
   */
  export type sociosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which socios to delete
     */
    where?: sociosWhereInput
  }


  /**
   * socios without action
   */
  export type sociosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
  }



  /**
   * Model solicitud_sorteo
   */


  export type AggregateSolicitud_sorteo = {
    _count: Solicitud_sorteoCountAggregateOutputType | null
    _avg: Solicitud_sorteoAvgAggregateOutputType | null
    _sum: Solicitud_sorteoSumAggregateOutputType | null
    _min: Solicitud_sorteoMinAggregateOutputType | null
    _max: Solicitud_sorteoMaxAggregateOutputType | null
  }

  export type Solicitud_sorteoAvgAggregateOutputType = {
    idsocio: number | null
    dni: number | null
    telefono: number | null
  }

  export type Solicitud_sorteoSumAggregateOutputType = {
    idsocio: number | null
    dni: number | null
    telefono: bigint | null
  }

  export type Solicitud_sorteoMinAggregateOutputType = {
    idsocio: number | null
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
    obra_soc: string | null
  }

  export type Solicitud_sorteoMaxAggregateOutputType = {
    idsocio: number | null
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
    obra_soc: string | null
  }

  export type Solicitud_sorteoCountAggregateOutputType = {
    idsocio: number
    apellido: number
    nombre: number
    dni: number
    mail: number
    telefono: number
    socio: number
    nosocio: number
    referido: number
    fecha_solicitud: number
    cargada: number
    obra_soc: number
    _all: number
  }


  export type Solicitud_sorteoAvgAggregateInputType = {
    idsocio?: true
    dni?: true
    telefono?: true
  }

  export type Solicitud_sorteoSumAggregateInputType = {
    idsocio?: true
    dni?: true
    telefono?: true
  }

  export type Solicitud_sorteoMinAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
    obra_soc?: true
  }

  export type Solicitud_sorteoMaxAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
    obra_soc?: true
  }

  export type Solicitud_sorteoCountAggregateInputType = {
    idsocio?: true
    apellido?: true
    nombre?: true
    dni?: true
    mail?: true
    telefono?: true
    socio?: true
    nosocio?: true
    referido?: true
    fecha_solicitud?: true
    cargada?: true
    obra_soc?: true
    _all?: true
  }

  export type Solicitud_sorteoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_sorteo to aggregate.
     */
    where?: solicitud_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteos to fetch.
     */
    orderBy?: solicitud_sorteoOrderByWithRelationInput | solicitud_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solicitud_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solicitud_sorteos
    **/
    _count?: true | Solicitud_sorteoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Solicitud_sorteoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Solicitud_sorteoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Solicitud_sorteoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Solicitud_sorteoMaxAggregateInputType
  }

  export type GetSolicitud_sorteoAggregateType<T extends Solicitud_sorteoAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud_sorteo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud_sorteo[P]>
      : GetScalarType<T[P], AggregateSolicitud_sorteo[P]>
  }




  export type solicitud_sorteoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: solicitud_sorteoWhereInput
    orderBy?: solicitud_sorteoOrderByWithAggregationInput | solicitud_sorteoOrderByWithAggregationInput[]
    by: Solicitud_sorteoScalarFieldEnum[] | Solicitud_sorteoScalarFieldEnum
    having?: solicitud_sorteoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Solicitud_sorteoCountAggregateInputType | true
    _avg?: Solicitud_sorteoAvgAggregateInputType
    _sum?: Solicitud_sorteoSumAggregateInputType
    _min?: Solicitud_sorteoMinAggregateInputType
    _max?: Solicitud_sorteoMaxAggregateInputType
  }


  export type Solicitud_sorteoGroupByOutputType = {
    idsocio: number
    apellido: string | null
    nombre: string | null
    dni: number | null
    mail: string | null
    telefono: bigint | null
    socio: boolean | null
    nosocio: boolean | null
    referido: boolean | null
    fecha_solicitud: Date | null
    cargada: boolean | null
    obra_soc: string | null
    _count: Solicitud_sorteoCountAggregateOutputType | null
    _avg: Solicitud_sorteoAvgAggregateOutputType | null
    _sum: Solicitud_sorteoSumAggregateOutputType | null
    _min: Solicitud_sorteoMinAggregateOutputType | null
    _max: Solicitud_sorteoMaxAggregateOutputType | null
  }

  type GetSolicitud_sorteoGroupByPayload<T extends solicitud_sorteoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Solicitud_sorteoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Solicitud_sorteoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Solicitud_sorteoGroupByOutputType[P]>
            : GetScalarType<T[P], Solicitud_sorteoGroupByOutputType[P]>
        }
      >
    >


  export type solicitud_sorteoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsocio?: boolean
    apellido?: boolean
    nombre?: boolean
    dni?: boolean
    mail?: boolean
    telefono?: boolean
    socio?: boolean
    nosocio?: boolean
    referido?: boolean
    fecha_solicitud?: boolean
    cargada?: boolean
    obra_soc?: boolean
  }, ExtArgs["result"]["solicitud_sorteo"]>

  export type solicitud_sorteoSelectScalar = {
    idsocio?: boolean
    apellido?: boolean
    nombre?: boolean
    dni?: boolean
    mail?: boolean
    telefono?: boolean
    socio?: boolean
    nosocio?: boolean
    referido?: boolean
    fecha_solicitud?: boolean
    cargada?: boolean
    obra_soc?: boolean
  }


  type solicitud_sorteoGetPayload<S extends boolean | null | undefined | solicitud_sorteoArgs> = $Types.GetResult<solicitud_sorteoPayload, S>

  type solicitud_sorteoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<solicitud_sorteoFindManyArgs, 'select' | 'include'> & {
      select?: Solicitud_sorteoCountAggregateInputType | true
    }

  export interface solicitud_sorteoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solicitud_sorteo'], meta: { name: 'solicitud_sorteo' } }
    /**
     * Find zero or one Solicitud_sorteo that matches the filter.
     * @param {solicitud_sorteoFindUniqueArgs} args - Arguments to find a Solicitud_sorteo
     * @example
     * // Get one Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends solicitud_sorteoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, solicitud_sorteoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'solicitud_sorteo'> extends True ? Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Solicitud_sorteo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {solicitud_sorteoFindUniqueOrThrowArgs} args - Arguments to find a Solicitud_sorteo
     * @example
     * // Get one Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends solicitud_sorteoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Solicitud_sorteo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoFindFirstArgs} args - Arguments to find a Solicitud_sorteo
     * @example
     * // Get one Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends solicitud_sorteoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, solicitud_sorteoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'solicitud_sorteo'> extends True ? Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Solicitud_sorteo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoFindFirstOrThrowArgs} args - Arguments to find a Solicitud_sorteo
     * @example
     * // Get one Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends solicitud_sorteoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Solicitud_sorteos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitud_sorteos
     * const solicitud_sorteos = await prisma.solicitud_sorteo.findMany()
     * 
     * // Get first 10 Solicitud_sorteos
     * const solicitud_sorteos = await prisma.solicitud_sorteo.findMany({ take: 10 })
     * 
     * // Only select the `idsocio`
     * const solicitud_sorteoWithIdsocioOnly = await prisma.solicitud_sorteo.findMany({ select: { idsocio: true } })
     * 
    **/
    findMany<T extends solicitud_sorteoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Solicitud_sorteo.
     * @param {solicitud_sorteoCreateArgs} args - Arguments to create a Solicitud_sorteo.
     * @example
     * // Create one Solicitud_sorteo
     * const Solicitud_sorteo = await prisma.solicitud_sorteo.create({
     *   data: {
     *     // ... data to create a Solicitud_sorteo
     *   }
     * })
     * 
    **/
    create<T extends solicitud_sorteoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteoCreateArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Solicitud_sorteos.
     *     @param {solicitud_sorteoCreateManyArgs} args - Arguments to create many Solicitud_sorteos.
     *     @example
     *     // Create many Solicitud_sorteos
     *     const solicitud_sorteo = await prisma.solicitud_sorteo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends solicitud_sorteoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Solicitud_sorteo.
     * @param {solicitud_sorteoDeleteArgs} args - Arguments to delete one Solicitud_sorteo.
     * @example
     * // Delete one Solicitud_sorteo
     * const Solicitud_sorteo = await prisma.solicitud_sorteo.delete({
     *   where: {
     *     // ... filter to delete one Solicitud_sorteo
     *   }
     * })
     * 
    **/
    delete<T extends solicitud_sorteoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteoDeleteArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Solicitud_sorteo.
     * @param {solicitud_sorteoUpdateArgs} args - Arguments to update one Solicitud_sorteo.
     * @example
     * // Update one Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends solicitud_sorteoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteoUpdateArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Solicitud_sorteos.
     * @param {solicitud_sorteoDeleteManyArgs} args - Arguments to filter Solicitud_sorteos to delete.
     * @example
     * // Delete a few Solicitud_sorteos
     * const { count } = await prisma.solicitud_sorteo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends solicitud_sorteoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitud_sorteos
     * const solicitud_sorteo = await prisma.solicitud_sorteo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends solicitud_sorteoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Solicitud_sorteo.
     * @param {solicitud_sorteoUpsertArgs} args - Arguments to update or create a Solicitud_sorteo.
     * @example
     * // Update or create a Solicitud_sorteo
     * const solicitud_sorteo = await prisma.solicitud_sorteo.upsert({
     *   create: {
     *     // ... data to create a Solicitud_sorteo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud_sorteo we want to update
     *   }
     * })
    **/
    upsert<T extends solicitud_sorteoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteoUpsertArgs<ExtArgs>>
    ): Prisma__solicitud_sorteoClient<$Types.GetResult<solicitud_sorteoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Solicitud_sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoCountArgs} args - Arguments to filter Solicitud_sorteos to count.
     * @example
     * // Count the number of Solicitud_sorteos
     * const count = await prisma.solicitud_sorteo.count({
     *   where: {
     *     // ... the filter for the Solicitud_sorteos we want to count
     *   }
     * })
    **/
    count<T extends solicitud_sorteoCountArgs>(
      args?: Subset<T, solicitud_sorteoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Solicitud_sorteoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud_sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Solicitud_sorteoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Solicitud_sorteoAggregateArgs>(args: Subset<T, Solicitud_sorteoAggregateArgs>): Prisma.PrismaPromise<GetSolicitud_sorteoAggregateType<T>>

    /**
     * Group by Solicitud_sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteoGroupByArgs} args - Group by arguments.
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
      T extends solicitud_sorteoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solicitud_sorteoGroupByArgs['orderBy'] }
        : { orderBy?: solicitud_sorteoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solicitud_sorteoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitud_sorteoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for solicitud_sorteo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__solicitud_sorteoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * solicitud_sorteo base type for findUnique actions
   */
  export type solicitud_sorteoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo to fetch.
     */
    where: solicitud_sorteoWhereUniqueInput
  }

  /**
   * solicitud_sorteo findUnique
   */
  export interface solicitud_sorteoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends solicitud_sorteoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * solicitud_sorteo findUniqueOrThrow
   */
  export type solicitud_sorteoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo to fetch.
     */
    where: solicitud_sorteoWhereUniqueInput
  }


  /**
   * solicitud_sorteo base type for findFirst actions
   */
  export type solicitud_sorteoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo to fetch.
     */
    where?: solicitud_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteos to fetch.
     */
    orderBy?: solicitud_sorteoOrderByWithRelationInput | solicitud_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_sorteos.
     */
    cursor?: solicitud_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_sorteos.
     */
    distinct?: Solicitud_sorteoScalarFieldEnum | Solicitud_sorteoScalarFieldEnum[]
  }

  /**
   * solicitud_sorteo findFirst
   */
  export interface solicitud_sorteoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends solicitud_sorteoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * solicitud_sorteo findFirstOrThrow
   */
  export type solicitud_sorteoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo to fetch.
     */
    where?: solicitud_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteos to fetch.
     */
    orderBy?: solicitud_sorteoOrderByWithRelationInput | solicitud_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_sorteos.
     */
    cursor?: solicitud_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_sorteos.
     */
    distinct?: Solicitud_sorteoScalarFieldEnum | Solicitud_sorteoScalarFieldEnum[]
  }


  /**
   * solicitud_sorteo findMany
   */
  export type solicitud_sorteoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteos to fetch.
     */
    where?: solicitud_sorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteos to fetch.
     */
    orderBy?: solicitud_sorteoOrderByWithRelationInput | solicitud_sorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solicitud_sorteos.
     */
    cursor?: solicitud_sorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteos.
     */
    skip?: number
    distinct?: Solicitud_sorteoScalarFieldEnum | Solicitud_sorteoScalarFieldEnum[]
  }


  /**
   * solicitud_sorteo create
   */
  export type solicitud_sorteoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * The data needed to create a solicitud_sorteo.
     */
    data?: XOR<solicitud_sorteoCreateInput, solicitud_sorteoUncheckedCreateInput>
  }


  /**
   * solicitud_sorteo createMany
   */
  export type solicitud_sorteoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solicitud_sorteos.
     */
    data: solicitud_sorteoCreateManyInput | solicitud_sorteoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * solicitud_sorteo update
   */
  export type solicitud_sorteoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * The data needed to update a solicitud_sorteo.
     */
    data: XOR<solicitud_sorteoUpdateInput, solicitud_sorteoUncheckedUpdateInput>
    /**
     * Choose, which solicitud_sorteo to update.
     */
    where: solicitud_sorteoWhereUniqueInput
  }


  /**
   * solicitud_sorteo updateMany
   */
  export type solicitud_sorteoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solicitud_sorteos.
     */
    data: XOR<solicitud_sorteoUpdateManyMutationInput, solicitud_sorteoUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_sorteos to update
     */
    where?: solicitud_sorteoWhereInput
  }


  /**
   * solicitud_sorteo upsert
   */
  export type solicitud_sorteoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * The filter to search for the solicitud_sorteo to update in case it exists.
     */
    where: solicitud_sorteoWhereUniqueInput
    /**
     * In case the solicitud_sorteo found by the `where` argument doesn't exist, create a new solicitud_sorteo with this data.
     */
    create: XOR<solicitud_sorteoCreateInput, solicitud_sorteoUncheckedCreateInput>
    /**
     * In case the solicitud_sorteo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solicitud_sorteoUpdateInput, solicitud_sorteoUncheckedUpdateInput>
  }


  /**
   * solicitud_sorteo delete
   */
  export type solicitud_sorteoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
    /**
     * Filter which solicitud_sorteo to delete.
     */
    where: solicitud_sorteoWhereUniqueInput
  }


  /**
   * solicitud_sorteo deleteMany
   */
  export type solicitud_sorteoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_sorteos to delete
     */
    where?: solicitud_sorteoWhereInput
  }


  /**
   * solicitud_sorteo without action
   */
  export type solicitud_sorteoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo
     */
    select?: solicitud_sorteoSelect<ExtArgs> | null
  }



  /**
   * Model solicitud_sorteo_web
   */


  export type AggregateSolicitud_sorteo_web = {
    _count: Solicitud_sorteo_webCountAggregateOutputType | null
    _avg: Solicitud_sorteo_webAvgAggregateOutputType | null
    _sum: Solicitud_sorteo_webSumAggregateOutputType | null
    _min: Solicitud_sorteo_webMinAggregateOutputType | null
    _max: Solicitud_sorteo_webMaxAggregateOutputType | null
  }

  export type Solicitud_sorteo_webAvgAggregateOutputType = {
    idnosocio: number | null
    dni: number | null
  }

  export type Solicitud_sorteo_webSumAggregateOutputType = {
    idnosocio: number | null
    dni: bigint | null
  }

  export type Solicitud_sorteo_webMinAggregateOutputType = {
    idnosocio: number | null
    solicitante: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    fecha: Date | null
    detalle: string | null
    estado: boolean | null
  }

  export type Solicitud_sorteo_webMaxAggregateOutputType = {
    idnosocio: number | null
    solicitante: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    fecha: Date | null
    detalle: string | null
    estado: boolean | null
  }

  export type Solicitud_sorteo_webCountAggregateOutputType = {
    idnosocio: number
    solicitante: number
    dni: number
    telefono: number
    mail: number
    fecha: number
    detalle: number
    estado: number
    _all: number
  }


  export type Solicitud_sorteo_webAvgAggregateInputType = {
    idnosocio?: true
    dni?: true
  }

  export type Solicitud_sorteo_webSumAggregateInputType = {
    idnosocio?: true
    dni?: true
  }

  export type Solicitud_sorteo_webMinAggregateInputType = {
    idnosocio?: true
    solicitante?: true
    dni?: true
    telefono?: true
    mail?: true
    fecha?: true
    detalle?: true
    estado?: true
  }

  export type Solicitud_sorteo_webMaxAggregateInputType = {
    idnosocio?: true
    solicitante?: true
    dni?: true
    telefono?: true
    mail?: true
    fecha?: true
    detalle?: true
    estado?: true
  }

  export type Solicitud_sorteo_webCountAggregateInputType = {
    idnosocio?: true
    solicitante?: true
    dni?: true
    telefono?: true
    mail?: true
    fecha?: true
    detalle?: true
    estado?: true
    _all?: true
  }

  export type Solicitud_sorteo_webAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_sorteo_web to aggregate.
     */
    where?: solicitud_sorteo_webWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteo_webs to fetch.
     */
    orderBy?: solicitud_sorteo_webOrderByWithRelationInput | solicitud_sorteo_webOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solicitud_sorteo_webWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteo_webs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteo_webs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solicitud_sorteo_webs
    **/
    _count?: true | Solicitud_sorteo_webCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Solicitud_sorteo_webAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Solicitud_sorteo_webSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Solicitud_sorteo_webMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Solicitud_sorteo_webMaxAggregateInputType
  }

  export type GetSolicitud_sorteo_webAggregateType<T extends Solicitud_sorteo_webAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud_sorteo_web]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud_sorteo_web[P]>
      : GetScalarType<T[P], AggregateSolicitud_sorteo_web[P]>
  }




  export type solicitud_sorteo_webGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: solicitud_sorteo_webWhereInput
    orderBy?: solicitud_sorteo_webOrderByWithAggregationInput | solicitud_sorteo_webOrderByWithAggregationInput[]
    by: Solicitud_sorteo_webScalarFieldEnum[] | Solicitud_sorteo_webScalarFieldEnum
    having?: solicitud_sorteo_webScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Solicitud_sorteo_webCountAggregateInputType | true
    _avg?: Solicitud_sorteo_webAvgAggregateInputType
    _sum?: Solicitud_sorteo_webSumAggregateInputType
    _min?: Solicitud_sorteo_webMinAggregateInputType
    _max?: Solicitud_sorteo_webMaxAggregateInputType
  }


  export type Solicitud_sorteo_webGroupByOutputType = {
    idnosocio: number
    solicitante: string | null
    dni: bigint | null
    telefono: string | null
    mail: string | null
    fecha: Date | null
    detalle: string | null
    estado: boolean | null
    _count: Solicitud_sorteo_webCountAggregateOutputType | null
    _avg: Solicitud_sorteo_webAvgAggregateOutputType | null
    _sum: Solicitud_sorteo_webSumAggregateOutputType | null
    _min: Solicitud_sorteo_webMinAggregateOutputType | null
    _max: Solicitud_sorteo_webMaxAggregateOutputType | null
  }

  type GetSolicitud_sorteo_webGroupByPayload<T extends solicitud_sorteo_webGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Solicitud_sorteo_webGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Solicitud_sorteo_webGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Solicitud_sorteo_webGroupByOutputType[P]>
            : GetScalarType<T[P], Solicitud_sorteo_webGroupByOutputType[P]>
        }
      >
    >


  export type solicitud_sorteo_webSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idnosocio?: boolean
    solicitante?: boolean
    dni?: boolean
    telefono?: boolean
    mail?: boolean
    fecha?: boolean
    detalle?: boolean
    estado?: boolean
  }, ExtArgs["result"]["solicitud_sorteo_web"]>

  export type solicitud_sorteo_webSelectScalar = {
    idnosocio?: boolean
    solicitante?: boolean
    dni?: boolean
    telefono?: boolean
    mail?: boolean
    fecha?: boolean
    detalle?: boolean
    estado?: boolean
  }


  type solicitud_sorteo_webGetPayload<S extends boolean | null | undefined | solicitud_sorteo_webArgs> = $Types.GetResult<solicitud_sorteo_webPayload, S>

  type solicitud_sorteo_webCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<solicitud_sorteo_webFindManyArgs, 'select' | 'include'> & {
      select?: Solicitud_sorteo_webCountAggregateInputType | true
    }

  export interface solicitud_sorteo_webDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solicitud_sorteo_web'], meta: { name: 'solicitud_sorteo_web' } }
    /**
     * Find zero or one Solicitud_sorteo_web that matches the filter.
     * @param {solicitud_sorteo_webFindUniqueArgs} args - Arguments to find a Solicitud_sorteo_web
     * @example
     * // Get one Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends solicitud_sorteo_webFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, solicitud_sorteo_webFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'solicitud_sorteo_web'> extends True ? Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Solicitud_sorteo_web that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {solicitud_sorteo_webFindUniqueOrThrowArgs} args - Arguments to find a Solicitud_sorteo_web
     * @example
     * // Get one Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends solicitud_sorteo_webFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteo_webFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Solicitud_sorteo_web that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webFindFirstArgs} args - Arguments to find a Solicitud_sorteo_web
     * @example
     * // Get one Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends solicitud_sorteo_webFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, solicitud_sorteo_webFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'solicitud_sorteo_web'> extends True ? Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Solicitud_sorteo_web that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webFindFirstOrThrowArgs} args - Arguments to find a Solicitud_sorteo_web
     * @example
     * // Get one Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends solicitud_sorteo_webFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteo_webFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Solicitud_sorteo_webs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitud_sorteo_webs
     * const solicitud_sorteo_webs = await prisma.solicitud_sorteo_web.findMany()
     * 
     * // Get first 10 Solicitud_sorteo_webs
     * const solicitud_sorteo_webs = await prisma.solicitud_sorteo_web.findMany({ take: 10 })
     * 
     * // Only select the `idnosocio`
     * const solicitud_sorteo_webWithIdnosocioOnly = await prisma.solicitud_sorteo_web.findMany({ select: { idnosocio: true } })
     * 
    **/
    findMany<T extends solicitud_sorteo_webFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteo_webFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Solicitud_sorteo_web.
     * @param {solicitud_sorteo_webCreateArgs} args - Arguments to create a Solicitud_sorteo_web.
     * @example
     * // Create one Solicitud_sorteo_web
     * const Solicitud_sorteo_web = await prisma.solicitud_sorteo_web.create({
     *   data: {
     *     // ... data to create a Solicitud_sorteo_web
     *   }
     * })
     * 
    **/
    create<T extends solicitud_sorteo_webCreateArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteo_webCreateArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Solicitud_sorteo_webs.
     *     @param {solicitud_sorteo_webCreateManyArgs} args - Arguments to create many Solicitud_sorteo_webs.
     *     @example
     *     // Create many Solicitud_sorteo_webs
     *     const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends solicitud_sorteo_webCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteo_webCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Solicitud_sorteo_web.
     * @param {solicitud_sorteo_webDeleteArgs} args - Arguments to delete one Solicitud_sorteo_web.
     * @example
     * // Delete one Solicitud_sorteo_web
     * const Solicitud_sorteo_web = await prisma.solicitud_sorteo_web.delete({
     *   where: {
     *     // ... filter to delete one Solicitud_sorteo_web
     *   }
     * })
     * 
    **/
    delete<T extends solicitud_sorteo_webDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteo_webDeleteArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Solicitud_sorteo_web.
     * @param {solicitud_sorteo_webUpdateArgs} args - Arguments to update one Solicitud_sorteo_web.
     * @example
     * // Update one Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends solicitud_sorteo_webUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteo_webUpdateArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Solicitud_sorteo_webs.
     * @param {solicitud_sorteo_webDeleteManyArgs} args - Arguments to filter Solicitud_sorteo_webs to delete.
     * @example
     * // Delete a few Solicitud_sorteo_webs
     * const { count } = await prisma.solicitud_sorteo_web.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends solicitud_sorteo_webDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, solicitud_sorteo_webDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_sorteo_webs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitud_sorteo_webs
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends solicitud_sorteo_webUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteo_webUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Solicitud_sorteo_web.
     * @param {solicitud_sorteo_webUpsertArgs} args - Arguments to update or create a Solicitud_sorteo_web.
     * @example
     * // Update or create a Solicitud_sorteo_web
     * const solicitud_sorteo_web = await prisma.solicitud_sorteo_web.upsert({
     *   create: {
     *     // ... data to create a Solicitud_sorteo_web
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud_sorteo_web we want to update
     *   }
     * })
    **/
    upsert<T extends solicitud_sorteo_webUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, solicitud_sorteo_webUpsertArgs<ExtArgs>>
    ): Prisma__solicitud_sorteo_webClient<$Types.GetResult<solicitud_sorteo_webPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Solicitud_sorteo_webs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webCountArgs} args - Arguments to filter Solicitud_sorteo_webs to count.
     * @example
     * // Count the number of Solicitud_sorteo_webs
     * const count = await prisma.solicitud_sorteo_web.count({
     *   where: {
     *     // ... the filter for the Solicitud_sorteo_webs we want to count
     *   }
     * })
    **/
    count<T extends solicitud_sorteo_webCountArgs>(
      args?: Subset<T, solicitud_sorteo_webCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Solicitud_sorteo_webCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud_sorteo_web.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Solicitud_sorteo_webAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Solicitud_sorteo_webAggregateArgs>(args: Subset<T, Solicitud_sorteo_webAggregateArgs>): Prisma.PrismaPromise<GetSolicitud_sorteo_webAggregateType<T>>

    /**
     * Group by Solicitud_sorteo_web.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_sorteo_webGroupByArgs} args - Group by arguments.
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
      T extends solicitud_sorteo_webGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solicitud_sorteo_webGroupByArgs['orderBy'] }
        : { orderBy?: solicitud_sorteo_webGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solicitud_sorteo_webGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitud_sorteo_webGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for solicitud_sorteo_web.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__solicitud_sorteo_webClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * solicitud_sorteo_web base type for findUnique actions
   */
  export type solicitud_sorteo_webFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo_web to fetch.
     */
    where: solicitud_sorteo_webWhereUniqueInput
  }

  /**
   * solicitud_sorteo_web findUnique
   */
  export interface solicitud_sorteo_webFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends solicitud_sorteo_webFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * solicitud_sorteo_web findUniqueOrThrow
   */
  export type solicitud_sorteo_webFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo_web to fetch.
     */
    where: solicitud_sorteo_webWhereUniqueInput
  }


  /**
   * solicitud_sorteo_web base type for findFirst actions
   */
  export type solicitud_sorteo_webFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo_web to fetch.
     */
    where?: solicitud_sorteo_webWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteo_webs to fetch.
     */
    orderBy?: solicitud_sorteo_webOrderByWithRelationInput | solicitud_sorteo_webOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_sorteo_webs.
     */
    cursor?: solicitud_sorteo_webWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteo_webs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteo_webs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_sorteo_webs.
     */
    distinct?: Solicitud_sorteo_webScalarFieldEnum | Solicitud_sorteo_webScalarFieldEnum[]
  }

  /**
   * solicitud_sorteo_web findFirst
   */
  export interface solicitud_sorteo_webFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends solicitud_sorteo_webFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * solicitud_sorteo_web findFirstOrThrow
   */
  export type solicitud_sorteo_webFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo_web to fetch.
     */
    where?: solicitud_sorteo_webWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteo_webs to fetch.
     */
    orderBy?: solicitud_sorteo_webOrderByWithRelationInput | solicitud_sorteo_webOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_sorteo_webs.
     */
    cursor?: solicitud_sorteo_webWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteo_webs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteo_webs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_sorteo_webs.
     */
    distinct?: Solicitud_sorteo_webScalarFieldEnum | Solicitud_sorteo_webScalarFieldEnum[]
  }


  /**
   * solicitud_sorteo_web findMany
   */
  export type solicitud_sorteo_webFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter, which solicitud_sorteo_webs to fetch.
     */
    where?: solicitud_sorteo_webWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_sorteo_webs to fetch.
     */
    orderBy?: solicitud_sorteo_webOrderByWithRelationInput | solicitud_sorteo_webOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solicitud_sorteo_webs.
     */
    cursor?: solicitud_sorteo_webWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_sorteo_webs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_sorteo_webs.
     */
    skip?: number
    distinct?: Solicitud_sorteo_webScalarFieldEnum | Solicitud_sorteo_webScalarFieldEnum[]
  }


  /**
   * solicitud_sorteo_web create
   */
  export type solicitud_sorteo_webCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * The data needed to create a solicitud_sorteo_web.
     */
    data?: XOR<solicitud_sorteo_webCreateInput, solicitud_sorteo_webUncheckedCreateInput>
  }


  /**
   * solicitud_sorteo_web createMany
   */
  export type solicitud_sorteo_webCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solicitud_sorteo_webs.
     */
    data: solicitud_sorteo_webCreateManyInput | solicitud_sorteo_webCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * solicitud_sorteo_web update
   */
  export type solicitud_sorteo_webUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * The data needed to update a solicitud_sorteo_web.
     */
    data: XOR<solicitud_sorteo_webUpdateInput, solicitud_sorteo_webUncheckedUpdateInput>
    /**
     * Choose, which solicitud_sorteo_web to update.
     */
    where: solicitud_sorteo_webWhereUniqueInput
  }


  /**
   * solicitud_sorteo_web updateMany
   */
  export type solicitud_sorteo_webUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solicitud_sorteo_webs.
     */
    data: XOR<solicitud_sorteo_webUpdateManyMutationInput, solicitud_sorteo_webUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_sorteo_webs to update
     */
    where?: solicitud_sorteo_webWhereInput
  }


  /**
   * solicitud_sorteo_web upsert
   */
  export type solicitud_sorteo_webUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * The filter to search for the solicitud_sorteo_web to update in case it exists.
     */
    where: solicitud_sorteo_webWhereUniqueInput
    /**
     * In case the solicitud_sorteo_web found by the `where` argument doesn't exist, create a new solicitud_sorteo_web with this data.
     */
    create: XOR<solicitud_sorteo_webCreateInput, solicitud_sorteo_webUncheckedCreateInput>
    /**
     * In case the solicitud_sorteo_web was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solicitud_sorteo_webUpdateInput, solicitud_sorteo_webUncheckedUpdateInput>
  }


  /**
   * solicitud_sorteo_web delete
   */
  export type solicitud_sorteo_webDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
    /**
     * Filter which solicitud_sorteo_web to delete.
     */
    where: solicitud_sorteo_webWhereUniqueInput
  }


  /**
   * solicitud_sorteo_web deleteMany
   */
  export type solicitud_sorteo_webDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_sorteo_webs to delete
     */
    where?: solicitud_sorteo_webWhereInput
  }


  /**
   * solicitud_sorteo_web without action
   */
  export type solicitud_sorteo_webArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_sorteo_web
     */
    select?: solicitud_sorteo_webSelect<ExtArgs> | null
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


  export const BeneficiosScalarFieldEnum: {
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

  export type BeneficiosScalarFieldEnum = (typeof BeneficiosScalarFieldEnum)[keyof typeof BeneficiosScalarFieldEnum]


  export const ComerciosScalarFieldEnum: {
    idcomercio: 'idcomercio',
    comercio: 'comercio',
    rubro: 'rubro',
    direccion: 'direccion',
    beneficio: 'beneficio',
    localidad: 'localidad',
    estado: 'estado',
    descuento: 'descuento'
  };

  export type ComerciosScalarFieldEnum = (typeof ComerciosScalarFieldEnum)[keyof typeof ComerciosScalarFieldEnum]


  export const ConnacScalarFieldEnum: {
    idconvenio: 'idconvenio',
    convenio: 'convenio',
    estado: 'estado',
    pagina: 'pagina'
  };

  export type ConnacScalarFieldEnum = (typeof ConnacScalarFieldEnum)[keyof typeof ConnacScalarFieldEnum]


  export const GanadoresScalarFieldEnum: {
    idganador: 'idganador',
    participante: 'participante',
    premio: 'premio',
    fecha: 'fecha',
    telefono: 'telefono',
    dni: 'dni'
  };

  export type GanadoresScalarFieldEnum = (typeof GanadoresScalarFieldEnum)[keyof typeof GanadoresScalarFieldEnum]


  export const Participantes_sorteoScalarFieldEnum: {
    participante: 'participante',
    dni: 'dni',
    doble: 'doble',
    estado: 'estado',
    telefono: 'telefono',
    idparticipante: 'idparticipante'
  };

  export type Participantes_sorteoScalarFieldEnum = (typeof Participantes_sorteoScalarFieldEnum)[keyof typeof Participantes_sorteoScalarFieldEnum]


  export const SociosScalarFieldEnum: {
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

  export type SociosScalarFieldEnum = (typeof SociosScalarFieldEnum)[keyof typeof SociosScalarFieldEnum]


  export const Solicitud_sorteoScalarFieldEnum: {
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

  export type Solicitud_sorteoScalarFieldEnum = (typeof Solicitud_sorteoScalarFieldEnum)[keyof typeof Solicitud_sorteoScalarFieldEnum]


  export const Solicitud_sorteo_webScalarFieldEnum: {
    idnosocio: 'idnosocio',
    solicitante: 'solicitante',
    dni: 'dni',
    telefono: 'telefono',
    mail: 'mail',
    fecha: 'fecha',
    detalle: 'detalle',
    estado: 'estado'
  };

  export type Solicitud_sorteo_webScalarFieldEnum = (typeof Solicitud_sorteo_webScalarFieldEnum)[keyof typeof Solicitud_sorteo_webScalarFieldEnum]


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


  export type beneficiosWhereInput = {
    AND?: beneficiosWhereInput | beneficiosWhereInput[]
    OR?: beneficiosWhereInput[]
    NOT?: beneficiosWhereInput | beneficiosWhereInput[]
    idbeneficio?: IntFilter | number
    socio?: IntNullableFilter | number | null
    dni?: IntNullableFilter | number | null
    idcomercio?: IntNullableFilter | number | null
    nombre?: StringNullableFilter | string | null
    monto_compra?: FloatNullableFilter | number | null
    beneficio?: IntNullableFilter | number | null
    monto_final?: FloatNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    n_trans?: StringNullableFilter | string | null
    ape_nom?: StringNullableFilter | string | null
  }

  export type beneficiosOrderByWithRelationInput = {
    idbeneficio?: SortOrder
    socio?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    idcomercio?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    monto_compra?: SortOrderInput | SortOrder
    beneficio?: SortOrderInput | SortOrder
    monto_final?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    n_trans?: SortOrderInput | SortOrder
    ape_nom?: SortOrderInput | SortOrder
  }

  export type beneficiosWhereUniqueInput = {
    idbeneficio?: number
  }

  export type beneficiosOrderByWithAggregationInput = {
    idbeneficio?: SortOrder
    socio?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    idcomercio?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    monto_compra?: SortOrderInput | SortOrder
    beneficio?: SortOrderInput | SortOrder
    monto_final?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    n_trans?: SortOrderInput | SortOrder
    ape_nom?: SortOrderInput | SortOrder
    _count?: beneficiosCountOrderByAggregateInput
    _avg?: beneficiosAvgOrderByAggregateInput
    _max?: beneficiosMaxOrderByAggregateInput
    _min?: beneficiosMinOrderByAggregateInput
    _sum?: beneficiosSumOrderByAggregateInput
  }

  export type beneficiosScalarWhereWithAggregatesInput = {
    AND?: beneficiosScalarWhereWithAggregatesInput | beneficiosScalarWhereWithAggregatesInput[]
    OR?: beneficiosScalarWhereWithAggregatesInput[]
    NOT?: beneficiosScalarWhereWithAggregatesInput | beneficiosScalarWhereWithAggregatesInput[]
    idbeneficio?: IntWithAggregatesFilter | number
    socio?: IntNullableWithAggregatesFilter | number | null
    dni?: IntNullableWithAggregatesFilter | number | null
    idcomercio?: IntNullableWithAggregatesFilter | number | null
    nombre?: StringNullableWithAggregatesFilter | string | null
    monto_compra?: FloatNullableWithAggregatesFilter | number | null
    beneficio?: IntNullableWithAggregatesFilter | number | null
    monto_final?: FloatNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    n_trans?: StringNullableWithAggregatesFilter | string | null
    ape_nom?: StringNullableWithAggregatesFilter | string | null
  }

  export type comerciosWhereInput = {
    AND?: comerciosWhereInput | comerciosWhereInput[]
    OR?: comerciosWhereInput[]
    NOT?: comerciosWhereInput | comerciosWhereInput[]
    idcomercio?: IntFilter | number
    comercio?: StringNullableFilter | string | null
    rubro?: StringNullableFilter | string | null
    direccion?: StringNullableFilter | string | null
    beneficio?: StringNullableFilter | string | null
    localidad?: StringNullableFilter | string | null
    estado?: BoolNullableFilter | boolean | null
    descuento?: IntNullableFilter | number | null
  }

  export type comerciosOrderByWithRelationInput = {
    idcomercio?: SortOrder
    comercio?: SortOrderInput | SortOrder
    rubro?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    beneficio?: SortOrderInput | SortOrder
    localidad?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    descuento?: SortOrderInput | SortOrder
  }

  export type comerciosWhereUniqueInput = {
    idcomercio?: number
  }

  export type comerciosOrderByWithAggregationInput = {
    idcomercio?: SortOrder
    comercio?: SortOrderInput | SortOrder
    rubro?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    beneficio?: SortOrderInput | SortOrder
    localidad?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    descuento?: SortOrderInput | SortOrder
    _count?: comerciosCountOrderByAggregateInput
    _avg?: comerciosAvgOrderByAggregateInput
    _max?: comerciosMaxOrderByAggregateInput
    _min?: comerciosMinOrderByAggregateInput
    _sum?: comerciosSumOrderByAggregateInput
  }

  export type comerciosScalarWhereWithAggregatesInput = {
    AND?: comerciosScalarWhereWithAggregatesInput | comerciosScalarWhereWithAggregatesInput[]
    OR?: comerciosScalarWhereWithAggregatesInput[]
    NOT?: comerciosScalarWhereWithAggregatesInput | comerciosScalarWhereWithAggregatesInput[]
    idcomercio?: IntWithAggregatesFilter | number
    comercio?: StringNullableWithAggregatesFilter | string | null
    rubro?: StringNullableWithAggregatesFilter | string | null
    direccion?: StringNullableWithAggregatesFilter | string | null
    beneficio?: StringNullableWithAggregatesFilter | string | null
    localidad?: StringNullableWithAggregatesFilter | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
    descuento?: IntNullableWithAggregatesFilter | number | null
  }

  export type connacWhereInput = {
    AND?: connacWhereInput | connacWhereInput[]
    OR?: connacWhereInput[]
    NOT?: connacWhereInput | connacWhereInput[]
    idconvenio?: IntFilter | number
    convenio?: StringNullableFilter | string | null
    estado?: StringNullableFilter | string | null
    pagina?: StringNullableFilter | string | null
  }

  export type connacOrderByWithRelationInput = {
    idconvenio?: SortOrder
    convenio?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    pagina?: SortOrderInput | SortOrder
  }

  export type connacWhereUniqueInput = {
    idconvenio?: number
  }

  export type connacOrderByWithAggregationInput = {
    idconvenio?: SortOrder
    convenio?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    pagina?: SortOrderInput | SortOrder
    _count?: connacCountOrderByAggregateInput
    _avg?: connacAvgOrderByAggregateInput
    _max?: connacMaxOrderByAggregateInput
    _min?: connacMinOrderByAggregateInput
    _sum?: connacSumOrderByAggregateInput
  }

  export type connacScalarWhereWithAggregatesInput = {
    AND?: connacScalarWhereWithAggregatesInput | connacScalarWhereWithAggregatesInput[]
    OR?: connacScalarWhereWithAggregatesInput[]
    NOT?: connacScalarWhereWithAggregatesInput | connacScalarWhereWithAggregatesInput[]
    idconvenio?: IntWithAggregatesFilter | number
    convenio?: StringNullableWithAggregatesFilter | string | null
    estado?: StringNullableWithAggregatesFilter | string | null
    pagina?: StringNullableWithAggregatesFilter | string | null
  }

  export type ganadoresWhereInput = {
    AND?: ganadoresWhereInput | ganadoresWhereInput[]
    OR?: ganadoresWhereInput[]
    NOT?: ganadoresWhereInput | ganadoresWhereInput[]
    idganador?: IntFilter | number
    participante?: StringNullableFilter | string | null
    premio?: IntNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    telefono?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
  }

  export type ganadoresOrderByWithRelationInput = {
    idganador?: SortOrder
    participante?: SortOrderInput | SortOrder
    premio?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
  }

  export type ganadoresWhereUniqueInput = {
    idganador?: number
  }

  export type ganadoresOrderByWithAggregationInput = {
    idganador?: SortOrder
    participante?: SortOrderInput | SortOrder
    premio?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    _count?: ganadoresCountOrderByAggregateInput
    _avg?: ganadoresAvgOrderByAggregateInput
    _max?: ganadoresMaxOrderByAggregateInput
    _min?: ganadoresMinOrderByAggregateInput
    _sum?: ganadoresSumOrderByAggregateInput
  }

  export type ganadoresScalarWhereWithAggregatesInput = {
    AND?: ganadoresScalarWhereWithAggregatesInput | ganadoresScalarWhereWithAggregatesInput[]
    OR?: ganadoresScalarWhereWithAggregatesInput[]
    NOT?: ganadoresScalarWhereWithAggregatesInput | ganadoresScalarWhereWithAggregatesInput[]
    idganador?: IntWithAggregatesFilter | number
    participante?: StringNullableWithAggregatesFilter | string | null
    premio?: IntNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    telefono?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
  }

  export type participantes_sorteoWhereInput = {
    AND?: participantes_sorteoWhereInput | participantes_sorteoWhereInput[]
    OR?: participantes_sorteoWhereInput[]
    NOT?: participantes_sorteoWhereInput | participantes_sorteoWhereInput[]
    participante?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
    doble?: IntFilter | number
    estado?: IntFilter | number
    telefono?: StringNullableFilter | string | null
    idparticipante?: IntFilter | number
  }

  export type participantes_sorteoOrderByWithRelationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    doble?: SortOrder
    estado?: SortOrder
    telefono?: SortOrderInput | SortOrder
    idparticipante?: SortOrder
  }

  export type participantes_sorteoWhereUniqueInput = {
    idparticipante?: number
  }

  export type participantes_sorteoOrderByWithAggregationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    doble?: SortOrder
    estado?: SortOrder
    telefono?: SortOrderInput | SortOrder
    idparticipante?: SortOrder
    _count?: participantes_sorteoCountOrderByAggregateInput
    _avg?: participantes_sorteoAvgOrderByAggregateInput
    _max?: participantes_sorteoMaxOrderByAggregateInput
    _min?: participantes_sorteoMinOrderByAggregateInput
    _sum?: participantes_sorteoSumOrderByAggregateInput
  }

  export type participantes_sorteoScalarWhereWithAggregatesInput = {
    AND?: participantes_sorteoScalarWhereWithAggregatesInput | participantes_sorteoScalarWhereWithAggregatesInput[]
    OR?: participantes_sorteoScalarWhereWithAggregatesInput[]
    NOT?: participantes_sorteoScalarWhereWithAggregatesInput | participantes_sorteoScalarWhereWithAggregatesInput[]
    participante?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
    doble?: IntWithAggregatesFilter | number
    estado?: IntWithAggregatesFilter | number
    telefono?: StringNullableWithAggregatesFilter | string | null
    idparticipante?: IntWithAggregatesFilter | number
  }

  export type sociosWhereInput = {
    AND?: sociosWhereInput | sociosWhereInput[]
    OR?: sociosWhereInput[]
    NOT?: sociosWhereInput | sociosWhereInput[]
    idsocio?: IntFilter | number
    apellido?: StringNullableFilter | string | null
    nombre?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
    mail?: StringNullableFilter | string | null
    telefono?: BigIntNullableFilter | bigint | number | null
    socio?: BoolNullableFilter | boolean | null
    nosocio?: BoolNullableFilter | boolean | null
    referido?: BoolNullableFilter | boolean | null
    fecha_solicitud?: DateTimeNullableFilter | Date | string | null
    cargada?: BoolNullableFilter | boolean | null
  }

  export type sociosOrderByWithRelationInput = {
    idsocio?: SortOrder
    apellido?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    nosocio?: SortOrderInput | SortOrder
    referido?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrderInput | SortOrder
    cargada?: SortOrderInput | SortOrder
  }

  export type sociosWhereUniqueInput = {
    idsocio?: number
  }

  export type sociosOrderByWithAggregationInput = {
    idsocio?: SortOrder
    apellido?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    nosocio?: SortOrderInput | SortOrder
    referido?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrderInput | SortOrder
    cargada?: SortOrderInput | SortOrder
    _count?: sociosCountOrderByAggregateInput
    _avg?: sociosAvgOrderByAggregateInput
    _max?: sociosMaxOrderByAggregateInput
    _min?: sociosMinOrderByAggregateInput
    _sum?: sociosSumOrderByAggregateInput
  }

  export type sociosScalarWhereWithAggregatesInput = {
    AND?: sociosScalarWhereWithAggregatesInput | sociosScalarWhereWithAggregatesInput[]
    OR?: sociosScalarWhereWithAggregatesInput[]
    NOT?: sociosScalarWhereWithAggregatesInput | sociosScalarWhereWithAggregatesInput[]
    idsocio?: IntWithAggregatesFilter | number
    apellido?: StringNullableWithAggregatesFilter | string | null
    nombre?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
    mail?: StringNullableWithAggregatesFilter | string | null
    telefono?: BigIntNullableWithAggregatesFilter | bigint | number | null
    socio?: BoolNullableWithAggregatesFilter | boolean | null
    nosocio?: BoolNullableWithAggregatesFilter | boolean | null
    referido?: BoolNullableWithAggregatesFilter | boolean | null
    fecha_solicitud?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cargada?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type solicitud_sorteoWhereInput = {
    AND?: solicitud_sorteoWhereInput | solicitud_sorteoWhereInput[]
    OR?: solicitud_sorteoWhereInput[]
    NOT?: solicitud_sorteoWhereInput | solicitud_sorteoWhereInput[]
    idsocio?: IntFilter | number
    apellido?: StringNullableFilter | string | null
    nombre?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
    mail?: StringNullableFilter | string | null
    telefono?: BigIntNullableFilter | bigint | number | null
    socio?: BoolNullableFilter | boolean | null
    nosocio?: BoolNullableFilter | boolean | null
    referido?: BoolNullableFilter | boolean | null
    fecha_solicitud?: DateTimeNullableFilter | Date | string | null
    cargada?: BoolNullableFilter | boolean | null
    obra_soc?: StringNullableFilter | string | null
  }

  export type solicitud_sorteoOrderByWithRelationInput = {
    idsocio?: SortOrder
    apellido?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    nosocio?: SortOrderInput | SortOrder
    referido?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrderInput | SortOrder
    cargada?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
  }

  export type solicitud_sorteoWhereUniqueInput = {
    idsocio?: number
  }

  export type solicitud_sorteoOrderByWithAggregationInput = {
    idsocio?: SortOrder
    apellido?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    socio?: SortOrderInput | SortOrder
    nosocio?: SortOrderInput | SortOrder
    referido?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrderInput | SortOrder
    cargada?: SortOrderInput | SortOrder
    obra_soc?: SortOrderInput | SortOrder
    _count?: solicitud_sorteoCountOrderByAggregateInput
    _avg?: solicitud_sorteoAvgOrderByAggregateInput
    _max?: solicitud_sorteoMaxOrderByAggregateInput
    _min?: solicitud_sorteoMinOrderByAggregateInput
    _sum?: solicitud_sorteoSumOrderByAggregateInput
  }

  export type solicitud_sorteoScalarWhereWithAggregatesInput = {
    AND?: solicitud_sorteoScalarWhereWithAggregatesInput | solicitud_sorteoScalarWhereWithAggregatesInput[]
    OR?: solicitud_sorteoScalarWhereWithAggregatesInput[]
    NOT?: solicitud_sorteoScalarWhereWithAggregatesInput | solicitud_sorteoScalarWhereWithAggregatesInput[]
    idsocio?: IntWithAggregatesFilter | number
    apellido?: StringNullableWithAggregatesFilter | string | null
    nombre?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
    mail?: StringNullableWithAggregatesFilter | string | null
    telefono?: BigIntNullableWithAggregatesFilter | bigint | number | null
    socio?: BoolNullableWithAggregatesFilter | boolean | null
    nosocio?: BoolNullableWithAggregatesFilter | boolean | null
    referido?: BoolNullableWithAggregatesFilter | boolean | null
    fecha_solicitud?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cargada?: BoolNullableWithAggregatesFilter | boolean | null
    obra_soc?: StringNullableWithAggregatesFilter | string | null
  }

  export type solicitud_sorteo_webWhereInput = {
    AND?: solicitud_sorteo_webWhereInput | solicitud_sorteo_webWhereInput[]
    OR?: solicitud_sorteo_webWhereInput[]
    NOT?: solicitud_sorteo_webWhereInput | solicitud_sorteo_webWhereInput[]
    idnosocio?: IntFilter | number
    solicitante?: StringNullableFilter | string | null
    dni?: BigIntNullableFilter | bigint | number | null
    telefono?: StringNullableFilter | string | null
    mail?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    detalle?: StringNullableFilter | string | null
    estado?: BoolNullableFilter | boolean | null
  }

  export type solicitud_sorteo_webOrderByWithRelationInput = {
    idnosocio?: SortOrder
    solicitante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
  }

  export type solicitud_sorteo_webWhereUniqueInput = {
    idnosocio?: number
  }

  export type solicitud_sorteo_webOrderByWithAggregationInput = {
    idnosocio?: SortOrder
    solicitante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: solicitud_sorteo_webCountOrderByAggregateInput
    _avg?: solicitud_sorteo_webAvgOrderByAggregateInput
    _max?: solicitud_sorteo_webMaxOrderByAggregateInput
    _min?: solicitud_sorteo_webMinOrderByAggregateInput
    _sum?: solicitud_sorteo_webSumOrderByAggregateInput
  }

  export type solicitud_sorteo_webScalarWhereWithAggregatesInput = {
    AND?: solicitud_sorteo_webScalarWhereWithAggregatesInput | solicitud_sorteo_webScalarWhereWithAggregatesInput[]
    OR?: solicitud_sorteo_webScalarWhereWithAggregatesInput[]
    NOT?: solicitud_sorteo_webScalarWhereWithAggregatesInput | solicitud_sorteo_webScalarWhereWithAggregatesInput[]
    idnosocio?: IntWithAggregatesFilter | number
    solicitante?: StringNullableWithAggregatesFilter | string | null
    dni?: BigIntNullableWithAggregatesFilter | bigint | number | null
    telefono?: StringNullableWithAggregatesFilter | string | null
    mail?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    detalle?: StringNullableWithAggregatesFilter | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type beneficiosCreateInput = {
    socio?: number | null
    dni?: number | null
    idcomercio?: number | null
    nombre?: string | null
    monto_compra?: number | null
    beneficio?: number | null
    monto_final?: number | null
    fecha?: Date | string | null
    n_trans?: string | null
    ape_nom?: string | null
  }

  export type beneficiosUncheckedCreateInput = {
    idbeneficio?: number
    socio?: number | null
    dni?: number | null
    idcomercio?: number | null
    nombre?: string | null
    monto_compra?: number | null
    beneficio?: number | null
    monto_final?: number | null
    fecha?: Date | string | null
    n_trans?: string | null
    ape_nom?: string | null
  }

  export type beneficiosUpdateInput = {
    socio?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    idcomercio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    monto_compra?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficio?: NullableIntFieldUpdateOperationsInput | number | null
    monto_final?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    n_trans?: NullableStringFieldUpdateOperationsInput | string | null
    ape_nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiosUncheckedUpdateInput = {
    idbeneficio?: IntFieldUpdateOperationsInput | number
    socio?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    idcomercio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    monto_compra?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficio?: NullableIntFieldUpdateOperationsInput | number | null
    monto_final?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    n_trans?: NullableStringFieldUpdateOperationsInput | string | null
    ape_nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiosCreateManyInput = {
    idbeneficio?: number
    socio?: number | null
    dni?: number | null
    idcomercio?: number | null
    nombre?: string | null
    monto_compra?: number | null
    beneficio?: number | null
    monto_final?: number | null
    fecha?: Date | string | null
    n_trans?: string | null
    ape_nom?: string | null
  }

  export type beneficiosUpdateManyMutationInput = {
    socio?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    idcomercio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    monto_compra?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficio?: NullableIntFieldUpdateOperationsInput | number | null
    monto_final?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    n_trans?: NullableStringFieldUpdateOperationsInput | string | null
    ape_nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiosUncheckedUpdateManyInput = {
    idbeneficio?: IntFieldUpdateOperationsInput | number
    socio?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    idcomercio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    monto_compra?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficio?: NullableIntFieldUpdateOperationsInput | number | null
    monto_final?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    n_trans?: NullableStringFieldUpdateOperationsInput | string | null
    ape_nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comerciosCreateInput = {
    comercio?: string | null
    rubro?: string | null
    direccion?: string | null
    beneficio?: string | null
    localidad?: string | null
    estado?: boolean | null
    descuento?: number | null
  }

  export type comerciosUncheckedCreateInput = {
    idcomercio?: number
    comercio?: string | null
    rubro?: string | null
    direccion?: string | null
    beneficio?: string | null
    localidad?: string | null
    estado?: boolean | null
    descuento?: number | null
  }

  export type comerciosUpdateInput = {
    comercio?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    beneficio?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    descuento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comerciosUncheckedUpdateInput = {
    idcomercio?: IntFieldUpdateOperationsInput | number
    comercio?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    beneficio?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    descuento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comerciosCreateManyInput = {
    idcomercio?: number
    comercio?: string | null
    rubro?: string | null
    direccion?: string | null
    beneficio?: string | null
    localidad?: string | null
    estado?: boolean | null
    descuento?: number | null
  }

  export type comerciosUpdateManyMutationInput = {
    comercio?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    beneficio?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    descuento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comerciosUncheckedUpdateManyInput = {
    idcomercio?: IntFieldUpdateOperationsInput | number
    comercio?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    beneficio?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    descuento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type connacCreateInput = {
    convenio?: string | null
    estado?: string | null
    pagina?: string | null
  }

  export type connacUncheckedCreateInput = {
    idconvenio?: number
    convenio?: string | null
    estado?: string | null
    pagina?: string | null
  }

  export type connacUpdateInput = {
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pagina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type connacUncheckedUpdateInput = {
    idconvenio?: IntFieldUpdateOperationsInput | number
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pagina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type connacCreateManyInput = {
    idconvenio?: number
    convenio?: string | null
    estado?: string | null
    pagina?: string | null
  }

  export type connacUpdateManyMutationInput = {
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pagina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type connacUncheckedUpdateManyInput = {
    idconvenio?: IntFieldUpdateOperationsInput | number
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pagina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ganadoresCreateInput = {
    participante?: string | null
    premio?: number | null
    fecha?: Date | string | null
    telefono?: string | null
    dni?: number | null
  }

  export type ganadoresUncheckedCreateInput = {
    idganador?: number
    participante?: string | null
    premio?: number | null
    fecha?: Date | string | null
    telefono?: string | null
    dni?: number | null
  }

  export type ganadoresUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    premio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ganadoresUncheckedUpdateInput = {
    idganador?: IntFieldUpdateOperationsInput | number
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    premio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ganadoresCreateManyInput = {
    idganador?: number
    participante?: string | null
    premio?: number | null
    fecha?: Date | string | null
    telefono?: string | null
    dni?: number | null
  }

  export type ganadoresUpdateManyMutationInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    premio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ganadoresUncheckedUpdateManyInput = {
    idganador?: IntFieldUpdateOperationsInput | number
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    premio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type participantes_sorteoCreateInput = {
    participante?: string | null
    dni?: number | null
    doble?: number
    estado?: number
    telefono?: string | null
  }

  export type participantes_sorteoUncheckedCreateInput = {
    participante?: string | null
    dni?: number | null
    doble?: number
    estado?: number
    telefono?: string | null
    idparticipante?: number
  }

  export type participantes_sorteoUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    doble?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participantes_sorteoUncheckedUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    doble?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    idparticipante?: IntFieldUpdateOperationsInput | number
  }

  export type participantes_sorteoCreateManyInput = {
    participante?: string | null
    dni?: number | null
    doble?: number
    estado?: number
    telefono?: string | null
    idparticipante?: number
  }

  export type participantes_sorteoUpdateManyMutationInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    doble?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participantes_sorteoUncheckedUpdateManyInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    doble?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    idparticipante?: IntFieldUpdateOperationsInput | number
  }

  export type sociosCreateInput = {
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
  }

  export type sociosUncheckedCreateInput = {
    idsocio?: number
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
  }

  export type sociosUpdateInput = {
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sociosUncheckedUpdateInput = {
    idsocio?: IntFieldUpdateOperationsInput | number
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sociosCreateManyInput = {
    idsocio?: number
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
  }

  export type sociosUpdateManyMutationInput = {
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sociosUncheckedUpdateManyInput = {
    idsocio?: IntFieldUpdateOperationsInput | number
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type solicitud_sorteoCreateInput = {
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
    obra_soc?: string | null
  }

  export type solicitud_sorteoUncheckedCreateInput = {
    idsocio?: number
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
    obra_soc?: string | null
  }

  export type solicitud_sorteoUpdateInput = {
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type solicitud_sorteoUncheckedUpdateInput = {
    idsocio?: IntFieldUpdateOperationsInput | number
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type solicitud_sorteoCreateManyInput = {
    idsocio?: number
    apellido?: string | null
    nombre?: string | null
    dni?: number | null
    mail?: string | null
    telefono?: bigint | number | null
    socio?: boolean | null
    nosocio?: boolean | null
    referido?: boolean | null
    fecha_solicitud?: Date | string | null
    cargada?: boolean | null
    obra_soc?: string | null
  }

  export type solicitud_sorteoUpdateManyMutationInput = {
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type solicitud_sorteoUncheckedUpdateManyInput = {
    idsocio?: IntFieldUpdateOperationsInput | number
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    socio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nosocio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    referido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_solicitud?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cargada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    obra_soc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type solicitud_sorteo_webCreateInput = {
    solicitante?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    fecha?: Date | string | null
    detalle?: string | null
    estado?: boolean | null
  }

  export type solicitud_sorteo_webUncheckedCreateInput = {
    idnosocio?: number
    solicitante?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    fecha?: Date | string | null
    detalle?: string | null
    estado?: boolean | null
  }

  export type solicitud_sorteo_webUpdateInput = {
    solicitante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type solicitud_sorteo_webUncheckedUpdateInput = {
    idnosocio?: IntFieldUpdateOperationsInput | number
    solicitante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type solicitud_sorteo_webCreateManyInput = {
    idnosocio?: number
    solicitante?: string | null
    dni?: bigint | number | null
    telefono?: string | null
    mail?: string | null
    fecha?: Date | string | null
    detalle?: string | null
    estado?: boolean | null
  }

  export type solicitud_sorteo_webUpdateManyMutationInput = {
    solicitante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type solicitud_sorteo_webUncheckedUpdateManyInput = {
    idnosocio?: IntFieldUpdateOperationsInput | number
    solicitante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type beneficiosCountOrderByAggregateInput = {
    idbeneficio?: SortOrder
    socio?: SortOrder
    dni?: SortOrder
    idcomercio?: SortOrder
    nombre?: SortOrder
    monto_compra?: SortOrder
    beneficio?: SortOrder
    monto_final?: SortOrder
    fecha?: SortOrder
    n_trans?: SortOrder
    ape_nom?: SortOrder
  }

  export type beneficiosAvgOrderByAggregateInput = {
    idbeneficio?: SortOrder
    socio?: SortOrder
    dni?: SortOrder
    idcomercio?: SortOrder
    monto_compra?: SortOrder
    beneficio?: SortOrder
    monto_final?: SortOrder
  }

  export type beneficiosMaxOrderByAggregateInput = {
    idbeneficio?: SortOrder
    socio?: SortOrder
    dni?: SortOrder
    idcomercio?: SortOrder
    nombre?: SortOrder
    monto_compra?: SortOrder
    beneficio?: SortOrder
    monto_final?: SortOrder
    fecha?: SortOrder
    n_trans?: SortOrder
    ape_nom?: SortOrder
  }

  export type beneficiosMinOrderByAggregateInput = {
    idbeneficio?: SortOrder
    socio?: SortOrder
    dni?: SortOrder
    idcomercio?: SortOrder
    nombre?: SortOrder
    monto_compra?: SortOrder
    beneficio?: SortOrder
    monto_final?: SortOrder
    fecha?: SortOrder
    n_trans?: SortOrder
    ape_nom?: SortOrder
  }

  export type beneficiosSumOrderByAggregateInput = {
    idbeneficio?: SortOrder
    socio?: SortOrder
    dni?: SortOrder
    idcomercio?: SortOrder
    monto_compra?: SortOrder
    beneficio?: SortOrder
    monto_final?: SortOrder
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

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type comerciosCountOrderByAggregateInput = {
    idcomercio?: SortOrder
    comercio?: SortOrder
    rubro?: SortOrder
    direccion?: SortOrder
    beneficio?: SortOrder
    localidad?: SortOrder
    estado?: SortOrder
    descuento?: SortOrder
  }

  export type comerciosAvgOrderByAggregateInput = {
    idcomercio?: SortOrder
    descuento?: SortOrder
  }

  export type comerciosMaxOrderByAggregateInput = {
    idcomercio?: SortOrder
    comercio?: SortOrder
    rubro?: SortOrder
    direccion?: SortOrder
    beneficio?: SortOrder
    localidad?: SortOrder
    estado?: SortOrder
    descuento?: SortOrder
  }

  export type comerciosMinOrderByAggregateInput = {
    idcomercio?: SortOrder
    comercio?: SortOrder
    rubro?: SortOrder
    direccion?: SortOrder
    beneficio?: SortOrder
    localidad?: SortOrder
    estado?: SortOrder
    descuento?: SortOrder
  }

  export type comerciosSumOrderByAggregateInput = {
    idcomercio?: SortOrder
    descuento?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type connacCountOrderByAggregateInput = {
    idconvenio?: SortOrder
    convenio?: SortOrder
    estado?: SortOrder
    pagina?: SortOrder
  }

  export type connacAvgOrderByAggregateInput = {
    idconvenio?: SortOrder
  }

  export type connacMaxOrderByAggregateInput = {
    idconvenio?: SortOrder
    convenio?: SortOrder
    estado?: SortOrder
    pagina?: SortOrder
  }

  export type connacMinOrderByAggregateInput = {
    idconvenio?: SortOrder
    convenio?: SortOrder
    estado?: SortOrder
    pagina?: SortOrder
  }

  export type connacSumOrderByAggregateInput = {
    idconvenio?: SortOrder
  }

  export type ganadoresCountOrderByAggregateInput = {
    idganador?: SortOrder
    participante?: SortOrder
    premio?: SortOrder
    fecha?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
  }

  export type ganadoresAvgOrderByAggregateInput = {
    idganador?: SortOrder
    premio?: SortOrder
    dni?: SortOrder
  }

  export type ganadoresMaxOrderByAggregateInput = {
    idganador?: SortOrder
    participante?: SortOrder
    premio?: SortOrder
    fecha?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
  }

  export type ganadoresMinOrderByAggregateInput = {
    idganador?: SortOrder
    participante?: SortOrder
    premio?: SortOrder
    fecha?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
  }

  export type ganadoresSumOrderByAggregateInput = {
    idganador?: SortOrder
    premio?: SortOrder
    dni?: SortOrder
  }

  export type participantes_sorteoCountOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    doble?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    idparticipante?: SortOrder
  }

  export type participantes_sorteoAvgOrderByAggregateInput = {
    dni?: SortOrder
    doble?: SortOrder
    estado?: SortOrder
    idparticipante?: SortOrder
  }

  export type participantes_sorteoMaxOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    doble?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    idparticipante?: SortOrder
  }

  export type participantes_sorteoMinOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    doble?: SortOrder
    estado?: SortOrder
    telefono?: SortOrder
    idparticipante?: SortOrder
  }

  export type participantes_sorteoSumOrderByAggregateInput = {
    dni?: SortOrder
    doble?: SortOrder
    estado?: SortOrder
    idparticipante?: SortOrder
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

  export type sociosCountOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
  }

  export type sociosAvgOrderByAggregateInput = {
    idsocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
  }

  export type sociosMaxOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
  }

  export type sociosMinOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
  }

  export type sociosSumOrderByAggregateInput = {
    idsocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
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

  export type solicitud_sorteoCountOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
    obra_soc?: SortOrder
  }

  export type solicitud_sorteoAvgOrderByAggregateInput = {
    idsocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
  }

  export type solicitud_sorteoMaxOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
    obra_soc?: SortOrder
  }

  export type solicitud_sorteoMinOrderByAggregateInput = {
    idsocio?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    socio?: SortOrder
    nosocio?: SortOrder
    referido?: SortOrder
    fecha_solicitud?: SortOrder
    cargada?: SortOrder
    obra_soc?: SortOrder
  }

  export type solicitud_sorteoSumOrderByAggregateInput = {
    idsocio?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
  }

  export type solicitud_sorteo_webCountOrderByAggregateInput = {
    idnosocio?: SortOrder
    solicitante?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    fecha?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
  }

  export type solicitud_sorteo_webAvgOrderByAggregateInput = {
    idnosocio?: SortOrder
    dni?: SortOrder
  }

  export type solicitud_sorteo_webMaxOrderByAggregateInput = {
    idnosocio?: SortOrder
    solicitante?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    fecha?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
  }

  export type solicitud_sorteo_webMinOrderByAggregateInput = {
    idnosocio?: SortOrder
    solicitante?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    fecha?: SortOrder
    detalle?: SortOrder
    estado?: SortOrder
  }

  export type solicitud_sorteo_webSumOrderByAggregateInput = {
    idnosocio?: SortOrder
    dni?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
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