import {globalDefine} from './jsDevMode';
import {isBlank} from './utils/lang';

globalDefine(global =>
{
    if(isBlank(global['jsDevMode']))
    {
        global['jsDevMode'] = false;
    }
});

export * from './jsDevMode';
export * from './encoder/encoder';
export * from './paginator/paginator';
export * from './normalizer/charMaps';
export * from './normalizer/normalizer';
export * from './enums/orderByDirection';
export * from './types/dictionaries';
export * from './types/enums';
export * from './types/functions';
export * from './types/valueNamePair';
export * from './utils/common';
export * from './utils/lang';
export * from './utils/nameof';
export * from './decorators/bindThis.decorator';
export * from './decorators/callOnce.decorator';
export * from './decorators/debounceCall.decorator';
