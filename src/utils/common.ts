import extendLib from 'extend';

import {isBlank, isJsObject, isPresent} from './lang';
import {AsDictionary, Dictionary} from '../types/dictionaries';
import {Enum} from '../types/enums';
import {ValueNamePair} from '../types/valueNamePair';

/**
 * Reverse current string and returns new reverse string
 * @param str - String to be reversed
 * @returns string Reverse string
 */
export function reverseString(str: string): string
{
    return str.split('').reverse().join('');
}

/**
 * Extends target object with source
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source - Object that will be used for extending
 */
export function extend<T, U>(deep: boolean, target: T, source: U): T & U;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 */
export function extend<T, U, V>(deep: boolean, target: T, source1: U, source2: V): T & U & V;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 */
export function extend<T, U, V, W>(deep: boolean, target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Extends target object with source objects
 * @param deep - Indication whether deep copy should be performed
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 * @param source4 - Object that will be used for extending
 */
export function extend<T, U, V, W, X>(deep: boolean, target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source - Object that will be used for extending
 */
export function extend<T, U>(target: T, source: U): T & U;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 */
export function extend<T, U, V>(target: T, source1: U, source2: V): T & U & V;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 */
export function extend<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Extends target object with source
 * @param target - Object that will extended
 * @param source1 - Object that will be used for extending
 * @param source2 - Object that will be used for extending
 * @param source3 - Object that will be used for extending
 * @param source4 - Object that will be used for extending
 */
export function extend<T, U, V, W, X>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param deepOrObject - Object to be extended or indication that deep copy should be performed
 * @param objectN - Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend<TResult>(deepOrObject: boolean | Dictionary<any>, ...objectN: Dictionary<any>[]): TResult;
/**
 * Extends one object with additional properties from other objects, supports deep extend
 * @param deepOrObject - Object to be extended or indication that deep copy should be performed
 * @param objectN - Objects that will be used for extending, if deep is used first here is target object
 * @returns Object Extended object with properties from other objects
 */
export function extend(deepOrObject: boolean | Dictionary<any>, ...objectN: Dictionary<any>[]): Dictionary
{
    return extendLib.apply(null, [deepOrObject, ...objectN]);
}

/**
 * Generates random string consisting from lowercase letters
 * @param length - Length of generated string
 * @returns number Generated string
 */
export function generateId(length: number): string
{
    let result = '';

    for(let x = 0; x < length; x++)
    {
        result += String.fromCharCode(Math.round(Math.random() * 25 + 97));
    }

    return result;
}

/**
 * Generates random string of specified length from possible characters
 * @param length - Length of generated string
 * @param possible - Possible characters used for generation of string
 */
export function generateRandomString(length: number, possible: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'): string
{
    let text = '';

    for (let i = 0;i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

/**
 * Converts string in that way that first letter will be lowerCase
 * @param text - Text to be converted
 */
export function firstToLowerCase(text: string): string
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
export function offset(element: HTMLElement, doc?: Document)
{
    doc = doc || document;

    const rect = element.getBoundingClientRect(),
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
export function htmlToElement(html: string, doc?: Document): HTMLElement
{
    let htmlDocument = document;

    if(isPresent(doc))
    {
        htmlDocument = doc;
    }

    const template = htmlDocument.createElement('template');
    html = html.trim();
    template.innerHTML = html;

    return template.content.firstChild as HTMLElement;
}

/**
 * Extract values from enum type
 * @param enumType - Enum type that will have extracted values
 */
export function getEnumValues<TEnum extends Enum>(enumType: TEnum): ValueNamePair[]
{
    const result: ValueNamePair[] = [];

    Object.keys(enumType).forEach(key =>
    {
        if(isNaN(+key))
        {
            return;
        }

        result.push(
        {
            value: key,
            name: enumType[+key]
        });
    });

    return result;
}

/**
 * Safely returns value from object property using string expression
 * @param object - Object which property value will be obtained
 * @param expression - Expression for obtaining value
 */
export function getValue<TValue = unknown>(object: Record<string, unknown>, expression: string): TValue
export function getValue(object: Record<string, any>, expression: string): unknown
{
    return expression.split('.').reduce((o, i) =>
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
export function setValue(object: Dictionary<any>, value: unknown, expression: string): void
{
    const parts = expression.split('.');

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

        object = object[part] = object[part] ?? {};
    });
}

/**
 * Formats string using '%s', to print '%s' you have to use '%%s'
 * @param str - String containing substitution constants
 * @param args - Arguments that are used for replacement
 */
export function format(str: string, ...args: unknown[]): string
{
    let i = 0;

    return str.replace(/((?!%).)%s/g, (_sub, substArgs) => `${substArgs[0]}${args[i++]}`).replace(/%%s/g, '%s');
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
 */
export function validHtmlId(id: string): string
{
    id = id.toLowerCase()
        .replace(/[\s]+/g, '-')
        .replace(/\./g, '')
        .replace(/^(\d)/g, 'x$1');

    id = normalizeAccent(id);

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

/**
 * Normalizes string, removing accent
 * @param value - String to be normalized
 */
export function normalizeAccent(value: string): string
{
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Converts instance of Class to equivalent Record type
 * @param instance - Instance which type to be converted
 * @typeparam TType - Type of instance
 */
export function asDictionary<TType>(instance: TType): AsDictionary<TType>
{
    return instance as AsDictionary<TType>;
}

/**
 * Maps all iterable property values of object to "this" bounded
 * @param this - Object which will be filled with new values
 * @param value - Object holding values that will be used for filling
 * @param all - Indication whether map only existing properties or everything
 */
export function mapValuesToThis(this: Dictionary<any>, value: Dictionary<any>|undefined|null, all: boolean = false): void
{
    if(!value)
    {
        return;
    }

    Object.keys(value).forEach(prop =>
    {
        if(value[prop] !== undefined && (all || (prop in this)))
        {
            this[prop] = value[prop];
        }
    });
}

/**
 * Briefly shows simple notification with simple text
 * @param show - Indication whether show notification
 * @param text - Text to be displayed, defaults to HMR finished text
 */
export function simpleNotification(show: boolean, text: string = 'HMR finished, app updated!'): void
{
    if (show)
    {
        let div: HTMLDivElement|null = document.createElement('div');
        div.style.position = 'absolute';
        div.style.zIndex = '54345';
        div.style.background = 'rgb(255, 255, 255) none repeat scroll 0% 0%';
        div.style.padding = '8px';
        div.style.fontWeight = 'bold';
        div.style.borderRadius = 'bold';
        div.style.color = 'rgb(21, 57, 255)';
        div.style.left = '47%';
        div.style.top = '11px';
        div.style.boxShadow = '0px 0px 4px rgb(170, 170, 170)';
        div.style.transition = 'all 500ms';
        div.style.opacity = '0';

        div.innerText = text;

        document.body.append(div);

        setTimeout(() => div!.style.opacity = '1', 50);

        setTimeout(() =>
        {
            if(div)
            {
                div.style.opacity = '0';

                setTimeout(() =>
                {
                    div!.remove();
                    div = null;
                }, 500);
            }
        }, 2000);
    }
}

/**
 * Transforms any string to colour code
 * @param str - String to be changed to colour code
 */
export function stringToColour(str: string): string
{
    let hash = 0;

    for (let i = 0; i < str.length; i++)
    {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let colour = '#';

    for (let i = 0; i < 3; i++)
    {
        const value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }

    return colour;
}

/**
 * Renders element into body directly or into container element
 * @param document - Html document instance
 * @param element - Html element that will be rendered
 * @param containerElementSelector - Css selector for container element, if not specified renders into body, css selector must contain element name and optionally css classes
 */
export function renderToBody(document: Document, element: HTMLElement, containerElementSelector?: string|null): void
{
    //render to specified target element
    if(containerElementSelector)
    {
        let containerElement = document.querySelector(`body ${containerElementSelector}`);

        //render to specified target element
        if(!containerElement)
        {
            const [name, ...css] = containerElementSelector.split('.');

            containerElement = document.createElement(name);

            if(!name)
            {
                throw new Error('renderToBody: missing name of element');
            }

            if(css?.length)
            {
                for(const cssClass of css)
                {
                    containerElement.classList.add(cssClass);
                }
            }

            document.body.appendChild(containerElement);
        }

        containerElement.appendChild(element);
    }
    //render directly to body
    else
    {
        document.body.appendChild(element);
    }
}

/**
 * Formats input string using no parameters, returns original input
 * @param input - Input that will be formatted
 */
export function formatString(input: string|undefined|null, parameter?: null): string
/**
 * Formats input string using object holding formatting parameters
 * @param input - Input that will be formatted
 * @param parameter - Parameter as object which properties will be used for formatting
 *
 * ```
 * formatString('test {{val}}, {{test}} {{test.num}} {{@test}}, {{@(2)test}} {{@test.bool}}', {val: 3, test: {bool: true, num: 10}});
 * ```
 *
 * displays `{{val}}` as direct stringified value of '`val`' property
 * displays `{{test}}` as direct strinfigied value of '`test`' property
 * displays `{{test.num}}` as direct strinfigied value of '`test`' property and its subproperty '`num`'
 * displays `{{@test}}` as JSON strinfigied value of '`test`' property
 * displays `{{@(2)test}}` as JSON stringified value of '`test`' property with 2 spaces indentation (other supported spaces are 4 and 8)
 * displays `{{@test.bool}}` as JSON stringified value of '`test`' property and its subproperty '`bool`'
 */
export function formatString(input: string|undefined|null, parameter: Record<string, unknown>): string
/**
 * Formats input string using array holding formatting parameters
 * @param input - Input that will be formatted
 * @param parameter - Parameter as array which items will be used for formatting
 *
 * ```
 * formatString('test {{0}}, {{@1}}, {{@(2)1}}', [3, {bool: true, num: 10}])
 * ```
 *
 * displays `{{0}}` as direct stringified value of '`0`' index item
 * displays `{{@1}}` as JSON strinfigied value of '`0`' index item
 * displays `{{@(2)1}}` as JSON stringified value of '`0`' index item with 2 spaces indentation (other supported spaces are 4 and 8)
 */
export function formatString(input: string|undefined|null, ...parameters: unknown[]): string
export function formatString(input: string|undefined|null, ...parameters: unknown[]|[Record<string, unknown>]): string
{
    if(isBlank(input))
    {
        return '';
    }

    //formatting using object
    if(parameters.length == 1 && isJsObject(parameters[0]))
    {
        const parameter = parameters[0] as Record<string, unknown>;

        for(const prop in parameter)
        {
            input = input?.replace(new RegExp('\\{\\{' + prop + '((?:\\.[A-Za-z0-9$_]+)*)\\}\\}', 'g'), (_, ...args) =>
            {
                const expression = !args[0] ? prop : prop + args[0];

                return getValue<string>(parameter, expression);
            });

            input = input?.replace(new RegExp('\\{\\{@(?:\\(([2|4|8])\\))?' + prop + '((?:\\.[A-Za-z0-9$_]+)*)\\}\\}', 'g'), (_, ...args) =>
            {
                const expression = !args[1] ? prop : prop + args[1];

                if(isBlank(args[0]))
                {
                    return JSON.stringify(getValue(parameter, expression));
                }

                return JSON.stringify(getValue(parameter, expression), null, +args[0]);
            });
        }
    }
    //formatting using array of values
    else
    {
        //no formatting parameters
        if(!parameters.length)
        {
            return input;
        }

        for(let x = 0; x < parameters.length; x++)
        {
            input = input?.replace(new RegExp('\\{' + x + '\\}', 'g'), `${parameters[x]}`);
            input = input?.replace(new RegExp('\\{@(?:\\(([2|4|8])\\))?' + x + '\\}', 'g'), (_, ...args) =>
            {
                if(isBlank(args[0]))
                {
                    return JSON.stringify(parameters[x]);
                }

                return JSON.stringify(parameters[x], null, +args[0]);
            });
        }
    }

    return input;
}

/**
 * Tests whether is element input type checkbox
 * @param element - Element to be tested
 */
export function isCheckbox(element: EventTarget): element is HTMLInputElement
{
    return (element as HTMLInputElement).type === 'checkbox';
}

/**
 * Tests whether is element input type radio
 * @param element - Element to be tested
 */
export function isRadio(element: EventTarget): element is HTMLInputElement
{
    return (element as HTMLInputElement).type === 'radio';
}

/**
 * Tests whether is element input
 * @param element - Element to be tested
 */
export function isInput(element: EventTarget): element is HTMLInputElement
{
    return (element as HTMLInputElement).nodeName === 'INPUT';
}

/**
 * Tests whether is element select
 * @param element - Element to be tested
 */
export function isSelect(element: EventTarget): element is HTMLSelectElement
{
    return (element as HTMLSelectElement).nodeName === 'SELECT';
}

/**
 * Tests whether is element button
 * @param element - Element to be tested
 */
export function isButton(element: EventTarget): element is HTMLButtonElement
{
    return (element as HTMLButtonElement).nodeName === 'BUTTON';
}

/**
 * Tests whether is element anchor
 * @param element - Element to be tested
 */
export function isAnchor(element: EventTarget): element is HTMLAnchorElement
{
    return (element as HTMLAnchorElement).nodeName === 'A';
}