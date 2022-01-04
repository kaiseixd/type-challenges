type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// wrong:
// type MyPick<T, K> = {
//   [P in K]: T[P]
// }
