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
        const timeout = Symbol('ɵTimeout');
        const originalValue: Func = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @DebounceCall() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = function(this: {[key: symbol]: number|null}, ...args: unknown[]): void
        {
            if(isPresent(this[timeout]))
            {
                clearTimeout(this[timeout]);
            }

            //timeout variable does not exists
            if(!(timeout in this))
            {
                Reflect.defineProperty(this,
                                       timeout,
                                       {
                                           writable: true,
                                           value: null,
                                       });
            }

            this[timeout] = setTimeout(() =>
            {
                originalValue.apply(this, args);
                this[timeout] = null;
            }, delay) as any;
        };

        return descriptor;
    };
}