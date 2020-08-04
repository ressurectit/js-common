import {isFunction, isPresent} from '../utils';

/**
 * Method is called only once for specified time, other calls during this time are blocked and it does nothing and returns null
 * @param time - Number of miliseconds which specifies period while are calls to this method blocked after first call
 */
export function CallOnce(time: number): MethodDecorator
{
    return function(_target: object, propertyKey: string, descriptor: PropertyDescriptor)
    {
        let timeout: number;
        let originalValue: Function = descriptor.value ?? descriptor.get();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @CallOnce() decorator to '${propertyKey}', it is not a method.`);
        }

        descriptor.value = function()
        {
            let args = arguments;

            if(isPresent(timeout))
            {
                return null;
            }

            originalValue.apply(this, args);

            timeout = setTimeout(() =>
            {
                clearTimeout(timeout);
                timeout = null;
            }, time) as any;
        };

        return descriptor;
    };
}