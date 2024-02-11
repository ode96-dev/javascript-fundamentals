const PERSON = {
    firstName: 'Dev',
    lastName: 'Ode',
    profession: 'Programmer',
    birthYear: 1942,
    friends: ['Sam', 'JJ', 'Mo'],
    isAdmin: true,
    // any function attached to an object is called a method
    // calcAge: (birthYear) => 2023 - birthYear
    // calcAge: () => 2023 - this.birthYear
    calcAge: function () {
        this.age = 2023 - this.birthYear
        return this.age;
    }
}

// //using dot notation
// console.log(PERSON.calcAge(PERSON.birthYear));

// //using bracket notation
// console.log(PERSON['calcAge'](PERSON.birthYear));

console.log(PERSON.calcAge());
console.log(PERSON.age);