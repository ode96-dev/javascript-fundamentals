//loop through arrays
const items = ['book', 'table', 'chair']

for (const item of items) {
    console.log(item);
}

//loop over strings
const str = 'Hellooo';

for (letter of str) {
    console.log(letter);
}
const map = new Map();
map.set('name', 'Dev Ode')
map.set('age', 30)

for (const [key, value] of map) {
    console.log(key, value);
}
