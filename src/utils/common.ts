import * as extendLib from 'extend';

import {isPresent} from './lang';

/**
 * Reverse current string and returns new reverse string
 * @param  {string} str String to be reversed
 * @returns string Reverse string
 */
export function reverseString(str: string): string
{
    return str.split("").reverse().join("");
}
    
/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param  {boolean|Object} deepOrObject Object to be extended or indication that deep copy should be performed
 * @param  {Object[]} objectN Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend<TResult>(deepOrObject: boolean | Object, ...objectN: Object[]): TResult;
export function extend(deepOrObject: boolean | Object, ...objectN: Object[]): Object
{
    return extendLib.apply(null, [deepOrObject, ...objectN]);
}
    
/**
 * Merges properties of two separate object into new third one
 * @param  {{[key: string]: any}} source1 First source object 
 * @param  {{[key: string]: any}} source2 Second source object
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
 * @param  {number} length Length of generated string
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
 * @param  {string} text Text to be converted
 */
export function firstToLowerCase(text: string)
{
    return text.charAt(0).toLowerCase() + text.substr(1);
}

/**
 * Gets indication whether is child descendand of parent
 * @param parent Parent to be tested
 * @param child Child to be looked for
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
 * @param element Html element which offset is counted
 * @param doc Html document to be used for extracting scroll offset
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
 * @param html Html string to be converted to DOM
 * @param doc Optional html document to be used
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