import {Dictionary} from '../types';

/**
 * Normalize strings, removes accent
 * @param str - String to be normalized
 * @param charMap - CharMap used for normalization
 */
export function normalize(str: string, charMap: Dictionary<string>): string
{
    Object.keys(charMap).forEach(chars =>
    {
        const normalized = charMap[chars];
        const regex = new RegExp('[' + chars + ']', 'gi');

        str = str.replace(regex, normalized);
    });

    return str;
}