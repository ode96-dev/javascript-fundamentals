/** 
LOGICAL OPERATORS:
1. can use any data type
2. can return any data type
3. can be used for short circuiting - if 1st value is truthy value, it will be prioritized and evaluated
 */

// short-circuiting in action
console.log(`\n========||, short-circuits when the first value is truthy================================`);
console.log(3 || 'Dev');
console.log(0 || 'Ode');
console.log(undefined || null);
//general 
console.log(undefined || 0 || '' || 'Greetings' || 23 || null);
console.log(`\n========&&, short-circuits when the first value is falsy================================`);
console.log(3 && 'Dev');
console.log(0 && 'Ode');
console.log(undefined && 0 && '' && 'Greetings' && 23 && null);
console.log('Greetings' && null && 23);

