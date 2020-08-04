# Changelog

## Version 1.2.0 (2020-08-04)

### Features

- added `isOverflown` function which checks whether has provided *element* overflow
- added `BindThis` decorator, which binds method to its parent class instance
- added `DebounceCall` decorator, which debounces call of method for specified time
- added `CallOnce` decorator, which calls method only once per specified time
- `Dictionary` extended with *generic type*, which defaults to `any`

## Version 1.1.1

- added `normalize` function used for removing accent from text
- added `NormalizationCharMaps` with `slovak` characters normalization
- added `validHtmlId` function used for transforming text to valid html id

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