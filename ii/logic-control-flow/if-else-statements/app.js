const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();
console.log(hour);
if (hour < 12) {
    console.log('Good Morning');
    if (hour === 4 || hour === 6) {
        console.log('wake up');
    }
} else if (hour < 18) {
    console.log('good afternoon');
} else {
    console.log('Good Night');
}