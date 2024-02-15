let x;
//array literal
const arrayed = [1, 'dev', 'ode', 300, false]
console.log(arrayed)

//array constructor
const fruits = new Array('apple', 'grape', 'orange')
console.log('fruits:', fruits);

x = arrayed[0]
x = fruits.length
fruits[2] = 'pear'
x = fruits
fruits[fruits.length] = 'peach'
fruits[fruits.length] = 'banana'
console.log(x);
