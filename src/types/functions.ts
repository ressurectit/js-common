/**
 * Function definition with no variables and no return type
 */
export type NoopAction = () => void;

/**
 * Function definition with variable arguments and no return type
 */
export type Action = (...args: unknown[]) => void;

/**
 * Function definition with variable arguments and return type
 * @typeParam TResult - Return type of function
 */
export type Func<TResult = unknown> = (...args: unknown[]) => TResult;