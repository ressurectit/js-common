import {RoundingFunction} from '../../misc/types';

export interface NumeralJSUtils 
{
    numberToFormat: (value: number, format: string, roundingFunction: RoundingFunction) => string;
    stringToNumber: (string: string) => number;
}