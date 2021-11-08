import {Func} from '../types/functions';
import {isFunction, isPresent} from '../utils/lang';

/**
 * Method is called only once for specified time, other calls during this time are blocked and it does nothing and returns null
 * @param time - Number of miliseconds which specifies period while are calls to this method blocked after first call
 */
export function CallOnce(time: number): MethodDecorator
{
    return function(_target: Object, propertyKey: string|symbol, descriptor: PropertyDescriptor)
    {
        let timeout: number|null;
        const originalValue: Func = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @CallOnce() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = function(...args: unknown[]): void
        {
            if(isPresent(timeout))
            {
                return;
            }

            originalValue.apply(this, args);

            timeout = setTimeout(() =>
            {
                if(isPresent(timeout))
                {
                    clearTimeout(timeout);
                }
                
                timeout = null;
            }, time) as any;
        };

        return descriptor;
    };
}