
const owners = ['dev', 'Modric', 'Arch', 'Zichek']

//sorting - Sorts an array in place. This method mutates the array and returns a reference to the same array.
//sorts in string format
console.log(owners.sort()); //automatically A-Z

//numbers
const ownersNum = [1, 10, 100, -1]
// ownersNum.sort((a, b) => { //for ascending order
//     if (a > b) return 1;
//     if (b > a) return -1;
// });
ownersNum.sort((a, b) => a - b)//ascending
console.log(ownersNum);
ownersNum.sort((a, b) => b - a)//descending
console.log(ownersNum);

