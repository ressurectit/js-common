import {lastValueFrom as rxjsLastValueFrom, Observable} from 'rxjs';

/**
 * Method calls rxjs `lastValueFrom` with empty value `undefined` or provided emptyValue
 * @param source - Observable source to be processed
 * @param emptyValue - Empty value that is returned in case of `EmptyError`
 */
export function lastValueFrom<TResult, TEmpty = undefined>(source: Observable<TResult>, emptyValue?: TEmpty): Promise<TResult|TEmpty>
{
    return rxjsLastValueFrom<TResult, TEmpty>(source, {defaultValue: emptyValue as TEmpty});
}
