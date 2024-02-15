const age = 27
//using an if statement
if (age >= 18) {
    console.log(`you are ${age} years old. YOU CAN VOTE`);
} else {
    console.log(`you are ${age} years old. YOU CANNOT VOTE`);
}

//using a ternary operator- has 3 parts: the condition, if true and if false
age >= 18 ? console.log(`you are ${age} years old. YOU CAN VOTE (ternary op.)`) : console.log(`you are ${age} years old. YOU CAN VOTE (ternary op.)`)

//assigning a conditional value to a variable
const canVote = age >= 18 ? 'you can vote' : 'you cannot vote'
console.log(canVote);

//multiple statements
const auth = true;
// let redirect;

// if (auth) {
//     alert('welcome to the dashboard')
//     redirect = '/'
// } else {
//     alert('access denied')
//     redirect = '/login'
// }

const redirect = auth ? (alert('welcome to the dashboard', '/dashboard')) : (alert('welcome to the dashboard', '/login'))
console.log(redirect);


