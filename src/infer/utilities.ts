import { sum, ApiService, getUser, USER } from "../data";
import { Columns, Tables } from "../types/DB";

type User = typeof USER;

type MyFuncReturn = ReturnType<typeof sum>;
type MakeQueryParameters = Parameters<typeof sum>;
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
type Users = Awaited<ReturnType<ApiService["getUsers"]>>;
type UserWithoutAge = Omit<User, "age">;
type UserOptional = Partial<User>;

//Record

type Obj = Record<string, string[] | string>;
type ObjWithTemplate = Record<string, `${Tables}${Columns}`>;

// Case
type TablesUpperCase = Uppercase<Tables>;
type TablesCapitalize = Capitalize<Tables>;
type TablesLower = Lowercase<TablesUpperCase>;
