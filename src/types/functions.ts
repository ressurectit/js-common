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
 * Function definition with one argument and no return type
 * @typeParam TArg1 - Type of first parameter
 */
export type Action1<TArg1 = unknown> = (arg1: TArg1) => void;

/**
 * Function definition with one mandatory argument, rest argument and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Action1Rest<TArg1 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, ...rest: TRest) => void;

/**
 * Function definition with two arguments and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 */
export type Action2<TArg1 = unknown, TArg2 = unknown> = (arg1: TArg1, arg2: TArg2) => void;

/**
 * Function definition with two mandatory arguments, rest argument and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Action2Rest<TArg1 = unknown, TArg2 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, ...rest: TRest) => void;

/**
 * Function definition with three arguments and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 */
export type Action3<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3) => void;

/**
 * Function definition with three mandatory arguments, rest argument and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Action3Rest<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, ...rest: TRest) => void;

/**
 * Function definition with four arguments and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 */
export type Action4<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4) => void;

/**
 * Function definition with four mandatory arguments, rest argument and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Action4Rest<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, ...rest: TRest) => void;

/**
 * Function definition with five arguments and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TArg5 - Type of fifth parameter
 */
export type Action5<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TArg5 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5) => void;

/**
 * Function definition with five mandatory arguments, rest argument and no return type
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TArg5 - Type of fifth parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Action5Rest<TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TArg5 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, ...rest: TRest) => void;

/**
 * Function definition with variable arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArgs - Type parameters for function
 */
export type Func<TResult = unknown, TArgs extends Array<unknown> = unknown[]> = (...args: TArgs) => TResult;

/**
 * Function definition with one argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 */
export type Func1<TResult = unknown, TArg1 = unknown> = (arg1: TArg1) => TResult;

/**
 * Function definition with one mandatory argument, rest argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Func1Rest<TResult = unknown, TArg1 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, ...rest: TRest) => TResult;

/**
 * Function definition with two arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 */
export type Func2<TResult = unknown, TArg1 = unknown, TArg2 = unknown> = (arg1: TArg1, arg2: TArg2) => TResult;

/**
 * Function definition with two mandatory arguments, rest argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Func2Rest<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, ...rest: TRest) => TResult;

/**
 * Function definition with three arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 */
export type Func3<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3) => TResult;

/**
 * Function definition with three mandatory arguments, rest argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Func3Rest<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, ...rest: TRest) => TResult;

/**
 * Function definition with four arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 */
export type Func4<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4) => TResult;

/**
 * Function definition with four mandatory arguments, rest argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Func4Rest<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, ...rest: TRest) => TResult;

/**
 * Function definition with five arguments and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TArg5 - Type of fifth parameter
 */
export type Func5<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TArg5 = unknown> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5) => TResult;

/**
 * Function definition with five mandatory arguments, rest argument and return type
 * @typeParam TResult - Return type of function
 * @typeParam TArg1 - Type of first parameter
 * @typeParam TArg2 - Type of second parameter
 * @typeParam TArg3 - Type of third parameter
 * @typeParam TArg4 - Type of fourth parameter
 * @typeParam TArg5 - Type of fifth parameter
 * @typeParam TRest - Type of rest parameter
 */
export type Func5Rest<TResult = unknown, TArg1 = unknown, TArg2 = unknown, TArg3 = unknown, TArg4 = unknown, TArg5 = unknown, TRest extends Array<unknown> = unknown[]> = (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, ...rest: TRest) => TResult;

