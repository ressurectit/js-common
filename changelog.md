# Changelog

## Version 1.1.0

- added function `flatMapArray` that performs flatMap over array
- added functions `serializeToUrlQuery`, `deserializeFromUrlQuery` that handle object serialization and deserialization into query string
- added support for `CommonJs` output

## Version 1.0.3

- added function `format` for formatting string using substitution *%s*

## Version 1.0.2

- added support for `jsDevMode` debug variable
- added function for defining global variables `globalDefine`

## Version 1.0.1

- added method `getEnumValues` for extraction of `ValueNamePair[]` from any `enum` type
- added method `getValue` which allows extract value of object using `string` expression
- added method `setValue` which allows to set value to object using `string` expression

## Version 1.0.0
 
- Initial version of library
- added classes `Encoder` and `Paginator`
- added enum `OrderByDirection`
- added types `Dictionary`, `StringDictionary` and `ValueNamePair`
- added util methods `reverseString`, `extend`, `merge`, `generateId`, `firstToLowerCase`, `isDescendant`, `offset`, `htmlToElement`, `isPresent`, `isBlank`, `isBoolean`, `isNumber`, `isString`, `isFunction`, `isType`, `isStringMap`, `isStrictStringMap`, `isArray`, `isDate`, `noop`, `normalizeBlank`, `isJsObject`, `isPrimitive`, `hasConstructor`, `isEmptyObject`
- added const `nameof`