/** 
 * structure:
 * for([initialExpression]; [conditionalExpression]; [incrementExpression]){statement}
 * - initialExpression->initializes a variable or counter
 *  - conditionalExpression->condition that the loop will continue to run as long as it is met or until the condition is false
 *  - incrementExpression->will be executed after each iteration of the loop. usually, increments the variable 
 *  - statement->will be executed each time the loop is run
 * can be nested
 **/

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

//loops through an array
const stringing = ['Dev', 'Ode', 'Creating', 'Great', 'Apps']
for (let i = 0; i < stringing.length; i++) {
    console.log(i);
}