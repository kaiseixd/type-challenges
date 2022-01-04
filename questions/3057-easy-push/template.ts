type Push<T extends unknown[], U> = [...T, U];

// wrong:
// type Push<T extends unknown[], U> = U extends unknown[]
//   ? [...T, ...U]
//   : [...T, U]
