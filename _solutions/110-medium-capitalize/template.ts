type UppercaseMap = { "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z" }
type Capitalize2<S extends string> = S extends `${infer T}${infer U}`
  ? T extends keyof UppercaseMap
    ? `${UppercaseMap[T]}${U}`
    : S
  : S;

// type Capitalize2<S extends string> = S extends `${infer F}${infer tail}` ? `${Uppercase<F>}${tail}` : S;
