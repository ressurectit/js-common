/**
 * Represents css global values, usable for any css property
 */
export type CssGlobal = 'inherit'|'initial'|'revert'|'unset';

/**
 * Represents css overflow values
 */
export type CssOverflow = 'visible'|'hidden'|'clip'|'scroll'|'auto'|'hidden visible'|CssGlobal;

/**
 * Represents css position values
 */
export type CssPosition = 'static'|'relative'|'absolute'|'fixed'|'sticky'|CssGlobal;

/**
 * Represents css display values
 */
export type CssDisplay = 'block'|'inline'|'run-in'|'flow'|'flow-root'|'table'|'flex'|'grid'|'list-item'|'table-row-group'|'table-header-group'|'table-footer-group'|'table-row'|'table-cell'|'table-column-group'|'table-column'|'table-caption'|'contents'|'none'|'inline-block'|'inline-list-item'|'inline-table'|'inline-flex'|'inline-grid'|CssGlobal;
