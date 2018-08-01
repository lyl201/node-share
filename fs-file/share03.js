
// share03.js
const fs = require('fs')

const rs = fs.createReadStream('./1.txt')

const ws = fs.createWriteStream('./4.txt')

rs.on('data', (chunk) => {

    if (ws.write(chunk) === false) {
        rs.pause()
    }
})

rs.on('end', () => {
    ws.end()
})

ws.on('drain', () => {
    rs.resume()
})

