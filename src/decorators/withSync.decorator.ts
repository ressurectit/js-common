import {Func, NoopAction} from '../types/functions';
import {isFunction} from '../utils/lang';

/**
 * Adds special functionality to async method call, that allows only to call this method only when previous execution was finished
 */
export function WithSync(): MethodDecorator
{
    return function(_target: Object, propertyKey: string|symbol, descriptor: PropertyDescriptor)
    {
        const sync = Symbol('ɵSync');
        const originalValue: Func<any> = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @WithSync() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = async function<TResult>(this: {[key: symbol]: Promise<void>}, ...args: unknown[]): Promise<TResult>
        {
            //sync variable does not exists
            if(!(sync in this))
            {
                Reflect.defineProperty(this,
                                       sync,
                                       {
                                           writable: true,
                                           value: Promise.resolve(),
                                       });
            }

            const syncPromise = this[sync];
            let syncResolve: NoopAction|undefined;
            this[sync] = new Promise(resolve => syncResolve = resolve);
            await syncPromise;

            const result = await originalValue.apply<any, any[], TResult>(this, args);

            syncResolve?.();

            return result;
        };

        return descriptor;
    };
}