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
export type ReturnOnlyStringOrNumberValue<K extends (...args: any) => any> =
  K extends ((...args: any) => infer R extends string | number) ? R : never;

export type FirstAndLast<T extends [any, any, ...any[]]> = T extends [
  infer F,
  ...any[],
  infer L
]
  ? [F, L]
  : never;

type GetResult<T> = T extends
  | ((...args: any[]) => infer R)
  | Promise<{ data: () => infer R }>
  | Promise<{ error: () => infer R }>
  ? R
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
type ReturnNumber = ReturnOnlyStringOrNumberValue<() => 5>;
type ReturnStr = ReturnOnlyStringOrNumberValue<() => "5">;
type ReturnNever = ReturnOnlyStringOrNumberValue<() => true>;
type OmitFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;
type OmitLast<T extends unknown[]> = T extends [...infer U, any] ? U : never;

const arr: NoEmptyArray<string | number> = ["hello", 1];

const result = () => 1;

const result1 = new Promise<{ data: () => number }>((resolve) => {
  resolve({ data: () => 1 });
});

const result2 = new Promise<{ error: () => number }>((resolve) => {
  resolve({ error: () => 1 });
});

type Result = GetResult<typeof result>;
type Result1 = GetResult<typeof result1>;
type Result2 = GetResult<typeof result2>;

type Omited = OmitFirst<[1, 2, 3]>;
type OmitedLast = OmitLast<[1, 2, 3]>;
