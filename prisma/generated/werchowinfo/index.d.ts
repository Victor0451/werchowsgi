
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type c1000Payload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    zona: number
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
  }, ExtArgs["result"]["c1000"]>
  composites: {}
}

/**
 * Model c1000
 * 
 */
export type c1000 = runtime.Types.DefaultSelection<c1000Payload>
export type c1000mPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
    id: number
  }, ExtArgs["result"]["c1000m"]>
  composites: {}
}

/**
 * Model c1000m
 * 
 */
export type c1000m = runtime.Types.DefaultSelection<c1000mPayload>
export type cbancoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }, ExtArgs["result"]["cbanco"]>
  composites: {}
}

/**
 * Model cbanco
 * 
 */
export type cbanco = runtime.Types.DefaultSelection<cbancoPayload>
export type cconvenioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id_mora: number
    tipo: string | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
  }, ExtArgs["result"]["cconvenio"]>
  composites: {}
}

/**
 * Model cconvenio
 * 
 */
export type cconvenio = runtime.Types.DefaultSelection<cconvenioPayload>
export type cpoliciaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }, ExtArgs["result"]["cpolicia"]>
  composites: {}
}

/**
 * Model cpolicia
 * 
 */
export type cpolicia = runtime.Types.DefaultSelection<cpoliciaPayload>
export type cprestamosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    descr: string | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
  }, ExtArgs["result"]["cprestamos"]>
  composites: {}
}

/**
 * Model cprestamos
 * 
 */
export type cprestamos = runtime.Types.DefaultSelection<cprestamosPayload>
export type ctjtPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }, ExtArgs["result"]["ctjt"]>
  composites: {}
}

/**
 * Model ctjt
 * 
 */
export type ctjt = runtime.Types.DefaultSelection<ctjtPayload>
export type ctjtmPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    grupo: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    adelantado: number | null
    descr: string | null
    id: number
  }, ExtArgs["result"]["ctjtm"]>
  composites: {}
}

/**
 * Model ctjtm
 * 
 */
export type ctjtm = runtime.Types.DefaultSelection<ctjtmPayload>
export type m1000Payload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idm1000: number
    zona: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }, ExtArgs["result"]["m1000"]>
  composites: {}
}

/**
 * Model m1000
 * 
 */
export type m1000 = runtime.Types.DefaultSelection<m1000Payload>
export type mtjtPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    idmtjt: number
    grupo: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }, ExtArgs["result"]["mtjt"]>
  composites: {}
}

/**
 * Model mtjt
 * 
 */
