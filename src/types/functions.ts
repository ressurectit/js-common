/**
 * Type that extracts function signature from function type
 */
export type FuncSignature<TResult extends (...args: any) => any> = TResult extends (...args: infer P) => infer R ? (...args: P) => R : never;

/**
 * Function definition with no variables and no return type
 */
export type NoopAction = () => void;

/**
 * Function definition with variable arguments and no return type
 * @typeParam TArgs - Type parameters for function
 */
export type Action<TArgs extends Array<unknown> = unknown[]> = (...args: TArgs) => void;

/**
 * Function definition with variable arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArgs - Type parameters for function
 */
export type Func<TResult = unknown, TArgs extends Array<unknown> = unknown[]> = (...args: TArgs) => TResult;
