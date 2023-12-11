const fs = require('fs');


fs.readFile('note.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const cleanedData = data.replace(/\s+/g, ' ');

    fs.writeFile('note.txt', cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }

        console.log('File successfully cleaned and written back.');
    });
});