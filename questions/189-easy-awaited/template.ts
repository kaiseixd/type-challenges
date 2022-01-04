type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;

// wrong:
// type MyAwaited<T> = typeof T
// type MyAwaited<T extends Promise<unknown>> = typeof T
// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
//   ? U
//   : never
