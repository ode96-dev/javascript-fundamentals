console.log(0 ?? 'Ode' ?? false);

//nullish coalescing operator takes into account null values: null and undefined
// nullish values short circuits the operation
console.log(null ?? 'Ode' ?? false);
console.log(null ?? undefined ?? false);