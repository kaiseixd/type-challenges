type Last<T extends unknown[]> = T extends [...infer R, infer L] ? L : never;

// type Last<T extends any[]> = T["length"] extends 0
//   ? never
//   : [never, ...T][T["length"]];