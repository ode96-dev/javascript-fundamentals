const PERSON = {
    firstName: 'Dev',
    lastName: 'Ode',
    profession: 'Programmer',
    age: 2023 - 1942,
    friends: ['Sam', 'JJ', 'Mo']
}

console.log(PERSON);

//getting objects

//1 - using the dot(.) notation, real property name is used
console.log(PERSON.firstName);

//2 - using the bracket([]) notation, computed property name can be used
console.log(PERSON['profession']);
const nameKey = 'Name'
console.log(PERSON['first' + nameKey]);

//adding properties
PERSON.friends.push('Ode')
console.log(PERSON);
PERSON.location = 'Worldwide'
console.log(PERSON);
PERSON['github'] = '@github.com/me'
console.log(PERSON);