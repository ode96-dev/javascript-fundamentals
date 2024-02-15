const restaurant1 = {
    name: 'Dissociate',
    numGuests: 20
}

//for falsy value
// const restaurant1 = {
//     name: 'Dissociate',
//     numGuests: 0
// }

//for nullish value
// const restaurant1 = {
//     name: 'Dissociate',
//     numGuests: null
// }

const restaurant2 = {
    name: 'Piaaza',
    chef: 'Govanie Medici'
}

// restaurant1.numGuests = restaurant1.numGuests || 10
// restaurant2.numGuests = restaurant2.numGuests || 10

// console.log(restaurant1);
// console.log(restaurant2);

//1. OR assignment operator - assigns value to variable 
//is that variable is presently falsy
// restaurant1.numGuests ||= 15
// restaurant2.numGuests ||= 30
// console.log(restaurant1);
// console.log(restaurant2);

//3. nullish assignment operator - will assign a value to variable if that exact variable is nullish
// restaurant1.numGuests ??= 15
// restaurant2.numGuests ??= 30
// console.log(restaurant1);
// console.log(restaurant2);

//3. AND assignment operator
restaurant1.chef &&= 'Zalinho'
restaurant2.chef &&= 'Paileto'
console.log(restaurant1);
console.log(restaurant2);


