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
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 * @param source4 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 * @param source4 - Object used for extension
 * @param source5 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3, TSource4, TSource5>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, source5: TSource5): TObject & TSource1 & TSource2 & TSource3 & TSource4 & TSource5
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 * @param source4 - Object used for extension
 * @param source5 - Object used for extension
 * @param source6 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3, TSource4, TSource5, TSource6>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, source5: TSource5, source6: TSource6): TObject & TSource1 & TSource2 & TSource3 & TSource4 & TSource5 & TSource6
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 * @param source4 - Object used for extension
 * @param source5 - Object used for extension
 * @param source6 - Object used for extension
 * @param source7 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, source5: TSource5, source6: TSource6, source7: TSource7): TObject & TSource1 & TSource2 & TSource3 & TSource4 & TSource5 & TSource6 & TSource7
/**
 * Performs deep copy of object with arrays that are not merged but overrided with latest value
 * @param object - Object to be extended
 * @param source1 - Object used for extension
 * @param source2 - Object used for extension
 * @param source3 - Object used for extension
 * @param source4 - Object used for extension
 * @param source5 - Object used for extension
 * @param source6 - Object used for extension
 * @param source7 - Object used for extension
 * @param source8 - Object used for extension
 */
export function deepCopyWithArrayOverride<TObject, TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7, TSource8>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, source5: TSource5, source6: TSource6, source7: TSource7, source8: TSource8): TObject & TSource1 & TSource2 & TSource3 & TSource4 & TSource5 & TSource6 & TSource7 & TSource8
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
