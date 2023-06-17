
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model at2campana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type at2campana = {
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
}

/**
 * Model atcampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type atcampana = {
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
}

/**
 * Model blancampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type blancampana = {
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
}

/**
 * Model reccampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type reccampana = {
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
}

/**
 * Model reincampana
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type reincampana = {
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
}

/**
 * Model auxcampana
 * 
 */
export type auxcampana = {
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
}

/**
 * Model policampana
 * 
 */
export type policampana = {
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
}

/**
 * Model at2campanaM
 * 
 */
export type at2campanaM = {
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
}

/**
 * Model atcampanaM
 * 
 */
export type atcampanaM = {
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
}

/**
 * Model blancampanaM
 * 
 */
export type blancampanaM = {
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
}

/**
 * Model reccampanaM
 * 
 */
export type reccampanaM = {
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
}

/**
 * Model reincampanaM
 * 
 */
export type reincampanaM = {
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
}


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
    : false
      > {
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.at2campana`: Exposes CRUD operations for the **at2campana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more At2campanas
    * const at2campanas = await prisma.at2campana.findMany()
    * ```
    */
  get at2campana(): Prisma.at2campanaDelegate<GlobalReject>;

  /**
   * `prisma.atcampana`: Exposes CRUD operations for the **atcampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atcampanas
    * const atcampanas = await prisma.atcampana.findMany()
    * ```
    */
  get atcampana(): Prisma.atcampanaDelegate<GlobalReject>;

  /**
   * `prisma.blancampana`: Exposes CRUD operations for the **blancampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blancampanas
    * const blancampanas = await prisma.blancampana.findMany()
    * ```
    */
  get blancampana(): Prisma.blancampanaDelegate<GlobalReject>;

  /**
   * `prisma.reccampana`: Exposes CRUD operations for the **reccampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reccampanas
    * const reccampanas = await prisma.reccampana.findMany()
    * ```
    */
  get reccampana(): Prisma.reccampanaDelegate<GlobalReject>;

  /**
   * `prisma.reincampana`: Exposes CRUD operations for the **reincampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reincampanas
    * const reincampanas = await prisma.reincampana.findMany()
    * ```
    */
  get reincampana(): Prisma.reincampanaDelegate<GlobalReject>;

  /**
   * `prisma.auxcampana`: Exposes CRUD operations for the **auxcampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auxcampanas
    * const auxcampanas = await prisma.auxcampana.findMany()
    * ```
    */
  get auxcampana(): Prisma.auxcampanaDelegate<GlobalReject>;

  /**
   * `prisma.policampana`: Exposes CRUD operations for the **policampana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policampanas
    * const policampanas = await prisma.policampana.findMany()
    * ```
    */
  get policampana(): Prisma.policampanaDelegate<GlobalReject>;

  /**
   * `prisma.at2campanaM`: Exposes CRUD operations for the **at2campanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more At2campanaMS
    * const at2campanaMS = await prisma.at2campanaM.findMany()
    * ```
    */
  get at2campanaM(): Prisma.at2campanaMDelegate<GlobalReject>;

  /**
   * `prisma.atcampanaM`: Exposes CRUD operations for the **atcampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtcampanaMS
    * const atcampanaMS = await prisma.atcampanaM.findMany()
    * ```
    */
  get atcampanaM(): Prisma.atcampanaMDelegate<GlobalReject>;

  /**
   * `prisma.blancampanaM`: Exposes CRUD operations for the **blancampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlancampanaMS
    * const blancampanaMS = await prisma.blancampanaM.findMany()
    * ```
    */
  get blancampanaM(): Prisma.blancampanaMDelegate<GlobalReject>;

  /**
   * `prisma.reccampanaM`: Exposes CRUD operations for the **reccampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReccampanaMS
    * const reccampanaMS = await prisma.reccampanaM.findMany()
    * ```
    */
  get reccampanaM(): Prisma.reccampanaMDelegate<GlobalReject>;

  /**
   * `prisma.reincampanaM`: Exposes CRUD operations for the **reincampanaM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReincampanaMS
    * const reincampanaMS = await prisma.reincampanaM.findMany()
    * ```
    */
  get reincampanaM(): Prisma.reincampanaMDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

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
    reincampanaM: 'reincampanaM'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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

  export type At2campanaAggregateArgs = {
    /**
     * Filter which at2campana to aggregate.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: Enumerable<at2campanaOrderByWithRelationInput>
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




  export type At2campanaGroupByArgs = {
    where?: at2campanaWhereInput
    orderBy?: Enumerable<at2campanaOrderByWithAggregationInput>
    by: At2campanaScalarFieldEnum[]
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

  type GetAt2campanaGroupByPayload<T extends At2campanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<At2campanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof At2campanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], At2campanaGroupByOutputType[P]>
            : GetScalarType<T[P], At2campanaGroupByOutputType[P]>
        }
      >
    >


  export type at2campanaSelect = {
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


  export type at2campanaGetPayload<S extends boolean | null | undefined | at2campanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? at2campana :
    S extends undefined ? never :
    S extends { include: any } & (at2campanaArgs | at2campanaFindManyArgs)
    ? at2campana 
    : S extends { select: any } & (at2campanaArgs | at2campanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof at2campana ? at2campana[P] : never
  } 
      : at2campana


  type at2campanaCountArgs = 
    Omit<at2campanaFindManyArgs, 'select' | 'include'> & {
      select?: At2campanaCountAggregateInputType | true
    }

  export interface at2campanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends at2campanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, at2campanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'at2campana'> extends True ? Prisma__at2campanaClient<at2campanaGetPayload<T>> : Prisma__at2campanaClient<at2campanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends at2campanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, at2campanaFindUniqueOrThrowArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
    findFirst<T extends at2campanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, at2campanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'at2campana'> extends True ? Prisma__at2campanaClient<at2campanaGetPayload<T>> : Prisma__at2campanaClient<at2campanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends at2campanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, at2campanaFindFirstOrThrowArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
    findMany<T extends at2campanaFindManyArgs>(
      args?: SelectSubset<T, at2campanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<at2campanaGetPayload<T>>>

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
    create<T extends at2campanaCreateArgs>(
      args: SelectSubset<T, at2campanaCreateArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
    createMany<T extends at2campanaCreateManyArgs>(
      args?: SelectSubset<T, at2campanaCreateManyArgs>
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
    delete<T extends at2campanaDeleteArgs>(
      args: SelectSubset<T, at2campanaDeleteArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
    update<T extends at2campanaUpdateArgs>(
      args: SelectSubset<T, at2campanaUpdateArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
    deleteMany<T extends at2campanaDeleteManyArgs>(
      args?: SelectSubset<T, at2campanaDeleteManyArgs>
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
    updateMany<T extends at2campanaUpdateManyArgs>(
      args: SelectSubset<T, at2campanaUpdateManyArgs>
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
    upsert<T extends at2campanaUpsertArgs>(
      args: SelectSubset<T, at2campanaUpsertArgs>
    ): Prisma__at2campanaClient<at2campanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {At2campanaGroupByArgs} args - Group by arguments.
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
      T extends At2campanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: At2campanaGroupByArgs['orderBy'] }
        : { orderBy?: At2campanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, At2campanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAt2campanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for at2campana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__at2campanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type at2campanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter, which at2campana to fetch.
     */
    where: at2campanaWhereUniqueInput
  }

  /**
   * at2campana findUnique
   */
  export interface at2campanaFindUniqueArgs extends at2campanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campana findUniqueOrThrow
   */
  export type at2campanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter, which at2campana to fetch.
     */
    where: at2campanaWhereUniqueInput
  }


  /**
   * at2campana base type for findFirst actions
   */
  export type at2campanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter, which at2campana to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: Enumerable<at2campanaOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaScalarFieldEnum>
  }

  /**
   * at2campana findFirst
   */
  export interface at2campanaFindFirstArgs extends at2campanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campana findFirstOrThrow
   */
  export type at2campanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter, which at2campana to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: Enumerable<at2campanaOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaScalarFieldEnum>
  }


  /**
   * at2campana findMany
   */
  export type at2campanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter, which at2campanas to fetch.
     */
    where?: at2campanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanas to fetch.
     */
    orderBy?: Enumerable<at2campanaOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaScalarFieldEnum>
  }


  /**
   * at2campana create
   */
  export type at2campanaCreateArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * The data needed to create a at2campana.
     */
    data: XOR<at2campanaCreateInput, at2campanaUncheckedCreateInput>
  }


  /**
   * at2campana createMany
   */
  export type at2campanaCreateManyArgs = {
    /**
     * The data used to create many at2campanas.
     */
    data: Enumerable<at2campanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * at2campana update
   */
  export type at2campanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
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
  export type at2campanaUpdateManyArgs = {
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
  export type at2campanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
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
  export type at2campanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
    /**
     * Filter which at2campana to delete.
     */
    where: at2campanaWhereUniqueInput
  }


  /**
   * at2campana deleteMany
   */
  export type at2campanaDeleteManyArgs = {
    /**
     * Filter which at2campanas to delete
     */
    where?: at2campanaWhereInput
  }


  /**
   * at2campana without action
   */
  export type at2campanaArgs = {
    /**
     * Select specific fields to fetch from the at2campana
     */
    select?: at2campanaSelect | null
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

  export type AtcampanaAggregateArgs = {
    /**
     * Filter which atcampana to aggregate.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: Enumerable<atcampanaOrderByWithRelationInput>
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




  export type AtcampanaGroupByArgs = {
    where?: atcampanaWhereInput
    orderBy?: Enumerable<atcampanaOrderByWithAggregationInput>
    by: AtcampanaScalarFieldEnum[]
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

  type GetAtcampanaGroupByPayload<T extends AtcampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AtcampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtcampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtcampanaGroupByOutputType[P]>
            : GetScalarType<T[P], AtcampanaGroupByOutputType[P]>
        }
      >
    >


  export type atcampanaSelect = {
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


  export type atcampanaGetPayload<S extends boolean | null | undefined | atcampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? atcampana :
    S extends undefined ? never :
    S extends { include: any } & (atcampanaArgs | atcampanaFindManyArgs)
    ? atcampana 
    : S extends { select: any } & (atcampanaArgs | atcampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof atcampana ? atcampana[P] : never
  } 
      : atcampana


  type atcampanaCountArgs = 
    Omit<atcampanaFindManyArgs, 'select' | 'include'> & {
      select?: AtcampanaCountAggregateInputType | true
    }

  export interface atcampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends atcampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, atcampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'atcampana'> extends True ? Prisma__atcampanaClient<atcampanaGetPayload<T>> : Prisma__atcampanaClient<atcampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends atcampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, atcampanaFindUniqueOrThrowArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
    findFirst<T extends atcampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, atcampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'atcampana'> extends True ? Prisma__atcampanaClient<atcampanaGetPayload<T>> : Prisma__atcampanaClient<atcampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends atcampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, atcampanaFindFirstOrThrowArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
    findMany<T extends atcampanaFindManyArgs>(
      args?: SelectSubset<T, atcampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<atcampanaGetPayload<T>>>

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
    create<T extends atcampanaCreateArgs>(
      args: SelectSubset<T, atcampanaCreateArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
    createMany<T extends atcampanaCreateManyArgs>(
      args?: SelectSubset<T, atcampanaCreateManyArgs>
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
    delete<T extends atcampanaDeleteArgs>(
      args: SelectSubset<T, atcampanaDeleteArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
    update<T extends atcampanaUpdateArgs>(
      args: SelectSubset<T, atcampanaUpdateArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
    deleteMany<T extends atcampanaDeleteManyArgs>(
      args?: SelectSubset<T, atcampanaDeleteManyArgs>
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
    updateMany<T extends atcampanaUpdateManyArgs>(
      args: SelectSubset<T, atcampanaUpdateManyArgs>
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
    upsert<T extends atcampanaUpsertArgs>(
      args: SelectSubset<T, atcampanaUpsertArgs>
    ): Prisma__atcampanaClient<atcampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {AtcampanaGroupByArgs} args - Group by arguments.
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
      T extends AtcampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtcampanaGroupByArgs['orderBy'] }
        : { orderBy?: AtcampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AtcampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtcampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for atcampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__atcampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type atcampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter, which atcampana to fetch.
     */
    where: atcampanaWhereUniqueInput
  }

  /**
   * atcampana findUnique
   */
  export interface atcampanaFindUniqueArgs extends atcampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampana findUniqueOrThrow
   */
  export type atcampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter, which atcampana to fetch.
     */
    where: atcampanaWhereUniqueInput
  }


  /**
   * atcampana base type for findFirst actions
   */
  export type atcampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter, which atcampana to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: Enumerable<atcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaScalarFieldEnum>
  }

  /**
   * atcampana findFirst
   */
  export interface atcampanaFindFirstArgs extends atcampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampana findFirstOrThrow
   */
  export type atcampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter, which atcampana to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: Enumerable<atcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaScalarFieldEnum>
  }


  /**
   * atcampana findMany
   */
  export type atcampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter, which atcampanas to fetch.
     */
    where?: atcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanas to fetch.
     */
    orderBy?: Enumerable<atcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaScalarFieldEnum>
  }


  /**
   * atcampana create
   */
  export type atcampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * The data needed to create a atcampana.
     */
    data: XOR<atcampanaCreateInput, atcampanaUncheckedCreateInput>
  }


  /**
   * atcampana createMany
   */
  export type atcampanaCreateManyArgs = {
    /**
     * The data used to create many atcampanas.
     */
    data: Enumerable<atcampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * atcampana update
   */
  export type atcampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
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
  export type atcampanaUpdateManyArgs = {
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
  export type atcampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
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
  export type atcampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
    /**
     * Filter which atcampana to delete.
     */
    where: atcampanaWhereUniqueInput
  }


  /**
   * atcampana deleteMany
   */
  export type atcampanaDeleteManyArgs = {
    /**
     * Filter which atcampanas to delete
     */
    where?: atcampanaWhereInput
  }


  /**
   * atcampana without action
   */
  export type atcampanaArgs = {
    /**
     * Select specific fields to fetch from the atcampana
     */
    select?: atcampanaSelect | null
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

  export type BlancampanaAggregateArgs = {
    /**
     * Filter which blancampana to aggregate.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: Enumerable<blancampanaOrderByWithRelationInput>
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




  export type BlancampanaGroupByArgs = {
    where?: blancampanaWhereInput
    orderBy?: Enumerable<blancampanaOrderByWithAggregationInput>
    by: BlancampanaScalarFieldEnum[]
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

  type GetBlancampanaGroupByPayload<T extends BlancampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BlancampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlancampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlancampanaGroupByOutputType[P]>
            : GetScalarType<T[P], BlancampanaGroupByOutputType[P]>
        }
      >
    >


  export type blancampanaSelect = {
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


  export type blancampanaGetPayload<S extends boolean | null | undefined | blancampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? blancampana :
    S extends undefined ? never :
    S extends { include: any } & (blancampanaArgs | blancampanaFindManyArgs)
    ? blancampana 
    : S extends { select: any } & (blancampanaArgs | blancampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof blancampana ? blancampana[P] : never
  } 
      : blancampana


  type blancampanaCountArgs = 
    Omit<blancampanaFindManyArgs, 'select' | 'include'> & {
      select?: BlancampanaCountAggregateInputType | true
    }

  export interface blancampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends blancampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, blancampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'blancampana'> extends True ? Prisma__blancampanaClient<blancampanaGetPayload<T>> : Prisma__blancampanaClient<blancampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends blancampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, blancampanaFindUniqueOrThrowArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
    findFirst<T extends blancampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, blancampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'blancampana'> extends True ? Prisma__blancampanaClient<blancampanaGetPayload<T>> : Prisma__blancampanaClient<blancampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends blancampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, blancampanaFindFirstOrThrowArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
    findMany<T extends blancampanaFindManyArgs>(
      args?: SelectSubset<T, blancampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<blancampanaGetPayload<T>>>

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
    create<T extends blancampanaCreateArgs>(
      args: SelectSubset<T, blancampanaCreateArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
    createMany<T extends blancampanaCreateManyArgs>(
      args?: SelectSubset<T, blancampanaCreateManyArgs>
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
    delete<T extends blancampanaDeleteArgs>(
      args: SelectSubset<T, blancampanaDeleteArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
    update<T extends blancampanaUpdateArgs>(
      args: SelectSubset<T, blancampanaUpdateArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
    deleteMany<T extends blancampanaDeleteManyArgs>(
      args?: SelectSubset<T, blancampanaDeleteManyArgs>
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
    updateMany<T extends blancampanaUpdateManyArgs>(
      args: SelectSubset<T, blancampanaUpdateManyArgs>
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
    upsert<T extends blancampanaUpsertArgs>(
      args: SelectSubset<T, blancampanaUpsertArgs>
    ): Prisma__blancampanaClient<blancampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {BlancampanaGroupByArgs} args - Group by arguments.
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
      T extends BlancampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlancampanaGroupByArgs['orderBy'] }
        : { orderBy?: BlancampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlancampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlancampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for blancampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blancampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type blancampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter, which blancampana to fetch.
     */
    where: blancampanaWhereUniqueInput
  }

  /**
   * blancampana findUnique
   */
  export interface blancampanaFindUniqueArgs extends blancampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampana findUniqueOrThrow
   */
  export type blancampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter, which blancampana to fetch.
     */
    where: blancampanaWhereUniqueInput
  }


  /**
   * blancampana base type for findFirst actions
   */
  export type blancampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter, which blancampana to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: Enumerable<blancampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaScalarFieldEnum>
  }

  /**
   * blancampana findFirst
   */
  export interface blancampanaFindFirstArgs extends blancampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampana findFirstOrThrow
   */
  export type blancampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter, which blancampana to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: Enumerable<blancampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaScalarFieldEnum>
  }


  /**
   * blancampana findMany
   */
  export type blancampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter, which blancampanas to fetch.
     */
    where?: blancampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanas to fetch.
     */
    orderBy?: Enumerable<blancampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaScalarFieldEnum>
  }


  /**
   * blancampana create
   */
  export type blancampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * The data needed to create a blancampana.
     */
    data: XOR<blancampanaCreateInput, blancampanaUncheckedCreateInput>
  }


  /**
   * blancampana createMany
   */
  export type blancampanaCreateManyArgs = {
    /**
     * The data used to create many blancampanas.
     */
    data: Enumerable<blancampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * blancampana update
   */
  export type blancampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
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
  export type blancampanaUpdateManyArgs = {
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
  export type blancampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
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
  export type blancampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
    /**
     * Filter which blancampana to delete.
     */
    where: blancampanaWhereUniqueInput
  }


  /**
   * blancampana deleteMany
   */
  export type blancampanaDeleteManyArgs = {
    /**
     * Filter which blancampanas to delete
     */
    where?: blancampanaWhereInput
  }


  /**
   * blancampana without action
   */
  export type blancampanaArgs = {
    /**
     * Select specific fields to fetch from the blancampana
     */
    select?: blancampanaSelect | null
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

  export type ReccampanaAggregateArgs = {
    /**
     * Filter which reccampana to aggregate.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: Enumerable<reccampanaOrderByWithRelationInput>
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




  export type ReccampanaGroupByArgs = {
    where?: reccampanaWhereInput
    orderBy?: Enumerable<reccampanaOrderByWithAggregationInput>
    by: ReccampanaScalarFieldEnum[]
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

  type GetReccampanaGroupByPayload<T extends ReccampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReccampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReccampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReccampanaGroupByOutputType[P]>
            : GetScalarType<T[P], ReccampanaGroupByOutputType[P]>
        }
      >
    >


  export type reccampanaSelect = {
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


  export type reccampanaGetPayload<S extends boolean | null | undefined | reccampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reccampana :
    S extends undefined ? never :
    S extends { include: any } & (reccampanaArgs | reccampanaFindManyArgs)
    ? reccampana 
    : S extends { select: any } & (reccampanaArgs | reccampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof reccampana ? reccampana[P] : never
  } 
      : reccampana


  type reccampanaCountArgs = 
    Omit<reccampanaFindManyArgs, 'select' | 'include'> & {
      select?: ReccampanaCountAggregateInputType | true
    }

  export interface reccampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends reccampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reccampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reccampana'> extends True ? Prisma__reccampanaClient<reccampanaGetPayload<T>> : Prisma__reccampanaClient<reccampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends reccampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reccampanaFindUniqueOrThrowArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
    findFirst<T extends reccampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reccampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reccampana'> extends True ? Prisma__reccampanaClient<reccampanaGetPayload<T>> : Prisma__reccampanaClient<reccampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends reccampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reccampanaFindFirstOrThrowArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
    findMany<T extends reccampanaFindManyArgs>(
      args?: SelectSubset<T, reccampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<reccampanaGetPayload<T>>>

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
    create<T extends reccampanaCreateArgs>(
      args: SelectSubset<T, reccampanaCreateArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
    createMany<T extends reccampanaCreateManyArgs>(
      args?: SelectSubset<T, reccampanaCreateManyArgs>
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
    delete<T extends reccampanaDeleteArgs>(
      args: SelectSubset<T, reccampanaDeleteArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
    update<T extends reccampanaUpdateArgs>(
      args: SelectSubset<T, reccampanaUpdateArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
    deleteMany<T extends reccampanaDeleteManyArgs>(
      args?: SelectSubset<T, reccampanaDeleteManyArgs>
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
    updateMany<T extends reccampanaUpdateManyArgs>(
      args: SelectSubset<T, reccampanaUpdateManyArgs>
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
    upsert<T extends reccampanaUpsertArgs>(
      args: SelectSubset<T, reccampanaUpsertArgs>
    ): Prisma__reccampanaClient<reccampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {ReccampanaGroupByArgs} args - Group by arguments.
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
      T extends ReccampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReccampanaGroupByArgs['orderBy'] }
        : { orderBy?: ReccampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReccampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReccampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reccampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reccampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type reccampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter, which reccampana to fetch.
     */
    where: reccampanaWhereUniqueInput
  }

  /**
   * reccampana findUnique
   */
  export interface reccampanaFindUniqueArgs extends reccampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampana findUniqueOrThrow
   */
  export type reccampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter, which reccampana to fetch.
     */
    where: reccampanaWhereUniqueInput
  }


  /**
   * reccampana base type for findFirst actions
   */
  export type reccampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter, which reccampana to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: Enumerable<reccampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaScalarFieldEnum>
  }

  /**
   * reccampana findFirst
   */
  export interface reccampanaFindFirstArgs extends reccampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampana findFirstOrThrow
   */
  export type reccampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter, which reccampana to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: Enumerable<reccampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaScalarFieldEnum>
  }


  /**
   * reccampana findMany
   */
  export type reccampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter, which reccampanas to fetch.
     */
    where?: reccampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanas to fetch.
     */
    orderBy?: Enumerable<reccampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaScalarFieldEnum>
  }


  /**
   * reccampana create
   */
  export type reccampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * The data needed to create a reccampana.
     */
    data: XOR<reccampanaCreateInput, reccampanaUncheckedCreateInput>
  }


  /**
   * reccampana createMany
   */
  export type reccampanaCreateManyArgs = {
    /**
     * The data used to create many reccampanas.
     */
    data: Enumerable<reccampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reccampana update
   */
  export type reccampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
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
  export type reccampanaUpdateManyArgs = {
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
  export type reccampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
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
  export type reccampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
    /**
     * Filter which reccampana to delete.
     */
    where: reccampanaWhereUniqueInput
  }


  /**
   * reccampana deleteMany
   */
  export type reccampanaDeleteManyArgs = {
    /**
     * Filter which reccampanas to delete
     */
    where?: reccampanaWhereInput
  }


  /**
   * reccampana without action
   */
  export type reccampanaArgs = {
    /**
     * Select specific fields to fetch from the reccampana
     */
    select?: reccampanaSelect | null
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

  export type ReincampanaAggregateArgs = {
    /**
     * Filter which reincampana to aggregate.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: Enumerable<reincampanaOrderByWithRelationInput>
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




  export type ReincampanaGroupByArgs = {
    where?: reincampanaWhereInput
    orderBy?: Enumerable<reincampanaOrderByWithAggregationInput>
    by: ReincampanaScalarFieldEnum[]
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

  type GetReincampanaGroupByPayload<T extends ReincampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReincampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReincampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReincampanaGroupByOutputType[P]>
            : GetScalarType<T[P], ReincampanaGroupByOutputType[P]>
        }
      >
    >


  export type reincampanaSelect = {
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


  export type reincampanaGetPayload<S extends boolean | null | undefined | reincampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reincampana :
    S extends undefined ? never :
    S extends { include: any } & (reincampanaArgs | reincampanaFindManyArgs)
    ? reincampana 
    : S extends { select: any } & (reincampanaArgs | reincampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof reincampana ? reincampana[P] : never
  } 
      : reincampana


  type reincampanaCountArgs = 
    Omit<reincampanaFindManyArgs, 'select' | 'include'> & {
      select?: ReincampanaCountAggregateInputType | true
    }

  export interface reincampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends reincampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reincampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reincampana'> extends True ? Prisma__reincampanaClient<reincampanaGetPayload<T>> : Prisma__reincampanaClient<reincampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends reincampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reincampanaFindUniqueOrThrowArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
    findFirst<T extends reincampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reincampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reincampana'> extends True ? Prisma__reincampanaClient<reincampanaGetPayload<T>> : Prisma__reincampanaClient<reincampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends reincampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reincampanaFindFirstOrThrowArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
    findMany<T extends reincampanaFindManyArgs>(
      args?: SelectSubset<T, reincampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<reincampanaGetPayload<T>>>

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
    create<T extends reincampanaCreateArgs>(
      args: SelectSubset<T, reincampanaCreateArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
    createMany<T extends reincampanaCreateManyArgs>(
      args?: SelectSubset<T, reincampanaCreateManyArgs>
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
    delete<T extends reincampanaDeleteArgs>(
      args: SelectSubset<T, reincampanaDeleteArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
    update<T extends reincampanaUpdateArgs>(
      args: SelectSubset<T, reincampanaUpdateArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
    deleteMany<T extends reincampanaDeleteManyArgs>(
      args?: SelectSubset<T, reincampanaDeleteManyArgs>
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
    updateMany<T extends reincampanaUpdateManyArgs>(
      args: SelectSubset<T, reincampanaUpdateManyArgs>
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
    upsert<T extends reincampanaUpsertArgs>(
      args: SelectSubset<T, reincampanaUpsertArgs>
    ): Prisma__reincampanaClient<reincampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {ReincampanaGroupByArgs} args - Group by arguments.
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
      T extends ReincampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReincampanaGroupByArgs['orderBy'] }
        : { orderBy?: ReincampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReincampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReincampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reincampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reincampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type reincampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter, which reincampana to fetch.
     */
    where: reincampanaWhereUniqueInput
  }

  /**
   * reincampana findUnique
   */
  export interface reincampanaFindUniqueArgs extends reincampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampana findUniqueOrThrow
   */
  export type reincampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter, which reincampana to fetch.
     */
    where: reincampanaWhereUniqueInput
  }


  /**
   * reincampana base type for findFirst actions
   */
  export type reincampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter, which reincampana to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: Enumerable<reincampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaScalarFieldEnum>
  }

  /**
   * reincampana findFirst
   */
  export interface reincampanaFindFirstArgs extends reincampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampana findFirstOrThrow
   */
  export type reincampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter, which reincampana to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: Enumerable<reincampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaScalarFieldEnum>
  }


  /**
   * reincampana findMany
   */
  export type reincampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter, which reincampanas to fetch.
     */
    where?: reincampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanas to fetch.
     */
    orderBy?: Enumerable<reincampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaScalarFieldEnum>
  }


  /**
   * reincampana create
   */
  export type reincampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * The data needed to create a reincampana.
     */
    data: XOR<reincampanaCreateInput, reincampanaUncheckedCreateInput>
  }


  /**
   * reincampana createMany
   */
  export type reincampanaCreateManyArgs = {
    /**
     * The data used to create many reincampanas.
     */
    data: Enumerable<reincampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reincampana update
   */
  export type reincampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
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
  export type reincampanaUpdateManyArgs = {
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
  export type reincampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
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
  export type reincampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
    /**
     * Filter which reincampana to delete.
     */
    where: reincampanaWhereUniqueInput
  }


  /**
   * reincampana deleteMany
   */
  export type reincampanaDeleteManyArgs = {
    /**
     * Filter which reincampanas to delete
     */
    where?: reincampanaWhereInput
  }


  /**
   * reincampana without action
   */
  export type reincampanaArgs = {
    /**
     * Select specific fields to fetch from the reincampana
     */
    select?: reincampanaSelect | null
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

  export type AuxcampanaAggregateArgs = {
    /**
     * Filter which auxcampana to aggregate.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: Enumerable<auxcampanaOrderByWithRelationInput>
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




  export type AuxcampanaGroupByArgs = {
    where?: auxcampanaWhereInput
    orderBy?: Enumerable<auxcampanaOrderByWithAggregationInput>
    by: AuxcampanaScalarFieldEnum[]
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

  type GetAuxcampanaGroupByPayload<T extends AuxcampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuxcampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuxcampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuxcampanaGroupByOutputType[P]>
            : GetScalarType<T[P], AuxcampanaGroupByOutputType[P]>
        }
      >
    >


  export type auxcampanaSelect = {
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


  export type auxcampanaGetPayload<S extends boolean | null | undefined | auxcampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auxcampana :
    S extends undefined ? never :
    S extends { include: any } & (auxcampanaArgs | auxcampanaFindManyArgs)
    ? auxcampana 
    : S extends { select: any } & (auxcampanaArgs | auxcampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof auxcampana ? auxcampana[P] : never
  } 
      : auxcampana


  type auxcampanaCountArgs = 
    Omit<auxcampanaFindManyArgs, 'select' | 'include'> & {
      select?: AuxcampanaCountAggregateInputType | true
    }

  export interface auxcampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends auxcampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auxcampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auxcampana'> extends True ? Prisma__auxcampanaClient<auxcampanaGetPayload<T>> : Prisma__auxcampanaClient<auxcampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends auxcampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auxcampanaFindUniqueOrThrowArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
    findFirst<T extends auxcampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auxcampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auxcampana'> extends True ? Prisma__auxcampanaClient<auxcampanaGetPayload<T>> : Prisma__auxcampanaClient<auxcampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends auxcampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auxcampanaFindFirstOrThrowArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
    findMany<T extends auxcampanaFindManyArgs>(
      args?: SelectSubset<T, auxcampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<auxcampanaGetPayload<T>>>

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
    create<T extends auxcampanaCreateArgs>(
      args: SelectSubset<T, auxcampanaCreateArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
    createMany<T extends auxcampanaCreateManyArgs>(
      args?: SelectSubset<T, auxcampanaCreateManyArgs>
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
    delete<T extends auxcampanaDeleteArgs>(
      args: SelectSubset<T, auxcampanaDeleteArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
    update<T extends auxcampanaUpdateArgs>(
      args: SelectSubset<T, auxcampanaUpdateArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
    deleteMany<T extends auxcampanaDeleteManyArgs>(
      args?: SelectSubset<T, auxcampanaDeleteManyArgs>
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
    updateMany<T extends auxcampanaUpdateManyArgs>(
      args: SelectSubset<T, auxcampanaUpdateManyArgs>
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
    upsert<T extends auxcampanaUpsertArgs>(
      args: SelectSubset<T, auxcampanaUpsertArgs>
    ): Prisma__auxcampanaClient<auxcampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {AuxcampanaGroupByArgs} args - Group by arguments.
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
      T extends AuxcampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuxcampanaGroupByArgs['orderBy'] }
        : { orderBy?: AuxcampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuxcampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuxcampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auxcampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auxcampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type auxcampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where: auxcampanaWhereUniqueInput
  }

  /**
   * auxcampana findUnique
   */
  export interface auxcampanaFindUniqueArgs extends auxcampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auxcampana findUniqueOrThrow
   */
  export type auxcampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where: auxcampanaWhereUniqueInput
  }


  /**
   * auxcampana base type for findFirst actions
   */
  export type auxcampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: Enumerable<auxcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AuxcampanaScalarFieldEnum>
  }

  /**
   * auxcampana findFirst
   */
  export interface auxcampanaFindFirstArgs extends auxcampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auxcampana findFirstOrThrow
   */
  export type auxcampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter, which auxcampana to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: Enumerable<auxcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AuxcampanaScalarFieldEnum>
  }


  /**
   * auxcampana findMany
   */
  export type auxcampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter, which auxcampanas to fetch.
     */
    where?: auxcampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auxcampanas to fetch.
     */
    orderBy?: Enumerable<auxcampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<AuxcampanaScalarFieldEnum>
  }


  /**
   * auxcampana create
   */
  export type auxcampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * The data needed to create a auxcampana.
     */
    data: XOR<auxcampanaCreateInput, auxcampanaUncheckedCreateInput>
  }


  /**
   * auxcampana createMany
   */
  export type auxcampanaCreateManyArgs = {
    /**
     * The data used to create many auxcampanas.
     */
    data: Enumerable<auxcampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auxcampana update
   */
  export type auxcampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
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
  export type auxcampanaUpdateManyArgs = {
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
  export type auxcampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
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
  export type auxcampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
    /**
     * Filter which auxcampana to delete.
     */
    where: auxcampanaWhereUniqueInput
  }


  /**
   * auxcampana deleteMany
   */
  export type auxcampanaDeleteManyArgs = {
    /**
     * Filter which auxcampanas to delete
     */
    where?: auxcampanaWhereInput
  }


  /**
   * auxcampana without action
   */
  export type auxcampanaArgs = {
    /**
     * Select specific fields to fetch from the auxcampana
     */
    select?: auxcampanaSelect | null
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

  export type PolicampanaAggregateArgs = {
    /**
     * Filter which policampana to aggregate.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: Enumerable<policampanaOrderByWithRelationInput>
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




  export type PolicampanaGroupByArgs = {
    where?: policampanaWhereInput
    orderBy?: Enumerable<policampanaOrderByWithAggregationInput>
    by: PolicampanaScalarFieldEnum[]
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

  type GetPolicampanaGroupByPayload<T extends PolicampanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PolicampanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicampanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicampanaGroupByOutputType[P]>
            : GetScalarType<T[P], PolicampanaGroupByOutputType[P]>
        }
      >
    >


  export type policampanaSelect = {
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


  export type policampanaGetPayload<S extends boolean | null | undefined | policampanaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? policampana :
    S extends undefined ? never :
    S extends { include: any } & (policampanaArgs | policampanaFindManyArgs)
    ? policampana 
    : S extends { select: any } & (policampanaArgs | policampanaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof policampana ? policampana[P] : never
  } 
      : policampana


  type policampanaCountArgs = 
    Omit<policampanaFindManyArgs, 'select' | 'include'> & {
      select?: PolicampanaCountAggregateInputType | true
    }

  export interface policampanaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends policampanaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, policampanaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'policampana'> extends True ? Prisma__policampanaClient<policampanaGetPayload<T>> : Prisma__policampanaClient<policampanaGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends policampanaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, policampanaFindUniqueOrThrowArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
    findFirst<T extends policampanaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, policampanaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'policampana'> extends True ? Prisma__policampanaClient<policampanaGetPayload<T>> : Prisma__policampanaClient<policampanaGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends policampanaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, policampanaFindFirstOrThrowArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
    findMany<T extends policampanaFindManyArgs>(
      args?: SelectSubset<T, policampanaFindManyArgs>
    ): Prisma.PrismaPromise<Array<policampanaGetPayload<T>>>

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
    create<T extends policampanaCreateArgs>(
      args: SelectSubset<T, policampanaCreateArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
    createMany<T extends policampanaCreateManyArgs>(
      args?: SelectSubset<T, policampanaCreateManyArgs>
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
    delete<T extends policampanaDeleteArgs>(
      args: SelectSubset<T, policampanaDeleteArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
    update<T extends policampanaUpdateArgs>(
      args: SelectSubset<T, policampanaUpdateArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
    deleteMany<T extends policampanaDeleteManyArgs>(
      args?: SelectSubset<T, policampanaDeleteManyArgs>
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
    updateMany<T extends policampanaUpdateManyArgs>(
      args: SelectSubset<T, policampanaUpdateManyArgs>
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
    upsert<T extends policampanaUpsertArgs>(
      args: SelectSubset<T, policampanaUpsertArgs>
    ): Prisma__policampanaClient<policampanaGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {PolicampanaGroupByArgs} args - Group by arguments.
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
      T extends PolicampanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicampanaGroupByArgs['orderBy'] }
        : { orderBy?: PolicampanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PolicampanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicampanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for policampana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__policampanaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type policampanaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter, which policampana to fetch.
     */
    where: policampanaWhereUniqueInput
  }

  /**
   * policampana findUnique
   */
  export interface policampanaFindUniqueArgs extends policampanaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * policampana findUniqueOrThrow
   */
  export type policampanaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter, which policampana to fetch.
     */
    where: policampanaWhereUniqueInput
  }


  /**
   * policampana base type for findFirst actions
   */
  export type policampanaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter, which policampana to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: Enumerable<policampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<PolicampanaScalarFieldEnum>
  }

  /**
   * policampana findFirst
   */
  export interface policampanaFindFirstArgs extends policampanaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * policampana findFirstOrThrow
   */
  export type policampanaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter, which policampana to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: Enumerable<policampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<PolicampanaScalarFieldEnum>
  }


  /**
   * policampana findMany
   */
  export type policampanaFindManyArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter, which policampanas to fetch.
     */
    where?: policampanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policampanas to fetch.
     */
    orderBy?: Enumerable<policampanaOrderByWithRelationInput>
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
    distinct?: Enumerable<PolicampanaScalarFieldEnum>
  }


  /**
   * policampana create
   */
  export type policampanaCreateArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * The data needed to create a policampana.
     */
    data: XOR<policampanaCreateInput, policampanaUncheckedCreateInput>
  }


  /**
   * policampana createMany
   */
  export type policampanaCreateManyArgs = {
    /**
     * The data used to create many policampanas.
     */
    data: Enumerable<policampanaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * policampana update
   */
  export type policampanaUpdateArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
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
  export type policampanaUpdateManyArgs = {
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
  export type policampanaUpsertArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
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
  export type policampanaDeleteArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
    /**
     * Filter which policampana to delete.
     */
    where: policampanaWhereUniqueInput
  }


  /**
   * policampana deleteMany
   */
  export type policampanaDeleteManyArgs = {
    /**
     * Filter which policampanas to delete
     */
    where?: policampanaWhereInput
  }


  /**
   * policampana without action
   */
  export type policampanaArgs = {
    /**
     * Select specific fields to fetch from the policampana
     */
    select?: policampanaSelect | null
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

  export type At2campanaMAggregateArgs = {
    /**
     * Filter which at2campanaM to aggregate.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: Enumerable<at2campanaMOrderByWithRelationInput>
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




  export type At2campanaMGroupByArgs = {
    where?: at2campanaMWhereInput
    orderBy?: Enumerable<at2campanaMOrderByWithAggregationInput>
    by: At2campanaMScalarFieldEnum[]
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

  type GetAt2campanaMGroupByPayload<T extends At2campanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<At2campanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof At2campanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], At2campanaMGroupByOutputType[P]>
            : GetScalarType<T[P], At2campanaMGroupByOutputType[P]>
        }
      >
    >


  export type at2campanaMSelect = {
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


  export type at2campanaMGetPayload<S extends boolean | null | undefined | at2campanaMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? at2campanaM :
    S extends undefined ? never :
    S extends { include: any } & (at2campanaMArgs | at2campanaMFindManyArgs)
    ? at2campanaM 
    : S extends { select: any } & (at2campanaMArgs | at2campanaMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof at2campanaM ? at2campanaM[P] : never
  } 
      : at2campanaM


  type at2campanaMCountArgs = 
    Omit<at2campanaMFindManyArgs, 'select' | 'include'> & {
      select?: At2campanaMCountAggregateInputType | true
    }

  export interface at2campanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends at2campanaMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, at2campanaMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'at2campanaM'> extends True ? Prisma__at2campanaMClient<at2campanaMGetPayload<T>> : Prisma__at2campanaMClient<at2campanaMGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends at2campanaMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, at2campanaMFindUniqueOrThrowArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
    findFirst<T extends at2campanaMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, at2campanaMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'at2campanaM'> extends True ? Prisma__at2campanaMClient<at2campanaMGetPayload<T>> : Prisma__at2campanaMClient<at2campanaMGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends at2campanaMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, at2campanaMFindFirstOrThrowArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
    findMany<T extends at2campanaMFindManyArgs>(
      args?: SelectSubset<T, at2campanaMFindManyArgs>
    ): Prisma.PrismaPromise<Array<at2campanaMGetPayload<T>>>

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
    create<T extends at2campanaMCreateArgs>(
      args: SelectSubset<T, at2campanaMCreateArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
    createMany<T extends at2campanaMCreateManyArgs>(
      args?: SelectSubset<T, at2campanaMCreateManyArgs>
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
    delete<T extends at2campanaMDeleteArgs>(
      args: SelectSubset<T, at2campanaMDeleteArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
    update<T extends at2campanaMUpdateArgs>(
      args: SelectSubset<T, at2campanaMUpdateArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
    deleteMany<T extends at2campanaMDeleteManyArgs>(
      args?: SelectSubset<T, at2campanaMDeleteManyArgs>
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
    updateMany<T extends at2campanaMUpdateManyArgs>(
      args: SelectSubset<T, at2campanaMUpdateManyArgs>
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
    upsert<T extends at2campanaMUpsertArgs>(
      args: SelectSubset<T, at2campanaMUpsertArgs>
    ): Prisma__at2campanaMClient<at2campanaMGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {At2campanaMGroupByArgs} args - Group by arguments.
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
      T extends At2campanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: At2campanaMGroupByArgs['orderBy'] }
        : { orderBy?: At2campanaMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, At2campanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAt2campanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for at2campanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__at2campanaMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type at2campanaMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where: at2campanaMWhereUniqueInput
  }

  /**
   * at2campanaM findUnique
   */
  export interface at2campanaMFindUniqueArgs extends at2campanaMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campanaM findUniqueOrThrow
   */
  export type at2campanaMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where: at2campanaMWhereUniqueInput
  }


  /**
   * at2campanaM base type for findFirst actions
   */
  export type at2campanaMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: Enumerable<at2campanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaMScalarFieldEnum>
  }

  /**
   * at2campanaM findFirst
   */
  export interface at2campanaMFindFirstArgs extends at2campanaMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * at2campanaM findFirstOrThrow
   */
  export type at2campanaMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter, which at2campanaM to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: Enumerable<at2campanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaMScalarFieldEnum>
  }


  /**
   * at2campanaM findMany
   */
  export type at2campanaMFindManyArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter, which at2campanaMS to fetch.
     */
    where?: at2campanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of at2campanaMS to fetch.
     */
    orderBy?: Enumerable<at2campanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<At2campanaMScalarFieldEnum>
  }


  /**
   * at2campanaM create
   */
  export type at2campanaMCreateArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * The data needed to create a at2campanaM.
     */
    data: XOR<at2campanaMCreateInput, at2campanaMUncheckedCreateInput>
  }


  /**
   * at2campanaM createMany
   */
  export type at2campanaMCreateManyArgs = {
    /**
     * The data used to create many at2campanaMS.
     */
    data: Enumerable<at2campanaMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * at2campanaM update
   */
  export type at2campanaMUpdateArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
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
  export type at2campanaMUpdateManyArgs = {
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
  export type at2campanaMUpsertArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
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
  export type at2campanaMDeleteArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
    /**
     * Filter which at2campanaM to delete.
     */
    where: at2campanaMWhereUniqueInput
  }


  /**
   * at2campanaM deleteMany
   */
  export type at2campanaMDeleteManyArgs = {
    /**
     * Filter which at2campanaMS to delete
     */
    where?: at2campanaMWhereInput
  }


  /**
   * at2campanaM without action
   */
  export type at2campanaMArgs = {
    /**
     * Select specific fields to fetch from the at2campanaM
     */
    select?: at2campanaMSelect | null
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

  export type AtcampanaMAggregateArgs = {
    /**
     * Filter which atcampanaM to aggregate.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: Enumerable<atcampanaMOrderByWithRelationInput>
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




  export type AtcampanaMGroupByArgs = {
    where?: atcampanaMWhereInput
    orderBy?: Enumerable<atcampanaMOrderByWithAggregationInput>
    by: AtcampanaMScalarFieldEnum[]
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

  type GetAtcampanaMGroupByPayload<T extends AtcampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AtcampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtcampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtcampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], AtcampanaMGroupByOutputType[P]>
        }
      >
    >


  export type atcampanaMSelect = {
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


  export type atcampanaMGetPayload<S extends boolean | null | undefined | atcampanaMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? atcampanaM :
    S extends undefined ? never :
    S extends { include: any } & (atcampanaMArgs | atcampanaMFindManyArgs)
    ? atcampanaM 
    : S extends { select: any } & (atcampanaMArgs | atcampanaMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof atcampanaM ? atcampanaM[P] : never
  } 
      : atcampanaM


  type atcampanaMCountArgs = 
    Omit<atcampanaMFindManyArgs, 'select' | 'include'> & {
      select?: AtcampanaMCountAggregateInputType | true
    }

  export interface atcampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends atcampanaMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, atcampanaMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'atcampanaM'> extends True ? Prisma__atcampanaMClient<atcampanaMGetPayload<T>> : Prisma__atcampanaMClient<atcampanaMGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends atcampanaMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, atcampanaMFindUniqueOrThrowArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
    findFirst<T extends atcampanaMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, atcampanaMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'atcampanaM'> extends True ? Prisma__atcampanaMClient<atcampanaMGetPayload<T>> : Prisma__atcampanaMClient<atcampanaMGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends atcampanaMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, atcampanaMFindFirstOrThrowArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
    findMany<T extends atcampanaMFindManyArgs>(
      args?: SelectSubset<T, atcampanaMFindManyArgs>
    ): Prisma.PrismaPromise<Array<atcampanaMGetPayload<T>>>

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
    create<T extends atcampanaMCreateArgs>(
      args: SelectSubset<T, atcampanaMCreateArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
    createMany<T extends atcampanaMCreateManyArgs>(
      args?: SelectSubset<T, atcampanaMCreateManyArgs>
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
    delete<T extends atcampanaMDeleteArgs>(
      args: SelectSubset<T, atcampanaMDeleteArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
    update<T extends atcampanaMUpdateArgs>(
      args: SelectSubset<T, atcampanaMUpdateArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
    deleteMany<T extends atcampanaMDeleteManyArgs>(
      args?: SelectSubset<T, atcampanaMDeleteManyArgs>
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
    updateMany<T extends atcampanaMUpdateManyArgs>(
      args: SelectSubset<T, atcampanaMUpdateManyArgs>
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
    upsert<T extends atcampanaMUpsertArgs>(
      args: SelectSubset<T, atcampanaMUpsertArgs>
    ): Prisma__atcampanaMClient<atcampanaMGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {AtcampanaMGroupByArgs} args - Group by arguments.
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
      T extends AtcampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtcampanaMGroupByArgs['orderBy'] }
        : { orderBy?: AtcampanaMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AtcampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtcampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for atcampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__atcampanaMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type atcampanaMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where: atcampanaMWhereUniqueInput
  }

  /**
   * atcampanaM findUnique
   */
  export interface atcampanaMFindUniqueArgs extends atcampanaMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaM findUniqueOrThrow
   */
  export type atcampanaMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where: atcampanaMWhereUniqueInput
  }


  /**
   * atcampanaM base type for findFirst actions
   */
  export type atcampanaMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: Enumerable<atcampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaMScalarFieldEnum>
  }

  /**
   * atcampanaM findFirst
   */
  export interface atcampanaMFindFirstArgs extends atcampanaMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * atcampanaM findFirstOrThrow
   */
  export type atcampanaMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter, which atcampanaM to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: Enumerable<atcampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaMScalarFieldEnum>
  }


  /**
   * atcampanaM findMany
   */
  export type atcampanaMFindManyArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter, which atcampanaMS to fetch.
     */
    where?: atcampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atcampanaMS to fetch.
     */
    orderBy?: Enumerable<atcampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<AtcampanaMScalarFieldEnum>
  }


  /**
   * atcampanaM create
   */
  export type atcampanaMCreateArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * The data needed to create a atcampanaM.
     */
    data: XOR<atcampanaMCreateInput, atcampanaMUncheckedCreateInput>
  }


  /**
   * atcampanaM createMany
   */
  export type atcampanaMCreateManyArgs = {
    /**
     * The data used to create many atcampanaMS.
     */
    data: Enumerable<atcampanaMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * atcampanaM update
   */
  export type atcampanaMUpdateArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
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
  export type atcampanaMUpdateManyArgs = {
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
  export type atcampanaMUpsertArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
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
  export type atcampanaMDeleteArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
    /**
     * Filter which atcampanaM to delete.
     */
    where: atcampanaMWhereUniqueInput
  }


  /**
   * atcampanaM deleteMany
   */
  export type atcampanaMDeleteManyArgs = {
    /**
     * Filter which atcampanaMS to delete
     */
    where?: atcampanaMWhereInput
  }


  /**
   * atcampanaM without action
   */
  export type atcampanaMArgs = {
    /**
     * Select specific fields to fetch from the atcampanaM
     */
    select?: atcampanaMSelect | null
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

  export type BlancampanaMAggregateArgs = {
    /**
     * Filter which blancampanaM to aggregate.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: Enumerable<blancampanaMOrderByWithRelationInput>
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




  export type BlancampanaMGroupByArgs = {
    where?: blancampanaMWhereInput
    orderBy?: Enumerable<blancampanaMOrderByWithAggregationInput>
    by: BlancampanaMScalarFieldEnum[]
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

  type GetBlancampanaMGroupByPayload<T extends BlancampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BlancampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlancampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlancampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], BlancampanaMGroupByOutputType[P]>
        }
      >
    >


  export type blancampanaMSelect = {
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


  export type blancampanaMGetPayload<S extends boolean | null | undefined | blancampanaMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? blancampanaM :
    S extends undefined ? never :
    S extends { include: any } & (blancampanaMArgs | blancampanaMFindManyArgs)
    ? blancampanaM 
    : S extends { select: any } & (blancampanaMArgs | blancampanaMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof blancampanaM ? blancampanaM[P] : never
  } 
      : blancampanaM


  type blancampanaMCountArgs = 
    Omit<blancampanaMFindManyArgs, 'select' | 'include'> & {
      select?: BlancampanaMCountAggregateInputType | true
    }

  export interface blancampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends blancampanaMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, blancampanaMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'blancampanaM'> extends True ? Prisma__blancampanaMClient<blancampanaMGetPayload<T>> : Prisma__blancampanaMClient<blancampanaMGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends blancampanaMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, blancampanaMFindUniqueOrThrowArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
    findFirst<T extends blancampanaMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, blancampanaMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'blancampanaM'> extends True ? Prisma__blancampanaMClient<blancampanaMGetPayload<T>> : Prisma__blancampanaMClient<blancampanaMGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends blancampanaMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, blancampanaMFindFirstOrThrowArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
    findMany<T extends blancampanaMFindManyArgs>(
      args?: SelectSubset<T, blancampanaMFindManyArgs>
    ): Prisma.PrismaPromise<Array<blancampanaMGetPayload<T>>>

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
    create<T extends blancampanaMCreateArgs>(
      args: SelectSubset<T, blancampanaMCreateArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
    createMany<T extends blancampanaMCreateManyArgs>(
      args?: SelectSubset<T, blancampanaMCreateManyArgs>
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
    delete<T extends blancampanaMDeleteArgs>(
      args: SelectSubset<T, blancampanaMDeleteArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
    update<T extends blancampanaMUpdateArgs>(
      args: SelectSubset<T, blancampanaMUpdateArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
    deleteMany<T extends blancampanaMDeleteManyArgs>(
      args?: SelectSubset<T, blancampanaMDeleteManyArgs>
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
    updateMany<T extends blancampanaMUpdateManyArgs>(
      args: SelectSubset<T, blancampanaMUpdateManyArgs>
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
    upsert<T extends blancampanaMUpsertArgs>(
      args: SelectSubset<T, blancampanaMUpsertArgs>
    ): Prisma__blancampanaMClient<blancampanaMGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {BlancampanaMGroupByArgs} args - Group by arguments.
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
      T extends BlancampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlancampanaMGroupByArgs['orderBy'] }
        : { orderBy?: BlancampanaMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlancampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlancampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for blancampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blancampanaMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type blancampanaMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where: blancampanaMWhereUniqueInput
  }

  /**
   * blancampanaM findUnique
   */
  export interface blancampanaMFindUniqueArgs extends blancampanaMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampanaM findUniqueOrThrow
   */
  export type blancampanaMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where: blancampanaMWhereUniqueInput
  }


  /**
   * blancampanaM base type for findFirst actions
   */
  export type blancampanaMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: Enumerable<blancampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaMScalarFieldEnum>
  }

  /**
   * blancampanaM findFirst
   */
  export interface blancampanaMFindFirstArgs extends blancampanaMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * blancampanaM findFirstOrThrow
   */
  export type blancampanaMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter, which blancampanaM to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: Enumerable<blancampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaMScalarFieldEnum>
  }


  /**
   * blancampanaM findMany
   */
  export type blancampanaMFindManyArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter, which blancampanaMS to fetch.
     */
    where?: blancampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blancampanaMS to fetch.
     */
    orderBy?: Enumerable<blancampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<BlancampanaMScalarFieldEnum>
  }


  /**
   * blancampanaM create
   */
  export type blancampanaMCreateArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * The data needed to create a blancampanaM.
     */
    data: XOR<blancampanaMCreateInput, blancampanaMUncheckedCreateInput>
  }


  /**
   * blancampanaM createMany
   */
  export type blancampanaMCreateManyArgs = {
    /**
     * The data used to create many blancampanaMS.
     */
    data: Enumerable<blancampanaMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * blancampanaM update
   */
  export type blancampanaMUpdateArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
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
  export type blancampanaMUpdateManyArgs = {
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
  export type blancampanaMUpsertArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
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
  export type blancampanaMDeleteArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
    /**
     * Filter which blancampanaM to delete.
     */
    where: blancampanaMWhereUniqueInput
  }


  /**
   * blancampanaM deleteMany
   */
  export type blancampanaMDeleteManyArgs = {
    /**
     * Filter which blancampanaMS to delete
     */
    where?: blancampanaMWhereInput
  }


  /**
   * blancampanaM without action
   */
  export type blancampanaMArgs = {
    /**
     * Select specific fields to fetch from the blancampanaM
     */
    select?: blancampanaMSelect | null
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

  export type ReccampanaMAggregateArgs = {
    /**
     * Filter which reccampanaM to aggregate.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: Enumerable<reccampanaMOrderByWithRelationInput>
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




  export type ReccampanaMGroupByArgs = {
    where?: reccampanaMWhereInput
    orderBy?: Enumerable<reccampanaMOrderByWithAggregationInput>
    by: ReccampanaMScalarFieldEnum[]
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

  type GetReccampanaMGroupByPayload<T extends ReccampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReccampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReccampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReccampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], ReccampanaMGroupByOutputType[P]>
        }
      >
    >


  export type reccampanaMSelect = {
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


  export type reccampanaMGetPayload<S extends boolean | null | undefined | reccampanaMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reccampanaM :
    S extends undefined ? never :
    S extends { include: any } & (reccampanaMArgs | reccampanaMFindManyArgs)
    ? reccampanaM 
    : S extends { select: any } & (reccampanaMArgs | reccampanaMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof reccampanaM ? reccampanaM[P] : never
  } 
      : reccampanaM


  type reccampanaMCountArgs = 
    Omit<reccampanaMFindManyArgs, 'select' | 'include'> & {
      select?: ReccampanaMCountAggregateInputType | true
    }

  export interface reccampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends reccampanaMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reccampanaMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reccampanaM'> extends True ? Prisma__reccampanaMClient<reccampanaMGetPayload<T>> : Prisma__reccampanaMClient<reccampanaMGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends reccampanaMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reccampanaMFindUniqueOrThrowArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
    findFirst<T extends reccampanaMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reccampanaMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reccampanaM'> extends True ? Prisma__reccampanaMClient<reccampanaMGetPayload<T>> : Prisma__reccampanaMClient<reccampanaMGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends reccampanaMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reccampanaMFindFirstOrThrowArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
    findMany<T extends reccampanaMFindManyArgs>(
      args?: SelectSubset<T, reccampanaMFindManyArgs>
    ): Prisma.PrismaPromise<Array<reccampanaMGetPayload<T>>>

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
    create<T extends reccampanaMCreateArgs>(
      args: SelectSubset<T, reccampanaMCreateArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
    createMany<T extends reccampanaMCreateManyArgs>(
      args?: SelectSubset<T, reccampanaMCreateManyArgs>
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
    delete<T extends reccampanaMDeleteArgs>(
      args: SelectSubset<T, reccampanaMDeleteArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
    update<T extends reccampanaMUpdateArgs>(
      args: SelectSubset<T, reccampanaMUpdateArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
    deleteMany<T extends reccampanaMDeleteManyArgs>(
      args?: SelectSubset<T, reccampanaMDeleteManyArgs>
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
    updateMany<T extends reccampanaMUpdateManyArgs>(
      args: SelectSubset<T, reccampanaMUpdateManyArgs>
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
    upsert<T extends reccampanaMUpsertArgs>(
      args: SelectSubset<T, reccampanaMUpsertArgs>
    ): Prisma__reccampanaMClient<reccampanaMGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {ReccampanaMGroupByArgs} args - Group by arguments.
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
      T extends ReccampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReccampanaMGroupByArgs['orderBy'] }
        : { orderBy?: ReccampanaMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReccampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReccampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reccampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reccampanaMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type reccampanaMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where: reccampanaMWhereUniqueInput
  }

  /**
   * reccampanaM findUnique
   */
  export interface reccampanaMFindUniqueArgs extends reccampanaMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaM findUniqueOrThrow
   */
  export type reccampanaMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where: reccampanaMWhereUniqueInput
  }


  /**
   * reccampanaM base type for findFirst actions
   */
  export type reccampanaMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: Enumerable<reccampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaMScalarFieldEnum>
  }

  /**
   * reccampanaM findFirst
   */
  export interface reccampanaMFindFirstArgs extends reccampanaMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reccampanaM findFirstOrThrow
   */
  export type reccampanaMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter, which reccampanaM to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: Enumerable<reccampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaMScalarFieldEnum>
  }


  /**
   * reccampanaM findMany
   */
  export type reccampanaMFindManyArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter, which reccampanaMS to fetch.
     */
    where?: reccampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reccampanaMS to fetch.
     */
    orderBy?: Enumerable<reccampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReccampanaMScalarFieldEnum>
  }


  /**
   * reccampanaM create
   */
  export type reccampanaMCreateArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * The data needed to create a reccampanaM.
     */
    data: XOR<reccampanaMCreateInput, reccampanaMUncheckedCreateInput>
  }


  /**
   * reccampanaM createMany
   */
  export type reccampanaMCreateManyArgs = {
    /**
     * The data used to create many reccampanaMS.
     */
    data: Enumerable<reccampanaMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reccampanaM update
   */
  export type reccampanaMUpdateArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
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
  export type reccampanaMUpdateManyArgs = {
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
  export type reccampanaMUpsertArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
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
  export type reccampanaMDeleteArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
    /**
     * Filter which reccampanaM to delete.
     */
    where: reccampanaMWhereUniqueInput
  }


  /**
   * reccampanaM deleteMany
   */
  export type reccampanaMDeleteManyArgs = {
    /**
     * Filter which reccampanaMS to delete
     */
    where?: reccampanaMWhereInput
  }


  /**
   * reccampanaM without action
   */
  export type reccampanaMArgs = {
    /**
     * Select specific fields to fetch from the reccampanaM
     */
    select?: reccampanaMSelect | null
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

  export type ReincampanaMAggregateArgs = {
    /**
     * Filter which reincampanaM to aggregate.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: Enumerable<reincampanaMOrderByWithRelationInput>
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




  export type ReincampanaMGroupByArgs = {
    where?: reincampanaMWhereInput
    orderBy?: Enumerable<reincampanaMOrderByWithAggregationInput>
    by: ReincampanaMScalarFieldEnum[]
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

  type GetReincampanaMGroupByPayload<T extends ReincampanaMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReincampanaMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReincampanaMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReincampanaMGroupByOutputType[P]>
            : GetScalarType<T[P], ReincampanaMGroupByOutputType[P]>
        }
      >
    >


  export type reincampanaMSelect = {
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


  export type reincampanaMGetPayload<S extends boolean | null | undefined | reincampanaMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reincampanaM :
    S extends undefined ? never :
    S extends { include: any } & (reincampanaMArgs | reincampanaMFindManyArgs)
    ? reincampanaM 
    : S extends { select: any } & (reincampanaMArgs | reincampanaMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof reincampanaM ? reincampanaM[P] : never
  } 
      : reincampanaM


  type reincampanaMCountArgs = 
    Omit<reincampanaMFindManyArgs, 'select' | 'include'> & {
      select?: ReincampanaMCountAggregateInputType | true
    }

  export interface reincampanaMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends reincampanaMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reincampanaMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reincampanaM'> extends True ? Prisma__reincampanaMClient<reincampanaMGetPayload<T>> : Prisma__reincampanaMClient<reincampanaMGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends reincampanaMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reincampanaMFindUniqueOrThrowArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
    findFirst<T extends reincampanaMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reincampanaMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reincampanaM'> extends True ? Prisma__reincampanaMClient<reincampanaMGetPayload<T>> : Prisma__reincampanaMClient<reincampanaMGetPayload<T> | null, null>

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
    findFirstOrThrow<T extends reincampanaMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reincampanaMFindFirstOrThrowArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
    findMany<T extends reincampanaMFindManyArgs>(
      args?: SelectSubset<T, reincampanaMFindManyArgs>
    ): Prisma.PrismaPromise<Array<reincampanaMGetPayload<T>>>

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
    create<T extends reincampanaMCreateArgs>(
      args: SelectSubset<T, reincampanaMCreateArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
    createMany<T extends reincampanaMCreateManyArgs>(
      args?: SelectSubset<T, reincampanaMCreateManyArgs>
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
    delete<T extends reincampanaMDeleteArgs>(
      args: SelectSubset<T, reincampanaMDeleteArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
    update<T extends reincampanaMUpdateArgs>(
      args: SelectSubset<T, reincampanaMUpdateArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
    deleteMany<T extends reincampanaMDeleteManyArgs>(
      args?: SelectSubset<T, reincampanaMDeleteManyArgs>
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
    updateMany<T extends reincampanaMUpdateManyArgs>(
      args: SelectSubset<T, reincampanaMUpdateManyArgs>
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
    upsert<T extends reincampanaMUpsertArgs>(
      args: SelectSubset<T, reincampanaMUpsertArgs>
    ): Prisma__reincampanaMClient<reincampanaMGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {ReincampanaMGroupByArgs} args - Group by arguments.
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
      T extends ReincampanaMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReincampanaMGroupByArgs['orderBy'] }
        : { orderBy?: ReincampanaMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReincampanaMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReincampanaMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reincampanaM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reincampanaMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
  export type reincampanaMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where: reincampanaMWhereUniqueInput
  }

  /**
   * reincampanaM findUnique
   */
  export interface reincampanaMFindUniqueArgs extends reincampanaMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampanaM findUniqueOrThrow
   */
  export type reincampanaMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where: reincampanaMWhereUniqueInput
  }


  /**
   * reincampanaM base type for findFirst actions
   */
  export type reincampanaMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: Enumerable<reincampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaMScalarFieldEnum>
  }

  /**
   * reincampanaM findFirst
   */
  export interface reincampanaMFindFirstArgs extends reincampanaMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reincampanaM findFirstOrThrow
   */
  export type reincampanaMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter, which reincampanaM to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: Enumerable<reincampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaMScalarFieldEnum>
  }


  /**
   * reincampanaM findMany
   */
  export type reincampanaMFindManyArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter, which reincampanaMS to fetch.
     */
    where?: reincampanaMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reincampanaMS to fetch.
     */
    orderBy?: Enumerable<reincampanaMOrderByWithRelationInput>
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
    distinct?: Enumerable<ReincampanaMScalarFieldEnum>
  }


  /**
   * reincampanaM create
   */
  export type reincampanaMCreateArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * The data needed to create a reincampanaM.
     */
    data: XOR<reincampanaMCreateInput, reincampanaMUncheckedCreateInput>
  }


  /**
   * reincampanaM createMany
   */
  export type reincampanaMCreateManyArgs = {
    /**
     * The data used to create many reincampanaMS.
     */
    data: Enumerable<reincampanaMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reincampanaM update
   */
  export type reincampanaMUpdateArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
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
  export type reincampanaMUpdateManyArgs = {
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
  export type reincampanaMUpsertArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
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
  export type reincampanaMDeleteArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
    /**
     * Filter which reincampanaM to delete.
     */
    where: reincampanaMWhereUniqueInput
  }


  /**
   * reincampanaM deleteMany
   */
  export type reincampanaMDeleteManyArgs = {
    /**
     * Filter which reincampanaMS to delete
     */
    where?: reincampanaMWhereInput
  }


  /**
   * reincampanaM without action
   */
  export type reincampanaMArgs = {
    /**
     * Select specific fields to fetch from the reincampanaM
     */
    select?: reincampanaMSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type at2campanaWhereInput = {
    AND?: Enumerable<at2campanaWhereInput>
    OR?: Enumerable<at2campanaWhereInput>
    NOT?: Enumerable<at2campanaWhereInput>
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

  export type at2campanaWhereUniqueInput = {
    ID?: number
  }

  export type at2campanaOrderByWithAggregationInput = {
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
    _count?: at2campanaCountOrderByAggregateInput
    _avg?: at2campanaAvgOrderByAggregateInput
    _max?: at2campanaMaxOrderByAggregateInput
    _min?: at2campanaMinOrderByAggregateInput
    _sum?: at2campanaSumOrderByAggregateInput
  }

  export type at2campanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<at2campanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<at2campanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<at2campanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<atcampanaWhereInput>
    OR?: Enumerable<atcampanaWhereInput>
    NOT?: Enumerable<atcampanaWhereInput>
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

  export type atcampanaWhereUniqueInput = {
    ID?: number
  }

  export type atcampanaOrderByWithAggregationInput = {
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
    _count?: atcampanaCountOrderByAggregateInput
    _avg?: atcampanaAvgOrderByAggregateInput
    _max?: atcampanaMaxOrderByAggregateInput
    _min?: atcampanaMinOrderByAggregateInput
    _sum?: atcampanaSumOrderByAggregateInput
  }

  export type atcampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<atcampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<atcampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<atcampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<blancampanaWhereInput>
    OR?: Enumerable<blancampanaWhereInput>
    NOT?: Enumerable<blancampanaWhereInput>
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

  export type blancampanaWhereUniqueInput = {
    ID?: number
  }

  export type blancampanaOrderByWithAggregationInput = {
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
    _count?: blancampanaCountOrderByAggregateInput
    _avg?: blancampanaAvgOrderByAggregateInput
    _max?: blancampanaMaxOrderByAggregateInput
    _min?: blancampanaMinOrderByAggregateInput
    _sum?: blancampanaSumOrderByAggregateInput
  }

  export type blancampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<blancampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<blancampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<blancampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<reccampanaWhereInput>
    OR?: Enumerable<reccampanaWhereInput>
    NOT?: Enumerable<reccampanaWhereInput>
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

  export type reccampanaWhereUniqueInput = {
    ID?: number
  }

  export type reccampanaOrderByWithAggregationInput = {
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
    _count?: reccampanaCountOrderByAggregateInput
    _avg?: reccampanaAvgOrderByAggregateInput
    _max?: reccampanaMaxOrderByAggregateInput
    _min?: reccampanaMinOrderByAggregateInput
    _sum?: reccampanaSumOrderByAggregateInput
  }

  export type reccampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reccampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<reccampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reccampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<reincampanaWhereInput>
    OR?: Enumerable<reincampanaWhereInput>
    NOT?: Enumerable<reincampanaWhereInput>
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

  export type reincampanaWhereUniqueInput = {
    ID?: number
  }

  export type reincampanaOrderByWithAggregationInput = {
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
    _count?: reincampanaCountOrderByAggregateInput
    _avg?: reincampanaAvgOrderByAggregateInput
    _max?: reincampanaMaxOrderByAggregateInput
    _min?: reincampanaMinOrderByAggregateInput
    _sum?: reincampanaSumOrderByAggregateInput
  }

  export type reincampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reincampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<reincampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reincampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<auxcampanaWhereInput>
    OR?: Enumerable<auxcampanaWhereInput>
    NOT?: Enumerable<auxcampanaWhereInput>
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

  export type auxcampanaWhereUniqueInput = {
    ID?: number
  }

  export type auxcampanaOrderByWithAggregationInput = {
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
    _count?: auxcampanaCountOrderByAggregateInput
    _avg?: auxcampanaAvgOrderByAggregateInput
    _max?: auxcampanaMaxOrderByAggregateInput
    _min?: auxcampanaMinOrderByAggregateInput
    _sum?: auxcampanaSumOrderByAggregateInput
  }

  export type auxcampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auxcampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<auxcampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auxcampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<policampanaWhereInput>
    OR?: Enumerable<policampanaWhereInput>
    NOT?: Enumerable<policampanaWhereInput>
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

  export type policampanaWhereUniqueInput = {
    ID?: number
  }

  export type policampanaOrderByWithAggregationInput = {
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
    _count?: policampanaCountOrderByAggregateInput
    _avg?: policampanaAvgOrderByAggregateInput
    _max?: policampanaMaxOrderByAggregateInput
    _min?: policampanaMinOrderByAggregateInput
    _sum?: policampanaSumOrderByAggregateInput
  }

  export type policampanaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<policampanaScalarWhereWithAggregatesInput>
    OR?: Enumerable<policampanaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<policampanaScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<at2campanaMWhereInput>
    OR?: Enumerable<at2campanaMWhereInput>
    NOT?: Enumerable<at2campanaMWhereInput>
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

  export type at2campanaMWhereUniqueInput = {
    ID?: number
  }

  export type at2campanaMOrderByWithAggregationInput = {
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
    _count?: at2campanaMCountOrderByAggregateInput
    _avg?: at2campanaMAvgOrderByAggregateInput
    _max?: at2campanaMMaxOrderByAggregateInput
    _min?: at2campanaMMinOrderByAggregateInput
    _sum?: at2campanaMSumOrderByAggregateInput
  }

  export type at2campanaMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<at2campanaMScalarWhereWithAggregatesInput>
    OR?: Enumerable<at2campanaMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<at2campanaMScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<atcampanaMWhereInput>
    OR?: Enumerable<atcampanaMWhereInput>
    NOT?: Enumerable<atcampanaMWhereInput>
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

  export type atcampanaMWhereUniqueInput = {
    ID?: number
  }

  export type atcampanaMOrderByWithAggregationInput = {
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
    _count?: atcampanaMCountOrderByAggregateInput
    _avg?: atcampanaMAvgOrderByAggregateInput
    _max?: atcampanaMMaxOrderByAggregateInput
    _min?: atcampanaMMinOrderByAggregateInput
    _sum?: atcampanaMSumOrderByAggregateInput
  }

  export type atcampanaMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<atcampanaMScalarWhereWithAggregatesInput>
    OR?: Enumerable<atcampanaMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<atcampanaMScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<blancampanaMWhereInput>
    OR?: Enumerable<blancampanaMWhereInput>
    NOT?: Enumerable<blancampanaMWhereInput>
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

  export type blancampanaMWhereUniqueInput = {
    ID?: number
  }

  export type blancampanaMOrderByWithAggregationInput = {
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
    _count?: blancampanaMCountOrderByAggregateInput
    _avg?: blancampanaMAvgOrderByAggregateInput
    _max?: blancampanaMMaxOrderByAggregateInput
    _min?: blancampanaMMinOrderByAggregateInput
    _sum?: blancampanaMSumOrderByAggregateInput
  }

  export type blancampanaMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<blancampanaMScalarWhereWithAggregatesInput>
    OR?: Enumerable<blancampanaMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<blancampanaMScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<reccampanaMWhereInput>
    OR?: Enumerable<reccampanaMWhereInput>
    NOT?: Enumerable<reccampanaMWhereInput>
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

  export type reccampanaMWhereUniqueInput = {
    ID?: number
  }

  export type reccampanaMOrderByWithAggregationInput = {
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
    _count?: reccampanaMCountOrderByAggregateInput
    _avg?: reccampanaMAvgOrderByAggregateInput
    _max?: reccampanaMMaxOrderByAggregateInput
    _min?: reccampanaMMinOrderByAggregateInput
    _sum?: reccampanaMSumOrderByAggregateInput
  }

  export type reccampanaMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reccampanaMScalarWhereWithAggregatesInput>
    OR?: Enumerable<reccampanaMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reccampanaMScalarWhereWithAggregatesInput>
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
    AND?: Enumerable<reincampanaMWhereInput>
    OR?: Enumerable<reincampanaMWhereInput>
    NOT?: Enumerable<reincampanaMWhereInput>
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

  export type reincampanaMWhereUniqueInput = {
    ID?: number
  }

  export type reincampanaMOrderByWithAggregationInput = {
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
    _count?: reincampanaMCountOrderByAggregateInput
    _avg?: reincampanaMAvgOrderByAggregateInput
    _max?: reincampanaMMaxOrderByAggregateInput
    _min?: reincampanaMMinOrderByAggregateInput
    _sum?: reincampanaMSumOrderByAggregateInput
  }

  export type reincampanaMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reincampanaMScalarWhereWithAggregatesInput>
    OR?: Enumerable<reincampanaMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reincampanaMScalarWhereWithAggregatesInput>
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

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
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
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
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
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
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
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
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
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
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