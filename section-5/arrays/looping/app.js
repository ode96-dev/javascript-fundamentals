/**
 * LOOPING IN ARRAYS
 * - FOR EACH
 * continue and break do not work here
 * it will run down the entire array
 */
const movements = [100, 830, -90, -124];

// for (const movement of movements) {
//     console.log(movement);
// }
movements.forEach((movement, index) => console.log(`${index}: ` + movement))


// for each in maps
const currencies = new Map([
    ['USD', 'USA'],
    ['EUR', 'Euro'],
    ['GBP', 'Sterling Pound']
]);

currencies.forEach((value, key, map) => console.log(`With Maps ${key}: ${value}`))

// for each set
const currenciesUnique = new Map([
    ['USA', 'USA', 'EUR', 'GBP'],
]);
currenciesUnique.forEach((value, _, map) => console.log(`With Sets ${value}: ${value}`))
