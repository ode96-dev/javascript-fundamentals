/** 
 * 1. Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
 * 2. The input will come from a textarea inserted into the DOM (see code below to insert the elements), 
 * and conversion will happen when the button is pressed. 
 * Test data (pasted to textarea, including spaces): underscore_case first_name Some_Variable calculate_AGE delayed_departure Should produce this output:
 * (5 separate console.log outputs): 
 * - underscoreCase ✅ 
 * - firstName ✅✅ 
 * - someVariable ✅✅✅
 * - calculateAge ✅✅✅✅
 * - delayedDeparture ✅✅✅✅✅ 
 * Hints: 1) Remember which character defines a new line in the textarea 😉 
 * 3) The solution only needs to work for a variable made out of 2 words, like a_b 3) 
 * Start without worrying about the ✅. 
 * Tackle that only after you have the variable name conversion working 😉 4) This challenge is difficult on purpose, so start watching the solution in case you're stuck.  */

const btnSubmit = document.getElementById('submit-strings')

//text area insertion into the DOM
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [firstWord, secondWord] = row.toLowerCase().trim().split('_');
        const output = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
})