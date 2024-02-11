// A. Dev has a driver's license
// B. Dev has good vision

const HAS_DRIVERS_LICENSE = true; //A
const HAS_GOOD_VISION = false; //B

// when A and '&& - logical operator' B is true, execution
console.log('Can drive, && ' + HAS_DRIVERS_LICENSE && HAS_GOOD_VISION);

// when, either A or '&& - logical operator' B is true, execution
console.log('Can drive, || ' + HAS_DRIVERS_LICENSE || HAS_GOOD_VISION);

// 'not' inverts true/false values
console.log('Can drive, ! ' + HAS_DRIVERS_LICENSE || !HAS_GOOD_VISION);


