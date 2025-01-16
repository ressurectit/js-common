# Changelog

## Version 7.0.0 (2025-01-16)

### Features

- new subpackage `@jscrpt/common/lodash`
    - new optional dependency `lodash-es` package
- subpackage `@jscrpt/common/lodash`
    - new `deepCopyWithArrayOverride` function, which performs deep copy of object with arrays that are not merged but overrided with latest value

### BREAKING CHANGES

- utility method `extend` moved into subpackage `@jscrpt/common/extend`
    - `extend` package dependency is now optional

## Version 6.2.1 (2024-07-31)

### Bug Fixes

- fixed `validHtmlId` function, now correctly creates valid HTML id

## Version 6.2.0 (2024-07-29)

### Features

- new `Mutable` type, that returns a mutable type version of type.
- new `Writable` type, that returns a writable type version of type.

## Version 6.1.0 (2024-05-29)

### Features

- new *subpackage* `@jscrpt/common/numeral`
    - 'assimilated' library `numeral.js` and updated to 'module' package

## Version 6.0.0 (2024-01-04)

### Features

- updated `validHtmlId` function
    - now using `normalizeAccent` underhood to remove accent chars

### BREAKING CHANGES

- updated `validHtmlId` function
    - now it has only one parameter, does not require char map

## Version 5.1.0 (2023-11-28)

### Features

- new `isStrictEquals` function, that tests whether two objects are same reference

## Version 5.0.0 (2023-11-09)

### Features

- new compilation output format `es2022`
- new `isCheckbox` function, that tests whether is element input type checkbox
- new `isRadio` function, that tests whether is element input type radio
- new `isInput` function, that tests whether is element input
- new `isSelect` function, that tests whether is element select
- new `isButton` function, that tests whether is element button
- new `isAnchor` function, that tests whether is element anchor


### BREAKING CHANGES

- minimal supported version of `tslib` is now `2.6.2`
- minimal supported version of `node.js` is now `18`
- updated `Paginator` class
    - `GetFirstPage` renamed to `getFirstPage`

## Version 4.1.0 (2023-10-06)

### Features

- new `RecursivePartial` type, that is utility type that makes partial all nested properties
- new `Func0` type, that is function definition with zero arguments and return type
- new `Func0Rest` type, that is function definition with zero mandatory arguments, rest argument and return type

## Version 4.0.0 (2023-08-15)

### Features

- new `CombineStrings` type, that combines unions of strings
- new `PropertyExpression` type, that represents recursively extracts property expressions for type and specified properties    
- new `TypePropertyExpressions` type, that extracts property expressions for type (object)
- updated `formatString` function
    - now supports also using of nested properties expressions in template string ``{{obj.property}}``

### BREAKING CHANGES

- minimal supported version of `tslib` is now `2.6.1`
- updated `getValue` function
    - first parameter type changed from `Dictionary<any>` to `Record<string, unknown>`
- updated `formatString` function
    - parameter template string now requires double brackets to work ``{{value}}`` instead of `{value}` as it was previous

## Version 3.5.0 (2023-08-14)

### Features

- new `formatString` function, that formats input string using formatting parameters (Array or Object)

## Version 3.4.0 (2023-02-08)

### Features

- new `renderToBody` function, that renders element into body directly or into container element

## Version 3.3.0 (2022-10-28)

### Features

- *subpackage* `@jscrpt/common/rxjs`
    - new `lastValueFrom` function, which calls rxjs `lastValueFrom` with empty value `undefined` or provided emptyValue

## Version 3.2.0 (2022-10-25)

### Features

- new `Property` decorator, which allows to define property on object with specific options and default value
- new `Mixin` decorator, which uses specified class as class mixin, takes its methods and properties and merge them into target class
- new `stringToColour` function, that transforms any string to colour code
- new `MixinType` interface, that defines type that can be used as mixin

## Version 3.1.0 (2022-10-06)

### Features

- new `Func1Rest` type, that is function definition with one mandatory argument, rest argument and return type
- new `Func2Rest` type, that is function definition with two mandatory arguments, rest argument and return type
- new `Func3Rest` type, that is function definition with three mandatory arguments, rest argument and return type
- new `Func4Rest` type, that is function definition with four mandatory arguments, rest argument and return type
- new `Func5Rest` type, that is function definition with five mandatory arguments, rest argument and return type
- new `Action1Rest` type, that is function definition with one mandatory argument, rest argument and no return type
- new `Action2Rest` type, that is function definition with two mandatory arguments, rest argument and no return type
- new `Action3Rest` type, that is function definition with three mandatory arguments, rest argument and no return type
- new `Action4Rest` type, that is function definition with four mandatory arguments, rest argument and no return type
- new `Action5Rest` type, that is function definition with five mandatory arguments, rest argument and no return type

## Version 3.0.0 (2022-09-07)

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
- new `Invalidatable` interface, that represents type that can be visualy invalidated
    - **methods**
        - `invalidateVisuals` - explicitly runs invalidation of content (change detection), which redraws contents
- new `WithSync` decorator, that adds special functionality to async method call, that allows only to call this method only when previous execution was finished
- updated `DebounceCall`, now asynchronously returns values, all calls returns value from last call

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