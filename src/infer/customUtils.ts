export type Capitalize<S extends string> = S extends `${infer T}${infer U}`
  ? `${T}--${U}`
  : never;

const style = {
  color: "var(--red-0)",
  backgroundColor: "black",
  borderRadius: "var(--small)",
} as const;

type Style = typeof style;
type RemoveVar<T> = T extends `var(--${infer Y})` ? Y : T;

export type OnlyString<S> = S extends string ? S : never;
export type isIn<T, S> = T extends S ? true : false;
export type isArray<T> = T extends any[] ? true : false;
export type Maybe<T> = T | undefined | null;
export type NoEmptyArray<T> = [T, ...T[]];
export type RemoveVarCSSProp<T> = {
  [K in keyof T as RemoveVar<K>]: T[K];
};

export type FirstAndLast<T extends [any, any, ...any[]]> = T extends [
  infer F,
  ...any[],
  infer L
]
  ? [F, L]
  : never;

type S1 = OnlyString<"Helo">;
type N1 = OnlyString<1>;
type M = isIn<false, string | number>;
type num = Maybe<number>;
type nul = Maybe<null>;
type Arr = isArray<[]>;
type NotArr = isArray<"hello">;
type RemovedVar = RemoveVarCSSProp<Style>;
type FL = FirstAndLast<[1, 2, 3]>;
type FL2 = FirstAndLast<[1, 3]>;

const arr: NoEmptyArray<string | number> = ["hello", 1];
