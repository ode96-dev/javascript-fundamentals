const movements = [100, 40, 90, 124];

//find - Returns the value of the first element in the array where predicate is true, 
//and undefined otherwise.
const findMovement = movements.find((move, index) => move < 100)
console.log(findMovement);

//find index, will return index not the element - 
const findIndexMovement = movements.findIndex((move, index) => move < 100)
console.log(findIndexMovement); //40 is in index 1

