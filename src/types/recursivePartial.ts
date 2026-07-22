type Primitive = string|number|boolean|bigint|symbol|null|undefined;
type Builtin   = Primitive|Function|Date|Error|RegExp;

//TODO: in future replace this with https://www.npmjs.com/package/ts-essentials => DeepPartial

/**
 * Utility type that makes partial all nested properties
 */
export type RecursivePartial<T> =
    T extends Builtin                 ? T :
    T extends Map<infer K, infer V>   ? Map<RecursivePartial<K>, RecursivePartial<V>> :
    T extends Set<infer U>            ? Set<RecursivePartial<U>> :
    T extends ReadonlyArray<infer U>  ? ReadonlyArray<RecursivePartial<U>> :
    T extends object                  ? {[P in keyof T]?: RecursivePartial<T[P]>} :
    T;
