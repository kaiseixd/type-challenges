// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never
// type First2_1<T extends any[]> = T extends [infer P, ...infer H] ? P : never
// type First3<T> = T[Extract<keyof T, '0'>];
type NotEmpty<T extends unknown[]> = T[0] extends T[number] ? true : false
type First<T extends any[]> = NotEmpty<T> extends true ? T[0] : never