console.log(10 > 20 && 30 > 15);
console.log(10 > 20 || 30 > 15);

//&& - will return first falsy value or the last value
let a;

a = 100 && 20 && 30;

a = ['Post One', 'Post Two', 'Post Three']
a.length > 0 && console.log(a[0]);

console.log(a);

// || - will return the first truthy value or the last value
let b;

b = 10 || 20
console.log(b);

// ?? - returns the right side operand when the left is either null or undefined
let c;

c = undefined ?? 20
console.log(c);