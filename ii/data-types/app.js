//string
const firstName = 'Dev';

//number
const age = 30;
const temp = 98.9

//boolean
const hasKids = false;

//undefined
let score; //or let score = undefined

//symbol
const id = Symbol('id');

//bigint
const n = 9213313079731739175122n

//reference types
const arrayed = [1, "Dev", false]

const person = {
    name: 'Dev Ode',
    occupation: 'Developer'
}

const greetings = () => {
    console.log('helloo')
}

console.log('firstName:', typeof firstName)
console.log('age:', typeof age)
console.log('temp:', typeof temp)
console.log('hasKids:', typeof hasKids)
console.log('score:', typeof score)
console.log('id:', typeof id)
console.log('n:', typeof n)
console.log('arrayed:', typeof arrayed)
console.log('person:', typeof person)
console.log('greetings:', typeof greetings)



