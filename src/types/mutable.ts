/**
 * Returns a mutable type version of type.
 */
export type Mutable<T extends {[x: string]: unknown}, K extends string> = 
{
    [P in K]: T[P];
};
