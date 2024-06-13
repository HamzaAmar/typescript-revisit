// discriminated union

// type Shape = Circle | Square | Rectangle;

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   length: number;
// }

// interface Rectangle {
//   kind: "rectangle";
//   x: number;
//   y: number;
// }

// Another Way to use discriminated Union

type Shape =
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      length: number;
    }
  | {
      kind: "rectangle";
      x: number;
      y: number;
    };

//  Example With Extract

type Circle = Extract<Shape, { kind: "circle" }>;
type Square = Extract<Shape, { kind: "square" }>;
type Rectangle = Extract<Shape, { kind: "rectangle" }>;
type Kind = Shape["kind"];

//  Example With Exclude
type ExcludeCircle = Exclude<Shape, { kind: "circle" }>;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.length ** 2;
    case "rectangle":
      return shape.x * shape.y;
    default:
      return "Not Defined Kind";
  }
}

// Union

type Size = "sm" | "md" | "lg";
type Corner = "radius" | "sharp";

const size: Size = "lg";
const corner: Corner = "radius";

// Enum

enum TaskPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

const priority: TaskPriority = TaskPriority.HIGH;
