export interface NumeralJSLocale 
{
    delimiters: 
    {
        thousands: string;
        decimal: string;
    };
    abbreviations: 
    {
        thousand: string;
        million: string;
        billion: string;
        trillion: string;
    };
    ordinal(num: number): string;
    currency: 
    {
        symbol: string;
    };
}