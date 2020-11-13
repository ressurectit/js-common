/**
 * Tests whether is object not `null` and not `undefined` at the same time
 * @param obj - Object to be tested
 */
export function isPresent<TObj>(obj: TObj): obj is NonNullable<TObj>
{
    return obj !== undefined && obj !== null;
}

/**
 * Tests whether is object `null` or `undefined`
 * @param obj - Object to be tested
 */
export function isBlank(obj: any): obj is null|undefined
{
    return obj === undefined || obj === null;
}

/**
 * Tests whether is object instance of `boolean`
 * @param obj - Object to be tested
 */
export function isBoolean(obj: any): obj is boolean
{
    return typeof obj === 'boolean';
}

/**
 * Tests whether is object instance of number
 * @param obj - Object to be tested
 */
export function isNumber(obj: any): obj is number
{
    return typeof obj === 'number';
}

/**
 * Tests whether is object instance of string
 * @param obj - Object to be tested
 */
export function isString(obj: any): obj is string
{
    return typeof obj === 'string';
}

/**
 * Tests whether is object instance of function
 * @param obj - Object to be tested
 */
export function isFunction(obj: any): obj is Function
{
    return typeof obj === 'function';
}

export function isType(obj: any): obj is Function
{
    return isFunction(obj);
}

export function isStringMap(obj: any): obj is Object
{
    return typeof obj === 'object' && obj !== null;
}

const STRING_MAP_PROTO = Object.getPrototypeOf({});

export function isStrictStringMap(obj: any): boolean
{
    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}

export function isArray(obj: any): obj is Array<any>
{
    return Array.isArray(obj);
}

export function isDate(obj: any): obj is Date
{
    return obj instanceof Date && !isNaN(obj.valueOf());
}

export function noop(): void
{
}

export function normalizeBlank<TObj extends Object>(obj: TObj|undefined|null): TObj|null
{
    return isBlank(obj) ? null : obj;
}

export function isJsObject(o: any): o is Function|Object
{
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}

export function isPrimitive(obj: any): boolean
{
    return !isJsObject(obj);
}

export function hasConstructor(value: Object, type: any): boolean
{
    return value.constructor === type;
}

export function isEmptyObject(obj: any): boolean
{
    for (let _name in obj)
    {
        return false;
    }

    return true;
}