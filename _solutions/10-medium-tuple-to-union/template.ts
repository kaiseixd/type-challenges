type TupleToUnion<T extends unknown[]> = T[number]

// type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
