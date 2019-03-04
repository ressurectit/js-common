declare global
{
    const jsDevMode: boolean;
}

/**
 * Defines global variable
 * @param globalDefineFunc Global variable definition callback
 */
export function globalDefine(globalDefineFunc: (global: any) => void)
{
    globalDefineFunc(typeof window != 'undefined' && window || typeof self != 'undefined' && self || typeof global != 'undefined' && global);
}