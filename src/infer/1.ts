import { Equal, Expect } from '../helpers';

const sum = (s: number, m: number) => {
  return s + m;
};

type MyFuncReturn = ReturnType<typeof sum>;

type tests = [Expect<Equal<MyFuncReturn, number>>];
