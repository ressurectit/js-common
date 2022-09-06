import {EmptyError, lastValueFrom, Observable} from 'rxjs';
import {PromiseObservableOr} from '../types/async';

/**
 * Resolves `PromiseObservableOr` value, if value is Observable then can be completed without value and undefined is resolved
 * @param value - Value to be solved
 */
export function resolvePromiseObservableOr<TResult>(value: PromiseObservableOr<TResult>): Promise<TResult|undefined>
{
    return new Promise((resolve, reject) =>
    {
        if(value instanceof Observable)
        {
            value = lastValueFrom(value);
        }

        if(value instanceof Promise)
        {
            value
                .then(resolve)
                .catch(error =>
                {
                    //handles observable that completes without value
                    if(error instanceof EmptyError)
                    {
                        resolve(undefined);

                        return;
                    }

                    reject(error);
                });

            return;
        }
        
        resolve(value);
    });
}
