type CSS_Variables = `var(--${string})`;

// Correct
const radius: CSS_Variables = "var(--corner-sm)";
const color: CSS_Variables = "var(--primary-06)";

// Incorrect

const a: CSS_Variables = "hello";
const b: CSS_Variables = "var(--hello]";

type N = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type C = `primary-${N}`;

// Correct

const primary_10: C = "primary-10";
const primary_1: C = "primary-1";
const primary_5: C = "primary-5";

// Incorrect

const primary_11: C = "primary-11";
const primary_0: C = "primary-0";

type Protocol = "http" | "https";
type TLD = "com" | "ma" | "org" | "io";
type URLS = `${Protocol}//:www.${string}.${TLD}`;

// Correct
const site: URLS = "https//:www.google.com";

// Incorrect

const NotCorrectType: URLS = "www.google.com";

type Route = "admin" | "client" | "sub-admin";
type Specific = "/:id" | "/:slug" | "";

type OnlyAdminsRoute = Exclude<Route, "client">;
type AllRoutes = `/${OnlyAdminsRoute}${Specific}`;

// Correct
const routes: AllRoutes[] = ["/admin", "/admin/:slug", "/sub-admin"];

// Incorrect
const notAllowedRoutes: AllRoutes[] = ["/client", "/client/:id"];
