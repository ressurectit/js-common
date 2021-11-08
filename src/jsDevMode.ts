import {isBlank} from './utils';

declare global
{
    const jsDevMode: boolean;
}

/**
 * Defines global variable
 * @param globalDefineFunc - Global variable definition callback
 */
export function globalDefine(globalDefineFunc: (global: any) => void): void
{
    globalDefineFunc(typeof window != 'undefined' && window || typeof self != 'undefined' && self || typeof global != 'undefined' && global);
}

globalDefine(global =>
{
    if(isBlank(global['jsDevMode']))
    {
        global['jsDevMode'] = false;
    }
});
