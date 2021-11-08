import {Dictionary} from '../types';

/**
 * Normalize strings, removes accent
 * @param str - String to be normalized
 * @param charMap - CharMap used for normalization
 */
export function normalize(str: string, charMap: Dictionary<string>)
{
    Object.keys(charMap).forEach(chars =>
    {
        let normalized = charMap[chars];
        let regex = new RegExp('[' + chars + ']', 'gi');

        str = str.replace(regex, normalized);
    });

    return str;
}