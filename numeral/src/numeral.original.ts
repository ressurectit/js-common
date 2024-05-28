/************************************
    Variables
************************************/

let numeral,
    _,


// helper functions
numeral._ = _ = {
    // formats numbers separators, decimals places, signs, abbreviations
    
};


/************************************
    Numeral Prototype
************************************/

numeral.fn = Numeral.prototype = {
    clone: function() {
        return numeral(this);
    },
    format: function(inputString, roundingFunction) {
        let value = this._value,
            format = inputString || options.defaultFormat,
            kind,
            output,
            formatFunction;

        // make sure we have a roundingFunction
        roundingFunction = roundingFunction || Math.round;

        // format based on value
        if (value === 0 && options.zeroFormat !== null) {
            output = options.zeroFormat;
        } else if (value === null && options.nullFormat !== null) {
            output = options.nullFormat;
        } else {
            for (kind in formats) {
                if (format.match(formats[kind].regexps.format)) {
                    formatFunction = formats[kind].format;

                    break;
                }
            }

            formatFunction = formatFunction || numeral._.numberToFormat;

            output = formatFunction(value, format, roundingFunction);
        }

        return output;
    },
    value: function() {
        return this._value;
    },
    input: function() {
        return this._input;
    },
    set: function(value) {
        this._value = Number(value);

        return this;
    },
    add: function(value) {
        let corrFactor = _.correctionFactor.call(null, this._value, value);

        function cback(accum, curr, currI, O) {
            return accum + Math.round(corrFactor * curr);
        }

        this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

        return this;
    },
    subtract: function(value) {
        let corrFactor = _.correctionFactor.call(null, this._value, value);

        function cback(accum, curr, currI, O) {
            return accum - Math.round(corrFactor * curr);
        }

        this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

        return this;
    },
    multiply: function(value) {
        function cback(accum, curr, currI, O) {
            let corrFactor = _.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
        }

        this._value = _.reduce([this._value, value], cback, 1);

        return this;
    },
    divide: function(value) {
        function cback(accum, curr, currI, O) {
            let corrFactor = _.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
        }

        this._value = _.reduce([this._value, value], cback);

        return this;
    },
    difference: function(value) {
        return Math.abs(numeral(this._value).subtract(value).value());
    }
};

/************************************
    Default Locale && Format
************************************/

numeral.register('locale', 'en', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function(number) {
        let b = number % 10;
        return (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    },
    currency: {
        symbol: '$'
    }
});

return numeral;
