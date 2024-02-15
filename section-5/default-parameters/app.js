"use strict";

const bookings = []
const createBooking = function (flightNumber, numPassengers = 1, price = 400.56) {
    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);

    bookings.push(booking)
}
createBooking('A342') //will return default values
createBooking('A342', 120, 300) // values are mapped to the position of the parameters/arguments (flight number, number of passengers, price
// incase you need to skip a default parameter/argument
createBooking('A342', 120, undefined)