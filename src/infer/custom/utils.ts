export type RemoveVar<T> = T extends `var(--${infer Y})` ? Y : T;
export type Capitalize<S extends string> = S extends `${infer T}${infer U}`
  ? `${T}--${U}`
  : never;
export type OnlyString<S> = S extends string ? S : never;
export type IsIn<T, S> = T extends S ? true : false;
export type IsArray<T> = T extends any[] ? true : false;
export type Maybe<T> = T | undefined | null;
export type NoEmptyArray<T> = [T, ...T[]];
export type RemoveVarCSSProp<T> = {
  [K in keyof T as RemoveVar<K>]: T[K];
};
export type ReturnOnlyStringOrNumberValue<K extends (...args: any) => any> =
  K extends ((...args: any) => infer R extends string | number) ? R : never;

export type GetResult<T> = T extends
  | ((...args: any[]) => infer R)
  | Promise<{ data: () => infer R }>
  | Promise<{ error: () => infer R }>
  ? R
  : never;

//   Array Utils

export type Push<K extends unknown[], V> = [...K, V];
export type Reverse<T extends unknown[]> = T extends [infer U, ...infer Rest]
  ? [...Reverse<Rest>, U]
  : [];
export type FirstAndLast<T extends [any, any, ...any[]]> = T extends [
  infer F,
  ...any[],
  infer L
]
  ? [F, L]
  : never;
