const movements = [100, 40, 140, 124];

//equality tests
console.log(movements.includes(40));

//some - Determines whether the specified callback function returns true for any element of an array.
//conditional test
console.log(movements.some((val) => val > 4000));
console.log(movements.some((val) => val > 110));

//every - Determines whether all the members of an array satisfy the specified test.
console.log(movements.every((val) => val >= 40)); // all the members are greater or equal to 40
console.log(movements.every((val) => val >= 100)); // all the members are not greater than or equal to 100
