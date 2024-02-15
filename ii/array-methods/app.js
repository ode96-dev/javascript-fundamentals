let x
const arr = [34, 'Dev', false]

arr.push('Ode') //Appends new elements to the end of an array, and returns the new length of the array.
arr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr.unshift(27) //Inserts new elements at the start of an array, and returns the new length of the array.
arr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr.reverse()//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

x = arr.includes('Dev')
x = arr.indexOf(34)
x = arr.slice(1, 2)
x = arr.splice(1, 2)


console.log(x)