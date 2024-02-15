const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, passenger) {
        console.log(`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passenger })
    }

}
console.log(lufthansa);
lufthansa.book(239, 'Dev Ode')
lufthansa.book(300, 'Jf Ode')
console.log(lufthansa);

const euroWings = {
    airline: 'Euro Wings',
    iataCode: 'EW',
    bookings: [],
}

//1. Call method - Calls a method of an object, substituting another object for the current object.
const book = lufthansa.book
//will not work
// book('123', 'Baby Dev')
book.call(euroWings, '400', 'Dev Dev')
book.call(euroWings, '123', 'Baby Dev')
console.log(euroWings);
book.call(lufthansa, '123', 'Baby Dev 2')
console.log(lufthansa);

// 2. Apply method - Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
const flightData = [4021, 'Baby Dev 3']
book.apply(euroWings, flightData)
console.log(euroWings);

//preferring call to apply
book.call(lufthansa, ...flightData)
console.log(lufthansa);

// 3. Bind method
const bookEw = book.bind(euroWings)
const bookLH = book.bind(lufthansa)
bookEw(2311, 'Baby Dev 4')
bookLH(900, 'Cousin Dev 1')
console.log(euroWings);
console.log(lufthansa);

//using specifics
//here, bind will be used for an exact flight number
//the only input/argument needed will be the passenger name
const bookEW400 = book.bind(euroWings, 400)
bookEW400('Cousin Dev 2')
bookEW400('Cousin Dev 3')
console.log(euroWings);


