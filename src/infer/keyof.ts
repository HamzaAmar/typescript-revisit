import { USER } from "../data";

const userKey = Object.keys(USER);
const userValue = Object.values(USER);
const userEntries = Object.entries(USER);

type UserType = typeof USER;
type UserKey = keyof UserType;
type UserValue = UserType[UserKey];
type Hobbies = UserType["hobbies"][number];

// Advanced useCase

function getProp<T extends UserType, K extends keyof T>(obj: T, prop: K) {
  return obj[prop];
}
function setProp<T extends UserType, K extends keyof T>(
  obj: T,
  prop: K,
  value: T[K]
) {
  obj[prop] = value;
}
// const names = getProp(hello, 'FirstName');
const myName = getProp(USER, "firstName") + getProp(USER, "lastName");
const age = setProp(USER, "age", 31);