export type mtjt = runtime.Types.DefaultSelection<mtjtPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more C1000s
 * const c1000s = await prisma.c1000.findMany()
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
   * // Fetch zero or more C1000s
   * const c1000s = await prisma.c1000.findMany()
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
   * `prisma.c1000`: Exposes CRUD operations for the **c1000** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more C1000s
    * const c1000s = await prisma.c1000.findMany()
    * ```
    */
  get c1000(): Prisma.c1000Delegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.c1000m`: Exposes CRUD operations for the **c1000m** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more C1000ms
    * const c1000ms = await prisma.c1000m.findMany()
    * ```
    */
  get c1000m(): Prisma.c1000mDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cbanco`: Exposes CRUD operations for the **cbanco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cbancos
    * const cbancos = await prisma.cbanco.findMany()
    * ```
    */
  get cbanco(): Prisma.cbancoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cconvenio`: Exposes CRUD operations for the **cconvenio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cconvenios
    * const cconvenios = await prisma.cconvenio.findMany()
    * ```
    */
  get cconvenio(): Prisma.cconvenioDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cpolicia`: Exposes CRUD operations for the **cpolicia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cpolicias
    * const cpolicias = await prisma.cpolicia.findMany()
    * ```
    */
  get cpolicia(): Prisma.cpoliciaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cprestamos`: Exposes CRUD operations for the **cprestamos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cprestamos
    * const cprestamos = await prisma.cprestamos.findMany()
    * ```
    */
  get cprestamos(): Prisma.cprestamosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.ctjt`: Exposes CRUD operations for the **ctjt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ctjts
    * const ctjts = await prisma.ctjt.findMany()
    * ```
    */
  get ctjt(): Prisma.ctjtDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.ctjtm`: Exposes CRUD operations for the **ctjtm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ctjtms
    * const ctjtms = await prisma.ctjtm.findMany()
    * ```
    */
  get ctjtm(): Prisma.ctjtmDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.m1000`: Exposes CRUD operations for the **m1000** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more M1000s
    * const m1000s = await prisma.m1000.findMany()
    * ```
    */
  get m1000(): Prisma.m1000Delegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.mtjt`: Exposes CRUD operations for the **mtjt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mtjts
    * const mtjts = await prisma.mtjt.findMany()
    * ```
    */
  get mtjt(): Prisma.mtjtDelegate<GlobalReject, ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'c1000' | 'c1000m' | 'cbanco' | 'cconvenio' | 'cpolicia' | 'cprestamos' | 'ctjt' | 'ctjtm' | 'm1000' | 'mtjt'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      c1000: {
        operations: {
          findUnique: {
            args: Prisma.c1000FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload> | null
            payload: c1000Payload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.c1000FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          findFirst: {
            args: Prisma.c1000FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload> | null
            payload: c1000Payload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.c1000FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          findMany: {
            args: Prisma.c1000FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>[]
            payload: c1000Payload<ExtArgs>
          }
          create: {
            args: Prisma.c1000CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          createMany: {
            args: Prisma.c1000CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000Payload<ExtArgs>
          }
          delete: {
            args: Prisma.c1000DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          update: {
            args: Prisma.c1000UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.c1000DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000Payload<ExtArgs>
          }
          updateMany: {
            args: Prisma.c1000UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000Payload<ExtArgs>
          }
          upsert: {
            args: Prisma.c1000UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000Payload>
            payload: c1000Payload<ExtArgs>
          }
          aggregate: {
            args: Prisma.C1000AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateC1000>
            payload: c1000Payload<ExtArgs>
          }
          groupBy: {
            args: Prisma.c1000GroupByArgs<ExtArgs>,
            result: $Utils.Optional<C1000GroupByOutputType>[]
            payload: c1000Payload<ExtArgs>
          }
          count: {
            args: Prisma.c1000CountArgs<ExtArgs>,
            result: $Utils.Optional<C1000CountAggregateOutputType> | number
            payload: c1000Payload<ExtArgs>
          }
        }
      }
      c1000m: {
        operations: {
          findUnique: {
            args: Prisma.c1000mFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload> | null
            payload: c1000mPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.c1000mFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.c1000mFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload> | null
            payload: c1000mPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.c1000mFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.c1000mFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>[]
            payload: c1000mPayload<ExtArgs>
          }
          create: {
            args: Prisma.c1000mCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.c1000mCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000mPayload<ExtArgs>
          }
          delete: {
            args: Prisma.c1000mDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          update: {
            args: Prisma.c1000mUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.c1000mDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000mPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.c1000mUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: c1000mPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.c1000mUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<c1000mPayload>
            payload: c1000mPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.C1000mAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateC1000m>
            payload: c1000mPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.c1000mGroupByArgs<ExtArgs>,
            result: $Utils.Optional<C1000mGroupByOutputType>[]
            payload: c1000mPayload<ExtArgs>
          }
          count: {
            args: Prisma.c1000mCountArgs<ExtArgs>,
            result: $Utils.Optional<C1000mCountAggregateOutputType> | number
            payload: c1000mPayload<ExtArgs>
          }
        }
      }
      cbanco: {
        operations: {
          findUnique: {
            args: Prisma.cbancoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload> | null
            payload: cbancoPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cbancoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cbancoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload> | null
            payload: cbancoPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cbancoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cbancoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>[]
            payload: cbancoPayload<ExtArgs>
          }
          create: {
            args: Prisma.cbancoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cbancoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cbancoPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cbancoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          update: {
            args: Prisma.cbancoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cbancoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cbancoPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cbancoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cbancoPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cbancoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cbancoPayload>
            payload: cbancoPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CbancoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCbanco>
            payload: cbancoPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.cbancoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CbancoGroupByOutputType>[]
            payload: cbancoPayload<ExtArgs>
          }
          count: {
            args: Prisma.cbancoCountArgs<ExtArgs>,
            result: $Utils.Optional<CbancoCountAggregateOutputType> | number
            payload: cbancoPayload<ExtArgs>
          }
        }
      }
      cconvenio: {
        operations: {
          findUnique: {
            args: Prisma.cconvenioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload> | null
            payload: cconvenioPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cconvenioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cconvenioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload> | null
            payload: cconvenioPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cconvenioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cconvenioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>[]
            payload: cconvenioPayload<ExtArgs>
          }
          create: {
            args: Prisma.cconvenioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cconvenioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cconvenioPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cconvenioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          update: {
            args: Prisma.cconvenioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cconvenioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cconvenioPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cconvenioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cconvenioPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cconvenioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cconvenioPayload>
            payload: cconvenioPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CconvenioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCconvenio>
            payload: cconvenioPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.cconvenioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CconvenioGroupByOutputType>[]
            payload: cconvenioPayload<ExtArgs>
          }
          count: {
            args: Prisma.cconvenioCountArgs<ExtArgs>,
            result: $Utils.Optional<CconvenioCountAggregateOutputType> | number
            payload: cconvenioPayload<ExtArgs>
          }
        }
      }
      cpolicia: {
        operations: {
          findUnique: {
            args: Prisma.cpoliciaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload> | null
            payload: cpoliciaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cpoliciaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cpoliciaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload> | null
            payload: cpoliciaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cpoliciaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cpoliciaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>[]
            payload: cpoliciaPayload<ExtArgs>
          }
          create: {
            args: Prisma.cpoliciaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cpoliciaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cpoliciaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cpoliciaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          update: {
            args: Prisma.cpoliciaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cpoliciaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cpoliciaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cpoliciaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cpoliciaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cpoliciaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cpoliciaPayload>
            payload: cpoliciaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CpoliciaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCpolicia>
            payload: cpoliciaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.cpoliciaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CpoliciaGroupByOutputType>[]
            payload: cpoliciaPayload<ExtArgs>
          }
          count: {
            args: Prisma.cpoliciaCountArgs<ExtArgs>,
            result: $Utils.Optional<CpoliciaCountAggregateOutputType> | number
            payload: cpoliciaPayload<ExtArgs>
          }
        }
      }
      cprestamos: {
        operations: {
          findUnique: {
            args: Prisma.cprestamosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload> | null
            payload: cprestamosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cprestamosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cprestamosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload> | null
            payload: cprestamosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cprestamosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cprestamosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>[]
            payload: cprestamosPayload<ExtArgs>
          }
          create: {
            args: Prisma.cprestamosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cprestamosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cprestamosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cprestamosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          update: {
            args: Prisma.cprestamosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cprestamosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cprestamosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cprestamosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cprestamosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cprestamosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cprestamosPayload>
            payload: cprestamosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CprestamosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCprestamos>
            payload: cprestamosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.cprestamosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CprestamosGroupByOutputType>[]
            payload: cprestamosPayload<ExtArgs>
          }
          count: {
            args: Prisma.cprestamosCountArgs<ExtArgs>,
            result: $Utils.Optional<CprestamosCountAggregateOutputType> | number
            payload: cprestamosPayload<ExtArgs>
          }
        }
      }
      ctjt: {
        operations: {
          findUnique: {
            args: Prisma.ctjtFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload> | null
            payload: ctjtPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ctjtFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ctjtFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload> | null
            payload: ctjtPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ctjtFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ctjtFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>[]
            payload: ctjtPayload<ExtArgs>
          }
          create: {
            args: Prisma.ctjtCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ctjtCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ctjtDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          update: {
            args: Prisma.ctjtUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ctjtDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ctjtUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ctjtUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtPayload>
            payload: ctjtPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CtjtAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCtjt>
            payload: ctjtPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ctjtGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CtjtGroupByOutputType>[]
            payload: ctjtPayload<ExtArgs>
          }
          count: {
            args: Prisma.ctjtCountArgs<ExtArgs>,
            result: $Utils.Optional<CtjtCountAggregateOutputType> | number
            payload: ctjtPayload<ExtArgs>
          }
        }
      }
      ctjtm: {
        operations: {
          findUnique: {
            args: Prisma.ctjtmFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload> | null
            payload: ctjtmPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ctjtmFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ctjtmFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload> | null
            payload: ctjtmPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ctjtmFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ctjtmFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>[]
            payload: ctjtmPayload<ExtArgs>
          }
          create: {
            args: Prisma.ctjtmCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ctjtmCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtmPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ctjtmDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          update: {
            args: Prisma.ctjtmUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ctjtmDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtmPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ctjtmUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ctjtmPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ctjtmUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ctjtmPayload>
            payload: ctjtmPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CtjtmAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCtjtm>
            payload: ctjtmPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ctjtmGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CtjtmGroupByOutputType>[]
            payload: ctjtmPayload<ExtArgs>
          }
          count: {
            args: Prisma.ctjtmCountArgs<ExtArgs>,
            result: $Utils.Optional<CtjtmCountAggregateOutputType> | number
            payload: ctjtmPayload<ExtArgs>
          }
        }
      }
      m1000: {
        operations: {
          findUnique: {
            args: Prisma.m1000FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload> | null
            payload: m1000Payload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.m1000FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          findFirst: {
            args: Prisma.m1000FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload> | null
            payload: m1000Payload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.m1000FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          findMany: {
            args: Prisma.m1000FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>[]
            payload: m1000Payload<ExtArgs>
          }
          create: {
            args: Prisma.m1000CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          createMany: {
            args: Prisma.m1000CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: m1000Payload<ExtArgs>
          }
          delete: {
            args: Prisma.m1000DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          update: {
            args: Prisma.m1000UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.m1000DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: m1000Payload<ExtArgs>
          }
          updateMany: {
            args: Prisma.m1000UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: m1000Payload<ExtArgs>
          }
          upsert: {
            args: Prisma.m1000UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<m1000Payload>
            payload: m1000Payload<ExtArgs>
          }
          aggregate: {
            args: Prisma.M1000AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateM1000>
            payload: m1000Payload<ExtArgs>
          }
          groupBy: {
            args: Prisma.m1000GroupByArgs<ExtArgs>,
            result: $Utils.Optional<M1000GroupByOutputType>[]
            payload: m1000Payload<ExtArgs>
          }
          count: {
            args: Prisma.m1000CountArgs<ExtArgs>,
            result: $Utils.Optional<M1000CountAggregateOutputType> | number
            payload: m1000Payload<ExtArgs>
          }
        }
      }
      mtjt: {
        operations: {
          findUnique: {
            args: Prisma.mtjtFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload> | null
            payload: mtjtPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.mtjtFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.mtjtFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload> | null
            payload: mtjtPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.mtjtFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.mtjtFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>[]
            payload: mtjtPayload<ExtArgs>
          }
          create: {
            args: Prisma.mtjtCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.mtjtCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: mtjtPayload<ExtArgs>
          }
          delete: {
            args: Prisma.mtjtDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          update: {
            args: Prisma.mtjtUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.mtjtDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: mtjtPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.mtjtUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: mtjtPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.mtjtUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<mtjtPayload>
            payload: mtjtPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.MtjtAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMtjt>
            payload: mtjtPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.mtjtGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MtjtGroupByOutputType>[]
            payload: mtjtPayload<ExtArgs>
          }
          count: {
            args: Prisma.mtjtCountArgs<ExtArgs>,
            result: $Utils.Optional<MtjtCountAggregateOutputType> | number
            payload: mtjtPayload<ExtArgs>
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
   * Model c1000
   */


  export type AggregateC1000 = {
    _count: C1000CountAggregateOutputType | null
    _avg: C1000AvgAggregateOutputType | null
    _sum: C1000SumAggregateOutputType | null
    _min: C1000MinAggregateOutputType | null
    _max: C1000MaxAggregateOutputType | null
  }

  export type C1000AvgAggregateOutputType = {
    id: number | null
    zona: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type C1000SumAggregateOutputType = {
    id: number | null
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type C1000MinAggregateOutputType = {
    id: number | null
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
  }

  export type C1000MaxAggregateOutputType = {
    id: number | null
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
  }

  export type C1000CountAggregateOutputType = {
    id: number
    zona: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    descr: number
    _all: number
  }


  export type C1000AvgAggregateInputType = {
    id?: true
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type C1000SumAggregateInputType = {
    id?: true
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type C1000MinAggregateInputType = {
    id?: true
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
  }

  export type C1000MaxAggregateInputType = {
    id?: true
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
  }

  export type C1000CountAggregateInputType = {
    id?: true
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
    _all?: true
  }

  export type C1000AggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which c1000 to aggregate.
     */
    where?: c1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000s to fetch.
     */
    orderBy?: c1000OrderByWithRelationInput | c1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: c1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned c1000s
    **/
    _count?: true | C1000CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: C1000AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: C1000SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: C1000MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: C1000MaxAggregateInputType
  }

  export type GetC1000AggregateType<T extends C1000AggregateArgs> = {
        [P in keyof T & keyof AggregateC1000]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateC1000[P]>
      : GetScalarType<T[P], AggregateC1000[P]>
  }




  export type c1000GroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: c1000WhereInput
    orderBy?: c1000OrderByWithAggregationInput | c1000OrderByWithAggregationInput[]
    by: C1000ScalarFieldEnum[] | C1000ScalarFieldEnum
    having?: c1000ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: C1000CountAggregateInputType | true
    _avg?: C1000AvgAggregateInputType
    _sum?: C1000SumAggregateInputType
    _min?: C1000MinAggregateInputType
    _max?: C1000MaxAggregateInputType
  }


  export type C1000GroupByOutputType = {
    id: number
    zona: number
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
    _count: C1000CountAggregateOutputType | null
    _avg: C1000AvgAggregateOutputType | null
    _sum: C1000SumAggregateOutputType | null
    _min: C1000MinAggregateOutputType | null
    _max: C1000MaxAggregateOutputType | null
  }

  type GetC1000GroupByPayload<T extends c1000GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<C1000GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof C1000GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], C1000GroupByOutputType[P]>
            : GetScalarType<T[P], C1000GroupByOutputType[P]>
        }
      >
    >


  export type c1000Select<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zona?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    descr?: boolean
  }, ExtArgs["result"]["c1000"]>

  export type c1000SelectScalar = {
    id?: boolean
    zona?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    descr?: boolean
  }


  type c1000GetPayload<S extends boolean | null | undefined | c1000Args> = $Types.GetResult<c1000Payload, S>

  type c1000CountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<c1000FindManyArgs, 'select' | 'include'> & {
      select?: C1000CountAggregateInputType | true
    }

  export interface c1000Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['c1000'], meta: { name: 'c1000' } }
    /**
     * Find zero or one C1000 that matches the filter.
     * @param {c1000FindUniqueArgs} args - Arguments to find a C1000
     * @example
     * // Get one C1000
     * const c1000 = await prisma.c1000.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends c1000FindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, c1000FindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'c1000'> extends True ? Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one C1000 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {c1000FindUniqueOrThrowArgs} args - Arguments to find a C1000
     * @example
     * // Get one C1000
     * const c1000 = await prisma.c1000.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends c1000FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first C1000 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000FindFirstArgs} args - Arguments to find a C1000
     * @example
     * // Get one C1000
     * const c1000 = await prisma.c1000.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends c1000FindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, c1000FindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'c1000'> extends True ? Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first C1000 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000FindFirstOrThrowArgs} args - Arguments to find a C1000
     * @example
     * // Get one C1000
     * const c1000 = await prisma.c1000.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends c1000FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more C1000s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all C1000s
     * const c1000s = await prisma.c1000.findMany()
     * 
     * // Get first 10 C1000s
     * const c1000s = await prisma.c1000.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const c1000WithIdOnly = await prisma.c1000.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends c1000FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<c1000Payload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a C1000.
     * @param {c1000CreateArgs} args - Arguments to create a C1000.
     * @example
     * // Create one C1000
     * const C1000 = await prisma.c1000.create({
     *   data: {
     *     // ... data to create a C1000
     *   }
     * })
     * 
    **/
    create<T extends c1000CreateArgs<ExtArgs>>(
      args: SelectSubset<T, c1000CreateArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many C1000s.
     *     @param {c1000CreateManyArgs} args - Arguments to create many C1000s.
     *     @example
     *     // Create many C1000s
     *     const c1000 = await prisma.c1000.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends c1000CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a C1000.
     * @param {c1000DeleteArgs} args - Arguments to delete one C1000.
     * @example
     * // Delete one C1000
     * const C1000 = await prisma.c1000.delete({
     *   where: {
     *     // ... filter to delete one C1000
     *   }
     * })
     * 
    **/
    delete<T extends c1000DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, c1000DeleteArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one C1000.
     * @param {c1000UpdateArgs} args - Arguments to update one C1000.
     * @example
     * // Update one C1000
     * const c1000 = await prisma.c1000.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends c1000UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, c1000UpdateArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more C1000s.
     * @param {c1000DeleteManyArgs} args - Arguments to filter C1000s to delete.
     * @example
     * // Delete a few C1000s
     * const { count } = await prisma.c1000.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends c1000DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more C1000s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many C1000s
     * const c1000 = await prisma.c1000.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends c1000UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, c1000UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one C1000.
     * @param {c1000UpsertArgs} args - Arguments to update or create a C1000.
     * @example
     * // Update or create a C1000
     * const c1000 = await prisma.c1000.upsert({
     *   create: {
     *     // ... data to create a C1000
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the C1000 we want to update
     *   }
     * })
    **/
    upsert<T extends c1000UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, c1000UpsertArgs<ExtArgs>>
    ): Prisma__c1000Client<$Types.GetResult<c1000Payload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of C1000s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000CountArgs} args - Arguments to filter C1000s to count.
     * @example
     * // Count the number of C1000s
     * const count = await prisma.c1000.count({
     *   where: {
     *     // ... the filter for the C1000s we want to count
     *   }
     * })
    **/
    count<T extends c1000CountArgs>(
      args?: Subset<T, c1000CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], C1000CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a C1000.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {C1000AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends C1000AggregateArgs>(args: Subset<T, C1000AggregateArgs>): Prisma.PrismaPromise<GetC1000AggregateType<T>>

    /**
     * Group by C1000.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000GroupByArgs} args - Group by arguments.
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
      T extends c1000GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: c1000GroupByArgs['orderBy'] }
        : { orderBy?: c1000GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, c1000GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetC1000GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for c1000.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__c1000Client<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * c1000 base type for findUnique actions
   */
  export type c1000FindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter, which c1000 to fetch.
     */
    where: c1000WhereUniqueInput
  }

  /**
   * c1000 findUnique
   */
  export interface c1000FindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends c1000FindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * c1000 findUniqueOrThrow
   */
  export type c1000FindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter, which c1000 to fetch.
     */
    where: c1000WhereUniqueInput
  }


  /**
   * c1000 base type for findFirst actions
   */
  export type c1000FindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter, which c1000 to fetch.
     */
    where?: c1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000s to fetch.
     */
    orderBy?: c1000OrderByWithRelationInput | c1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for c1000s.
     */
    cursor?: c1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of c1000s.
     */
    distinct?: C1000ScalarFieldEnum | C1000ScalarFieldEnum[]
  }

  /**
   * c1000 findFirst
   */
  export interface c1000FindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends c1000FindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * c1000 findFirstOrThrow
   */
  export type c1000FindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter, which c1000 to fetch.
     */
    where?: c1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000s to fetch.
     */
    orderBy?: c1000OrderByWithRelationInput | c1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for c1000s.
     */
    cursor?: c1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of c1000s.
     */
    distinct?: C1000ScalarFieldEnum | C1000ScalarFieldEnum[]
  }


  /**
   * c1000 findMany
   */
  export type c1000FindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter, which c1000s to fetch.
     */
    where?: c1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000s to fetch.
     */
    orderBy?: c1000OrderByWithRelationInput | c1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing c1000s.
     */
    cursor?: c1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000s.
     */
    skip?: number
    distinct?: C1000ScalarFieldEnum | C1000ScalarFieldEnum[]
  }


  /**
   * c1000 create
   */
  export type c1000CreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * The data needed to create a c1000.
     */
    data: XOR<c1000CreateInput, c1000UncheckedCreateInput>
  }


  /**
   * c1000 createMany
   */
  export type c1000CreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many c1000s.
     */
    data: c1000CreateManyInput | c1000CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * c1000 update
   */
  export type c1000UpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * The data needed to update a c1000.
     */
    data: XOR<c1000UpdateInput, c1000UncheckedUpdateInput>
    /**
     * Choose, which c1000 to update.
     */
    where: c1000WhereUniqueInput
  }


  /**
   * c1000 updateMany
   */
  export type c1000UpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update c1000s.
     */
    data: XOR<c1000UpdateManyMutationInput, c1000UncheckedUpdateManyInput>
    /**
     * Filter which c1000s to update
     */
    where?: c1000WhereInput
  }


  /**
   * c1000 upsert
   */
  export type c1000UpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * The filter to search for the c1000 to update in case it exists.
     */
    where: c1000WhereUniqueInput
    /**
     * In case the c1000 found by the `where` argument doesn't exist, create a new c1000 with this data.
     */
    create: XOR<c1000CreateInput, c1000UncheckedCreateInput>
    /**
     * In case the c1000 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<c1000UpdateInput, c1000UncheckedUpdateInput>
  }


  /**
   * c1000 delete
   */
  export type c1000DeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
    /**
     * Filter which c1000 to delete.
     */
    where: c1000WhereUniqueInput
  }


  /**
   * c1000 deleteMany
   */
  export type c1000DeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which c1000s to delete
     */
    where?: c1000WhereInput
  }


  /**
   * c1000 without action
   */
  export type c1000Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000
     */
    select?: c1000Select<ExtArgs> | null
  }



  /**
   * Model c1000m
   */


  export type AggregateC1000m = {
    _count: C1000mCountAggregateOutputType | null
    _avg: C1000mAvgAggregateOutputType | null
    _sum: C1000mSumAggregateOutputType | null
    _min: C1000mMinAggregateOutputType | null
    _max: C1000mMaxAggregateOutputType | null
  }

  export type C1000mAvgAggregateOutputType = {
    zona: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    id: number | null
  }

  export type C1000mSumAggregateOutputType = {
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    id: number | null
  }

  export type C1000mMinAggregateOutputType = {
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
    id: number | null
  }

  export type C1000mMaxAggregateOutputType = {
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
    id: number | null
  }

  export type C1000mCountAggregateOutputType = {
    zona: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    descr: number
    id: number
    _all: number
  }


  export type C1000mAvgAggregateInputType = {
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    id?: true
  }

  export type C1000mSumAggregateInputType = {
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    id?: true
  }

  export type C1000mMinAggregateInputType = {
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
    id?: true
  }

  export type C1000mMaxAggregateInputType = {
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
    id?: true
  }

  export type C1000mCountAggregateInputType = {
    zona?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    descr?: true
    id?: true
    _all?: true
  }

  export type C1000mAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which c1000m to aggregate.
     */
    where?: c1000mWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000ms to fetch.
     */
    orderBy?: c1000mOrderByWithRelationInput | c1000mOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: c1000mWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000ms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000ms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned c1000ms
    **/
    _count?: true | C1000mCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: C1000mAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: C1000mSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: C1000mMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: C1000mMaxAggregateInputType
  }

  export type GetC1000mAggregateType<T extends C1000mAggregateArgs> = {
        [P in keyof T & keyof AggregateC1000m]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateC1000m[P]>
      : GetScalarType<T[P], AggregateC1000m[P]>
  }




  export type c1000mGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: c1000mWhereInput
    orderBy?: c1000mOrderByWithAggregationInput | c1000mOrderByWithAggregationInput[]
    by: C1000mScalarFieldEnum[] | C1000mScalarFieldEnum
    having?: c1000mScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: C1000mCountAggregateInputType | true
    _avg?: C1000mAvgAggregateInputType
    _sum?: C1000mSumAggregateInputType
    _min?: C1000mMinAggregateInputType
    _max?: C1000mMaxAggregateInputType
  }


  export type C1000mGroupByOutputType = {
    zona: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    descr: string | null
    id: number
    _count: C1000mCountAggregateOutputType | null
    _avg: C1000mAvgAggregateOutputType | null
    _sum: C1000mSumAggregateOutputType | null
    _min: C1000mMinAggregateOutputType | null
    _max: C1000mMaxAggregateOutputType | null
  }

  type GetC1000mGroupByPayload<T extends c1000mGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<C1000mGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof C1000mGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], C1000mGroupByOutputType[P]>
            : GetScalarType<T[P], C1000mGroupByOutputType[P]>
        }
      >
    >


  export type c1000mSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    zona?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    descr?: boolean
    id?: boolean
  }, ExtArgs["result"]["c1000m"]>

  export type c1000mSelectScalar = {
    zona?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    descr?: boolean
    id?: boolean
  }


  type c1000mGetPayload<S extends boolean | null | undefined | c1000mArgs> = $Types.GetResult<c1000mPayload, S>

  type c1000mCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<c1000mFindManyArgs, 'select' | 'include'> & {
      select?: C1000mCountAggregateInputType | true
    }

  export interface c1000mDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['c1000m'], meta: { name: 'c1000m' } }
    /**
     * Find zero or one C1000m that matches the filter.
     * @param {c1000mFindUniqueArgs} args - Arguments to find a C1000m
     * @example
     * // Get one C1000m
     * const c1000m = await prisma.c1000m.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends c1000mFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, c1000mFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'c1000m'> extends True ? Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one C1000m that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {c1000mFindUniqueOrThrowArgs} args - Arguments to find a C1000m
     * @example
     * // Get one C1000m
     * const c1000m = await prisma.c1000m.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends c1000mFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000mFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first C1000m that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mFindFirstArgs} args - Arguments to find a C1000m
     * @example
     * // Get one C1000m
     * const c1000m = await prisma.c1000m.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends c1000mFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, c1000mFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'c1000m'> extends True ? Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first C1000m that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mFindFirstOrThrowArgs} args - Arguments to find a C1000m
     * @example
     * // Get one C1000m
     * const c1000m = await prisma.c1000m.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends c1000mFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000mFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more C1000ms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all C1000ms
     * const c1000ms = await prisma.c1000m.findMany()
     * 
     * // Get first 10 C1000ms
     * const c1000ms = await prisma.c1000m.findMany({ take: 10 })
     * 
     * // Only select the `zona`
     * const c1000mWithZonaOnly = await prisma.c1000m.findMany({ select: { zona: true } })
     * 
    **/
    findMany<T extends c1000mFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000mFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a C1000m.
     * @param {c1000mCreateArgs} args - Arguments to create a C1000m.
     * @example
     * // Create one C1000m
     * const C1000m = await prisma.c1000m.create({
     *   data: {
     *     // ... data to create a C1000m
     *   }
     * })
     * 
    **/
    create<T extends c1000mCreateArgs<ExtArgs>>(
      args: SelectSubset<T, c1000mCreateArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many C1000ms.
     *     @param {c1000mCreateManyArgs} args - Arguments to create many C1000ms.
     *     @example
     *     // Create many C1000ms
     *     const c1000m = await prisma.c1000m.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends c1000mCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000mCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a C1000m.
     * @param {c1000mDeleteArgs} args - Arguments to delete one C1000m.
     * @example
     * // Delete one C1000m
     * const C1000m = await prisma.c1000m.delete({
     *   where: {
     *     // ... filter to delete one C1000m
     *   }
     * })
     * 
    **/
    delete<T extends c1000mDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, c1000mDeleteArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one C1000m.
     * @param {c1000mUpdateArgs} args - Arguments to update one C1000m.
     * @example
     * // Update one C1000m
     * const c1000m = await prisma.c1000m.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends c1000mUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, c1000mUpdateArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more C1000ms.
     * @param {c1000mDeleteManyArgs} args - Arguments to filter C1000ms to delete.
     * @example
     * // Delete a few C1000ms
     * const { count } = await prisma.c1000m.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends c1000mDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, c1000mDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more C1000ms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many C1000ms
     * const c1000m = await prisma.c1000m.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends c1000mUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, c1000mUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one C1000m.
     * @param {c1000mUpsertArgs} args - Arguments to update or create a C1000m.
     * @example
     * // Update or create a C1000m
     * const c1000m = await prisma.c1000m.upsert({
     *   create: {
     *     // ... data to create a C1000m
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the C1000m we want to update
     *   }
     * })
    **/
    upsert<T extends c1000mUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, c1000mUpsertArgs<ExtArgs>>
    ): Prisma__c1000mClient<$Types.GetResult<c1000mPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of C1000ms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mCountArgs} args - Arguments to filter C1000ms to count.
     * @example
     * // Count the number of C1000ms
     * const count = await prisma.c1000m.count({
     *   where: {
     *     // ... the filter for the C1000ms we want to count
     *   }
     * })
    **/
    count<T extends c1000mCountArgs>(
      args?: Subset<T, c1000mCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], C1000mCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a C1000m.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {C1000mAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends C1000mAggregateArgs>(args: Subset<T, C1000mAggregateArgs>): Prisma.PrismaPromise<GetC1000mAggregateType<T>>

    /**
     * Group by C1000m.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {c1000mGroupByArgs} args - Group by arguments.
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
      T extends c1000mGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: c1000mGroupByArgs['orderBy'] }
        : { orderBy?: c1000mGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, c1000mGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetC1000mGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for c1000m.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__c1000mClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * c1000m base type for findUnique actions
   */
  export type c1000mFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter, which c1000m to fetch.
     */
    where: c1000mWhereUniqueInput
  }

  /**
   * c1000m findUnique
   */
  export interface c1000mFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends c1000mFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * c1000m findUniqueOrThrow
   */
  export type c1000mFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter, which c1000m to fetch.
     */
    where: c1000mWhereUniqueInput
  }


  /**
   * c1000m base type for findFirst actions
   */
  export type c1000mFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter, which c1000m to fetch.
     */
    where?: c1000mWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000ms to fetch.
     */
    orderBy?: c1000mOrderByWithRelationInput | c1000mOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for c1000ms.
     */
    cursor?: c1000mWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000ms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000ms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of c1000ms.
     */
    distinct?: C1000mScalarFieldEnum | C1000mScalarFieldEnum[]
  }

  /**
   * c1000m findFirst
   */
  export interface c1000mFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends c1000mFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * c1000m findFirstOrThrow
   */
  export type c1000mFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter, which c1000m to fetch.
     */
    where?: c1000mWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000ms to fetch.
     */
    orderBy?: c1000mOrderByWithRelationInput | c1000mOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for c1000ms.
     */
    cursor?: c1000mWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000ms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000ms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of c1000ms.
     */
    distinct?: C1000mScalarFieldEnum | C1000mScalarFieldEnum[]
  }


  /**
   * c1000m findMany
   */
  export type c1000mFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter, which c1000ms to fetch.
     */
    where?: c1000mWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of c1000ms to fetch.
     */
    orderBy?: c1000mOrderByWithRelationInput | c1000mOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing c1000ms.
     */
    cursor?: c1000mWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` c1000ms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` c1000ms.
     */
    skip?: number
    distinct?: C1000mScalarFieldEnum | C1000mScalarFieldEnum[]
  }


  /**
   * c1000m create
   */
  export type c1000mCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * The data needed to create a c1000m.
     */
    data?: XOR<c1000mCreateInput, c1000mUncheckedCreateInput>
  }


  /**
   * c1000m createMany
   */
  export type c1000mCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many c1000ms.
     */
    data: c1000mCreateManyInput | c1000mCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * c1000m update
   */
  export type c1000mUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * The data needed to update a c1000m.
     */
    data: XOR<c1000mUpdateInput, c1000mUncheckedUpdateInput>
    /**
     * Choose, which c1000m to update.
     */
    where: c1000mWhereUniqueInput
  }


  /**
   * c1000m updateMany
   */
  export type c1000mUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update c1000ms.
     */
    data: XOR<c1000mUpdateManyMutationInput, c1000mUncheckedUpdateManyInput>
    /**
     * Filter which c1000ms to update
     */
    where?: c1000mWhereInput
  }


  /**
   * c1000m upsert
   */
  export type c1000mUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * The filter to search for the c1000m to update in case it exists.
     */
    where: c1000mWhereUniqueInput
    /**
     * In case the c1000m found by the `where` argument doesn't exist, create a new c1000m with this data.
     */
    create: XOR<c1000mCreateInput, c1000mUncheckedCreateInput>
    /**
     * In case the c1000m was found with the provided `where` argument, update it with this data.
     */
    update: XOR<c1000mUpdateInput, c1000mUncheckedUpdateInput>
  }


  /**
   * c1000m delete
   */
  export type c1000mDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
    /**
     * Filter which c1000m to delete.
     */
    where: c1000mWhereUniqueInput
  }


  /**
   * c1000m deleteMany
   */
  export type c1000mDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which c1000ms to delete
     */
    where?: c1000mWhereInput
  }


  /**
   * c1000m without action
   */
  export type c1000mArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the c1000m
     */
    select?: c1000mSelect<ExtArgs> | null
  }



  /**
   * Model cbanco
   */


  export type AggregateCbanco = {
    _count: CbancoCountAggregateOutputType | null
    _avg: CbancoAvgAggregateOutputType | null
    _sum: CbancoSumAggregateOutputType | null
    _min: CbancoMinAggregateOutputType | null
    _max: CbancoMaxAggregateOutputType | null
  }

  export type CbancoAvgAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CbancoSumAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CbancoMinAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CbancoMaxAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CbancoCountAggregateOutputType = {
    id: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    sucursal: number
    descr: number
    _all: number
  }


  export type CbancoAvgAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CbancoSumAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CbancoMinAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CbancoMaxAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CbancoCountAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
    _all?: true
  }

  export type CbancoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbanco to aggregate.
     */
    where?: cbancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbancos to fetch.
     */
    orderBy?: cbancoOrderByWithRelationInput | cbancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cbancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cbancos
    **/
    _count?: true | CbancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CbancoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CbancoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CbancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CbancoMaxAggregateInputType
  }

  export type GetCbancoAggregateType<T extends CbancoAggregateArgs> = {
        [P in keyof T & keyof AggregateCbanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCbanco[P]>
      : GetScalarType<T[P], AggregateCbanco[P]>
  }




  export type cbancoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cbancoWhereInput
    orderBy?: cbancoOrderByWithAggregationInput | cbancoOrderByWithAggregationInput[]
    by: CbancoScalarFieldEnum[] | CbancoScalarFieldEnum
    having?: cbancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CbancoCountAggregateInputType | true
    _avg?: CbancoAvgAggregateInputType
    _sum?: CbancoSumAggregateInputType
    _min?: CbancoMinAggregateInputType
    _max?: CbancoMaxAggregateInputType
  }


  export type CbancoGroupByOutputType = {
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
    _count: CbancoCountAggregateOutputType | null
    _avg: CbancoAvgAggregateOutputType | null
    _sum: CbancoSumAggregateOutputType | null
    _min: CbancoMinAggregateOutputType | null
    _max: CbancoMaxAggregateOutputType | null
  }

  type GetCbancoGroupByPayload<T extends cbancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CbancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CbancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CbancoGroupByOutputType[P]>
            : GetScalarType<T[P], CbancoGroupByOutputType[P]>
        }
      >
    >


  export type cbancoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }, ExtArgs["result"]["cbanco"]>

  export type cbancoSelectScalar = {
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }


  type cbancoGetPayload<S extends boolean | null | undefined | cbancoArgs> = $Types.GetResult<cbancoPayload, S>

  type cbancoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cbancoFindManyArgs, 'select' | 'include'> & {
      select?: CbancoCountAggregateInputType | true
    }

  export interface cbancoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cbanco'], meta: { name: 'cbanco' } }
    /**
     * Find zero or one Cbanco that matches the filter.
     * @param {cbancoFindUniqueArgs} args - Arguments to find a Cbanco
     * @example
     * // Get one Cbanco
     * const cbanco = await prisma.cbanco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cbancoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cbancoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cbanco'> extends True ? Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cbanco that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cbancoFindUniqueOrThrowArgs} args - Arguments to find a Cbanco
     * @example
     * // Get one Cbanco
     * const cbanco = await prisma.cbanco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cbancoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cbancoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cbanco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoFindFirstArgs} args - Arguments to find a Cbanco
     * @example
     * // Get one Cbanco
     * const cbanco = await prisma.cbanco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cbancoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cbancoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cbanco'> extends True ? Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cbanco that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoFindFirstOrThrowArgs} args - Arguments to find a Cbanco
     * @example
     * // Get one Cbanco
     * const cbanco = await prisma.cbanco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cbancoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cbancoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cbancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cbancos
     * const cbancos = await prisma.cbanco.findMany()
     * 
     * // Get first 10 Cbancos
     * const cbancos = await prisma.cbanco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cbancoWithIdOnly = await prisma.cbanco.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cbancoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cbancoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cbanco.
     * @param {cbancoCreateArgs} args - Arguments to create a Cbanco.
     * @example
     * // Create one Cbanco
     * const Cbanco = await prisma.cbanco.create({
     *   data: {
     *     // ... data to create a Cbanco
     *   }
     * })
     * 
    **/
    create<T extends cbancoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cbancoCreateArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cbancos.
     *     @param {cbancoCreateManyArgs} args - Arguments to create many Cbancos.
     *     @example
     *     // Create many Cbancos
     *     const cbanco = await prisma.cbanco.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cbancoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cbancoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cbanco.
     * @param {cbancoDeleteArgs} args - Arguments to delete one Cbanco.
     * @example
     * // Delete one Cbanco
     * const Cbanco = await prisma.cbanco.delete({
     *   where: {
     *     // ... filter to delete one Cbanco
     *   }
     * })
     * 
    **/
    delete<T extends cbancoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cbancoDeleteArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cbanco.
     * @param {cbancoUpdateArgs} args - Arguments to update one Cbanco.
     * @example
     * // Update one Cbanco
     * const cbanco = await prisma.cbanco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cbancoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cbancoUpdateArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cbancos.
     * @param {cbancoDeleteManyArgs} args - Arguments to filter Cbancos to delete.
     * @example
     * // Delete a few Cbancos
     * const { count } = await prisma.cbanco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cbancoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cbancoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cbancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cbancos
     * const cbanco = await prisma.cbanco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cbancoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cbancoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cbanco.
     * @param {cbancoUpsertArgs} args - Arguments to update or create a Cbanco.
     * @example
     * // Update or create a Cbanco
     * const cbanco = await prisma.cbanco.upsert({
     *   create: {
     *     // ... data to create a Cbanco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cbanco we want to update
     *   }
     * })
    **/
    upsert<T extends cbancoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cbancoUpsertArgs<ExtArgs>>
    ): Prisma__cbancoClient<$Types.GetResult<cbancoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cbancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoCountArgs} args - Arguments to filter Cbancos to count.
     * @example
     * // Count the number of Cbancos
     * const count = await prisma.cbanco.count({
     *   where: {
     *     // ... the filter for the Cbancos we want to count
     *   }
     * })
    **/
    count<T extends cbancoCountArgs>(
      args?: Subset<T, cbancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CbancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cbanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CbancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CbancoAggregateArgs>(args: Subset<T, CbancoAggregateArgs>): Prisma.PrismaPromise<GetCbancoAggregateType<T>>

    /**
     * Group by Cbanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbancoGroupByArgs} args - Group by arguments.
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
      T extends cbancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cbancoGroupByArgs['orderBy'] }
        : { orderBy?: cbancoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cbancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCbancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cbanco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cbancoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * cbanco base type for findUnique actions
   */
  export type cbancoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter, which cbanco to fetch.
     */
    where: cbancoWhereUniqueInput
  }

  /**
   * cbanco findUnique
   */
  export interface cbancoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cbancoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cbanco findUniqueOrThrow
   */
  export type cbancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter, which cbanco to fetch.
     */
    where: cbancoWhereUniqueInput
  }


  /**
   * cbanco base type for findFirst actions
   */
  export type cbancoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter, which cbanco to fetch.
     */
    where?: cbancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbancos to fetch.
     */
    orderBy?: cbancoOrderByWithRelationInput | cbancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbancos.
     */
    cursor?: cbancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbancos.
     */
    distinct?: CbancoScalarFieldEnum | CbancoScalarFieldEnum[]
  }

  /**
   * cbanco findFirst
   */
  export interface cbancoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cbancoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cbanco findFirstOrThrow
   */
  export type cbancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter, which cbanco to fetch.
     */
    where?: cbancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbancos to fetch.
     */
    orderBy?: cbancoOrderByWithRelationInput | cbancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbancos.
     */
    cursor?: cbancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbancos.
     */
    distinct?: CbancoScalarFieldEnum | CbancoScalarFieldEnum[]
  }


  /**
   * cbanco findMany
   */
  export type cbancoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter, which cbancos to fetch.
     */
    where?: cbancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbancos to fetch.
     */
    orderBy?: cbancoOrderByWithRelationInput | cbancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cbancos.
     */
    cursor?: cbancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbancos.
     */
    skip?: number
    distinct?: CbancoScalarFieldEnum | CbancoScalarFieldEnum[]
  }


  /**
   * cbanco create
   */
  export type cbancoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * The data needed to create a cbanco.
     */
    data?: XOR<cbancoCreateInput, cbancoUncheckedCreateInput>
  }


  /**
   * cbanco createMany
   */
  export type cbancoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cbancos.
     */
    data: cbancoCreateManyInput | cbancoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cbanco update
   */
  export type cbancoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * The data needed to update a cbanco.
     */
    data: XOR<cbancoUpdateInput, cbancoUncheckedUpdateInput>
    /**
     * Choose, which cbanco to update.
     */
    where: cbancoWhereUniqueInput
  }


  /**
   * cbanco updateMany
   */
  export type cbancoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cbancos.
     */
    data: XOR<cbancoUpdateManyMutationInput, cbancoUncheckedUpdateManyInput>
    /**
     * Filter which cbancos to update
     */
    where?: cbancoWhereInput
  }


  /**
   * cbanco upsert
   */
  export type cbancoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * The filter to search for the cbanco to update in case it exists.
     */
    where: cbancoWhereUniqueInput
    /**
     * In case the cbanco found by the `where` argument doesn't exist, create a new cbanco with this data.
     */
    create: XOR<cbancoCreateInput, cbancoUncheckedCreateInput>
    /**
     * In case the cbanco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cbancoUpdateInput, cbancoUncheckedUpdateInput>
  }


  /**
   * cbanco delete
   */
  export type cbancoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
    /**
     * Filter which cbanco to delete.
     */
    where: cbancoWhereUniqueInput
  }


  /**
   * cbanco deleteMany
   */
  export type cbancoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbancos to delete
     */
    where?: cbancoWhereInput
  }


  /**
   * cbanco without action
   */
  export type cbancoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbanco
     */
    select?: cbancoSelect<ExtArgs> | null
  }



  /**
   * Model cconvenio
   */


  export type AggregateCconvenio = {
    _count: CconvenioCountAggregateOutputType | null
    _avg: CconvenioAvgAggregateOutputType | null
    _sum: CconvenioSumAggregateOutputType | null
    _min: CconvenioMinAggregateOutputType | null
    _max: CconvenioMaxAggregateOutputType | null
  }

  export type CconvenioAvgAggregateOutputType = {
    id_mora: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CconvenioSumAggregateOutputType = {
    id_mora: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CconvenioMinAggregateOutputType = {
    id_mora: number | null
    tipo: string | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
  }

  export type CconvenioMaxAggregateOutputType = {
    id_mora: number | null
    tipo: string | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
  }

  export type CconvenioCountAggregateOutputType = {
    id_mora: number
    tipo: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    sucursal: number
    _all: number
  }


  export type CconvenioAvgAggregateInputType = {
    id_mora?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CconvenioSumAggregateInputType = {
    id_mora?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CconvenioMinAggregateInputType = {
    id_mora?: true
    tipo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
  }

  export type CconvenioMaxAggregateInputType = {
    id_mora?: true
    tipo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
  }

  export type CconvenioCountAggregateInputType = {
    id_mora?: true
    tipo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    _all?: true
  }

  export type CconvenioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cconvenio to aggregate.
     */
    where?: cconvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cconvenios to fetch.
     */
    orderBy?: cconvenioOrderByWithRelationInput | cconvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cconvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cconvenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cconvenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cconvenios
    **/
    _count?: true | CconvenioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CconvenioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CconvenioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CconvenioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CconvenioMaxAggregateInputType
  }

  export type GetCconvenioAggregateType<T extends CconvenioAggregateArgs> = {
        [P in keyof T & keyof AggregateCconvenio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCconvenio[P]>
      : GetScalarType<T[P], AggregateCconvenio[P]>
  }




  export type cconvenioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cconvenioWhereInput
    orderBy?: cconvenioOrderByWithAggregationInput | cconvenioOrderByWithAggregationInput[]
    by: CconvenioScalarFieldEnum[] | CconvenioScalarFieldEnum
    having?: cconvenioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CconvenioCountAggregateInputType | true
    _avg?: CconvenioAvgAggregateInputType
    _sum?: CconvenioSumAggregateInputType
    _min?: CconvenioMinAggregateInputType
    _max?: CconvenioMaxAggregateInputType
  }


  export type CconvenioGroupByOutputType = {
    id_mora: number
    tipo: string | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    _count: CconvenioCountAggregateOutputType | null
    _avg: CconvenioAvgAggregateOutputType | null
    _sum: CconvenioSumAggregateOutputType | null
    _min: CconvenioMinAggregateOutputType | null
    _max: CconvenioMaxAggregateOutputType | null
  }

  type GetCconvenioGroupByPayload<T extends cconvenioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CconvenioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CconvenioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CconvenioGroupByOutputType[P]>
            : GetScalarType<T[P], CconvenioGroupByOutputType[P]>
        }
      >
    >


  export type cconvenioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mora?: boolean
    tipo?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
  }, ExtArgs["result"]["cconvenio"]>

  export type cconvenioSelectScalar = {
    id_mora?: boolean
    tipo?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
  }


  type cconvenioGetPayload<S extends boolean | null | undefined | cconvenioArgs> = $Types.GetResult<cconvenioPayload, S>

  type cconvenioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cconvenioFindManyArgs, 'select' | 'include'> & {
      select?: CconvenioCountAggregateInputType | true
    }

  export interface cconvenioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cconvenio'], meta: { name: 'cconvenio' } }
    /**
     * Find zero or one Cconvenio that matches the filter.
     * @param {cconvenioFindUniqueArgs} args - Arguments to find a Cconvenio
     * @example
     * // Get one Cconvenio
     * const cconvenio = await prisma.cconvenio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cconvenioFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cconvenioFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cconvenio'> extends True ? Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cconvenio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cconvenioFindUniqueOrThrowArgs} args - Arguments to find a Cconvenio
     * @example
     * // Get one Cconvenio
     * const cconvenio = await prisma.cconvenio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cconvenioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cconvenioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cconvenio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioFindFirstArgs} args - Arguments to find a Cconvenio
     * @example
     * // Get one Cconvenio
     * const cconvenio = await prisma.cconvenio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cconvenioFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cconvenioFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cconvenio'> extends True ? Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cconvenio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioFindFirstOrThrowArgs} args - Arguments to find a Cconvenio
     * @example
     * // Get one Cconvenio
     * const cconvenio = await prisma.cconvenio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cconvenioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cconvenioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cconvenios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cconvenios
     * const cconvenios = await prisma.cconvenio.findMany()
     * 
     * // Get first 10 Cconvenios
     * const cconvenios = await prisma.cconvenio.findMany({ take: 10 })
     * 
     * // Only select the `id_mora`
     * const cconvenioWithId_moraOnly = await prisma.cconvenio.findMany({ select: { id_mora: true } })
     * 
    **/
    findMany<T extends cconvenioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cconvenioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cconvenio.
     * @param {cconvenioCreateArgs} args - Arguments to create a Cconvenio.
     * @example
     * // Create one Cconvenio
     * const Cconvenio = await prisma.cconvenio.create({
     *   data: {
     *     // ... data to create a Cconvenio
     *   }
     * })
     * 
    **/
    create<T extends cconvenioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cconvenioCreateArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cconvenios.
     *     @param {cconvenioCreateManyArgs} args - Arguments to create many Cconvenios.
     *     @example
     *     // Create many Cconvenios
     *     const cconvenio = await prisma.cconvenio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cconvenioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cconvenioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cconvenio.
     * @param {cconvenioDeleteArgs} args - Arguments to delete one Cconvenio.
     * @example
     * // Delete one Cconvenio
     * const Cconvenio = await prisma.cconvenio.delete({
     *   where: {
     *     // ... filter to delete one Cconvenio
     *   }
     * })
     * 
    **/
    delete<T extends cconvenioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cconvenioDeleteArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cconvenio.
     * @param {cconvenioUpdateArgs} args - Arguments to update one Cconvenio.
     * @example
     * // Update one Cconvenio
     * const cconvenio = await prisma.cconvenio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cconvenioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cconvenioUpdateArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cconvenios.
     * @param {cconvenioDeleteManyArgs} args - Arguments to filter Cconvenios to delete.
     * @example
     * // Delete a few Cconvenios
     * const { count } = await prisma.cconvenio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cconvenioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cconvenioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cconvenios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cconvenios
     * const cconvenio = await prisma.cconvenio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cconvenioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cconvenioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cconvenio.
     * @param {cconvenioUpsertArgs} args - Arguments to update or create a Cconvenio.
     * @example
     * // Update or create a Cconvenio
     * const cconvenio = await prisma.cconvenio.upsert({
     *   create: {
     *     // ... data to create a Cconvenio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cconvenio we want to update
     *   }
     * })
    **/
    upsert<T extends cconvenioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cconvenioUpsertArgs<ExtArgs>>
    ): Prisma__cconvenioClient<$Types.GetResult<cconvenioPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cconvenios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioCountArgs} args - Arguments to filter Cconvenios to count.
     * @example
     * // Count the number of Cconvenios
     * const count = await prisma.cconvenio.count({
     *   where: {
     *     // ... the filter for the Cconvenios we want to count
     *   }
     * })
    **/
    count<T extends cconvenioCountArgs>(
      args?: Subset<T, cconvenioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CconvenioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cconvenio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CconvenioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CconvenioAggregateArgs>(args: Subset<T, CconvenioAggregateArgs>): Prisma.PrismaPromise<GetCconvenioAggregateType<T>>

    /**
     * Group by Cconvenio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cconvenioGroupByArgs} args - Group by arguments.
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
      T extends cconvenioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cconvenioGroupByArgs['orderBy'] }
        : { orderBy?: cconvenioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cconvenioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCconvenioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cconvenio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cconvenioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * cconvenio base type for findUnique actions
   */
  export type cconvenioFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter, which cconvenio to fetch.
     */
    where: cconvenioWhereUniqueInput
  }

  /**
   * cconvenio findUnique
   */
  export interface cconvenioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cconvenioFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cconvenio findUniqueOrThrow
   */
  export type cconvenioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter, which cconvenio to fetch.
     */
    where: cconvenioWhereUniqueInput
  }


  /**
   * cconvenio base type for findFirst actions
   */
  export type cconvenioFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter, which cconvenio to fetch.
     */
    where?: cconvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cconvenios to fetch.
     */
    orderBy?: cconvenioOrderByWithRelationInput | cconvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cconvenios.
     */
    cursor?: cconvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cconvenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cconvenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cconvenios.
     */
    distinct?: CconvenioScalarFieldEnum | CconvenioScalarFieldEnum[]
  }

  /**
   * cconvenio findFirst
   */
  export interface cconvenioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cconvenioFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cconvenio findFirstOrThrow
   */
  export type cconvenioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter, which cconvenio to fetch.
     */
    where?: cconvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cconvenios to fetch.
     */
    orderBy?: cconvenioOrderByWithRelationInput | cconvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cconvenios.
     */
    cursor?: cconvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cconvenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cconvenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cconvenios.
     */
    distinct?: CconvenioScalarFieldEnum | CconvenioScalarFieldEnum[]
  }


  /**
   * cconvenio findMany
   */
  export type cconvenioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter, which cconvenios to fetch.
     */
    where?: cconvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cconvenios to fetch.
     */
    orderBy?: cconvenioOrderByWithRelationInput | cconvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cconvenios.
     */
    cursor?: cconvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cconvenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cconvenios.
     */
    skip?: number
    distinct?: CconvenioScalarFieldEnum | CconvenioScalarFieldEnum[]
  }


  /**
   * cconvenio create
   */
  export type cconvenioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * The data needed to create a cconvenio.
     */
    data?: XOR<cconvenioCreateInput, cconvenioUncheckedCreateInput>
  }


  /**
   * cconvenio createMany
   */
  export type cconvenioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cconvenios.
     */
    data: cconvenioCreateManyInput | cconvenioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cconvenio update
   */
  export type cconvenioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * The data needed to update a cconvenio.
     */
    data: XOR<cconvenioUpdateInput, cconvenioUncheckedUpdateInput>
    /**
     * Choose, which cconvenio to update.
     */
    where: cconvenioWhereUniqueInput
  }


  /**
   * cconvenio updateMany
   */
  export type cconvenioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cconvenios.
     */
    data: XOR<cconvenioUpdateManyMutationInput, cconvenioUncheckedUpdateManyInput>
    /**
     * Filter which cconvenios to update
     */
    where?: cconvenioWhereInput
  }


  /**
   * cconvenio upsert
   */
  export type cconvenioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * The filter to search for the cconvenio to update in case it exists.
     */
    where: cconvenioWhereUniqueInput
    /**
     * In case the cconvenio found by the `where` argument doesn't exist, create a new cconvenio with this data.
     */
    create: XOR<cconvenioCreateInput, cconvenioUncheckedCreateInput>
    /**
     * In case the cconvenio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cconvenioUpdateInput, cconvenioUncheckedUpdateInput>
  }


  /**
   * cconvenio delete
   */
  export type cconvenioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
    /**
     * Filter which cconvenio to delete.
     */
    where: cconvenioWhereUniqueInput
  }


  /**
   * cconvenio deleteMany
   */
  export type cconvenioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cconvenios to delete
     */
    where?: cconvenioWhereInput
  }


  /**
   * cconvenio without action
   */
  export type cconvenioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cconvenio
     */
    select?: cconvenioSelect<ExtArgs> | null
  }



  /**
   * Model cpolicia
   */


  export type AggregateCpolicia = {
    _count: CpoliciaCountAggregateOutputType | null
    _avg: CpoliciaAvgAggregateOutputType | null
    _sum: CpoliciaSumAggregateOutputType | null
    _min: CpoliciaMinAggregateOutputType | null
    _max: CpoliciaMaxAggregateOutputType | null
  }

  export type CpoliciaAvgAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CpoliciaSumAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CpoliciaMinAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CpoliciaMaxAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CpoliciaCountAggregateOutputType = {
    id: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    sucursal: number
    descr: number
    _all: number
  }


  export type CpoliciaAvgAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CpoliciaSumAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CpoliciaMinAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CpoliciaMaxAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CpoliciaCountAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
    _all?: true
  }

  export type CpoliciaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cpolicia to aggregate.
     */
    where?: cpoliciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpolicias to fetch.
     */
    orderBy?: cpoliciaOrderByWithRelationInput | cpoliciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cpoliciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpolicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpolicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cpolicias
    **/
    _count?: true | CpoliciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CpoliciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CpoliciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CpoliciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CpoliciaMaxAggregateInputType
  }

  export type GetCpoliciaAggregateType<T extends CpoliciaAggregateArgs> = {
        [P in keyof T & keyof AggregateCpolicia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCpolicia[P]>
      : GetScalarType<T[P], AggregateCpolicia[P]>
  }




  export type cpoliciaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cpoliciaWhereInput
    orderBy?: cpoliciaOrderByWithAggregationInput | cpoliciaOrderByWithAggregationInput[]
    by: CpoliciaScalarFieldEnum[] | CpoliciaScalarFieldEnum
    having?: cpoliciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CpoliciaCountAggregateInputType | true
    _avg?: CpoliciaAvgAggregateInputType
    _sum?: CpoliciaSumAggregateInputType
    _min?: CpoliciaMinAggregateInputType
    _max?: CpoliciaMaxAggregateInputType
  }


  export type CpoliciaGroupByOutputType = {
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
    _count: CpoliciaCountAggregateOutputType | null
    _avg: CpoliciaAvgAggregateOutputType | null
    _sum: CpoliciaSumAggregateOutputType | null
    _min: CpoliciaMinAggregateOutputType | null
    _max: CpoliciaMaxAggregateOutputType | null
  }

  type GetCpoliciaGroupByPayload<T extends cpoliciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CpoliciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CpoliciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CpoliciaGroupByOutputType[P]>
            : GetScalarType<T[P], CpoliciaGroupByOutputType[P]>
        }
      >
    >


  export type cpoliciaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }, ExtArgs["result"]["cpolicia"]>

  export type cpoliciaSelectScalar = {
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }


  type cpoliciaGetPayload<S extends boolean | null | undefined | cpoliciaArgs> = $Types.GetResult<cpoliciaPayload, S>

  type cpoliciaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cpoliciaFindManyArgs, 'select' | 'include'> & {
      select?: CpoliciaCountAggregateInputType | true
    }

  export interface cpoliciaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cpolicia'], meta: { name: 'cpolicia' } }
    /**
     * Find zero or one Cpolicia that matches the filter.
     * @param {cpoliciaFindUniqueArgs} args - Arguments to find a Cpolicia
     * @example
     * // Get one Cpolicia
     * const cpolicia = await prisma.cpolicia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cpoliciaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cpoliciaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cpolicia'> extends True ? Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cpolicia that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cpoliciaFindUniqueOrThrowArgs} args - Arguments to find a Cpolicia
     * @example
     * // Get one Cpolicia
     * const cpolicia = await prisma.cpolicia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cpoliciaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cpoliciaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cpolicia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaFindFirstArgs} args - Arguments to find a Cpolicia
     * @example
     * // Get one Cpolicia
     * const cpolicia = await prisma.cpolicia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cpoliciaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cpoliciaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cpolicia'> extends True ? Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cpolicia that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaFindFirstOrThrowArgs} args - Arguments to find a Cpolicia
     * @example
     * // Get one Cpolicia
     * const cpolicia = await prisma.cpolicia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cpoliciaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cpoliciaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cpolicias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cpolicias
     * const cpolicias = await prisma.cpolicia.findMany()
     * 
     * // Get first 10 Cpolicias
     * const cpolicias = await prisma.cpolicia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cpoliciaWithIdOnly = await prisma.cpolicia.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cpoliciaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cpoliciaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cpolicia.
     * @param {cpoliciaCreateArgs} args - Arguments to create a Cpolicia.
     * @example
     * // Create one Cpolicia
     * const Cpolicia = await prisma.cpolicia.create({
     *   data: {
     *     // ... data to create a Cpolicia
     *   }
     * })
     * 
    **/
    create<T extends cpoliciaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cpoliciaCreateArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cpolicias.
     *     @param {cpoliciaCreateManyArgs} args - Arguments to create many Cpolicias.
     *     @example
     *     // Create many Cpolicias
     *     const cpolicia = await prisma.cpolicia.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cpoliciaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cpoliciaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cpolicia.
     * @param {cpoliciaDeleteArgs} args - Arguments to delete one Cpolicia.
     * @example
     * // Delete one Cpolicia
     * const Cpolicia = await prisma.cpolicia.delete({
     *   where: {
     *     // ... filter to delete one Cpolicia
     *   }
     * })
     * 
    **/
    delete<T extends cpoliciaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cpoliciaDeleteArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cpolicia.
     * @param {cpoliciaUpdateArgs} args - Arguments to update one Cpolicia.
     * @example
     * // Update one Cpolicia
     * const cpolicia = await prisma.cpolicia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cpoliciaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cpoliciaUpdateArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cpolicias.
     * @param {cpoliciaDeleteManyArgs} args - Arguments to filter Cpolicias to delete.
     * @example
     * // Delete a few Cpolicias
     * const { count } = await prisma.cpolicia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cpoliciaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cpoliciaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cpolicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cpolicias
     * const cpolicia = await prisma.cpolicia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cpoliciaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cpoliciaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cpolicia.
     * @param {cpoliciaUpsertArgs} args - Arguments to update or create a Cpolicia.
     * @example
     * // Update or create a Cpolicia
     * const cpolicia = await prisma.cpolicia.upsert({
     *   create: {
     *     // ... data to create a Cpolicia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cpolicia we want to update
     *   }
     * })
    **/
    upsert<T extends cpoliciaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cpoliciaUpsertArgs<ExtArgs>>
    ): Prisma__cpoliciaClient<$Types.GetResult<cpoliciaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cpolicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaCountArgs} args - Arguments to filter Cpolicias to count.
     * @example
     * // Count the number of Cpolicias
     * const count = await prisma.cpolicia.count({
     *   where: {
     *     // ... the filter for the Cpolicias we want to count
     *   }
     * })
    **/
    count<T extends cpoliciaCountArgs>(
      args?: Subset<T, cpoliciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CpoliciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cpolicia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpoliciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CpoliciaAggregateArgs>(args: Subset<T, CpoliciaAggregateArgs>): Prisma.PrismaPromise<GetCpoliciaAggregateType<T>>

    /**
     * Group by Cpolicia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpoliciaGroupByArgs} args - Group by arguments.
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
      T extends cpoliciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cpoliciaGroupByArgs['orderBy'] }
        : { orderBy?: cpoliciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cpoliciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCpoliciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cpolicia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cpoliciaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * cpolicia base type for findUnique actions
   */
  export type cpoliciaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter, which cpolicia to fetch.
     */
    where: cpoliciaWhereUniqueInput
  }

  /**
   * cpolicia findUnique
   */
  export interface cpoliciaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cpoliciaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cpolicia findUniqueOrThrow
   */
  export type cpoliciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter, which cpolicia to fetch.
     */
    where: cpoliciaWhereUniqueInput
  }


  /**
   * cpolicia base type for findFirst actions
   */
  export type cpoliciaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter, which cpolicia to fetch.
     */
    where?: cpoliciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpolicias to fetch.
     */
    orderBy?: cpoliciaOrderByWithRelationInput | cpoliciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cpolicias.
     */
    cursor?: cpoliciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpolicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpolicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cpolicias.
     */
    distinct?: CpoliciaScalarFieldEnum | CpoliciaScalarFieldEnum[]
  }

  /**
   * cpolicia findFirst
   */
  export interface cpoliciaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cpoliciaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cpolicia findFirstOrThrow
   */
  export type cpoliciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter, which cpolicia to fetch.
     */
    where?: cpoliciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpolicias to fetch.
     */
    orderBy?: cpoliciaOrderByWithRelationInput | cpoliciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cpolicias.
     */
    cursor?: cpoliciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpolicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpolicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cpolicias.
     */
    distinct?: CpoliciaScalarFieldEnum | CpoliciaScalarFieldEnum[]
  }


  /**
   * cpolicia findMany
   */
  export type cpoliciaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter, which cpolicias to fetch.
     */
    where?: cpoliciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpolicias to fetch.
     */
    orderBy?: cpoliciaOrderByWithRelationInput | cpoliciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cpolicias.
     */
    cursor?: cpoliciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpolicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpolicias.
     */
    skip?: number
    distinct?: CpoliciaScalarFieldEnum | CpoliciaScalarFieldEnum[]
  }


  /**
   * cpolicia create
   */
  export type cpoliciaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * The data needed to create a cpolicia.
     */
    data?: XOR<cpoliciaCreateInput, cpoliciaUncheckedCreateInput>
  }


  /**
   * cpolicia createMany
   */
  export type cpoliciaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cpolicias.
     */
    data: cpoliciaCreateManyInput | cpoliciaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cpolicia update
   */
  export type cpoliciaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * The data needed to update a cpolicia.
     */
    data: XOR<cpoliciaUpdateInput, cpoliciaUncheckedUpdateInput>
    /**
     * Choose, which cpolicia to update.
     */
    where: cpoliciaWhereUniqueInput
  }


  /**
   * cpolicia updateMany
   */
  export type cpoliciaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cpolicias.
     */
    data: XOR<cpoliciaUpdateManyMutationInput, cpoliciaUncheckedUpdateManyInput>
    /**
     * Filter which cpolicias to update
     */
    where?: cpoliciaWhereInput
  }


  /**
   * cpolicia upsert
   */
  export type cpoliciaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * The filter to search for the cpolicia to update in case it exists.
     */
    where: cpoliciaWhereUniqueInput
    /**
     * In case the cpolicia found by the `where` argument doesn't exist, create a new cpolicia with this data.
     */
    create: XOR<cpoliciaCreateInput, cpoliciaUncheckedCreateInput>
    /**
     * In case the cpolicia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cpoliciaUpdateInput, cpoliciaUncheckedUpdateInput>
  }


  /**
   * cpolicia delete
   */
  export type cpoliciaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
    /**
     * Filter which cpolicia to delete.
     */
    where: cpoliciaWhereUniqueInput
  }


  /**
   * cpolicia deleteMany
   */
  export type cpoliciaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cpolicias to delete
     */
    where?: cpoliciaWhereInput
  }


  /**
   * cpolicia without action
   */
  export type cpoliciaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpolicia
     */
    select?: cpoliciaSelect<ExtArgs> | null
  }



  /**
   * Model cprestamos
   */


  export type AggregateCprestamos = {
    _count: CprestamosCountAggregateOutputType | null
    _avg: CprestamosAvgAggregateOutputType | null
    _sum: CprestamosSumAggregateOutputType | null
    _min: CprestamosMinAggregateOutputType | null
    _max: CprestamosMaxAggregateOutputType | null
  }

  export type CprestamosAvgAggregateOutputType = {
    id: number | null
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
  }

  export type CprestamosSumAggregateOutputType = {
    id: number | null
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
  }

  export type CprestamosMinAggregateOutputType = {
    id: number | null
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    descr: string | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
  }

  export type CprestamosMaxAggregateOutputType = {
    id: number | null
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    descr: string | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
  }

  export type CprestamosCountAggregateOutputType = {
    id: number
    total: number
    cobrado: number
    mes: number
    ano: number
    sucursal: number
    descr: number
    fichas: number
    fichascob: number
    adelantado: number
    _all: number
  }


  export type CprestamosAvgAggregateInputType = {
    id?: true
    total?: true
    cobrado?: true
    mes?: true
    ano?: true
    fichas?: true
    fichascob?: true
    adelantado?: true
  }

  export type CprestamosSumAggregateInputType = {
    id?: true
    total?: true
    cobrado?: true
    mes?: true
    ano?: true
    fichas?: true
    fichascob?: true
    adelantado?: true
  }

  export type CprestamosMinAggregateInputType = {
    id?: true
    total?: true
    cobrado?: true
    mes?: true
    ano?: true
    sucursal?: true
    descr?: true
    fichas?: true
    fichascob?: true
    adelantado?: true
  }

  export type CprestamosMaxAggregateInputType = {
    id?: true
    total?: true
    cobrado?: true
    mes?: true
    ano?: true
    sucursal?: true
    descr?: true
    fichas?: true
    fichascob?: true
    adelantado?: true
  }

  export type CprestamosCountAggregateInputType = {
    id?: true
    total?: true
    cobrado?: true
    mes?: true
    ano?: true
    sucursal?: true
    descr?: true
    fichas?: true
    fichascob?: true
    adelantado?: true
    _all?: true
  }

  export type CprestamosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cprestamos to aggregate.
     */
    where?: cprestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cprestamos to fetch.
     */
    orderBy?: cprestamosOrderByWithRelationInput | cprestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cprestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cprestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cprestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cprestamos
    **/
    _count?: true | CprestamosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CprestamosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CprestamosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CprestamosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CprestamosMaxAggregateInputType
  }

  export type GetCprestamosAggregateType<T extends CprestamosAggregateArgs> = {
        [P in keyof T & keyof AggregateCprestamos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCprestamos[P]>
      : GetScalarType<T[P], AggregateCprestamos[P]>
  }




  export type cprestamosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cprestamosWhereInput
    orderBy?: cprestamosOrderByWithAggregationInput | cprestamosOrderByWithAggregationInput[]
    by: CprestamosScalarFieldEnum[] | CprestamosScalarFieldEnum
    having?: cprestamosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CprestamosCountAggregateInputType | true
    _avg?: CprestamosAvgAggregateInputType
    _sum?: CprestamosSumAggregateInputType
    _min?: CprestamosMinAggregateInputType
    _max?: CprestamosMaxAggregateInputType
  }


  export type CprestamosGroupByOutputType = {
    id: number
    total: number | null
    cobrado: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    descr: string | null
    fichas: number | null
    fichascob: number | null
    adelantado: number | null
    _count: CprestamosCountAggregateOutputType | null
    _avg: CprestamosAvgAggregateOutputType | null
    _sum: CprestamosSumAggregateOutputType | null
    _min: CprestamosMinAggregateOutputType | null
    _max: CprestamosMaxAggregateOutputType | null
  }

  type GetCprestamosGroupByPayload<T extends cprestamosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CprestamosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CprestamosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CprestamosGroupByOutputType[P]>
            : GetScalarType<T[P], CprestamosGroupByOutputType[P]>
        }
      >
    >


  export type cprestamosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    cobrado?: boolean
    mes?: boolean
    ano?: boolean
    sucursal?: boolean
    descr?: boolean
    fichas?: boolean
    fichascob?: boolean
    adelantado?: boolean
  }, ExtArgs["result"]["cprestamos"]>

  export type cprestamosSelectScalar = {
    id?: boolean
    total?: boolean
    cobrado?: boolean
    mes?: boolean
    ano?: boolean
    sucursal?: boolean
    descr?: boolean
    fichas?: boolean
    fichascob?: boolean
    adelantado?: boolean
  }


  type cprestamosGetPayload<S extends boolean | null | undefined | cprestamosArgs> = $Types.GetResult<cprestamosPayload, S>

  type cprestamosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cprestamosFindManyArgs, 'select' | 'include'> & {
      select?: CprestamosCountAggregateInputType | true
    }

  export interface cprestamosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cprestamos'], meta: { name: 'cprestamos' } }
    /**
     * Find zero or one Cprestamos that matches the filter.
     * @param {cprestamosFindUniqueArgs} args - Arguments to find a Cprestamos
     * @example
     * // Get one Cprestamos
     * const cprestamos = await prisma.cprestamos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cprestamosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cprestamosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cprestamos'> extends True ? Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cprestamos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cprestamosFindUniqueOrThrowArgs} args - Arguments to find a Cprestamos
     * @example
     * // Get one Cprestamos
     * const cprestamos = await prisma.cprestamos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cprestamosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cprestamosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cprestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosFindFirstArgs} args - Arguments to find a Cprestamos
     * @example
     * // Get one Cprestamos
     * const cprestamos = await prisma.cprestamos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cprestamosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cprestamosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cprestamos'> extends True ? Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cprestamos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosFindFirstOrThrowArgs} args - Arguments to find a Cprestamos
     * @example
     * // Get one Cprestamos
     * const cprestamos = await prisma.cprestamos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cprestamosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cprestamosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cprestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cprestamos
     * const cprestamos = await prisma.cprestamos.findMany()
     * 
     * // Get first 10 Cprestamos
     * const cprestamos = await prisma.cprestamos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cprestamosWithIdOnly = await prisma.cprestamos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cprestamosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cprestamosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cprestamos.
     * @param {cprestamosCreateArgs} args - Arguments to create a Cprestamos.
     * @example
     * // Create one Cprestamos
     * const Cprestamos = await prisma.cprestamos.create({
     *   data: {
     *     // ... data to create a Cprestamos
     *   }
     * })
     * 
    **/
    create<T extends cprestamosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cprestamosCreateArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cprestamos.
     *     @param {cprestamosCreateManyArgs} args - Arguments to create many Cprestamos.
     *     @example
     *     // Create many Cprestamos
     *     const cprestamos = await prisma.cprestamos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cprestamosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cprestamosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cprestamos.
     * @param {cprestamosDeleteArgs} args - Arguments to delete one Cprestamos.
     * @example
     * // Delete one Cprestamos
     * const Cprestamos = await prisma.cprestamos.delete({
     *   where: {
     *     // ... filter to delete one Cprestamos
     *   }
     * })
     * 
    **/
    delete<T extends cprestamosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cprestamosDeleteArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cprestamos.
     * @param {cprestamosUpdateArgs} args - Arguments to update one Cprestamos.
     * @example
     * // Update one Cprestamos
     * const cprestamos = await prisma.cprestamos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cprestamosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cprestamosUpdateArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cprestamos.
     * @param {cprestamosDeleteManyArgs} args - Arguments to filter Cprestamos to delete.
     * @example
     * // Delete a few Cprestamos
     * const { count } = await prisma.cprestamos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cprestamosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cprestamosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cprestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cprestamos
     * const cprestamos = await prisma.cprestamos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cprestamosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cprestamosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cprestamos.
     * @param {cprestamosUpsertArgs} args - Arguments to update or create a Cprestamos.
     * @example
     * // Update or create a Cprestamos
     * const cprestamos = await prisma.cprestamos.upsert({
     *   create: {
     *     // ... data to create a Cprestamos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cprestamos we want to update
     *   }
     * })
    **/
    upsert<T extends cprestamosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cprestamosUpsertArgs<ExtArgs>>
    ): Prisma__cprestamosClient<$Types.GetResult<cprestamosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cprestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosCountArgs} args - Arguments to filter Cprestamos to count.
     * @example
     * // Count the number of Cprestamos
     * const count = await prisma.cprestamos.count({
     *   where: {
     *     // ... the filter for the Cprestamos we want to count
     *   }
     * })
    **/
    count<T extends cprestamosCountArgs>(
      args?: Subset<T, cprestamosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CprestamosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cprestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CprestamosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CprestamosAggregateArgs>(args: Subset<T, CprestamosAggregateArgs>): Prisma.PrismaPromise<GetCprestamosAggregateType<T>>

    /**
     * Group by Cprestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cprestamosGroupByArgs} args - Group by arguments.
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
      T extends cprestamosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cprestamosGroupByArgs['orderBy'] }
        : { orderBy?: cprestamosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cprestamosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCprestamosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cprestamos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cprestamosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * cprestamos base type for findUnique actions
   */
  export type cprestamosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter, which cprestamos to fetch.
     */
    where: cprestamosWhereUniqueInput
  }

  /**
   * cprestamos findUnique
   */
  export interface cprestamosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cprestamosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cprestamos findUniqueOrThrow
   */
  export type cprestamosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter, which cprestamos to fetch.
     */
    where: cprestamosWhereUniqueInput
  }


  /**
   * cprestamos base type for findFirst actions
   */
  export type cprestamosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter, which cprestamos to fetch.
     */
    where?: cprestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cprestamos to fetch.
     */
    orderBy?: cprestamosOrderByWithRelationInput | cprestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cprestamos.
     */
    cursor?: cprestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cprestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cprestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cprestamos.
     */
    distinct?: CprestamosScalarFieldEnum | CprestamosScalarFieldEnum[]
  }

  /**
   * cprestamos findFirst
   */
  export interface cprestamosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cprestamosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cprestamos findFirstOrThrow
   */
  export type cprestamosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter, which cprestamos to fetch.
     */
    where?: cprestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cprestamos to fetch.
     */
    orderBy?: cprestamosOrderByWithRelationInput | cprestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cprestamos.
     */
    cursor?: cprestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cprestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cprestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cprestamos.
     */
    distinct?: CprestamosScalarFieldEnum | CprestamosScalarFieldEnum[]
  }


  /**
   * cprestamos findMany
   */
  export type cprestamosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter, which cprestamos to fetch.
     */
    where?: cprestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cprestamos to fetch.
     */
    orderBy?: cprestamosOrderByWithRelationInput | cprestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cprestamos.
     */
    cursor?: cprestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cprestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cprestamos.
     */
    skip?: number
    distinct?: CprestamosScalarFieldEnum | CprestamosScalarFieldEnum[]
  }


  /**
   * cprestamos create
   */
  export type cprestamosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * The data needed to create a cprestamos.
     */
    data?: XOR<cprestamosCreateInput, cprestamosUncheckedCreateInput>
  }


  /**
   * cprestamos createMany
   */
  export type cprestamosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cprestamos.
     */
    data: cprestamosCreateManyInput | cprestamosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cprestamos update
   */
  export type cprestamosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * The data needed to update a cprestamos.
     */
    data: XOR<cprestamosUpdateInput, cprestamosUncheckedUpdateInput>
    /**
     * Choose, which cprestamos to update.
     */
    where: cprestamosWhereUniqueInput
  }


  /**
   * cprestamos updateMany
   */
  export type cprestamosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cprestamos.
     */
    data: XOR<cprestamosUpdateManyMutationInput, cprestamosUncheckedUpdateManyInput>
    /**
     * Filter which cprestamos to update
     */
    where?: cprestamosWhereInput
  }


  /**
   * cprestamos upsert
   */
  export type cprestamosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * The filter to search for the cprestamos to update in case it exists.
     */
    where: cprestamosWhereUniqueInput
    /**
     * In case the cprestamos found by the `where` argument doesn't exist, create a new cprestamos with this data.
     */
    create: XOR<cprestamosCreateInput, cprestamosUncheckedCreateInput>
    /**
     * In case the cprestamos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cprestamosUpdateInput, cprestamosUncheckedUpdateInput>
  }


  /**
   * cprestamos delete
   */
  export type cprestamosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
    /**
     * Filter which cprestamos to delete.
     */
    where: cprestamosWhereUniqueInput
  }


  /**
   * cprestamos deleteMany
   */
  export type cprestamosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cprestamos to delete
     */
    where?: cprestamosWhereInput
  }


  /**
   * cprestamos without action
   */
  export type cprestamosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cprestamos
     */
    select?: cprestamosSelect<ExtArgs> | null
  }



  /**
   * Model ctjt
   */


  export type AggregateCtjt = {
    _count: CtjtCountAggregateOutputType | null
    _avg: CtjtAvgAggregateOutputType | null
    _sum: CtjtSumAggregateOutputType | null
    _min: CtjtMinAggregateOutputType | null
    _max: CtjtMaxAggregateOutputType | null
  }

  export type CtjtAvgAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CtjtSumAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
  }

  export type CtjtMinAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CtjtMaxAggregateOutputType = {
    id: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
  }

  export type CtjtCountAggregateOutputType = {
    id: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    adelantado: number
    sucursal: number
    descr: number
    _all: number
  }


  export type CtjtAvgAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CtjtSumAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
  }

  export type CtjtMinAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CtjtMaxAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
  }

  export type CtjtCountAggregateInputType = {
    id?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    sucursal?: true
    descr?: true
    _all?: true
  }

  export type CtjtAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctjt to aggregate.
     */
    where?: ctjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjts to fetch.
     */
    orderBy?: ctjtOrderByWithRelationInput | ctjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ctjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ctjts
    **/
    _count?: true | CtjtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtjtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtjtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtjtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtjtMaxAggregateInputType
  }

  export type GetCtjtAggregateType<T extends CtjtAggregateArgs> = {
        [P in keyof T & keyof AggregateCtjt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtjt[P]>
      : GetScalarType<T[P], AggregateCtjt[P]>
  }




  export type ctjtGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ctjtWhereInput
    orderBy?: ctjtOrderByWithAggregationInput | ctjtOrderByWithAggregationInput[]
    by: CtjtScalarFieldEnum[] | CtjtScalarFieldEnum
    having?: ctjtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtjtCountAggregateInputType | true
    _avg?: CtjtAvgAggregateInputType
    _sum?: CtjtSumAggregateInputType
    _min?: CtjtMinAggregateInputType
    _max?: CtjtMaxAggregateInputType
  }


  export type CtjtGroupByOutputType = {
    id: number
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    sucursal: string | null
    descr: string | null
    _count: CtjtCountAggregateOutputType | null
    _avg: CtjtAvgAggregateOutputType | null
    _sum: CtjtSumAggregateOutputType | null
    _min: CtjtMinAggregateOutputType | null
    _max: CtjtMaxAggregateOutputType | null
  }

  type GetCtjtGroupByPayload<T extends ctjtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtjtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtjtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtjtGroupByOutputType[P]>
            : GetScalarType<T[P], CtjtGroupByOutputType[P]>
        }
      >
    >


  export type ctjtSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }, ExtArgs["result"]["ctjt"]>

  export type ctjtSelectScalar = {
    id?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    adelantado?: boolean
    sucursal?: boolean
    descr?: boolean
  }


  type ctjtGetPayload<S extends boolean | null | undefined | ctjtArgs> = $Types.GetResult<ctjtPayload, S>

  type ctjtCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ctjtFindManyArgs, 'select' | 'include'> & {
      select?: CtjtCountAggregateInputType | true
    }

  export interface ctjtDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ctjt'], meta: { name: 'ctjt' } }
    /**
     * Find zero or one Ctjt that matches the filter.
     * @param {ctjtFindUniqueArgs} args - Arguments to find a Ctjt
     * @example
     * // Get one Ctjt
     * const ctjt = await prisma.ctjt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ctjtFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ctjtFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ctjt'> extends True ? Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Ctjt that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ctjtFindUniqueOrThrowArgs} args - Arguments to find a Ctjt
     * @example
     * // Get one Ctjt
     * const ctjt = await prisma.ctjt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ctjtFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Ctjt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtFindFirstArgs} args - Arguments to find a Ctjt
     * @example
     * // Get one Ctjt
     * const ctjt = await prisma.ctjt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ctjtFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ctjtFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ctjt'> extends True ? Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Ctjt that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtFindFirstOrThrowArgs} args - Arguments to find a Ctjt
     * @example
     * // Get one Ctjt
     * const ctjt = await prisma.ctjt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ctjtFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Ctjts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ctjts
     * const ctjts = await prisma.ctjt.findMany()
     * 
     * // Get first 10 Ctjts
     * const ctjts = await prisma.ctjt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ctjtWithIdOnly = await prisma.ctjt.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ctjtFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Ctjt.
     * @param {ctjtCreateArgs} args - Arguments to create a Ctjt.
     * @example
     * // Create one Ctjt
     * const Ctjt = await prisma.ctjt.create({
     *   data: {
     *     // ... data to create a Ctjt
     *   }
     * })
     * 
    **/
    create<T extends ctjtCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtCreateArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Ctjts.
     *     @param {ctjtCreateManyArgs} args - Arguments to create many Ctjts.
     *     @example
     *     // Create many Ctjts
     *     const ctjt = await prisma.ctjt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ctjtCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ctjt.
     * @param {ctjtDeleteArgs} args - Arguments to delete one Ctjt.
     * @example
     * // Delete one Ctjt
     * const Ctjt = await prisma.ctjt.delete({
     *   where: {
     *     // ... filter to delete one Ctjt
     *   }
     * })
     * 
    **/
    delete<T extends ctjtDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtDeleteArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Ctjt.
     * @param {ctjtUpdateArgs} args - Arguments to update one Ctjt.
     * @example
     * // Update one Ctjt
     * const ctjt = await prisma.ctjt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ctjtUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtUpdateArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Ctjts.
     * @param {ctjtDeleteManyArgs} args - Arguments to filter Ctjts to delete.
     * @example
     * // Delete a few Ctjts
     * const { count } = await prisma.ctjt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ctjtDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ctjts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ctjts
     * const ctjt = await prisma.ctjt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ctjtUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ctjt.
     * @param {ctjtUpsertArgs} args - Arguments to update or create a Ctjt.
     * @example
     * // Update or create a Ctjt
     * const ctjt = await prisma.ctjt.upsert({
     *   create: {
     *     // ... data to create a Ctjt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ctjt we want to update
     *   }
     * })
    **/
    upsert<T extends ctjtUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtUpsertArgs<ExtArgs>>
    ): Prisma__ctjtClient<$Types.GetResult<ctjtPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Ctjts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtCountArgs} args - Arguments to filter Ctjts to count.
     * @example
     * // Count the number of Ctjts
     * const count = await prisma.ctjt.count({
     *   where: {
     *     // ... the filter for the Ctjts we want to count
     *   }
     * })
    **/
    count<T extends ctjtCountArgs>(
      args?: Subset<T, ctjtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtjtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ctjt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtjtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CtjtAggregateArgs>(args: Subset<T, CtjtAggregateArgs>): Prisma.PrismaPromise<GetCtjtAggregateType<T>>

    /**
     * Group by Ctjt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtGroupByArgs} args - Group by arguments.
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
      T extends ctjtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ctjtGroupByArgs['orderBy'] }
        : { orderBy?: ctjtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ctjtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtjtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ctjt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ctjtClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * ctjt base type for findUnique actions
   */
  export type ctjtFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter, which ctjt to fetch.
     */
    where: ctjtWhereUniqueInput
  }

  /**
   * ctjt findUnique
   */
  export interface ctjtFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ctjtFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ctjt findUniqueOrThrow
   */
  export type ctjtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter, which ctjt to fetch.
     */
    where: ctjtWhereUniqueInput
  }


  /**
   * ctjt base type for findFirst actions
   */
  export type ctjtFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter, which ctjt to fetch.
     */
    where?: ctjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjts to fetch.
     */
    orderBy?: ctjtOrderByWithRelationInput | ctjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctjts.
     */
    cursor?: ctjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctjts.
     */
    distinct?: CtjtScalarFieldEnum | CtjtScalarFieldEnum[]
  }

  /**
   * ctjt findFirst
   */
  export interface ctjtFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ctjtFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ctjt findFirstOrThrow
   */
  export type ctjtFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter, which ctjt to fetch.
     */
    where?: ctjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjts to fetch.
     */
    orderBy?: ctjtOrderByWithRelationInput | ctjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctjts.
     */
    cursor?: ctjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctjts.
     */
    distinct?: CtjtScalarFieldEnum | CtjtScalarFieldEnum[]
  }


  /**
   * ctjt findMany
   */
  export type ctjtFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter, which ctjts to fetch.
     */
    where?: ctjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjts to fetch.
     */
    orderBy?: ctjtOrderByWithRelationInput | ctjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ctjts.
     */
    cursor?: ctjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjts.
     */
    skip?: number
    distinct?: CtjtScalarFieldEnum | CtjtScalarFieldEnum[]
  }


  /**
   * ctjt create
   */
  export type ctjtCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * The data needed to create a ctjt.
     */
    data?: XOR<ctjtCreateInput, ctjtUncheckedCreateInput>
  }


  /**
   * ctjt createMany
   */
  export type ctjtCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ctjts.
     */
    data: ctjtCreateManyInput | ctjtCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ctjt update
   */
  export type ctjtUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * The data needed to update a ctjt.
     */
    data: XOR<ctjtUpdateInput, ctjtUncheckedUpdateInput>
    /**
     * Choose, which ctjt to update.
     */
    where: ctjtWhereUniqueInput
  }


  /**
   * ctjt updateMany
   */
  export type ctjtUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ctjts.
     */
    data: XOR<ctjtUpdateManyMutationInput, ctjtUncheckedUpdateManyInput>
    /**
     * Filter which ctjts to update
     */
    where?: ctjtWhereInput
  }


  /**
   * ctjt upsert
   */
  export type ctjtUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * The filter to search for the ctjt to update in case it exists.
     */
    where: ctjtWhereUniqueInput
    /**
     * In case the ctjt found by the `where` argument doesn't exist, create a new ctjt with this data.
     */
    create: XOR<ctjtCreateInput, ctjtUncheckedCreateInput>
    /**
     * In case the ctjt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ctjtUpdateInput, ctjtUncheckedUpdateInput>
  }


  /**
   * ctjt delete
   */
  export type ctjtDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
    /**
     * Filter which ctjt to delete.
     */
    where: ctjtWhereUniqueInput
  }


  /**
   * ctjt deleteMany
   */
  export type ctjtDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctjts to delete
     */
    where?: ctjtWhereInput
  }


  /**
   * ctjt without action
   */
  export type ctjtArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjt
     */
    select?: ctjtSelect<ExtArgs> | null
  }



  /**
   * Model ctjtm
   */


  export type AggregateCtjtm = {
    _count: CtjtmCountAggregateOutputType | null
    _avg: CtjtmAvgAggregateOutputType | null
    _sum: CtjtmSumAggregateOutputType | null
    _min: CtjtmMinAggregateOutputType | null
    _max: CtjtmMaxAggregateOutputType | null
  }

  export type CtjtmAvgAggregateOutputType = {
    grupo: number | null
    total: number | null
    fichas: number | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    id: number | null
  }

  export type CtjtmSumAggregateOutputType = {
    grupo: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    adelantado: number | null
    id: number | null
  }

  export type CtjtmMinAggregateOutputType = {
    grupo: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    adelantado: number | null
    descr: string | null
    id: number | null
  }

  export type CtjtmMaxAggregateOutputType = {
    grupo: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    adelantado: number | null
    descr: string | null
    id: number | null
  }

  export type CtjtmCountAggregateOutputType = {
    grupo: number
    total: number
    fichas: number
    cobrado: number
    fichascob: number
    mes: number
    ano: number
    sucursal: number
    adelantado: number
    descr: number
    id: number
    _all: number
  }


  export type CtjtmAvgAggregateInputType = {
    grupo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    id?: true
  }

  export type CtjtmSumAggregateInputType = {
    grupo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    adelantado?: true
    id?: true
  }

  export type CtjtmMinAggregateInputType = {
    grupo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    sucursal?: true
    adelantado?: true
    descr?: true
    id?: true
  }

  export type CtjtmMaxAggregateInputType = {
    grupo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    sucursal?: true
    adelantado?: true
    descr?: true
    id?: true
  }

  export type CtjtmCountAggregateInputType = {
    grupo?: true
    total?: true
    fichas?: true
    cobrado?: true
    fichascob?: true
    mes?: true
    ano?: true
    sucursal?: true
    adelantado?: true
    descr?: true
    id?: true
    _all?: true
  }

  export type CtjtmAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctjtm to aggregate.
     */
    where?: ctjtmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjtms to fetch.
     */
    orderBy?: ctjtmOrderByWithRelationInput | ctjtmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ctjtmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjtms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjtms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ctjtms
    **/
    _count?: true | CtjtmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtjtmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtjtmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtjtmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtjtmMaxAggregateInputType
  }

  export type GetCtjtmAggregateType<T extends CtjtmAggregateArgs> = {
        [P in keyof T & keyof AggregateCtjtm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtjtm[P]>
      : GetScalarType<T[P], AggregateCtjtm[P]>
  }




  export type ctjtmGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ctjtmWhereInput
    orderBy?: ctjtmOrderByWithAggregationInput | ctjtmOrderByWithAggregationInput[]
    by: CtjtmScalarFieldEnum[] | CtjtmScalarFieldEnum
    having?: ctjtmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtjtmCountAggregateInputType | true
    _avg?: CtjtmAvgAggregateInputType
    _sum?: CtjtmSumAggregateInputType
    _min?: CtjtmMinAggregateInputType
    _max?: CtjtmMaxAggregateInputType
  }


  export type CtjtmGroupByOutputType = {
    grupo: number | null
    total: number | null
    fichas: bigint | null
    cobrado: number | null
    fichascob: number | null
    mes: number | null
    ano: number | null
    sucursal: string | null
    adelantado: number | null
    descr: string | null
    id: number
    _count: CtjtmCountAggregateOutputType | null
    _avg: CtjtmAvgAggregateOutputType | null
    _sum: CtjtmSumAggregateOutputType | null
    _min: CtjtmMinAggregateOutputType | null
    _max: CtjtmMaxAggregateOutputType | null
  }

  type GetCtjtmGroupByPayload<T extends ctjtmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtjtmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtjtmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtjtmGroupByOutputType[P]>
            : GetScalarType<T[P], CtjtmGroupByOutputType[P]>
        }
      >
    >


  export type ctjtmSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    grupo?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    sucursal?: boolean
    adelantado?: boolean
    descr?: boolean
    id?: boolean
  }, ExtArgs["result"]["ctjtm"]>

  export type ctjtmSelectScalar = {
    grupo?: boolean
    total?: boolean
    fichas?: boolean
    cobrado?: boolean
    fichascob?: boolean
    mes?: boolean
    ano?: boolean
    sucursal?: boolean
    adelantado?: boolean
    descr?: boolean
    id?: boolean
  }


  type ctjtmGetPayload<S extends boolean | null | undefined | ctjtmArgs> = $Types.GetResult<ctjtmPayload, S>

  type ctjtmCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ctjtmFindManyArgs, 'select' | 'include'> & {
      select?: CtjtmCountAggregateInputType | true
    }

  export interface ctjtmDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ctjtm'], meta: { name: 'ctjtm' } }
    /**
     * Find zero or one Ctjtm that matches the filter.
     * @param {ctjtmFindUniqueArgs} args - Arguments to find a Ctjtm
     * @example
     * // Get one Ctjtm
     * const ctjtm = await prisma.ctjtm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ctjtmFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ctjtmFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ctjtm'> extends True ? Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Ctjtm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ctjtmFindUniqueOrThrowArgs} args - Arguments to find a Ctjtm
     * @example
     * // Get one Ctjtm
     * const ctjtm = await prisma.ctjtm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ctjtmFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtmFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Ctjtm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmFindFirstArgs} args - Arguments to find a Ctjtm
     * @example
     * // Get one Ctjtm
     * const ctjtm = await prisma.ctjtm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ctjtmFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ctjtmFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ctjtm'> extends True ? Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Ctjtm that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmFindFirstOrThrowArgs} args - Arguments to find a Ctjtm
     * @example
     * // Get one Ctjtm
     * const ctjtm = await prisma.ctjtm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ctjtmFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtmFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Ctjtms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ctjtms
     * const ctjtms = await prisma.ctjtm.findMany()
     * 
     * // Get first 10 Ctjtms
     * const ctjtms = await prisma.ctjtm.findMany({ take: 10 })
     * 
     * // Only select the `grupo`
     * const ctjtmWithGrupoOnly = await prisma.ctjtm.findMany({ select: { grupo: true } })
     * 
    **/
    findMany<T extends ctjtmFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtmFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Ctjtm.
     * @param {ctjtmCreateArgs} args - Arguments to create a Ctjtm.
     * @example
     * // Create one Ctjtm
     * const Ctjtm = await prisma.ctjtm.create({
     *   data: {
     *     // ... data to create a Ctjtm
     *   }
     * })
     * 
    **/
    create<T extends ctjtmCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtmCreateArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Ctjtms.
     *     @param {ctjtmCreateManyArgs} args - Arguments to create many Ctjtms.
     *     @example
     *     // Create many Ctjtms
     *     const ctjtm = await prisma.ctjtm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ctjtmCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtmCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ctjtm.
     * @param {ctjtmDeleteArgs} args - Arguments to delete one Ctjtm.
     * @example
     * // Delete one Ctjtm
     * const Ctjtm = await prisma.ctjtm.delete({
     *   where: {
     *     // ... filter to delete one Ctjtm
     *   }
     * })
     * 
    **/
    delete<T extends ctjtmDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtmDeleteArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Ctjtm.
     * @param {ctjtmUpdateArgs} args - Arguments to update one Ctjtm.
     * @example
     * // Update one Ctjtm
     * const ctjtm = await prisma.ctjtm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ctjtmUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtmUpdateArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Ctjtms.
     * @param {ctjtmDeleteManyArgs} args - Arguments to filter Ctjtms to delete.
     * @example
     * // Delete a few Ctjtms
     * const { count } = await prisma.ctjtm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ctjtmDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ctjtmDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ctjtms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ctjtms
     * const ctjtm = await prisma.ctjtm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ctjtmUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtmUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ctjtm.
     * @param {ctjtmUpsertArgs} args - Arguments to update or create a Ctjtm.
     * @example
     * // Update or create a Ctjtm
     * const ctjtm = await prisma.ctjtm.upsert({
     *   create: {
     *     // ... data to create a Ctjtm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ctjtm we want to update
     *   }
     * })
    **/
    upsert<T extends ctjtmUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ctjtmUpsertArgs<ExtArgs>>
    ): Prisma__ctjtmClient<$Types.GetResult<ctjtmPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Ctjtms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmCountArgs} args - Arguments to filter Ctjtms to count.
     * @example
     * // Count the number of Ctjtms
     * const count = await prisma.ctjtm.count({
     *   where: {
     *     // ... the filter for the Ctjtms we want to count
     *   }
     * })
    **/
    count<T extends ctjtmCountArgs>(
      args?: Subset<T, ctjtmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtjtmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ctjtm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtjtmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CtjtmAggregateArgs>(args: Subset<T, CtjtmAggregateArgs>): Prisma.PrismaPromise<GetCtjtmAggregateType<T>>

    /**
     * Group by Ctjtm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctjtmGroupByArgs} args - Group by arguments.
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
      T extends ctjtmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ctjtmGroupByArgs['orderBy'] }
        : { orderBy?: ctjtmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ctjtmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtjtmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ctjtm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ctjtmClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * ctjtm base type for findUnique actions
   */
  export type ctjtmFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter, which ctjtm to fetch.
     */
    where: ctjtmWhereUniqueInput
  }

  /**
   * ctjtm findUnique
   */
  export interface ctjtmFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ctjtmFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ctjtm findUniqueOrThrow
   */
  export type ctjtmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter, which ctjtm to fetch.
     */
    where: ctjtmWhereUniqueInput
  }


  /**
   * ctjtm base type for findFirst actions
   */
  export type ctjtmFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter, which ctjtm to fetch.
     */
    where?: ctjtmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjtms to fetch.
     */
    orderBy?: ctjtmOrderByWithRelationInput | ctjtmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctjtms.
     */
    cursor?: ctjtmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjtms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjtms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctjtms.
     */
    distinct?: CtjtmScalarFieldEnum | CtjtmScalarFieldEnum[]
  }

  /**
   * ctjtm findFirst
   */
  export interface ctjtmFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ctjtmFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ctjtm findFirstOrThrow
   */
  export type ctjtmFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter, which ctjtm to fetch.
     */
    where?: ctjtmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjtms to fetch.
     */
    orderBy?: ctjtmOrderByWithRelationInput | ctjtmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctjtms.
     */
    cursor?: ctjtmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjtms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjtms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctjtms.
     */
    distinct?: CtjtmScalarFieldEnum | CtjtmScalarFieldEnum[]
  }


  /**
   * ctjtm findMany
   */
  export type ctjtmFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter, which ctjtms to fetch.
     */
    where?: ctjtmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctjtms to fetch.
     */
    orderBy?: ctjtmOrderByWithRelationInput | ctjtmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ctjtms.
     */
    cursor?: ctjtmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctjtms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctjtms.
     */
    skip?: number
    distinct?: CtjtmScalarFieldEnum | CtjtmScalarFieldEnum[]
  }


  /**
   * ctjtm create
   */
  export type ctjtmCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * The data needed to create a ctjtm.
     */
    data?: XOR<ctjtmCreateInput, ctjtmUncheckedCreateInput>
  }


  /**
   * ctjtm createMany
   */
  export type ctjtmCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ctjtms.
     */
    data: ctjtmCreateManyInput | ctjtmCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ctjtm update
   */
  export type ctjtmUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * The data needed to update a ctjtm.
     */
    data: XOR<ctjtmUpdateInput, ctjtmUncheckedUpdateInput>
    /**
     * Choose, which ctjtm to update.
     */
    where: ctjtmWhereUniqueInput
  }


  /**
   * ctjtm updateMany
   */
  export type ctjtmUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ctjtms.
     */
    data: XOR<ctjtmUpdateManyMutationInput, ctjtmUncheckedUpdateManyInput>
    /**
     * Filter which ctjtms to update
     */
    where?: ctjtmWhereInput
  }


  /**
   * ctjtm upsert
   */
  export type ctjtmUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * The filter to search for the ctjtm to update in case it exists.
     */
    where: ctjtmWhereUniqueInput
    /**
     * In case the ctjtm found by the `where` argument doesn't exist, create a new ctjtm with this data.
     */
    create: XOR<ctjtmCreateInput, ctjtmUncheckedCreateInput>
    /**
     * In case the ctjtm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ctjtmUpdateInput, ctjtmUncheckedUpdateInput>
  }


  /**
   * ctjtm delete
   */
  export type ctjtmDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
    /**
     * Filter which ctjtm to delete.
     */
    where: ctjtmWhereUniqueInput
  }


  /**
   * ctjtm deleteMany
   */
  export type ctjtmDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctjtms to delete
     */
    where?: ctjtmWhereInput
  }


  /**
   * ctjtm without action
   */
  export type ctjtmArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctjtm
     */
    select?: ctjtmSelect<ExtArgs> | null
  }



  /**
   * Model m1000
   */


  export type AggregateM1000 = {
    _count: M1000CountAggregateOutputType | null
    _avg: M1000AvgAggregateOutputType | null
    _sum: M1000SumAggregateOutputType | null
    _min: M1000MinAggregateOutputType | null
    _max: M1000MaxAggregateOutputType | null
  }

  export type M1000AvgAggregateOutputType = {
    idm1000: number | null
    zona: number | null
    fichasinicial: number | null
    morainicial: number | null
    mes: number | null
    ano: number | null
  }

  export type M1000SumAggregateOutputType = {
    idm1000: number | null
    zona: number | null
    fichasinicial: number | null
    morainicial: number | null
    mes: number | null
    ano: number | null
  }

  export type M1000MinAggregateOutputType = {
    idm1000: number | null
    zona: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }

  export type M1000MaxAggregateOutputType = {
    idm1000: number | null
    zona: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }

  export type M1000CountAggregateOutputType = {
    idm1000: number
    zona: number
    descr: number
    fichasinicial: number
    morainicial: number
    fichasactual: number
    moraactual: number
    mes: number
    ano: number
    fecha_actualizacion: number
    fecha_creacion: number
    _all: number
  }


  export type M1000AvgAggregateInputType = {
    idm1000?: true
    zona?: true
    fichasinicial?: true
    morainicial?: true
    mes?: true
    ano?: true
  }

  export type M1000SumAggregateInputType = {
    idm1000?: true
    zona?: true
    fichasinicial?: true
    morainicial?: true
    mes?: true
    ano?: true
  }

  export type M1000MinAggregateInputType = {
    idm1000?: true
    zona?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
  }

  export type M1000MaxAggregateInputType = {
    idm1000?: true
    zona?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
  }

  export type M1000CountAggregateInputType = {
    idm1000?: true
    zona?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
    _all?: true
  }

  export type M1000AggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which m1000 to aggregate.
     */
    where?: m1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m1000s to fetch.
     */
    orderBy?: m1000OrderByWithRelationInput | m1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: m1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned m1000s
    **/
    _count?: true | M1000CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: M1000AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: M1000SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: M1000MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: M1000MaxAggregateInputType
  }

  export type GetM1000AggregateType<T extends M1000AggregateArgs> = {
        [P in keyof T & keyof AggregateM1000]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateM1000[P]>
      : GetScalarType<T[P], AggregateM1000[P]>
  }




  export type m1000GroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: m1000WhereInput
    orderBy?: m1000OrderByWithAggregationInput | m1000OrderByWithAggregationInput[]
    by: M1000ScalarFieldEnum[] | M1000ScalarFieldEnum
    having?: m1000ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: M1000CountAggregateInputType | true
    _avg?: M1000AvgAggregateInputType
    _sum?: M1000SumAggregateInputType
    _min?: M1000MinAggregateInputType
    _max?: M1000MaxAggregateInputType
  }


  export type M1000GroupByOutputType = {
    idm1000: number
    zona: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
    _count: M1000CountAggregateOutputType | null
    _avg: M1000AvgAggregateOutputType | null
    _sum: M1000SumAggregateOutputType | null
    _min: M1000MinAggregateOutputType | null
    _max: M1000MaxAggregateOutputType | null
  }

  type GetM1000GroupByPayload<T extends m1000GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<M1000GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof M1000GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], M1000GroupByOutputType[P]>
            : GetScalarType<T[P], M1000GroupByOutputType[P]>
        }
      >
    >


  export type m1000Select<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idm1000?: boolean
    zona?: boolean
    descr?: boolean
    fichasinicial?: boolean
    morainicial?: boolean
    fichasactual?: boolean
    moraactual?: boolean
    mes?: boolean
    ano?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["m1000"]>

  export type m1000SelectScalar = {
    idm1000?: boolean
    zona?: boolean
    descr?: boolean
    fichasinicial?: boolean
    morainicial?: boolean
    fichasactual?: boolean
    moraactual?: boolean
    mes?: boolean
    ano?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
  }


  type m1000GetPayload<S extends boolean | null | undefined | m1000Args> = $Types.GetResult<m1000Payload, S>

  type m1000CountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<m1000FindManyArgs, 'select' | 'include'> & {
      select?: M1000CountAggregateInputType | true
    }

  export interface m1000Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['m1000'], meta: { name: 'm1000' } }
    /**
     * Find zero or one M1000 that matches the filter.
     * @param {m1000FindUniqueArgs} args - Arguments to find a M1000
     * @example
     * // Get one M1000
     * const m1000 = await prisma.m1000.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends m1000FindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, m1000FindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'm1000'> extends True ? Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one M1000 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {m1000FindUniqueOrThrowArgs} args - Arguments to find a M1000
     * @example
     * // Get one M1000
     * const m1000 = await prisma.m1000.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends m1000FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, m1000FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first M1000 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000FindFirstArgs} args - Arguments to find a M1000
     * @example
     * // Get one M1000
     * const m1000 = await prisma.m1000.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends m1000FindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, m1000FindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'm1000'> extends True ? Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first M1000 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000FindFirstOrThrowArgs} args - Arguments to find a M1000
     * @example
     * // Get one M1000
     * const m1000 = await prisma.m1000.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends m1000FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, m1000FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more M1000s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all M1000s
     * const m1000s = await prisma.m1000.findMany()
     * 
     * // Get first 10 M1000s
     * const m1000s = await prisma.m1000.findMany({ take: 10 })
     * 
     * // Only select the `idm1000`
     * const m1000WithIdm1000Only = await prisma.m1000.findMany({ select: { idm1000: true } })
     * 
    **/
    findMany<T extends m1000FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, m1000FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<m1000Payload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a M1000.
     * @param {m1000CreateArgs} args - Arguments to create a M1000.
     * @example
     * // Create one M1000
     * const M1000 = await prisma.m1000.create({
     *   data: {
     *     // ... data to create a M1000
     *   }
     * })
     * 
    **/
    create<T extends m1000CreateArgs<ExtArgs>>(
      args: SelectSubset<T, m1000CreateArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many M1000s.
     *     @param {m1000CreateManyArgs} args - Arguments to create many M1000s.
     *     @example
     *     // Create many M1000s
     *     const m1000 = await prisma.m1000.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends m1000CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, m1000CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a M1000.
     * @param {m1000DeleteArgs} args - Arguments to delete one M1000.
     * @example
     * // Delete one M1000
     * const M1000 = await prisma.m1000.delete({
     *   where: {
     *     // ... filter to delete one M1000
     *   }
     * })
     * 
    **/
    delete<T extends m1000DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, m1000DeleteArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one M1000.
     * @param {m1000UpdateArgs} args - Arguments to update one M1000.
     * @example
     * // Update one M1000
     * const m1000 = await prisma.m1000.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends m1000UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, m1000UpdateArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more M1000s.
     * @param {m1000DeleteManyArgs} args - Arguments to filter M1000s to delete.
     * @example
     * // Delete a few M1000s
     * const { count } = await prisma.m1000.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends m1000DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, m1000DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M1000s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many M1000s
     * const m1000 = await prisma.m1000.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends m1000UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, m1000UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one M1000.
     * @param {m1000UpsertArgs} args - Arguments to update or create a M1000.
     * @example
     * // Update or create a M1000
     * const m1000 = await prisma.m1000.upsert({
     *   create: {
     *     // ... data to create a M1000
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the M1000 we want to update
     *   }
     * })
    **/
    upsert<T extends m1000UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, m1000UpsertArgs<ExtArgs>>
    ): Prisma__m1000Client<$Types.GetResult<m1000Payload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of M1000s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000CountArgs} args - Arguments to filter M1000s to count.
     * @example
     * // Count the number of M1000s
     * const count = await prisma.m1000.count({
     *   where: {
     *     // ... the filter for the M1000s we want to count
     *   }
     * })
    **/
    count<T extends m1000CountArgs>(
      args?: Subset<T, m1000CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], M1000CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a M1000.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {M1000AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends M1000AggregateArgs>(args: Subset<T, M1000AggregateArgs>): Prisma.PrismaPromise<GetM1000AggregateType<T>>

    /**
     * Group by M1000.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m1000GroupByArgs} args - Group by arguments.
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
      T extends m1000GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: m1000GroupByArgs['orderBy'] }
        : { orderBy?: m1000GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, m1000GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetM1000GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for m1000.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__m1000Client<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * m1000 base type for findUnique actions
   */
  export type m1000FindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter, which m1000 to fetch.
     */
    where: m1000WhereUniqueInput
  }

  /**
   * m1000 findUnique
   */
  export interface m1000FindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends m1000FindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * m1000 findUniqueOrThrow
   */
  export type m1000FindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter, which m1000 to fetch.
     */
    where: m1000WhereUniqueInput
  }


  /**
   * m1000 base type for findFirst actions
   */
  export type m1000FindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter, which m1000 to fetch.
     */
    where?: m1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m1000s to fetch.
     */
    orderBy?: m1000OrderByWithRelationInput | m1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m1000s.
     */
    cursor?: m1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m1000s.
     */
    distinct?: M1000ScalarFieldEnum | M1000ScalarFieldEnum[]
  }

  /**
   * m1000 findFirst
   */
  export interface m1000FindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends m1000FindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * m1000 findFirstOrThrow
   */
  export type m1000FindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter, which m1000 to fetch.
     */
    where?: m1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m1000s to fetch.
     */
    orderBy?: m1000OrderByWithRelationInput | m1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m1000s.
     */
    cursor?: m1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m1000s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m1000s.
     */
    distinct?: M1000ScalarFieldEnum | M1000ScalarFieldEnum[]
  }


  /**
   * m1000 findMany
   */
  export type m1000FindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter, which m1000s to fetch.
     */
    where?: m1000WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m1000s to fetch.
     */
    orderBy?: m1000OrderByWithRelationInput | m1000OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing m1000s.
     */
    cursor?: m1000WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m1000s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m1000s.
     */
    skip?: number
    distinct?: M1000ScalarFieldEnum | M1000ScalarFieldEnum[]
  }


  /**
   * m1000 create
   */
  export type m1000CreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * The data needed to create a m1000.
     */
    data?: XOR<m1000CreateInput, m1000UncheckedCreateInput>
  }


  /**
   * m1000 createMany
   */
  export type m1000CreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many m1000s.
     */
    data: m1000CreateManyInput | m1000CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * m1000 update
   */
  export type m1000UpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * The data needed to update a m1000.
     */
    data: XOR<m1000UpdateInput, m1000UncheckedUpdateInput>
    /**
     * Choose, which m1000 to update.
     */
    where: m1000WhereUniqueInput
  }


  /**
   * m1000 updateMany
   */
  export type m1000UpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update m1000s.
     */
    data: XOR<m1000UpdateManyMutationInput, m1000UncheckedUpdateManyInput>
    /**
     * Filter which m1000s to update
     */
    where?: m1000WhereInput
  }


  /**
   * m1000 upsert
   */
  export type m1000UpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * The filter to search for the m1000 to update in case it exists.
     */
    where: m1000WhereUniqueInput
    /**
     * In case the m1000 found by the `where` argument doesn't exist, create a new m1000 with this data.
     */
    create: XOR<m1000CreateInput, m1000UncheckedCreateInput>
    /**
     * In case the m1000 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<m1000UpdateInput, m1000UncheckedUpdateInput>
  }


  /**
   * m1000 delete
   */
  export type m1000DeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
    /**
     * Filter which m1000 to delete.
     */
    where: m1000WhereUniqueInput
  }


  /**
   * m1000 deleteMany
   */
  export type m1000DeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which m1000s to delete
     */
    where?: m1000WhereInput
  }


  /**
   * m1000 without action
   */
  export type m1000Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m1000
     */
    select?: m1000Select<ExtArgs> | null
  }



  /**
   * Model mtjt
   */


  export type AggregateMtjt = {
    _count: MtjtCountAggregateOutputType | null
    _avg: MtjtAvgAggregateOutputType | null
    _sum: MtjtSumAggregateOutputType | null
    _min: MtjtMinAggregateOutputType | null
    _max: MtjtMaxAggregateOutputType | null
  }

  export type MtjtAvgAggregateOutputType = {
    idmtjt: number | null
    grupo: number | null
    fichasinicial: number | null
    morainicial: number | null
    mes: number | null
    ano: number | null
  }

  export type MtjtSumAggregateOutputType = {
    idmtjt: number | null
    grupo: number | null
    fichasinicial: number | null
    morainicial: number | null
    mes: number | null
    ano: number | null
  }

  export type MtjtMinAggregateOutputType = {
    idmtjt: number | null
    grupo: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }

  export type MtjtMaxAggregateOutputType = {
    idmtjt: number | null
    grupo: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
  }

  export type MtjtCountAggregateOutputType = {
    idmtjt: number
    grupo: number
    descr: number
    fichasinicial: number
    morainicial: number
    fichasactual: number
    moraactual: number
    mes: number
    ano: number
    fecha_actualizacion: number
    fecha_creacion: number
    _all: number
  }


  export type MtjtAvgAggregateInputType = {
    idmtjt?: true
    grupo?: true
    fichasinicial?: true
    morainicial?: true
    mes?: true
    ano?: true
  }

  export type MtjtSumAggregateInputType = {
    idmtjt?: true
    grupo?: true
    fichasinicial?: true
    morainicial?: true
    mes?: true
    ano?: true
  }

  export type MtjtMinAggregateInputType = {
    idmtjt?: true
    grupo?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
  }

  export type MtjtMaxAggregateInputType = {
    idmtjt?: true
    grupo?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
  }

  export type MtjtCountAggregateInputType = {
    idmtjt?: true
    grupo?: true
    descr?: true
    fichasinicial?: true
    morainicial?: true
    fichasactual?: true
    moraactual?: true
    mes?: true
    ano?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
    _all?: true
  }

  export type MtjtAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtjt to aggregate.
     */
    where?: mtjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtjts to fetch.
     */
    orderBy?: mtjtOrderByWithRelationInput | mtjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mtjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mtjts
    **/
    _count?: true | MtjtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MtjtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MtjtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MtjtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MtjtMaxAggregateInputType
  }

  export type GetMtjtAggregateType<T extends MtjtAggregateArgs> = {
        [P in keyof T & keyof AggregateMtjt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMtjt[P]>
      : GetScalarType<T[P], AggregateMtjt[P]>
  }




  export type mtjtGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: mtjtWhereInput
    orderBy?: mtjtOrderByWithAggregationInput | mtjtOrderByWithAggregationInput[]
    by: MtjtScalarFieldEnum[] | MtjtScalarFieldEnum
    having?: mtjtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MtjtCountAggregateInputType | true
    _avg?: MtjtAvgAggregateInputType
    _sum?: MtjtSumAggregateInputType
    _min?: MtjtMinAggregateInputType
    _max?: MtjtMaxAggregateInputType
  }


  export type MtjtGroupByOutputType = {
    idmtjt: number
    grupo: number | null
    descr: string | null
    fichasinicial: number | null
    morainicial: number | null
    fichasactual: string | null
    moraactual: string | null
    mes: number | null
    ano: number | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
    _count: MtjtCountAggregateOutputType | null
    _avg: MtjtAvgAggregateOutputType | null
    _sum: MtjtSumAggregateOutputType | null
    _min: MtjtMinAggregateOutputType | null
    _max: MtjtMaxAggregateOutputType | null
  }

  type GetMtjtGroupByPayload<T extends mtjtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MtjtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MtjtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MtjtGroupByOutputType[P]>
            : GetScalarType<T[P], MtjtGroupByOutputType[P]>
        }
      >
    >


  export type mtjtSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmtjt?: boolean
    grupo?: boolean
    descr?: boolean
    fichasinicial?: boolean
    morainicial?: boolean
    fichasactual?: boolean
    moraactual?: boolean
    mes?: boolean
    ano?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["mtjt"]>

  export type mtjtSelectScalar = {
    idmtjt?: boolean
    grupo?: boolean
    descr?: boolean
    fichasinicial?: boolean
    morainicial?: boolean
    fichasactual?: boolean
    moraactual?: boolean
    mes?: boolean
    ano?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
  }


  type mtjtGetPayload<S extends boolean | null | undefined | mtjtArgs> = $Types.GetResult<mtjtPayload, S>

  type mtjtCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<mtjtFindManyArgs, 'select' | 'include'> & {
      select?: MtjtCountAggregateInputType | true
    }

  export interface mtjtDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mtjt'], meta: { name: 'mtjt' } }
    /**
     * Find zero or one Mtjt that matches the filter.
     * @param {mtjtFindUniqueArgs} args - Arguments to find a Mtjt
     * @example
     * // Get one Mtjt
     * const mtjt = await prisma.mtjt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mtjtFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mtjtFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mtjt'> extends True ? Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Mtjt that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mtjtFindUniqueOrThrowArgs} args - Arguments to find a Mtjt
     * @example
     * // Get one Mtjt
     * const mtjt = await prisma.mtjt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mtjtFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mtjtFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Mtjt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtFindFirstArgs} args - Arguments to find a Mtjt
     * @example
     * // Get one Mtjt
     * const mtjt = await prisma.mtjt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mtjtFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mtjtFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mtjt'> extends True ? Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Mtjt that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtFindFirstOrThrowArgs} args - Arguments to find a Mtjt
     * @example
     * // Get one Mtjt
     * const mtjt = await prisma.mtjt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mtjtFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mtjtFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Mtjts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mtjts
     * const mtjts = await prisma.mtjt.findMany()
     * 
     * // Get first 10 Mtjts
     * const mtjts = await prisma.mtjt.findMany({ take: 10 })
     * 
     * // Only select the `idmtjt`
     * const mtjtWithIdmtjtOnly = await prisma.mtjt.findMany({ select: { idmtjt: true } })
     * 
    **/
    findMany<T extends mtjtFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mtjtFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Mtjt.
     * @param {mtjtCreateArgs} args - Arguments to create a Mtjt.
     * @example
     * // Create one Mtjt
     * const Mtjt = await prisma.mtjt.create({
     *   data: {
     *     // ... data to create a Mtjt
     *   }
     * })
     * 
    **/
    create<T extends mtjtCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mtjtCreateArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Mtjts.
     *     @param {mtjtCreateManyArgs} args - Arguments to create many Mtjts.
     *     @example
     *     // Create many Mtjts
     *     const mtjt = await prisma.mtjt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mtjtCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mtjtCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mtjt.
     * @param {mtjtDeleteArgs} args - Arguments to delete one Mtjt.
     * @example
     * // Delete one Mtjt
     * const Mtjt = await prisma.mtjt.delete({
     *   where: {
     *     // ... filter to delete one Mtjt
     *   }
     * })
     * 
    **/
    delete<T extends mtjtDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mtjtDeleteArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Mtjt.
     * @param {mtjtUpdateArgs} args - Arguments to update one Mtjt.
     * @example
     * // Update one Mtjt
     * const mtjt = await prisma.mtjt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mtjtUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mtjtUpdateArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Mtjts.
     * @param {mtjtDeleteManyArgs} args - Arguments to filter Mtjts to delete.
     * @example
     * // Delete a few Mtjts
     * const { count } = await prisma.mtjt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mtjtDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mtjtDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mtjts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mtjts
     * const mtjt = await prisma.mtjt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mtjtUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mtjtUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mtjt.
     * @param {mtjtUpsertArgs} args - Arguments to update or create a Mtjt.
     * @example
     * // Update or create a Mtjt
     * const mtjt = await prisma.mtjt.upsert({
     *   create: {
     *     // ... data to create a Mtjt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mtjt we want to update
     *   }
     * })
    **/
    upsert<T extends mtjtUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mtjtUpsertArgs<ExtArgs>>
    ): Prisma__mtjtClient<$Types.GetResult<mtjtPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Mtjts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtCountArgs} args - Arguments to filter Mtjts to count.
     * @example
     * // Count the number of Mtjts
     * const count = await prisma.mtjt.count({
     *   where: {
     *     // ... the filter for the Mtjts we want to count
     *   }
     * })
    **/
    count<T extends mtjtCountArgs>(
      args?: Subset<T, mtjtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MtjtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mtjt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtjtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MtjtAggregateArgs>(args: Subset<T, MtjtAggregateArgs>): Prisma.PrismaPromise<GetMtjtAggregateType<T>>

    /**
     * Group by Mtjt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtjtGroupByArgs} args - Group by arguments.
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
      T extends mtjtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mtjtGroupByArgs['orderBy'] }
        : { orderBy?: mtjtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mtjtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMtjtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mtjt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mtjtClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * mtjt base type for findUnique actions
   */
  export type mtjtFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter, which mtjt to fetch.
     */
    where: mtjtWhereUniqueInput
  }

  /**
   * mtjt findUnique
   */
  export interface mtjtFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends mtjtFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mtjt findUniqueOrThrow
   */
  export type mtjtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter, which mtjt to fetch.
     */
    where: mtjtWhereUniqueInput
  }


  /**
   * mtjt base type for findFirst actions
   */
  export type mtjtFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter, which mtjt to fetch.
     */
    where?: mtjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtjts to fetch.
     */
    orderBy?: mtjtOrderByWithRelationInput | mtjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtjts.
     */
    cursor?: mtjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtjts.
     */
    distinct?: MtjtScalarFieldEnum | MtjtScalarFieldEnum[]
  }

  /**
   * mtjt findFirst
   */
  export interface mtjtFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends mtjtFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mtjt findFirstOrThrow
   */
  export type mtjtFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter, which mtjt to fetch.
     */
    where?: mtjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtjts to fetch.
     */
    orderBy?: mtjtOrderByWithRelationInput | mtjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtjts.
     */
    cursor?: mtjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtjts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtjts.
     */
    distinct?: MtjtScalarFieldEnum | MtjtScalarFieldEnum[]
  }


  /**
   * mtjt findMany
   */
  export type mtjtFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter, which mtjts to fetch.
     */
    where?: mtjtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtjts to fetch.
     */
    orderBy?: mtjtOrderByWithRelationInput | mtjtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mtjts.
     */
    cursor?: mtjtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtjts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtjts.
     */
    skip?: number
    distinct?: MtjtScalarFieldEnum | MtjtScalarFieldEnum[]
  }


  /**
   * mtjt create
   */
  export type mtjtCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * The data needed to create a mtjt.
     */
    data?: XOR<mtjtCreateInput, mtjtUncheckedCreateInput>
  }


  /**
   * mtjt createMany
   */
  export type mtjtCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mtjts.
     */
    data: mtjtCreateManyInput | mtjtCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * mtjt update
   */
  export type mtjtUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * The data needed to update a mtjt.
     */
    data: XOR<mtjtUpdateInput, mtjtUncheckedUpdateInput>
    /**
     * Choose, which mtjt to update.
     */
    where: mtjtWhereUniqueInput
  }


  /**
   * mtjt updateMany
   */
  export type mtjtUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mtjts.
     */
    data: XOR<mtjtUpdateManyMutationInput, mtjtUncheckedUpdateManyInput>
    /**
     * Filter which mtjts to update
     */
    where?: mtjtWhereInput
  }


  /**
   * mtjt upsert
   */
  export type mtjtUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * The filter to search for the mtjt to update in case it exists.
     */
    where: mtjtWhereUniqueInput
    /**
     * In case the mtjt found by the `where` argument doesn't exist, create a new mtjt with this data.
     */
    create: XOR<mtjtCreateInput, mtjtUncheckedCreateInput>
    /**
     * In case the mtjt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mtjtUpdateInput, mtjtUncheckedUpdateInput>
  }


  /**
   * mtjt delete
   */
  export type mtjtDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
    /**
     * Filter which mtjt to delete.
     */
    where: mtjtWhereUniqueInput
  }


  /**
   * mtjt deleteMany
   */
  export type mtjtDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtjts to delete
     */
    where?: mtjtWhereInput
  }


  /**
   * mtjt without action
   */
  export type mtjtArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtjt
     */
    select?: mtjtSelect<ExtArgs> | null
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


  export const C1000ScalarFieldEnum: {
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

  export type C1000ScalarFieldEnum = (typeof C1000ScalarFieldEnum)[keyof typeof C1000ScalarFieldEnum]


  export const C1000mScalarFieldEnum: {
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

  export type C1000mScalarFieldEnum = (typeof C1000mScalarFieldEnum)[keyof typeof C1000mScalarFieldEnum]


  export const CbancoScalarFieldEnum: {
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

  export type CbancoScalarFieldEnum = (typeof CbancoScalarFieldEnum)[keyof typeof CbancoScalarFieldEnum]


  export const CconvenioScalarFieldEnum: {
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

  export type CconvenioScalarFieldEnum = (typeof CconvenioScalarFieldEnum)[keyof typeof CconvenioScalarFieldEnum]


  export const CpoliciaScalarFieldEnum: {
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

  export type CpoliciaScalarFieldEnum = (typeof CpoliciaScalarFieldEnum)[keyof typeof CpoliciaScalarFieldEnum]


  export const CprestamosScalarFieldEnum: {
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

  export type CprestamosScalarFieldEnum = (typeof CprestamosScalarFieldEnum)[keyof typeof CprestamosScalarFieldEnum]


  export const CtjtScalarFieldEnum: {
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

  export type CtjtScalarFieldEnum = (typeof CtjtScalarFieldEnum)[keyof typeof CtjtScalarFieldEnum]


  export const CtjtmScalarFieldEnum: {
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

  export type CtjtmScalarFieldEnum = (typeof CtjtmScalarFieldEnum)[keyof typeof CtjtmScalarFieldEnum]


  export const M1000ScalarFieldEnum: {
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

  export type M1000ScalarFieldEnum = (typeof M1000ScalarFieldEnum)[keyof typeof M1000ScalarFieldEnum]


  export const MtjtScalarFieldEnum: {
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

  export type MtjtScalarFieldEnum = (typeof MtjtScalarFieldEnum)[keyof typeof MtjtScalarFieldEnum]


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


  export type c1000WhereInput = {
    AND?: c1000WhereInput | c1000WhereInput[]
    OR?: c1000WhereInput[]
    NOT?: c1000WhereInput | c1000WhereInput[]
    id?: IntFilter | number
    zona?: IntFilter | number
    total?: FloatNullableFilter | number | null
    fichas?: BigIntNullableFilter | bigint | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    descr?: StringNullableFilter | string | null
  }

  export type c1000OrderByWithRelationInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
  }

  export type c1000WhereUniqueInput = {
    id_zona?: c1000IdZonaCompoundUniqueInput
  }

  export type c1000OrderByWithAggregationInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    _count?: c1000CountOrderByAggregateInput
    _avg?: c1000AvgOrderByAggregateInput
    _max?: c1000MaxOrderByAggregateInput
    _min?: c1000MinOrderByAggregateInput
    _sum?: c1000SumOrderByAggregateInput
  }

  export type c1000ScalarWhereWithAggregatesInput = {
    AND?: c1000ScalarWhereWithAggregatesInput | c1000ScalarWhereWithAggregatesInput[]
    OR?: c1000ScalarWhereWithAggregatesInput[]
    NOT?: c1000ScalarWhereWithAggregatesInput | c1000ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter | number
    zona?: IntWithAggregatesFilter | number
    total?: FloatNullableWithAggregatesFilter | number | null
    fichas?: BigIntNullableWithAggregatesFilter | bigint | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    descr?: StringNullableWithAggregatesFilter | string | null
  }

  export type c1000mWhereInput = {
    AND?: c1000mWhereInput | c1000mWhereInput[]
    OR?: c1000mWhereInput[]
    NOT?: c1000mWhereInput | c1000mWhereInput[]
    zona?: IntNullableFilter | number | null
    total?: FloatNullableFilter | number | null
    fichas?: BigIntNullableFilter | bigint | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    descr?: StringNullableFilter | string | null
    id?: IntFilter | number
  }

  export type c1000mOrderByWithRelationInput = {
    zona?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type c1000mWhereUniqueInput = {
    id?: number
  }

  export type c1000mOrderByWithAggregationInput = {
    zona?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: c1000mCountOrderByAggregateInput
    _avg?: c1000mAvgOrderByAggregateInput
    _max?: c1000mMaxOrderByAggregateInput
    _min?: c1000mMinOrderByAggregateInput
    _sum?: c1000mSumOrderByAggregateInput
  }

  export type c1000mScalarWhereWithAggregatesInput = {
    AND?: c1000mScalarWhereWithAggregatesInput | c1000mScalarWhereWithAggregatesInput[]
    OR?: c1000mScalarWhereWithAggregatesInput[]
    NOT?: c1000mScalarWhereWithAggregatesInput | c1000mScalarWhereWithAggregatesInput[]
    zona?: IntNullableWithAggregatesFilter | number | null
    total?: FloatNullableWithAggregatesFilter | number | null
    fichas?: BigIntNullableWithAggregatesFilter | bigint | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    descr?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type cbancoWhereInput = {
    AND?: cbancoWhereInput | cbancoWhereInput[]
    OR?: cbancoWhereInput[]
    NOT?: cbancoWhereInput | cbancoWhereInput[]
    id?: IntFilter | number
    total?: IntNullableFilter | number | null
    fichas?: IntNullableFilter | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
    descr?: StringNullableFilter | string | null
  }

  export type cbancoOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
  }

  export type cbancoWhereUniqueInput = {
    id?: number
  }

  export type cbancoOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    _count?: cbancoCountOrderByAggregateInput
    _avg?: cbancoAvgOrderByAggregateInput
    _max?: cbancoMaxOrderByAggregateInput
    _min?: cbancoMinOrderByAggregateInput
    _sum?: cbancoSumOrderByAggregateInput
  }

  export type cbancoScalarWhereWithAggregatesInput = {
    AND?: cbancoScalarWhereWithAggregatesInput | cbancoScalarWhereWithAggregatesInput[]
    OR?: cbancoScalarWhereWithAggregatesInput[]
    NOT?: cbancoScalarWhereWithAggregatesInput | cbancoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter | number
    total?: IntNullableWithAggregatesFilter | number | null
    fichas?: IntNullableWithAggregatesFilter | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    descr?: StringNullableWithAggregatesFilter | string | null
  }

  export type cconvenioWhereInput = {
    AND?: cconvenioWhereInput | cconvenioWhereInput[]
    OR?: cconvenioWhereInput[]
    NOT?: cconvenioWhereInput | cconvenioWhereInput[]
    id_mora?: IntFilter | number
    tipo?: StringNullableFilter | string | null
    total?: IntNullableFilter | number | null
    fichas?: IntNullableFilter | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
  }

  export type cconvenioOrderByWithRelationInput = {
    id_mora?: SortOrder
    tipo?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
  }

  export type cconvenioWhereUniqueInput = {
    id_mora?: number
  }

  export type cconvenioOrderByWithAggregationInput = {
    id_mora?: SortOrder
    tipo?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    _count?: cconvenioCountOrderByAggregateInput
    _avg?: cconvenioAvgOrderByAggregateInput
    _max?: cconvenioMaxOrderByAggregateInput
    _min?: cconvenioMinOrderByAggregateInput
    _sum?: cconvenioSumOrderByAggregateInput
  }

  export type cconvenioScalarWhereWithAggregatesInput = {
    AND?: cconvenioScalarWhereWithAggregatesInput | cconvenioScalarWhereWithAggregatesInput[]
    OR?: cconvenioScalarWhereWithAggregatesInput[]
    NOT?: cconvenioScalarWhereWithAggregatesInput | cconvenioScalarWhereWithAggregatesInput[]
    id_mora?: IntWithAggregatesFilter | number
    tipo?: StringNullableWithAggregatesFilter | string | null
    total?: IntNullableWithAggregatesFilter | number | null
    fichas?: IntNullableWithAggregatesFilter | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
  }

  export type cpoliciaWhereInput = {
    AND?: cpoliciaWhereInput | cpoliciaWhereInput[]
    OR?: cpoliciaWhereInput[]
    NOT?: cpoliciaWhereInput | cpoliciaWhereInput[]
    id?: IntFilter | number
    total?: IntNullableFilter | number | null
    fichas?: IntNullableFilter | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
    descr?: StringNullableFilter | string | null
  }

  export type cpoliciaOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
  }

  export type cpoliciaWhereUniqueInput = {
    id?: number
  }

  export type cpoliciaOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    _count?: cpoliciaCountOrderByAggregateInput
    _avg?: cpoliciaAvgOrderByAggregateInput
    _max?: cpoliciaMaxOrderByAggregateInput
    _min?: cpoliciaMinOrderByAggregateInput
    _sum?: cpoliciaSumOrderByAggregateInput
  }

  export type cpoliciaScalarWhereWithAggregatesInput = {
    AND?: cpoliciaScalarWhereWithAggregatesInput | cpoliciaScalarWhereWithAggregatesInput[]
    OR?: cpoliciaScalarWhereWithAggregatesInput[]
    NOT?: cpoliciaScalarWhereWithAggregatesInput | cpoliciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter | number
    total?: IntNullableWithAggregatesFilter | number | null
    fichas?: IntNullableWithAggregatesFilter | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    descr?: StringNullableWithAggregatesFilter | string | null
  }

  export type cprestamosWhereInput = {
    AND?: cprestamosWhereInput | cprestamosWhereInput[]
    OR?: cprestamosWhereInput[]
    NOT?: cprestamosWhereInput | cprestamosWhereInput[]
    id?: IntFilter | number
    total?: IntNullableFilter | number | null
    cobrado?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
    descr?: StringNullableFilter | string | null
    fichas?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    adelantado?: FloatNullableFilter | number | null
  }

  export type cprestamosOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
  }

  export type cprestamosWhereUniqueInput = {
    id?: number
  }

  export type cprestamosOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    _count?: cprestamosCountOrderByAggregateInput
    _avg?: cprestamosAvgOrderByAggregateInput
    _max?: cprestamosMaxOrderByAggregateInput
    _min?: cprestamosMinOrderByAggregateInput
    _sum?: cprestamosSumOrderByAggregateInput
  }

  export type cprestamosScalarWhereWithAggregatesInput = {
    AND?: cprestamosScalarWhereWithAggregatesInput | cprestamosScalarWhereWithAggregatesInput[]
    OR?: cprestamosScalarWhereWithAggregatesInput[]
    NOT?: cprestamosScalarWhereWithAggregatesInput | cprestamosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter | number
    total?: IntNullableWithAggregatesFilter | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    descr?: StringNullableWithAggregatesFilter | string | null
    fichas?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    adelantado?: FloatNullableWithAggregatesFilter | number | null
  }

  export type ctjtWhereInput = {
    AND?: ctjtWhereInput | ctjtWhereInput[]
    OR?: ctjtWhereInput[]
    NOT?: ctjtWhereInput | ctjtWhereInput[]
    id?: IntFilter | number
    total?: IntNullableFilter | number | null
    fichas?: IntNullableFilter | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    adelantado?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
    descr?: StringNullableFilter | string | null
  }

  export type ctjtOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
  }

  export type ctjtWhereUniqueInput = {
    id?: number
  }

  export type ctjtOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    _count?: ctjtCountOrderByAggregateInput
    _avg?: ctjtAvgOrderByAggregateInput
    _max?: ctjtMaxOrderByAggregateInput
    _min?: ctjtMinOrderByAggregateInput
    _sum?: ctjtSumOrderByAggregateInput
  }

  export type ctjtScalarWhereWithAggregatesInput = {
    AND?: ctjtScalarWhereWithAggregatesInput | ctjtScalarWhereWithAggregatesInput[]
    OR?: ctjtScalarWhereWithAggregatesInput[]
    NOT?: ctjtScalarWhereWithAggregatesInput | ctjtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter | number
    total?: IntNullableWithAggregatesFilter | number | null
    fichas?: IntNullableWithAggregatesFilter | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    descr?: StringNullableWithAggregatesFilter | string | null
  }

  export type ctjtmWhereInput = {
    AND?: ctjtmWhereInput | ctjtmWhereInput[]
    OR?: ctjtmWhereInput[]
    NOT?: ctjtmWhereInput | ctjtmWhereInput[]
    grupo?: IntNullableFilter | number | null
    total?: FloatNullableFilter | number | null
    fichas?: BigIntNullableFilter | bigint | number | null
    cobrado?: IntNullableFilter | number | null
    fichascob?: IntNullableFilter | number | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    sucursal?: StringNullableFilter | string | null
    adelantado?: IntNullableFilter | number | null
    descr?: StringNullableFilter | string | null
    id?: IntFilter | number
  }

  export type ctjtmOrderByWithRelationInput = {
    grupo?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type ctjtmWhereUniqueInput = {
    id?: number
  }

  export type ctjtmOrderByWithAggregationInput = {
    grupo?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    fichas?: SortOrderInput | SortOrder
    cobrado?: SortOrderInput | SortOrder
    fichascob?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    adelantado?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: ctjtmCountOrderByAggregateInput
    _avg?: ctjtmAvgOrderByAggregateInput
    _max?: ctjtmMaxOrderByAggregateInput
    _min?: ctjtmMinOrderByAggregateInput
    _sum?: ctjtmSumOrderByAggregateInput
  }

  export type ctjtmScalarWhereWithAggregatesInput = {
    AND?: ctjtmScalarWhereWithAggregatesInput | ctjtmScalarWhereWithAggregatesInput[]
    OR?: ctjtmScalarWhereWithAggregatesInput[]
    NOT?: ctjtmScalarWhereWithAggregatesInput | ctjtmScalarWhereWithAggregatesInput[]
    grupo?: IntNullableWithAggregatesFilter | number | null
    total?: FloatNullableWithAggregatesFilter | number | null
    fichas?: BigIntNullableWithAggregatesFilter | bigint | number | null
    cobrado?: IntNullableWithAggregatesFilter | number | null
    fichascob?: IntNullableWithAggregatesFilter | number | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    sucursal?: StringNullableWithAggregatesFilter | string | null
    adelantado?: IntNullableWithAggregatesFilter | number | null
    descr?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type m1000WhereInput = {
    AND?: m1000WhereInput | m1000WhereInput[]
    OR?: m1000WhereInput[]
    NOT?: m1000WhereInput | m1000WhereInput[]
    idm1000?: IntFilter | number
    zona?: IntNullableFilter | number | null
    descr?: StringNullableFilter | string | null
    fichasinicial?: IntNullableFilter | number | null
    morainicial?: IntNullableFilter | number | null
    fichasactual?: StringNullableFilter | string | null
    moraactual?: StringNullableFilter | string | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    fecha_actualizacion?: DateTimeNullableFilter | Date | string | null
    fecha_creacion?: DateTimeNullableFilter | Date | string | null
  }

  export type m1000OrderByWithRelationInput = {
    idm1000?: SortOrder
    zona?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichasinicial?: SortOrderInput | SortOrder
    morainicial?: SortOrderInput | SortOrder
    fichasactual?: SortOrderInput | SortOrder
    moraactual?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
  }

  export type m1000WhereUniqueInput = {
    idm1000?: number
  }

  export type m1000OrderByWithAggregationInput = {
    idm1000?: SortOrder
    zona?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichasinicial?: SortOrderInput | SortOrder
    morainicial?: SortOrderInput | SortOrder
    fichasactual?: SortOrderInput | SortOrder
    moraactual?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: m1000CountOrderByAggregateInput
    _avg?: m1000AvgOrderByAggregateInput
    _max?: m1000MaxOrderByAggregateInput
    _min?: m1000MinOrderByAggregateInput
    _sum?: m1000SumOrderByAggregateInput
  }

  export type m1000ScalarWhereWithAggregatesInput = {
    AND?: m1000ScalarWhereWithAggregatesInput | m1000ScalarWhereWithAggregatesInput[]
    OR?: m1000ScalarWhereWithAggregatesInput[]
    NOT?: m1000ScalarWhereWithAggregatesInput | m1000ScalarWhereWithAggregatesInput[]
    idm1000?: IntWithAggregatesFilter | number
    zona?: IntNullableWithAggregatesFilter | number | null
    descr?: StringNullableWithAggregatesFilter | string | null
    fichasinicial?: IntNullableWithAggregatesFilter | number | null
    morainicial?: IntNullableWithAggregatesFilter | number | null
    fichasactual?: StringNullableWithAggregatesFilter | string | null
    moraactual?: StringNullableWithAggregatesFilter | string | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type mtjtWhereInput = {
    AND?: mtjtWhereInput | mtjtWhereInput[]
    OR?: mtjtWhereInput[]
    NOT?: mtjtWhereInput | mtjtWhereInput[]
    idmtjt?: IntFilter | number
    grupo?: IntNullableFilter | number | null
    descr?: StringNullableFilter | string | null
    fichasinicial?: IntNullableFilter | number | null
    morainicial?: IntNullableFilter | number | null
    fichasactual?: StringNullableFilter | string | null
    moraactual?: StringNullableFilter | string | null
    mes?: IntNullableFilter | number | null
    ano?: IntNullableFilter | number | null
    fecha_actualizacion?: DateTimeNullableFilter | Date | string | null
    fecha_creacion?: DateTimeNullableFilter | Date | string | null
  }

  export type mtjtOrderByWithRelationInput = {
    idmtjt?: SortOrder
    grupo?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichasinicial?: SortOrderInput | SortOrder
    morainicial?: SortOrderInput | SortOrder
    fichasactual?: SortOrderInput | SortOrder
    moraactual?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
  }

  export type mtjtWhereUniqueInput = {
    idmtjt?: number
  }

  export type mtjtOrderByWithAggregationInput = {
    idmtjt?: SortOrder
    grupo?: SortOrderInput | SortOrder
    descr?: SortOrderInput | SortOrder
    fichasinicial?: SortOrderInput | SortOrder
    morainicial?: SortOrderInput | SortOrder
    fichasactual?: SortOrderInput | SortOrder
    moraactual?: SortOrderInput | SortOrder
    mes?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: mtjtCountOrderByAggregateInput
    _avg?: mtjtAvgOrderByAggregateInput
    _max?: mtjtMaxOrderByAggregateInput
    _min?: mtjtMinOrderByAggregateInput
    _sum?: mtjtSumOrderByAggregateInput
  }

  export type mtjtScalarWhereWithAggregatesInput = {
    AND?: mtjtScalarWhereWithAggregatesInput | mtjtScalarWhereWithAggregatesInput[]
    OR?: mtjtScalarWhereWithAggregatesInput[]
    NOT?: mtjtScalarWhereWithAggregatesInput | mtjtScalarWhereWithAggregatesInput[]
    idmtjt?: IntWithAggregatesFilter | number
    grupo?: IntNullableWithAggregatesFilter | number | null
    descr?: StringNullableWithAggregatesFilter | string | null
    fichasinicial?: IntNullableWithAggregatesFilter | number | null
    morainicial?: IntNullableWithAggregatesFilter | number | null
    fichasactual?: StringNullableWithAggregatesFilter | string | null
    moraactual?: StringNullableWithAggregatesFilter | string | null
    mes?: IntNullableWithAggregatesFilter | number | null
    ano?: IntNullableWithAggregatesFilter | number | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type c1000CreateInput = {
    id?: number
    zona: number
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
  }

  export type c1000UncheckedCreateInput = {
    id?: number
    zona: number
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
  }

  export type c1000UpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    zona?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    zona?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000CreateManyInput = {
    id?: number
    zona: number
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
  }

  export type c1000UpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    zona?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    zona?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000mCreateInput = {
    zona?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
  }

  export type c1000mUncheckedCreateInput = {
    zona?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
    id?: number
  }

  export type c1000mUpdateInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000mUncheckedUpdateInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type c1000mCreateManyInput = {
    zona?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    descr?: string | null
    id?: number
  }

  export type c1000mUpdateManyMutationInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type c1000mUncheckedUpdateManyInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type cbancoCreateInput = {
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cbancoUncheckedCreateInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cbancoUpdateInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cbancoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cbancoCreateManyInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cbancoUpdateManyMutationInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cbancoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cconvenioCreateInput = {
    tipo?: string | null
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
  }

  export type cconvenioUncheckedCreateInput = {
    id_mora?: number
    tipo?: string | null
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
  }

  export type cconvenioUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cconvenioUncheckedUpdateInput = {
    id_mora?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cconvenioCreateManyInput = {
    id_mora?: number
    tipo?: string | null
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
  }

  export type cconvenioUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cconvenioUncheckedUpdateManyInput = {
    id_mora?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpoliciaCreateInput = {
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cpoliciaUncheckedCreateInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cpoliciaUpdateInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpoliciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpoliciaCreateManyInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type cpoliciaUpdateManyMutationInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpoliciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cprestamosCreateInput = {
    total?: number | null
    cobrado?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    descr?: string | null
    fichas?: number | null
    fichascob?: number | null
    adelantado?: number | null
  }

  export type cprestamosUncheckedCreateInput = {
    id?: number
    total?: number | null
    cobrado?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    descr?: string | null
    fichas?: number | null
    fichascob?: number | null
    adelantado?: number | null
  }

  export type cprestamosUpdateInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type cprestamosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type cprestamosCreateManyInput = {
    id?: number
    total?: number | null
    cobrado?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    descr?: string | null
    fichas?: number | null
    fichascob?: number | null
    adelantado?: number | null
  }

  export type cprestamosUpdateManyMutationInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type cprestamosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ctjtCreateInput = {
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type ctjtUncheckedCreateInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type ctjtUpdateInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtCreateManyInput = {
    id?: number
    total?: number | null
    fichas?: number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    adelantado?: number | null
    sucursal?: string | null
    descr?: string | null
  }

  export type ctjtUpdateManyMutationInput = {
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableIntFieldUpdateOperationsInput | number | null
    fichas?: NullableIntFieldUpdateOperationsInput | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtmCreateInput = {
    grupo?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    adelantado?: number | null
    descr?: string | null
  }

  export type ctjtmUncheckedCreateInput = {
    grupo?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    adelantado?: number | null
    descr?: string | null
    id?: number
  }

  export type ctjtmUpdateInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtmUncheckedUpdateInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ctjtmCreateManyInput = {
    grupo?: number | null
    total?: number | null
    fichas?: bigint | number | null
    cobrado?: number | null
    fichascob?: number | null
    mes?: number | null
    ano?: number | null
    sucursal?: string | null
    adelantado?: number | null
    descr?: string | null
    id?: number
  }

  export type ctjtmUpdateManyMutationInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ctjtmUncheckedUpdateManyInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    fichas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cobrado?: NullableIntFieldUpdateOperationsInput | number | null
    fichascob?: NullableIntFieldUpdateOperationsInput | number | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    adelantado?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type m1000CreateInput = {
    zona?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type m1000UncheckedCreateInput = {
    idm1000?: number
    zona?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type m1000UpdateInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type m1000UncheckedUpdateInput = {
    idm1000?: IntFieldUpdateOperationsInput | number
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type m1000CreateManyInput = {
    idm1000?: number
    zona?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type m1000UpdateManyMutationInput = {
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type m1000UncheckedUpdateManyInput = {
    idm1000?: IntFieldUpdateOperationsInput | number
    zona?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mtjtCreateInput = {
    grupo?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type mtjtUncheckedCreateInput = {
    idmtjt?: number
    grupo?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type mtjtUpdateInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mtjtUncheckedUpdateInput = {
    idmtjt?: IntFieldUpdateOperationsInput | number
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mtjtCreateManyInput = {
    idmtjt?: number
    grupo?: number | null
    descr?: string | null
    fichasinicial?: number | null
    morainicial?: number | null
    fichasactual?: string | null
    moraactual?: string | null
    mes?: number | null
    ano?: number | null
    fecha_actualizacion?: Date | string | null
    fecha_creacion?: Date | string | null
  }

  export type mtjtUpdateManyMutationInput = {
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mtjtUncheckedUpdateManyInput = {
    idmtjt?: IntFieldUpdateOperationsInput | number
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    descr?: NullableStringFieldUpdateOperationsInput | string | null
    fichasinicial?: NullableIntFieldUpdateOperationsInput | number | null
    morainicial?: NullableIntFieldUpdateOperationsInput | number | null
    fichasactual?: NullableStringFieldUpdateOperationsInput | string | null
    moraactual?: NullableStringFieldUpdateOperationsInput | string | null
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type c1000IdZonaCompoundUniqueInput = {
    id: number
    zona: number
  }

  export type c1000CountOrderByAggregateInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
  }

  export type c1000AvgOrderByAggregateInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type c1000MaxOrderByAggregateInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
  }

  export type c1000MinOrderByAggregateInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
  }

  export type c1000SumOrderByAggregateInput = {
    id?: SortOrder
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
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

  export type c1000mCountOrderByAggregateInput = {
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type c1000mAvgOrderByAggregateInput = {
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    id?: SortOrder
  }

  export type c1000mMaxOrderByAggregateInput = {
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type c1000mMinOrderByAggregateInput = {
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type c1000mSumOrderByAggregateInput = {
    zona?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    id?: SortOrder
  }

  export type cbancoCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cbancoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cbancoMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cbancoMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cbancoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cconvenioCountOrderByAggregateInput = {
    id_mora?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
  }

  export type cconvenioAvgOrderByAggregateInput = {
    id_mora?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cconvenioMaxOrderByAggregateInput = {
    id_mora?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
  }

  export type cconvenioMinOrderByAggregateInput = {
    id_mora?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
  }

  export type cconvenioSumOrderByAggregateInput = {
    id_mora?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cpoliciaCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cpoliciaAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cpoliciaMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cpoliciaMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type cpoliciaSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type cprestamosCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cobrado?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
    fichas?: SortOrder
    fichascob?: SortOrder
    adelantado?: SortOrder
  }

  export type cprestamosAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cobrado?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fichas?: SortOrder
    fichascob?: SortOrder
    adelantado?: SortOrder
  }

  export type cprestamosMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cobrado?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
    fichas?: SortOrder
    fichascob?: SortOrder
    adelantado?: SortOrder
  }

  export type cprestamosMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cobrado?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
    fichas?: SortOrder
    fichascob?: SortOrder
    adelantado?: SortOrder
  }

  export type cprestamosSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cobrado?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fichas?: SortOrder
    fichascob?: SortOrder
    adelantado?: SortOrder
  }

  export type ctjtCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type ctjtAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type ctjtMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type ctjtMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    sucursal?: SortOrder
    descr?: SortOrder
  }

  export type ctjtSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
  }

  export type ctjtmCountOrderByAggregateInput = {
    grupo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type ctjtmAvgOrderByAggregateInput = {
    grupo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    id?: SortOrder
  }

  export type ctjtmMaxOrderByAggregateInput = {
    grupo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type ctjtmMinOrderByAggregateInput = {
    grupo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    sucursal?: SortOrder
    adelantado?: SortOrder
    descr?: SortOrder
    id?: SortOrder
  }

  export type ctjtmSumOrderByAggregateInput = {
    grupo?: SortOrder
    total?: SortOrder
    fichas?: SortOrder
    cobrado?: SortOrder
    fichascob?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    adelantado?: SortOrder
    id?: SortOrder
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

  export type m1000CountOrderByAggregateInput = {
    idm1000?: SortOrder
    zona?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type m1000AvgOrderByAggregateInput = {
    idm1000?: SortOrder
    zona?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type m1000MaxOrderByAggregateInput = {
    idm1000?: SortOrder
    zona?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type m1000MinOrderByAggregateInput = {
    idm1000?: SortOrder
    zona?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type m1000SumOrderByAggregateInput = {
    idm1000?: SortOrder
    zona?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
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

  export type mtjtCountOrderByAggregateInput = {
    idmtjt?: SortOrder
    grupo?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type mtjtAvgOrderByAggregateInput = {
    idmtjt?: SortOrder
    grupo?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type mtjtMaxOrderByAggregateInput = {
    idmtjt?: SortOrder
    grupo?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type mtjtMinOrderByAggregateInput = {
    idmtjt?: SortOrder
    grupo?: SortOrder
    descr?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    fichasactual?: SortOrder
    moraactual?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type mtjtSumOrderByAggregateInput = {
    idmtjt?: SortOrder
    grupo?: SortOrder
    fichasinicial?: SortOrder
    morainicial?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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