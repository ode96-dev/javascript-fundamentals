
//arrays

const FRIENDS = ["Sam", 'Moh', 'J'] // usual way
console.log(FRIENDS);

const years = new Array(1991, 1997, 1994, 1990);
console.log(years);

console.log(FRIENDS[1], years[3]);

console.log(years.length); //length is not zero (0) based


//using expressions, getting index of the last element
console.log(years[years.length - 1]);

//replacing elements
FRIENDS[2] = 'Jj'
console.log(FRIENDS);

//arrays can hold different types of data
const DEVELOPER = ['Dev Ode', 1990, 'Earth', FRIENDS]
console.log(DEVELOPER)

//placing function calls
const calcAge = birthYear => 2023 - birthYear;
const age1 = calcAge(years[2])
console.log(age1);

const ages = [calcAge(years[1]), calcAge(years[0])];
console.log(ages);