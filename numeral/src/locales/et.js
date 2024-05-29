export default function localeFactory(numeral) {
    numeral.register('locale', 'et', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tuh',
            million: ' mln',
            billion: ' mld',
            trillion: ' trl'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€'
        }
    });
};
