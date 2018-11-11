export function isPresent(obj: any): boolean
{
    return obj !== undefined && obj !== null;
}

export function isBlank(obj: any): boolean
{
    return obj === undefined || obj === null;
}

export function isBoolean(obj: any): boolean
{
    return typeof obj === 'boolean';
}

export function isNumber(obj: any): boolean
{
    return typeof obj === 'number';
}

export function isString(obj: any): obj is string
{
    return typeof obj === 'string';
}

export function isFunction(obj: any): boolean
{
    return typeof obj === 'function';
}

export function isType(obj: any): boolean
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

export function isArray(obj: any): boolean
{
    return Array.isArray(obj);
}

export function isDate(obj: any): obj is Date
{
    return obj instanceof Date && !isNaN(obj.valueOf());
}

export function noop()
{
}

export function normalizeBlank(obj: Object): any
{
    return isBlank(obj) ? null : obj;
}

export function isJsObject(o: any): boolean
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

export function isEmptyObject(obj: any)
{
    var name;

    for (name in obj)
    {
        return false;
    }

    return true;
}