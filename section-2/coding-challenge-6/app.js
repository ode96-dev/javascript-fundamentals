/**
 * building his tip calc. using same rules as before
 * 0.15 for the bill if the bill value is btn 50 and 300 and if value is different, 0.2
 * 
 * write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
 * calculated based on the rules. 
 * test using a bull value of 100.
 * 
 * create an array called 'bill' containing the test data below
 * create an array called 'tips' containing the tip value for each bill calculated from the function you created before
 * create an array 'total' containing the total values for the bill + tip
 * 
 * TEST DATA: 125, 155, 44
 * **/

console.log('\n================INITIALIZE BILLS================');
const BILLS = [125, 555, 44];
console.log(`\n Bills captured include: ${BILLS}`);

console.log('\n================calculate tip================');
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

console.log('\n================get tips================');
const tips = [];
tips.push(calcTip(BILLS[0]), calcTip(BILLS[1]), calcTip(BILLS[2]))

console.log('\nBelow are the list of tips in the system:');
console.log(tips);

console.log('\n================get total billed================');
const calcTotalBilled = (bill, tip) => bill + tip
const totalBilled = [];
totalBilled.push(calcTotalBilled(BILLS[0], tips[0]), calcTotalBilled(BILLS[1], tips[1]), calcTotalBilled(BILLS[2], tips[2]))

console.log('\nBelow is the total billed amounts:');
console.log(totalBilled)