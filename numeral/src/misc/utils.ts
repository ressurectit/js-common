import {RoundingFunction} from './types';

/* eslint-disable prefer-rest-params */
export function isNaN(value: unknown): boolean
{
    return typeof value === 'number' && isNaN(value);
}

export function includes(string: string, search: string)
{
    return string.indexOf(search) !== -1;
}

export function insert(string: string, subString: string, start: number)
{
    return string.slice(0, start) + subString + string.slice(start);
}

export function reduce(this: Array<unknown>, array: Array<unknown>, callback: Function)
{
    if (this === null) 
    {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof callback !== 'function') 
    {
        throw new TypeError(callback + ' is not a function');
    }

    const t = Object(array),
          len = t.length >>> 0;
    let k = 0,
        value;

    if (arguments.length === 3) 
    {
        value = arguments[2];
    } 
    else 
    {
        while (k < len && !(k in t)) 
        {
            k++;
        }

        if (k >= len) 
        {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        value = t[k++];
    }

    for (; k < len; k++) 
    {
        if (k in t) 
        {
            value = callback(value, t[k], k, t);
        }
    }
    
    return value;
}

/**
 * Computes the multiplier necessary to make x >= 1,
 * effectively eliminating miscalculations caused by
 * finite precision.
 */
export function multiplier(x: number)
{
    const parts = x.toString().split('.');

    return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
}

/**
 * Given a variable number of arguments, returns the maximum
 * multiplier that must be used to normalize an operation involving
 * all of them.
 */
export function correctionFactor()
{
    const args = Array.prototype.slice.call(arguments);

    return args.reduce(function(accum, next)
    {
        const mn = multiplier(next);

        return accum > mn ? accum : mn;
    }, 1);
}

/**
 * Implementation of toFixed() that treats floats more like decimals
 *
 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
 * problems for accounting- and finance-related software.
 */
export function toFixed(value: number, maxDecimals: number, roundingFunction: RoundingFunction, optionals?: number)
{
    const splitValue = value.toString().split('.'),
          minDecimals = maxDecimals - (optionals || 0);
    let boundedPrecision,
        optionalsRegExp,
        output;

    // Use the smallest precision value possible to avoid errors from floating point representation
    if (splitValue.length === 2)
    {
        boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
    }
    else
    {
        boundedPrecision = minDecimals;
    }

    const power = Math.pow(10, boundedPrecision);

    // Multiply up by precision, round accurately, then divide and use native toFixed():
    output = (roundingFunction(value + 'e+' + boundedPrecision as any) / power).toFixed(boundedPrecision);

    if (optionals && (optionals > maxDecimals - boundedPrecision))
    {
        optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
        output = output.replace(optionalsRegExp, '');
    }

    return output;
}