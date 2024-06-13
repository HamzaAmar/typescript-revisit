import {
  Maybe,
  OnlyString,
  IsArray,
  IsIn,
  RemoveVarCSSProp,
  FirstAndLast,
  GetResult,
  NoEmptyArray,
  ReturnOnlyStringOrNumberValue,
  Push,
  Reverse,
} from "./utils";

const style = {
  color: "var(--red-0)",
  backgroundColor: "black",
  borderRadius: "var(--small)",
} as const;

type Style = typeof style;

type S1 = OnlyString<"Helo">;
type N1 = OnlyString<1>;
type M = IsIn<false, string | number>;
type num = Maybe<number>;
type nul = Maybe<null>;
type Arr = IsArray<[]>;
type NotArr = IsArray<"hello">;
type RemovedVar = RemoveVarCSSProp<Style>;

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
type FL = FirstAndLast<[1, 2, 3]>;
type FL2 = FirstAndLast<[1, 3]>;

type P = Push<[1, 3], "4">;
type P2 = Push<["1", "3"], "4">;

type Array1 = Reverse<["a", "b", "c", "d"]>;
type Array2 = Reverse<[1, 2, 3, 4]>;
