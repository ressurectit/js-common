import {globalDefine as globalDefineFunc} from './jsDevMode';
import {isBlank} from './utils';

globalDefineFunc(global =>
{
    if(isBlank(global['jsDevMode']))
    {
        global['jsDevMode'] = false;
    }
});

/**
 * Initialize jsDevMode global variable
 */
export const initializeJsDevMode = () => {};

export const globalDefine = globalDefineFunc;
export * from './encoder/encoder';
export * from './paginator/paginator';
export * from './enums';
export * from './types';
export * from './utils';