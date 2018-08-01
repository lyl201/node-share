

// share04.js
const fs = require('fs')

const rs = fs.createReadStream('./1.txt')

const ws = fs.createWriteStream('./5.txt')

rs.pipe(process.stdout)

rs.pipe(ws)


