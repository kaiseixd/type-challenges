// type _Elu = 'スノー・ホワイト・パラダイス・エルサント・フロウ・ワスレナ・ピュア・プリンセス・リーブル・ラブ・ハイデルン・ドコドコ・ヤッタゼ・ヴァルキュリア・パッション・アールヴ・ノエル・チャコボシ・エルアリア・フロージア・メイドイン・ブルーム・エル';

// type _Replace<S extends string, F extends string, T extends string> = F extends ''
//   ? S
//   : S extends `${infer P}${F}${infer K}` ? `${P}${T}${K}` : S;

// type _ReplaceAll<S extends string, F extends string, T extends string> = S extends _Replace<S, F, T>
//   ? S
//   : _ReplaceAll<_Replace<S, F, T>, F, T>;

// type ReplaceAll<S extends string, F extends string, T extends string> = S extends _Replace<S, F, T>
//   ? S
//   : _ReplaceAll<_ReplaceAll<_Replace<S, F, `${_Elu}${T}${_Elu}`>, F, `${_Elu}${T}${_Elu}`>, `${_Elu}${T}${_Elu}`, T>;

type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer R1}${From}${infer R2}`
    ? `${R1}${To}${ReplaceAll<R2, From, To>}`
    : S
