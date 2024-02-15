/**
 * Object Oriented Programming
 *  - is a programming paradigm based on the concepts of objects
 *  - objects used to model(describe) real-world or abstract features
 *  - objects may container data (props) and code (methods)
 *  - objects are self-contained pieces/blocks of code
 * - developed to primarily organize code
 *
 * FUNDAMENTAL OOP PRINCIPLES
 * 1. Abstraction
 * - ignore or hide details that do not matter.
 * - this will allow us to get an overview of the aspect we are implementing
 * 2. Encapsulation
 * - keep some properties and methods private inside the class.
 * - they will not be accessible outside of the class.
 * - some methods can be exposed as a public interface (API)
 * 3.Inheritance
 * - parent and child concepts
 * - makes all props and methods of a certain class available to a child class
 * - this will form a hierarchy relationship between classes
 * - the reuse logic is put in play***
 * 4. Polymorphism
 *  - a child can overwrite a method that it inherited from a parent class.
 *
 * - in classes, objects (instances) are instantiated from a class which functions are like a blueprint
 *
  */

//constructor functions
class Person {
    constructor(firstName, birthYear) {
        console.log(this); //1. empty object
        this.firstName = firstName;
        this.birthYear = birthYear;

    }
    greet() {
        console.log(`hey ${this.firstName}`);
    }
}
//the only difference between regular and constructor functions is that the constructor function is called by "new"
//"new" operator:
//1. a new empty object "{}" is created
//2. function is called, "this = {}"
//3. {} linked to prototype
//4. object created in 1. returned

const dev = new Person('Dev', '1950')
const jonas = new Person('Jonah', '2024',)
console.log(dev);
console.log(jonas);

/* Prototypes */
Person.prototype.calcAge = function () {
    console.log(` ${2030 - this.birthYear}`);
}
console.log(jonas.calcAge());

console.log(jonas.__proto__ === Person.prototype);

jonas.greet()

//1. classes are not hoisted
//2. classes are first-class citizens
//3. classes are executed in strict mode

/* TODO: setters and getters, functions that get and set values. Useful for data validation */
const account = {
    owner: 'dev',
    movements: [200, 2000, 20000, 200000, 454000000],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(movement) {
        return this.movements.push(movement)
    }
};

console.log(account.latest);

/* inheritance between classes */
// class Student {
// constructor(firstName, birthYear, course) {
//     //this is a duplicate of Person
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;

//     //Calls a method of an object, substituting another object for the current object.
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }
// }
class Student extends Person {
    constructor(firstName, birthYear, courseName) {
        //always needs to happen first
        super(firstName, birthYear); //passing arguments of the constructor of the parent class
        this.courseName = courseName;

    }
}

const mike = new Student('mike', 2023, 'computer science');
console.log(mike);