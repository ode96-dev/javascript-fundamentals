//TODO:Immediately Invoked Function Expressions
const runOnce = () => console.log('this will not run again');
runOnce();

(function () {
    console.log('This will never run again');
})()