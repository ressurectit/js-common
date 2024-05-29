export default function localeFactory(numeral) {
    numeral.register('locale', 'th', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'พัน',
            million: 'ล้าน',
            billion: 'พันล้าน',
            trillion: 'ล้านล้าน'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '฿'
        }
    });
};
