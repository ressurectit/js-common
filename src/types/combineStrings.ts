/**
 * Type that combines unions of strings
 */
export type CombineStrings<TProp, TProps> = 
TProp extends string 
    ? TProps extends string 
        ? `${TProp}.${TProps}`
        : never
    : never;