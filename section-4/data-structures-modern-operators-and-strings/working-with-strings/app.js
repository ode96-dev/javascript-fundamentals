const airline = 'TAP Air Portugal';

//get length of string
console.log(airline.length);

//get positions in string
console.log(airline[4]);

//methods
//case sensitive, useful in extracting parts of a string (use of slice)
console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));
//taking account the index of 'P'
console.log(airline.slice(8));//substring
console.log(airline.slice(4, 16)); //start of, and end of target string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, -1) + 1);

//practice 1
const checkMiddleSeat = function (seat) {
    //say B and E are middle seats
    const getSeat = seat.slice(-1) === 'E' || seat.slice(-1) === 'B' ? console.log(`you have got the middle seat!`) : console.log(`you did not get a middle seat!`)
    console.log(getSeat);

}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('7E')

//changing case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//comparison
const email = 'dev@io.com'
const loginEmail = 'd@io.com'
const loginEmail2 = ' dev@io.com '
console.log(email === loginEmail ? 'Logged in successfully' : 'Failed to login');
//trim removes the white spaces from login email 2
console.log(email === loginEmail2.trim() ? 'Logged in successfully' : 'Failed to login');

//replacing
const priceGB = '200,45￡'
//chaining comes handy!
const priceUS = priceGB.replace('￡', '$').replace(',', '.').replace('45', '75')
const priceUS2 = priceGB.replaceAll(priceGB, '300$')
console.log(priceUS);
console.log(priceUS2);

// checking a String
console.log(airline.includes('TAP')); //case sensitive
console.log(airline.startsWith('TA')); //case sensitive
console.log(airline.endsWith('gal')); //case sensitive

//practice 2
const checkBag = function (items) {
    //check eligibility of bag to be checked
    const luggage = items.toLowerCase();
    const eligibilityCheck = luggage.includes('knife') || luggage.includes('gun') ? 'Check bag' : 'Let the passenger board plane'
    console.log(eligibilityCheck);
}
checkBag('I have a laptop, and pocket knife.')
checkBag('I have clothes and snacks.')
checkBag('Got snacks and a gun for protection.')

//split - Split a string into substrings using the specified separator and return them as an array.
console.log('a+very+good+morning'.split('+'));
console.log('Dev Ode'.split(' '));
//join - Adds all the elements of an "array" into a string, separated by the specified separator string.
const firstName = 'Dev'
const lastName = 'Ode'
console.log([firstName, lastName].join(' '));

//padding
const message = 'go to gate A'
console.log(message.padStart(30, '+'));
console.log(message.padEnd(30, '+'));
//use case
const maskCreditCard = function (number) {
    const cardNumber = number.toString()
    const last = cardNumber.slice(-4)
    return last.padStart(cardNumber.length, '*')
}
console.log(maskCreditCard(3232214131313122));

//repeat
const announcement = 'Bad weather... All departures delayed';
console.log(announcement.repeat(5));
