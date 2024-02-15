// ||= assigns the right side value only if the left is a falsy value
let a = false;

a ||= 10
console.log(a);
// &&= assigns the right side value only if the left is a truthy value
let b = 10;

b &&= 20
console.log(b);
//??= assigns the right side value only if the left is null or undefined
let c = null;

c ??= 20

console.log(c);