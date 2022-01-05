// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends Function
//     ? T[K]
//     : T[K] extends object
//       ? DeepReadonly<T[K]>
//       : T[K]
// }

// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends Record<string, unknown>
//     ? DeepReadonly<T[K]>
//     : T[K]
// }

type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

// wrong:
// type DeepReadonly<T> = T extends object
//   ? { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }
//   : T
