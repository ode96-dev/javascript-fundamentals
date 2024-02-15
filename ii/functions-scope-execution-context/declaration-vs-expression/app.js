//fn: function declarative
function addDollarSign(value) {
    return '$' + value
}
console.log(addDollarSign(100));

//function expression
const addPlus = function (value) {
    return '+' + value
}
console.log(addPlus(200));