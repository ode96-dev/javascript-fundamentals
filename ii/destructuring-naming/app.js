const firstName = 'Dev';
const lastName = 'Ode'
const age = 27

const person = {
    firstName,
    lastName,
    age
}

//destructuring
const todo = {
    id: 1,
    title: 'take our trash',
    user: {
        name: 'Dev'
    }
}

const { id, title, user: { name } } = todo

//destructure arrays
const numbers = [27, 26, 54, 31];
const [first, second, ...nums] = numbers

console.log(first, second, nums);