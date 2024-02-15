const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'gree',
    color4: 'orange',
}

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

//through arrays
const colorArr = [
    'red',
    'blue',
    'gree',
    'orange',
]
for (const key in colorArr) {
    console.log(colorArr[key]);
}