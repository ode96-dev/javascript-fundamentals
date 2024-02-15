//immediately invoked function expressions - avoids global scope pollution
(function (name) {
    console.log(`hello ${name}`);
})('Dev Ode')