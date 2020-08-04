import extendLib from 'extend';

import {isPresent} from './lang';
import {ValueNamePair} from '../types';
import {normalize} from '../normalizer';

/**
 * Reverse current string and returns new reverse string
 * @param str - String to be reversed
 * @returns string Reverse string
 */
export function reverseString(str: string): string
{
    return str.split("").reverse().join("");
}

/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param deepOrObject - Object to be extended or indication that deep copy should be performed
 * @param objectN - Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend<TResult>(deepOrObject: boolean | Object, ...objectN: Object[]): TResult;
export function extend(deepOrObject: boolean | Object, ...objectN: Object[]): Object
{
    return extendLib.apply(null, [deepOrObject, ...objectN]);
}

/**
 * Merges properties of two separate object into new third one
 * @param source1 - First source object
 * @param source2 - Second source object
 * @returns Object Object containing properties from source1 and source2 objects
 */
export function merge(source1: {[key: string]: any}, source2: {[key: string]: any}): Object
{
    var resultObj: {[key: string]: any} = {};

    for (var attrname in source1)
    {
        resultObj[attrname] = source1[attrname];
    }

    for (var attrname in source2)
    {
        resultObj[attrname] = source2[attrname];
    }

    return resultObj;
}

/**
 * Generates random string consisting from lowercase letters
 * @param length - Length of generated string
 * @returns number Generated string
 */
export function generateId(length: number)
{
    var result = "";

    for(var x = 0; x < length; x++)
    {
        result += String.fromCharCode(Math.round(Math.random() * 25 + 97));
    }

    return result;
}

/**
 * Converts string in that way that first letter will be lowerCase
 * @param text - Text to be converted
 */
export function firstToLowerCase(text: string)
{
    return text.charAt(0).toLowerCase() + text.substr(1);
}

/**
 * Gets indication whether is child descendand of parent
 * @param parent - Parent to be tested
 * @param child - Child to be looked for
 */
export function isDescendant(parent: HTMLElement, child: HTMLElement): boolean
{
    let node = child.parentNode;

    while (node != null)
    {
        if (node == parent)
        {
            return true;
        }

        node = node.parentNode;
    }

    return false;
}

/**
 * Computes offset of element against document
 * @param element - Html element which offset is counted
 * @param doc - Html document to be used for extracting scroll offset
 */
export function offset(element: HTMLElement, doc?: HTMLDocument)
{
    doc = doc || document;

    let rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || doc.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || doc.documentElement.scrollTop;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        bottom: rect.top + scrollTop + rect.height,
        right: rect.left + scrollLeft + rect.width
    };
}

/**
 * Converts html string into html DOM
 * @param html - Html string to be converted to DOM
 * @param doc - Optional html document to be used
 */
export function htmlToElement(html: string, doc?: HTMLDocument): HTMLElement
{
    let htmlDocument = document;

    if(isPresent(doc))
    {
        htmlDocument = doc;
    }

    let template = htmlDocument.createElement('template');
    html = html.trim();
    template.innerHTML = html;

    return template.content.firstChild as HTMLElement;
}

/**
 * Extract values from enum type
 * @param enumType - Enum type that will have extracted values
 */
export function getEnumValues(enumType: any): ValueNamePair[]
{
    let result: ValueNamePair[] = [];

    Object.keys(enumType).forEach(key =>
    {
        if(isNaN(+key))
        {
            return;
        }

        result.push(
        {
            value: key,
            name: enumType[key]
        });
    })

    return result;
}

/**
 * Safely returns value from object property using string expression
 * @param object - Object which property value will be obtained
 * @param expression - Expression for obtaining value
 */
export function getValue(object: any, expression: string): any
{
    return expression.split('.').reduce((o,i) =>
    {
        if(o)
        {
            return o[i];
        }

        return null;
    }, object);
}

/**
 * Sets value to objects property using string expression
 * @param object - Object which property value will be set
 * @param value - Value that will be set
 * @param expression - Expression for setting value
 */
export function setValue(object: any, value: any, expression: string): void
{
    let parts = expression.split('.');

    parts.forEach((part, index) =>
    {
        //last item value is assigned
        if(index == parts.length - 1)
        {
            if(isPresent(value))
            {
                object[part] = value;
            }

            return;
        }

        object = object[part] = object[part] || {};
    });
}

/**
 * Formats string using '%s', to print '%s' you have to use '%%s'
 * @param str - String containing substitution constants
 * @param args - Arguments that are used for replacement
 */
export function format(str: string, ...args: any[])
{
    let i = 0;

    return str.replace(/((?!%).)%s/g, (_sub, substArgs) => `${substArgs[0]}${args[i++]}`).replace(/%%s/g, "%s");
}

/**
 * Performs flatMap over provided array
 * @param array - Array to be reduced using flatMap
 */
export function flatMapArray<TItem>(array: TItem[][]): TItem[]
{
    return array.reduce((acc, x) => acc.concat(x), []);
}

/**
 * Serialize object to string that is usable as url query parameter
 * @param obj - Object to be serialized
 * @param replacer - Function that can be used for replacing provided values
 */
export function serializeToUrlQuery<TObj>(obj: TObj, replacer?: (this: any, key: string, value: any) => any): string
{
    return btoa(encodeURIComponent(JSON.stringify(obj, replacer)));
}

/**
 * Deserialize value from url query string into object
 * @param queryParamValue - Query param string value
 * @param reviver - Function that can be used for correctly deserializing value
 */
export function deserializeFromUrlQuery<TObj>(queryParamValue: string, reviver?: (this: any, key: string, value: any) => any): TObj
{
    return JSON.parse(decodeURIComponent(atob(queryParamValue)), reviver);
}

/**
 * Converts id to valid html id
 * @param id - Id that is going to be converted to valid html id
 * @param charMap - Character map used during normalization
 */
export function validHtmlId(id: string, charMap: Object = {}): string
{
    id = id.toLowerCase()
        .replace(/[\s]+/g, '-')
        .replace(/\./g, '')
        .replace(/^(\d)/g, 'x$1');

    id = normalize(id, charMap);

    return id;
}

/**
 * Checks whether is element overflown either horizontal, or vertical
 * @param element - Element to be tested for overflow
 */
export function isOverflown(element: HTMLElement): boolean
{
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
