import {Func} from '../types';
import {isFunction} from '../utils';

/**
 * Binds function to this, object instance where is defined, it is importat to place it in correct order with other decorators, usually should be first
 */
export function BindThis(_target: Object, propertyKey: string|symbol, descriptor: PropertyDescriptor): TypedPropertyDescriptor<Func>
{
    const originalValue: Func = descriptor.value ?? descriptor.get?.();

    if(!isFunction(originalValue))
    {
        throw new Error(`Unable to apply @BindThis decorator to '${propertyKey.toString()}', it is not a method.`);
    }

    return {
        configurable: true,
        get(this: unknown): Func
        {
            const bound: Func = originalValue.bind(this);

            Object.defineProperty(this,
                                  propertyKey,
                                  {
                                      value: bound,
                                      configurable: true,
                                      writable: true
                                  });

            return bound;
        }
    };
}