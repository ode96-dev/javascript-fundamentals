//
const rest = new Map()
rest.set('name', 'Classino Italiano')
rest.set(1, 'Lison, Portugal')
rest.set(2, 'Roma, Italy')

//setting can be chained
rest.set('Approved', 'Has been approved in the county').set('Established', 1997)
console.log(rest);

//to retrieve value, use get
console.log(rest.get('Approved'));

//methods available in maps
console.log(rest.has('Approved'));
console.log(rest.delete(2));
console.log(rest);
console.log(rest.size);


//creating a map
const question = new Map([
    ['question', 'What programming language are you learning?'],
    [1, 'C'],
    [2, 'JavaScript'],
    [3, 'Java'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again!']
]);
console.log(question);

//iterations in maps
for (const [key, values] of question) {
    if (typeof key === 'number') {
        console.log(`answer ${key}:${values}`);
    }
}
console.log([...question.entries()]);
console.log([...question.keys()]);

