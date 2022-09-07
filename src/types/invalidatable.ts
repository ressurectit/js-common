/**
 * Represents type that can be visualy invalidated
 */
export interface Invalidatable
{
    //######################### methods #########################

    /**
     * Explicitly runs invalidation of content (change detection), which redraws contents
     */
    invalidateVisuals(): void;
}