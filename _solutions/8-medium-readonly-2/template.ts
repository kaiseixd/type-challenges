type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }


// type Flatten2<T extends { [key: string]: any }> = { [key in keyof T]: T[key] }
// type MyReadonly2<
//   T extends { [key: string]: any },
//   K extends keyof T = keyof T,
//   > = Flatten2<
//     Readonly<Pick<T, K>> & Omit<T, K>
//   >

// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
//   Readonly<Pick<T, K>>;

// wrong:
// type MyReadonly2<T, K> = {
//   readonly [P in keyof T as P extends K ? P : never]: T[P]
// } & {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }
