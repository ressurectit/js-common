import {NumeralJSFormat} from '../interfaces';
import {RoundingFunction} from '../misc/types';
import {includes} from '../misc/utils';
import {Numeral} from '../types/numeral';

export const bpsFormat: NumeralJSFormat = 
{
    regexps: 
    {
        format: /(BPS)/,
        unformat: /(BPS)/
    },
    format: function(val: unknown, format: string, roundingFunction: RoundingFunction): string
    {
        let value = val as number;
        let output;
        const space = includes(format, ' BPS') ? ' ' : '';

        value = value * 10000;

        // check for space before BPS
        format = format.replace(/\s?BPS/, '');

        output = Numeral._utils.numberToFormat(value, format, roundingFunction);

        if (includes(output, ')')) 
        {
            output = output.split('');

            output.splice(-1, 0, space + 'BPS');

            output = output.join('');
        }
        else
        {
            output = output + space + 'BPS';
        }

        return output;
    },
    unformat: function(string) 
    {
        return +(Numeral._utils.stringToNumber(string) * 0.0001).toFixed(15);
    }
};
