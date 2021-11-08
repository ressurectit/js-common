import {globalDefine} from './jsDevMode';
import {isBlank} from './utils';

globalDefine(global =>
{
    if(isBlank(global['jsDevMode']))
    {
        global['jsDevMode'] = false;
    }
});
