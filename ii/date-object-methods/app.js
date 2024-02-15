let x;

let d = new Date()
x = d.getTime()
x = d.getFullYear()
x = d.getMonth() + 1
x = d.getHours()
x = d.getDay()
x = Intl.DateTimeFormat('en-us').format(d)
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
})


console.log(x);