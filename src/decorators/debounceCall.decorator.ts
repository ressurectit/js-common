import {isFunction, isPresent} from '../utils';

/**
 * Adds special functionality to method call, that debounce method call for specified time
 * @param delay - Number of miliseconds that delays function call
 */
export function DebounceCall(delay: number): MethodDecorator
{
    return function(_target: object, propertyKey: string, descriptor: PropertyDescriptor)
    {
        let timeout: number;
        let originalValue: Function = descriptor.value ?? descriptor.get();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @DebounceCall() decorator to '${propertyKey}', it is not a method.`);
        }

        descriptor.value = function()
        {
            let args = arguments;

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