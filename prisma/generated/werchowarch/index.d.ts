
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type historial_ganadoresPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    participante: string | null
    dni: string | null
    fecha: Date | null
    premio: string | null
    idganador: number
  }, ExtArgs["result"]["historial_ganadores"]>
  composites: {}
}

/**
 * Model historial_ganadores
 * 
 */
export type historial_ganadores = runtime.Types.DefaultSelection<historial_ganadoresPayload>
export type historial_ganadores_becaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    participante: string | null
    dni: number | null
    fecha: Date | null
    idganador: number
    premio: string | null
  }, ExtArgs["result"]["historial_ganadores_beca"]>
  composites: {}
}

/**
 * Model historial_ganadores_beca
 * 
 */
export type historial_ganadores_beca = runtime.Types.DefaultSelection<historial_ganadores_becaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Historial_ganadores
 * const historial_ganadores = await prisma.historial_ganadores.findMany()
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
   * // Fetch zero or more Historial_ganadores
   * const historial_ganadores = await prisma.historial_ganadores.findMany()
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
   * `prisma.historial_ganadores`: Exposes CRUD operations for the **historial_ganadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_ganadores
    * const historial_ganadores = await prisma.historial_ganadores.findMany()
    * ```
    */
  get historial_ganadores(): Prisma.historial_ganadoresDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.historial_ganadores_beca`: Exposes CRUD operations for the **historial_ganadores_beca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_ganadores_becas
    * const historial_ganadores_becas = await prisma.historial_ganadores_beca.findMany()
    * ```
    */
  get historial_ganadores_beca(): Prisma.historial_ganadores_becaDelegate<GlobalReject, ExtArgs>;
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
    historial_ganadores: 'historial_ganadores',
    historial_ganadores_beca: 'historial_ganadores_beca'
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
      modelProps: 'historial_ganadores' | 'historial_ganadores_beca'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      historial_ganadores: {
        operations: {
          findUnique: {
            args: Prisma.historial_ganadoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload> | null
            payload: historial_ganadoresPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.historial_ganadoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.historial_ganadoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload> | null
            payload: historial_ganadoresPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.historial_ganadoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.historial_ganadoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>[]
            payload: historial_ganadoresPayload<ExtArgs>
          }
          create: {
            args: Prisma.historial_ganadoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.historial_ganadoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadoresPayload<ExtArgs>
          }
          delete: {
            args: Prisma.historial_ganadoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          update: {
            args: Prisma.historial_ganadoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.historial_ganadoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadoresPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.historial_ganadoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadoresPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.historial_ganadoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadoresPayload>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Historial_ganadoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistorial_ganadores>
            payload: historial_ganadoresPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.historial_ganadoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Historial_ganadoresGroupByOutputType>[]
            payload: historial_ganadoresPayload<ExtArgs>
          }
          count: {
            args: Prisma.historial_ganadoresCountArgs<ExtArgs>,
            result: $Utils.Optional<Historial_ganadoresCountAggregateOutputType> | number
            payload: historial_ganadoresPayload<ExtArgs>
          }
        }
      }
      historial_ganadores_beca: {
        operations: {
          findUnique: {
            args: Prisma.historial_ganadores_becaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload> | null
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.historial_ganadores_becaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.historial_ganadores_becaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload> | null
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.historial_ganadores_becaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.historial_ganadores_becaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>[]
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          create: {
            args: Prisma.historial_ganadores_becaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.historial_ganadores_becaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          delete: {
            args: Prisma.historial_ganadores_becaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          update: {
            args: Prisma.historial_ganadores_becaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.historial_ganadores_becaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.historial_ganadores_becaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.historial_ganadores_becaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historial_ganadores_becaPayload>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.Historial_ganadores_becaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistorial_ganadores_beca>
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.historial_ganadores_becaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Historial_ganadores_becaGroupByOutputType>[]
            payload: historial_ganadores_becaPayload<ExtArgs>
          }
          count: {
            args: Prisma.historial_ganadores_becaCountArgs<ExtArgs>,
            result: $Utils.Optional<Historial_ganadores_becaCountAggregateOutputType> | number
            payload: historial_ganadores_becaPayload<ExtArgs>
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
   * Model historial_ganadores
   */


  export type AggregateHistorial_ganadores = {
    _count: Historial_ganadoresCountAggregateOutputType | null
    _avg: Historial_ganadoresAvgAggregateOutputType | null
    _sum: Historial_ganadoresSumAggregateOutputType | null
    _min: Historial_ganadoresMinAggregateOutputType | null
    _max: Historial_ganadoresMaxAggregateOutputType | null
  }

  export type Historial_ganadoresAvgAggregateOutputType = {
    idganador: number | null
  }

  export type Historial_ganadoresSumAggregateOutputType = {
    idganador: number | null
  }

  export type Historial_ganadoresMinAggregateOutputType = {
    participante: string | null
    dni: string | null
    fecha: Date | null
    premio: string | null
    idganador: number | null
  }

  export type Historial_ganadoresMaxAggregateOutputType = {
    participante: string | null
    dni: string | null
    fecha: Date | null
    premio: string | null
    idganador: number | null
  }

  export type Historial_ganadoresCountAggregateOutputType = {
    participante: number
    dni: number
    fecha: number
    premio: number
    idganador: number
    _all: number
  }


  export type Historial_ganadoresAvgAggregateInputType = {
    idganador?: true
  }

  export type Historial_ganadoresSumAggregateInputType = {
    idganador?: true
  }

  export type Historial_ganadoresMinAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    premio?: true
    idganador?: true
  }

  export type Historial_ganadoresMaxAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    premio?: true
    idganador?: true
  }

  export type Historial_ganadoresCountAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    premio?: true
    idganador?: true
    _all?: true
  }

  export type Historial_ganadoresAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_ganadores to aggregate.
     */
    where?: historial_ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores to fetch.
     */
    orderBy?: historial_ganadoresOrderByWithRelationInput | historial_ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_ganadores
    **/
    _count?: true | Historial_ganadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_ganadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_ganadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_ganadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_ganadoresMaxAggregateInputType
  }

  export type GetHistorial_ganadoresAggregateType<T extends Historial_ganadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_ganadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_ganadores[P]>
      : GetScalarType<T[P], AggregateHistorial_ganadores[P]>
  }




  export type historial_ganadoresGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: historial_ganadoresWhereInput
    orderBy?: historial_ganadoresOrderByWithAggregationInput | historial_ganadoresOrderByWithAggregationInput[]
    by: Historial_ganadoresScalarFieldEnum[] | Historial_ganadoresScalarFieldEnum
    having?: historial_ganadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_ganadoresCountAggregateInputType | true
    _avg?: Historial_ganadoresAvgAggregateInputType
    _sum?: Historial_ganadoresSumAggregateInputType
    _min?: Historial_ganadoresMinAggregateInputType
    _max?: Historial_ganadoresMaxAggregateInputType
  }


  export type Historial_ganadoresGroupByOutputType = {
    participante: string | null
    dni: string | null
    fecha: Date | null
    premio: string | null
    idganador: number
    _count: Historial_ganadoresCountAggregateOutputType | null
    _avg: Historial_ganadoresAvgAggregateOutputType | null
    _sum: Historial_ganadoresSumAggregateOutputType | null
    _min: Historial_ganadoresMinAggregateOutputType | null
    _max: Historial_ganadoresMaxAggregateOutputType | null
  }

  type GetHistorial_ganadoresGroupByPayload<T extends historial_ganadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_ganadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_ganadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_ganadoresGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_ganadoresGroupByOutputType[P]>
        }
      >
    >


  export type historial_ganadoresSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participante?: boolean
    dni?: boolean
    fecha?: boolean
    premio?: boolean
    idganador?: boolean
  }, ExtArgs["result"]["historial_ganadores"]>

  export type historial_ganadoresSelectScalar = {
    participante?: boolean
    dni?: boolean
    fecha?: boolean
    premio?: boolean
    idganador?: boolean
  }


  type historial_ganadoresGetPayload<S extends boolean | null | undefined | historial_ganadoresArgs> = $Types.GetResult<historial_ganadoresPayload, S>

  type historial_ganadoresCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<historial_ganadoresFindManyArgs, 'select' | 'include'> & {
      select?: Historial_ganadoresCountAggregateInputType | true
    }

  export interface historial_ganadoresDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_ganadores'], meta: { name: 'historial_ganadores' } }
    /**
     * Find zero or one Historial_ganadores that matches the filter.
     * @param {historial_ganadoresFindUniqueArgs} args - Arguments to find a Historial_ganadores
     * @example
     * // Get one Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends historial_ganadoresFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, historial_ganadoresFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'historial_ganadores'> extends True ? Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Historial_ganadores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {historial_ganadoresFindUniqueOrThrowArgs} args - Arguments to find a Historial_ganadores
     * @example
     * // Get one Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends historial_ganadoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Historial_ganadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresFindFirstArgs} args - Arguments to find a Historial_ganadores
     * @example
     * // Get one Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends historial_ganadoresFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, historial_ganadoresFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'historial_ganadores'> extends True ? Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Historial_ganadores that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresFindFirstOrThrowArgs} args - Arguments to find a Historial_ganadores
     * @example
     * // Get one Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends historial_ganadoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Historial_ganadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findMany()
     * 
     * // Get first 10 Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.findMany({ take: 10 })
     * 
     * // Only select the `participante`
     * const historial_ganadoresWithParticipanteOnly = await prisma.historial_ganadores.findMany({ select: { participante: true } })
     * 
    **/
    findMany<T extends historial_ganadoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Historial_ganadores.
     * @param {historial_ganadoresCreateArgs} args - Arguments to create a Historial_ganadores.
     * @example
     * // Create one Historial_ganadores
     * const Historial_ganadores = await prisma.historial_ganadores.create({
     *   data: {
     *     // ... data to create a Historial_ganadores
     *   }
     * })
     * 
    **/
    create<T extends historial_ganadoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadoresCreateArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Historial_ganadores.
     *     @param {historial_ganadoresCreateManyArgs} args - Arguments to create many Historial_ganadores.
     *     @example
     *     // Create many Historial_ganadores
     *     const historial_ganadores = await prisma.historial_ganadores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends historial_ganadoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historial_ganadores.
     * @param {historial_ganadoresDeleteArgs} args - Arguments to delete one Historial_ganadores.
     * @example
     * // Delete one Historial_ganadores
     * const Historial_ganadores = await prisma.historial_ganadores.delete({
     *   where: {
     *     // ... filter to delete one Historial_ganadores
     *   }
     * })
     * 
    **/
    delete<T extends historial_ganadoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadoresDeleteArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Historial_ganadores.
     * @param {historial_ganadoresUpdateArgs} args - Arguments to update one Historial_ganadores.
     * @example
     * // Update one Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends historial_ganadoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadoresUpdateArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Historial_ganadores.
     * @param {historial_ganadoresDeleteManyArgs} args - Arguments to filter Historial_ganadores to delete.
     * @example
     * // Delete a few Historial_ganadores
     * const { count } = await prisma.historial_ganadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends historial_ganadoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends historial_ganadoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historial_ganadores.
     * @param {historial_ganadoresUpsertArgs} args - Arguments to update or create a Historial_ganadores.
     * @example
     * // Update or create a Historial_ganadores
     * const historial_ganadores = await prisma.historial_ganadores.upsert({
     *   create: {
     *     // ... data to create a Historial_ganadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_ganadores we want to update
     *   }
     * })
    **/
    upsert<T extends historial_ganadoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadoresUpsertArgs<ExtArgs>>
    ): Prisma__historial_ganadoresClient<$Types.GetResult<historial_ganadoresPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Historial_ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresCountArgs} args - Arguments to filter Historial_ganadores to count.
     * @example
     * // Count the number of Historial_ganadores
     * const count = await prisma.historial_ganadores.count({
     *   where: {
     *     // ... the filter for the Historial_ganadores we want to count
     *   }
     * })
    **/
    count<T extends historial_ganadoresCountArgs>(
      args?: Subset<T, historial_ganadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_ganadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_ganadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historial_ganadoresAggregateArgs>(args: Subset<T, Historial_ganadoresAggregateArgs>): Prisma.PrismaPromise<GetHistorial_ganadoresAggregateType<T>>

    /**
     * Group by Historial_ganadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadoresGroupByArgs} args - Group by arguments.
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
      T extends historial_ganadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_ganadoresGroupByArgs['orderBy'] }
        : { orderBy?: historial_ganadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historial_ganadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_ganadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_ganadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__historial_ganadoresClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * historial_ganadores base type for findUnique actions
   */
  export type historial_ganadoresFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores to fetch.
     */
    where: historial_ganadoresWhereUniqueInput
  }

  /**
   * historial_ganadores findUnique
   */
  export interface historial_ganadoresFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historial_ganadoresFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historial_ganadores findUniqueOrThrow
   */
  export type historial_ganadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores to fetch.
     */
    where: historial_ganadoresWhereUniqueInput
  }


  /**
   * historial_ganadores base type for findFirst actions
   */
  export type historial_ganadoresFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores to fetch.
     */
    where?: historial_ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores to fetch.
     */
    orderBy?: historial_ganadoresOrderByWithRelationInput | historial_ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_ganadores.
     */
    cursor?: historial_ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_ganadores.
     */
    distinct?: Historial_ganadoresScalarFieldEnum | Historial_ganadoresScalarFieldEnum[]
  }

  /**
   * historial_ganadores findFirst
   */
  export interface historial_ganadoresFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historial_ganadoresFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historial_ganadores findFirstOrThrow
   */
  export type historial_ganadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores to fetch.
     */
    where?: historial_ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores to fetch.
     */
    orderBy?: historial_ganadoresOrderByWithRelationInput | historial_ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_ganadores.
     */
    cursor?: historial_ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_ganadores.
     */
    distinct?: Historial_ganadoresScalarFieldEnum | Historial_ganadoresScalarFieldEnum[]
  }


  /**
   * historial_ganadores findMany
   */
  export type historial_ganadoresFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores to fetch.
     */
    where?: historial_ganadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores to fetch.
     */
    orderBy?: historial_ganadoresOrderByWithRelationInput | historial_ganadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_ganadores.
     */
    cursor?: historial_ganadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores.
     */
    skip?: number
    distinct?: Historial_ganadoresScalarFieldEnum | Historial_ganadoresScalarFieldEnum[]
  }


  /**
   * historial_ganadores create
   */
  export type historial_ganadoresCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * The data needed to create a historial_ganadores.
     */
    data?: XOR<historial_ganadoresCreateInput, historial_ganadoresUncheckedCreateInput>
  }


  /**
   * historial_ganadores createMany
   */
  export type historial_ganadoresCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_ganadores.
     */
    data: historial_ganadoresCreateManyInput | historial_ganadoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * historial_ganadores update
   */
  export type historial_ganadoresUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * The data needed to update a historial_ganadores.
     */
    data: XOR<historial_ganadoresUpdateInput, historial_ganadoresUncheckedUpdateInput>
    /**
     * Choose, which historial_ganadores to update.
     */
    where: historial_ganadoresWhereUniqueInput
  }


  /**
   * historial_ganadores updateMany
   */
  export type historial_ganadoresUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_ganadores.
     */
    data: XOR<historial_ganadoresUpdateManyMutationInput, historial_ganadoresUncheckedUpdateManyInput>
    /**
     * Filter which historial_ganadores to update
     */
    where?: historial_ganadoresWhereInput
  }


  /**
   * historial_ganadores upsert
   */
  export type historial_ganadoresUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * The filter to search for the historial_ganadores to update in case it exists.
     */
    where: historial_ganadoresWhereUniqueInput
    /**
     * In case the historial_ganadores found by the `where` argument doesn't exist, create a new historial_ganadores with this data.
     */
    create: XOR<historial_ganadoresCreateInput, historial_ganadoresUncheckedCreateInput>
    /**
     * In case the historial_ganadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_ganadoresUpdateInput, historial_ganadoresUncheckedUpdateInput>
  }


  /**
   * historial_ganadores delete
   */
  export type historial_ganadoresDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
    /**
     * Filter which historial_ganadores to delete.
     */
    where: historial_ganadoresWhereUniqueInput
  }


  /**
   * historial_ganadores deleteMany
   */
  export type historial_ganadoresDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_ganadores to delete
     */
    where?: historial_ganadoresWhereInput
  }


  /**
   * historial_ganadores without action
   */
  export type historial_ganadoresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores
     */
    select?: historial_ganadoresSelect<ExtArgs> | null
  }



  /**
   * Model historial_ganadores_beca
   */


  export type AggregateHistorial_ganadores_beca = {
    _count: Historial_ganadores_becaCountAggregateOutputType | null
    _avg: Historial_ganadores_becaAvgAggregateOutputType | null
    _sum: Historial_ganadores_becaSumAggregateOutputType | null
    _min: Historial_ganadores_becaMinAggregateOutputType | null
    _max: Historial_ganadores_becaMaxAggregateOutputType | null
  }

  export type Historial_ganadores_becaAvgAggregateOutputType = {
    dni: number | null
    idganador: number | null
  }

  export type Historial_ganadores_becaSumAggregateOutputType = {
    dni: number | null
    idganador: number | null
  }

  export type Historial_ganadores_becaMinAggregateOutputType = {
    participante: string | null
    dni: number | null
    fecha: Date | null
    idganador: number | null
    premio: string | null
  }

  export type Historial_ganadores_becaMaxAggregateOutputType = {
    participante: string | null
    dni: number | null
    fecha: Date | null
    idganador: number | null
    premio: string | null
  }

  export type Historial_ganadores_becaCountAggregateOutputType = {
    participante: number
    dni: number
    fecha: number
    idganador: number
    premio: number
    _all: number
  }


  export type Historial_ganadores_becaAvgAggregateInputType = {
    dni?: true
    idganador?: true
  }

  export type Historial_ganadores_becaSumAggregateInputType = {
    dni?: true
    idganador?: true
  }

  export type Historial_ganadores_becaMinAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    idganador?: true
    premio?: true
  }

  export type Historial_ganadores_becaMaxAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    idganador?: true
    premio?: true
  }

  export type Historial_ganadores_becaCountAggregateInputType = {
    participante?: true
    dni?: true
    fecha?: true
    idganador?: true
    premio?: true
    _all?: true
  }

  export type Historial_ganadores_becaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_ganadores_beca to aggregate.
     */
    where?: historial_ganadores_becaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores_becas to fetch.
     */
    orderBy?: historial_ganadores_becaOrderByWithRelationInput | historial_ganadores_becaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_ganadores_becaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores_becas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores_becas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_ganadores_becas
    **/
    _count?: true | Historial_ganadores_becaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_ganadores_becaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_ganadores_becaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_ganadores_becaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_ganadores_becaMaxAggregateInputType
  }

  export type GetHistorial_ganadores_becaAggregateType<T extends Historial_ganadores_becaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_ganadores_beca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_ganadores_beca[P]>
      : GetScalarType<T[P], AggregateHistorial_ganadores_beca[P]>
  }




  export type historial_ganadores_becaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: historial_ganadores_becaWhereInput
    orderBy?: historial_ganadores_becaOrderByWithAggregationInput | historial_ganadores_becaOrderByWithAggregationInput[]
    by: Historial_ganadores_becaScalarFieldEnum[] | Historial_ganadores_becaScalarFieldEnum
    having?: historial_ganadores_becaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_ganadores_becaCountAggregateInputType | true
    _avg?: Historial_ganadores_becaAvgAggregateInputType
    _sum?: Historial_ganadores_becaSumAggregateInputType
    _min?: Historial_ganadores_becaMinAggregateInputType
    _max?: Historial_ganadores_becaMaxAggregateInputType
  }


  export type Historial_ganadores_becaGroupByOutputType = {
    participante: string | null
    dni: number | null
    fecha: Date | null
    idganador: number
    premio: string | null
    _count: Historial_ganadores_becaCountAggregateOutputType | null
    _avg: Historial_ganadores_becaAvgAggregateOutputType | null
    _sum: Historial_ganadores_becaSumAggregateOutputType | null
    _min: Historial_ganadores_becaMinAggregateOutputType | null
    _max: Historial_ganadores_becaMaxAggregateOutputType | null
  }

  type GetHistorial_ganadores_becaGroupByPayload<T extends historial_ganadores_becaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_ganadores_becaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_ganadores_becaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_ganadores_becaGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_ganadores_becaGroupByOutputType[P]>
        }
      >
    >


  export type historial_ganadores_becaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participante?: boolean
    dni?: boolean
    fecha?: boolean
    idganador?: boolean
    premio?: boolean
  }, ExtArgs["result"]["historial_ganadores_beca"]>

  export type historial_ganadores_becaSelectScalar = {
    participante?: boolean
    dni?: boolean
    fecha?: boolean
    idganador?: boolean
    premio?: boolean
  }


  type historial_ganadores_becaGetPayload<S extends boolean | null | undefined | historial_ganadores_becaArgs> = $Types.GetResult<historial_ganadores_becaPayload, S>

  type historial_ganadores_becaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<historial_ganadores_becaFindManyArgs, 'select' | 'include'> & {
      select?: Historial_ganadores_becaCountAggregateInputType | true
    }

  export interface historial_ganadores_becaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_ganadores_beca'], meta: { name: 'historial_ganadores_beca' } }
    /**
     * Find zero or one Historial_ganadores_beca that matches the filter.
     * @param {historial_ganadores_becaFindUniqueArgs} args - Arguments to find a Historial_ganadores_beca
     * @example
     * // Get one Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends historial_ganadores_becaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, historial_ganadores_becaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'historial_ganadores_beca'> extends True ? Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Historial_ganadores_beca that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {historial_ganadores_becaFindUniqueOrThrowArgs} args - Arguments to find a Historial_ganadores_beca
     * @example
     * // Get one Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends historial_ganadores_becaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadores_becaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Historial_ganadores_beca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaFindFirstArgs} args - Arguments to find a Historial_ganadores_beca
     * @example
     * // Get one Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends historial_ganadores_becaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, historial_ganadores_becaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'historial_ganadores_beca'> extends True ? Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Historial_ganadores_beca that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaFindFirstOrThrowArgs} args - Arguments to find a Historial_ganadores_beca
     * @example
     * // Get one Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends historial_ganadores_becaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadores_becaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Historial_ganadores_becas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_ganadores_becas
     * const historial_ganadores_becas = await prisma.historial_ganadores_beca.findMany()
     * 
     * // Get first 10 Historial_ganadores_becas
     * const historial_ganadores_becas = await prisma.historial_ganadores_beca.findMany({ take: 10 })
     * 
     * // Only select the `participante`
     * const historial_ganadores_becaWithParticipanteOnly = await prisma.historial_ganadores_beca.findMany({ select: { participante: true } })
     * 
    **/
    findMany<T extends historial_ganadores_becaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadores_becaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Historial_ganadores_beca.
     * @param {historial_ganadores_becaCreateArgs} args - Arguments to create a Historial_ganadores_beca.
     * @example
     * // Create one Historial_ganadores_beca
     * const Historial_ganadores_beca = await prisma.historial_ganadores_beca.create({
     *   data: {
     *     // ... data to create a Historial_ganadores_beca
     *   }
     * })
     * 
    **/
    create<T extends historial_ganadores_becaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadores_becaCreateArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Historial_ganadores_becas.
     *     @param {historial_ganadores_becaCreateManyArgs} args - Arguments to create many Historial_ganadores_becas.
     *     @example
     *     // Create many Historial_ganadores_becas
     *     const historial_ganadores_beca = await prisma.historial_ganadores_beca.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends historial_ganadores_becaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadores_becaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historial_ganadores_beca.
     * @param {historial_ganadores_becaDeleteArgs} args - Arguments to delete one Historial_ganadores_beca.
     * @example
     * // Delete one Historial_ganadores_beca
     * const Historial_ganadores_beca = await prisma.historial_ganadores_beca.delete({
     *   where: {
     *     // ... filter to delete one Historial_ganadores_beca
     *   }
     * })
     * 
    **/
    delete<T extends historial_ganadores_becaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadores_becaDeleteArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Historial_ganadores_beca.
     * @param {historial_ganadores_becaUpdateArgs} args - Arguments to update one Historial_ganadores_beca.
     * @example
     * // Update one Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends historial_ganadores_becaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadores_becaUpdateArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Historial_ganadores_becas.
     * @param {historial_ganadores_becaDeleteManyArgs} args - Arguments to filter Historial_ganadores_becas to delete.
     * @example
     * // Delete a few Historial_ganadores_becas
     * const { count } = await prisma.historial_ganadores_beca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends historial_ganadores_becaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historial_ganadores_becaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_ganadores_becas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_ganadores_becas
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends historial_ganadores_becaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadores_becaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historial_ganadores_beca.
     * @param {historial_ganadores_becaUpsertArgs} args - Arguments to update or create a Historial_ganadores_beca.
     * @example
     * // Update or create a Historial_ganadores_beca
     * const historial_ganadores_beca = await prisma.historial_ganadores_beca.upsert({
     *   create: {
     *     // ... data to create a Historial_ganadores_beca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_ganadores_beca we want to update
     *   }
     * })
    **/
    upsert<T extends historial_ganadores_becaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, historial_ganadores_becaUpsertArgs<ExtArgs>>
    ): Prisma__historial_ganadores_becaClient<$Types.GetResult<historial_ganadores_becaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Historial_ganadores_becas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaCountArgs} args - Arguments to filter Historial_ganadores_becas to count.
     * @example
     * // Count the number of Historial_ganadores_becas
     * const count = await prisma.historial_ganadores_beca.count({
     *   where: {
     *     // ... the filter for the Historial_ganadores_becas we want to count
     *   }
     * })
    **/
    count<T extends historial_ganadores_becaCountArgs>(
      args?: Subset<T, historial_ganadores_becaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_ganadores_becaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_ganadores_beca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_ganadores_becaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historial_ganadores_becaAggregateArgs>(args: Subset<T, Historial_ganadores_becaAggregateArgs>): Prisma.PrismaPromise<GetHistorial_ganadores_becaAggregateType<T>>

    /**
     * Group by Historial_ganadores_beca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_ganadores_becaGroupByArgs} args - Group by arguments.
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
      T extends historial_ganadores_becaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_ganadores_becaGroupByArgs['orderBy'] }
        : { orderBy?: historial_ganadores_becaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historial_ganadores_becaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_ganadores_becaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_ganadores_beca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__historial_ganadores_becaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * historial_ganadores_beca base type for findUnique actions
   */
  export type historial_ganadores_becaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores_beca to fetch.
     */
    where: historial_ganadores_becaWhereUniqueInput
  }

  /**
   * historial_ganadores_beca findUnique
   */
  export interface historial_ganadores_becaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historial_ganadores_becaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historial_ganadores_beca findUniqueOrThrow
   */
  export type historial_ganadores_becaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores_beca to fetch.
     */
    where: historial_ganadores_becaWhereUniqueInput
  }


  /**
   * historial_ganadores_beca base type for findFirst actions
   */
  export type historial_ganadores_becaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores_beca to fetch.
     */
    where?: historial_ganadores_becaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores_becas to fetch.
     */
    orderBy?: historial_ganadores_becaOrderByWithRelationInput | historial_ganadores_becaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_ganadores_becas.
     */
    cursor?: historial_ganadores_becaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores_becas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores_becas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_ganadores_becas.
     */
    distinct?: Historial_ganadores_becaScalarFieldEnum | Historial_ganadores_becaScalarFieldEnum[]
  }

  /**
   * historial_ganadores_beca findFirst
   */
  export interface historial_ganadores_becaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historial_ganadores_becaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historial_ganadores_beca findFirstOrThrow
   */
  export type historial_ganadores_becaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores_beca to fetch.
     */
    where?: historial_ganadores_becaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores_becas to fetch.
     */
    orderBy?: historial_ganadores_becaOrderByWithRelationInput | historial_ganadores_becaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_ganadores_becas.
     */
    cursor?: historial_ganadores_becaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores_becas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores_becas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_ganadores_becas.
     */
    distinct?: Historial_ganadores_becaScalarFieldEnum | Historial_ganadores_becaScalarFieldEnum[]
  }


  /**
   * historial_ganadores_beca findMany
   */
  export type historial_ganadores_becaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter, which historial_ganadores_becas to fetch.
     */
    where?: historial_ganadores_becaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_ganadores_becas to fetch.
     */
    orderBy?: historial_ganadores_becaOrderByWithRelationInput | historial_ganadores_becaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_ganadores_becas.
     */
    cursor?: historial_ganadores_becaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_ganadores_becas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_ganadores_becas.
     */
    skip?: number
    distinct?: Historial_ganadores_becaScalarFieldEnum | Historial_ganadores_becaScalarFieldEnum[]
  }


  /**
   * historial_ganadores_beca create
   */
  export type historial_ganadores_becaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * The data needed to create a historial_ganadores_beca.
     */
    data?: XOR<historial_ganadores_becaCreateInput, historial_ganadores_becaUncheckedCreateInput>
  }


  /**
   * historial_ganadores_beca createMany
   */
  export type historial_ganadores_becaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_ganadores_becas.
     */
    data: historial_ganadores_becaCreateManyInput | historial_ganadores_becaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * historial_ganadores_beca update
   */
  export type historial_ganadores_becaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * The data needed to update a historial_ganadores_beca.
     */
    data: XOR<historial_ganadores_becaUpdateInput, historial_ganadores_becaUncheckedUpdateInput>
    /**
     * Choose, which historial_ganadores_beca to update.
     */
    where: historial_ganadores_becaWhereUniqueInput
  }


  /**
   * historial_ganadores_beca updateMany
   */
  export type historial_ganadores_becaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_ganadores_becas.
     */
    data: XOR<historial_ganadores_becaUpdateManyMutationInput, historial_ganadores_becaUncheckedUpdateManyInput>
    /**
     * Filter which historial_ganadores_becas to update
     */
    where?: historial_ganadores_becaWhereInput
  }


  /**
   * historial_ganadores_beca upsert
   */
  export type historial_ganadores_becaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * The filter to search for the historial_ganadores_beca to update in case it exists.
     */
    where: historial_ganadores_becaWhereUniqueInput
    /**
     * In case the historial_ganadores_beca found by the `where` argument doesn't exist, create a new historial_ganadores_beca with this data.
     */
    create: XOR<historial_ganadores_becaCreateInput, historial_ganadores_becaUncheckedCreateInput>
    /**
     * In case the historial_ganadores_beca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_ganadores_becaUpdateInput, historial_ganadores_becaUncheckedUpdateInput>
  }


  /**
   * historial_ganadores_beca delete
   */
  export type historial_ganadores_becaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
    /**
     * Filter which historial_ganadores_beca to delete.
     */
    where: historial_ganadores_becaWhereUniqueInput
  }


  /**
   * historial_ganadores_beca deleteMany
   */
  export type historial_ganadores_becaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_ganadores_becas to delete
     */
    where?: historial_ganadores_becaWhereInput
  }


  /**
   * historial_ganadores_beca without action
   */
  export type historial_ganadores_becaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_ganadores_beca
     */
    select?: historial_ganadores_becaSelect<ExtArgs> | null
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


  export const Historial_ganadoresScalarFieldEnum: {
    participante: 'participante',
    dni: 'dni',
    fecha: 'fecha',
    premio: 'premio',
    idganador: 'idganador'
  };

  export type Historial_ganadoresScalarFieldEnum = (typeof Historial_ganadoresScalarFieldEnum)[keyof typeof Historial_ganadoresScalarFieldEnum]


  export const Historial_ganadores_becaScalarFieldEnum: {
    participante: 'participante',
    dni: 'dni',
    fecha: 'fecha',
    idganador: 'idganador',
    premio: 'premio'
  };

  export type Historial_ganadores_becaScalarFieldEnum = (typeof Historial_ganadores_becaScalarFieldEnum)[keyof typeof Historial_ganadores_becaScalarFieldEnum]


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


  export type historial_ganadoresWhereInput = {
    AND?: historial_ganadoresWhereInput | historial_ganadoresWhereInput[]
    OR?: historial_ganadoresWhereInput[]
    NOT?: historial_ganadoresWhereInput | historial_ganadoresWhereInput[]
    participante?: StringNullableFilter | string | null
    dni?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    premio?: StringNullableFilter | string | null
    idganador?: IntFilter | number
  }

  export type historial_ganadoresOrderByWithRelationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    premio?: SortOrderInput | SortOrder
    idganador?: SortOrder
  }

  export type historial_ganadoresWhereUniqueInput = {
    idganador?: number
  }

  export type historial_ganadoresOrderByWithAggregationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    premio?: SortOrderInput | SortOrder
    idganador?: SortOrder
    _count?: historial_ganadoresCountOrderByAggregateInput
    _avg?: historial_ganadoresAvgOrderByAggregateInput
    _max?: historial_ganadoresMaxOrderByAggregateInput
    _min?: historial_ganadoresMinOrderByAggregateInput
    _sum?: historial_ganadoresSumOrderByAggregateInput
  }

  export type historial_ganadoresScalarWhereWithAggregatesInput = {
    AND?: historial_ganadoresScalarWhereWithAggregatesInput | historial_ganadoresScalarWhereWithAggregatesInput[]
    OR?: historial_ganadoresScalarWhereWithAggregatesInput[]
    NOT?: historial_ganadoresScalarWhereWithAggregatesInput | historial_ganadoresScalarWhereWithAggregatesInput[]
    participante?: StringNullableWithAggregatesFilter | string | null
    dni?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    premio?: StringNullableWithAggregatesFilter | string | null
    idganador?: IntWithAggregatesFilter | number
  }

  export type historial_ganadores_becaWhereInput = {
    AND?: historial_ganadores_becaWhereInput | historial_ganadores_becaWhereInput[]
    OR?: historial_ganadores_becaWhereInput[]
    NOT?: historial_ganadores_becaWhereInput | historial_ganadores_becaWhereInput[]
    participante?: StringNullableFilter | string | null
    dni?: IntNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    idganador?: IntFilter | number
    premio?: StringNullableFilter | string | null
  }

  export type historial_ganadores_becaOrderByWithRelationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    idganador?: SortOrder
    premio?: SortOrderInput | SortOrder
  }

  export type historial_ganadores_becaWhereUniqueInput = {
    idganador?: number
  }

  export type historial_ganadores_becaOrderByWithAggregationInput = {
    participante?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    idganador?: SortOrder
    premio?: SortOrderInput | SortOrder
    _count?: historial_ganadores_becaCountOrderByAggregateInput
    _avg?: historial_ganadores_becaAvgOrderByAggregateInput
    _max?: historial_ganadores_becaMaxOrderByAggregateInput
    _min?: historial_ganadores_becaMinOrderByAggregateInput
    _sum?: historial_ganadores_becaSumOrderByAggregateInput
  }

  export type historial_ganadores_becaScalarWhereWithAggregatesInput = {
    AND?: historial_ganadores_becaScalarWhereWithAggregatesInput | historial_ganadores_becaScalarWhereWithAggregatesInput[]
    OR?: historial_ganadores_becaScalarWhereWithAggregatesInput[]
    NOT?: historial_ganadores_becaScalarWhereWithAggregatesInput | historial_ganadores_becaScalarWhereWithAggregatesInput[]
    participante?: StringNullableWithAggregatesFilter | string | null
    dni?: IntNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idganador?: IntWithAggregatesFilter | number
    premio?: StringNullableWithAggregatesFilter | string | null
  }

  export type historial_ganadoresCreateInput = {
    participante?: string | null
    dni?: string | null
    fecha?: Date | string | null
    premio?: string | null
  }

  export type historial_ganadoresUncheckedCreateInput = {
    participante?: string | null
    dni?: string | null
    fecha?: Date | string | null
    premio?: string | null
    idganador?: number
  }

  export type historial_ganadoresUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_ganadoresUncheckedUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
    idganador?: IntFieldUpdateOperationsInput | number
  }

  export type historial_ganadoresCreateManyInput = {
    participante?: string | null
    dni?: string | null
    fecha?: Date | string | null
    premio?: string | null
    idganador?: number
  }

  export type historial_ganadoresUpdateManyMutationInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_ganadoresUncheckedUpdateManyInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
    idganador?: IntFieldUpdateOperationsInput | number
  }

  export type historial_ganadores_becaCreateInput = {
    participante?: string | null
    dni?: number | null
    fecha?: Date | string | null
    premio?: string | null
  }

  export type historial_ganadores_becaUncheckedCreateInput = {
    participante?: string | null
    dni?: number | null
    fecha?: Date | string | null
    idganador?: number
    premio?: string | null
  }

  export type historial_ganadores_becaUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_ganadores_becaUncheckedUpdateInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idganador?: IntFieldUpdateOperationsInput | number
    premio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_ganadores_becaCreateManyInput = {
    participante?: string | null
    dni?: number | null
    fecha?: Date | string | null
    idganador?: number
    premio?: string | null
  }

  export type historial_ganadores_becaUpdateManyMutationInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    premio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_ganadores_becaUncheckedUpdateManyInput = {
    participante?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idganador?: IntFieldUpdateOperationsInput | number
    premio?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type historial_ganadoresCountOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    premio?: SortOrder
    idganador?: SortOrder
  }

  export type historial_ganadoresAvgOrderByAggregateInput = {
    idganador?: SortOrder
  }

  export type historial_ganadoresMaxOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    premio?: SortOrder
    idganador?: SortOrder
  }

  export type historial_ganadoresMinOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    premio?: SortOrder
    idganador?: SortOrder
  }

  export type historial_ganadoresSumOrderByAggregateInput = {
    idganador?: SortOrder
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

  export type historial_ganadores_becaCountOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    idganador?: SortOrder
    premio?: SortOrder
  }

  export type historial_ganadores_becaAvgOrderByAggregateInput = {
    dni?: SortOrder
    idganador?: SortOrder
  }

  export type historial_ganadores_becaMaxOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    idganador?: SortOrder
    premio?: SortOrder
  }

  export type historial_ganadores_becaMinOrderByAggregateInput = {
    participante?: SortOrder
    dni?: SortOrder
    fecha?: SortOrder
    idganador?: SortOrder
    premio?: SortOrder
  }

  export type historial_ganadores_becaSumOrderByAggregateInput = {
    dni?: SortOrder
    idganador?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NullableIntFieldUpdateOperationsInput = {
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