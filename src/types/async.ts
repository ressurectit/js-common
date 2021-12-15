/**
 * Type that represents pure value or value obtained by promise
 */
export type PromiseOr<TValue> = Promise<TValue>|TValue;
