const days = ['Tue', 'Wed', 'Thu']
const openingHours = {
    [days[0]]: {
        open: 0,
        close: 20,
    },
    [days[1]]: {
        open: 9,
        close: 17,
    },
    [days[2]]: {
        open: 3,
        close: 12,
    },
}
const working = {
    name: 'Dev Ode',
    age: 32,
    openingHours
}

//object keys
const properties = Object.keys(openingHours)

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
    openStr += `${day},`
}
console.log(openStr);

//object values
const values = Object.keys(openingHours)
console.log(values);

//object entries
const entries = Object.entries(openingHours)
console.log(entries);

//loop over the object
//[key, value]
for (const [day, { open, close }] of entries) {
    console.log(`on ${day} we open at ${open} and close at ${close}`);
}