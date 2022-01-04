type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = true extends
  { [key in keyof T]: MyEqual<T[key], U> }[number]
    ? true
    : false
// ->

// function iteration(T, U) {
//   if (T is unknow[] && T.length >= 1) {
//     const [first, ...rest] = T
//     if (first === U) {
//       return true
//     } else [
//       return iteration(rest, U)
//     ]
//   } else {
//     return false;
//   }
// }


// wrong:
// type Includes<T extends readonly unknown[], U> = U extends keyof T
//   ? true
//   : false

// type test<T> = T extends [infer First, ...infer Rest] ? 1 : 2

// type a = test<[2]>