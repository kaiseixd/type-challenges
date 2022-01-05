// type Animal = { type: string };
// type Valueof<T> = T[keyof T];
// type LookUp<U extends Animal, T extends string> = Valueof<{
//   [K in U as K['type']]: K['type'] extends T ? K : never
// }>

// type LookUp<U, T extends string> = {
//   [K in T]: U extends { type: T } ? U : never
// }[T]

// with Extract
// type LookUp<U extends { type: string }, T extends U['type']> = Extract<U, { type: T }>;

type LookUp<U, T> = U extends { type: T } ? U : never;