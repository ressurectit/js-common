import {RoundingFunction} from '../../misc/types';

export interface NumeralJSFormat 
{
    regexps: 
    {
        format: RegExp;
        unformat: RegExp|(() => RegExp);
    };
    format: (value: unknown, format: string, roundingFunction: RoundingFunction) => string;
    unformat: (value: string) => number;
}