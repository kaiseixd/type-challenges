// type Chainable<T = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
//   get(): T
// }

// type Chainable<T = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>
//   get(): T
// }

type Chainable<T = {}> = {
  option<K extends string | number | symbol, V>(key: K, value: V): Chainable<Omit<T, K> & Record<K, V>>
  get(): T
}

// one object:
// type Chainable<TRes = unknown> = {
//   option<TKey extends string, TValue>(key: TKey, value: TValue): Chainable<{ [K in TKey | keyof TRes]: K extends keyof TRes ? TRes[K] : TValue }>
//   get(): TRes
// }

// use this:
// type Chainable = {
//   option<This, Key extends string, Value>(
//     this: This,
//     key: Key,
//     value: Value
//   ): This & { [K in Key]: Value };
//   get<This>(this: This): Omit<This, keyof Chainable>;
// };