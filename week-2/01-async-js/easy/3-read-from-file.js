const fs = require('fs');

console.log('First Console');

fs.readFile('note.txt', 'utf-8', (err, data) => {
    console.log(data);
});

let a = 0;
for (let i = 0; i < 100000; i++) {
    a += i;
}

console.log(a);

console.log('Last Console');
