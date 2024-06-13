export const USER = {
  firstName: "Hamza",
  lastName: "Miloud Amar",
  age: 19,
  website: "https://www.miloudamar.com/",
  hobbies: ["soccer", "gaming", "coding", "painting"],
};

export const getUser = () => {
  return Promise.resolve(USER);
};

export interface ApiService {
  getUsers: () => Promise<(typeof USER)[]>;
}
