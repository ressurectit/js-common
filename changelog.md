# Changelog

## Version 3.0.0 (2022-09-06)

### Bug Fixes

- fixed `CallOnce` decorator
    - now correctly sets timeout to attached method and object
- fixed `DebounceCall` decorator
    - now correctly sets timeout to attached method and object

### Features

- new `Func1` type, that is function definition with one argument and return type
- new `Func2` type, that is function definition with two arguments and return type
- new `Func3` type, that is function definition with three arguments and return type
- new `Func4` type, that is function definition with four arguments and return type
- new `Func5` type, that is function definition with five arguments and return type
- new `Action1` type, that is function definition with one argument and no return type
- new `Action2` type, that is function definition with two arguments and no return type
- new `Action3` type, that is function definition with three arguments and no return type
- new `Action4` type, that is function definition with four arguments and no return type
- new `Action5` type, that is function definition with five arguments and no return type

### BREAKING CHANGES

- dropped support of `Node.js` version `12`
- minimal supported version of `rxjs` is now `7.5.0`
    - removed deprecated `toPromise` and replaced with `lastValueFrom`
- minimal supported version of `tslib` is now `2.4.0`
- removed redundant `resolvePromiseOr`, simple `await` is enough for `PromiseOr` value
- changed second parameter of `mapValuesToThis` to *nullable*, only change in typings

## Version 2.3.0 (2022-02-22)

### Features

- added new `simpleNotification` function, that briefly shows simple notification with simple text

## Version 2.2.0 (2021-12-16)

### Bug Fixes

- fixed `BindThis` now accepts any type of fuction, not only without parameters
- fixed `Action` now allows correctly to specify type of arguments
- fixed `Func` now allows correctly to specify type of arguments

### Features

- added `AsAnyDictionary` represents type that extracts class as type Record with property keys as index and any property values
- added `FuncSignature` type that extracts function signature from function type

## Version 2.1.0 (2021-12-15)

### Features

- added `mapValuesToThis` function that maps all iterable property values of object to "this" bounded
- added `Pageable` interface for paging
- added `PagedData` interface that is representation of data that are paged
- added `CssGlobal` type that represents css global values, usable for any css property
- added `CssOverflow` type that represents css overflow values
- added `CssPosition` type that represents css position values
- added `CssDisplay` type that represents css display values
- added `PromiseOr` type that represents pure value or value obtained by promise
- added `resolvePromiseOr` function that resolves `PromiseOr` value
- added *subpackage* `@jscrpt/common/rxjs`
- *subpackage* `@jscrpt/common/rxjs`
    - added `PromiseObservableOr` type that represents pure value or value obtained by promise or value obtained by Observable
    - added `resolvePromiseObservableOr` function that resolves `PromiseObservableOr` value, if value is Observable then can be completed without value and `undefined` is resolved

## Version 2.0.3 (2021-11-15)

### Bug Fixes

- fixed problem with `Node.js` usage from `import` `module`

## Version 2.0.2 (2021-11-10)

### Bug Fixes

- fixed problem with `BindThis` decorator which could not bind to function returning `Promise`

## Version 2.0.1 (2021-11-08)
### Bug Fixes

- fixed not working `Node.js` usage

## Version 2.0.0 (2021-11-08)

### Features

- added `NoopAction` type that represents function definition with no variables and no return type
- added `Action` type that represents function definition with variable arguments and no return type
- added `Func<TResult>` type that represents function definition with variable arguments and return type
- added `Enum<E>` type that represents enum type
- added `AsDictionary<TType>` represents type that extracts class as type Record with property keys as index and unknown property values
- added `asDictionary` function that converts instance of Class to equivalent Record type
- added better typings for `extend`

### BREAKING CHANGES

- dropped support of `Node.js <= 12.20`
- added strict compilation
- using latest package.json features
- removed `initializeJsDevMode` and marked index.js as `sideEffect`
- renamed `Ascendant` to `Ascending` in `OrderByDirection`
- renamed `Descendant` to `Descending` in `OrderByDirection`
- removed `merge` util method, use native `Object.assign`
- removed `NormalizationCharMaps` and moved static properties to separate exports
    - new `SlovakCharmap` const for better tree shaking

## Version 1.2.0 (2021-10-29)

### Features

- added `isOverflown` function which checks whether has provided *element* overflow
- added `generateRandomString` function which generates random string of specified length from possible characters
- added `normalizeAccent` function which normalizes string, removing accent
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