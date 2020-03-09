/**
 * Available char maps
 */
export class NormalizationCharMaps
{
    /**
     * Gets char map for slovak language
     */
    public static get slovak(): Object
    {
        return {
            "áä": "a",
            "éě": "e",
            "í": "i",
            "óô": "o",
            "úů": "u",
            "ý": "y",
            "č": "c",
            "ď": "d",
            "ľĺ": "l",
            "ň": "n",
            "řŕ": "r",
            "š": "s",
            "ť": "t",
            "ž": "z",
        };
    }
}