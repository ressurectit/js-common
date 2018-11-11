/**
 * Returns name of property, checked by typescript
 * @param name Name of property that should be returned
 */
export const nameof = <T>(name: keyof T) => name;