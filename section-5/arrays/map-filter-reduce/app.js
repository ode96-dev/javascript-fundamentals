const movements = [100, 830, 90, 124];

/**
 * 1 - map
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 */
movements.map((move, index) => console.log(`with map ${index + 1}: ${move}`))
//the map method
console.log('======map method=====');
const euroToUSD = 1.1;
const movementsUSD = movements.map((move) => move * euroToUSD)
console.log(movements);
console.log(movementsUSD);
/**
 * 2 - filter
 * - Returns the elements of an array that meet the condition specified in a callback function.
 */
movements.filter((move, index) => console.log(`with filter ${index + 1}: ${move > 150}`))

/**
 * //TODO: 3 - reduce
 * - Calls the specified callback function for all the elements in an array. The return value of the callback 
 * function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
movements.reduce((accumulator, currentValue) => console.log(`with reducer: ${accumulator + currentValue}`))

// these methods can be chained
const totalMovements = movements
    .filter((move) => move > 50)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(totalMovements);