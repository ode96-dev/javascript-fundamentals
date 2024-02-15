//not created manually/explicitly used
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++
        console.log(`${passengerCount} passengers`);
    }
}

//secureBooking fn is global scope
//within the secureBooking fn execution context, passengerCount = 0
// a new function is returned,
//will be stored in booker
//once secureBooking fn's is executed (passengerCount = 0), it will be removed from the call stack

const booker = secureBooking(); //closure, booker has access to passengerCount in secureBooking()
booker()
booker()
booker();
booker()