/**
 * Defines type that can be used as mixin
 */
export interface MixinType<TType = unknown> extends Function 
{
    new (): TType;
}