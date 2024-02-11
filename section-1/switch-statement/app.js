const DAY_OF_THE_WEEK = 'Tuesday';

switch (DAY_OF_THE_WEEK) {
    case 'Monday':
        console.log(`===============MONDAY=================`);
        console.log(`Plan course structure`);
        console.log(`Go to coding meet up`);
        break; // without break, code will continue to execute.
    case 'Tuesday':
        console.log(`===============TUESDAY=================`);
        console.log(`Prepare theory videos`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log(`===============WEDNESDAY & THURSDAY=================`);
        console.log('Write a letter to lover.');
        break;
    case 'Friday':
    case 'Saturday':
        console.log(`===============FRIDAY, SATURDAY=================`);
        console.log('Rest.');
        break;
    case 'Sunday':
        console.log(`===============SUNDAY=================`);
        console.log('Meet client.');
    default:
        console.log(`===============NOT A VALID DAY=================`);
        console.log('not a valid day of the weak');

}