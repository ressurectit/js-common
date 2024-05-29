export default function localeFactory(numeral) {
    numeral.register('locale', 'sl', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mrd',
            trillion: 'trilijon'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: '€'
        }
    });
};
