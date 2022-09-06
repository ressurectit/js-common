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
        const timeout = Symbol('ɵTimeout');
        const originalValue: Func = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @CallOnce() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = function(this: {[key: symbol]: number|null}, ...args: unknown[]): void
        {
            if(isPresent(this[timeout]))
            {
                return;
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

            originalValue.apply(this, args);

            this[timeout] = setTimeout(() =>
            {
                if(isPresent(this[timeout]))
                {
                    clearTimeout(this[timeout]);
                }
                
                this[timeout] = null;
            }, time) as any;
        };

        return descriptor;
    };
}