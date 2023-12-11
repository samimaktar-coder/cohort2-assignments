const fs = require('fs');

let text='This is written by fs. I am Batman'

fs.writeFile('batman.txt', text, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File written successfully.')
    }
})