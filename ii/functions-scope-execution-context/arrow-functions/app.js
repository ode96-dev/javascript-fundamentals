const add = (a, b) => {
    return a + b;
}
//you can make it shorter
const minus = (a, b) => a - b;

//you can abandon () if you have a single parameter
const age = developerAgeIndex => 30 - developerAgeIndex;

//returning an object - surround fn with curly braces
const createObj = () => ({
    name: 'Dev Ode'
})

console.log(createObj());