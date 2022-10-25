/**
 * Allows to define property on object with specific options and default value
 * @param options - Options that can be set for property
 */
export function Property<TType = unknown>(options: Omit<TypedPropertyDescriptor<TType>, 'get'|'set'|'writable'> = {configurable: true, enumerable: true, value: undefined}): PropertyDecorator
{
    return function (target: Object, propertyKey: string|symbol): void
    {
        const backingField = Symbol(propertyKey.toString());

        Object.defineProperty(target, propertyKey,
        {
            configurable: options.configurable,
            enumerable: options.enumerable,
            get: function(this: {[key: symbol]: TType})
            {
                if(!Object.getOwnPropertyDescriptor(this, backingField))
                {
                    Object.defineProperty(this, backingField,
                    {
                        configurable: false,
                        enumerable: false,
                        writable: true,
                        value: options.value,
                    });
                }

                return this[backingField];
            },
            set: function(this: {[key: symbol]: TType}, value: TType)
            {
                if(!Object.getOwnPropertyDescriptor(this, backingField))
                {
                    Object.defineProperty(this, backingField,
                    {
                        configurable: false,
                        enumerable: false,
                        writable: true,
                        value: options.value,
                    });
                }

                this[backingField] = value;
            }
        });
    };
}