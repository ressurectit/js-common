/**
 * Represents type that extracts class as type Record with property keys as index and unknown property values
 */
export type AsDictionary<TType extends Object> = TType extends {[P in keyof TType]: unknown} ? Record<keyof TType, unknown> : unknown;

/**
 * Represents type that extracts class as type Record with property keys as index and any property values
 */
export type AsAnyDictionary<TType extends Object> = TType extends {[P in keyof TType]: any} ? Record<keyof TType, any> : any;

/**
 * Represents Record type where, key is string and value is defined by typeparam
 * @typeparam TData - Type of property value
 */
export type Dictionary<TData = unknown> = Record<string, TData>;

/**
 * Represents Record type where, key is string and value is string
 */
export type StringDictionary = Record<string, string>;
