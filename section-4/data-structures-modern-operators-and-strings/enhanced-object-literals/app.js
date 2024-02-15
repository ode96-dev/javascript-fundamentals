const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const portfolio = {
    website1: 'http://github.com/',
    website2: 'http://dev.com/',
}
const programmer = {
    name: 'Dev Ode',
    location: 'orel lorem port della port',

    //enhancement1 - adding objects
    portfolio,
    //methods:
    age(presentYear, birthYear) {
        return presentYear - birthYear
    },
    //computing property names
    [workDays[3]]: 'do something'

}

console.log(programmer);
console.log(programmer.age(2023, 2000));