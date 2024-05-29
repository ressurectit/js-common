export default function localeFactory(numeral) {
    numeral.register('locale', 'lv', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tūkst.',
            million: ' milj.',
            billion: ' mljrd.',
            trillion: ' trilj.'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€'
        }
    });
};
