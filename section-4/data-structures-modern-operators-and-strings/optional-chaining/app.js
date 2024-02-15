const days = ['Tue', 'Wed', 'Thu']
const openingHours = {
    [days[0]]: {
        open: 0,
        close: 20,
    },
    [days[1]]: {
        open: 9,
        close: 17,
    },
    [days[2]]: {
        open: 3,
        close: 12,
    },
}
const working = {
    name: 'Dev Ode',
    age: 32,
    openingHours
}


// optional chaining
for (const day of days) {
    const workDay = working.openingHours[day]?.open ?? 'closed'

    console.log(`on ${day}, I am going to drink coffee. We will open at ${workDay}`);
}

//using in methods
// plays.min.reOrder?.(0, 1) ?? 'Method does not exist'

//using in arrays
// const user = users[0]?.name ?? 'user array empty'