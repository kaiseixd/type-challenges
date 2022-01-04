type Length<T extends readonly [...T]> = T['length']

// wrong
// type Length<T extends { length: number }> = T['length']
// type Length<T extends any> = T extends { length: infer L } ? L : never;
// type Length<T extends any> = T extends ReadonlyArray<any> ? T['length'] : never;
// type Length<T extends any> = T extends ArrayLike<any> ? T['length'] : never;
