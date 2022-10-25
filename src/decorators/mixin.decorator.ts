import {MixinType} from '../types/mixinType';

/**
 * Uses specified class as class mixin, takes its methods and properties and merge them into target class
 * @param mixinClass - Mixin class to be used as mixin
 */
export function Mixin(mixinClass: MixinType<unknown>): ClassDecorator
{
    return function<TFunction extends Function> (target: TFunction): TFunction
    {
        const methodsAndProperties = Object.getOwnPropertyDescriptors(mixinClass.prototype);
        
        for(const name of Object.keys(methodsAndProperties).filter(name => name !== 'constructor'))
        {
            Object.defineProperty(target.prototype, name, methodsAndProperties[name]);
        }
        
        return target;
    };
}