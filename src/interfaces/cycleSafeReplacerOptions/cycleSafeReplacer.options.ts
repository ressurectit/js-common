/**
 * Options for `cycleSafeReplacer`
 */
export interface CycleSafeReplacerOptions
{
    /**
     * Maximal depth of nested objects that will be serialized, deeper objects are replaced with marker, defaults to 10
     */
    maxDepth?: number;

    /**
     * Indication whether serialize only plain objects and arrays, instances of classes are replaced with marker, defaults to false
     */
    plainObjectsOnly?: boolean;
}
