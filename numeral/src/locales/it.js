export default function localeFactory(numeral) {
    numeral.register('locale', 'it', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        currency: {
            symbol: '€'
        }
    });
};
