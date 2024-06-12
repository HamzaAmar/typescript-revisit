const me = {
  FirstName: 'Hamza',
  lastName: 'Miloud Amar',
  age: 19,
  website: 'https://www.miloudamar.com/',
  hobbies: ['soccer', 'gaming', 'coding', 'painting'] as const,
};

const hello = {
  name: 'hamza',
};

const userKey = Object.keys(me);
const userValue = Object.values(me);
const userEntries = Object.entries(me);

type UserType = typeof me;
type UserKey = keyof UserType;
type UserValue = UserType[UserKey];
type Hobbies = UserType['hobbies'][number];

// Advanced useCase

function getProp<T extends UserType, K extends keyof T>(
  obj: T,
  prop: K,
) {
  return obj[prop];
}
function setProp<T extends UserType, K extends keyof T>(
  obj: T,
  prop: K,
  value: T[K],
) {
  obj[prop] = value;
}
// const names = getProp(hello, 'FirstName');
const myName = getProp(me, 'FirstName') + getProp(me, 'lastName');
const age = setProp(me, 'age', 31);
