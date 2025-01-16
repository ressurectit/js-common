import extendLib from 'extend';
import {Dictionary} from '@jscrpt/common';

/**
 * Extends target object with source
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source - Object that will be used for extending
 */
export function extend<T, U>(deep: boolean, target: T, source: U): T & U;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 */
export function extend<T, U, V>(deep: boolean, target: T, source1: U, source2: V): T & U & V;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 */
export function extend<T, U, V, W>(deep: boolean, target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 * @param source4 - Object that will be used for extending
 */
export function extend<T, U, V, W, X>(deep: boolean, target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source - Object that will be used for extending
 */
export function extend<T, U>(target: T, source: U): T & U;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 */
export function extend<T, U, V>(target: T, source1: U, source2: V): T & U & V;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 */
export function extend<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 * @param source4 - Object that will be used for extending
 */
export function extend<T, U, V, W, X>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param deepOrObject - Object to be extended or indication that deep copy should be performed
 * @param objectN - Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend<TResult>(deepOrObject: boolean | Dictionary<any>, ...objectN: Dictionary<any>[]): TResult;
/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param deepOrObject - Object to be extended or indication that deep copy should be performed
 * @param objectN - Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend(deepOrObject: boolean | Dictionary<any>, ...objectN: Dictionary<any>[]): Dictionary
{
    return extendLib.apply(null, [deepOrObject, ...objectN]);
}