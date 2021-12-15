import {Observable} from 'rxjs';
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
            value = value
                .toPromise();
        }

        if(value instanceof Promise)
        {
            value
                .then(resolve)
                .catch(error => reject(error));

            return;
        }
        
        resolve(value);
    });
}
