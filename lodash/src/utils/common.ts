import {isArray, mergeWith} from 'lodash-es';

/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource>(object: TObject, source: TSource): TObject & TSource
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2
export function deepCopyWithArrayOverride<TResult = unknown>(object: unknown, ...otherArgs: unknown[]): TResult
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return mergeWith(object, ...[...otherArgs, (objValue: any, srcValue: any) =>
    {
        if (isArray(objValue))
        {
            return srcValue;
        }
    }]);
}
