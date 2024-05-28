import {isFunction} from '@jscrpt/common';
import {bpsFormat} from '../formats/bps';
import {NumeralJSFormat, NumeralJSFormats, NumeralJSLocale, NumeralJSLocales, NumeralJSOptions, NumeralJSUtils} from '../interfaces';
import {RegisterType, RoundingFunction} from '../misc/types';
import {includes, toFixed} from '../misc/utils';

const defaults: NumeralJSOptions =
{
    currentLocale: 'en',
    zeroFormat: null,
    nullFormat: null,
    defaultFormat: '0,0',
    scalePercentBy100: true
};

/**
 * Class that represents Numeral object
 */
export class Numeral<TInput = unknown>
{
    //######################### private static properties #########################

    private static _options: NumeralJSOptions =
    {
        currentLocale: defaults.currentLocale,
        zeroFormat: defaults.zeroFormat,
        nullFormat: defaults.nullFormat,
        defaultFormat: defaults.defaultFormat,
        scalePercentBy100: defaults.scalePercentBy100
    };

    private static _formats: NumeralJSFormats = {};

    private static _locales: NumeralJSLocales = {};

    public static _utils: NumeralJSUtils =
    {
        numberToFormat(value: number, format: string, roundingFunction: RoundingFunction): string
        {
            const billion = 1000000000,
                  million = 1000000,
                  thousand = 1000,
                  locale = Numeral.locales[Numeral.options.currentLocale],
                  trillion = 1000000000000;

            let negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                int,
                precision,
                signed,
                output;
    
            // make sure we never format a null value
            value = value || 0;
    
            const abs = Math.abs(value);
    
            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (includes(format, '(')) 
            {
                negP = true;
                format = format.replace(/[(|)]/g, '');
            } 
            else if (includes(format, '+') || includes(format, '-')) 
            {
                signed = includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[+|-]/g, '');
            }
    
            // see if abbreviation is wanted
            if (includes(format, 'a')) 
            {
                abbrForce = format.match(/a(k|m|b|t)?/);
    
                abbrForce = abbrForce ? abbrForce[1] : false;
    
                // check for space before abbreviation
                if (includes(format, ' a')) 
                {
                    abbr = ' ';
                }
    
                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');
    
                if (abs >= trillion && !abbrForce || abbrForce === 't') 
                {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                }
                else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') 
                {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                }
                else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') 
                {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                }
                else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') 
                {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }
    
            // check for optional decimals
            if (includes(format, '[.]')) 
            {
                optDec = true;
                format = format.replace('[.]', '.');
            }
    
            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            const thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;
    
            if (precision) 
            {
                if (includes(precision, '[')) 
                {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                }
                else 
                {
                    decimal = toFixed(value, precision.length, roundingFunction);
                }
    
                int = decimal.split('.')[0];
    
                if (includes(decimal, '.')) 
                {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                }
                else 
                {
                    decimal = '';
                }
    
                if (optDec && Number(decimal.slice(1)) === 0) 
                {
                    decimal = '';
                }
            }
            else 
            {
                int = toFixed(value, 0, roundingFunction);
            }
    
            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) 
            {
                int = String(Number(int) / 1000);
    
                switch (abbr) 
                {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }
    
    
            // format number
            if (includes(int, '-')) 
            {
                int = int.slice(1);
                neg = true;
            }
    
            if (int.length < leadingCount) 
            {
                for (let i = leadingCount - int.length; i > 0; i--) 
                {
                    int = '0' + int;
                }
            }
    
            if (thousands > -1) 
            {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }
    
            if (format.indexOf('.') === 0) 
            {
                int = '';
            }
    
            output = int + decimal + (abbr ? abbr : '');
    
            if (negP) 
            {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            }
            else 
            {
                if (signed >= 0) 
                {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                }
                else if (neg) 
                {
                    output = '-' + output;
                }
            }
    
            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber(string: string): number
        {
            const locale = Numeral.locales[Numeral.options.currentLocale];
            const stringOriginal = string;
            const abbreviations = 
            {
                thousand: 3,
                million: 6,
                billion: 9,
                trillion: 12
            };

            let abbreviation,
                value,
                regexp;
    
            if (Numeral.options.zeroFormat && string === Numeral.options.zeroFormat) 
            {
                value = 0;
            } 
            else if (Numeral.options.nullFormat && string === Numeral.options.nullFormat || !string.replace(/[^0-9]+/g, '').length) 
            {
                value = null;
            }
            else 
            {
                value = 1;
    
                if (locale.delimiters.decimal !== '.') 
                {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }
    
                for (abbreviation in abbreviations) 
                {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');
    
                    if (stringOriginal.match(regexp)) 
                    {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }
    
                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;
    
                // remove non numbers
                string = string.replace(/[^0-9.]+/g, '');
    
                value *= Number(string);
            }
    
            return value as any;
        },
    };

    //######################### public static properties #########################

    public static get version(): string
    {
        return '2.0.6';
    }

    public static get options(): NumeralJSOptions
    {
        return Numeral._options;
    }

    public static get formats(): NumeralJSFormats
    {
        return Numeral._formats;
    }

    public static get locales(): NumeralJSLocales
    {
        return Numeral._locales;
    }

    public static get utils(): NumeralJSUtils
    {
        return Numeral._utils;
    }

    //######################### private fields #########################

    private _value: number|null;

    private _input: TInput;

    //######################### constructor #########################

    constructor(input: TInput, number: number)
    {
        this._input = input;
        this._value = number;
    }

    //######################### public methods #########################

    public value(): number|null
    {
        return this._value;
    }

    public input(): TInput
    {
        return this._input;
    }

    //######################### public static methods #########################

    public static isNumeral(value: unknown): value is Numeral
    {
        return value instanceof Numeral;
    }

    /**
     * This function sets the current locale.  If no arguments are passed in,
     * it will simply return the current global locale key.
     */
    public static locale(key?: string): string
    {
        if (key)
        {
            Numeral.options.currentLocale = key.toLowerCase();
        }

        return Numeral.options.currentLocale;
    }

    /**
     * This function provides access to the loaded locale data.  If
     * no arguments are passed in, it will simply return the current
     * global locale object.
     *
     * @param key - Locale key, e.g 'es' for a spanish locale definition
     */
    public static localeData(key?: string): NumeralJSLocale
    {
        if (!key)
        {
            return Numeral.locales[Numeral.options.currentLocale];
        }

        key = key.toLowerCase();

        if (!Numeral.locales[key])
        {
            throw new Error('Unknown locale : ' + key);
        }

        return Numeral.locales[key];
    }

    /**
     * This function resets the configuration to all the defaults
     */
    public static reset(): void
    {
        const keys = Object.keys(defaults);

        for (const property of keys)
        {
            const prop = property as keyof NumeralJSOptions;

            (Numeral.options as any)[prop] = defaults[prop];
        }
    }

    public static zeroFormat(format: string): void
    {
        Numeral.options.zeroFormat = typeof(format) === 'string' ? format : null;
    }

    public static nullFormat(format: string): void
    {
        Numeral.options.nullFormat = typeof(format) === 'string' ? format : null;
    }

    public static defaultFormat(format: string): void
    {
        Numeral.options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    }

    /**
     * Registers a language definition or a custom format definition.
     *
     * @param what - Allowed values are: either 'format' or 'locale'
     * @param key - The key of the registerd type, e.g. 'de' for a german locale definition
     * @param value - The locale definition or the format definitiion
     */
    public static register(what: RegisterType, key: string, value: NumeralJSLocale|NumeralJSFormat): NumeralJSLocale|NumeralJSFormat
    {
        what = what.toLowerCase();

        if (this[type + 's'][what])
        {
            throw new TypeError(what + ' ' + type + ' already registered.');
        }

        this[type + 's'][what] = format;

        return format;
    }

    public static validate(val: any, culture: any): boolean
    {
        let _thousandSep,
            _valArray,
            localeData,
            temp;
    
        //coerce val to string
        if (typeof val !== 'string') 
        {
            val += '';
    
            if (console.warn) 
            {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }
    
        //trim whitespaces from either sides
        val = val.trim();
    
        //if val is just digits return true
        if (val.match(/^\d+$/)) 
        {
            return true;
        }
    
        //if val is empty return false
        if (val === '') 
        {
            return false;
        }
    
        //get the decimal and thousands separator from numeral.localeData
        try 
        {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = Numeral.localeData(culture);
        }
        catch (e)
        {
            localeData = Numeral.localeData(Numeral.locale());
        }
    
        //setup the delimiters and currency symbol based on culture/locale
        const _currSymbol = localeData.currency.symbol;
        const _abbrObj = localeData.abbreviations;
        const _decimalSep = localeData.delimiters.decimal;

        if (localeData.delimiters.thousands === '.') 
        {
            _thousandSep = '\\.';
        }
        else 
        {
            _thousandSep = localeData.delimiters.thousands;
        }
    
        // validating currency symbol
        temp = val.match(/^[^\d]+/);

        if (temp !== null) 
        {
            val = val.substr(1);

            if (temp[0] !== _currSymbol) 
            {
                return false;
            }
        }
    
        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);

        if (temp !== null) 
        {
            val = val.slice(0, -1);

            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) 
            {
                return false;
            }
        }
    
        const _thousandRegEx = new RegExp(_thousandSep + '{2}');
    
        if (!val.match(/[^\d.,]/g)) 
        {
            _valArray = val.split(_decimalSep);

            if (_valArray.length > 2) 
            {
                return false;
            }
            else 
            {
                if (_valArray.length < 2) 
                {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                }
                else 
                {
                    if (_valArray[0].length === 1) 
                    {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                    else 
                    {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }
    
        return false;
    }
}

/**
 * Factory function for numeral
 * @param input - Value to be converted
 */
export function numeral(input?: unknown): Numeral
{
    let value,
        kind,
        unformatFunction,
        regexp;

    if (Numeral.isNumeral(input)) 
    {
        value = input.value();
    }
    else if (input === 0 || typeof input === 'undefined') 
    {
        value = 0;
    } 
    else if (input === null || _.isNaN(input)) 
    {
        value = null;
    } 
    else if (typeof input === 'string') 
    {
        if (Numeral.options.zeroFormat && input === Numeral.options.zeroFormat) 
        {
            value = 0;
        }
        else if (Numeral.options.nullFormat && input === Numeral.options.nullFormat || !input.replace(/[^0-9]+/g, '').length) 
        {
            value = null;
        }
        else 
        {
            for (kind in Numeral.formats) 
            {
                const unformat = Numeral.formats[kind].regexps.unformat;
                regexp = isFunction(unformat) ? unformat() : unformat;

                if (regexp && input.match(regexp)) 
                {
                    unformatFunction = Numeral.formats[kind].unformat;

                    break;
                }
            }

            unformatFunction = unformatFunction || Numeral._.stringToNumber;

            value = unformatFunction(input);
        }
    }
    else 
    {
        value = Number(input)|| null;
    }

    return new Numeral(input, value);
}

Numeral.register('format', 'bps', bpsFormat);