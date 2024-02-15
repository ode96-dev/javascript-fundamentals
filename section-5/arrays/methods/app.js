//simple methods
const movements = [100, 830, -90, -124];
console.log(movements);

//methods

//1. slice method - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(movements.slice(2));
console.log(movements.slice(2, 3));
console.log(movements);

//2. splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(movements.splice(2));
console.log(movements); // - original array lost the extracted elements

// 3. reverse - Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(movements.reverse());

// 4.concat - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const movements2 = ['sample master', true, 'biker', 0, false];
console.log(movements.concat(movements2));
//similar to:
console.log([...movements, ...movements2]);

// 5. join - Adds all the elements of an array into a string, separated by the specified separator string.
console.log(movements2.join(','));

// 6. at method, also works with strings
const arr = [23, 16, 29, 50]
console.log(arr.at(0));
//get last method, simplifies way of getting elements in the array
console.log(arr.at(-1));

