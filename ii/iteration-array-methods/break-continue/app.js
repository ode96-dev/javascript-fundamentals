//break - allows to break out of the loop
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('breaking out of the loop');
        break
    }
    console.log(i);
}

//continue - skip rest of code in current iteration and continue loop
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('skipping 13...');
        continue
    }
    console.log(i);
}