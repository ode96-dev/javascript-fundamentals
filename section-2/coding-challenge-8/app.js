/**
 * 1. create an array 'bills' containing all 10 test bill values
 * 2. create  empty arrays for the 'tips' and the 'totals'
 * use a for loop to calculate the calculations
 * TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
 *  **/

console.log('\n================initialization: BILLS, TIPS, TOTALBILL================');

const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const TIPS = []
const TOTALBILL = []

console.log('\n================calculate tip================');
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

console.log('\n================calculate total bill================');
for (let bill = 0; bill < BILLS.length; bill++) {
    const calculatedTip = calcTip(BILLS[bill]);
    TIPS.push(calculatedTip)
    const calculatedTotal = BILLS[bill] + TIPS[bill]
    TOTALBILL.push(calculatedTotal)
    console.log(`\n=====\nBill ${bill + 1}: ${BILLS[bill]}`);

    console.log(`+Calculated Tips: ${calculatedTip}`);
    console.log(`+Calculated Totals: ${calculatedTotal}`);
}