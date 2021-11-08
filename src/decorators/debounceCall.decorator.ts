import {Func} from '../types/functions';
import {isFunction, isPresent} from '../utils/lang';

/**
 * Adds special functionality to method call, that debounce method call for specified time
 * @param delay - Number of miliseconds that delays function call
 */
export function DebounceCall(delay: number): MethodDecorator
{
    return function(_target: Object, propertyKey: string|symbol, descriptor: PropertyDescriptor)
    {
        let timeout: number;
        const originalValue: Func = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @DebounceCall() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = function(...args: unknown[]): void
        {
            if(isPresent(timeout))
            {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() =>
            {
                originalValue.apply(this, args);
            }, delay) as any;
        };

        return descriptor;
    };
}