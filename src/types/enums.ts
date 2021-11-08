/**
 * Type that represents enum type
 */
export type Enum<E = unknown> = Record<keyof E, number | string> & {[k: number]: string};