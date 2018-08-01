
// share04.js
const fs = require('fs')

fs.readFile('./xx.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
})

console.log('end')

