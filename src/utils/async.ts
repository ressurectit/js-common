import {PromiseOr} from '../types/async';

/**
 * Resolves `PromiseOr` value
 * @param value - Value to be solved
 */
export async function resolvePromiseOr<TResult>(value: PromiseOr<TResult>): Promise<TResult>
{
    if(value instanceof Promise)
    {
        return await value;
    }

    return value;
}
