//rest pattern, rest parameters
/* same syntax,
main difference between 
1 - rest operator: collects multiple elements and condenses them into an array, 
2 - spread operator: expand an array into individual elements
*/

//1. Destructuring (use case)

//spread because on the right side
const array = [1, 2, 3, ...[4, 5]]
console.log(array);

/* rest appears on the left side of the equal sign
rest element '...others' must be the last element
only one rest */
const [a, b, ...others] = [1, 2, 3, ...['4', '5']]
console.log(a, b, others);

//also works with objects. same 1. applies
const daysOfTheWeek = { day1: 'Mon', day2: 'Tue', day3: 'Wed', day4: 'Thu', day5: 'Fri', day6: 'Sat', day7: 'Sun' }
const { day4, ...weekDays } = daysOfTheWeek
console.log(weekDays);
console.log(day4, weekDays);

//1. Functions, pass multiple arguments into a function (use case)
// in this case, any additional arguments should work as per the function's execution, specification
const adding = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

adding(2, 4)
adding(2, 4, 1000, 4.35)

const x = [20, 70, 10]
adding(...x)