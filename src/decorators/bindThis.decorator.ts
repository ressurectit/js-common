import {isFunction} from '../utils';

/**
 * Binds function to this, object instance where is defined, it is importat to place it in correct order with other decorators, usually should be first
 */
export function BindThis(_target: Object, propertyKey: string, descriptor: PropertyDescriptor)
{
    let originalValue: Function = descriptor.value ?? descriptor.get();

    if(!isFunction(originalValue))
    {
        throw new Error(`Unable to apply @BindThis decorator to '${propertyKey}', it is not a method.`);
    }

    return {
        configurable: true,
        get(this: any): any
        {
            const bound: any = originalValue.bind(this);

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