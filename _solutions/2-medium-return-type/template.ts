// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any

type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

// wrong:
// type MyReturnType<T> = T extends (...args: unknown[]) => infer P ? P : never
