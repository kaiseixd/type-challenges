// type MyOmit<T, K extends string | number | symbol> = {
//   [key in Exclude<keyof T, K>]: T[key]
// }

// An answer using TypeScript 4.1's "mapped type `as` clauses" for a property filter
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// type MyOmit<T, K> = {
//   [key in (keyof T extends infer U ? U extends K ? never : U extends keyof T ? U : never : never)]: T[key]
// }


// wrong:
// type MyOmit<T, K extends keyof T> = {
//   [key in keyof T extends K ? never : keyof T]: T[key]
// }
