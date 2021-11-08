import {globalDefine} from './jsDevMode';
import {isBlank} from './utils';

globalDefine(global =>
{
    if(isBlank(global['jsDevMode']))
    {
        global['jsDevMode'] = false;
    }
});

export {globalDefine};
export * from './encoder/encoder';
export * from './paginator/paginator';
export * from './normalizer';
export * from './enums';
export * from './types';
export * from './utils';
export * from './decorators';