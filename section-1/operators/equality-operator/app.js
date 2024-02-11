const age = 19;

//=== strict, does not provide type coercion. true is if both sides are the same
if (age === 18) console.log('you just became an adult');
console.log(18 === 18, 18 === 19, '18' === 18);

//== loose, performs type coercion
if (age == 18) console.log('you just became an adult');
console.log(18 == 18, 18 == 19, '18' == 18);
