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
export * from './types/async';
export * from './types/combineStrings';
export * from './types/cssProperties';
export * from './types/dictionaries';
export * from './types/enums';
export * from './types/functions';
export * from './types/invalidatable';
export * from './types/mixinType';
export * from './types/mutable';
export * from './types/pageable';
export * from './types/pagedData';
export * from './types/propertyExpressions';
export * from './types/recursivePartial';
export * from './types/valueNamePair';
export * from './types/writable';
export * from './utils/common';
export * from './utils/lang';
export * from './utils/nameof';
export * from './decorators/bindThis.decorator';
export * from './decorators/callOnce.decorator';
export * from './decorators/debounceCall.decorator';
export * from './decorators/withSync.decorator';
export * from './decorators/property.decorator';
export * from './decorators/mixin.decorator';
