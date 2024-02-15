const now = new Date();
console.log(now);
console.log(new Date('December 24, 2023'));
console.log(new Date(2023, 12, 24));

//do not break you back with these, more packages in the community to deal with dates
//intl helps to support different languages all over the world
const now2 = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now2));
console.log(new Intl.DateTimeFormat('ar-AB').format(now2));