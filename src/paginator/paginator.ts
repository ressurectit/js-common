/**
 * Class for paging evaluation
 */
export class Paginator
{
    //######################### private fields ######################### 

    /**
     * First page set to paginator
     */
    private _base: number = 1;

    /**
     * Number of items per page
     */
    private _itemsPerPage: number = 10;

    /**
     * Index of current page
     */
    private _page: number = 1;

    /**
     * Number of all items to be used for counting paging
     */
    private _itemCount: number;

    //######################### public methods #########################

    /**
     * Sets current page number.
     * @param page - Page number
     * @returns Paginator Provides a fluent interface
     */
    public setPage(page: number): Paginator
    {
        this._page = page;

        return this;
    }

    /**
     * Returns current page number.
     * @returns number Current page number
     */
    public getPage(): number
    {
        return this._base + this.getPageIndex();
    }

    /// <summary>
    /// Returns first page number.
    /// </summary>
    /// <returns>Number of first page</returns>
    public GetFirstPage(): number
    {
        return this._base;
    }

    /**
     * Returns last page number.
     * @returns number Number of last page
     */
    public getLastPage(): number
    {
        return this._base + Math.max(0, this.getPageCount() - 1);
    }

    /**
     * Sets first page (base) number.
     * @param baseVal - Index of base page
     * @returns Paginator Provides a fluent interface
     */
    public setBase(baseVal: number): Paginator
    {
        this._base = baseVal;

        return this;
    }

    /**
     * Returns first page (base) number.
     * @returns number Index of base page
     */
    public getBase(): number
    {
        return this._base;
    }

    /**
     * Gets indication whether is the current page the first one?
     * @returns boolean True if current page is first one
     */
    public isFirst(): boolean
    {
        return this.getPageIndex() == 0;
    }

    /**
     * Gets indication whether is the current page the last one?
     * @returns boolean True if current page is last one, otherwise false
     */
    public isLast(): boolean
    {
        return this.getPageIndex() == (this.getPageCount() - 1);
    }

    /**
     * Returns the total number of pages.
     * @returns number Total number of pages
     */
    public getPageCount(): number
    {
        return Math.ceil(this._itemCount / this._itemsPerPage);
    }

    /**
     * Sets the number of items to display on a single page.
     * @param itemsPerPage - Number of items per page
     * @returns Paginator Provides a fluent interface
     */
    public setItemsPerPage(itemsPerPage: number): Paginator
    {
        this._itemsPerPage = Math.max(1, itemsPerPage);
        
        return this;
    }

    /**
     * Returns the number of items to display on a single page.
     * @returns number Number of items per one page
     */
    public getItemsPerPage(): number
    {
        return this._itemsPerPage;
    }

    /**
     * Sets the total number of items.
     * @param itemCount - Count of items or -1 for infinity
     * @returns Paginator Provides a fluent interface
     */
    public setItemCount(itemCount: number): Paginator
    {
        this._itemCount = itemCount == -1 ? Number.MAX_VALUE : Math.max(0, itemCount);

        return this;
    }

    /**
     * Returns the total number of items.
     * @returns number Total number of items
     */
    public getItemCount(): number
    {
        return this._itemCount;
    }

    /**
     * Returns the absolute index of the first item on current page.
     * @returns number Absolute index of first item
     */
    public getOffset(): number
    {
        return this.getPageIndex() * this._itemsPerPage;
    }

    /**
     * Returns the absolute index of the first item on current page in countdown paging.
     * @returns number Countdown offset of first item
     */
    public getCountdownOffset(): number
    {
        return Math.max(0, this._itemCount - (this.getPageIndex() + 1) * this._itemsPerPage);
    }

    /**
     * Returns the number of items on current page.
     * @returns number Number of items on page
     */
    public getLength(): number
    {
        return Math.min(this._itemsPerPage, this._itemCount - this.getPageIndex() * this._itemsPerPage);
    }

    /**
     * Gets indexes for items on current page (zero-based indexes)
     * @returns number Array of items indexes
     */
    public getIndexesPerPage(): number[]
    {
        let result: number[] = [];

        if(isNaN(this.getOffset()))
        {
            for(let x = 0; x < this.getItemCount(); x++)
            {
                result.push(x);
            }
        }
        else
        {
            for(let x = this.getOffset(); x < this.getOffset() + this.getLength(); x++)
            {
                result.push(x);
            }
        }

        return result;
    }

    /**
     * Gets list of page numbers with specified dispersion
     * @param dispersion - Number identifying dispersion
     * @returns number Page numbers according specified dispersion
     */
    public getPagesWithDispersion(dispersion: number): number[]
    {
        var currentPage = this.getPage();
        var pageCount = this.getPageCount();
        var numberOfPages = Math.min(pageCount, Math.max(0, dispersion) * 2 + 1) - 1;
        var startingPage = Math.max(this._base, currentPage - dispersion);

        if ((currentPage + dispersion) > pageCount)
        {
            startingPage = pageCount - numberOfPages;
        }

        var x, endingPage = startingPage + numberOfPages;
        var result: number[] = [];

        for (x = startingPage; x <= endingPage; x++)
        {
            result.push(x);
        }
        
        return result;
    }

    /**
     * Gets list of page numbers with specified dispersion, pages are trimmed if current page is near beginning or end
     * @param dispersion - Number identifying dispersion
     * @returns number Page numbers according specified dispersion
     */
    public getPagesWithTrimDispersion(dispersion: number): number[]
    {
        var currentPage = this.getPage();
        var lastPage = this.getLastPage();
        var startingPage = Math.max(this._base, currentPage - dispersion);
        var x, endingPage = Math.min(lastPage, currentPage + dispersion);

        var result: number[] = [];
        
        for (x = startingPage; x <= endingPage; x++)
        {
            result.push(x);
        }
        
        return result;
    }

    /**
     * Gets list of page numbers generated with uniform distribution
     * @param numberOfPages - Number of pages that are going to be uniformly distributed between first and last page (including)
     * @returns number Uniformly distributed page numbers
     */
    public getPagesWithUniformDistribution(numberOfPages: number): number[]
    {
        numberOfPages = Math.max(1, numberOfPages - 1);
        var pageCount = this.getPageCount();
        numberOfPages = Math.min(numberOfPages, pageCount - 1);
        var step = pageCount / numberOfPages;
        var page = this.GetFirstPage();
        var x;

        var result: number[] = [];

        for (x = 0; x < numberOfPages; x++)
        {
            result.push(Math.round(page));

            page += step;
        }

        result.push(pageCount);
        
        return result;
    }

    //######################### protected methods #########################

    /**
     * Returns zero-based page number.
     * @returns number Zero-based page number
     */
    protected getPageIndex(): number
    {
        return Math.min(Math.max(0, this._page - this._base), Math.max(0, this.getPageCount() - 1));
    }
}