//functions
function greetPeople() {
    console.log("Greetings People!");
}

greetPeople();

function addition(num1, num2) {
    results = num1 + num2
    console.log(results)
}

addition(2, 4)

//params & arguments
function registerUser(user) {
    results = user + ' is registered!'
    console.log(results)
}
registerUser('Dev Ode')

function registerUser(user = 'Default Bot') {
    results = user + ' is registered!'
    console.log(results)
}
registerUser()

//Rest Params
function sum(...numbers) {
    return numbers
}
console.log(sum(12, 4))

//objects as params
function login(user) {
    return `The user ${user.name} where id is ${user.id} is logged in.`
}

console.log(login({
    id: 1,
    name: 'Dev Ode'
}))

//arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item)
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8])
function getRandom2(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item)
}
getRandom2(1, 2, 3, 4, 5, 6, 7, 8)

//global and function scope.
const x = 100 //global - can be accessed globally
function getReady() {
    const prepare = true //local - only accessible in this function 
}

//nested functions
function first() {
    const x = 100; //local to parent and can be accessed with child

    function second() {
        const y = 200; // local to child. cannot be accessed by parent
        console.log(x + y);
    }

    second()
}

first()