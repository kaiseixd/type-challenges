// wrong:
// type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R ? (args: ...P, append: A) => R : never;
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never;

// type AppendArgument<Fn extends (...args: any) => void, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>