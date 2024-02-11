//methods
const friends = ['Mo', 'Jj', 'Sam']
console.log(friends, friends.length);

//push, added at the end of the array - 
//Appends new elements to the end of an array, and returns the new length of the array.
friends.push('Jojo', 'Mimi')
console.log(friends, friends.length);

//pop, remove last element from an array - 
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
friends.pop()
console.log(friends, friends.length);

//unshift, added at the beginning of the array - Inserts new elements at the start of an array, and returns the new length of the array.
friends.unshift('Dev')
console.log(friends, friends.length);

//shift, remove first element from an array - 
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
friends.shift()
console.log(friends, friends.length);

//indexOf - get position of an element
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
const position = friends.indexOf('Sam')
console.log(position);

//includes, checks to see that element exists
//Determines whether an array includes a certain element, returning true or false as appropriate.
const existence = friends.includes('Jojo')
console.log(existence);





