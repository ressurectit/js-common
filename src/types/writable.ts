/**
 * Returns a writable type version of type.
 */
export type Writable<T> = 
{
    -readonly [K in keyof T]: T[K];
};
