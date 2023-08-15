import {CombineStrings} from './combineStrings';

/**
 * Recursively extracts property expressions for type and specified properties
 */
export type PropertyExpression<TType, TProps> = 
TProps extends Extract<keyof TType, string> 
    ? TType[TProps] extends string 
        ? TProps 
        : TType[TProps] extends number 
            ? TProps 
            : TType[TProps] extends boolean 
                ? TProps 
                : TType[TProps] extends Date 
                    ? TProps 
                    : TType[TProps] extends Array<unknown> 
                        ? TProps 
                        : TType[TProps] extends Object ? CombineStrings<TProps, TypePropertyExpressions<TType[TProps]>> : never
    : never;

/**
 * Extracts property expressions for type (object)
 */
export type TypePropertyExpressions<TType> = TType extends Object ? PropertyExpression<TType, keyof TType> : never;
