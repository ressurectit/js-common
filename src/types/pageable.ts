/**
 * Interface for paging
 */
export interface Pageable
{
    /**
     * Number of items that should be returned
     */
    size: number;

    /**
     * Page number that should be returned
     */
    page: number;
}