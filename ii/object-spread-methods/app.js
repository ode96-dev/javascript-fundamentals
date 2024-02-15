let x;
const todo = new Object();


todo.id = 1
todo.name = 'Buy Milk'
todo.completed = true

x = todo

const person = {
    address: {
        coords: {
            lat: 43.000,
            long: -90
        }
    }
}

const obj3 = { ...person, ...todo }

x = Object.values(todo)
x = Object.keys(todo).length
x = Object.entries(todo)
x = todo.hasOwnProperty('name')

console.log(x);