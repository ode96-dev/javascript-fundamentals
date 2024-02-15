//functions are another "type" of objects in js
//they are treated as first class citizens
//giving us the understanding that functions are simply values

/** 
 * FIRST-CLASS FUNCTIONS, not in practice
 * HIGHER-ORDER FUNCTIONS, common in practice
 *  */
// storing functions
const func1 = (a, b) => a + b
const counter = {
    value: 23,
    func2() {
        this.value
    }
}

// passing functions as arguments to other functions
const func3 = () => console.log('Dev Ode');
//addEventListener is an example of higher order function in this case
//it calls the callback function, func3
btnClose.addEventListener('click', func3)

//return function FROM another function
//here, counting is a higher order function
function counting() {
    //returned function
    return func1(3, 2)
}
//call methods on functions
counter.bind(somethingObject)