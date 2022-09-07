import {PromiseOr} from '../types/async';
import {Action1, Func} from '../types/functions';
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
        const resolve = Symbol('ɵResolve');
        const result = Symbol('ɵResult');
        const originalValue: Func<any> = descriptor.value ?? descriptor.get?.();

        if(!isFunction(originalValue))
        {
            throw new Error(`Unable to apply @DebounceCall() decorator to '${propertyKey.toString()}', it is not a method.`);
        }

        descriptor.value = function<TResult>(this: {[timeout]: number|null, [resolve]: Action1<TResult|undefined>, [result]: Promise<TResult|undefined>}, ...args: unknown[]): Promise<TResult|undefined>
        {
            //result variable does not exists
            if(!(resolve in this) && !(result in this))
            {
                let resolveFn: Action1<TResult|undefined>|undefined;
                const promise = new Promise<TResult|undefined>(resolve => resolveFn = resolve);

                Reflect.defineProperty(this,
                                       resolve,
                                       {
                                           writable: true,
                                           value: resolveFn,
                                       });

                Reflect.defineProperty(this,
                                       result,
                                       {
                                           writable: true,
                                           value: promise,
                                       });
            }

            

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

            this[timeout] = setTimeout(async () =>
            {
                this[resolve](await originalValue.apply<any, any[], PromiseOr<TResult>>(this, args));
                this[result] = new Promise<TResult|undefined>(resolveFn => this[resolve] = resolveFn);
                this[timeout] = null;
            }, delay) as any;

            return this[result];
        };

        return descriptor;
    };
}