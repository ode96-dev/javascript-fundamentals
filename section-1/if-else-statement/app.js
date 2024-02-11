let age = 17

if (age >= 18) {
    console.log('You can enroll for driving classes.');
} else {
    let yearsLeft = 18 - age;
    console.log(`You cannot enroll for driving classes. Hold on for ${yearsLeft} more years`);
}