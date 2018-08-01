
// share01.js
const fs = require('fs')

try {

    const data = fs.readFileSync('xx.txt', 'utf-8')

} catch (err) {

    console.log('文件不存在')

}
