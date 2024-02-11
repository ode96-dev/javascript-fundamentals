/**
 * comparing mark and john's BMIs
 * BMI = mass/height **2
 * 1. for each, create an object with properties full name, mass and height.
 * MARK MILLER, JOHN SMITH
 * 2. create calcBMI method on each object to calc BMI
 * store the BMI value to a prop and also return it from the method
 * 3. Log to the console who has the higher BMI
 * TEST DATA: Mark - 78kg, 1.69m tall, John -  92kg, 1.95m tall
 */

console.log('\n==============Mark Miller==================');
const PERSON1 = {
    fullName: 'Mark Miller',
    mass: 79,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
console.log(`\nThe first person is ${PERSON1.fullName}. He has ${PERSON1.mass} kgs and is ${PERSON1.height} m tall`);

console.log('\n==============John Smith==================');
const PERSON2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
console.log(`\nThe first person is ${PERSON2.fullName}. He has ${PERSON2.mass} kgs and is ${PERSON2.height} m tall`);

console.log('\n==============Call functions, calcBMI==================');
PERSON1.calcBMI()
PERSON2.calcBMI()
console.log('\n==============Compare BMIs==================');

const compareBMIs = () => {
    if (PERSON1.BMI > PERSON2.BMI) {
        console.log(`\n ${PERSON1.fullName}'s BMI (${PERSON1.BMI}) is higher than ${PERSON2.fullName}'s BMI (${PERSON2.BMI})`);
    } else if (PERSON2.BMI > PERSON1.BMI) {
        console.log(`\n ${PERSON2.fullName}'s BMI (${PERSON2.BMI}) is higher than ${PERSON1.fullName}'s BMI (${PERSON1.BMI})`);
    } else {
        console.log('Oops!');
    }
}

compareBMIs()

