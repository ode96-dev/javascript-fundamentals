let x;
const fruits = ['apple', 'orange', 'banana']
const vegetables = ['kales', 'onions', 'tomatoes']

// fruits.push(vegetables)

// x = fruits[3][1]
const allFruits = [fruits, vegetables]
x = allFruits[1]
x = fruits.concat(vegetables)

// spread operator - can be used with arrays, also objects
x = [...fruits, ...vegetables]

//flatten
const arr = [1, 3, 65, ['Dev', 'Orange'], [false, true]]
x = arr.flat()

//static methods on array objects
x = Array.isArray('Hello')
x = Array.from('12345')
const a = 1, b = 4, c = 8
x = Array.of(a, b, c)

console.log(x);