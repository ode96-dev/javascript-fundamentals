/**
 * Falsy Values:
 * -false
 * -0
 * - empty string
 * - undefined
 * - NaN
*/

/**
 * Truthy Values:
 * -filled string - with space or values
 * -true
 * - empty array -> []
 * empty object -> {}
 * - empty function -> ()=>{...}
*/

let x;

//false
x = false;
if (x) {
    console.log('this is truthy');
} else {
    console.log('this is falsy');
}

// checking for empty arrays
const posts = ['post one', 'post two'];

if (!posts.length > 0) {
    console.log('no posts to list');
} else {
    console.log('list posts');
}

//checking for empty objects
const user = {
    name: 'Dev Ode'
}

if (Object.keys(user).length > 0) {
    console.log('list user');
} else {
    console.log('no user');
}
