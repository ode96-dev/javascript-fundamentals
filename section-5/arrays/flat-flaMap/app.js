const movements = [100, 830, 90, 124, [130, 169, 570, 345]];
const movements2 = [100, [[830, 90, 124], [130, 169, 570, 345]]];

//flat method - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(movements.flat());
console.log(movements2.flat(2));

//flatMap method - Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1.
//goes one level deep
//still need to use flat
//method combines flat and map methods
console.log(movements2.flatMap((mapped, index) => mapped));

