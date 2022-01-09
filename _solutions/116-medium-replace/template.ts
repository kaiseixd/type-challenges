type Replace<S extends string, F extends string, T extends string> = F extends ''
  ? S
  : S extends `${infer P}${F}${infer K}` ? `${P}${T}${K}` : S;
