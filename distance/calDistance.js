import { howLong, sortLength } from './formula.js';

let l1 = howLong([3, 2], [7, 2]);
let l2 = howLong([5, 10], [5, 27]);
let l3 = howLong([36, 40], [2, 34]);

console.log(`The length of l1 is ${l1}`);
console.log(`The length of l2 is ${l2}`);
console.log(`The length of l3 is ${l3}`);

console.log(sortLength(l1, l2, l3));