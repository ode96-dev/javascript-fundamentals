//will be our callback function
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

//will be our callback function
const upperFirstWord = function (str) {
    const [firstWord, ...others] = str.split(' ');
    return [firstWord.toUpperCase(), ...others].join(' ')
}

//higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by (function name): ${fn.name}`);
}

transformer('Learning JavaScript the right way', upperFirstWord);
transformer('Prog RAMmeR', oneWord);