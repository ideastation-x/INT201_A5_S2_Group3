import { area, circle, triangle, rectangle } from "./shapes.js";

let shape1 = area(circle, 10);
let shape2 = area(triangle, 3, 4);
let shape3 = area(rectangle, 25, 25);
console.log(`shape1: ${shape1}`);
console.log(`shape2: ${shape2}`);
console.log(`shape3: ${shape3}`);