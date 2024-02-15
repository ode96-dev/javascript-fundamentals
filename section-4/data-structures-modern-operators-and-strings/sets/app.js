const foodSet = new Set(['Pasta', 'Pizza', 'Yoghurt', 'Pizza', 'Pasta'])
console.log(foodSet);
//methods
console.log(foodSet.has('Pasta'));
console.log(foodSet.add('Garlic Bread'));
console.log(foodSet.delete('Yoghurt'));
console.log(foodSet);

//retrieving values from Sets
//set has no indeces
//all values are unique
//need is to check if values exist
//use an array if need to access values

//looping over sets
for (const food of foodSet) {
    console.log(food);
}

//common use case is to remove duplicate values from arrays
const staff = ['Waiter', 'Manager', 'Waiter', 'Chef']

const staffUnique = [...new Set(staff)]

console.log(staffUnique);
